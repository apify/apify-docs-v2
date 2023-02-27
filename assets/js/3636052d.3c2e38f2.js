"use strict";(self.webpackChunkapify_docs_v2=self.webpackChunkapify_docs_v2||[]).push([[4604],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),m=u(n),d=a,f=m["".concat(p,".").concat(d)]||m[d]||c[d]||o;return n?r.createElement(f,s(s({ref:t},l),{},{components:n})):r.createElement(f,s({ref:t},l))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var u=2;u<o;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},79565:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>d,frontMatter:()=>i,metadata:()=>u,toc:()=>c});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),s=["components"],i={title:"Submitting forms on .ASPX pages",description:"How to handle pages created with ASP.NET in Web Scraper.",sidebar_position:15.4,slug:"/node-js/submitting-forms-on-aspx-pages"},p=void 0,u={unversionedId:"tutorials/node_js/submitting_forms_on_aspx_pages",id:"tutorials/node_js/submitting_forms_on_aspx_pages",title:"Submitting forms on .ASPX pages",description:"How to handle pages created with ASP.NET in Web Scraper.",source:"@site/sources/academy/tutorials/node_js/submitting_forms_on_aspx_pages.md",sourceDirName:"tutorials/node_js",slug:"/node-js/submitting-forms-on-aspx-pages",permalink:"/academy/node-js/submitting-forms-on-aspx-pages",draft:!1,editUrl:"https://github.com/apify/apify-docs-v2/edit/master/sources/academy/tutorials/node_js/submitting_forms_on_aspx_pages.md",tags:[],version:"current",lastUpdatedBy:"Marcus Papin",lastUpdatedAt:1677519978,formattedLastUpdatedAt:"Feb 27, 2023",sidebarPosition:15.4,frontMatter:{title:"Submitting forms on .ASPX pages",description:"How to handle pages created with ASP.NET in Web Scraper.",sidebar_position:15.4,slug:"/node-js/submitting-forms-on-aspx-pages"},sidebar:"academy",previous:{title:"When to use Puppeteer Scraper",permalink:"/academy/node-js/when-to-use-puppeteer-scraper"},next:{title:"Submitting a form with file attachment",permalink:"/academy/node-js/submitting-form-with-file-attachment"}},l={},c=[],m={toc:c};function d(e){var t=e.components,n=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Apify users sometimes need to submit a form on pages created with ASP.NET (URL typically ends with .aspx). These pages have a different approach for how they submit forms and navigate through pages."),(0,o.kt)("p",null,"This tutorial shows you how to handle these kinds of pages. This approach is based on a ",(0,o.kt)("a",{parentName:"p",href:"http://toddhayton.com/2015/05/04/scraping-aspnet-pages-with-ajax-pagination/",target:"_blank",rel:"noopener"},"blog post")," from Todd Hayton, where he explains how crawlers for ASP.NET pages should work."),(0,o.kt)("p",null,"First of all, you need to copy&paste this function to your ",(0,o.kt)("a",{parentName:"p",href:"https://apify.com/apify/web-scraper",target:"_blank",rel:"noopener"},"Web Scraper")," ",(0,o.kt)("em",{parentName:"p"},"Page function"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'const enqueueAspxForm = async function(request, formSelector, submitButtonSelector, async) {\n\xa0 \xa0 request.payload = $(formSelector).serialize();\n\xa0 \xa0 if ($(submitButtonSelector).length) {\n\xa0 \xa0 \xa0 \xa0 request.payload += decodeURIComponent("&"+$(submitButtonSelector).attr("name") + "=" + $(submitButtonSelector).attr("value"));\n\xa0 \xa0 }\n\xa0 \xa0 request.payload += decodeURIComponent("&__ASYNCPOST="+async.toString());\n\xa0 \xa0 request.method = "POST";\n\xa0 \xa0 request.uniqueKey = Math.random();\n\xa0 \xa0 await context.enqueueRequest(request);\n\xa0 \xa0 return request;\n};\n')),(0,o.kt)("p",null,"The function has these parameters:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"request")," - the object that describes the next request"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"formSelector")," - selector for a form to be submitted e.g 'form",'[name="test"]',"'"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"submitButtonSelector")," - selector for a button for submit form e.g. '#nextPageButton'"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"async")," - if true, request returns only params not HTML content"),(0,o.kt)("p",null,"Then you can use it in your Page function as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'await enqueueAspxForm({\n\xa0 \xa0 \xa0 \xa0 url: "http://architectfinder.aia.org/frmSearch.aspx",\n\xa0 \xa0 \xa0 \xa0 userData: { label: "SEARCH-RESULT" }\n\xa0 \xa0 }, \'form[name="aspnetForm"]\', \'#ctl00_ContentPlaceHolder1_btnSearch\', false);\n')))}d.isMDXComponent=!0}}]);