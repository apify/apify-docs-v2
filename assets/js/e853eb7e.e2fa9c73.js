"use strict";(self.webpackChunkapify_docs_v2=self.webpackChunkapify_docs_v2||[]).push([[8475],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),l=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=l(a),m=r,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return a?n.createElement(h,i(i({ref:t},c),{},{components:a})):n.createElement(h,i({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var l=2;l<o;l++)i[l]=a[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},37396:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>p,metadata:()=>l,toc:()=>u});var n=a(87462),r=a(63366),o=(a(67294),a(3905)),i=["components"],p={title:"Scraping dynamic content",description:"Wait for dynamically loaded content when web scraping. See code examples and a detailed breakdown for setting timeouts and custom wait functions.",sidebar_position:3.5,slug:"/tutorials/scraping-dynamic-content"},s="Scraping dynamic content",l={unversionedId:"tutorials/scraping_dynamic_content",id:"tutorials/scraping_dynamic_content",title:"Scraping dynamic content",description:"Wait for dynamically loaded content when web scraping. See code examples and a detailed breakdown for setting timeouts and custom wait functions.",source:"@site/sources/platform/tutorials/scraping_dynamic_content.md",sourceDirName:"tutorials",slug:"/tutorials/scraping-dynamic-content",permalink:"/platform/tutorials/scraping-dynamic-content",draft:!1,tags:[],version:"current",lastUpdatedBy:"Jind\u0159ich B\xe4r",lastUpdatedAt:1675097992,formattedLastUpdatedAt:"Jan 30, 2023",sidebarPosition:3.5,frontMatter:{title:"Scraping dynamic content",description:"Wait for dynamically loaded content when web scraping. See code examples and a detailed breakdown for setting timeouts and custom wait functions.",sidebar_position:3.5,slug:"/tutorials/scraping-dynamic-content"},sidebar:"docs",previous:{title:"Building public actors",permalink:"/platform/tutorials/building-public-actors"},next:{title:"Log into a website using Puppeteer",permalink:"/platform/tutorials/log-into-a-website-using-puppeteer"}},c={},u=[{value:"Quick summary",id:"quick-summary",level:2},{value:"How page loading works",id:"how-page-loading-works",level:2},{value:"How to wait for dynamic content",id:"how-to-wait-for-dynamic-content",level:2},{value:"http-request / Cheerio Scraper",id:"http-request-cheerio-scraper",level:3},{value:"Web Scraper / Puppeteer Scraper / Puppeteer",id:"web-scraper-puppeteer-scraper-puppeteer",level:3},{value:"waitFor function",id:"waitfor-function",level:3},{value:"Testing it",id:"testing-it",level:3},{value:"Timeout and errors",id:"timeout-and-errors",level:3},{value:"Advanced use cases",id:"advanced-use-cases",level:2},{value:"waitForFunction",id:"waitforfunction",level:3},{value:"waitForResponse",id:"waitforresponse",level:3},{value:"Custom waiting functions",id:"custom-waiting-functions",level:2}],d={toc:u};function m(e){var t=e.components,p=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},d,p,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"scraping-dynamic-content"},"Scraping dynamic content"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Wait for dynamically loaded content when web scraping. See code examples and a detailed breakdown for setting timeouts and custom wait functions.")),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Many websites load data in the background via ",(0,o.kt)("a",{parentName:"p",href:"/platform/web-scraping-101/web-scraping-techniques",target:null,rel:null},"XHR requests"),". These are usually tracking data, ads and other content that may not be essential for the website to load or is useful to collect periodically. Sometimes though, it may contain actual core page data that you need."),(0,o.kt)("h2",{id:"quick-summary"},"Quick summary"),(0,o.kt)("p",null,"Use these helper functions to wait for the data. Pass in time in milliseconds or the ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors",target:"_blank",rel:"noopener"},"CSS selector")," to wait for."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"page.waitForTimeout")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"page.waitForSelector")," in ",(0,o.kt)("a",{parentName:"p",href:"https://pptr.dev",target:"_blank",rel:"noopener"},"Puppeteer")," (or ",(0,o.kt)("strong",{parentName:"p"},"Puppeteer Scraper")," (",(0,o.kt)("a",{parentName:"p",href:"https://apify.com/apify/puppeteer-scraper",target:"_blank",rel:"noopener"},"apify/puppeteer-scraper"),")).\nE.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"await page.waitForTimeout(10000)")," - waits for 10 seconds.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"context.waitFor")," in ",(0,o.kt)("strong",{parentName:"p"},"Web Scraper")," (",(0,o.kt)("a",{parentName:"p",href:"https://apify.com/apify/web-scraper",target:"_blank",rel:"noopener"},"apify/web-scraper"),").\nE.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"await context.waitFor('my-selector')")," - waits for ",(0,o.kt)("inlineCode",{parentName:"p"},"my-selector")," to appear on the page."))),(0,o.kt)("h2",{id:"how-page-loading-works"},"How page loading works"),(0,o.kt)("p",null,"Before looking at code examples that solve this problem, let's review what the page loading process looks like."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"HTML document is loaded")," (",(0,o.kt)("inlineCode",{parentName:"p"},"domcontentloaded")," event). This document contains the HTML as it was rendered on the website server. It also includes all the JavaScript that is executed and rendered in the next step. This HTML is what you get when you use ",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/got-scraping",target:"_blank",rel:"noopener"},"got-scraping")," or ",(0,o.kt)("strong",{parentName:"p"},"Cheerio Scraper")," (",(0,o.kt)("a",{parentName:"p",href:"https://apify.com/apify/cheerio-scraper",target:"_blank",rel:"noopener"},"apify/cheerio-scraper"),") (",(0,o.kt)("a",{parentName:"p",href:"https://crawlee.dev/api/cheerio-crawler/class/CheerioCrawler",target:"_blank",rel:"noopener"},"CheerioCrawler")," class).")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"JavaScript is executed and rendered")," (",(0,o.kt)("inlineCode",{parentName:"p"},"load")," event). The page is fully rendered, but may still lack dynamically loaded data.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Network XHR requests are loaded and rendered")," (",(0,o.kt)("inlineCode",{parentName:"p"},"networkidle0")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"networkidle2")," events). Some websites load essential data this way. The execution of these requests may depend on user behavior like in ",(0,o.kt)("a",{parentName:"p",href:"https://www.smashingmagazine.com/2013/05/infinite-scrolling-lets-get-to-the-bottom-of-this/",target:"_blank",rel:"noopener"},"infinite scroll"),".\nThis is when you use Web Scraper or Puppeteer Scraper (",(0,o.kt)("a",{parentName:"p",href:"https://crawlee.dev/api/puppeteer-crawler/class/PuppeteerCrawler",target:"_blank",rel:"noopener"},"PuppeteerCrawler")," class) to get the page. Be careful that pages often track you with additional requests and the load may never end."))),(0,o.kt)("h2",{id:"how-to-wait-for-dynamic-content"},"How to wait for dynamic content"),(0,o.kt)("p",null,"The section below describes how you can wait for dynamic content."),(0,o.kt)("h3",{id:"http-request-cheerio-scraper"},"http-request / Cheerio Scraper"),(0,o.kt)("p",null,"Often, all the essential data are presented in the initial HTML. And scraping it without a browser (without Puppeteer) is much more efficient. That is why we created ",(0,o.kt)("a",{parentName:"p",href:"https://apify.com/apify/cheerio-scraper",target:"_blank",rel:"noopener"},"Cheerio Scraper"),"."),(0,o.kt)("p",null,"But even if data are rendered via JavaScript or loaded dynamically, there are advanced techniques that allow you to reverse-engineer this data and still retain Cheerio's efficiency. For example, you can emulate the requests for dynamic data directly in your code."),(0,o.kt)("h3",{id:"web-scraper-puppeteer-scraper-puppeteer"},"Web Scraper / Puppeteer Scraper / Puppeteer"),(0,o.kt)("p",null,"In 95% of cases, the JavaScript-rendered page that you get with Puppeteer is enough. If you actually need to wait for the dynamic content, Puppeteer has several helper functions, of which the most important are: ",(0,o.kt)("a",{parentName:"p",href:"https://pptr.dev/api/puppeteer.page.waitfortimeout",target:"_blank",rel:"noopener"},(0,o.kt)("inlineCode",{parentName:"a"},"page.waitForTimeout")),", ",(0,o.kt)("a",{parentName:"p",href:"https://pptr.dev/api/puppeteer.page.waitforselector",target:"_blank",rel:"noopener"},(0,o.kt)("inlineCode",{parentName:"a"},"page.waitForSelector")),", ",(0,o.kt)("a",{parentName:"p",href:"https://pptr.dev/api/puppeteer.page.waitforresponse",target:"_blank",rel:"noopener"},(0,o.kt)("inlineCode",{parentName:"a"},"page.waitForResponse")),", ",(0,o.kt)("a",{parentName:"p",href:"https://pptr.dev/api/puppeteer.page.waitfornavigation",target:"_blank",rel:"noopener"},(0,o.kt)("inlineCode",{parentName:"a"},"page.waitForNavigation"))," and ",(0,o.kt)("a",{parentName:"p",href:"https://pptr.dev/api/puppeteer.page.waitforfunction",target:"_blank",rel:"noopener"},(0,o.kt)("inlineCode",{parentName:"a"},"page.waitForFunction")),"."),(0,o.kt)("h3",{id:"waitfor-function"},"waitFor function"),(0,o.kt)("p",null,"This function can be found as ",(0,o.kt)("inlineCode",{parentName:"p"},"context.waitFor")," in ",(0,o.kt)("a",{parentName:"p",href:"https://apify.com/apify/web-scraper#page-function",target:"_blank",rel:"noopener"},"Web Scraper")," where it is a generic function that has three possible arguments."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Number of milliseconds")," - ",(0,o.kt)("inlineCode",{parentName:"p"},"await context.waitFor(10000)"),". The same as ",(0,o.kt)("inlineCode",{parentName:"p"},"page.waitForTimeout")," (will wait for 10 seconds).")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Selector string")," - ",(0,o.kt)("inlineCode",{parentName:"p"},"await context.waitFor('my-selector')"),". The same as ",(0,o.kt)("inlineCode",{parentName:"p"},"page.waitForSelector")," (will wait until that selector appears on the page but timeouts after 30 seconds with an error).")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Predicate function")," - ",(0,o.kt)("inlineCode",{parentName:"p"},"await context.waitFor(functionThatReturnsTrueOrFalse)"),". The same as ",(0,o.kt)("inlineCode",{parentName:"p"},"page.waitForFunction")," (you can pass an arbitrary function that is executed periodically and the code waits until it returns ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),")."))),(0,o.kt)("p",null,"With Puppeteer, you have to use dedicated functions like ",(0,o.kt)("inlineCode",{parentName:"p"},"page.waitForTimeout"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"page.waitForSelector")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"page.waitForFunction"),"."),(0,o.kt)("h3",{id:"testing-it"},"Testing it"),(0,o.kt)("p",null,"If you need to update your code with waiting logic, simply start by waiting 10 seconds. If that doesn't help, try 30 seconds. If it still doesn't work, the problem is elsewhere."),(0,o.kt)("p",null,"Try to debug it using logs and screenshots. If your code is working, you know that it was indeed dynamically loaded data that caused your problem. Now you can change the 10 seconds waiting time for ",(0,o.kt)("inlineCode",{parentName:"p"},"waitForSelector")," to be more efficient."),(0,o.kt)("h3",{id:"timeout-and-errors"},"Timeout and errors"),(0,o.kt)("p",null,"By default, ",(0,o.kt)("inlineCode",{parentName:"p"},"waitFor")," times out after 30 seconds with an error. Usually, this means another error is preventing the selector from loading. The selector itself may be wrong, or your browser got blocked or redirected to another version of the website."),(0,o.kt)("p",null,"Most of the time, if the selector doesn't load in the first 5 seconds, it won't load at all. You can prevent wasteful waiting by changing the timeout to ",(0,o.kt)("inlineCode",{parentName:"p"},"await context.waitFor('my-selector', { timeout: 10000 })"),"."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"waitFor")," (the selector version) will throw an error once it reaches the timeout. That is usually a good thing because you don't want this to go unnoticed. But if the data are not too important, or you want to fall back to some other solution, you can easily catch the waiting error:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"await page.waitForSelector('my-selector', { timeout: 10000 })\n    .catch(() => console.log('Wait for my-selector timed out')\n);\n")),(0,o.kt)("p",null,"The code will then continue."),(0,o.kt)("h2",{id:"advanced-use-cases"},"Advanced use cases"),(0,o.kt)("p",null,"So far, we have only scratched the surface of this topic. Let's have a quick look at some more advanced cases. We have not yet covered the third usage of ",(0,o.kt)("inlineCode",{parentName:"p"},"waitFor")," \u2013 ",(0,o.kt)("inlineCode",{parentName:"p"},"waitForFunction"),"."),(0,o.kt)("h3",{id:"waitforfunction"},"waitForFunction"),(0,o.kt)("p",null,"If a simple selector is not enough, we can implement a function to be evaluated in the browser context to tell us if the page is ready. Let's imagine that we know the page needs to load 24 products, but for some reason, they load over time. We can define a simple function to check it."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// Let's assume JQuery is injected\nconst has24Products = () => {\n    const numberOfProducts = $('.my-products').length;\n    return numberOfProducts === 24;\n};\n")),(0,o.kt)("p",null,"Now we simply pass it to ",(0,o.kt)("inlineCode",{parentName:"p"},"waitForFunction"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// In Puppeteer you need to inject JQuery with\n// await puppeteerUtils.injectJQuery(page);\n// imported from 'crawlee' package\nawait page.waitForFunction(has24Products);\n")),(0,o.kt)("h3",{id:"waitforresponse"},"waitForResponse"),(0,o.kt)("p",null,"Sometimes, it may be handy to work directly with the XHR request's response."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"It is faster. You don't need to wait for the element to render.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"It may contain nicely structured ",(0,o.kt)("a",{parentName:"p",href:"/platform/web-scraping-101/web-scraping-techniques",target:null,rel:null},"JSON data"),"."))),(0,o.kt)("p",null,"Keep in mind that ",(0,o.kt)("inlineCode",{parentName:"p"},"waitForResponse")," is not included in ",(0,o.kt)("inlineCode",{parentName:"p"},"waitFor")," cases, so it does not work in Web Scraper. If you are interested in exploring the responses, you can look through them in your browser's developer console. In Firefox and Chrome, it is the ",(0,o.kt)("strong",{parentName:"p"},"Network")," tab with the ",(0,o.kt)("strong",{parentName:"p"},"XHR")," filter selected."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"The Network tab in a browser",src:a(43479).Z,width:"1200",height:"712"})),(0,o.kt)("p",null,"We can catch this response by checking for its URL and method (we have to do it since the same URL is included in the OPTIONS method). We return ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"false")," depending on whether it is the response we want. ",(0,o.kt)("inlineCode",{parentName:"p"},"waitForResponse")," will even give us the response back."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const responseChooser = async (response) => {\n    const url = response.url();\n    const method = response.request().method();\n    if (url.includes('/prod_PUBLIC_STORE') && method === 'POST') {\n        return true;\n    };\n    return false;\n};\nconst correctResponse = await page.waitForResponse(responseChooser);\n")),(0,o.kt)("p",null,"Now, we simply extract the JSON."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const data = await correctResponse.json();\nconst userAgent = data.user_agent;\n")),(0,o.kt)("h2",{id:"custom-waiting-functions"},"Custom waiting functions"),(0,o.kt)("p",null,"You don't need to rely on Puppeteer's smart functions to implement something. You can implement \"waiters\" using a simple loop. Then, you can add your own functionality to it. For example, a ",(0,o.kt)("inlineCode",{parentName:"p"},"waitForSelector")," that logs its waiting."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const waitAndLog = async (page, selector, timeout = 30000) => {\n    const start = Date.now();\n    let myElement = await page.$(selector);\n    while (!myElement) {\n        await page.waitFor(500); // wait 0.5s each time\n        const alreadyWaitingFor = Date.now() - start;\n        if (alreadyWaitingFor > timeout) {\n            throw `Wait for ${selector} timed out after ${timeout} ms`;\n        }\n        console.log(`Waiting for ${selector} for ${alreadyWaitingFor}`);\n        myElement = await page.$(selector);\n    }\n    console.log(`Selector ${selector} appeared on the page!`)\n    return myElement;\n};\n\n// You can use the element handle it returns\nawait waitAndLog(page, 'my-selector');\n")))}m.isMDXComponent=!0},43479:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/network-tab-c93cdc2f388238ab6c58c3be641a7268.png"}}]);