"use strict";(self.webpackChunkapify_docs_v2=self.webpackChunkapify_docs_v2||[]).push([[5536],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),i=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=i(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},y=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),c=i(r),y=n,f=c["".concat(l,".").concat(y)]||c[y]||d[y]||o;return r?a.createElement(f,s(s({ref:t},u),{},{components:r})):a.createElement(f,s({ref:t},u))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,s=new Array(o);s[0]=y;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[c]="string"==typeof e?e:n,s[1]=p;for(var i=2;i<o;i++)s[i]=r[i];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}y.displayName="MDXCreateElement"},50950:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>y,frontMatter:()=>p,metadata:()=>i,toc:()=>c});var a=r(87462),n=r(63366),o=(r(67294),r(3905)),s=["components"],p={title:"Datacenter proxy",description:"Learn how to reduce blocking when web scraping using IP address rotation. See proxy parameters and learn to implement Apify Proxy in an application.",sidebar_position:10.3,slug:"/proxy/datacenter-proxy"},l="[](#datacenter-proxy) Datacenter proxy",i={unversionedId:"proxy/datacenter_proxy/index",id:"proxy/datacenter_proxy/index",title:"Datacenter proxy",description:"Learn how to reduce blocking when web scraping using IP address rotation. See proxy parameters and learn to implement Apify Proxy in an application.",source:"@site/sources/platform/proxy/datacenter_proxy/index.md",sourceDirName:"proxy/datacenter_proxy",slug:"/proxy/datacenter-proxy",permalink:"/platform/proxy/datacenter-proxy",draft:!1,tags:[],version:"current",lastUpdatedBy:"Jind\u0159ich B\xe4r",lastUpdatedAt:1671803343,formattedLastUpdatedAt:"Dec 23, 2022",sidebarPosition:10.3,frontMatter:{title:"Datacenter proxy",description:"Learn how to reduce blocking when web scraping using IP address rotation. See proxy parameters and learn to implement Apify Proxy in an application.",sidebar_position:10.3,slug:"/proxy/datacenter-proxy"},sidebar:"docs",previous:{title:"Connection settings",permalink:"/platform/proxy/connection-settings"},next:{title:"Examples",permalink:"/platform/proxy/datacenter-proxy/examples"}},u={},c=[{value:" Features",id:"-features",level:2},{value:" Shared proxy groups",id:"-shared-proxy-groups",level:2},{value:" Dedicated proxy groups",id:"-dedicated-proxy-groups",level:2},{value:" Connecting to datacenter proxies",id:"-connecting-to-datacenter-proxies",level:2},{value:" Username parameters",id:"-username-parameters",level:3},{value:" Session persistence",id:"-session-persistence",level:2}],d={toc:c};function y(e){var t=e.components,r=(0,n.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"-datacenter-proxy"},(0,o.kt)("a",{parentName:"h1",href:"#datacenter-proxy",target:null,rel:null})," Datacenter proxy"),(0,o.kt)("p",null,"Datacenter proxies are a cheap, fast and stable way to mask your identity online. When you access a website using a datacenter proxy, the site can only see the proxy center's credentials, not yours."),(0,o.kt)("p",null,"Datacenter proxies allow you to mask and ",(0,o.kt)("a",{parentName:"p",href:"/platform/proxy",target:null,rel:null},"rotate"),". For each ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods",target:"_blank",rel:"noopener"},"HTTP/S request"),", the proxy takes the list of all available IP addresses and selects the one used the longest time ago for the specific hostname."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://apify.com/proxy",target:"_blank",rel:"noopener"},"Apify Proxy")," currently offers two types of datacenter proxy:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#shared-proxy-groups",target:null,rel:null},"Shared proxy groups")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#dedicated-proxy-groups",target:null,rel:null},"Dedicated proxy groups"))),(0,o.kt)("h2",{id:"-features"},(0,o.kt)("a",{parentName:"h2",href:"#features",target:null,rel:null})," Features"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Periodic health checks of proxies in the pool so requests are not forwarded via ",(0,o.kt)("a",{parentName:"li",href:"/platform/proxy",target:null,rel:null},"dead")," proxies."),(0,o.kt)("li",{parentName:"ul"},"Intelligent rotation of IP addresses so target hosts are accessed via proxies that have accessed them the longest time ago, to reduce the chance of blocking."),(0,o.kt)("li",{parentName:"ul"},"Periodically checks whether proxies are banned by selected target websites. If they are, stops forwarding traffic to them to get the proxies unbanned as soon as possible."),(0,o.kt)("li",{parentName:"ul"},"Ensures proxies are located in specific countries using IP geolocation."),(0,o.kt)("li",{parentName:"ul"},"Allows selection of groups of proxy servers with specific characteristics."),(0,o.kt)("li",{parentName:"ul"},"Supports persistent sessions that enable you to keep the same IP address for certain parts of your crawls."),(0,o.kt)("li",{parentName:"ul"},"Measures statistics of traffic for specific users and hostnames."),(0,o.kt)("li",{parentName:"ul"},"Allows selection of proxy servers by country.")),(0,o.kt)("h2",{id:"-shared-proxy-groups"},(0,o.kt)("a",{parentName:"h2",href:"#shared-proxy-groups",target:null,rel:null})," Shared proxy groups"),(0,o.kt)("p",null,"Each user has access to a selected number of proxy servers from a shared pool. These servers are spread into groups (called proxy groups). Each group shares a common feature (location, provider, speed and so on)."),(0,o.kt)("p",null,"The number of proxy servers available depends on your subscription plan. When you first sign up to Apify platform, you get a 30-day free trial of Apify Proxy. After the trial, you must subscribe to a paid plan to continue using Apify Proxy."),(0,o.kt)("p",null,"For a full list of plans and number of allocated proxy servers for each plan, see our ",(0,o.kt)("a",{parentName:"p",href:"https://apify.com/pricing",target:"_blank",rel:"noopener"},"pricing"),"."),(0,o.kt)("p",null,"To access more servers or to use Apify Proxy without other parts of the Apify platform, ",(0,o.kt)("a",{parentName:"p",href:"https://apify.com/contact",target:"_blank",rel:"noopener"},"contact us"),"."),(0,o.kt)("h2",{id:"-dedicated-proxy-groups"},(0,o.kt)("a",{parentName:"h2",href:"#dedicated-proxy-groups",target:null,rel:null})," Dedicated proxy groups"),(0,o.kt)("p",null,"When you purchase access to dedicated proxy groups, they are assigned to you, and only you can use them. You gain access to a range of static IP addresses from these groups."),(0,o.kt)("p",null,"This feature is useful if you have your own pool of proxy servers and still want to benefit from the features of Apify Proxy (like ",(0,o.kt)("a",{parentName:"p",href:"/platform/proxy",target:null,rel:null},"IP address rotation"),", ",(0,o.kt)("a",{parentName:"p",href:"#session-persistence",target:null,rel:null},"persistent sessions"),", and health checking)."),(0,o.kt)("p",null,"If you do not have your own pool, the ",(0,o.kt)("a",{parentName:"p",href:"https://apify.com/contact",target:"_blank",rel:"noopener"},"customer support")," team can set up a dedicated group for you based on your needs and requirements."),(0,o.kt)("p",null,"Prices for dedicated proxy servers are mainly based on the number of proxy servers, their type, and location. ",(0,o.kt)("a",{parentName:"p",href:"https://apify.com/contact",target:"_blank",rel:"noopener"},"Contact us")," for more information."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://apify.com/contact",target:"_blank",rel:"noopener"},"Contact us")," for more details or if you have any questions."),(0,o.kt)("h2",{id:"-connecting-to-datacenter-proxies"},(0,o.kt)("a",{parentName:"h2",href:"#connecting-to-datacenter-proxies",target:null,rel:null})," Connecting to datacenter proxies"),(0,o.kt)("p",null,"By default, each proxied HTTP request is potentially sent via a different target proxy server, which adds overhead and could be potentially problematic for websites which save cookies based on IP address."),(0,o.kt)("p",null,"If you want to pick an IP address and pass all subsequent connections via that same IP address, you can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"session")," ",(0,o.kt)("a",{parentName:"p",href:"/platform/proxy",target:null,rel:null},"parameter"),"."),(0,o.kt)("p",null,"For code examples on how to connect to datacenter proxies, see the ",(0,o.kt)("a",{parentName:"p",href:"/platform/proxy/datacenter-proxy/examples",target:null,rel:null},"examples")," page."),(0,o.kt)("h3",{id:"-username-parameters"},(0,o.kt)("a",{parentName:"h3",href:"#username-parameters",target:null,rel:null})," Username parameters"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"username")," field enables you to pass various ",(0,o.kt)("a",{parentName:"p",href:"/platform/proxy/connection-settings",target:null,rel:null},"parameters"),", such as groups, session and country, for your proxy connection."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"This parameter is optional"),". By default, the proxy uses all available proxy servers from all groups you have access to."),(0,o.kt)("p",null,"If you do not want to specify either ",(0,o.kt)("inlineCode",{parentName:"p"},"groups")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"session")," parameters and therefore use the default behavior for both, set the username to ",(0,o.kt)("inlineCode",{parentName:"p"},"auto"),"."),(0,o.kt)("h2",{id:"-session-persistence"},(0,o.kt)("a",{parentName:"h2",href:"#session-persistence",target:null,rel:null})," Session persistence"),(0,o.kt)("p",null,"When you use datacenter proxy with the ",(0,o.kt)("inlineCode",{parentName:"p"},"session")," ",(0,o.kt)("a",{parentName:"p",href:"/platform/proxy",target:null,rel:null},"parameter")," set in the ",(0,o.kt)("inlineCode",{parentName:"p"},"username")," ",(0,o.kt)("a",{parentName:"p",href:"#username-parameters",target:null,rel:null},"field"),", a single IP is assigned to the ",(0,o.kt)("inlineCode",{parentName:"p"},"session ID")," provided after you make the first request."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Session IDs represent IP addresses. Therefore, you can manage the IP addresses you use by managing sessions.")," [",(0,o.kt)("a",{parentName:"p",href:"/platform/proxy",target:null,rel:null},"More info"),"]"),(0,o.kt)("p",null,"This IP/session ID combination is persisted and expires 26 hours later. Each additional request resets the expiration time to 26 hours."),(0,o.kt)("p",null,"So, if you use the session at least once a day, it will never expire, with two possible exceptions:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The proxy server stops responding and is marked as ",(0,o.kt)("a",{parentName:"li",href:"/platform/proxy",target:null,rel:null},"dead")," during a health check."),(0,o.kt)("li",{parentName:"ul"},"If the proxy server is part of a proxy group that is refreshed monthly and is rotated out.")),(0,o.kt)("p",null,"If the session is discarded due to the reasons above, it is assigned a new IP address."),(0,o.kt)("p",null,"To learn more about ",(0,o.kt)("a",{parentName:"p",href:"/platform/proxy",target:null,rel:null},"sessions"),"."))}y.isMDXComponent=!0}}]);