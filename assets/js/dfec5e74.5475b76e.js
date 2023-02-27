"use strict";(self.webpackChunkapify_docs_v2=self.webpackChunkapify_docs_v2||[]).push([[1785],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),f=p(r),d=n,y=f["".concat(s,".").concat(d)]||f[d]||c[d]||o;return r?a.createElement(y,i(i({ref:t},u),{},{components:r})):a.createElement(y,i({ref:t},u))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},90393:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>p,toc:()=>c});var a=r(87462),n=r(63366),o=(r(67294),r(3905)),i=["components"],l={title:"Tutorials",description:"Learn how to scrape the web and automate processes with Apify. From beginner guides for using actors to advanced topics like migrations and performance.",sidebar_position:3,category:"guides",slug:"/tutorials"},s="Tutorials",p={unversionedId:"tutorials/index",id:"tutorials/index",title:"Tutorials",description:"Learn how to scrape the web and automate processes with Apify. From beginner guides for using actors to advanced topics like migrations and performance.",source:"@site/sources/platform/tutorials/index.md",sourceDirName:"tutorials",slug:"/tutorials",permalink:"/platform/tutorials",draft:!1,editUrl:"https://github.com/apify/apify-docs-v2/edit/master/sources/platform/tutorials/index.md",tags:[],version:"current",lastUpdatedBy:"Marcus Papin",lastUpdatedAt:1677519978,formattedLastUpdatedAt:"Feb 27, 2023",sidebarPosition:3,frontMatter:{title:"Tutorials",description:"Learn how to scrape the web and automate processes with Apify. From beginner guides for using actors to advanced topics like migrations and performance.",sidebar_position:3,category:"guides",slug:"/tutorials"},sidebar:"docs",previous:{title:"About",permalink:"/platform/about"},next:{title:"Quick start",permalink:"/platform/tutorials/quick-start"}},u={},c=[{value:"The basics",id:"the-basics",level:2},{value:"Next steps",id:"next-steps",level:2},{value:"Building actors",id:"building-actors",level:2},{value:"Advanced use cases",id:"advanced-use-cases",level:2},{value:"Finally",id:"finally",level:2}],f={toc:c};function d(e){var t=e.components,r=(0,n.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"tutorials"},"Tutorials"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Learn how to scrape the web and automate processes with Apify. From beginner guides for using actors to advanced topics like migrations and performance.")),(0,o.kt)("hr",null),(0,o.kt)("p",null,"This section contains everything you need to get you up and running with Apify, as well as advanced techniques for experienced users. Before you start, it will help to have an ",(0,o.kt)("a",{parentName:"p",href:"https://console.apify.com",target:"_blank",rel:"noopener"},"Apify account")," set up and ready to go."),(0,o.kt)("h2",{id:"the-basics"},"The basics"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/platform/tutorials/quick-start",target:null,rel:null},"Quick start")," will show you how to ",(0,o.kt)("a",{parentName:"p",href:"/platform/tutorials/quick-start",target:null,rel:null},"run existing actors")," and ",(0,o.kt)("a",{parentName:"p",href:"/platform/tutorials/quick-start#create-an-actor",target:null,rel:null},"create your first Apify actor"),"."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/academy/apify-scrapers/getting-started",target:null,rel:null},"Set up your first web scraping job")," with a step-by-step guide."),(0,o.kt)("h2",{id:"next-steps"},"Next steps"),(0,o.kt)("p",null,"If you liked what you learned, get familiar with our main tools by following\nthe ",(0,o.kt)("a",{parentName:"p",href:"/academy/apify-scrapers/web-scraper",target:null,rel:null},"tutorial")," for ",(0,o.kt)("strong",{parentName:"p"},"Web Scraper")," (",(0,o.kt)("a",{parentName:"p",href:"https://apify.com/apify/web-scraper",target:"_blank",rel:"noopener"},"apify/web-scraper"),"),\nthe ",(0,o.kt)("a",{parentName:"p",href:"/academy/apify-scrapers/cheerio-scraper",target:null,rel:null},"tutorial")," for ",(0,o.kt)("strong",{parentName:"p"},"Cheerio Scraper")," (",(0,o.kt)("a",{parentName:"p",href:"https://apify.com/apify/cheerio-scraper",target:"_blank",rel:"noopener"},"apify/cheerio-scraper"),"),\nor the ",(0,o.kt)("a",{parentName:"p",href:"/academy/apify-scrapers/puppeteer-scraper",target:null,rel:null},"tutorial")," for ",(0,o.kt)("strong",{parentName:"p"},"Puppeteer Scraper")," (",(0,o.kt)("a",{parentName:"p",href:"https://apify.com/apify/puppeteer-scraper",target:"_blank",rel:"noopener"},"apify/puppeteer-scraper"),")"),(0,o.kt)("p",null,"Or, if the solution you need is beyond your skillset or schedule, you can always ",(0,o.kt)("a",{parentName:"p",href:"https://apify.com/custom-solutions",target:"_blank",rel:"noopener"},"order a custom solution"),"."),(0,o.kt)("h2",{id:"building-actors"},"Building actors"),(0,o.kt)("p",null,"Building your own actors requires some experience with coding. If you're ready, get started with the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.apify.com/sdk/js/",target:"_blank",rel:"noopener"},"Apify SDK")," and ",(0,o.kt)("a",{parentName:"p",href:"https://crawlee.dev/docs/quick-start",target:"_blank",rel:"noopener"},"Crawlee"),"."),(0,o.kt)("p",null,'"But wait, I don\'t speak JavaScript", we hear you say. Worry not! While we currently only have an SDK for JavaScript, your actor can be in any programming language. If you use Python, you can now ',(0,o.kt)("a",{parentName:"p",href:"/academy/python/scrape-data-python",target:null,rel:null},"scrape data with Beautiful Soup"),"\nand ",(0,o.kt)("a",{parentName:"p",href:"/academy/python/process-data-using-python",target:null,rel:null},"parse the results with Pandas")," on the Apify platform. Prefer PHP? Cool! Here's how you can ",(0,o.kt)("a",{parentName:"p",href:"/academy/php/using-apify-scraper-with-php",target:null,rel:null},"use Apify in your PHP projects"),"."),(0,o.kt)("p",null,"If you're interested in publishing your actors for others to use, check our ",(0,o.kt)("a",{parentName:"p",href:"/platform/tutorials/building-public-actors",target:null,rel:null},"building public actors")," guide. It contains useful information you'll need to make your actor as good as it can be."),(0,o.kt)("h2",{id:"advanced-use-cases"},"Advanced use cases"),(0,o.kt)("p",null,"Check out our other tutorials that cover more specific and advanced scenarios such as ",(0,o.kt)("a",{parentName:"p",href:"/academy/puppeteer-playwright/page/waiting",target:null,rel:null},"scraping dynamic content"),", ",(0,o.kt)("a",{parentName:"p",href:"/platform/integrations",target:null,rel:null},"integrating")," your projects with Apify, ",(0,o.kt)("a",{parentName:"p",href:"/platform/tutorials/run-actor-and-retrieve-data-via-api",target:null,rel:null},"using your actors via API"),", or setting up ",(0,o.kt)("a",{parentName:"p",href:"/platform/monitoring",target:null,rel:null},"monitoring")," for your projects."),(0,o.kt)("h2",{id:"finally"},"Finally"),(0,o.kt)("p",null,"We're constantly working on extending and improving this section. If you have suggestions or requests for specific tutorials, let us know using the form below."))}d.isMDXComponent=!0}}]);