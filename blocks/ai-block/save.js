import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";
import FetchOpenAIResponse  from "./fetch"

function Save({ attributes }) {
  const { title, metadata, openai_answer } = attributes;

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <div {...useBlockProps.save()}>
      <div>
        <h2>{title}</h2>
        <div>
          <FetchOpenAIResponse question={title} answer={openai_answer} />
          <InnerBlocks.Content />
        </div>
      </div>
    </div>
  );
};

export default Save;