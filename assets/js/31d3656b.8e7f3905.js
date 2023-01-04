"use strict";(self.webpackChunkapify_docs_v2=self.webpackChunkapify_docs_v2||[]).push([[383],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(n),g=a,m=d["".concat(l,".").concat(g)]||d[g]||u[g]||o;return n?r.createElement(m,s(s({ref:t},p),{},{components:n})):r.createElement(m,s({ref:t},p))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var c=2;c<o;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},42522:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>g,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),s=["components"],i={title:"Saving results to CSV",description:"Learn how to save the results of your scraper's collected data to a CSV file that can be opened in Excel, Google Sheets, or any other spreadsheets program.",sidebar_position:8,slug:"/web-scraping-for-beginners/data-collection/save-to-csv"},l="[](#saving-to-csv) Saving results to CSV",c={unversionedId:"web_scraping_for_beginners/data_collection/save_to_csv",id:"web_scraping_for_beginners/data_collection/save_to_csv",title:"Saving results to CSV",description:"Learn how to save the results of your scraper's collected data to a CSV file that can be opened in Excel, Google Sheets, or any other spreadsheets program.",source:"@site/sources/academy/web_scraping_for_beginners/data_collection/save_to_csv.md",sourceDirName:"web_scraping_for_beginners/data_collection",slug:"/web-scraping-for-beginners/data-collection/save-to-csv",permalink:"/academy/web-scraping-for-beginners/data-collection/save-to-csv",draft:!1,tags:[],version:"current",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1672848776,formattedLastUpdatedAt:"Jan 4, 2023",sidebarPosition:8,frontMatter:{title:"Saving results to CSV",description:"Learn how to save the results of your scraper's collected data to a CSV file that can be opened in Excel, Google Sheets, or any other spreadsheets program.",sidebar_position:8,slug:"/web-scraping-for-beginners/data-collection/save-to-csv"},sidebar:"defaultSidebar",previous:{title:"Node.js scraper - II",permalink:"/academy/web-scraping-for-beginners/data-collection/node-continued"},next:{title:"Basics of crawling",permalink:"/academy/web-scraping-for-beginners/crawling"}},p={},u=[{value:" Converting to CSV",id:"-converting-to-csv",level:2},{value:" Writing the CSV to a file",id:"-writing-the-csv-to-a-file",level:2},{value:" Next up",id:"-next-up",level:2}],d={toc:u};function g(e){var t=e.components,i=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"-saving-results-to-csv"},(0,o.kt)("a",{parentName:"h1",href:"#saving-to-csv",target:null,rel:null})," Saving results to CSV"),(0,o.kt)("p",null,"In the last lesson, we were able collect data about all the on-sale products from ",(0,o.kt)("a",{parentName:"p",href:"https://demo-webstore.apify.org/",target:"_blank",rel:"noopener"},"our tutorial ",(0,o.kt)("strong",{parentName:"a"},"Fakestore")," website"),". That's great. But we ended up with results printed to the terminal, which is not very useful for further processing. In this lesson, we'll learn how to save that data into a CSV file that you can then open in Excel or Google Sheets."),(0,o.kt)("h2",{id:"-converting-to-csv"},(0,o.kt)("a",{parentName:"h2",href:"#converting-to-csv",target:null,rel:null})," Converting to CSV"),(0,o.kt)("p",null,"It might look like a big programming challenge to transform a JavaScript object into a CSV, but thanks to NPM, this is going to be a walk in the park. After googling ",(0,o.kt)("strong",{parentName:"p"},"json to csv npm")," we found that there's a library called ",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/json2csv",target:"_blank",rel:"noopener"},(0,o.kt)("inlineCode",{parentName:"a"},"json2csv"))," that can convert a JavaScript object to CSV format with a single function call. ",(0,o.kt)("em",{parentName:"p"},"Perfect!")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"To install ",(0,o.kt)("inlineCode",{parentName:"p"},"json2csv"),", run ",(0,o.kt)("inlineCode",{parentName:"p"},"npm i json2csv")," in your project")),(0,o.kt)("p",null,"First, we need to import the ",(0,o.kt)("inlineCode",{parentName:"p"},"parse()")," function from the library."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { parse } from 'json2csv';\n")),(0,o.kt)("p",null,"Next, we need to parse the ",(0,o.kt)("inlineCode",{parentName:"p"},"results")," array from the previous lesson with the imported function."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const csv = parse(results);\n")),(0,o.kt)("p",null,"The full code including the earlier scraping part now looks like this."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// main.js\nimport { gotScraping } from 'got-scraping';\nimport cheerio from 'cheerio';\nimport { parse } from 'json2csv';\n\nconst response = await gotScraping('https://demo-webstore.apify.org/search/on-sale');\nconst html = response.body;\n\nconst $ = cheerio.load(html);\nconst products = $('a[href*=\"/product/\"]');\n\nconst results = [];\n\nfor (const product of products) {\n    const element = $(product);\n\n    const title = element.find('h3').text();\n    const price = element.find('div[class*=\"price\"]').text();\n\n    results.push({\n        title,\n        price,\n    });\n}\n\nconst csv = parse(results);\nconsole.log(csv)\n")),(0,o.kt)("p",null,"And here's our newly created CSV printed to the console after running the script."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Printing CSV data to terminal",src:n(89229).Z,width:"864",height:"890"})),(0,o.kt)("h2",{id:"-writing-the-csv-to-a-file"},(0,o.kt)("a",{parentName:"h2",href:"#writing-to-file",target:null,rel:null})," Writing the CSV to a file"),(0,o.kt)("p",null,"The final task that remains is to save our CSV formatted data to a file on our disk, so we can open it or send it to someone. For this, we don't need any extra NPM packages because functions for saving files are included in Node.js."),(0,o.kt)("p",null,"First, we import the ",(0,o.kt)("inlineCode",{parentName:"p"},"writeFileSync")," function from the ",(0,o.kt)("inlineCode",{parentName:"p"},"fs")," (file system) package."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { writeFileSync } from 'fs';\n")),(0,o.kt)("p",null,"and then call it with a file name and the CSV data."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"writeFileSync('products.csv', csv);\n")),(0,o.kt)("p",null,"When we complete the code, it looks like this."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// main.js\nimport { gotScraping } from 'got-scraping';\nimport cheerio from 'cheerio';\nimport { parse } from 'json2csv';\nimport { writeFileSync } from 'fs';\n\nconst response = await gotScraping('https://demo-webstore.apify.org/search/on-sale');\nconst html = response.body;\n\nconst $ = cheerio.load(html);\nconst products = $('a[href*=\"/product/\"]');\n\nconst results = [];\n\nfor (const product of products) {\n    const element = $(product);\n\n    const title = element.find('h3').text();\n    const price = element.find('div[class*=\"price\"]').text();\n\n    results.push({\n        title,\n        price,\n    });\n}\n\nconst csv = parse(results);\nwriteFileSync('products.csv', csv);\n")),(0,o.kt)("p",null,"Finally, after running it again, we will find the ",(0,o.kt)("strong",{parentName:"p"},"products.csv")," file in our project folder. And when we open it with Excel/Google Sheets \u2013 voila!"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Displaying CSV data in Google Sheets",src:n(39023).Z,width:"852",height:"840"})),(0,o.kt)("p",null,"This marks the end of the ",(0,o.kt)("strong",{parentName:"p"},"Basics of data collection")," section of Web scraping for beginners. If you enjoyed the course, give us a thumbs up down below and if you're eager to learn more..."),(0,o.kt)("h2",{id:"-next-up"},(0,o.kt)("a",{parentName:"h2",href:"#next",target:null,rel:null})," Next up"),(0,o.kt)("p",null,"Next up are the ",(0,o.kt)("a",{parentName:"p",href:"/academy/web-scraping-for-beginners/crawling",target:null,rel:null},(0,o.kt)("strong",{parentName:"a"},"Basics of crawling")),", where we will learn how to move between web pages and scrape data from all of them. We will build a scraper that first collects all the products on ",(0,o.kt)("a",{parentName:"p",href:"https://demo-webstore.apify.org/",target:"_blank",rel:"noopener"},"Fakestore"),", and then crawls each of them to scrape the data for each product separately."))}g.isMDXComponent=!0},39023:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/data-in-sheets-c1b3d87a1acc1eed0d8a643766734c39.webp"},89229:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/terminal-csv-017a0cea59958d4ae550b948178569ea.webp"}}]);