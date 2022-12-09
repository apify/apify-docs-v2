"use strict";(self.webpackChunkapify_docs_v2=self.webpackChunkapify_docs_v2||[]).push([[9603],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),h=p(n),m=o,d=h["".concat(l,".").concat(m)]||h[m]||u[m]||r;return n?a.createElement(d,s(s({ref:t},c),{},{components:n})):a.createElement(d,s({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,s=new Array(r);s[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var p=2;p<r;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},92716:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>u});var a=n(87462),o=n(63366),r=(n(67294),n(3905)),s=["components"],i={title:"Insomnia",description:"Learn about Insomnia, a simple yet super valuable tool for testing requests and proxies when building scalable web scrapers.",sidebar_position:9.2,slug:"/tools/insomnia"},l="[](#what-is-insomnia) What is Insomnia?",p={unversionedId:"tools/insomnia",id:"tools/insomnia",title:"Insomnia",description:"Learn about Insomnia, a simple yet super valuable tool for testing requests and proxies when building scalable web scrapers.",source:"@site/sources/academy/tools/insomnia.md",sourceDirName:"tools",slug:"/tools/insomnia",permalink:"/academy/tools/insomnia",draft:!1,tags:[],version:"current",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1670592461,formattedLastUpdatedAt:"Dec 9, 2022",sidebarPosition:9.2,frontMatter:{title:"Insomnia",description:"Learn about Insomnia, a simple yet super valuable tool for testing requests and proxies when building scalable web scrapers.",sidebar_position:9.2,slug:"/tools/insomnia"},sidebar:"defaultSidebar",previous:{title:"The Apify CLI",permalink:"/academy/tools/apify-cli"},next:{title:"Postman",permalink:"/academy/tools/postman"}},c={},u=[{value:" The Insomnia interface",id:"-the-insomnia-interface",level:2},{value:"List of requests",id:"list-of-requests",level:3},{value:"Address bar",id:"address-bar",level:3},{value:"Request options",id:"request-options",level:3},{value:"Response",id:"response",level:3},{value:" Request timeline",id:"-request-timeline",level:2},{value:" Using proxies in Insomnia",id:"-using-proxies-in-insomnia",level:2},{value:" Managing the cookies cache",id:"-managing-the-cookies-cache",level:2},{value:" So, Postman or Insomnia?",id:"-so-postman-or-insomnia",level:2}],h={toc:u};function m(e){var t=e.components,i=(0,o.Z)(e,s);return(0,r.kt)("wrapper",(0,a.Z)({},h,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"-what-is-insomnia"},(0,r.kt)("a",{parentName:"h1",href:"#what-is-insomnia",target:null,rel:null})," What is Insomnia?"),(0,r.kt)("p",null,"Despite its name, the ",(0,r.kt)("a",{parentName:"p",href:"https://insomnia.rest/download",target:"_blank",rel:"noopener"},"Insomnia")," desktop application has absolutely nothing to do with having a lack of sleep. Rather, it is a tool to build and test APIs. If you've already read about ",(0,r.kt)("a",{parentName:"p",href:"/academy/tools/postman",target:null,rel:null},"Postman"),", you already know what Insomnia can be used for, as they both do practically the same exact things. There are some small differences between them, though. Like Postman, Insomnia allows you to send requests with specific headers and cookies, to add a request payload, etc. One difference is that Insomnia also allows you to see the whole timeline of the request."),(0,r.kt)("p",null,"Insomnia can be downloaded from its ",(0,r.kt)("a",{parentName:"p",href:"https://insomnia.rest/download",target:"_blank",rel:"noopener"},"official website"),", and its features can be read about in the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.insomnia.rest/",target:"_blank",rel:"noopener"},"official documentation"),"."),(0,r.kt)("h2",{id:"-the-insomnia-interface"},(0,r.kt)("a",{parentName:"h2",href:"#insomnia-interface",target:null,rel:null})," The Insomnia interface"),(0,r.kt)("p",null,"After opening the app, you'll first need to create a new request. After creating the request, you'll see an interface that looks like this:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Insomnia interface",src:n(35377).Z,width:"1860",height:"1160"})),(0,r.kt)("p",null,"Let's break down the main sections:"),(0,r.kt)("h3",{id:"list-of-requests"},"List of requests"),(0,r.kt)("p",null,"You can configure multiple request with a custom payload, headers, cookies, parameters, etc. They are automatically saved in the list of requests until deleted."),(0,r.kt)("h3",{id:"address-bar"},"Address bar"),(0,r.kt)("p",null,"The place where you select the type of request to send (",(0,r.kt)("strong",{parentName:"p"},"GET"),", ",(0,r.kt)("strong",{parentName:"p"},"POST"),", ",(0,r.kt)("strong",{parentName:"p"},"PUT"),", ",(0,r.kt)("strong",{parentName:"p"},"DELETE"),", etc.), specify the URI of the request, and send the request with the ",(0,r.kt)("strong",{parentName:"p"},"Send")," button."),(0,r.kt)("h3",{id:"request-options"},"Request options"),(0,r.kt)("p",null,"Here, you can add a request payload, specify authorization parameters, add query parameters, and attach headers to the request."),(0,r.kt)("h3",{id:"response"},"Response"),(0,r.kt)("p",null,"Where the response body is displayed after the request has been sent. Like in Postman, the request can be viewed in preview mode, pretty-printed, or in its raw form. This section also has the ",(0,r.kt)("strong",{parentName:"p"},"Headers")," and ",(0,r.kt)("strong",{parentName:"p"},"Cookies")," tabs, which respectively show the request headers and cookies."),(0,r.kt)("h2",{id:"-request-timeline"},(0,r.kt)("a",{parentName:"h2",href:"#request-timeline",target:null,rel:null})," Request timeline"),(0,r.kt)("p",null,"The one feature of Insomnia that separates it from Postman is the ",(0,r.kt)("strong",{parentName:"p"},"Timeline"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Request timeline",src:n(35588).Z,width:"958",height:"1064"})),(0,r.kt)("p",null,"This feature allows you to see information about the request that is not present in the response body."),(0,r.kt)("h2",{id:"-using-proxies-in-insomnia"},(0,r.kt)("a",{parentName:"h2",href:"#using-proxies",target:null,rel:null})," Using proxies in Insomnia"),(0,r.kt)("p",null,"In order to use a proxy, you need to specify the proxy's parameters in Insomnia's preferences. In preferences, scroll down to the ",(0,r.kt)("strong",{parentName:"p"},"HTTP Network Proxy")," section under the ",(0,r.kt)("strong",{parentName:"p"},"General")," tab and specify the full proxy URL there:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Configuring a proxy",src:n(13294).Z,width:"1546",height:"468"})),(0,r.kt)("h2",{id:"-managing-the-cookies-cache"},(0,r.kt)("a",{parentName:"h2",href:"#managing-cookies-cache",target:null,rel:null})," Managing the cookies cache"),(0,r.kt)("p",null,"Insomnia keeps the cookies for the requests you have already sent before. This might result in you receiving a difference response within your scraper from what you're receiving in Insomnia, as a necessary cookie is not present in the request sent by the scraper. To check whether or not some cookies associated with a certain request have been cached, click on the ",(0,r.kt)("strong",{parentName:"p"},"Cookies")," button at top of the list of requests:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Click on the &quot;Cookies&quot; button",src:n(58807).Z,width:"1592",height:"162"})),(0,r.kt)("p",null,"This'll bring up the ",(0,r.kt)("strong",{parentName:"p"},"Manage cookies")," window, where all cached cookies can be viewed, edited, or deleted."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"The &quot;Manage Cookies&quot; tab",src:n(81677).Z,width:"1654",height:"1005"})),(0,r.kt)("h2",{id:"-so-postman-or-insomnia"},(0,r.kt)("a",{parentName:"h2",href:"#postman-or-insomnia",target:null,rel:null})," So, Postman or Insomnia?"),(0,r.kt)("p",null,"The application you choose to use is completely up to personal preference, and will not affect your development workflow. If viewing timelines of the requests you send is important to you, then you should go with Insomnia; however, if that doesn't matter, just choose the one that has the most intuitive interface for you."))}m.isMDXComponent=!0},58807:(e,t,n)=>{n.d(t,{Z:()=>a});const a="data:image/webp;base64,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"},35377:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/insomnia-interface-14180b5b3c84aa372912fb89e8be83a5.webp"},81677:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/insomnia-manage-cookies-528d1043cfbf9fcde0597a5f0c251aa1.webp"},13294:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/insomnia-proxy-0ba6909ce6e117b58dc3417941056f1c.webp"},35588:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/insomnia-timeline-58b56a8082eddc1b4c750384ce6b0354.webp"}}]);