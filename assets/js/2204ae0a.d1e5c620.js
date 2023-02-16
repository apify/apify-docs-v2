"use strict";(self.webpackChunkapify_docs_v2=self.webpackChunkapify_docs_v2||[]).push([[9523],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=s(n),d=a,f=m["".concat(u,".").concat(d)]||m[d]||p[d]||o;return n?r.createElement(f,l(l({ref:t},c),{},{components:n})):r.createElement(f,l({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(67294),a=n(86010);const o="tabItem_Ymn6";function l(e){var t=e.children,n=e.hidden,l=e.className;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,l),hidden:n},t)}},74866:(e,t,n)=>{n.d(t,{Z:()=>w});var r=n(87462),a=n(67294),o=n(86010),l=n(12466),i=n(16550),u=n(91980),s=n(67392),c=n(50012);function p(e){return function(e){return a.Children.map(e,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')}))}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function m(e){var t=e.values,n=e.children;return(0,a.useMemo)((function(){var e=null!=t?t:p(n);return function(e){var t=(0,s.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function d(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function f(e){var t=e.queryString,n=void 0!==t&&t,r=e.groupId,o=(0,i.k6)(),l=function(e){var t=e.queryString,n=void 0!==t&&t,r=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:n,groupId:r});return[(0,u._X)(l),(0,a.useCallback)((function(e){if(l){var t=new URLSearchParams(o.location.search);t.set(l,e),o.replace(Object.assign({},o.location,{search:t.toString()}))}}),[l,o])]}function h(e){var t,n,r,o,l=e.defaultValue,i=e.queryString,u=void 0!==i&&i,s=e.groupId,p=m(e),h=(0,a.useState)((function(){return function(e){var t,n=e.defaultValue,r=e.tabValues;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!d({value:n,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+r.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var a=null!=(t=r.find((function(e){return e.default})))?t:r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:l,tabValues:p})})),g=h[0],k=h[1],b=f({queryString:u,groupId:s}),v=b[0],y=b[1],N=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:s}.groupId),n=(0,c.Nk)(t),r=n[0],o=n[1],[r,(0,a.useCallback)((function(e){t&&o.set(e)}),[t,o])]),w=N[0],T=N[1],A=function(){var e=null!=v?v:w;return d({value:e,tabValues:p})?e:null}();return(0,a.useEffect)((function(){A&&k(A)}),[A]),{selectedValue:g,selectValue:(0,a.useCallback)((function(e){if(!d({value:e,tabValues:p}))throw new Error("Can't select invalid tab value="+e);k(e),y(e),T(e)}),[y,T,p]),tabValues:p}}var g=n(72389);const k="tabList__CuJ",b="tabItem_LNqP";function v(e){var t=e.className,n=e.block,i=e.selectedValue,u=e.selectValue,s=e.tabValues,c=[],p=(0,l.o5)().blockElementScrollPositionUntilNextRender,m=function(e){var t=e.currentTarget,n=c.indexOf(t),r=s[n].value;r!==i&&(p(t),u(r))},d=function(e){var t,n=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":var r,a=c.indexOf(e.currentTarget)+1;n=null!=(r=c[a])?r:c[0];break;case"ArrowLeft":var o,l=c.indexOf(e.currentTarget)-1;n=null!=(o=c[l])?o:c[c.length-1]}null==(t=n)||t.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},s.map((function(e){var t=e.value,n=e.label,l=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:function(e){return c.push(e)},onKeyDown:d,onClick:m},l,{className:(0,o.Z)("tabs__item",b,null==l?void 0:l.className,{"tabs__item--active":i===t})}),null!=n?n:t)})))}function y(e){var t=e.lazy,n=e.children,r=e.selectedValue;if(t){var o=n.find((function(e){return e.props.value===r}));return o?(0,a.cloneElement)(o,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},n.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r})})))}function N(e){var t=h(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",k)},a.createElement(v,(0,r.Z)({},e,t)),a.createElement(y,(0,r.Z)({},e,t)))}function w(e){var t=(0,g.Z)();return a.createElement(N,(0,r.Z)({key:String(t)},e))}},17607:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>p,toc:()=>d});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),l=n(74866),i=n(85162),u=["components"],s={title:"Running actors",description:"Start an actor from the Apify Console or via API. Learn about actor lifecycles, how to specify settings and version, provide input and resurrect finished runs.",menuTitle:"Running",sidebar_position:7.1,slug:"/actors/running"},c="Running",p={unversionedId:"actors/running/index",id:"actors/running/index",title:"Running actors",description:"Start an actor from the Apify Console or via API. Learn about actor lifecycles, how to specify settings and version, provide input and resurrect finished runs.",source:"@site/sources/platform/actors/running/index.md",sourceDirName:"actors/running",slug:"/actors/running",permalink:"/platform/actors/running",draft:!1,editUrl:"https://github.com/apify/apify-docs-v2/edit/master/sources/platform/actors/running/index.md",tags:[],version:"current",lastUpdatedBy:"Ondra Urban",lastUpdatedAt:1676563547,formattedLastUpdatedAt:"Feb 16, 2023",sidebarPosition:7.1,frontMatter:{title:"Running actors",description:"Start an actor from the Apify Console or via API. Learn about actor lifecycles, how to specify settings and version, provide input and resurrect finished runs.",menuTitle:"Running",sidebar_position:7.1,slug:"/actors/running"},sidebar:"docs",previous:{title:"Actors",permalink:"/platform/actors"},next:{title:"Input",permalink:"/platform/actors/running/input"}},m={},d=[{value:"Resource limits",id:"resource-limits",level:2},{value:"Lifecycle",id:"lifecycle",level:2},{value:"Aborting runs",id:"aborting-runs",level:2},{value:"Resurrection of finished run",id:"resurrection-of-finished-run",level:2},{value:"Container web server",id:"container-web-server",level:2},{value:"Data retention",id:"data-retention",level:2},{value:"Sharing",id:"sharing",level:2}],f={toc:d};function h(e){var t=e.components,s=(0,a.Z)(e,u);return(0,o.kt)("wrapper",(0,r.Z)({},f,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"running"},"Running"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Start an actor from the Apify Console or via API. Learn about actor lifecycles, how to specify settings and version, provide input and resurrect finished runs.")),(0,o.kt)("hr",null),(0,o.kt)("p",null,"You can start an Apify actor in a number of ways. One option is to start an actor from its page in ",(0,o.kt)("a",{parentName:"p",href:"https://console.apify.com/actors",target:"_blank",rel:"noopener"},"Apify Console"),":"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Apify developer console",src:n(93371).Z,width:"1838",height:"1296"})),(0,o.kt)("p",null,"You can specify options such as ",(0,o.kt)("a",{parentName:"p",href:"/platform/actors/development/builds",target:null,rel:null},"build"),", timeout, and ",(0,o.kt)("a",{parentName:"p",href:"/platform/actors/running/memory-and-cpu",target:null,rel:null},"memory")," for your actor run."),(0,o.kt)("table",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,"Build"),(0,o.kt)("td",null,"Tag or number of the build to run (e.g. **latest** or **1.2.34**).")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"Timeout"),(0,o.kt)("td",null,"Timeout for the actor run in seconds. Zero value means there is no timeout.")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"Memory"),(0,o.kt)("td",null,"Amount of memory allocated for the actor run, in megabytes."))),(0,o.kt)("p",null,"Actors can also be invoked using the Apify API, by sending an HTTP POST request to the ",(0,o.kt)("a",{parentName:"p",href:"/api/v2/#/reference/actors/run-collection/run-actor",target:null,rel:null},"Run actor")," endpoint, such as:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"https://api.apify.com/v2/acts/apify~hello-world/runs?token=<YOUR_API_TOKEN>\n")),(0,o.kt)("p",null,"An actor's input and its content type can be passed as a payload of the POST request and additional options can be specified using URL query parameters. For more details, see the ",(0,o.kt)("a",{parentName:"p",href:"/api/v2/#/reference/actors/run-collection/run-actor",target:null,rel:null},"Run actor")," section in the API reference."),(0,o.kt)("p",null,"Actors can also be invoked programmatically from other actors:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"JavaScript: using the ",(0,o.kt)("a",{parentName:"li",href:"/sdk/js/reference/class/Actor#call",target:null,rel:null},(0,o.kt)("inlineCode",{parentName:"a"},"call()"))," function of ",(0,o.kt)("a",{parentName:"li",href:"/sdk/js/reference/class/Actor",target:null,rel:null},(0,o.kt)("inlineCode",{parentName:"a"},"Actor"))," class provided by the ",(0,o.kt)("a",{parentName:"li",href:"/sdk/js/",target:null,rel:null},(0,o.kt)("inlineCode",{parentName:"a"},"apify"))," NPM package."),(0,o.kt)("li",{parentName:"ul"},"Python: using the ",(0,o.kt)("a",{parentName:"li",href:"/api/client/python/reference/class/ActorClient#call",target:null,rel:null},(0,o.kt)("inlineCode",{parentName:"a"},"call()"))," function provided by the ",(0,o.kt)("a",{parentName:"li",href:"https://docs.apify.com/api/client/python",target:"_blank",rel:"noopener"},(0,o.kt)("inlineCode",{parentName:"a"},"apify-client"))," Python package.")),(0,o.kt)(l.Z,{groupId:"main",mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"NodeJS",label:"NodeJS",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"import { Actor } from 'apify';\n\nawait Actor.init();\n// ...\nconst run = await Actor.call('apify/hello-world', {\n    message: 'Hello!',\n});\nconsole.dir(run.output);\n// ...\nawait Actor.exit();\n\n"))),(0,o.kt)(i.Z,{value:"Python",label:"Python",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"\nrun = apify_client.actor('apify/hello-world').call(run_input={ 'message': 'Hello!' })\nprint(run['id'])\n\n\n")))),(0,o.kt)("p",null,"The newly started actor runs under the same user account as the initial actor and therefore all resources consumed are charged to the same user account. This allows more complex actors to be built using simpler actors built and owned by other users."),(0,o.kt)("p",null,"Internally, the ",(0,o.kt)("inlineCode",{parentName:"p"},"call()")," function takes the user's API token from the ",(0,o.kt)("inlineCode",{parentName:"p"},"APIFY_TOKEN")," environment variable, then it invokes the ",(0,o.kt)("a",{parentName:"p",href:"/api/v2/#/reference/actors/run-collection/run-actor",target:null,rel:null},"Run actor")," API endpoint, waits for the actor to finish and reads its output using the ",(0,o.kt)("a",{parentName:"p",href:"/api/v2/#/reference/key-value-stores/record/get-record",target:null,rel:null},"Get record")," API endpoint."),(0,o.kt)("h2",{id:"resource-limits"},"Resource limits"),(0,o.kt)("p",null,"Actors run inside a Docker container whose resources are limited. When invoking the actor, the caller has to specify the amount of memory allocated for the actor. The amount of memory can be set to a power of 2 with a minimum of 128 MB, i.e., 256 MB, 512 MB, 1024 MB, 2048 MB, ..., 32768 MB."),(0,o.kt)("p",null,"Additionally, each user has a certain total limit of memory for running actors. The sum of memory allocated for all running actors and builds needs to fit into this limit, otherwise the user cannot start a new actor. For more details, see ",(0,o.kt)("a",{parentName:"p",href:"/platform/actors/limits",target:null,rel:null},"Limits"),"."),(0,o.kt)("p",null,"The share of CPU is computed automatically from the memory as follows: for each 4096 MB of memory, the actor gets 1 full CPU core. For other amounts of memory the number of CPU cores is computed fractionally. For example, an actor with 1024 MB of memory will have a 1/4 share of a CPU core."),(0,o.kt)("p",null,"The actor has hard disk space limited by twice the amount of memory. For example, an actor with 1024 MB of memory will have 2048 MB of disk available."),(0,o.kt)("h2",{id:"lifecycle"},"Lifecycle"),(0,o.kt)("p",null,"Each run starts with the initial status ",(0,o.kt)("strong",{parentName:"p"},"READY")," and goes through one or more transitional statuses to one of the terminal statuses."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Status"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"READY"),(0,o.kt)("td",{parentName:"tr",align:null},"initial"),(0,o.kt)("td",{parentName:"tr",align:null},"Started but not allocated to any worker yet")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"RUNNING"),(0,o.kt)("td",{parentName:"tr",align:null},"transitional"),(0,o.kt)("td",{parentName:"tr",align:null},"Executing on a worker")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"SUCCEEDED"),(0,o.kt)("td",{parentName:"tr",align:null},"terminal"),(0,o.kt)("td",{parentName:"tr",align:null},"Finished successfully")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"FAILED"),(0,o.kt)("td",{parentName:"tr",align:null},"terminal"),(0,o.kt)("td",{parentName:"tr",align:null},"Run failed")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"TIMING-OUT"),(0,o.kt)("td",{parentName:"tr",align:null},"transitional"),(0,o.kt)("td",{parentName:"tr",align:null},"Timing out now")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"TIMED-OUT"),(0,o.kt)("td",{parentName:"tr",align:null},"terminal"),(0,o.kt)("td",{parentName:"tr",align:null},"Timed out")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"ABORTING"),(0,o.kt)("td",{parentName:"tr",align:null},"transitional"),(0,o.kt)("td",{parentName:"tr",align:null},"Being aborted by user")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"ABORTED"),(0,o.kt)("td",{parentName:"tr",align:null},"terminal"),(0,o.kt)("td",{parentName:"tr",align:null},"Aborted by user")))),(0,o.kt)("h2",{id:"aborting-runs"},"Aborting runs"),(0,o.kt)("p",null,"You can abort runs with the statuses ",(0,o.kt)("strong",{parentName:"p"},"READY"),", ",(0,o.kt)("strong",{parentName:"p"},"RUNNING"),", or ",(0,o.kt)("strong",{parentName:"p"},"TIMING-OUT")," in two ways:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Abort run - immediately abort the actor run. This is the default option."),(0,o.kt)("li",{parentName:"ul"},"Gracefully abort run - the actor run receives a signal about aborting via the ",(0,o.kt)("inlineCode",{parentName:"li"},"aborting")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"persistState")," events and is force-aborted after 30 seconds. This is helpful in cases where you plan to resurrect the run later because it saves the actor's state. When resurrected, the actor can re-start where it left off.")),(0,o.kt)("p",null,"You can abort a run in the Apify Console using the ",(0,o.kt)("strong",{parentName:"p"},"Abort")," button or via API using the ",(0,o.kt)("a",{parentName:"p",href:"/api/v2#/reference/actor-runs/abort-run/abort-run",target:null,rel:null},"Abort run")," endpoint."),(0,o.kt)("h2",{id:"resurrection-of-finished-run"},"Resurrection of finished run"),(0,o.kt)("p",null,"Any actor run in terminal state, i.e. run with status ",(0,o.kt)("strong",{parentName:"p"},"FINISHED"),", ",(0,o.kt)("strong",{parentName:"p"},"FAILED"),", ",(0,o.kt)("strong",{parentName:"p"},"ABORTED")," and ",(0,o.kt)("strong",{parentName:"p"},"TIMED-OUT"),", might be resurrected back to a ",(0,o.kt)("strong",{parentName:"p"},"RUNNING")," state. This is helpful in many cases, for example when the timeout for actor run was too low or in case of an unexpected error."),(0,o.kt)("p",null,"The whole process of resurrection looks as follows:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Run status will be updated to ",(0,o.kt)("strong",{parentName:"li"},"RUNNING")," and its container will be restarted with the same storages (the same behavior as when the run gets migrated to the new server)."),(0,o.kt)("li",{parentName:"ul"},"Updated duration will include the time when actor was not running. This does not affect compute units consumption."),(0,o.kt)("li",{parentName:"ul"},"Timeout will be counted from the point when this actor run was resurrected.")),(0,o.kt)("p",null,"Resurrection can be performed in Apify Console using the ",(0,o.kt)("strong",{parentName:"p"},"resurrect")," button or via API using the ",(0,o.kt)("a",{parentName:"p",href:"/api/v2#/reference/actors/resurrect-run",target:null,rel:null},"Resurrect run")," API endpoint."),(0,o.kt)("h2",{id:"container-web-server"},"Container web server"),(0,o.kt)("p",null,"Each actor run is assigned a unique hard-to-guess URL (e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"kmdo7wpzlshygi.runs.apify.net"),"), which enables HTTP access to an optional web server running inside the actor run's Docker container. The URL is available in the following places:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"In the web application, on the actor run details page as the ",(0,o.kt)("strong",{parentName:"li"},"Container URL")," field."),(0,o.kt)("li",{parentName:"ul"},"In the API as the ",(0,o.kt)("inlineCode",{parentName:"li"},"containerUrl")," property of the ",(0,o.kt)("a",{parentName:"li",href:"/api/v2#/reference/actors/run-object/get-run",target:null,rel:null},"Run object"),"."),(0,o.kt)("li",{parentName:"ul"},"In the actor run's container as the ",(0,o.kt)("strong",{parentName:"li"},"APIFY_CONTAINER_URL")," environment variable.")),(0,o.kt)("p",null,"The web server running inside the container must listen at the port defined by the ",(0,o.kt)("inlineCode",{parentName:"p"},"APIFY_CONTAINER_PORT")," environment variable (typically 4321). If you want to use another port, simply define the ",(0,o.kt)("strong",{parentName:"p"},"APIFY_CONTAINER_PORT")," environment variable with the desired port number in your actor version configuration - see ",(0,o.kt)("a",{parentName:"p",href:"/platform/actors/development/source-code",target:null,rel:null},"Custom environment variable")," for details."),(0,o.kt)("p",null,"The following example demonstrates how to start a simple web server in your actor:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { Actor } from 'apify';\nimport express from 'express';\n\nawait Actor.init();\n\nconst app = express();\nconst port = process.env.APIFY_CONTAINER_PORT;\n\napp.get('/', (req, res) => {\n    res.send('Hello World!');\n});\n\napp.listen(port, () => console.log(`Web server is listening\n    and can be accessed at\n    ${process.env.APIFY_CONTAINER_URL}!`));\n\n// Let the actor run for an hour.\nawait new Promise((r) => setTimeout(r, 60 * 60 * 1000));\n\nawait Actor.exit();\n")),(0,o.kt)("h2",{id:"data-retention"},"Data retention"),(0,o.kt)("p",null,"An actor run is deleted along with its default storages (key-value store, dataset, request queue) after a data retention period which is based on your ",(0,o.kt)("a",{parentName:"p",href:"https://apify.com/pricing",target:"_blank",rel:"noopener"},"subscription plan"),"."),(0,o.kt)("h2",{id:"sharing"},"Sharing"),(0,o.kt)("p",null,"You can share your actor runs with other Apify users via the ",(0,o.kt)("a",{parentName:"p",href:"/platform/access-rights",target:null,rel:null},"access rights")," system. ",(0,o.kt)("a",{parentName:"p",href:"/platform/access-rights/list-of-permissions",target:null,rel:null},"See the full list of permissions"),"."))}h.isMDXComponent=!0},93371:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/actor-console-e93c87460ca3510ff5a65bac06ec41cd.png"}}]);