"use strict";(self.webpackChunkapify_docs_v2=self.webpackChunkapify_docs_v2||[]).push([[1872],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},l="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),l=u(n),d=a,h=l["".concat(p,".").concat(d)]||l[d]||g[d]||i;return n?r.createElement(h,o(o({ref:t},c),{},{components:n})):r.createElement(h,o({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[l]="string"==typeof e?e:a,o[1]=s;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5612:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>d,frontMatter:()=>s,metadata:()=>u,toc:()=>l});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=["components"],s={title:"II - Managing source",description:"View in-depth answers for all three of the quiz questions that were provided in the corresponding lesson about managing source code.",sidebar_position:2,slug:"/expert-scraping-with-apify/solutions/managing-source"},p="Managing source",u={unversionedId:"expert_scraping_with_apify/solutions/managing_source",id:"expert_scraping_with_apify/solutions/managing_source",title:"II - Managing source",description:"View in-depth answers for all three of the quiz questions that were provided in the corresponding lesson about managing source code.",source:"@site/sources/academy/expert_scraping_with_apify/solutions/managing_source.md",sourceDirName:"expert_scraping_with_apify/solutions",slug:"/expert-scraping-with-apify/solutions/managing-source",permalink:"/academy/expert-scraping-with-apify/solutions/managing-source",draft:!1,tags:[],version:"current",lastUpdatedBy:"Dan Nguyen",lastUpdatedAt:1672828422,formattedLastUpdatedAt:"Jan 4, 2023",sidebarPosition:2,frontMatter:{title:"II - Managing source",description:"View in-depth answers for all three of the quiz questions that were provided in the corresponding lesson about managing source code.",sidebar_position:2,slug:"/expert-scraping-with-apify/solutions/managing-source"},sidebar:"defaultSidebar",previous:{title:"I - Integrating webhooks",permalink:"/academy/expert-scraping-with-apify/solutions/integrating-webhooks"},next:{title:"III - Using storage & creating tasks",permalink:"/academy/expert-scraping-with-apify/solutions/using-storage-creating-tasks"}},c={},l=[{value:" Quiz answers",id:"-quiz-answers",level:2}],g={toc:l};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"managing-source"},"Managing source"),(0,i.kt)("p",null,"In the lesson corresponding to this solution, we discussed an extremely important topic: source code management. Though we solved the task right in the lesson, we've still included the quiz answers here."),(0,i.kt)("h2",{id:"-quiz-answers"},(0,i.kt)("a",{parentName:"h2",href:"#quiz-answers",target:null,rel:null})," Quiz answers"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Q: Do you have to rebuild an actor each time the source code is changed?")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"A:")," Yes. It needs to be built into an image, saved in a registry, and later on run in a container."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Q: In Git, what is the difference between pushing changes and making a pull request?")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"A:")," Pushing changes the remote branch based on the content on the local branch. The pushing of code changes is usually made to a branch parallel to the one you want to eventually push it to."),(0,i.kt)("p",null,"When creating a pull request, the code is meant to be reviewed, or at least pass all the test suites before being merged into the target branch."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Q: Based on your knowledge and experience, is the ",(0,i.kt)("inlineCode",{parentName:"strong"},"apify push")," command worth using (in your opinion)?")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"A:")," The ",(0,i.kt)("inlineCode",{parentName:"p"},"apify push")," command can sometimes be useful when testing ideas; however, it is much more ideal to use Github integration rather than directly pushing to the platform."))}d.isMDXComponent=!0}}]);