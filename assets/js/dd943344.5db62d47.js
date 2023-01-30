"use strict";(self.webpackChunkapify_docs_v2=self.webpackChunkapify_docs_v2||[]).push([[2652],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(n),u=r,h=m["".concat(l,".").concat(u)]||m[u]||d[u]||o;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},10406:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),i=["components"],s={title:"How to scrape from dynamic pages",description:"Learn about dynamic pages and dynamic content. How can we find out if a page is dynamic? How do we programmatically scrape dynamic content?",sidebar_position:14.4,slug:"/node-js/dealing-with-dynamic-pages"},l="How to scrape from dynamic pages",c={unversionedId:"tutorials/node_js/dealing_with_dynamic_pages",id:"tutorials/node_js/dealing_with_dynamic_pages",title:"How to scrape from dynamic pages",description:"Learn about dynamic pages and dynamic content. How can we find out if a page is dynamic? How do we programmatically scrape dynamic content?",source:"@site/sources/academy/tutorials/node_js/dealing_with_dynamic_pages.md",sourceDirName:"tutorials/node_js",slug:"/node-js/dealing-with-dynamic-pages",permalink:"/academy/node-js/dealing-with-dynamic-pages",draft:!1,tags:[],version:"current",lastUpdatedBy:"Jind\u0159ich B\xe4r",lastUpdatedAt:1675097992,formattedLastUpdatedAt:"Jan 30, 2023",sidebarPosition:14.4,frontMatter:{title:"How to scrape from dynamic pages",description:"Learn about dynamic pages and dynamic content. How can we find out if a page is dynamic? How do we programmatically scrape dynamic content?",sidebar_position:14.4,slug:"/node-js/dealing-with-dynamic-pages"},sidebar:"academy",previous:{title:"How to choose the right scraper for the job",permalink:"/academy/node-js/choosing-the-right-scraper"},next:{title:"How to scrape hidden JavaScript objects in HTML",permalink:"/academy/node-js/js-in-html"}},p={},d=[{value:"A quick experiment",id:"quick-experiment",level:2},{value:"Scraping dynamic content",id:"scraping-dynamic-content",level:2},{value:"Small Recap",id:"small-recap",level:2}],m={toc:d};function u(e){var t=e.components,s=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},m,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"dealing-with-dynamic-pages"},"How to scrape from dynamic pages"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Learn about dynamic pages and dynamic content. How can we find out if a page is dynamic? How do we programmatically scrape dynamic content?")),(0,o.kt)("hr",null),(0,o.kt)("p",null,"In this lesson, we'll be discussing dynamic content and how to scrape it while utilizing Crawlee."),(0,o.kt)("h2",{id:"quick-experiment"},"A quick experiment"),(0,o.kt)("p",null,"From our adored and beloved ",(0,o.kt)("a",{parentName:"p",href:"https://demo-webstore.apify.org/",target:"_blank",rel:"noopener"},"Fakestore"),", we have been tasked to scrape each product's title, price, and image from the ",(0,o.kt)("a",{parentName:"p",href:"https://demo-webstore.apify.org/search/new-arrivals",target:"_blank",rel:"noopener"},"new arrivals")," page. Easy enough! We did something very similar in the previous modules."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"New arrival products in Fakestore",src:n(51357).Z,width:"1714",height:"1678"})),(0,o.kt)("p",null,"First, create a file called ",(0,o.kt)("strong",{parentName:"p"},"dynamic.js")," and copy-paste the following boiler plate code into it:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { CheerioCrawler } from 'crawlee';\n\nconst crawler = new CheerioCrawler({\n    requestHandler: async ({ $, request }) => {\n        // We'll put our logic here in a minute\n    },\n});\n\nawait crawler.addRequests([{ url: 'https://demo-webstore.apify.org/search/new-arrivals' }]);\n\nawait crawler.run();\n")),(0,o.kt)("p",null,"If you're in a brand new project, don't forget to initialize your project, then install the necessary dependencies:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'# this command will initialize your project\n# and install the "crawlee" and "cheerio" packages\nnpm init -y && npm i crawlee\n')),(0,o.kt)("p",null,"Now, let's write some data collection code to collect each product's data. This should look familiar if you went through the ",(0,o.kt)("a",{parentName:"p",href:"/academy/web-scraping-for-beginners/data-collection",target:null,rel:null},"Data Collection")," lessons:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { CheerioCrawler } from 'crawlee';\n\nconst BASE_URL = 'https://demo-webstore.apify.org';\n\nconst crawler = new CheerioCrawler({\n    requestHandler: async ({ $, request }) => {\n        const products = $('a[href*=\"/product/\"]');\n\n        const results = [...products].map((product) => {\n            const elem = $(product);\n\n            const title = elem.find('h3').text();\n            const price = elem.find('div[class*=\"price\"]').text();\n            const image = elem.find('img[src]').attr('src');\n\n            return {\n                title,\n                price,\n                image: new URL(image, BASE_URL).href,\n            };\n        });\n\n        console.log(results);\n    },\n});\n\nawait crawler.run([{ url: 'https://demo-webstore.apify.org/search/new-arrivals' }]);\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Here, we are using the ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map",target:"_blank",rel:"noopener"},(0,o.kt)("inlineCode",{parentName:"a"},"Array.prototype.map()"))," function to loop through all of the product elements and save them into an array we call ",(0,o.kt)("inlineCode",{parentName:"p"},"results")," all at the same time.")),(0,o.kt)("p",null,'After running it, you might say, "Great! It works!" ',(0,o.kt)("strong",{parentName:"p"},"But wait...")," What are those results being logged to console?"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Bad results in console",src:n(58564).Z,width:"1328",height:"688"})),(0,o.kt)("p",null,'Every single image seems to have the same exact "URL," but they are most definitely not the image URLs we are looking for. This is strange, because in the browser, we were getting URLs that looked like this:'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"https://demo-webstore.apify.org/_next/image?url=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FI%2F81ywGFOb0eL._AC_UL1500_.jpg&w=3840&q=85\n")),(0,o.kt)("p",null,"The reason this is happening is because CheerioCrawler makes static HTTP requests, so it only manages to capture the content from the ",(0,o.kt)("inlineCode",{parentName:"p"},"DOMContentLoaded")," event. Any elements or attributes generated dynamically thereafter using JavaScript (and usually XHR/Fetch requests) are not part of the downloaded HTML, and therefore are not accessible through the ",(0,o.kt)("inlineCode",{parentName:"p"},"$")," object."),(0,o.kt)("p",null,"So, what's the solution? We need to use something that is able to allow the page to follow through with the entire load process - a headless browser."),(0,o.kt)("h2",{id:"scraping-dynamic-content"},"Scraping dynamic content"),(0,o.kt)("p",null,"Let's change a few lines of our code to switch the crawler type from CheerioCrawler to PuppeteerCrawler, which will run a headless browser, allowing the ",(0,o.kt)("inlineCode",{parentName:"p"},"load")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"networkidle")," events to fire:"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Also, don't forget to run ",(0,o.kt)("inlineCode",{parentName:"p"},"npm i puppeteer")," in order to install the ",(0,o.kt)("inlineCode",{parentName:"p"},"puppeteer")," package!")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { PuppeteerCrawler } from 'crawlee';\n\nconst BASE_URL = 'https://demo-webstore.apify.org';\n\n// Switch CheerioCrawler to PuppeteerCrawler\nconst crawler = new PuppeteerCrawler({\n    // Replace \"$\" with \"page\"\n    requestHandler: async ({ parseWithCheerio, request }) => {\n        // Create the $ Cheerio object based on the page's content\n        const $ = await parseWithCheerio();\n\n        const products = $('a[href*=\"/product/\"]');\n\n        const results = [...products].map((product) => {\n            const elem = $(product);\n\n            const title = elem.find('h3').text();\n            const price = elem.find('div[class*=\"price\"]').text();\n            const image = elem.find('img[src]').attr('src');\n\n            return {\n                title,\n                price,\n                image: new URL(image, BASE_URL).href,\n            };\n        });\n\n        console.log(results);\n    },\n});\n\nawait crawler.run([{ url: 'https://demo-webstore.apify.org/search/new-arrivals' }]);\n")),(0,o.kt)("p",null,"After running this one, we can see that our results look different from before. We're getting the image links!"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Not perfect results",src:n(52954).Z,width:"1828",height:"616"})),(0,o.kt)("p",null,"Well... Not quite. It seems that the only images which we got the full links to were the ones that were being displayed within the view of the browser. This means that the images are lazy-loaded. ",(0,o.kt)("strong",{parentName:"p"},"Lazy-loading")," is a common technique used across the web to improve performance. Lazy-loaded items allow the user to load content incrementally, as they perform some action. In most cases, including our current one, this action is scrolling."),(0,o.kt)("p",null,"So, we've gotta scroll down the page to load these images. Luckily, because we're using Crawlee, we don't have to write the logic that will achieve that, because a utility function specifically for Puppeteer called ",(0,o.kt)("a",{parentName:"p",href:"https://crawlee.dev/api/puppeteer-crawler/namespace/puppeteerUtils#infiniteScroll",target:"_blank",rel:"noopener"},(0,o.kt)("inlineCode",{parentName:"a"},"infiniteScroll"))," already exists right in the library, and can be accessed through ",(0,o.kt)("inlineCode",{parentName:"p"},"utils.puppeteer"),". Let's add it to our code now:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { PuppeteerCrawler, utils, Dataset } from 'crawlee';\nimport cheerio from 'cheerio';\n\nconst BASE_URL = 'https://demo-webstore.apify.org';\n\nconst crawler = new PuppeteerCrawler({\n    requestHandler: async ({ parseWithCheerio, request }) => {\n        // Add the utility function\n        await utils.puppeteer.infiniteScroll(page);\n\n        const $ = await parseWithCheerio();\n\n        const products = $('a[href*=\"/product/\"]');\n\n        const results = [...products].map((product) => {\n            const elem = $(product);\n\n            const title = elem.find('h3').text();\n            const price = elem.find('div[class*=\"price\"]').text();\n            const image = elem.find('img[src]').attr('src');\n\n            return {\n                title,\n                price,\n                image: new URL(image, BASE_URL).href,\n            };\n        });\n\n        // Push our results to the dataset\n        await Dataset.pushData(results);\n    },\n});\n\nawait crawler.run([{ url: 'https://demo-webstore.apify.org/search/new-arrivals' }]);\n")),(0,o.kt)("p",null,"Let's run this and check our dataset results..."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "title": "women\'s shoes",\n  "price": "$40.00 USD",\n  "image": "https://demo-webstore.apify.org/_next/image?url=https%3A%2F%2Fdummyjson.com%2Fimage%2Fi%2Fproducts%2F46%2F1.webp&w=3840&q=85"\n}\n')),(0,o.kt)("p",null,"Each product looks like this, and each image is a valid link that can be visited. These are the results we were after."),(0,o.kt)("h2",{id:"small-recap"},"Small Recap"),(0,o.kt)("p",null,"Making static HTTP requests only downloads the HTML content from the ",(0,o.kt)("inlineCode",{parentName:"p"},"DOMContentLoaded")," event. We must use a browser to allow dynamic code to load, or find different means altogether of scraping the data (see ",(0,o.kt)("a",{parentName:"p",href:"/academy/api-scraping",target:null,rel:null},"API Scraping"),")"))}u.isMDXComponent=!0},52954:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/almost-there-689821c3a9b7953bbffa2ef30e67beab.png"},58564:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/bad-results-f0ad878dbe1965962328c43da45fb920.png"},51357:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/new-arrivals-1d8d09b1462e8a6a03224d05001116e8.webp"}}]);