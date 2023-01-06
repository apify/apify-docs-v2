"use strict";(self.webpackChunkapify_docs_v2=self.webpackChunkapify_docs_v2||[]).push([[1048],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>g});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),l=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=l(r),g=n,h=d["".concat(p,".").concat(g)]||d[g]||u[g]||o;return r?a.createElement(h,s(s({ref:t},c),{},{components:r})):a.createElement(h,s({ref:t},c))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,s=new Array(o);s[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var l=2;l<o;l++)s[l]=r[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},11271:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>g,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var a=r(87462),n=r(63366),o=(r(67294),r(3905)),s=["components"],i={title:"Web scraping 101",description:"All you need to know about extracting structured data from web pages, the protections websites employ to prevent it, and how to bypass them.",sidebar_position:4,category:"guides",slug:"/web-scraping-101"},p="[](#web-scraping-101) Web scraping 101",l={unversionedId:"web_scraping_101/index",id:"web_scraping_101/index",title:"Web scraping 101",description:"All you need to know about extracting structured data from web pages, the protections websites employ to prevent it, and how to bypass them.",source:"@site/sources/platform/web_scraping_101/index.md",sourceDirName:"web_scraping_101",slug:"/web-scraping-101",permalink:"/platform/web-scraping-101",draft:!1,tags:[],version:"current",lastUpdatedBy:"Jind\u0159ich B\xe4r",lastUpdatedAt:1673002241,formattedLastUpdatedAt:"Jan 6, 2023",sidebarPosition:4,frontMatter:{title:"Web scraping 101",description:"All you need to know about extracting structured data from web pages, the protections websites employ to prevent it, and how to bypass them.",sidebar_position:4,category:"guides",slug:"/web-scraping-101"},sidebar:"docs",previous:{title:"Run actor and retrieve data via API",permalink:"/platform/tutorials/integrations/run-actor-and-retrieve-data-via-api"},next:{title:"Web scraping techniques",permalink:"/platform/web-scraping-101/web-scraping-techniques"}},c={},u=[{value:" What can I use web scraping for?",id:"-what-can-i-use-web-scraping-for",level:2},{value:" How does web scraping work?",id:"-how-does-web-scraping-work",level:2},{value:" Is web scraping the same as robotic process automation (RPA)?",id:"-is-web-scraping-the-same-as-robotic-process-automation-rpa",level:2},{value:"Is web scraping legal?",id:"is-web-scraping-legal",level:2},{value:" Additional resources",id:"-additional-resources",level:2}],d={toc:u};function g(e){var t=e.components,r=(0,n.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"-web-scraping-101"},(0,o.kt)("a",{parentName:"h1",href:"#web-scraping-101",target:null,rel:null})," Web scraping 101"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"All you need to know about extracting structured data from web pages, the protections websites employ to prevent it, and how to bypass them.")),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Web scraping is the process of extracting structured information from a web page. In essence, web scraping automates the process of manually finding and copy/pasting the information on a website you find useful."),(0,o.kt)("p",null,"In other words, instead of manually visiting each of the 1000 listings for white T-shirts on an e-commerce site and copy-pasting each listing's price, description and seller information, you can create a bot that does it for you. You can then make your bot return the data in a handy format like JSON, HTML or Excel, so you could process and use it."),(0,o.kt)("h2",{id:"-what-can-i-use-web-scraping-for"},(0,o.kt)("a",{parentName:"h2",href:"#what-can-i-use-web-scraping-for",target:null,rel:null})," What can I use web scraping for?"),(0,o.kt)("p",null,"The primary function of web scraping is the extraction of data."),(0,o.kt)("p",null,"It is about gathering information, which you can then use to make informed decisions in how to ",(0,o.kt)("a",{parentName:"p",href:"https://apify.com/use-cases/price-comparison",target:"_blank",rel:"noopener"},"price")," or ",(0,o.kt)("a",{parentName:"p",href:"https://apify.com/use-cases/market-research",target:"_blank",rel:"noopener"},"market")," your product, ",(0,o.kt)("a",{parentName:"p",href:"https://apify.com/use-cases/lead-generation",target:"_blank",rel:"noopener"},"find new customers")," and make decisions that enable you to ",(0,o.kt)("a",{parentName:"p",href:"https://apify.com/use-cases",target:"_blank",rel:"noopener"},"grow your business"),"."),(0,o.kt)("p",null,"To see examples of organizations that have already benefited from web scraping, check out our ",(0,o.kt)("a",{parentName:"p",href:"https://apify.com/success-stories",target:"_blank",rel:"noopener"},"success stories"),"."),(0,o.kt)("h2",{id:"-how-does-web-scraping-work"},(0,o.kt)("a",{parentName:"h2",href:"#how-does-web-scraping-work",target:null,rel:null})," How does web scraping work?"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"The scraper ",(0,o.kt)("a",{parentName:"li",href:"https://www.codecademy.com/articles/http-requests",target:"_blank",rel:"noopener"},"requests")," the contents of a particular page from a website (e.g. this week's Top 10 singles on Spotify). The site returns it in ",(0,o.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/HTML",target:"_blank",rel:"noopener"},"HTML")," format."),(0,o.kt)("li",{parentName:"ol"},"It ",(0,o.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Parsing",target:"_blank",rel:"noopener"},"parses")," (splits up the data and converts it to the required format) the HTML and extracts the data it's been programmed to extract (e.g. the song title and artist name)."),(0,o.kt)("li",{parentName:"ol"},"The scraper stores the data in the specified format, so you can use it manually or in a program.")),(0,o.kt)("h2",{id:"-is-web-scraping-the-same-as-robotic-process-automation-rpa"},(0,o.kt)("a",{parentName:"h2",href:"#is-web-scraping-the-same-as-robotic-process-automation-rpa",target:null,rel:null})," Is web scraping the same as robotic process automation (RPA)?"),(0,o.kt)("p",null,"While web scraping is a kind of ",(0,o.kt)("a",{parentName:"p",href:"/platform/robotic-process-automation",target:null,rel:null},"RPA"),", it focuses on extracting data. RPA focuses on the other tasks in browsers - everything except for extracting information."),(0,o.kt)("p",null,"RPA allows you to handle ",(0,o.kt)("a",{parentName:"p",href:"https://apify.com/use-cases/rpa",target:"_blank",rel:"noopener"},"use cases")," like filling forms or uploading files while you get on with more important tasks. And it's not just simple tasks you can automate. How about ",(0,o.kt)("a",{parentName:"p",href:"https://apify.com/katerinahronik/toggl-invoice-download",target:"_blank",rel:"noopener"},"processing your invoices")," or automating your sales processes?"),(0,o.kt)("h2",{id:"is-web-scraping-legal"},"Is web scraping legal?"),(0,o.kt)("p",null,"In a word, yes. Of course, it has a code of ethics and regulations, which you should always adhere to. ",(0,o.kt)("a",{parentName:"p",href:"https://blog.apify.com/is-web-scraping-legal/",target:"_blank",rel:"noopener"},"Find out more")," over at Apify Blog."),(0,o.kt)("h2",{id:"-additional-resources"},(0,o.kt)("a",{parentName:"h2",href:"#additional-resources",target:null,rel:null})," Additional resources"),(0,o.kt)("p",null,"If you would like to learn more, check out ",(0,o.kt)("a",{parentName:"p",href:"https://blog.apify.com/web-scraping-guide",target:"_blank",rel:"noopener"},"The Beginner's Guide to Web Scraping"),", which explains the basics of web scraping, why you should do it, and helpful tips on how to get started."))}g.isMDXComponent=!0}}]);