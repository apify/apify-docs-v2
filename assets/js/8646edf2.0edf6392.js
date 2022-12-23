"use strict";(self.webpackChunkapify_docs_v2=self.webpackChunkapify_docs_v2||[]).push([[432],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>g});var n=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(o),h=r,g=u["".concat(l,".").concat(h)]||u[h]||d[h]||a;return o?n.createElement(g,i(i({ref:t},p),{},{components:o})):n.createElement(g,i({ref:t},p))}));function g(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<a;c++)i[c]=o[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}h.displayName="MDXCreateElement"},18667:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>u});var n=o(87462),r=o(63366),a=(o(67294),o(3905)),i=["components"],s={title:"Geolocation",description:"Learn about the geolocation techniques to determine where requests are coming from, and a bit about how to avoid being blocked based on geolocation.",sidebar_position:3,slug:"/anti-scraping/techniques/geolocation"},l="[](#geolocation) Geolocation",c={unversionedId:"anti_scraping/techniques/geolocation",id:"anti_scraping/techniques/geolocation",title:"Geolocation",description:"Learn about the geolocation techniques to determine where requests are coming from, and a bit about how to avoid being blocked based on geolocation.",source:"@site/sources/academy/anti_scraping/techniques/geolocation.md",sourceDirName:"anti_scraping/techniques",slug:"/anti-scraping/techniques/geolocation",permalink:"/academy/anti-scraping/techniques/geolocation",draft:!1,tags:[],version:"current",lastUpdatedBy:"Jind\u0159ich B\xe4r",lastUpdatedAt:1671803343,formattedLastUpdatedAt:"Dec 23, 2022",sidebarPosition:3,frontMatter:{title:"Geolocation",description:"Learn about the geolocation techniques to determine where requests are coming from, and a bit about how to avoid being blocked based on geolocation.",sidebar_position:3,slug:"/anti-scraping/techniques/geolocation"},sidebar:"defaultSidebar",previous:{title:"Fingerprinting",permalink:"/academy/anti-scraping/techniques/fingerprinting"},next:{title:"Firewalls",permalink:"/academy/anti-scraping/techniques/firewalls"}},p={},u=[{value:" Cookies &amp; headers",id:"-cookies--headers",level:2},{value:" IP address",id:"-ip-address",level:2},{value:" Override/emulate geolocation when using a browser-based scraper",id:"-overrideemulate-geolocation-when-using-a-browser-based-scraper",level:2}],d={toc:u};function h(e){var t=e.components,o=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"-geolocation"},(0,a.kt)("a",{parentName:"h1",href:"#geolocation",target:null,rel:null})," Geolocation"),(0,a.kt)("p",null,"Geolocation is yet another way websites can detect and block access or show limited data. Other than by using the ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API",target:"_blank",rel:"noopener"},"Geolocation API")," (which requires user permission in order to receive location data), there two main ways that websites geolocate a user (or bot) visiting it."),(0,a.kt)("h2",{id:"-cookies--headers"},(0,a.kt)("a",{parentName:"h2",href:"#cookies-headers",target:null,rel:null})," Cookies & headers"),(0,a.kt)("p",null,"Certain websites might use certain location-specific/language-specific ",(0,a.kt)("a",{parentName:"p",href:"/academy/concepts/http-headers",target:null,rel:null},"headers")," to geolocate a user. Some examples of these headers are ",(0,a.kt)("inlineCode",{parentName:"p"},"Accept-Language")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"CloudFront-Viewer-Country")," (which is a custom HTTP header from ",(0,a.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/using-cloudfront-headers.html",target:"_blank",rel:"noopener"},"CloudFront"),")."),(0,a.kt)("p",null,"On targets which are just utilizing cookies and headers to identify the location from which a request is coming from, it is pretty straightforward to make requests which appear they are coming from somewhere else."),(0,a.kt)("h2",{id:"-ip-address"},(0,a.kt)("a",{parentName:"h2",href:"#ip-address",target:null,rel:null})," IP address"),(0,a.kt)("p",null,"The oldest (and still most common) way of geolocating is based on the IP address used to make the request. Sometimes, country-specific sites block themselves from being accessed from any other country (some Chinese, Indian, Israeli, and Japanese websites do this)."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/academy/anti-scraping/mitigation/proxies",target:null,rel:null},"Proxies"),"."),(0,a.kt)("h2",{id:"-overrideemulate-geolocation-when-using-a-browser-based-scraper"},(0,a.kt)("a",{parentName:"h2",href:"#override-emulate-geolocation",target:null,rel:null})," Override/emulate geolocation when using a browser-based scraper"),(0,a.kt)("p",null,"When using ",(0,a.kt)("a",{parentName:"p",href:"https://pptr.dev/#?product=Puppeteer&show=api-pagesetgeolocationoptions",target:"_blank",rel:"noopener"},"Puppeteer"),", you can emulate the geolocation with the ",(0,a.kt)("inlineCode",{parentName:"p"},"page.setGeolocation()")," function."),(0,a.kt)("p",null,"In ",(0,a.kt)("a",{parentName:"p",href:"https://playwright.dev/docs/api/class-browsercontext#browsercontextsetgeolocationgeolocation",target:"_blank",rel:"noopener"},"Playwright"),", geolocation can be emulated by using ",(0,a.kt)("inlineCode",{parentName:"p"},"browserContext.setGeolocation()"),"."),(0,a.kt)("p",null,"Overriding browser geolocation should be used in tandem with a proper proxy corresponding to the emulated geolocation. You would still likely get blocked if you, for example, used a German proxy with the overridden location set to Japan."))}h.isMDXComponent=!0}}]);