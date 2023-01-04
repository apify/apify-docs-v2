"use strict";(self.webpackChunkapify_docs_v2=self.webpackChunkapify_docs_v2||[]).push([[39],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),p=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(a),f=n,h=c["".concat(l,".").concat(f)]||c[f]||d[f]||o;return a?r.createElement(h,s(s({ref:t},u),{},{components:a})):r.createElement(h,s({ref:t},u))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,s=new Array(o);s[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[c]="string"==typeof e?e:n,s[1]=i;for(var p=2;p<o;p++)s[p]=a[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}f.displayName="MDXCreateElement"},77073:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>f,frontMatter:()=>i,metadata:()=>p,toc:()=>c});var r=a(87462),n=a(63366),o=(a(67294),a(3905)),s=["components"],i={title:"III - Tasks & storage",description:"Understand how to save the configurations for actors with actor tasks. Also, learn about storage and the different types Apify offers.",sidebar_position:6.3,slug:"/expert-scraping-with-apify/tasks-and-storage"},l="[](#tasks-and-storage) Tasks & storage",p={unversionedId:"expert_scraping_with_apify/tasks_and_storage",id:"expert_scraping_with_apify/tasks_and_storage",title:"III - Tasks & storage",description:"Understand how to save the configurations for actors with actor tasks. Also, learn about storage and the different types Apify offers.",source:"@site/sources/academy/expert_scraping_with_apify/tasks_and_storage.md",sourceDirName:"expert_scraping_with_apify",slug:"/expert-scraping-with-apify/tasks-and-storage",permalink:"/academy/expert-scraping-with-apify/tasks-and-storage",draft:!1,tags:[],version:"current",lastUpdatedBy:"Dan Nguyen",lastUpdatedAt:1672828422,formattedLastUpdatedAt:"Jan 4, 2023",sidebarPosition:6.3,frontMatter:{title:"III - Tasks & storage",description:"Understand how to save the configurations for actors with actor tasks. Also, learn about storage and the different types Apify offers.",sidebar_position:6.3,slug:"/expert-scraping-with-apify/tasks-and-storage"},sidebar:"defaultSidebar",previous:{title:"II - Managing source code",permalink:"/academy/expert-scraping-with-apify/managing-source-code"},next:{title:"IV - Apify API & client",permalink:"/academy/expert-scraping-with-apify/apify-api-and-client"}},u={},c=[{value:" Tasks",id:"-tasks",level:2},{value:" Storage",id:"-storage",level:2},{value:" Learning \ud83e\udde0",id:"-learning-",level:2},{value:" Knowledge check \ud83d\udcdd",id:"-knowledge-check-",level:2},{value:" Our task",id:"-our-task",level:2},{value:" Next up",id:"-next-up",level:2}],d={toc:c};function f(e){var t=e.components,a=(0,n.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"-tasks--storage"},(0,o.kt)("a",{parentName:"h1",href:"#tasks-and-storage",target:null,rel:null})," Tasks & storage"),(0,o.kt)("p",null,"Both of these are very different things; however, they are also tied together in many ways. ",(0,o.kt)("strong",{parentName:"p"},"Tasks")," run actors, actors return data, and data is stored in different types of ",(0,o.kt)("strong",{parentName:"p"},"Storages"),"."),(0,o.kt)("h2",{id:"-tasks"},(0,o.kt)("a",{parentName:"h2",href:"#tasks",target:null,rel:null})," Tasks"),(0,o.kt)("p",null,"Tasks are a very useful feature which allow us to save pre-configured inputs for actors. This means that rather than configuring the actor every time, or rather than having to save screenshots of various different actor configurations, you can store the configurations right in your Apify account instead, and run the actor at will with them."),(0,o.kt)("h2",{id:"-storage"},(0,o.kt)("a",{parentName:"h2",href:"#storage",target:null,rel:null})," Storage"),(0,o.kt)("p",null,"Storage allows us to save persistent data for further processing. As you'll learn, there are two main storage options on the Apify platform, as well as two main storage types (",(0,o.kt)("strong",{parentName:"p"},"named")," and ",(0,o.kt)("strong",{parentName:"p"},"unnamed"),") with one big difference between them."),(0,o.kt)("h2",{id:"-learning-"},(0,o.kt)("a",{parentName:"h2",href:"#learning",target:null,rel:null})," Learning \ud83e\udde0"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Check out ",(0,o.kt)("a",{parentName:"li",href:"https://docs.apify.com/actors/tasks",target:"_blank",rel:"noopener"},"the docs about actor tasks"),"."),(0,o.kt)("li",{parentName:"ul"},"Read about the ",(0,o.kt)("a",{parentName:"li",href:"https://docs.apify.com/storage#dataset",target:"_blank",rel:"noopener"},"two main storage options")," on the Apify platform."),(0,o.kt)("li",{parentName:"ul"},"Understand the ",(0,o.kt)("a",{parentName:"li",href:"https://docs.apify.com/storage#named-and-unnamed-storages",target:"_blank",rel:"noopener"},"crucial differences between named and unnamed storages"),"."),(0,o.kt)("li",{parentName:"ul"},"Learn about the ",(0,o.kt)("a",{parentName:"li",href:"https://sdk.apify.com/docs/api/dataset",target:null,rel:null},(0,o.kt)("inlineCode",{parentName:"a"},"Dataset"))," and ",(0,o.kt)("a",{parentName:"li",href:"https://sdk.apify.com/docs/api/key-value-store",target:null,rel:null},(0,o.kt)("inlineCode",{parentName:"a"},"KeyValueStore"))," objects in the Apify SDK.")),(0,o.kt)("h2",{id:"-knowledge-check-"},(0,o.kt)("a",{parentName:"h2",href:"#quiz",target:null,rel:null})," Knowledge check \ud83d\udcdd"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"What is the relationship between actors and tasks?"),(0,o.kt)("li",{parentName:"ol"},"What are the differences between default (unnamed) and named storage? Which one would you use for everyday usage?"),(0,o.kt)("li",{parentName:"ol"},"What is data retention, and how does it work for all types of storages (default and named)?")),(0,o.kt)("h2",{id:"-our-task"},(0,o.kt)("a",{parentName:"h2",href:"#our-task",target:null,rel:null})," Our task"),(0,o.kt)("p",null,"Once again, we'll be adding onto our main Amazon-scraping actor in this activity, but don't worry - this lesson will be quite light, just like the last one."),(0,o.kt)("p",null,"We have decided that we want to retain the data scraped by the actor for a long period of time, so instead of pushing to the default dataset, we will be pushing to a named dataset. Additionally, we want to save the absolute cheapest item found by the scraper into the default key-value store under a key named ",(0,o.kt)("strong",{parentName:"p"},"CHEAPEST-ITEM"),"."),(0,o.kt)("p",null,"Finally, we'll create a task for the actor that saves the configuration with the ",(0,o.kt)("strong",{parentName:"p"},"keyword")," set to be ",(0,o.kt)("strong",{parentName:"p"},"google pixel"),"."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/academy/expert-scraping-with-apify/solutions/using-storage-creating-tasks",target:null,rel:null},(0,o.kt)("strong",{parentName:"a"},"Solution"))),(0,o.kt)("h2",{id:"-next-up"},(0,o.kt)("a",{parentName:"h2",href:"#next",target:null,rel:null})," Next up"),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"/academy/expert-scraping-with-apify/apify-api-and-client",target:null,rel:null},"next lesson")," is very exciting, as it will unlock the ability to seamlessly integrate your Apify actors into your own external projects and applications with the Apify API."))}f.isMDXComponent=!0}}]);