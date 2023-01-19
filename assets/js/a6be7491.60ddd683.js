"use strict";(self.webpackChunkapify_docs_v2=self.webpackChunkapify_docs_v2||[]).push([[6200],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=l(r),m=a,f=c["".concat(p,".").concat(m)]||c[m]||d[m]||o;return r?n.createElement(f,s(s({ref:t},u),{},{components:r})):n.createElement(f,s({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=c;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var l=2;l<o;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},54192:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),s=["components"],i={title:"Proxy",description:"Learn to anonymously access websites in scraping/automation jobs. Improve data outputs and efficiency of bots, and access websites from various geographies.",sidebar_position:10,category:"platform",slug:"/proxy"},p="[](./proxy) Proxy",l={unversionedId:"proxy/index",id:"proxy/index",title:"Proxy",description:"Learn to anonymously access websites in scraping/automation jobs. Improve data outputs and efficiency of bots, and access websites from various geographies.",source:"@site/sources/platform/proxy/index.md",sourceDirName:"proxy",slug:"/proxy",permalink:"/platform/proxy",draft:!1,tags:[],version:"current",lastUpdatedBy:"Jind\u0159ich B\xe4r",lastUpdatedAt:1674125559,formattedLastUpdatedAt:"Jan 19, 2023",sidebarPosition:10,frontMatter:{title:"Proxy",description:"Learn to anonymously access websites in scraping/automation jobs. Improve data outputs and efficiency of bots, and access websites from various geographies.",sidebar_position:10,category:"platform",slug:"/proxy"},sidebar:"docs",previous:{title:"Request queue",permalink:"/platform/storage/request-queue"},next:{title:"Connection settings",permalink:"/platform/proxy/connection-settings"}},u={},d=[{value:"Our proxies",id:"our-proxies",level:2},{value:"Using your own proxies",id:"using-your-own-proxies",level:2},{value:"Custom proxies in console",id:"console",level:3},{value:"Custom proxies in SDK",id:"SDK",level:3},{value:"IP address rotation",id:"ip-address-rotation",level:2},{value:"Sessions",id:"sessions",level:2},{value:"Session persistence",id:"session-persistence",level:3},{value:"Dead proxies",id:"dead-proxies",level:2},{value:"A different approach to <code>502 Bad Gateway</code>",id:"a-different-approach-to-502-bad-gateway",level:2}],c={toc:d};function m(e){var t=e.components,i=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"-proxy"},(0,o.kt)("a",{parentName:"h1",href:"./proxy",target:null,rel:null})," Proxy"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Learn to anonymously access websites in scraping/automation jobs. Improve data outputs and efficiency of bots, and access websites from various geographies.")),(0,o.kt)("hr",null),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://apify.com/proxy",target:"_blank",rel:"noopener"},"Apify Proxy")," allows you to change your IP address when web scraping to reduce the chance of being ",(0,o.kt)("a",{parentName:"p",href:"/platform/web-scraping-101/anti-scraping-techniques",target:null,rel:null},"blocked")," because of your geographical location."),(0,o.kt)("p",null,"You can use proxies in your ",(0,o.kt)("a",{parentName:"p",href:"/platform/actors",target:null,rel:null},"actors")," or any other application that supports HTTP, HTTPS, and FTP protocols. Apify Proxy monitors the health of your IP pool and intelligently ",(0,o.kt)("a",{parentName:"p",href:"#ip-address-rotation",target:null,rel:null},"rotates addresses")," to prevent IP address-based blocking."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"You can view your proxy settings and password on the ",(0,o.kt)("a",{parentName:"strong",href:"https://console.apify.com/proxy",target:"_blank",rel:"noopener"},"Proxy")," page in the Apify Console.")),(0,o.kt)("h2",{id:"our-proxies"},"Our proxies"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/platform/proxy/datacenter-proxy",target:null,rel:null},"Datacenter proxy"),"]"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/platform/proxy/residential-proxy",target:null,rel:null},"Residential proxy"),"]"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/platform/proxy/google-serp-proxy",target:null,rel:null},"Google SERP proxy"),"]"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"For pricing information, visit ",(0,o.kt)("a",{parentName:"strong",href:"https://apify.com/proxy",target:"_blank",rel:"noopener"},"apify.com/proxy"),".")),(0,o.kt)("h2",{id:"using-your-own-proxies"},"Using your own proxies"),(0,o.kt)("p",null,"In addition to our proxies, you can use your own both in Apify Console and SDK."),(0,o.kt)("h3",{id:"console"},"Custom proxies in console"),(0,o.kt)("p",null,"To use your own proxies with Apify Console, in your actor's ",(0,o.kt)("strong",{parentName:"p"},"Input and options")," tab, scroll down and open the ",(0,o.kt)("strong",{parentName:"p"},"Proxy and browser configuration")," section. Enter your proxy URLs, and you're good to go."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Using custom proxy in Apify Console",src:r(47375).Z,width:"817",height:"251"})),(0,o.kt)("h3",{id:"SDK"},"Custom proxies in SDK"),(0,o.kt)("p",null,"In the Apify SDK, use the ",(0,o.kt)("inlineCode",{parentName:"p"},"proxyConfiguration.newUrl(sessionId)")," command to add your custom proxy URLs to the proxy configuration. See the ",(0,o.kt)("a",{parentName:"p",href:"https://docs-v2.apify.com/sdk-js/api/apify/class/ProxyConfiguration#newUrl",target:"_blank",rel:"noopener"},"SDK docs")," for more details."),(0,o.kt)("h2",{id:"ip-address-rotation"},"IP address rotation"),(0,o.kt)("p",null,"Web scrapers can rotate the IP addresses they use to access websites. They assign each request a different IP address, which makes it appear like they are all coming from different users. This greatly enhances performance and data throughout."),(0,o.kt)("p",null,"Depending on whether you use a ",(0,o.kt)("a",{parentName:"p",href:"https://apify.com/apify/web-scraper",target:"_blank",rel:"noopener"},"browser")," or ",(0,o.kt)("a",{parentName:"p",href:"https://apify.com/apify/cheerio-scraper",target:"_blank",rel:"noopener"},"HTTP requests")," for your scraping jobs, IP address rotation works differently."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Browser \u2013 a different IP address is used for each browser."),(0,o.kt)("li",{parentName:"ul"},"HTTP request \u2013 a different IP address is used for each request.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"You can use ",(0,o.kt)("a",{parentName:"strong",href:"#sessions",target:null,rel:null},"sessions")," to manage how you rotate and ",(0,o.kt)("a",{parentName:"strong",href:"#session-persistence",target:null,rel:null},"persist")," IP addresses.")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/platform/web-scraping-101/anti-scraping-techniques",target:null,rel:null},"Click here")," to learn more about IP address rotation and our findings on how blocking works."),(0,o.kt)("h2",{id:"sessions"},"Sessions"),(0,o.kt)("p",null,"Sessions allow you to use the same IP address for multiple connections."),(0,o.kt)("p",null,"To set a new session, pass the ",(0,o.kt)("a",{parentName:"p",href:"/platform/proxy/connection-settings",target:null,rel:null},(0,o.kt)("inlineCode",{parentName:"a"},"session")),", pass that same session ID in the username field."),(0,o.kt)("p",null,"The created session will store information such as cookies and can be used to generate ",(0,o.kt)("a",{parentName:"p",href:"https://pixelprivacy.com/resources/browser-fingerprinting/",target:"_blank",rel:"noopener"},"browser fingerprints"),". You can also assign custom user data such as authorization tokens and specific headers."),(0,o.kt)("p",null,"Sessions are available for ",(0,o.kt)("a",{parentName:"p",href:"/platform/proxy/datacenter-proxy",target:null,rel:null},"datacenter")," proxies."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"This parameter is optional"),". By default, each proxied request is assigned a randomly picked least used IP address."),(0,o.kt)("h3",{id:"session-persistence"},"Session persistence"),(0,o.kt)("p",null,"You can persist your sessions (use the same IP address) by setting the ",(0,o.kt)("inlineCode",{parentName:"p"},"session")," parameter in the ",(0,o.kt)("inlineCode",{parentName:"p"},"username")," ",(0,o.kt)("a",{parentName:"p",href:"/platform/proxy/connection-settings",target:null,rel:null},"field"),". This assigns a single IP address to a ",(0,o.kt)("strong",{parentName:"p"},"session ID")," after you make the first request."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Session IDs represent IP addresses. Therefore, you can manage the IP addresses you use by managing sessions.")," In cases where you need to keep the same session (e.g. when you need to log in to a website), it is best to keep the same proxy. By assigning an IP address to a ",(0,o.kt)("strong",{parentName:"p"},"session ID"),", you can use that IP for every request you make."),(0,o.kt)("p",null,"For datacenter proxies, a session persists for ",(0,o.kt)("strong",{parentName:"p"},"26 hours")," (",(0,o.kt)("a",{parentName:"p",href:"/platform/proxy/datacenter-proxy",target:null,rel:null},"more info"),"). Using a session resets its expiry timer."),(0,o.kt)("p",null,"Google SERP proxies do not support sessions."),(0,o.kt)("h2",{id:"dead-proxies"},"Dead proxies"),(0,o.kt)("p",null,"Our health check performs an HTTP and HTTPS request with each proxy server every few hours. If a server fails both requests 3 times in a row, it's marked as dead and all user sessions with this server are discarded."),(0,o.kt)("p",null,"Banned proxies are not considered dead, since they become usable after a while."),(0,o.kt)("h2",{id:"a-different-approach-to-502-bad-gateway"},"A different approach to ",(0,o.kt)("inlineCode",{parentName:"h2"},"502 Bad Gateway")),(0,o.kt)("p",null,"There are times when the ",(0,o.kt)("inlineCode",{parentName:"p"},"502")," status code is not comprehensive enough. Therefore, we have modified our server with ",(0,o.kt)("inlineCode",{parentName:"p"},"590-599")," codes instead to provide more insight."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"590 Non Successful"),": upstream responded with non-200 status code.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"591 RESERVED"),": ",(0,o.kt)("em",{parentName:"p"},"this status code is reserved for further use."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"592 Status Code Out Of Range"),": upstream responded with status code different than 100-999.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"593 Not Found"),": DNS lookup failed - ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/libuv/libuv/blob/cdbba74d7a756587a696fb3545051f9a525b85ac/include/uv.h#L82",target:"_blank",rel:"noopener"},(0,o.kt)("inlineCode",{parentName:"a"},"EAI_NODATA"))," or ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/libuv/libuv/blob/cdbba74d7a756587a696fb3545051f9a525b85ac/include/uv.h#L83",target:"_blank",rel:"noopener"},(0,o.kt)("inlineCode",{parentName:"a"},"EAI_NONAME")),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"594 Connection Refused"),": upstream refused connection.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"595 Connection Reset"),": connection reset due to loss of connection or timeout.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"596 Broken Pipe"),": trying to write on a closed socket.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"597 Auth Failed"),": incorrect upstream credentials.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"598 RESERVED"),": ",(0,o.kt)("em",{parentName:"p"},"this status code is reserved for further use."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"599 Upstream Error"),": generic upstream error."))),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"590")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"592")," indicate an issue on the upstream side.",(0,o.kt)("br",null),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"593")," indicates an incorrect ",(0,o.kt)("inlineCode",{parentName:"p"},"proxy-chain")," configuration.",(0,o.kt)("br",null),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"594"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"595")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"596")," may occur due to connection loss.",(0,o.kt)("br",null),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"597")," indicates incorrect upstream credentials.",(0,o.kt)("br",null),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"599")," is a generic error, where the above is not applicable."))}m.isMDXComponent=!0},47375:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/proxy-custom-3fa0ba6561715d61ba54764987e9b026.webp"}}]);