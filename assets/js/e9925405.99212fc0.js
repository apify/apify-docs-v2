"use strict";(self.webpackChunkapify_docs_v2=self.webpackChunkapify_docs_v2||[]).push([[5450],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=s(n),m=a,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(f,i(i({ref:t},l),{},{components:n})):r.createElement(f,i({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},81947:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>m,frontMatter:()=>p,metadata:()=>s,toc:()=>d});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],p={title:"Waiting for dynamic content",description:"You load the page. You execute the correct selectors. Everything should work. It doesn't? Learn how to wait for dynamic loading.",sidebar_position:14.9,slug:"/node-js/waiting-for-dynamic-content"},c=void 0,s={unversionedId:"tutorials/node_js/waiting_for_dynamic_content",id:"tutorials/node_js/waiting_for_dynamic_content",title:"Waiting for dynamic content",description:"You load the page. You execute the correct selectors. Everything should work. It doesn't? Learn how to wait for dynamic loading.",source:"@site/sources/academy/tutorials/node_js/waiting_for_dynamic_content.md",sourceDirName:"tutorials/node_js",slug:"/node-js/waiting-for-dynamic-content",permalink:"/academy/node-js/waiting-for-dynamic-content",draft:!1,editUrl:"https://github.com/apify/apify-docs-v2/edit/master/sources/academy/tutorials/node_js/waiting_for_dynamic_content.md",tags:[],version:"current",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1676374949,formattedLastUpdatedAt:"Feb 14, 2023",sidebarPosition:14.9,frontMatter:{title:"Waiting for dynamic content",description:"You load the page. You execute the correct selectors. Everything should work. It doesn't? Learn how to wait for dynamic loading.",sidebar_position:14.9,slug:"/node-js/waiting-for-dynamic-content"},sidebar:"academy",previous:{title:"How to scrape sites with a shadow DOM",permalink:"/academy/node-js/scraping-shadow-doms"},next:{title:"Scraping a list of URLs from a Google Sheets document",permalink:"/academy/node-js/scraping-urls-list-from-google-sheets"}},l={},d=[],u={toc:d};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Use these helper functions to wait for data:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"page.waitFor")," \xa0in ",(0,o.kt)("a",{parentName:"p",href:"https://pptr.dev/",target:"_blank",rel:"noopener"},"Puppeteer")," (or Puppeteer Scraper (",(0,o.kt)("a",{parentName:"p",href:"https://apify.com/apify/puppeteer-scraper",target:"_blank",rel:"noopener"},"apify/puppeteer-scraper"),")).")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"context.waitFor")," \xa0in Web Scraper (",(0,o.kt)("a",{parentName:"p",href:"https://apify.com/apify/web-scraper",target:"_blank",rel:"noopener"},"apify/web-scraper"),")."))),(0,o.kt)("p",null,"Pass in time in milliseconds or a selector to wait for."),(0,o.kt)("p",null,"Examples:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"await page.waitFor(10000)")," - waits for 10 seconds.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"await context.waitFor('my-selector')")," - waits for ",(0,o.kt)("inlineCode",{parentName:"p"},"my-selector")," to appear on the page."))),(0,o.kt)("p",null,"For details, code examples, and advanced use cases, visit our ",(0,o.kt)("a",{parentName:"p",href:"/platform/tutorials/scraping-dynamic-content",target:null,rel:null},"documentation"),"."))}m.isMDXComponent=!0}}]);