"use strict";(self.webpackChunkapify_docs_v2=self.webpackChunkapify_docs_v2||[]).push([[1624],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>g});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function A(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),l=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):A(A({},t),e)),r},u=function(e){var t=l(e.components);return a.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(r),g=n,f=p["".concat(i,".").concat(g)]||p[g]||c[g]||o;return r?a.createElement(f,A(A({ref:t},u),{},{components:r})):a.createElement(f,A({ref:t},u))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,A=new Array(o);A[0]=p;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:n,A[1]=s;for(var l=2;l<o;l++)A[l]=r[l];return a.createElement.apply(null,A)}return a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},71801:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>g,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var a=r(87462),n=r(63366),o=(r(67294),r(3905)),A=["components"],s={title:"Tasks",description:"Set up configurations of your Apify actors for simplified usage. Create multiple configurations of the same actor tailored to various use cases.",sidebar_position:7.2,slug:"/actors/tasks"},i="Actor tasks",l={unversionedId:"actors/tasks",id:"actors/tasks",title:"Tasks",description:"Set up configurations of your Apify actors for simplified usage. Create multiple configurations of the same actor tailored to various use cases.",source:"@site/sources/platform/actors/tasks.md",sourceDirName:"actors",slug:"/actors/tasks",permalink:"/platform/actors/tasks",draft:!1,editUrl:"https://github.com/apify/apify-docs-v2/edit/master/sources/platform/actors/tasks.md",tags:[],version:"current",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1675427001,formattedLastUpdatedAt:"Feb 3, 2023",sidebarPosition:7.2,frontMatter:{title:"Tasks",description:"Set up configurations of your Apify actors for simplified usage. Create multiple configurations of the same actor tailored to various use cases.",sidebar_position:7.2,slug:"/actors/tasks"},sidebar:"docs",previous:{title:"Compute units and consumption",permalink:"/platform/actors/running/compute-units"},next:{title:"Development",permalink:"/platform/actors/development"}},u={},c=[{value:"Create",id:"create",level:2},{value:"Configure",id:"configure",level:2},{value:"Identifying tasks",id:"identifying-tasks",level:3},{value:"Settings",id:"settings",level:3},{value:"Run",id:"run",level:2}],p={toc:c};function g(e){var t=e.components,s=(0,n.Z)(e,A);return(0,o.kt)("wrapper",(0,a.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"actor-tasks"},"Actor tasks"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Set up configurations of your Apify actors for simplified usage. Create multiple configurations of the same actor tailored to various use cases.")),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Tasks let you create multiple re-usable configurations of a single actor that are adapted for specific use cases. For example, you can create one ",(0,o.kt)("strong",{parentName:"p"},"Web Scraper")," (",(0,o.kt)("a",{parentName:"p",href:"https://apify.com/apify/web-scraper",target:"_blank",rel:"noopener"},"apify/web-scraper"),") configuration (task) that scrapes the latest reviews from imdb.com, another that scrapes nike.com for the latest sneakers, and a third that scrapes your competitor's e-shop. You can then use and reuse these configurations directly from ",(0,o.kt)("a",{parentName:"p",href:"https://console.apify.com/actors/tasks",target:"_blank",rel:"noopener"},"Apify Console"),", ",(0,o.kt)("a",{parentName:"p",href:"/platform/schedules",target:null,rel:null},"schedules"),", or ",(0,o.kt)("a",{parentName:"p",href:"/api/v2#/reference/actor-tasks/run-collection/run-task",target:null,rel:null},"API"),"."),(0,o.kt)("p",null,"All your tasks are listed at ",(0,o.kt)("a",{parentName:"p",href:"https://console.apify.com/actors/tasks",target:"_blank",rel:"noopener"},"https://console.apify.com/actors/tasks"),"."),(0,o.kt)("p",null,"You can create tasks both for your personal actors and for those made by someone else. Just ",(0,o.kt)("a",{parentName:"p",href:"https://console.apify.com/store",target:"_blank",rel:"noopener"},"search Apify Store")," to find an actor you want to use and click the ",(0,o.kt)("strong",{parentName:"p"},"Create new task")," button."),(0,o.kt)("p",null,"Like any other resource, you can share your actor tasks with other Apify users via the ",(0,o.kt)("a",{parentName:"p",href:"/platform/access-rights",target:null,rel:null},"access rights")," system."),(0,o.kt)("h2",{id:"create"},"Create"),(0,o.kt)("p",null,"Open any actor from ",(0,o.kt)("a",{parentName:"p",href:"https://console.apify.com/store",target:"_blank",rel:"noopener"},"Apify Store")," or your list of ",(0,o.kt)("a",{parentName:"p",href:"https://console.apify.com/actors",target:"_blank",rel:"noopener"},"actors")," in Apify Console. In the top-right section of the page, click the ",(0,o.kt)("strong",{parentName:"p"},"Create empty task")," button."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Create a new Apify task",src:r(47854).Z,width:"1300",height:"300"})),(0,o.kt)("h2",{id:"configure"},"Configure"),(0,o.kt)("p",null,"You can set up your task's input under the ",(0,o.kt)("strong",{parentName:"p"},"Input and options")," tab. A task's input configuration works just like an actor's. After all, it is just a copy of an actor you can pre-configure for a specific scenario. You can use either JSON or the visual input UI."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Apify task configuration",src:r(66823).Z,width:"1300",height:"1358"})),(0,o.kt)("p",null,"Actors' input fields will vary depending on their purpose, but they all follow the same principle: you provide an actor with the information it needs so it can do what you want it to do."),(0,o.kt)("p",null,"You can set run options such as timeout and ",(0,o.kt)("a",{parentName:"p",href:"/platform/actors/running/memory-and-cpu",target:null,rel:null},"memory")," at the bottom of the input section."),(0,o.kt)("h3",{id:"identifying-tasks"},"Identifying tasks"),(0,o.kt)("p",null,"To make a task easier to identify, you can give it a name, title, and description by clicking it's caption on the detail page.  A task's name should be 3-63 characters long."),(0,o.kt)("h3",{id:"settings"},"Settings"),(0,o.kt)("p",null,"Under the ",(0,o.kt)("strong",{parentName:"p"},"Settings")," tab of their detail page, you can grant ",(0,o.kt)("a",{parentName:"p",href:"/access-rights",target:null,rel:null},"access rights")," to other Apify users."),(0,o.kt)("h2",{id:"run"},"Run"),(0,o.kt)("p",null,"Once you've configured you task, you can run it using the ",(0,o.kt)("strong",{parentName:"p"},"Run")," button in the bottom-left side of the ",(0,o.kt)("strong",{parentName:"p"},"Input and options")," tab."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Run an Apify task",src:r(97650).Z,width:"370",height:"177"})),(0,o.kt)("p",null,"You can also run tasks using:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/platform/schedules",target:null,rel:null},"Schedules"),"."),(0,o.kt)("li",{parentName:"ul"},"Directly via the ",(0,o.kt)("a",{parentName:"li",href:"/api/v2#/reference/actor-tasks/run-collection/run-task",target:null,rel:null},"Apify API"),"."),(0,o.kt)("li",{parentName:"ul"},"The ","[JavaScript API client]","({{@link apify_client_js.md#taskclient}})."),(0,o.kt)("li",{parentName:"ul"},"The ","[Python API client]","({{@link apify_client_python.md#taskclient}}).")))}g.isMDXComponent=!0},66823:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/create-task-configure-f9895f98962e6db477861aeaac703dae.png"},97650:(e,t,r)=>{r.d(t,{Z:()=>a});const a="data:image/png;base64,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"},47854:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/create-task-14fff681a3565e54f7412a8c8d9fb914.png"}}]);