"use strict";(self.webpackChunkapify_docs_v2=self.webpackChunkapify_docs_v2||[]).push([[4896],{3905:(e,t,o)=>{o.d(t,{Zo:()=>d,kt:()=>u});var n=o(67294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),h=c(o),u=a,m=h["".concat(l,".").concat(u)]||h[u]||p[u]||r;return o?n.createElement(m,s(s({ref:t},d),{},{components:o})):n.createElement(m,s({ref:t},d))}));function u(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=o.length,s=new Array(r);s[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var c=2;c<r;c++)s[c]=o[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,o)}h.displayName="MDXCreateElement"},77002:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var n=o(87462),a=o(63366),r=(o(67294),o(3905)),s=["components"],i={title:"How to scrape sites with a shadow DOM",description:"The shadow DOM enables the isolation of web components, but causes problems for those building web scrapers. Here's an easy workaround.",sidebar_position:14.8,slug:"/node-js/scraping-shadow-doms"},l="How to scrape sites with a shadow DOM",c={unversionedId:"tutorials/node_js/scraping_shadow_doms",id:"tutorials/node_js/scraping_shadow_doms",title:"How to scrape sites with a shadow DOM",description:"The shadow DOM enables the isolation of web components, but causes problems for those building web scrapers. Here's an easy workaround.",source:"@site/sources/academy/tutorials/node_js/scraping_shadow_doms.md",sourceDirName:"tutorials/node_js",slug:"/node-js/scraping-shadow-doms",permalink:"/academy/node-js/scraping-shadow-doms",draft:!1,tags:[],version:"current",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1675350510,formattedLastUpdatedAt:"Feb 2, 2023",sidebarPosition:14.8,frontMatter:{title:"How to scrape sites with a shadow DOM",description:"The shadow DOM enables the isolation of web components, but causes problems for those building web scrapers. Here's an easy workaround.",sidebar_position:14.8,slug:"/node-js/scraping-shadow-doms"},sidebar:"academy",previous:{title:"How to scrape from sitemaps",permalink:"/academy/node-js/scraping-from-sitemaps"},next:{title:"Python tutorials",permalink:"/academy/python"}},d={},p=[],h={toc:p};function u(e){var t=e.components,i=(0,a.Z)(e,s);return(0,r.kt)("wrapper",(0,n.Z)({},h,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"scraping-shadow-doms"},"How to scrape sites with a shadow DOM"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"The shadow DOM enables the isolation of web components, but causes problems for those building web scrapers. Here's an easy workaround.")),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Each website is represented by an HTML DOM, a tree-like structure consisting of HTML elements (e.g. paragraphs, images, videos) and text. ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_shadow_DOM",target:"_blank",rel:"noopener"},"Shadow DOM")," allows the separate DOM trees to be attached to the main DOM while remaining isolated in terms of CSS inheritance and JavaScript DOM manipulation. The CSS and JavaScript codes of separate shadow DOM components do not clash, but the downside is that you can't easily access the content from outside."),(0,r.kt)("p",null,"Let's take a look at this page ",(0,r.kt)("a",{parentName:"p",href:"https://www.alodokter.com/",target:"_blank",rel:"noopener"},"alodokter.com"),". If you click on the menu and open a Chrome debugger, you will see that the menu tree is attached to the main DOM as shadow DOM under the element ",(0,r.kt)("inlineCode",{parentName:"p"},'<top-navbar-view id="top-navbar-view">'),"."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Shadow root of the top-navbar-view custom element",src:o(61673).Z,width:"1396",height:"775"})),(0,r.kt)("p",null,"The rest of the content is rendered the same way. This makes it hard to scrape because ",(0,r.kt)("inlineCode",{parentName:"p"},"document.body.innerText"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"document.getElementsByTagName('a')"),", and all others return an empty result."),(0,r.kt)("p",null,"The content of the menu can be accessed only via the ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/ShadowRoot",target:"_blank",rel:"noopener"},(0,r.kt)("inlineCode",{parentName:"a"},"shadowRoot"))," property. If you use jQuery you can do the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// Find element that is shadow root of menu DOM tree.\nconst shadowRoot = document.getElementById('top-navbar-view').shadowRoot;\n\n// Create a copy of its HTML and use jQuery find links.\nconst links = $(shadowRoot.innerHTML).find('a');\n\n// Get URLs from link elements.\nconst urls = links.map((obj, el) => el.href);\n")),(0,r.kt)("p",null,"However, this isn't very convenient, because you have to find the root element of each component you want to work with, and you can't easily take advantage of all the scripts and tools you already have."),(0,r.kt)("p",null,"So instead of that, we can replace the content of each element containing shadow DOM with the HTML of shadow DOM."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// Iterate over all elements in the main DOM.\nfor (let el of document.getElementsByTagName('*')) {\n   // If element contains shadow root then replace its \n   // content with the HTML of shadow DOM.\n   if (el.shadowRoot) el.innerHTML = el.shadowRoot.innerHTML;\n}\n")),(0,r.kt)("p",null,"After you run this, you can access all the elements and content easily using jQuery or plain JavaScript. The downside is that it breaks all the interactive components because you create a new copy of the shadow DOM HTML content without the JavaScript code and CSS attached, so this must be done after all the content has been rendered."),(0,r.kt)("p",null,"Some websites may contain shadow DOMs recursively inside of shadow DOMs. In these cases, we must replace them with HTML recursively:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// Returns HTML of given shadow DOM.\nconst getShadowDomHtml = (shadowRoot) => {\n    let shadowHTML = '';\n    for (let el of shadowRoot.childNodes) {\n        shadowHTML += el.nodeValue || el.outerHTML;\n    }\n    return shadowHTML;\n};\n\n// Recursively replaces shadow DOMs with their HTML.\nconst replaceShadowDomsWithHtml = (rootElement) => {\n    for (let el of rootElement.querySelectorAll('*')) {\n        if (el.shadowRoot) {\n            replaceShadowDomsWithHtml(shadowRoot);\n            el.innerHTML += getShadowDomHtml(el.shadowRoot);\n        }\n    }\n};\n\nreplaceShadowDomsWithHtml(document.body);\n")))}u.isMDXComponent=!0},61673:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/shadow-023c6b4266de5874b37593ca6e0a0ad6.png"}}]);