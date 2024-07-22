/**
 * Custom Gutenberg component: AI Block.
 * It uses the same edit component as the card block.
 * 
 * @see templates/gutenberg-ai-tools--ai-block.html.twig
 */

import metadata from "./block.json";
import Edit from "../card/edit";
import Save from "./save";
import IconCard from "./icon";
import "./style.scss";

const AIBlock = {
  ...metadata,
  icon: IconCard,
  edit: Edit,
  save: Save,
};

export default AIBlock;