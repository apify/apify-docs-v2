"use strict";(self.webpackChunkapify_docs_v2=self.webpackChunkapify_docs_v2||[]).push([[3730],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=r.createContext({}),p=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(a),h=n,f=d["".concat(i,".").concat(h)]||d[h]||c[h]||l;return a?r.createElement(f,o(o({ref:t},u),{},{components:a})):r.createElement(f,o({ref:t},u))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var p=2;p<l;p++)o[p]=a[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},54096:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>p,toc:()=>c});var r=a(87462),n=a(63366),l=(a(67294),a(3905)),o=["components"],s={title:"Storage",description:"Store anything from images and key-value pairs to structured output data. Learn how to access and manage your stored data from the Apify platform or via API.",sidebar_position:9,category:"platform",slug:"/storage"},i="Storage",p={unversionedId:"storage/index",id:"storage/index",title:"Storage",description:"Store anything from images and key-value pairs to structured output data. Learn how to access and manage your stored data from the Apify platform or via API.",source:"@site/sources/platform/storage/index.md",sourceDirName:"storage",slug:"/storage",permalink:"/platform/storage",draft:!1,editUrl:"https://github.com/apify/apify-docs-v2/edit/master/sources/platform/storage/index.md",tags:[],version:"current",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1675852910,formattedLastUpdatedAt:"Feb 8, 2023",sidebarPosition:9,frontMatter:{title:"Storage",description:"Store anything from images and key-value pairs to structured output data. Learn how to access and manage your stored data from the Apify platform or via API.",sidebar_position:9,category:"platform",slug:"/storage"},sidebar:"docs",previous:{title:"Schedules",permalink:"/platform/schedules"},next:{title:"Dataset",permalink:"/platform/storage/dataset"}},u={},c=[{value:"Dataset",id:"dataset",level:2},{value:"Key-value store",id:"key-value-store",level:2},{value:"Request queue",id:"request-queue",level:2},{value:"Basic usage",id:"basic-usage",level:2},{value:"Apify Console",id:"apify-console",level:3},{value:"Apify SDK and Crawlee",id:"apify-sdk-and-crawlee",level:3},{value:"JavaScript API client",id:"javascript-api-client",level:3},{value:"Python API client",id:"python-api-client",level:3},{value:"Apify API",id:"apify-api",level:3},{value:"Rate limiting",id:"rate-limiting",level:2},{value:"Data retention",id:"data-retention",level:2},{value:"Preserving your storages",id:"preserving-storages",level:3},{value:"Named and unnamed storages",id:"named-and-unnamed-storages",level:2},{value:"Sharing",id:"sharing",level:2},{value:"Sharing storages between runs",id:"sharing-storages-between-runs",level:3},{value:"Deleting storages",id:"deleting-storages",level:2}],d={toc:c};function h(e){var t=e.components,s=(0,n.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"storage"},"Storage"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Store anything from images and key-value pairs to structured output data. Learn how to access and manage your stored data from the Apify platform or via API.")),(0,l.kt)("hr",null),(0,l.kt)("p",null,"The Apify platform includes three types of storage you can use both in your ",(0,l.kt)("a",{parentName:"p",href:"/platform/actors",target:null,rel:null},"actors")," and outside the Apify platform via ",(0,l.kt)("a",{parentName:"p",href:"/api/v2#/",target:null,rel:null},"API"),", the ",(0,l.kt)("a",{parentName:"p",href:"https://docs-v2.apify.com/sdk-js",target:"_blank",rel:"noopener"},"Apify SDK")," and Apify's ",(0,l.kt)("a",{parentName:"p",href:"/apify-client-js",target:null,rel:null},"JavaScript API client")," and ",(0,l.kt)("a",{parentName:"p",href:"/apify-client-python",target:null,rel:null},"Python API client"),"."),(0,l.kt)("p",null,"This page contains a brief introduction of the three types of Apify Storage."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#dataset",target:null,rel:null},"Dataset")," - storage for data objects such as scraping output."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#key-value-store",target:null,rel:null},"Key-value store")," - storage for arbitrary data records such as files, images, and strings."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#request-queue",target:null,rel:null},"Request queue")," - a queue of URLs for your actors to visit.")),(0,l.kt)("p",null,"You will then find ",(0,l.kt)("a",{parentName:"p",href:"#basic-usage",target:null,rel:null},"basic usage")," information relating to all three types of storage. For example, how to manage your storages in ",(0,l.kt)("a",{parentName:"p",href:"#apify-console",target:null,rel:null},"Apify Console"),", the basics of setting up the ",(0,l.kt)("a",{parentName:"p",href:"#apify-sdk-and-crawlee",target:null,rel:null},"Apify SDK"),",\nthe ",(0,l.kt)("a",{parentName:"p",href:"#javascript-api-client",target:null,rel:null},"JavaScript API client")," and the ",(0,l.kt)("a",{parentName:"p",href:"/apify-client-python",target:null,rel:null},"Python API client"),",\nand general information for using storages with the ",(0,l.kt)("a",{parentName:"p",href:"#apify-api",target:null,rel:null},"Apify API"),"."),(0,l.kt)("h2",{id:"dataset"},"Dataset"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/platform/storage/dataset",target:null,rel:null},"Dataset")," storage allows you to store a series of data objects such as results from web scraping, crawling or data processing jobs. You can export your datasets in JSON, CSV, XML, RSS, Excel or HTML formats."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Dataset graphic",src:a(81362).Z,width:"800",height:"311"})),(0,l.kt)("p",null,"The easiest way to access your datasets is via ",(0,l.kt)("a",{parentName:"p",href:"https://console.apify.com/storage?tab=datasets",target:"_blank",rel:"noopener"},"Apify Console"),", which provides a user-friendly interface for viewing or downloading the data and editing your datasets' properties."),(0,l.kt)("p",null,"To manage your datasets, you can use the\n",(0,l.kt)("a",{parentName:"p",href:"https://docs-v2.apify.com/sdk-js/api/apify/class/Dataset",target:"_blank",rel:"noopener"},"Apify SDK"),",\n",(0,l.kt)("a",{parentName:"p",href:"/apify-client-js#datasetclient",target:null,rel:null},"JavaScript API client"),",\n",(0,l.kt)("a",{parentName:"p",href:"/apify-client-python#datasetclient",target:null,rel:null},"Python API client"),",\nor the ",(0,l.kt)("a",{parentName:"p",href:"/api/v2#/reference/datasets",target:null,rel:null},"Apify API"),"."),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/platform/storage/dataset",target:null,rel:null},"See the dataset documentation")," for details."),(0,l.kt)("h2",{id:"key-value-store"},"Key-value store"),(0,l.kt)("p",null,"The ",(0,l.kt)("a",{parentName:"p",href:"/platform/storage/key-value-store",target:null,rel:null},"key-value store")," is ideal for saving data records such as files, screenshots of web pages, and PDFs or for persisting your actors' state. The records are accessible under a unique name and can be written and read quickly."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Key-value store graphic",src:a(84544).Z,width:"808",height:"240"})),(0,l.kt)("p",null,"The easiest way to access your key-value stores is via\n",(0,l.kt)("a",{parentName:"p",href:"https://console.apify.com/storage?tab=keyValueStores",target:"_blank",rel:"noopener"},"Apify Console"),", which provides a user-friendly interface for viewing or downloading the data and editing your key-value stores' properties."),(0,l.kt)("p",null,"To manage your key-value stores, you can use the\n",(0,l.kt)("a",{parentName:"p",href:"https://docs-v2.apify.com/sdk-js/api/apify/class/KeyValueStore",target:"_blank",rel:"noopener"},"Apify SDK"),",\n",(0,l.kt)("a",{parentName:"p",href:"/apify-client-js#keyvaluestoreclient",target:null,rel:null},"JavaScript API client"),",\n",(0,l.kt)("a",{parentName:"p",href:"/apify-client-python#keyvaluestoreclient",target:null,rel:null},"Python API client"),",\nor the ",(0,l.kt)("a",{parentName:"p",href:"/api/v2#/reference/key-value-stores",target:null,rel:null},"Apify API"),"."),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/platform/storage/key-value-store",target:null,rel:null},"See the key-value store documentation")," for details."),(0,l.kt)("h2",{id:"request-queue"},"Request queue"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/platform/storage/request-queue",target:null,rel:null},"Request queues")," allow you to dynamically maintain a queue of URLs of web pages. You can use this when recursively crawling websites: you start from initial URLs and add new links as they are found while skipping duplicates."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Request queue graphic",src:a(23892).Z,width:"808",height:"264"})),(0,l.kt)("p",null,"The easiest way to access your request queues is via\n",(0,l.kt)("a",{parentName:"p",href:"https://console.apify.com/storage?tab=requestQueues",target:"_blank",rel:"noopener"},"Apify Console"),", which provides a user-friendly interface for viewing your request queues and editing your queues' properties."),(0,l.kt)("p",null,"To manage your request queues, you can use the\n",(0,l.kt)("a",{parentName:"p",href:"https://docs-v2.apify.com/sdk-js/api/apify/class/RequestQueue",target:"_blank",rel:"noopener"},"Apify SDK"),",\n",(0,l.kt)("a",{parentName:"p",href:"/apify-client-js#requestqueueclient",target:null,rel:null},"JavaScript API client"),",\n",(0,l.kt)("a",{parentName:"p",href:"/apify-client-python#requestqueueclient",target:null,rel:null},"Python API client"),",\nor the ",(0,l.kt)("a",{parentName:"p",href:"/api/v2#/reference/request-queues",target:null,rel:null},"Apify API"),"."),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/platform/storage/request-queue",target:null,rel:null},"See the request queue documentation")," for details."),(0,l.kt)("h2",{id:"basic-usage"},"Basic usage"),(0,l.kt)("p",null,"There are five ways to access your storage:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://console.apify.com/storage",target:"_blank",rel:"noopener"},"Apify Console")," - provides an easy-to-use interface [",(0,l.kt)("a",{parentName:"li",href:"#apify-console",target:null,rel:null},"details"),"]."),(0,l.kt)("li",{parentName:"ul"},"Apify SDK - ",(0,l.kt)("a",{parentName:"li",href:"https://docs-v2.apify.com/sdk-js/docs/guides/request-storage",target:"_blank",rel:"noopener"},"Request"),"/",(0,l.kt)("a",{parentName:"li",href:"https://docs-v2.apify.com/sdk-js/docs/guides/result-storage",target:"_blank",rel:"noopener"},"Result")," storage - when building your own Apify actor [",(0,l.kt)("a",{parentName:"li",href:"#apify-sdk-and-crawlee",target:null,rel:null},"details"),"]."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/apify-client-js",target:null,rel:null},"JavaScript API client")," - to access your storages from any Node.js application [",(0,l.kt)("a",{parentName:"li",href:"#javascript-api-client",target:null,rel:null},"details"),"]."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/apify-client-python",target:null,rel:null},"Python API client")," - to access your storages from any Python application [",(0,l.kt)("a",{parentName:"li",href:"#python-api-client",target:null,rel:null},"details"),"]."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/api/v2#/reference/key-value-stores",target:null,rel:null},"Apify API")," - for accessing your storages programmatically [",(0,l.kt)("a",{parentName:"li",href:"#apify-api",target:null,rel:null},"details"),"].")),(0,l.kt)("h3",{id:"apify-console"},"Apify Console"),(0,l.kt)("p",null,"To access your storages from Apify Console, go to the ",(0,l.kt)("a",{parentName:"p",href:"https://console.apify.com/storage",target:"_blank",rel:"noopener"},(0,l.kt)("strong",{parentName:"a"},"Storage")," section")," in the left-side menu. From there, you can click through the tabs to view your key-value stores, datasets, request queues and related API endpoints. To view a storage, click its ",(0,l.kt)("strong",{parentName:"p"},"ID"),"."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Storages in app",src:a(81437).Z,width:"1978",height:"1116"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Only named storages are displayed by default. Select the ",(0,l.kt)("strong",{parentName:"p"},"Include unnamed store")," checkbox to display all of your storages.")),(0,l.kt)("p",null,"You can edit your stores' names by clicking their caption (ID or name) on their detail page."),(0,l.kt)("p",null,"Under the ",(0,l.kt)("strong",{parentName:"p"},"Settings")," tab of their detail page, you can grant ",(0,l.kt)("a",{parentName:"p",href:"/access-rights",target:null,rel:null},"access rights")," to other Apify users."),(0,l.kt)("p",null,"You can quickly share your storages' contents and details by sharing the URLs you find under the ",(0,l.kt)("strong",{parentName:"p"},"API")," tab in a store's detail page."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Storage API",src:a(21110).Z,width:"1880",height:"1064"})),(0,l.kt)("p",null,"These URLs provide links to API ",(0,l.kt)("strong",{parentName:"p"},"endpoints"),"\u2013the places where your data are stored. Endpoints that allow you to ",(0,l.kt)("strong",{parentName:"p"},"read")," stored information do not require an ",(0,l.kt)("a",{parentName:"p",href:"/api/v2#/introduction/authentication",target:null,rel:null},"authentication token"),". The calls are authenticated using a hard-to-guess ID, so they can be shared freely. Operations such as ",(0,l.kt)("strong",{parentName:"p"},"update")," or ",(0,l.kt)("strong",{parentName:"p"},"delete"),", however, will need the authentication token."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Never share a URL containing your authentication token, as this will compromise your account's security. ",(0,l.kt)("br",null),"\nIf the data you want to share requires a token, first download the data, then share it as a file.")),(0,l.kt)("h3",{id:"apify-sdk-and-crawlee"},"Apify SDK and Crawlee"),(0,l.kt)("p",null,"The ",(0,l.kt)("a",{parentName:"p",href:"https://docs-v2.apify.com/sdk-js",target:"_blank",rel:"noopener"},"Apify SDK")," is a JavaScript/Node.js library providing tools to build your own actors. ",(0,l.kt)("a",{parentName:"p",href:"https://crawlee.dev/",target:"_blank",rel:"noopener"},"Crawlee")," is a JavaScript/Node.js library which allows you to build your own web scraping and automation solutions (formerly was a part of Apify SDK). Both libraries require ",(0,l.kt)("a",{parentName:"p",href:"https://nodejs.org/en/",target:"_blank",rel:"noopener"},"Node.js")," 16 or later."),(0,l.kt)("p",null,"See ",(0,l.kt)("a",{parentName:"p",href:"https://crawlee.dev/docs/quick-start",target:"_blank",rel:"noopener"},"Crawlee documentation")," for setup instructions and to learn how to build your own crawlers and run them on the ",(0,l.kt)("a",{parentName:"p",href:"https://crawlee.dev/docs/guides/apify-platform",target:"_blank",rel:"noopener"},"Apify platform"),"."),(0,l.kt)("h3",{id:"javascript-api-client"},"JavaScript API client"),(0,l.kt)("p",null,"Apify's ",(0,l.kt)("a",{parentName:"p",href:"/apify-client-js",target:null,rel:null},"JavaScript API client")," (",(0,l.kt)("inlineCode",{parentName:"p"},"apify-client"),") allows you to access your datasets from any Node.js application, whether it is running on the Apify platform or elsewhere."),(0,l.kt)("p",null,"See the ",(0,l.kt)("a",{parentName:"p",href:"/apify-client-js#quick-start",target:null,rel:null},"client's documentation")," for help with setup."),(0,l.kt)("h3",{id:"python-api-client"},"Python API client"),(0,l.kt)("p",null,"Apify's ",(0,l.kt)("a",{parentName:"p",href:"/apify-client-python",target:null,rel:null},"Python API client")," (",(0,l.kt)("inlineCode",{parentName:"p"},"apify-client"),") allows you to access your datasets from any Python application, whether it is running on the Apify platform or elsewhere."),(0,l.kt)("p",null,"See the ",(0,l.kt)("a",{parentName:"p",href:"/apify-client-python#quick-start",target:null,rel:null},"client's documentation")," for help with setup."),(0,l.kt)("h3",{id:"apify-api"},"Apify API"),(0,l.kt)("p",null,"The ",(0,l.kt)("a",{parentName:"p",href:"/api/v2#/reference/key-value-stores",target:null,rel:null},"Apify API")," allows you to access your storages programmatically using ",(0,l.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods",target:"_blank",rel:"noopener"},"HTTP requests")," and easily share your crawling results."),(0,l.kt)("p",null,"In most cases, when accessing your storages via API, you will need to provide a ",(0,l.kt)("strong",{parentName:"p"},"store ID"),", which you can do in the following formats:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"WkzbQMuFYuamGv3YF")," - the store's alphanumerical ID if the store is unnamed."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"username~store-name")," - your username and the store's name separated by a tilde (",(0,l.kt)("inlineCode",{parentName:"li"},"~"),") character (e.g. ",(0,l.kt)("strong",{parentName:"li"},"janedoe~ecommerce-scraping-results"),") if the store is named.")),(0,l.kt)("p",null,"For read (GET) requests, it is enough to use a store's alphanumerical ID, since the ID is hard to guess and effectively serves as an authentication key."),(0,l.kt)("p",null,"With other request types and when using the ",(0,l.kt)("strong",{parentName:"p"},"username~store-name"),", however, you will need to provide your secret API token in your request's ",(0,l.kt)("a",{parentName:"p",href:"/api/v2#/introduction/authentication",target:null,rel:null},(0,l.kt)("inlineCode",{parentName:"a"},"Authorization"))," header or as a query parameter. You can find your token on the ",(0,l.kt)("a",{parentName:"p",href:"https://console.apify.com/account?tab=integrations",target:"_blank",rel:"noopener"},"Integrations")," page of your Apify account."),(0,l.kt)("p",null,"See the ",(0,l.kt)("a",{parentName:"p",href:"/api/v2#/reference/datasets",target:null,rel:null},"API documentation")," for details and a breakdown of each storage API endpoint."),(0,l.kt)("h2",{id:"rate-limiting"},"Rate limiting"),(0,l.kt)("p",null,"All API endpoints limit their rate of requests to protect Apify servers from overloading. The default rate limit is ",(0,l.kt)("strong",{parentName:"p"},"30")," requests per second per storage object, with a few exceptions, which are limited to ",(0,l.kt)("strong",{parentName:"p"},"200")," requests per second per storage object:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/api/v2#/reference/datasets/item-collection/put-items",target:null,rel:null},"Push items")," to dataset."),(0,l.kt)("li",{parentName:"ul"},"CRUD (",(0,l.kt)("a",{parentName:"li",href:"/api/v2#/reference/request-queues/request-collection/add-request",target:null,rel:null},"add"),",\n",(0,l.kt)("a",{parentName:"li",href:"/api/v2#/reference/request-queues/request-collection/get-request",target:null,rel:null},"get"),",\n",(0,l.kt)("a",{parentName:"li",href:"/api/v2#/reference/request-queues/request-collection/update-request",target:null,rel:null},"update"),",\n",(0,l.kt)("a",{parentName:"li",href:"/api/v2#/reference/request-queues/request-collection/delete-request",target:null,rel:null},"delete"),")\noperations of ",(0,l.kt)("strong",{parentName:"li"},"request queue")," requests.")),(0,l.kt)("p",null,"If a client sends too many requests, the API endpoints respond with the HTTP status code ",(0,l.kt)("inlineCode",{parentName:"p"},"429 Too Many Requests")," and the following body:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "error": {\n        "type": "rate-limit-exceeded",\n        "message": "You have exceeded the rate limit of ... requests per second"\n    }\n}\n')),(0,l.kt)("p",null,"See the ",(0,l.kt)("a",{parentName:"p",href:"/api/v2#/introduction/rate-limiting",target:null,rel:null},"API documentation")," for details and to learn what to do if you exceed the rate limit."),(0,l.kt)("h2",{id:"data-retention"},"Data retention"),(0,l.kt)("p",null,"Unnamed storages expire after 7 days unless otherwise specified. Named storages are retained indefinitely."),(0,l.kt)("h3",{id:"preserving-storages"},"Preserving your storages"),(0,l.kt)("p",null,"To preserve your storages indefinitely, give them a name. You can do this in Apify Console or using our API. First, you'll need your store's ID. You can find it in the details of the run that created it. In Apify Console, head over to your run's details and select the ",(0,l.kt)("strong",{parentName:"p"},"Dataset"),", ",(0,l.kt)("strong",{parentName:"p"},"Key-value store"),", or ",(0,l.kt)("strong",{parentName:"p"},"Request queue")," tab as appropriate. Check that store's details, and you will find its ID among them."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Finding your store&#39;s ID",src:a(24446).Z,width:"1764",height:"558"})),(0,l.kt)("p",null,"Then, head over to the ",(0,l.kt)("strong",{parentName:"p"},"Storage")," menu, select the appropriate tab, and tick the ",(0,l.kt)("strong",{parentName:"p"},"Include unnamed ","[","storages","]")," box. Find and open your storage using the ID you just found, select the Settings tab, and enter its new name in the field. Your storage will now be preserved indefinitely."),(0,l.kt)("p",null,"To name your storage via API, get its ID from the run that generated it using the ",(0,l.kt)("a",{parentName:"p",href:"/api/v2#/reference/actor-runs/run-object-and-its-storages/get-run",target:null,rel:null},"Get run")," endpoint. You can then give it a new name using the ",(0,l.kt)("strong",{parentName:"p"},"Update ","[","storage","]")," endpoint. For example, ",(0,l.kt)("a",{parentName:"p",href:"/api/v2#/reference/datasets/dataset/update-dataset",target:null,rel:null},"Update dataset"),"."),(0,l.kt)("p",null,"The ",(0,l.kt)("a",{parentName:"p",href:"sdk.apify.com",target:null,rel:null},"Apify SDK"),", ",(0,l.kt)("a",{parentName:"p",href:"https://crawlee.dev/",target:"_blank",rel:"noopener"},"Crawlee"),", the ","[JavaScript]","({{@link apify_client_js.md}}) and ","[Python]","({{@link apify_client_python.md}}) clients have their own ways of naming storages - check their docs for details."),(0,l.kt)("h2",{id:"named-and-unnamed-storages"},"Named and unnamed storages"),(0,l.kt)("p",null,"The default storages for an actor run are created without a name (with only an ",(0,l.kt)("strong",{parentName:"p"},"ID"),"). This allows them to expire after 7 days (on the free plan, longer on paid plans) and not take up your storage space. If you want to preserve a storage, simply ",(0,l.kt)("a",{parentName:"p",href:"#preserving-storages",target:null,rel:null},"give it a name"),", and it will be retained indefinitely."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Storages' names can be up to 63 characters long.")),(0,l.kt)("p",null,"Named and unnamed storages are the same in all regards except their retention period. The only difference is that named storages make it easier to verify you are using the correct store."),(0,l.kt)("p",null,"For example, the storage names ",(0,l.kt)("strong",{parentName:"p"},"janedoe~my-storage-1")," and ",(0,l.kt)("strong",{parentName:"p"},"janedoe~web-scrape-results")," are easier to tell apart than the alphanumerical IDs ",(0,l.kt)("strong",{parentName:"p"},"cAbcYOfuXemTPwnIB")," and ",(0,l.kt)("strong",{parentName:"p"},"CAbcsuZbp7JHzkw1B"),"."),(0,l.kt)("h2",{id:"sharing"},"Sharing"),(0,l.kt)("p",null,"You can invite other Apify users to view or modify your storages using the ",(0,l.kt)("a",{parentName:"p",href:"/platform/access-rights",target:null,rel:null},"access rights")," system. See the ",(0,l.kt)("a",{parentName:"p",href:"/platform/access-rights/list-of-permissions",target:null,rel:null},"full list of permissions"),"."),(0,l.kt)("h3",{id:"sharing-storages-between-runs"},"Sharing storages between runs"),(0,l.kt)("p",null,"Any storage can be accessed from any ",(0,l.kt)("a",{parentName:"p",href:"/platform/actors",target:null,rel:null},"actor")," or ",(0,l.kt)("a",{parentName:"p",href:"/platform/actors/tasks",target:null,rel:null},"task")," run as long as you know its ",(0,l.kt)("strong",{parentName:"p"},"name")," or ",(0,l.kt)("strong",{parentName:"p"},"ID"),". You can access and manage storages from other runs using the same methods or endpoints as with storages from your current run."),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/platform/storage/dataset",target:null,rel:null},"Datasets")," and ",(0,l.kt)("a",{parentName:"p",href:"/platform/storage/key-value-store",target:null,rel:null},"key-value stores")," can be used concurrently by multiple actors. This means that multiple actors or tasks running at the same time can ",(0,l.kt)("strong",{parentName:"p"},"write")," data to a single dataset or key-value store. The same applies for reading data \u2013 multiple runs can ",(0,l.kt)("strong",{parentName:"p"},"read")," data from datasets and key-value stores concurrently."),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/platform/storage/request-queue",target:null,rel:null},"Request queues"),", on the other hand, only allow multiple runs to ",(0,l.kt)("strong",{parentName:"p"},"add new data"),". A request queue can only be processed by one actor or task run at any one time."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"When multiple runs try to write data to a storage at the same time, it isn't possible to control the order in which the data will be written. It will be written whenever the request is processed. ",(0,l.kt)("br",null),"\nIn key-value stores and request queues, the same applies for deleting records: if a request to delete a record is made shortly before a request to read that same record, the second request will fail.")),(0,l.kt)("h2",{id:"deleting-storages"},"Deleting storages"),(0,l.kt)("p",null,"Named storages are only removed when you request it. You can delete storages in the following ways."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://console.apify.com/storage",target:"_blank",rel:"noopener"},"Apify Console")," - using the ",(0,l.kt)("strong",{parentName:"li"},"Actions")," button in the store's detail page."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://docs-v2.apify.com/sdk-js",target:"_blank",rel:"noopener"},"Apify SDK")," - using the ",(0,l.kt)("inlineCode",{parentName:"li"},".drop()")," method of the\n",(0,l.kt)("a",{parentName:"li",href:"https://docs-v2.apify.com/sdk-js/api/apify/class/Dataset#drop",target:"_blank",rel:"noopener"},"Dataset"),",\n",(0,l.kt)("a",{parentName:"li",href:"https://docs-v2.apify.com/sdk-js/api/apify/class/KeyValueStore#drop",target:"_blank",rel:"noopener"},"Key-value store"),",\nor ",(0,l.kt)("a",{parentName:"li",href:"https://docs-v2.apify.com/sdk-js/api/apify/class/RequestQueue#drop",target:"_blank",rel:"noopener"},"Request queue")," class."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/apify-client-js",target:null,rel:null},"JavaScript API client")," - using the ",(0,l.kt)("inlineCode",{parentName:"li"},".delete()")," method in the\n",(0,l.kt)("a",{parentName:"li",href:"/apify-client-js#datasetclient",target:null,rel:null},"dataset"),",\n",(0,l.kt)("a",{parentName:"li",href:"/apify-client-js#keyvaluestoreclient",target:null,rel:null},"key-value store"),",\nor ",(0,l.kt)("a",{parentName:"li",href:"/apify-client-js#requestqueueclient",target:null,rel:null},"request queue")," clients."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/apify-client-python",target:null,rel:null},"Python API client")," - using the ",(0,l.kt)("inlineCode",{parentName:"li"},".delete()")," method in the\n",(0,l.kt)("a",{parentName:"li",href:"/apify-client-python#datasetclient",target:null,rel:null},"dataset"),",\n",(0,l.kt)("a",{parentName:"li",href:"/apify-client-python#keyvaluestoreclient",target:null,rel:null},"key-value store"),",\nor ",(0,l.kt)("a",{parentName:"li",href:"/apify-client-python#requestqueueclient",target:null,rel:null},"request queue")," clients."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/api/v2#/reference/key-value-stores/store-object/delete-store",target:null,rel:null},"API")," using the - ",(0,l.kt)("strong",{parentName:"li"},"Delete ","[store]")," endpoint, where ",(0,l.kt)("strong",{parentName:"li"},"[store]")," is the type of storage you want to delete.")))}h.isMDXComponent=!0},81362:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/datasets-overview-f866e92e0de64d2a0475085016fcbc37.png"},84544:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/key-value-overview-cc78407f157ecfa2b9ccb942e59d54b6.svg"},23892:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/request-queue-overview-6ebf1f808632078b7bbbd5e68696a472.svg"},81437:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/datasets-app-05558fd1f2bf066a2667219908ede0f4.png"},24446:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/find-store-id-5025da15540d3787fd9da89e6b01edbc.png"},21110:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/overview-api-eea0b602080dcd065a9456ec069bec12.png"}}]);