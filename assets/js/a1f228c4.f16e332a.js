"use strict";(self.webpackChunkapify_docs_v2=self.webpackChunkapify_docs_v2||[]).push([[5649],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var o=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=o.createContext({}),d=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=d(e.components);return o.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=d(r),m=a,h=p["".concat(l,".").concat(m)]||p[m]||u[m]||n;return r?o.createElement(h,s(s({ref:t},c),{},{components:r})):o.createElement(h,s({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,s=new Array(n);s[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var d=2;d<n;d++)s[d]=r[d];return o.createElement.apply(null,s)}return o.createElement.apply(null,r)}p.displayName="MDXCreateElement"},53629:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>d,toc:()=>u});var o=r(87462),a=r(63366),n=(r(67294),r(3905)),s=["components"],i={title:"ModHeader",description:"Discover a super useful Chrome extension called ModHeader, which allows you to modify your browser's HTTP request headers.",sidebar_position:9.5,slug:"/tools/modheader"},l="What is ModHeader?",d={unversionedId:"glossary/tools/modheader",id:"glossary/tools/modheader",title:"ModHeader",description:"Discover a super useful Chrome extension called ModHeader, which allows you to modify your browser's HTTP request headers.",source:"@site/sources/academy/glossary/tools/modheader.md",sourceDirName:"glossary/tools",slug:"/tools/modheader",permalink:"/academy/tools/modheader",draft:!1,editUrl:"https://github.com/apify/apify-docs-v2/edit/master/sources/academy/glossary/tools/modheader.md",tags:[],version:"current",lastUpdatedBy:"Luk\xe1\u0161 K\u0159ivka",lastUpdatedAt:1676882966,formattedLastUpdatedAt:"Feb 20, 2023",sidebarPosition:9.5,frontMatter:{title:"ModHeader",description:"Discover a super useful Chrome extension called ModHeader, which allows you to modify your browser's HTTP request headers.",sidebar_position:9.5,slug:"/tools/modheader"},sidebar:"academy",previous:{title:"Proxyman",permalink:"/academy/tools/proxyman"},next:{title:"SwitchyOmega",permalink:"/academy/tools/switchyomega"}},c={},u=[{value:"The ModHeader interface",id:"interface",level:2},{value:"Use cases",id:"use-cases",level:2}],p={toc:u};function m(e){var t=e.components,i=(0,a.Z)(e,s);return(0,n.kt)("wrapper",(0,o.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"what-is-modheader"},"What is ModHeader?"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Discover a super useful Chrome extension called ModHeader, which allows you to modify your browser's HTTP request headers.")),(0,n.kt)("hr",null),(0,n.kt)("p",null,"If you read about ",(0,n.kt)("a",{parentName:"p",href:"/academy/tools/postman",target:null,rel:null},"Postman"),", you might remember that you can use it to modify request headers before sending a request. This is great, but the main problem is that Postman can only make static requests - meaning, it is unable to load JavaScript or any ",(0,n.kt)("a",{parentName:"p",href:"/academy/concepts/dynamic-pages",target:null,rel:null},"dynamic content"),"."),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://chrome.google.com/webstore/detail/modheader/idgpnmonknjnojddfkpgkljpfnnfcklj?hl=en",target:"_blank",rel:"noopener"},"ModHeader")," is a Chrome extension which can be used to modify the HTTP headers of the requests you make with your browser. This means that, for example, if your scraper using a headless browser Puppeteer is being blocked due to an improper ",(0,n.kt)("strong",{parentName:"p"},"User-Agent")," header, you can use ModHeader to test the target website and quickly solve the issue."),(0,n.kt)("h2",{id:"interface"},"The ModHeader interface"),(0,n.kt)("p",null,"After you install the ModHeader extension, you should see in pinned in Chrome's task bar. When you click it, you'll see an interface like this pop up:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Modheader&#39;s simple interface",src:r(20089).Z,width:"1248",height:"926"})),(0,n.kt)("p",null,"Here, you can add headers, remove headers, and even save multiple collections of headers that you can easily toggle between (which are called ",(0,n.kt)("strong",{parentName:"p"},"Profiles")," within the extension itself)."),(0,n.kt)("h2",{id:"use-cases"},"Use cases"),(0,n.kt)("p",null,"When scraping dynamic websites, sometimes some specific headers are required to access certain pages. The most popularly required headers are generally ",(0,n.kt)("inlineCode",{parentName:"p"},"User-Agent")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"referer"),". ModHeader, and other tools like it, make it easy to test requests to these websites right in your browser before writing logic for your scraper."))}m.isMDXComponent=!0},20089:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/modheader-125d6608880f265e951178fb222551cf.webp"}}]);