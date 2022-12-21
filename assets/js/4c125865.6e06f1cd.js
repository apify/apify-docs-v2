"use strict";(self.webpackChunkapify_docs_v2=self.webpackChunkapify_docs_v2||[]).push([[6925],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>d});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),i=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},c=function(e){var t=i(e.components);return r.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=i(a),f=n,d=m["".concat(s,".").concat(f)]||m[f]||u[f]||l;return a?r.createElement(d,p(p({ref:t},c),{},{components:a})):r.createElement(d,p({ref:t},c))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,p=new Array(l);p[0]=f;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[m]="string"==typeof e?e:n,p[1]=o;for(var i=2;i<l;i++)p[i]=a[i];return r.createElement.apply(null,p)}return r.createElement.apply(null,a)}f.displayName="MDXCreateElement"},46923:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>f,frontMatter:()=>o,metadata:()=>i,toc:()=>m});var r=a(87462),n=a(63366),l=(a(67294),a(3905)),p=["components"],o={title:"Examples",description:"Find out what you can do with the Apify platform. See code examples for a variety of use cases and learn about programming language support.",sidebar_position:7.9,slug:"/actors/examples"},s="Examples",i={unversionedId:"actors/examples",id:"actors/examples",title:"Examples",description:"Find out what you can do with the Apify platform. See code examples for a variety of use cases and learn about programming language support.",source:"@site/sources/platform/actors/examples.md",sourceDirName:"actors",slug:"/actors/examples",permalink:"/platform/actors/examples",draft:!1,tags:[],version:"current",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1671632368,formattedLastUpdatedAt:"Dec 21, 2022",sidebarPosition:7.9,frontMatter:{title:"Examples",description:"Find out what you can do with the Apify platform. See code examples for a variety of use cases and learn about programming language support.",sidebar_position:7.9,slug:"/actors/examples"},sidebar:"docs",previous:{title:"Limits",permalink:"/platform/actors/limits"},next:{title:"Schedules",permalink:"/platform/schedules"}},c={},m=[{value:"Use cases",id:"use-cases",level:2},{value:"Code examples",id:"code-examples",level:2},{value:"Language support",id:"language-support",level:2}],u={toc:m};function f(e){var t=e.components,a=(0,n.Z)(e,p);return(0,l.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"examples"},"Examples"),(0,l.kt)("p",null,"This section provides examples of actors to illustrate what you can do with the Apify platform."),(0,l.kt)("h2",{id:"use-cases"},"Use cases"),(0,l.kt)("p",null,"The example actors (and many more) are available in ",(0,l.kt)("a",{parentName:"p",href:"https://apify.com/store?type=acts&search=user%3Aapify%20example",target:"_blank",rel:"noopener"},"Apify Store"),"."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Scraping specific pages:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://apify.com/apify/google-search-scraper",target:"_blank",rel:"noopener"},"Scrape Google Search results"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://apify.com/vdrmota/twitter-scraper",target:"_blank",rel:"noopener"},"Scrape Twitter"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://apify.com/jaroslavhejlek/instagram-scraper",target:"_blank",rel:"noopener"},"Scrape Instagram"),"."))),(0,l.kt)("li",{parentName:"ul"},"Data processing:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://apify.com/lukaskrivka/google-sheets",target:"_blank",rel:"noopener"},"Import and export Google Sheets files"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://apify.com/lukaskrivka/dedup-datasets",target:"_blank",rel:"noopener"},"Deduplicate datasets"),"."))),(0,l.kt)("li",{parentName:"ul"},"SEO analysis:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://apify.com/jancurn/find-broken-links",target:"_blank",rel:"noopener"},"Check for broken links"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://apify.com/drobnikj/seo-audit-tool",target:"_blank",rel:"noopener"},"SEO audit"),"."))),(0,l.kt)("li",{parentName:"ul"},"Monitoring:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://apify.com/apify/monitoring",target:"_blank",rel:"noopener"},"Monitor your actors' performance"),".")))),(0,l.kt)("h2",{id:"code-examples"},"Code examples"),(0,l.kt)("p",null,"Below are a few example use cases for what you can do with actors. The ",(0,l.kt)("a",{parentName:"p",href:"https://sdk.apify.com/docs/examples/capture-screenshot",target:null,rel:null},"Apify SDK documentation")," contains many more examples using ",(0,l.kt)("a",{parentName:"p",href:"https://sdk.apify.com/docs/examples/puppeteer-crawler",target:null,rel:null},"Puppeteer"),", ",(0,l.kt)("a",{parentName:"p",href:"https://sdk.apify.com/docs/examples/playwright-crawler",target:null,rel:null},"Playwright"),", and ",(0,l.kt)("a",{parentName:"p",href:"https://sdk.apify.com/docs/examples/cheerio-crawler",target:null,rel:null},"Cheerio"),"."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://sdk.apify.com/docs/examples/crawl-all-links",target:null,rel:null},"Crawl an entire website"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://sdk.apify.com/docs/examples/capture-screenshot",target:null,rel:null},"Navigate to a page and capture a screenshot"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://sdk.apify.com/docs/examples/map-and-reduce",target:null,rel:null},"Process data"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://sdk.apify.com/docs/examples/call-actor",target:null,rel:null},"Use other actors in yours"),".")),(0,l.kt)("h2",{id:"language-support"},"Language support"),(0,l.kt)("p",null,"While most actors are written in JavaScript, this does not have to be the case. You can write Apify actors in any language."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://apify.com/apify/example-selenium",target:"_blank",rel:"noopener"},"Selenium"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://apify.com/apify/example-php",target:"_blank",rel:"noopener"},"PHP"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://apify.com/yonny/python-3-example/source-code",target:"_blank",rel:"noopener"},"Python"),".")))}f.isMDXComponent=!0}}]);