"use strict";(self.webpackChunkapify_docs_v2=self.webpackChunkapify_docs_v2||[]).push([[6500],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var a=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=a.createContext({}),s=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(r),m=o,d=u["".concat(p,".").concat(m)]||u[m]||f[m]||n;return r?a.createElement(d,i(i({ref:t},c),{},{components:r})):a.createElement(d,i({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,i=new Array(n);i[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<n;s++)i[s]=r[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},70596:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>f});var a=r(87462),o=r(63366),n=(r(67294),r(3905)),i=["components"],l={title:"Introduction to Apify Platform",description:"Learn all about the Apify platform, all of the tools it offers, and how it can improve your overall development experience.",sidebar_position:7,category:"apify platform",slug:"/apify-platform"},p="Introduction to Apify Platform",s={unversionedId:"platform/apify_platform",id:"platform/apify_platform",title:"Introduction to Apify Platform",description:"Learn all about the Apify platform, all of the tools it offers, and how it can improve your overall development experience.",source:"@site/sources/academy/platform/apify_platform.md",sourceDirName:"platform",slug:"/apify-platform",permalink:"/academy/apify-platform",draft:!1,editUrl:"https://github.com/apify/apify-docs-v2/edit/master/sources/academy/platform/apify_platform.md",tags:[],version:"current",lastUpdatedBy:"Marcus Papin",lastUpdatedAt:1677519978,formattedLastUpdatedAt:"Feb 27, 2023",sidebarPosition:7,frontMatter:{title:"Introduction to Apify Platform",description:"Learn all about the Apify platform, all of the tools it offers, and how it can improve your overall development experience.",sidebar_position:7,category:"apify platform",slug:"/apify-platform"},sidebar:"academy",previous:{title:"Tips and tricks for robustness",permalink:"/academy/advanced-web-scraping/tips-and-tricks-robustness"},next:{title:"Getting started",permalink:"/academy/getting-started"}},c={},f=[{value:"Category outline",id:"this-category",level:2},{value:"First up",id:"first",level:2}],u={toc:f};function m(e){var t=e.components,r=(0,o.Z)(e,i);return(0,n.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"about-the-platform"},"Introduction to Apify Platform"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Learn all about the Apify platform, all of the tools it offers, and how it can improve your overall development experience.")),(0,n.kt)("hr",null),(0,n.kt)("p",null,"The ",(0,n.kt)("a",{parentName:"p",href:"https://apify.com",target:"_blank",rel:"noopener"},"Apify platform")," was built to serve large-scale and high-performance web scraping and automation needs. It provides easy access to compute instances (",(0,n.kt)("a",{parentName:"p",href:"/academy/getting-started/actors",target:null,rel:null},"actors"),"), convenient request and result storages, proxies, scheduling, webhooks and more - all accessible through the ",(0,n.kt)("strong",{parentName:"p"},"Console")," web interface, ",(0,n.kt)("a",{parentName:"p",href:"/api/v2",target:null,rel:null},"Apify's API"),", or our ",(0,n.kt)("a",{parentName:"p",href:"https://docs.apify.com/api/client/js",target:"_blank",rel:"noopener"},"JavaScript")," and ",(0,n.kt)("a",{parentName:"p",href:"https://docs.apify.com/api/client/python",target:"_blank",rel:"noopener"},"Python")," API clients."),(0,n.kt)("h2",{id:"this-category"},"Category outline"),(0,n.kt)("p",null,"In this category, you'll learn how to become an Apify platform developer from the ground up. From creating your first account, to developing actors, this is your one-stop-shop for understanding how the platform works, and how to work with it."),(0,n.kt)("h2",{id:"first"},"First up"),(0,n.kt)("p",null,"We'll start off this category light, by showing you how to create an Apify account and get everything ready for development with the platform. ",(0,n.kt)("a",{parentName:"p",href:"/academy/getting-started",target:null,rel:null},"Let's go!")))}m.isMDXComponent=!0}}]);