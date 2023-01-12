"use strict";(self.webpackChunkapify_docs_v2=self.webpackChunkapify_docs_v2||[]).push([[1624],{3905:(t,e,a)=>{a.d(e,{Zo:()=>c,kt:()=>m});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function s(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},o=Object.keys(t);for(r=0;r<o.length;r++)a=o[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)a=o[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var l=r.createContext({}),p=function(t){var e=r.useContext(l),a=e;return t&&(a="function"==typeof t?t(e):s(s({},e),t)),a},c=function(t){var e=p(t.components);return r.createElement(l.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},f=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,o=t.originalType,l=t.parentName,c=i(t,["components","mdxType","originalType","parentName"]),f=p(a),m=n,k=f["".concat(l,".").concat(m)]||f[m]||u[m]||o;return a?r.createElement(k,s(s({ref:e},c),{},{components:a})):r.createElement(k,s({ref:e},c))}));function m(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var o=a.length,s=new Array(o);s[0]=f;var i={};for(var l in e)hasOwnProperty.call(e,l)&&(i[l]=e[l]);i.originalType=t,i.mdxType="string"==typeof t?t:n,s[1]=i;for(var p=2;p<o;p++)s[p]=a[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}f.displayName="MDXCreateElement"},71801:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>u});var r=a(87462),n=a(63366),o=(a(67294),a(3905)),s=["components"],i={title:"Tasks",description:"Set up configurations of your Apify actors for simplified usage. Create multiple configurations of the same actor tailored to various use cases.",sidebar_position:7.2,slug:"/actors/tasks"},l="Actor tasks",p={unversionedId:"actors/tasks",id:"actors/tasks",title:"Tasks",description:"Set up configurations of your Apify actors for simplified usage. Create multiple configurations of the same actor tailored to various use cases.",source:"@site/sources/platform/actors/tasks.md",sourceDirName:"actors",slug:"/actors/tasks",permalink:"/platform/actors/tasks",draft:!1,tags:[],version:"current",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1673527112,formattedLastUpdatedAt:"Jan 12, 2023",sidebarPosition:7.2,frontMatter:{title:"Tasks",description:"Set up configurations of your Apify actors for simplified usage. Create multiple configurations of the same actor tailored to various use cases.",sidebar_position:7.2,slug:"/actors/tasks"},sidebar:"docs",previous:{title:"Compute units and consumption",permalink:"/platform/actors/running/compute-units"},next:{title:"Development",permalink:"/platform/actors/development"}},c={},u=[{value:"Create",id:"create",level:2},{value:"Configure",id:"configure",level:2},{value:"Identifying tasks",id:"identifying-tasks",level:3},{value:"Settings",id:"settings",level:3},{value:"Run",id:"run",level:2}],f={toc:u};function m(t){var e=t.components,i=(0,n.Z)(t,s);return(0,o.kt)("wrapper",(0,r.Z)({},f,i,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"actor-tasks"},"Actor tasks"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Set up configurations of your Apify actors for simplified usage. Create multiple configurations of the same actor tailored to various use cases.")),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Tasks let you create multiple re-usable configurations of a single actor that are adapted for specific use cases. For example, you can create one ",(0,o.kt)("strong",{parentName:"p"},"Web Scraper")," (",(0,o.kt)("a",{parentName:"p",href:"https://apify.com/apify/web-scraper",target:"_blank",rel:"noopener"},"apify/web-scraper"),") configuration (task) that scrapes the latest reviews from imdb.com, another that scrapes nike.com for the latest sneakers, and a third that scrapes your competitor's e-shop. You can then use and reuse these configurations directly from ",(0,o.kt)("a",{parentName:"p",href:"https://console.apify.com/actors/tasks",target:"_blank",rel:"noopener"},"Apify Console"),", ",(0,o.kt)("a",{parentName:"p",href:"/platform/schedules",target:null,rel:null},"schedules"),", or ",(0,o.kt)("a",{parentName:"p",href:"/api/v2#/reference/actor-tasks/run-collection/run-task",target:null,rel:null},"API"),"."),(0,o.kt)("p",null,"All your tasks are listed at ",(0,o.kt)("a",{parentName:"p",href:"https://console.apify.com/actors/tasks",target:"_blank",rel:"noopener"},"https://console.apify.com/actors/tasks"),"."),(0,o.kt)("p",null,"You can create tasks both for your personal actors and for those made by someone else. Just ",(0,o.kt)("a",{parentName:"p",href:"https://console.apify.com/store",target:"_blank",rel:"noopener"},"search Apify Store")," to find an actor you want to use and click the ",(0,o.kt)("strong",{parentName:"p"},"Create new task")," button."),(0,o.kt)("p",null,"Like any other resource, you can share your actor tasks with other Apify users via the ",(0,o.kt)("a",{parentName:"p",href:"/platform/access-rights",target:null,rel:null},"access rights")," system."),(0,o.kt)("h2",{id:"create"},"Create"),(0,o.kt)("p",null,"Open any actor from ",(0,o.kt)("a",{parentName:"p",href:"https://console.apify.com/store",target:"_blank",rel:"noopener"},"Apify Store")," or your list of ",(0,o.kt)("a",{parentName:"p",href:"https://console.apify.com/actors",target:"_blank",rel:"noopener"},"actors")," in Apify Console. In the top-right section of the page, click the ",(0,o.kt)("strong",{parentName:"p"},"Create empty task")," button."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Create a new Apify task",src:a(13505).Z,width:"1300",height:"300"})),(0,o.kt)("h2",{id:"configure"},"Configure"),(0,o.kt)("p",null,"You can set up your task's input under the ",(0,o.kt)("strong",{parentName:"p"},"Input and options")," tab. A task's input configuration works just like an actor's. After all, it is just a copy of an actor you can pre-configure for a specific scenario. You can use either JSON or the visual input UI."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Apify task configuration",src:a(14775).Z,width:"1300",height:"1358"})),(0,o.kt)("p",null,"Actors' input fields will vary depending on their purpose, but they all follow the same principle: you provide an actor with the information it needs so it can do what you want it to do."),(0,o.kt)("p",null,"You can set run options such as timeout and ",(0,o.kt)("a",{parentName:"p",href:"/platform/actors/running/memory-and-cpu",target:null,rel:null},"memory")," at the bottom of the input section."),(0,o.kt)("h3",{id:"identifying-tasks"},"Identifying tasks"),(0,o.kt)("p",null,"To make a task easier to identify, you can give it a name, title, and description by clicking it's caption on the detail page.  A task's name should be 3-63 characters long."),(0,o.kt)("h3",{id:"settings"},"Settings"),(0,o.kt)("p",null,"Under the ",(0,o.kt)("strong",{parentName:"p"},"Settings")," tab of their detail page, you can grant ",(0,o.kt)("a",{parentName:"p",href:"/access-rights",target:null,rel:null},"access rights")," to other Apify users."),(0,o.kt)("h2",{id:"run"},"Run"),(0,o.kt)("p",null,"Once you've configured you task, you can run it using the ",(0,o.kt)("strong",{parentName:"p"},"Run")," button in the bottom-left side of the ",(0,o.kt)("strong",{parentName:"p"},"Input and options")," tab."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Run an Apify task",src:a(96262).Z,width:"370",height:"177"})),(0,o.kt)("p",null,"You can also run tasks using:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/platform/schedules",target:null,rel:null},"Schedules"),"."),(0,o.kt)("li",{parentName:"ul"},"Directly via the ",(0,o.kt)("a",{parentName:"li",href:"/api/v2#/reference/actor-tasks/run-collection/run-task",target:null,rel:null},"Apify API"),"."),(0,o.kt)("li",{parentName:"ul"},"The ","[JavaScript API client]","({{@link apify_client_js.md#taskclient}})."),(0,o.kt)("li",{parentName:"ul"},"The ","[Python API client]","({{@link apify_client_python.md#taskclient}}).")))}m.isMDXComponent=!0},14775:(t,e,a)=>{a.d(e,{Z:()=>r});const r=a.p+"assets/images/create-task-configure-0cf76ab40df3aa20775c36c4de2e5e66.webp"},96262:(t,e,a)=>{a.d(e,{Z:()=>r});const r="data:image/webp;base64,UklGRhYEAABXRUJQVlA4IAoEAADwJQCdASpyAbEAPqlUp04mJSOmI/OoWMAVCWdu4XEw0S0DbKeYDyoP2A66rqafRN6V7IjQ5ESM5KJNrKChlV0gPNjd+YntEhQynaRPaGPeNcOq27gCwFgK/5SXH8giWDH///1vq/V+r9X6v1fq/Utdr2u/8tOyVv8lGX0zXTd/XPVC0SnPvEahLV2ZriCfyrAHw0HuLXr1CiGKHeM4t+V2hIqvZH7UGiXyCp3xVJheI0AFffn5BU5tdv8bPmDh9lnzgUIENF0bQc7zVKkBSK3Hg9x3O25cjppYYl8gqc2ewNNJ5P5dwI04OiPhCBu73LE/yyH08/j486YK+tCKfcOq27gB7iYwHZCcoyhernX5I0AFgLAP1EVJLnEBrOGVLAKHeM4tZprU5tdwBYCwFgLAWAsBYCwFWAAA/v5TBAq3Q9jl9par/sibSRF7JsUQ+GU2TYoh8MpsmxRD4ZTZNiiHwymybFEPhE47Yh5gp7O6woQF8K7X0gAAACINK8tLcNAju9/uDQ3E8QRwTq3J2IauUJWafBQ5mf8zwzTcPoWZZdT8t3m9YYgAVkmIhfOUxguyiIfoOGPoXb5Jr0Tc8AAAACF8gGzpqqEhcIdQJT+fKa9qSkmWhWzWgu+cBM0tKjuj/xGAj3kQNLxh7RTUDi+oQDdN+64uNzVl5k/sa6BJ/1SJa3gAH4/vS8B80H2ajW65kNR/UYAEb21cgfqv+Y3DlMe2Zv6Wh+lfU61stJHJcdgafAE6AKjs5cN2C/v6verPlSJRITPR71PTxMBNFwwTzBK6Gdio0x3UQOtgIFuCn6lC7Ezd6VEP1jLvbVrVWbm/jOUxtJ5F9sVlyyfN9wkYioSnWFsex5ZxVxZ8l0a13UJ9fZ4QjXerMWiSSW4zWeGHLPIaNcKsH4Zl36kWM+ORPU2rX76Lwv3Pug62gY76P1l7Y9Qs/NndCJCd0CtIDwcVWTekipukp5ybv1eyJqyo/RQOUVYCCPJVxxjIS1oH5o2Mp7RvQKZrmc/vh7XgaU8PHqKOZgXTNk+Du1SYreFXlx6+LmAARj0Zv9jTFBcl0DfkP0WUh+fIlZ7Fo0LiYwBD6QHQGWWBTKJ9k8sQYvvsdXxVq7bgEqiuVGPal5tuMSgVz6BfbBctOFhl9bo97IhgiKiSP8O0RJOHa/2zpgDP+91spejMAf08tTmE8dHnOvTHmbr8EkOyIjVxDjDSJk3psP6wJ45umuDag7gKruA26R65bk5+sYjSXFHWhPOAKpJpRKotqdJ/Mv+WQvM/mh6RQALurhio8hkFAYzmx9/QQup6b0eAAaqY/u4E3iZZo4Dm/7aRz8tO5hWgyXvIzYf/kn1maYvPlmekH5GaIxr6YOngAAAAAAAAAA=="},13505:(t,e,a)=>{a.d(e,{Z:()=>r});const r=a.p+"assets/images/create-task-80f9d70e7fd40ab6241571706836c8b8.webp"}}]);