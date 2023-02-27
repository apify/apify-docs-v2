"use strict";(self.webpackChunkapify_docs_v2=self.webpackChunkapify_docs_v2||[]).push([[1662],{3905:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>y});var a=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function p(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?p(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},p=Object.keys(e);for(a=0;a<p.length;a++)t=p[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)t=p[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=a.createContext({}),c=function(e){var r=a.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},l=function(e){var r=c(e.components);return a.createElement(s.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},d=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,p=e.originalType,s=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),d=c(t),y=n,f=d["".concat(s,".").concat(y)]||d[y]||u[y]||p;return t?a.createElement(f,i(i({ref:r},l),{},{components:t})):a.createElement(f,i({ref:r},l))}));function y(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var p=t.length,i=new Array(p);i[0]=d;var o={};for(var s in r)hasOwnProperty.call(r,s)&&(o[s]=r[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var c=2;c<p;c++)i[c]=t[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},48793:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>s,default:()=>y,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var a=t(87462),n=t(63366),p=(t(67294),t(3905)),i=["components"],o={title:"Apify scrapers",description:"Discover Apify's ready-made web scraping and automation tools. Compare Web Scraper, Cheerio Scraper and Puppeteer Scraper to decide which is right for you.",sidebar_position:3.2,slug:"/apify-scrapers"},s="Scraping with Apify",c={unversionedId:"tutorials/apify_scrapers/index",id:"tutorials/apify_scrapers/index",title:"Apify scrapers",description:"Discover Apify's ready-made web scraping and automation tools. Compare Web Scraper, Cheerio Scraper and Puppeteer Scraper to decide which is right for you.",source:"@site/sources/academy/tutorials/apify_scrapers/index.md",sourceDirName:"tutorials/apify_scrapers",slug:"/apify-scrapers",permalink:"/academy/apify-scrapers",draft:!1,editUrl:"https://github.com/apify/apify-docs-v2/edit/master/sources/academy/tutorials/apify_scrapers/index.md",tags:[],version:"current",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1677522857,formattedLastUpdatedAt:"Feb 27, 2023",sidebarPosition:3.2,frontMatter:{title:"Apify scrapers",description:"Discover Apify's ready-made web scraping and automation tools. Compare Web Scraper, Cheerio Scraper and Puppeteer Scraper to decide which is right for you.",sidebar_position:3.2,slug:"/apify-scrapers"},sidebar:"academy",previous:{title:"VII - Saving run stats",permalink:"/academy/expert-scraping-with-apify/solutions/saving-stats"},next:{title:"Getting started with Apify scrapers",permalink:"/academy/apify-scrapers/getting-started"}},l={},u=[{value:"Web Scraper",id:"web-scraper",level:2},{value:"Cheerio Scraper",id:"cheerio-scraper",level:2},{value:"Puppeteer Scraper",id:"puppeteer-scraper",level:2}],d={toc:u};function y(e){var r=e.components,t=(0,n.Z)(e,i);return(0,p.kt)("wrapper",(0,a.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,p.kt)("h1",{id:"scraping-with-apify"},"Scraping with Apify"),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Discover Apify's ready-made web scraping and automation tools. Compare Web Scraper, Cheerio Scraper and Puppeteer Scraper to decide which is right for you.")),(0,p.kt)("hr",null),(0,p.kt)("p",null,"Scraping and crawling the web can be difficult and time-consuming without the right tools. That's why Apify provides ready-made solutions to crawl and scrape any website. They are based on our ",(0,p.kt)("a",{parentName:"p",href:"https://apify.com/actors",target:"_blank",rel:"noopener"},"actors"),", the ",(0,p.kt)("a",{parentName:"p",href:"/sdk/js",target:null,rel:null},"Apify SDK")," and ",(0,p.kt)("a",{parentName:"p",href:"https://crawlee.dev/",target:"_blank",rel:"noopener"},"Crawlee"),"."),(0,p.kt)("p",null,"Don't let the number of options confuse you. Unless you're really sure you need to use a specific tool, just go ahead and use ",(0,p.kt)("strong",{parentName:"p"},"Web Scraper")," (",(0,p.kt)("a",{parentName:"p",href:"/academy/apify-scrapers/web-scraper",target:null,rel:null},"apify/web-scraper"),"). It is the easiest to pick up and can handle almost anything. Look at ",(0,p.kt)("strong",{parentName:"p"},"Puppeteer Scraper")," (",(0,p.kt)("a",{parentName:"p",href:"/academy/apify-scrapers/puppeteer-scraper",target:null,rel:null},"apify/puppeteer-scraper"),") or ",(0,p.kt)("strong",{parentName:"p"},"Cheerio Scraper")," (",(0,p.kt)("a",{parentName:"p",href:"/academy/apify-scrapers/cheerio-scraper",target:null,rel:null},"apify/cheerio-scraper"),") only after you know your target websites well and need to optimize your scraper."),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"/academy/apify-scrapers/getting-started",target:null,rel:null},"Visit the Scraper introduction tutorial to get started!")),(0,p.kt)("h2",{id:"web-scraper"},(0,p.kt)("a",{parentName:"h2",href:"#web-scraper",target:null,rel:null}),"Web Scraper"),(0,p.kt)("p",null,"Web Scraper is a ready-made solution for scraping the web using the Chrome browser. It takes away all the work necessary to set up a browser for crawling, controls the browser automatically and produces machine-readable results in several common formats."),(0,p.kt)("p",null,"Underneath, it uses the Puppeteer library to control the browser, but you don't need to worry about that. Using a simple web UI and a little of basic JavaScript, you can tweak it to serve almost any scraping need."),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"/academy/apify-scrapers/web-scraper",target:null,rel:null},"Visit the Web Scraper tutorial to get started!")),(0,p.kt)("h2",{id:"cheerio-scraper"},(0,p.kt)("a",{parentName:"h2",href:"#cheerio-scraper",target:null,rel:null}),"Cheerio Scraper"),(0,p.kt)("p",null,"Cheerio Scraper is a ready-made solution for crawling the web using plain HTTP requests to retrieve HTML pages and then parsing and inspecting the HTML using the ",(0,p.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/cheerio",target:"_blank",rel:"noopener"},"cheerio")," library. It's blazing fast."),(0,p.kt)("p",null,"Cheerio is a server-side version of the popular jQuery library that does not run in the browser but instead constructs a DOM out of an HTML string and then provides the user an API to work with that DOM."),(0,p.kt)("p",null,"Cheerio Scraper is ideal for scraping websites that do not rely on client-side JavaScript to serve their content. It can be as much as 20 times faster than using a full-browser solution like Puppeteer."),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"/academy/apify-scrapers/cheerio-scraper",target:null,rel:null},"Visit the Cheerio Scraper tutorial to get started!")),(0,p.kt)("h2",{id:"puppeteer-scraper"},(0,p.kt)("a",{parentName:"h2",href:"#puppeteer-scraper",target:null,rel:null}),"Puppeteer Scraper"),(0,p.kt)("p",null,"Puppeteer Scraper is the most powerful scraper tool in our arsenal (aside from developing your own actors). It uses the Puppeteer library to programmatically control a headless Chrome browser, and it can make it do almost anything. If using Web Scraper does not cut it, Puppeteer Scraper is what you need."),(0,p.kt)("p",null,"Puppeteer is a Node.js library, so knowledge of Node.js and its paradigms is expected when working with Puppeteer Scraper."),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"/academy/apify-scrapers/puppeteer-scraper",target:null,rel:null},"Visit the Puppeteer Scraper tutorial to get started!")))}y.isMDXComponent=!0}}]);