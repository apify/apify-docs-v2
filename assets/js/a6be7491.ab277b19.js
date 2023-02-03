"use strict";(self.webpackChunkapify_docs_v2=self.webpackChunkapify_docs_v2||[]).push([[6200],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),l=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},d=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=l(r),m=n,f=c["".concat(p,".").concat(m)]||c[m]||u[m]||o;return r?a.createElement(f,s(s({ref:t},d),{},{components:r})):a.createElement(f,s({ref:t},d))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,s=new Array(o);s[0]=c;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var l=2;l<o;l++)s[l]=r[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},54192:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>p,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var a=r(87462),n=r(63366),o=(r(67294),r(3905)),s=["components"],i={title:"Proxy",description:"Learn to anonymously access websites in scraping/automation jobs. Improve data outputs and efficiency of bots, and access websites from various geographies.",sidebar_position:10,category:"platform",slug:"/proxy"},p="[](./proxy) Proxy",l={unversionedId:"proxy/index",id:"proxy/index",title:"Proxy",description:"Learn to anonymously access websites in scraping/automation jobs. Improve data outputs and efficiency of bots, and access websites from various geographies.",source:"@site/sources/platform/proxy/index.md",sourceDirName:"proxy",slug:"/proxy",permalink:"/platform/proxy",draft:!1,editUrl:"https://github.com/apify/apify-docs-v2/edit/master/sources/platform/proxy/index.md",tags:[],version:"current",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1675427001,formattedLastUpdatedAt:"Feb 3, 2023",sidebarPosition:10,frontMatter:{title:"Proxy",description:"Learn to anonymously access websites in scraping/automation jobs. Improve data outputs and efficiency of bots, and access websites from various geographies.",sidebar_position:10,category:"platform",slug:"/proxy"},sidebar:"docs",previous:{title:"Request queue",permalink:"/platform/storage/request-queue"},next:{title:"Connection settings",permalink:"/platform/proxy/connection-settings"}},d={},u=[{value:"Our proxies",id:"our-proxies",level:2},{value:"Using your own proxies",id:"using-your-own-proxies",level:2},{value:"Custom proxies in console",id:"console",level:3},{value:"Custom proxies in SDK",id:"SDK",level:3},{value:"IP address rotation",id:"ip-address-rotation",level:2},{value:"Sessions",id:"sessions",level:2},{value:"Session persistence",id:"session-persistence",level:3},{value:"Dead proxies",id:"dead-proxies",level:2},{value:"A different approach to <code>502 Bad Gateway</code>",id:"a-different-approach-to-502-bad-gateway",level:2}],c={toc:u};function m(e){var t=e.components,i=(0,n.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"-proxy"},(0,o.kt)("a",{parentName:"h1",href:"./proxy",target:null,rel:null})," Proxy"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Learn to anonymously access websites in scraping/automation jobs. Improve data outputs and efficiency of bots, and access websites from various geographies.")),(0,o.kt)("hr",null),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://apify.com/proxy",target:"_blank",rel:"noopener"},"Apify Proxy")," allows you to change your IP address when web scraping to reduce the chance of being ",(0,o.kt)("a",{parentName:"p",href:"/platform/web-scraping-101/anti-scraping-techniques",target:null,rel:null},"blocked")," because of your geographical location."),(0,o.kt)("p",null,"You can use proxies in your ",(0,o.kt)("a",{parentName:"p",href:"/platform/actors",target:null,rel:null},"actors")," or any other application that supports HTTP, HTTPS, and FTP protocols. Apify Proxy monitors the health of your IP pool and intelligently ",(0,o.kt)("a",{parentName:"p",href:"#ip-address-rotation",target:null,rel:null},"rotates addresses")," to prevent IP address-based blocking."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"You can view your proxy settings and password on the ",(0,o.kt)("a",{parentName:"strong",href:"https://console.apify.com/proxy",target:"_blank",rel:"noopener"},"Proxy")," page in the Apify Console.")),(0,o.kt)("h2",{id:"our-proxies"},"Our proxies"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/platform/proxy/datacenter-proxy",target:null,rel:null},"Datacenter proxy")," \u2013 the fastest and cheapest option, it uses datacenters to change your IP address. Note that there is a chance of being blocked because of the activity of other users. [",(0,o.kt)("a",{parentName:"p",href:"/platform/proxy/datacenter-proxy/examples",target:null,rel:null},"Code examples"),"]"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/platform/proxy/residential-proxy",target:null,rel:null},"Residential proxy")," \u2013 IP addresses located in homes and offices around the world. These IPs are the least likely to be blocked. [",(0,o.kt)("a",{parentName:"p",href:"/platform/proxy/residential-proxy",target:null,rel:null},"How to connect"),"]"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/platform/proxy/google-serp-proxy",target:null,rel:null},"Google SERP proxy")," \u2013 download and extract data from Google Search Engine Result Pages (SERPs). You can select country and language to get localized results. [",(0,o.kt)("a",{parentName:"p",href:"/platform/proxy/google-serp-proxy/examples",target:null,rel:null},"Code examples"),"]"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"For pricing information, visit ",(0,o.kt)("a",{parentName:"strong",href:"https://apify.com/proxy",target:"_blank",rel:"noopener"},"apify.com/proxy"),".")),(0,o.kt)("h2",{id:"using-your-own-proxies"},"Using your own proxies"),(0,o.kt)("p",null,"In addition to our proxies, you can use your own both in Apify Console and SDK."),(0,o.kt)("h3",{id:"console"},"Custom proxies in console"),(0,o.kt)("p",null,"To use your own proxies with Apify Console, in your actor's ",(0,o.kt)("strong",{parentName:"p"},"Input and options")," tab, scroll down and open the ",(0,o.kt)("strong",{parentName:"p"},"Proxy and browser configuration")," section. Enter your proxy URLs, and you're good to go."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Using custom proxy in Apify Console",src:r(66104).Z,width:"817",height:"251"})),(0,o.kt)("h3",{id:"SDK"},"Custom proxies in SDK"),(0,o.kt)("p",null,"In the Apify SDK, use the ",(0,o.kt)("inlineCode",{parentName:"p"},"proxyConfiguration.newUrl(sessionId)")," command to add your custom proxy URLs to the proxy configuration. See the ",(0,o.kt)("a",{parentName:"p",href:"https://docs-v2.apify.com/sdk-js/api/apify/class/ProxyConfiguration#newUrl",target:"_blank",rel:"noopener"},"SDK docs")," for more details."),(0,o.kt)("h2",{id:"ip-address-rotation"},"IP address rotation"),(0,o.kt)("p",null,"Web scrapers can rotate the IP addresses they use to access websites. They assign each request a different IP address, which makes it appear like they are all coming from different users. This greatly enhances performance and data throughout."),(0,o.kt)("p",null,"Depending on whether you use a ",(0,o.kt)("a",{parentName:"p",href:"https://apify.com/apify/web-scraper",target:"_blank",rel:"noopener"},"browser")," or ",(0,o.kt)("a",{parentName:"p",href:"https://apify.com/apify/cheerio-scraper",target:"_blank",rel:"noopener"},"HTTP requests")," for your scraping jobs, IP address rotation works differently."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Browser \u2013 a different IP address is used for each browser."),(0,o.kt)("li",{parentName:"ul"},"HTTP request \u2013 a different IP address is used for each request.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"You can use ",(0,o.kt)("a",{parentName:"strong",href:"#sessions",target:null,rel:null},"sessions")," to manage how you rotate and ",(0,o.kt)("a",{parentName:"strong",href:"#session-persistence",target:null,rel:null},"persist")," IP addresses.")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/platform/web-scraping-101/anti-scraping-techniques",target:null,rel:null},"Click here")," to learn more about IP address rotation and our findings on how blocking works."),(0,o.kt)("h2",{id:"sessions"},"Sessions"),(0,o.kt)("p",null,"Sessions allow you to use the same IP address for multiple connections."),(0,o.kt)("p",null,"To set a new session, pass the ",(0,o.kt)("a",{parentName:"p",href:"/platform/proxy/connection-settings",target:null,rel:null},(0,o.kt)("inlineCode",{parentName:"a"},"session"))," parameter in your ","[username]","({{@link proxy/connection_settings.md#username-parameters}}) field when connecting to a proxy. This will serve as the session's ID and an IP address will be assigned to it. To ","[use that IP address in other requests]","({{@link proxy/datacenter_proxy/examples.md#multiple-requests-with-the-same-ip-address}}), pass that same session ID in the username field."),(0,o.kt)("p",null,"The created session will store information such as cookies and can be used to generate ",(0,o.kt)("a",{parentName:"p",href:"https://pixelprivacy.com/resources/browser-fingerprinting/",target:"_blank",rel:"noopener"},"browser fingerprints"),". You can also assign custom user data such as authorization tokens and specific headers."),(0,o.kt)("p",null,"Sessions are available for ",(0,o.kt)("a",{parentName:"p",href:"/platform/proxy/datacenter-proxy",target:null,rel:null},"datacenter")," and ","[residential]","({{@link proxy/residential_proxy.md#session-persistence}}) proxies."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"This parameter is optional"),". By default, each proxied request is assigned a randomly picked least used IP address."),(0,o.kt)("h3",{id:"session-persistence"},"Session persistence"),(0,o.kt)("p",null,"You can persist your sessions (use the same IP address) by setting the ",(0,o.kt)("inlineCode",{parentName:"p"},"session")," parameter in the ",(0,o.kt)("inlineCode",{parentName:"p"},"username")," ",(0,o.kt)("a",{parentName:"p",href:"/platform/proxy/connection-settings",target:null,rel:null},"field"),". This assigns a single IP address to a ",(0,o.kt)("strong",{parentName:"p"},"session ID")," after you make the first request."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Session IDs represent IP addresses. Therefore, you can manage the IP addresses you use by managing sessions.")," In cases where you need to keep the same session (e.g. when you need to log in to a website), it is best to keep the same proxy. By assigning an IP address to a ",(0,o.kt)("strong",{parentName:"p"},"session ID"),", you can use that IP for every request you make."),(0,o.kt)("p",null,"For datacenter proxies, a session persists for ",(0,o.kt)("strong",{parentName:"p"},"26 hours")," (",(0,o.kt)("a",{parentName:"p",href:"/platform/proxy/datacenter-proxy",target:null,rel:null},"more info"),"). For residential proxies, it persists for ",(0,o.kt)("strong",{parentName:"p"},"1 minute")," (","[more info]","({{@link proxy/residential_proxy.md#session-persistence}})). Using a session resets its expiry timer."),(0,o.kt)("p",null,"Google SERP proxies do not support sessions."),(0,o.kt)("h2",{id:"dead-proxies"},"Dead proxies"),(0,o.kt)("p",null,"Our health check performs an HTTP and HTTPS request with each proxy server every few hours. If a server fails both requests 3 times in a row, it's marked as dead and all user sessions with this server are discarded."),(0,o.kt)("p",null,"Banned proxies are not considered dead, since they become usable after a while."),(0,o.kt)("h2",{id:"a-different-approach-to-502-bad-gateway"},"A different approach to ",(0,o.kt)("inlineCode",{parentName:"h2"},"502 Bad Gateway")),(0,o.kt)("p",null,"There are times when the ",(0,o.kt)("inlineCode",{parentName:"p"},"502")," status code is not comprehensive enough. Therefore, we have modified our server with ",(0,o.kt)("inlineCode",{parentName:"p"},"590-599")," codes instead to provide more insight."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"590 Non Successful"),": upstream responded with non-200 status code.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"591 RESERVED"),": ",(0,o.kt)("em",{parentName:"p"},"this status code is reserved for further use."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"592 Status Code Out Of Range"),": upstream responded with status code different than 100-999.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"593 Not Found"),": DNS lookup failed - ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/libuv/libuv/blob/cdbba74d7a756587a696fb3545051f9a525b85ac/include/uv.h#L82",target:"_blank",rel:"noopener"},(0,o.kt)("inlineCode",{parentName:"a"},"EAI_NODATA"))," or ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/libuv/libuv/blob/cdbba74d7a756587a696fb3545051f9a525b85ac/include/uv.h#L83",target:"_blank",rel:"noopener"},(0,o.kt)("inlineCode",{parentName:"a"},"EAI_NONAME")),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"594 Connection Refused"),": upstream refused connection.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"595 Connection Reset"),": connection reset due to loss of connection or timeout.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"596 Broken Pipe"),": trying to write on a closed socket.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"597 Auth Failed"),": incorrect upstream credentials.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"598 RESERVED"),": ",(0,o.kt)("em",{parentName:"p"},"this status code is reserved for further use."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"599 Upstream Error"),": generic upstream error."))),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"590")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"592")," indicate an issue on the upstream side.",(0,o.kt)("br",null),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"593")," indicates an incorrect ",(0,o.kt)("inlineCode",{parentName:"p"},"proxy-chain")," configuration.",(0,o.kt)("br",null),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"594"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"595")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"596")," may occur due to connection loss.",(0,o.kt)("br",null),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"597")," indicates incorrect upstream credentials.",(0,o.kt)("br",null),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"599")," is a generic error, where the above is not applicable."))}m.isMDXComponent=!0},66104:(e,t,r)=>{r.d(t,{Z:()=>a});const a="data:image/png;base64,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"}}]);