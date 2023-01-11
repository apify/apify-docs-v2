"use strict";(self.webpackChunkapify_docs_v2=self.webpackChunkapify_docs_v2||[]).push([[7155],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),l=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(a),h=r,m=d["".concat(p,".").concat(h)]||d[h]||c[h]||o;return a?n.createElement(m,i(i({ref:t},u),{},{components:a})):n.createElement(m,i({ref:t},u))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=a[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},60793:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var n=a(87462),r=a(63366),o=(a(67294),a(3905)),i=["components"],s={title:"Apify API",description:"Learn how to use the Apify API to programmatically call your actors, retrieve data stored on the platform, view actor logs, and more!",sidebar_position:4,slug:"/getting-started/apify-api"},p="[](#the-apify-api) The Apify API",l={unversionedId:"getting_started/apify_api",id:"getting_started/apify_api",title:"Apify API",description:"Learn how to use the Apify API to programmatically call your actors, retrieve data stored on the platform, view actor logs, and more!",source:"@site/sources/academy/getting_started/apify_api.md",sourceDirName:"getting_started",slug:"/getting-started/apify-api",permalink:"/academy/getting-started/apify-api",draft:!1,tags:[],version:"current",lastUpdatedBy:"Jind\u0159ich B\xe4r",lastUpdatedAt:1673462481,formattedLastUpdatedAt:"Jan 11, 2023",sidebarPosition:4,frontMatter:{title:"Apify API",description:"Learn how to use the Apify API to programmatically call your actors, retrieve data stored on the platform, view actor logs, and more!",sidebar_position:4,slug:"/getting-started/apify-api"},sidebar:"defaultSidebar",previous:{title:"Inputs & outputs",permalink:"/academy/getting-started/inputs-outputs"},next:{title:"Apify client",permalink:"/academy/getting-started/apify-client"}},u={},c=[{value:" Finding your endpoint",id:"-finding-your-endpoint",level:2},{value:" Providing input",id:"-providing-input",level:2},{value:" Parameters",id:"-parameters",level:2},{value:" Sending the request",id:"-sending-the-request",level:2},{value:" Apify API&#39;s many features",id:"-apify-apis-many-features",level:2},{value:" Next up",id:"-next-up",level:2}],d={toc:c};function h(e){var t=e.components,s=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"-the-apify-api"},(0,o.kt)("a",{parentName:"h1",href:"#the-apify-api",target:null,rel:null})," The Apify API"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Learn how to use the Apify API to programmatically call your actors, retrieve data stored on the platform, view actor logs, and more!")),(0,o.kt)("hr",null),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://docs.apify.com/api/v2#/reference",target:"_blank",rel:"noopener"},"Apify's API")," is your ticket to the Apify platform without even needing to access the ",(0,o.kt)("a",{parentName:"p",href:"https://console.apify.com?asrc=developers_portal",target:"_blank",rel:"noopener"},"Apify Console")," web-interface. The API is organized around RESTful HTTP endpoints."),(0,o.kt)("p",null,"In this lesson, we'll be learning how to use the Apify API to call an actor and view its results. We'll be using the actor we created in the previous lesson, so if you haven't already gotten that one set up, go ahead do that before moving forward if you'd like to follow along."),(0,o.kt)("h2",{id:"-finding-your-endpoint"},(0,o.kt)("a",{parentName:"h2",href:"#finding-your-endpoint",target:null,rel:null})," Finding your endpoint"),(0,o.kt)("p",null,"Within one of your actors on the ",(0,o.kt)("a",{parentName:"p",href:"https://console.apify.com?asrc=developers_portal",target:"_blank",rel:"noopener"},"Apify Console")," (we'll use the ",(0,o.kt)("strong",{parentName:"p"},"adding-actor")," from the previous lesson), click on the ",(0,o.kt)("strong",{parentName:"p"},"API")," button in the top right-hand corner:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"The &quot;API&quot; button on an actor&#39;s page on the Apify Console",src:a(5377).Z,width:"1974",height:"990"})),(0,o.kt)("p",null,"You should see a long list of API endpoints that you can copy and paste elsewhere, or even test right within the ",(0,o.kt)("strong",{parentName:"p"},"API")," modal. Go ahead and copy the endpoint labeled ",(0,o.kt)("strong",{parentName:"p"},"Run actor synchronously and get dataset items"),". It should look something like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"https://api.apify.com/v2/acts/YOUR_USERNAME~adding-actor/run-sync?token=YOUR_TOKEN\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"In this lesson, we'll only be focusing on this one endpoint, as it is the most popularly used one; however, don't let this limit your curiosity! Take a look at the other endpoints in the ",(0,o.kt)("strong",{parentName:"p"},"API")," window to learn about everything you can do to your actor programmatically.")),(0,o.kt)("p",null,"Now, let's move over to our favorite HTTP client (in this lesson we'll use ",(0,o.kt)("a",{parentName:"p",href:"/academy/tools/insomnia",target:null,rel:null},"Insomnia")," in order to prepare and send the request."),(0,o.kt)("h2",{id:"-providing-input"},(0,o.kt)("a",{parentName:"h2",href:"#providing-input",target:null,rel:null})," Providing input"),(0,o.kt)("p",null,"Our ",(0,o.kt)("strong",{parentName:"p"},"adding-actor")," takes in two input values (",(0,o.kt)("inlineCode",{parentName:"p"},"num1")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"num2"),"). When using the actor on the platform, provided these fields either through the UI generated by the ",(0,o.kt)("strong",{parentName:"p"},"INPUT_SCHEMA.json"),", or directly in JSON format. When providing an input when making an API call to run an actor, the input must be provided in the ",(0,o.kt)("strong",{parentName:"p"},"body")," of the POST request as a JSON object."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Providing input",src:a(57351).Z,width:"341",height:"348"})),(0,o.kt)("h2",{id:"-parameters"},(0,o.kt)("a",{parentName:"h2",href:"#parameters",target:null,rel:null})," Parameters"),(0,o.kt)("p",null,"Let's say we want to run our ",(0,o.kt)("strong",{parentName:"p"},"adding-actor")," via API and view its results in CSV format at the end. We'll achieve this by simply passing the ",(0,o.kt)("strong",{parentName:"p"},"format")," parameter with a value of ",(0,o.kt)("strong",{parentName:"p"},"csv")," to change the output format:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"https://api.apify.com/v2/acts/YOUR_USERNAME~adding-actor/run-sync-get-dataset-items?token=YOUR_TOKEN_HERE&format=csv\n")),(0,o.kt)("p",null,"There are many more parameters which can be passed to this endpoint. You can learn about them ",(0,o.kt)("a",{parentName:"p",href:"https://docs.apify.com/api/v2#/reference/actors/run-actor-synchronously-and-get-dataset-items/run-actor-synchronously-with-input-and-get-dataset-items",target:"_blank",rel:"noopener"},"here")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Note: It is safer to put your API token in the ",(0,o.kt)("strong",{parentName:"p"},"Authorization")," header like so: ",(0,o.kt)("inlineCode",{parentName:"p"},"Authorization: Bearer YOUR_TOKEN"),". This is very easy to configure in ",(0,o.kt)("a",{parentName:"p",href:"/academy/tools/postman",target:null,rel:null},"Postman"),", or any other modern HTTP client.")),(0,o.kt)("h2",{id:"-sending-the-request"},(0,o.kt)("a",{parentName:"h2",href:"#sending-the-request",target:null,rel:null})," Sending the request"),(0,o.kt)("p",null,"If you're not using an HTTP client, you can send the request through your terminal with this command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-curl"},'curl -d \'{"num1":1, "num2":8}\' -H "Content-Type: application/json" -X POST "https://api.apify.com/v2/acts/YOUR_USERNAME~adding-actor/run-sync-get-dataset-items?token=YOUR_TOKEN_HERE&format=csv"\n')),(0,o.kt)("p",null,"Here's the response we got:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"API response",src:a(61522).Z,width:"1436",height:"348"})),(0,o.kt)("p",null,"And there it is! The actor was run with our inputs of ",(0,o.kt)("strong",{parentName:"p"},"num1")," and ",(0,o.kt)("strong",{parentName:"p"},"num2"),", then the dataset results were returned back to us in CSV format."),(0,o.kt)("h2",{id:"-apify-apis-many-features"},(0,o.kt)("a",{parentName:"h2",href:"#api-many-features",target:null,rel:null})," Apify API's many features"),(0,o.kt)("p",null,"What we've done in this lesson only scratches the surface of what the Apify API can do. Right from Insomnia, or from any HTTP client, you can ",(0,o.kt)("a",{parentName:"p",href:"https://docs.apify.com/api/v2#/reference/datasets/dataset/get-dataset",target:"_blank",rel:"noopener"},"manage datasets")," and ",(0,o.kt)("a",{parentName:"p",href:"https://docs.apify.com/api/v2#/reference/key-value-stores/key-collection/get-dataset",target:"_blank",rel:"noopener"},"key-value stores"),", ",(0,o.kt)("a",{parentName:"p",href:"https://docs.apify.com/api/v2#/reference/request-queues/queue-collection/add-request",target:"_blank",rel:"noopener"},"add to request queues"),", ",(0,o.kt)("a",{parentName:"p",href:"https://docs.apify.com/api/v2#/reference/actors/actor-object/add-request",target:"_blank",rel:"noopener"},"update actors"),", and much more! Basically, whatever you can do on the platform's web-interface, you also do through the API."),(0,o.kt)("h2",{id:"-next-up"},(0,o.kt)("a",{parentName:"h2",href:"#next",target:null,rel:null})," Next up"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/academy/getting-started/apify-client",target:null,rel:null},"Next up"),", we'll be learning about how to use Apify's JavaScript and Python clients to easily interact with the API right within our code."))}h.isMDXComponent=!0},61522:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/api-csv-response-5061998e63a529a84dd6a51cf460b85f.webp"},5377:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/api-tab-9aee7d89ee47d873052dd3be554d1183.webp"},57351:(e,t,a)=>{a.d(t,{Z:()=>n});const n="data:image/webp;base64,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"}}]);