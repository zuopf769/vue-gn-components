module.exports=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s="8f22")}({2877:function(e,t,n){"use strict";function r(e,t,n,r,o,i,a,s){var l,u="function"===typeof e?e.options:e;if(t&&(u.render=t,u.staticRenderFns=n,u._compiled=!0),r&&(u.functional=!0),i&&(u._scopeId="data-v-"+i),a?(l=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"===typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),o&&o.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(a)},u._ssrRegister=l):o&&(l=s?function(){o.call(this,this.$root.$options.shadowRoot)}:o),l)if(u.functional){u._injectStyles=l;var c=u.render;u.render=function(e,t){return l.call(t),c(e,t)}}else{var f=u.beforeCreate;u.beforeCreate=f?[].concat(f,l):[l]}return{exports:e,options:u}}n.d(t,"a",(function(){return r}))},5973:function(e,t,n){"use strict";var r=n("aaa8"),o=n.n(r);o.a},"70b0":function(e,t,n){(function(t){"use strict";var n=w(),r=y(),o=x(),i=P(),a={imagePlaceholder:void 0,cacheBust:!1},s={toSvg:l,toPng:c,toJpeg:f,toBlob:h,toPixelData:u,impl:{fontFaces:o,images:i,util:n,inliner:r,options:{}}};function l(e,t){return t=t||{},d(t),Promise.resolve(e).then((function(e){return g(e,t.filter,!0)})).then(p).then(v).then(r).then((function(r){return b(r,t.width||n.width(e),t.height||n.height(e))}));function r(e){return t.bgcolor&&(e.style.backgroundColor=t.bgcolor),t.width&&(e.style.width=t.width+"px"),t.height&&(e.style.height=t.height+"px"),t.style&&Object.keys(t.style).forEach((function(n){e.style[n]=t.style[n]})),e}}function u(e,t){return m(e,t||{}).then((function(t){return t.getContext("2d").getImageData(0,0,n.width(e),n.height(e)).data}))}function c(e,t){return m(e,t||{}).then((function(e){return e.toDataURL()}))}function f(e,t){return t=t||{},m(e,t).then((function(e){return e.toDataURL("image/jpeg",t.quality||1)}))}function h(e,t){return m(e,t||{}).then(n.canvasToBlob)}function d(e){"undefined"===typeof e.imagePlaceholder?s.impl.options.imagePlaceholder=a.imagePlaceholder:s.impl.options.imagePlaceholder=e.imagePlaceholder,"undefined"===typeof e.cacheBust?s.impl.options.cacheBust=a.cacheBust:s.impl.options.cacheBust=e.cacheBust}function m(e,t){return l(e,t).then(n.makeImage).then(n.delay(100)).then((function(t){var n=r(e);return n.getContext("2d").drawImage(t,0,0),n}));function r(e){var r=document.createElement("canvas");if(r.width=t.width||n.width(e),r.height=t.height||n.height(e),t.bgcolor){var o=r.getContext("2d");o.fillStyle=t.bgcolor,o.fillRect(0,0,r.width,r.height)}return r}}function g(e,t,r){return r||!t||t(e)?Promise.resolve(e).then(o).then((function(n){return i(e,n,t)})).then((function(t){return a(e,t)})):Promise.resolve();function o(e){return e instanceof HTMLCanvasElement?n.makeImage(e.toDataURL()):e.cloneNode(!1)}function i(e,t,r){var o=e.childNodes;return 0===o.length?Promise.resolve(t):i(t,n.asArray(o),r).then((function(){return t}));function i(e,t,n){var r=Promise.resolve();return t.forEach((function(t){r=r.then((function(){return g(t,n)})).then((function(t){t&&e.appendChild(t)}))})),r}}function a(e,t){return t instanceof Element?Promise.resolve().then(r).then(o).then(i).then(a).then((function(){return t})):t;function r(){function r(e,t){function r(e,t){n.asArray(e).forEach((function(n){t.setProperty(n,e.getPropertyValue(n),e.getPropertyPriority(n))}))}e.cssText?t.cssText=e.cssText:r(e,t)}r(window.getComputedStyle(e),t.style)}function o(){function r(r){var o=window.getComputedStyle(e,r),i=o.getPropertyValue("content");if(""!==i&&"none"!==i){var a=n.uid();t.className=t.className+" "+a;var s=document.createElement("style");s.appendChild(l(a,r,o)),t.appendChild(s)}function l(e,t,r){var o="."+e+":"+t,i=r.cssText?a(r):s(r);return document.createTextNode(o+"{"+i+"}");function a(e){var t=e.getPropertyValue("content");return e.cssText+" content: "+t+";"}function s(e){return n.asArray(e).map(t).join("; ")+";";function t(t){return t+": "+e.getPropertyValue(t)+(e.getPropertyPriority(t)?" !important":"")}}}}[":before",":after"].forEach((function(e){r(e)}))}function i(){e instanceof HTMLTextAreaElement&&(t.innerHTML=e.value),e instanceof HTMLInputElement&&t.setAttribute("value",e.value)}function a(){t instanceof SVGElement&&(t.setAttribute("xmlns","http://www.w3.org/2000/svg"),t instanceof SVGRectElement&&["width","height"].forEach((function(e){var n=t.getAttribute(e);n&&t.style.setProperty(e,n)})))}}}function p(e){return o.resolveAll().then((function(t){var n=document.createElement("style");return e.appendChild(n),n.appendChild(document.createTextNode(t)),e}))}function v(e){return i.inlineAll(e).then((function(){return e}))}function b(e,t,r){return Promise.resolve(e).then((function(e){return e.setAttribute("xmlns","http://www.w3.org/1999/xhtml"),(new XMLSerializer).serializeToString(e)})).then(n.escapeXhtml).then((function(e){return'<foreignObject x="0" y="0" width="100%" height="100%">'+e+"</foreignObject>"})).then((function(e){return'<svg xmlns="http://www.w3.org/2000/svg" width="'+t+'" height="'+r+'">'+e+"</svg>"})).then((function(e){return"data:image/svg+xml;charset=utf-8,"+e}))}function w(){return{escape:h,parseExtension:t,mimeType:n,dataAsUrl:f,isDataUrl:r,canvasToBlob:i,resolveUrl:a,getAndEncode:c,uid:l(),delay:d,asArray:m,escapeXhtml:g,makeImage:u,width:p,height:v};function e(){var e="application/font-woff",t="image/jpeg";return{woff:e,woff2:e,ttf:"application/font-truetype",eot:"application/vnd.ms-fontobject",png:"image/png",jpg:t,jpeg:t,gif:"image/gif",tiff:"image/tiff",svg:"image/svg+xml"}}function t(e){var t=/\.([^\.\/]*?)$/g.exec(e);return t?t[1]:""}function n(n){var r=t(n).toLowerCase();return e()[r]||""}function r(e){return-1!==e.search(/^(data:)/)}function o(e){return new Promise((function(t){for(var n=window.atob(e.toDataURL().split(",")[1]),r=n.length,o=new Uint8Array(r),i=0;i<r;i++)o[i]=n.charCodeAt(i);t(new Blob([o],{type:"image/png"}))}))}function i(e){return e.toBlob?new Promise((function(t){e.toBlob(t)})):o(e)}function a(e,t){var n=document.implementation.createHTMLDocument(),r=n.createElement("base");n.head.appendChild(r);var o=n.createElement("a");return n.body.appendChild(o),r.href=t,o.href=e,o.href}function l(){var e=0;return function(){return"u"+t()+e++;function t(){return("0000"+(Math.random()*Math.pow(36,4)<<0).toString(36)).slice(-4)}}}function u(e){return new Promise((function(t,n){var r=new Image;r.onload=function(){t(r)},r.onerror=n,r.src=e}))}function c(e){var t=3e4;return s.impl.options.cacheBust&&(e+=(/\?/.test(e)?"&":"?")+(new Date).getTime()),new Promise((function(n){var r,o=new XMLHttpRequest;if(o.onreadystatechange=a,o.ontimeout=l,o.responseType="blob",o.timeout=t,o.open("GET",e,!0),o.send(),s.impl.options.imagePlaceholder){var i=s.impl.options.imagePlaceholder.split(/,/);i&&i[1]&&(r=i[1])}function a(){if(4===o.readyState)if(200===o.status){var t=new FileReader;t.onloadend=function(){var e=t.result.split(/,/)[1];n(e)},t.readAsDataURL(o.response)}else r?n(r):u("cannot fetch resource: "+e+", status: "+o.status)}function l(){r?n(r):u("timeout of "+t+"ms occured while fetching resource: "+e)}function u(e){console.error(e),n("")}}))}function f(e,t){return"data:"+t+";base64,"+e}function h(e){return e.replace(/([.*+?^${}()|\[\]\/\\])/g,"\\$1")}function d(e){return function(t){return new Promise((function(n){setTimeout((function(){n(t)}),e)}))}}function m(e){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}function g(e){return e.replace(/#/g,"%23").replace(/\n/g,"%0A")}function p(e){var t=b(e,"border-left-width"),n=b(e,"border-right-width");return e.scrollWidth+t+n}function v(e){var t=b(e,"border-top-width"),n=b(e,"border-bottom-width");return e.scrollHeight+t+n}function b(e,t){var n=window.getComputedStyle(e).getPropertyValue(t);return parseFloat(n.replace("px",""))}}function y(){var e=/url\(['"]?([^'"]+?)['"]?\)/g;return{inlineAll:i,shouldProcess:t,impl:{readUrls:r,inline:o}};function t(t){return-1!==t.search(e)}function r(t){var r,o=[];while(null!==(r=e.exec(t)))o.push(r[1]);return o.filter((function(e){return!n.isDataUrl(e)}))}function o(e,t,r,o){return Promise.resolve(t).then((function(e){return r?n.resolveUrl(e,r):e})).then(o||n.getAndEncode).then((function(e){return n.dataAsUrl(e,n.mimeType(t))})).then((function(n){return e.replace(i(t),"$1"+n+"$3")}));function i(e){return new RegExp("(url\\(['\"]?)("+n.escape(e)+")(['\"]?\\))","g")}}function i(e,n,i){return a()?Promise.resolve(e):Promise.resolve(e).then(r).then((function(t){var r=Promise.resolve(e);return t.forEach((function(e){r=r.then((function(t){return o(t,e,n,i)}))})),r}));function a(){return!t(e)}}}function x(){return{resolveAll:e,impl:{readAll:t}};function e(){return t(document).then((function(e){return Promise.all(e.map((function(e){return e.resolve()})))})).then((function(e){return e.join("\n")}))}function t(){return Promise.resolve(n.asArray(document.styleSheets)).then(t).then(e).then((function(e){return e.map(o)}));function e(e){return e.filter((function(e){return e.type===CSSRule.FONT_FACE_RULE})).filter((function(e){return r.shouldProcess(e.style.getPropertyValue("src"))}))}function t(e){var t=[];return e.forEach((function(e){try{n.asArray(e.cssRules||[]).forEach(t.push.bind(t))}catch(r){console.log("Error while reading CSS rules from "+e.href,r.toString())}})),t}function o(e){return{resolve:function(){var t=(e.parentStyleSheet||{}).href;return r.inlineAll(e.cssText,t)},src:function(){return e.style.getPropertyValue("src")}}}}}function P(){return{inlineAll:t,impl:{newImage:e}};function e(e){return{inline:t};function t(t){return n.isDataUrl(e.src)?Promise.resolve():Promise.resolve(e.src).then(t||n.getAndEncode).then((function(t){return n.dataAsUrl(t,n.mimeType(e.src))})).then((function(t){return new Promise((function(n,r){e.onload=n,e.onerror=r,e.src=t}))}))}}function t(o){return o instanceof Element?i(o).then((function(){return o instanceof HTMLImageElement?e(o).inline():Promise.all(n.asArray(o.childNodes).map((function(e){return t(e)})))})):Promise.resolve(o);function i(e){var t=e.style.getPropertyValue("background");return t?r.inlineAll(t).then((function(t){e.style.setProperty("background",t,e.style.getPropertyPriority("background"))})).then((function(){return e})):Promise.resolve(e)}}}e.exports=s})()},"8f22":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{ref:"wrap",staticClass:"wrap"},[n("img",{ref:"img",staticClass:"img",attrs:{src:e.src,width:e.imgWidth,draggable:!1},on:{dragover:function(e){e.preventDefault(),e.stopPropagation()},click:e.handleVoidClick,contextmenu:function(t){return t.preventDefault(),e.handleContextmenu(t)}}}),n("div",{directives:[{name:"show",rawName:"v-show",value:e.isHideLabels,expression:"isHideLabels"}],staticClass:"label-list"},e._l(e.labels,(function(t,r){return n("div",{key:t._id,ref:"label-item",refInFor:!0,staticClass:"label-item",style:{left:t.left+"px",top:t.top+"px"},attrs:{draggable:!0},on:{contextmenu:function(e){e.preventDefault()},dblclick:e.handleDoubleClick,click:function(t){return e.handleRemoveLabel(r)},dragend:function(t){return e.ondragend(t,r)},dragstart:function(t){return e.ondragstart(t,r)}}},[n("span",{staticClass:"label-text",on:{click:function(e){e.stopPropagation()},blur:function(t){return e.handleDivBlur(t,r)}}},[e._v(e._s(t.text))])])})),0),n("ul",{directives:[{name:"show",rawName:"v-show",value:e.isShowMenu,expression:"isShowMenu"}],ref:"menu",staticClass:"menu-list",on:{click:e.hideMenu}},e._l(e.menus,(function(t,r){return n("li",{key:r,staticClass:"menu-item",on:{contextmenu:function(e){e.preventDefault()},mouseenter:e.onMouseEnter,mouseleave:e.onMouseLeave,click:function(n){return e.onMenuClick(t)}}},[e._v(e._s(t))])})),0)])},o=[],i=n("70b0"),a=n.n(i);const s=30,l=5,u=6;var c={name:"ImgLabel",props:{isShowSaveBtn:{type:Boolean,default:!0},src:{type:String,default:""},width:{type:[Number,String],default:500},theme:{type:String,default:"#3b8bcc"}},created(){this.pos={},this.dragstart={},!this.isShowSaveBtn&&this.menus.splice(1,1)},mounted(){this.$nextTick(()=>{this.menu=this.$refs["menu"],this.img=this.$refs["img"]})},data(){return{isHideLabels:!0,menus:["新建标签","保存标签","清除标签","隐藏标签","导出为图片"],isShowMenu:!1,labels:JSON.parse(localStorage.getItem("__labels__"))||[]}},computed:{imgWidth(){return"number"===typeof this.width?this.width:this.width.slice(0,-2)}},methods:{ondragend(e,t){const n=this.img.getBoundingClientRect(),r=this.$refs["label-item"][t].clientWidth,o=this.$refs["label-item"][t].clientHeight;this.labels[t].left=Math.max(0,Math.min(e.clientX-n.left-this.dragstart.left,n.width-r-u)),this.labels[t].top=Math.max(0+u,Math.min(e.clientY-n.top-this.dragstart.top,n.height-o-2*l))},ondragstart(e,t){const n=this.img.getBoundingClientRect();this.dragstart["left"]=e.clientX-n.left-this.labels[t].left,this.dragstart["top"]=e.clientY-n.top-this.labels[t].top},onMenuClick(e){switch(e){case"新建标签":this.createdLabel();break;case"保存标签":this.saveLabel();break;case"清除标签":this.clearLabel();break;case"隐藏标签":case"显示标签":this.hideLabel();break;case"导出为图片":this.exportImg();break;default:}},handleRemoveLabel(e){this.labels.splice(e,1)},handleVoidClick(){this.hideMenu()},handleDivBlur(e,t){""===e.target.innerHTML&&this.labels.splice(t,1),e.target.setAttribute("contenteditable",!1),this.labels[t].text=e.target.innerHTML},handleDoubleClick(e){e.target.setAttribute("contenteditable",!0),e.target.focus(),this.$nextTick(()=>{if(document.selection){let t=document.body.createTextRange();t.moveToElementText(e.target),t.select()}else if(window.getSelection){const t=document.createRange();t.selectNodeContents(e.target),window.getSelection().removeAllRanges(),window.getSelection().addRange(t)}})},createdLabel(){this.labels.push({left:this.pos.left,top:this.pos.top,text:"新建标签",_id:(new Date).getTime()})},saveLabel(){localStorage.setItem("__labels__",JSON.stringify(this.labels))},clearLabel(){localStorage.removeItem("__labels__"),this.labels=[]},hideLabel(){this.isHideLabels=!this.isHideLabels,this.labels.length&&(this.menus[3]="显示标签"===this.menus[3]?"隐藏标签":"显示标签")},exportImg(){setTimeout(()=>{a.a.toJpeg(this.$refs["wrap"]).then(e=>{const t=document.createElement("a");t.href=e,t.download=this.getDate(),t.click()})})},handleContextmenu(e){const t=e.target.getBoundingClientRect();this.showMenu(),this.$nextTick(()=>{const n=Math.min(e.clientX-t.left,this.img.offsetWidth-this.menu.offsetWidth),r=Math.min(e.clientY-t.top,this.img.offsetHeight-this.menu.offsetHeight);this.pos["left"]=n,this.pos["top"]=e.clientY-t.top+s+l>this.img.offsetWidth?e.clientY-t.top-s-l:e.clientY-t.top,this.menu.style.top=r+"px",this.menu.style.left=n+"px"})},showMenu(){this.isShowMenu=!0},hideMenu(){this.isShowMenu=!1},onMouseEnter(e){e.target.style.backgroundColor=this.theme,e.target.style.color="#fff"},onMouseLeave(e){e.target.style.backgroundColor="#fff",e.target.style.color="#000"},getDate(){const e=new Date,t=e.getFullYear(),n=e.getMonth()+1<10?`0${e.getMonth()+1}`:e.getMonth()+1,r=e.getDate()<10?`0${e.getDate()}`:e.getDate();return`图片-${t}-${n}-${r}`}}},f=c,h=(n("5973"),n("2877")),d=Object(h["a"])(f,r,o,!1,null,"61dc559e",null),m=d.exports;m.install=e=>e.component(m.name,m);t["default"]=m},aaa8:function(e,t,n){}});