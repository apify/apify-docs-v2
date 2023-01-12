"use strict";(self.webpackChunkapify_docs_v2=self.webpackChunkapify_docs_v2||[]).push([[1014],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(a),h=o,m=d["".concat(l,".").concat(h)]||d[h]||c[h]||s;return a?n.createElement(m,r(r({ref:t},u),{},{components:a})):n.createElement(m,r({ref:t},u))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=a.length,r=new Array(s);r[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,r[1]=i;for(var p=2;p<s;p++)r[p]=a[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},29912:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>p,toc:()=>c});var n=a(87462),o=a(63366),s=(a(67294),a(3905)),r=["components"],i={title:"Postman",description:"Learn about Postman, a simple yet super valuable tool for testing requests and proxies when building scalable web scrapers.",sidebar_position:9.3,slug:"/tools/postman"},l="What is Postman?",p={unversionedId:"glossary/tools/postman",id:"glossary/tools/postman",title:"Postman",description:"Learn about Postman, a simple yet super valuable tool for testing requests and proxies when building scalable web scrapers.",source:"@site/sources/academy/glossary/tools/postman.md",sourceDirName:"glossary/tools",slug:"/tools/postman",permalink:"/academy/tools/postman",draft:!1,tags:[],version:"current",lastUpdatedBy:"Jind\u0159ich B\xe4r",lastUpdatedAt:1673533984,formattedLastUpdatedAt:"Jan 12, 2023",sidebarPosition:9.3,frontMatter:{title:"Postman",description:"Learn about Postman, a simple yet super valuable tool for testing requests and proxies when building scalable web scrapers.",sidebar_position:9.3,slug:"/tools/postman"},sidebar:"academy",previous:{title:"Insomnia",permalink:"/academy/tools/insomnia"},next:{title:"Proxyman",permalink:"/academy/tools/proxyman"}},u={},c=[{value:"Understanding the interface",id:"understanding-the-interface",level:2},{value:"Tabs",id:"tabs",level:3},{value:"Address bar",id:"address-bar",level:3},{value:"Request options",id:"request-options",level:3},{value:"Response",id:"response",level:3},{value:"Using and testing proxies",id:"using-proxies",level:2},{value:"Managing the cookies cache",id:"managing-cookies",level:2},{value:"Some alternatives to Postman",id:"alternatives",level:3}],d={toc:c};function h(e){var t=e.components,i=(0,o.Z)(e,r);return(0,s.kt)("wrapper",(0,n.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"what-is-postman"},"What is Postman?"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Learn about Postman, a simple yet super valuable tool for testing requests and proxies when building scalable web scrapers.")),(0,s.kt)("hr",null),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://www.postman.com/",target:"_blank",rel:"noopener"},"Postman")," is a powerful collaboration platform for API development and testing. For scraping use-cases, it's mainly used to test requests and proxies (such as checking the response body of a raw request, without loading any additional resources such as JavaScript or CSS). This tool can do much more than that, but we will not be discussing all of its capabilities here. Postman allows us to easily test requests with cookies, headers, and payloads so that we can be entirely sure what the response looks like for a request URL we plan to eventually use in a scraper."),(0,s.kt)("p",null,"The desktop app can be downloaded from its ",(0,s.kt)("a",{parentName:"p",href:"https://www.postman.com/downloads/",target:"_blank",rel:"noopener"},"official download page"),", or the web-app can be used with a simple signup - no download required. If this is your first time working with a tool like Postman, we recommend checking out their ",(0,s.kt)("a",{parentName:"p",href:"https://learning.postman.com/docs/getting-started/introduction/",target:"_blank",rel:"noopener"},"Getting Started guide"),"."),(0,s.kt)("h2",{id:"understanding-the-interface"},"Understanding the interface"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"A basic outline of Postman&#39;s interface",src:a(2355).Z,width:"2880",height:"1800"})),(0,s.kt)("p",null,"There are four main sections to get familiar when starting out with Postman:"),(0,s.kt)("h3",{id:"tabs"},"Tabs"),(0,s.kt)("p",null,"Multiple test endpoints/requests can be opened at one time, each of which will be held within its own tab."),(0,s.kt)("h3",{id:"address-bar"},"Address bar"),(0,s.kt)("p",null,"The section in which you select the type of request to send, the URL of the request, and of course, send the request with the ",(0,s.kt)("strong",{parentName:"p"},"Send Request")," button."),(0,s.kt)("h3",{id:"request-options"},"Request options"),(0,s.kt)("p",null,"This is a very useful section where you can view and edit structured query parameters, as well as specify any authorization parameters, headers, or payloads."),(0,s.kt)("h3",{id:"response"},"Response"),(0,s.kt)("p",null,"After sending a request, the response's body will be found here, along with its cookies and headers. The response body can be viewed in various formats - ",(0,s.kt)("strong",{parentName:"p"},"Pretty-Print"),", ",(0,s.kt)("strong",{parentName:"p"},"Raw"),", or ",(0,s.kt)("strong",{parentName:"p"},"Preview"),"."),(0,s.kt)("h2",{id:"using-proxies"},"Using and testing proxies"),(0,s.kt)("p",null,"In order to use a proxy, the proxy's server and configuration must be provided in the ",(0,s.kt)("strong",{parentName:"p"},"Proxy")," tab in Postman settings."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Proxy configuration in Postman settings",src:a(79653).Z,width:"1362",height:"1154"})),(0,s.kt)("p",null,"After configuring a proxy, the next request sent will attempt to use it. To switch off the proxy, its details don't need to be deleted. The ",(0,s.kt)("strong",{parentName:"p"},"Add a custom proxy configuration")," option in settings just needs to be un-ticked to disable it."),(0,s.kt)("h2",{id:"managing-cookies"},"Managing the cookies cache"),(0,s.kt)("p",null,"Postman keeps a cache of the cookies from all previous responses of a certain domain, which can be a blessing, but also a curse. Sometimes, you might notice that a request is going through just fine with Postman, but that your scraper is being blocked."),(0,s.kt)("p",null,"More often than not in these cases, the reason is because the endpoint being reached requires a valid ",(0,s.kt)("inlineCode",{parentName:"p"},"cookie")," header to be present when sending the request, and because of Postman's cache, it is sending a valid cookie within each request's headers, while your scraper is not. Another reason this may happen is because you are sending Postman requests without a proxy (using your local IP address), while your scraper is using a proxy that could potentially be getting blocked."),(0,s.kt)("p",null,"In order to check whether there are any cookies associated with a certain request are cached in Postman, click on the ",(0,s.kt)("strong",{parentName:"p"},"Cookies")," button in any opened request tab:"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Button to view the cached cookies",src:a(47997).Z,width:"2054",height:"174"})),(0,s.kt)("p",null,"Clicking on this button opens a ",(0,s.kt)("strong",{parentName:"p"},"MANAGE COOKIES")," window, where a list of all cached cookies per domain can be seen. If we had been previously sending multiple requests to ",(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("a",{parentName:"strong",href:"https://github.com/apify",target:"_blank",rel:"noopener"},"https://github.com/apify")),', within this window we would be able to easily find cached cookies associated with github.com. Cookies can also be easily edited (to update some specific values), or deleted (to send a "clean" request without any cached data) here.'),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Managing cookies in Postman with the &quot;MANAGE COOKIES&quot; window",src:a(91242).Z,width:"1356",height:"1320"})),(0,s.kt)("h3",{id:"alternatives"},"Some alternatives to Postman"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://hoppscotch.io/",target:"_blank",rel:"noopener"},"Hoppscotch")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/academy/tools/insomnia",target:null,rel:null},"Insomnia")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://testfully.io/",target:"_blank",rel:"noopener"},"Testfully"))))}h.isMDXComponent=!0},47997:(e,t,a)=>{a.d(t,{Z:()=>n});const n="data:image/webp;base64,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"},2355:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/postman-interface-04338abfbcdd59cfcef6f848f02728b6.webp"},91242:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/postman-manage-cookies-4f41415b295d10f818e53c8986fce0de.webp"},79653:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/postman-proxy-2bf01dd31507676373fdfc3dc55a159c.webp"}}]);