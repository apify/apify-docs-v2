"use strict";(self.webpackChunkapify_docs_v2=self.webpackChunkapify_docs_v2||[]).push([[7038],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var s=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,s,o=function(e,t){if(null==e)return{};var n,s,o={},r=Object.keys(e);for(s=0;s<r.length;s++)n=r[s],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(s=0;s<r.length;s++)n=r[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=s.createContext({}),p=function(e){var t=s.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=p(e.components);return s.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},h=s.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),h=p(n),d=o,m=h["".concat(l,".").concat(d)]||h[d]||c[d]||r;return n?s.createElement(m,a(a({ref:t},u),{},{components:n})):s.createElement(m,a({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,a=new Array(r);a[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var p=2;p<r;p++)a[p]=n[p];return s.createElement.apply(null,a)}return s.createElement.apply(null,n)}h.displayName="MDXCreateElement"},69343:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>p,toc:()=>c});var s=n(87462),o=n(63366),r=(n(67294),n(3905)),a=["components"],i={title:"Filter out blocked proxies using sessions",description:"Handling blocked requests efficiently using sessions",sidebar_position:16,slug:"/node-js/filter-blocked-requests-using-sessions"},l=void 0,p={unversionedId:"tutorials/node_js/filter_blocked_requests_using_sessions",id:"tutorials/node_js/filter_blocked_requests_using_sessions",title:"Filter out blocked proxies using sessions",description:"Handling blocked requests efficiently using sessions",source:"@site/sources/academy/tutorials/node_js/filter_blocked_requests_using_sessions.md",sourceDirName:"tutorials/node_js",slug:"/node-js/filter-blocked-requests-using-sessions",permalink:"/academy/node-js/filter-blocked-requests-using-sessions",draft:!1,editUrl:"https://github.com/apify/apify-docs-v2/edit/master/sources/academy/tutorials/node_js/filter_blocked_requests_using_sessions.md",tags:[],version:"current",lastUpdatedBy:"Vlad Frangu",lastUpdatedAt:1676307254,formattedLastUpdatedAt:"Feb 13, 2023",sidebarPosition:16,frontMatter:{title:"Filter out blocked proxies using sessions",description:"Handling blocked requests efficiently using sessions",sidebar_position:16,slug:"/node-js/filter-blocked-requests-using-sessions"},sidebar:"academy",previous:{title:"How to handle blocked requests in PuppeteerCrawler",permalink:"/academy/node-js/handle-blocked-requests-puppeteer"},next:{title:"Using man-in-the-middle proxy to intercept requests in Puppeteer",permalink:"/academy/node-js/using-proxy-to-intercept-requests-puppeteer"}},u={},c=[{value:"Overview of the problem",id:"overview-of-the-problem",level:3},{value:"Solution",id:"solution",level:3},{value:"Algorithm",id:"algorithm",level:3},{value:"Puppeteer example",id:"puppeteer-example",level:3},{value:"PuppeteerCrawler example",id:"puppeteercrawler-example",level:3}],h={toc:c};function d(e){var t=e.components,n=(0,o.Z)(e,a);return(0,r.kt)("wrapper",(0,s.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"This article explains how the problem was solved before the ",(0,r.kt)("a",{parentName:"em",href:"https://docs.apify.com/sdk/js/docs/api/session-pool",target:"_blank",rel:"noopener"},"SessionPool")," class was added into ",(0,r.kt)("a",{parentName:"em",href:"https://docs.apify.com/sdk/js/",target:"_blank",rel:"noopener"},"Apify SDK"),". We are keeping the article here as it might be interesting for people who want to see how to work with sessions on a lower level. For any practical usage of sessions, just follow the documentation and examples of SessionPool.")),(0,r.kt)("h3",{id:"overview-of-the-problem"},"Overview of the problem"),(0,r.kt)("p",null,"You want to crawl a website with a proxy pool, but most of your proxies are blocked. It's a very common situation. Proxies can be blocked for many reasons:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"You overused them in your current actor run and they got banned.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"You overused them in some of your previous runs and they are still banned (and may never be unbanned).")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Some other user with whom you share part of your proxy pool overused them when crawling the same website before you even touched it.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The proxies were actually banned before anyone used them to crawl the website because they share a subnetwork in some datacenter and all proxies of that subnet got banned.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The proxies actually got banned before anyone used them to crawl the website because they use anti-bot protection that bans proxies across websites (e.g. Cloudflare)."))),(0,r.kt)("p",null,"Nobody can make sure that a proxy will work infinitely. The only real solution to this problem is to use ",(0,r.kt)("a",{parentName:"p",href:"https://www.apify.com/docs/proxy#residential-proxy",target:"_blank",rel:"noopener"},"residential proxies"),", but they can sometimes be too costly."),(0,r.kt)("p",null,"However, usually, at least some of our proxies work. To crawl successfully, it is therefore imperative to handle blocked requests properly. You first need to discover that you are blocked, which usually means that either your request returned status greater or equal to 400 (simply it didn't return the proper response) or that the page displayed a captcha. To ensure that this bad request is retried, you usually just throw an error and it gets automatically retried later (our ",(0,r.kt)("a",{parentName:"p",href:"https://docs.apify.com/sdk/js/",target:"_blank",rel:"noopener"},"SDK")," handles this for you). Check out ",(0,r.kt)("a",{parentName:"p",href:"https://help.apify.com/en/articles/2190650-how-to-handle-blocked-requests-in-puppeteercrawler",target:"_blank",rel:"noopener"},"this article")," as inspiration for how to handle this situation with ",(0,r.kt)("inlineCode",{parentName:"p"},"PuppeteerCrawler")," \xa0class."),(0,r.kt)("h3",{id:"solution"},"Solution"),(0,r.kt)("p",null,"Now we are able to retry bad requests and eventually unless all of our proxies get banned, we should be able to successfully crawl what we want. The problem is that it takes too long and our log is full of errors. Fortunately, we can overcome this with ",(0,r.kt)("a",{parentName:"p",href:"https://www.apify.com/docs/proxy#datacenter-proxy--username-params",target:"_blank",rel:"noopener"},"proxy sessions")," (look at the proxy and SDK documentation for how to use them in your actors.)"),(0,r.kt)("p",null,"First we define ",(0,r.kt)("inlineCode",{parentName:"p"},"sessions")," \xa0object at the top of our code (in global scope) to hold the state of our working sessions."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"let sessions;")),(0,r.kt)("p",null,"Then we need to define an interval that will ensure our sessions are periodically saved to the key-value store, so if the actor restarts, we can load them."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"setInterval(async () => {\n\xa0 \xa0 await Apify.setValue('SESSIONS', sessions)\n}, 30 * 1000)\n")),(0,r.kt)("p",null,"And inside our main function, we load the sessions the same way we load an input. If they were not saved yet (the actor was not restarted), we instantiate them as an empty object."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"Apify.main(async () => {\n\xa0 \xa0 sessions = (await Apify.getValue('SESSIONS')) || {}\n\xa0 \xa0 // ...the rest of your code\n})\n")),(0,r.kt)("h3",{id:"algorithm"},"Algorithm"),(0,r.kt)("p",null,"You don't necessarily need to understand the solution below - it should be fine to just copy/paste it to your actor."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"sessions")," \xa0will be an object whose keys will be the names of the sessions and values will be objects with the name of the session (we choose a random number as a name here) and user agent (you can add any other useful properties that you want to match with each session.) This will be created automatically, for example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'{\n\xa0 "0.7870849452667994": {\n\xa0 \xa0 "name": "0.7870849452667994",\n\xa0 \xa0 "userAgent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.67 Safari/537.36"\n\xa0 },\n\xa0 "0.4787584713044999": {\n\xa0 \xa0 "name": "0.4787584713044999",\n\xa0 \xa0 "userAgent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36 Edge/16.16299"\n\xa0 },\n...\n}\n')),(0,r.kt)("p",null,"Now let's get to the algorithm that will define which sessions to pick for a request. There are many ways to do this and this is by no means the ideal way, so I encourage you to find a more intelligent algorithm and paste it into the comments of this article."),(0,r.kt)("p",null,"This function takes ",(0,r.kt)("inlineCode",{parentName:"p"},"sessions")," \xa0as an argument and returns a ",(0,r.kt)("inlineCode",{parentName:"p"},"session")," \xa0object which will either be a random object from ",(0,r.kt)("inlineCode",{parentName:"p"},"sessions")," \xa0or a new one with random user agent."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const pickSession = (sessions, maxSessions = 100) => {\n\n// sessions is our sessions object, at the beginning instantiated as {}\n\xa0 \xa0 // maxSessions \xa0is a constant which should be the number of working proxies we aspire to have.\n\xa0 \xa0 // The lower the number, the faster you will use the working proxies\n\xa0 \xa0 // but the faster the new one will not be picked\n\xa0 \xa0 // 100 is reasonable default\n\xa0 \xa0 // Since sessions is an object, we prepare an array of the session names\n\xa0 \xa0 const sessionsKeys = Object.keys(sessions);\n\nconsole.log(`Currently we have ${sessionsKeys.length} working sessions`);\n\n// We define a random floating number from 0 to 1 that will serve\n\xa0 \xa0 // both as a chance to pick the session and its possible name\n\xa0 \xa0 const randomNumber = Math.random();\n\n// The chance to pick a session will be higher when we have more working sessions\n\xa0 \xa0 const chanceToPickSession = sessionsKeys.length / \xa0maxSessions;\n\nconsole.log(`Chance to pick a working session is ${Math.round(chanceToPickSession * 100)}%`);\n\n// If the chance is higher than the random number, we pick one from the working sessions\n\xa0 \xa0 const willPickSession = chanceToPickSession > randomNumber;\n\nif (willPickSession) {\n\xa0 \xa0 \xa0 \xa0 // We randomly pick one of the working sessions and return it\n\xa0 \xa0 \xa0 \xa0 const indexToPick = Math.floor(sessionsKeys.length * Math.random());\n\nconst nameToPick = sessionsKeys[indexToPick];\n\nconsole.log(`We picked a working session: ${nameToPick} on index ${indexToPick}`);\n\nreturn sessions[nameToPick];\n\xa0 \xa0 } else {\n\xa0 \xa0 \xa0 \xa0 // We create a new session object, assign a random userAgent to it and return it\n\nconsole.log(`Creating new session: ${randomNumber}`);\n\nreturn {\n\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 name: randomNumber.toString(),\n\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 userAgent: Apify.utils.getRandomUserAgent(),\n\xa0 \xa0 \xa0 \xa0 };\n\xa0 \xa0 }\n};\n")),(0,r.kt)("h3",{id:"puppeteer-example"},"Puppeteer example"),(0,r.kt)("p",null,"We then use this function whenever we want to get the session for our request. Here is an example of how we would use it for bare bones Puppeteer (for example as a part of ",(0,r.kt)("inlineCode",{parentName:"p"},"BasicCrawler")," class)."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const session = pickSession(sessions)\nconst browser = await Apify.launchPuppeteer({\n\xa0 \xa0 useApifyProxy: true,\n\xa0 \xa0 apifyProxySession: session.name,\n\xa0 \xa0 userAgent: session.userAgent,\n})\n")),(0,r.kt)("p",null,"Then we only need to add the session if the request was successful or remove it if it was not. It doesn't matter if we add the same session twice or delete a non-existent session (because of how JavaScript objects work)."),(0,r.kt)("p",null,"After success:\n",(0,r.kt)("inlineCode",{parentName:"p"},"sessions[session.name] = session;")),(0,r.kt)("p",null,"After failure (captcha, blocked request, etc.):\n",(0,r.kt)("inlineCode",{parentName:"p"},"delete sessions[session.name]")),(0,r.kt)("h3",{id:"puppeteercrawler-example"},"PuppeteerCrawler example"),(0,r.kt)("p",null,'Now you might start to wonder, "I have already prepared an actor using PuppeteerCrawler, can I make it work there?". The problem is that with PuppeteerCrawler we don\'t have everything nicely inside one function scope like when using pure Puppeteer or BasicCrawler. Fortunately, there is a little hack that enables passing the session name to where we need it.'),(0,r.kt)("p",null,"First we define ",(0,r.kt)("inlineCode",{parentName:"p"},"lauchPuppeteerFunction")," which tells the crawler how to create new browser instances and we pass the picked session there."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const crawler = new Apify.PuppeteerCrawler({\n\xa0 \xa0 launchPuppeteerFunction: async () => {\n\xa0 \xa0 \xa0 \xa0 const session = pickSession(sessions);\n\xa0 \xa0 \xa0 \xa0 return Apify.launchPuppeteer({\n\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 useApifyProxy: true,\n\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 userAgent: `${session.userAgent} s=${session.name}`,\n\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 apifyProxySession: session.name\n\xa0 \xa0 \xa0 \xa0 })\n\xa0 \xa0 },\n\xa0 \xa0 // handlePageFunction etc.\n})\n")),(0,r.kt)("p",null,"We picked the session and added it to the browser as ",(0,r.kt)("inlineCode",{parentName:"p"},"apifyProxySession")," \xa0but for userAgent, we didn't simply passed the user agent as it is but added the session name into it. That is the hack because we can retrieve the user agent from the Puppeteer browser itself."),(0,r.kt)("p",null,"Now we need to retrieve the session name back in the ",(0,r.kt)("inlineCode",{parentName:"p"},"gotoFunction")," , pass it into userData and fix the hacked userAgent back to normal so it is not suspicious for the website."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const gotoFunction = async({ request, page }) => {\n\xa0 \xa0 const userAgentWithSession = await page.browser().userAgent()\n\xa0 \xa0 const match = userAgentWithSession.match(/(.+) s=(.+)/)\n\xa0 \xa0 const session = {\n\xa0 \xa0 \xa0 \xa0 name: match[2],\n\xa0 \xa0 \xa0 \xa0 userAgent: match[1],\n\xa0 \xa0 }\n\xa0 \xa0 request.userData.session = session;\n\xa0 \xa0 await page.setUserAgent(session.userAgent);\n\xa0 \xa0 return page.goto(request.url, { timeout: 60000 });\n}\n")),(0,r.kt)("p",null,"Now he have access to the session in the ",(0,r.kt)("inlineCode",{parentName:"p"},"handlePageFunction")," \xa0and the rest of the logic is the same as in the first example. We extract the session from the userData, try/catch the whole code and on success we add the session and on error we delete it. Also it is useful to retire the browser completely (check ",(0,r.kt)("a",{parentName:"p",href:"http://kb.apify.com/actor/how-to-handle-blocked-requests-in-puppeteercrawler",target:"_blank",rel:"noopener"},"here")," for reference) since the other requests will probably have similar problem."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const handlePageFunction = async ({ request, page, puppeteerPool }) => {\n\xa0 \xa0 const { session } = request.userData;\n\xa0 \xa0 console.log(URL: ${request.url}, session: ${session.name}, userAgent: ${session.userAgent})\n\ntry {\n\xa0 \xa0 \xa0 \xa0 // your main logic that is executed on each page\n\xa0 \xa0 \xa0 \xa0 sessions[session.name] = session;\n\xa0 \xa0 } catch (e) {\n\xa0 \xa0 \xa0 \xa0 delete sessions[session.name]\n\xa0 \xa0 \xa0 \xa0 await puppeteerPool.retire(page.browser());\n\xa0 \xa0 \xa0 \xa0 throw e;\n\xa0 \xa0 }\n}\n")),(0,r.kt)("p",null,"Things to consider"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Since the good and bad proxies are getting filtered over time, this solution only makes sense for crawlers with at least hundreds of requests.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"This solution will not help you if you simply don't have enough proxies for your job. It can even get your proxies banned faster (since the good ones will be used more often), so you should be cautious about the speed of your crawl.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"If you are more concerned about the speed of your crawler and less about banning proxies, set the ",(0,r.kt)("inlineCode",{parentName:"p"},"maxSessions")," parameter of ",(0,r.kt)("inlineCode",{parentName:"p"},"pickSession")," function to a number relatively lower to your total number of proxies. If on the other hand, keeping your proxies alive is more important, set ",(0,r.kt)("inlineCode",{parentName:"p"},"maxSessions")," \xa0relatively higher so you will always pick new proxies.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Since sessions only last 24 hours, if you have bigger intervals between your crawler runs, they will start fresh each time."))))}d.isMDXComponent=!0}}]);