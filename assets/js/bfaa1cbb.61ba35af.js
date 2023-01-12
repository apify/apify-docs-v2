"use strict";(self.webpackChunkapify_docs_v2=self.webpackChunkapify_docs_v2||[]).push([[9698],{3905:(t,e,r)=>{r.d(e,{Zo:()=>p,kt:()=>d});var a=r(67294);function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function n(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function s(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?n(Object(r),!0).forEach((function(e){o(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e){if(null==t)return{};var r,a,o=function(t,e){if(null==t)return{};var r,a,o={},n=Object.keys(t);for(a=0;a<n.length;a++)r=n[a],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);for(a=0;a<n.length;a++)r=n[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}var c=a.createContext({}),l=function(t){var e=a.useContext(c),r=e;return t&&(r="function"==typeof t?t(e):s(s({},e),t)),r},p=function(t){var e=l(t.components);return a.createElement(c.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},h=a.forwardRef((function(t,e){var r=t.components,o=t.mdxType,n=t.originalType,c=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),h=l(r),d=o,f=h["".concat(c,".").concat(d)]||h[d]||u[d]||n;return r?a.createElement(f,s(s({ref:e},p),{},{components:r})):a.createElement(f,s({ref:e},p))}));function d(t,e){var r=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var n=r.length,s=new Array(n);s[0]=h;var i={};for(var c in e)hasOwnProperty.call(e,c)&&(i[c]=e[c]);i.originalType=t,i.mdxType="string"==typeof t?t:o,s[1]=i;for(var l=2;l<n;l++)s[l]=r[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},58560:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>p,contentTitle:()=>c,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var a=r(87462),o=r(63366),n=(r(67294),r(3905)),s=["components"],i={title:"Actors",description:"What is an actor? How do we create them? Learn the basics of what actors are, how they work, and try out an actor yourself right on the Apify platform!",sidebar_position:1,slug:"/getting-started/actors"},c="Actors",l={unversionedId:"platform/getting_started/actors",id:"platform/getting_started/actors",title:"Actors",description:"What is an actor? How do we create them? Learn the basics of what actors are, how they work, and try out an actor yourself right on the Apify platform!",source:"@site/sources/academy/platform/getting_started/actors.md",sourceDirName:"platform/getting_started",slug:"/getting-started/actors",permalink:"/academy/getting-started/actors",draft:!1,tags:[],version:"current",lastUpdatedBy:"Jind\u0159ich B\xe4r",lastUpdatedAt:1673533984,formattedLastUpdatedAt:"Jan 12, 2023",sidebarPosition:1,frontMatter:{title:"Actors",description:"What is an actor? How do we create them? Learn the basics of what actors are, how they work, and try out an actor yourself right on the Apify platform!",sidebar_position:1,slug:"/getting-started/actors"},sidebar:"academy",previous:{title:"Getting started",permalink:"/academy/getting-started"},next:{title:"Creating actors",permalink:"/academy/getting-started/creating-actors"}},p={},u=[{value:"What&#39;s an actor?",id:"what-is-an-actor",level:2},{value:"Actors on the Apify platform",id:"actors-on-platform",level:2},{value:"The &quot;Actors&quot; tab",id:"actors-tab",level:2},{value:"Next up",id:"next",level:2}],h={toc:u};function d(t){var e=t.components,i=(0,o.Z)(t,s);return(0,n.kt)("wrapper",(0,a.Z)({},h,i,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"actors"},"Actors"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"What is an actor? How do we create them? Learn the basics of what actors are, how they work, and try out an actor yourself right on the Apify platform!")),(0,n.kt)("hr",null),(0,n.kt)("p",null,"After you've followed the ",(0,n.kt)("strong",{parentName:"p"},"Getting started")," lesson, you're almost ready to start creating some actors! But before we get into that, let's discuss what an actor is, and a bit about how they work."),(0,n.kt)("h2",{id:"what-is-an-actor"},"What's an actor?"),(0,n.kt)("p",null,"When you deploy your script to the Apify platform, it is then called an ",(0,n.kt)("strong",{parentName:"p"},"actor"),", which is simply a ",(0,n.kt)("a",{parentName:"p",href:"https://www.datadoghq.com/knowledge-center/serverless-architecture/serverless-microservices/#:~:text=Serverless%20microservices%20are%20cloud-based,suited%20for%20microservice-based%20architectures.",target:"_blank",rel:"noopener"},"serverless microservice")," that accepts an input and produces an output. Actors can run for a few seconds, hours or even infinitely. An actor can perform anything from a simple action such as filling out a web form or sending an email, to complex operations such as crawling an entire website and removing duplicates from a large dataset."),(0,n.kt)("p",null,"Once an actor has been pushed to the Apify platform, they can be shared to the world through the ",(0,n.kt)("a",{parentName:"p",href:"https://apify.com/store",target:"_blank",rel:"noopener"},"Apify Store"),", and even monetized after going public."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Though the majority of actors that are currently on the Apify platform are scrapers, crawlers, or automation software, actors are not limited to just scraping. They are just pieces of code running in Docker containers, which means they can be used for nearly anything.")),(0,n.kt)("h2",{id:"actors-on-platform"},"Actors on the Apify platform"),(0,n.kt)("p",null,"For a super quick and dirty understanding of what a published actor looks like, and how it works, let's run an SEO audit of ",(0,n.kt)("strong",{parentName:"p"},"apify.com")," using the ",(0,n.kt)("a",{parentName:"p",href:"https://apify.com/drobnikj/seo-audit-tool",target:"_blank",rel:"noopener"},"SEO audit actor"),"."),(0,n.kt)("p",null,"On the front page of the actor, click the green ",(0,n.kt)("strong",{parentName:"p"},"Try for free")," button. If you're logged into your Apify account which you created during the ",(0,n.kt)("a",{parentName:"p",href:"/academy/getting-started",target:null,rel:null},(0,n.kt)("strong",{parentName:"a"},"Getting started"))," lesson, you'll be taken to the Apify Console and greeted with a page that looks like this:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Actor configuration",src:r(62707).Z,width:"1676",height:"1546"})),(0,n.kt)("p",null,"This is where we can provide input to the actor. The defaults here are just fine, so we'll just leave it as is and click the green ",(0,n.kt)("strong",{parentName:"p"},"Start")," button to run it. While the actor is running, you'll see it log some information about itself."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Actor logs",src:r(42397).Z,width:"1412",height:"1189"})),(0,n.kt)("p",null,"After the actor has completed its run (you'll know this when you see ",(0,n.kt)("strong",{parentName:"p"},"SEO audit for apify.com finished.")," in the logs), the results of the run can be viewed by clicking the ",(0,n.kt)("strong",{parentName:"p"},"Results")," tab, then subsequently the ",(0,n.kt)("strong",{parentName:"p"},"View in another tab")," option under ",(0,n.kt)("strong",{parentName:"p"},"Export"),"."),(0,n.kt)("h2",{id:"actors-tab"},'The "Actors" tab'),(0,n.kt)("p",null,"While still on the platform, click on the tab with the ",(0,n.kt)("strong",{parentName:"p"},"< >")," icon which says ",(0,n.kt)("strong",{parentName:"p"},"Actors"),". This tab is your one-stop-shop for seeing which actors you've used recently, and which ones you've developed yourself. You will be frequently using this tab when developing and testing on the Apify platform."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"The &quot;Actors&quot; tab on the Apify platform",src:r(3291).Z,width:"2286",height:"858"})),(0,n.kt)("p",null,"Now that you know the basics of what actors are and how to use them, it's time to develop ",(0,n.kt)("strong",{parentName:"p"},"an actor of your own"),"!"),(0,n.kt)("h2",{id:"next"},"Next up"),(0,n.kt)("p",null,"Get ready, because in the ",(0,n.kt)("a",{parentName:"p",href:"/academy/getting-started/creating-actors",target:null,rel:null},"next lesson"),", you'll be writing your very own actor!"))}d.isMDXComponent=!0},42397:(t,e,r)=>{r.d(e,{Z:()=>a});const a=r.p+"assets/images/actor-logs-12cdeda815a524e8e990e1bf0e8eaed4.webp"},3291:(t,e,r)=>{r.d(e,{Z:()=>a});const a=r.p+"assets/images/actors-tab-345ca1b8a0cd26bcb6c6f6efa9415e88.webp"},62707:(t,e,r)=>{r.d(e,{Z:()=>a});const a=r.p+"assets/images/seo-actor-config-d8859482c4e965e432f37cfdb600fe8f.webp"}}]);