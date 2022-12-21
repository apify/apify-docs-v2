"use strict";(self.webpackChunkapify_docs_v2=self.webpackChunkapify_docs_v2||[]).push([[3911],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>u});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),s=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},g="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),g=s(a),d=r,u=g["".concat(l,".").concat(d)]||g[d]||h[d]||o;return a?n.createElement(u,i(i({ref:t},c),{},{components:a})):n.createElement(u,i({ref:t},c))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[g]="string"==typeof e?e:r,i[1]=p;for(var s=2;s<o;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},63755:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>p,metadata:()=>s,toc:()=>g});var n=a(87462),r=a(63366),o=(a(67294),a(3905)),i=["components"],p={title:"Page methods",description:"Understand that the Page object has many different methods to offer, and learn how to use two of them to capture a page's title and take a screenshot.",sidebar_position:3,slug:"/puppeteer-playwright/page/page-methods"},l="[](#page-methods) Page methods",s={unversionedId:"puppeteer_playwright/page/page_methods",id:"puppeteer_playwright/page/page_methods",title:"Page methods",description:"Understand that the Page object has many different methods to offer, and learn how to use two of them to capture a page's title and take a screenshot.",source:"@site/sources/academy/puppeteer_playwright/page/page_methods.md",sourceDirName:"puppeteer_playwright/page",slug:"/puppeteer-playwright/page/page-methods",permalink:"/academy/puppeteer-playwright/page/page-methods",draft:!1,tags:[],version:"current",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1671632368,formattedLastUpdatedAt:"Dec 21, 2022",sidebarPosition:3,frontMatter:{title:"Page methods",description:"Understand that the Page object has many different methods to offer, and learn how to use two of them to capture a page's title and take a screenshot.",sidebar_position:3,slug:"/puppeteer-playwright/page/page-methods"},sidebar:"defaultSidebar",previous:{title:"Waiting for content & events",permalink:"/academy/puppeteer-playwright/page/waiting"},next:{title:"III - Executing scripts",permalink:"/academy/puppeteer-playwright/executing-scripts"}},c={},g=[{value:" Grabbing the title",id:"-grabbing-the-title",level:2},{value:" Screenshotting",id:"-screenshotting",level:2},{value:" Final code",id:"-final-code",level:2},{value:" Next up",id:"-next-up",level:2}],h={toc:g};function d(e){var t=e.components,p=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},h,p,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"-page-methods"},(0,o.kt)("a",{parentName:"h1",href:"#page-methods",target:null,rel:null})," Page methods"),(0,o.kt)("p",null,"Other than having methods for interacting with a page and waiting for events and elements, the ",(0,o.kt)("strong",{parentName:"p"},"Page")," object also supports various methods for doing other things, such as ",(0,o.kt)("a",{parentName:"p",href:"https://pptr.dev/#?product=Puppeteer&version=v13.7.0&show=api-pagereloadoptions",target:"_blank",rel:"noopener"},"reloading"),", ",(0,o.kt)("a",{parentName:"p",href:"https://playwright.dev/docs/api/class-page#page-screenshot",target:"_blank",rel:"noopener"},"screenshotting"),", ",(0,o.kt)("a",{parentName:"p",href:"https://playwright.dev/docs/api/class-page#page-set-extra-http-headers",target:"_blank",rel:"noopener"},"changing headers"),", and collecting the ",(0,o.kt)("a",{parentName:"p",href:"https://pptr.dev/#?product=Puppeteer&version=v13.7.0&show=api-pagecontent",target:"_blank",rel:"noopener"},"page's content"),"."),(0,o.kt)("p",null,"Last lesson, we left off at a point where we are waiting for the page to navigate so that we can collect the page's title and take a screenshot of it. In this lesson, we'll be learning about the two methods we can use to easily achieve both of those things."),(0,o.kt)("h2",{id:"-grabbing-the-title"},(0,o.kt)("a",{parentName:"h2",href:"#grabbing-the-title",target:null,rel:null})," Grabbing the title"),(0,o.kt)("p",null,"There are two main page functions which will return general data:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"page.content()")," will return the entire HTML content of the page."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"page.title()")," will return the title of the current page found in the ",(0,o.kt)("inlineCode",{parentName:"li"},"<title>")," tag.")),(0,o.kt)("p",null,"For our case, we'll utilize the ",(0,o.kt)("inlineCode",{parentName:"p"},"page.title()")," function to grab the title and log it to the console:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// Grab the title and set it to a variable\nconst title = await page.title();\n\n// Log the title to the console\nconsole.log(title);\n")),(0,o.kt)("h2",{id:"-screenshotting"},(0,o.kt)("a",{parentName:"h2",href:"#screenshotting",target:null,rel:null})," Screenshotting"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"page.screenshot()")," function will return a buffer which can be written to the filesystem as an image:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// Take the screenshot and write it to the filesystem\nawait page.screenshot({ path: 'screenshot.png' });\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The image will by default be ",(0,o.kt)("strong",{parentName:"p"},".png"),". To change the image to ",(0,o.kt)("strong",{parentName:"p"},".jpeg")," type, set the (optional) ",(0,o.kt)("inlineCode",{parentName:"p"},"type")," option to ",(0,o.kt)("strong",{parentName:"p"},"jpeg"),".")),(0,o.kt)("h2",{id:"-final-code"},(0,o.kt)("a",{parentName:"h2",href:"#final-code",target:null,rel:null})," Final code"),(0,o.kt)("p",null,"Here's our final code which extracts the page's title, takes a screenshot and saves it to our project's folder as ",(0,o.kt)("inlineCode",{parentName:"p"},"screenshot.png"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-marked-tabs"},"<marked-tab header=\"Playwright\" lang=\"javascript\">\nimport { chromium } from 'playwright';\n\nconst browser = await chromium.launch({ headless: false });\n\n// Create a page and visit Google\nconst page = await browser.newPage();\nawait page.goto('https://google.com');\n\n// Agree to the cookies policy\nawait page.click('button:has-text(\"I agree\")');\n\n// Type the query and visit the results page\nawait page.type('input[title=\"Search\"]', 'hello world');\nawait page.keyboard.press('Enter');\n\n// Click on the first result\nawait page.click('.g a');\nawait page.waitForLoadState('load');\n\n// Grab the page's title and log it to the console\nconst title = await page.title();\nconsole.log(title);\n\n// Take a screenshot and write it to the filesystem\nawait page.screenshot({ path: 'screenshot.png' });\n\nawait browser.close();\n</marked-tab>\n<marked-tab header=\"Puppeteer\" lang=\"javascript\">\nimport puppeteer from 'puppeteer';\n\nconst browser = await puppeteer.launch({ headless: false });\n\n// Create a page and visit Google\nconst page = await browser.newPage();\nawait page.goto('https://google.com');\n\n// Agree to the cookies policy\nawait page.click('button + button');\n\n// Type the query and visit the results page\nawait page.type('input[title=\"Search\"]', 'hello world');\nawait page.keyboard.press('Enter');\n\n// Wait for the first result to appear on the page,\n// then click on it\nawait page.waitForSelector('.g a');\nawait Promise.all([page.waitForNavigation(), page.click('.g a')]);\n\n// Grab the page's title and log it to the console\nconst title = await page.title();\nconsole.log(title);\n\n// Take a screenshot and write it to the filesystem\nawait page.screenshot({ path: 'screenshot.png' });\n\nawait browser.close();\n</marked-tab>\n")),(0,o.kt)("p",null,"When you run this code, you should see this logged to console:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},'"Hello, World!" program - Wikipedia\n')),(0,o.kt)("p",null,"Additionally, you should see a new image named ",(0,o.kt)("strong",{parentName:"p"},"screenshot.png")," in your project's folder that looks something like this:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Screenshot from Playwright/Puppeteer",src:a(974).Z,width:"800",height:"600"})),(0,o.kt)("h2",{id:"-next-up"},(0,o.kt)("a",{parentName:"h2",href:"#next",target:null,rel:null})," Next up"),(0,o.kt)("p",null,"In the ",(0,o.kt)("a",{parentName:"p",href:"/academy/puppeteer-playwright/executing-scripts",target:null,rel:null},"next exciting lesson"),", we'll gain a solid understanding of the two different contexts we can run our code in when using Puppeteer and Playwright, as well as how to run code in the context of the browser."))}d.isMDXComponent=!0},974:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/wikipedia-screenshot-b789e7f66b63ca6dc074c8f5e8e31001.webp"}}]);