(()=>{"use strict";var e,t={381:()=>{const e=window.wp.blocks,t=JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"gutenberg-ai-tools/ai-block","title":"AIBlock","description":"A block that displays a card with a picture and text.","textdomain":"default","category":"design","icon":"businessman","attributes":{"imageUrl":{"type":"string","source":"attribute","attribute":"src","selector":"img"},"imageUuid":{"type":"string","source":"attribute","attribute":"data-entity-uuid","selector":"img"},"imageAlt":{"type":"string","source":"attribute","attribute":"alt","selector":"img"},"title":{"type":"string","source":"text","selector":"h2"},"subhead":{"type":"string","source":"text","selector":"h2 + p"},"metadata":{"type":"string"}},"supports":{"align":false,"anchor":true,"color":{"background":true,"text":true}},"styles":[{"name":"default","label":"Default","isDefault":true},{"name":"image-right","label":"Right aligned image"}],"variations":[{"name":"pet","title":"Pet Card","description":"A card for a pet.","icon":"pets","attributes":{"className":"is-style-pet","imageUrl":"https://images.unsplash.com/photo-1524698604136-5a02fb1f7ec9?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D","imageAlt":"Photo by Shane Guymon on Unsplash"},"isActive":["className"]}]}'),a=window.React,l=window.wp.components,r=window.wp.blockEditor,i=Drupal,n=["core/heading","core/paragraph","core/quote"],o={...t,icon:function(){return(0,a.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,a.createElement)("path",{d:"M528 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h480c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-352 96c35.3 0 64 28.7 64 64s-28.7 64-64 64-64-28.7-64-64 28.7-64 64-64zm112 236.8c0 10.6-10 19.2-22.4 19.2H86.4C74 384 64 375.4 64 364.8v-19.2c0-31.8 30.1-57.6 67.2-57.6h5c12.3 5.1 25.7 8 39.8 8s27.6-2.9 39.8-8h5c37.1 0 67.2 25.8 67.2 57.6v19.2zM512 312c0 4.4-3.6 8-8 8H360c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16zm0-64c0 4.4-3.6 8-8 8H360c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16zm0-64c0 4.4-3.6 8-8 8H360c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16z"}))},edit:function({attributes:e,setAttributes:t}){const{imageUrl:o,imageAlt:c,imageUuid:s,title:u,subhead:m,metadata:d}=e;return(0,a.createElement)("div",{...(0,r.useBlockProps)()},(0,a.createElement)(r.BlockControls,null,(0,a.createElement)(l.Toolbar,null,(0,a.createElement)(l.Button,{label:(0,i.t)("Clear image"),icon:"no-alt",onClick:()=>{t({imageUrl:"",imageUuid:"",imageAlt:""})}}))),(0,a.createElement)(r.InspectorControls,null,(0,a.createElement)(l.PanelBody,{title:(0,i.t)("Block settings"),initialOpen:!0},(0,a.createElement)(l.PanelRow,null,(0,a.createElement)(l.TextControl,{label:(0,i.t)("Image Alt Text"),value:c,onChange:e=>t({imageAlt:e})})),(0,a.createElement)(l.PanelRow,null,(0,a.createElement)(l.TextareaControl,{label:(0,i.t)("Metadata information"),help:(0,i.t)("Add some metadata information"),value:d,onChange:e=>t({metadata:e})})))),!o&&(0,a.createElement)(r.MediaPlaceholder,{onSelect:e=>{var a;t({imageAlt:(a=e).alt,imageUuid:a.data.entity_uuid,imageUrl:a.url})},allowedTypes:["image"],multiple:!1,labels:{title:(0,i.t)("Picture")}},(0,i.t)("Upload an image or select from media library.")),o&&(0,a.createElement)("img",{"data-entity-type":"file","data-entity-uuid":s,src:o,alt:c}),(0,a.createElement)("div",null,(0,a.createElement)(r.RichText,{tagName:"h2",placeholder:(0,i.t)("Title"),value:u,onChange:e=>t({title:e})}),(0,a.createElement)(r.RichText,{tagName:"p",placeholder:(0,i.t)("Subhead"),value:m,onChange:e=>t({subhead:e})}),(0,a.createElement)("div",null,(0,a.createElement)(r.InnerBlocks,{allowedBlocks:n}))))},save:function({attributes:e}){const{imageUrl:t,imageUuid:l,imageAlt:i,title:n,subhead:o}=e;return(0,a.createElement)("div",{...r.useBlockProps.save()},(0,a.createElement)("img",{"data-entity-type":"file","data-entity-uuid":l,src:t,alt:i}),(0,a.createElement)("div",null,(0,a.createElement)("h2",null,n),(0,a.createElement)("p",null,o),(0,a.createElement)("div",null,(0,a.createElement)(r.InnerBlocks.Content,null))))}};(0,e.registerBlockType)("gutenberg-ai-tools/ai-block",o)}},a={};function l(e){var r=a[e];if(void 0!==r)return r.exports;var i=a[e]={exports:{}};return t[e](i,i.exports,l),i.exports}l.m=t,e=[],l.O=(t,a,r,i)=>{if(!a){var n=1/0;for(u=0;u<e.length;u++){for(var[a,r,i]=e[u],o=!0,c=0;c<a.length;c++)(!1&i||n>=i)&&Object.keys(l.O).every((e=>l.O[e](a[c])))?a.splice(c--,1):(o=!1,i<n&&(n=i));if(o){e.splice(u--,1);var s=r();void 0!==s&&(t=s)}}return t}i=i||0;for(var u=e.length;u>0&&e[u-1][2]>i;u--)e[u]=e[u-1];e[u]=[a,r,i]},l.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={617:0,232:0};l.O.j=t=>0===e[t];var t=(t,a)=>{var r,i,[n,o,c]=a,s=0;if(n.some((t=>0!==e[t]))){for(r in o)l.o(o,r)&&(l.m[r]=o[r]);if(c)var u=c(l)}for(t&&t(a);s<n.length;s++)i=n[s],l.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return l.O(u)},a=globalThis.webpackChunkgutenberg_ai_tools=globalThis.webpackChunkgutenberg_ai_tools||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))})();var r=l.O(void 0,[232],(()=>l(381)));r=l.O(r)})();