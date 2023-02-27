"use strict";(self.webpackChunkapify_docs_v2=self.webpackChunkapify_docs_v2||[]).push([[2254],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>h});var r=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,i=e.originalType,c=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),d=u(n),h=s,m=d["".concat(c,".").concat(h)]||d[h]||p[h]||i;return n?r.createElement(m,a(a({ref:t},l),{},{components:n})):r.createElement(m,a({ref:t},l))}));function h(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var i=n.length,a=new Array(i);a[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:s,a[1]=o;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},74348:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>o,metadata:()=>u,toc:()=>p});var r=n(87462),s=n(63366),i=(n(67294),n(3905)),a=["components"],o={title:"Anti-scraping techniques",description:"Understand the various common (and obscure) anti-scraping techniques used by websites to prevent bots from accessing their content.",sidebar_position:3.1,slug:"/anti-scraping/techniques"},c="Anti-scraping techniques",u={unversionedId:"webscraping/anti_scraping/techniques/index",id:"webscraping/anti_scraping/techniques/index",title:"Anti-scraping techniques",description:"Understand the various common (and obscure) anti-scraping techniques used by websites to prevent bots from accessing their content.",source:"@site/sources/academy/webscraping/anti_scraping/techniques/index.md",sourceDirName:"webscraping/anti_scraping/techniques",slug:"/anti-scraping/techniques",permalink:"/academy/anti-scraping/techniques",draft:!1,editUrl:"https://github.com/apify/apify-docs-v2/edit/master/sources/academy/webscraping/anti_scraping/techniques/index.md",tags:[],version:"current",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1677522857,formattedLastUpdatedAt:"Feb 27, 2023",sidebarPosition:3.1,frontMatter:{title:"Anti-scraping techniques",description:"Understand the various common (and obscure) anti-scraping techniques used by websites to prevent bots from accessing their content.",sidebar_position:3.1,slug:"/anti-scraping/techniques"},sidebar:"academy",previous:{title:"Anti-scraping protections",permalink:"/academy/anti-scraping"},next:{title:"Rate-limiting",permalink:"/academy/anti-scraping/techniques/rate-limiting"}},l={},p=[{value:"&quot;Access denied&quot; page",id:"access-denied",level:2},{value:"Captcha page",id:"captcha",level:2},{value:"Redirect",id:"redirect",level:2},{value:"Request timeout/Socket hangup",id:"request-timeout",level:2},{value:"Custom status code or message",id:"custom-status-code",level:2},{value:"Empty results",id:"empty-results",level:2},{value:"Fake results",id:"fake-results",level:2},{value:"Next up",id:"next",level:2}],d={toc:p};function h(e){var t=e.components,n=(0,s.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"anti-scraping-techniques"},"Anti-scraping techniques"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Understand the various common (and obscure) anti-scraping techniques used by websites to prevent bots from accessing their content.")),(0,i.kt)("hr",null),(0,i.kt)("p",null,"In this section, we'll be discussing some of the most common (as well as some obscure) anti-scraping techniques used by websites to detect and block/limit bots from accessing their content."),(0,i.kt)("p",null,"When a scraper is detected, a website can respond in a variety of ways:"),(0,i.kt)("h2",{id:"access-denied"},'"Access denied" page'),(0,i.kt)("p",null,"This is a complete block which usually has a response status code of ",(0,i.kt)("strong",{parentName:"p"},"403"),". Usually, you'll hit an ",(0,i.kt)("strong",{parentName:"p"},"Access denied")," page if you have bad IP address or the website is restricted in the country of the IP address."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"For a better understanding of what all the HTTP status codes mean, we recommend checking out ",(0,i.kt)("a",{parentName:"p",href:"https://http.cat/",target:"_blank",rel:"noopener"},"HTTP Cat")," which provides a highly professional description for each status code.")),(0,i.kt)("h2",{id:"captcha"},"Captcha page"),(0,i.kt)("p",null,"Probably the most common blocking method. The website gives you a chance to prove that you are not a bot by presenting you with a captcha. We'll be covering captchas within this course."),(0,i.kt)("h2",{id:"redirect"},"Redirect"),(0,i.kt)("p",null,"Another common method is simply redirecting to the home page of the site (or a different location)."),(0,i.kt)("h2",{id:"request-timeout"},"Request timeout/Socket hangup"),(0,i.kt)("p",null,"This is the cheapest defense mechanism where the website won't even respond to the request. Dealing with timeouts in a scraper can be challenging, because you have to differentiate them from regular network problems."),(0,i.kt)("h2",{id:"custom-status-code"},"Custom status code or message"),(0,i.kt)("p",null,"Similar to getting an ",(0,i.kt)("strong",{parentName:"p"},"Access denied")," page, but some sites send along specific status codes (eg. ",(0,i.kt)("strong",{parentName:"p"},"503"),") and messages explaining what was wrong with the request."),(0,i.kt)("h2",{id:"empty-results"},"Empty results"),(0,i.kt)("p",null,'The website responds "normally," but pretends to not find any results. This requires manual testing to recognize the pattern.'),(0,i.kt)("h2",{id:"fake-results"},"Fake results"),(0,i.kt)("p",null,"The website responds with data, but the data is totally fake, which is very difficult to recognize and requires extensive manual testing. Luckily, this type of response is not all too common."),(0,i.kt)("h2",{id:"next"},"Next up"),(0,i.kt)("p",null,"In the ",(0,i.kt)("a",{parentName:"p",href:"/academy/anti-scraping/techniques/rate-limiting",target:null,rel:null},"first lesson")," of this course, you'll be learning about ",(0,i.kt)("strong",{parentName:"p"},"rate limiting"),", which is a technique used to prevent a large amount of requests from being sent from one user."))}h.isMDXComponent=!0}}]);