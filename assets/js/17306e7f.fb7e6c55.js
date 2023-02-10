"use strict";(self.webpackChunkapify_docs_v2=self.webpackChunkapify_docs_v2||[]).push([[3082],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(n),d=i,h=m["".concat(l,".").concat(d)]||m[d]||u[d]||r;return n?a.createElement(h,o(o({ref:t},c),{},{components:n})):a.createElement(h,o({ref:t},c))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},95335:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>s,metadata:()=>p,toc:()=>u});var a=n(87462),i=n(63366),r=(n(67294),n(3905)),o=["components"],s={title:"IV - Using the Apify API & JavaScript client",description:"Learn how to interact with the Apify API directly through the well-documented RESTful routes, or by using the proprietary Apify JavaScript client.",sidebar_position:4,slug:"/expert-scraping-with-apify/solutions/using-api-and-client"},l="Using the Apify API & JavaScript client",p={unversionedId:"platform/expert_scraping_with_apify/solutions/using_api_and_client",id:"platform/expert_scraping_with_apify/solutions/using_api_and_client",title:"IV - Using the Apify API & JavaScript client",description:"Learn how to interact with the Apify API directly through the well-documented RESTful routes, or by using the proprietary Apify JavaScript client.",source:"@site/sources/academy/platform/expert_scraping_with_apify/solutions/using_api_and_client.md",sourceDirName:"platform/expert_scraping_with_apify/solutions",slug:"/expert-scraping-with-apify/solutions/using-api-and-client",permalink:"/academy/expert-scraping-with-apify/solutions/using-api-and-client",draft:!1,editUrl:"https://github.com/apify/apify-docs-v2/edit/master/sources/academy/platform/expert_scraping_with_apify/solutions/using_api_and_client.md",tags:[],version:"current",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1676027512,formattedLastUpdatedAt:"Feb 10, 2023",sidebarPosition:4,frontMatter:{title:"IV - Using the Apify API & JavaScript client",description:"Learn how to interact with the Apify API directly through the well-documented RESTful routes, or by using the proprietary Apify JavaScript client.",sidebar_position:4,slug:"/expert-scraping-with-apify/solutions/using-api-and-client"},sidebar:"academy",previous:{title:"III - Using storage & creating tasks",permalink:"/academy/expert-scraping-with-apify/solutions/using-storage-creating-tasks"},next:{title:"V - Handling migrations",permalink:"/academy/expert-scraping-with-apify/solutions/handling-migrations"}},c={},u=[{value:"Calling a task via JavaScript client",id:"calling-a-task-via-client",level:2},{value:"Calling a task via API",id:"calling-a-task-via-api",level:2},{value:"Finalizing the actor",id:"finalizing-the-actor",level:2},{value:"Final code",id:"final-code",level:2},{value:"Quiz answers \ud83d\udcdd",id:"quiz-answers",level:2},{value:"Wrap up",id:"wrap-up",level:2}],m={toc:u};function d(e){var t=e.components,s=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},m,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"using-api-and-client"},"Using the Apify API & JavaScript client"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Learn how to interact with the Apify API directly through the well-documented RESTful routes, or by using the proprietary Apify JavaScript client.")),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Since we need to create another actor, we'll once again use the ",(0,r.kt)("inlineCode",{parentName:"p"},"apify create")," command and start from an empty template."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Selecting an empty template to start with",src:n(48395).Z,width:"1128",height:"290"})),(0,r.kt)("p",null,"This time, let's call our project ",(0,r.kt)("strong",{parentName:"p"},"actor-caller"),"."),(0,r.kt)("p",null,"Let's also set up some boilerplate, grabbing our inputs and creating a constant variable for the task:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import { Actor } from 'apify';\nimport axios from 'axios';\n\nawait Actor.init();\n\nconst { useClient, memory, fields, maxItems } = await Actor.getInput();\n\nconst TASK = 'YOUR_USERNAME~demo-actor-task';\n\n// our future code will go here\n\nawait Actor.exit();\n")),(0,r.kt)("h2",{id:"calling-a-task-via-client"},"Calling a task via JavaScript client"),(0,r.kt)("p",null,"When using the ",(0,r.kt)("inlineCode",{parentName:"p"},"apify-client")," package, you can create a new client instance by using ",(0,r.kt)("inlineCode",{parentName:"p"},"new ApifyClient()"),". Within the Apify SDK however, it is not necessary to even install the ",(0,r.kt)("inlineCode",{parentName:"p"},"apify-client")," package, as the ",(0,r.kt)("inlineCode",{parentName:"p"},"Actor.newClient()")," function is available for use."),(0,r.kt)("p",null,"We'll start by creating a function called ",(0,r.kt)("inlineCode",{parentName:"p"},"withClient()")," and creating a new client, then calling the task:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const withClient = async () => {\n    const client = Actor.newClient();\n    const task = client.task(TASK);\n\n    const { id } = await task.call({ memory });\n};\n")),(0,r.kt)("p",null,"After the task has run, we'll grab hold of its dataset, then attempt to download the items, plugging in our ",(0,r.kt)("inlineCode",{parentName:"p"},"maxItems")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"fields")," inputs. Then, once the data has been downloaded, we'll push it to the default key-value store under a key named ",(0,r.kt)("strong",{parentName:"p"},"OUTPUT.csv"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const withClient = async () => {\n    const client = Actor.newClient();\n    const task = client.task(TASK);\n\n    const { id } = await task.call({ memory });\n\n    const dataset = client.run(id).dataset();\n\n    const items = await dataset.downloadItems('csv', {\n        limit: maxItems,\n        fields,\n    });\n\n    // If the content type is anything other than JSON, it must\n    // be specified within the third options parameter\n    return Actor.setValue('OUTPUT', items, { contentType: 'text/csv' });\n};\n")),(0,r.kt)("h2",{id:"calling-a-task-via-api"},"Calling a task via API"),(0,r.kt)("p",null,"First, we'll create a function (right under the ",(0,r.kt)("inlineCode",{parentName:"p"},"withClient()"),") function named ",(0,r.kt)("inlineCode",{parentName:"p"},"withAPI")," and instantiate a new variable which represents the API endpoint to run our task:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const withAPI = async () => {\n    const uri = `https://api.apify.com/v2/actor-tasks/${TASK}/run-sync-get-dataset-items?`;\n};\n")),(0,r.kt)("p",null,"To add the query parameters to the URL, we could create a super long string literal, plugging in all of our input values; however, there is a much better way: ",(0,r.kt)("a",{parentName:"p",href:"https://nodejs.org/api/url.html#new-urlsearchparams",target:"_blank",rel:"noopener"},(0,r.kt)("inlineCode",{parentName:"a"},"URLSearchParams")),". By using ",(0,r.kt)("inlineCode",{parentName:"p"},"URLSearchParams"),", we can add the query parameters in an object:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const withAPI = async () => {\n    const uri = `https://api.apify.com/v2/actor-tasks/${TASK}/run-sync-get-dataset-items?`;\n    const url = new URL(uri);\n\n    url.search = new URLSearchParams({\n        memory,\n        format: 'csv',\n        limit: maxItems,\n        fields: fields.join(','),\n        token: process.env.APIFY_TOKEN,\n    });\n};\n")),(0,r.kt)("p",null,"Finally, let's make a ",(0,r.kt)("inlineCode",{parentName:"p"},"POST")," request to our endpoint. You can use any library you want, but in this example, we'll use ",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/axios",target:"_blank",rel:"noopener"},(0,r.kt)("inlineCode",{parentName:"a"},"axios")),". Don't forget to run ",(0,r.kt)("inlineCode",{parentName:"p"},"npm install axios")," if you're going to use this package too!"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const withAPI = async () => {\n    const uri = `https://api.apify.com/v2/actor-tasks/${TASK}/run-sync-get-dataset-items?`;\n    const url = new URL(uri);\n\n    url.search = new URLSearchParams({\n        memory,\n        format: 'csv',\n        limit: maxItems,\n        fields: fields.join(','),\n        token: process.env.APIFY_TOKEN,\n    });\n\n    const { data } = await axios.post(url.toString());\n\n    return Actor.setValue('OUTPUT', data, { contentType: 'text/csv' });\n};\n")),(0,r.kt)("h2",{id:"finalizing-the-actor"},"Finalizing the actor"),(0,r.kt)("p",null,"Now, since we've written both of these functions, all we have to do is write a conditional statement based on the boolean value from ",(0,r.kt)("inlineCode",{parentName:"p"},"useClient"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"if (useClient) await withClient();\nelse await withAPI();\n")),(0,r.kt)("p",null,"And before we push to the platform, let's not forget to write an input schema in the ",(0,r.kt)("strong",{parentName:"p"},"INPUT_SCHEMA.JSON")," file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "title": "Actor Caller",\n  "type": "object",\n  "schemaVersion": 1,\n  "properties": {\n    "memory": {\n      "title": "Memory",\n      "type": "integer",\n      "description": "Select memory in megabytes.",\n      "default": 4096,\n      "maximum": 32768,\n      "unit": "MB"\n    },\n    "useClient": {\n      "title": "Use client?",\n      "type": "boolean",\n      "description": "Specifies whether the Apify JS client, or the pure Apify API should be used.",\n      "default": true\n    },\n    "fields": {\n      "title": "Fields",\n      "type": "array",\n      "description": "Enter the dataset fields to export to CSV",\n      "prefill": ["title", "url", "price"],\n      "editor": "stringList"\n    },\n    "maxItems": {\n      "title": "Max items",\n      "type": "integer",\n      "description": "Fill the maximum number of items to export.",\n      "default": 10\n    }\n  },\n  "required": ["useClient", "memory", "fields", "maxItems"]\n}\n')),(0,r.kt)("h2",{id:"final-code"},"Final code"),(0,r.kt)("p",null,"To ensure we're on the same page, here is what the final code looks like:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import { Actor } from 'apify';\nimport axios from 'axios';\n\nawait Actor.init();\n\nconst { useClient, memory, fields, maxItems } = await Actor.getInput();\n\nconst TASK = 'YOUR_USERNAME~demo-actor-task';\n\nconst withClient = async () => {\n    const client = Actor.newClient();\n    const task = client.task(TASK);\n\n    const { id } = await task.call({ memory });\n\n    const dataset = client.run(id).dataset();\n\n    const items = await dataset.downloadItems('csv', {\n        limit: maxItems,\n        fields,\n    });\n\n    return Actor.setValue('OUTPUT', items, { contentType: 'text/csv' });\n};\n\nconst withAPI = async () => {\n    const uri = `https://api.apify.com/v2/actor-tasks/${TASK}/run-sync-get-dataset-items?`;\n    const url = new URL(uri);\n\n    url.search = new URLSearchParams({\n        memory,\n        format: 'csv',\n        limit: maxItems,\n        fields: fields.join(','),\n        token: process.env.APIFY_TOKEN,\n    });\n\n    const { data } = await axios.post(url.toString());\n\n    return Actor.setValue('OUTPUT', data, { contentType: 'text/csv' });\n};\n\nif (useClient) {\n    await withClient();\n} else {\n    await withAPI();\n}\n\nawait Actor.exit();\n")),(0,r.kt)("h2",{id:"quiz-answers"},"Quiz answers \ud83d\udcdd"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Q: What is the relationship between the Apify API and Apify client? Are there any significant differences?")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"A:")," The Apify client mimics the Apify API, so there aren't any super significant differences. It's super handy as it helps with managing the API calls (parsing, error handling, retries, etc) and even adds convenience functions."),(0,r.kt)("p",null,"The one main difference is that the Apify client automatically uses ",(0,r.kt)("a",{parentName:"p",href:"https://docs-v2.apify.com/client-js#retries-with-exponential-backoff",target:"_blank",rel:"noopener"},(0,r.kt)("strong",{parentName:"a"},"exponential backoff"))," to deal with errors."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Q: How do you pass input when running actor or task via API?")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"A:")," The input should be passed into the ",(0,r.kt)("strong",{parentName:"p"},"body")," of the request when running an actor/task via API."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Q: Do you need to install the ",(0,r.kt)("inlineCode",{parentName:"strong"},"apify-client")," NPM package when already using the ",(0,r.kt)("inlineCode",{parentName:"strong"},"apify")," package?")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"A:")," No. The Apify client is available right in the SDK with the ",(0,r.kt)("inlineCode",{parentName:"p"},"Actor.newClient()")," function."),(0,r.kt)("h2",{id:"wrap-up"},"Wrap up"),(0,r.kt)("p",null,"That's it! Now, if you want to go above and beyond, you should create a Github repository for this actor, integrate it with a new actor on the Apify platform, and test if it works there as well (with multiple input configurations)."))}d.isMDXComponent=!0},48395:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/select-empty-e351352cc516f35ed2682ead8244c46b.webp"}}]);