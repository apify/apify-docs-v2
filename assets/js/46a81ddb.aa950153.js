"use strict";(self.webpackChunkapify_docs_v2=self.webpackChunkapify_docs_v2||[]).push([[8931],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=u(n),f=r,d=m["".concat(l,".").concat(f)]||m[f]||p[f]||o;return n?a.createElement(d,s(s({ref:t},c),{},{components:n})):a.createElement(d,s({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var u=2;u<o;u++)s[u]=n[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},64281:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>f,frontMatter:()=>i,metadata:()=>u,toc:()=>p});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),s=["components"],i={title:"Testing and maintenance",description:"Learn how to automate ongoing maintenance and make sure your actors perform over time. See code examples for configuring the Actor Testing actor.",slug:"/actors/development/testing-and-maintenance"},l="Testing and maintaining your actors",u={unversionedId:"actors/development/testing_and_maintenance",id:"actors/development/testing_and_maintenance",title:"Testing and maintenance",description:"Learn how to automate ongoing maintenance and make sure your actors perform over time. See code examples for configuring the Actor Testing actor.",source:"@site/sources/platform/actors/development/testing_and_maintenance.md",sourceDirName:"actors/development",slug:"/actors/development/testing-and-maintenance",permalink:"/platform/actors/development/testing-and-maintenance",draft:!1,editUrl:"https://github.com/apify/apify-docs-v2/edit/master/sources/platform/actors/development/testing_and_maintenance.md",tags:[],version:"current",lastUpdatedBy:"Luk\xe1\u0161 K\u0159ivka",lastUpdatedAt:1676882966,formattedLastUpdatedAt:"Feb 20, 2023",frontMatter:{title:"Testing and maintenance",description:"Learn how to automate ongoing maintenance and make sure your actors perform over time. See code examples for configuring the Actor Testing actor.",slug:"/actors/development/testing-and-maintenance"},sidebar:"docs",previous:{title:"State persistence",permalink:"/platform/actors/development/state-persistence"},next:{title:"Paid actors",permalink:"/platform/actors/paid-actors"}},c={},p=[{value:"Step-by-step guide",id:"step-by-step-guide",level:2},{value:"Set up tasks you will test",id:"set-up-tasks-you-will-test",level:2},{value:"Set up a task from the Actor Testing actor",id:"set-up-a-task-from-the-actor-testing-actor",level:2}],m={toc:p};function f(e){var t=e.components,i=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"testing-and-maintaining-your-actors"},"Testing and maintaining your actors"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Learn how to automate ongoing maintenance and make sure your actors perform over time. See code examples for configuring the Actor Testing actor.")),(0,o.kt)("hr",null),(0,o.kt)("p",null,"You should make sure your ",(0,o.kt)("a",{parentName:"p",href:"/platform/actors",target:null,rel:null},"actors")," (especially ",(0,o.kt)("a",{parentName:"p",href:"/platform/actors/paid-actors",target:null,rel:null},"paid ones"),") are well-maintained. You might not always get feedback from your users, therefore it is crucial that you periodically check if your actors work as expected. You can do this using our ",(0,o.kt)("a",{parentName:"p",href:"https://apify.com/apify/monitoring",target:"_blank",rel:"noopener"},"monitoring suite")," or by setting up daily runs of the ",(0,o.kt)("strong",{parentName:"p"},"Actor Testing")," (",(0,o.kt)("a",{parentName:"p",href:"https://apify.com/pocesar/actor-testing",target:"_blank",rel:"noopener"},"pocesar/actor-testing"),") actor."),(0,o.kt)("p",null,"The monitoring suite is sufficient for most scenarios and includes automated alerts. ",(0,o.kt)("a",{parentName:"p",href:"https://apify.com/apify/monitoring",target:"_blank",rel:"noopener"},"See more information")," on the suite's page or ",(0,o.kt)("a",{parentName:"p",href:"/platform/monitoring",target:null,rel:null},"check out our tutorials"),"."),(0,o.kt)("p",null,"We recommend using the Actor Testing actor for specific and advanced use cases. This guide will help you set it up."),(0,o.kt)("h2",{id:"step-by-step-guide"},"Step-by-step guide"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Prepare 1-5 separate testing tasks for your actor. (",(0,o.kt)("a",{parentName:"li",href:"#set-up-tasks-you-will-test",target:null,rel:null},"See below"),")."),(0,o.kt)("li",{parentName:"ol"},"Set up a task from the Actor Testing actor. (",(0,o.kt)("a",{parentName:"li",href:"#set-up-a-task-from-the-actor-testing-actor",target:null,rel:null},"See below"),")."),(0,o.kt)("li",{parentName:"ol"},"Run the test task until all tests succeed (a few times)."),(0,o.kt)("li",{parentName:"ol"},"Schedule the test to run at the frequency of your choice (recommended daily) and choose a communication channel receiving info about it (",(0,o.kt)("a",{parentName:"li",href:"https://apify.com/katerinahronik/slack-message",target:"_blank",rel:"noopener"},"Slack")," or ",(0,o.kt)("a",{parentName:"li",href:"https://apify.com/apify/send-mail",target:"_blank",rel:"noopener"},"email"),")."),(0,o.kt)("li",{parentName:"ol"},"Ensure you review and fix any issues on a weekly basis.")),(0,o.kt)("h2",{id:"set-up-tasks-you-will-test"},"Set up tasks you will test"),(0,o.kt)("p",null,"First, set up ",(0,o.kt)("a",{parentName:"p",href:"/platform/actors/tasks",target:null,rel:null},"tasks")," for all the possible input configurations your actor has. If your actor has only a couple of configuration options (e.g., it only has ",(0,o.kt)("strong",{parentName:"p"},"search term")," and ",(0,o.kt)("strong",{parentName:"p"},"proxy configuration")," inputs), one task is enough. If you have several options (e.g., ",(0,o.kt)("strong",{parentName:"p"},"location"),"/",(0,o.kt)("strong",{parentName:"p"},"URL"),"/",(0,o.kt)("strong",{parentName:"p"},"max results"),") make sure you prepare tasks for all of them."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Tasks that test an actor&#39;s configurations",src:n(73066).Z,width:"800",height:"225"})),(0,o.kt)("p",null,"We also advise to test your actor's default run \u2013 one that uses the pre-filled inputs. It is often the first task your users run and they may be put off if it doesn't work."),(0,o.kt)("p",null,"Set a low ",(0,o.kt)("inlineCode",{parentName:"p"},"maxItem")," value for your testing tasks, so that you don't burn your credit. If you need to test your actor with a large amount of data, set the scheduler to run less frequently."),(0,o.kt)("h2",{id:"set-up-a-task-from-the-actor-testing-actor"},"Set up a task from the Actor Testing actor"),(0,o.kt)("p",null,"You can ",(0,o.kt)("a",{parentName:"p",href:"https://apify.com/pocesar/actor-testing",target:"_blank",rel:"noopener"},"find the setup guide")," in the actor's README. We recommend testing for the following scenarios."),(0,o.kt)("p",null,"Run status:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"await expectAsync(runResult).toHaveStatus('SUCCEEDED');\n")),(0,o.kt)("p",null,"Crash information from the log:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"await expectAsync(runResult).withLog((log) => {\n    // Neither ReferenceError or TypeErrors should ever occur\n    // in production code \u2013 they mean the code is over-optimistic\n    // The errors must be dealt with gracefully and displayed with a helpful message to the user\n    expect(log)\n        .withContext(runResult.format('ReferenceError'))\n        .not.toContain('ReferenceError');\n\n    expect(log)\n        .withContext(runResult.format('TypeError'))\n        .not.toContain('TypeError');\n});\n")),(0,o.kt)("p",null,"Information from statistics (runtime, retries):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"await expectAsync(runResult).withStatistics((stats) => {\n    // In most cases, you want it to be as close to zero as possible\n    expect(stats.requestsRetries)\n        .withContext(runResult.format('Request retries'))\n        .toBeLessThan(3);\n\n    // What is the expected run time for the number of items?\n    expect(stats.crawlerRuntimeMillis)\n        .withContext(runResult.format('Run time'))\n        .toBeWithinRange(1 * 60000, 10 * 60000);\n});\n")),(0,o.kt)("p",null,"Information about and from within the ",(0,o.kt)("a",{parentName:"p",href:"/platform/storage/dataset",target:null,rel:null},"dataset"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"await expectAsync(runResult).withDataset(({ dataset, info }) => {\n    // If you're sure, always set this number to be your exact maxItems\n    expect(info.cleanItemCount)\n        .withContext(runResult.format('Dataset cleanItemCount'))\n        .toBe(3); //or toBeGreaterThan(1) or toBeWithinRange(1,3)\n\n    // Make sure the dataset isn't empty\n    expect(dataset.items)\n        .withContext(runResult.format('Dataset items array'))\n        .toBeNonEmptyArray();\n\n    const results = dataset.items;\n\n    // Check dataset items to have the expected data format\n    for (let r in results) {\n        expect(results[r].directUrl)\n            .withContext(runResult.format('Direct url'))\n            .toStartWith('https://www.yelp.com/biz/');\n\n        expect(results[r].bizId)\n            .withContext(runResult.format('Biz ID'))\n            .toBeNonEmptyString();\n    }\n});\n")),(0,o.kt)("p",null,"Information about the ",(0,o.kt)("a",{parentName:"p",href:"/platform/storage/key-value-store",target:null,rel:null},"key-value store"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"await expectAsync(runResult).withKeyValueStore(({ contentType }) => {\n   // Check for the proper content type of the saved key-value item\n     expect(contentType)\n         .withContext(runResult.format('KVS contentType'))\n         .toBe('image/gif');\n    },\n\n    // This also checks for existence of the key-value key\n    { keyName: 'apify.com-scroll_losless-comp' }\n);\n")))}f.isMDXComponent=!0},73066:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/testing-tasks-3ae7749531ca03a684d863b62e59f5e9.png"}}]);