!function(){"use strict";var e,t={128:function(e,t,r){r.d(t,{t:function(){return m}});var a=window.wp.element,o=window.wp.blockEditor,n=window.wp.components,l=window.wp.escapeHtml,i=()=>({sanitizeNumber:e=>isNaN(e)?0:parseFloat(e),sanitizeLink:e=>{if(!e)return"";const t={"<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;"};return e.replace(/[<>"']/gi,(e=>t[e]))}}),c=e=>{const{currentImageURL:t,facebookLink:r,linkedInLink:n,twitterLink:c,headline:s,authorBio:u}=e.attributes,p=i(),b=e.editor?(0,o.useBlockProps)({className:"sptcrb__abouttheauthor__block__wrapper"}):o.useBlockProps.save({className:"sptcrb__abouttheauthor__block__wrapper"});return(0,a.createElement)("div",b,(0,a.createElement)("div",{className:"sptcrb__abouttheauthor__block__left"},!!t&&(0,a.createElement)("div",{className:"sptcrb__abouttheauthor__block__left__image",style:{backgroundImage:"url("+p.sanitizeLink(t)+")"}}),!t&&(0,a.createElement)("div",{className:"sptcrb__abouttheauthor__block__left__image"}),(0,a.createElement)("div",{className:"sptcrb__abouttheauthor__block__left__some__wrapper"},!!r&&(0,a.createElement)("a",{href:(0,l.escapeAttribute)(r),rel:"noopener noreferrer",target:"_blank"},(0,a.createElement)("div",{className:"sptcrb__abouttheauthor__block__left__some__icon__wrapper sptcrb__abouttheauthor__block__left__some__icon__facebook"},(0,a.createElement)("i",{className:"fab fa-facebook-f"}))),!!c&&(0,a.createElement)("a",{href:(0,l.escapeAttribute)(c),rel:"noopener noreferrer",target:"_blank"},(0,a.createElement)("div",{className:"sptcrb__abouttheauthor__block__left__some__icon__wrapper sptcrb__abouttheauthor__block__left__some__icon__twitter"},(0,a.createElement)("i",{className:"fab fa-twitter"}))),!!n&&(0,a.createElement)("a",{href:(0,l.escapeAttribute)(n),rel:"noopener noreferrer",target:"_blank"},(0,a.createElement)("div",{className:"sptcrb__abouttheauthor__block__left__some__icon__wrapper sptcrb__abouttheauthor__block__left__some__icon__linkedin"},(0,a.createElement)("i",{className:"fab fa-linkedin-in"}))))),(0,a.createElement)("div",{className:"sptcrb__abouttheauthor__block__right"},(0,a.createElement)("span",null,(0,l.escapeHTML)(s)),(0,a.createElement)("p",null,(0,l.escapeHTML)(u))))},s=JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"superb-blocks/superb-author-box","version":"0.1.0","title":"Superb Author Box","category":"widgets","icon":"id","supports":{"html":false},"textdomain":"superb-blocks","editorScript":"file:../../build/superb-author-block.js","editorStyle":"file:../../build/superb-author-block.css","style":"file:../../build/style-superb-author-block.css"}');const{name:u,...p}=s,{__:__}=wp.i18n,{registerBlockType:b}=wp.blocks,m={bgImageId:{type:"number",default:0},currentImageURL:{type:"string",default:""},headline:{type:"string",default:"Author Name"},authorBio:{type:"string",default:"Author Description"},linkedInLink:{type:"string",default:""},facebookLink:{type:"string",default:""},twitterLink:{type:"string",default:""}};b(u,{...p,keywords:[__("superb author box"),__("about the author"),__("author block"),__("author box")],attributes:{...m,selectedAuthor:{type:"number",default:-1}},example:{attributes:{headline:"Superb Author",authorBio:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id euismod velit, ac imperdiet turpis. Fusce faucibus vulputate neque, eget tempor metus fringilla eget. Integer accumsan tempus massa, sit amet scelerisque est pharetra a. Sed egestas, erat et dapibus semper, turpis orci vulputate urna, at ornare ante dolor at enim.",linkedInLink:"#",twitterLink:"#",facebookLink:"#"}},edit:e=>{const t=i(),{__:__}=wp.i18n,{select:r}=wp.data,{MediaUpload:l,MediaUploadCheck:s}=wp.blockEditor,{Button:u}=wp.components,{attributes:p,setAttributes:b}=e;e.editor=!0;const{selectedAuthor:_}=p,{getAuthors:h}=r("core"),d=__("To change the author image, you need permission to upload media.","sptcrb"),k=-1,f=()=>h();return(0,a.createElement)(a.Fragment,null,(0,a.createElement)(o.InspectorControls,null,(0,a.createElement)(a.Fragment,null,(0,a.createElement)("div",{class:"spb_upgrade"},(0,a.createElement)("p",null,"Get premium & unlock all features")," ",(0,a.createElement)("a",{href:"https://superbthemes.com/plugins/superb-blocks/",target:"_blank",rel:"noopener noreferrer"},"Read More"))),(0,a.createElement)(n.PanelBody,{title:"Author Information",initialOpen:!0},(0,a.createElement)("small",null,"Select a WordPress User to gather information from the user."),(0,a.createElement)(n.SelectControl,{label:"Author",options:[{label:"Custom",value:-1},...f().map(((e,t)=>({label:e.name,value:t})))],value:_,onChange:e=>{const r=t.sanitizeNumber(e);if(-1===r)b({selectedAuthor:r,headline:m.headline.default,authorBio:m.authorBio.default,currentImageURL:"",twitterLink:"",facebookLink:"",linkedInLink:""});else{const e=f();b({selectedAuthor:r,headline:e[r].name,authorBio:e[r].description,currentImageURL:t.sanitizeLink(e[r].avatar_urls[96])})}}}),(0,a.createElement)("label",{className:"components-base-control__label sptcrb-control-label"},"Author Image"),(0,a.createElement)("div",{className:"spbatab-image-preview-wrapper"},(0,a.createElement)("img",{width:"50",height:"auto",src:p.currentImageURL})),(0,a.createElement)(s,{fallback:d},(0,a.createElement)(l,{title:__("Author image","superb-blocks/about-the-author-block"),onSelect:e=>{b({selectedAuthor:k,bgImageId:e.id,currentImageURL:t.sanitizeLink(e.url)})},allowedTypes:["image"],value:p.bgImageId,render:e=>{let{open:t}=e;return(0,a.createElement)(u,{className:"sptcrb__abouttheauthor__backend__image__toggle",onClick:t},__("Set author image","superb-blocks/about-the-author-block"))}})),(0,a.createElement)("div",{className:"sptcrb__abouttheauthor__backend__wrapper-title"},(0,a.createElement)(n.TextControl,{label:"Headline",placeholder:__("About The Author","sptcrb"),value:p.headline,onChange:e=>{b({selectedAuthor:k,headline:e})}})),(0,a.createElement)("div",{className:"sptcrb__abouttheauthor__backend__wrapper-text"},(0,a.createElement)(n.TextareaControl,{label:"Author Bio",placeholder:__("About The Author","sptcrb"),onChange:e=>{b({selectedAuthor:k,authorBio:e})},value:p.authorBio})),(0,a.createElement)("div",{className:"sptcrb__abouttheauthor__backend__wrapper-social-media-column"},(0,a.createElement)(n.TextControl,{label:"Author Facebook Link",placeholder:"https://facebook.com/",value:p.facebookLink,onChange:e=>{b({selectedAuthor:k,facebookLink:t.sanitizeLink(e)})}})),(0,a.createElement)("div",{className:"sptcrb__abouttheauthor__backend__wrapper-social-media-column"},(0,a.createElement)(n.TextControl,{label:"Author Twitter Link",placeholder:"https://twitter.com/",value:p.twitterLink,onChange:e=>{b({selectedAuthor:k,twitterLink:t.sanitizeLink(e)})}})),(0,a.createElement)("div",{className:"sptcrb__abouttheauthor__backend__wrapper-social-media-column"},(0,a.createElement)(n.TextControl,{label:"Author LinkedIn Link",placeholder:"https://linkedin.com/",value:p.linkedInLink,onChange:e=>{b({selectedAuthor:k,linkedInLink:t.sanitizeLink(e)})}}))),(0,a.createElement)(n.PanelBody,{title:"Premium Features",initialOpen:!0},(0,a.createElement)(a.Fragment,null,(0,a.createElement)("div",null,(0,a.createElement)("a",{href:"https://superbthemes.com/plugins/superb-blocks/",target:"_blank",rel:"noopener noreferrer",style:{marginBottom:"10px",padding:"10px 20px",background:"#00bc87",color:"#fff",borderRadius:"3px",width:"100%",border:"0",cursor:"pointer",display:"block",textDecoration:"none",textAlign:"center"}},"Unlock Premium"),(0,a.createElement)("p",null,"Buy the premium version and unlock additional features such as:"),(0,a.createElement)("ul",{style:{listStyle:"circle",paddingLeft:"20px"}},(0,a.createElement)("li",null,"Content Alignment"),(0,a.createElement)("li",null,"Text Color Customization"),(0,a.createElement)("li",null,"Element Color Customization"),(0,a.createElement)("li",null,"Font Size Customization")),(0,a.createElement)("p",null,(0,a.createElement)("a",{href:"https://superbthemes.com/plugins/superb-blocks/",target:"_blank",rel:"noopener noreferrer"},"Click here")," ","or the button above to read more about Superb Blocks Premium including a full list of available blocks and features."))))),c(e))},save:c})}},r={};function a(e){var o=r[e];if(void 0!==o)return o.exports;var n=r[e]={exports:{}};return t[e](n,n.exports,a),n.exports}a.m=t,e=[],a.O=function(t,r,o,n){if(!r){var l=1/0;for(u=0;u<e.length;u++){r=e[u][0],o=e[u][1],n=e[u][2];for(var i=!0,c=0;c<r.length;c++)(!1&n||l>=n)&&Object.keys(a.O).every((function(e){return a.O[e](r[c])}))?r.splice(c--,1):(i=!1,n<l&&(l=n));if(i){e.splice(u--,1);var s=o();void 0!==s&&(t=s)}}return t}n=n||0;for(var u=e.length;u>0&&e[u-1][2]>n;u--)e[u]=e[u-1];e[u]=[r,o,n]},a.d=function(e,t){for(var r in t)a.o(t,r)&&!a.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e={628:0,743:0};a.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,n,l=r[0],i=r[1],c=r[2],s=0;if(l.some((function(t){return 0!==e[t]}))){for(o in i)a.o(i,o)&&(a.m[o]=i[o]);if(c)var u=c(a)}for(t&&t(r);s<l.length;s++)n=l[s],a.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return a.O(u)},r=self.webpackChunksuperb_blocks=self.webpackChunksuperb_blocks||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var o=a.O(void 0,[743],(function(){return a(128)}));o=a.O(o)}();