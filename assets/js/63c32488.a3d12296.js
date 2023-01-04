"use strict";(self.webpackChunkapify_docs_v2=self.webpackChunkapify_docs_v2||[]).push([[3377],{3905:(e,t,a)=>{a.d(t,{Zo:()=>g,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),s=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},g=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},w=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,g=i(e,["components","mdxType","originalType","parentName"]),c=s(a),w=r,h=c["".concat(l,".").concat(w)]||c[w]||u[w]||o;return a?n.createElement(h,p(p({ref:t},g),{},{components:a})):n.createElement(h,p({ref:t},g))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,p=new Array(o);p[0]=w;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[c]="string"==typeof e?e:r,p[1]=i;for(var s=2;s<o;s++)p[s]=a[s];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}w.displayName="MDXCreateElement"},93114:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>g,contentTitle:()=>l,default:()=>w,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=a(87462),r=a(63366),o=(a(67294),a(3905)),p=["components"],i={title:"II - Opening & controlling a page",description:"Learn how to create and open a Page with a Browser, and how to use it to visit and programmatically interact with a website.",sidebar_position:2.2,slug:"/puppeteer-playwright/page"},l="[](#opening-a-page) Opening a page",s={unversionedId:"puppeteer_playwright/page/index",id:"puppeteer_playwright/page/index",title:"II - Opening & controlling a page",description:"Learn how to create and open a Page with a Browser, and how to use it to visit and programmatically interact with a website.",source:"@site/sources/academy/puppeteer_playwright/page/index.md",sourceDirName:"puppeteer_playwright/page",slug:"/puppeteer-playwright/page",permalink:"/academy/puppeteer-playwright/page",draft:!1,tags:[],version:"current",lastUpdatedBy:"Dan Nguyen",lastUpdatedAt:1672828422,formattedLastUpdatedAt:"Jan 4, 2023",sidebarPosition:2.2,frontMatter:{title:"II - Opening & controlling a page",description:"Learn how to create and open a Page with a Browser, and how to use it to visit and programmatically interact with a website.",sidebar_position:2.2,slug:"/puppeteer-playwright/page"},sidebar:"defaultSidebar",previous:{title:"I - Launching a browser",permalink:"/academy/puppeteer-playwright/browser"},next:{title:"Interacting with a page",permalink:"/academy/puppeteer-playwright/page/interacting-with-a-page"}},g={},c=[{value:" Next up",id:"-next-up",level:2}],u={toc:c};function w(e){var t=e.components,a=(0,r.Z)(e,p);return(0,o.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"-opening-a-page"},(0,o.kt)("a",{parentName:"h1",href:"#opening-a-page",target:null,rel:null})," Opening a page"),(0,o.kt)("p",null,"When you open up your regular browser and visit a website, you open up a new page (or tab) before entering the URL in the search bar and hitting the ",(0,o.kt)("strong",{parentName:"p"},"Enter")," key. In Playwright and Puppeteer, you also have to open up a new page before visiting a URL. This can be done with the ",(0,o.kt)("inlineCode",{parentName:"p"},"browser.newPage()")," function, which will return a ",(0,o.kt)("strong",{parentName:"p"},"Page")," object (",(0,o.kt)("a",{parentName:"p",href:"https://pptr.dev/#?product=Puppeteer&version=v13.7.0&show=api-class-page",target:"_blank",rel:"noopener"},"Puppeteer"),", ",(0,o.kt)("a",{parentName:"p",href:"https://playwright.dev/docs/api/class-page",target:"_blank",rel:"noopener"},"Playwright"),")."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-marked-tabs"},'<marked-tab header="Playwright" lang="javascript">\nimport { chromium } from \'playwright\';\n\nconst browser = await chromium.launch({ headless: false });\n\n// Open a new page\nconst page = await browser.newPage();\n\nawait browser.close();\n</marked-tab>\n<marked-tab header="Puppeteer" lang="javascript">\nimport puppeteer from \'puppeteer\';\n\nconst browser = await puppeteer.launch({ headless: false });\n\n// Open a new page\nconst page = await browser.newPage();\n\nawait browser.close();\n</marked-tab>\n')),(0,o.kt)("p",null,"Then, we can visit a website with the ",(0,o.kt)("inlineCode",{parentName:"p"},"page.goto()")," method. Let's go to ",(0,o.kt)("a",{parentName:"p",href:"https://google.com",target:"_blank",rel:"noopener"},"Google")," for now. We'll also use the ",(0,o.kt)("inlineCode",{parentName:"p"},"page.waitForTimeout()")," function, which will force the program to wait for a number of seconds before quitting (otherwise, everything will just flash before our eyes and we won't really be able to tell what's going on):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-marked-tabs"},"<marked-tab header=\"Playwright\" lang=\"javascript\">\nimport { chromium } from 'playwright';\n\nconst browser = await chromium.launch({ headless: false });\n\n// Open a new page\nconst page = await browser.newPage();\n\n// Visit Google\nawait page.goto('https://google.com')\n\n// wait for 10 seconds before shutting down\nawait page.waitForTimeout(10000)\n\nawait browser.close();\n</marked-tab>\n<marked-tab header=\"Puppeteer\" lang=\"javascript\">\nimport puppeteer from 'puppeteer';\n\nconst browser = await puppeteer.launch({ headless: false });\n\n// Open a new page\nconst page = await browser.newPage();\n\n// Visit Google\nawait page.goto('https://google.com');\n\n// wait for 10 seconds before shutting down\nawait page.waitForTimeout(10000)\n\nawait browser.close();\n</marked-tab>\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"If you haven't already, go ahead and run this code to see what happens.")),(0,o.kt)("h2",{id:"-next-up"},(0,o.kt)("a",{parentName:"h2",href:"#next",target:null,rel:null})," Next up"),(0,o.kt)("p",null,"Now that we know how to open up a page, ",(0,o.kt)("a",{parentName:"p",href:"/academy/puppeteer-playwright/page/interacting-with-a-page",target:null,rel:null},"let's learn")," how to automate page interaction, such as clicking, typing, and pressing keys."))}w.isMDXComponent=!0}}]);