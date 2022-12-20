"use strict";(self.webpackChunkapify_docs_v2=self.webpackChunkapify_docs_v2||[]).push([[2720],{3905:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>k});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},o=Object.keys(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var s=n.createContext({}),p=function(t){var e=n.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},m=function(t){var e=p(t.components);return n.createElement(s.Provider,{value:e},t.children)},u="mdxType",c={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,o=t.originalType,s=t.parentName,m=l(t,["components","mdxType","originalType","parentName"]),u=p(a),d=r,k=u["".concat(s,".").concat(d)]||u[d]||c[d]||o;return a?n.createElement(k,i(i({ref:e},m),{},{components:a})):n.createElement(k,i({ref:e},m))}));function k(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=a.length,i=new Array(o);i[0]=d;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l[u]="string"==typeof t?t:r,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},10737:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>m,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var n=a(87462),r=a(63366),o=(a(67294),a(3905)),i=["components"],l={title:"Monitor multiple tasks",description:"A step-by-step monitoring tutorial that shows you how to monitor multiple runs, validate your results and visualize them using the monitoring dashboard.",sidebar_position:6.4,category:"guides",slug:"/monitoring/monitor-multiple-tasks"},s="[](#monitor-multiple-actors-or-tasks) Monitor multiple actors or tasks",p={unversionedId:"monitoring/monitor_multiple_tasks",id:"monitoring/monitor_multiple_tasks",title:"Monitor multiple tasks",description:"A step-by-step monitoring tutorial that shows you how to monitor multiple runs, validate your results and visualize them using the monitoring dashboard.",source:"@site/sources/platform/monitoring/monitor_multiple_tasks.md",sourceDirName:"monitoring",slug:"/monitoring/monitor-multiple-tasks",permalink:"/platform/monitoring/monitor-multiple-tasks",draft:!1,tags:[],version:"current",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1671540496,formattedLastUpdatedAt:"Dec 20, 2022",sidebarPosition:6.4,frontMatter:{title:"Monitor multiple tasks",description:"A step-by-step monitoring tutorial that shows you how to monitor multiple runs, validate your results and visualize them using the monitoring dashboard.",sidebar_position:6.4,category:"guides",slug:"/monitoring/monitor-multiple-tasks"},sidebar:"defaultSidebar",previous:{title:"Monitor shared datasets",permalink:"/platform/monitoring/monitor-shared-datasets"},next:{title:"Actors",permalink:"/platform/actors"}},m={},u=[{value:" Use case",id:"-use-case",level:2},{value:" Create a new monitoring task",id:"-create-a-new-monitoring-task",level:2},{value:" Configure monitoring",id:"-configure-monitoring",level:2},{value:" Validate data",id:"-validate-data",level:2},{value:" Set up data visualization",id:"-set-up-data-visualization",level:2}],c={toc:u};function d(t){var e=t.components,l=(0,r.Z)(t,i);return(0,o.kt)("wrapper",(0,n.Z)({},c,l,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"-monitor-multiple-actors-or-tasks"},(0,o.kt)("a",{parentName:"h1",href:"#monitor-multiple-actors-or-tasks",target:null,rel:null})," Monitor multiple actors or tasks"),(0,o.kt)("p",null,"This example walks you through setting up ",(0,o.kt)("a",{parentName:"p",href:"https://apify.com/apify/monitoring",target:"_blank",rel:"noopener"},"monitoring")," for a multiple ",(0,o.kt)("a",{parentName:"p",href:"/platform/actors/tasks",target:null,rel:null},"tasks"),"."),(0,o.kt)("h2",{id:"-use-case"},(0,o.kt)("a",{parentName:"h2",href:"#use-case",target:null,rel:null})," Use case"),(0,o.kt)("p",null,"You want to monitor multiple actors or tasks at once."),(0,o.kt)("p",null,"You need:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"To ",(0,o.kt)("a",{parentName:"li",href:"#validate-data",target:null,rel:null},"validate")," the default dataset (check structure, item count)."),(0,o.kt)("li",{parentName:"ul"},"[Notification]","({{@link monitoring.md#notifications}}) of run failure."),(0,o.kt)("li",{parentName:"ul"},"Statistics presented on a ",(0,o.kt)("a",{parentName:"li",href:"#set-up-data-visualization",target:null,rel:null},"dashboard"),".")),(0,o.kt)("p",null,"In this scenario we'll imagine you want to scrape ",(0,o.kt)("a",{parentName:"p",href:"https://apify.com/covid-19",target:"_blank",rel:"noopener"},"COVID-19 data")," for ",(0,o.kt)("a",{parentName:"p",href:"https://apify.com/store?search=covid",target:"_blank",rel:"noopener"},"several countries"),":\n",(0,o.kt)("a",{parentName:"p",href:"https://apify.com/pocesar/covid-brazil",target:"_blank",rel:"noopener"},"Brazil"),",\n",(0,o.kt)("a",{parentName:"p",href:"https://apify.com/lukass/covid-ger",target:"_blank",rel:"noopener"},"Germany"),",\nthe ",(0,o.kt)("a",{parentName:"p",href:"https://apify.com/petrpatek/covid-usa-cdc",target:"_blank",rel:"noopener"},"USA"),"\nand ",(0,o.kt)("a",{parentName:"p",href:"https://apify.com/tugkan/covid-sg",target:"_blank",rel:"noopener"},"Singapore"),".\nYou have created a task from each of the actors tracking those countries."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Multiple tasks",src:a(75598).Z,width:"1500",height:"519"})),(0,o.kt)("h2",{id:"-create-a-new-monitoring-task"},(0,o.kt)("a",{parentName:"h2",href:"#create-a-new-monitoring-task",target:null,rel:null})," Create a new monitoring task"),(0,o.kt)("p",null,"If you haven't already, ","[add the monitoring suite to your account]","({{@link monitoring.md#add-the-monitoring-suite-to-your-account}})."),(0,o.kt)("p",null,"If you have already added the task, under its ",(0,o.kt)("strong",{parentName:"p"},"Settings")," tab, give it a name. For example, ",(0,o.kt)("inlineCode",{parentName:"p"},"monitoring-covid-tasks"),"."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"We recommend prefixing your monitoring task names with ",(0,o.kt)("inlineCode",{parentName:"p"},"monitoring-")," so you could identify them easier.")),(0,o.kt)("p",null,"Next, we will configure the monitoring suite."),(0,o.kt)("h2",{id:"-configure-monitoring"},(0,o.kt)("a",{parentName:"h2",href:"#configure-monitoring",target:null,rel:null})," Configure monitoring"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Under your task's ",(0,o.kt)("strong",{parentName:"p"},"Input")," tab, set the ",(0,o.kt)("strong",{parentName:"p"},"Mode")," dropdown to ",(0,o.kt)("strong",{parentName:"p"},"Create configuration"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Next, open the ",(0,o.kt)("strong",{parentName:"p"},"What you want to monitor")," section. Give the monitoring suite a name in the ",(0,o.kt)("strong",{parentName:"p"},"Monitoring suite name")," field, e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"covid-tasks"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In the ",(0,o.kt)("strong",{parentName:"p"},"Type of target:")," dropdown, select ",(0,o.kt)("strong",{parentName:"p"},"Task"),", since you will be monitoring ",(0,o.kt)("a",{parentName:"p",href:"/platform/actors/tasks",target:null,rel:null},"actor tasks"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Target name patterns")," should be ",(0,o.kt)("inlineCode",{parentName:"p"},"^covid-"),". The task names follow a simple naming convention (all start with ",(0,o.kt)("strong",{parentName:"p"},"covid-"),"), so this name pattern will target all of the above tasks. To select only particular tasks, add separate ",(0,o.kt)("strong",{parentName:"p"},"Target name patterns")," for each: ",(0,o.kt)("inlineCode",{parentName:"p"},"covid-germany"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"covid-usa"),", etc.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Select the ",(0,o.kt)("strong",{parentName:"p"},"Notify me whenever actor/task does not succeed")," option to receive a report when a run finishes unsuccessfully."))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Each of your monitoring suites must have a unique name.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Monitoring covid tasks - configuration",src:a(96040).Z,width:"1500",height:"1001"})),(0,o.kt)("h2",{id:"-validate-data"},(0,o.kt)("a",{parentName:"h2",href:"#validate-data",target:null,rel:null})," Validate data"),(0,o.kt)("p",null,"Now let's ensure that your data have the correct format."),(0,o.kt)("p",null,"We have used four actors from ",(0,o.kt)("a",{parentName:"p",href:"https://apify.com/store",target:"_blank",rel:"noopener"},"Apify Store"),". Each actor will return a differently structured ",(0,o.kt)("a",{parentName:"p",href:"../storage/dataset.md",target:null,rel:null},"dataset"),", so we need to validate them using a different schema. To do this, you can use the tasks' IDs or filter them by their names."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Open the ",(0,o.kt)("strong",{parentName:"p"},"Validating by a schema")," section and select the ",(0,o.kt)("strong",{parentName:"p"},"Enable schema validation")," option.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In the ",(0,o.kt)("strong",{parentName:"p"},"Validation options")," field, create a separate ",(0,o.kt)("a",{parentName:"p",href:"https://javascript.info/object",target:"_blank",rel:"noopener"},"object")," for each task containing ",(0,o.kt)("inlineCode",{parentName:"p"},"filter")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"schema"),". For ",(0,o.kt)("inlineCode",{parentName:"p"},"filter"),", specify the task it is for (e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"covid-singapore"),"). For ",(0,o.kt)("inlineCode",{parentName:"p"},"schema"),", set an object specifying the format of each of the properties you want to validate.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"It is best to set ",(0,o.kt)("strong",{parentName:"p"},"Validation frequency")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"Per run"),", so the data is validated right after it is collected."))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Monitoring dashboard configuration - validate",src:a(99056).Z,width:"1500",height:"1339"})),(0,o.kt)("p",null,"The monitoring suite uses the ",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/ow",target:"_blank",rel:"noopener"},"ow")," library for type validation. Make sure to import the library using ",(0,o.kt)("inlineCode",{parentName:"p"},"/* global ow */"),"."),(0,o.kt)("h2",{id:"-set-up-data-visualization"},(0,o.kt)("a",{parentName:"h2",href:"#set-up-data-visualization",target:null,rel:null})," Set up data visualization"),(0,o.kt)("p",null,"To add the monitoring dashboard, open the ",(0,o.kt)("strong",{parentName:"p"},"Statistics dashboard")," section and enable this feature."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Monitoring dashboard configuration",src:a(89528).Z,width:"1632",height:"528"})))}d.isMDXComponent=!0},96040:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/covid-config-9aa2f0066c0d928d4e00b0acababa4cf.webp"},75598:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/covid-multiple-tasks-b248dd0197797334a167a684674c242a.webp"},99056:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/covid-validate-schema-9dbca90408b169826f6d2cd9549b6389.webp"},89528:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/enable-dashboard-a4a5e9861ab5378505fcdf39a159695d.webp"}}]);