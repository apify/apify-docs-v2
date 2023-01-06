"use strict";(self.webpackChunkapify_docs_v2=self.webpackChunkapify_docs_v2||[]).push([[530],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>d});var r=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(a),d=o,f=u["".concat(s,".").concat(d)]||u[d]||h[d]||n;return a?r.createElement(f,l(l({ref:t},p),{},{components:a})):r.createElement(f,l({ref:t},p))}));function d(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,l=new Array(n);l[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var c=2;c<n;c++)l[c]=a[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},35448:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>h});var r=a(87462),o=a(63366),n=(a(67294),a(3905)),l=["components"],i={title:"I - Webhooks & advanced actor overview",description:"Learn more advanced details about actors, how they work, and the default configurations they can take. Also learn how to integrate your actor with webhooks.",sidebar_position:6.1,slug:"/expert-scraping-with-apify/actors-webhooks"},s="[](#webhooks-and-advanced-actors) Webhooks & advanced actor overview",c={unversionedId:"expert_scraping_with_apify/actors_webhooks",id:"expert_scraping_with_apify/actors_webhooks",title:"I - Webhooks & advanced actor overview",description:"Learn more advanced details about actors, how they work, and the default configurations they can take. Also learn how to integrate your actor with webhooks.",source:"@site/sources/academy/expert_scraping_with_apify/actors_webhooks.md",sourceDirName:"expert_scraping_with_apify",slug:"/expert-scraping-with-apify/actors-webhooks",permalink:"/academy/expert-scraping-with-apify/actors-webhooks",draft:!1,tags:[],version:"current",lastUpdatedBy:"Jind\u0159ich B\xe4r",lastUpdatedAt:1673002241,formattedLastUpdatedAt:"Jan 6, 2023",sidebarPosition:6.1,frontMatter:{title:"I - Webhooks & advanced actor overview",description:"Learn more advanced details about actors, how they work, and the default configurations they can take. Also learn how to integrate your actor with webhooks.",sidebar_position:6.1,slug:"/expert-scraping-with-apify/actors-webhooks"},sidebar:"defaultSidebar",previous:{title:"Expert scraping with Apify",permalink:"/academy/expert-scraping-with-apify"},next:{title:"II - Managing source code",permalink:"/academy/expert-scraping-with-apify/managing-source-code"}},p={},h=[{value:" Advanced actor overview",id:"-advanced-actor-overview",level:2},{value:" Webhooks",id:"-webhooks",level:2},{value:" Learning \ud83e\udde0",id:"-learning-",level:2},{value:" Knowledge check \ud83d\udcdd",id:"-knowledge-check-",level:2},{value:" Our task",id:"-our-task",level:2},{value:" Next up",id:"-next-up",level:2}],u={toc:h};function d(e){var t=e.components,a=(0,o.Z)(e,l);return(0,n.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"-webhooks--advanced-actor-overview"},(0,n.kt)("a",{parentName:"h1",href:"#webhooks-and-advanced-actors",target:null,rel:null})," Webhooks & advanced actor overview"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Learn more advanced details about actors, how they work, and the default configurations they can take. Also learn how to integrate your actor with webhooks.")),(0,n.kt)("hr",null),(0,n.kt)("p",null,"Thus far, you've run actors on the platform and written an actor of your own, which you published to the platform yourself using the Apify CLI; therefore, it's fair to say that you are becoming more familiar and comfortable with the concept of ",(0,n.kt)("strong",{parentName:"p"},"actors"),". Within this lesson, we'll take a more in-depth look at actors and what they can do."),(0,n.kt)("h2",{id:"-advanced-actor-overview"},(0,n.kt)("a",{parentName:"h2",href:"#advanced-actors",target:null,rel:null})," Advanced actor overview"),(0,n.kt)("p",null,"In this course, we'll be working out of the Amazon scraper project from the ",(0,n.kt)("strong",{parentName:"p"},"Web scraping for beginners")," course. If you haven't already built that project, you can do it in three short lessons ",(0,n.kt)("a",{parentName:"p",href:"/academy/web-scraping-for-beginners/challenge",target:null,rel:null},"here"),". We've made a few small modifications to the project with the Apify SDK, but 99% of the code is still the same."),(0,n.kt)("p",null,"Take another look at the files within your Amazon scraper project. You'll notice that there is a ",(0,n.kt)("strong",{parentName:"p"},"Dockerfile"),". Every single actor has a Dockerfile (the actor's ",(0,n.kt)("strong",{parentName:"p"},"Image"),') which tells Docker how to spin up a container on the Apify platform which can successfully run the actor\'s code. "Apify Actors" is basically just a serverless platform that is running multiple Docker containers. For a deeper understanding of actor Dockerfiles, refer to the ',(0,n.kt)("a",{parentName:"p",href:"https://sdk.apify.com/docs/guides/docker-images#example-dockerfile",target:null,rel:null},"Apify actor Dockerfile docs"),"."),(0,n.kt)("h2",{id:"-webhooks"},(0,n.kt)("a",{parentName:"h2",href:"#webhooks",target:null,rel:null})," Webhooks"),(0,n.kt)("p",null,"Webhooks are a powerful tool that can be used for just about anything. You can set up actions to be taken for when an actor reaches a certain state (started, failed, succeeded, etc). These actions usually take the form of an API call (generally a POST request)."),(0,n.kt)("h2",{id:"-learning-"},(0,n.kt)("a",{parentName:"h2",href:"#learning",target:null,rel:null})," Learning \ud83e\udde0"),(0,n.kt)("p",null,"Prior to moving forward, please read over these resources:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Read about ",(0,n.kt)("a",{parentName:"li",href:"https://docs.apify.com/actors/running",target:"_blank",rel:"noopener"},"running actors, handling actor inputs, memory and CPU"),"."),(0,n.kt)("li",{parentName:"ul"},"Learn about ",(0,n.kt)("a",{parentName:"li",href:"https://docs.apify.com/webhooks",target:"_blank",rel:"noopener"},"actor webhooks"),", which we will implement in the next lesson."),(0,n.kt)("li",{parentName:"ul"},"Learn ",(0,n.kt)("a",{parentName:"li",href:"https://docs.apify.com/tutorials/integrations/run-actor-and-retrieve-data-via-api#run-an-actor-or-task",target:"_blank",rel:"noopener"},"how to run actors")," using Apify's REST API.")),(0,n.kt)("h2",{id:"-knowledge-check-"},(0,n.kt)("a",{parentName:"h2",href:"#quiz",target:null,rel:null})," Knowledge check \ud83d\udcdd"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"How do you allocate more CPU for an actor's run?"),(0,n.kt)("li",{parentName:"ol"},"Within itself, can you get the exact time that an actor was started?"),(0,n.kt)("li",{parentName:"ol"},"What are the types of default storages connected to an actor's run?"),(0,n.kt)("li",{parentName:"ol"},"Can you change the allocated memory of an actor while it's running?"),(0,n.kt)("li",{parentName:"ol"},"How can you run an actor with Puppeteer on the Apify platform with headless mode set to ",(0,n.kt)("inlineCode",{parentName:"li"},"false"),"?")),(0,n.kt)("h2",{id:"-our-task"},(0,n.kt)("a",{parentName:"h2",href:"#our-task",target:null,rel:null})," Our task"),(0,n.kt)("p",null,"In this task, we'll be building on top of what we already created in the previous lesson, so keep those files safe!"),(0,n.kt)("p",null,"Once our Amazon actor has completed its run, we will, rather than sending an email to ourselves, call an actor through a webhook. The actor called will be a new actor that we will create together, which will take the dataset ID as input, then subsequently filter through all of the results and return only the cheapest one for each product. All of the results of the actor will be pushed to its default dataset."),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/academy/expert-scraping-with-apify/solutions/integrating-webhooks",target:null,rel:null},(0,n.kt)("strong",{parentName:"a"},"Solution"))),(0,n.kt)("h2",{id:"-next-up"},(0,n.kt)("a",{parentName:"h2",href:"#next",target:null,rel:null})," Next up"),(0,n.kt)("p",null,"This course's ",(0,n.kt)("a",{parentName:"p",href:"/academy/expert-scraping-with-apify/managing-source-code",target:null,rel:null},"next lesson")," is brief, but discusses a very important topic: managing your code and storing it in a safe place."))}d.isMDXComponent=!0}}]);