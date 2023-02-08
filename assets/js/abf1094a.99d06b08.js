"use strict";(self.webpackChunkapify_docs_v2=self.webpackChunkapify_docs_v2||[]).push([[7606],{3905:(t,e,a)=>{a.d(e,{Zo:()=>p,kt:()=>m});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function s(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?s(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},s=Object.keys(t);for(n=0;n<s.length;n++)a=s[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(n=0;n<s.length;n++)a=s[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var u=n.createContext({}),l=function(t){var e=n.useContext(u),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},p=function(t){var e=l(t.components);return n.createElement(u.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,s=t.originalType,u=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),d=l(a),m=r,h=d["".concat(u,".").concat(m)]||d[m]||c[m]||s;return a?n.createElement(h,o(o({ref:e},p),{},{components:a})):n.createElement(h,o({ref:e},p))}));function m(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var s=a.length,o=new Array(s);o[0]=d;var i={};for(var u in e)hasOwnProperty.call(e,u)&&(i[u]=e[u]);i.originalType=t,i.mdxType="string"==typeof t?t:r,o[1]=i;for(var l=2;l<s;l++)o[l]=a[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},26660:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>u,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=a(87462),r=a(63366),s=(a(67294),a(3905)),o=["components"],i={title:"Inputs & outputs",description:"Create an actor from scratch which takes an input, processes that input, then outputs a result that can be used elsewhere.",sidebar_position:3,slug:"/getting-started/inputs-outputs"},u="Inputs & outputs",l={unversionedId:"platform/getting_started/inputs_outputs",id:"platform/getting_started/inputs_outputs",title:"Inputs & outputs",description:"Create an actor from scratch which takes an input, processes that input, then outputs a result that can be used elsewhere.",source:"@site/sources/academy/platform/getting_started/inputs_outputs.md",sourceDirName:"platform/getting_started",slug:"/getting-started/inputs-outputs",permalink:"/academy/getting-started/inputs-outputs",draft:!1,editUrl:"https://github.com/apify/apify-docs-v2/edit/master/sources/academy/platform/getting_started/inputs_outputs.md",tags:[],version:"current",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1675852910,formattedLastUpdatedAt:"Feb 8, 2023",sidebarPosition:3,frontMatter:{title:"Inputs & outputs",description:"Create an actor from scratch which takes an input, processes that input, then outputs a result that can be used elsewhere.",sidebar_position:3,slug:"/getting-started/inputs-outputs"},sidebar:"academy",previous:{title:"Creating actors",permalink:"/academy/getting-started/creating-actors"},next:{title:"Apify API",permalink:"/academy/getting-started/apify-api"}},p={},c=[{value:"Accept input into an actor",id:"accept-input",level:2},{value:"Configuring an actor with inputs",id:"configuring",level:2},{value:"View actor results",id:"view-results",level:2},{value:"Next up",id:"next",level:2}],d={toc:c};function m(t){var e=t.components,i=(0,r.Z)(t,o);return(0,s.kt)("wrapper",(0,n.Z)({},d,i,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"inputs-outputs"},"Inputs & outputs"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Create an actor from scratch which takes an input, processes that input, then outputs a result that can be used elsewhere.")),(0,s.kt)("hr",null),(0,s.kt)("p",null,"Most of the time, when you are writing any sort of software, it will generally expect some sort of input and generate some sort of output. It is the same exact story when it comes to actors, which is why we at Apify have made it so easy to accept input into an actor and store its results somewhere."),(0,s.kt)("p",null,"In this lesson, we'll be demonstrating inputs and outputs by building an actor which takes two numbers as input, adds them up, then outputs the result."),(0,s.kt)("h2",{id:"accept-input"},"Accept input into an actor"),(0,s.kt)("p",null,"Let's first create another new actor using the same template as before. Feel free to refer to the ",(0,s.kt)("a",{parentName:"p",href:"/academy/getting-started/creating-actors",target:null,rel:null},"previous lesson")," for a refresher on how to do this."),(0,s.kt)("p",null,"Replace all of the code in ",(0,s.kt)("strong",{parentName:"p"},"main.js")," with this code snippet:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"import { Actor } from 'apify';\n\nawait Actor.init();\n\n// Grab our numbers which were inputted\nconst { num1, num2 } = await Actor.getInput();\n\n// Calculate the solution\nconst solution = num1 + num2;\n\n// Push the solution to the dataset\nawait Actor.pushData({ solution })\n\nawait Actor.exit();\n")),(0,s.kt)("p",null,"Then, replace everything in ",(0,s.kt)("strong",{parentName:"p"},"INPUT_SCHEMA.json"),"  with this:"),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"This step isn't necessary, as the actor will still be able to take input in JSON format without it; however, we are providing the content for this actor's input schema in this lesson, as it will give the Apify platform a blueprint off of which it can generate a nice UI for your inputs, as well as validate their values.")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "title": "Number adder",\n    "type": "object",\n    "schemaVersion": 1,\n    "properties": {\n        "num1": {\n            "title": "1st Number",\n            "type": "integer",\n            "description": "First number.",\n            "editor": "number"\n        },\n        "num2": {\n            "title": "2nd Number",\n            "type": "integer",\n            "description": "Second number.",\n            "editor": "number"\n        }\n    },\n    "required": ["num1", "num2"]\n}\n')),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"If you're interested in learning more about how the code works, and what the ",(0,s.kt)("strong",{parentName:"p"},"INPUT_SCHEMA.json")," means, read about ",(0,s.kt)("a",{parentName:"p",href:"https://docs-v2.apify.com/sdk-js/docs/examples/accept-user-input",target:"_blank",rel:"noopener"},"inputs")," and ",(0,s.kt)("a",{parentName:"p",href:"https://docs-v2.apify.com/sdk-js/docs/examples/add-data-to-dataset",target:"_blank",rel:"noopener"},"adding data to a dataset")," in the Apify SDK documentation, and refer to the ",(0,s.kt)("a",{parentName:"p",href:"/platform/actors/development/input-schema#integer",target:null,rel:null},"input schema docs"),".")),(0,s.kt)("p",null,"Finally, ",(0,s.kt)("strong",{parentName:"p"},"Save")," and ",(0,s.kt)("strong",{parentName:"p"},"Build")," the actor just as you did in the previous lesson."),(0,s.kt)("h2",{id:"configuring"},"Configuring an actor with inputs"),(0,s.kt)("p",null,"If you scroll down a bit, you'll find the ",(0,s.kt)("strong",{parentName:"p"},"Developer console")," located under the multifile editor. By default, after running a build, the ",(0,s.kt)("strong",{parentName:"p"},"Last build")," tab will be selected, where you can see all of the logs related to building the actor. Inputs can be configured within the ",(0,s.kt)("strong",{parentName:"p"},"Input")," tab."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Configuring inputs",src:a(38479).Z,width:"1680",height:"876"})),(0,s.kt)("p",null,"Enter any two numbers you'd like, then press ",(0,s.kt)("strong",{parentName:"p"},"Start"),". The actor's run should complete almost immediately."),(0,s.kt)("h2",{id:"view-results"},"View actor results"),(0,s.kt)("p",null,"Since we've pushed the result into the default dataset, it, and some info about it can be viewed by clicking this box, which will take you to the results tab:"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Result box",src:a(75032).Z,width:"364",height:"324"})),(0,s.kt)("p",null,"On the results tab, there are a whole lot of options for which format to view/download the data in. Keep the default of ",(0,s.kt)("strong",{parentName:"p"},"JSON")," selected, and click on ",(0,s.kt)("strong",{parentName:"p"},"Preview"),"."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Dataset preview",src:a(47509).Z,width:"1516",height:"452"})),(0,s.kt)("p",null,"There's our solution! Did it work for you as well? Now, we can download the data right from the results tab to be used elsewhere, or even programmatically retrieve it by using ",(0,s.kt)("a",{parentName:"p",href:"/api/v2",target:null,rel:null},"Apify's API")," (we'll be discussing how to do this in the next lesson)."),(0,s.kt)("p",null,"It's important to note that the default dataset of the actor, which we pushed our solution to, will be retained for 7 days. If we wanted the data to be retained for an indefinite period of time, we'd have to use a named dataset. For more information about named storages vs unnamed storages, read a bit about ",(0,s.kt)("a",{parentName:"p",href:"/platform/storage#data-retention",target:null,rel:null},"data retention on the Apify platform"),"."),(0,s.kt)("h2",{id:"next"},"Next up"),(0,s.kt)("p",null,"In ",(0,s.kt)("a",{parentName:"p",href:"/academy/getting-started/apify-api",target:null,rel:null},"next lesson"),"'s fun activity, you'll learn how to call the actor we created in this lesson programmatically using one of Apify's most powerful tools - the Apify API."))}m.isMDXComponent=!0},38479:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/configure-inputs-4fed4f7c594aced8e0f432cecc1766e7.webp"},47509:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/dataset-preview-da23f5956de7eccb38a691f09fd3dd1c.png"},75032:(t,e,a)=>{a.d(e,{Z:()=>n});const n="data:image/png;base64,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"}}]);