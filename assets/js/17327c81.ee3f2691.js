"use strict";(self.webpackChunkapify_docs_v2=self.webpackChunkapify_docs_v2||[]).push([[794],{3905:(t,e,a)=>{a.d(e,{Zo:()=>c,kt:()=>d});var r=a(67294);function o(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function n(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?n(Object(a),!0).forEach((function(e){o(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,r,o=function(t,e){if(null==t)return{};var a,r,o={},n=Object.keys(t);for(r=0;r<n.length;r++)a=n[r],e.indexOf(a)>=0||(o[a]=t[a]);return o}(t,e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);for(r=0;r<n.length;r++)a=n[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(o[a]=t[a])}return o}var p=r.createContext({}),s=function(t){var e=r.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},c=function(t){var e=s(t.components);return r.createElement(p.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var a=t.components,o=t.mdxType,n=t.originalType,p=t.parentName,c=l(t,["components","mdxType","originalType","parentName"]),m=s(a),d=o,f=m["".concat(p,".").concat(d)]||m[d]||u[d]||n;return a?r.createElement(f,i(i({ref:e},c),{},{components:a})):r.createElement(f,i({ref:e},c))}));function d(t,e){var a=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var n=a.length,i=new Array(n);i[0]=m;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=t,l.mdxType="string"==typeof t?t:o,i[1]=l;for(var s=2;s<n;s++)i[s]=a[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},24303:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>c,contentTitle:()=>p,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>u});var r=a(87462),o=a(63366),n=(a(67294),a(3905)),i=["components"],l={title:"Building public actors",description:"Learn about the flow for building, publishing, and maintaining public actors that on the Apify platform. Also learn about how to monetize your actors.",sidebar_position:3.3,slug:"/tutorials/building-public-actors"},p="Building public actors",s={unversionedId:"tutorials/building_public_actors",id:"tutorials/building_public_actors",title:"Building public actors",description:"Learn about the flow for building, publishing, and maintaining public actors that on the Apify platform. Also learn about how to monetize your actors.",source:"@site/sources/platform/tutorials/building_public_actors.md",sourceDirName:"tutorials",slug:"/tutorials/building-public-actors",permalink:"/platform/tutorials/building-public-actors",draft:!1,tags:[],version:"current",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1675164026,formattedLastUpdatedAt:"Jan 31, 2023",sidebarPosition:3.3,frontMatter:{title:"Building public actors",description:"Learn about the flow for building, publishing, and maintaining public actors that on the Apify platform. Also learn about how to monetize your actors.",sidebar_position:3.3,slug:"/tutorials/building-public-actors"},sidebar:"docs",previous:{title:"Scraping with Puppeteer Scraper",permalink:"/platform/tutorials/apify-scrapers/puppeteer-scraper"},next:{title:"Scraping dynamic content",permalink:"/platform/tutorials/scraping-dynamic-content"}},c={},u=[{value:"Inspiration",id:"inspiration",level:2},{value:"Paid actors",id:"paid-actors",level:2}],m={toc:u};function d(t){var e=t.components,a=(0,o.Z)(t,i);return(0,n.kt)("wrapper",(0,r.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"building-public-actors"},"Building public actors"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Learn about the flow for building, publishing, and maintaining public actors that on the Apify platform. Also learn about how to monetize your actors.")),(0,n.kt)("hr",null),(0,n.kt)("p",null,"There are four main stages of building a public actor:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"/platform/actors/development",target:null,rel:null},"Development"),"."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"/platform/actors/publishing",target:null,rel:null},"Publication"),"."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"/platform/actors/development/testing-and-maintenance",target:null,rel:null},"Testing and maintenance"),"."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"/academy/get-most-of-actors/seo-and-promotion",target:null,rel:null},"Promotion"),".")),(0,n.kt)("p",null,"While you don't have to maintain private actors, public actors are a more long-term project. Be prepared to stick with the project for at least a few months. Ensure you have enough time to maintain the project (~2 hours weekly). With this perspective, you will be able to monetize and promote your actors better."),(0,n.kt)("p",null,"If your code is publicly available on ",(0,n.kt)("a",{parentName:"p",href:"https://github.com",target:"_blank",rel:"noopener"},"GitHub"),", its quality is a priority since your actors may be a new user's first and critical contact with Apify. Code should be open to changes and updates \u2013 don't fear to refactor. Beware of breaking changes, though! If you do a breaking change, communicate it to all existing users with an explanation."),(0,n.kt)("p",null,"Documentation is vital (your actor's README). It should be clear, detailed, and readable. Think of the users, who might not be developers, so use simple, easy-to-understand language and avoid technical jargon."),(0,n.kt)("p",null,"Ensure periodic testing. You can either do it yourself or ",(0,n.kt)("a",{parentName:"p",href:"/platform/actors/development/testing-and-maintenance",target:null,rel:null},"set up automatic tests")," / ",(0,n.kt)("a",{parentName:"p",href:"https://apify.com/apify/monitoring",target:"_blank",rel:"noopener"},"monitoring"),". Try to prevent your users from coming to you with the issues."),(0,n.kt)("h2",{id:"inspiration"},"Inspiration"),(0,n.kt)("p",null,"To come up with ideas for new actors, you can use your own experience with friends, colleagues, customers. Alternatively, you can use SEO tools that might help you find the right search terms, websites related to web scraping, web automation, or web integrations. See the ",(0,n.kt)("a",{parentName:"p",href:"/academy/get-most-of-actors/seo-and-promotion",target:null,rel:null},"SEO article")," for more details. Finally, you may take a look at our ",(0,n.kt)("a",{parentName:"p",href:"https://apify.com/ideas",target:"_blank",rel:"noopener"},"actor ideas page")," to find out which actors are most in demand by the Apify community."),(0,n.kt)("p",null,"To better understand the context and practical usage of public actors, ",(0,n.kt)("a",{parentName:"p",href:"https://blog.apify.com/",target:"_blank",rel:"noopener"},"check out our blog"),". Get familiar with how we think and write about actors, e.g. ",(0,n.kt)("a",{parentName:"p",href:"https://blog.apify.com/how-to-set-up-a-content-change-watchdog-for-any-website-in-5-minutes-460843b12271",target:"_blank",rel:"noopener"},"Content Checker")," (short), ",(0,n.kt)("a",{parentName:"p",href:"https://blog.apify.com/kickstarter-search-actor-create-your-own-kickstarter-api-7672acdb8d77",target:"_blank",rel:"noopener"},"Kickstarter scraper")," (mid-size), and ",(0,n.kt)("a",{parentName:"p",href:"https://blog.apify.com/import-data-easily-to-and-from-google-sheets-with-a-new-apify-actor-43536b719029",target:"_blank",rel:"noopener"},"Google Sheets actor")," (long one)."),(0,n.kt)("h2",{id:"paid-actors"},"Paid actors"),(0,n.kt)("p",null,"You can now make money from your actors. Our ",(0,n.kt)("a",{parentName:"p",href:"https://blog.apify.com/make-regular-passive-income-developing-web-automation-actors-b0392278d085/",target:"_blank",rel:"noopener"},"blog post")," contains all the information you need."))}d.isMDXComponent=!0}}]);