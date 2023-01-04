"use strict";(self.webpackChunkapify_docs_v2=self.webpackChunkapify_docs_v2||[]).push([[8022],{3905:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>d});var n=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var p=n.createContext({}),l=function(e){var t=n.useContext(p),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},u=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=l(o),h=r,d=c["".concat(p,".").concat(h)]||c[h]||g[h]||a;return o?n.createElement(d,s(s({ref:t},u),{},{components:o})):n.createElement(d,s({ref:t},u))}));function d(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,s=new Array(a);s[0]=h;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[c]="string"==typeof e?e:r,s[1]=i;for(var l=2;l<a;l++)s[l]=o[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,o)}h.displayName="MDXCreateElement"},52228:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=o(87462),r=o(63366),a=(o(67294),o(3905)),s=["components"],i={title:"VI - Rotating proxies/sessions",description:"Learn first hand how to rotate proxies and sessions in order to avoid the majority of the most common anti-scraping protections.",sidebar_position:6,slug:"/expert-scraping-with-apify/solutions/rotating-proxies"},p="[](#rotating-proxy-sessions) Rotating proxies/sessions",l={unversionedId:"expert_scraping_with_apify/solutions/rotating_proxies",id:"expert_scraping_with_apify/solutions/rotating_proxies",title:"VI - Rotating proxies/sessions",description:"Learn first hand how to rotate proxies and sessions in order to avoid the majority of the most common anti-scraping protections.",source:"@site/sources/academy/expert_scraping_with_apify/solutions/rotating_proxies.md",sourceDirName:"expert_scraping_with_apify/solutions",slug:"/expert-scraping-with-apify/solutions/rotating-proxies",permalink:"/academy/expert-scraping-with-apify/solutions/rotating-proxies",draft:!1,tags:[],version:"current",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1672838848,formattedLastUpdatedAt:"Jan 4, 2023",sidebarPosition:6,frontMatter:{title:"VI - Rotating proxies/sessions",description:"Learn first hand how to rotate proxies and sessions in order to avoid the majority of the most common anti-scraping protections.",sidebar_position:6,slug:"/expert-scraping-with-apify/solutions/rotating-proxies"},sidebar:"defaultSidebar",previous:{title:"V - Handling migrations",permalink:"/academy/expert-scraping-with-apify/solutions/handling-migrations"},next:{title:"VII - Saving run stats",permalink:"/academy/expert-scraping-with-apify/solutions/saving-stats"}},u={},c=[{value:" Configuring SessionPool",id:"-configuring-sessionpool",level:2},{value:" Limiting proxy location",id:"-limiting-proxy-location",level:2},{value:" Quiz answers",id:"-quiz-answers",level:2},{value:" Wrap up",id:"-wrap-up",level:2}],g={toc:c};function h(e){var t=e.components,o=(0,r.Z)(e,s);return(0,a.kt)("wrapper",(0,n.Z)({},g,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"-rotating-proxiessessions"},(0,a.kt)("a",{parentName:"h1",href:"#rotating-proxy-sessions",target:null,rel:null})," Rotating proxies/sessions"),(0,a.kt)("p",null,"If you take a look at our current code for the Amazon scraping actor, you might notice this snippet:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const proxyConfiguration = await Actor.createProxyConfiguration({\n    groups: ['RESIDENTIAL'],\n});\n")),(0,a.kt)("p",null,"We didn't provide much explanation for this initially, as it was not directly relevant to the lesson at hand. When you ",(0,a.kt)("a",{parentName:"p",href:"/academy/anti-scraping/mitigation/using-proxies",target:null,rel:null},"create a ",(0,a.kt)("strong",{parentName:"a"},"ProxyConfiguration"))," and pass it to a crawler, Crawlee will make the crawler automatically rotate through the proxies. This entire time, we've been using the ",(0,a.kt)("strong",{parentName:"p"},"RESIDENTIAL")," proxy group to avoid being blocked by Amazon."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Go ahead and try commenting out the proxy configuration code then running the scraper. What happens?")),(0,a.kt)("p",null,"In order to rotate sessions, we must utilize the ",(0,a.kt)("a",{parentName:"p",href:"https://crawlee.dev/api/core/class/AutoscaledPool",target:"_blank",rel:"noopener"},(0,a.kt)("strong",{parentName:"a"},"SessionPool")),", which we've actually also already been using by setting the ",(0,a.kt)("strong",{parentName:"p"},"useSessionPool")," option in our crawler's configuration to ",(0,a.kt)("strong",{parentName:"p"},"true"),". The SessionPool advances the concept of proxy rotation by tying proxies to user-like sessions and rotating those instead. In addition to a proxy, each user-like session has cookies attached to it (and potentially a browser-fingerprint as well)."),(0,a.kt)("h2",{id:"-configuring-sessionpool"},(0,a.kt)("a",{parentName:"h2",href:"#configuring-session-pool",target:null,rel:null})," Configuring SessionPool"),(0,a.kt)("p",null,"Let's go ahead and add a ",(0,a.kt)("strong",{parentName:"p"},"sessionPoolOptions")," key to our crawler's configuration so that we can modify the default settings:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const crawler = new CheerioCrawler({\n    requestList,\n    requestQueue,\n    proxyConfiguration,\n    useSessionPool: true,\n    // This is where our session pool\n    // configuration lives\n    sessionPoolOptions: {\n        // We can add options for each\n        // session created by the session\n        // pool here\n        sessionOptions: {\n\n        },\n    },\n    maxConcurrency: 50,\n    // ...\n});\n")),(0,a.kt)("p",null,"Now, we'll use the ",(0,a.kt)("strong",{parentName:"p"},"maxUsageCount")," key to force each session to be thrown away after 5 uses, and ",(0,a.kt)("strong",{parentName:"p"},"maxErrorScore")," to trash a session once it receives an error."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const crawler = new CheerioCrawler({\n    requestList,\n    requestQueue,\n    proxyConfiguration,\n    useSessionPool: true,\n    sessionPoolOptions: {\n        sessionOptions: {\n            maxUsageCount: 5,\n            maxErrorScore: 1,\n        },\n    },\n    maxConcurrency: 50,\n    // ...\n});\n")),(0,a.kt)("p",null,"And that's it! We've successfully configured the session pool to match the task's requirements."),(0,a.kt)("h2",{id:"-limiting-proxy-location"},(0,a.kt)("a",{parentName:"h2",href:"#limiting-proxy-location",target:null,rel:null})," Limiting proxy location"),(0,a.kt)("p",null,"The final requirement was to only use proxies from the US. Back in our ",(0,a.kt)("strong",{parentName:"p"},"ProxyConfiguration"),", we just need to add the ",(0,a.kt)("strong",{parentName:"p"},"countryCode")," key and set it to ",(0,a.kt)("strong",{parentName:"p"},"US"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const proxyConfiguration = await Actor.createProxyConfiguration({\n    groups: ['RESIDENTIAL'],\n    countryCode: 'US',\n});\n")),(0,a.kt)("h2",{id:"-quiz-answers"},(0,a.kt)("a",{parentName:"h2",href:"#quiz-answers",target:null,rel:null})," Quiz answers"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Q: What are the different types of proxies that Apify proxy offers? What are the main differences between them?")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"A:")," Datacenter, residential, and Google SERP proxies with sub-groups. Datacenter proxies are fast and cheap, but have a higher chance of being blocked on certain sites in comparison to residential proxies, which are IP addresses located in homes and offices around the world. Google SERP proxies are specifically for Google."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Q: Which proxy groups do users get with the proxy trial? How long does the trial last?")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"A:")," Users can get a 30 day trial to Apify Proxy and will get access to the ",(0,a.kt)("strong",{parentName:"p"},"GOOGLE_SERP")," and ",(0,a.kt)("strong",{parentName:"p"},"RESIDENTIAL")," groups."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Q: How can you prevent an error from occurring if one of the proxy groups that a user has is removed? What are the best practices for these scenarios?")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"A:")," By making the proxy for the scraper to use be configurable by the user through the actor's input. That way, they can easily switch proxies if the actor stop working due to proxy-related issues. It can also be done by using the ",(0,a.kt)("strong",{parentName:"p"},"AUTO")," proxy instead of specific groups."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Q: Does it make sense to rotate proxies when you are logged into a website?")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"A:")," No, because most websites tie an IP address to a session. If you start making requests with cookies used with a different IP address, the website might see it as unusual activity and either block the scraper or automatically log out."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Q: Construct a proxy URL that will select proxies only from the US.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"A:")," ",(0,a.kt)("inlineCode",{parentName:"p"},"http://country-US:<proxy_password>@proxy.apify.com:8000")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Q: What do you need to do to rotate a proxy (one proxy usually has one IP)? How does this differ for CheerioCrawler and PuppeteerCrawler?")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"A:")," Simply making a new request with the proxy endpoint above will automatically rotate it. Sessions can also be used to automatically do this. While proxy rotation is fairly straightforward for Cheerio, it's more complex in Puppeteer, as you have to retire the browser each time a new proxy is rotated in. The SessionPool will automatically retire a browser when a session is retired. Sessions can be manually retired with ",(0,a.kt)("inlineCode",{parentName:"p"},"session.retire()"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Q: Name a few different ways of how a website can prevent you from scraping it.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"A:")," IP detection and rate-limiting, browser/fingerprint detection, user behavior tracking, etc."),(0,a.kt)("h2",{id:"-wrap-up"},(0,a.kt)("a",{parentName:"h2",href:"#wrap-up",target:null,rel:null})," Wrap up"),(0,a.kt)("p",null,"In this solution, you learned one of the most important concepts in web-scraping - proxy/session rotation. With your newfound knowledge of the SessionPool, you'll be (practically) unstoppable!"))}h.isMDXComponent=!0}}]);