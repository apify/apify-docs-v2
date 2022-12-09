"use strict";(self.webpackChunkapify_docs_v2=self.webpackChunkapify_docs_v2||[]).push([[5536],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>y});var a=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=a.createContext({}),l=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=l(r),y=o,m=c["".concat(p,".").concat(y)]||c[y]||d[y]||n;return r?a.createElement(m,s(s({ref:t},u),{},{components:r})):a.createElement(m,s({ref:t},u))}));function y(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,s=new Array(n);s[0]=c;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var l=2;l<n;l++)s[l]=r[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},50950:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>y,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var a=r(87462),o=r(63366),n=(r(67294),r(3905)),s=["components"],i={title:"Datacenter proxy",description:"Learn how to reduce blocking when web scraping using IP address rotation. See proxy parameters and learn to implement Apify Proxy in an application.",sidebar_position:10.3,slug:"/proxy/datacenter-proxy"},p="[](#datacenter-proxy) Datacenter proxy",l={unversionedId:"proxy/datacenter_proxy/index",id:"proxy/datacenter_proxy/index",title:"Datacenter proxy",description:"Learn how to reduce blocking when web scraping using IP address rotation. See proxy parameters and learn to implement Apify Proxy in an application.",source:"@site/sources/platform/proxy/datacenter_proxy/index.md",sourceDirName:"proxy/datacenter_proxy",slug:"/proxy/datacenter-proxy",permalink:"/platform/proxy/datacenter-proxy",draft:!1,tags:[],version:"current",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1670592461,formattedLastUpdatedAt:"Dec 9, 2022",sidebarPosition:10.3,frontMatter:{title:"Datacenter proxy",description:"Learn how to reduce blocking when web scraping using IP address rotation. See proxy parameters and learn to implement Apify Proxy in an application.",sidebar_position:10.3,slug:"/proxy/datacenter-proxy"},sidebar:"defaultSidebar",previous:{title:"Connection settings",permalink:"/platform/proxy/connection-settings"},next:{title:"Examples",permalink:"/platform/proxy/datacenter-proxy/examples"}},u={},d=[{value:" Features",id:"-features",level:2},{value:" Shared proxy groups",id:"-shared-proxy-groups",level:2},{value:" Dedicated proxy groups",id:"-dedicated-proxy-groups",level:2},{value:" Connecting to datacenter proxies",id:"-connecting-to-datacenter-proxies",level:2},{value:" Username parameters",id:"-username-parameters",level:3},{value:" Session persistence",id:"-session-persistence",level:2}],c={toc:d};function y(e){var t=e.components,r=(0,o.Z)(e,s);return(0,n.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"-datacenter-proxy"},(0,n.kt)("a",{parentName:"h1",href:"#datacenter-proxy",target:null,rel:null})," Datacenter proxy"),(0,n.kt)("p",null,"Datacenter proxies are a cheap, fast and stable way to mask your identity online. When you access a website using a datacenter proxy, the site can only see the proxy center's credentials, not yours."),(0,n.kt)("p",null,"Datacenter proxies allow you to mask and ","[rotate]","({{@link proxy.md#ip-address-rotation}}) your IP address during web scraping and automation jobs, reducing the possibility of them being ","[blocked]","({{@link web_scraping_101/anti_scraping_techniques.md#ip-address-based-blocking}}). For each ",(0,n.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods",target:"_blank",rel:"noopener"},"HTTP/S request"),", the proxy takes the list of all available IP addresses and selects the one used the longest time ago for the specific hostname."),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://apify.com/proxy",target:"_blank",rel:"noopener"},"Apify Proxy")," currently offers two types of datacenter proxy:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#shared-proxy-groups",target:null,rel:null},"Shared proxy groups")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#dedicated-proxy-groups",target:null,rel:null},"Dedicated proxy groups"))),(0,n.kt)("h2",{id:"-features"},(0,n.kt)("a",{parentName:"h2",href:"#features",target:null,rel:null})," Features"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Periodic health checks of proxies in the pool so requests are not forwarded via ","[dead]","({{@link proxy.md#dead-proxies}}) proxies."),(0,n.kt)("li",{parentName:"ul"},"Intelligent rotation of IP addresses so target hosts are accessed via proxies that have accessed them the longest time ago, to reduce the chance of blocking."),(0,n.kt)("li",{parentName:"ul"},"Periodically checks whether proxies are banned by selected target websites. If they are, stops forwarding traffic to them to get the proxies unbanned as soon as possible."),(0,n.kt)("li",{parentName:"ul"},"Ensures proxies are located in specific countries using IP geolocation."),(0,n.kt)("li",{parentName:"ul"},"Allows selection of groups of proxy servers with specific characteristics."),(0,n.kt)("li",{parentName:"ul"},"Supports persistent sessions that enable you to keep the same IP address for certain parts of your crawls."),(0,n.kt)("li",{parentName:"ul"},"Measures statistics of traffic for specific users and hostnames."),(0,n.kt)("li",{parentName:"ul"},"Allows selection of proxy servers by country.")),(0,n.kt)("h2",{id:"-shared-proxy-groups"},(0,n.kt)("a",{parentName:"h2",href:"#shared-proxy-groups",target:null,rel:null})," Shared proxy groups"),(0,n.kt)("p",null,"Each user has access to a selected number of proxy servers from a shared pool. These servers are spread into groups (called proxy groups). Each group shares a common feature (location, provider, speed and so on)."),(0,n.kt)("p",null,"The number of proxy servers available depends on your subscription plan. When you first sign up to Apify platform, you get a 30-day free trial of Apify Proxy. After the trial, you must subscribe to a paid plan to continue using Apify Proxy."),(0,n.kt)("p",null,"For a full list of plans and number of allocated proxy servers for each plan, see our ",(0,n.kt)("a",{parentName:"p",href:"https://apify.com/pricing",target:"_blank",rel:"noopener"},"pricing"),"."),(0,n.kt)("p",null,"To access more servers or to use Apify Proxy without other parts of the Apify platform, ",(0,n.kt)("a",{parentName:"p",href:"https://apify.com/contact",target:"_blank",rel:"noopener"},"contact us"),"."),(0,n.kt)("h2",{id:"-dedicated-proxy-groups"},(0,n.kt)("a",{parentName:"h2",href:"#dedicated-proxy-groups",target:null,rel:null})," Dedicated proxy groups"),(0,n.kt)("p",null,"When you purchase access to dedicated proxy groups, they are assigned to you, and only you can use them. You gain access to a range of static IP addresses from these groups."),(0,n.kt)("p",null,"This feature is useful if you have your own pool of proxy servers and still want to benefit from the features of Apify Proxy (like ","[IP address rotation]","({{@link proxy.md#ip-address-rotation}}), ",(0,n.kt)("a",{parentName:"p",href:"#session-persistence",target:null,rel:null},"persistent sessions"),", and health checking)."),(0,n.kt)("p",null,"If you do not have your own pool, the ",(0,n.kt)("a",{parentName:"p",href:"https://apify.com/contact",target:"_blank",rel:"noopener"},"customer support")," team can set up a dedicated group for you based on your needs and requirements."),(0,n.kt)("p",null,"Prices for dedicated proxy servers are mainly based on the number of proxy servers, their type, and location. ",(0,n.kt)("a",{parentName:"p",href:"https://apify.com/contact",target:"_blank",rel:"noopener"},"Contact us")," for more information."),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://apify.com/contact",target:"_blank",rel:"noopener"},"Contact us")," for more details or if you have any questions."),(0,n.kt)("h2",{id:"-connecting-to-datacenter-proxies"},(0,n.kt)("a",{parentName:"h2",href:"#connecting-to-datacenter-proxies",target:null,rel:null})," Connecting to datacenter proxies"),(0,n.kt)("p",null,"By default, each proxied HTTP request is potentially sent via a different target proxy server, which adds overhead and could be potentially problematic for websites which save cookies based on IP address."),(0,n.kt)("p",null,"If you want to pick an IP address and pass all subsequent connections via that same IP address, you can use the ",(0,n.kt)("inlineCode",{parentName:"p"},"session")," ","[parameter]","({{@link proxy.md#sessions}})."),(0,n.kt)("p",null,"For code examples on how to connect to datacenter proxies, see the ",(0,n.kt)("a",{parentName:"p",href:"/platform/proxy/datacenter-proxy/examples",target:null,rel:null},"examples")," page."),(0,n.kt)("h3",{id:"-username-parameters"},(0,n.kt)("a",{parentName:"h3",href:"#username-parameters",target:null,rel:null})," Username parameters"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"username")," field enables you to pass various ",(0,n.kt)("a",{parentName:"p",href:"/platform/proxy/connection-settings",target:null,rel:null},"parameters"),", such as groups, session and country, for your proxy connection."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"This parameter is optional"),". By default, the proxy uses all available proxy servers from all groups you have access to."),(0,n.kt)("p",null,"If you do not want to specify either ",(0,n.kt)("inlineCode",{parentName:"p"},"groups")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"session")," parameters and therefore use the default behavior for both, set the username to ",(0,n.kt)("inlineCode",{parentName:"p"},"auto"),"."),(0,n.kt)("h2",{id:"-session-persistence"},(0,n.kt)("a",{parentName:"h2",href:"#session-persistence",target:null,rel:null})," Session persistence"),(0,n.kt)("p",null,"When you use datacenter proxy with the ",(0,n.kt)("inlineCode",{parentName:"p"},"session")," ","[parameter]","({{@link proxy.md#sessions}}) set in the ",(0,n.kt)("inlineCode",{parentName:"p"},"username")," ",(0,n.kt)("a",{parentName:"p",href:"#username-parameters",target:null,rel:null},"field"),", a single IP is assigned to the ",(0,n.kt)("inlineCode",{parentName:"p"},"session ID")," provided after you make the first request."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Session IDs represent IP addresses. Therefore, you can manage the IP addresses you use by managing sessions.")," [","[More info]","({{@link proxy.md#sessions}})]"),(0,n.kt)("p",null,"This IP/session ID combination is persisted and expires 26 hours later. Each additional request resets the expiration time to 26 hours."),(0,n.kt)("p",null,"So, if you use the session at least once a day, it will never expire, with two possible exceptions:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The proxy server stops responding and is marked as ","[dead]","({{@link proxy.md#dead-proxies}}) during a health check."),(0,n.kt)("li",{parentName:"ul"},"If the proxy server is part of a proxy group that is refreshed monthly and is rotated out.")),(0,n.kt)("p",null,"If the session is discarded due to the reasons above, it is assigned a new IP address."),(0,n.kt)("p",null,"To learn more about ","[sessions]","({{@link proxy.md#sessions}}) and ","[IP address rotation]","({{@link proxy.md#ip-address-rotation}}), see the ","[proxy overview page]","({{@link proxy.md}})."))}y.isMDXComponent=!0}}]);