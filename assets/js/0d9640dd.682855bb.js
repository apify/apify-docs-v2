"use strict";(self.webpackChunkapify_docs_v2=self.webpackChunkapify_docs_v2||[]).push([[9213],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(a),m=r,k=d["".concat(s,".").concat(m)]||d[m]||c[m]||o;return a?n.createElement(k,i(i({ref:t},u),{},{components:a})):n.createElement(k,i({ref:t},u))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},80694:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>c});var n=a(87462),r=a(63366),o=(a(67294),a(3905)),i=["components"],l={title:"Check data quality",description:"A step-by-step monitoring tutorial that shows you how to ensure your data is correctly formatted and unique. Visualize your data using the monitoring dashboard.",sidebar_position:6.2,category:"guides",slug:"/monitoring/check-data-quality"},s="Check product-based data for correct format and duplicates",p={unversionedId:"monitoring/check_data_quality",id:"monitoring/check_data_quality",title:"Check data quality",description:"A step-by-step monitoring tutorial that shows you how to ensure your data is correctly formatted and unique. Visualize your data using the monitoring dashboard.",source:"@site/sources/platform/monitoring/check_data_quality.md",sourceDirName:"monitoring",slug:"/monitoring/check-data-quality",permalink:"/platform/monitoring/check-data-quality",draft:!1,tags:[],version:"current",lastUpdatedBy:"Jind\u0159ich B\xe4r",lastUpdatedAt:1675097992,formattedLastUpdatedAt:"Jan 30, 2023",sidebarPosition:6.2,frontMatter:{title:"Check data quality",description:"A step-by-step monitoring tutorial that shows you how to ensure your data is correctly formatted and unique. Visualize your data using the monitoring dashboard.",sidebar_position:6.2,category:"guides",slug:"/monitoring/check-data-quality"},sidebar:"docs",previous:{title:"Actor or task run failure",permalink:"/platform/monitoring/actor-or-task-run-failure"},next:{title:"Monitor shared datasets",permalink:"/platform/monitoring/monitor-shared-datasets"}},u={},c=[{value:"Use case",id:"use-case",level:2},{value:"Create a new monitoring task",id:"create-a-new-monitoring-task",level:2},{value:"Monitoring configuration",id:"monitoring-configuration",level:2},{value:"Validate data",id:"validate-data",level:2},{value:"Check for duplicates",id:"check-for-duplicates",level:2},{value:"Set up data visualization",id:"set-up-data-visualization",level:2},{value:"Getting your results",id:"getting-your-results",level:2}],d={toc:c};function m(e){var t=e.components,l=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"check-product-based-data-for-correct-format-and-duplicates"},"Check product-based data for correct format and duplicates"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"A step-by-step monitoring tutorial that shows you how to ensure your data is correctly formatted and unique. Visualize your data using the monitoring dashboard.")),(0,o.kt)("hr",null),(0,o.kt)("p",null,"This example walks you through setting up ",(0,o.kt)("a",{parentName:"p",href:"https://apify.com/apify/monitoring",target:"_blank",rel:"noopener"},"monitoring")," for an ",(0,o.kt)("a",{parentName:"p",href:"/platform/actors",target:null,rel:null},"actor")," or ",(0,o.kt)("a",{parentName:"p",href:"/platform/actors/tasks",target:null,rel:null},"task"),"."),(0,o.kt)("h2",{id:"use-case"},"Use case"),(0,o.kt)("p",null,"You want regularly scrape product data using a single scraper."),(0,o.kt)("p",null,"You need:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Data to always be in the ",(0,o.kt)("a",{parentName:"li",href:"#validate-data",target:null,rel:null},"correct format"),"."),(0,o.kt)("li",{parentName:"ul"},"Alerts if items are ",(0,o.kt)("a",{parentName:"li",href:"#check-for-duplicates",target:null,rel:null},"duplicated"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/platform/monitoring",target:null,rel:null},"Notification")," when your scheduled run times out or fails."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#set-up-data-visualization",target:null,rel:null},"Data visualization")," on a simple dashboard.")),(0,o.kt)("p",null,"Let's say you're using the ",(0,o.kt)("strong",{parentName:"p"},"Amazon Crawler")," (",(0,o.kt)("a",{parentName:"p",href:"https://apify.com/vaclavrut/amazon-crawler",target:"_blank",rel:"noopener"},"vaclavrut/amazon-crawler"),") from ",(0,o.kt)("a",{parentName:"p",href:"https://apify.com/store",target:"_blank",rel:"noopener"},"Apify Store")," to get daily ",(0,o.kt)("strong",{parentName:"p"},"iPhone X")," offers."),(0,o.kt)("p",null,"You have set up a task named ",(0,o.kt)("inlineCode",{parentName:"p"},"amazon-iphone-offers")," and set up a ",(0,o.kt)("a",{parentName:"p",href:"/platform/schedules",target:null,rel:null},"schedule")," named ",(0,o.kt)("inlineCode",{parentName:"p"},"iphone-daily-offers"),". The schedule runs your task ",(0,o.kt)("a",{parentName:"p",href:"https://crontab.guru/#0_7_*_*_*",target:"_blank",rel:"noopener"},"every morning"),", so you have fresh data ready when you wake up."),(0,o.kt)("h2",{id:"create-a-new-monitoring-task"},"Create a new monitoring task"),(0,o.kt)("p",null,"If you haven't already, ",(0,o.kt)("a",{parentName:"p",href:"/platform/monitoring",target:null,rel:null},"add the monitoring suite to your account"),"."),(0,o.kt)("p",null,"If you have already added the task, under its ",(0,o.kt)("strong",{parentName:"p"},"Settings")," tab, give it a name. For example, ",(0,o.kt)("inlineCode",{parentName:"p"},"monitoring-iphone-offers"),", since we're monitoring the ",(0,o.kt)("inlineCode",{parentName:"p"},"amazon-iphone-offers")," task."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"We recommend prefixing your monitoring task names with ",(0,o.kt)("inlineCode",{parentName:"p"},"monitoring-")," so you could identify them easier.")),(0,o.kt)("h2",{id:"monitoring-configuration"},"Monitoring configuration"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Under your task's ",(0,o.kt)("strong",{parentName:"p"},"Input")," tab, set the ",(0,o.kt)("strong",{parentName:"p"},"Mode")," dropdown to ",(0,o.kt)("strong",{parentName:"p"},"Create configuration"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Next, open the ",(0,o.kt)("strong",{parentName:"p"},"What you want to monitor")," section. Give the monitoring suite a name in the ",(0,o.kt)("strong",{parentName:"p"},"Monitoring suite name")," field, e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"iphone-offers"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In the ",(0,o.kt)("strong",{parentName:"p"},"Type of target:")," dropdown, select ",(0,o.kt)("strong",{parentName:"p"},"Task"),", since you will be monitoring an Amazon Crawler task.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Target name patterns")," should be the name of your task, ",(0,o.kt)("inlineCode",{parentName:"p"},"amazon-iphone-offers"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Select the ",(0,o.kt)("strong",{parentName:"p"},"Notify me whenever actor/task does not succeed")," option to receive a report when a run finishes unsuccessfully."))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Each of your monitoring suites must have a unique name.")),(0,o.kt)("p",null,"This is what the configuration should look like:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Task configuration - input",src:a(84848).Z,width:"1300",height:"859"})),(0,o.kt)("h2",{id:"validate-data"},"Validate data"),(0,o.kt)("p",null,"Let's say you need each item to always have properties such as ",(0,o.kt)("inlineCode",{parentName:"p"},"title"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"ASIN"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"currency")," and a list of ",(0,o.kt)("inlineCode",{parentName:"p"},"sellers"),"."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Open the ",(0,o.kt)("strong",{parentName:"p"},"Validating by a schema")," section and select the ",(0,o.kt)("strong",{parentName:"p"},"Enable schema validation")," option.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In the ",(0,o.kt)("strong",{parentName:"p"},"Validation options")," field, create an ",(0,o.kt)("a",{parentName:"p",href:"https://javascript.info/object",target:"_blank",rel:"noopener"},"object")," containing a ",(0,o.kt)("inlineCode",{parentName:"p"},"schema")," key. As its value, set an object specifying the format of each of the properties you want to validate."))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Task configuration - validate data",src:a(74618).Z,width:"1300",height:"823"})),(0,o.kt)("p",null,"The monitoring suite uses the ",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/ow",target:"_blank",rel:"noopener"},"ow")," library for type validation. Make sure to import the library using ",(0,o.kt)("inlineCode",{parentName:"p"},"/* global ow */"),"."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Validation is done after each run finishes.")),(0,o.kt)("h2",{id:"check-for-duplicates"},"Check for duplicates"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In the ",(0,o.kt)("strong",{parentName:"p"},"Check for duplicates")," section, select the ",(0,o.kt)("strong",{parentName:"p"},"Enable duplicate items check")," option.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Set the ",(0,o.kt)("strong",{parentName:"p"},"Unique keys")," field to ",(0,o.kt)("inlineCode",{parentName:"p"},"asin")," to make sure all the ASIN properties are unique."))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Task configuration - check for duplicates",src:a(82045).Z,width:"1640",height:"580"})),(0,o.kt)("h2",{id:"set-up-data-visualization"},"Set up data visualization"),(0,o.kt)("p",null,"In the ",(0,o.kt)("strong",{parentName:"p"},"Statistics dashboard")," section, check the ",(0,o.kt)("strong",{parentName:"p"},"Enable dashboard")," option to activate data visualization."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Task configuration - visualization",src:a(40018).Z,width:"1632",height:"528"})),(0,o.kt)("p",null,"Finally, click the ",(0,o.kt)("strong",{parentName:"p"},"Save & Run")," button. It will create a monitoring configuration and turn the monitoring ON."),(0,o.kt)("h2",{id:"getting-your-results"},"Getting your results"),(0,o.kt)("p",null,"Following each of your ",(0,o.kt)("inlineCode",{parentName:"p"},"amazon-iphone-offers")," tasks runs, the suite will process your results and report if any of the checks fail. You receive an email with a link to your ",(0,o.kt)("strong",{parentName:"p"},"monitoring project dashboard"),"."),(0,o.kt)("p",null,"Here, you can see the result statuses of your monitored tasks and filter them by time. You can also see each run's ",(0,o.kt)("a",{parentName:"p",href:"/platform/storage/key-value-store",target:null,rel:null},"key-value store")," records and ",(0,o.kt)("a",{parentName:"p",href:"/platform/storage/dataset",target:null,rel:null},"dataset")," item charts."),(0,o.kt)("p",null,"This is what your dashboard can look like after some time:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Monitoring dashboard",src:a(53459).Z,width:"1500",height:"734"})))}m.isMDXComponent=!0},40018:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/enable-dashboard-58f83ca8f6dde23c0bc0ec624994d680.png"},82045:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/iphone-check-duplicates-7cdbf08962de582c8e64b08ad5b18403.png"},84848:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/iphone-task-06f74e6d1d0f9f0c53db0e07860d08ef.png"},74618:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/iphone-validate-data-657958ad8e64285382e38587567fbdb1.png"},53459:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/monitoring-dashboard-f81e95339d49ce041c06ce33b7826b8e.png"}}]);