"use strict";(self.webpackChunkapify_docs_v2=self.webpackChunkapify_docs_v2||[]).push([[9865],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),f=p(n),m=a,k=f["".concat(s,".").concat(m)]||f[m]||u[m]||o;return n?r.createElement(k,i(i({ref:t},c),{},{components:n})):r.createElement(k,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},27340:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],l={title:"Integrations",description:"Learn how to connect the Apify platform with your projects. You can use our tools in cloud services like Zapier, Make (formerly Integromat), Keboola, and more.",sidebar_position:11,category:"platform",slug:"/tutorials/integrations"},s="Integrations",p={unversionedId:"integrations/index",id:"integrations/index",title:"Integrations",description:"Learn how to connect the Apify platform with your projects. You can use our tools in cloud services like Zapier, Make (formerly Integromat), Keboola, and more.",source:"@site/sources/platform/integrations/index.md",sourceDirName:"integrations",slug:"/tutorials/integrations",permalink:"/platform/tutorials/integrations",draft:!1,tags:[],version:"current",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1672943117,formattedLastUpdatedAt:"Jan 5, 2023",sidebarPosition:11,frontMatter:{title:"Integrations",description:"Learn how to connect the Apify platform with your projects. You can use our tools in cloud services like Zapier, Make (formerly Integromat), Keboola, and more.",sidebar_position:11,category:"platform",slug:"/tutorials/integrations"},sidebar:"docs",previous:{title:"Troubleshooting",permalink:"/platform/proxy/troubleshooting"},next:{title:"Webhooks",permalink:"/platform/integrations/webhooks"}},c={},u=[{value:"What is software integration?",id:"what-is-software-integration",level:2},{value:"How does integration work?",id:"how-does-integration-work",level:2},{value:"Get started",id:"get-started",level:2},{value:"API token",id:"api-token",level:2}],f={toc:u};function m(e){var t=e.components,l=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},f,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"integrations"},"Integrations"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Learn how to connect the Apify platform with your projects. You can use our tools in cloud services like Zapier, Make (formerly Integromat), Keboola, and more.")),(0,o.kt)("hr",null),(0,o.kt)("p",null,"You can connect Apify with practically any cloud service or web app. They allow you to pass your ",(0,o.kt)("a",{parentName:"p",href:"/platform/actors",target:null,rel:null},"actor")," run results to other services, process them, and receive notifications on important events."),(0,o.kt)("h2",{id:"what-is-software-integration"},"What is software integration?"),(0,o.kt)("p",null,"Integration allows you to combine separate applications and take advantage of their combined capabilities. It allows you to combine the abilities of applications that are not directly linked. This helps to free your data from isolation and make it more productive."),(0,o.kt)("h2",{id:"how-does-integration-work"},"How does integration work?"),(0,o.kt)("p",null,"Integrations use ",(0,o.kt)("a",{parentName:"p",href:"https://www.smashingmagazine.com/2018/01/understanding-using-rest-api/",target:"_blank",rel:"noopener"},"APIs")," and ",(0,o.kt)("a",{parentName:"p",href:"/platform/integrations/webhooks",target:null,rel:null},"webhooks")," to transfer data between applications.\nOur ",(0,o.kt)("a",{parentName:"p",href:"/api/v2#",target:null,rel:null},"RESTful API")," allows you to control the Apify platform from any application.\nYou can create ",(0,o.kt)("a",{parentName:"p",href:"/api/v2#/reference/actors/actor-collection/create-actor",target:null,rel:null},"actors")," and ",(0,o.kt)("a",{parentName:"p",href:"/api/v2#/reference/actor-tasks/task-collection/create-task",target:null,rel:null},"tasks"),",\n",(0,o.kt)("a",{parentName:"p",href:"/api/v2#/reference/actor-tasks/run-task-synchronously/run-task-synchronously-(post)",target:null,rel:null},"start and stop your runs"),",\nand ",(0,o.kt)("a",{parentName:"p",href:"/api/v2#/reference/datasets/item-collection/put-items",target:null,rel:null},"manage your data")," using only HTTP requests (or our handy API clients ","[for JavaScript]","({{@link apify_client_js.md}}) and ","[for Python]","({{@link apify_client_python.md}})).\nMeanwhile, webhooks allow you to perform tasks like sending HTTP requests or notifications when certain ",(0,o.kt)("a",{parentName:"p",href:"/platform/integrations/webhooks/events",target:null,rel:null},"events")," occur."),(0,o.kt)("h2",{id:"get-started"},"Get started"),(0,o.kt)("p",null,"Below are some examples of the kind of integrations you can set up with Apify."),(0,o.kt)("p",null,"Services you can connect to to extend the functionality of your actors:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://help.apify.com/en/articles/6454058-apify-integration-for-slack",target:"_blank",rel:"noopener"},"Slack"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"/platform/integrations/webhooks",target:null,rel:null},"Webhooks"),"."))),(0,o.kt)("p",null,"Other platforms you can connect to Apify:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://zapier.com/apps/apify/integrations",target:"_blank",rel:"noopener"},"Zapier"),". See the ",(0,o.kt)("a",{parentName:"p",href:"https://help.apify.com/en/articles/3034235-getting-started-with-apify-integration-for-zapier",target:"_blank",rel:"noopener"},"tutorial"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://help.apify.com/en/articles/2424053-google-integration",target:"_blank",rel:"noopener"},"Google"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://components.keboola.com/components/apify.apify",target:"_blank",rel:"noopener"},"Keboola"),". See the ",(0,o.kt)("a",{parentName:"p",href:"https://help.apify.com/en/articles/2003234-keboola-integration",target:"_blank",rel:"noopener"},"tutorial"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://www.make.com/en/integrations/apify",target:"_blank",rel:"noopener"},"Make")," (formerly Integromat).")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://docs.airbyte.io/integrations/sources/apify-dataset",target:"_blank",rel:"noopener"},"Airbyte"),"."))),(0,o.kt)("h2",{id:"api-token"},"API token"),(0,o.kt)("p",null,"To access our API in your integrations, you will need to use your secret API token. You can find it on the ",(0,o.kt)("a",{parentName:"p",href:"https://console.apify.com/account?tab=integrations",target:"_blank",rel:"noopener"},"Integrations")," page in the Apify Console. Give your token a reasonable description and never use one token for several services, much like you shouldn't use the same password for different accounts."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Integrations page in the Apify Console",src:n(13643).Z,width:"2036",height:"478"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"When providing your API authentication token, we recommend using the request's ",(0,o.kt)("inlineCode",{parentName:"p"},"Authorization")," header, rather than the URL. (",(0,o.kt)("a",{parentName:"p",href:"#introduction/authentication",target:null,rel:null},"More info"),").")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"IMPORTANT"),": ",(0,o.kt)("strong",{parentName:"p"},"Do not share the API token with untrusted parties, or use it directly from client-side code,\nunless you fully understand the consequences!")),(0,o.kt)("p",null,"Note that some API endpoints, such as ",(0,o.kt)("a",{parentName:"p",href:"#reference/key-value-stores/key-collection/get-list-of-keys",target:null,rel:null},"Get list of keys"),",\ndo not require an authentication token because they contain a hard-to-guess identifier that effectively serves as an authentication key."))}m.isMDXComponent=!0},13643:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/api-token-6dccc40dcca0fddd983d82d40a919fbf.webp"}}]);