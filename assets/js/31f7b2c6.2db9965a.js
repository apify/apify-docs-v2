"use strict";(self.webpackChunkapify_docs_v2=self.webpackChunkapify_docs_v2||[]).push([[6319],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(n),f=r,m=d["".concat(l,".").concat(f)]||d[f]||u[f]||o;return n?a.createElement(m,s(s({ref:t},p),{},{components:n})):a.createElement(m,s({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var c=2;c<o;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},94189:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>f,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),s=["components"],i={title:"Scraping Amazon",description:"Before you build your first web scraper with Crawlee, it is important to understand the concept of modularity in programming.",sidebar_position:4,slug:"/web-scraping-for-beginners/challenge/scraping-amazon"},l="Scraping Amazon",c={unversionedId:"webscraping/web_scraping_for_beginners/challenge/scraping_amazon",id:"webscraping/web_scraping_for_beginners/challenge/scraping_amazon",title:"Scraping Amazon",description:"Before you build your first web scraper with Crawlee, it is important to understand the concept of modularity in programming.",source:"@site/sources/academy/webscraping/web_scraping_for_beginners/challenge/scraping_amazon.md",sourceDirName:"webscraping/web_scraping_for_beginners/challenge",slug:"/web-scraping-for-beginners/challenge/scraping-amazon",permalink:"/academy/web-scraping-for-beginners/challenge/scraping-amazon",draft:!1,editUrl:"https://github.com/apify/apify-docs-v2/edit/master/sources/academy/webscraping/web_scraping_for_beginners/challenge/scraping_amazon.md",tags:[],version:"current",lastUpdatedBy:"Jind\u0159ich B\xe4r",lastUpdatedAt:1675956217,formattedLastUpdatedAt:"Feb 9, 2023",sidebarPosition:4,frontMatter:{title:"Scraping Amazon",description:"Before you build your first web scraper with Crawlee, it is important to understand the concept of modularity in programming.",sidebar_position:4,slug:"/web-scraping-for-beginners/challenge/scraping-amazon"},sidebar:"academy",previous:{title:"Modularity",permalink:"/academy/web-scraping-for-beginners/challenge/modularity"},next:{title:"Best practices",permalink:"/academy/web-scraping-for-beginners/best-practices"}},p={},u=[{value:"Final code",id:"final-code",level:2},{value:"Wrap up \ud83d\udca5",id:"wrap-up",level:2}],d={toc:u};function f(e){var t=e.components,i=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"scraping-amazon"},"Scraping Amazon"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Before you build your first web scraper with Crawlee, it is important to understand the concept of modularity in programming.")),(0,o.kt)("hr",null),(0,o.kt)("p",null,"In our quick chat about modularity, we finished the code for the results page, and added a request for each product to the crawler's ",(0,o.kt)("strong",{parentName:"p"},"RequestQueue"),". Here, we just need to scrape the description, so it shouldn't be too hard:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// routes.js\n\n// ...\n\nrouter.addHandler(labels.PRODUCT, async ({ $, crawler, request }) => {\n    const { data } = request.userData;\n\n    const element = $('div#productDescription');\n\n    const description = element.text().trim();\n\n    console.log(description); // works!\n});\n")),(0,o.kt)("p",null,"Great! But wait, where do we go from here? We need to go to the offers page next and scrape each offer, but how can we do that? Let's take a small break from writing the scraper and open up ",(0,o.kt)("a",{parentName:"p",href:"/academy/tools/proxyman",target:null,rel:null},"Proxyman")," to analyze requests which we might be difficult to find in the network tab, then we'll click the button on the product page that loads up all of the product offers:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"View offers button",src:n(4755).Z,width:"1228",height:"939"})),(0,o.kt)("p",null,"After clicking this button and checking back in Proxyman, we discovered this link:"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"You can find the request below in the network tab just fine, but with Proxyman, it is much easier and fasterdue to the extended filtering options.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"https://www.amazon.com/gp/aod/ajax/ref=auto_load_aod?asin=B07ZPKBL9V&pc=dp\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"asin")," ",(0,o.kt)("a",{parentName:"p",href:"https://branch.io/glossary/query-parameters/",target:"_blank",rel:"noopener"},"query parameter")," matches up with our product's ASIN, which means we can use this for any product of which we have the ASIN."),(0,o.kt)("p",null,"Here's what this page looks like:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"View offers page",src:n(53418).Z,width:"2119",height:"1338"})),(0,o.kt)("p",null,"Wow, that's ugly. But for our scenario, this is really great. When we click the ",(0,o.kt)("strong",{parentName:"p"},"View offers")," button, we usually have to wait for the offers to load and render, which would mean we could have to switch our entire crawler to a ",(0,o.kt)("strong",{parentName:"p"},"PuppeteerCrawler")," or ",(0,o.kt)("strong",{parentName:"p"},"PlaywrightCrawler"),". The data on this page we've just found appears to be loaded statically, which means we can still use CheerioCrawler and keep the scraper as efficient as possible \ud83d\ude0e"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"It's totally possible to scrape the same data as this crawler using ",(0,o.kt)("a",{parentName:"p",href:"/academy/puppeteer-playwright",target:null,rel:null},"Puppeteer or Playwright"),"; however, with this offers link found in Postman, we can follow the same workflow much more quickly with static HTTP requests using CheerioCrawler.")),(0,o.kt)("p",null,"First, we'll create a request for each product's offers page:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// routes.js\n\n// ...\n\nrouter.addHandler(labels.PRODUCT, async ({ $, crawler, request }) => {\n    const { data } = request.userData;\n\n    const element = $('div#productDescription');\n\n    // Add to the request queue\n    await crawler.addRequests([{\n        url: `${BASE_URL}/gp/aod/ajax/ref=auto_load_aod?asin=${data.asin}&pc=dp`,\n        label: labels.OFFERS,\n        userData: {\n            data: {\n                ...data,\n                description: element.text().trim(),\n            },\n        },\n    }]);\n});\n")),(0,o.kt)("p",null,"Finally, we can handle the offers in a separate handler:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// routes.js\n\nrouter.addHandler(labels.OFFERS, async ({ $, request }) => {\n    const { data } = request.userData;\n\n    for (const offer of $('#aod-offer')) {\n        const element = $(offer);\n\n        await Dataset.pushData({\n            ...data,\n            sellerName: element.find('div[id*=\"soldBy\"] a[aria-label]').text().trim(),\n            offer: element.find('.a-price .a-offscreen').text().trim(),\n        });\n\n    }\n});\n")),(0,o.kt)("h2",{id:"final-code"},"Final code"),(0,o.kt)("p",null,"That should be it! Let's just make sure we've all got the same code:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// constants.js\nexport const BASE_URL = 'https://www.amazon.com';\n\nexport const labels = {\n    START: 'START',\n    PRODUCT: 'PRODUCT',\n    OFFERS: 'OFFERS',\n};\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// routes.js\nimport { createCheerioRouter, Dataset } from 'crawlee';\nimport { BASE_URL, labels } from './constants';\n\nexport const router = createCheerioRouter();\n\nrouter.addHandler(labels.START, async ({ $, crawler, request }) => {\n    const { keyword } = request.userData;\n\n    const products = $('div > div[data-asin]:not([data-asin=\"\"])');\n\n    for (const product of products) {\n        const element = $(product);\n        const titleElement = $(element.find('.a-text-normal[href]'));\n\n        const url = `${BASE_URL}${titleElement.attr('href')}`;\n\n        await crawler.addRequests([\n            {\n                url,\n                label: labels.PRODUCT,\n                userData: {\n                    data: {\n                        title: titleElement.first().text().trim(),\n                        asin: element.attr('data-asin'),\n                        itemUrl: url,\n                        keyword,\n                    },\n                },\n            },\n        ]);\n    }\n});\n\nrouter.addHandler(labels.PRODUCT, async ({ $, crawler, request }) => {\n    const { data } = request.userData;\n\n    const element = $('div#productDescription');\n\n    await crawler.addRequests([\n        {\n            url: `${BASE_URL}/gp/aod/ajax/ref=auto_load_aod?asin=${data.asin}&pc=dp`,\n            label: labels.OFFERS,\n            userData: {\n                data: {\n                    ...data,\n                    description: element.text().trim(),\n                },\n            },\n        },\n    ]);\n});\n\nrouter.addHandler(labels.OFFERS, async ({ $, request }) => {\n    const { data } = request.userData;\n\n    for (const offer of $('#aod-offer')) {\n        const element = $(offer);\n\n        await Dataset.pushData({\n            ...data,\n            sellerName: element.find('div[id*=\"soldBy\"] a[aria-label]').text().trim(),\n            offer: element.find('.a-price .a-offscreen').text().trim(),\n        });\n    }\n});\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// main.js\nimport { CheerioCrawler, KeyValueStore, log } from 'crawlee';\nimport { router } from './routes.js';\n\n// Grab our keyword from the input\nconst { keyword = 'iphone' } = (await KeyValueStore.getInput()) ?? {};\n\nconst crawler = new CheerioCrawler({\n    requestHandler: router,\n});\n\n// Add our initial requests\nawait crawler.addRequests([\n    {\n        // Turn the inputted keyword into a link we can make a request with\n        url: `https://www.amazon.com/s/ref=nb_sb_noss?url=search-alias%3Daps&field-keywords=${keyword}`,\n        label: 'START',\n        userData: {\n            keyword,\n        },\n    },\n]);\n\nlog.info('Starting the crawl.');\nawait crawler.run();\nlog.info('Crawl finished.');\n")),(0,o.kt)("h2",{id:"wrap-up"},"Wrap up \ud83d\udca5"),(0,o.kt)("p",null,"Nice work! You've officially built your first scraper with Crawlee! You're now ready to take on the rest of the Apify Academy with confidence."),(0,o.kt)("p",null,"For now, this is the last section of the ",(0,o.kt)("strong",{parentName:"p"},"Web scraping for beginners")," course. If you want to learn more about web scraping, we recommend checking venturing out and following the other lessons in the Academy. We will keep updating the Academy with more content regularly until we cover all the advanced and expert topics we promised at the beginning."))}f.isMDXComponent=!0},53418:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/offers-page-049beb3f47063aef94256bc455af4b56.webp"},4755:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/view-offers-button-f3f87a8ad3c021fec4f9885719447545.webp"}}]);