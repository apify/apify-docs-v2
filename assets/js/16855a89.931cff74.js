"use strict";(self.webpackChunkapify_docs_v2=self.webpackChunkapify_docs_v2||[]).push([[6200],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=c(n),h=r,m=p["".concat(l,".").concat(h)]||p[h]||d[h]||i;return n?a.createElement(m,s(s({ref:t},u),{},{components:n})):a.createElement(m,s({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=h;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[p]="string"==typeof e?e:r,s[1]=o;for(var c=2;c<i;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},31125:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),s=["components"],o={title:"V - Handling migrations",description:"Get real-world experience of maintaining a stateful object stored in memory, which will be persisted through migrations and even graceful aborts.",sidebar_position:5,slug:"/expert-scraping-with-apify/solutions/handling-migrations"},l="[](#handling-migrations) Handling migrations",c={unversionedId:"expert_scraping_with_apify/solutions/handling_migrations",id:"expert_scraping_with_apify/solutions/handling_migrations",title:"V - Handling migrations",description:"Get real-world experience of maintaining a stateful object stored in memory, which will be persisted through migrations and even graceful aborts.",source:"@site/sources/academy/expert_scraping_with_apify/solutions/handling_migrations.md",sourceDirName:"expert_scraping_with_apify/solutions",slug:"/expert-scraping-with-apify/solutions/handling-migrations",permalink:"/academy/expert-scraping-with-apify/solutions/handling-migrations",draft:!1,tags:[],version:"current",lastUpdatedBy:"Dan Nguyen",lastUpdatedAt:1672828422,formattedLastUpdatedAt:"Jan 4, 2023",sidebarPosition:5,frontMatter:{title:"V - Handling migrations",description:"Get real-world experience of maintaining a stateful object stored in memory, which will be persisted through migrations and even graceful aborts.",sidebar_position:5,slug:"/expert-scraping-with-apify/solutions/handling-migrations"},sidebar:"defaultSidebar",previous:{title:"IV - Using the Apify API & JavaScript client",permalink:"/academy/expert-scraping-with-apify/solutions/using-api-and-client"},next:{title:"VI - Rotating proxies/sessions",permalink:"/academy/expert-scraping-with-apify/solutions/rotating-proxies"}},u={},p=[{value:" Persisting state",id:"-persisting-state",level:2},{value:" Handling resurrections",id:"-handling-resurrections",level:2},{value:" Quiz answers \ud83d\udcdd",id:"-quiz-answers-",level:2},{value:" Wrap up",id:"-wrap-up",level:2}],d={toc:p};function h(e){var t=e.components,n=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"-handling-migrations"},(0,i.kt)("a",{parentName:"h1",href:"#handling-migrations",target:null,rel:null})," Handling migrations"),(0,i.kt)("p",null,"Let's first head into our ",(0,i.kt)("strong",{parentName:"p"},"demo-actor")," and create a new file named ",(0,i.kt)("strong",{parentName:"p"},"asinTracker.js")," in the ",(0,i.kt)("strong",{parentName:"p"},"src")," folder. Within this file, we are going to build a utility class which will allow us to easily store, modify, persist, and log our tracked ASIN data."),(0,i.kt)("p",null,"Here's the skeleton of our class:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// asinTracker.js\nclass ASINTracker {\n    constructor() {\n        this.state = {};\n\n        // Log the state to the console every ten\n        // seconds\n        setInterval(() => console.log(this.state), 10000);\n    }\n\n    // Add an offer to the ASIN's offer count\n    // If ASIN doesn't exist yet, set it to 0\n    incrementASIN(asin) {\n        if (this.state[asin] === undefined) {\n            this.state[asin] = 0;\n            return;\n        }\n\n        this.state[asin]+= 1;\n    }\n}\n\n// It is only a utility class, so we will immediately\n// create an instance of it and export that. We only\n// need one instance for our use case.\nmodule.exports = new ASINTracker();\n")),(0,i.kt)("p",null,"There are multiple techniques for storing data in memory; however, this is the most modular way, as all state-persistence and modification logic will be held in this file."),(0,i.kt)("p",null,"Here is our updated ",(0,i.kt)("strong",{parentName:"p"},"routes.js")," file which is now utilizing this utility class to track the number of offers for each product ASIN:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// routes.js\nimport { createCheerioRouter } from '@crawlee/cheerio';\nimport { BASE_URL, OFFERS_URL, labels } from './constants';\nimport tracker from './asinTracker';\nimport { dataset } from './main.js';\n\nexport const router = createCheerioRouter();\n\nrouter.addHandler(labels.START, async ({ $, crawler, request }) => {\n    const { keyword } = request.userData;\n\n    const products = $('div > div[data-asin]:not([data-asin=\"\"])');\n\n    for (const product of products) {\n        const element = $(product);\n        const titleElement = $(element.find('.a-text-normal[href]'));\n\n        const url = `${BASE_URL}${titleElement.attr('href')}`;\n\n        // For each product, add it to the ASIN tracker\n        // and initialize its collected offers count to 0\n        tracker.incrementASIN(element.attr('data-asin'));\n\n        await crawler.addRequest([{\n            url,\n            label: labels.PRODUCT,\n            userData: {\n                data: {\n                    title: titleElement.first().text().trim(),\n                    asin: element.attr('data-asin'),\n                    itemUrl: url,\n                    keyword,\n                },\n            },\n        }]);\n    }\n});\n\nrouter.addHandler(labels.PRODUCT, async ({ $, crawler, request }) => {\n    const { data } = request.userData;\n\n    const element = $('div#productDescription');\n\n    await crawler.addRequests([{\n        url: OFFERS_URL(data.asin),\n        label: labels.OFFERS,\n        userData: {\n            data: {\n                ...data,\n                description: element.text().trim(),\n            },\n        },\n    }]);\n});\n\nrouter.addHandler(labels.OFFERS, async ({ $, request }) => {\n    const { data } = request.userData;\n\n    const { asin } = data;\n\n    for (const offer of $('#aod-offer')) {\n        // For each offer, add 1 to the ASIN's\n        // offer count\n        tracker.incrementASIN(asin);\n\n        const element = $(offer);\n\n        await dataset.pushData({\n            ...data,\n            sellerName: element.find('div[id*=\"soldBy\"] a[aria-label]').text().trim(),\n            offer: element.find('.a-price .a-offscreen').text().trim(),\n        });\n    }\n});\n")),(0,i.kt)("h2",{id:"-persisting-state"},(0,i.kt)("a",{parentName:"h2",href:"#persisting-state",target:null,rel:null})," Persisting state"),(0,i.kt)("p",null,"The ",(0,i.kt)("strong",{parentName:"p"},"persistState")," event is automatically fired (by default) every 60 seconds by the Apify SDK while the actor is running, and is also fired when the ",(0,i.kt)("strong",{parentName:"p"},"migrating")," event occurs."),(0,i.kt)("p",null,"In order to persist our ASIN tracker object, let's use the ",(0,i.kt)("inlineCode",{parentName:"p"},"Actor.on")," function to listen for the ",(0,i.kt)("strong",{parentName:"p"},"persistState")," event and store it in the key-value store each time it is emitted."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// asinTracker.js\nimport { Actor } from 'apify';\n// We've updated our constants.js file to include the name\n// of this new key in the key-value store\nconst { ASIN_TRACKER } = require('./constants');\n\nclass ASINTracker {\n    constructor() {\n        this.state = {};\n\n        Actor.on('persistState', async () => {\n            await Actor.setValue(ASIN_TRACKER, this.state);\n        });\n\n        setInterval(() => console.log(this.state), 10000);\n    }\n\n    incrementASIN(asin) {\n        if (this.state[asin] === undefined) {\n            this.state[asin] = 0;\n            return;\n        }\n\n        this.state[asin]+= 1;\n    }\n}\n\nmodule.exports = new ASINTracker();\n")),(0,i.kt)("h2",{id:"-handling-resurrections"},(0,i.kt)("a",{parentName:"h2",href:"#handling-resurrections",target:null,rel:null})," Handling resurrections"),(0,i.kt)("p",null,"Great! So now our state will be persisted every 60 seconds in the key-value store. However, we're not done. Let's say that the actor migrates and is resurrected. We never actually update the ",(0,i.kt)("inlineCode",{parentName:"p"},"state")," variable of our ",(0,i.kt)("inlineCode",{parentName:"p"},"ASINTracker")," class with the state stored in the key-value store, so as our code currently stands, we still don't support state-persistence on migrations."),(0,i.kt)("p",null,"In order to fix this, let's create a method called ",(0,i.kt)("inlineCode",{parentName:"p"},"initialize")," which will be called at the very beginning of the actor's run, and will check the key-value store for a previous state under the key ",(0,i.kt)("strong",{parentName:"p"},"ASIN-TRACKER"),". If a previous state does live there, then it will update the class' ",(0,i.kt)("inlineCode",{parentName:"p"},"state")," variable with the value read from the key-value store:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// asinTracker.js\nimport { Actor } from 'apify';\nimport { ASIN_TRACKER } from './constants';\n\nclass ASINTracker {\n    constructor() {\n        this.state = {};\n\n        Actor.on('persistState', async () => {\n            await Actor.setValue(ASIN_TRACKER, this.state);\n        });\n\n        setInterval(() => console.log(this.state), 10000);\n    }\n\n    async initialize() {\n        // Read the data from the key-value store. If it\n        // doesn't exist, it will be undefined\n        const data = await Actor.getValue(ASIN_TRACKER);\n\n        // If the data does exist, replace the current state\n        // (initialized as an empty object) with the data\n        if (data) this.state = data;\n    }\n\n    incrementASIN(asin) {\n        if (this.state[asin] === undefined) {\n            this.state[asin] = 0;\n            return;\n        }\n\n        this.state[asin]+= 1;\n    }\n}\n\nmodule.exports = new ASINTracker();\n")),(0,i.kt)("p",null,"We'll now call this function at the top level of the ",(0,i.kt)("strong",{parentName:"p"},"main.js")," file to ensure it is the first thing that gets called when the actor starts up:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// main.js\n\n// ...\nimport tracker from './asinTracker';\n\n// The Actor.init() function should be executed before\n// the tracker's initialization\nawait Actor.init();\n\nawait tracker.initialize();\n// ...\n")),(0,i.kt)("p",null,"That's everything! Now, even if the actor migrates (or is gracefully aborted then resurrected), this ",(0,i.kt)("inlineCode",{parentName:"p"},"state")," object will always be persisted."),(0,i.kt)("h2",{id:"-quiz-answers-"},(0,i.kt)("a",{parentName:"h2",href:"#quiz-answers",target:null,rel:null})," Quiz answers \ud83d\udcdd"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Q: Actors have an option the Settings tab to Restart on error. Would you use this feature for regular actors? When would you use this feature?")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"A:")," It's not best to use this option by default. If it fails, there must be reason, which would need to be thought through first - meaning that the edge case of failing should be handled when resurrecting the actor. State should be persisted beforehand."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Q: Migrations happen randomly, but by ",(0,i.kt)("a",{parentName:"strong",href:"https://docs.apify.com/actors/running#aborting-runs",target:"_blank",rel:"noopener"},"aborting gracefully"),", you can simulate a similar situation. Try this out on the platform and observe what happens. What changes occur, and what remains the same for the restarted actor's run?")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"A:")," After aborting or throwing an error mid-process, it manages to start back from where it was upon resurrection."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Q: Why don't you (usually) need to add any special migration handling code for a standard crawling/scraping actor? Are there any features in Crawlee or Apify SDK that handle this under the hood?")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"A:")," Because Apify SDK handles all of the migration handling code for us. If you want to add custom migration-handling code, you can use ",(0,i.kt)("inlineCode",{parentName:"p"},"Actor.events")," to listen for the ",(0,i.kt)("inlineCode",{parentName:"p"},"migrating")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"persistState")," events to save the current state in key-value store (or elsewhere)."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Q: How can you intercept the migration event? How much time do you have after this event happens and before the actor migrates?")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"A:")," By using the ",(0,i.kt)("inlineCode",{parentName:"p"},"Actor.on")," function. You have a maximum of a few seconds before shutdown after the ",(0,i.kt)("inlineCode",{parentName:"p"},"migrating")," event has been fired."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Q: When would you persist data to the default key-value store instead of to a named key-value store?")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"A:")," Persisting data to the default key-value store would help when handling an actor's run state or with storing metadata about the run (such as results, miscellaneous files, or logs). Using a named key-value store allows you to persist data at the account level to handle data across multiple actor runs."),(0,i.kt)("h2",{id:"-wrap-up"},(0,i.kt)("a",{parentName:"h2",href:"#wrap-up",target:null,rel:null})," Wrap up"),(0,i.kt)("p",null,"In this activity, we learned how to persist custom values on an interval as well as after actor migrations by using the ",(0,i.kt)("inlineCode",{parentName:"p"},"persistState")," event and the key-value store. With this knowledge, you can safely increase your actor's performance by storing data in variables then pushing them to the dataset periodically/at the end of the actor's run as opposed to pushing data immediately after it's been collected."),(0,i.kt)("p",null,"One important thing to note is that this workflow can be used to replace the usage of ",(0,i.kt)("inlineCode",{parentName:"p"},"userData"),' to pass data between requests, as it allows for the creation of a "global store" which all requests have access to at any time.'))}h.isMDXComponent=!0}}]);