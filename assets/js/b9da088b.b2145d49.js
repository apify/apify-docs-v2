"use strict";(self.webpackChunkapify_docs_v2=self.webpackChunkapify_docs_v2||[]).push([[3178],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),s=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),h=s(r),d=n,g=h["".concat(p,".").concat(d)]||h[d]||c[d]||l;return r?a.createElement(g,o(o({ref:t},u),{},{components:r})):a.createElement(g,o({ref:t},u))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,o=new Array(l);o[0]=h;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var s=2;s<l;s++)o[s]=r[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},63940:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=r(87462),n=r(63366),l=(r(67294),r(3905)),o=["components"],i={title:"Puppeteer & Playwright",description:"Learn in-depth how to use two of the most popular Node.js libraries for controlling a headless browser - Puppeteer and Playwright.",sidebar_position:2,category:"web scraping & automation",slug:"/puppeteer-playwright"},p="Puppeteer & Playwright course",s={unversionedId:"webscraping/puppeteer_playwright/index",id:"webscraping/puppeteer_playwright/index",title:"Puppeteer & Playwright",description:"Learn in-depth how to use two of the most popular Node.js libraries for controlling a headless browser - Puppeteer and Playwright.",source:"@site/sources/academy/webscraping/puppeteer_playwright/index.md",sourceDirName:"webscraping/puppeteer_playwright",slug:"/puppeteer-playwright",permalink:"/academy/puppeteer-playwright",draft:!1,tags:[],version:"current",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1673530116,formattedLastUpdatedAt:"Jan 12, 2023",sidebarPosition:2,frontMatter:{title:"Puppeteer & Playwright",description:"Learn in-depth how to use two of the most popular Node.js libraries for controlling a headless browser - Puppeteer and Playwright.",sidebar_position:2,category:"web scraping & automation",slug:"/puppeteer-playwright"},sidebar:"academy",previous:{title:"Best practices",permalink:"/academy/web-scraping-for-beginners/best-practices"},next:{title:"I - Launching a browser",permalink:"/academy/puppeteer-playwright/browser"}},u={},c=[{value:"Advantages of using a headless browser",id:"advantages-of-headless-browsers",level:2},{value:"Setup",id:"setup",level:2},{value:"Course overview",id:"course-overview",level:2},{value:"First up",id:"next",level:2}],h={toc:c};function d(e){var t=e.components,r=(0,n.Z)(e,o);return(0,l.kt)("wrapper",(0,a.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"puppeteer-playwright-course"},"Puppeteer & Playwright course"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Learn in-depth how to use two of the most popular Node.js libraries for controlling a headless browser - Puppeteer and Playwright.")),(0,l.kt)("hr",null),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://pptr.dev/",target:"_blank",rel:"noopener"},"Puppeteer")," and ",(0,l.kt)("a",{parentName:"p",href:"https://playwright.dev/",target:"_blank",rel:"noopener"},"Playwright")," are both libraries which allow you to write code in Node.js which automates a headless browser."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"A headless browser is just a regular browser like the one you're using right now, but without the user-interface. Because they don't have a UI, they generally perform faster as they don't render any visual content. For an in-depth understanding of headless browsers, check out ",(0,l.kt)("a",{parentName:"p",href:"https://blog.arhg.net/2009/10/what-is-headless-browser.html",target:"_blank",rel:"noopener"},"this short article")," about them.")),(0,l.kt)("p",null,"Both packages were developed by the same team and are very similar, which is why we have combined the Puppeteer course and the Playwright course into one super-course that shows code examples for both technologies. There are some small differences between the two, which will be highlighted in the examples."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Each lesson's activity will contain examples for both libraries, but we recommend using Playwright, as it is newer and has more features and better ",(0,l.kt)("a",{parentName:"p",href:"https://playwright.dev/docs/intro",target:"_blank",rel:"noopener"},"documentation"))),(0,l.kt)("h2",{id:"advantages-of-headless-browsers"},"Advantages of using a headless browser"),(0,l.kt)("p",null,"When automating a headless browser, you can do a whole lot more in comparison to just making HTTP requests for static content. In fact, you can programmatically do pretty much anything a human could do with a browser, such as clicking elements, taking screenshots, typing into text areas, etc."),(0,l.kt)("p",null,"Additionally, since the requests aren't static, ",(0,l.kt)("a",{parentName:"p",href:"/academy/concepts/dynamic-pages",target:null,rel:null},"dynamic content")," can be rendered and interacted with (or, data from the dynamic content can be scraped)."),(0,l.kt)("h2",{id:"setup"},"Setup"),(0,l.kt)("p",null,"For this course, we'll be jumping right into the features of these awesome libraries and expecting you to already have an environment set up. Here's how we set up our environment:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Make sure you've installed ",(0,l.kt)("a",{parentName:"li",href:"https://nodejs.org/en/",target:"_blank",rel:"noopener"},"Node.js")),(0,l.kt)("li",{parentName:"ol"},"Create a new folder called ",(0,l.kt)("strong",{parentName:"li"},"puppeteer-playwright")," (or whatever you want to call it)"),(0,l.kt)("li",{parentName:"ol"},"Run the command ",(0,l.kt)("inlineCode",{parentName:"li"},"npm init -y")," within your new folder to automatically initialize the project"),(0,l.kt)("li",{parentName:"ol"},"Add ",(0,l.kt)("inlineCode",{parentName:"li"},'"type": "module"')," to the ",(0,l.kt)("strong",{parentName:"li"},"package.json")," file"),(0,l.kt)("li",{parentName:"ol"},"Create a new file named ",(0,l.kt)("strong",{parentName:"li"},"index.js")),(0,l.kt)("li",{parentName:"ol"},"Install the library you're going to be using during this course:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-marked-tabs"},'<marked-tab header="Install Playwright" lang="shell">\nnpm install playwright\n</marked-tab>\n<marked-tab header="Install Puppeteer" lang="shell">\nnpm install puppeteer\n</marked-tab>\n')),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"For a more in-depth guide on how to set up the basic environment we'll be using in this tutorial, check out the ",(0,l.kt)("a",{parentName:"p",href:"/academy/web-scraping-for-beginners/data-collection/computer-preparation",target:null,rel:null},(0,l.kt)("strong",{parentName:"a"},"Computer preparation"))," lesson in the ",(0,l.kt)("strong",{parentName:"p"},"Web scraping for beginners")," course")),(0,l.kt)("h2",{id:"course-overview"},"Course overview"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"/academy/puppeteer-playwright/browser",target:null,rel:null},"Launching a browser")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"/academy/puppeteer-playwright/page",target:null,rel:null},"Opening a page"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/academy/puppeteer-playwright/page/interacting-with-a-page",target:null,rel:null},"Interacting with a page")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/academy/puppeteer-playwright/page/waiting",target:null,rel:null},"Waiting for content & events")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/academy/puppeteer-playwright/page/page-methods",target:null,rel:null},"Page methods")))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"/academy/puppeteer-playwright/executing-scripts",target:null,rel:null},"Executing scripts"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/academy/puppeteer-playwright/executing-scripts/injecting-code",target:null,rel:null},"Injecting code")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/academy/puppeteer-playwright/executing-scripts/collecting-data",target:null,rel:null},"Collecting data")))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"/academy/puppeteer-playwright/reading-intercepting-requests",target:null,rel:null},"Reading & intercepting requests")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"/academy/puppeteer-playwright/proxies",target:null,rel:null},"Using proxies")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"/academy/puppeteer-playwright/browser-contexts",target:null,rel:null},"Creating multiple browser contexts")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"/academy/puppeteer-playwright/common-use-cases",target:null,rel:null},"Common use cases"))),(0,l.kt)("h2",{id:"next"},"First up"),(0,l.kt)("p",null,"In the ",(0,l.kt)("a",{parentName:"p",href:"/academy/puppeteer-playwright/browser",target:null,rel:null},"first lesson")," of this course, we'll be learning a bit about how to create and use the ",(0,l.kt)("strong",{parentName:"p"},"Browser")," object."))}d.isMDXComponent=!0}}]);