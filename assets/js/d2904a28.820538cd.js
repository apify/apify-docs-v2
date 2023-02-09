"use strict";(self.webpackChunkapify_docs_v2=self.webpackChunkapify_docs_v2||[]).push([[8535],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(r),m=a,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},17896:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>c,metadata:()=>l,toc:()=>d});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),i=["components"],c={title:"Recap! - Data extraction",description:"Review our e-commerce website scraper and refresh our memory about its code and the programming techniques we used to extract and save the data.",sidebar_position:1,slug:"/web-scraping-for-beginners/crawling/recap-collection-basics"},s="Recap of data extraction basics",l={unversionedId:"webscraping/web_scraping_for_beginners/crawling/recap_collection_basics",id:"webscraping/web_scraping_for_beginners/crawling/recap_collection_basics",title:"Recap! - Data extraction",description:"Review our e-commerce website scraper and refresh our memory about its code and the programming techniques we used to extract and save the data.",source:"@site/sources/academy/webscraping/web_scraping_for_beginners/crawling/recap_collection_basics.md",sourceDirName:"webscraping/web_scraping_for_beginners/crawling",slug:"/web-scraping-for-beginners/crawling/recap-collection-basics",permalink:"/academy/web-scraping-for-beginners/crawling/recap-collection-basics",draft:!1,editUrl:"https://github.com/apify/apify-docs-v2/edit/master/sources/academy/webscraping/web_scraping_for_beginners/crawling/recap_collection_basics.md",tags:[],version:"current",lastUpdatedBy:"Jind\u0159ich B\xe4r",lastUpdatedAt:1675956217,formattedLastUpdatedAt:"Feb 9, 2023",sidebarPosition:1,frontMatter:{title:"Recap! - Data extraction",description:"Review our e-commerce website scraper and refresh our memory about its code and the programming techniques we used to extract and save the data.",sidebar_position:1,slug:"/web-scraping-for-beginners/crawling/recap-collection-basics"},sidebar:"academy",previous:{title:"Basics of crawling",permalink:"/academy/web-scraping-for-beginners/crawling"},next:{title:"Finding links",permalink:"/academy/web-scraping-for-beginners/crawling/finding-links"}},p={},d=[{value:"Next up",id:"next",level:2}],u={toc:d};function m(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"quick-recap"},"Recap of data extraction basics"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Review our e-commerce website scraper and refresh our memory about its code and the programming techniques we used to extract and save the data.")),(0,o.kt)("hr",null),(0,o.kt)("p",null,"We finished off the ",(0,o.kt)("a",{parentName:"p",href:"/academy/web-scraping-for-beginners/data-collection",target:null,rel:null},"first section")," of the ",(0,o.kt)("em",{parentName:"p"},"Web Scraping for Beginners")," course by creating a simple web scraper in Node.js. The scraper collected all the on-sale products from ",(0,o.kt)("a",{parentName:"p",href:"https://demo-webstore.apify.org/search/on-sale",target:"_blank",rel:"noopener"},"our demo webstore"),". Let's see the code with some comments added."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// First, we imported all the libraries we needed to\n// download, extract, and convert the data we wanted\nimport { gotScraping } from 'got-scraping';\nimport cheerio from 'cheerio';\nimport { parse } from 'json2csv';\nimport { writeFileSync } from 'fs';\n\n// Here, we fetched the website's HTML and saved it to a new variable.\nconst response = await gotScraping('https://demo-webstore.apify.org/search/on-sale');\nconst html = response.body;\n\n// We used Cheerio, a popular library, to parse (process)\n// the downloaded HTML so that we could manipulate it.\nconst $ = cheerio.load(html);\n\n// Using the div.site-listing CSS selector, we collected\n// all the HTML elements which contained the 32 products' data.\nconst products = $('a[href*=\"/product/\"]');\n\n// Then, we prepared a new array to store the results.\nconst results = [];\n\n// And looped over all the 32 elements to extract information\n// for the individual products.\nfor (const product of products) {\n    const element = $(product);\n\n    // The title data was in an <h3> element\n    const title = element.find('h3').text();\n    // The price data was in a <div> element with a class\n    // including the keyword \"price\"\n    const price = element.find('div[class*=\"price\"]').text();\n\n    // We added the data to the results array\n    // in the form of an object with keys and values.\n    results.push({\n        title,\n        price,\n    });\n}\n\n// Finally, we parsed the results from JSON format\n// to CSV format\nconst csv = parse(results);\n\n// Then, we wrote the CSV into the filesystem\nwriteFileSync('products.csv', csv)\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"If some of the code is hard for you to understand, please review the ",(0,o.kt)("a",{parentName:"p",href:"/academy/web-scraping-for-beginners/data-collection",target:null,rel:null},"Basics of data extraction")," section. We will not go through the details again in this section about crawling.")),(0,o.kt)("h2",{id:"next"},"Next up"),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"/academy/web-scraping-for-beginners/crawling/finding-links",target:null,rel:null},"next lesson")," is all about finding some links to crawl on ",(0,o.kt)("a",{parentName:"p",href:"https://demo-webstore.apify.org/",target:"_blank",rel:"noopener"},"Fakestore"),"."))}m.isMDXComponent=!0}}]);