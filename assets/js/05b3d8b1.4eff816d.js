"use strict";(self.webpackChunkapify_docs_v2=self.webpackChunkapify_docs_v2||[]).push([[1088],{3905:(t,e,n)=>{n.d(e,{Zo:()=>s,kt:()=>f});var a=n(67294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function r(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function u(t,e){if(null==t)return{};var n,a,o=function(t,e){if(null==t)return{};var n,a,o={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var l=a.createContext({}),p=function(t){var e=a.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):r(r({},e),t)),n},s=function(t){var e=p(t.components);return a.createElement(l.Provider,{value:e},t.children)},c="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},h=a.forwardRef((function(t,e){var n=t.components,o=t.mdxType,i=t.originalType,l=t.parentName,s=u(t,["components","mdxType","originalType","parentName"]),c=p(n),h=o,f=c["".concat(l,".").concat(h)]||c[h]||d[h]||i;return n?a.createElement(f,r(r({ref:e},s),{},{components:n})):a.createElement(f,r({ref:e},s))}));function f(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var i=n.length,r=new Array(i);r[0]=h;var u={};for(var l in e)hasOwnProperty.call(e,l)&&(u[l]=e[l]);u.originalType=t,u[c]="string"==typeof t?t:o,r[1]=u;for(var p=2;p<i;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},58235:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>l,default:()=>h,frontMatter:()=>u,metadata:()=>p,toc:()=>c});var a=n(87462),o=n(63366),i=(n(67294),n(3905)),r=["components"],u={title:"Inputs & outputs",description:"Learn to accept input into your actor, do something with it, then return output. Actors can be written in any language, so this concept is language agnostic.",sidebar_position:1,slug:"/deploying-your-code/inputs-outputs"},l="[](#inputs-outputs) Inputs & outputs",p={unversionedId:"deploying_your_code/inputs_outputs",id:"deploying_your_code/inputs_outputs",title:"Inputs & outputs",description:"Learn to accept input into your actor, do something with it, then return output. Actors can be written in any language, so this concept is language agnostic.",source:"@site/sources/academy/deploying_your_code/inputs_outputs.md",sourceDirName:"deploying_your_code",slug:"/deploying-your-code/inputs-outputs",permalink:"/academy/deploying-your-code/inputs-outputs",draft:!1,tags:[],version:"current",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1672838848,formattedLastUpdatedAt:"Jan 4, 2023",sidebarPosition:1,frontMatter:{title:"Inputs & outputs",description:"Learn to accept input into your actor, do something with it, then return output. Actors can be written in any language, so this concept is language agnostic.",sidebar_position:1,slug:"/deploying-your-code/inputs-outputs"},sidebar:"defaultSidebar",previous:{title:"Deploying your code",permalink:"/academy/deploying-your-code"},next:{title:"Input schema",permalink:"/academy/deploying-your-code/input-schema"}},s={},c=[{value:" A bit about storage",id:"-a-bit-about-storage",level:2},{value:" Accepting input",id:"-accepting-input",level:2},{value:"Accepting input with the Apify SDK",id:"accepting-input-with-the-apify-sdk",level:3},{value:"Accepting input without the Apify SDK",id:"accepting-input-without-the-apify-sdk",level:3},{value:" Writing output",id:"-writing-output",level:2},{value:"Writing output with the Apify SDK",id:"writing-output-with-the-apify-sdk",level:3},{value:"Writing output without the Apify SDK",id:"writing-output-without-the-apify-sdk",level:3},{value:" Testing locally",id:"-testing-locally",level:2},{value:" Next up",id:"-next-up",level:2}],d={toc:c};function h(t){var e=t.components,u=(0,o.Z)(t,r);return(0,i.kt)("wrapper",(0,a.Z)({},d,u,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"-inputs--outputs"},(0,i.kt)("a",{parentName:"h1",href:"#inputs-outputs",target:null,rel:null})," Inputs & outputs"),(0,i.kt)("p",null,"Most of the time when you're creating a project, you are expecting some sort of input off of which your software will run off of. Often times as well, you want to provide some sort of output once your software has completed running. With Apify, it is extremely easy to take in inputs and deliver outputs."),(0,i.kt)("p",null,"An important thing to understand regarding inputs and outputs is that they are read/written differently depending on where the actor is running:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"If your actor is running locally, the inputs/outputs are usually provided in the filesystem, and environment variables are injected either by you, the developer, and by the Apify CLI by running the project with the ",(0,i.kt)("inlineCode",{parentName:"p"},"apify run")," command.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"While running in a Docker container on the platform, environment variables are automatically injected, and inputs & outputs are provided and modified using Apify's REST API."))),(0,i.kt)("h2",{id:"-a-bit-about-storage"},(0,i.kt)("a",{parentName:"h2",href:"#about-storage",target:null,rel:null})," A bit about storage"),(0,i.kt)("p",null,"There are two different places you can read/write your inputs/outputs: to the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.apify.com/storage/key-value-store",target:"_blank",rel:"noopener"},"key-value store"),", or to the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.apify.com/storage/dataset",target:"_blank",rel:"noopener"},"dataset"),". They key-value store can be used to store any sort of unorganized/unrelated data in any formats, while the data pushed to a dataset typically resembles a table with columns (fields) and rows (items). Each actor's run is allocated both a default dataset and key-value store."),(0,i.kt)("p",null,"When running locally, these storages are accessible through the ",(0,i.kt)("strong",{parentName:"p"},"storage")," folder within your project's root directory, while on the platform they are accessible via Apify's API."),(0,i.kt)("h2",{id:"-accepting-input"},(0,i.kt)("a",{parentName:"h2",href:"#accepting-input",target:null,rel:null})," Accepting input"),(0,i.kt)("p",null,"There are multiple ways to accept input into your project. The option you go with depends on the language you have written your project in. If you are using Node.js for your repo's code, you can use the ",(0,i.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/apify",target:"_blank",rel:"noopener"},(0,i.kt)("inlineCode",{parentName:"a"},"apify"))," package. Otherwise, you can use the useful environment variables automatically set up for you by Apify to write utility functions which read the actor's input and return it."),(0,i.kt)("h3",{id:"accepting-input-with-the-apify-sdk"},"Accepting input with the Apify SDK"),(0,i.kt)("p",null,"Since we're using Node.js, let's install the ",(0,i.kt)("inlineCode",{parentName:"p"},"apify")," package by running the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"npm install apify\n")),(0,i.kt)("p",null,"Now, let's import ",(0,i.kt)("inlineCode",{parentName:"p"},"Actor")," from ",(0,i.kt)("inlineCode",{parentName:"p"},"apify")," and use the ",(0,i.kt)("inlineCode",{parentName:"p"},"Actor.getInput()")," function to grab our input."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// index.js\nimport { Actor } from 'apify';\n\n// We must initialize and exit the actor. The rest of our code\n// goes in between these two.\nawait Actor.init();\n\nconst input = await Actor.getInput();\nconsole.log(input);\n\nawait Actor.exit();\n")),(0,i.kt)("p",null,"If we run this right now, we'll see ",(0,i.kt)("strong",{parentName:"p"},"null")," in our terminal - this is because we never provided any sort of test input, which should be provided in the default key-value store. The ",(0,i.kt)("inlineCode",{parentName:"p"},"Actor.getInput()")," function has detected that there is no ",(0,i.kt)("strong",{parentName:"p"},"storage")," folder and generated one for us."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Default key-value store filepath",src:n(11048).Z,width:"452",height:"205"})),(0,i.kt)("p",null,"We'll now add an ",(0,i.kt)("strong",{parentName:"p"},"INPUT.json")," file within ",(0,i.kt)("strong",{parentName:"p"},"storage/key_value_stores/default")," to match what we're expecting in our code."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "numbers": [5, 5, 5, 5]\n}\n')),(0,i.kt)("p",null,"Then we can add our example project code from earlier. It will grab the input and use it to generate a solution which is logged to the console."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// index.js\nimport { Actor } from 'apify';\n\nawait Actor.init();\n\nconst { numbers } = await Actor.getInput();\n\nconst addAllNumbers = (...nums) => nums.reduce((total, curr) => (total += curr));\n\nconst solution = addAllNumbers(...numbers);\n\nconsole.log(solution);\n\nawait Actor.exit();\n")),(0,i.kt)("p",null,"Cool! When we run ",(0,i.kt)("inlineCode",{parentName:"p"},"node index.js"),", we see ",(0,i.kt)("strong",{parentName:"p"},"20"),"."),(0,i.kt)("h3",{id:"accepting-input-without-the-apify-sdk"},"Accepting input without the Apify SDK"),(0,i.kt)("p",null,"Alternatively, when writing in a language other than JavaScript, we can create our own ",(0,i.kt)("inlineCode",{parentName:"p"},"get_input()")," function which utilizes the Apify API when the actor is running on the platform. For this example, we are using the ",(0,i.kt)("a",{parentName:"p",href:"/academy/getting-started/apify-client",target:null,rel:null},"Apify Client")," for Python to access the API."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-Python"},"# index.py\nfrom apify_client import ApifyClient\nfrom os import environ\nimport json\n\nclient = ApifyClient(token='YOUR_TOKEN')\n\n# If being run on the platform, the \"APIFY_IS_AT_HOME\" environment variable\n# will be \"1\". Otherwise, it will be undefined/None\ndef is_on_apify ():\n    return 'APIFY_IS_AT_HOME' in environ\n\n# Get the input\ndef get_input ():\n    if not is_on_apify():\n        with open('./apify_storage/key_value_stores/default/INPUT.json') as actor_input:\n            return json.load(actor_input)\n    \n    kv_store = client.key_value_store(environ.get('APIFY_DEFAULT_KEY_VALUE_STORE_ID'))\n    return kv_store.get_record('INPUT')['value']\n\ndef add_all_numbers (nums):\n    total = 0\n\n    for num in nums:\n        total += num\n\n    return total\n\nactor_input = get_input()['numbers']\n\nsolution = add_all_numbers(actor_input)\n\nprint(solution)\n")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"For a better understanding of the API endpoints for reading and modifying key-value stores, check the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.apify.com/api/v2#/reference/key-value-stores",target:"_blank",rel:"noopener"},"official API reference"),".")),(0,i.kt)("h2",{id:"-writing-output"},(0,i.kt)("a",{parentName:"h2",href:"#writing-output",target:null,rel:null})," Writing output"),(0,i.kt)("p",null,"Similarly to reading input, you can write the actor's output either by using the Apify SDK in Node.js, or by manually writing a utility function to do so."),(0,i.kt)("h3",{id:"writing-output-with-the-apify-sdk"},"Writing output with the Apify SDK"),(0,i.kt)("p",null,"In the SDK, we can write to the dataset with the ",(0,i.kt)("inlineCode",{parentName:"p"},"Actor.pushData()")," function. Let's go ahead and write the solution of the ",(0,i.kt)("inlineCode",{parentName:"p"},"addAllNumbers()")," function to the dataset store using this function:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// index.js\n\n// This is our example project code from earlier.\n// We will use the Apify input as its input.\nimport { Actor } from 'apify';\n\nawait Actor.init();\n\nconst { numbers } = await Actor.getInput();\n\nconst addAllNumbers = (...nums) => nums.reduce((total, curr) => (total += curr));\n\nconst solution = addAllNumbers(...numbers);\n\n// And save its output to the default dataset\nawait Actor.pushData({ solution });\n\nawait Actor.exit();\n")),(0,i.kt)("h3",{id:"writing-output-without-the-apify-sdk"},"Writing output without the Apify SDK"),(0,i.kt)("p",null,"Just as with the custom ",(0,i.kt)("inlineCode",{parentName:"p"},"get_input()")," utility function, you can write a custom ",(0,i.kt)("inlineCode",{parentName:"p"},"set_output()")," function as well if you cannot use the Apify SDK."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"You can read and write your output anywhere; however, it is standard practice to use a folder named ",(0,i.kt)("strong",{parentName:"p"},"storage"),".")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-Python"},"# index.py\nfrom apify_client import ApifyClient\nfrom os import environ\nimport json\n\nclient = ApifyClient(token='YOUR_TOKEN')\n\ndef is_on_apify ():\n    return 'APIFY_IS_AT_HOME' in environ\n\ndef get_input ():\n    if not is_on_apify():\n        with open('./apify_storage/key_value_stores/default/INPUT.json') as actor_input:\n            return json.load(actor_input)\n    \n    kv_store = client.key_value_store(environ.get('APIFY_DEFAULT_KEY_VALUE_STORE_ID'))\n    return kv_store.get_record('INPUT')['value']\n\n# Push the solution to the dataset\ndef set_output (data):\n    if not is_on_apify():\n        with open('./apify_storage/datasets/default/solution.json', 'w') as output:\n            return output.write(json.dumps(data, indent=2))\n    \n    dataset = client.dataset(environ.get('APIFY_DEFAULT_DATASET_ID'))\n    dataset.push_items('OUTPUT', value=[json.dumps(data, indent=4)])\n\ndef add_all_numbers (nums):\n    total = 0\n\n    for num in nums:\n        total += num\n\n    return total\n\nactor_input = get_input()['numbers']\n\nsolution = add_all_numbers(actor_input)\n\nset_output({ 'solution': solution })\n")),(0,i.kt)("h2",{id:"-testing-locally"},(0,i.kt)("a",{parentName:"h2",href:"#testing-locally",target:null,rel:null})," Testing locally"),(0,i.kt)("p",null,"Since we've changed our code a lot from the way it originally was by wrapping it in the Apify SDK to accept inputs and return outputs, we most definitely should test it locally before worrying about pushing it to the Apify platform."),(0,i.kt)("p",null,"After running our script, there should be a single item in the default dataset that looks like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "solution": 20\n}\n')),(0,i.kt)("h2",{id:"-next-up"},(0,i.kt)("a",{parentName:"h2",href:"#next",target:null,rel:null})," Next up"),(0,i.kt)("p",null,"That's it! We've now added all of the files and code necessary to convert our software into an actor. In the ",(0,i.kt)("a",{parentName:"p",href:"/academy/deploying-your-code/input-schema",target:null,rel:null},"next lesson"),", we'll be learning how to easily generate a user interface for our actor's input so that users don't have to provide the input in raw JSON format."))}h.isMDXComponent=!0},11048:(t,e,n)=>{n.d(e,{Z:()=>a});const a="data:image/webp;base64,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"}}]);