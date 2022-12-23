"use strict";(self.webpackChunkapify_docs_v2=self.webpackChunkapify_docs_v2||[]).push([[3689],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>g});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),i=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=i(e.components);return n.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=i(r),h=o,g=d["".concat(c,".").concat(h)]||d[h]||u[h]||a;return r?n.createElement(g,s(s({ref:t},p),{},{components:r})):n.createElement(g,s({ref:t},p))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=h;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[d]="string"==typeof e?e:o,s[1]=l;for(var i=2;i<a;i++)s[i]=r[i];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},14161:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>h,frontMatter:()=>l,metadata:()=>i,toc:()=>d});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),s=["components"],l={title:"Scraping data",description:"Learn how to add data collection logic to your crawler, which will allow you to extract data from all the websites you crawled.",sidebar_position:6,slug:"/web-scraping-for-beginners/crawling/scraping-the-data"},c="[](#scraping-data) Scraping data",i={unversionedId:"web_scraping_for_beginners/crawling/scraping_the_data",id:"web_scraping_for_beginners/crawling/scraping_the_data",title:"Scraping data",description:"Learn how to add data collection logic to your crawler, which will allow you to extract data from all the websites you crawled.",source:"@site/sources/academy/web_scraping_for_beginners/crawling/scraping_the_data.md",sourceDirName:"web_scraping_for_beginners/crawling",slug:"/web-scraping-for-beginners/crawling/scraping-the-data",permalink:"/academy/web-scraping-for-beginners/crawling/scraping-the-data",draft:!1,tags:[],version:"current",lastUpdatedBy:"Jind\u0159ich B\xe4r",lastUpdatedAt:1671803343,formattedLastUpdatedAt:"Dec 23, 2022",sidebarPosition:6,frontMatter:{title:"Scraping data",description:"Learn how to add data collection logic to your crawler, which will allow you to extract data from all the websites you crawled.",sidebar_position:6,slug:"/web-scraping-for-beginners/crawling/scraping-the-data"},sidebar:"defaultSidebar",previous:{title:"Your first crawl",permalink:"/academy/web-scraping-for-beginners/crawling/first-crawl"},next:{title:"Professional scraping",permalink:"/academy/web-scraping-for-beginners/crawling/pro-scraping"}},p={},d=[{value:" Quick review of earlier&#39;s code",id:"-quick-review-of-earliers-code",level:2},{value:" Building the scraper",id:"-building-the-scraper",level:2},{value:" Next up",id:"-next-up",level:2}],u={toc:d};function h(e){var t=e.components,l=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,n.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"-scraping-data"},(0,a.kt)("a",{parentName:"h1",href:"#scraping-data",target:null,rel:null})," Scraping data"),(0,a.kt)("p",null,"At the ",(0,a.kt)("a",{parentName:"p",href:"/academy/web-scraping-for-beginners",target:null,rel:null},"very beginning of the course")," section, and we will combine that into a web scraper."),(0,a.kt)("h2",{id:"-quick-review-of-earliers-code"},(0,a.kt)("a",{parentName:"h2",href:"#review-code",target:null,rel:null})," Quick review of earlier's code"),(0,a.kt)("p",null,"Here's a quick reminder of earlier's data collection code:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// main.js\nimport { gotScraping } from 'got-scraping';\nimport cheerio from 'cheerio';\n\nconst response = await gotScraping('https://demo-webstore.apify.org/search/on-sale');\nconst html = response.body;\n\nconst $ = cheerio.load(html);\nconst products = $('a[href*=\"/product/\"]');\n\nconst results = [];\n\nfor (const product of products) {\n    const element = $(product);\n\n    const title = element.find('h3').text();\n    const price = element.find('div[class*=\"price\"]').text();\n\n    results.push({\n        title,\n        price,\n    });\n}\n\nconsole.log(results);\n")),(0,a.kt)("p",null,"For comparison, here's a refresher of the crawling code we just wrote in the last lesson:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// crawler.js\nimport { gotScraping } from 'got-scraping';\nimport cheerio from 'cheerio';\n\nconst WEBSITE_URL = 'https://demo-webstore.apify.org/';\n\nconst response = await gotScraping('https://demo-webstore.apify.org/');\nconst html = response.body;\nconst $ = cheerio.load(html);\n\nconst productLinks = $('a[href*=\"/product/\"]');\n\nconst productsToScrape = [];\nfor (const link of productLinks) {\n    const relativeUrl = $(link).attr('href');\n    const absoluteUrl = new URL(relativeUrl, WEBSITE_URL);\n    productsToScrape.push(absoluteUrl.href);\n}\n\nfor (const link of productsToScrape) {\n    try {\n        const productResponse = await gotScraping(link);\n        const productHTML = productResponse.body;\n        const $$ = cheerio.load(productHTML);\n        const productPageTitle = $$('h3').text();\n        console.log(productPageTitle);\n    } catch (error) {\n        console.error(error.message, link)\n    }\n}\n")),(0,a.kt)("p",null,"We can see that the code is extremely similar. Both scripts download HTML and then process the HTML. To get an idea how to put them together, we'll go back to the ",(0,a.kt)("a",{parentName:"p",href:"/academy/web-scraping-for-beginners/crawling",target:null,rel:null},"original process of crawling"),"."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Visit the start URL."),(0,a.kt)("li",{parentName:"ol"},"Collect next URLs (and data) and save them."),(0,a.kt)("li",{parentName:"ol"},"Visit one of the collected URLs and save data and/or more URLs."),(0,a.kt)("li",{parentName:"ol"},"Repeat step 3 until you have everything you needed.")),(0,a.kt)("p",null,"Using this flow as guidance, we should be able to connect the pieces of code together to build a scraper which crawls through the products found on the on-sale page of Fakestore, then scrapes the title, description, and price of each of them."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"We will be using slightly new code to write the new scraper, but the flow and logic will be the same as the two code snippets above. First, we'll visit the on-sale products page, scrape each product's link, then download each product page's HTML and finally scrape the data from each product.")),(0,a.kt)("h2",{id:"-building-the-scraper"},(0,a.kt)("a",{parentName:"h2",href:"#building-scraper",target:null,rel:null})," Building the scraper"),(0,a.kt)("p",null,"Let's create a brand new file called ",(0,a.kt)("strong",{parentName:"p"},"final.js")," and write our scraper there. Then, we'll put our imports at the top of the file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// final.js\nimport { gotScraping } from 'got-scraping';\nimport cheerio from 'cheerio';\n")),(0,a.kt)("p",null,"First, we need to ",(0,a.kt)("strong",{parentName:"p"},"visit the start URL"),". To scrape all the on-sale product links, we need the on-sale page as the start URL."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const BASE_URL = 'https://demo-webstore.apify.org';\n\nconst response = await gotScraping(`${BASE_URL}/search/on-sale`);\nconst $ = cheerio.load(response.body);\n")),(0,a.kt)("p",null,"Next, we need to ",(0,a.kt)("strong",{parentName:"p"},"collect the next URLs")," we want to visit (the product URLs). So far, the code is nearly exactly the same as the ",(0,a.kt)("strong",{parentName:"p"},"crawler.js")," code."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const BASE_URL = 'https://demo-webstore.apify.org';\n\nconst response = await gotScraping(`${BASE_URL}/search/on-sale`);\nconst $ = cheerio.load(response.body);\n\nconst productLinks = [];\n\nfor (const product of $('a[href*=\"product\"]')) {\n    const relative = $(product).attr('href');\n    const url = new URL(relative, BASE_URL);\n    productLinks.push(url);\n}\n")),(0,a.kt)("p",null,"Now, the code starts to differ. We will use the crawling logic from earlier to visit all the URLs, but we will replace the placeholder extraction logic we had there. The placeholder logic only read the products's title, but we want the title, description, and price as well."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// ...\n\n// A new array to save each product in\nconst results = [];\n\n// An optional array we can push to when we hit an error\nconst errors = [];\n\nfor (const url of productLinks) {\n    try {\n        // we download HTML of each country page.\n        const productResponse = await gotScraping(url);\n        const $$ = cheerio.load(productResponse.body);\n\n        // And this is where we use data collection logic.\n        // Don't forget to update $ to $$, or you'll get errors.\n        const title = $$('h3').text().trim();\n        const price = $$('h3 + div').text().trim();\n        const description = $$('div[class*=\"Text_body\"]').text().trim();\n\n        results.push({\n            title,\n            description,\n            price,\n        });\n    } catch (error) {\n        // Push information about the error to the\n        // \"errors\" array so we can check it later\n        errors.push({\n            url,\n            err: error.message,\n        });\n    }\n}\n")),(0,a.kt)("p",null,"Aside from the ",(0,a.kt)("a",{parentName:"p",href:"https://www.w3schools.com/cssref/sel_element_pluss.asp",target:"_blank",rel:"noopener"},(0,a.kt)("inlineCode",{parentName:"a"},"element + element"))," selector we used to grab each product's price, there's no new logic here. You already know everything from the previous lessons. When we put it all together, we arrive at the final scraper code. It's always a good idea to add some in-progress logging to a scraper to be able to monitor how it's working. Let's add some now:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import { gotScraping } from 'got-scraping';\nimport cheerio from 'cheerio';\n\nconst BASE_URL = 'https://demo-webstore.apify.org';\n\nconst startURL = `${BASE_URL}/search/on-sale`;\n\nconsole.log(`Going to ${startURL}`);\nconst response = await gotScraping(startURL);\nconst $ = cheerio.load(response.body);\n\nconst productLinks = [];\n\nfor (const product of $('a[href*=\"product\"]')) {\n    const relative = $(product).attr('href');\n    const url = new URL(relative, BASE_URL);\n    productLinks.push(url);\n}\n\nconsole.log(`Collected ${productLinks.length} product URLs`);\n\nconst results = [];\n\nconst errors = [];\n\nfor (const url of productLinks) {\n    try {\n        console.log(`Scraping ${url}`);\n        const productResponse = await gotScraping(url);\n        const $$ = cheerio.load(productResponse.body);\n\n        const title = $$('h3').text().trim();\n        const price = $$('h3 + div').text().trim();\n        const description = $$('div[class*=\"Text_body\"]').text().trim();\n\n        results.push({\n            title,\n            description,\n            price,\n        });\n    } catch (error) {\n        console.error(`Failed on ${url}: ${error.message}`);\n        errors.push({\n            url,\n            err: error.message,\n        });\n    }\n}\n\nconsole.log(`${results.length} results:`);\nconsole.log(results);\n")),(0,a.kt)("p",null,"At the time of writing, we were getting 32 product results. Our demo site is bound to change, so you might receive different results; however, your results printed in terminal should look similar to the ones here:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Results in Terminal",src:r(55755).Z,width:"1830",height:"734"})),(0,a.kt)("h2",{id:"-next-up"},(0,a.kt)("a",{parentName:"h2",href:"#next",target:null,rel:null})," Next up"),(0,a.kt)("p",null,"And that's it for the basics of crawling. But don't leave just yet. As promised, in the ",(0,a.kt)("a",{parentName:"p",href:"/academy/web-scraping-for-beginners/crawling/pro-scraping",target:null,rel:null},"next lesson")," we will rewrite the scraper using a proper scraping library. It will make development much faster and the scraper more robust."))}h.isMDXComponent=!0},55755:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/final-results-2f9f21ea1d37b301c07fba001c2caa6e.webp"}}]);