"use strict";(self.webpackChunkapify_docs_v2=self.webpackChunkapify_docs_v2||[]).push([[6459],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>u});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),c=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),f=c(a),u=r,m=f["".concat(p,".").concat(u)]||f[u]||h[u]||i;return a?n.createElement(m,o(o({ref:t},s),{},{components:a})):n.createElement(m,o({ref:t},s))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=f;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}f.displayName="MDXCreateElement"},54121:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>u,frontMatter:()=>l,metadata:()=>c,toc:()=>h});var n=a(87462),r=a(63366),i=(a(67294),a(3905)),o=["components"],l={title:"IV - Apify API & client",description:"Gain an in-depth understanding of the two main ways of programmatically interacting with the Apify platform - through the API, and through a client.",sidebar_position:6.4,slug:"/expert-scraping-with-apify/apify-api-and-client"},p="Apify API & client",c={unversionedId:"platform/expert_scraping_with_apify/apify_api_and_client",id:"platform/expert_scraping_with_apify/apify_api_and_client",title:"IV - Apify API & client",description:"Gain an in-depth understanding of the two main ways of programmatically interacting with the Apify platform - through the API, and through a client.",source:"@site/sources/academy/platform/expert_scraping_with_apify/apify_api_and_client.md",sourceDirName:"platform/expert_scraping_with_apify",slug:"/expert-scraping-with-apify/apify-api-and-client",permalink:"/academy/expert-scraping-with-apify/apify-api-and-client",draft:!1,tags:[],version:"current",lastUpdatedBy:"Jind\u0159ich B\xe4r",lastUpdatedAt:1673533984,formattedLastUpdatedAt:"Jan 12, 2023",sidebarPosition:6.4,frontMatter:{title:"IV - Apify API & client",description:"Gain an in-depth understanding of the two main ways of programmatically interacting with the Apify platform - through the API, and through a client.",sidebar_position:6.4,slug:"/expert-scraping-with-apify/apify-api-and-client"},sidebar:"academy",previous:{title:"III - Tasks & storage",permalink:"/academy/expert-scraping-with-apify/tasks-and-storage"},next:{title:"V - Migrations & maintaining state",permalink:"/academy/expert-scraping-with-apify/migrations-maintaining-state"}},s={},h=[{value:"Learning \ud83e\udde0",id:"learning",level:2},{value:"Knowledge check \ud83d\udcdd",id:"quiz",level:2},{value:"Our task",id:"our-task",level:2},{value:"Next up",id:"next",level:2}],f={toc:h};function u(e){var t=e.components,a=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"api-and-client"},"Apify API & client"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Gain an in-depth understanding of the two main ways of programmatically interacting with the Apify platform - through the API, and through a client.")),(0,i.kt)("hr",null),(0,i.kt)("p",null,"There are two main ways to programmatically interact with the Apify platform: by directly using ",(0,i.kt)("a",{parentName:"p",href:"https://docs.apify.com/api/v2",target:"_blank",rel:"noopener"},"Apify's RESTful API"),", or by using the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.apify.com/apify-client-js",target:"_blank",rel:"noopener"},"JavaScript")," and ",(0,i.kt)("a",{parentName:"p",href:"https://docs.apify.com/apify-client-python",target:"_blank",rel:"noopener"},"Python")," API clients. In the next two lessons, we'll be focusing on the first two."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Apify's API and JavaScript API client allow us to do anything a regular user can do when interacting with the platform's web interface, only programmatically.")),(0,i.kt)("h2",{id:"learning"},"Learning \ud83e\udde0"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Scroll through the ",(0,i.kt)("a",{parentName:"li",href:"https://docs.apify.com/api/v2",target:"_blank",rel:"noopener"},"Apify API docs")," (there's a whole lot there, so you're not expected to memorize everything)."),(0,i.kt)("li",{parentName:"ul"},"Read about the Apify client in ",(0,i.kt)("a",{parentName:"li",href:"https://docs.apify.com/apify-client-js",target:"_blank",rel:"noopener"},"Apify's docs"),". It can also be seen on ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apify/apify-client-js",target:"_blank",rel:"noopener"},"Github")," and ",(0,i.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/apify-client",target:"_blank",rel:"noopener"},"NPM"),"."),(0,i.kt)("li",{parentName:"ul"},"Learn about the ",(0,i.kt)("a",{parentName:"li",href:"https://sdk.apify.com/docs/api/apify#apifynewclientoptions",target:null,rel:null},(0,i.kt)("inlineCode",{parentName:"a"},"Actor.newClient()"))," function in the Apify SDK."),(0,i.kt)("li",{parentName:"ul"},"Skim through ",(0,i.kt)("a",{parentName:"li",href:"https://help.apify.com/en/articles/2868670-how-to-pass-data-from-web-scraper-to-another-actor",target:"_blank",rel:"noopener"},"this article")," about API integration (this article is old; however, still relevant).")),(0,i.kt)("h2",{id:"quiz"},"Knowledge check \ud83d\udcdd"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"What is the relationship between the Apify API and Apify client? Are there any significant differences?"),(0,i.kt)("li",{parentName:"ol"},"How do you pass input when running actor or task via API?"),(0,i.kt)("li",{parentName:"ol"},"Do you need to install the ",(0,i.kt)("inlineCode",{parentName:"li"},"apify-client")," NPM package when already using the ",(0,i.kt)("inlineCode",{parentName:"li"},"apify")," package?")),(0,i.kt)("h2",{id:"our-task"},"Our task"),(0,i.kt)("p",null,"In the previous lesson, we created a ",(0,i.kt)("strong",{parentName:"p"},"task")," for the Amazon actor we build in the first two lessons of this course. Now, we'll be creating another new actor, which will have two jobs:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Programmatically call the Amazon actor."),(0,i.kt)("li",{parentName:"ol"},"Export its results into CSV format under a new key called ",(0,i.kt)("strong",{parentName:"li"},"OUTPUT.csv")," in the default key-value store.")),(0,i.kt)("p",null,"Though it's a bit unintuitive, this is a perfect activity for learning how to use both the Apify API and the Apify JavaScript client."),(0,i.kt)("p",null,"The new actor should take the following input values, which be mapped to parameters in the API calls:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    // How much memory to allocate to the Amazon actor\n    // Must be a power of 2\n    "memory": 4096,\n\n    // Whether to use the JavaScript client to make the\n    // call, or to use the API\n    "useClient": false,\n\n    // The fields in each item to return back. All other\n    // fields should be ommitted\n    "fields": ["title", "itemUrl", "offer"],\n\n    // The maximum number of items to return back\n    "maxItems": 10\n}\n')),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/academy/expert-scraping-with-apify/solutions/using-api-and-client",target:null,rel:null},(0,i.kt)("strong",{parentName:"a"},"Solution"))),(0,i.kt)("h2",{id:"next"},"Next up"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/academy/expert-scraping-with-apify/migrations-maintaining-state",target:null,rel:null},"Lesson VI")," will teach us everything we need to know about migrations and how to handle them properly to avoid losing any state; therefore, increasing the reliability of our ",(0,i.kt)("strong",{parentName:"p"},"demo-actor")," Amazon scraper."))}u.isMDXComponent=!0}}]);