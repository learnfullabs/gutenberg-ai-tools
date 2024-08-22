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
    fetch('/session/token')
    .then((response) => response.text())
    .then(csrfToken => {
        setState({ token: csrfToken });
    });

    setAnswer(title + state.token);
    setAttributes({ openai_answer: title + state.token })
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
          placeholder={t("Block Title")}
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