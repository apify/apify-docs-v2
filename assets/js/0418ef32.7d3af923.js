"use strict";(self.webpackChunkapify_docs_v2=self.webpackChunkapify_docs_v2||[]).push([[4450],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),h=a,k=d["".concat(s,".").concat(h)]||d[h]||p[h]||o;return n?r.createElement(k,i(i({ref:t},c),{},{components:n})):r.createElement(k,i({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},81981:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>l,metadata:()=>u,toc:()=>p});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],l={title:"Events",description:"Specify the types of events that trigger a webhook in an actor or task run. Trigger an action on actor or task run creation, success or failure.",sidebar_position:1,slug:"/integrations/webhooks/events"},s="Events",u={unversionedId:"integrations/webhooks/events",id:"integrations/webhooks/events",title:"Events",description:"Specify the types of events that trigger a webhook in an actor or task run. Trigger an action on actor or task run creation, success or failure.",source:"@site/sources/platform/integrations/webhooks/events.md",sourceDirName:"integrations/webhooks",slug:"/integrations/webhooks/events",permalink:"/platform/integrations/webhooks/events",draft:!1,tags:[],version:"current",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1673530116,formattedLastUpdatedAt:"Jan 12, 2023",sidebarPosition:1,frontMatter:{title:"Events",description:"Specify the types of events that trigger a webhook in an actor or task run. Trigger an action on actor or task run creation, success or failure.",sidebar_position:1,slug:"/integrations/webhooks/events"},sidebar:"docs",previous:{title:"Webhooks",permalink:"/platform/integrations/webhooks"},next:{title:"Actions",permalink:"/platform/integrations/webhooks/actions"}},c={},p=[{value:"Actor run",id:"actor-run",level:2},{value:"Run event types",id:"run-event-types",level:3},{value:"Run event data",id:"run-event-data",level:3},{value:"Actor run results",id:"actor-run-results",level:3},{value:"Actor build",id:"actor-build",level:2},{value:"Build event types",id:"build-event-types",level:3},{value:"Build event data",id:"build-event-data",level:3}],d={toc:p};function h(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"events"},"Events"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Specify the types of events that trigger a webhook in an actor or task run. Trigger an action on actor or task run creation, success or failure.")),(0,o.kt)("hr",null),(0,o.kt)("p",null,"An event is represented by a ",(0,o.kt)("strong",{parentName:"p"},"type")," and related ",(0,o.kt)("strong",{parentName:"p"},"data"),". The type is a ",(0,o.kt)("inlineCode",{parentName:"p"},"string")," that shows the event's name and its hierarchy in the tree of available events, e.g.: ",(0,o.kt)("inlineCode",{parentName:"p"},"ACTOR.RUN.SUCCEEDED"),". The data are an ",(0,o.kt)("inlineCode",{parentName:"p"},"Object")," with variable properties. See documentation of individual events for examples of data."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Currently, webhooks are only available for actor run and build events, with new types in the pipeline.")),(0,o.kt)("h2",{id:"actor-run"},(0,o.kt)("a",{parentName:"h2",href:"#actor-run",target:null,rel:null}),"Actor run"),(0,o.kt)("p",null,"Actor run events are triggered when an actor run gets created or transitions into a new state. Webhook can be defined for all runs of an ",(0,o.kt)("a",{parentName:"p",href:"/platform/actors",target:null,rel:null},"actor")," at its detail page. In that case, the webhook is invoked only for runs started for that task."),(0,o.kt)("h3",{id:"run-event-types"},"Run event types"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"ACTOR.RUN.CREATED")," - new actor run has been created."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"ACTOR.RUN.SUCCEEDED")," - actor run finished with status ",(0,o.kt)("inlineCode",{parentName:"li"},"SUCCEEDED"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"ACTOR.RUN.FAILED")," - actor run finished with status ",(0,o.kt)("inlineCode",{parentName:"li"},"FAILED"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"ACTOR.RUN.ABORTED")," - actor run finished with status ",(0,o.kt)("inlineCode",{parentName:"li"},"ABORTED"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"ACTOR.RUN.TIMED_OUT")," - actor run finished with status ",(0,o.kt)("inlineCode",{parentName:"li"},"TIMED-OUT"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"ACTOR.RUN.RESURRECTED")," - actor run has been resurrected.")),(0,o.kt)("h3",{id:"run-event-data"},"Run event data"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "actorId": "ID of the triggering actor.",\n    "actorTaskId": "If task was used, its ID.",\n    "actorRunId": "ID of the triggering actor run.",\n}\n')),(0,o.kt)("h3",{id:"actor-run-results"},"Actor run results"),(0,o.kt)("p",null,"To fetch the results from the actor run, you can take the ",(0,o.kt)("inlineCode",{parentName:"p"},"actorRunId")," event property and call one of the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.apify.com/api/v2#/reference/actor-runs/run-object-and-its-storages",target:"_blank",rel:"noopener"},"Run object and its storages")," API endpoints. For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"https://api.apify.com/v2/actor-runs/[ACTOR_RUN_ID]/dataset/items?token=[TOKEN]\n")),(0,o.kt)("p",null,"Note that apart from event data, actions also have the ",(0,o.kt)("inlineCode",{parentName:"p"},"resource")," object available, which can provide more details about the object that triggered the event. Therefore, for example, for the ",(0,o.kt)("inlineCode",{parentName:"p"},"ACTOR.RUN.SUCCEEDED")," event, the provided resource is info about the successful run, which contains the ",(0,o.kt)("inlineCode",{parentName:"p"},"defaultDatasetId")," property that you can also use to fetch the dataset contents. For more information about the ",(0,o.kt)("inlineCode",{parentName:"p"},"resource")," objects, see the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.apify.com/webhooks/actions#resource",target:"_blank",rel:"noopener"},"Webhooks Actions page"),"."),(0,o.kt)("h2",{id:"actor-build"},(0,o.kt)("a",{parentName:"h2",href:"#actor-build",target:null,rel:null}),"Actor build"),(0,o.kt)("p",null,"Actor build events are triggered when an actor build is created or transitions into a new state. Webhooks can be defined for all of an ",(0,o.kt)("a",{parentName:"p",href:"/platform/actors",target:null,rel:null},"actor"),"'s builds on its detail page."),(0,o.kt)("h3",{id:"build-event-types"},"Build event types"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"ACTOR.BUILD.CREATED")," - new actor build has been created."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"ACTOR.BUILD.SUCCEEDED")," - actor build finished with the status ",(0,o.kt)("inlineCode",{parentName:"li"},"SUCCEEDED"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"ACTOR.BUILD.FAILED")," - actor build finished with the status ",(0,o.kt)("inlineCode",{parentName:"li"},"FAILED"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"ACTOR.BUILD.ABORTED")," - actor build finished with the status ",(0,o.kt)("inlineCode",{parentName:"li"},"ABORTED"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"ACTOR.BUILD.TIMED_OUT")," - actor build finished with the status ",(0,o.kt)("inlineCode",{parentName:"li"},"TIMED-OUT"),".")),(0,o.kt)("h3",{id:"build-event-data"},"Build event data"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "actorId": "ID of the triggering actor.",\n    "actorBuildId": "ID of the triggering actor build.",\n}\n')))}h.isMDXComponent=!0}}]);