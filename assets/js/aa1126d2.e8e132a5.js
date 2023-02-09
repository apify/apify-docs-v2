"use strict";(self.webpackChunkapify_docs_v2=self.webpackChunkapify_docs_v2||[]).push([[6189],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(r),h=o,g=u["".concat(c,".").concat(h)]||u[h]||d[h]||a;return r?n.createElement(g,i(i({ref:t},p),{},{components:r})):n.createElement(g,i({ref:t},p))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},57902:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),i=["components"],s={title:"Your first crawl",description:"Learn how to crawl the web using Node.js, Cheerio and an HTTP client. Extract URLs from pages and use them to visit more websites.",sidebar_position:5,slug:"/web-scraping-for-beginners/crawling/first-crawl"},c="Your first crawl",l={unversionedId:"webscraping/web_scraping_for_beginners/crawling/first_crawl",id:"webscraping/web_scraping_for_beginners/crawling/first_crawl",title:"Your first crawl",description:"Learn how to crawl the web using Node.js, Cheerio and an HTTP client. Extract URLs from pages and use them to visit more websites.",source:"@site/sources/academy/webscraping/web_scraping_for_beginners/crawling/first_crawl.md",sourceDirName:"webscraping/web_scraping_for_beginners/crawling",slug:"/web-scraping-for-beginners/crawling/first-crawl",permalink:"/academy/web-scraping-for-beginners/crawling/first-crawl",draft:!1,editUrl:"https://github.com/apify/apify-docs-v2/edit/master/sources/academy/webscraping/web_scraping_for_beginners/crawling/first_crawl.md",tags:[],version:"current",lastUpdatedBy:"Jan B\xe1rta",lastUpdatedAt:1675957009,formattedLastUpdatedAt:"Feb 9, 2023",sidebarPosition:5,frontMatter:{title:"Your first crawl",description:"Learn how to crawl the web using Node.js, Cheerio and an HTTP client. Extract URLs from pages and use them to visit more websites.",sidebar_position:5,slug:"/web-scraping-for-beginners/crawling/first-crawl"},sidebar:"academy",previous:{title:"Relative URLs",permalink:"/academy/web-scraping-for-beginners/crawling/relative-urls"},next:{title:"Scraping data",permalink:"/academy/web-scraping-for-beginners/crawling/scraping-the-data"}},p={},d=[{value:"Processing URLs",id:"processing-urls",level:2},{value:"Handling errors",id:"handling-errors",level:2},{value:"Next up",id:"next",level:2}],u={toc:d};function h(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"your-first-crawl"},"Your first crawl"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Learn how to crawl the web using Node.js, Cheerio and an HTTP client. Extract URLs from pages and use them to visit more websites.")),(0,a.kt)("hr",null),(0,a.kt)("p",null,"In the previous lessons, we learned what crawling is and how to extract URLs from a page's HTML. The only thing that remains is to write the code - so let's get right to it!"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"If the code starts to look too complex for you, don't worry. We're showing it for educational purposes, so that you can learn how crawling works. Near the end of this module, we'll show you a much easier and faster way to crawl, using a specialized scraping library. If you want, you can skip the details and ",(0,a.kt)("a",{parentName:"p",href:"/academy/web-scraping-for-beginners/crawling/pro-scraping",target:null,rel:null},"go there now"),".")),(0,a.kt)("h2",{id:"processing-urls"},"Processing URLs"),(0,a.kt)("p",null,"In the previous lessons, we collected and filtered all the URLs pointing to individual products on our beloved ",(0,a.kt)("a",{parentName:"p",href:"https://demo-webstore.apify.org/",target:"_blank",rel:"noopener"},"demo e-commerce site"),". To crawl the URLs, we can't print them to the console, but rather we need to save them for future use. Once we do that, we must take this list of URLs and download the HTML of each of the pages. See the comments for changes and additions to the code."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// crawler.js\nimport { gotScraping } from 'got-scraping';\nimport cheerio from 'cheerio';\n\nconst WEBSITE_URL = 'https://demo-webstore.apify.org/';\n\nconst response = await gotScraping('https://demo-webstore.apify.org/');\nconst html = response.body;\n\nconst $ = cheerio.load(html);\n\nconst productLinks = $('a[href*=\"/product/\"]');\n\n// Prepare an empty array for our product Urls\nconst productsToScrape = [];\n\nfor (const link of productLinks) {\n    const relativeUrl = $(link).attr('href');\n    const absoluteUrl = new URL(relativeUrl, WEBSITE_URL);\n\n    // add each product link to our array\n    productsToScrape.push(absoluteUrl.href);\n}\n\n// Loop over the stored URLs to process each\n// product page individually\nfor (const link of productsToScrape) {\n    // Download HTML.\n    const productResponse = await gotScraping(link);\n    const productHTML = productResponse.body;\n\n    // Load into Cheerio to test the HTML.\n    // We use $$ to avoid confusion with $ variable above.\n    const $$ = cheerio.load(productHTML);\n\n    // Extract the product's title from the <h3> tag\n    const productPageTitle = $$('h3').text();\n\n    // Print the title to the terminal to see\n    // whether we downloaded the correct HTML.\n    console.log(productPageTitle);\n}\n")),(0,a.kt)("p",null,"If you run the crawler from your terminal, it should print the titles."),(0,a.kt)("h2",{id:"handling-errors"},"Handling errors"),(0,a.kt)("p",null,"The code above is correct, but it's not robust. If something goes wrong, it will crash. That something could be a network error, an internet connection error, or just that one of the websites you're trying to reach could simply be experiencing problems at that moment. Hitting any error like that would cause our current crawler to stop entirely, which means we would lose all the data it had collected so far."),(0,a.kt)("p",null,"In programming, you handle errors by catching them and then doing some action. Typically, printing information that the error occurred and/or retrying."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"The scraping library we'll ",(0,a.kt)("a",{parentName:"p",href:"/academy/web-scraping-for-beginners/crawling/pro-scraping",target:null,rel:null},"show you later")," will handle errors and retries automatically for you.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// crawler.js\nimport { gotScraping } from 'got-scraping';\nimport cheerio from 'cheerio';\n\nconst WEBSITE_URL = 'https://demo-webstore.apify.org/';\n\nconst response = await gotScraping('https://demo-webstore.apify.org/');\nconst html = response.body;\nconst $ = cheerio.load(html);\n\nconst productLinks = $('a[href*=\"/product/\"]');\n\nconst productsToScrape = [];\nfor (const link of productLinks) {\n    const relativeUrl = $(link).attr('href');\n    const absoluteUrl = new URL(relativeUrl, WEBSITE_URL);\n    productsToScrape.push(absoluteUrl.href);\n}\n\nfor (const link of productsToScrape) {\n    // Everything else is exactly the same.\n    // We only wrapped the code in try/catch blocks.\n    // The try block passes all errors into the catch block.\n    // So, instead of crashing the crawler, they can be handled.\n    try {\n        // The try block attempts to execute our code\n        const productResponse = await gotScraping(link);\n        const productHTML = productResponse.body;\n        const $$ = cheerio.load(productHTML);\n        const productPageTitle = $$('h3').text();\n        console.log(productPageTitle);\n    } catch (error) {\n        // In the catch block, we handle errors.\n        // This time, we will just print\n        // the error message and the url.\n        console.error(error.message, link)\n    }\n}\n")),(0,a.kt)("p",null,"At the time of writing, none of the links have failed; however, in your crawling endeavors, you will surely hit a few errors \ud83d\ude09. The important thing is that the crawler no longer crashes if an error does in fact occur, and that it was able to download the HTML from each product's link."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"If you thought that the crawl was taking too long to complete, the ",(0,a.kt)("a",{parentName:"p",href:"/academy/web-scraping-for-beginners/crawling/pro-scraping",target:null,rel:null},"scraping library")," we keep referring to will help once again. It automatically parallelizes the downloads and processing of HTML, which leads to significant speed improvements.")),(0,a.kt)("h2",{id:"next"},"Next up"),(0,a.kt)("p",null,"In the ",(0,a.kt)("a",{parentName:"p",href:"/academy/web-scraping-for-beginners/crawling/scraping-the-data",target:null,rel:null},"next lesson"),", we will complete the scraper by using the data extraction code from the ",(0,a.kt)("a",{parentName:"p",href:"/academy/web-scraping-for-beginners/data-collection/node-continued",target:null,rel:null},"Basics of data extraction")," section and applying it to all of the product pages."))}h.isMDXComponent=!0}}]);