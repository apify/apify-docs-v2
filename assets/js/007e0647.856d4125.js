"use strict";(self.webpackChunkapify_docs_v2=self.webpackChunkapify_docs_v2||[]).push([[5361],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>f});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=p(a),f=r,m=d["".concat(l,".").concat(f)]||d[f]||c[f]||s;return a?n.createElement(m,i(i({ref:t},u),{},{components:a})):n.createElement(m,i({ref:t},u))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,i=new Array(s);i[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<s;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},44201:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>f,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var n=a(87462),r=a(63366),s=(a(67294),a(3905)),i=["components"],o={title:"VII - Saving run stats",description:"Implement the saving of general statistics about an actor's run, as well as adding request-specific statistics to dataset items.",sidebar_position:7,slug:"/expert-scraping-with-apify/solutions/saving-stats"},l="Saving run stats",p={unversionedId:"platform/expert_scraping_with_apify/solutions/saving_stats",id:"platform/expert_scraping_with_apify/solutions/saving_stats",title:"VII - Saving run stats",description:"Implement the saving of general statistics about an actor's run, as well as adding request-specific statistics to dataset items.",source:"@site/sources/academy/platform/expert_scraping_with_apify/solutions/saving_stats.md",sourceDirName:"platform/expert_scraping_with_apify/solutions",slug:"/expert-scraping-with-apify/solutions/saving-stats",permalink:"/academy/expert-scraping-with-apify/solutions/saving-stats",draft:!1,editUrl:"https://github.com/apify/apify-docs-v2/edit/master/sources/academy/platform/expert_scraping_with_apify/solutions/saving_stats.md",tags:[],version:"current",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1677522857,formattedLastUpdatedAt:"Feb 27, 2023",sidebarPosition:7,frontMatter:{title:"VII - Saving run stats",description:"Implement the saving of general statistics about an actor's run, as well as adding request-specific statistics to dataset items.",sidebar_position:7,slug:"/expert-scraping-with-apify/solutions/saving-stats"},sidebar:"academy",previous:{title:"VI - Rotating proxies/sessions",permalink:"/academy/expert-scraping-with-apify/solutions/rotating-proxies"},next:{title:"Apify scrapers",permalink:"/academy/apify-scrapers"}},u={},c=[{value:"Tracking errors",id:"tracking-errors",level:2},{value:"Tracking total saved",id:"tracking-total-saved",level:2},{value:"Saving stats with dataset items",id:"saving-stats-with-dataset-items",level:2},{value:"Quiz answers",id:"quiz-answers",level:2}],d={toc:c};function f(e){var t=e.components,a=(0,r.Z)(e,i);return(0,s.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"saving-stats"},"Saving run stats"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Implement the saving of general statistics about an actor's run, as well as adding request-specific statistics to dataset items.")),(0,s.kt)("hr",null),(0,s.kt)("p",null,"The code in this solution will be similar to what we already did in the ",(0,s.kt)("strong",{parentName:"p"},"Handling migrations")," solution; however, we'll be storing and logging different data. First, let's create a new file called ",(0,s.kt)("strong",{parentName:"p"},"Stats.js")," and write a utility class for storing our run stats:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"import Actor from 'apify';\n\nclass Stats {\n    constructor() {\n        this.state = {\n            errors: {},\n            totalSaved: 0,\n        };\n    }\n\n    async initialize() {\n        const data = await Actor.getValue('STATS');\n\n        if (data) this.state = data;\n\n        Actor.on('persistState', async () => {\n            await Actor.setValue('STATS', this.state);\n        });\n\n        setInterval(() => console.log(this.state), 10000);\n    }\n\n    addError(url, errorMessage) {\n        if (!this.state.errors?.[url]) this.state.errors[url] = [];\n        this.state.errors[url].push(errorMessage);\n    }\n\n    success() {\n        this.state.totalSaved += 1;\n    }\n}\n\nmodule.exports = new Stats();\n")),(0,s.kt)("p",null,"Cool, very similar to the ",(0,s.kt)("strong",{parentName:"p"},"AsinTracker")," class we wrote earlier. We'll now import ",(0,s.kt)("strong",{parentName:"p"},"Stats")," into our ",(0,s.kt)("strong",{parentName:"p"},"main.js")," file and initialize it along with the ASIN tracker:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"// ...\nimport Stats from './Stats.js';\n\nawait Actor.init();\nawait asinTracker.initialize();\nawait Stats.initialize();\n// ...\n")),(0,s.kt)("h2",{id:"tracking-errors"},"Tracking errors"),(0,s.kt)("p",null,"In order to keep track of errors, we must write a new function within the crawler's configuration called ",(0,s.kt)("strong",{parentName:"p"},"failedRequestHandler"),". Passed into this function is an object containing an ",(0,s.kt)("strong",{parentName:"p"},"Error")," object for the error which occurred and the ",(0,s.kt)("strong",{parentName:"p"},"Request")," object, as well as information about the session and proxy which were used for the request."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"const crawler = new CheerioCrawler({\n    proxyConfiguration,\n    useSessionPool: true,\n    sessionPoolOptions: {\n        persistStateKey: 'AMAZON-SESSIONS',\n        sessionOptions: {\n            maxUsageCount: 5,\n            maxErrorScore: 1,\n        },\n    },\n    maxConcurrency: 50,\n    requestHandler: router,\n    // Handle all failed requests\n    failedRequestHandler: async ({ error, request }) => {\n        // Add an error for this url to our error tracker\n        Stats.addError(request.url, error?.message);\n    },\n});\n")),(0,s.kt)("h2",{id:"tracking-total-saved"},"Tracking total saved"),(0,s.kt)("p",null,"Now, we'll just increment our ",(0,s.kt)("strong",{parentName:"p"},"totalSaved")," count for every offer added to the dataset."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"router.addHandler(labels.OFFERS, async ({ $, request }) => {\n    const { data } = request.userData;\n\n    const { asin } = data;\n\n    for (const offer of $('#aod-offer')) {\n        tracker.incrementASIN(asin);\n        // Add 1 to totalSaved for every offer\n        Stats.success();\n\n        const element = $(offer);\n\n        await dataset.pushData({\n            ...data,\n            sellerName: element.find('div[id*=\"soldBy\"] a[aria-label]').text().trim(),\n            offer: element.find('.a-price .a-offscreen').text().trim(),\n        });\n    }\n});\n")),(0,s.kt)("h2",{id:"saving-stats-with-dataset-items"},"Saving stats with dataset items"),(0,s.kt)("p",null,"Still in the ",(0,s.kt)("strong",{parentName:"p"},"OFFERS")," handler, we need to add a few extra keys to the items which are pushed to the dataset. Luckily, all of the data required by the task is easily accessible in the context object."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"router.addHandler(labels.OFFERS, async ({ $, request }) => {\n    const { data } = request.userData;\n\n    const { asin } = data;\n\n    for (const offer of $('#aod-offer')) {\n        tracker.incrementASIN(asin);\n        // Add 1 to totalSaved for every offer\n        Stats.success();\n\n        const element = $(offer);\n\n        await dataset.pushData({\n            ...data,\n            sellerName: element.find('div[id*=\"soldBy\"] a[aria-label]').text().trim(),\n            offer: element.find('.a-price .a-offscreen').text().trim(),\n            // Store the handledAt date or current date if that is undefined\n            dateHandled: request.handledAt || new Date().toISOString(),\n            // Access the number of retries on the request object\n            numberOfRetries: request.retryCount,\n            // Grab the number of pending requests from the requestQueue\n            currentPendingRequests: (await requestQueue.getInfo()).pendingRequestCount,\n        });\n    }\n});\n")),(0,s.kt)("h2",{id:"quiz-answers"},"Quiz answers"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Q: Why might you want to store statistics about an actor's run (or a specific request)?")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"A:")," If certain types of requests are error-prone, you might want to save stats about the run to look at them later to either eliminate or better handle the errors. Things like ",(0,s.kt)("strong",{parentName:"p"},"dateHandled")," can be generally useful information."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Q: In our Amazon scraper, we are trying to store the number of retries of a request once its data is pushed to the dataset. Where would you get this information? Where would you store it?")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"A:")," This information is available directly on the request object under the property ",(0,s.kt)("strong",{parentName:"p"},"retryCount"),"."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Q: We are building a new imaginary scraper for a website that sometimes displays captchas at unexpected times, rather than displaying the content we want. How would you keep a count of the total number of captchas hit for the entire run? Where would you store this data? Why?")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"A:")," First, build a function that detects if the captcha has been hit. If so, it will throw an error and add to the ",(0,s.kt)("strong",{parentName:"p"},"numberOfCaptchas")," count. This data might be stored on a persisted state object to help better assess the anti-scraping mitigation techniques the scraper should be used."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Q: Is storing these types of values necessary for every single actor?")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"A:")," For small actors, it might be a waste of time to do this. For large-scale actors, it can be extremely helpful when debugging and most definitely worth the extra 10-20 minutes of development time. Usually though, the default statistics from the Crawlee and the SDK might be enough for simple run stats."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Q: What is the difference between the ",(0,s.kt)("inlineCode",{parentName:"strong"},"failedRequestHandler")," and ",(0,s.kt)("inlineCode",{parentName:"strong"},"errorHandler"),"?")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"A:")," ",(0,s.kt)("inlineCode",{parentName:"p"},"failedRequestHandler")," runs after a request has failed and reached it's ",(0,s.kt)("inlineCode",{parentName:"p"},"maxRetries")," count. ",(0,s.kt)("inlineCode",{parentName:"p"},"errorHandler")," runs on every failure and retry."))}f.isMDXComponent=!0}}]);