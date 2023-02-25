"use strict";(self.webpackChunkapify_docs_v2=self.webpackChunkapify_docs_v2||[]).push([[6630],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),h=c(r),d=o,g=h["".concat(s,".").concat(d)]||h[d]||u[d]||a;return r?n.createElement(g,i(i({ref:t},p),{},{components:r})):n.createElement(g,i({ref:t},p))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},51157:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>c,toc:()=>u});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),i=["components"],l={title:"Relative URLs",description:"Learn about absolute and relative URLs used on web pages and how to work with them when parsing HTML with Cheerio in your scraper.",sidebar_position:4,slug:"/web-scraping-for-beginners/crawling/relative-urls"},s="Relative URLs",c={unversionedId:"webscraping/web_scraping_for_beginners/crawling/relative_urls",id:"webscraping/web_scraping_for_beginners/crawling/relative_urls",title:"Relative URLs",description:"Learn about absolute and relative URLs used on web pages and how to work with them when parsing HTML with Cheerio in your scraper.",source:"@site/sources/academy/webscraping/web_scraping_for_beginners/crawling/relative_urls.md",sourceDirName:"webscraping/web_scraping_for_beginners/crawling",slug:"/web-scraping-for-beginners/crawling/relative-urls",permalink:"/academy/web-scraping-for-beginners/crawling/relative-urls",draft:!1,editUrl:"https://github.com/apify/apify-docs-v2/edit/master/sources/academy/webscraping/web_scraping_for_beginners/crawling/relative_urls.md",tags:[],version:"current",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1677347846,formattedLastUpdatedAt:"Feb 25, 2023",sidebarPosition:4,frontMatter:{title:"Relative URLs",description:"Learn about absolute and relative URLs used on web pages and how to work with them when parsing HTML with Cheerio in your scraper.",sidebar_position:4,slug:"/web-scraping-for-beginners/crawling/relative-urls"},sidebar:"academy",previous:{title:"Filtering links",permalink:"/academy/web-scraping-for-beginners/crawling/filtering-links"},next:{title:"Your first crawl",permalink:"/academy/web-scraping-for-beginners/crawling/first-crawl"}},p={},u=[{value:"Browser vs Cheerio: The Differences",id:"browser-vs-cheerio",level:2},{value:"Resolving URLs",id:"resolving-urls",level:2},{value:"Next up",id:"next",level:2}],h={toc:u};function d(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"filtering-links"},"Relative URLs"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Learn about absolute and relative URLs used on web pages and how to work with them when parsing HTML with Cheerio in your scraper.")),(0,a.kt)("hr",null),(0,a.kt)("p",null,"You might have noticed in the previous lesson that while printing URLs to the DevTools console, they would always show in full length, like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"https://demo-webstore.apify.org/product/macbook-pro\n")),(0,a.kt)("p",null,"But in the Elements tab, when checking the ",(0,a.kt)("inlineCode",{parentName:"p"},'<a href="...">')," attributes, the URLs would look like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"/product/macbook-pro\n")),(0,a.kt)("p",null,"What's up with that?! This short version of the URL is called a ",(0,a.kt)("strong",{parentName:"p"},"relative URL"),", and the full length one is called an ",(0,a.kt)("strong",{parentName:"p"},"absolute URL"),"."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Learn/Common_questions/What_is_a_URL#absolute_urls_vs_relative_urls",target:"_blank",rel:"noopener"},"Learn more about absolute and relative URLs"),".")),(0,a.kt)("p",null,"We'll see why the difference between relative URLs and absolute URLs is important a bit later in this lesson."),(0,a.kt)("h2",{id:"browser-vs-cheerio"},"Browser vs Cheerio: The Differences"),(0,a.kt)("p",null,"Let's update the Node.js code from the ",(0,a.kt)("a",{parentName:"p",href:"/academy/web-scraping-for-beginners/crawling/finding-links",target:null,rel:null},"Finding links lesson")," to see why links with relative URLs can be a problem."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// crawler.js\nimport { gotScraping } from 'got-scraping';\nimport cheerio from 'cheerio';\n\nconst response = await gotScraping('https://demo-webstore.apify.org/');\nconst html = response.body;\n\nconst $ = cheerio.load(html);\n\nconst productLinks = $('main.fit a[href*=\"/product/\"]');\n\nfor (const link of productLinks) {\n    const url = $(link).attr('href');\n    console.log(url);\n}\n")),(0,a.kt)("p",null,"When you run this code in your terminal, you'll immediately see the difference. Unlike in the browser, where looping over elements produced absolute URLs, here in Node.js it only produces the relative ones. This is bad, because we can't use the relative URLs to crawl. They simply don't include all the necessary information."),(0,a.kt)("h2",{id:"resolving-urls"},"Resolving URLs"),(0,a.kt)("p",null,"Luckily, there's a process called resolving URLs that creates absolute URLs from relative ones. We need two things. The relative URL, such as ",(0,a.kt)("inlineCode",{parentName:"p"},"/product/lightweight-jacket"),", and the URL of the website where we found the relative URL (which is ",(0,a.kt)("inlineCode",{parentName:"p"},"https://demo-webstore.apify.org/")," in our case)."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const websiteUrl = 'https://demo-webstore.apify.org/';\nconst relativeUrl = '/product/lightweight-jacket';\n\nconst absoluteUrl = new URL(relativeUrl, websiteUrl);\nconsole.log(absoluteUrl.href);\n")),(0,a.kt)("p",null,"In Node.js, when you create a ",(0,a.kt)("inlineCode",{parentName:"p"},"new URL()"),", you can optionally pass a second argument, the base URL. When you do, the URL in the first argument will be resolved using the URL in the second argument. Note that the URL created from ",(0,a.kt)("inlineCode",{parentName:"p"},"new URL()")," is an object, not a string. To get the URL in a string format, we use the ",(0,a.kt)("inlineCode",{parentName:"p"},"url.href")," property, or alternatively the ",(0,a.kt)("inlineCode",{parentName:"p"},"url.toString()")," function."),(0,a.kt)("p",null,"When we plug this into our crawler code, we will get the correct - absolute - URLs."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// crawler.js\nimport { gotScraping } from 'got-scraping';\nimport cheerio from 'cheerio';\n\nconst WEBSITE_URL = 'https://demo-webstore.apify.org/';\n\nconst response = await gotScraping('https://demo-webstore.apify.org/');\nconst html = response.body;\n\nconst $ = cheerio.load(html);\n\nconst productLinks = $('main.fit a[href*=\"/product/\"]');\n\nfor (const link of productLinks) {\n    const relativeUrl = $(link).attr('href');\n    const absoluteUrl = new URL(relativeUrl, WEBSITE_URL)\n    console.log(absoluteUrl.href);\n}\n")),(0,a.kt)("p",null,"Cheerio can't resolve the URL itself, because until you provide the necessary information - it doesn't know where you originally downloaded the HTML from. The browser always knows which page you're on, so it will resolve the absolute URLs automatically."),(0,a.kt)("h2",{id:"next"},"Next up"),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"/academy/web-scraping-for-beginners/crawling/first-crawl",target:null,rel:null},"next lesson")," will teach you how to use the collected URLs to crawl all the individual product pages."))}d.isMDXComponent=!0}}]);