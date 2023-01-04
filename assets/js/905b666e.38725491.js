"use strict";(self.webpackChunkapify_docs_v2=self.webpackChunkapify_docs_v2||[]).push([[4296],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(r),f=n,d=u["".concat(s,".").concat(f)]||u[f]||h[f]||o;return r?a.createElement(d,i(i({ref:t},c),{},{components:r})):a.createElement(d,i({ref:t},c))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:n,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},27362:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>f,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var a=r(87462),n=r(63366),o=(r(67294),r(3905)),i=["components"],l={title:"Expert scraping with Apify",description:"After learning the basics of actors and Apify, learn to develop pro-level scrapers on the Apify platform with this advanced course.",sidebar_position:12,category:"apify platform",slug:"/expert-scraping-with-apify"},s="[](#expert-scraping) Expert scraping with Apify",p={unversionedId:"expert_scraping_with_apify/index",id:"expert_scraping_with_apify/index",title:"Expert scraping with Apify",description:"After learning the basics of actors and Apify, learn to develop pro-level scrapers on the Apify platform with this advanced course.",source:"@site/sources/academy/expert_scraping_with_apify/index.md",sourceDirName:"expert_scraping_with_apify",slug:"/expert-scraping-with-apify",permalink:"/academy/expert-scraping-with-apify",draft:!1,tags:[],version:"current",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1672838848,formattedLastUpdatedAt:"Jan 4, 2023",sidebarPosition:12,frontMatter:{title:"Expert scraping with Apify",description:"After learning the basics of actors and Apify, learn to develop pro-level scrapers on the Apify platform with this advanced course.",sidebar_position:12,category:"apify platform",slug:"/expert-scraping-with-apify"},sidebar:"defaultSidebar",previous:{title:"Running a web server on the Apify platform",permalink:"/academy/running-a-web-server"},next:{title:"I - Webhooks & advanced actor overview",permalink:"/academy/expert-scraping-with-apify/actors-webhooks"}},c={},u=[{value:" Preparations",id:"-preparations",level:2},{value:" Crawlee, Apify SDK, and the Apify CLI",id:"-crawlee-apify-sdk-and-the-apify-cli",level:3},{value:" Git",id:"-git",level:3},{value:" Docker",id:"-docker",level:3},{value:" The basics of actors",id:"-the-basics-of-actors",level:3},{value:" First up",id:"-first-up",level:2}],h={toc:u};function f(e){var t=e.components,r=(0,n.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"-expert-scraping-with-apify"},(0,o.kt)("a",{parentName:"h1",href:"#expert-scraping",target:null,rel:null})," Expert scraping with Apify"),(0,o.kt)("p",null,"This course will teach you the nitty gritty of what it takes to build pro-level scrapers with Apify. We recommend that you've at least looked through all of the other courses in the academy prior to taking this one on."),(0,o.kt)("h2",{id:"-preparations"},(0,o.kt)("a",{parentName:"h2",href:"#preparations",target:null,rel:null})," Preparations"),(0,o.kt)("p",null,"Before developing a pro-level Apify scraper, there are some important things you should have at least a bit of knowledge about (knowing the basics of each is enough to continue through this section), as well as some things that you should have installed on your system."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"If you've already gone through the ",(0,o.kt)("a",{parentName:"p",href:"/academy/web-scraping-for-beginners",target:null,rel:null},"Web scraping for beginners course"),", you will be more than well equipped to continue on with the lessons in this course.")),(0,o.kt)("h3",{id:"-crawlee-apify-sdk-and-the-apify-cli"},(0,o.kt)("a",{parentName:"h3",href:"#crawlee-apify-sdk-and-cli",target:null,rel:null})," Crawlee, Apify SDK, and the Apify CLI"),(0,o.kt)("p",null,"If you're feeling ambitious, you don't need to have any prior experience with Crawlee to get started with this course; however, at least 5-10 minutes of exposure is recommended. If you haven't yet tried out Crawlee, you can refer to ",(0,o.kt)("a",{parentName:"p",href:"/academy/web-scraping-for-beginners/crawling/pro-scraping",target:null,rel:null},"this lesson")," category."),(0,o.kt)("p",null,"The Apify CLI will play a core role in the running and testing of the actor you will build, so if you haven't gotten it installed already, please refer to ",(0,o.kt)("a",{parentName:"p",href:"/academy/tools/apify-cli",target:null,rel:null},"this short lesson"),"."),(0,o.kt)("h3",{id:"-git"},(0,o.kt)("a",{parentName:"h3",href:"#git",target:null,rel:null})," Git"),(0,o.kt)("p",null,"In one of the later lessons, we'll be learning how to integrate our actor on the Apify platform with a Github repository. For this, you'll need to understand at least the basics of ",(0,o.kt)("a",{parentName:"p",href:"https://git-scm.com/docs",target:"_blank",rel:"noopener"},"Git"),". Here's a ",(0,o.kt)("a",{parentName:"p",href:"https://product.hubspot.com/blog/git-and-github-tutorial-for-beginners",target:"_blank",rel:"noopener"},"great tutorial")," to help you get started with Git."),(0,o.kt)("h3",{id:"-docker"},(0,o.kt)("a",{parentName:"h3",href:"#docker",target:null,rel:null})," Docker"),(0,o.kt)("p",null,"Docker is a massive topic on its own, but don't be worried! We only expect you to know and understand the very basics of it, which can be learned about in ",(0,o.kt)("a",{parentName:"p",href:"https://docs.docker.com/get-started/overview/",target:"_blank",rel:"noopener"},"this short article")," (10 minute read)."),(0,o.kt)("h3",{id:"-the-basics-of-actors"},(0,o.kt)("a",{parentName:"h3",href:"#actor-basics",target:null,rel:null})," The basics of actors"),(0,o.kt)("p",null,"Part of this course will be learning more in-depth about actors; however, some basic knowledge is already assumed. If you haven't yet gone through the ",(0,o.kt)("a",{parentName:"p",href:"/academy/getting-started/actors",target:null,rel:null},"actors")," lesson of the ",(0,o.kt)("strong",{parentName:"p"},"Apify platform")," course, it's highly recommended to at least give it a glance before moving forward."),(0,o.kt)("h2",{id:"-first-up"},(0,o.kt)("a",{parentName:"h2",href:"#first",target:null,rel:null})," First up"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/academy/expert-scraping-with-apify/actors-webhooks",target:null,rel:null},"First up"),", we'll be learning in-depth about integrating actors with each other using webhooks."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Each lesson will have a short ",(0,o.kt)("em",{parentName:"p"},"(and optional)")," quiz that you can take at home to test your skills and knowledge related to the lesson's content. Some questions have straight factual answers, but some others can have varying opinionated answers.")))}f.isMDXComponent=!0}}]);