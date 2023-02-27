"use strict";(self.webpackChunkapify_docs_v2=self.webpackChunkapify_docs_v2||[]).push([[8914],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,m=u["".concat(c,".").concat(d)]||u[d]||h[d]||o;return n?r.createElement(m,s(s({ref:t},l),{},{components:n})):r.createElement(m,s({ref:t},l))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var p=2;p<o;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},55743:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>d,frontMatter:()=>i,metadata:()=>p,toc:()=>h});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),s=["components"],i={title:"How to optimize Puppeteer by caching responses",description:"Learn why it is important for performance to cache responses in memory when intercepting requests in Puppeteer and how to implement it in your code.",sidebar_position:14.2,slug:"/node-js/caching-responses-in-puppeteer"},c="How to optimize Puppeteer by caching responses",p={unversionedId:"tutorials/node_js/caching_responses_in_puppeteer",id:"tutorials/node_js/caching_responses_in_puppeteer",title:"How to optimize Puppeteer by caching responses",description:"Learn why it is important for performance to cache responses in memory when intercepting requests in Puppeteer and how to implement it in your code.",source:"@site/sources/academy/tutorials/node_js/caching_responses_in_puppeteer.md",sourceDirName:"tutorials/node_js",slug:"/node-js/caching-responses-in-puppeteer",permalink:"/academy/node-js/caching-responses-in-puppeteer",draft:!1,editUrl:"https://github.com/apify/apify-docs-v2/edit/master/sources/academy/tutorials/node_js/caching_responses_in_puppeteer.md",tags:[],version:"current",lastUpdatedBy:"petrpatek",lastUpdatedAt:1677506637,formattedLastUpdatedAt:"Feb 27, 2023",sidebarPosition:14.2,frontMatter:{title:"How to optimize Puppeteer by caching responses",description:"Learn why it is important for performance to cache responses in memory when intercepting requests in Puppeteer and how to implement it in your code.",sidebar_position:14.2,slug:"/node-js/caching-responses-in-puppeteer"},sidebar:"academy",previous:{title:"How to analyze and fix errors when scraping a website",permalink:"/academy/node-js/analyzing-pages-and-fixing-errors"},next:{title:"How to choose the right scraper for the job",permalink:"/academy/node-js/choosing-the-right-scraper"}},l={},h=[{value:"Understanding and reproducing the issue",id:"understanding-and-reproducing-the-issue",level:2},{value:"Solving the problem by creating an in-memory cache",id:"solving-the-problem-by-creating-an-in-memory-cache",level:2},{value:"Implementation in Crawlee",id:"implementation-in-crawlee",level:2}],u={toc:h};function d(e){var t=e.components,i=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"caching-responses-in-puppeteer"},"How to optimize Puppeteer by caching responses"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Learn why it is important for performance to cache responses in memory when intercepting requests in Puppeteer and how to implement it in your code.")),(0,o.kt)("hr",null),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"In the latest version of Puppeteer, the request-interception function inconveniently disables the native cache and significantly slows down the crawler. Therefore, it's not recommended to follow the examples shown in this article unless you have a very specific use-case where the default browser cache is not enough (e.g. cashing over multiple scraper runs)")),(0,o.kt)("p",null,"When running crawlers that go through a single website, each open page has to load all resources again. The problem is that each resource needs to be downloaded through the network, which can be slow and/or unstable (especially when proxies are used)."),(0,o.kt)("p",null,"For this reason, in this article, we will take a look at how to use memory to cache responses in Puppeteer (only those that contain header ",(0,o.kt)("strong",{parentName:"p"},"cache-control")," with ",(0,o.kt)("strong",{parentName:"p"},"max-age")," above ",(0,o.kt)("strong",{parentName:"p"},"0"),")."),(0,o.kt)("p",null,"In this example, we will use a scraper which goes through top stories on the CNN website and takes a screenshot of each opened page. The scraper is very slow right now because it waits till all network requests are finished and because the posts contain videos. If the scraper runs with disabled caching, these statistics will show at the end of the run:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Bad run stats",src:n(82050).Z,width:"1000",height:"500"})),(0,o.kt)("p",null,"As you can see, we used 177MB of traffic for 10 posts (that is how many posts are in the top-stories column) and 1 main page. We also stored all the screenshots, which you can find ",(0,o.kt)("a",{parentName:"p",href:"https://my.apify.com/storage/key-value/q2ipoeLLy265NtSiL",target:"_blank",rel:"noopener"},"here"),"."),(0,o.kt)("p",null,"From the screenshot above, it's clear that most of the traffic is coming from script files (124MB) and documents (22.8MB). For this kind of situation, it's always good to check if the content of the page is cache-able. You can do that using Chromes Developer tools."),(0,o.kt)("h2",{id:"understanding-and-reproducing-the-issue"},"Understanding and reproducing the issue"),(0,o.kt)("p",null,"If we go to the CNN website, open up the tools and go to the ",(0,o.kt)("strong",{parentName:"p"},"Network")," tab, we will find an option to disable caching."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Disabling cache in the Network tab",src:n(80300).Z,width:"1402",height:"104"})),(0,o.kt)("p",null,"Once caching is disabled, we can take a look at how much data is transferred when we open the page. This is visible at the bottom of the developer tools."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"5.3MB of data transferred",src:n(63172).Z,width:"1118",height:"50"})),(0,o.kt)("p",null,"If we uncheck the disable-cache checkbox and refresh the page, we will see how much data we can save by caching responses."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"642KB of data transferred",src:n(73677).Z,width:"1016",height:"46"})),(0,o.kt)("p",null,"By comparison, the data transfer appears to be reduced by 88%!"),(0,o.kt)("h2",{id:"solving-the-problem-by-creating-an-in-memory-cache"},"Solving the problem by creating an in-memory cache"),(0,o.kt)("p",null,"We can now emulate this and cache responses in Puppeteer. All we have to do is to check, when the response is received, whether it contains the ",(0,o.kt)("strong",{parentName:"p"},"cache-control")," header, and whether it's set with a ",(0,o.kt)("strong",{parentName:"p"},"max-age")," higher than ",(0,o.kt)("strong",{parentName:"p"},"0"),". If so, then we'll save the headers, URL, and body of the response to memory, and on the next request check if the requested URL is already stored in the cache."),(0,o.kt)("p",null,"The code will look like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// On top of your code\nconst cache = {};\n\n// The code below should go between newPage function and goto function\n\nawait page.setRequestInterception(true);\n\npage.on('request', async(request) => {\n    const url = request.url();\n    if (cache[url] && cache[url].expires > Date.now()) {\n        await request.respond(cache[url]);\n        return;\n    }\n    request.continue();\n});\n\npage.on('response', async(response) => {\n    const url = response.url();\n    const headers = response.headers();\n    const cacheControl = headers['cache-control'] || '';\n    const maxAgeMatch = cacheControl.match(/max-age=(\\d+)/);\n    const maxAge = maxAgeMatch && maxAgeMatch.length > 1 ? parseInt(maxAgeMatch[1], 10) : 0;\n    if (maxAge) {\n        if (!cache[url] || cache[url].expires > Date.now()) return;\n        \n        let buffer;\n        try {\n            buffer = await response.buffer();\n        } catch (error) {\n            // some responses do not contain buffer and do not need to be catched\n            return;\n        }\n\n        cache[url] = {\n            status: response.status(),\n            headers: response.headers(),\n            body: buffer,\n            expires: Date.now() + (maxAge * 1000),\n        };\n    }\n});\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"If the code above looks completely foreign to you, we recommending going through our free ",(0,o.kt)("a",{parentName:"p",href:"/academy/puppeteer-playwright",target:null,rel:null},"Puppeteer/Playwright course"),".")),(0,o.kt)("p",null,"After implementing this code, we can run the scraper again."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Good run results",src:n(61282).Z,width:"1000",height:"450"})),(0,o.kt)("p",null,"Looking at the statistics, caching responses in Puppeteer brought the traffic down from 177MB to 13.4MB, which is a reduction of data transfer by 92%. The related screenshots can be found ",(0,o.kt)("a",{parentName:"p",href:"https://my.apify.com/storage/key-value/iWQ3mQE2XsLA2eErL",target:"_blank",rel:"noopener"},"here"),"."),(0,o.kt)("p",null,"It did not speed up the crawler, but that is only because the crawler is set to wait until the network is nearly idle, and CNN has a lot of tracking and analytics scripts that keep the network busy."),(0,o.kt)("h2",{id:"implementation-in-crawlee"},"Implementation in Crawlee"),(0,o.kt)("p",null,"Since most of you are likely using ",(0,o.kt)("a",{parentName:"p",href:"https://crawlee.dev",target:"_blank",rel:"noopener"},"Crawlee"),", here is what response caching would look like using ",(0,o.kt)("inlineCode",{parentName:"p"},"PuppeteerCrawler"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { PuppeteerCrawler, Dataset } from 'crawlee';\n\nconst cache = {};\n\nconst crawler = new PuppeteerCrawler({\n    preNavigationHooks: [async ({ page }) => {\n        await page.setRequestInterception(true);\n\n        page.on('request', async (request) => {\n            const url = request.url();\n            if (cache[url] && cache[url].expires > Date.now()) {\n                await request.respond(cache[url]);\n                return;\n            }\n            request.continue();\n        });\n\n        page.on('response', async (response) => {\n            const url = response.url();\n            const headers = response.headers();\n            const cacheControl = headers['cache-control'] || '';\n            const maxAgeMatch = cacheControl.match(/max-age=(\\d+)/);\n            const maxAge = maxAgeMatch && maxAgeMatch.length > 1 ? parseInt(maxAgeMatch[1], 10) : 0;\n\n            if (maxAge) {\n                if (!cache[url] || cache[url].expires > Date.now()) return;\n\n                let buffer;\n                try {\n                    buffer = await response.buffer();\n                } catch (error) {\n                    // some responses do not contain buffer and do not need to be catched\n                    return;\n                }\n\n                cache[url] = {\n                    status: response.status(),\n                    headers: response.headers(),\n                    body: buffer,\n                    expires: Date.now() + maxAge * 1000,\n                };\n            }\n        });\n    }],\n    requestHandler: async ({ page, request }) => {\n        await Dataset.pushData({\n            title: await page.title(),\n            url: request.url,\n            succeeded: true,\n        });\n    },\n});\n\nawait crawler.run(['https://apify.com/store', 'https://apify.com']);\n")))}d.isMDXComponent=!0},82050:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/bad-scraper-stats-b38622928fa3b188cae38d285750451e.png"},80300:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/cnn-network-tab-0ca18e39872e758ab7f60f2cd601e0f1.png"},73677:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/fast-with-cache-1a683d4e3a74468186b8d004c5fba276.png"},61282:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/good-run-results-38dc359a0a3b4cdf6b7611255218d234.png"},63172:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/slow-no-cache-0681379c53774a230ff67f2ec4704f7c.png"}}]);