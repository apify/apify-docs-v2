"use strict";(self.webpackChunkapify_docs_v2=self.webpackChunkapify_docs_v2||[]).push([[6366],{3905:(e,t,a)=>{a.d(t,{Zo:()=>h,kt:()=>d});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},h=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,h=o(e,["components","mdxType","originalType","parentName"]),u=c(a),d=i,m=u["".concat(l,".").concat(d)]||u[d]||p[d]||r;return a?n.createElement(m,s(s({ref:t},h),{},{components:a})):n.createElement(m,s({ref:t},h))}));function d(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,s=new Array(r);s[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,s[1]=o;for(var c=2;c<r;c++)s[c]=a[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},95069:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>h,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var n=a(87462),i=a(63366),r=(a(67294),a(3905)),s=["components"],o={title:"Anti-scraping protections",description:"Understand the various anti-scraping measures different sites use to prevent bots from accessing them, and how to appear more human to fix these issues.",sidebar_position:4,category:"web scraping & automation",slug:"/anti-scraping"},l="Anti-scraping protections",c={unversionedId:"anti_scraping/index",id:"anti_scraping/index",title:"Anti-scraping protections",description:"Understand the various anti-scraping measures different sites use to prevent bots from accessing them, and how to appear more human to fix these issues.",source:"@site/sources/academy/anti_scraping/index.md",sourceDirName:"anti_scraping",slug:"/anti-scraping",permalink:"/academy/anti-scraping",draft:!1,editUrl:"https://github.com/apify/apify-docs-v2/edit/master/sources/academy/anti_scraping/index.md",tags:[],version:"current",lastUpdatedBy:"Jind\u0159ich B\xe4r",lastUpdatedAt:1675952046,formattedLastUpdatedAt:"Feb 9, 2023",sidebarPosition:4,frontMatter:{title:"Anti-scraping protections",description:"Understand the various anti-scraping measures different sites use to prevent bots from accessing them, and how to appear more human to fix these issues.",sidebar_position:4,category:"web scraping & automation",slug:"/anti-scraping"}},h={},p=[{value:"Quick start",id:"quick-start",level:2},{value:"First of all, why do websites want to block bots?",id:"why-block-bots",level:2},{value:"The principles of anti-scraping protections",id:"the-principles",level:2},{value:"Common anti-scraping measures",id:"common-measures",level:2},{value:"IP rate-limiting",id:"ip-rate-limiting",level:3},{value:"Header checking",id:"header-checking",level:3},{value:"URL analysis",id:"url-analysis",level:3},{value:"Regular structure changes",id:"regular-structure-changes",level:3},{value:"IP session consistency",id:"ip-session-consistency",level:3},{value:"Interval analysis",id:"interval-analysis",level:3},{value:"Browser fingerprinting",id:"browser-fingerprinting",level:3},{value:"Honeypots",id:"honeypots",level:3},{value:"First up",id:"first",level:2}],u={toc:p};function d(e){var t=e.components,a=(0,i.Z)(e,s);return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"anti-scraping-protections"},"Anti-scraping protections"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Understand the various anti-scraping measures different sites use to prevent bots from accessing them, and how to appear more human to fix these issues.")),(0,r.kt)("hr",null),(0,r.kt)("p",null,"If at any point in time you've strayed away from the Academy's demo content, and into the wild west by writing some scrapers of your own, you may have been hit with anti-scraping measures. This is extremely common in the scraping world; however, the good thing is that there are always solutions."),(0,r.kt)("p",null,"This section covers the essentials of mitigating anti-scraping protections, such as proxies, HTTP headers and cookies, and a few other things to consider when working on a reliable and scalable crawler. Proper usage of the methods taught in the next lessons will allow you to extract data which is specific to a certain location, enable your crawler to browse websites as a logged-in user, and more."),(0,r.kt)("p",null,"In development, it is crucial to check and adjust the configurations related to our next lessons' topics, as simply doing this can fix blocking issues on the majority of websites."),(0,r.kt)("h2",{id:"quick-start"},"Quick start"),(0,r.kt)("p",null,"If you don't have time to read about the theory behind anti-scraping protections to fine-tune your scraping project and instead you just need to get unblocked ASAP, here are some quick tips:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Use high-quality proxies. ",(0,r.kt)("a",{parentName:"li",href:"/platform/proxy/residential-proxy",target:null,rel:null},"Residential proxies")," are the least blocked. There are many providers out there like Apify, BrightData, Oxylabs, NetNut, etc."),(0,r.kt)("li",{parentName:"ul"},"Set ",(0,r.kt)("strong",{parentName:"li"},"real-user-like HTTP settings")," and ",(0,r.kt)("strong",{parentName:"li"},"browser fingerprints"),". ",(0,r.kt)("a",{parentName:"li",href:"https://crawlee.dev/",target:"_blank",rel:"noopener"},"Crawlee")," uses statistically generated realistic HTTP headers and browser fingerprints by default for all of its crawlers."),(0,r.kt)("li",{parentName:"ul"},"Use a modern browser to pass bot capture challenges. We recommend ",(0,r.kt)("a",{parentName:"li",href:"https://crawlee.dev/docs/examples/playwright-crawler-firefox",target:"_blank",rel:"noopener"},"Playwright with Firefox")," because it is not that common for scraping. You can also play with ",(0,r.kt)("a",{parentName:"li",href:"https://crawlee.dev/api/playwright-crawler/interface/PlaywrightCrawlerOptions#headless",target:"_blank",rel:"noopener"},"non-headless mode")," and adjust other ",(0,r.kt)("a",{parentName:"li",href:"https://crawlee.dev/api/browser-pool/interface/FingerprintGeneratorOptions",target:"_blank",rel:"noopener"},"fingerprint settings"),"."),(0,r.kt)("li",{parentName:"ul"},"Consider extracting data from ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"/academy/api-scraping",target:null,rel:null},"private APIs"))," or ",(0,r.kt)("strong",{parentName:"li"},"mobile app APIs"),". They are usually much less protected.")),(0,r.kt)("h2",{id:"why-block-bots"},"First of all, why do websites want to block bots?"),(0,r.kt)("p",null,"What's up with that?! There are various reasons why a website might want to block bots from accessing it. Here are a few of the main ones:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"To prevent the possibility of malicious bots from crawling the site to steal sensitive data like passwords or personal data about users."),(0,r.kt)("li",{parentName:"ul"},"In order to avoid server performance hits due to bots making a large amount of requests to the website at a single time."),(0,r.kt)("li",{parentName:"ul"},"To avoid their competitors to gain market insights about their business."),(0,r.kt)("li",{parentName:"ul"},"To prevent bots from scraping their content and selling it to other websites or re-publishing it."),(0,r.kt)("li",{parentName:"ul"},"To not skew their analytics data with bot traffic."),(0,r.kt)("li",{parentName:"ul"},"If it is a social media website, they might be attempting to keep away bots programmed to mass create fake profiles (which are usually sold later).")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"We recommend checking out ",(0,r.kt)("a",{parentName:"p",href:"https://blog.apify.com/is-web-scraping-legal",target:"_blank",rel:"noopener"},"this article about legal and ethical ramifications of web scraping"),".")),(0,r.kt)("p",null,"Unfortunately for these websites, they have to make compromises and tradeoffs. While super strong anti-bot protections will surely prevent the majority of bots from accessing their content, there is also a higher chance of regular users being flagged as bots and being blocked as well. Because of this, different sites have different scraping-difficulty levels based on the anti-scraping measures they take."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Going into this topic, it's important to understand that there is no one silver bullet solution to bypassing protections against bots. Even if two websites are using Cloudflare (for example), one of them might be significantly more difficult to scrape due to harsher CloudFlare configurations. It is all about configuration, not the anti-scraping tool itself.")),(0,r.kt)("h2",{id:"the-principles"},"The principles of anti-scraping protections"),(0,r.kt)("p",null,"Anti-scraping protections can work on many different layers and use a large amount of bot-identification techniques. There are 4 main principles that anti-scraping protections are based on:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Where you are coming from")," - IP address of the incoming traffic is always available to the website. Proxies are used to emulate a different IP addresses but their quality matters a lot."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"How you look")," - With each request, the website can analyze its HTTP headers, TLS version, cyphers, and other information. Moreover, if you use a browser, the website can also analyze the whole browser fingerprint and run challenges to clasify your hardware (like graphics hardware acceleration)."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"What you are scraping")," - There are many ways to extract the same data from a website. You can just get the inital HTML or you can use a browser to render the full page or you can reverse engineer internal APIs. Each of those endpoints can be protected differently."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"How you behave")," - The website can see patterns in how you are ordering your requests, how fast you are scraping, etc. It can also analyse browser behavior like mouse movement, clicks or key presses.")),(0,r.kt)("p",null,"Not all websites use all of these principles but they encompass the possibilities websites have to track and block bots. All techniques that help you mitigate anti-scraping protections are based on making yourself blend in with the crowd of regular users with each of these principles. "),(0,r.kt)("p",null,"There are two main ways a bot can be detected, which follow two different types of web scraping:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Crawlers using ",(0,r.kt)("strong",{parentName:"li"},"HTTP requests")),(0,r.kt)("li",{parentName:"ol"},"Crawlers using ",(0,r.kt)("strong",{parentName:"li"},"browser automation")," (usually with a headless browser)")),(0,r.kt)("p",null,"Once a bot is detected, there are some countermeasures a website takes to prevent it from re-accessing it. The protection techniques are divided into two main categories:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Uses only the ",(0,r.kt)("strong",{parentName:"li"},"information provided within the HTTP request"),", such as headers, IP addresses, TLS versions, ciphers, etc."),(0,r.kt)("li",{parentName:"ol"},"Uses ",(0,r.kt)("strong",{parentName:"li"},"JavaScript evaluation to collect browser fingerprint"),", or even track the user behavior on the website. These JavaScript evaluations can also track mouse movement or keys pressed. Based on the information gathered, they can decide if the user is a bot or a human. This method is often paired with the first one.")),(0,r.kt)("p",null,"Once one of these methods detects that the user is a bot, it will take countermeasures depending on how advanced its techniques are."),(0,r.kt)("p",null,"A common workflow of a website after it has detected a bot goes as follows:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},'The bot is added to the "greylist" (a list of suspicious IP addresses, fingerprints or any other value that can be used to uniquely identify the bot).'),(0,r.kt)("li",{parentName:"ol"},"A ",(0,r.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Turing_test",target:"_blank",rel:"noopener"},"Turing test")," is provided to the bot. Typically a ",(0,r.kt)("strong",{parentName:"li"},"captcha"),". If the bot succeeds, it is added to the whitelist."),(0,r.kt)("li",{parentName:"ol"},"If the captcha is failed, the bot is added to the blacklist.")),(0,r.kt)("p",null,"One thing to keep in mind while navigating through this course is that advanced scraping methods are able to identify non-humans not only by one value (such as a single header value, or IP address), but are able to identify them through more complex things such as header combinations."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"For an in-depth video explanation of anti-scraping, and how to fix issues caused by it, check out ",(0,r.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=aXil0K-M-Vs",target:"_blank",rel:"noopener"},"this talk")," from ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/mnmkng",target:"_blank",rel:"noopener"},"Ondra Urban"),".")),(0,r.kt)("h2",{id:"common-measures"},"Common anti-scraping measures"),(0,r.kt)("p",null,"Because we here at Apify scrape for a living, we have discovered many popular and niche anti-scraping techniques. We've compiled them into a short and comprehensible list here to help understand the roadblocks before this course teaches you how to get around them."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"However, not all issues you encounter are caused by anti-scraping systems. Sometimes, it's just a simple configuration issue. Learn ",(0,r.kt)("a",{parentName:"p",href:"/academy/node-js/analyzing-pages-and-fixing-errors",target:null,rel:null},"how to effectively debug your programs here"),".")),(0,r.kt)("h3",{id:"ip-rate-limiting"},"IP rate-limiting"),(0,r.kt)("p",null,"This is the most straightforward and standard protection, which is mainly implemented to prevent DDOS attacks, but it also works for blocking scrapers. Websites using rating don't allow to more than some defined number of requests from one IP address in a certain time span. If the max-request number is low, then there is a high potential for false-positive due to IP address uniqueness, such as in large companies where hundreds of employees can share the same IP address."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Learn more about rate limiting ",(0,r.kt)("a",{parentName:"p",href:"/academy/anti-scraping/techniques/rate-limiting",target:null,rel:null},"here"))),(0,r.kt)("h3",{id:"header-checking"},"Header checking"),(0,r.kt)("p",null,"This type of bot identification is based on the given fact that humans are accessing web pages through browsers, which have specific ",(0,r.kt)("a",{parentName:"p",href:"/academy/concepts/http-headers",target:null,rel:null},"header")," sets which they send along with every request. The most commonly known header that helps to detect bots is the ",(0,r.kt)("inlineCode",{parentName:"p"},"user-agent")," header, which holds a value that identifies which browser is being used, and what version it's running. Though ",(0,r.kt)("inlineCode",{parentName:"p"},"user-agent")," is the most commonly used header for the ",(0,r.kt)("strong",{parentName:"p"},"Header checking")," method, other headers are sometimes used as well. The evaluation is often also run based on the header consistency, and includes a known combination of browser headers."),(0,r.kt)("h3",{id:"url-analysis"},"URL analysis"),(0,r.kt)("p",null,"Solely based on the way how the bots operate. It comperes data-rich pages visits and the other pages visits. The ratio of the data-rich and regular pages has to be high to identify the bot and reduce false positives successfully."),(0,r.kt)("h3",{id:"regular-structure-changes"},"Regular structure changes"),(0,r.kt)("p",null,"By definition, this is not an anti-scraping method, but it can heavily affect the reliability of a scraper. If your target website drastically changes its CSS selectors, and your scraper is heavily reliant on selectors, it could break. In principle, websites using this method change their HTML structure or CSS selectors randomly and frequently, making the parsing of the data harder, and requiring more maintenance of the bot."),(0,r.kt)("p",null,"One of the best ways of avoiding the possible breaking of your scraper due to website structure changes is to limit your reliance on data from HTML elements as much as possible (see ",(0,r.kt)("a",{parentName:"p",href:"/academy/api-scraping",target:null,rel:null},"API Scraping")," and ",(0,r.kt)("a",{parentName:"p",href:"/academy/node-js/js-in-html",target:null,rel:null},"JavaScript objects within HTML"),")"),(0,r.kt)("h3",{id:"ip-session-consistency"},"IP session consistency"),(0,r.kt)("p",null,"This technique is commonly uses to entirely block the bot from accessing the website altogether. It works on the principle that every entity that accesses the site gets a token. This token is then saved together with the IP address and HTTP request information such as user-agent and other specific headers. If the entity makes another request, but without the session token, the IP address is added on the greylist."),(0,r.kt)("h3",{id:"interval-analysis"},"Interval analysis"),(0,r.kt)("p",null,"This technique is based on analyzing the time intervals of the visit of a website. If the times are very similar, the entity is added to the greylist. This method\u2019s premise is that the bot runs in regular intervals by, for example, a CRON job that starts every Monday. It is a long-term strategy, so it should be used as an extension. This technique needs only the information from the HTTP request to identify the frequency of the visits."),(0,r.kt)("h3",{id:"browser-fingerprinting"},"Browser fingerprinting"),(0,r.kt)("p",null,'One of the most successful and advanced methods is collecting the browser\'s "fingerprint", which is a fancy name for information such as fonts, audio codecs, canvas fingerprint, graphics card, and more. Browser fingerprints are highly unique, so they are a reliable means of identifying a specific user (or bot). If the fingerprint provides different/inconsistent information, the user is added to the greylist.'),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"It's important to note that this method also blocks all users that cannot evaluate JavaScript (such as bots sending only static HTTP requests), and combines both of the fundamental methods mentioned earlier.")),(0,r.kt)("h3",{id:"honeypots"},"Honeypots"),(0,r.kt)("p",null,'The honeypot approach is based on providing links that only bots can see. A typical example is hidden pagination. Usually, the bot needs to go through all the pages in the pagination, so the website\'s last "fake" page has a hidden link for the user, but has the same selector as the real one. Once the bot visits the link, it is automatically blacklisted. This method needs only the HTTP information.'),(0,r.kt)("h2",{id:"first"},"First up"),(0,r.kt)("p",null,"In our ",(0,r.kt)("a",{parentName:"p",href:"/academy/anti-scraping/techniques",target:null,rel:null},"first section"),", we'll be discussing more in-depth about the various anti-scraping methods and techniques websites use, as well as how to mitigate these protections."))}d.isMDXComponent=!0}}]);