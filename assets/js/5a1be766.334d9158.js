"use strict";(self.webpackChunkapify_docs_v2=self.webpackChunkapify_docs_v2||[]).push([[7869],{3905:(e,t,a)=>{a.d(t,{Zo:()=>l,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),p=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},l=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),g=p(a),m=r,h=g["".concat(c,".").concat(m)]||g[m]||d[m]||i;return a?n.createElement(h,o(o({ref:t},l),{},{components:a})):n.createElement(h,o({ref:t},l))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=g;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},49689:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>m,frontMatter:()=>s,metadata:()=>p,toc:()=>d});var n=a(87462),r=a(63366),i=(a(67294),a(3905)),o=["components"],s={title:"Dynamic pages",description:"Understand what makes a page dynamic, and how a page being dynamic might change your approach when writing a scraper for it.",sidebar_position:8.3,slug:"/concepts/dynamic-pages"},c="Dynamic pages and single-page applications (SPAs)",p={unversionedId:"glossary/concepts/dynamic_pages",id:"glossary/concepts/dynamic_pages",title:"Dynamic pages",description:"Understand what makes a page dynamic, and how a page being dynamic might change your approach when writing a scraper for it.",source:"@site/sources/academy/glossary/concepts/dynamic_pages.md",sourceDirName:"glossary/concepts",slug:"/concepts/dynamic-pages",permalink:"/academy/concepts/dynamic-pages",draft:!1,tags:[],version:"current",lastUpdatedBy:"Jind\u0159ich B\xe4r",lastUpdatedAt:1673533984,formattedLastUpdatedAt:"Jan 12, 2023",sidebarPosition:8.3,frontMatter:{title:"Dynamic pages",description:"Understand what makes a page dynamic, and how a page being dynamic might change your approach when writing a scraper for it.",sidebar_position:8.3,slug:"/concepts/dynamic-pages"},sidebar:"academy",previous:{title:"HTTP cookies",permalink:"/academy/concepts/http-cookies"}},l={},d=[{value:"How page loading works",id:"about-page-loading",level:2},{value:"So, what is dynamic content?",id:"what-is-dynamic-content",level:2}],g={toc:d};function m(e){var t=e.components,a=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"dynamic-pages"},"Dynamic pages and single-page applications (SPAs)"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Understand what makes a page dynamic, and how a page being dynamic might change your approach when writing a scraper for it.")),(0,i.kt)("hr",null),(0,i.kt)("p",null,"In the modern web, single-page applications (SPAs) are becoming increasingly popular, especially due to JavaScript libraries like ",(0,i.kt)("a",{parentName:"p",href:"https://reactjs.org/",target:"_blank",rel:"noopener"},"React.js")," and ",(0,i.kt)("a",{parentName:"p",href:"https://vuejs.org/",target:"_blank",rel:"noopener"},"Vue.js")," pushing their development to the mainstream. Often times, single-page applications (and loads of non-SPAs too) have dynamic content."),(0,i.kt)("p",null,"As you progress in your scraping journey, you'll quickly realize that different websites load their content and populate their pages with data in different ways. Some pages are rendered entirely on the server, some retrieve the data dynamically, and some use a combination of both those methods."),(0,i.kt)("h2",{id:"about-page-loading"},"How page loading works"),(0,i.kt)("p",null,"There are three main events that occur during the process of loading a page, all of which have a designated corresponding name:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"DOMContentLoaded")," - The initial HTML document is loaded, which contains the HTML as it was rendered on the website's server. It also includes all of the JavaScript which will be run in the next step."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"load")," - The page's JavaScript is executed."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"networkidle")," - Network ",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest",target:"_blank",rel:"noopener"},"XHR/Fetch requests")," are sent and loaded, and data from these requests is populated onto the page. Many websites load essential data this way. These requests might be sent upon certain page events as well (not just the first load), such as scrolling or clicking.")),(0,i.kt)("p",null,"Now that we have a solid understanding of the different stages of page-loading, and the order they happen in, we can fully understand what a dynamic page is."),(0,i.kt)("h2",{id:"what-is-dynamic-content"},"So, what is dynamic content?"),(0,i.kt)("p",null,"Dynamic content is any content that is rendered ",(0,i.kt)("strong",{parentName:"p"},"after")," the ",(0,i.kt)("inlineCode",{parentName:"p"},"DOMContentLoaded")," event, which means any content loaded by JavaScript during the ",(0,i.kt)("inlineCode",{parentName:"p"},"load")," event, or after any network XHR/Fetch requests have been made."),(0,i.kt)("p",null,"Sometimes, it can be quite obvious when content is dynamically being rendered. For example, take a look at this gif:"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://blog.apify.com/content/images/2022/02/dynamicLoading-1--1--2.gif",alt:"Image"})),(0,i.kt)("p",null,"Here, it's very clear that new content is being generated. As we scroll down the Twitter feed, we can see the scroll bar jumping back up, signifying that more elements have been created using Javascript."),(0,i.kt)("p",null,"Other times, it's less obvious though. Content can appear to be static (non-dynamic) when it is not, or even sometimes the other way around."))}m.isMDXComponent=!0}}]);