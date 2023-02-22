"use strict";(self.webpackChunkapify_docs_v2=self.webpackChunkapify_docs_v2||[]).push([[557],{3905:(e,t,r)=>{r.d(t,{Zo:()=>i,kt:()=>f});var a=r(67294);function A(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function n(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){A(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,A=function(e,t){if(null==e)return{};var r,a,A={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(A[r]=e[r]);return A}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(A[r]=e[r])}return A}var p=a.createContext({}),l=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):n(n({},t),e)),r},i=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var r=e.components,A=e.mdxType,o=e.originalType,p=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),g=l(r),f=A,h=g["".concat(p,".").concat(f)]||g[f]||c[f]||o;return r?a.createElement(h,n(n({ref:t},i),{},{components:r})):a.createElement(h,n({ref:t},i))}));function f(e,t){var r=arguments,A=t&&t.mdxType;if("string"==typeof e||A){var o=r.length,n=new Array(o);n[0]=g;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:A,n[1]=s;for(var l=2;l<o;l++)n[l]=r[l];return a.createElement.apply(null,n)}return a.createElement.apply(null,r)}g.displayName="MDXCreateElement"},67769:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>p,default:()=>f,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var a=r(87462),A=r(63366),o=(r(67294),r(3905)),n=["components"],s={title:"Crawl URLs from a Google Sheet",description:"Learn to crawl and scrape data from URLs specified in a spreadsheet with Apify scrapers. Scrape a pre-determined list of web pages with Apify actors.",sidebar_position:3.8,slug:"/tutorials/crawl-urls-from-a-google-sheet"},p="Crawl a list of URLs from a Google Sheets document",l={unversionedId:"tutorials/crawl_urls_from_a_google_sheet",id:"tutorials/crawl_urls_from_a_google_sheet",title:"Crawl URLs from a Google Sheet",description:"Learn to crawl and scrape data from URLs specified in a spreadsheet with Apify scrapers. Scrape a pre-determined list of web pages with Apify actors.",source:"@site/sources/platform/tutorials/crawl_urls_from_a_google_sheet.md",sourceDirName:"tutorials",slug:"/tutorials/crawl-urls-from-a-google-sheet",permalink:"/platform/tutorials/crawl-urls-from-a-google-sheet",draft:!1,editUrl:"https://github.com/apify/apify-docs-v2/edit/master/sources/platform/tutorials/crawl_urls_from_a_google_sheet.md",tags:[],version:"current",lastUpdatedBy:"Dan Nguyen",lastUpdatedAt:1677076240,formattedLastUpdatedAt:"Feb 22, 2023",sidebarPosition:3.8,frontMatter:{title:"Crawl URLs from a Google Sheet",description:"Learn to crawl and scrape data from URLs specified in a spreadsheet with Apify scrapers. Scrape a pre-determined list of web pages with Apify actors.",sidebar_position:3.8,slug:"/tutorials/crawl-urls-from-a-google-sheet"},sidebar:"docs",previous:{title:"Cache data to improve performance",permalink:"/platform/tutorials/cache-data-to-improve-performance"},next:{title:"Scrape websites using the sitemap",permalink:"/platform/tutorials/scrape-websites-using-the-sitemap"}},i={},c=[],g={toc:c};function f(e){var t=e.components,s=(0,A.Z)(e,n);return(0,o.kt)("wrapper",(0,a.Z)({},g,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"crawl-a-list-of-urls-from-a-google-sheets-document"},"Crawl a list of URLs from a Google Sheets document"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Learn to crawl and scrape data from URLs specified in a spreadsheet with Apify scrapers. Scrape a pre-determined list of web pages with Apify actors.")),(0,o.kt)("hr",null),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/platform/actors",target:null,rel:null},"Actors")," such as ",(0,o.kt)("strong",{parentName:"p"},"Web Scraper")," (",(0,o.kt)("a",{parentName:"p",href:"https://apify.com/apify/web-scraper",target:"_blank",rel:"noopener"},"apify/web-scraper"),") ",(0,o.kt)("strong",{parentName:"p"},"Cheerio Scraper")," (",(0,o.kt)("a",{parentName:"p",href:"https://apify.com/apify/web-scraper",target:"_blank",rel:"noopener"},"apify/cheerio-scraper"),") and ",(0,o.kt)("strong",{parentName:"p"},"Puppeteer Scraper")," (",(0,o.kt)("a",{parentName:"p",href:"https://apify.com/apify/web-scraper",target:"_blank",rel:"noopener"},"apify/puppeteer-scraper"),") make it simple to crawl web pages and extract data from them."),(0,o.kt)("p",null,"These actors start with a pre-defined list of URLs (",(0,o.kt)("a",{parentName:"p",href:"/platform/tutorials/apify-scrapers/getting-started",target:null,rel:null},"start URLs"),"), then recursively follow links to find new pages (optional)."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Add Start URLs in Apify Console",src:r(49521).Z,width:"1584",height:"248"})),(0,o.kt)("p",null,"Let's say you have the start URLs you want to crawl stored in a ",(0,o.kt)("a",{parentName:"p",href:"https://www.google.com/sheets/about/",target:"_blank",rel:"noopener"},"Google Sheets")," spreadsheet, such as ",(0,o.kt)("a",{parentName:"p",href:"https://docs.google.com/spreadsheets/d/1GA5sSQhQjB_REes8I5IKg31S-TuRcznWOPjcpNqtxmU",target:"_blank",rel:"noopener"},"this one"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Start URLs in a spreadsheet",src:r(95376).Z,width:"1314",height:"846"})),(0,o.kt)("p",null,"You don't have to add them to the actor manually or export them as a file, only to upload to the scraper. Just click the ",(0,o.kt)("strong",{parentName:"p"},"Text file")," -> ",(0,o.kt)("strong",{parentName:"p"},"Link remote text file")," button in the actor's input and paste the URL."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Link a remote text file",src:r(62086).Z,width:"1520",height:"498"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"IMPORTANT: Make sure the document can be viewed by anyone with the link, otherwise the actor will not be able to access it.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Make the link viewable to anyone",src:r(21632).Z,width:"1062",height:"807"})),(0,o.kt)("p",null,"And that's it, now the actor will download the content of the spreadsheet with up-to-date URLs whenever it starts."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Beware that the spreadsheet should have a simple structure, so the actor can easily find the URLs in it. Also, it should only have one sheet.")))}f.isMDXComponent=!0},62086:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/link-remote-file-0be21a6160886e32da3198642c5cdbbc.png"},21632:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/make-link-viewable-c36792b6edbbfce1b27cfc1521586c0f.png"},49521:(e,t,r)=>{r.d(t,{Z:()=>a});const a="data:image/png;base64,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"},95376:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/start-urls-in-spreadsheet-ce13931a4f31f2d4101774f585abc4ce.png"}}]);