import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";

function Save({ attributes }) {
  const { title, openai_prompt } = attributes;

  let data = {
    openai_prompt: openai_prompt,
  };

  fetch("/session/token", {
    method: "GET",
  })
  /* Request was success the data is the server response */
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
  }).then(data => renderAnswer(data))
  .catch(error => console.error(error));
  
  });

  let renderAnswer = (data) => {
    console.info("My answer is " + data);
  }

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