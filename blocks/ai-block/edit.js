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
// i18n package could be also used. It is a wrapper around Drupal.t.
//   import { __ } from "@wordpress/i18n";
//   __('Text to be translated');

const ALLOWED_BLOCKS = ["core/heading", "core/paragraph", "core/quote"];

function Edit({ attributes, setAttributes }) {
  const { title, metadata } = attributes;

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
              label={t('Metadata information')}
              help={t('Add some metadata information')}
              value={metadata}
              onChange={(value) => setAttributes({ metadata: value })}
            />
          </PanelRow>
        </PanelBody>
      </InspectorControls>
      <div>
        <RichText
          tagName="h2"
          placeholder={t("Question for OpenAI")}
          value={title}
          onChange={(value) => setAttributes({ title: value })}
        />
        <div>
          <InnerBlocks allowedBlocks={ALLOWED_BLOCKS} />
        </div>
      </div>
    </div>
  );
}

export default Edit;