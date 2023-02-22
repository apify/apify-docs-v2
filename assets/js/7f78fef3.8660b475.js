"use strict";(self.webpackChunkapify_docs_v2=self.webpackChunkapify_docs_v2||[]).push([[6765],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),l=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=l(r),m=a,f=d["".concat(i,".").concat(m)]||d[m]||u[m]||o;return r?n.createElement(f,s(s({ref:t},c),{},{components:r})):n.createElement(f,s({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=d;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:a,s[1]=p;for(var l=2;l<o;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},35129:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>p,metadata:()=>l,toc:()=>u});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),s=["components"],p={title:"Block requests in Puppeteer",description:"Why and how to block requests in Puppeteer",sidebar_position:16.2,slug:"/node-js/block-requests-puppeteer"},i=void 0,l={unversionedId:"tutorials/node_js/block_requests_puppeteer",id:"tutorials/node_js/block_requests_puppeteer",title:"Block requests in Puppeteer",description:"Why and how to block requests in Puppeteer",source:"@site/sources/academy/tutorials/node_js/block_requests_puppeteer.md",sourceDirName:"tutorials/node_js",slug:"/node-js/block-requests-puppeteer",permalink:"/academy/node-js/block-requests-puppeteer",draft:!1,editUrl:"https://github.com/apify/apify-docs-v2/edit/master/sources/academy/tutorials/node_js/block_requests_puppeteer.md",tags:[],version:"current",lastUpdatedBy:"Dan Nguyen",lastUpdatedAt:1677076240,formattedLastUpdatedAt:"Feb 22, 2023",sidebarPosition:16.2,frontMatter:{title:"Block requests in Puppeteer",description:"Why and how to block requests in Puppeteer",sidebar_position:16.2,slug:"/node-js/block-requests-puppeteer"},sidebar:"academy",previous:{title:"Using man-in-the-middle proxy to intercept requests in Puppeteer",permalink:"/academy/node-js/using-proxy-to-intercept-requests-puppeteer"},next:{title:"Debugging your Web Scraper pageFunction in browser's console",permalink:"/academy/node-js/debugging-web-scraper"}},c={},u=[],d={toc:u};function m(e){var t=e.components,p=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},d,p,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Unfortunately, in the recent version of Puppeteer, request interception disables native cache and slows down the actor significantly. Therefore it is not recommended to follow examples shown in this article. Instead, use")," ",(0,o.kt)("a",{parentName:"p",href:"https://docs.apify.com/sdk/js/docs/api/puppeteer#puppeteerblockrequestspage-options-promise",target:"_blank",rel:"noopener"},(0,o.kt)("em",{parentName:"a"},"blockRequests"))," ",(0,o.kt)("em",{parentName:"p"},"utility function from")," ",(0,o.kt)("a",{parentName:"p",href:"https://docs.apify.com/sdk/js/",target:"_blank",rel:"noopener"},(0,o.kt)("em",{parentName:"a"},"Apify SDK")),(0,o.kt)("em",{parentName:"p"},". It works through different paths and doesn't slow down your process.")),(0,o.kt)("p",null,"When using Puppeteer, often a webpage will load many resources that are not actually necessary for your use case. For example page could be loading many tracking libraries, that are completely unnecessary for most crawlers, but will cause the page to use more traffic and load slower."),(0,o.kt)("p",null,"For example for this web page: ",(0,o.kt)("a",{parentName:"p",href:"https://edition.cnn.com/",target:"_blank",rel:"noopener"},"https://edition.cnn.com/"),"\nIf we run an ",(0,o.kt)("a",{parentName:"p",href:"https://www.apify.com/jaroslavhejlek/measure-downloaded-bytes",target:"_blank",rel:"noopener"},"Actor")," that measures extracted downloaded data from each response until the page is fully loaded, we get these results:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Actor loading",src:r(92437).Z,width:"1000",height:"450"})),(0,o.kt)("p",null,"And ",(0,o.kt)("a",{parentName:"p",href:"https://api.apify.com/v2/key-value-stores/sE2s9WmvoWFZhTff7/records/debug-screen.png?disableRedirect=true",target:"_blank",rel:"noopener"},"this is how the website it looks"),"."),(0,o.kt)("p",null,"Now if we want to optimise this to keep the webpage looking the same, but ignore unnecessary requests, then after"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const page = await browser.newPage();\n")),(0,o.kt)("p",null,"we could can use this piece of code"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"await page.setRequestInterception(true);\npage.on('request', (request) => {\n\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 if (someCondition) request.abort();\n\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 else request.continue();\n});\n")),(0,o.kt)("p",null,"Where ",(0,o.kt)("inlineCode",{parentName:"p"},"someCondition")," is a custom condition (not actually implemented in the code above) that checks whether a request should be aborted."),(0,o.kt)("p",null,"For our example we will only disable some tracking scripts and then check if everything looks the same."),(0,o.kt)("p",null,"Here is the code used:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"await page.setRequestInterception(true);\npage.on('request', (request) => {\n\xa0 \xa0 const url = request.url();\n\xa0 \xa0 const filters = [\n\xa0 \xa0 \xa0 \xa0 'livefyre',\n\xa0 \xa0 \xa0 \xa0 'moatad',\n\xa0 \xa0 \xa0 \xa0 'analytics',\n\xa0 \xa0 \xa0 \xa0 'controltag',\n\xa0 \xa0 \xa0 \xa0 'chartbeat',\n\xa0 \xa0 ];\n\xa0 \xa0 const shouldAbort = filters.some((urlPart) => url.includes(urlPart));\n\xa0 \xa0 if (shouldAbort) request.abort();\n\xa0 \xa0 else request.continue();\n});\n")),(0,o.kt)("p",null,"With this code set up this is the output:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Improved actor loading",src:r(68030).Z,width:"1000",height:"450"})),(0,o.kt)("p",null,"And except for different ads, ",(0,o.kt)("a",{parentName:"p",href:"https://api.apify.com/v2/key-value-stores/fP9S5c2yBGHdcrga3/records/debug-screen.png?disableRedirect=true",target:"_blank",rel:"noopener"},"the page looks the same"),"."),(0,o.kt)("p",null,"From this we can see, that just by blocking a few analytics and tracking scripts the page was loaded nearly 25 seconds faster and downloaded 35% less data (approximately since the data is measured after it's decompressed)."),(0,o.kt)("p",null,"Hopefully this helps you make your solutions faster and use less resources."))}m.isMDXComponent=!0},92437:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/actor-load-e6fc832092a1c94156fd96b3522c2c3b.png"},68030:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/improved-actor-loading-a1e7b6b855bb90ba1780f19f3653a34c.png"}}]);