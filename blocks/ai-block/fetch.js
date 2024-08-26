import React from 'react';

class FetchOpenAIResponse extends React.Component  {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <p dangerouslySetInnerHTML={{__html: this.props.answer}} /> 
      </div>
    )
  }
}

export default FetchOpenAIResponse;