"use strict";(self.webpackChunkapify_docs_v2=self.webpackChunkapify_docs_v2||[]).push([[794],{3905:(t,e,r)=>{r.d(e,{Zo:()=>c,kt:()=>d});var a=r(67294);function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function n(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?n(Object(r),!0).forEach((function(e){o(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e){if(null==t)return{};var r,a,o=function(t,e){if(null==t)return{};var r,a,o={},n=Object.keys(t);for(a=0;a<n.length;a++)r=n[a],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);for(a=0;a<n.length;a++)r=n[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}var s=a.createContext({}),p=function(t){var e=a.useContext(s),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},c=function(t){var e=p(t.components);return a.createElement(s.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var r=t.components,o=t.mdxType,n=t.originalType,s=t.parentName,c=l(t,["components","mdxType","originalType","parentName"]),m=p(r),d=o,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||n;return r?a.createElement(f,i(i({ref:e},c),{},{components:r})):a.createElement(f,i({ref:e},c))}));function d(t,e){var r=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var n=r.length,i=new Array(n);i[0]=m;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l.mdxType="string"==typeof t?t:o,i[1]=l;for(var p=2;p<n;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},24303:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var a=r(87462),o=r(63366),n=(r(67294),r(3905)),i=["components"],l={title:"Building public actors",description:"Learn about the flow for building, publishing, and maintaining public actors that on the Apify platform. Also learn about how to monetize your actors.",sidebar_position:3.3,slug:"/tutorials/building-public-actors"},s="Building public actors",p={unversionedId:"tutorials/building_public_actors",id:"tutorials/building_public_actors",title:"Building public actors",description:"Learn about the flow for building, publishing, and maintaining public actors that on the Apify platform. Also learn about how to monetize your actors.",source:"@site/sources/platform/tutorials/building_public_actors.md",sourceDirName:"tutorials",slug:"/tutorials/building-public-actors",permalink:"/platform/tutorials/building-public-actors",draft:!1,editUrl:"https://github.com/apify/apify-docs-v2/edit/master/sources/platform/tutorials/building_public_actors.md",tags:[],version:"current",lastUpdatedBy:"Marek Trunk\xe1t",lastUpdatedAt:1677490714,formattedLastUpdatedAt:"Feb 27, 2023",sidebarPosition:3.3,frontMatter:{title:"Building public actors",description:"Learn about the flow for building, publishing, and maintaining public actors that on the Apify platform. Also learn about how to monetize your actors.",sidebar_position:3.3,slug:"/tutorials/building-public-actors"},sidebar:"docs",previous:{title:"Scraping with Puppeteer Scraper",permalink:"/platform/tutorials/apify-scrapers/puppeteer-scraper"},next:{title:"Log in by transferring cookies",permalink:"/platform/tutorials/log-in-by-transferring-cookies"}},c={},u=[{value:"Inspiration",id:"inspiration",level:2},{value:"Paid actors",id:"paid-actors",level:2}],m={toc:u};function d(t){var e=t.components,r=(0,o.Z)(t,i);return(0,n.kt)("wrapper",(0,a.Z)({},m,r,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"building-public-actors"},"Building public actors"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Learn about the flow for building, publishing, and maintaining public actors that on the Apify platform. Also learn about how to monetize your actors.")),(0,n.kt)("hr",null),(0,n.kt)("p",null,"There are four main stages of building a public actor:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"/platform/actors/development",target:null,rel:null},"Development"),"."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"/platform/actors/publishing",target:null,rel:null},"Publication"),"."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"/platform/actors/development/testing-and-maintenance",target:null,rel:null},"Testing and maintenance"),"."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"/academy/get-most-of-actors/seo-and-promotion",target:null,rel:null},"Promotion"),".")),(0,n.kt)("p",null,"While you don't have to maintain private actors, public actors are a more long-term project. Be prepared to stick with the project for at least a few months. Ensure you have enough time to maintain the project (~2 hours weekly). With this perspective, you will be able to monetize and promote your actors better."),(0,n.kt)("p",null,"If your code is publicly available on ",(0,n.kt)("a",{parentName:"p",href:"https://github.com",target:"_blank",rel:"noopener"},"GitHub"),", its quality is a priority since your actors may be a new user's first and critical contact with Apify. Code should be open to changes and updates \u2013 don't fear to refactor. Beware of breaking changes, though! If you do a breaking change, communicate it to all existing users with an explanation."),(0,n.kt)("p",null,"Documentation is vital (your actor's README). It should be clear, detailed, and readable. Think of the users, who might not be developers, so use simple, easy-to-understand language and avoid technical jargon."),(0,n.kt)("p",null,"Ensure periodic testing. You can either do it yourself or ",(0,n.kt)("a",{parentName:"p",href:"/platform/actors/development/testing-and-maintenance",target:null,rel:null},"set up automatic tests")," / ",(0,n.kt)("a",{parentName:"p",href:"https://apify.com/apify/monitoring",target:"_blank",rel:"noopener"},"monitoring"),". Try to prevent your users from coming to you with the issues."),(0,n.kt)("h2",{id:"inspiration"},"Inspiration"),(0,n.kt)("p",null,"To come up with ideas for new actors, you can use your own experience with friends, colleagues, customers. Alternatively, you can use SEO tools that might help you find the right search terms, websites related to web scraping, web automation, or web integrations. See the ",(0,n.kt)("a",{parentName:"p",href:"/academy/get-most-of-actors/seo-and-promotion",target:null,rel:null},"SEO article")," for more details. Finally, you may take a look at our ",(0,n.kt)("a",{parentName:"p",href:"https://apify.com/ideas",target:"_blank",rel:"noopener"},"actor ideas page")," to find out which actors are most in demand by the Apify community."),(0,n.kt)("p",null,"To better understand the context and practical usage of public actors, ",(0,n.kt)("a",{parentName:"p",href:"https://blog.apify.com/",target:"_blank",rel:"noopener"},"check out our blog"),". Get familiar with how we think and write about actors, e.g. ",(0,n.kt)("a",{parentName:"p",href:"https://blog.apify.com/how-to-set-up-a-content-change-watchdog-for-any-website-in-5-minutes-460843b12271",target:"_blank",rel:"noopener"},"Content Checker")," (short), ",(0,n.kt)("a",{parentName:"p",href:"https://blog.apify.com/kickstarter-search-actor-create-your-own-kickstarter-api-7672acdb8d77",target:"_blank",rel:"noopener"},"Kickstarter scraper")," (mid-size), and ",(0,n.kt)("a",{parentName:"p",href:"https://blog.apify.com/import-data-easily-to-and-from-google-sheets-with-a-new-apify-actor-43536b719029",target:"_blank",rel:"noopener"},"Google Sheets actor")," (long one)."),(0,n.kt)("h2",{id:"paid-actors"},"Paid actors"),(0,n.kt)("p",null,"You can now make money from your actors. Our ",(0,n.kt)("a",{parentName:"p",href:"https://blog.apify.com/make-regular-passive-income-developing-web-automation-actors-b0392278d085/",target:"_blank",rel:"noopener"},"blog post")," contains all the information you need."))}d.isMDXComponent=!0}}]);