"use strict";(self.webpackChunkapify_docs_v2=self.webpackChunkapify_docs_v2||[]).push([[4291],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),h=l(r),d=o,w=h["".concat(p,".").concat(d)]||h[d]||c[d]||a;return r?n.createElement(w,s(s({ref:t},u),{},{components:r})):n.createElement(w,s({ref:t},u))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=h;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var l=2;l<a;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},94294:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),s=["components"],i={title:"How to handle blocked requests in PuppeteerCrawler",description:"Getting around website defense mechanisms when crawling",sidebar_position:15.9,slug:"/node-js/handle-blocked-requests-puppeteer"},p=void 0,l={unversionedId:"tutorials/node_js/handle_blocked_requests_puppeteer",id:"tutorials/node_js/handle_blocked_requests_puppeteer",title:"How to handle blocked requests in PuppeteerCrawler",description:"Getting around website defense mechanisms when crawling",source:"@site/sources/academy/tutorials/node_js/handle_blocked_requests_puppeteer.md",sourceDirName:"tutorials/node_js",slug:"/node-js/handle-blocked-requests-puppeteer",permalink:"/academy/node-js/handle-blocked-requests-puppeteer",draft:!1,editUrl:"https://github.com/apify/apify-docs-v2/edit/master/sources/academy/tutorials/node_js/handle_blocked_requests_puppeteer.md",tags:[],version:"current",lastUpdatedBy:"Percival Villalva",lastUpdatedAt:1677506349,formattedLastUpdatedAt:"Feb 27, 2023",sidebarPosition:15.9,frontMatter:{title:"How to handle blocked requests in PuppeteerCrawler",description:"Getting around website defense mechanisms when crawling",sidebar_position:15.9,slug:"/node-js/handle-blocked-requests-puppeteer"},sidebar:"academy",previous:{title:"How to save screenshots from puppeteer",permalink:"/academy/node-js/how-to-save-screenshots-puppeteer"},next:{title:"Filter out blocked proxies using sessions",permalink:"/academy/node-js/filter-blocked-requests-using-sessions"}},u={},c=[],h={toc:c};function d(e){var t=e.components,r=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,n.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"One of the main defense mechanisms websites use to ensure they are not scraped by bots is allowing only a limited number of requests from a specific IP address. That's why Apify provides a ",(0,a.kt)("a",{parentName:"p",href:"https://www.apify.com/docs/proxy",target:"_blank",rel:"noopener"},"proxy")," component with intelligent rotation. With a large enough pool of proxies, you can multiply the number of allowed requests per day to easily cover your crawling needs. Let's look at how we can rotate proxies when using our ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/apify/apify-sdk-js",target:"_blank",rel:"noopener"},"JavaScript SDK"),"."),(0,a.kt)("h1",{id:"basiccrawler"},"BasicCrawler"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Getting around website defense mechanisms when crawling")),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Setting proxy rotation in ",(0,a.kt)("a",{parentName:"p",href:"https://crawlee.dev/api/basic-crawler/class/BasicCrawler",target:"_blank",rel:"noopener"},"BasicCrawler")," is pretty simple. When using plain HTTP requests (like with the popular '",(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/request-promise",target:"_blank",rel:"noopener"},"request-promise"),"' npm package), a fresh proxy is set up on each request."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const Apify = require('apify')\nconst requestPromise = require('request-promise')\nconst PROXY_PASSWORD = process.env.APIFY_PROXY_PASSWORD\nconst proxyUrl = `http://auto:${PROXY_PASSWORD}@proxy.apify.com`\n\nconst crawler = new Apify.BasicCrawler({\n\xa0 \xa0 requestList: someInitializedRequestList,\n\xa0 \xa0 handleRequestFunction: async ({request}) => {\n\xa0 \xa0 \xa0 \xa0 const response = await requestPromise ({\n\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 url: request.url,\n\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 proxy: proxyUrl\n\xa0 \xa0 \xa0 \xa0 })\n\xa0 \xa0}\n})\n")),(0,a.kt)("p",null,"Each time handleRequestFunction is executed in this example, requestPromise will send a request through the least used proxy for that target domain. This way you will not easily burn you through your proxies."),(0,a.kt)("h1",{id:"puppeteer-crawler"},"Puppeteer Crawler"),(0,a.kt)("p",null,"With ",(0,a.kt)("a",{parentName:"p",href:"https://docs.apify.com/sdk/js/docs/api/puppeteer-crawler",target:"_blank",rel:"noopener"},"PuppeteerCrawler")," the situation is little more complicated. That's because you have to restart the browser to change the proxy the browser is using. By default, PuppeteerCrawler restarts the browser every 100 requests, which can lead to a number of requests being wasted because the IP address the browser is using is already blocked by the website."),(0,a.kt)("p",null,"The straightforward solution would be to set the 'retireInstanceAfterRequestCount' option to 1. PuppeteerCrawler would then rotate the proxies in the same way as BasicCrawler. While this approach could sometimes be useful for the toughest websites, the price you pay is in performance. Restarting the browser is an expensive operation."),(0,a.kt)("p",null,"That's why PuppeteerCrawler offers a utility retire() function through a PuppeteerPool class. You can access PuppeteerPool by simply passing it into the object parameter of gotoFunction or handlePageFunction."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const crawler = new PuppeteerCrawler({\n\xa0 \xa0 requestList: someInitializedRequestList,\n\xa0 \xa0 launchPuppeteerOptions:{\n\xa0 \xa0 \xa0 \xa0 useApifyProxy: true\n\xa0 \xa0 },\n\xa0 \xa0 handlePageFunction: async ({request, page, puppeteerPool}) => {\n\xa0 \xa0 \xa0 \xa0 \xa0// you are on the page now\n\xa0 \xa0 }\n\n})\n")),(0,a.kt)("p",null,"It is really up to a developer to spot if something is wrong with his request. There are ",(0,a.kt)("a",{parentName:"p",href:"https://kb.apify.com/tips-and-tricks/several-tips-how-to-bypass-website-anti-scraping-protections",target:"_blank",rel:"noopener"},"many ways")," a website can interfere with your crawling. Page loading can be cancelled right away, it can timeout, the page can display a captcha, some error or warning message, or the data may be just missing or corrupted. The developer can then choose if he will try to handle these problems in the code or just focus on receiving the proper data. Either way, if the request went wrong, you should throw a proper error."),(0,a.kt)("p",null,"Now that we know when the request is blocked, we can use the retire() function and continue crawling with a new proxy. Google is one of the most popular websites for scrapers, so let's code some simple Google search crawler. The two main blocking mechanisms used by Google is either to display their (in)famous 'sorry' captcha or to not load the page at all so we will focus on covering these."),(0,a.kt)("p",null,"For example, let's assume we have already initialized a requestList of Google search pages. Let's show how you can use the retire() function in both gotoFunction and handlePageFunction."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const crawler = new Apify.PuppeteerCrawler({\n\xa0 \xa0 \xa0 \xa0 requestList: someInitializedRequestList,\n\xa0 \xa0 \xa0 \xa0 launchPuppeteerOptions: {\n\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 useApifyProxy: true,\n\xa0 \xa0 \xa0 \xa0 },\n\xa0 \xa0 \xa0 \xa0 gotoFunction : async ({ request, page, puppeteerPool }) => {\n\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 const response = page.goto(request.url).catch(() => null)\n\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 if (!response) {\n\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 await puppeteerPool.retire(page.browser());\n\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 throw new Error(`Page didn't load for ${request.url}`);\n\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 }\n\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 return response;\n\xa0 \xa0 \xa0 \xa0 },\n\xa0 \xa0 \xa0 \xa0 handlePageFunction: async ({ request, page, puppeteerPool }) => {\n\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 if (page.url().includes('sorry')) {\n\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 await puppeteerPool.retire(page.browser());\n\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 throw new Error(`We got captcha for ${request.url}`);\n\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 }\n\xa0 \xa0 \xa0 \xa0 },\n\xa0 \xa0 \xa0 \xa0 retireInstanceAfterRequestCount:50\n\xa0 \xa0 });\n\nApify.main(async() => {\n\xa0 \xa0 \xa0await crawler.run();\n});\n")),(0,a.kt)("p",null,"So now we have a crawler that catches the most common blocking issues on Google. In gotoFunction we will catch if the page doesn't load and in the handlePageFunction we check if we were redirected to the 'sorry page'. In both cases we throw an error afterwards so the request is added back to the crawling queue (otherwise the crawler would think everything was okay and would treat that request as handled)."))}d.isMDXComponent=!0}}]);