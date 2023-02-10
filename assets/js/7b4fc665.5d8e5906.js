"use strict";(self.webpackChunkapify_docs_v2=self.webpackChunkapify_docs_v2||[]).push([[6845],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>c});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),d=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=d(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=d(n),c=a,h=u["".concat(p,".").concat(c)]||u[c]||m[c]||o;return n?r.createElement(h,l(l({ref:t},s),{},{components:n})):r.createElement(h,l({ref:t},s))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var d=2;d<o;d++)l[d]=n[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},69434:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>c,frontMatter:()=>i,metadata:()=>d,toc:()=>m});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),l=["components"],i={title:"Environment variables",description:"Learn how to provide your actor with context that determines its behavior through a plethora of pre-defined environment variables offered by the Apify SDK.",slug:"/actors/development/environment-variables"},p="Environment variables",d={unversionedId:"actors/development/environment_variables",id:"actors/development/environment_variables",title:"Environment variables",description:"Learn how to provide your actor with context that determines its behavior through a plethora of pre-defined environment variables offered by the Apify SDK.",source:"@site/sources/platform/actors/development/environment_variables.md",sourceDirName:"actors/development",slug:"/actors/development/environment-variables",permalink:"/platform/actors/development/environment-variables",draft:!1,editUrl:"https://github.com/apify/apify-docs-v2/edit/master/sources/platform/actors/development/environment_variables.md",tags:[],version:"current",lastUpdatedBy:"Franti\u0161ek Nesveda",lastUpdatedAt:1676065039,formattedLastUpdatedAt:"Feb 10, 2023",frontMatter:{title:"Environment variables",description:"Learn how to provide your actor with context that determines its behavior through a plethora of pre-defined environment variables offered by the Apify SDK.",slug:"/actors/development/environment-variables"},sidebar:"docs",previous:{title:"Continuous integration",permalink:"/platform/actors/development/continuous-integration"},next:{title:"Input schema",permalink:"/platform/actors/development/input-schema"}},s={},m=[],u={toc:m};function c(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"environment-variables"},"Environment variables"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Learn how to provide your actor with context that determines its behavior through a plethora of pre-defined environment variables offered by the Apify SDK.")),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Aside from ",(0,o.kt)("a",{parentName:"p",href:"/platform/actors/development/source-code",target:null,rel:null},"custom environment variables"),", the actor's process has several environment variables set to provide it with context:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Environment Variable"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"APIFY_ACTOR_ID")),(0,o.kt)("td",{parentName:"tr",align:null},"ID of the actor.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"APIFY_ACTOR_RUN_ID")),(0,o.kt)("td",{parentName:"tr",align:null},"ID of the actor run.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"APIFY_ACTOR_BUILD_ID")),(0,o.kt)("td",{parentName:"tr",align:null},"ID of the actor build used in the run.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"APIFY_ACTOR_BUILD_NUMBER")),(0,o.kt)("td",{parentName:"tr",align:null},"Build number of the actor build used in the run.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"APIFY_ACTOR_TASK_ID")),(0,o.kt)("td",{parentName:"tr",align:null},"ID of the actor task. It's empty if actor is run outside of any task, e.g. directly using the API.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"APIFY_ACTOR_EVENTS_WS_URL")),(0,o.kt)("td",{parentName:"tr",align:null},"Websocket URL where actor may listen for events from Actor platform. See ",(0,o.kt)("a",{parentName:"td",href:"https://docs-v2.apify.com/sdk-js/api/apify/class/PlatformEventManager",target:"_blank",rel:"noopener"},"documentation")," for more information.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"APIFY_DEFAULT_DATASET_ID")),(0,o.kt)("td",{parentName:"tr",align:null},"ID of the dataset where you can push the data.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"APIFY_DEFAULT_KEY_VALUE_STORE_ID")),(0,o.kt)("td",{parentName:"tr",align:null},"ID of the key-value store where the actor's input and output data are stored.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"APIFY_DEFAULT_REQUEST_QUEUE_ID")),(0,o.kt)("td",{parentName:"tr",align:null},"ID of the request queue that stores and handles requests that you enqueue.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"APIFY_INPUT_KEY")),(0,o.kt)("td",{parentName:"tr",align:null},"The key of the record in the default key-value store that holds the actor input. Typically it's ",(0,o.kt)("strong",{parentName:"td"},"INPUT"),", but it might be something else.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"APIFY_HEADLESS")),(0,o.kt)("td",{parentName:"tr",align:null},"If set to ",(0,o.kt)("strong",{parentName:"td"},"1"),", the web browsers inside the actor should run in headless mode because there is no windowing system available.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"APIFY_IS_AT_HOME")),(0,o.kt)("td",{parentName:"tr",align:null},"Is set to ",(0,o.kt)("strong",{parentName:"td"},"1")," if the actor is running on Apify servers.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"APIFY_MEMORY_MBYTES")),(0,o.kt)("td",{parentName:"tr",align:null},"Indicates the size of memory allocated for the actor run, in megabytes. It can be used by actors to optimize their memory usage.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"APIFY_PROXY_PASSWORD")),(0,o.kt)("td",{parentName:"tr",align:null},"The ",(0,o.kt)("a",{parentName:"td",href:"/docs/proxy",target:null,rel:null},"Apify Proxy")," password of the user who started the actor.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"APIFY_STARTED_AT")),(0,o.kt)("td",{parentName:"tr",align:null},"Date when the actor was started.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"APIFY_TIMEOUT_AT")),(0,o.kt)("td",{parentName:"tr",align:null},"Date when the actor will time out.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"APIFY_TOKEN")),(0,o.kt)("td",{parentName:"tr",align:null},"The API token of the user who started the actor.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"APIFY_USER_ID")),(0,o.kt)("td",{parentName:"tr",align:null},"ID of the user who started the actor. Note that it might be different than the owner of the actor.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"APIFY_CONTAINER_PORT")),(0,o.kt)("td",{parentName:"tr",align:null},"TCP port on which the actor can start a HTTP server to receive messages from the outside world. See ",(0,o.kt)("a",{parentName:"td",href:"/platform/actors/running",target:null,rel:null},"Container web server")," section for more details.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"APIFY_CONTAINER_URL")),(0,o.kt)("td",{parentName:"tr",align:null},"A unique public URL under which the actor run web server is accessible from the outside world. See ",(0,o.kt)("a",{parentName:"td",href:"/platform/actors/running",target:null,rel:null},"Container web server")," section for more details.")))),(0,o.kt)("p",null,"Dates are always in the UTC timezone and are represented in simplified extended ISO format (",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/ISO_8601",target:"_blank",rel:"noopener"},"ISO 8601"),"), e.g. ",(0,o.kt)("strong",{parentName:"p"},"2022-07-13T14:23:37.281Z"),"."),(0,o.kt)("p",null,"To access environment variables in Node.js, use the ",(0,o.kt)("inlineCode",{parentName:"p"},"process.env")," object, for example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"console.log(process.env.APIFY_USER_ID);\n")),(0,o.kt)("p",null,"To access environment variables in Python, use the ",(0,o.kt)("inlineCode",{parentName:"p"},"os.environ")," dictionary, for example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"import os\nprint(os.environ['APIFY_USER_ID'])\n")))}c.isMDXComponent=!0}}]);