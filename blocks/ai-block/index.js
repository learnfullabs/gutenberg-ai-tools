import metadata from "./block.json";
import openai_answer from "./block.json";
import Edit from "./edit";
import Save from "./save";
import IconCard from "./icon";
import FetchOpenAIResponse from "./fetch";
import "./style.scss";
// import deprecated from "./deprecated";

const AIBlock = {
  ...metadata,
  ...openai_answer,
  icon: IconCard,
  edit: Edit,
  save: Save,
  fetch: FetchOpenAIResponse,
  // deprecated,
};

export default AIBlock;