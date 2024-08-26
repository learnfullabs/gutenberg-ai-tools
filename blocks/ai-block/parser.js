/* Utility class */

// make a new parser
const parser = new DOMParser();

function unicodeToChar(text) {
  return text.replace(/\\u[\dA-F]{4}/gi, 
    function (match) {
        return String.fromCharCode(parseInt(match.replace(/\\u/g, ''), 16));
    });
}

export function parseOpenAIResponse(AIResponse) {
  let parsed_data = AIResponse.substring(1, AIResponse.length - 1);
  parsed_data = unicodeToChar(parsed_data.replace(/\\n/g, "<br />"));

  return parsed_data;
}