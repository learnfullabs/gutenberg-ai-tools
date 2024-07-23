import { registerBlockType } from "@wordpress/blocks";
import AIBlock from "./ai-block";

registerBlockType("gutenberg-ai-tools/ai-block", AIBlock);
