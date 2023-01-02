"use strict";(self.webpackChunkapify_docs_v2=self.webpackChunkapify_docs_v2||[]).push([[1815],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>u});var a=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=a.createContext({}),p=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=p(r),f=o,u=d["".concat(c,".").concat(f)]||d[f]||m[f]||n;return r?a.createElement(u,s(s({ref:t},l),{},{components:r})):a.createElement(u,s({ref:t},l))}));function u(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,s=new Array(n);s[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[d]="string"==typeof e?e:o,s[1]=i;for(var p=2;p<n;p++)s[p]=r[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},41085:(e,t,r)=>{r.d(t,{Z:()=>n});var a=r(67294);const o="card-grid_OG_1";function n(e){var t=e.children;return a.createElement("div",{className:o},t)}},96168:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>g,contentTitle:()=>h,default:()=>w,frontMatter:()=>u,metadata:()=>y,toc:()=>b});var a=r(87462),o=r(63366),n=r(67294),s=r(3905),i=r(39960),c=r(93123),p=function(e){var t=e.cardItem,r=e.href,a=e.isExternalLink;return n.createElement(i.Z,{to:r},n.createElement("span",{style:{display:"flex",flexDirection:"row",alignItems:"flex-start"}},n.createElement("span",null,"\ud83d\uddd2\ufe0f"),n.createElement("span",{style:{marginLeft:"0.5rem",marginRight:"0.3rem"}},t),a&&n.createElement(n.Fragment,null,n.createElement("span",{style:{flex:1}}),n.createElement("span",null,"\ud83d\udd17"))))};const l=function(e){var t=e.title,r=e.items;return n.createElement("div",{className:c.Z.card},n.createElement("h4",{className:c.Z["card-header"]},t),n.createElement("ul",{className:c.Z["card-links"]},r.map((function(e,t){return n.createElement("li",{key:t},n.createElement(p,e))}))))};var d=r(41085);const m=JSON.parse('{"Get started":[{"cardItem":"What is Apify?","href":"/platform/about"},{"cardItem":"Quick start","href":"/platform/tutorials/quick-start"},{"cardItem":"Start using Apify scrapers","href":"/platform/tutorials/apify-scrapers/getting-started"},{"cardItem":"Learn to use Web Scraper","href":"/platform/tutorials/apify-scrapers/web-scraper"},{"cardItem":"Take a video tour of the platform","href":"https://www.youtube.com/watch?v=nn-bCRvhNUM","isExternalLink":true},{"cardItem":"Apify vocabulary","href":"https://help.apify.com/en/articles/3408158-apify-vocabulary","isExternalLink":true},{"cardItem":"What is an actor?","href":"/platform/actors"},{"cardItem":"What is web scraping?","href":"/platform/web-scraping-101"}],"Guides":[{"cardItem":"Actor tasks","href":"/platform/actors/tasks"},{"cardItem":"Run an actor and retrieve data via API","href":"/platform/tutorials/integrations/run-actor-and-retrieve-data-via-api"},{"cardItem":"Log into a website","href":"/platform/tutorials/log-into-a-website-using-puppeteer"},{"cardItem":"Integrations","href":"/platform/tutorials/integrations"},{"cardItem":"Use Apify from PHP","href":"/platform/tutorials/use-apify-from-php"},{"cardItem":"Automate repetitive tasks","href":"/platform/robotic-process-automation"},{"cardItem":"Process data in Python with Pandas","href":"/platform/tutorials/process-data-using-python"}],"Web scraping":[{"cardItem":"Web scraping academy","href":"https://developers.apify.com/academy/web-scraping-for-beginners","isExternalLink":true},{"cardItem":"Basics of data collection","href":"https://developers.apify.com/academy/web-scraping-for-beginners/data-collection","isExternalLink":true},{"cardItem":"Scrape Twitter","href":"https://blog.apify.com/how-to-scrape-tweets-and-more-on-twitter-59330e6fb522","isExternalLink":true},{"cardItem":"Scrape Facebook","href":"https://blog.apify.com/how-to-scrape-facebook-pages-posts-comments-photos-and-more-425ebef352d8","isExternalLink":true},{"cardItem":"Scrape Amazon","href":"https://blog.apify.com/step-by-step-guide-to-scraping-amazon-c3c8b481333","isExternalLink":true},{"cardItem":"Analyze page content before scraping","href":"/platform/web-scraping-101/web-scraping-techniques"},{"cardItem":"Analyze pages and fix errors","href":"/platform/tutorials/analyze-pages-and-fix-errors"},{"cardItem":"Scrape data in Python with Beautiful Soup","href":"/platform/tutorials/scrape-data-using-python"}],"Platform features":[{"cardItem":"Proxy","href":"/platform/proxy"},{"cardItem":"API Docs","href":"/platform/api/v2"},{"cardItem":"Integrate with the Apify platform","href":"/platform/tutorials/integrations"},{"cardItem":"Manage data","href":"/platform/storage"},{"cardItem":"Schedule actor runs","href":"/platform/schedules"},{"cardItem":"Monitor actor and task runs","href":"/platform/monitoring"}],"Reduce blocking":[{"cardItem":"Connect to Apify Proxy","href":"/platform/proxy/connection-settings"},{"cardItem":"Bypass anti-scraping techniques","href":"/platform/web-scraping-101/anti-scraping-techniques"},{"cardItem":"Use a proxy in your browser","href":"https://help.apify.com/en/articles/3858935-how-to-use-a-proxy-in-your-browser","isExternalLink":true},{"cardItem":"Manage proxies in Apify SDK","href":"https://sdk.apify.com/docs/guides/proxy-management","isExternalLink":true},{"cardItem":"Reduce blocking using sessions in SDK","href":"https://sdk.apify.com/docs/guides/session-management","isExternalLink":true}],"Build actors":[{"cardItem":"Meet the Apify SDK","href":"https://sdk.apify.com","isExternalLink":true},{"cardItem":"Meet Crawlee","href":"https://crawlee.dev/docs","isExternalLink":true},{"cardItem":"Build your first crawler","href":"https://crawlee.dev/docs/quick-start","isExternalLink":true},{"cardItem":"Apify SDK API reference","href":"https://sdk.apify.com/api/apify","isExternalLink":true},{"cardItem":"Actor code examples","href":"https://crawlee.dev/docs/examples/basic-crawler","isExternalLink":true},{"cardItem":"Crawl a site using Cheerio Scraper","href":"https://crawlee.dev/docs/examples/cheerio-crawler","isExternalLink":true},{"cardItem":"Manage requests in SDK","href":"https://sdk.apify.com/docs/guides/request-storage","isExternalLink":true},{"cardItem":"Manage results in SDK","href":"https://sdk.apify.com/docs/guides/result-storage","isExternalLink":true}]}');var f=["components"],u={title:"Home",description:"Mold our tools any way you want to scrape websites or automate repetitive tasks. Find the solution to your task here or use the Search box above.",sidebar_position:1,slug:"/"},h=void 0,y={unversionedId:"index",id:"index",title:"Home",description:"Mold our tools any way you want to scrape websites or automate repetitive tasks. Find the solution to your task here or use the Search box above.",source:"@site/sources/platform/index.mdx",sourceDirName:".",slug:"/",permalink:"/platform/",draft:!1,tags:[],version:"current",lastUpdatedBy:"Jind\u0159ich B\xe4r",lastUpdatedAt:1672675416,formattedLastUpdatedAt:"Jan 2, 2023",sidebarPosition:1,frontMatter:{title:"Home",description:"Mold our tools any way you want to scrape websites or automate repetitive tasks. Find the solution to your task here or use the Search box above.",sidebar_position:1,slug:"/"},sidebar:"docs",next:{title:"About",permalink:"/platform/about"}},g={},b=[],v={toc:b};function w(e){var t=e.components,r=(0,o.Z)(e,f);return(0,s.kt)("wrapper",(0,a.Z)({},v,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Mold our tools any way you want to scrape websites or automate repetitive tasks. Find the solution to your task here or use the Search box above."),(0,s.kt)(d.Z,{mdxType:"CardGrid"},Object.entries(m).map((function(e){var t=e[0],r=e[1];return(0,s.kt)(l,{title:t,items:r,mdxType:"PlatformCard"})}))))}w.isMDXComponent=!0},93123:(e,t,r)=>{r.d(t,{Z:()=>a});const a={card:"card_rzdH","card-hoverable":"card-hoverable_vOsI","card-image-container":"card-image-container__PKF","card-header":"card-header_xEYF","card-links":"card-links_dHyf"}}}]);