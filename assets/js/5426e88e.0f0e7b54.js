"use strict";(self.webpackChunkapify_docs_v2=self.webpackChunkapify_docs_v2||[]).push([[557],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var a=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=a.createContext({}),p=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(r),c=o,f=d["".concat(l,".").concat(c)]||d[c]||m[c]||n;return r?a.createElement(f,s(s({ref:t},u),{},{components:r})):a.createElement(f,s({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,s=new Array(n);s[0]=c;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[d]="string"==typeof e?e:o,s[1]=i;for(var p=2;p<n;p++)s[p]=r[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},67769:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>p,toc:()=>d});var a=r(87462),o=r(63366),n=(r(67294),r(3905)),s=["components"],i={title:"Crawl URLs from a Google Sheet",description:"Learn to crawl and scrape data from URLs specified in a spreadsheet with Apify scrapers. Scrape a pre-determined list of web pages with Apify actors.",sidebar_position:3.8,slug:"/tutorials/crawl-urls-from-a-google-sheet"},l="Crawl a list of URLs from a Google Sheets document",p={unversionedId:"tutorials/crawl_urls_from_a_google_sheet",id:"tutorials/crawl_urls_from_a_google_sheet",title:"Crawl URLs from a Google Sheet",description:"Learn to crawl and scrape data from URLs specified in a spreadsheet with Apify scrapers. Scrape a pre-determined list of web pages with Apify actors.",source:"@site/sources/platform/tutorials/crawl_urls_from_a_google_sheet.md",sourceDirName:"tutorials",slug:"/tutorials/crawl-urls-from-a-google-sheet",permalink:"/platform/tutorials/crawl-urls-from-a-google-sheet",draft:!1,tags:[],version:"current",lastUpdatedBy:"Jind\u0159ich B\xe4r",lastUpdatedAt:1671543152,formattedLastUpdatedAt:"Dec 20, 2022",sidebarPosition:3.8,frontMatter:{title:"Crawl URLs from a Google Sheet",description:"Learn to crawl and scrape data from URLs specified in a spreadsheet with Apify scrapers. Scrape a pre-determined list of web pages with Apify actors.",sidebar_position:3.8,slug:"/tutorials/crawl-urls-from-a-google-sheet"},sidebar:"defaultSidebar",previous:{title:"Cache data to improve performance",permalink:"/platform/tutorials/cache-data-to-improve-performance"},next:{title:"Scrape websites using the sitemap",permalink:"/platform/tutorials/scrape-websites-using-the-sitemap"}},u={},d=[],m={toc:d};function c(e){var t=e.components,i=(0,o.Z)(e,s);return(0,n.kt)("wrapper",(0,a.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"crawl-a-list-of-urls-from-a-google-sheets-document"},"Crawl a list of URLs from a Google Sheets document"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"../../academy/getting_started/actors.md",target:null,rel:null},"Actors")," such as ",(0,n.kt)("strong",{parentName:"p"},"Web Scraper")," (",(0,n.kt)("a",{parentName:"p",href:"https://apify.com/apify/web-scraper",target:"_blank",rel:"noopener"},"apify/web-scraper"),") ",(0,n.kt)("strong",{parentName:"p"},"Cheerio Scraper")," (",(0,n.kt)("a",{parentName:"p",href:"https://apify.com/apify/web-scraper",target:"_blank",rel:"noopener"},"apify/cheerio-scraper"),") and ",(0,n.kt)("strong",{parentName:"p"},"Puppeteer Scraper")," (",(0,n.kt)("a",{parentName:"p",href:"https://apify.com/apify/web-scraper",target:"_blank",rel:"noopener"},"apify/puppeteer-scraper"),") make it simple to crawl web pages and extract data from them."),(0,n.kt)("p",null,"These actors start with a pre-defined list of URLs (",(0,n.kt)("a",{parentName:"p",href:"/platform/tutorials/apify-scrapers/getting-started",target:null,rel:null},"start URLs"),"), then recursively follow links to find new pages (optional)."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Add Start URLs in Apify Console",src:r(57450).Z,width:"1584",height:"248"})),(0,n.kt)("p",null,"Let's say you have the start URLs you want to crawl stored in a ",(0,n.kt)("a",{parentName:"p",href:"https://www.google.com/sheets/about/",target:"_blank",rel:"noopener"},"Google Sheets")," spreadsheet, such as ",(0,n.kt)("a",{parentName:"p",href:"https://docs.google.com/spreadsheets/d/1GA5sSQhQjB_REes8I5IKg31S-TuRcznWOPjcpNqtxmU",target:"_blank",rel:"noopener"},"this one"),"."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Start URLs in a spreadsheet",src:r(28756).Z,width:"1314",height:"846"})),(0,n.kt)("p",null,"You don't have to add them to the actor manually or export them as a file, only to upload to the scraper. Just click the ",(0,n.kt)("strong",{parentName:"p"},"Text file")," -> ",(0,n.kt)("strong",{parentName:"p"},"Link remote text file")," button in the actor's input and paste the URL."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Link a remote text file",src:r(64155).Z,width:"1520",height:"498"})),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"IMPORTANT: Make sure the document can be viewed by anyone with the link, otherwise the actor will not be able to access it.")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Make the link viewable to anyone",src:r(66927).Z,width:"1062",height:"807"})),(0,n.kt)("p",null,"And that's it, now the actor will download the content of the spreadsheet with up-to-date URLs whenever it starts."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Beware that the spreadsheet should have a simple structure, so the actor can easily find the URLs in it. Also, it should only have one sheet.")))}c.isMDXComponent=!0},64155:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/link-remote-file-78250e8321ac0ad3240b2bcf84c3dbf3.webp"},66927:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/make-link-viewable-6fe55480100d93e7187ecebb5dffdf1d.webp"},57450:(e,t,r)=>{r.d(t,{Z:()=>a});const a="data:image/webp;base64,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"},28756:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/start-urls-in-spreadsheet-087ba9cc1d36ec2dc65a04d74d72ec38.webp"}}]);