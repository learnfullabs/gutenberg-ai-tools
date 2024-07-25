(()=>{"use strict";var e,t={381:()=>{const e=window.wp.blocks,t=JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"gutenberg-ai-tools/ai-block","title":"AI Block","description":"A block that displays content pulled from OpenAI based on the question sent to it.","textdomain":"default","category":"design","icon":"businessman","attributes":{"title":{"type":"string","source":"text","selector":"h2"},"openai_prompt":{"type":"string"}},"supports":{"align":false,"anchor":true,"color":{"background":true,"text":true}},"styles":[{"name":"default","label":"Default","isDefault":true}],"variations":[]}'),n=window.React,o=window.wp.components,r=window.wp.blockEditor,l=Drupal,a=["core/heading","core/paragraph","core/quote"],c={...t,icon:function(){return(0,n.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,n.createElement)("path",{d:"M528 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h480c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-352 96c35.3 0 64 28.7 64 64s-28.7 64-64 64-64-28.7-64-64 28.7-64 64-64zm112 236.8c0 10.6-10 19.2-22.4 19.2H86.4C74 384 64 375.4 64 364.8v-19.2c0-31.8 30.1-57.6 67.2-57.6h5c12.3 5.1 25.7 8 39.8 8s27.6-2.9 39.8-8h5c37.1 0 67.2 25.8 67.2 57.6v19.2zM512 312c0 4.4-3.6 8-8 8H360c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16zm0-64c0 4.4-3.6 8-8 8H360c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16zm0-64c0 4.4-3.6 8-8 8H360c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16z"}))},edit:function({attributes:e,setAttributes:t}){const{title:c,openai_prompt:i}=e;return(0,n.createElement)("div",{...(0,r.useBlockProps)()},(0,n.createElement)(r.BlockControls,null),(0,n.createElement)(r.InspectorControls,null,(0,n.createElement)(o.PanelBody,{title:(0,l.t)("Block settings"),initialOpen:!0},(0,n.createElement)(o.PanelRow,null),(0,n.createElement)(o.PanelRow,null,(0,n.createElement)(o.TextareaControl,{label:(0,l.t)("OpenAI prompt"),help:(0,l.t)("Input the question for OpenAI here"),value:i,onChange:e=>t({openai_prompt:e})})))),(0,n.createElement)("div",null,(0,n.createElement)(r.RichText,{tagName:"h2",placeholder:(0,l.t)("Block Title"),value:c,onChange:e=>t({title:e})}),(0,n.createElement)("div",null,(0,n.createElement)(r.InnerBlocks,{allowedBlocks:a}))))},save:function({attributes:e}){const{title:t,openai_prompt:o}=e;return(0,n.createElement)("div",{...r.useBlockProps.save()},(0,n.createElement)("div",null,(0,n.createElement)("h2",null,t),(0,n.createElement)("div",null,o,(0,n.createElement)(r.InnerBlocks.Content,null))))}};(0,e.registerBlockType)("gutenberg-ai-tools/ai-block",c)}},n={};function o(e){var r=n[e];if(void 0!==r)return r.exports;var l=n[e]={exports:{}};return t[e](l,l.exports,o),l.exports}o.m=t,e=[],o.O=(t,n,r,l)=>{if(!n){var a=1/0;for(u=0;u<e.length;u++){for(var[n,r,l]=e[u],c=!0,i=0;i<n.length;i++)(!1&l||a>=l)&&Object.keys(o.O).every((e=>o.O[e](n[i])))?n.splice(i--,1):(c=!1,l<a&&(a=l));if(c){e.splice(u--,1);var s=r();void 0!==s&&(t=s)}}return t}l=l||0;for(var u=e.length;u>0&&e[u-1][2]>l;u--)e[u]=e[u-1];e[u]=[n,r,l]},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={617:0,232:0};o.O.j=t=>0===e[t];var t=(t,n)=>{var r,l,[a,c,i]=n,s=0;if(a.some((t=>0!==e[t]))){for(r in c)o.o(c,r)&&(o.m[r]=c[r]);if(i)var u=i(o)}for(t&&t(n);s<a.length;s++)l=a[s],o.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return o.O(u)},n=globalThis.webpackChunkgutenberg_ai_tools=globalThis.webpackChunkgutenberg_ai_tools||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var r=o.O(void 0,[232],(()=>o(381)));r=o.O(r)})();