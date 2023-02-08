"use strict";(self.webpackChunkapify_docs_v2=self.webpackChunkapify_docs_v2||[]).push([[6261],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),c=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,s=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),g=c(r),m=n,h=g["".concat(l,".").concat(m)]||g[m]||u[m]||s;return r?a.createElement(h,o(o({ref:t},p),{},{components:r})):a.createElement(h,o({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=r.length,o=new Array(s);o[0]=g;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var c=2;c<s;c++)o[c]=r[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}g.displayName="MDXCreateElement"},23986:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var a=r(87462),n=r(63366),s=(r(67294),r(3905)),o=["components"],i={title:"Access rights",description:"Manage permissions for organizations or private resources such as actors, actor runs and storages. Allow other users to read, run, modify or build new versions.",sidebar_position:12,category:"platform",slug:"/access-rights"},l="Access rights",c={unversionedId:"access_rights/index",id:"access_rights/index",title:"Access rights",description:"Manage permissions for organizations or private resources such as actors, actor runs and storages. Allow other users to read, run, modify or build new versions.",source:"@site/sources/platform/access_rights/index.md",sourceDirName:"access_rights",slug:"/access-rights",permalink:"/platform/access-rights",draft:!1,editUrl:"https://github.com/apify/apify-docs-v2/edit/master/sources/platform/access_rights/index.md",tags:[],version:"current",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1675852910,formattedLastUpdatedAt:"Feb 8, 2023",sidebarPosition:12,frontMatter:{title:"Access rights",description:"Manage permissions for organizations or private resources such as actors, actor runs and storages. Allow other users to read, run, modify or build new versions.",sidebar_position:12,category:"platform",slug:"/access-rights"},sidebar:"docs",previous:{title:"Slack",permalink:"/platform/integrations/slack"},next:{title:"Organization account",permalink:"/platform/access-rights/organization-account"}},p={},u=[{value:"Granting access rights",id:"granting-access-rights",level:2},{value:"Organization account",id:"organization-account",level:2},{value:"Publishing in Apify Store",id:"publishing-in-apify-store",level:2},{value:"Permissions",id:"permissions",level:2}],g={toc:u};function m(e){var t=e.components,i=(0,n.Z)(e,o);return(0,s.kt)("wrapper",(0,a.Z)({},g,i,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"access-rights"},"Access rights"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Manage permissions for organizations or private resources such as actors, actor runs and storages. Allow other users to read, run, modify or build new versions.")),(0,s.kt)("hr",null),(0,s.kt)("p",null,"By default, each system resource (actor, key-value store, run, ...) you create is only available to you, the owner. There are three ways you can grant access to your resources: the ",(0,s.kt)("a",{parentName:"p",href:"#granting-access-rights",target:null,rel:null},"access rights")," system, using the ",(0,s.kt)("a",{parentName:"p",href:"#organization-account",target:null,rel:null},"organization account")," or by ",(0,s.kt)("a",{parentName:"p",href:"#publishing-in-apify-store",target:null,rel:null},"publishing your actor")," in ",(0,s.kt)("a",{parentName:"p",href:"https://apify.com/store",target:"_blank",rel:"noopener"},"Apify Store"),"."),(0,s.kt)("h2",{id:"granting-access-rights"},"Granting access rights"),(0,s.kt)("p",null,"You can easily and securely share your own resources - actors, tasks, key-value stores, datasets and request queues using a ",(0,s.kt)("a",{parentName:"p",href:"https://www.google.com/search?client=firefox-b-d&q=define+granular+permissions",target:"_blank",rel:"noopener"},"granular")," permissions system. This enables you to, for example, allow your colleague to run an ",(0,s.kt)("a",{parentName:"p",href:"/platform/actors",target:null,rel:null},"actor")," or view a ",(0,s.kt)("a",{parentName:"p",href:"/platform/storage/dataset",target:null,rel:null},"dataset"),", but not to modify them."),(0,s.kt)("p",null,"You can also grant permission to update an actor and build a new version.\n",(0,s.kt)("a",{parentName:"p",href:"/platform/storage",target:null,rel:null},"Storages")," (key-value stores, request queues and datasets) are sharable the same way with, for example, just ",(0,s.kt)("strong",{parentName:"p"},"read")," permission, or a combination of both ",(0,s.kt)("strong",{parentName:"p"},"read")," and ",(0,s.kt)("strong",{parentName:"p"},"write")," permissions."),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"To be able to grant access rights to another user you must have a ",(0,s.kt)("strong",{parentName:"p"},"username")," set in ",(0,s.kt)("a",{parentName:"p",href:"https://console.apify.com/account?tab=settings",target:"_blank",rel:"noopener"},"account settings"),".")),(0,s.kt)("p",null,"To share an actor, task, key-value store, request queue or dataset, open its ",(0,s.kt)("strong",{parentName:"p"},"Settings")," tab and at the very bottom you will find the ",(0,s.kt)("strong",{parentName:"p"},"Access rights")," section. You can add a collaborator using their ",(0,s.kt)("strong",{parentName:"p"},"user ID"),", ",(0,s.kt)("strong",{parentName:"p"},"email")," or ",(0,s.kt)("strong",{parentName:"p"},"username"),". Once you have added the collaborator, you can configure their permissions."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Access rights configuration",src:r(78310).Z,width:"2156",height:"600"})),(0,s.kt)("h2",{id:"organization-account"},"Organization account"),(0,s.kt)("p",null,"Apify's organization account allows you to grant role-specific access permissions to members of your team. For more details, see the organization account ",(0,s.kt)("a",{parentName:"p",href:"/platform/access-rights/organization-account",target:null,rel:null},"documentation"),"."),(0,s.kt)("h2",{id:"publishing-in-apify-store"},"Publishing in Apify Store"),(0,s.kt)("p",null,"Another way to share your actor is to ",(0,s.kt)("a",{parentName:"p",href:"/platform/actors/publishing",target:null,rel:null},"publish")," it in ",(0,s.kt)("a",{parentName:"p",href:"https://apify.com/store",target:"_blank",rel:"noopener"},"Apify Store"),". The published actor appears in Apify Store, which means that ",(0,s.kt)("strong",{parentName:"p"},"any user will be able to view its source code and run it"),"."),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"When you publish an actor, you give every Apify user the ",(0,s.kt)("strong",{parentName:"p"},"read")," and ",(0,s.kt)("strong",{parentName:"p"},"run")," permissions.")),(0,s.kt)("p",null,"However, ",(0,s.kt)("strong",{parentName:"p"},"without the relevant permissions (e.g. write, build, delete), no one except the author can modify an actor"),"."),(0,s.kt)("p",null,"If a user runs the actor, it gets billed to their account, and the actor run will be available only to them."),(0,s.kt)("p",null,"To publish an actor, open it in the ",(0,s.kt)("a",{parentName:"p",href:"https://console.apify.com",target:"_blank",rel:"noopener"},"Apify Console"),", go to the ",(0,s.kt)("strong",{parentName:"p"},"Publication")," tab and follow the instructions below."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Publishing your actor",src:r(21435).Z,width:"1500",height:"1093"})),(0,s.kt)("h2",{id:"permissions"},"Permissions"),(0,s.kt)("p",null,"Below are the permissions you can grant via the ",(0,s.kt)("a",{parentName:"p",href:"#granting-access-rights",target:null,rel:null},"access rights")," system, ",(0,s.kt)("a",{parentName:"p",href:"/platform/access-rights/organization-account",target:null,rel:null},"organization account")," and ",(0,s.kt)("a",{parentName:"p",href:"/platform/actors/publishing",target:null,rel:null},"publishing in Apify store"),"."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"The access rights system allows you to manage a ",(0,s.kt)("strong",{parentName:"li"},"specific")," user's permissions for a ",(0,s.kt)("strong",{parentName:"li"},"specific")," resource."),(0,s.kt)("li",{parentName:"ul"},"The organization account allows you to manage ",(0,s.kt)("strong",{parentName:"li"},"each")," member's permissions for ",(0,s.kt)("strong",{parentName:"li"},"all")," of an organization's resources."),(0,s.kt)("li",{parentName:"ul"},"By publishing your actor in Apify Store, you grant ",(0,s.kt)("strong",{parentName:"li"},"all")," of its users ",(0,s.kt)("strong",{parentName:"li"},"read")," (view its source code) and ",(0,s.kt)("strong",{parentName:"li"},"run")," ",(0,s.kt)("a",{parentName:"li",href:"/platform/access-rights/list-of-permissions",target:null,rel:null},"permissions"),".")),(0,s.kt)("p",null,"For a full list of permissions available for resources on the Apify platform, see the ",(0,s.kt)("a",{parentName:"p",href:"/platform/access-rights/list-of-permissions",target:null,rel:null},"List of permissions"),"."))}m.isMDXComponent=!0},78310:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/access-rights-1b690342d5b542ab32a8e9db92d60923.png"},21435:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/publication-6d15a889629615e86f3f51a924470cd7.png"}}]);