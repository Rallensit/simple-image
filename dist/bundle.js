!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.SimpleImage=e():t.SimpleImage=e()}(window,(function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/",n(n.s=0)}([function(t,e,n){function r(t){return function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function i(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}n(1).toString();var a=function(){function t(e){var n=e.data,r=(e.config,e.api),i=e.readOnly;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.api=r,this.readOnly=i,this.blockIndex=this.api.blocks.getCurrentBlockIndex()+1,this.CSS={baseClass:this.api.styles.block,loading:this.api.styles.loader,input:this.api.styles.input,settingsButton:this.api.styles.settingsButton,settingsButtonActive:this.api.styles.settingsButtonActive,wrapper:"cdx-simple-image",imageHolder:"cdx-simple-image__picture",caption:"cdx-simple-image__caption",alt:"cdx-simple-image__alt"},this.nodes={wrapper:null,imageHolder:null,image:null,caption:null,alt:null},this.data={url:n.url||"",caption:n.caption||"",alt:n.alt||"",withBorder:void 0!==n.withBorder&&n.withBorder,withBackground:void 0!==n.withBackground&&n.withBackground,stretched:void 0!==n.stretched&&n.stretched},this.settings=[{name:"withBorder",icon:'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M15.8 10.592v2.043h2.35v2.138H15.8v2.232h-2.25v-2.232h-2.4v-2.138h2.4v-2.28h2.25v.237h1.15-1.15zM1.9 8.455v-3.42c0-1.154.985-2.09 2.2-2.09h4.2v2.137H4.15v3.373H1.9zm0 2.137h2.25v3.325H8.3v2.138H4.1c-1.215 0-2.2-.936-2.2-2.09v-3.373zm15.05-2.137H14.7V5.082h-4.15V2.945h4.2c1.215 0 2.2.936 2.2 2.09v3.42z"/></svg>'},{name:"stretched",icon:'<svg width="17" height="10" viewBox="0 0 17 10" xmlns="http://www.w3.org/2000/svg"><path d="M13.568 5.925H4.056l1.703 1.703a1.125 1.125 0 0 1-1.59 1.591L.962 6.014A1.069 1.069 0 0 1 .588 4.26L4.38.469a1.069 1.069 0 0 1 1.512 1.511L4.084 3.787h9.606l-1.85-1.85a1.069 1.069 0 1 1 1.512-1.51l3.792 3.791a1.069 1.069 0 0 1-.475 1.788L13.514 9.16a1.125 1.125 0 0 1-1.59-1.591l1.644-1.644z"/></svg>'},{name:"withBackground",icon:'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.043 8.265l3.183-3.183h-2.924L4.75 10.636v2.923l4.15-4.15v2.351l-2.158 2.159H8.9v2.137H4.7c-1.215 0-2.2-.936-2.2-2.09v-8.93c0-1.154.985-2.09 2.2-2.09h10.663l.033-.033.034.034c1.178.04 2.12.96 2.12 2.089v3.23H15.3V5.359l-2.906 2.906h-2.35zM7.951 5.082H4.75v3.201l3.201-3.2zm5.099 7.078v3.04h4.15v-3.04h-4.15zm-1.1-2.137h6.35c.635 0 1.15.489 1.15 1.092v5.13c0 .603-.515 1.092-1.15 1.092h-6.35c-.635 0-1.15-.489-1.15-1.092v-5.13c0-.603.515-1.092 1.15-1.092z"/></svg>'}]}var e,n,a;return e=t,a=[{key:"toolbox",get:function(){return{title:"Image",icon:'<svg width="17" height="15" viewBox="0 0 336 276" xmlns="http://www.w3.org/2000/svg"><path d="M291 150V79c0-19-15-34-34-34H79c-19 0-34 15-34 34v42l67-44 81 72 56-29 42 30zm0 52l-43-30-56 30-81-67-66 39v23c0 19 15 34 34 34h178c17 0 31-13 34-29zM79 0h178c44 0 79 35 79 79v118c0 44-35 79-79 79H79c-44 0-79-35-79-79V79C0 35 35 0 79 0z"/></svg>'}}},{key:"sanitize",get:function(){return{url:{},withBorder:{},withBackground:{},stretched:{},caption:{br:!0},alt:{br:!0}}}},{key:"isReadOnlySupported",get:function(){return!0}},{key:"pasteConfig",get:function(){return{patterns:{image:/https?:\/\/\S+\.(gif|jpe?g|tiff|png)$/i},tags:["img"],files:{mimeTypes:["image/*"]}}}}],(n=[{key:"render",value:function(){var t=this,e=this._make("div",[this.CSS.baseClass,this.CSS.wrapper]),n=this._make("input",[],{type:"file"}),r=this._make("div",this.CSS.loading),i=this._make("div",this.CSS.imageHolder),a=this._make("img"),o=this._make("div",[this.CSS.input,this.CSS.caption],{contentEditable:!this.readOnly,innerHTML:this.data.caption||""}),s=this._make("div",[this.CSS.input,this.CSS.alt],{contentEditable:!this.readOnly,innerHTML:this.data.alt||""});return this.nodes.imageHolder=i,this.nodes.wrapper=e,this.nodes.image=a,this.nodes.caption=o,this.nodes.alt=s,this.nodes.loader=r,this.nodes.loadButton=n,o.dataset.placeholder="Enter a caption",s.dataset.placeholder="Enter a alternative text",a.onload=function(){e.classList.remove(t.CSS.loading),a.setAttribute("alt",t.data.alt||""),i.appendChild(a),e.appendChild(i),e.appendChild(o),t.readOnly||(e.appendChild(s),console.log(t.readOnly),console.log("********")),r.remove(),null!==n&&(n.remove(),n=null),t.nodes.loader=null,t._acceptTuneView()},a.onerror=function(t){console.log("Failed to load an image",t)},this.data.url?(e.appendChild(r),a.src=this.data.url):(e.appendChild(n),n.onchange=function(e){var r=e.target.files[0],i=URL.createObjectURL(r);t.data={url:i,caption:r.name,alt:r.name},n.remove(),n=null}),e}},{key:"save",value:function(t){var e=t.querySelector("img"),n=t.querySelector("."+this.CSS.input),r=t.querySelectorAll("."+this.CSS.input)[1];return e?Object.assign(this.data,{url:e.src,caption:n.innerHTML,alt:r.innerHTML}):this.data}},{key:"onPaste",value:function(t){switch(t.type){case"tag":var e=t.detail.data;this.data={url:e.src};break;case"pattern":var n=t.detail.data;this.data={url:n};break;case"file":var r=t.detail.file;this.data={url:URL.createObjectURL(r),caption:r.name,alt:r.name}}this.nodes.loadButton.remove(),this.nodes.loadButton=null}},{key:"renderSettings",value:function(){var t=this,e=document.createElement("div");return this.settings.forEach((function(n){var r=document.createElement("div");r.classList.add(t.CSS.settingsButton),r.innerHTML=n.icon,r.addEventListener("click",(function(){t._toggleTune(n.name),r.classList.toggle(t.CSS.settingsButtonActive)})),r.classList.toggle(t.CSS.settingsButtonActive,t.data[n.name]),e.appendChild(r)})),e}},{key:"removed",value:function(){this.data.url&&this.data.url.startsWith("blob:")&&URL.revokeObjectURL(this.data.url)}},{key:"_make",value:function(t){var e,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},a=document.createElement(t);for(var o in Array.isArray(n)?(e=a.classList).add.apply(e,r(n)):n&&a.classList.add(n),i)a[o]=i[o];return a}},{key:"_toggleTune",value:function(t){this.data[t]=!this.data[t],this._acceptTuneView()}},{key:"_acceptTuneView",value:function(){var t=this;this.settings.forEach((function(e){t.nodes.imageHolder.classList.toggle(t.CSS.imageHolder+"--"+e.name.replace(/([A-Z])/g,(function(t){return"-".concat(t[0].toLowerCase())})),!!t.data[e.name]),"stretched"===e.name&&t.api.blocks.stretchBlock(t.blockIndex,!!t.data.stretched)}))}},{key:"data",get:function(){return this._data},set:function(t){this._data=Object.assign({},this.data,t),this.nodes.image&&(this.nodes.image.src=this.data.url),this.nodes.caption&&(this.nodes.caption.innerHTML=this.data.caption),this.nodes.alt&&(this.nodes.alt.innerHTML=this.data.alt)}}])&&i(e.prototype,n),a&&i(e,a),t}();t.exports=a},function(t,e,n){var r=n(2);"string"==typeof r&&(r=[[t.i,r,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};n(4)(r,i);r.locals&&(t.exports=r.locals)},function(t,e,n){(t.exports=n(3)(!1)).push([t.i,".cdx-simple-image {}\r\n\r\n.cdx-simple-image .cdx-loader {\r\n  min-height: 200px;\r\n}\r\n\r\n.cdx-simple-image .cdx-input {\r\n  margin-top: 10px;\r\n}\r\n\r\n.cdx-simple-image img {\r\n  max-width: 100%;\r\n  vertical-align: bottom;\r\n}\r\n\r\n.cdx-simple-image__caption[contentEditable=true][data-placeholder]:empty::before,\r\n.cdx-simple-image__alt[contentEditable=true][data-placeholder]:empty::before {\r\n  position: absolute;\r\n  content: attr(data-placeholder);\r\n  color: #707684;\r\n  font-weight: normal;\r\n  opacity: 0;\r\n }\r\n\r\n.cdx-simple-image__caption[contentEditable=true][data-placeholder]:empty::before,\r\n.cdx-simple-image__alt[contentEditable=true][data-placeholder]:empty::before {\r\n  opacity: 1;\r\n}\r\n\r\n.cdx-simple-image__caption[contentEditable=true][data-placeholder]:empty:focus::before,\r\n.cdx-simple-image__alt[contentEditable=true][data-placeholder]:empty:focus::before {\r\n  opacity: 0;\r\n}\r\n\r\n\r\n.cdx-simple-image__picture--with-background {\r\n  background: #eff2f5;\r\n  padding: 10px;\r\n}\r\n\r\n.cdx-simple-image__picture--with-background img {\r\n  display: block;\r\n  max-width: 60%;\r\n  margin: 0 auto;\r\n}\r\n\r\n.cdx-simple-image__picture--with-border {\r\n  border: 1px solid #e8e8eb;\r\n  padding: 1px;\r\n}\r\n\r\n.cdx-simple-image__picture--stretched img {\r\n  max-width: none;\r\n  width: 100%;\r\n}\r\n",""])},function(t,e){t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=function(t,e){var n=t[1]||"",r=t[3];if(!r)return n;if(e&&"function"==typeof btoa){var i=(o=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),a=r.sources.map((function(t){return"/*# sourceURL="+r.sourceRoot+t+" */"}));return[n].concat(a).concat([i]).join("\n")}var o;return[n].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n})).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},i=0;i<this.length;i++){var a=this[i][0];"number"==typeof a&&(r[a]=!0)}for(i=0;i<t.length;i++){var o=t[i];"number"==typeof o[0]&&r[o[0]]||(n&&!o[2]?o[2]=n:n&&(o[2]="("+o[2]+") and ("+n+")"),e.push(o))}},e}},function(t,e,n){var r,i,a={},o=(r=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===i&&(i=r.apply(this,arguments)),i}),s=function(t){return document.querySelector(t)},l=function(t){var e={};return function(t){if("function"==typeof t)return t();if(void 0===e[t]){var n=s.call(this,t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}}(),c=null,d=0,u=[],p=n(5);function h(t,e){for(var n=0;n<t.length;n++){var r=t[n],i=a[r.id];if(i){i.refs++;for(var o=0;o<i.parts.length;o++)i.parts[o](r.parts[o]);for(;o<r.parts.length;o++)i.parts.push(y(r.parts[o],e))}else{var s=[];for(o=0;o<r.parts.length;o++)s.push(y(r.parts[o],e));a[r.id]={id:r.id,refs:1,parts:s}}}}function f(t,e){for(var n=[],r={},i=0;i<t.length;i++){var a=t[i],o=e.base?a[0]+e.base:a[0],s={css:a[1],media:a[2],sourceMap:a[3]};r[o]?r[o].parts.push(s):n.push(r[o]={id:o,parts:[s]})}return n}function m(t,e){var n=l(t.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=u[u.length-1];if("top"===t.insertAt)r?r.nextSibling?n.insertBefore(e,r.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),u.push(e);else if("bottom"===t.insertAt)n.appendChild(e);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var i=l(t.insertInto+" "+t.insertAt.before);n.insertBefore(e,i)}}function v(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=u.indexOf(t);e>=0&&u.splice(e,1)}function g(t){var e=document.createElement("style");return void 0===t.attrs.type&&(t.attrs.type="text/css"),b(e,t.attrs),m(t,e),e}function b(t,e){Object.keys(e).forEach((function(n){t.setAttribute(n,e[n])}))}function y(t,e){var n,r,i,a;if(e.transform&&t.css){if(!(a=e.transform(t.css)))return function(){};t.css=a}if(e.singleton){var o=d++;n=c||(c=g(e)),r=S.bind(null,n,o,!1),i=S.bind(null,n,o,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(t){var e=document.createElement("link");return void 0===t.attrs.type&&(t.attrs.type="text/css"),t.attrs.rel="stylesheet",b(e,t.attrs),m(t,e),e}(e),r=_.bind(null,n,e),i=function(){v(n),n.href&&URL.revokeObjectURL(n.href)}):(n=g(e),r=k.bind(null,n),i=function(){v(n)});return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else i()}}t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=o()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var n=f(t,e);return h(n,e),function(t){for(var r=[],i=0;i<n.length;i++){var o=n[i];(s=a[o.id]).refs--,r.push(s)}t&&h(f(t,e),e);for(i=0;i<r.length;i++){var s;if(0===(s=r[i]).refs){for(var l=0;l<s.parts.length;l++)s.parts[l]();delete a[s.id]}}}};var w,x=(w=[],function(t,e){return w[t]=e,w.filter(Boolean).join("\n")});function S(t,e,n,r){var i=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=x(e,i);else{var a=document.createTextNode(i),o=t.childNodes;o[e]&&t.removeChild(o[e]),o.length?t.insertBefore(a,o[e]):t.appendChild(a)}}function k(t,e){var n=e.css,r=e.media;if(r&&t.setAttribute("media",r),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}function _(t,e,n){var r=n.css,i=n.sourceMap,a=void 0===e.convertToAbsoluteUrls&&i;(e.convertToAbsoluteUrls||a)&&(r=p(r)),i&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */");var o=new Blob([r],{type:"text/css"}),s=t.href;t.href=URL.createObjectURL(o),s&&URL.revokeObjectURL(s)}},function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var n=e.protocol+"//"+e.host,r=n+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,(function(t,e){var i,a=e.trim().replace(/^"(.*)"$/,(function(t,e){return e})).replace(/^'(.*)'$/,(function(t,e){return e}));return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(a)?t:(i=0===a.indexOf("//")?a:0===a.indexOf("/")?n+a:r+a.replace(/^\.\//,""),"url("+JSON.stringify(i)+")")}))}}])}));