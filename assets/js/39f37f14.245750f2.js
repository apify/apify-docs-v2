"use strict";(self.webpackChunkapify_docs_v2=self.webpackChunkapify_docs_v2||[]).push([[3581],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(n),g=r,d=m["".concat(l,".").concat(g)]||m[g]||u[g]||i;return n?a.createElement(d,o(o({ref:t},c),{},{components:n})):a.createElement(d,o({ref:t},c))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},59990:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>g,frontMatter:()=>s,metadata:()=>p,toc:()=>u});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),o=["components"],s={title:"Rate-limiting",description:"Learn about rate-limiting, a common tactic used by websites to avoid a large and non-human rate of requests coming from a single IP address.",sidebar_position:1,slug:"/anti-scraping/techniques/rate-limiting"},l="Rate-limiting",p={unversionedId:"webscraping/anti_scraping/techniques/rate_limiting",id:"webscraping/anti_scraping/techniques/rate_limiting",title:"Rate-limiting",description:"Learn about rate-limiting, a common tactic used by websites to avoid a large and non-human rate of requests coming from a single IP address.",source:"@site/sources/academy/webscraping/anti_scraping/techniques/rate_limiting.md",sourceDirName:"webscraping/anti_scraping/techniques",slug:"/anti-scraping/techniques/rate-limiting",permalink:"/academy/anti-scraping/techniques/rate-limiting",draft:!1,editUrl:"https://github.com/apify/apify-docs-v2/edit/master/sources/academy/webscraping/anti_scraping/techniques/rate_limiting.md",tags:[],version:"current",lastUpdatedBy:"Vlad Frangu",lastUpdatedAt:1676307254,formattedLastUpdatedAt:"Feb 13, 2023",sidebarPosition:1,frontMatter:{title:"Rate-limiting",description:"Learn about rate-limiting, a common tactic used by websites to avoid a large and non-human rate of requests coming from a single IP address.",sidebar_position:1,slug:"/anti-scraping/techniques/rate-limiting"},sidebar:"academy",previous:{title:"Anti-scraping techniques",permalink:"/academy/anti-scraping/techniques"},next:{title:"Fingerprinting",permalink:"/academy/anti-scraping/techniques/fingerprinting"}},c={},u=[{value:"Dealing rate limiting with proxy/session rotating",id:"dealing-with-rate-limiting",level:2},{value:"Configuring a session pool",id:"configuring-session-pool",level:3},{value:"Next up",id:"next",level:2}],m={toc:u};function g(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"rate-limiting"},"Rate-limiting"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Learn about rate-limiting, a common tactic used by websites to avoid a large and non-human rate of requests coming from a single IP address.")),(0,i.kt)("hr",null),(0,i.kt)("p",null,"When crawling a website, a web scraping bot will typically send many more requests from a single IP address than a human user could generate over the same period. Websites can easily monitor how many requests they receive from a single IP address, and block it or require a ",(0,i.kt)("a",{parentName:"p",href:"/academy/anti-scraping/techniques/captchas",target:null,rel:null},"captcha")," test to continue making requests."),(0,i.kt)("p",null,"In the past, most websites had their own anti-scraping solutions, the most common of which was IP address rate-limiting. In recent years, the popularity of third-party specialized anti-scraping providers has dramatically increased, but a lot of websites still use rate-limiting to only allow a certain number of requests per second/minute/hour to be sent from a single IP; therefore, crawler requests have the potential of being blocked entirely quite quickly."),(0,i.kt)("p",null,"In cases when a higher number of requests is expected for the crawler, using a ",(0,i.kt)("a",{parentName:"p",href:"/academy/anti-scraping/mitigation/proxies",target:null,rel:null},"proxy")," and rotating the IPs is essential to let the crawler run as smoothly as possible and avoid being blocked."),(0,i.kt)("h2",{id:"dealing-with-rate-limiting"},"Dealing rate limiting with proxy/session rotating"),(0,i.kt)("p",null,"The most popular and effective way of avoiding rate-limiting issues is by rotating ",(0,i.kt)("a",{parentName:"p",href:"/academy/anti-scraping/mitigation/proxies",target:null,rel:null},"proxies")," after every ",(0,i.kt)("strong",{parentName:"p"},"n")," number of requests, which makes your scraper appear as if it is making requests from various different places. Since the majority of rate-limiting solutions are based on IP addresses, rotating IPs allows a scraper to make large amounts to a website without getting restricted."),(0,i.kt)("p",null,"In Crawlee, proxies are automatically rotated for you when you use ",(0,i.kt)("inlineCode",{parentName:"p"},"ProxyConfiguration")," and a ",(0,i.kt)("a",{parentName:"p",href:"https://crawlee.dev/api/core/class/SessionPool",target:"_blank",rel:"noopener"},(0,i.kt)("strong",{parentName:"a"},"SessionPool"))," within a crawler. The SessionPool handles a lot of the nitty gritty of proxy rotating, especially with ",(0,i.kt)("a",{parentName:"p",href:"/academy/puppeteer-playwright",target:null,rel:null},"browser based crawlers")," by retiring a browser instance after a certain number of requests have been sent from it in order to use a new proxy (a browser instance must be retired in order to use a new proxy)."),(0,i.kt)("p",null,"Here is an example of these features being used in a ",(0,i.kt)("strong",{parentName:"p"},"PuppeteerCrawler")," instance:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import { PuppeteerCrawler } from 'crawlee';\nimport { Actor } from 'apify';\n\nconst myCrawler = new PuppeteerCrawler({\n    proxyConfiguration: await Actor.createProxyConfiguration({\n        groups: ['RESIDENTIAL'],\n    }),\n    sessionPoolOptions: {\n        // Note that a proxy is tied to a session\n        sessionOptions: {\n            // Let's say the website starts blocking requests after\n            // 20 requests have been sent in the span of 1 minute from\n            // a single user.\n            // We can stay on the safe side and retire the browser\n            // and rotate proxies after 15 pages (requests) have been opened.\n            maxUsageCount: 15,\n        },\n    },\n    // ...\n});\n")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Take a look at the ",(0,i.kt)("a",{parentName:"p",href:"/academy/anti-scraping/mitigation/using-proxies",target:null,rel:null},(0,i.kt)("strong",{parentName:"a"},"Using proxies"))," lesson to learn more about how to use proxies and rotate them in Crawlee.")),(0,i.kt)("h3",{id:"configuring-session-pool"},"Configuring a session pool"),(0,i.kt)("p",null,"There are various configuration options available in ",(0,i.kt)("inlineCode",{parentName:"p"},"sessionPoolOptions")," that can be used to set up the SessionPool for different rate-limiting scenarios. In the example above, we used ",(0,i.kt)("inlineCode",{parentName:"p"},"maxUsageCount")," within ",(0,i.kt)("inlineCode",{parentName:"p"},"sessionOptions")," to prevent more than 15 requests from being sent using a session before it was thrown away; however, a maximum age can also be set using ",(0,i.kt)("inlineCode",{parentName:"p"},"maxAgeSecs"),"."),(0,i.kt)("p",null,"When dealing with frequent and unpredictable blockage, the ",(0,i.kt)("inlineCode",{parentName:"p"},"maxErrorScore")," option can be set to trash a session after it's hit a certain number of errors."),(0,i.kt)("p",null,"To learn more about all configurations available in ",(0,i.kt)("inlineCode",{parentName:"p"},"sessionPoolOptions"),", refer to the ",(0,i.kt)("a",{parentName:"p",href:"https://crawlee.dev/api/core/interface/SessionPoolOptions",target:"_blank",rel:"noopener"},"Crawlee documentation"),"."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Don't worry too much about these configurations. Crawlee's defaults are usually good enough for the majority of use cases.")),(0,i.kt)("h2",{id:"next"},"Next up"),(0,i.kt)("p",null,"Though rate limiting is still common today, a lot of sites have improved over the years to use more complicated techniques such as ",(0,i.kt)("strong",{parentName:"p"},"browser fingerprinting"),", which is covered in the ",(0,i.kt)("a",{parentName:"p",href:"/academy/anti-scraping/techniques/fingerprinting",target:null,rel:null},"next lesson"),"."))}g.isMDXComponent=!0}}]);