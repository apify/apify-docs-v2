"use strict";(self.webpackChunkapify_docs_v2=self.webpackChunkapify_docs_v2||[]).push([[3406],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>k});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var l=a.createContext({}),p=function(t){var e=a.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},u=function(t){var e=p(t.components);return a.createElement(l.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,l=t.parentName,u=s(t,["components","mdxType","originalType","parentName"]),m=p(n),k=r,f=m["".concat(l,".").concat(k)]||m[k]||c[k]||o;return n?a.createElement(f,i(i({ref:e},u),{},{components:n})):a.createElement(f,i({ref:e},u))}));function k(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s.mdxType="string"==typeof t?t:r,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},12471:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>u,contentTitle:()=>l,default:()=>k,frontMatter:()=>s,metadata:()=>p,toc:()=>c});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),i=["components"],s={title:"Actor or task run failure",description:"A step-by-step monitoring tutorial that shows how you can receive notifications when an actor or task run fails or does not return enough results.",sidebar_position:6.1,category:"guides",slug:"/monitoring/actor-or-task-run-failure"},l="Monitor actor or task runs for failure",p={unversionedId:"monitoring/actor_or_task_run_failure",id:"monitoring/actor_or_task_run_failure",title:"Actor or task run failure",description:"A step-by-step monitoring tutorial that shows how you can receive notifications when an actor or task run fails or does not return enough results.",source:"@site/sources/platform/monitoring/actor_or_task_run_failure.md",sourceDirName:"monitoring",slug:"/monitoring/actor-or-task-run-failure",permalink:"/platform/monitoring/actor-or-task-run-failure",draft:!1,editUrl:"https://github.com/apify/apify-docs-v2/edit/master/sources/platform/monitoring/actor_or_task_run_failure.md",tags:[],version:"current",lastUpdatedBy:"Marcus Papin",lastUpdatedAt:1677519978,formattedLastUpdatedAt:"Feb 27, 2023",sidebarPosition:6.1,frontMatter:{title:"Actor or task run failure",description:"A step-by-step monitoring tutorial that shows how you can receive notifications when an actor or task run fails or does not return enough results.",sidebar_position:6.1,category:"guides",slug:"/monitoring/actor-or-task-run-failure"},sidebar:"docs",previous:{title:"Monitoring",permalink:"/platform/monitoring"},next:{title:"Check data quality",permalink:"/platform/monitoring/check-data-quality"}},u={},c=[{value:"Use case",id:"use-case",level:2},{value:"Create a new monitoring task",id:"create-a-new-monitoring-task",level:2},{value:"Monitoring configuration",id:"monitoring-configuration",level:2},{value:"Validate data",id:"validate-data",level:2}],m={toc:c};function k(t){var e=t.components,s=(0,r.Z)(t,i);return(0,o.kt)("wrapper",(0,a.Z)({},m,s,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"monitor-actor-or-task-runs-for-failure"},"Monitor actor or task runs for failure"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"A step-by-step monitoring tutorial that shows how you can receive notifications when an actor or task run fails or does not return enough results.")),(0,o.kt)("hr",null),(0,o.kt)("p",null,"This example walks you through setting up ",(0,o.kt)("a",{parentName:"p",href:"https://apify.com/apify/monitoring",target:"_blank",rel:"noopener"},"monitoring")," for an ",(0,o.kt)("a",{parentName:"p",href:"/platform/actors",target:null,rel:null},"actor")," or ",(0,o.kt)("a",{parentName:"p",href:"/platform/actors/tasks",target:null,rel:null},"task"),". The monitoring suite will send you notifications when the actor or task fails or returns too few results."),(0,o.kt)("h2",{id:"use-case"},"Use case"),(0,o.kt)("p",null,"You want to be notified when an actor / task ",(0,o.kt)("strong",{parentName:"p"},"does not")," finish successfully."),(0,o.kt)("p",null,"This means the ",(0,o.kt)("a",{parentName:"p",href:"/platform/monitoring",target:null,rel:null},"notification")," will be sent whenever the actor or task:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Fails (finishes with the status ",(0,o.kt)("strong",{parentName:"li"},"FAILED"),")."),(0,o.kt)("li",{parentName:"ul"},"Times out (finishes with status ",(0,o.kt)("strong",{parentName:"li"},"TIMED OUT"),")."),(0,o.kt)("li",{parentName:"ul"},"There are no results or there are fewer results than ",(0,o.kt)("a",{parentName:"li",href:"#validate-data",target:null,rel:null},"expected"),".")),(0,o.kt)("p",null,"For this example, we will use an ",(0,o.kt)("strong",{parentName:"p"},"Instagram Scraper")," (",(0,o.kt)("a",{parentName:"p",href:"https://apify.com/jaroslavhejlek/instagram-scraper",target:"_blank",rel:"noopener"},"jaroslavhejlek/instagram-scraper"),") task which gets a fresh batch of ",(0,o.kt)("inlineCode",{parentName:"p"},"#puppies")," photos every day."),(0,o.kt)("p",null,"Let us say you have created a task named ",(0,o.kt)("strong",{parentName:"p"},"puppies-from-instagram")," and run it regularly (manually or using a ",(0,o.kt)("a",{parentName:"p",href:"/platform/schedules",target:null,rel:null},"schedule"),")."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Puppies",src:n(53768).Z,width:"1500",height:"785"})),(0,o.kt)("h2",{id:"create-a-new-monitoring-task"},"Create a new monitoring task"),(0,o.kt)("p",null,"If you haven't already, ",(0,o.kt)("a",{parentName:"p",href:"/platform/monitoring",target:null,rel:null},"add the monitoring suite to your account"),"."),(0,o.kt)("p",null,"If you have already added the task, under its ",(0,o.kt)("strong",{parentName:"p"},"Settings")," tab, give it a name. For example, ",(0,o.kt)("strong",{parentName:"p"},"monitoring-puppies-are-ok"),", since we're monitoring the ",(0,o.kt)("strong",{parentName:"p"},"puppies-from-instagram")," task."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"We recommend prefixing your monitoring task names with ",(0,o.kt)("inlineCode",{parentName:"p"},"monitoring-")," so you could identify them easier.")),(0,o.kt)("p",null,"Next, we will configure the monitoring suite."),(0,o.kt)("h2",{id:"monitoring-configuration"},"Monitoring configuration"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Under your task's ",(0,o.kt)("strong",{parentName:"p"},"Input")," tab, set the ",(0,o.kt)("strong",{parentName:"p"},"Mode")," dropdown to ",(0,o.kt)("strong",{parentName:"p"},"Create configuration"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Next, open the ",(0,o.kt)("strong",{parentName:"p"},"What you want to monitor")," section. Give the monitoring suite a name in the ",(0,o.kt)("strong",{parentName:"p"},"Monitoring suite name")," field, e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"puppies-are-ok"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In the ",(0,o.kt)("strong",{parentName:"p"},"Type of target:")," dropdown, select ",(0,o.kt)("strong",{parentName:"p"},"Task"),", since you will be monitoring an Instagram Scraper task.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Target name patterns")," should be the name of your task, ",(0,o.kt)("inlineCode",{parentName:"p"},"puppies-from-instagram"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Select the ",(0,o.kt)("strong",{parentName:"p"},"Notify me whenever actor/task does not succeed")," option to receive a report when a run finishes unsuccessfully."))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Each of your monitoring suites must have a unique name.")),(0,o.kt)("p",null,"The configuration should look like this:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Task configuration",src:n(57736).Z,width:"1300",height:"846"})),(0,o.kt)("h2",{id:"validate-data"},"Validate data"),(0,o.kt)("p",null,"Let's say you need a minimum number of 100 results."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Open the ",(0,o.kt)("strong",{parentName:"p"},"Validating by a schema")," section and select the ",(0,o.kt)("strong",{parentName:"p"},"Enable schema validation")," option.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In the ",(0,o.kt)("strong",{parentName:"p"},"Validation options")," field, create an ",(0,o.kt)("a",{parentName:"p",href:"https://javascript.info/object",target:"_blank",rel:"noopener"},"object")," containing a ",(0,o.kt)("inlineCode",{parentName:"p"},"minItemCount")," key with ",(0,o.kt)("inlineCode",{parentName:"p"},"100")," as its value. You can also set this number to ",(0,o.kt)("inlineCode",{parentName:"p"},"1")," if you want to be notified only when there are ",(0,o.kt)("strong",{parentName:"p"},"no")," items."))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Task configuration - schema",src:n(62844).Z,width:"1300",height:"680"})),(0,o.kt)("p",null,"Finally, click the ",(0,o.kt)("strong",{parentName:"p"},"Save & Run")," button, and you're done."),(0,o.kt)("p",null,"From now on, you will get a ",(0,o.kt)("a",{parentName:"p",href:"/platform/monitoring",target:null,rel:null},"notification")," to your account's email every time your ",(0,o.kt)("inlineCode",{parentName:"p"},"puppies-from-instagram")," task doesn't succeed or returns fewer than 100 items."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Failed run example",src:n(80613).Z,width:"1686",height:"828"})))}k.isMDXComponent=!0},57736:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/puppies-config-c5dbc4b948ef779b19705012bc8b44a8.png"},80613:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/puppies-failed-run-1b83b815f31a17842f6b948076c05c2b.png"},62844:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/puppies-schema-bef1fcf4909db55afc913c76ed2a2df5.png"},53768:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/puppies-task-efd602de54fa8f123a74adf9cc504e8c.png"}}]);