"use strict";(self.webpackChunkapify_docs_v2=self.webpackChunkapify_docs_v2||[]).push([[4503],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>g});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),c=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},w={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(r),g=n,u=d["".concat(s,".").concat(g)]||d[g]||w[g]||o;return r?a.createElement(u,i(i({ref:t},p),{},{components:r})):a.createElement(u,i({ref:t},p))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},21968:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>g,frontMatter:()=>l,metadata:()=>c,toc:()=>w});var a=r(87462),n=r(63366),o=(r(67294),r(3905)),i=["components"],l={title:"Basics of crawling",description:"Learn how to crawl the web with your scraper. How to extract links and URLs from web pages and how to manage the collected links to crawl the web.",sidebar_position:1.3,category:"courses",slug:"/web-scraping-for-beginners/crawling"},s="Basics of crawling",c={unversionedId:"webscraping/web_scraping_for_beginners/crawling/index",id:"webscraping/web_scraping_for_beginners/crawling/index",title:"Basics of crawling",description:"Learn how to crawl the web with your scraper. How to extract links and URLs from web pages and how to manage the collected links to crawl the web.",source:"@site/sources/academy/webscraping/web_scraping_for_beginners/crawling/index.md",sourceDirName:"webscraping/web_scraping_for_beginners/crawling",slug:"/web-scraping-for-beginners/crawling",permalink:"/academy/web-scraping-for-beginners/crawling",draft:!1,editUrl:"https://github.com/apify/apify-docs-v2/edit/master/sources/academy/webscraping/web_scraping_for_beginners/crawling/index.md",tags:[],version:"current",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1676374949,formattedLastUpdatedAt:"Feb 14, 2023",sidebarPosition:1.3,frontMatter:{title:"Basics of crawling",description:"Learn how to crawl the web with your scraper. How to extract links and URLs from web pages and how to manage the collected links to crawl the web.",sidebar_position:1.3,category:"courses",slug:"/web-scraping-for-beginners/crawling"},sidebar:"academy",previous:{title:"Saving results to CSV",permalink:"/academy/web-scraping-for-beginners/data-collection/save-to-csv"},next:{title:"Recap! - Data extraction",permalink:"/academy/web-scraping-for-beginners/crawling/recap-collection-basics"}},p={},w=[{value:"How do you crawl?",id:"how-to-crawl",level:2},{value:"Next up",id:"next",level:2}],d={toc:w};function g(e){var t=e.components,r=(0,n.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"basics"},"Basics of crawling"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Learn how to crawl the web with your scraper. How to extract links and URLs from web pages and how to manage the collected links to crawl the web.")),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Welcome to the second section of our ",(0,o.kt)("strong",{parentName:"p"},"Web scraping for beginners")," course. In the ",(0,o.kt)("a",{parentName:"p",href:"/academy/web-scraping-for-beginners/data-collection",target:null,rel:null},"Basics of data collection")," section, we learned how to extract data from a web page. Specifically, our demo e-commerce site, which we'll call ",(0,o.kt)("a",{parentName:"p",href:"https://demo-webstore.apify.org",target:"_blank",rel:"noopener"},"Fake Webstore"),"."),(0,o.kt)("p",null,"In this section, we will take a look at moving between web pages, which we call ",(0,o.kt)("strong",{parentName:"p"},"crawling"),". We will extract data about all of the on-sale products on ",(0,o.kt)("a",{parentName:"p",href:"https://demo-webstore.apify.org/search/on-sale",target:"_blank",rel:"noopener"},"Fake Webstore"),". To do that, we will need to crawl the individual product pages."),(0,o.kt)("h2",{id:"how-to-crawl"},"How do you crawl?"),(0,o.kt)("p",null,"Crawling websites is a fairly straightforward process. We'll start by opening the first web page and extracting all the links (URLs) that lead to the other pages we want to visit. To do that, we'll use the skills learned in the ",(0,o.kt)("a",{parentName:"p",href:"/academy/web-scraping-for-beginners/data-collection",target:null,rel:null},"Basics of data collection")," course. We'll add some extra filtering to make sure we only get the correct URLs. Then, we'll save those URLs, so in case something happens to our scraper, we won't have to extract them again. And, finally, we will visit those URLs one by one."),(0,o.kt)("p",null,"At any point, we can extract URLs, data, or both. Crawling can be separate from data collection but it's not a requirement and, in most projects, it's actually easier and faster to do both at the same time. To summarize, it goes like this:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Visit the start URL."),(0,o.kt)("li",{parentName:"ol"},"Extract next URLs (and data) and save them."),(0,o.kt)("li",{parentName:"ol"},"Visit one of the collected URLs and save data and/or more URLs."),(0,o.kt)("li",{parentName:"ol"},"Repeat 2 and 3 until you have everything you needed.")),(0,o.kt)("h2",{id:"next"},"Next up"),(0,o.kt)("p",null,"First, let's make sure we all understand the foundations. In the ",(0,o.kt)("a",{parentName:"p",href:"/academy/web-scraping-for-beginners/crawling/recap-collection-basics",target:null,rel:null},"next lesson")," we will review the scraper code we already have from the ",(0,o.kt)("a",{parentName:"p",href:"/academy/web-scraping-for-beginners/data-collection",target:null,rel:null},"Basics of data collection")," section of the course."))}g.isMDXComponent=!0}}]);