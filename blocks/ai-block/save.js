import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";
import Fetch from "./fetch"

function Save({ attributes, postId = 3 }) {
  const { title, openai_prompt } = attributes;

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <div {...useBlockProps.save()}>
      <div>
        <h2>{title}</h2>
        <div>
          <div>Question: {openai_prompt}</div>
          <InnerBlocks.Content />
        </div>
      </div>
    </div>
  );
};

export default Save;