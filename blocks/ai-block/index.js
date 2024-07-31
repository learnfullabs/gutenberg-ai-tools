import openai_prompt from "./block.json";
import Edit from "./edit";
import Save from "./save";
import IconCard from "./icon";
import Fetch from "./fetch";
import "./style.scss";
// import deprecated from "./deprecated";

const AIBlock = {
  ...openai_prompt,
  icon: IconCard,
  edit: Edit,
  save: Save,
  fetch: Fetch
  // deprecated,
};

export default AIBlock;