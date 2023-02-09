"use strict";(self.webpackChunkapify_docs_v2=self.webpackChunkapify_docs_v2||[]).push([[9126],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>f});var i=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,i,r=function(t,e){if(null==t)return{};var n,i,r={},a=Object.keys(t);for(i=0;i<a.length;i++)n=a[i],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(i=0;i<a.length;i++)n=a[i],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var l=i.createContext({}),m=function(t){var e=i.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},c=function(t){var e=m(t.components);return i.createElement(l.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return i.createElement(i.Fragment,{},e)}},p=i.forwardRef((function(t,e){var n=t.components,r=t.mdxType,a=t.originalType,l=t.parentName,c=s(t,["components","mdxType","originalType","parentName"]),p=m(n),f=r,d=p["".concat(l,".").concat(f)]||p[f]||u[f]||a;return n?i.createElement(d,o(o({ref:e},c),{},{components:n})):i.createElement(d,o({ref:e},c))}));function f(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var a=n.length,o=new Array(a);o[0]=p;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s.mdxType="string"==typeof t?t:r,o[1]=s;for(var m=2;m<a;m++)o[m]=n[m];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},68654:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>l,default:()=>f,frontMatter:()=>s,metadata:()=>m,toc:()=>u});var i=n(87462),r=n(63366),a=(n(67294),n(3905)),o=["components"],s={title:"Submitting a form with file attachment",description:"How to submit a form with attachment using request-promise.",sidebar_position:15.5,slug:"/node-js/submitting-form-with-file-attachment"},l=void 0,m={unversionedId:"tutorials/node_js/submitting_form_with_file_attachment",id:"tutorials/node_js/submitting_form_with_file_attachment",title:"Submitting a form with file attachment",description:"How to submit a form with attachment using request-promise.",source:"@site/sources/academy/tutorials/node_js/submitting_form_with_file_attachment.md",sourceDirName:"tutorials/node_js",slug:"/node-js/submitting-form-with-file-attachment",permalink:"/academy/node-js/submitting-form-with-file-attachment",draft:!1,editUrl:"https://github.com/apify/apify-docs-v2/edit/master/sources/academy/tutorials/node_js/submitting_form_with_file_attachment.md",tags:[],version:"current",lastUpdatedBy:"Jind\u0159ich B\xe4r",lastUpdatedAt:1675952046,formattedLastUpdatedAt:"Feb 9, 2023",sidebarPosition:15.5,frontMatter:{title:"Submitting a form with file attachment",description:"How to submit a form with attachment using request-promise.",sidebar_position:15.5,slug:"/node-js/submitting-form-with-file-attachment"},sidebar:"academy",previous:{title:"Submitting forms on .ASPX pages",permalink:"/academy/node-js/submitting-forms-on-aspx-pages"},next:{title:"Processing the same page multiple times with different setups in Web Scraper",permalink:"/academy/node-js/processing-multiple-pages-web-scraper"}},c={},u=[],p={toc:u};function f(t){var e=t.components,n=(0,r.Z)(t,o);return(0,a.kt)("wrapper",(0,i.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"When doing web automation with Apify, it can sometimes be necessary to submit an HTML form with file attachment. This article will cover a situation where the file is publicly accessible (e.g. hosted somewhere) and will use an Apify actor. If it is not possible to use request-promise, it might be necessary to use ",(0,a.kt)("a",{parentName:"p",href:"http://kb.apify.com/actor/submitting-a-form-with-file-attachment-using-puppeteer",target:"_blank",rel:"noopener"},"Puppeteer.")),(0,a.kt)("h1",{id:"downloading-the-file-to-memory"},"Downloading the file to memory"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"How to submit a form with attachment using request-promise.")),(0,a.kt)("hr",null),(0,a.kt)("p",null,"After creating a new actor, the first thing to do is download the file. We can do that using the request-promise module, so make sure it is included."),(0,a.kt)("p",null,"const request = require('request-promise');"),(0,a.kt)("p",null,"The actual downloading is going to be slightly different for text and binary files. For a text file, it can simply be done like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const fileData = await request('https://some-site.com/file.txt');\n\nFor a binary file, we need to provide additional parameters so as not to interpret it as text:\n\nconst fileData = await request({\n\xa0 \xa0 uri: 'https://some-site.com/file.pdf',\n\xa0 \xa0 encoding: null\n});\n")),(0,a.kt)("p",null,"In this case, fileData will be a Buffer instead of String."),(0,a.kt)("h1",{id:"submitting-the-form"},"Submitting the form"),(0,a.kt)("p",null,"When the file is ready, we can submit the form as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"await request({\n\xa0 \xa0 uri: 'https://other-site.com/submit-form.php',\n\xa0 \xa0 method: 'POST',\n\nformData: {\n\xa0 \xa0 \xa0 \xa0 // set any form values\n\xa0 \xa0 \xa0 \xa0 name: 'John',\n\xa0 \xa0 \xa0 \xa0 surname: 'Doe',\n\xa0 \xa0 \xa0 \xa0 email: 'john.doe@mail.com',\n\n// add the attachment\n\xa0 \xa0 \xa0 \xa0 attachment: {\n\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 value: fileData,\n\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 options: {\n\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 filename: 'file.pdf',\n\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 contentType: 'application/pdf'\n\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 }\n\xa0 \xa0 \xa0 \xa0 }\n\xa0 \xa0 }\n});\n")),(0,a.kt)("p",null,"The header Content-Type: multipart/form-data will be set automatically."))}f.isMDXComponent=!0}}]);