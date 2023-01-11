"use strict";(self.webpackChunkapify_docs_v2=self.webpackChunkapify_docs_v2||[]).push([[7297],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>k});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=r.createContext({}),p=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),y=p(a),k=n,m=y["".concat(i,".").concat(k)]||y[k]||c[k]||o;return a?r.createElement(m,l(l({ref:t},u),{},{components:a})):r.createElement(m,l({ref:t},u))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=y;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:n,l[1]=s;for(var p=2;p<o;p++)l[p]=a[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}y.displayName="MDXCreateElement"},30233:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>k,frontMatter:()=>s,metadata:()=>p,toc:()=>c});var r=a(87462),n=a(63366),o=(a(67294),a(3905)),l=["components"],s={title:"Key-value store",description:"Store anything from actor or task run results JSON documents or images. Learn how to access and manage key-value stores from Apify Console or via API.",sidebar_position:9.2,slug:"/storage/key-value-store"},i="Key-value store",p={unversionedId:"storage/key_value_store",id:"storage/key_value_store",title:"Key-value store",description:"Store anything from actor or task run results JSON documents or images. Learn how to access and manage key-value stores from Apify Console or via API.",source:"@site/sources/platform/storage/key_value_store.md",sourceDirName:"storage",slug:"/storage/key-value-store",permalink:"/platform/storage/key-value-store",draft:!1,tags:[],version:"current",lastUpdatedBy:"Jind\u0159ich B\xe4r",lastUpdatedAt:1673462481,formattedLastUpdatedAt:"Jan 11, 2023",sidebarPosition:9.2,frontMatter:{title:"Key-value store",description:"Store anything from actor or task run results JSON documents or images. Learn how to access and manage key-value stores from Apify Console or via API.",sidebar_position:9.2,slug:"/storage/key-value-store"},sidebar:"docs",previous:{title:"Dataset",permalink:"/platform/storage/dataset"},next:{title:"Request queue",permalink:"/platform/storage/request-queue"}},u={},c=[{value:"Basic usage",id:"basic-usage",level:2},{value:"Apify Console",id:"apify-console",level:3},{value:"Apify SDK",id:"apify-sdk",level:3},{value:"JavaScript API client",id:"javascript-api-client",level:3},{value:"Python API client",id:"python-api-client",level:3},{value:"Apify API",id:"apify-api",level:3},{value:"Compression",id:"compression",level:2},{value:"Sharing",id:"sharing",level:2},{value:"Sharing key-value stores between runs",id:"sharing-key-value-stores-between-runs",level:3},{value:"Data consistency",id:"data-consistency",level:2},{value:"Limits",id:"limits",level:2}],y={toc:c};function k(e){var t=e.components,s=(0,n.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},y,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"key-value-store"},"Key-value store"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Store anything from actor or task run results JSON documents or images. Learn how to access and manage key-value stores from Apify Console or via API.")),(0,o.kt)("hr",null),(0,o.kt)("p",null,"The key-value store is simple storage that can be used for storing any kind of data. It can be JSON or HTML documents, zip files, images, or simply strings. The data are stored along with their ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types",target:"_blank",rel:"noopener"},"MIME content type"),"."),(0,o.kt)("p",null,"Each actor run is assigned its own key-value store when it is created. The store contains the actor's input, and, if necessary, other data such as its output."),(0,o.kt)("p",null,"Key-value stores are mutable\u2013you can both add entries and delete them."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Named key-value stores are retained indefinitely. ",(0,o.kt)("br",null),"\nUnnamed key-value stores expire after 7 days unless otherwise specified.",(0,o.kt)("br",null),"\n",(0,o.kt)("a",{parentName:"p",href:"/platform/storage",target:null,rel:null},"Learn about named and unnamed key-value stores."))),(0,o.kt)("h2",{id:"basic-usage"},"Basic usage"),(0,o.kt)("p",null,"There are five ways to access your key-value stores:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://console.apify.com/storage?tab=keyValueStores",target:"_blank",rel:"noopener"},"Apify Console")," - provides an easy-to-understand interface [",(0,o.kt)("a",{parentName:"li",href:"#apify-console",target:null,rel:null},"details"),"]."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://sdk.apify.com/docs/guides/result-storage#key-value-store",target:null,rel:null},"Apify SDK")," - when building your own Apify actor [",(0,o.kt)("a",{parentName:"li",href:"#apify-sdk",target:null,rel:null},"details"),"]."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/apify-client-js#keyvaluestoreclient",target:null,rel:null},"JavaScript API client")," - to access your key-value stores from any Node.js application [",(0,o.kt)("a",{parentName:"li",href:"#javascript-api-client",target:null,rel:null},"details"),"]."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/apify-client-python#keyvaluestoreclient",target:null,rel:null},"Python API client")," - to access your key-value stores from any Python application [",(0,o.kt)("a",{parentName:"li",href:"#python-api-client",target:null,rel:null},"details"),"]."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.apify.com/api/v2#/reference/key-value-stores/get-items",target:"_blank",rel:"noopener"},"Apify API")," - for accessing your key-value stores programmatically [",(0,o.kt)("a",{parentName:"li",href:"#apify-api",target:null,rel:null},"details"),"].")),(0,o.kt)("h3",{id:"apify-console"},"Apify Console"),(0,o.kt)("p",null,"In ",(0,o.kt)("a",{parentName:"p",href:"https://console.apify.com",target:"_blank",rel:"noopener"},"Apify Console"),", you can view your key-value stores in the ",(0,o.kt)("a",{parentName:"p",href:"https://console.apify.com/storage",target:"_blank",rel:"noopener"},"Storage")," section under the ",(0,o.kt)("a",{parentName:"p",href:"https://console.apify.com/storage?tab=keyValueStores",target:"_blank",rel:"noopener"},"Key-value stores")," tab."),(0,o.kt)("p",null,"Only named key-value stores are displayed by default. Select the ",(0,o.kt)("strong",{parentName:"p"},"Include unnamed key-value stores")," checkbox to display all of your stores."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Key-value stores in app",src:a(88843).Z,width:"1300",height:"767"})),(0,o.kt)("p",null,"To view a key-value store's content, click on its ",(0,o.kt)("strong",{parentName:"p"},"Store ID"),".\nUnder the ",(0,o.kt)("strong",{parentName:"p"},"Settings")," tab, you can update the store's name (and, in turn, its ",(0,o.kt)("a",{parentName:"p",href:"/platform/storage",target:null,rel:null},"retention period"),".\nClick on the ",(0,o.kt)("inlineCode",{parentName:"p"},"API")," button to view and test a store's ",(0,o.kt)("a",{parentName:"p",href:"https://docs.apify.com/api/v2#/reference/key-value-stores",target:"_blank",rel:"noopener"},"API endpoints"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Key-value stores detail",src:a(4345).Z,width:"1300",height:"992"})),(0,o.kt)("h3",{id:"apify-sdk"},"Apify SDK"),(0,o.kt)("p",null,"If you are building an ",(0,o.kt)("a",{parentName:"p",href:"/platform/actors",target:null,rel:null},"Apify actor"),", you will be using the ",(0,o.kt)("a",{parentName:"p",href:"https://sdk.apify.com",target:null,rel:null},"Apify SDK"),".\nIn the ",(0,o.kt)("a",{parentName:"p",href:"https://sdk.apify.com/docs/guides/result-storage#key-value-store",target:null,rel:null},"Apify SDK"),", the key-value store is represented by the ",(0,o.kt)("a",{parentName:"p",href:"https://sdk.apify.com/api/apify/class/KeyValueStore",target:null,rel:null},(0,o.kt)("inlineCode",{parentName:"a"},"KeyValueStore"))," class."),(0,o.kt)("p",null,"You can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"KeyValueStore")," class to specify whether your data is stored locally or in the Apify cloud,\nget and set values using the ",(0,o.kt)("a",{parentName:"p",href:"https://sdk.apify.com/api/apify/class/KeyValueStore#getValue",target:null,rel:null},(0,o.kt)("inlineCode",{parentName:"a"},"getValue()"))," and ",(0,o.kt)("a",{parentName:"p",href:"https://sdk.apify.com/api/apify/class/KeyValueStore#setValue",target:null,rel:null},(0,o.kt)("inlineCode",{parentName:"a"},"setValue()"))," methods respectively, or iterate over your key-value store keys using the ",(0,o.kt)("a",{parentName:"p",href:"https://sdk.apify.com/api/apify/class/KeyValueStore#forEachKey",target:null,rel:null},(0,o.kt)("inlineCode",{parentName:"a"},"forEachKey()"))," method."),(0,o.kt)("p",null,"Each actor run is associated with the default key-value store, which is created for the actor run. When running your actors and storing data locally, you can pass its ",(0,o.kt)("a",{parentName:"p",href:"/platform/actors/running/input",target:null,rel:null},"input")," using the ",(0,o.kt)("strong",{parentName:"p"},"INPUT.json")," file in the default key-value store directory."),(0,o.kt)("p",null,"You can find ",(0,o.kt)("inlineCode",{parentName:"p"},"INPUT.json")," and other key-value store files in the location below."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"{APIFY_LOCAL_STORAGE_DIR}/key_value_stores/{STORE_ID}/{KEY}.{EXT}\n")),(0,o.kt)("p",null,"The default key-value store's ID is ",(0,o.kt)("strong",{parentName:"p"},"default"),". The {KEY} is the record's ",(0,o.kt)("strong",{parentName:"p"},"key")," and {EXT} corresponds to the record value's MIME content type."),(0,o.kt)("p",null,"To manage your key-value stores, you can use the following methods. See the ",(0,o.kt)("inlineCode",{parentName:"p"},"KeyValueStore")," class's ",(0,o.kt)("a",{parentName:"p",href:"https://sdk.apify.com/api/apify/class/KeyValueStore",target:null,rel:null},"API reference")," for the full list."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { Actor } from 'apify';\n\nawait Actor.init();\n// ...\n\n// Get the default input\nconst input = await Actor.getInput();\n\n// Open a named key-value store\nconst exampleStore = await Actor.openKeyValueStore('my-store');\n\n// Read a record in the exampleStore storage\nconst value = await exampleStore.getValue('some-key');\n\n// Write a record to exampleStore\nawait exampleStore.setValue('some-key', { foo: 'bar' });\n\n// Delete a record from exampleStore\nawait exampleStore.setValue('some-key', null);\n\n// ...\nawait Actor.exit();\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Note that JSON is automatically parsed to a JavaScript object, text data returned as a string and other data is returned as binary buffer.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { Actor } from 'apify';\n\nawait Actor.init();\n// ...\n\n// Get input of your actor\nconst input = await Actor.getInput();\nconst value = await Actor.getValue('my-key');\n\n// ...\nawait Actor.setValue(\n    'OUTPUT',\n    imageBuffer,\n    { contentType: 'image/jpeg' },\n);\n\n// ...\nawait Actor.exit();\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"Actor.getInput()")," method is not only a shortcut to ",(0,o.kt)("inlineCode",{parentName:"p"},"Actor.getValue('INPUT')")," - it is also compatible with ",(0,o.kt)("inlineCode",{parentName:"p"},"Actor.metamorph()")," [",(0,o.kt)("a",{parentName:"p",href:"https://docs.apify.com/actors/source-code#metamorph",target:"_blank",rel:"noopener"},"docs"),"]. This is because a metamorphed actor run's input is stored in the ",(0,o.kt)("strong",{parentName:"p"},"INPUT-METAMORPH-1")," key instead of ",(0,o.kt)("strong",{parentName:"p"},"INPUT"),", which hosts the original input."),(0,o.kt)("p",null,"See the ",(0,o.kt)("a",{parentName:"p",href:"https://sdk.apify.com/docs/guides/result-storage#key-value-store",target:null,rel:null},"SDK documentation")," and the ",(0,o.kt)("inlineCode",{parentName:"p"},"KeyValueStore")," class's ",(0,o.kt)("a",{parentName:"p",href:"https://sdk.apify.com/api/apify/class/KeyValueStore",target:null,rel:null},"API reference")," for details on managing your key-value stores with the Apify SDK."),(0,o.kt)("h3",{id:"javascript-api-client"},"JavaScript API client"),(0,o.kt)("p",null,"Apify's ",(0,o.kt)("a",{parentName:"p",href:"/apify-client-js#keyvaluestoreclient",target:null,rel:null},"JavaScript API client")," (",(0,o.kt)("inlineCode",{parentName:"p"},"apify-client"),") allows you to access your key-value stores from any Node.js application, whether it is running on the Apify platform or elsewhere."),(0,o.kt)("p",null,"After importing and initiating the client, you can save each key-value store to a variable for easier access."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const myKeyValStoreClient = apifyClient.keyValueStore('jane-doe/my-key-val-store');\n")),(0,o.kt)("p",null,"You can then use that variable to ",(0,o.kt)("a",{parentName:"p",href:"/apify-client-js#keyvaluestoreclient",target:null,rel:null},"access the key-value store's items and manage it"),"."),(0,o.kt)("p",null,"See the ",(0,o.kt)("a",{parentName:"p",href:"/apify-client-js#keyvaluestoreclient",target:null,rel:null},"JavaScript API client documentation")," for ",(0,o.kt)("a",{parentName:"p",href:"/apify-client-js#quick-start",target:null,rel:null},"help with setup")," and more details."),(0,o.kt)("h3",{id:"python-api-client"},"Python API client"),(0,o.kt)("p",null,"Apify's ",(0,o.kt)("a",{parentName:"p",href:"/apify-client-python#keyvaluestoreclient",target:null,rel:null},"Python API client")," (",(0,o.kt)("inlineCode",{parentName:"p"},"apify-client"),") allows you to access your key-value stores from any Python application, whether it is running on the Apify platform or elsewhere."),(0,o.kt)("p",null,"After importing and initiating the client, you can save each key-value store to a variable for easier access."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"my_key_val_store_client = apify_client.key_value_store('jane-doe/my-key-val-store')\n")),(0,o.kt)("p",null,"You can then use that variable to ",(0,o.kt)("a",{parentName:"p",href:"/apify-client-python#keyvaluestoreclient",target:null,rel:null},"access the key-value store's items and manage it"),"."),(0,o.kt)("p",null,"See the ",(0,o.kt)("a",{parentName:"p",href:"/apify-client-python#keyvaluestoreclient",target:null,rel:null},"Python API client documentation")," for ",(0,o.kt)("a",{parentName:"p",href:"/apify-client-python#quick-start",target:null,rel:null},"help with setup")," and more details."),(0,o.kt)("h3",{id:"apify-api"},"Apify API"),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://docs.apify.com/api/v2#/reference/key-value-stores",target:"_blank",rel:"noopener"},"Apify API")," allows you to access your key-value stores programmatically using ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods",target:"_blank",rel:"noopener"},"HTTP requests")," and easily share your crawling results."),(0,o.kt)("p",null,"If you are accessing your datasets using the ",(0,o.kt)("strong",{parentName:"p"},"username~store-name")," ",(0,o.kt)("a",{parentName:"p",href:"/platform/storage",target:null,rel:null},"store ID format"),". You can find the token (and your user ID) on the ",(0,o.kt)("a",{parentName:"p",href:"https://console.apify.com/account#/integrations",target:"_blank",rel:"noopener"},"Integrations")," page of your Apify account."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"When providing your API authentication token, we recommend using the request's ",(0,o.kt)("inlineCode",{parentName:"p"},"Authorization")," header, rather than the URL. (",(0,o.kt)("a",{parentName:"p",href:"#introduction/authentication",target:null,rel:null},"More info"),").")),(0,o.kt)("p",null,"To ",(0,o.kt)("strong",{parentName:"p"},"get a list of your key-value stores"),", send a GET request to the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.apify.com/api/v2#/reference/key-value-stores/store-collection/get-list-of-key-value-stores",target:"_blank",rel:"noopener"},"Get list of key-value stores")," endpoint."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"https://api.apify.com/v2/key-value-stores\n")),(0,o.kt)("p",null,"To ",(0,o.kt)("strong",{parentName:"p"},"get information about a key-value store")," such as its creation time and item count, send a GET request to the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.apify.com/api/v2#/reference/key-value-stores/store-object/get-store",target:"_blank",rel:"noopener"},"Get store")," endpoint."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"https://api.apify.com/v2/key-value-stores/{STORE_ID}\n")),(0,o.kt)("p",null,"To ",(0,o.kt)("strong",{parentName:"p"},"get a record")," (its value) from a key-value store, send a GET request to the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.apify.com/api/v2#/reference/key-value-stores/key-collection/get-record",target:"_blank",rel:"noopener"},"Get record")," endpoint."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"https://api.apify.com/v2/key-value-stores/{STORE_ID}/records/{KEY_ID}\n")),(0,o.kt)("p",null,"To ",(0,o.kt)("strong",{parentName:"p"},"add a record")," with a specific key in a key-value store, send a PUT request to the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.apify.com/api/v2#/reference/key-value-stores/record/put-record",target:"_blank",rel:"noopener"},"Put record")," endpoint."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"https://api.apify.com/v2/key-value-stores/{STORE_ID}/records/{KEY_ID}\n")),(0,o.kt)("p",null,"Example payload:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "foo": "bar",\n    "fos": "baz"\n}\n')),(0,o.kt)("p",null,"To ",(0,o.kt)("strong",{parentName:"p"},"delete a record"),", send a DELETE request specifying the key from a key-value store to the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.apify.com/api/v2#/reference/key-value-stores/record/delete-record",target:"_blank",rel:"noopener"},"Delete record")," endpoint."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"https://api.apify.com/v2/key-value-stores/{STORE_ID}/records/{KEY_ID}\n")),(0,o.kt)("p",null,"See the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.apify.com/api/v2#/reference/key-value-stores",target:"_blank",rel:"noopener"},"API documentation")," for a detailed breakdown of each API endpoint."),(0,o.kt)("h2",{id:"compression"},"Compression"),(0,o.kt)("p",null,"In the past, every record uploaded using the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.apify.com/api/v2#/reference/key-value-stores/record/put-record",target:"_blank",rel:"noopener"},"Put record")," endpoint was compressed using Gzip before uploading. This has changed. ",(0,o.kt)("strong",{parentName:"p"},"Now, records are stored in the state you upload them. This means it is up to you if the record is stored compressed or uncompressed.")),(0,o.kt)("p",null,"You can compress a record and use the ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Encoding",target:"_blank",rel:"noopener"},"Content-Encoding request header")," to let our platform know which compression it uses. We recommend compressing large key-value records to save storage space and network traffic."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"If you use the ",(0,o.kt)("a",{parentName:"strong",href:"https://sdk.apify.com/api/apify/class/KeyValueStore#setValue",target:null,rel:null},"Apify SDK")," or our ",(0,o.kt)("a",{parentName:"strong",href:"https://docs.apify.com/apify-client-js#keyvaluestoreclient-setrecord",target:"_blank",rel:"noopener"},"JavaScript API client"),", your files are compressed automatically by default.")," We recommend using the JavaScript API client, which compresses your data before they are sent to our servers and decompresses them when you retrieve them. This makes your storage costs as low as possible."),(0,o.kt)("h2",{id:"sharing"},"Sharing"),(0,o.kt)("p",null,"You can invite other Apify users to view or modify your key-value stores using the ",(0,o.kt)("a",{parentName:"p",href:"/platform/access-rights",target:null,rel:null},"access rights"),"."),(0,o.kt)("h3",{id:"sharing-key-value-stores-between-runs"},"Sharing key-value stores between runs"),(0,o.kt)("p",null,"You can access a key-value store from any ",(0,o.kt)("a",{parentName:"p",href:"/platform/actors",target:null,rel:null},"actor")," run as long as you know its ",(0,o.kt)("strong",{parentName:"p"},"name")," or ",(0,o.kt)("strong",{parentName:"p"},"ID"),"."),(0,o.kt)("p",null,"To access a key-value store from another run using the Apify SDK, open it using the ",(0,o.kt)("a",{parentName:"p",href:"https://sdk.apify.com/api/apify/class/Actor#openKeyValueStore",target:null,rel:null},(0,o.kt)("inlineCode",{parentName:"a"},"Actor.openKeyValueStore(storeIdOrName)"))," method like you would do with any other store."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const otherStore = await Actor.openKeyValueStore('old-store');\n")),(0,o.kt)("p",null,"In the ",(0,o.kt)("a",{parentName:"p",href:"/apify-client-js",target:null,rel:null},"JavaScript API client"),", you can access a store using ",(0,o.kt)("a",{parentName:"p",href:"/apify-client-js#keyvaluestoreclient",target:null,rel:null},"its client"),". Once you've opened a store, read and manage its contents like you would do with a key-value store from your current run."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const otherStoreClient = apifyClient.keyValueStore('jane-doe/old-store');\n")),(0,o.kt)("p",null,"Likewise, in the ",(0,o.kt)("a",{parentName:"p",href:"/apify-client-python",target:null,rel:null},"Python API client"),", you can access a store using ",(0,o.kt)("a",{parentName:"p",href:"/apify-client-python#keyvaluestoreclient",target:null,rel:null},"its client"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"other_store_client = apify_client.key_value_store('jane-doe/old-store')\n")),(0,o.kt)("p",null,"The same applies for the ",(0,o.kt)("a",{parentName:"p",href:"#apify-api",target:null,rel:null},"Apify API")," - you can use ",(0,o.kt)("a",{parentName:"p",href:"#apify-api",target:null,rel:null},"the same endpoints")," as you would normally do."),(0,o.kt)("p",null,"See the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.apify.com/storage#sharing-storages-between-runs",target:"_blank",rel:"noopener"},"Storage overview")," for details on sharing storages between runs."),(0,o.kt)("h2",{id:"data-consistency"},"Data consistency"),(0,o.kt)("p",null,"Key-value storage uses the ",(0,o.kt)("a",{parentName:"p",href:"https://aws.amazon.com/s3/",target:"_blank",rel:"noopener"},"AWS S3")," service. According to the ",(0,o.kt)("a",{parentName:"p",href:"https://aws.amazon.com/s3/consistency/",target:"_blank",rel:"noopener"},"S3 documentation"),", it provides ",(0,o.kt)("strong",{parentName:"p"},"strong read-after-write")," consistency."),(0,o.kt)("h2",{id:"limits"},"Limits"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Key-value store names can be up to 63 characters long.")))}k.isMDXComponent=!0},88843:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/key-value-stores-app-222021ebb5be5a2e5143dc4d019012b4.webp"},4345:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/key-value-stores-detail-8a7a1c6aaf17972bd99adbad51e710a7.webp"}}]);