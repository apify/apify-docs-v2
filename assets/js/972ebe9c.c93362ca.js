"use strict";(self.webpackChunkapify_docs_v2=self.webpackChunkapify_docs_v2||[]).push([[7767],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,f=u["".concat(c,".").concat(d)]||u[d]||h[d]||o;return n?r.createElement(f,s(s({ref:t},l),{},{components:n})):r.createElement(f,s({ref:t},l))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var p=2;p<o;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},45991:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>d,frontMatter:()=>i,metadata:()=>p,toc:()=>h});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),s=["components"],i={title:"How to optimize Puppeteer by caching responses",description:"Learn why it is important for performance to cache responses in memory when intercepting requests in Puppeteer and how to implement it in your code.",sidebar_position:14.2,slug:"/node-js/caching-responses-in-puppeteer"},c="[](#caching-responses-in-puppeteer) How to optimize Puppeteer by caching responses",p={unversionedId:"node_js/caching_responses_in_puppeteer",id:"node_js/caching_responses_in_puppeteer",title:"How to optimize Puppeteer by caching responses",description:"Learn why it is important for performance to cache responses in memory when intercepting requests in Puppeteer and how to implement it in your code.",source:"@site/sources/academy/node_js/caching_responses_in_puppeteer.md",sourceDirName:"node_js",slug:"/node-js/caching-responses-in-puppeteer",permalink:"/academy/node-js/caching-responses-in-puppeteer",draft:!1,tags:[],version:"current",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1670592461,formattedLastUpdatedAt:"Dec 9, 2022",sidebarPosition:14.2,frontMatter:{title:"How to optimize Puppeteer by caching responses",description:"Learn why it is important for performance to cache responses in memory when intercepting requests in Puppeteer and how to implement it in your code.",sidebar_position:14.2,slug:"/node-js/caching-responses-in-puppeteer"},sidebar:"defaultSidebar",previous:{title:"How to analyze and fix errors when scraping a website",permalink:"/academy/node-js/analyzing-pages-and-fixing-errors"},next:{title:"How to choose the right scraper for the job",permalink:"/academy/node-js/choosing-the-right-scraper"}},l={},h=[{value:"Understanding and reproducing the issue",id:"understanding-and-reproducing-the-issue",level:2},{value:"Solving the problem by creating an in-memory cache",id:"solving-the-problem-by-creating-an-in-memory-cache",level:2},{value:"Implementation in Crawlee",id:"implementation-in-crawlee",level:2}],u={toc:h};function d(e){var t=e.components,i=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"-how-to-optimize-puppeteer-by-caching-responses"},(0,o.kt)("a",{parentName:"h1",href:"#caching-responses-in-puppeteer",target:null,rel:null})," How to optimize Puppeteer by caching responses"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"In the latest version of Puppeteer, the request-interception function inconveniently disables the native cache and significantly slows down the crawler. Therefore, it's not recommended to follow the examples shown in this article unless you have a very specific use-case where the default browser cache is not enough (e.g. cashing over multiple scraper runs)")),(0,o.kt)("p",null,"When running crawlers that go through a single website, each open page has to load all resources again. The problem is that each resource needs to be downloaded through the network, which can be slow and/or unstable (especially when proxies are used)."),(0,o.kt)("p",null,"For this reason, in this article, we will take a look at how to use memory to cache responses in Puppeteer (only those that contain header ",(0,o.kt)("strong",{parentName:"p"},"cache-control")," with ",(0,o.kt)("strong",{parentName:"p"},"max-age")," above ",(0,o.kt)("strong",{parentName:"p"},"0"),")."),(0,o.kt)("p",null,"In this example, we will use a scraper which goes through top stories on the CNN website and takes a screenshot of each opened page. The scraper is very slow right now because it waits till all network requests are finished and because the posts contain videos. If the scraper runs with disabled caching, these statistics will show at the end of the run:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Bad run stats",src:n(89217).Z,width:"1000",height:"500"})),(0,o.kt)("p",null,"As you can see, we used 177MB of traffic for 10 posts (that is how many posts are in the top-stories column) and 1 main page. We also stored all the screenshots, which you can find ",(0,o.kt)("a",{parentName:"p",href:"https://my.apify.com/storage/key-value/q2ipoeLLy265NtSiL",target:"_blank",rel:"noopener"},"here"),"."),(0,o.kt)("p",null,"From the screenshot above, it's clear that most of the traffic is coming from script files (124MB) and documents (22.8MB). For this kind of situation, it's always good to check if the content of the page is cache-able. You can do that using Chromes Developer tools."),(0,o.kt)("h2",{id:"understanding-and-reproducing-the-issue"},"Understanding and reproducing the issue"),(0,o.kt)("p",null,"If we go to the CNN website, open up the tools and go to the ",(0,o.kt)("strong",{parentName:"p"},"Network")," tab, we will find an option to disable caching."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Disabling cache in the Network tab",src:n(59742).Z,width:"1402",height:"104"})),(0,o.kt)("p",null,"Once caching is disabled, we can take a look at how much data is transferred when we open the page. This is visible at the bottom of the developer tools."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"5.3MB of data transferred",src:n(74416).Z,width:"1118",height:"50"})),(0,o.kt)("p",null,"If we uncheck the disable-cache checkbox and refresh the page, we will see how much data we can save by caching responses."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"642KB of data transferred",src:n(43342).Z,width:"1016",height:"46"})),(0,o.kt)("p",null,"By comparison, the data transfer appears to be reduced by 88%!"),(0,o.kt)("h2",{id:"solving-the-problem-by-creating-an-in-memory-cache"},"Solving the problem by creating an in-memory cache"),(0,o.kt)("p",null,"We can now emulate this and cache responses in Puppeteer. All we have to do is to check, when the response is received, whether it contains the ",(0,o.kt)("strong",{parentName:"p"},"cache-control")," header, and whether it's set with a ",(0,o.kt)("strong",{parentName:"p"},"max-age")," higher than ",(0,o.kt)("strong",{parentName:"p"},"0"),". If so, then we'll save the headers, URL, and body of the response to memory, and on the next request check if the requested URL is already stored in the cache."),(0,o.kt)("p",null,"The code will look like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// On top of your code\nconst cache = {};\n\n// The code below should go between newPage function and goto function\n\nawait page.setRequestInterception(true);\n\npage.on('request', async(request) => {\n    const url = request.url();\n    if (cache[url] && cache[url].expires > Date.now()) {\n        await request.respond(cache[url]);\n        return;\n    }\n    request.continue();\n});\n\npage.on('response', async(response) => {\n    const url = response.url();\n    const headers = response.headers();\n    const cacheControl = headers['cache-control'] || '';\n    const maxAgeMatch = cacheControl.match(/max-age=(\\d+)/);\n    const maxAge = maxAgeMatch && maxAgeMatch.length > 1 ? parseInt(maxAgeMatch[1], 10) : 0;\n    if (maxAge) {\n        if (!cache[url] || cache[url].expires > Date.now()) return;\n        \n        let buffer;\n        try {\n            buffer = await response.buffer();\n        } catch (error) {\n            // some responses do not contain buffer and do not need to be catched\n            return;\n        }\n\n        cache[url] = {\n            status: response.status(),\n            headers: response.headers(),\n            body: buffer,\n            expires: Date.now() + (maxAge * 1000),\n        };\n    }\n});\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"If the code above looks completely foreign to you, we recommending going through our free ","[Puppeteer/Playwright course]","({{@link puppeteer_playwright.md}}).")),(0,o.kt)("p",null,"After implementing this code, we can run the scraper again."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Good run results",src:n(95874).Z,width:"1000",height:"450"})),(0,o.kt)("p",null,"Looking at the statistics, caching responses in Puppeteer brought the traffic down from 177MB to 13.4MB, which is a reduction of data transfer by 92%. The related screenshots can be found ",(0,o.kt)("a",{parentName:"p",href:"https://my.apify.com/storage/key-value/iWQ3mQE2XsLA2eErL",target:"_blank",rel:"noopener"},"here"),"."),(0,o.kt)("p",null,"It did not speed up the crawler, but that is only because the crawler is set to wait until the network is nearly idle, and CNN has a lot of tracking and analytics scripts that keep the network busy."),(0,o.kt)("h2",{id:"implementation-in-crawlee"},"Implementation in Crawlee"),(0,o.kt)("p",null,"Since most of you are likely using ",(0,o.kt)("a",{parentName:"p",href:"https://crawlee.dev",target:"_blank",rel:"noopener"},"Crawlee"),", here is what response caching would look like using ",(0,o.kt)("inlineCode",{parentName:"p"},"PuppeteerCrawler"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { PuppeteerCrawler, Dataset } from 'crawlee';\n\nconst cache = {};\n\nconst crawler = new PuppeteerCrawler({\n    preNavigationHooks: [async ({ page }) => {\n        await page.setRequestInterception(true);\n\n        page.on('request', async (request) => {\n            const url = request.url();\n            if (cache[url] && cache[url].expires > Date.now()) {\n                await request.respond(cache[url]);\n                return;\n            }\n            request.continue();\n        });\n\n        page.on('response', async (response) => {\n            const url = response.url();\n            const headers = response.headers();\n            const cacheControl = headers['cache-control'] || '';\n            const maxAgeMatch = cacheControl.match(/max-age=(\\d+)/);\n            const maxAge = maxAgeMatch && maxAgeMatch.length > 1 ? parseInt(maxAgeMatch[1], 10) : 0;\n\n            if (maxAge) {\n                if (!cache[url] || cache[url].expires > Date.now()) return;\n\n                let buffer;\n                try {\n                    buffer = await response.buffer();\n                } catch (error) {\n                    // some responses do not contain buffer and do not need to be catched\n                    return;\n                }\n\n                cache[url] = {\n                    status: response.status(),\n                    headers: response.headers(),\n                    body: buffer,\n                    expires: Date.now() + maxAge * 1000,\n                };\n            }\n        });\n    }],\n    requestHandler: async ({ page, request }) => {\n        await Dataset.pushData({\n            title: await page.title(),\n            url: request.url,\n            succeeded: true,\n        });\n    },\n});\n\nawait crawler.run(['https://apify.com/store', 'https://apify.com']);\n")))}d.isMDXComponent=!0},89217:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/bad-scraper-stats-94dc0d3b39c108133b0743cb1f79be48.webp"},59742:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/cnn-network-tab-7cee62c12632d738a90dd11eb26c98af.webp"},43342:(e,t,n)=>{n.d(t,{Z:()=>r});const r="data:image/webp;base64,UklGRgobAABXRUJQVlA4IP4aAAAQZgCdASr4Ay4APqlInksmJCKhqrZLQMAVCWZu4XKQ3XOFVfi71KRf889uvxXUSsn+u8o/qO0f/631I/4//CewB+tXnpepL+x+gT+Of1v9pvdS/6H7Ce7z0AP6d/u/WQ/2nsVf2n/yewB+yv//9pv/yfuv8K/9g/6XpR///WXvDv8u+zDxI/vvg3+M/Mv4D+0ftn/cvb6xd9J/+16C/yv7Mfk/7l5jf7f+teLvwH/q/1Y9wX8Z/mP92+2ThNrVegL7efZf+t/jPGL/t/Qb84/xH/C9wD+Xf1z/jer3+48Fr8N/yPYC/qH+d9Vj+c/6n+l/MP2ifTv/r/13wGfr96bH//9zfpAMN0svLSRUJ3CA3mEBvMIDeYQG8wgN5hAbzCA3mEBvMIDeYQG8wgN5hAbzCA3mEBvMIDIHztJrVEeFdF0N52HkfFBUDN61KojtBg+Se4At62VXK3kwKXaUvCxjKPJdMlTJTU99J2RIajA2CsN1Rcs8mcz0Egb8XLyODD50K7GFMqaQGNPpuEGFDqE+NHwxxdXc7FHczRB8F34OGaWGI6ZX84qPacOhV6Z+T61giSSWsVjF/s0vq+9it+Js7YPCh+2zMS6f+Q4yBoLtUrW3DxCoQsUrlW43zZUz+aT1He67m2CA21cJmA+1YVTbA5BB0a1e6RCbx4vF3Pr9DJ6Za+ut3oj2ZsWReDD9H1gjP28ztxwPMLw/YXwUYccLGZzEDSr9Z/kOdGsrQ8YxWXSKm5bWBtNe4uPvwb5mWLCfbbvKNgLZNGikoEWChNXzkaazpvYr0qdvsgCKslUL8hUqSc6bJxLB9GjLjnpLe/y4jT1RZImGurxls8yCClCtdo6jfyN3HAiV/pBuvlPk1sQohmXZ4ukhSBMHN1W2CUj7GbIJI/Xllv6BZTaow/2kdkxfw6oIan1Wa9nDkZC5X/FyOT/QOy4rmELXIi9UxZ94ZD8SXtofKlWgKVl2ciOkFPCN8BDT1i42nfyYCDsLzyhstm2j04vP8ECx/1gzyErzhphdGBO5oJM19pBdJCyN6NCugy6JHiovjzNk4Lctq4+ZUwvT59NNnBAEgk9Hp4j+goN48+wqLYAA/rAsCgaDpUzgAAAAAAAAGlKNy3UPCEeBYsuRuti44NrP9hJscaGoYVm8YkvlV3If7PhMmj/iNzhaIsVgBugfoCmUJVm0rB1YgLUcV8FFNEPHpIf1p47QLC9ark/FzWrLsEGcErPDtL2qprVn++URRd4ITZg5BaCY72G0wfuwpWEaxhlUm4e1z4PGuBio+y5AMpX8JLTCVdFELQmN1CCIh4ZfJ3xeyzIJKXcaNnrR5OWybK3dNY631ObIc77NnN0QKmABgrNrEu2HoZXTgPo/PPjyidF+KU3zETZzYRCdsDcPz4C9twJ3uIdSJrs+J3EZltZueS6ODCIMceB0/4U4Ha1976WF9KMT9cXO4wJXDV+3V+WyOR2nqBPwAKXcfJxgMGolM1y2kCuip7W20MBrbeOxa53g0phfFwgedDHVtPVTp12tbq4bbxRenIuDsIM2dcd5Niu2xTBiRPoT/o8JS2o7vopZ9OgDbjeQZqj7Ws7IHP+v2Ok5JmVqGR7aM12zuCG2k08LYCrOU/oA6RNVIToO4EbDEJ5iKyesSJ45JQWIkJPLJQCqAZx3GB6rrkxpwjZoQUG8WkpZYAmrtCVL+nM7Wi97DihK+xDkSs07FTZUFnKHD6RbEdL+9IAUaMdx7QZE9Dwe6kwx8I22H1+asFI7fwM6uBzTz5GkpM8hem7ZU4do/L8W+hcuvUNl4ZacwTYjSCH7tiyYz3E2c9Prr231BHDdntuGrNKRavicHbCnCvme9Z4cjIFgCf/H04MuPi+pc/vcRNbbp7Y4ikmnLCNosYC4Vz9JDUIsb7KueKcyLSehaCNKMCSALydKf0DdYVtlerHAFIgPV67UwQpFvFQWdhnMDO6GfxEcNa4mNmqDZw0CZxOyrj7tAKwS0ppsH6hUhTtJYUJ7XPE9j2ZzoavShBWJTrRRy3e5NDvteXOIEavadNKYP2zhw36vv6XZRx9/9A7NlfCsyAprkd+xJj+RnPXaKZKOgo88/VvXQsqE0lu5ubTrzA5o12BGUt9Yh/BnASuc0gOgBI7XbaFPZQUQvHdfhzUGuy/PvWktBDxg+L8FK70SgyKnJYsKb31F8kmdybIGRXEJgfUPN5/qmIkuHG/FspqZRxqGuaCmXFUaMHJAkdlFhADTNqnyyphLUFzx4s6gXu51680urSQ69nhnNubSkjNo8Tc2NL2N1Fv8rJ9enMCE3+1joReCxe9XOBJzblQLidGJvRRj01wAx1S+E6NLwldV/yRDZvm5prAtOf64NNB8Ue7XLDB2yqUiYJAFVyWdeBog1F5g/gomrHZaSr5pc0SUCdHqIoxGKTiGIB82Q1khul5flz53ylSCe+qfgKAYzvBbxLeygPPTKYGLDp8HkHXsXd1U+Cmu9c8lziqlEC2hV3pCvy7Z4MBf0JXy489peWBkV+4ag+WrVUHwaF33kUnnIKUroX4x/ePQhLiAoXnELObqBwHkb0DaK98dT7gkKFHYgEjU3NbU/Ok+TT8KX64yKP1DqgT0xucjMZ32oUYIPg9iuQbqTpmE43XUZvFlzIm/cHXKyV4ars0lj4zJy2WmCDBYcAct+4Jys4/Wqifzlcr9mDwMUTm5B48en8SJiXp5NcvJfqSrrTVSBAaZVDJ4s87cjTmgdg/lRzZx8oglKch5GsGHH9/FAqAuYBYtYCv6FthS+3q1ziHznco6wwYesPP4NYKCDbmwcXS/BW5qIk9ESXs+gar8dwI7JWrembp+y1uk/qJag2zLx41aiqJjVWOz9/W80ibniWNzdgKggU+sj43fDCRpm5g0CdK0Avc4Oo8mSiOncnM9D2VWvU1kDsSEGuaF4YQakJjclrPrWVFUykiClJlZKodwtVOhFKhN9bVZMR1yBeqXB4vQU3XNgQM31XqZbk9lc7VC9nimpSYMm4Wad1vXZofv37k+jty6fMFN7RslUUo2Vp6i2mgq6efWQjsaMWYZJdX6gIPrP9wvKSw00hlcoK/GZ4Efvkctk7/EFGV2waGT1cngh+Kw2XjosE4Lf9y12RK6SqSK7zZkpiUO9vgHVAsQpVI/hXARE12ltJOGS8MDt18znEsFrG+k6WkjqN+5P8lCIiice5sQbe+rHGw5XMqRoP6ZP8ulvDGqy3GOK4jBt2BAthe0TSAURGmloJgHLjIim73fRFdPaHgYo86tQFJRA49Q6En91Rxp1dW5fUJpgzewkJ9RrxujoMWI2bro34ftt4YiI4TfpeCV95B8k2POF+FMnH96pHlufSxVjUpXUsjuqNPajHOIxBYRWD+9AWdtdRYyq9NxlwS3JdZmH75lazGR0CNEYz1b3oAl0U2maMOeL0Fqdy7mEgJIl1U3l+WIOTTqh7BbWg87+nVBA7cPOJfO+hTg821CDmpj6SFIibVVEh//P8eUkj46LurI6BOnV2gQOZnhhyo0+JIUiXVfLll2cgt3/4W0TuEKD1nafYzgNBFIP0H0A3HcHqsQAAKHn59rLYBVm3w696Sd/AWX3d3kgVfwALPDuHz5SASyrQiv4qq3/4TTI/riWH/FsZUr8nLxUyPuTfoaXfk4uYbt3E9/v2aJ+4Z9rPo6gFA3z7WovZAHa+DhZQ53UdAh03Q+sio63l+RW4al1aysqEA74vSldm89MYBmZ0LDKCD+UOpgQr+iO30gPcAtiGaUFw7mkW8ZervbHeTbnfO8ac4PBFeX2p+QukSHAoAbARs2CD3gwxOC04A4vSagXp/ndzMkifSX+/M/I8N/1RD6kpwk8GupJNk+i2rZQkC+DwR1cH0SHgTVLq0tSh10hTDMua6kdDLlUzf6HYiyoBRwJqEO7J5sTNwfrrXJQGgjwKUetEmK8msfoLLDCIGnMDrpZ3pnH66Kfl6qpI7ho0RYl3v955Pfh8T0Zwb1bfBQnHHNeFSnWa3wJUDrWKQR2UFeHSSr1YK16/B/osj+PezkHVpEIUIXcsymusN5Dhja2HyAk3KMXUlP5zevWzO2e9O4rC6apvz8n4WFItY+TR7/ZQcCt7/OF0ZlWpZsFvhbuV4yaPj65BVtqM8dslm+Pu2bFHuWhXFpbSlyQMQc58LYk/+Z1FdeZsYBl+Uf4yj4h0S/6SCpDG/AgBL5dSObO8zeaOms+OP7RHhLbBr8n5QhLdWco7nbx7ue3/WmUcAlg5/2kLQjqY3Aop7qQxuGZE/RHKfKZ87sikhQeIT9/HofN0Xz20xupTdvy0qOMNNoWoGZOcSxmeVgLHtXkaWGETKuc7v2OgbXLZSm4PY0BY9iGRwco8BR0m3uaXIy+C2XMrC+waTjObKYSKaxqa1BD/g0p7UBVAr+GvcfJmzRjUUEQckv6eMFXlADc8Y0/qV9RSM5crTuV+BRI4jvfdvDrhKcYaZE5F/Nu4A1WYBsPSnfwmSuEeOBBBSPYjD9b/o/Pn+bDCacoZH0RdGO6ixk4sVfFr48Xy5qYb7brP7d54Rmo8QOx4Sw7ADb3qDecBdnslsxtuj/1woTdIf+OVgzChojlf59qthsPfKZYEWlO6N15Lio/4gp9LcWL4abpTjY84+1rUNZlhQFOW4GVReGf9BRwf8wW4HRPh39uRWeDPOQOm2cLVxwy2/J74u35PT+3NLIW4XEx5lt8jYCB2GFpwlha6orSthitjn3nZjSO+cDCqv3FmdPUWDe48juDXE4aktqYtFqUd/kEPiL3WKh0hXgfVku+GoepxJTA9+M+wgVU3fDCMxPXLjroobwo7nUZk+nc0I4RjI+D7ggst5Jwjyup86+0xj/a6WQa1ERq+YTDHh5bYqbwa7WoJcXzxxBC6Lor4itkxhUGFknnSRMm5TeQ+0T374+0l+ne8rStB4DdC4RbO2jjuB9J2xM1zc32SEat9rsdlZ3+Ijb+OEOAh4tZUsdKcfrqmHq3E+6nQ5REicy7dHVWthurK62pTBPsyi6Gigpt1UfnnpnHGr+zMZNoy7/+nLA4xMXQDjSaFZX7aJAwvIEoDf7n5Mx+Z2qBsJclfpqT8bPPf4sCve/CBY80i6yJ+3u8c2ixVmMuQiK7pv2is7ZRoQ47BKnGWr3EoQcLnuH1TMOGo1/tFOIn3qy0mZX6pM1oXuz+DyW61wOihfI8YeK20mMx26ftWjWWddDsERE1K/SbSDvMXpeZvuXibsqWKFKAZe0eu9pXrtQRWbh+Sz4Jx0dM1R6Aak9Uu/pr6uHIVxHlc43MI39Rnc1M2JJg6KlmxMX6+S26fW0fCmxHCZhLRzEHme0q74wls/LJxv56j3y5op84UJ4zzHsB9wOPeiuiPzz7LQdT2CwZ0eGIUdw5NNiAsD7t3qWJ7yyoDrl7CNiFDuFSNPTXje6hnHAiHfdOpg2zQQxh1iER9wQvSJeZk9QDV6wO9d3euE/i7W9OTIVs0rvTrJwvflK/BoY0UIopVHuXtaUbjbxaDpXeD59F4jqtYHzpugqnQouYGHsMnRUaUm6jOm08aJkRhGPSANHO6KMkzL3RLucmTqCkqwkwvCYCTrhqrfMkka5BmNHHA4neLpFnN2NMSSPabpaYWMinln8c/dtwUxyDY4i9E8gvtToH215N0k6zpMXmWfPfy03f8eih6ofWL2+28tCGGUAOp+H2R+p5ZDz+m5VPQfVTIxQ/xOklj49rKvIpR5B5wtLrxNA79OoTCvPBVVXO5GLU+4TumaiVgn3s/EKEUX78RgKRMb1JDYpXijCc7VJYve/Al6sfObHs4lgZ5h1G7VS29VJ2v04lrBuDb4jsZjaKl2523xDVPQW6NOhJfDMmtU7rFBVl8nlfv7d7R3tr624PKNshdTsxBw9JRGlfa9XTZZeEx8FZxvNLH9m0N1WmaIeODq637sawkwS1ZAeawNx6l4Q8mLJuOx3N38GQpYMTn6dgMk0q2bZxMZqHQvawRMpwVlNC9gne+EtOrNCNaJd54jXb2Ta8ZcsCTw+ouk7LLE2h+mbLEru+EZOBm8QKfJN84pPyk1RcY5m+nszBN+Ml9+E0s5+WEWCOdwfaiIBxO8AXfjWe4hCV0bCp4g8acLQQZc/OKEulqbvudEdxtgHe5vWPpl6aeUed0kdnOgvAVUfXnkp09DDLB7/0CArxznhHPIGxSdm/FtdWDZ9AbnPMExv09Mut/nwiDlt6uyJ5DFBor6TrFlo37/Xz7Ro0eNCxfrFFozfjOA0wVXLu/ktuzCb1F+oUdHZnzFRafdobZ96hazeaSTFeh7lnxSC9eiVHw79YqHvVrUSPElrh60Q+D/z+JoJ3r1JwkaI9AtXlgd3kxs31ZqfC0hoIEGoJGd1rWbUQr+Co2zPk5jOPbzdE+JM3zebfNh3LfyGPeZoMC4RvYYuarZiEWy/3jG8IyL/TKgaV3LNgZFbEh2ojxZhJxc47YkwSbj0l0OZZg1Jb8t0wYqjhJTvIgOUB95XSTglaIlwyeTBw6i6vv2Z7lAO11igCWoZrj7OSCfLdqTad6Qpa0X9OQ2m0nQyMwcxPH0d6h2pdaYn6Ppn8Z7CUo0aehc/cQdW6JL9XTJzpPQ/RbJae6389xlS5M/yjyBgoaF8sgMTOHxFyfyJ4N8Y9WgXHi/QDayC8mR+LUHOpUN4VlG0H2EomN0U1G40OgQkC+Ty+z7XIbi4nBhp0v3vZ6KDjQ306Yl+oAztkBuzn7RdUJSYsnfS+MJFF1Dfj51HvCZKiAnwkfPA1/1WWingIuLu71PjRP4LocbQTE33BlxsII4juwG9eXuLbAS95odRBDNyUmxm7yL2ZrHy54F3ZuNXG8VxBP6XklPmZNFzTDnohXqtJX7kktFex2PCvBo8bk/NDXIYj6BNWGAzsywtIz+4xivmCT1CHOcw5e5CppWPVlxsepahW6q1hR2hVIKsiGtsbYZlGXbfKiLUkd9P73GxU4p7Z2fl2MAErdchdDntD1/PvA+UxdmvFXY6oxDTbaDAuEb0fjXx6ccI55GGle90k5cDXk97sFowUudAh0hio/4gZvpkaB5Y3KA6k5lF9rLPFWlWXe8BmIQUbuLrrABKRtlf4wU5lNz6wKSkgEKJbv5ziMkXt9i7/oiUBy0l3k2Fvr4n4vkeVl9A4Q5Tw5pZGGAwpPsqGxHLmGTDs6J0PvbAfd5Dej9iGgQOLxPrZ6WPK9qglkJtBajtv4Tp9D1IOCOnJOPIocPoXTV1w+x71PInTnRsAEK520ttIYI4E43U0aTyiVMqulEQ+TU3KSU9AIazLZaZZGE4DLWI87NpI0YMryfprPaaOtRrbO7RgVmvUfeQyqXD7sNvOjImfGsGjeaezMOZAY0PUoHmABO7rzQCk7Uoeel5avVBD0vsgjqMzpZhT0FW1YDgjWF8vzzL8Tg6yEQyT254weB3A3jyoBImmpfzwza0+wU3RYfdRE+1QgGFi3q/SIs1L8xIqQ0d/JW8ibBNLW4y8p/7ShcRI+fztHvTtpgwWpPffN9haGJb2QEXnRkju+/1VAIkAYtLIG+m385odgCzFDDrf+XEeYDMG+tVbaRdrEdr4T6foB5qrI8Z20tz4XA0RyWNE4wsJE++XeOaAamC2YTLagDPO6LRMMkiHHDbH02NAopGL/aXvg8IAeLIIbl6KgulasddooV5FA9ozkyoOPuKc8JtP5BPkFMLZpwCCxK9YB6hAq5za4jFP8B6STHKvyLyKHD2QBudEq8RF6QET3zxyNjFNAFLITPABA/FlHbRInSsbU3zReLA2umAgOF9lPtLTIw2NChmGZ2kpqenRVW/XpFk0EwGNKeBmqVZqvzMNx6rDloMmqwSDyfhS1TNkiEgUwgWv3ILqRsVw+BAUZ54ZAoOylYdmpnfmqSAAfAaGV0Kx2Isru6aMQbHC9o8XADmW3z9X3DIJJ/FGPqzdUqdplBK45v63vj6fkv4QezDiV0Uno1I0PWlFzAFk/dWpVn88RmKqP9aXZw1kqp5inkAAFHL/s1M781TYAIHpMHF57jNZ4sVtSiqfad5eK1EFJEUOa+JnwnSn2DRfg9qPsTzT8EowXq0rGyhytqixMNkEG0NwbXVhucHi31ybu2OsAA+zPVocsjdTVMiFMwG6txuq5jem4B6MP8kdzG0+SjJj9OldCgHFAlh0MSp0ehmg/6/ne5ML//4D0jQn8Q321WCptBlUpBFAZ5PUZ+X7cpwJZf45GzmZ0vOHchCNsCxngmr9YvhI3ixXw+Soq02KHZRX1qK7fhZCeY5mOJqYzOBGVtmVqAM5148HZ0RNHBJrLCoyVORjClQ3Uaqh5+US58t53yppYIjAN/WPFmhtcxvTn7+ab4btX6/EWrBs8rk7LFekpw+vUeQvqPUkUnAl5lQUpR4OyVbAJQGbREpZRxNsYqjlPQbfefkRa3ovBXuqOYWRykdHGJs0KcLedwRZHB1aljs2cCuAqWpWWZHplhVtW4i98bEm90tVoxlA1bWfvWAbDNGfJuRklVDB9gxGal6Sk1+U0HyQvyMXQm1to+RQuZmYs9mt4m+wF8o4z7fVu5GROaPjh7DrbltCJL+WYATvInHLj3QDvwUbFJljtKJ+XID8lKGNOAHoaTQ85J8AjwxYML8hw+GAWu7mADb7OW0teMuKldxAIs/rvfh5MF+dBlb4OHeP2m8Q7D2D8RnoZdRAyUmP8lLlIzR+j1YdDH6DuCH9DVf10Hp3sVqVRi1oWizR7DAjQYD5Hw8eq+ScUuyXdI7aIMfDf4PaLRADDqjpyr1VphhgjwTOGwfcWLxf5BrZEP4ki+jtCV4S1h1SFrA7AKPS5INHfT67lCbJZDuLN6FDEGC4N9LOX+CRF5Q9a8ECwK+BqeLmonDZHJF2CzLYjR8DOVyFoUr/fnFXW/f7KlsR7HEokli7OQIpW7cO3cDcvaP3rxgZd0SU/7GEApkeLbFV8q73Eh51K8JxSHFNqfx/Bma3Zz46KNM219u0Nltu3UGnVLgCkC6VjBQ6G7D7fxjyfkFbPFgGqCxcyoiEaMrBPFyh54bVtcsPekDxkLiFJXrySvIOiLAegT7q1YlUGDmDGZ5MGkUxiMHrD3c0NWCQqYNdGeB3fsR0sPiURXdIdeSogXSMR9jpQFoC3zdU6KD0soKZmZ13OLc82AkZEGTt5mvdYtsjLTL1BOySuT47lCw3GnLed+IfiTAAAAA"},95874:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/good-run-results-1bd956d7fc4b0af8e8b587721204db38.webp"},74416:(e,t,n)=>{n.d(t,{Z:()=>r});const r="data:image/webp;base64,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"}}]);