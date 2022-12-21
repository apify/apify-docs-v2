"use strict";(self.webpackChunkapify_docs_v2=self.webpackChunkapify_docs_v2||[]).push([[3406],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>f});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(a),k=r,f=m["".concat(s,".").concat(k)]||m[k]||c[k]||o;return a?n.createElement(f,i(i({ref:t},u),{},{components:a})):n.createElement(f,i({ref:t},u))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=k;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},12471:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>k,frontMatter:()=>l,metadata:()=>p,toc:()=>m});var n=a(87462),r=a(63366),o=(a(67294),a(3905)),i=["components"],l={title:"Actor or task run failure",description:"A step-by-step monitoring tutorial that shows how you can receive notifications when an actor or task run fails or does not return enough results.",sidebar_position:6.1,category:"guides",slug:"/monitoring/actor-or-task-run-failure"},s="[](#monitor-actor-or-task-runs-for-failure) Monitor actor or task runs for failure",p={unversionedId:"monitoring/actor_or_task_run_failure",id:"monitoring/actor_or_task_run_failure",title:"Actor or task run failure",description:"A step-by-step monitoring tutorial that shows how you can receive notifications when an actor or task run fails or does not return enough results.",source:"@site/sources/platform/monitoring/actor_or_task_run_failure.md",sourceDirName:"monitoring",slug:"/monitoring/actor-or-task-run-failure",permalink:"/platform/monitoring/actor-or-task-run-failure",draft:!1,tags:[],version:"current",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1671632368,formattedLastUpdatedAt:"Dec 21, 2022",sidebarPosition:6.1,frontMatter:{title:"Actor or task run failure",description:"A step-by-step monitoring tutorial that shows how you can receive notifications when an actor or task run fails or does not return enough results.",sidebar_position:6.1,category:"guides",slug:"/monitoring/actor-or-task-run-failure"},sidebar:"docs",previous:{title:"Monitoring",permalink:"/platform/monitoring"},next:{title:"Check data quality",permalink:"/platform/monitoring/check-data-quality"}},u={},m=[{value:" Use case",id:"-use-case",level:2},{value:" Create a new monitoring task",id:"-create-a-new-monitoring-task",level:2},{value:" Monitoring configuration",id:"-monitoring-configuration",level:2},{value:" Validate data",id:"-validate-data",level:2}],c={toc:m};function k(e){var t=e.components,l=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"-monitor-actor-or-task-runs-for-failure"},(0,o.kt)("a",{parentName:"h1",href:"#monitor-actor-or-task-runs-for-failure",target:null,rel:null})," Monitor actor or task runs for failure"),(0,o.kt)("p",null,"This example walks you through setting up ",(0,o.kt)("a",{parentName:"p",href:"https://apify.com/apify/monitoring",target:"_blank",rel:"noopener"},"monitoring")," for an ",(0,o.kt)("a",{parentName:"p",href:"/platform/actors",target:null,rel:null},"actor"),". The monitoring suite will send you notifications when the actor or task fails or returns too few results."),(0,o.kt)("h2",{id:"-use-case"},(0,o.kt)("a",{parentName:"h2",href:"#use-case",target:null,rel:null})," Use case"),(0,o.kt)("p",null,"You want to be notified when an actor / task ",(0,o.kt)("strong",{parentName:"p"},"does not")," finish successfully."),(0,o.kt)("p",null,"This means the ",(0,o.kt)("a",{parentName:"p",href:"/platform/monitoring",target:null,rel:null},"notification")," will be sent whenever the actor or task:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Fails (finishes with the status ",(0,o.kt)("strong",{parentName:"li"},"FAILED"),")."),(0,o.kt)("li",{parentName:"ul"},"Times out (finishes with status ",(0,o.kt)("strong",{parentName:"li"},"TIMED OUT"),")."),(0,o.kt)("li",{parentName:"ul"},"There are no results or there are fewer results than ",(0,o.kt)("a",{parentName:"li",href:"#validate-data",target:null,rel:null},"expected"),".")),(0,o.kt)("p",null,"For this example, we will use an ",(0,o.kt)("strong",{parentName:"p"},"Instagram Scraper")," (",(0,o.kt)("a",{parentName:"p",href:"https://apify.com/jaroslavhejlek/instagram-scraper",target:"_blank",rel:"noopener"},"jaroslavhejlek/instagram-scraper"),") task which gets a fresh batch of ",(0,o.kt)("inlineCode",{parentName:"p"},"#puppies")," photos every day."),(0,o.kt)("p",null,"Let us say you have created a task named ",(0,o.kt)("strong",{parentName:"p"},"puppies-from-instagram")," and run it regularly (manually or using a ",(0,o.kt)("a",{parentName:"p",href:"/platform/schedules",target:null,rel:null},"schedule"),")."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Puppies",src:a(60091).Z,width:"1500",height:"785"})),(0,o.kt)("h2",{id:"-create-a-new-monitoring-task"},(0,o.kt)("a",{parentName:"h2",href:"#create-a-new-monitoring-task",target:null,rel:null})," Create a new monitoring task"),(0,o.kt)("p",null,"If you haven't already, ",(0,o.kt)("a",{parentName:"p",href:"/platform/monitoring",target:null,rel:null},"add the monitoring suite to your account"),"."),(0,o.kt)("p",null,"If you have already added the task, under its ",(0,o.kt)("strong",{parentName:"p"},"Settings")," tab, give it a name. For example, ",(0,o.kt)("strong",{parentName:"p"},"monitoring-puppies-are-ok"),", since we're monitoring the ",(0,o.kt)("strong",{parentName:"p"},"puppies-from-instagram")," task."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"We recommend prefixing your monitoring task names with ",(0,o.kt)("inlineCode",{parentName:"p"},"monitoring-")," so you could identify them easier.")),(0,o.kt)("p",null,"Next, we will configure the monitoring suite."),(0,o.kt)("h2",{id:"-monitoring-configuration"},(0,o.kt)("a",{parentName:"h2",href:"#monitoring-configuration",target:null,rel:null})," Monitoring configuration"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Under your task's ",(0,o.kt)("strong",{parentName:"p"},"Input")," tab, set the ",(0,o.kt)("strong",{parentName:"p"},"Mode")," dropdown to ",(0,o.kt)("strong",{parentName:"p"},"Create configuration"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Next, open the ",(0,o.kt)("strong",{parentName:"p"},"What you want to monitor")," section. Give the monitoring suite a name in the ",(0,o.kt)("strong",{parentName:"p"},"Monitoring suite name")," field, e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"puppies-are-ok"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In the ",(0,o.kt)("strong",{parentName:"p"},"Type of target:")," dropdown, select ",(0,o.kt)("strong",{parentName:"p"},"Task"),", since you will be monitoring an Instagram Scraper task.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Target name patterns")," should be the name of your task, ",(0,o.kt)("inlineCode",{parentName:"p"},"puppies-from-instagram"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Select the ",(0,o.kt)("strong",{parentName:"p"},"Notify me whenever actor/task does not succeed")," option to receive a report when a run finishes unsuccessfully."))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Each of your monitoring suites must have a unique name.")),(0,o.kt)("p",null,"The configuration should look like this:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Task configuration",src:a(91454).Z,width:"1300",height:"846"})),(0,o.kt)("h2",{id:"-validate-data"},(0,o.kt)("a",{parentName:"h2",href:"#validate-data",target:null,rel:null})," Validate data"),(0,o.kt)("p",null,"Let's say you need a minimum number of 100 results."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Open the ",(0,o.kt)("strong",{parentName:"p"},"Validating by a schema")," section and select the ",(0,o.kt)("strong",{parentName:"p"},"Enable schema validation")," option.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In the ",(0,o.kt)("strong",{parentName:"p"},"Validation options")," field, create an ",(0,o.kt)("a",{parentName:"p",href:"https://javascript.info/object",target:"_blank",rel:"noopener"},"object")," containing a ",(0,o.kt)("inlineCode",{parentName:"p"},"minItemCount")," key with ",(0,o.kt)("inlineCode",{parentName:"p"},"100")," as its value. You can also set this number to ",(0,o.kt)("inlineCode",{parentName:"p"},"1")," if you want to be notified only when there are ",(0,o.kt)("strong",{parentName:"p"},"no")," items."))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Task configuration - schema",src:a(31847).Z,width:"1300",height:"680"})),(0,o.kt)("p",null,"Finally, click the ",(0,o.kt)("strong",{parentName:"p"},"Save & Run")," button, and you're done."),(0,o.kt)("p",null,"From now on, you will get a ",(0,o.kt)("a",{parentName:"p",href:"/platform/monitoring",target:null,rel:null},"notification")," to your account's email every time your ",(0,o.kt)("inlineCode",{parentName:"p"},"puppies-from-instagram")," task doesn't succeed or returns fewer than 100 items."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Failed run example",src:a(32103).Z,width:"1686",height:"828"})))}k.isMDXComponent=!0},91454:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/puppies-config-a70ce786aa3b6b4c3b1d0c937c60bff0.webp"},32103:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/puppies-failed-run-8414b60083c5a527877fd380241e15ed.webp"},31847:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/puppies-schema-28eaa1f3165d6c41839d91751d11d694.webp"},60091:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/puppies-task-591fc5a52dff4c7cebc0f9002bed5375.webp"}}]);