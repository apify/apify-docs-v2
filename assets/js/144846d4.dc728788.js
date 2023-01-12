"use strict";(self.webpackChunkapify_docs_v2=self.webpackChunkapify_docs_v2||[]).push([[4601],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function u(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?u(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):u(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},u=Object.keys(e);for(n=0;n<u.length;n++)a=u[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(n=0;n<u.length;n++)a=u[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),i=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=i(e.components);return n.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},q=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,u=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),q=i(a),m=r,d=q["".concat(o,".").concat(m)]||q[m]||c[m]||u;return a?n.createElement(d,l(l({ref:t},p),{},{components:a})):n.createElement(d,l({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var u=a.length,l=new Array(u);l[0]=q;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var i=2;i<u;i++)l[i]=a[i];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}q.displayName="MDXCreateElement"},24413:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var n=a(87462),r=a(63366),u=(a(67294),a(3905)),l=["components"],s={title:"Request queue",description:"Queue URLs for an actor to visit in its run. Learn how to share your queues between actor runs. Access and manage request queues from Apify Console or via API.",sidebar_position:9.3,slug:"/storage/request-queue"},o="Request queue",i={unversionedId:"storage/request_queue",id:"storage/request_queue",title:"Request queue",description:"Queue URLs for an actor to visit in its run. Learn how to share your queues between actor runs. Access and manage request queues from Apify Console or via API.",source:"@site/sources/platform/storage/request_queue.md",sourceDirName:"storage",slug:"/storage/request-queue",permalink:"/platform/storage/request-queue",draft:!1,tags:[],version:"current",lastUpdatedBy:"Jind\u0159ich B\xe4r",lastUpdatedAt:1673533984,formattedLastUpdatedAt:"Jan 12, 2023",sidebarPosition:9.3,frontMatter:{title:"Request queue",description:"Queue URLs for an actor to visit in its run. Learn how to share your queues between actor runs. Access and manage request queues from Apify Console or via API.",sidebar_position:9.3,slug:"/storage/request-queue"},sidebar:"docs",previous:{title:"Key-value store",permalink:"/platform/storage/key-value-store"},next:{title:"Proxy",permalink:"/platform/proxy"}},p={},c=[{value:"Basic usage",id:"basic-usage",level:2},{value:"Apify Console",id:"apify-console",level:3},{value:"Apify SDK",id:"apify-sdk",level:3},{value:"JavaScript API client",id:"javascript-api-client",level:3},{value:"Python API client",id:"python-api-client",level:3},{value:"Apify API",id:"apify-api",level:3},{value:"Sharing",id:"sharing",level:2},{value:"Sharing request queues between runs",id:"sharing-request-queues-between-runs",level:3},{value:"Limits",id:"limits",level:2},{value:"Rate limiting",id:"rate-limiting",level:3}],q={toc:c};function m(e){var t=e.components,s=(0,r.Z)(e,l);return(0,u.kt)("wrapper",(0,n.Z)({},q,s,{components:t,mdxType:"MDXLayout"}),(0,u.kt)("h1",{id:"request-queue"},"Request queue"),(0,u.kt)("p",null,(0,u.kt)("strong",{parentName:"p"},"Queue URLs for an actor to visit in its run. Learn how to share your queues between actor runs. Access and manage request queues from Apify Console or via API.")),(0,u.kt)("hr",null),(0,u.kt)("p",null,"Request queues enable you to enqueue and retrieve requests such as URLs with an ",(0,u.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods",target:"_blank",rel:"noopener"},"HTTP method")," and other parameters. They are useful not only in web crawling, but anywhere you need to process a high number of URLs and enqueue new links."),(0,u.kt)("p",null,"Request queue storage supports both breadth-first and depth-first crawling orders, as well as custom data attributes. It allows you to query whether specific URLs were already found, push new URLs to the queue and fetch the next URLs to process."),(0,u.kt)("blockquote",null,(0,u.kt)("p",{parentName:"blockquote"},"Named request queues are retained indefinitely. ",(0,u.kt)("br",null),"\nUnnamed request queues expire after 7 days unless otherwise specified.",(0,u.kt)("br",null),"\n",(0,u.kt)("a",{parentName:"p",href:"/platform/storage",target:null,rel:null},"Learn about named and unnamed queues."))),(0,u.kt)("h2",{id:"basic-usage"},"Basic usage"),(0,u.kt)("p",null,"There are five ways to access your request queues:"),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("a",{parentName:"li",href:"https://console.apify.com/storage?tab=requestQueues",target:"_blank",rel:"noopener"},"Apify Console")," - provides an easy-to-understand interface [",(0,u.kt)("a",{parentName:"li",href:"#apify-console",target:null,rel:null},"details"),"]."),(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("a",{parentName:"li",href:"https://sdk.apify.com/docs/guides/request-storage#request-queue",target:null,rel:null},"Apify SDK")," - when building your own Apify actor [",(0,u.kt)("a",{parentName:"li",href:"#apify-sdk",target:null,rel:null},"details"),"]."),(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("a",{parentName:"li",href:"apify-client-js#requestqueueclient",target:null,rel:null},"JavaScript API client")," - to access your request queues from any Node.js application [",(0,u.kt)("a",{parentName:"li",href:"#javascript-api-client",target:null,rel:null},"details"),"]."),(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("a",{parentName:"li",href:"apify-client-python#requestqueueclient",target:null,rel:null},"Python API client")," - to access your request queues from any Python application [",(0,u.kt)("a",{parentName:"li",href:"#python-api-client",target:null,rel:null},"details"),"]."),(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("a",{parentName:"li",href:"/api/v2#/reference/request-queues",target:null,rel:null},"Apify API")," - for accessing your request queues programmatically [",(0,u.kt)("a",{parentName:"li",href:"#apify-api",target:null,rel:null},"details"),"].")),(0,u.kt)("h3",{id:"apify-console"},"Apify Console"),(0,u.kt)("p",null,"In ",(0,u.kt)("a",{parentName:"p",href:"https://console.apify.com",target:"_blank",rel:"noopener"},"Apify Console"),", you can view your request queues in the ",(0,u.kt)("a",{parentName:"p",href:"https://console.apify.com/storage",target:"_blank",rel:"noopener"},"Storage")," section under the ",(0,u.kt)("a",{parentName:"p",href:"https://console.apify.com/storage?tab=requestQueues",target:"_blank",rel:"noopener"},"Request queues")," tab."),(0,u.kt)("p",null,"Only named request queues are displayed by default. Select the ",(0,u.kt)("strong",{parentName:"p"},"Include unnamed request queues")," checkbox to display all of your queues."),(0,u.kt)("p",null,(0,u.kt)("img",{alt:"Request queues in app",src:a(63652).Z,width:"1300",height:"526"})),(0,u.kt)("p",null,"To view a request queue, click on its ",(0,u.kt)("strong",{parentName:"p"},"Queue ID"),".\nUnder the ",(0,u.kt)("strong",{parentName:"p"},"Settings")," tab, you can update the queue's name (and, in turn, its\n",(0,u.kt)("a",{parentName:"p",href:"/platform/storage",target:null,rel:null},"retention period"),".\nClick on the ",(0,u.kt)("inlineCode",{parentName:"p"},"API")," button to view and test a queue's ",(0,u.kt)("a",{parentName:"p",href:"https://docs.apify.com/api/v2#/reference/request-queues",target:"_blank",rel:"noopener"},"API endpoints"),"."),(0,u.kt)("p",null,(0,u.kt)("img",{alt:"Request queues detail",src:a(21550).Z,width:"1300",height:"925"})),(0,u.kt)("h3",{id:"apify-sdk"},"Apify SDK"),(0,u.kt)("p",null,"If you are building an ",(0,u.kt)("a",{parentName:"p",href:"/platform/actors",target:null,rel:null},"Apify actor"),", you will be using the ",(0,u.kt)("a",{parentName:"p",href:"https://sdk.apify.com",target:null,rel:null},"Apify SDK"),".\nIn the ",(0,u.kt)("a",{parentName:"p",href:"https://sdk.apify.com/docs/guides/request-storage#request-queue",target:null,rel:null},"Apify SDK"),", the request queue is represented by the\n",(0,u.kt)("a",{parentName:"p",href:"https://sdk.apify.com/api/apify/class/RequestQueue",target:null,rel:null},(0,u.kt)("inlineCode",{parentName:"a"},"RequestQueue"))," class."),(0,u.kt)("p",null,"You can use the ",(0,u.kt)("inlineCode",{parentName:"p"},"RequestQueue")," class to specify whether your data is stored locally or in the Apify cloud and ",(0,u.kt)("a",{parentName:"p",href:"https://sdk.apify.com/api/apify/class/RequestQueue#addRequests",target:null,rel:null},"enqueue new URLs"),"."),(0,u.kt)("p",null,"Each actor run is associated with the default request queue, which is created for the actor run when the first request is added to it. Typically, it is used to store URLs to crawl in the specific actor run, however its usage is optional."),(0,u.kt)("p",null,"You can also create ",(0,u.kt)("strong",{parentName:"p"},"named queues")," which can be shared between actors or between actor runs."),(0,u.kt)("p",null,"If you are storing your data locally, you can find your request queue at the following location."),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-text"},"{APIFY_LOCAL_STORAGE_DIR}/request_queues/{QUEUE_ID}/{ID}.json\n")),(0,u.kt)("p",null,"The default request queue's ID is ",(0,u.kt)("strong",{parentName:"p"},"default"),". Each request in the queue is stored as a separate JSON file, where {ID} is a request ID."),(0,u.kt)("p",null,"To ",(0,u.kt)("strong",{parentName:"p"},"open a request queue"),", use the ",(0,u.kt)("a",{parentName:"p",href:"https://sdk.apify.com/api/apify/class/Actor#openRequestQueue",target:null,rel:null},(0,u.kt)("inlineCode",{parentName:"a"},"Actor.openRequestQueue()"))," method."),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-js"},"// Import the Apify SDK into your project\nimport { Actor } from 'apify';\n\nawait Actor.init();\n// ...\n\n// Open the default request queue associated with\n// the actor run\nconst queue = await Actor.openRequestQueue();\n\n// Open the 'my-queue' request queue\nconst queueWithName = await Actor.openRequestQueue('my-queue');\n\n// ...\nawait Actor.exit();\n")),(0,u.kt)("p",null,"Once a queue is open, you can manage it using the following methods. See the ",(0,u.kt)("inlineCode",{parentName:"p"},"RequestQueue")," class's ",(0,u.kt)("a",{parentName:"p",href:"https://sdk.apify.com/api/apify/class/RequestQueue",target:null,rel:null},"API reference")," for the full list."),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-js"},"// Import the Apify SDK into your project\nimport { Actor } from 'apify';\n\nawait Actor.init();\n// ...\n\nconst queue = await Actor.openRequestQueue();\n\n// Enqueue requests\nawait queue.addRequests([{ url: 'http://example.com/aaa' }]);\nawait queue.addRequests([\n    'http://example.com/foo',\n    'http://example.com/bar',\n], { forefront: true });\n\n// Get the next request from queue\nconst request1 = await queue.fetchNextRequest();\nconst request2 = await queue.fetchNextRequest();\n\n// Get a specific request\nconst specificRequest = await queue.getRequest('shi6Nh3bfs3');\n\n// Reclaim a failed request back to the queue\n// and crawl it again\nawait queue.reclaimRequest(request2);\n\n// Remove a queue\nawait queue.drop();\n\n// ...\nawait Actor.exit();\n")),(0,u.kt)("p",null,"See the ",(0,u.kt)("a",{parentName:"p",href:"https://sdk.apify.com/docs/guides/request-storage#request-queue",target:null,rel:null},"SDK documentation")," and the ",(0,u.kt)("inlineCode",{parentName:"p"},"RequestQueue")," class's ",(0,u.kt)("a",{parentName:"p",href:"https://sdk.apify.com/api/apify/class/RequestQueue",target:null,rel:null},"API reference")," for details on managing your request queues with the Apify SDK."),(0,u.kt)("h3",{id:"javascript-api-client"},"JavaScript API client"),(0,u.kt)("p",null,"Apify's ",(0,u.kt)("a",{parentName:"p",href:"/apify-client-js#requestqueueclient",target:null,rel:null},"JavaScript API client")," (",(0,u.kt)("inlineCode",{parentName:"p"},"apify-client"),") allows you to access your request queues from any Node.js application, whether it is running on the Apify platform or elsewhere."),(0,u.kt)("p",null,"After importing and initiating the client, you can save each request queue to a variable for easier access."),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-js"},"const myQueueClient = apifyClient.requestQueue('jane-doe/my-request-queue');\n")),(0,u.kt)("p",null,"You can then use that variable to ",(0,u.kt)("a",{parentName:"p",href:"/apify-client-js#requestqueueclient",target:null,rel:null},"access the request queue's items and manage it"),"."),(0,u.kt)("p",null,"See the ",(0,u.kt)("a",{parentName:"p",href:"/apify-client-js#requestqueueclient",target:null,rel:null},"JavaScript API client documentation")," for ",(0,u.kt)("a",{parentName:"p",href:"/apify-client-js#quick-start",target:null,rel:null},"help with setup")," and more details."),(0,u.kt)("h3",{id:"python-api-client"},"Python API client"),(0,u.kt)("p",null,"Apify's ",(0,u.kt)("a",{parentName:"p",href:"/apify-client-python",target:null,rel:null},"Python API client")," (",(0,u.kt)("inlineCode",{parentName:"p"},"apify-client"),") allows you to access your request queues from any Python application, whether it is running on the Apify platform or elsewhere."),(0,u.kt)("p",null,"After importing and initiating the client, you can save each request queue to a variable for easier access."),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-python"},"my_queue_client = apify_client.request_queue('jane-doe/my-request-queue')\n")),(0,u.kt)("p",null,"You can then use that variable to ",(0,u.kt)("a",{parentName:"p",href:"/apify-client-python#requestqueueclient",target:null,rel:null},"access the request queue's items and manage it"),"."),(0,u.kt)("p",null,"See the ",(0,u.kt)("a",{parentName:"p",href:"/apify-client-python#requestqueueclient",target:null,rel:null},"Python API client documentation")," for ",(0,u.kt)("a",{parentName:"p",href:"/apify-client-python#quick-start",target:null,rel:null},"help with setup")," and more details."),(0,u.kt)("h3",{id:"apify-api"},"Apify API"),(0,u.kt)("p",null,"The ",(0,u.kt)("a",{parentName:"p",href:"/api/v2#/reference/request-queues",target:null,rel:null},"Apify API")," allows you to access your request queues programmatically using ",(0,u.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods",target:"_blank",rel:"noopener"},"HTTP requests"),"."),(0,u.kt)("p",null,"If you are accessing your datasets using the ",(0,u.kt)("strong",{parentName:"p"},"username~store-name")," ",(0,u.kt)("a",{parentName:"p",href:"/platform/storage",target:null,rel:null},"store ID format"),". You can find the token (and your user ID) on the ",(0,u.kt)("a",{parentName:"p",href:"https://console.apify.com/account#/integrations",target:"_blank",rel:"noopener"},"Integrations")," page of your Apify account."),(0,u.kt)("blockquote",null,(0,u.kt)("p",{parentName:"blockquote"},"When providing your API authentication token, we recommend using the request's ",(0,u.kt)("inlineCode",{parentName:"p"},"Authorization")," header, rather than the URL. (",(0,u.kt)("a",{parentName:"p",href:"#introduction/authentication",target:null,rel:null},"More info"),").")),(0,u.kt)("p",null,"To ",(0,u.kt)("strong",{parentName:"p"},"get a list of your request queues"),", send a GET request to the ",(0,u.kt)("a",{parentName:"p",href:"/api/v2#/reference/request-queues/store-collection/get-list-of-request-queues",target:null,rel:null},"Get list of request queues")," endpoint."),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-text"},"https://api.apify.com/v2/request-queues\n")),(0,u.kt)("p",null,"To ",(0,u.kt)("strong",{parentName:"p"},"get information about a request queue")," such as its creation time and item count, send a GET request to the ",(0,u.kt)("a",{parentName:"p",href:"/api/v2#/reference/request-queues/queue/get-request-queue",target:null,rel:null},"Get request queue")," endpoint."),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-text"},"https://api.apify.com/v2/request-queues/{QUEUE_ID}\n")),(0,u.kt)("p",null,"To ",(0,u.kt)("strong",{parentName:"p"},"get a request from a queue"),", send a GET request to the ",(0,u.kt)("a",{parentName:"p",href:"/api/v2#/reference/request-queues/request/get-request",target:null,rel:null},"Get request")," endpoint."),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-text"},"https://api.apify.com/v2/request-queues/{QUEUE_ID}/requests/{REQUEST_ID}\n")),(0,u.kt)("p",null,"To ",(0,u.kt)("strong",{parentName:"p"},"add a request to a queue"),", send a POST request with the request to be added as a JSON object in the request's payload to the ",(0,u.kt)("a",{parentName:"p",href:"/api/v2#/reference/request-queues/request-collection/add-request",target:null,rel:null},"Add request")," endpoint."),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-text"},"https://api.apify.com/v2/request-queues/{QUEUE_ID}/requests\n")),(0,u.kt)("p",null,"Example payload:"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "uniqueKey": "http://example.com",\n    "url": "http://example.com",\n    "method": "GET"\n}\n')),(0,u.kt)("p",null,"To ",(0,u.kt)("strong",{parentName:"p"},"update a request in a queue"),", send a PUT request with the request to update as a JSON object in the request's payload to the ",(0,u.kt)("a",{parentName:"p",href:"/api/v2#/reference/request-queues/request/update-request",target:null,rel:null},"Update request")," endpoint. In the payload, specify the request's ID and add the information you want to update."),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-text"},"https://api.apify.com/v2/request-queues/{QUEUE_ID}/requests/{REQUEST_ID}\n")),(0,u.kt)("p",null,"Example payload:"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "id": "dnjkDMKLmdlkmlkmld",\n    "uniqueKey": "http://example.com",\n    "url": "http://example.com",\n    "method": "GET"\n}\n')),(0,u.kt)("blockquote",null,(0,u.kt)("p",{parentName:"blockquote"},"When adding or updating requests, you can optionally provide a ",(0,u.kt)("inlineCode",{parentName:"p"},"clientKey")," parameter to your request. It must be a string between 1 and 32 characters in length. This identifier is used to determine whether the queue was accessed by ",(0,u.kt)("a",{parentName:"p",href:"#sharing",target:null,rel:null},"multiple clients"),". If ",(0,u.kt)("inlineCode",{parentName:"p"},"clientKey")," is not provided, the system considers this API call to come from a new client. See the ",(0,u.kt)("inlineCode",{parentName:"p"},"hadMultipleClients")," field returned by the ",(0,u.kt)("a",{parentName:"p",href:"/api/v2#/reference/request-queues/queue-head/get-head",target:null,rel:null},(0,u.kt)("inlineCode",{parentName:"a"},"Get head"))," operation for details. ",(0,u.kt)("br",null)),(0,u.kt)("p",{parentName:"blockquote"},"Example: ",(0,u.kt)("inlineCode",{parentName:"p"},"client-abc"))),(0,u.kt)("p",null,"See the ",(0,u.kt)("a",{parentName:"p",href:"/api/v2#/reference/request-queues",target:null,rel:null},"API documentation")," for a detailed breakdown of each API endpoint."),(0,u.kt)("h2",{id:"sharing"},"Sharing"),(0,u.kt)("p",null,"You can invite other Apify users to view or modify your request queues using the ",(0,u.kt)("a",{parentName:"p",href:"/platform/access-rights",target:null,rel:null},"access rights"),"."),(0,u.kt)("h3",{id:"sharing-request-queues-between-runs"},"Sharing request queues between runs"),(0,u.kt)("p",null,"You can access a request queue from any ",(0,u.kt)("a",{parentName:"p",href:"/platform/actors",target:null,rel:null},"actor")," run as long as you know its ",(0,u.kt)("strong",{parentName:"p"},"name")," or ",(0,u.kt)("strong",{parentName:"p"},"ID"),"."),(0,u.kt)("p",null,"To access a request queue from another run using the Apify SDK, open it using the ",(0,u.kt)("a",{parentName:"p",href:"https://sdk.apify.com/api/apify/class/Actor#openRequestQueue",target:null,rel:null},(0,u.kt)("inlineCode",{parentName:"a"},"Actor.openRequestQueue(queueIdOrName)"))," method like you would do with any other queue."),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-js"},"const otherQueue = await Actor.openRequestQueue('old-queue');\n")),(0,u.kt)("p",null,"In the ",(0,u.kt)("a",{parentName:"p",href:"/apify-client-js",target:null,rel:null},"JavaScript API client"),", you can access a request queue using ",(0,u.kt)("a",{parentName:"p",href:"/apify-client-js#requestqueueclient",target:null,rel:null},"its client"),". Once you've opened the request queue, you can use it in your crawler or add new requests like you would do with a queue from your current run."),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-js"},"const otherQueueClient = apifyClient.requestQueue('jane-doe/old-queue');\n")),(0,u.kt)("p",null,"Likewise, in the ",(0,u.kt)("a",{parentName:"p",href:"/apify-client-python",target:null,rel:null},"Python API client"),", you can access a request queue using ",(0,u.kt)("a",{parentName:"p",href:"/apify-client-python#requestqueueclient",target:null,rel:null},"its client"),"."),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-python"},"other_queue_client = apify_client.request_queue('jane-doe/old-queue')\n")),(0,u.kt)("p",null,"The same applies for the ",(0,u.kt)("a",{parentName:"p",href:"#apify-api",target:null,rel:null},"Apify API")," - you can use ",(0,u.kt)("a",{parentName:"p",href:"#apify-api",target:null,rel:null},"the same endpoints")," as you would normally do."),(0,u.kt)("p",null,"See the ",(0,u.kt)("a",{parentName:"p",href:"https://docs.apify.com/storage#sharing-storages-between-runs",target:"_blank",rel:"noopener"},"Storage overview")," for details on sharing storages between runs."),(0,u.kt)("h2",{id:"limits"},"Limits"),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("p",{parentName:"li"},"While multiple actor or task runs can ",(0,u.kt)("strong",{parentName:"p"},"add new requests")," to a queue concurrently, only one run can ",(0,u.kt)("strong",{parentName:"p"},"process a queue")," at any one time.")),(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("p",{parentName:"li"},"Request queue names can be up to 63 characters long."))),(0,u.kt)("h3",{id:"rate-limiting"},"Rate limiting"),(0,u.kt)("p",null,"When managing request queues via ",(0,u.kt)("a",{parentName:"p",href:"/api/v2#/reference/request-queues/put-items",target:null,rel:null},"API"),",\nCRUD (",(0,u.kt)("a",{parentName:"p",href:"/api/v2#/reference/request-queues/request-collection/add-request",target:null,rel:null},"add"),",\n",(0,u.kt)("a",{parentName:"p",href:"/api/v2#/reference/request-queues/request-collection/get-request",target:null,rel:null},"get"),",\n",(0,u.kt)("a",{parentName:"p",href:"/api/v2#/reference/request-queues/request-collection/update-request",target:null,rel:null},"update"),",\n",(0,u.kt)("a",{parentName:"p",href:"/api/v2#/reference/request-queues/request-collection/delete-request",target:null,rel:null},"delete"),")\noperation requests are limited to ",(0,u.kt)("strong",{parentName:"p"},"200")," per second per request queue. This helps protect Apify servers from being overloaded."),(0,u.kt)("p",null,"All other request queue API ",(0,u.kt)("a",{parentName:"p",href:"/api/v2#/reference/request-queues",target:null,rel:null},"endpoints")," are limited to ",(0,u.kt)("strong",{parentName:"p"},"30")," requests per second per request queue."),(0,u.kt)("p",null,"See the ",(0,u.kt)("a",{parentName:"p",href:"/api/v2#/introduction/rate-limiting",target:null,rel:null},"API documentation")," for details and to learn what to do if you exceed the rate limit."))}m.isMDXComponent=!0},63652:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/request-queue-app-5db9b8fd9f70cffdc13d72d36ce2be46.webp"},21550:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/request-queue-detail-024913ed382415c83d2a91e356fe011d.webp"}}]);