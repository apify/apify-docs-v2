"use strict";(self.webpackChunkapify_docs_v2=self.webpackChunkapify_docs_v2||[]).push([[4619],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),p=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=p(r),d=n,h=m["".concat(l,".").concat(d)]||m[d]||u[d]||o;return r?a.createElement(h,s(s({ref:t},c),{},{components:r})):a.createElement(h,s({ref:t},c))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,s=new Array(o);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var p=2;p<o;p++)s[p]=r[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},15656:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>p,toc:()=>u});var a=r(87462),n=r(63366),o=(r(67294),r(3905)),s=["components"],i={title:"State persistence",description:"Maintain a long-running actor's state to protect from unexpected restarts. See a code example on how to protect your run in case of server shutdown.",slug:"/actors/development/state-persistence"},l="[](#state-persistence)State persistence",p={unversionedId:"actors/development/state_persistence",id:"actors/development/state_persistence",title:"State persistence",description:"Maintain a long-running actor's state to protect from unexpected restarts. See a code example on how to protect your run in case of server shutdown.",source:"@site/sources/platform/actors/development/state_persistence.md",sourceDirName:"actors/development",slug:"/actors/development/state-persistence",permalink:"/platform/actors/development/state-persistence",draft:!1,tags:[],version:"current",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1675350510,formattedLastUpdatedAt:"Feb 2, 2023",frontMatter:{title:"State persistence",description:"Maintain a long-running actor's state to protect from unexpected restarts. See a code example on how to protect your run in case of server shutdown.",slug:"/actors/development/state-persistence"},sidebar:"docs",previous:{title:"Source code",permalink:"/platform/actors/development/source-code"},next:{title:"Testing and maintenance",permalink:"/platform/actors/development/testing-and-maintenance"}},c={},u=[{value:"What is a migration?",id:"what-is-a-migration",level:2},{value:"Why do migrations happen?",id:"why-do-migrations-happen",level:2},{value:"How often do migrations occur?",id:"how-often-do-migrations-occur",level:2},{value:"Why is state lost during migration?",id:"why-is-state-lost-during-migration",level:2},{value:"How to persist state",id:"how-to-persist-state",level:2},{value:"Code examples",id:"code-examples",level:3}],m={toc:u};function d(e){var t=e.components,r=(0,n.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"state-persistence"},(0,o.kt)("a",{parentName:"h1",href:"#state-persistence",target:null,rel:null}),"State persistence"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Maintain a long-running actor's state to protect from unexpected restarts. See a code example on how to protect your run in case of server shutdown.")),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Long-running ",(0,o.kt)("a",{parentName:"p",href:"/platform/actors",target:null,rel:null},"actor")," jobs may need to migrate from one server to another. Unless you save your job's progress, it will be lost during the migration. The actor will re-start from scratch on the new server, which can be costly."),(0,o.kt)("p",null,"To avoid this, long-running actors should save (persist) their state periodically and listen for ",(0,o.kt)("a",{parentName:"p",href:"https://docs-v2.apify.com/sdk-js/api/apify/class/PlatformEventManager",target:"_blank",rel:"noopener"},"migration events"),". On start, these actors should ",(0,o.kt)("a",{parentName:"p",href:"#code-examples",target:null,rel:null},"check for persisted state"),", so they can continue where they left off."),(0,o.kt)("p",null,"For short-running actors, the chance of a restart and the cost of repeated runs are low, so restarts can be ignored."),(0,o.kt)("h2",{id:"what-is-a-migration"},(0,o.kt)("a",{parentName:"h2",href:"#what-is-a-migration",target:null,rel:null}),"What is a migration?"),(0,o.kt)("p",null,"A migration is when a process running on a server has to stop and move to another. All in-progress processes on the current server are stopped. Unless you have saved your state, the actor run will restart on the new server. For example, if a request in your ",(0,o.kt)("a",{parentName:"p",href:"/platform/storage/request-queue",target:null,rel:null},"request queue")," has not been updated as ",(0,o.kt)("strong",{parentName:"p"},"crawled")," before the migration, it will be crawled again."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"When a migration event occurs, you only have a few seconds to save your work.")),(0,o.kt)("h2",{id:"why-do-migrations-happen"},(0,o.kt)("a",{parentName:"h2",href:"#why-do-migrations-happen",target:null,rel:null}),"Why do migrations happen?"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"To optimize server workloads."),(0,o.kt)("li",{parentName:"ul"},"When a server crashes (unlikely)."),(0,o.kt)("li",{parentName:"ul"},"When we release new features and fix bugs.")),(0,o.kt)("h2",{id:"how-often-do-migrations-occur"},(0,o.kt)("a",{parentName:"h2",href:"#how-often-do-migrations-occur",target:null,rel:null}),"How often do migrations occur?"),(0,o.kt)("p",null,"There is no specified interval at which migrations happen. They are caused by the ",(0,o.kt)("a",{parentName:"p",href:"#why-do-migrations-happen",target:null,rel:null},"above events"),", so they can happen at any time."),(0,o.kt)("h2",{id:"why-is-state-lost-during-migration"},(0,o.kt)("a",{parentName:"h2",href:"#why-is-state-lost-during-migration",target:null,rel:null}),"Why is state lost during migration?"),(0,o.kt)("p",null,"Unless instructed to save its output or state to a ",(0,o.kt)("a",{parentName:"p",href:"/platform/storage",target:null,rel:null},"storage"),", an actor keeps them in the server's memory. So, when it switches servers, the run loses access to the previous server's memory. Even if data were saved on the server's disk, we would also lose access to that."),(0,o.kt)("h2",{id:"how-to-persist-state"},(0,o.kt)("a",{parentName:"h2",href:"#how-to-persist-state",target:null,rel:null}),"How to persist state"),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://docs-v2.apify.com/sdk-js",target:"_blank",rel:"noopener"},"Apify SDK")," persists its state automatically, using the ",(0,o.kt)("inlineCode",{parentName:"p"},"migrating")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"persistState")," ",(0,o.kt)("a",{parentName:"p",href:"https://docs-v2.apify.com/sdk-js/api/apify/class/PlatformEventManager",target:"_blank",rel:"noopener"},"events"),". ",(0,o.kt)("inlineCode",{parentName:"p"},"persistState")," notifies SDK components to persist their state at regular intervals in case a migration happens. The ",(0,o.kt)("inlineCode",{parentName:"p"},"migrating")," event is emitted just before a migration."),(0,o.kt)("h3",{id:"code-examples"},(0,o.kt)("a",{parentName:"h3",href:"#code-examples",target:null,rel:null}),"Code examples"),(0,o.kt)("p",null,"To persist state manually, you can use the ",(0,o.kt)("a",{parentName:"p",href:"https://docs-v2.apify.com/sdk-js/api/apify/class/Actor#on",target:"_blank",rel:"noopener"},(0,o.kt)("inlineCode",{parentName:"a"},"Actor.on"))," method in the Apify SDK."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { Actor } from 'apify';\n\nawait Actor.init();\n// ...\nActor.on('migrating', () => {\n    Actor.setValue('my-crawling-state', {\n        foo: 'bar',\n    });\n});\n// ...\nawait Actor.exit();\n")),(0,o.kt)("p",null,"To check for state saved in a previous run, use:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { Actor } from 'apify';\n\nawait Actor.init();\n// ...\nconst previousCrawlingState = await Actor.getValue('my-crawling-state') || {};\n// ...\nawait Actor.exit();\n")),(0,o.kt)("p",null,"To improve your actor's performance, you can also ",(0,o.kt)("a",{parentName:"p",href:"/platform/tutorials/cache-data-to-improve-performance",target:null,rel:null},"cache repeated page data"),"."))}d.isMDXComponent=!0}}]);