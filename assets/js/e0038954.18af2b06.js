"use strict";(self.webpackChunkapify_docs_v2=self.webpackChunkapify_docs_v2||[]).push([[6338],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=o.createContext({}),l=function(e){var t=o.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(r),m=n,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||a;return r?o.createElement(f,i(i({ref:t},p),{},{components:r})):o.createElement(f,i({ref:t},p))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:n,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},77224:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>m,frontMatter:()=>s,metadata:()=>l,toc:()=>u});var o=r(87462),n=r(63366),a=(r(67294),r(3905)),i=["components"],s={title:"HTTP cookies",description:"Learn a bit about what cookies are, and how they are utilized in scrapers to appear logged-in, view specific data, or even avoid blocking.",sidebar_position:8.2,slug:"/concepts/http-cookies"},c="[](#cookies) HTTP cookies",l={unversionedId:"concepts/http_cookies",id:"concepts/http_cookies",title:"HTTP cookies",description:"Learn a bit about what cookies are, and how they are utilized in scrapers to appear logged-in, view specific data, or even avoid blocking.",source:"@site/sources/academy/concepts/http_cookies.md",sourceDirName:"concepts",slug:"/concepts/http-cookies",permalink:"/academy/concepts/http-cookies",draft:!1,tags:[],version:"current",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1671632368,formattedLastUpdatedAt:"Dec 21, 2022",sidebarPosition:8.2,frontMatter:{title:"HTTP cookies",description:"Learn a bit about what cookies are, and how they are utilized in scrapers to appear logged-in, view specific data, or even avoid blocking.",sidebar_position:8.2,slug:"/concepts/http-cookies"},sidebar:"defaultSidebar",previous:{title:"HTTP headers",permalink:"/academy/concepts/http-headers"},next:{title:"Dynamic pages",permalink:"/academy/concepts/dynamic-pages"}},p={},u=[{value:" Most common uses of cookies in crawlers",id:"-most-common-uses-of-cookies-in-crawlers",level:2}],d={toc:u};function m(e){var t=e.components,r=(0,n.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"-http-cookies"},(0,a.kt)("a",{parentName:"h1",href:"#cookies",target:null,rel:null})," HTTP cookies"),(0,a.kt)("p",null,"HTTP cookies are small pieces of data sent by the server to the user's web browser, which are typically stored by the browser and used to send later requests to the same server. Cookies are usually represented as a string (if used together with a plain HTTP request) and sent with the request under the ",(0,a.kt)("strong",{parentName:"p"},"Cookie")," ",(0,a.kt)("a",{parentName:"p",href:"/academy/concepts/http-headers",target:null,rel:null},"header"),"."),(0,a.kt)("h2",{id:"-most-common-uses-of-cookies-in-crawlers"},(0,a.kt)("a",{parentName:"h2",href:"#uses-in-crawlers",target:null,rel:null})," Most common uses of cookies in crawlers"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"To make the website show data to you as if you were a logged-in user."),(0,a.kt)("li",{parentName:"ol"},"To make the website show location-specific data (works for websites where you could set a zip code or country directly on the page, but unfortunately doesn't work for some location-based ads)."),(0,a.kt)("li",{parentName:"ol"},"To make the website less suspicious of the crawler and let the crawler's traffic blend in with regular user traffic.")),(0,a.kt)("p",null,"For local testing, we recommend using the ",(0,a.kt)("a",{parentName:"p",href:"https://chrome.google.com/webstore/detail/editthiscookie/fngmhnnpilhplaeedifhccceomclgfbg?hl=en",target:"_blank",rel:"noopener"},(0,a.kt)("strong",{parentName:"a"},"EditThisCookie"))," Chrome extension."))}m.isMDXComponent=!0}}]);