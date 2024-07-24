import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";

function Save({ attributes }) {
  const { title } = attributes;

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <div {...useBlockProps.save()}>
      <div>
        <h2>{title}</h2>
        <div>
          <InnerBlocks.Content />
        </div>
      </div>
    </div>
  );
}

export default Save;