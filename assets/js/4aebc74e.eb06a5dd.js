"use strict";(self.webpackChunkapify_docs_v2=self.webpackChunkapify_docs_v2||[]).push([[6124],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(n),g=r,b=d["".concat(c,".").concat(g)]||d[g]||u[g]||o;return n?a.createElement(b,i(i({ref:t},p),{},{components:n})):a.createElement(b,i({ref:t},p))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},50657:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>g,frontMatter:()=>l,metadata:()=>s,toc:()=>u});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),i=["components"],l={title:"Introduction",description:"Start learning about web scraping, web crawling, data collection, and popular tools to start developing your own scraper.",sidebar_position:1.1,category:"courses",slug:"/web-scraping-for-beginners/introduction"},c="[](#introduction) Introduction",s={unversionedId:"web_scraping_for_beginners/introduction",id:"web_scraping_for_beginners/introduction",title:"Introduction",description:"Start learning about web scraping, web crawling, data collection, and popular tools to start developing your own scraper.",source:"@site/sources/academy/web_scraping_for_beginners/introduction.md",sourceDirName:"web_scraping_for_beginners",slug:"/web-scraping-for-beginners/introduction",permalink:"/academy/web-scraping-for-beginners/introduction",draft:!1,tags:[],version:"current",lastUpdatedBy:"Jan B\xe1rta",lastUpdatedAt:1672839242,formattedLastUpdatedAt:"Jan 4, 2023",sidebarPosition:1.1,frontMatter:{title:"Introduction",description:"Start learning about web scraping, web crawling, data collection, and popular tools to start developing your own scraper.",sidebar_position:1.1,category:"courses",slug:"/web-scraping-for-beginners/introduction"},sidebar:"defaultSidebar",previous:{title:"Web scraping for beginners",permalink:"/academy/web-scraping-for-beginners"},next:{title:"Basics of data collection",permalink:"/academy/web-scraping-for-beginners/data-collection"}},p={},u=[{value:" What is data collection?",id:"-what-is-data-collection",level:2},{value:" What is crawling?",id:"-what-is-crawling",level:2},{value:" What is web scraping?",id:"-what-is-web-scraping",level:2},{value:" Next up",id:"-next-up",level:2}],d={toc:u};function g(e){var t=e.components,l=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"-introduction"},(0,o.kt)("a",{parentName:"h1",href:"#introduction",target:null,rel:null})," Introduction"),(0,o.kt)("p",null,"Web scraping or crawling? Data collection, mining, or extraction? You can find various definitions on the web. Let's agree on simple explanations that we will use throughout this beginner course on web scraping."),(0,o.kt)("h2",{id:"-what-is-data-collection"},(0,o.kt)("a",{parentName:"h2",href:"#what-is-data-collection",target:null,rel:null})," What is data collection?"),(0,o.kt)("p",null,"For us, data collection is a process that takes a web page, like an Amazon product page, and collects useful information from the page, such as the product's name and price. Web pages are an unstructured data source and the goal of data collection is to make the information structured and readable to computers. The main sources of data on a web page are HTML documents and API calls, but also images, PDFs, and so on."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"product data collection from Amazon",src:n(8537).Z,width:"1205",height:"513"})),(0,o.kt)("h2",{id:"-what-is-crawling"},(0,o.kt)("a",{parentName:"h2",href:"#what-is-crawling",target:null,rel:null})," What is crawling?"),(0,o.kt)("p",null,"Where data collection focuses on a single page, web crawling (sometimes called spidering \ud83d\udd77) is all about movement between pages or websites. The purpose of crawling is to travel across the website to find pages with the information we want. Crawling and collection can happen simultaneously, while moving from page to page, or separately, where one scraper focuses solely on finding pages with data and another scraper collects the data. The main purpose of crawling is to collect URLs or other identifiers that can be used to move around."),(0,o.kt)("h2",{id:"-what-is-web-scraping"},(0,o.kt)("a",{parentName:"h2",href:"#what-is-web-scraping",target:null,rel:null})," What is web scraping?"),(0,o.kt)("p",null,"We use web scraping as a general term for crawling, collection and all other activities that have the purpose of converting unstructured data from the web to a structured format. In the advanced courses, you'll learn that modern web scraping is about much more than just HTML and URLs."),(0,o.kt)("h2",{id:"-next-up"},(0,o.kt)("a",{parentName:"h2",href:"#next",target:null,rel:null})," Next up"),(0,o.kt)("p",null,"In the ",(0,o.kt)("a",{parentName:"p",href:"/academy/web-scraping-for-beginners/data-collection",target:null,rel:null},"next lesson"),", you will learn about the basic building blocks of each web page. HTML, CSS and JavaScript."))}g.isMDXComponent=!0},8537:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/beginners-data-collection-347a876a69820abe6ac84621e5790d04.webp"}}]);