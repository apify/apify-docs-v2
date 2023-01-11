"use strict";(self.webpackChunkapify_docs_v2=self.webpackChunkapify_docs_v2||[]).push([[2736],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(n),m=a,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},30349:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>c,metadata:()=>l,toc:()=>d});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],c={title:"Recap! - Data collection",description:"Review our e-commerce website scraper and refresh our memory about its code and the programming techniques we used to collect and save the data.",sidebar_position:1,slug:"/web-scraping-for-beginners/crawling/recap-collection-basics"},s="[](#quick-recap) Recap of data collection basics",l={unversionedId:"web_scraping_for_beginners/crawling/recap_collection_basics",id:"web_scraping_for_beginners/crawling/recap_collection_basics",title:"Recap! - Data collection",description:"Review our e-commerce website scraper and refresh our memory about its code and the programming techniques we used to collect and save the data.",source:"@site/sources/academy/web_scraping_for_beginners/crawling/recap_collection_basics.md",sourceDirName:"web_scraping_for_beginners/crawling",slug:"/web-scraping-for-beginners/crawling/recap-collection-basics",permalink:"/academy/web-scraping-for-beginners/crawling/recap-collection-basics",draft:!1,tags:[],version:"current",lastUpdatedBy:"Jind\u0159ich B\xe4r",lastUpdatedAt:1673462481,formattedLastUpdatedAt:"Jan 11, 2023",sidebarPosition:1,frontMatter:{title:"Recap! - Data collection",description:"Review our e-commerce website scraper and refresh our memory about its code and the programming techniques we used to collect and save the data.",sidebar_position:1,slug:"/web-scraping-for-beginners/crawling/recap-collection-basics"},sidebar:"defaultSidebar",previous:{title:"Basics of crawling",permalink:"/academy/web-scraping-for-beginners/crawling"},next:{title:"Finding links",permalink:"/academy/web-scraping-for-beginners/crawling/finding-links"}},p={},d=[{value:" Next up",id:"-next-up",level:2}],u={toc:d};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"-recap-of-data-collection-basics"},(0,o.kt)("a",{parentName:"h1",href:"#quick-recap",target:null,rel:null})," Recap of data collection basics"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Review our e-commerce website scraper and refresh our memory about its code and the programming techniques we used to collect and save the data.")),(0,o.kt)("hr",null),(0,o.kt)("p",null,"We finished off the ",(0,o.kt)("a",{parentName:"p",href:"/academy/web-scraping-for-beginners/data-collection",target:null,rel:null},"first section")," of the ",(0,o.kt)("em",{parentName:"p"},"Web Scraping for Beginners")," course by creating a simple web scraper in Node.js. The scraper collected all of the on-sale products from ",(0,o.kt)("a",{parentName:"p",href:"https://demo-webstore.apify.org/search/on-sale",target:"_blank",rel:"noopener"},"our demo webstore"),". Let's see the code with some comments added."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// First, we imported all the libraries we needed to\n// download, collect, and convert the data we wanted\nimport { gotScraping } from 'got-scraping';\nimport cheerio from 'cheerio';\nimport { parse } from 'json2csv';\nimport { writeFileSync } from 'fs';\n\n// Here, we fetched the website's HTML and saved it to a new variable.\nconst response = await gotScraping('https://demo-webstore.apify.org/search/on-sale');\nconst html = response.body;\n\n// We used Cheerio, a popular library, to parse (process)\n// the downloaded HTML so that we could manipulate it.\nconst $ = cheerio.load(html);\n\n// Using the div.site-listing CSS selector, we collected\n// all the HTML elements which contained the 32 products' data.\nconst products = $('a[href*=\"/product/\"]');\n\n// Then, we prepared a new array to store the results.\nconst results = [];\n\n// And looped over all the 32 elements to extract information\n// for the individual products.\nfor (const product of products) {\n    const element = $(product);\n\n    // The title data was in an <h3> element\n    const title = element.find('h3').text();\n    // The price data was in a <div> element with a class\n    // including the keyword \"price\"\n    const price = element.find('div[class*=\"price\"]').text();\n\n    // We added the data to the results array\n    // in the form of an object with keys and values.\n    results.push({\n        title,\n        price,\n    });\n}\n\n// Finally, we parsed the results from JSON format\n// to CSV format \nconst csv = parse(results);\n\n// Then, we wrote the CSV into the filesystem\nwriteFileSync('products.csv', csv)\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"If some of the code is hard for you to understand, please review the ",(0,o.kt)("a",{parentName:"p",href:"/academy/web-scraping-for-beginners/data-collection",target:null,rel:null},"Basics of data collection")," section. We will not go through the details again in this section about crawling.")),(0,o.kt)("h2",{id:"-next-up"},(0,o.kt)("a",{parentName:"h2",href:"#next",target:null,rel:null})," Next up"),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"/academy/web-scraping-for-beginners/crawling/finding-links",target:null,rel:null},"next lesson")," is all about finding some links to crawl on ",(0,o.kt)("a",{parentName:"p",href:"https://demo-webstore.apify.org/",target:"_blank",rel:"noopener"},"Fakestore"),"."))}m.isMDXComponent=!0}}]);