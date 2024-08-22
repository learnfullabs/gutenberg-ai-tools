import React, { useState, useEffect } from 'react'; 

import {
    PanelBody,
    PanelRow,
    TextControl,
    TextareaControl,
    Toolbar,
    Button,
} from "@wordpress/components";

import {
  useBlockProps,
  BlockControls,
  InnerBlocks,
  InspectorControls,
  RichText,
  MediaPlaceholder,
} from "@wordpress/block-editor";

// drupal import is set as external in webpack.config.js
import { t } from "drupal";
import FetchOpenAIResponse from "./fetch";
// i18n package could be also used. It is a wrapper around Drupal.t.
//   import { __ } from "@wordpress/i18n";
//   __('Text to be translated');

const ALLOWED_BLOCKS = ["core/heading", "core/paragraph", "core/quote"];

function Edit({ attributes, setAttributes }) {
  const { title, metadata, openai_answer } = attributes;
  const [answer, setAnswer] = useState('');
  const [state, setState] = useState({token: ''})

  const handleBlur = () => {
    let data = {
      openai_prompt: title,
    };

    fetch('/session/token')
    .then(response => {
      const csrfToken = response.text();
      console.log(csrfToken);
      return csrfToken;
    }).then((csrfToken) => {
      fetch("/gutenberg-ai-tools/openai-rest?_format=json", {
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
          "X-Csrf-Token": csrfToken,
        },
        method: "POST"
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('HTTP error ' + response.status);
        }
        
        return response.text();
    }).then(data => {
      setState({ token: data });
      console.log(state.token);
      setAnswer(state.token);
      setAttributes({ openai_answer: state.token });
    })
    .catch(error => console.error(error));
    
    });
  }

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <div {...useBlockProps()}>
      <BlockControls>
      </BlockControls>
      <InspectorControls>
        <PanelBody title={ t('Block settings') } initialOpen>
          <PanelRow>
          </PanelRow>
          <PanelRow>
            <TextareaControl
              label={t('Metadata')}
              help={t('Block Metadata')}
              value={metadata}
              onChange={(value) => setAttributes({ metadata: value })}
            />
          </PanelRow>
          <PanelRow>
            <TextareaControl
              label={t('OpenAI Answer')}
              help={t('OpenAI Answer')}
              value={openai_answer}
            />
          </PanelRow>
        </PanelBody>
      </InspectorControls>
      <div>
        <RichText
          tagName="h2"
          placeholder={t("Start typing your question here, then hit tab:")}
          value={title}
          onChange={(value) => setAttributes({ title: value })}
          onBlur={handleBlur}
        />
        <div>
          <FetchOpenAIResponse question={title} answer={answer} />
          <InnerBlocks allowedBlocks={ALLOWED_BLOCKS} />
        </div>
      </div>
    </div>
  );
};

export default Edit;