"use strict";(self.webpackChunkapify_docs_v2=self.webpackChunkapify_docs_v2||[]).push([[7815],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(h,i(i({ref:t},c),{},{components:n})):r.createElement(h,i({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},99917:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>d});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],l={title:"Node.js scraper - I",description:"Learn how to use JavaScript and Node.js to create a web scraper, plus take advantage of the cheerio and got-scraping libraries to make your job easier.",sidebar_position:6,slug:"/web-scraping-for-beginners/data-collection/node-js-scraper"},s="[](#first-scraper) First Node.js scraper",p={unversionedId:"web_scraping_for_beginners/data_collection/node_js_scraper",id:"web_scraping_for_beginners/data_collection/node_js_scraper",title:"Node.js scraper - I",description:"Learn how to use JavaScript and Node.js to create a web scraper, plus take advantage of the cheerio and got-scraping libraries to make your job easier.",source:"@site/sources/academy/web_scraping_for_beginners/data_collection/node_js_scraper.md",sourceDirName:"web_scraping_for_beginners/data_collection",slug:"/web-scraping-for-beginners/data-collection/node-js-scraper",permalink:"/academy/web-scraping-for-beginners/data-collection/node-js-scraper",draft:!1,tags:[],version:"current",lastUpdatedBy:"Dan Nguyen",lastUpdatedAt:1672828422,formattedLastUpdatedAt:"Jan 4, 2023",sidebarPosition:6,frontMatter:{title:"Node.js scraper - I",description:"Learn how to use JavaScript and Node.js to create a web scraper, plus take advantage of the cheerio and got-scraping libraries to make your job easier.",sidebar_position:6,slug:"/web-scraping-for-beginners/data-collection/node-js-scraper"},sidebar:"defaultSidebar",previous:{title:"Project setup",permalink:"/academy/web-scraping-for-beginners/data-collection/project-setup"},next:{title:"Node.js scraper - II",permalink:"/academy/web-scraping-for-beginners/data-collection/node-continued"}},c={},d=[{value:" Downloading HTML",id:"-downloading-html",level:2},{value:" Parsing HTML",id:"-parsing-html",level:2},{value:" Next up",id:"-next-up",level:2}],u={toc:d};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"-first-nodejs-scraper"},(0,o.kt)("a",{parentName:"h1",href:"#first-scraper",target:null,rel:null})," First Node.js scraper"),(0,o.kt)("p",null,"Finally we have everything ready to start scraping! Yes, the setup is a bit daunting, but luckily, you only have to do it once. We have our project, we have our ",(0,o.kt)("strong",{parentName:"p"},"main.js")," file, so let's add some code to it."),(0,o.kt)("h2",{id:"-downloading-html"},(0,o.kt)("a",{parentName:"h2",href:"#downloading-html",target:null,rel:null})," Downloading HTML"),(0,o.kt)("p",null,"We will use the ",(0,o.kt)("inlineCode",{parentName:"p"},"got-scraping")," library to download the HTML of ",(0,o.kt)("a",{parentName:"p",href:"https://demo-webstore.apify.org/search/on-sale",target:"_blank",rel:"noopener"},"Fakestore's on-sale products page"),". Careful, the ",(0,o.kt)("inlineCode",{parentName:"p"},"import")," statement is a little different than in the previous lesson."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// main.js\nimport { gotScraping } from 'got-scraping';\n\nconst response = await gotScraping('https://demo-webstore.apify.org/search/on-sale');\nconst html = response.body;\nconsole.log(html);\n")),(0,o.kt)("p",null,"Now run the script (using the ",(0,o.kt)("inlineCode",{parentName:"p"},"node main.js")," command). After a brief moment, you should see the page's HTML printed to your terminal. If you get an error that says something along the lines of ",(0,o.kt)("strong",{parentName:"p"},"urlToHttpOptions is not a function"),", you need to update Node.js to version 15.10 or higher. If you followed the installation instructions earlier, you don't need to worry about this, because you have the correct version installed."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("inlineCode",{parentName:"p"},"gotScraping")," is an ",(0,o.kt)("inlineCode",{parentName:"p"},"async")," function and the ",(0,o.kt)("inlineCode",{parentName:"p"},"await")," keyword is used to pause execution of the script until it returns the ",(0,o.kt)("inlineCode",{parentName:"p"},"response"),". ",(0,o.kt)("a",{parentName:"p",href:"https://javascript.info/async-await",target:"_blank",rel:"noopener"},"Learn more about ",(0,o.kt)("inlineCode",{parentName:"a"},"async")," and ",(0,o.kt)("inlineCode",{parentName:"a"},"await")))),(0,o.kt)("h2",{id:"-parsing-html"},(0,o.kt)("a",{parentName:"h2",href:"#parsing-html",target:null,rel:null})," Parsing HTML"),(0,o.kt)("p",null,"Having the HTML printed to the terminal is not very helpful. To collect the data, we first have to parse it. Thanks to parsing, we will be able to query the HTML elements similarly to the way we did it in browser in the ",(0,o.kt)("a",{parentName:"p",href:"/academy/web-scraping-for-beginners/data-collection/using-devtools",target:null,rel:null},"Collecting Data with DevTools")," lessons. To parse HTML, we load it into the ",(0,o.kt)("inlineCode",{parentName:"p"},"cheerio")," library."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// main.js\nimport { gotScraping } from 'got-scraping';\nimport cheerio from 'cheerio';\n\nconst response = await gotScraping('https://demo-webstore.apify.org/search/on-sale');\nconst html = response.body;\n\nconst $ = cheerio.load(html);\nconst titleElement = $('title');\nconst titleText = titleElement.text();\nconsole.log(titleText);\n")),(0,o.kt)("p",null,"When you run the above script, the ",(0,o.kt)("strong",{parentName:"p"},"Fakestore")," title will be printed to the console. And that's great. It means that we successfully parsed the HTML and collected the text of the ",(0,o.kt)("inlineCode",{parentName:"p"},"<title>")," element from it using Cheerio. Let's break it down."),(0,o.kt)("p",null,"First, we loaded the downloaded ",(0,o.kt)("inlineCode",{parentName:"p"},"html")," into ",(0,o.kt)("inlineCode",{parentName:"p"},"cheerio")," using the ",(0,o.kt)("inlineCode",{parentName:"p"},"load()")," function. This created a new function, conventionally named ",(0,o.kt)("inlineCode",{parentName:"p"},"$"),", which allows us to work with the loaded HTML. Then we called ",(0,o.kt)("inlineCode",{parentName:"p"},"$('title')"),", which found the ",(0,o.kt)("inlineCode",{parentName:"p"},"<title>")," element by using the ",(0,o.kt)("inlineCode",{parentName:"p"},"title")," CSS selector. Finally, we collected the text from the element using the ",(0,o.kt)("inlineCode",{parentName:"p"},".text()")," function and printed it to the console."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("inlineCode",{parentName:"p"},"$('title')")," is very similar to calling ",(0,o.kt)("inlineCode",{parentName:"p"},"document.querySelector('title')")," in the browser and ",(0,o.kt)("inlineCode",{parentName:"p"},"element.text()")," is similar to ",(0,o.kt)("inlineCode",{parentName:"p"},"element.textContent")," from the earlier DevTools lessons. ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/cheeriojs/cheerio#readme",target:"_blank",rel:"noopener"},"Visit the cheerio documentation")," to learn more about its syntax, which is the same as JQuery syntax.")),(0,o.kt)("h2",{id:"-next-up"},(0,o.kt)("a",{parentName:"h2",href:"#next",target:null,rel:null})," Next up"),(0,o.kt)("p",null,"In the ",(0,o.kt)("a",{parentName:"p",href:"/academy/web-scraping-for-beginners/data-collection/node-continued",target:null,rel:null},"next lesson")," we will learn more about Cheerio and use it to collect all the products' data from Fakestore."))}m.isMDXComponent=!0}}]);