"use strict";(self.webpackChunkapify_docs_v2=self.webpackChunkapify_docs_v2||[]).push([[8199],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),s=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=s(a),m=r,g=d["".concat(c,".").concat(m)]||d[m]||p[m]||o;return a?n.createElement(g,l(l({ref:t},u),{},{components:a})):n.createElement(g,l({ref:t},u))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var s=2;s<o;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},37903:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>h,frontMatter:()=>s,metadata:()=>p,toc:()=>m});var n=a(87462),r=a(63366),o=(a(67294),a(3905)),l=a(74866),i=a(85162),c=["components"],s={title:"Collecting data",description:"Learn how to collect data from a page with evaluate functions, then how to safely collect it by using a second library called Cheerio.",sidebar_position:2,slug:"/puppeteer-playwright/executing-scripts/collecting-data"},u="Collecting data",p={unversionedId:"webscraping/puppeteer_playwright/executing_scripts/collecting_data",id:"webscraping/puppeteer_playwright/executing_scripts/collecting_data",title:"Collecting data",description:"Learn how to collect data from a page with evaluate functions, then how to safely collect it by using a second library called Cheerio.",source:"@site/sources/academy/webscraping/puppeteer_playwright/executing_scripts/collecting_data.md",sourceDirName:"webscraping/puppeteer_playwright/executing_scripts",slug:"/puppeteer-playwright/executing-scripts/collecting-data",permalink:"/academy/puppeteer-playwright/executing-scripts/collecting-data",draft:!1,editUrl:"https://github.com/apify/apify-docs-v2/edit/master/sources/academy/webscraping/puppeteer_playwright/executing_scripts/collecting_data.md",tags:[],version:"current",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1675427001,formattedLastUpdatedAt:"Feb 3, 2023",sidebarPosition:2,frontMatter:{title:"Collecting data",description:"Learn how to collect data from a page with evaluate functions, then how to safely collect it by using a second library called Cheerio.",sidebar_position:2,slug:"/puppeteer-playwright/executing-scripts/collecting-data"},sidebar:"academy",previous:{title:"Injecting scripts",permalink:"/academy/puppeteer-playwright/executing-scripts/injecting-code"},next:{title:"IV - Reading & intercepting requests",permalink:"/academy/puppeteer-playwright/reading-intercepting-requests"}},d={},m=[{value:"Setup",id:"setup",level:2},{value:"Collecting in the browser context",id:"collecting-in-page-evaluate",level:2},{value:"Using jQuery",id:"using-jquery",level:2},{value:"Parsing in the Node.js context",id:"parsing-in-node-context",level:2},{value:"Final code",id:"final-code",level:2},{value:"Next up",id:"next",level:2}],g={toc:m};function h(e){var t=e.components,s=(0,r.Z)(e,c);return(0,o.kt)("wrapper",(0,n.Z)({},g,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"collecting-data"},"Collecting data"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Learn how to collect data from a page with evaluate functions, then how to safely collect it by using a second library called Cheerio.")),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Now that we know how to execute scripts on a page, we're ready to learn a bit about ",(0,o.kt)("a",{parentName:"p",href:"/academy/web-scraping-for-beginners/data-collection",target:null,rel:null},"data collection"),". In this lesson, we'll be scraping all of the on-sale products from our ",(0,o.kt)("a",{parentName:"p",href:"https://demo-webstore.apify.org/search/on-sale",target:"_blank",rel:"noopener"},"Fakestore")," website."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Most data collection cases involve looping through a list of items of some sort.")),(0,o.kt)("p",null,"There are two main ways to collect data with Playwright and Puppeteer:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Directly in ",(0,o.kt)("inlineCode",{parentName:"li"},"page.evaluate()")," and other evaluate functions such as ",(0,o.kt)("inlineCode",{parentName:"li"},"page.$$eval()"),"."),(0,o.kt)("li",{parentName:"ol"},"In the Node.js context using a parsing library such as ",(0,o.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/cheerio",target:"_blank",rel:"noopener"},"Cheerio"))),(0,o.kt)("h2",{id:"setup"},"Setup"),(0,o.kt)("p",null,"Here is the base set up for our code, upon which we'll be building off of in this lesson:"),(0,o.kt)(l.Z,{groupId:"main",mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"Playwright",label:"Playwright",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"import { chromium } from 'playwright';\n\nconst browser = await chromium.launch({ headless: false });\nconst page = await browser.newPage();\n\nawait page.goto('https://demo-webstore.apify.org/search/on-sale');\n\n// code will go here\n\nawait page.waitForTimeout(10000)\n\nawait browser.close();\n\n"))),(0,o.kt)(i.Z,{value:"Puppeteer",label:"Puppeteer",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"import puppeteer from 'puppeteer';\n\nconst browser = await puppeteer.launch({ headless: false });\nconst page = await browser.newPage();\n\nawait page.goto('https://demo-webstore.apify.org/search/on-sale');\n\n// code will go here\n\nawait page.waitForTimeout(10000)\n\nawait browser.close();\n\n")))),(0,o.kt)("h2",{id:"collecting-in-page-evaluate"},"Collecting in the browser context"),(0,o.kt)("p",null,"Whatever is returned from the callback function in ",(0,o.kt)("inlineCode",{parentName:"p"},"page.evaluate()")," will be returned by the evaluate function, which means that we can set it to a variable like so:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const products = await page.evaluate(() => { foo: 'bar' });\n\nconsole.log(products) // -> { foo: 'bar' }\n")),(0,o.kt)("p",null,"We'll be returning a bunch of product objects from this function, which will be accessible back in our Node.js context after the promise has resolved. Let's now go ahead and write some data collection code to collect each product:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const products = await page.evaluate(() => {\n    const productCards = Array.from(document.querySelectorAll('a[class*=\"ProductCard_root\"]'));\n\n    return productCards.map((element) => {\n        const name = element.querySelector('h3[class*=\"ProductCard_name\"]').textContent;\n        const price = element.querySelector('div[class*=\"ProductCard_price\"]').textContent;\n\n        return {\n            name,\n            price,\n        };\n    });\n});\n\nconsole.log(products);\n")),(0,o.kt)("p",null,"When we run this code, we see this logged to our console:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Products logged to the console",src:a(21878).Z,width:"1002",height:"434"})),(0,o.kt)("h2",{id:"using-jquery"},"Using jQuery"),(0,o.kt)("p",null,"Working with document.querySelector is cumbersome and quite verbose, but with the ",(0,o.kt)("inlineCode",{parentName:"p"},"page.addScriptTag()")," function and the latest ",(0,o.kt)("a",{parentName:"p",href:"https://releases.jquery.com/",target:"_blank",rel:"noopener"},"jQuery CDN link"),", we can inject jQuery into the current page to gain access to its syntactical sweetness:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"await page.addScriptTag({ url: 'https://code.jquery.com/jquery-3.6.0.min.js' });\n")),(0,o.kt)("p",null,"This function will literally append a ",(0,o.kt)("inlineCode",{parentName:"p"},"<script>")," tag to the ",(0,o.kt)("inlineCode",{parentName:"p"},"<head>")," element of the current page, allowing access to jQuery's API when using ",(0,o.kt)("inlineCode",{parentName:"p"},"page.evaluate()")," to run code in the browser context."),(0,o.kt)("p",null,"Now, since we're able to use jQuery, let's translate our vanilla JavaScript code within the ",(0,o.kt)("inlineCode",{parentName:"p"},"page.evaluate()")," function to jQuery:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"await page.addScriptTag({ url: 'https://code.jquery.com/jquery-3.6.0.min.js' });\n\nconst products = await page.evaluate(() => {\n        const productCards = Array.from($('a[class*=\"ProductCard_root\"]'))\n\n        return productCards.map((element) => {\n        const card = $(element);\n\n        const name = card.find('h3[class*=\"ProductCard_name\"]').text();\n        const price = card.find('div[class*=\"ProductCard_price\"]').text();\n\n        return {\n            name,\n            price,\n        };\n    });\n});\n\nconsole.log(products);\n")),(0,o.kt)("p",null,"This will output the same exact result as the code in the previous section."),(0,o.kt)("h2",{id:"parsing-in-node-context"},"Parsing in the Node.js context"),(0,o.kt)("p",null,"One of the most popular parsing libraries for Node.js is ",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/cheerio",target:"_blank",rel:"noopener"},"Cheerio"),", which can be used in tandem with Playwright and Puppeteer. It is extremely beneficial to parse the page's HTML in the Node.js context for a number of reasons:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"You can easily port the code between headless browser data collection and plain HTTP data collection"),(0,o.kt)("li",{parentName:"ul"},"You don't have to worry in which context you're working (which can sometimes be confusing)"),(0,o.kt)("li",{parentName:"ul"},"Errors are easier to handle when running in the base Node.js context")),(0,o.kt)("p",null,"To install it, we can run the following command within your project's directory:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"npm install cheerio\n")),(0,o.kt)("p",null,"Then, we'll import the ",(0,o.kt)("inlineCode",{parentName:"p"},"load")," function like so:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { load } from 'cheerio';\n")),(0,o.kt)("p",null,"Finally, we can create a ",(0,o.kt)("inlineCode",{parentName:"p"},"Cheerio")," object based on our page's current content like so:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const $ = load(await page.content());\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"It's important to note that this ",(0,o.kt)("inlineCode",{parentName:"p"},"$")," object is static. If any content on the page changes, the ",(0,o.kt)("inlineCode",{parentName:"p"},"$")," variable will not automatically be updated. It will need to be re-declared or re-defined.")),(0,o.kt)("p",null,"Here's our full code so far:"),(0,o.kt)(l.Z,{groupId:"main",mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"Playwright",label:"Playwright",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"import { chromium } from 'playwright';\nimport { load } from 'cheerio';\n\nconst browser = await chromium.launch({ headless: false });\nconst page = await browser.newPage();\n\nawait page.goto('https://demo-webstore.apify.org/search/on-sale');\n\nconst $ = load(await page.content());\n\n// code will go here\n\nawait browser.close();\n\n"))),(0,o.kt)(i.Z,{value:"Puppeteer",label:"Puppeteer",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"import puppeteer from 'puppeteer';\nimport { load } from 'cheerio';\n\nconst browser = await puppeteer.launch({ headless: false });\nconst page = await browser.newPage();\n\nawait page.goto('https://demo-webstore.apify.org/search/on-sale');\n\nconst $ = load(await page.content());\n\n// code will go here\n\nawait browser.close();\n\n")))),(0,o.kt)("p",null,"Now, to loop through all of the products, we'll make use of the ",(0,o.kt)("inlineCode",{parentName:"p"},"$")," object and loop through them while safely in the server-side context rather than running the code in the browser. Notice that this code is nearly exactly the same as the jQuery code above - it is just not running inside of a ",(0,o.kt)("inlineCode",{parentName:"p"},"page.evaluate()")," in the browser context."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const $ = load(await page.content());\n\nconst productCards = Array.from($('a[class*=\"ProductCard_root\"]'))\n\nconst products = productCards.map((element) => {\n    const card = $(element);\n\n    const name = card.find('h3[class*=\"ProductCard_name\"]').text();\n    const price = card.find('div[class*=\"ProductCard_price\"]').text();\n\n    return {\n        name,\n        price,\n    };\n});\n\nconsole.log(products);\n")),(0,o.kt)("h2",{id:"final-code"},"Final code"),(0,o.kt)("p",null,"Here's what our final optimized code looks like:"),(0,o.kt)(l.Z,{groupId:"main",mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"Playwright",label:"Playwright",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"import { chromium } from 'playwright';\nimport { load } from 'cheerio';\n\nconst browser = await chromium.launch({ headless: false });\nconst page = await browser.newPage();\n\nawait page.goto('https://demo-webstore.apify.org/search/on-sale');\n\nconst $ = load(await page.content());\n\nconst productCards = Array.from($('a[class*=\"ProductCard_root\"]'))\n\nconst products = productCards.map((element) => {\n    const card = $(element);\n\n    const name = card.find('h3[class*=\"ProductCard_name\"]').text();\n    const price = card.find('div[class*=\"ProductCard_price\"]').text();\n\n    return {\n        name,\n        price,\n    };\n});\n\nconsole.log(products);\n\nawait browser.close();\n\n"))),(0,o.kt)(i.Z,{value:"Puppeteer",label:"Puppeteer",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"import puppeteer from 'puppeteer';\nimport { load } from 'cheerio';\n\nconst browser = await puppeteer.launch({ headless: false });\nconst page = await browser.newPage();\n\nawait page.goto('https://demo-webstore.apify.org/search/on-sale');\n\nconst $ = load(await page.content());\n\nconst productCards = Array.from($('a[class*=\"ProductCard_root\"]'))\n\nconst products = productCards.map((element) => {\n    const card = $(element);\n\n    const name = card.find('h3[class*=\"ProductCard_name\"]').text();\n    const price = card.find('div[class*=\"ProductCard_price\"]').text();\n\n    return {\n        name,\n        price,\n    };\n});\n\nconsole.log(products);\n\nawait browser.close();\n\n")))),(0,o.kt)("h2",{id:"next"},"Next up"),(0,o.kt)("p",null,"Our ",(0,o.kt)("a",{parentName:"p",href:"/academy/puppeteer-playwright/reading-intercepting-requests",target:null,rel:null},"next lesson")," will be discussing something super cool - request interception and reading data from requests and responses. It's just like using DevTools, except programmatically!"))}h.isMDXComponent=!0},85162:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(67294),r=a(86010);const o="tabItem_Ymn6";function l(e){var t=e.children,a=e.hidden,l=e.className;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,l),hidden:a},t)}},74866:(e,t,a)=>{a.d(t,{Z:()=>N});var n=a(87462),r=a(67294),o=a(86010),l=a(12466),i=a(16550),c=a(91980),s=a(67392),u=a(50012);function p(e){return function(e){return r.Children.map(e,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')}))}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function d(e){var t=e.values,a=e.children;return(0,r.useMemo)((function(){var e=null!=t?t:p(a);return function(e){var t=(0,s.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,a])}function m(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function g(e){var t=e.queryString,a=void 0!==t&&t,n=e.groupId,o=(0,i.k6)(),l=function(e){var t=e.queryString,a=void 0!==t&&t,n=e.groupId;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:a,groupId:n});return[(0,c._X)(l),(0,r.useCallback)((function(e){if(l){var t=new URLSearchParams(o.location.search);t.set(l,e),o.replace(Object.assign({},o.location,{search:t.toString()}))}}),[l,o])]}function h(e){var t,a,n,o,l=e.defaultValue,i=e.queryString,c=void 0!==i&&i,s=e.groupId,p=d(e),h=(0,r.useState)((function(){return function(e){var t,a=e.defaultValue,n=e.tabValues;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!m({value:a,tabValues:n}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+a+'" but none of its children has the corresponding value. Available values are: '+n.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return a}var r=null!=(t=n.find((function(e){return e.default})))?t:n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:l,tabValues:p})})),f=h[0],w=h[1],b=g({queryString:c,groupId:s}),y=b[0],v=b[1],k=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:s}.groupId),a=(0,u.Nk)(t),n=a[0],o=a[1],[n,(0,r.useCallback)((function(e){t&&o.set(e)}),[t,o])]),N=k[0],x=k[1],C=function(){var e=null!=y?y:N;return m({value:e,tabValues:p})?e:null}();return(0,r.useEffect)((function(){C&&w(C)}),[C]),{selectedValue:f,selectValue:(0,r.useCallback)((function(e){if(!m({value:e,tabValues:p}))throw new Error("Can't select invalid tab value="+e);w(e),v(e),x(e)}),[v,x,p]),tabValues:p}}var f=a(72389);const w="tabList__CuJ",b="tabItem_LNqP";function y(e){var t=e.className,a=e.block,i=e.selectedValue,c=e.selectValue,s=e.tabValues,u=[],p=(0,l.o5)().blockElementScrollPositionUntilNextRender,d=function(e){var t=e.currentTarget,a=u.indexOf(t),n=s[a].value;n!==i&&(p(t),c(n))},m=function(e){var t,a=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":var n,r=u.indexOf(e.currentTarget)+1;a=null!=(n=u[r])?n:u[0];break;case"ArrowLeft":var o,l=u.indexOf(e.currentTarget)-1;a=null!=(o=u[l])?o:u[u.length-1]}null==(t=a)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},t)},s.map((function(e){var t=e.value,a=e.label,l=e.attributes;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:function(e){return u.push(e)},onKeyDown:m,onClick:d},l,{className:(0,o.Z)("tabs__item",b,null==l?void 0:l.className,{"tabs__item--active":i===t})}),null!=a?a:t)})))}function v(e){var t=e.lazy,a=e.children,n=e.selectedValue;if(t){var o=a.find((function(e){return e.props.value===n}));return o?(0,r.cloneElement)(o,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},a.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n})})))}function k(e){var t=h(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",w)},r.createElement(y,(0,n.Z)({},e,t)),r.createElement(v,(0,n.Z)({},e,t)))}function N(e){var t=(0,f.Z)();return r.createElement(k,(0,n.Z)({key:String(t)},e))}},21878:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/log-products-f59a9aaf95e34ba0915ff44098f8fef4.png"}}]);