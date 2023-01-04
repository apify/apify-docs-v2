"use strict";(self.webpackChunkapify_docs_v2=self.webpackChunkapify_docs_v2||[]).push([[3957],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>m});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=r.createContext({}),g=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},l=function(e){var n=g(e.components);return r.createElement(p.Provider,{value:n},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),c=g(t),f=i,m=c["".concat(p,".").concat(f)]||c[f]||u[f]||a;return t?r.createElement(m,o(o({ref:n},l),{},{components:t})):r.createElement(m,o({ref:n},l))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=f;var s={};for(var p in n)hasOwnProperty.call(n,p)&&(s[p]=n[p]);s.originalType=e,s[c]="string"==typeof e?e:i,o[1]=s;for(var g=2;g<a;g++)o[g]=t[g];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},64547:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>p,default:()=>f,frontMatter:()=>s,metadata:()=>g,toc:()=>c});var r=t(87462),i=t(63366),a=(t(67294),t(3905)),o=["components"],s={title:"Generating fingerprints",description:"Learn how to use two super handy NPM libraries to easily generate fingerprints and inject them into a Playwright or Puppeteer page.",sidebar_position:3,slug:"/anti-scraping/mitigation/generating-fingerprints"},p="[](#generating-fingerprints) Generating fingerprints",g={unversionedId:"anti_scraping/mitigation/generating_fingerprints",id:"anti_scraping/mitigation/generating_fingerprints",title:"Generating fingerprints",description:"Learn how to use two super handy NPM libraries to easily generate fingerprints and inject them into a Playwright or Puppeteer page.",source:"@site/sources/academy/anti_scraping/mitigation/generating_fingerprints.md",sourceDirName:"anti_scraping/mitigation",slug:"/anti-scraping/mitigation/generating-fingerprints",permalink:"/academy/anti-scraping/mitigation/generating-fingerprints",draft:!1,tags:[],version:"current",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1672838848,formattedLastUpdatedAt:"Jan 4, 2023",sidebarPosition:3,frontMatter:{title:"Generating fingerprints",description:"Learn how to use two super handy NPM libraries to easily generate fingerprints and inject them into a Playwright or Puppeteer page.",sidebar_position:3,slug:"/anti-scraping/mitigation/generating-fingerprints"},sidebar:"defaultSidebar",previous:{title:"Using proxies",permalink:"/academy/anti-scraping/mitigation/using-proxies"},next:{title:"Switching to TypeScript",permalink:"/academy/switching-to-typescript"}},l={},c=[{value:" Using the fingerprint-generator package",id:"-using-the-fingerprint-generator-package",level:2},{value:" Injecting fingerprints",id:"-injecting-fingerprints",level:2},{value:"Wrap up",id:"wrap-up",level:2},{value:" Generating headers",id:"-generating-headers",level:2}],u={toc:c};function f(e){var n=e.components,t=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"-generating-fingerprints"},(0,a.kt)("a",{parentName:"h1",href:"#generating-fingerprints",target:null,rel:null})," Generating fingerprints"),(0,a.kt)("p",null,"In ",(0,a.kt)("a",{parentName:"p",href:"https://crawlee.dev",target:"_blank",rel:"noopener"},(0,a.kt)("strong",{parentName:"a"},"Crawlee")),", it's extremely easy to automatically generate fingerprints using the ",(0,a.kt)("a",{parentName:"p",href:"https://crawlee.dev/api/browser-pool/interface/FingerprintOptions",target:"_blank",rel:"noopener"},(0,a.kt)("strong",{parentName:"a"},"FingerprintOptions"))," on a crawler."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import { PlaywrightCrawler } from 'crawlee';\n\nconst crawler = new PlaywrightCrawler({\n    browserPoolOptions: {\n        fingerprintOptions: {\n            fingerprintGeneratorOptions: {\n                browsers: [{ name: 'firefox', minVersion: 80 }],\n                devices: ['desktop'],\n                operatingSystems: ['windows'],\n            },\n        },\n    },\n});\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Note that Crawlee will automatically generate fingerprints for you with no configuration necessary, but the option to configure them yourself is still there within ",(0,a.kt)("strong",{parentName:"p"},"browserPoolOptions"),".")),(0,a.kt)("h2",{id:"-using-the-fingerprint-generator-package"},(0,a.kt)("a",{parentName:"h2",href:"#using-fingerprint-generator",target:null,rel:null})," Using the fingerprint-generator package"),(0,a.kt)("p",null,"Crawlee uses the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/apify/fingerprint-generator",target:"_blank",rel:"noopener"},"Fingerprint generator")," NPM package to do its fingerprint generating magic. For maximum control outside of Crawlee, you can install it on its own. With this package, you can easily generate browser fingerprints."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"It is crucial to generate fingerprints for the specific browser and operating system being used to trick the protections successfully. For example, if you are trying to overcome protection locally with Firefox on a macOS system, you should generate fingerprints for Firefox and macOS to achieve the best results.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'import { FingerprintGenerator } from \'fingerprint-generator\';\n\n// Instantiate the fingerprint generator with\n// configuration options\nconst fingerprintGenerator = new FingerprintGenerator({\n  browsers: [\n      { name: "firefox", minVersion: 80 },\n  ],\n  devices: [\n      "desktop"\n  ],\n  operatingSystems: [\n      "windows"\n  ]\n});\n\n// Grab a fingerprint from the fingerprint generator\nconst generated = fingerprintGenerator.getFingerprint({\n  locales: ["en-US", "en"]\n});\n')),(0,a.kt)("h2",{id:"-injecting-fingerprints"},(0,a.kt)("a",{parentName:"h2",href:"#injecting-fingerprints",target:null,rel:null})," Injecting fingerprints"),(0,a.kt)("p",null,"Once you've manually generated a fingerprint using the ",(0,a.kt)("strong",{parentName:"p"},"Fingerprint generator")," package, it can be injected into the browser using ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/apify/fingerprint-injector",target:"_blank",rel:"noopener"},(0,a.kt)("strong",{parentName:"a"},"fingerprint-injector")),". This tool allows you to inject fingerprints into browsers automated by Playwright or Puppeteer:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'import FingerprintGenerator from \'fingerprint-generator\';\nimport { FingerprintInjector } from \'fingerprint-injector\';\nimport { chromium } from \'playwright\';\n\n// Instantiate a fingerprint injector\nconst fingerprintInjector = new FingerprintInjector();\n\n// Launch a browser in Playwright\nconst browser = await chromium.launch();\n\n// Instantiate the fingerprint generator with\n// configuration options\nconst fingerprintGenerator = new FingerprintGenerator({\n  browsers: [\n      { name: "firefox", minVersion: 80 },\n  ],\n  devices: [\n      "desktop"\n  ],\n  operatingSystems: [\n      "windows"\n  ]\n});\n\n// Grab a fingerprint\nconst generated = fingerprintGenerator.getFingerprint({\n  locales: ["en-US", "en"]\n});\n\n// Create a new browser context, plugging in\n// some values from the fingerprint\nconst context = await browser.newContext({\n  userAgent: generated.fingerprint.userAgent,\n  locale: generated.fingerprint.navigator.language,\n});\n\n// Attach the fingerprint to the newly created\n// browser context\nawait fingerprintInjector.attachFingerprintToPlaywright(context, generated);\n\n// Create a new page and go to Google\nconst page = await context.newPage();\nawait page.goto(\'https://google.com\');\n')),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Note that ",(0,a.kt)("a",{parentName:"p",href:"https://crawlee.dev",target:"_blank",rel:"noopener"},"Crawlee")," automatically applies wide variety of fingerprints by default, so it is not required to do this unless you aren't using Crawlee or if you need a super specific custom fingerprint to scrape with.")),(0,a.kt)("h2",{id:"wrap-up"},"Wrap up"),(0,a.kt)("p",null,"That's it for the ",(0,a.kt)("strong",{parentName:"p"},"Mitigation")," course for now, but be on the lookout for future lessons! We release lessons as we write them, and will be updating the Academy frequently, so be sure to check back every once in a while for new content! Alternatively, you can subscribe to our mailing list to get periodic updates on the Academy, as well as what Apify is up to."),(0,a.kt)("h2",{id:"-generating-headers"},(0,a.kt)("a",{parentName:"h2",href:"#generating-headers",target:null,rel:null})," Generating headers"),(0,a.kt)("p",null,"Headers are also used by websites to fingerprint users (or bots), so it might sometimes be necessary to generate some user-like headers to mitigate anti-scraping protections. Similarly with fingerprints, ",(0,a.kt)("strong",{parentName:"p"},"Crawlee")," automatically generates headers for you, but you can have full control by using the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/apify/browser-headers-generator",target:"_blank",rel:"noopener"},(0,a.kt)("strong",{parentName:"a"},"browser-headers-generator"))," package."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import BrowserHeadersGenerator from 'browser-headers-generator';\n\nconst browserHeadersGenerator = new BrowserHeadersGenerator({\n  operatingSystems: ['windows'],\n  browsers: ['chrome'],\n});\n\nawait browserHeadersGenerator.initialize()\n\nconst randomBrowserHeaders = await browserHeadersGenerator.getRandomizedHeaders()\n")))}f.isMDXComponent=!0}}]);