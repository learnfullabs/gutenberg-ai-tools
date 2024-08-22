import React from 'react';
import { useState, useEffect } from '@wordpress/element';

/* const FetchOpenAIResponse  = (props) => {
  const [photos, setPhotos] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos/4')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setPhotos(data);
      });
  }, []);
  return (
    <div>
      <p>Question: {props.question}</p>
      <p>Answer:  {props.answer}</p>  
    </div>
  );
};

export default FetchOpenAIResponse; */

/* const FetchOpenAIResponse = (props) => {
  const [photos, setPhotos] = useState([]);

  return (
    <div>
      <p>Question {props.question}</p>
      <p>Answer:  {props.answer}</p>  
    </div>
  );
};

export default FetchOpenAIResponse;*/

class FetchOpenAIResponse extends React.Component  {
  constructor(props) {
    super(props);
  }

  /*state = {
    token: ''
  }

  componentDidMount() {
    fetch('/session/token')
    .then((response) => response.text())
    .then(csrfToken => {
        this.setState({ token: csrfToken });
    });<p>Token: {this.state.token}</p>
  } */


  render() {
    return (
      <div>
        <p>Question: {this.props.question}</p>
        <p>Answer:  {this.props.answer}</p> 
      </div>
    )
  }
}

export default FetchOpenAIResponse; 

/* const FetchOpenAIResponse = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

   let data = {
    openai_prompt: openai_prompt,
  };

  fetch("/session/token", {
    method: "GET",
  })
  // Request was success the data is the server response
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

  useEffect(() => {
    const fetchDataForGutenberg = async () => {
      try {
        const response = await fetch(
          "/session/token"
        );

        if (!response.ok) {
          throw new Error(`HTTP error: Status ${response.status}`);
        }

        let csrfToken = await response.text();
        setData(csrfToken);
        setError(null);
      } catch (err) {
        setError(err.message);
        setData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchDataForGutenberg();
  }, []);

  return <div></div>;
};

export default FetchOpenAIResponse;*/