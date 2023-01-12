"use strict";(self.webpackChunkapify_docs_v2=self.webpackChunkapify_docs_v2||[]).push([[8920],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>m});var n=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(o),m=r,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||a;return o?n.createElement(h,l(l({ref:t},p),{},{components:o})):n.createElement(h,l({ref:t},p))}));function m(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,l=new Array(a);l[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var c=2;c<a;c++)l[c]=o[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,o)}u.displayName="MDXCreateElement"},83655:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var n=o(87462),r=o(63366),a=(o(67294),o(3905)),l=["components"],i={title:"Browser DevTools - III",description:"Continue learning how to collect data from a website using browser DevTools, CSS selectors, and JavaScript via the DevTools console.",sidebar_position:3,slug:"/web-scraping-for-beginners/data-collection/devtools-continued"},s="Finish with DevTools",c={unversionedId:"webscraping/web_scraping_for_beginners/data_collection/devtools_continued",id:"webscraping/web_scraping_for_beginners/data_collection/devtools_continued",title:"Browser DevTools - III",description:"Continue learning how to collect data from a website using browser DevTools, CSS selectors, and JavaScript via the DevTools console.",source:"@site/sources/academy/webscraping/web_scraping_for_beginners/data_collection/devtools_continued.md",sourceDirName:"webscraping/web_scraping_for_beginners/data_collection",slug:"/web-scraping-for-beginners/data-collection/devtools-continued",permalink:"/academy/web-scraping-for-beginners/data-collection/devtools-continued",draft:!1,tags:[],version:"current",lastUpdatedBy:"Jind\u0159ich B\xe4r",lastUpdatedAt:1673533984,formattedLastUpdatedAt:"Jan 12, 2023",sidebarPosition:3,frontMatter:{title:"Browser DevTools - III",description:"Continue learning how to collect data from a website using browser DevTools, CSS selectors, and JavaScript via the DevTools console.",sidebar_position:3,slug:"/web-scraping-for-beginners/data-collection/devtools-continued"},sidebar:"academy",previous:{title:"Browser DevTools - II",permalink:"/academy/web-scraping-for-beginners/data-collection/using-devtools"},next:{title:"Computer preparation",permalink:"/academy/web-scraping-for-beginners/data-collection/computer-preparation"}},p={},d=[{value:"Looping over elements",id:"looping-over-elements",level:2},{value:"Collecting data in a loop",id:"collecting-data-in-loop",level:2},{value:"Next up",id:"next",level:2}],u={toc:d};function m(e){var t=e.components,i=(0,r.Z)(e,l);return(0,a.kt)("wrapper",(0,n.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"finish-devtools"},"Finish with DevTools"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Continue learning how to collect data from a website using browser DevTools, CSS selectors, and JavaScript via the DevTools console.")),(0,a.kt)("hr",null),(0,a.kt)("p",null,"In the first part of the DevTools tutorial, we were able to collect information about a single website from our super-legit ",(0,a.kt)("a",{parentName:"p",href:"https://demo-webstore.apify.org/",target:"_blank",rel:"noopener"},'"Fakestore" e-commerce site'),". If you missed the previous part, we suggest going through it to understand the basic concepts, but you don't need any of the code from there, we will start from scratch."),(0,a.kt)("h2",{id:"looping-over-elements"},"Looping over elements"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration",target:"_blank",rel:"noopener"},"Visit this tutorial")," if you want to refresh the concept of loops in programming.")),(0,a.kt)("p",null,"First, we will use the ",(0,a.kt)("inlineCode",{parentName:"p"},"querySelectorAll()")," function from the previous lesson to get an array of all the product elements."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const products = document.querySelectorAll('a[href*=\"/product/\"]')\n\nconsole.log(products);\n")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Print all products",src:o(48163).Z,width:"924",height:"352"})),(0,a.kt)("p",null,"Second, we will loop over each product and print their unstructured data. The following ",(0,a.kt)("inlineCode",{parentName:"p"},"for..of")," loop will iterate over all elements of the ",(0,a.kt)("inlineCode",{parentName:"p"},"products")," array and execute the code provided in curly brackets ",(0,a.kt)("inlineCode",{parentName:"p"},"{}")," for each element. In each iteration, the element is saved into the variable called ",(0,a.kt)("inlineCode",{parentName:"p"},"product")," and we can use the variable to interact with the element."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"for (const product of products) {\n    const titleElement = product.querySelector('h3')\n    const priceElement = product.querySelector('div[class*=\"price\"]')\n\n    console.log(titleElement.textContent, '\\n', priceElement.textContent);\n}\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of",target:"_blank",rel:"noopener"},"Find out more")," about the ",(0,a.kt)("inlineCode",{parentName:"p"},"for..of")," loop.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Print all products&#39; text",src:o(2669).Z,width:"932",height:"898"})),(0,a.kt)("h2",{id:"collecting-data-in-loop"},"Collecting data in a loop"),(0,a.kt)("p",null,"In the previous lesson we created a ",(0,a.kt)("inlineCode",{parentName:"p"},"result")," object that contained the data of one single product. Now we'll create an array of result objects which will contain all the titles and prices for each product. To do that, we'll first create an empty array called ",(0,a.kt)("inlineCode",{parentName:"p"},"results")," and then use a ",(0,a.kt)("inlineCode",{parentName:"p"},"for..of")," loop, and the collection skills we learned in the previous lesson."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const results = [];\n\nfor (const product of products) {\n    results.push({\n        title: product.querySelector('h3').textContent.trim(),\n        price: product.querySelector('div[class*=\"price\"]').textContent.trim(),\n    });\n};\n\nconsole.log(results);\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"results.push()")," function takes its argument and pushes (adds) it to the ",(0,a.kt)("inlineCode",{parentName:"p"},"results")," array. ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push",target:"_blank",rel:"noopener"},"Learn more about it here"),". The rest of the code is just copy-pasted from the previous lesson. For each ",(0,a.kt)("inlineCode",{parentName:"p"},"product")," of ",(0,a.kt)("inlineCode",{parentName:"p"},"products"),", we find the ",(0,a.kt)("inlineCode",{parentName:"p"},"title")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"price"),", then save them to the ",(0,a.kt)("inlineCode",{parentName:"p"},"results")," array by pushing the object with the data into it. When you run the code, you should see all the data neatly structured."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Print all products&#39; data",src:o(72104).Z,width:"936",height:"760"})),(0,a.kt)("h2",{id:"next"},"Next up"),(0,a.kt)("p",null,"And that's it! With a bit of trial and error, you will be able to collect any data from a webpage that's loaded in your browser. This is a useful skill on its own. It will save you time when you need one-off data for your project. More importantly though, it taught you the basics to start programming your own scrapers. In the ",(0,a.kt)("a",{parentName:"p",href:"/academy/web-scraping-for-beginners/data-collection/computer-preparation",target:null,rel:null},"next lessons"),", we will teach you how to create your own data collection script in JavaScript and Node.js."))}m.isMDXComponent=!0},48163:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/print-all-product-elements-255299c843a9de046d9f3944dd1c26aa.webp"},72104:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/print-all-products-data-464ba8933d779918fb8446d8f31a8910.webp"},2669:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/print-all-products-text-737c31e492b2f08628e6021b10395047.webp"}}]);