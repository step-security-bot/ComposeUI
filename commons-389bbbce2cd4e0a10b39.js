(self.webpackChunkms_gh_pages=self.webpackChunkms_gh_pages||[]).push([[223],{2729:function(e){"use strict";const t=/[\p{Lu}]/u,n=/[\p{Ll}]/u,r=/^[\p{Lu}](?![\p{Lu}])/gu,a=/([\p{Alpha}\p{N}_]|$)/u,o=/[_.\- ]+/,i=new RegExp("^"+o.source),c=new RegExp(o.source+a.source,"gu"),s=new RegExp("\\d+"+a.source,"gu"),l=(e,a)=>{if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");if(a={pascalCase:!1,preserveConsecutiveUppercase:!1,...a},0===(e=Array.isArray(e)?e.map((e=>e.trim())).filter((e=>e.length)).join("-"):e.trim()).length)return"";const o=!1===a.locale?e=>e.toLowerCase():e=>e.toLocaleLowerCase(a.locale),l=!1===a.locale?e=>e.toUpperCase():e=>e.toLocaleUpperCase(a.locale);if(1===e.length)return a.pascalCase?l(e):o(e);return e!==o(e)&&(e=((e,r,a)=>{let o=!1,i=!1,c=!1;for(let s=0;s<e.length;s++){const l=e[s];o&&t.test(l)?(e=e.slice(0,s)+"-"+e.slice(s),o=!1,c=i,i=!0,s++):i&&c&&n.test(l)?(e=e.slice(0,s-1)+"-"+e.slice(s-1),c=i,i=!1,o=!0):(o=r(l)===l&&a(l)!==l,c=i,i=a(l)===l&&r(l)!==l)}return e})(e,o,l)),e=e.replace(i,""),e=a.preserveConsecutiveUppercase?((e,t)=>(r.lastIndex=0,e.replace(r,(e=>t(e)))))(e,o):o(e),a.pascalCase&&(e=l(e.charAt(0))+e.slice(1)),((e,t)=>(c.lastIndex=0,s.lastIndex=0,e.replace(c,((e,n)=>t(n))).replace(s,(e=>t(e)))))(e,l)};e.exports=l,e.exports.default=l},8828:function(e){"use strict";e.exports=Object.assign},2532:function(e,t,n){"use strict";n.d(t,{L:function(){return m},M:function(){return T},P:function(){return E},S:function(){return H},_:function(){return c},a:function(){return i},b:function(){return u},g:function(){return d},h:function(){return s}});var r=n(6540),a=(n(2729),n(5556)),o=n.n(a);function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i.apply(this,arguments)}function c(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t.indexOf(n=o[r])>=0||(a[n]=e[n]);return a}const s=()=>"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;function l(e,t,n){const r={};let a="gatsby-image-wrapper";return"fixed"===n?(r.width=e,r.height=t):"constrained"===n&&(a="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:a,"data-gatsby-image-wrapper":"",style:r}}function u(e,t,n,r,a){return void 0===a&&(a={}),i({},n,{loading:r,shouldLoad:e,"data-main-image":"",style:i({},a,{opacity:t?1:0})})}function d(e,t,n,r,a,o,c,s){const l={};o&&(l.backgroundColor=o,"fixed"===n?(l.width=r,l.height=a,l.backgroundColor=o,l.position="relative"):("constrained"===n||"fullWidth"===n)&&(l.position="absolute",l.top=0,l.left=0,l.bottom=0,l.right=0)),c&&(l.objectFit=c),s&&(l.objectPosition=s);const u=i({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:i({opacity:t?0:1,transition:"opacity 500ms linear"},l)});return u}const f=["children"],p=function(e){let{layout:t,width:n,height:a}=e;return"fullWidth"===t?r.createElement("div",{"aria-hidden":!0,style:{paddingTop:a/n*100+"%"}}):"constrained"===t?r.createElement("div",{style:{maxWidth:n,display:"block"}},r.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg%20height='"+a+"'%20width='"+n+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},m=function(e){let{children:t}=e,n=c(e,f);return r.createElement(r.Fragment,null,r.createElement(p,i({},n)),t,null)},g=["src","srcSet","loading","alt","shouldLoad"],h=["fallback","sources","shouldLoad"],y=function(e){let{src:t,srcSet:n,loading:a,alt:o="",shouldLoad:s}=e,l=c(e,g);return r.createElement("img",i({},l,{decoding:"async",loading:a,src:s?t:void 0,"data-src":s?void 0:t,srcSet:s?n:void 0,"data-srcset":s?void 0:n,alt:o}))},b=function(e){let{fallback:t,sources:n=[],shouldLoad:a=!0}=e,o=c(e,h);const s=o.sizes||(null==t?void 0:t.sizes),l=r.createElement(y,i({},o,t,{sizes:s,shouldLoad:a}));return n.length?r.createElement("picture",null,n.map((e=>{let{media:t,srcSet:n,type:o}=e;return r.createElement("source",{key:t+"-"+o+"-"+n,type:o,media:t,srcSet:a?n:void 0,"data-srcset":a?void 0:n,sizes:s})})),l):l};var v;y.propTypes={src:a.string.isRequired,alt:a.string.isRequired,sizes:a.string,srcSet:a.string,shouldLoad:a.bool},b.displayName="Picture",b.propTypes={alt:a.string.isRequired,shouldLoad:a.bool,fallback:a.exact({src:a.string.isRequired,srcSet:a.string,sizes:a.string}),sources:a.arrayOf(a.oneOfType([a.exact({media:a.string.isRequired,type:a.string,sizes:a.string,srcSet:a.string.isRequired}),a.exact({media:a.string,type:a.string.isRequired,sizes:a.string,srcSet:a.string.isRequired})]))};const w=["fallback"],E=function(e){let{fallback:t}=e,n=c(e,w);return t?r.createElement(b,i({},n,{fallback:{src:t},"aria-hidden":!0,alt:""})):r.createElement("div",i({},n))};E.displayName="Placeholder",E.propTypes={fallback:a.string,sources:null==(v=b.propTypes)?void 0:v.sources,alt:function(e,t,n){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+n+"`. Validation failed."):null}};const T=function(e){return r.createElement(r.Fragment,null,r.createElement(b,i({},e)),r.createElement("noscript",null,r.createElement(b,i({},e,{shouldLoad:!0}))))};T.displayName="MainImage",T.propTypes=b.propTypes;const C=["as","className","class","style","image","loading","imgClassName","imgStyle","backgroundColor","objectFit","objectPosition"],S=["style","className"],A=e=>e.replace(/\n/g,""),O=function(e,t,n){for(var r=arguments.length,a=new Array(r>3?r-3:0),i=3;i<r;i++)a[i-3]=arguments[i];return e.alt||""===e.alt?o().string.apply(o(),[e,t,n].concat(a)):new Error('The "alt" prop is required in '+n+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},k={image:o().object.isRequired,alt:O},x=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],L=["style","className"],N=new Set;let j,I;const P=function(e){let{as:t="div",image:a,style:o,backgroundColor:u,className:d,class:f,onStartLoad:p,onLoad:m,onError:g}=e,h=c(e,x);const{width:y,height:b,layout:v}=a,w=l(y,b,v),{style:E,className:T}=w,C=c(w,L),S=(0,r.useRef)(),A=(0,r.useMemo)((()=>JSON.stringify(a.images)),[a.images]);f&&(d=f);const O=function(e,t,n){let r="";return"fullWidth"===e&&(r='<div aria-hidden="true" style="padding-top: '+n/t*100+'%;"></div>'),"constrained"===e&&(r='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg%20height=\''+n+"'%20width='"+t+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),r}(v,y,b);return(0,r.useEffect)((()=>{j||(j=n.e(108).then(n.bind(n,1108)).then((e=>{let{renderImageToString:t,swapPlaceholderImage:n}=e;return I=t,{renderImageToString:t,swapPlaceholderImage:n}})));const e=S.current.querySelector("[data-gatsby-image-ssr]");if(e&&s())return e.complete?(null==p||p({wasCached:!0}),null==m||m({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)):(null==p||p({wasCached:!0}),e.addEventListener("load",(function t(){e.removeEventListener("load",t),null==m||m({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)}))),void N.add(A);if(I&&N.has(A))return;let t,r;return j.then((e=>{let{renderImageToString:n,swapPlaceholderImage:c}=e;S.current&&(S.current.innerHTML=n(i({isLoading:!0,isLoaded:N.has(A),image:a},h)),N.has(A)||(t=requestAnimationFrame((()=>{S.current&&(r=c(S.current,A,N,o,p,m,g))}))))})),()=>{t&&cancelAnimationFrame(t),r&&r()}}),[a]),(0,r.useLayoutEffect)((()=>{N.has(A)&&I&&(S.current.innerHTML=I(i({isLoading:N.has(A),isLoaded:N.has(A),image:a},h)),null==p||p({wasCached:!0}),null==m||m({wasCached:!0}))}),[a]),(0,r.createElement)(t,i({},C,{style:i({},E,o,{backgroundColor:u}),className:T+(d?" "+d:""),ref:S,dangerouslySetInnerHTML:{__html:O},suppressHydrationWarning:!0}))},M=(0,r.memo)((function(e){return e.image?(0,r.createElement)(P,e):null}));M.propTypes=k,M.displayName="GatsbyImage";const _=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"];function R(e){return function(t){let{src:n,__imageData:a,__error:o}=t,s=c(t,_);return o&&console.warn(o),a?r.createElement(e,i({image:a},s)):(console.warn("Image not loaded",n),null)}}const q=R((function(e){let{as:t="div",className:n,class:a,style:o,image:s,loading:f="lazy",imgClassName:p,imgStyle:g,backgroundColor:h,objectFit:y,objectPosition:b}=e,v=c(e,C);if(!s)return console.warn("[gatsby-plugin-image] Missing image prop"),null;a&&(n=a),g=i({objectFit:y,objectPosition:b,backgroundColor:h},g);const{width:w,height:O,layout:k,images:x,placeholder:L,backgroundColor:N}=s,j=l(w,O,k),{style:I,className:P}=j,M=c(j,S),_={fallback:void 0,sources:[]};return x.fallback&&(_.fallback=i({},x.fallback,{srcSet:x.fallback.srcSet?A(x.fallback.srcSet):void 0})),x.sources&&(_.sources=x.sources.map((e=>i({},e,{srcSet:A(e.srcSet)})))),r.createElement(t,i({},M,{style:i({},I,o,{backgroundColor:h}),className:P+(n?" "+n:"")}),r.createElement(m,{layout:k,width:w,height:O},r.createElement(E,i({},d(L,!1,k,w,O,N,y,b))),r.createElement(T,i({"data-gatsby-image-ssr":"",className:p},v,u("eager"===f,!1,_,f,g)))))})),D=function(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?o().number.apply(o(),[e,t].concat(r)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},U=new Set(["fixed","fullWidth","constrained"]),F={src:o().string.isRequired,alt:O,width:D,height:D,sizes:o().string,layout:e=>{if(void 0!==e.layout&&!U.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}};q.displayName="StaticImage",q.propTypes=F;const H=R(M);H.displayName="StaticImage",H.propTypes=F},8843:function(e,t,n){"use strict";n.d(t,{A:function(){return a}});var r=n(6540);function a(e){let{title:t,children:n}=e;return r.createElement("article",{className:"article-wrapper"},r.createElement("h3",null,t),n)}},9949:function(e,t,n){"use strict";n.d(t,{A:function(){return T}});var r={};n.r(r),n.d(r,{Card:function(){return p},CardBusinessDetails:function(){return m},CardPerson:function(){return g},CardProgram:function(){return h},CardStory:function(){return y},CardTheme:function(){return b}});var a=n(6540),o=n(8453),i=n(4194),c=n(2532);var s=e=>{let{location:t,links:r}=e;return a.createElement("div",{className:"content"},a.createElement("h1",{className:"logo"},a.createElement(i.Link,{className:"logo-link",to:"/"},a.createElement(c.S,{width:267,src:"../images/logo-black.png",alt:"Morgan Stanley Logo",placeholder:"none",__imageData:n(7967)}))),a.createElement("div",{className:"header-nav"},a.createElement("ul",null,Object.keys(r).map((function(e){var n;const o=r[e],c=null!==(n=t.pathname)&&void 0!==n&&n.includes(o)?"nav-link-current":"nav-link";return a.createElement("li",{className:c,key:e},a.createElement(i.Link,{to:o},e))})))))};function l(){const e=new Date;return a.createElement("footer",{className:"footer-main"},a.createElement("div",{className:"content"},a.createElement("ul",null,a.createElement("li",null,a.createElement("a",{href:"https://github.com/MorganStanley/",target:"_blank",rel:"noreferrer"},"Github")),a.createElement("li",null,a.createElement("a",{href:"https://MorganStanley.com",target:"_blank",rel:"noreferrer"},"Morgan Stanley")),a.createElement("hr",null)),a.createElement("p",null,"©",e.getFullYear()," Morgan Stanley. All rights reserved.")))}var u=n(2269),d=n(8843);var f=n(5938);function p(e){let{category:t,title:n,image:r,color:o,children:i,link:c,type:s="card-base"}=e;const l="card "+s,u="eyebrow "+(o||"");return a.createElement("section",{className:l},a.createElement("div",{className:"card-inner-wrapper"},r?a.createElement("div",{className:"card-image"},c?a.createElement("a",{href:c},a.createElement("img",{src:r,alt:n})):a.createElement("img",{src:r,alt:n})):"",a.createElement("div",{className:"eyebrow-wrapper"},a.createElement("div",{className:u},t)),a.createElement("h3",null,c?a.createElement("a",{href:c},n):n),i))}function m(e){return a.createElement(p,Object.assign({type:"card-business-details"},e))}function g(e){let{children:t,...n}=e;return a.createElement(p,Object.assign({type:"card-person"},n),a.createElement("div",{className:"card-person-title"},t))}function h(e){let{image:t,children:n,...r}=e;return a.createElement(p,Object.assign({type:"card-program"},r),a.createElement("div",{className:"card-program-child"},n))}function y(e){let{children:t,...n}=e;return a.createElement(p,Object.assign({type:"card-story"},n))}function b(e){let{children:t,...n}=e;return a.createElement(p,Object.assign({type:"card-theme"},n))}var v=function(e){let{title:t,children:n}=e;return a.createElement("div",{className:"hero-wrapper content"},a.createElement("h2",null,t),a.createElement("section",{className:"hero"},a.createElement("article",{className:"hero-content"},n)))};const w={Article:d.A,ButtonLink:function(e){let{href:t,text:n,align:r,variant:o=""}=e,i="right"===r?"button align-right":"button";return i="outlined"===o?i+" outlined":i,a.createElement("a",{className:i,href:t},n)},CardCollection:function(e){let{title:t,description:n,color:r="primary",children:o,cols:i=1}=e;const c="card-collection-container "+r,s="card-collection card-collection-cols-"+i;return a.createElement("div",{className:c},n||t?a.createElement(f.A,{title:t},n):null,a.createElement("div",{className:s},o))},...r,Example:function(e){let{children:t}=e;return a.createElement("div",{className:"example-box"},t)},Hero:v,Section:f.A},E={Documentation:"/documentation"};var T=function(e){let{data:t,location:n,children:r}=e;const{documentationUrl:i,title:c}=t.site.siteMetadata;return i&&(E.Documentation=i),a.createElement(a.Fragment,null,a.createElement(u.A,{title:c}),a.createElement("header",{className:"header-main"},a.createElement(s,{location:n,links:E})),a.createElement("main",{className:"body-main"},a.createElement(o.xA,{components:w},r)),a.createElement(l,null))}},5938:function(e,t,n){"use strict";var r=n(6540);t.A=function(e){let{category:t,title:n,image:a,color:o="",children:i}=e;const c="eyebrow "+o;return r.createElement("section",{className:"section"},a?r.createElement("img",{src:a,alt:n}):"",r.createElement("div",{className:c},t),r.createElement("h3",null,n),i)}},2269:function(e,t,n){"use strict";n.d(t,{A:function(){return ye}});var r,a,o,i,c=n(6540),s=n(5556),l=n.n(s),u=n(2098),d=n.n(u),f=n(115),p=n.n(f),m=n(8828),g=n.n(m),h="bodyAttributes",y="htmlAttributes",b="titleAttributes",v={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},w=(Object.keys(v).map((function(e){return v[e]})),"charset"),E="cssText",T="href",C="http-equiv",S="innerHTML",A="itemprop",O="name",k="property",x="rel",L="src",N="target",j={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},I="defaultTitle",P="defer",M="encodeSpecialCharacters",_="onChangeClientState",R="titleTemplate",q=Object.keys(j).reduce((function(e,t){return e[j[t]]=t,e}),{}),D=[v.NOSCRIPT,v.SCRIPT,v.STYLE],U="data-react-helmet",F="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},H=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),z=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},B=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},W=function(e){return!1===(!(arguments.length>1&&void 0!==arguments[1])||arguments[1])?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},Y=function(e){var t=J(e,v.TITLE),n=J(e,R);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=J(e,I);return t||r||void 0},K=function(e){return J(e,_)||function(){}},V=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return z({},e,t)}),{})},G=function(e,t){return t.filter((function(e){return void 0!==e[v.BASE]})).map((function(e){return e[v.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),a=0;a<r.length;a++){var o=r[a].toLowerCase();if(-1!==e.indexOf(o)&&n[o])return t.concat(n)}return t}),[])},$=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&te("Helmet: "+e+' should be of type "Array". Instead found type "'+F(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var a={};n.filter((function(e){for(var n=void 0,o=Object.keys(e),i=0;i<o.length;i++){var c=o[i],s=c.toLowerCase();-1===t.indexOf(s)||n===x&&"canonical"===e[n].toLowerCase()||s===x&&"stylesheet"===e[s].toLowerCase()||(n=s),-1===t.indexOf(c)||c!==S&&c!==E&&c!==A||(n=c)}if(!n||!e[n])return!1;var l=e[n].toLowerCase();return r[n]||(r[n]={}),a[n]||(a[n]={}),!r[n][l]&&(a[n][l]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var o=Object.keys(a),i=0;i<o.length;i++){var c=o[i],s=g()({},r[c],a[c]);r[c]=s}return e}),[]).reverse()},J=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},Q=(r=Date.now(),function(e){var t=Date.now();t-r>16?(r=t,e(t)):setTimeout((function(){Q(e)}),0)}),X=function(e){return clearTimeout(e)},Z="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||Q:n.g.requestAnimationFrame||Q,ee="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||X:n.g.cancelAnimationFrame||X,te=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},ne=null,re=function(e,t){var n=e.baseTag,r=e.bodyAttributes,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,c=e.noscriptTags,s=e.onChangeClientState,l=e.scriptTags,u=e.styleTags,d=e.title,f=e.titleAttributes;ie(v.BODY,r),ie(v.HTML,a),oe(d,f);var p={baseTag:ce(v.BASE,n),linkTags:ce(v.LINK,o),metaTags:ce(v.META,i),noscriptTags:ce(v.NOSCRIPT,c),scriptTags:ce(v.SCRIPT,l),styleTags:ce(v.STYLE,u)},m={},g={};Object.keys(p).forEach((function(e){var t=p[e],n=t.newTags,r=t.oldTags;n.length&&(m[e]=n),r.length&&(g[e]=p[e].oldTags)})),t&&t(),s(e,m,g)},ae=function(e){return Array.isArray(e)?e.join(""):e},oe=function(e,t){void 0!==e&&document.title!==e&&(document.title=ae(e)),ie(v.TITLE,t)},ie=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(U),a=r?r.split(","):[],o=[].concat(a),i=Object.keys(t),c=0;c<i.length;c++){var s=i[c],l=t[s]||"";n.getAttribute(s)!==l&&n.setAttribute(s,l),-1===a.indexOf(s)&&a.push(s);var u=o.indexOf(s);-1!==u&&o.splice(u,1)}for(var d=o.length-1;d>=0;d--)n.removeAttribute(o[d]);a.length===o.length?n.removeAttribute(U):n.getAttribute(U)!==i.join(",")&&n.setAttribute(U,i.join(","))}},ce=function(e,t){var n=document.head||document.querySelector(v.HEAD),r=n.querySelectorAll(e+"["+U+"]"),a=Array.prototype.slice.call(r),o=[],i=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===S)n.innerHTML=t.innerHTML;else if(r===E)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[r]?"":t[r];n.setAttribute(r,c)}n.setAttribute(U,"true"),a.some((function(e,t){return i=t,n.isEqualNode(e)}))?a.splice(i,1):o.push(n)})),a.forEach((function(e){return e.parentNode.removeChild(e)})),o.forEach((function(e){return n.appendChild(e)})),{oldTags:a,newTags:o}},se=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},le=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[j[n]||n]=e[n],t}),t)},ue=function(e,t,n){switch(e){case v.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})[U]=!0,a=le(n,r),[c.createElement(v.TITLE,a,e)];var e,n,r,a},toString:function(){return function(e,t,n,r){var a=se(n),o=ae(t);return a?"<"+e+" "+U+'="true" '+a+">"+W(o,r)+"</"+e+">":"<"+e+" "+U+'="true">'+W(o,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case h:case y:return{toComponent:function(){return le(t)},toString:function(){return se(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,a=((r={key:n})[U]=!0,r);return Object.keys(t).forEach((function(e){var n=j[e]||e;if(n===S||n===E){var r=t.innerHTML||t.cssText;a.dangerouslySetInnerHTML={__html:r}}else a[n]=t[e]})),c.createElement(e,a)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var a=Object.keys(r).filter((function(e){return!(e===S||e===E)})).reduce((function(e,t){var a=void 0===r[t]?t:t+'="'+W(r[t],n)+'"';return e?e+" "+a:a}),""),o=r.innerHTML||r.cssText||"",i=-1===D.indexOf(e);return t+"<"+e+" "+U+'="true" '+a+(i?"/>":">"+o+"</"+e+">")}),"")}(e,t,n)}}}},de=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,c=e.noscriptTags,s=e.scriptTags,l=e.styleTags,u=e.title,d=void 0===u?"":u,f=e.titleAttributes;return{base:ue(v.BASE,t,r),bodyAttributes:ue(h,n,r),htmlAttributes:ue(y,a,r),link:ue(v.LINK,o,r),meta:ue(v.META,i,r),noscript:ue(v.NOSCRIPT,c,r),script:ue(v.SCRIPT,s,r),style:ue(v.STYLE,l,r),title:ue(v.TITLE,{title:d,titleAttributes:f},r)}},fe=d()((function(e){return{baseTag:G([T,N],e),bodyAttributes:V(h,e),defer:J(e,P),encode:J(e,M),htmlAttributes:V(y,e),linkTags:$(v.LINK,[x,T],e),metaTags:$(v.META,[O,w,C,k,A],e),noscriptTags:$(v.NOSCRIPT,[S],e),onChangeClientState:K(e),scriptTags:$(v.SCRIPT,[L,S],e),styleTags:$(v.STYLE,[E],e),title:Y(e),titleAttributes:V(b,e)}}),(function(e){ne&&ee(ne),e.defer?ne=Z((function(){re(e,(function(){ne=null}))})):(re(e),ne=null)}),de)((function(){return null})),pe=(a=fe,i=o=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!p()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case v.SCRIPT:case v.NOSCRIPT:return{innerHTML:t};case v.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,a=e.newChildProps,o=e.nestedChildren;return z({},r,((t={})[n.type]=[].concat(r[n.type]||[],[z({},a,this.mapNestedChildrenToProps(n,o))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,a=e.newProps,o=e.newChildProps,i=e.nestedChildren;switch(r.type){case v.TITLE:return z({},a,((t={})[r.type]=i,t.titleAttributes=z({},o),t));case v.BODY:return z({},a,{bodyAttributes:z({},o)});case v.HTML:return z({},a,{htmlAttributes:z({},o)})}return z({},a,((n={})[r.type]=z({},o),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=z({},t);return Object.keys(e).forEach((function(t){var r;n=z({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return c.Children.forEach(e,(function(e){if(e&&e.props){var a=e.props,o=a.children,i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[q[n]||n]=e[n],t}),t)}(B(a,["children"]));switch(n.warnOnInvalidChildren(e,o),e.type){case v.LINK:case v.META:case v.NOSCRIPT:case v.SCRIPT:case v.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:i,nestedChildren:o});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:i,nestedChildren:o})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=B(e,["children"]),r=z({},n);return t&&(r=this.mapChildrenToProps(t,r)),c.createElement(a,r)},H(t,null,[{key:"canUseDOM",set:function(e){a.canUseDOM=e}}]),t}(c.Component),o.propTypes={base:l().object,bodyAttributes:l().object,children:l().oneOfType([l().arrayOf(l().node),l().node]),defaultTitle:l().string,defer:l().bool,encodeSpecialCharacters:l().bool,htmlAttributes:l().object,link:l().arrayOf(l().object),meta:l().arrayOf(l().object),noscript:l().arrayOf(l().object),onChangeClientState:l().func,script:l().arrayOf(l().object),style:l().arrayOf(l().object),title:l().string,titleAttributes:l().object,titleTemplate:l().string},o.defaultProps={defer:!0,encodeSpecialCharacters:!0},o.peek=a.peek,o.rewind=function(){var e=a.rewind();return e||(e=de({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},i);pe.renderStatic=pe.rewind;var me=pe,ge=n(4194);const he=e=>{let{description:t,lang:n,meta:r,title:a}=e;const{site:o}=(0,ge.useStaticQuery)("3000541721"),i=t||o.siteMetadata.description;return c.createElement(me,{htmlAttributes:{lang:n},title:a,titleTemplate:"%s | "+o.siteMetadata.title,meta:[{name:"description",content:i},{property:"og:title",content:a},{property:"og:description",content:i},{property:"og:type",content:"website"}].concat(r)})};he.defaultProps={lang:"en",meta:[],description:""};var ye=he},115:function(e){var t="undefined"!=typeof Element,n="function"==typeof Map,r="function"==typeof Set,a="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function o(e,i){if(e===i)return!0;if(e&&i&&"object"==typeof e&&"object"==typeof i){if(e.constructor!==i.constructor)return!1;var c,s,l,u;if(Array.isArray(e)){if((c=e.length)!=i.length)return!1;for(s=c;0!=s--;)if(!o(e[s],i[s]))return!1;return!0}if(n&&e instanceof Map&&i instanceof Map){if(e.size!==i.size)return!1;for(u=e.entries();!(s=u.next()).done;)if(!i.has(s.value[0]))return!1;for(u=e.entries();!(s=u.next()).done;)if(!o(s.value[1],i.get(s.value[0])))return!1;return!0}if(r&&e instanceof Set&&i instanceof Set){if(e.size!==i.size)return!1;for(u=e.entries();!(s=u.next()).done;)if(!i.has(s.value[0]))return!1;return!0}if(a&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(i)){if((c=e.length)!=i.length)return!1;for(s=c;0!=s--;)if(e[s]!==i[s])return!1;return!0}if(e.constructor===RegExp)return e.source===i.source&&e.flags===i.flags;if(e.valueOf!==Object.prototype.valueOf&&"function"==typeof e.valueOf&&"function"==typeof i.valueOf)return e.valueOf()===i.valueOf();if(e.toString!==Object.prototype.toString&&"function"==typeof e.toString&&"function"==typeof i.toString)return e.toString()===i.toString();if((c=(l=Object.keys(e)).length)!==Object.keys(i).length)return!1;for(s=c;0!=s--;)if(!Object.prototype.hasOwnProperty.call(i,l[s]))return!1;if(t&&e instanceof Element)return!1;for(s=c;0!=s--;)if(("_owner"!==l[s]&&"__v"!==l[s]&&"__o"!==l[s]||!e.$$typeof)&&!o(e[l[s]],i[l[s]]))return!1;return!0}return e!=e&&i!=i}e.exports=function(e,t){try{return o(e,t)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}},2098:function(e,t,n){"use strict";var r,a=n(6540),o=(r=a)&&"object"==typeof r&&"default"in r?r.default:r;function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var s,l=[];function u(){s=e(l.map((function(e){return e.props}))),d.canUseDOM?t(s):n&&(s=n(s))}var d=function(e){var t,n;function a(){return e.apply(this,arguments)||this}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.peek=function(){return s},a.rewind=function(){if(a.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=s;return s=void 0,l=[],e};var i=a.prototype;return i.UNSAFE_componentWillMount=function(){l.push(this),u()},i.componentDidUpdate=function(){u()},i.componentWillUnmount=function(){var e=l.indexOf(this);l.splice(e,1),u()},i.render=function(){return o.createElement(r,this.props)},a}(a.PureComponent);return i(d,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),i(d,"canUseDOM",c),d}}},8453:function(e,t,n){"use strict";n.d(t,{RP:function(){return o},xA:function(){return c}});var r=n(6540);const a=r.createContext({});function o(e){const t=r.useContext(a);return r.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const i={};function c({components:e,children:t,disableParentContext:n}){let c;return c=n?"function"==typeof e?e({}):e||i:o(e),r.createElement(a.Provider,{value:c},t)}},7967:function(e){"use strict";e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"transparent","images":{"fallback":{"src":"/ComposeUI/static/6fbae7212cd29fc45a5be1a73afb20f8/260db/logo-black.png","srcSet":"/ComposeUI/static/6fbae7212cd29fc45a5be1a73afb20f8/260db/logo-black.png 267w,\\n/ComposeUI/static/6fbae7212cd29fc45a5be1a73afb20f8/0a772/logo-black.png 750w,\\n/ComposeUI/static/6fbae7212cd29fc45a5be1a73afb20f8/9aa9c/logo-black.png 1000w","sizes":"(min-width: 267px) 267px, 100vw"},"sources":[{"srcSet":"/ComposeUI/static/6fbae7212cd29fc45a5be1a73afb20f8/47073/logo-black.webp 267w,\\n/ComposeUI/static/6fbae7212cd29fc45a5be1a73afb20f8/0cb59/logo-black.webp 750w,\\n/ComposeUI/static/6fbae7212cd29fc45a5be1a73afb20f8/ed794/logo-black.webp 1000w","type":"image/webp","sizes":"(min-width: 267px) 267px, 100vw"}]},"width":267,"height":38}')}}]);
//# sourceMappingURL=commons-389bbbce2cd4e0a10b39.js.map