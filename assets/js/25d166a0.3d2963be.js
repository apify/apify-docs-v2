"use strict";(self.webpackChunkapify_docs_v2=self.webpackChunkapify_docs_v2||[]).push([[580],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>d});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(a),m=r,d=u["".concat(l,".").concat(m)]||u[m]||h[m]||i;return a?n.createElement(d,o(o({ref:t},c),{},{components:a})):n.createElement(d,o({ref:t},c))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},26739:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>p,toc:()=>u});var n=a(87462),r=a(63366),i=(a(67294),a(3905)),o=["components"],s={title:"V - Migrations & maintaining state",description:"Learn about what actor migrations are and how to handle them properly so that state is not lost and it can safely be resurrected.",sidebar_position:6.5,slug:"/expert-scraping-with-apify/migrations-maintaining-state"},l="[](#migrations-maintaining-state) Migrations & maintaining state",p={unversionedId:"expert_scraping_with_apify/migrations_maintaining_state",id:"expert_scraping_with_apify/migrations_maintaining_state",title:"V - Migrations & maintaining state",description:"Learn about what actor migrations are and how to handle them properly so that state is not lost and it can safely be resurrected.",source:"@site/sources/academy/expert_scraping_with_apify/migrations_maintaining_state.md",sourceDirName:"expert_scraping_with_apify",slug:"/expert-scraping-with-apify/migrations-maintaining-state",permalink:"/academy/expert-scraping-with-apify/migrations-maintaining-state",draft:!1,tags:[],version:"current",lastUpdatedBy:"Dan Nguyen",lastUpdatedAt:1672828422,formattedLastUpdatedAt:"Jan 4, 2023",sidebarPosition:6.5,frontMatter:{title:"V - Migrations & maintaining state",description:"Learn about what actor migrations are and how to handle them properly so that state is not lost and it can safely be resurrected.",sidebar_position:6.5,slug:"/expert-scraping-with-apify/migrations-maintaining-state"},sidebar:"defaultSidebar",previous:{title:"IV - Apify API & client",permalink:"/academy/expert-scraping-with-apify/apify-api-and-client"},next:{title:"VI - Bypassing anti-scraping methods",permalink:"/academy/expert-scraping-with-apify/bypassing-anti-scraping"}},c={},u=[{value:" Learning \ud83e\udde0",id:"-learning-",level:2},{value:" Knowledge check \ud83d\udcdd",id:"-knowledge-check-",level:2},{value:"Our task",id:"our-task",level:2},{value:" Next up",id:"-next-up",level:2}],h={toc:u};function m(e){var t=e.components,a=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"-migrations--maintaining-state"},(0,i.kt)("a",{parentName:"h1",href:"#migrations-maintaining-state",target:null,rel:null})," Migrations & maintaining state"),(0,i.kt)("p",null,"We already know that actors are basically just Docker containers that can be run on any server. This means that they can be allocated anywhere there is space available, making them very efficient. Unfortunately, there is one big caveat: actors move - a lot. When an actor moves, it is called a ",(0,i.kt)("strong",{parentName:"p"},"migration"),"."),(0,i.kt)("p",null,"On migration, the process inside of an actor is completely restarted and everything in its memory is lost, meaning that any values stored within variables or classes are lost."),(0,i.kt)("p",null,'When a migration happens, you want to do a so-called "state transition", which means saving any data you care about so the actor can continue right where it left off before the migration.'),(0,i.kt)("h2",{id:"-learning-"},(0,i.kt)("a",{parentName:"h2",href:"#learning",target:null,rel:null})," Learning \ud83e\udde0"),(0,i.kt)("p",null,"Read this ",(0,i.kt)("a",{parentName:"p",href:"https://docs.apify.com/actors/development/state-persistence",target:"_blank",rel:"noopener"},"article")," on migrations and dealing with state transitions."),(0,i.kt)("p",null,"Before moving forward, read about actor ",(0,i.kt)("a",{parentName:"p",href:"https://sdk.apify.com/docs/api/apify#apifyevents",target:null,rel:null},"events")," and how to listen for them."),(0,i.kt)("h2",{id:"-knowledge-check-"},(0,i.kt)("a",{parentName:"h2",href:"#quiz",target:null,rel:null})," Knowledge check \ud83d\udcdd"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Actors have an option the ",(0,i.kt)("strong",{parentName:"li"},"Settings")," tab to ",(0,i.kt)("strong",{parentName:"li"},"Restart on error"),". Would you use this feature for regular actors? When would you use this feature?"),(0,i.kt)("li",{parentName:"ol"},"Migrations happen randomly, but by ",(0,i.kt)("a",{parentName:"li",href:"https://docs.apify.com/actors/running#aborting-runs",target:"_blank",rel:"noopener"},"aborting ",(0,i.kt)("strong",{parentName:"a"},"gracefully")),", you can simulate a similar situation. Try this out on the platform and observe what happens. What changes occur, and what remains the same for the restarted actor's run?"),(0,i.kt)("li",{parentName:"ol"},"Why don't you (usually) need to add any special migration handling code for a standard crawling/scraping actor? Are there any features in the Crawlee/Apify SDK that handle this under the hood?"),(0,i.kt)("li",{parentName:"ol"},"How can you intercept the migration event? How much time do you have after this event happens and before the actor migrates?"),(0,i.kt)("li",{parentName:"ol"},"When would you persist data to the default key-value store instead of to a named key-value store?")),(0,i.kt)("h2",{id:"our-task"},"Our task"),(0,i.kt)("p",null,"Once again returning to our Amazon ",(0,i.kt)("strong",{parentName:"p"},"demo-actor"),", let's say that we need to store an object in memory (as a variable) containing all of the scraped ASINs as keys and the number of offers scraped from each ASIN as values. The object should follow this format:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "B079ZJ1BPR": 3,\n    "B07D4R4258": 21\n}\n')),(0,i.kt)("p",null,"Every 10 seconds, we should log the most up-to-date version of this object to the console. Additionally, the object should be able to solve actor migrations, which means that even if the actor were to migrate, its data would not be lost upon resurrection."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/academy/expert-scraping-with-apify/solutions/handling-migrations",target:null,rel:null},(0,i.kt)("strong",{parentName:"a"},"Solution"))),(0,i.kt)("h2",{id:"-next-up"},(0,i.kt)("a",{parentName:"h2",href:"#next",target:null,rel:null})," Next up"),(0,i.kt)("p",null,"You might have already noticed that we've been using the ",(0,i.kt)("strong",{parentName:"p"},"RESIDENTIAL")," proxy group in the ",(0,i.kt)("inlineCode",{parentName:"p"},"proxyConfiguration")," within our Amazon scraping actor. But what does that mean? Learn why we've used this group, about proxies, and about avoiding anti-scraping measures in the ",(0,i.kt)("a",{parentName:"p",href:"/academy/expert-scraping-with-apify/bypassing-anti-scraping",target:null,rel:null},"next lesson"),"."))}m.isMDXComponent=!0}}]);