(()=>{"use strict";var e,t={5:(e,t,n)=>{const r=window.wp.blocks,a=JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"gutenberg-ai-tools/ai-block","title":"AI Block","description":"A block that displays content pulled from OpenAI based on the question sent to it.","textdomain":"default","category":"design","icon":"businessman","attributes":{"title":{"type":"string","source":"text","selector":"h2"},"openai_answer":{"type":"string"},"metadata":{"type":"string"}},"supports":{"align":false,"anchor":true,"color":{"background":true,"text":true}},"styles":[{"name":"default","label":"Default","isDefault":true}],"variations":[]}'),l=window.React;var o=n.n(l);const s=window.wp.components,c=window.wp.blockEditor,i=Drupal;window.wp.element;class u extends o().Component{constructor(e){super(e)}render(){return(0,l.createElement)("div",null,(0,l.createElement)("p",null,"Question: ",this.props.question),(0,l.createElement)("p",null,"Answer:  ",this.props.answer))}}const p=u,m=["core/heading","core/paragraph","core/quote"],d={...a,...a,icon:function(){return(0,l.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,l.createElement)("path",{d:"M528 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h480c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-352 96c35.3 0 64 28.7 64 64s-28.7 64-64 64-64-28.7-64-64 28.7-64 64-64zm112 236.8c0 10.6-10 19.2-22.4 19.2H86.4C74 384 64 375.4 64 364.8v-19.2c0-31.8 30.1-57.6 67.2-57.6h5c12.3 5.1 25.7 8 39.8 8s27.6-2.9 39.8-8h5c37.1 0 67.2 25.8 67.2 57.6v19.2zM512 312c0 4.4-3.6 8-8 8H360c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16zm0-64c0 4.4-3.6 8-8 8H360c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16zm0-64c0 4.4-3.6 8-8 8H360c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16z"}))},edit:function({attributes:e,setAttributes:t}){const{title:n,metadata:r,openai_answer:a}=e,[o,u]=(0,l.useState)(""),[d,v]=(0,l.useState)({token:""});return(0,l.createElement)("div",{...(0,c.useBlockProps)()},(0,l.createElement)(c.BlockControls,null),(0,l.createElement)(c.InspectorControls,null,(0,l.createElement)(s.PanelBody,{title:(0,i.t)("Block settings"),initialOpen:!0},(0,l.createElement)(s.PanelRow,null),(0,l.createElement)(s.PanelRow,null,(0,l.createElement)(s.TextareaControl,{label:(0,i.t)("Metadata"),help:(0,i.t)("Block Metadata"),value:r,onChange:e=>t({metadata:e})})),(0,l.createElement)(s.PanelRow,null,(0,l.createElement)(s.TextareaControl,{label:(0,i.t)("OpenAI Answer"),help:(0,i.t)("OpenAI Answer"),value:a})))),(0,l.createElement)("div",null,(0,l.createElement)(c.RichText,{tagName:"h2",placeholder:(0,i.t)("Block Title"),value:n,onChange:e=>t({title:e}),onBlur:()=>{fetch("/session/token").then((e=>e.text())).then((e=>{v({token:e})})),u(n+d.token),t({openai_answer:n+d.token})}}),(0,l.createElement)("div",null,(0,l.createElement)(p,{question:n,answer:o}),(0,l.createElement)(c.InnerBlocks,{allowedBlocks:m}))))},save:function({attributes:e}){const{title:t,metadata:n,openai_answer:r}=e;return(0,l.createElement)("div",{...c.useBlockProps.save()},(0,l.createElement)("div",null,(0,l.createElement)("h2",null,t),(0,l.createElement)("div",null,(0,l.createElement)(p,{question:t,answer:r}),(0,l.createElement)(c.InnerBlocks.Content,null))))},fetch:p};(0,r.registerBlockType)("gutenberg-ai-tools/ai-block",d)}},n={};function r(e){var a=n[e];if(void 0!==a)return a.exports;var l=n[e]={exports:{}};return t[e](l,l.exports,r),l.exports}r.m=t,e=[],r.O=(t,n,a,l)=>{if(!n){var o=1/0;for(u=0;u<e.length;u++){for(var[n,a,l]=e[u],s=!0,c=0;c<n.length;c++)(!1&l||o>=l)&&Object.keys(r.O).every((e=>r.O[e](n[c])))?n.splice(c--,1):(s=!1,l<o&&(o=l));if(s){e.splice(u--,1);var i=a();void 0!==i&&(t=i)}}return t}l=l||0;for(var u=e.length;u>0&&e[u-1][2]>l;u--)e[u]=e[u-1];e[u]=[n,a,l]},r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={617:0,232:0};r.O.j=t=>0===e[t];var t=(t,n)=>{var a,l,[o,s,c]=n,i=0;if(o.some((t=>0!==e[t]))){for(a in s)r.o(s,a)&&(r.m[a]=s[a]);if(c)var u=c(r)}for(t&&t(n);i<o.length;i++)l=o[i],r.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return r.O(u)},n=globalThis.webpackChunkgutenberg_ai_tools=globalThis.webpackChunkgutenberg_ai_tools||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var a=r.O(void 0,[232],(()=>r(5)));a=r.O(a)})();