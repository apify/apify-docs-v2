"use strict";(self.webpackChunkapify_docs_v2=self.webpackChunkapify_docs_v2||[]).push([[701],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var a=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),h=p(r),f=o,d=h["".concat(s,".").concat(f)]||h[f]||u[f]||n;return r?a.createElement(d,i(i({ref:t},c),{},{components:r})):a.createElement(d,i({ref:t},c))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,i=new Array(n);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<n;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},93036:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>f,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var a=r(87462),o=r(63366),n=(r(67294),r(3905)),i=["components"],l={title:"Expert scraping with Apify",description:"After learning the basics of actors and Apify, learn to develop pro-level scrapers on the Apify platform with this advanced course.",sidebar_position:12,category:"apify platform",slug:"/expert-scraping-with-apify"},s="Expert scraping with Apify",p={unversionedId:"platform/expert_scraping_with_apify/index",id:"platform/expert_scraping_with_apify/index",title:"Expert scraping with Apify",description:"After learning the basics of actors and Apify, learn to develop pro-level scrapers on the Apify platform with this advanced course.",source:"@site/sources/academy/platform/expert_scraping_with_apify/index.md",sourceDirName:"platform/expert_scraping_with_apify",slug:"/expert-scraping-with-apify",permalink:"/academy/expert-scraping-with-apify",draft:!1,editUrl:"https://github.com/apify/apify-docs-v2/edit/master/sources/academy/platform/expert_scraping_with_apify/index.md",tags:[],version:"current",lastUpdatedBy:"Jind\u0159ich B\xe4r",lastUpdatedAt:1675952046,formattedLastUpdatedAt:"Feb 9, 2023",sidebarPosition:12,frontMatter:{title:"Expert scraping with Apify",description:"After learning the basics of actors and Apify, learn to develop pro-level scrapers on the Apify platform with this advanced course.",sidebar_position:12,category:"apify platform",slug:"/expert-scraping-with-apify"},sidebar:"academy",previous:{title:"Running a web server on the Apify platform",permalink:"/academy/running-a-web-server"},next:{title:"I - Webhooks & advanced actor overview",permalink:"/academy/expert-scraping-with-apify/actors-webhooks"}},c={},u=[{value:"Preparations",id:"preparations",level:2},{value:"Crawlee, Apify SDK, and the Apify CLI",id:"crawlee-apify-sdk-and-cli",level:3},{value:"Git",id:"git",level:3},{value:"Docker",id:"docker",level:3},{value:"The basics of actors",id:"actor-basics",level:3},{value:"First up",id:"first",level:2}],h={toc:u};function f(e){var t=e.components,r=(0,o.Z)(e,i);return(0,n.kt)("wrapper",(0,a.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"expert-scraping"},"Expert scraping with Apify"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"After learning the basics of actors and Apify, learn to develop pro-level scrapers on the Apify platform with this advanced course.")),(0,n.kt)("hr",null),(0,n.kt)("p",null,"This course will teach you the nitty gritty of what it takes to build pro-level scrapers with Apify. We recommend that you've at least looked through all of the other courses in the academy prior to taking this one on."),(0,n.kt)("h2",{id:"preparations"},"Preparations"),(0,n.kt)("p",null,"Before developing a pro-level Apify scraper, there are some important things you should have at least a bit of knowledge about (knowing the basics of each is enough to continue through this section), as well as some things that you should have installed on your system."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"If you've already gone through the ",(0,n.kt)("a",{parentName:"p",href:"/academy/web-scraping-for-beginners",target:null,rel:null},"Web scraping for beginners course")," and the first courses of the ",(0,n.kt)("a",{parentName:"p",href:"/academy/apify-platform",target:null,rel:null},"Apify platform category"),", you will be more than well equipped to continue on with the lessons in this course.")),(0,n.kt)("h3",{id:"crawlee-apify-sdk-and-cli"},"Crawlee, Apify SDK, and the Apify CLI"),(0,n.kt)("p",null,"If you're feeling ambitious, you don't need to have any prior experience with Crawlee to get started with this course; however, at least 5-10 minutes of exposure is recommended. If you haven't yet tried out Crawlee, you can refer to ",(0,n.kt)("a",{parentName:"p",href:"/academy/web-scraping-for-beginners/crawling/pro-scraping",target:null,rel:null},"this lesson")," in the ",(0,n.kt)("strong",{parentName:"p"},"Web scraping for beginners")," course (and ideally follow along). To familiarize with the Apify SDK,you can refer to the ",(0,n.kt)("a",{parentName:"p",href:"/academy/apify-platform",target:null,rel:null},"Apify Platform")," category."),(0,n.kt)("p",null,"The Apify CLI will play a core role in the running and testing of the actor you will build, so if you haven't gotten it installed already, please refer to ",(0,n.kt)("a",{parentName:"p",href:"/academy/tools/apify-cli",target:null,rel:null},"this short lesson"),"."),(0,n.kt)("h3",{id:"git"},"Git"),(0,n.kt)("p",null,"In one of the later lessons, we'll be learning how to integrate our actor on the Apify platform with a Github repository. For this, you'll need to understand at least the basics of ",(0,n.kt)("a",{parentName:"p",href:"https://git-scm.com/docs",target:"_blank",rel:"noopener"},"Git"),". Here's a ",(0,n.kt)("a",{parentName:"p",href:"https://product.hubspot.com/blog/git-and-github-tutorial-for-beginners",target:"_blank",rel:"noopener"},"great tutorial")," to help you get started with Git."),(0,n.kt)("h3",{id:"docker"},"Docker"),(0,n.kt)("p",null,"Docker is a massive topic on its own, but don't be worried! We only expect you to know and understand the very basics of it, which can be learned about in ",(0,n.kt)("a",{parentName:"p",href:"https://docs.docker.com/get-started/overview/",target:"_blank",rel:"noopener"},"this short article")," (10 minute read)."),(0,n.kt)("h3",{id:"actor-basics"},"The basics of actors"),(0,n.kt)("p",null,"Part of this course will be learning more in-depth about actors; however, some basic knowledge is already assumed. If you haven't yet gone through the ",(0,n.kt)("a",{parentName:"p",href:"/academy/getting-started/actors",target:null,rel:null},"actors")," lesson of the ",(0,n.kt)("strong",{parentName:"p"},"Apify platform")," course, it's highly recommended to at least give it a glance before moving forward."),(0,n.kt)("h2",{id:"first"},"First up"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/academy/expert-scraping-with-apify/actors-webhooks",target:null,rel:null},"First up"),", we'll be learning in-depth about integrating actors with each other using webhooks."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Each lesson will have a short ",(0,n.kt)("em",{parentName:"p"},"(and optional)")," quiz that you can take at home to test your skills and knowledge related to the lesson's content. Some questions have straight factual answers, but some others can have varying opinionated answers.")))}f.isMDXComponent=!0}}]);