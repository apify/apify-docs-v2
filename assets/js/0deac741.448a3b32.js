"use strict";(self.webpackChunkapify_docs_v2=self.webpackChunkapify_docs_v2||[]).push([[7076],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(a),b=r,h=u["".concat(s,".").concat(b)]||u[b]||d[b]||o;return a?n.createElement(h,i(i({ref:t},p),{},{components:a})):n.createElement(h,i({ref:t},p))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=b;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}b.displayName="MDXCreateElement"},46234:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>b,frontMatter:()=>l,metadata:()=>c,toc:()=>u});var n=a(87462),r=a(63366),o=(a(67294),a(3905)),i=["components"],l={title:"Basics of data collection",description:"Learn about HTML, CSS, and JavaScript, the basic building blocks of a website, and how to use them in web scraping and data collection.",sidebar_position:1.2,category:"courses",slug:"/web-scraping-for-beginners/data-collection"},s="[](#basics) Basics of data collection",c={unversionedId:"web_scraping_for_beginners/data_collection/index",id:"web_scraping_for_beginners/data_collection/index",title:"Basics of data collection",description:"Learn about HTML, CSS, and JavaScript, the basic building blocks of a website, and how to use them in web scraping and data collection.",source:"@site/sources/academy/web_scraping_for_beginners/data_collection/index.md",sourceDirName:"web_scraping_for_beginners/data_collection",slug:"/web-scraping-for-beginners/data-collection",permalink:"/academy/web-scraping-for-beginners/data-collection",draft:!1,tags:[],version:"current",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1672838848,formattedLastUpdatedAt:"Jan 4, 2023",sidebarPosition:1.2,frontMatter:{title:"Basics of data collection",description:"Learn about HTML, CSS, and JavaScript, the basic building blocks of a website, and how to use them in web scraping and data collection.",sidebar_position:1.2,category:"courses",slug:"/web-scraping-for-beginners/data-collection"},sidebar:"defaultSidebar",previous:{title:"Introduction",permalink:"/academy/web-scraping-for-beginners/introduction"},next:{title:"Browser DevTools - I",permalink:"/academy/web-scraping-for-beginners/data-collection/browser-devtools"}},p={},u=[{value:" HTML",id:"-html",level:2},{value:" CSS",id:"-css",level:2},{value:" JavaScript",id:"-javascript",level:2},{value:" Next up",id:"-next-up",level:2}],d={toc:u};function b(e){var t=e.components,a=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"-basics-of-data-collection"},(0,o.kt)("a",{parentName:"h1",href:"#basics",target:null,rel:null})," Basics of data collection"),(0,o.kt)("p",null,"Every web scraping project starts with some detective work. To a human, it's completely obvious where the data is on the web page, but a computer needs very precise instructions to find the data we want. There are three elementary components of each website that we can leverage to give those instructions: HTML, CSS, and JavaScript."),(0,o.kt)("h2",{id:"-html"},(0,o.kt)("a",{parentName:"h2",href:"#html",target:null,rel:null})," HTML"),(0,o.kt)("p",null,"For the browser to be able to show you the web page with all its text and images, the data needs to be present somewhere. This data source is called HTML (HyperText Markup Language) and it gets downloaded to your computer whenever you open a website. If you want to extract data from a website, you need to show your computer where to find it in the HTML."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"To learn about HTML, we recommend browsing the ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTML",target:"_blank",rel:"noopener"},"MDN tutorials on HTML"),".")),(0,o.kt)("h2",{id:"-css"},(0,o.kt)("a",{parentName:"h2",href:"#css",target:null,rel:null})," CSS"),(0,o.kt)("p",null,"CSS (Cascading Style Sheets) is a markup language that is used to give websites their style. It controls shapes, colors, positioning and even animations. The style is then added to the page's HTML and together, they define the page's content and structure. In web scraping, we can leverage CSS to find the data we want using CSS selectors."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Find more information on CSS and CSS selectors in the ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/CSS",target:"_blank",rel:"noopener"},"MDN tutorials on CSS"),".")),(0,o.kt)("h2",{id:"-javascript"},(0,o.kt)("a",{parentName:"h2",href:"#javascript",target:null,rel:null})," JavaScript"),(0,o.kt)("p",null,"HTML and CSS give websites their structure and style, but they are static. To be able to meaningfully interact with a website, you need to throw JavaScript into the mix. It is the language of the web and you don't need to be a programmer to learn the basics. You don't even need any special software, because you can try it right now, in your browser."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"If you want to dive deeper into JavaScript, check out ",(0,o.kt)("a",{parentName:"p",href:"https://javascript.info/",target:"_blank",rel:"noopener"},"this great tutorial"),".")),(0,o.kt)("h2",{id:"-next-up"},(0,o.kt)("a",{parentName:"h2",href:"#next",target:null,rel:null})," Next up"),(0,o.kt)("p",null,"We will show you ",(0,o.kt)("a",{parentName:"p",href:"/academy/web-scraping-for-beginners/data-collection/browser-devtools",target:null,rel:null},"how to use the browser DevTools")," to inspect and interact with a web page."))}b.isMDXComponent=!0}}]);