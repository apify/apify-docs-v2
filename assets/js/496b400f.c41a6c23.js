"use strict";(self.webpackChunkapify_docs_v2=self.webpackChunkapify_docs_v2||[]).push([[7249],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),d=c(r),f=o,y=d["".concat(i,".").concat(f)]||d[f]||l[f]||a;return r?n.createElement(y,s(s({ref:t},u),{},{components:r})):n.createElement(y,s({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=d;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:o,s[1]=p;for(var c=2;c<a;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},17052:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>f,frontMatter:()=>p,metadata:()=>c,toc:()=>l});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),s=["components"],p={title:"How to save screenshots from puppeteer",description:"Code example for how to save screenshots from puppeteer to Apify key-value store",sidebar_position:15.8,slug:"/node-js/how-to-save-screenshots-puppeteer"},i=void 0,c={unversionedId:"tutorials/node_js/how_to_save_screenshots_puppeteer",id:"tutorials/node_js/how_to_save_screenshots_puppeteer",title:"How to save screenshots from puppeteer",description:"Code example for how to save screenshots from puppeteer to Apify key-value store",source:"@site/sources/academy/tutorials/node_js/how_to_save_screenshots_puppeteer.md",sourceDirName:"tutorials/node_js",slug:"/node-js/how-to-save-screenshots-puppeteer",permalink:"/academy/node-js/how-to-save-screenshots-puppeteer",draft:!1,editUrl:"https://github.com/apify/apify-docs-v2/edit/master/sources/academy/tutorials/node_js/how_to_save_screenshots_puppeteer.md",tags:[],version:"current",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1677522857,formattedLastUpdatedAt:"Feb 27, 2023",sidebarPosition:15.8,frontMatter:{title:"How to save screenshots from puppeteer",description:"Code example for how to save screenshots from puppeteer to Apify key-value store",sidebar_position:15.8,slug:"/node-js/how-to-save-screenshots-puppeteer"},sidebar:"academy",previous:{title:"How to add external libraries to Web Scraper",permalink:"/academy/node-js/add-external-libraries-web-scraper"},next:{title:"How to handle blocked requests in PuppeteerCrawler",permalink:"/academy/node-js/handle-blocked-requests-puppeteer"}},u={},l=[],d={toc:l};function f(e){var t=e.components,p=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,n.Z)({},d,p,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"A good way to debug your puppeteer crawler in Apify actors is to save a screenshot of a browser window to the Apify key-value store. You can do that using this function:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"/*_\n\xa0_ Store screen from puppeteer page to Apify key-value store\n\xa0* @param page - Instance of puppeteer Page class https://github.com/GoogleChrome/puppeteer/blob/master/docs/api.md#class-page\n\xa0* @param [key] - Function stores your screen in Apify key-value store under this key\n\xa0* @return {Promise<void>}\n\xa0*/\nconst saveScreen = async (page, key = 'debug-screen') => {\n\xa0 \xa0 const screenshotBuffer = await page.screenshot({ fullPage: true });\n\xa0 \xa0 await Apify.setValue(key, screenshotBuffer, { contentType: 'image/png' });\n};\n")),(0,a.kt)("p",null,"This function takes the parameters page (an instance of a puppeteer page) and key (your screen is stored under this key function in the Apify key-value store)."),(0,a.kt)("p",null,"Because this is so common use-case Apify SDK has a utility function called ",(0,a.kt)("a",{parentName:"p",href:"/sdk/js/docs/api/puppeteer#puppeteersavesnapshot",target:null,rel:null},"saveSnapshot")," that does exactly this and a little bit more:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"You can choose a quality of your screenshots (high-quality images take more size)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"You can also save HTML of the page"))),(0,a.kt)("p",null,"A simple example of usage function in an Apify actor:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const Apify = require('apify');\nconst { saveSnapshot } = Apify.utils.puppeteer;\n\nApify.main(async () => {\n\xa0 \xa0 const input = await Apify.getValue('INPUT');\n\nconsole.log('Launching Puppeteer...');\n\xa0 \xa0 const browser = await Apify.launchPuppeteer();\n\nconst page = await browser.newPage();\n\xa0 \xa0 await page.goto(input.url);\n\nawait saveSnapshot(page, { key: 'test-screen' });\n\nconsole.log('Closing Puppeteer...');\n\xa0 \xa0 await browser.close();\n\nconsole.log('Done.');\n});\n")),(0,a.kt)("p",null,"After you call the function, your screen appears in the KEY-VALUE STORE tab in the actor console. You can click on the row with your saved screen and it'll open it in a new window."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Puppeteer Key-Value store",src:r(28719).Z,width:"2410",height:"1160"})),(0,a.kt)("p",null,"If you have any questions, feel free to contact us in chat."),(0,a.kt)("p",null,"Happy coding!"))}f.isMDXComponent=!0},28719:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/kv-store-puppeteer-35b752a254c5d7f34d23bea8d97bb3dc.png"}}]);