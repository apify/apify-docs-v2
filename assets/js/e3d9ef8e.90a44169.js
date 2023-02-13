"use strict";(self.webpackChunkapify_docs_v2=self.webpackChunkapify_docs_v2||[]).push([[7578],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(n),h=a,w=d["".concat(l,".").concat(h)]||d[h]||u[h]||o;return n?r.createElement(w,s(s({ref:t},p),{},{components:n})):r.createElement(w,s({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var c=2;c<o;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},14171:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>p,default:()=>m,frontMatter:()=>c,metadata:()=>u,toc:()=>h});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),s=n(74866),i=n(85162),l=["components"],c={title:"VI - Creating multiple browser contexts",description:"Learn what a browser context is, how to create one, how to emulate devices, and how to use browser contexts to automate multiple sessions at one time.",sidebar_position:2.6,slug:"/puppeteer-playwright/browser-contexts"},p="Creating multiple browser contexts",u={unversionedId:"webscraping/puppeteer_playwright/browser_contexts",id:"webscraping/puppeteer_playwright/browser_contexts",title:"VI - Creating multiple browser contexts",description:"Learn what a browser context is, how to create one, how to emulate devices, and how to use browser contexts to automate multiple sessions at one time.",source:"@site/sources/academy/webscraping/puppeteer_playwright/browser_contexts.md",sourceDirName:"webscraping/puppeteer_playwright",slug:"/puppeteer-playwright/browser-contexts",permalink:"/academy/puppeteer-playwright/browser-contexts",draft:!1,editUrl:"https://github.com/apify/apify-docs-v2/edit/master/sources/academy/webscraping/puppeteer_playwright/browser_contexts.md",tags:[],version:"current",lastUpdatedBy:"Vlad Frangu",lastUpdatedAt:1676307254,formattedLastUpdatedAt:"Feb 13, 2023",sidebarPosition:2.6,frontMatter:{title:"VI - Creating multiple browser contexts",description:"Learn what a browser context is, how to create one, how to emulate devices, and how to use browser contexts to automate multiple sessions at one time.",sidebar_position:2.6,slug:"/puppeteer-playwright/browser-contexts"},sidebar:"academy",previous:{title:"V - Using proxies",permalink:"/academy/puppeteer-playwright/proxies"},next:{title:"Common use cases",permalink:"/academy/puppeteer-playwright/common-use-cases"}},d={},h=[{value:"Persistent vs non-persistent browser contexts",id:"persistent-vs-non-persistent",level:2},{value:"Using browser contexts",id:"using-browser-contexts",level:2},{value:"Accessing browser contexts",id:"accessing-browser-contexts",level:2},{value:"Wrap up",id:"wrap-up",level:2}],w={toc:h};function m(e){var t=e.components,c=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},w,c,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"creating-browser-contexts"},"Creating multiple browser contexts"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Learn what a browser context is, how to create one, how to emulate devices, and how to use browser contexts to automate multiple sessions at one time.")),(0,o.kt)("hr",null),(0,o.kt)("p",null,"A ",(0,o.kt)("a",{parentName:"p",href:"https://playwright.dev/docs/api/class-browsercontext",target:"_blank",rel:"noopener"},(0,o.kt)("strong",{parentName:"a"},"BrowserContext"))," is an isolated incognito session within a ",(0,o.kt)("strong",{parentName:"p"},"Browser")," instance. This means that contexts can have different device/screen size configurations, different language and color scheme settings, etc. It is useful to use multiple browser instances when dealing with automating logging into multiple accounts simultaneously (therefore requiring multiple sessions), or in any cases where multiple sessions are required."),(0,o.kt)("p",null,"When we create a ",(0,o.kt)("strong",{parentName:"p"},"Browser")," object by using the ",(0,o.kt)("inlineCode",{parentName:"p"},"launch()")," function, a single ",(0,o.kt)("a",{parentName:"p",href:"https://playwright.dev/docs/browser-contexts",target:"_blank",rel:"noopener"},"browser context")," is automatically created. In order to create more, we use the ",(0,o.kt)("a",{parentName:"p",href:"https://playwright.dev/docs/api/class-browser#browser-new-context",target:"_blank",rel:"noopener"},(0,o.kt)("inlineCode",{parentName:"a"},"browser.newContext()"))," function in Playwright, and ",(0,o.kt)("a",{parentName:"p",href:"https://pptr.dev/#?product=Puppeteer&version=v14.1.0&show=api-browsercreateincognitobrowsercontextoptions",target:"_blank",rel:"noopener"},(0,o.kt)("inlineCode",{parentName:"a"},"browser.createIncognitoBrowserContext"))," in Puppeteer."),(0,o.kt)(s.Z,{groupId:"main",mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"Playwright",label:"Playwright",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const myNewContext = await browser.newContext();\n\n"))),(0,o.kt)(i.Z,{value:"Puppeteer",label:"Puppeteer",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const myNewContext = await browser.createIncognitoBrowserContext();\n\n")))),(0,o.kt)("h2",{id:"persistent-vs-non-persistent"},"Persistent vs non-persistent browser contexts"),(0,o.kt)("p",null,"In both examples above, we are creating a new ",(0,o.kt)("strong",{parentName:"p"},"non-persistent")," browser context, which means that once it closes, all of its cookies, cache, etc. will be lost. For some cases, that's okay, but in most situations the performance hit from this is too large. This is why we have ",(0,o.kt)("strong",{parentName:"p"},"persistent")," browser contexts. Persistent browser contexts open up a bit slower and they store all their cache, cookies, session storage, and local storage in a file on disk."),(0,o.kt)("p",null,"In Puppeteer, the ",(0,o.kt)("strong",{parentName:"p"},"default")," browser context is the persistent one, while in Playwright we have to use use ",(0,o.kt)("a",{parentName:"p",href:"https://playwright.dev/docs/api/class-browsertype#browser-type-launch-persistent-context",target:"_blank",rel:"noopener"},(0,o.kt)("inlineCode",{parentName:"a"},"BrowserType.launchPersistentContext()"))," instead of ",(0,o.kt)("inlineCode",{parentName:"p"},"BrowserType.launch()")," in order for the default context to be persistent."),(0,o.kt)(s.Z,{groupId:"main",mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"Playwright",label:"Playwright",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"import { chromium } from 'playwright';\n\n// Here, we launch a persistent browser context. The first\n// argument is the location to store the data.\nconst browser = await chromium.launchPersistentContext('./persistent-context', { headless: false });\n\nconst page = await browser.newPage();\n\nawait browser.close();\n\n"))),(0,o.kt)(i.Z,{value:"Puppeteer",label:"Puppeteer",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"import puppeteer from 'puppeteer';\n\nconst browser = await puppeteer.launch({ headless: false });\n\n// This page will be under the default context, which is persistent.\n// Cache, cookies, etc. will be stored on disk and persisted\nconst page = await browser.newPage();\n\nawait browser.close();\n\n")))),(0,o.kt)("h2",{id:"using-browser-contexts"},"Using browser contexts"),(0,o.kt)("p",null,"In both Playwright and Puppeteer, various devices (iPhones, iPads, Androids, etc.) can be emulated by using ",(0,o.kt)("a",{parentName:"p",href:"https://playwright.dev/docs/api/class-playwright#playwright-devices",target:"_blank",rel:"noopener"},(0,o.kt)("inlineCode",{parentName:"a"},"playwright.devices"))," or ",(0,o.kt)("a",{parentName:"p",href:"https://pptr.dev/#?product=Puppeteer&version=v14.1.0&show=api-puppeteerdevices",target:"_blank",rel:"noopener"},(0,o.kt)("inlineCode",{parentName:"a"},"puppeteer.devices")),". We'll be using this to create two different browser contexts, one emulating an iPhone, and one emulating an Android:"),(0,o.kt)(s.Z,{groupId:"main",mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"Playwright",label:"Playwright",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"import { chromium, devices } from 'playwright';\n\n// Launch the browser\nconst browser = await chromium.launch({ headless: false });\n\nconst iPhone = devices['iPhone 11 Pro'];\n// Create a new context for our iPhone emulation\nconst iPhoneContext = await browser.newContext({ ...iPhone });\n// Open a page on the newly created iPhone context\nconst iPhonePage = await iPhoneContext.newPage();\n\nconst android = devices['Galaxy Note 3'];\n// Create a new context for our Android emulation\nconst androidContext = await browser.newContext({ ...android });\n// Open a page on the newly created Android context\nconst androidPage = await androidContext.newPage();\n\n// The code in the next step will go here\n\nawait browser.close();\n\n"))),(0,o.kt)(i.Z,{value:"Puppeteer",label:"Puppeteer",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"import puppeteer from 'puppeteer';\n\n// Launch the browser\nconst browser = await puppeteer.launch({ headless: false });\n\nconst iPhone = puppeteer.devices['iPhone 11 Pro'];\n// Create a new context for our iPhone emulation\nconst iPhoneContext = await browser.createIncognitoBrowserContext();\n// Open a page on the newly created iPhone context\nconst iPhonePage = await iPhoneContext.newPage();\n// Emulate the device\nawait iPhonePage.emulate(iPhone);\n\nconst android = puppeteer.devices['Galaxy Note 3'];\n// Create a new context for our Android emulation\nconst androidContext = await browser.createIncognitoBrowserContext();\n// Open a page on the newly created Android context\nconst androidPage = await androidContext.newPage();\n// Emulate the device\nawait androidPage.emulate(android);\n\n// The code in the next step will go here\n\nawait browser.close();\n\n")))),(0,o.kt)("p",null,"Then, we'll make both ",(0,o.kt)("inlineCode",{parentName:"p"},"iPhonePage")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"androidPage")," visit ",(0,o.kt)("a",{parentName:"p",href:"https://www.deviceinfo.me/",target:"_blank",rel:"noopener"},"deviceinfo.me"),", which is a website that  displays the type of device you have, the operating system you're using, and more device and location-specific information."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// Go to deviceinfo.me on both at the same time\nawait Promise.all([iPhonePage.goto('https://www.deviceinfo.me/'), androidPage.goto('https://www.deviceinfo.me/')]);\n\n// Wait for 10 seconds on both before shutting down\nawait Promise.all([iPhonePage.waitForTimeout(10000), androidPage.waitForTimeout(10000)]);\n")),(0,o.kt)("p",null,"Let's go ahead and run our code and analyze the data on each ",(0,o.kt)("strong",{parentName:"p"},"deviceinfo.me")," page. Here's what we see:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"deviceinfo.me results for both browser contexts",src:n(59687).Z,width:"1401",height:"1002"})),(0,o.kt)("p",null,"We see that ",(0,o.kt)("strong",{parentName:"p"},"deviceinfo.me")," detects both contexts as using different devices, despite the fact they're visiting the same page at the same time.  This shows firsthand that different browser contexts can have totally different configurations, as they all have separate sessions."),(0,o.kt)("h2",{id:"accessing-browser-contexts"},"Accessing browser contexts"),(0,o.kt)("p",null,"When working with multiple browser contexts, it can be difficult to keep track of all of them and repetitive when making changes to all of them. This is why the ",(0,o.kt)("strong",{parentName:"p"},"Browser")," instance returned from the ",(0,o.kt)("inlineCode",{parentName:"p"},"launch()")," function also has a ",(0,o.kt)("inlineCode",{parentName:"p"},"contexts()")," function (",(0,o.kt)("inlineCode",{parentName:"p"},"browserContexts()")," in Puppeteer). This function returns an array of all the contexts that are currently attached to the browser."),(0,o.kt)("p",null,"Let's go ahead and use this function to loop through all of our browser contexts and make them log ",(0,o.kt)("strong",{parentName:"p"},"Site visited")," to the console whenever the website is visited:"),(0,o.kt)(s.Z,{groupId:"main",mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"Playwright",label:"Playwright",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"for (const context of browser.contexts()) {\n    // In Playwright, lots of events are supported in the \"on\" function of\n    // a BrowserContext instance\n    context.on('request', (req) => req.url() === 'https://www.deviceinfo.me/' && console.log('Site visited'));\n}\n\n"))),(0,o.kt)(i.Z,{value:"Puppeteer",label:"Puppeteer",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"for (const context of browser.browserContexts()) {\n    // In Puppeteer, only three events are supported in the \"on\" function\n    // of a BrowserContext instance\n    context.on('targetchanged', () => console.log('Site visited'));\n}\n\n")))),(0,o.kt)("p",null,"After adding this above our ",(0,o.kt)("inlineCode",{parentName:"p"},"page.goto"),"s and running the code once again, we see this logged to the console:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"Site visited\nSite visited\n")),(0,o.kt)("p",null,"Cool! So we've modified both our ",(0,o.kt)("inlineCode",{parentName:"p"},"iPhoneContext")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"androidContext"),", as well as our default context, to log the message."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Note that the Puppeteer code and Playwright code are slightly different in the examples above. The Playwright code will log ",(0,o.kt)("strong",{parentName:"p"},"Site visited")," any time the specific URL is visited, while the Puppeteer code will log any time the target URL is changed to anything.")),(0,o.kt)("p",null,"Finally, in Puppeteer, you can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"browser.defaultBrowserContext()")," function to grab hold of the default context at any point."),(0,o.kt)("h2",{id:"wrap-up"},"Wrap up"),(0,o.kt)("p",null,"So far in this course, you've learned how to launch a browser, open a page, run scripts on a page, extract data from a page, intercept requests made on the page, use proxies, and use multiple browser contexts. Stay tuned for new lessons!"))}m.isMDXComponent=!0},85162:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(67294),a=n(86010);const o="tabItem_Ymn6";function s(e){var t=e.children,n=e.hidden,s=e.className;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,s),hidden:n},t)}},74866:(e,t,n)=>{n.d(t,{Z:()=>x});var r=n(87462),a=n(67294),o=n(86010),s=n(12466),i=n(16550),l=n(91980),c=n(67392),p=n(50012);function u(e){return function(e){return a.Children.map(e,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')}))}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function d(e){var t=e.values,n=e.children;return(0,a.useMemo)((function(){var e=null!=t?t:u(n);return function(e){var t=(0,c.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function h(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function w(e){var t=e.queryString,n=void 0!==t&&t,r=e.groupId,o=(0,i.k6)(),s=function(e){var t=e.queryString,n=void 0!==t&&t,r=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:n,groupId:r});return[(0,l._X)(s),(0,a.useCallback)((function(e){if(s){var t=new URLSearchParams(o.location.search);t.set(s,e),o.replace(Object.assign({},o.location,{search:t.toString()}))}}),[s,o])]}function m(e){var t,n,r,o,s=e.defaultValue,i=e.queryString,l=void 0!==i&&i,c=e.groupId,u=d(e),m=(0,a.useState)((function(){return function(e){var t,n=e.defaultValue,r=e.tabValues;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+r.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var a=null!=(t=r.find((function(e){return e.default})))?t:r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:s,tabValues:u})})),g=m[0],b=m[1],f=w({queryString:l,groupId:c}),v=f[0],y=f[1],k=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:c}.groupId),n=(0,p.Nk)(t),r=n[0],o=n[1],[r,(0,a.useCallback)((function(e){t&&o.set(e)}),[t,o])]),x=k[0],P=k[1],N=function(){var e=null!=v?v:x;return h({value:e,tabValues:u})?e:null}();return(0,a.useEffect)((function(){N&&b(N)}),[N]),{selectedValue:g,selectValue:(0,a.useCallback)((function(e){if(!h({value:e,tabValues:u}))throw new Error("Can't select invalid tab value="+e);b(e),y(e),P(e)}),[y,P,u]),tabValues:u}}var g=n(72389);const b="tabList__CuJ",f="tabItem_LNqP";function v(e){var t=e.className,n=e.block,i=e.selectedValue,l=e.selectValue,c=e.tabValues,p=[],u=(0,s.o5)().blockElementScrollPositionUntilNextRender,d=function(e){var t=e.currentTarget,n=p.indexOf(t),r=c[n].value;r!==i&&(u(t),l(r))},h=function(e){var t,n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":var r,a=p.indexOf(e.currentTarget)+1;n=null!=(r=p[a])?r:p[0];break;case"ArrowLeft":var o,s=p.indexOf(e.currentTarget)-1;n=null!=(o=p[s])?o:p[p.length-1]}null==(t=n)||t.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},c.map((function(e){var t=e.value,n=e.label,s=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:function(e){return p.push(e)},onKeyDown:h,onClick:d},s,{className:(0,o.Z)("tabs__item",f,null==s?void 0:s.className,{"tabs__item--active":i===t})}),null!=n?n:t)})))}function y(e){var t=e.lazy,n=e.children,r=e.selectedValue;if(t){var o=n.find((function(e){return e.props.value===r}));return o?(0,a.cloneElement)(o,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},n.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r})})))}function k(e){var t=m(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",b)},a.createElement(v,(0,r.Z)({},e,t)),a.createElement(y,(0,r.Z)({},e,t)))}function x(e){var t=(0,g.Z)();return a.createElement(k,(0,r.Z)({key:String(t)},e))}},59687:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/dual-contexts-1cf77aac6062264d0ba205af600f5c5a.jpg"}}]);