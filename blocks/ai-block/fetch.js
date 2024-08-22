import React from 'react';

class FetchOpenAIResponse extends React.Component  {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <p>{this.props.question}</p>
        <p>{this.props.answer}</p> 
      </div>
    )
  }
}

export default FetchOpenAIResponse;