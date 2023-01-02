"use strict";(self.webpackChunkapify_docs_v2=self.webpackChunkapify_docs_v2||[]).push([[7862],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=l(n),h=r,m=p["".concat(c,".").concat(h)]||p[h]||d[h]||s;return n?a.createElement(m,i(i({ref:t},u),{},{components:n})):a.createElement(m,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,i=new Array(s);i[0]=h;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[p]="string"==typeof e?e:r,i[1]=o;for(var l=2;l<s;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},56105:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=n(87462),r=n(63366),s=(n(67294),n(3905)),i=["components"],o={title:"Anti-scraping techniques",description:"Understand the various common (and obscure) anti-scraping techniques used by websites to prevent bots from accessing their content.",sidebar_position:3.1,slug:"/anti-scraping/techniques"},c="[](#anti-scraping-techniques) Anti-scraping techniques",l={unversionedId:"anti_scraping/techniques/index",id:"anti_scraping/techniques/index",title:"Anti-scraping techniques",description:"Understand the various common (and obscure) anti-scraping techniques used by websites to prevent bots from accessing their content.",source:"@site/sources/academy/anti_scraping/techniques/index.md",sourceDirName:"anti_scraping/techniques",slug:"/anti-scraping/techniques",permalink:"/academy/anti-scraping/techniques",draft:!1,tags:[],version:"current",lastUpdatedBy:"Jind\u0159ich B\xe4r",lastUpdatedAt:1672645550,formattedLastUpdatedAt:"Jan 2, 2023",sidebarPosition:3.1,frontMatter:{title:"Anti-scraping techniques",description:"Understand the various common (and obscure) anti-scraping techniques used by websites to prevent bots from accessing their content.",sidebar_position:3.1,slug:"/anti-scraping/techniques"},sidebar:"defaultSidebar",previous:{title:"Anti-scraping protections",permalink:"/academy/anti-scraping"},next:{title:"Rate-limiting",permalink:"/academy/anti-scraping/techniques/rate-limiting"}},u={},p=[{value:" &quot;Access denied&quot; page",id:"-access-denied-page",level:2},{value:" Captcha page",id:"-captcha-page",level:2},{value:" Redirect",id:"-redirect",level:2},{value:" Request timeout/Socket hangup",id:"-request-timeoutsocket-hangup",level:2},{value:" Custom status code or message",id:"-custom-status-code-or-message",level:2},{value:" Empty results",id:"-empty-results",level:2},{value:" Fake results",id:"-fake-results",level:2},{value:" Next up",id:"-next-up",level:2}],d={toc:p};function h(e){var t=e.components,n=(0,r.Z)(e,i);return(0,s.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"-anti-scraping-techniques"},(0,s.kt)("a",{parentName:"h1",href:"#anti-scraping-techniques",target:null,rel:null})," Anti-scraping techniques"),(0,s.kt)("p",null,"In this section, we'll be discussing some of the most common (as well as some obscure) anti-scraping techniques used by websites to detect and block/limit bots from accessing their content."),(0,s.kt)("p",null,"When a scraper is detected, a website can respond in a variety of ways:"),(0,s.kt)("h2",{id:"-access-denied-page"},(0,s.kt)("a",{parentName:"h2",href:"#access-denied",target:null,rel:null}),' "Access denied" page'),(0,s.kt)("p",null,"This is a complete block which usually has a response status code of ",(0,s.kt)("strong",{parentName:"p"},"403"),". Usually, you'll hit an ",(0,s.kt)("strong",{parentName:"p"},"Access denied")," page if you have bad IP address or the website is restricted in the country of the IP address."),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"For a better understanding of what all the HTTP status codes mean, we recommend checking out ",(0,s.kt)("a",{parentName:"p",href:"https://http.cat/",target:"_blank",rel:"noopener"},"HTTP Cat")," which provides a highly professional description for each status code.")),(0,s.kt)("h2",{id:"-captcha-page"},(0,s.kt)("a",{parentName:"h2",href:"#captcha",target:null,rel:null})," Captcha page"),(0,s.kt)("p",null,"Probably the most common blocking method. The website gives you a chance to prove that you are not a bot by presenting you with a captcha. We'll be covering captchas within this course."),(0,s.kt)("h2",{id:"-redirect"},(0,s.kt)("a",{parentName:"h2",href:"#redirect",target:null,rel:null})," Redirect"),(0,s.kt)("p",null,"Another common method is simply redirecting to the home page of the site (or a different location)."),(0,s.kt)("h2",{id:"-request-timeoutsocket-hangup"},(0,s.kt)("a",{parentName:"h2",href:"#request-timeout",target:null,rel:null})," Request timeout/Socket hangup"),(0,s.kt)("p",null,"This is the cheapest defense mechanism where the website won't even respond to the request. Dealing with timeouts in a scraper can be challenging, because you have to differentiate them from regular network problems."),(0,s.kt)("h2",{id:"-custom-status-code-or-message"},(0,s.kt)("a",{parentName:"h2",href:"#custom-status-code",target:null,rel:null})," Custom status code or message"),(0,s.kt)("p",null,"Similar to getting an ",(0,s.kt)("strong",{parentName:"p"},"Access denied")," page, but some sites send along specific status codes (eg. ",(0,s.kt)("strong",{parentName:"p"},"503"),") and messages explaining what was wrong with the request."),(0,s.kt)("h2",{id:"-empty-results"},(0,s.kt)("a",{parentName:"h2",href:"#empty-results",target:null,rel:null})," Empty results"),(0,s.kt)("p",null,'The website responds "normally," but pretends to not find any results. This requires manual testing to recognize the pattern.'),(0,s.kt)("h2",{id:"-fake-results"},(0,s.kt)("a",{parentName:"h2",href:"#fake-results",target:null,rel:null})," Fake results"),(0,s.kt)("p",null,"The website responds with data, but the data is totally fake, which is very difficult to recognize and requires extensive manual testing. Luckily, this type of response is not all too common."),(0,s.kt)("h2",{id:"-next-up"},(0,s.kt)("a",{parentName:"h2",href:"#next",target:null,rel:null})," Next up"),(0,s.kt)("p",null,"In the ",(0,s.kt)("a",{parentName:"p",href:"/academy/anti-scraping/techniques/rate-limiting",target:null,rel:null},"first lesson")," of this course, you'll be learning about ",(0,s.kt)("strong",{parentName:"p"},"rate limiting"),", which is a technique used to prevent a large amount of requests from being sent from one user."))}h.isMDXComponent=!0}}]);