"use strict";(self.webpackChunkapify_docs_v2=self.webpackChunkapify_docs_v2||[]).push([[7183],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>h});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),u=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=u(e.components);return a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),g=u(n),h=o,m=g["".concat(c,".").concat(h)]||g[h]||p[h]||r;return n?a.createElement(m,i(i({ref:t},l),{},{components:n})):a.createElement(m,i({ref:t},l))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=g;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var u=2;u<r;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},55497:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>u,toc:()=>p});var a=n(87462),o=n(63366),r=(n(67294),n(3905)),i=["components"],s={title:"How to use",description:"Learn to use and manage your organization account using the Apify Console or API. View the organizations you are in and manage your memberships.",sidebar_position:2,slug:"/access-rights/organization-account/how-to-use"},c="Using the organization account",u={unversionedId:"access_rights/organization_account/how_to_use",id:"access_rights/organization_account/how_to_use",title:"How to use",description:"Learn to use and manage your organization account using the Apify Console or API. View the organizations you are in and manage your memberships.",source:"@site/sources/platform/access_rights/organization_account/how_to_use.md",sourceDirName:"access_rights/organization_account",slug:"/access-rights/organization-account/how-to-use",permalink:"/platform/access-rights/organization-account/how-to-use",draft:!1,editUrl:"https://github.com/apify/apify-docs-v2/edit/master/sources/platform/access_rights/organization_account/how_to_use.md",tags:[],version:"current",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1677347846,formattedLastUpdatedAt:"Feb 25, 2023",sidebarPosition:2,frontMatter:{title:"How to use",description:"Learn to use and manage your organization account using the Apify Console or API. View the organizations you are in and manage your memberships.",sidebar_position:2,slug:"/access-rights/organization-account/how-to-use"},sidebar:"docs",previous:{title:"Setup",permalink:"/platform/access-rights/organization-account/setup"},next:{title:"List of permissions",permalink:"/platform/access-rights/list-of-permissions"}},l={},p=[{value:"In the Apify Console",id:"in-the-apify-console",level:2},{value:"Manage your organizations",id:"manage-your-organizations",level:3},{value:"Transfer ownership",id:"transfer-ownership",level:3},{value:"Via API",id:"via-api",level:2}],g={toc:p};function h(e){var t=e.components,s=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},g,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"using-the-organization-account"},"Using the organization account"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Learn to use and manage your organization account using the Apify Console or API. View the organizations you are in and manage your memberships.")),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Once an account becomes an organization, you can no longer log into it. Instead, you can switch into the organization to manage account information, memberships and actor runs."),(0,r.kt)("p",null,"While you can't manage an organization account via ",(0,r.kt)("a",{parentName:"p",href:"/api/v2",target:null,rel:null},"API"),", you can still manage its runs and resources via API like you would with any other account."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://www.youtube.com/watch?v=BIL6HqtnvKk",target:"_blank",rel:"noopener"},"See our video tutorial")," on organization accounts.")),(0,r.kt)("h2",{id:"in-the-apify-console"},"In the Apify Console"),(0,r.kt)("p",null,"You can switch into ",(0,r.kt)("strong",{parentName:"p"},"Organization account")," view using the account button in the top-left corner."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Switch to organization account",src:n(68346).Z,width:"230",height:"454"})),(0,r.kt)("p",null,"In the menu, the account you are currently using is displayed at the top, with all the accounts you can switch to displayed below. When you need to get back to your personal account, you can just switch right back to it \u2013 no need to log in and out."),(0,r.kt)("p",null,"The resources you can access and account details you can edit will depend on your ",(0,r.kt)("a",{parentName:"p",href:"/platform/access-rights/list-of-permissions",target:null,rel:null},"permissions")," in the organization."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"When switching between accounts, beware which account you start an actor run in. If you accidentally start an organization's actor run in your personal account, the run will be billed to your account (and vice versa).")),(0,r.kt)("h3",{id:"manage-your-organizations"},"Manage your organizations"),(0,r.kt)("p",null,"You can view and manage the organizations you are a member of from the ",(0,r.kt)("strong",{parentName:"p"},"Organizations")," tab on your ",(0,r.kt)("a",{parentName:"p",href:"https://console.apify.com/account#/myorganization",target:"_blank",rel:"noopener"},"account page"),"."),(0,r.kt)("p",null,"If you want to leave an organization you own, you must first transfer ownership to someone else."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"My organizations",src:n(75984).Z,width:"1082",height:"391"})),(0,r.kt)("h3",{id:"transfer-ownership"},"Transfer ownership"),(0,r.kt)("p",null,"The organization, its actors and integrations will keep running as they are. The original owner will either leave the organization or become a member with permissions defined by the new owner. Only the new owner will have complete access to the organization."),(0,r.kt)("h2",{id:"via-api"},"Via API"),(0,r.kt)("p",null,"While you cannot manage an organization account's settings and members via API, you can access its actor and task runs, webhooks, schedules and storages just like you would with any other account."),(0,r.kt)("p",null,"As a member of an organization, you are assigned an ",(0,r.kt)("a",{parentName:"p",href:"/platform/integrations",target:null,rel:null},"API token")," (under the ",(0,r.kt)("strong",{parentName:"p"},"Integrations")," tab) and proxy password (click the ",(0,r.kt)("strong",{parentName:"p"},"Proxy")," button in the left menu) for accessing the Apify platform via REST API."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Integration tokens",src:n(91927).Z,width:"1080",height:"676"})),(0,r.kt)("p",null,"The API tokens' functionality reflects your account's permissions in the organization, so if you only have the ",(0,r.kt)("strong",{parentName:"p"},"read")," and ",(0,r.kt)("strong",{parentName:"p"},"run")," permissions for actors, you will only be able to view and run actors via API. Only you can view your API token and password."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Do not share your API token or password with untrusted parties.")),(0,r.kt)("p",null,"If you have the ",(0,r.kt)("strong",{parentName:"p"},"manage organization access keys")," permission, you are able to view and use organization-wide API tokens. These are shared across the organization, so everyone with the ",(0,r.kt)("strong",{parentName:"p"},"manage organization access keys")," permission can use them for organization-wide integrations."),(0,r.kt)("p",null,"For a ",(0,r.kt)("a",{parentName:"p",href:"/api/v2",target:null,rel:null},"detailed breakdown of all Apify API endpoints")," and help on using them, visit the API."))}h.isMDXComponent=!0},91927:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/integrations-f9923f46cbfcdd915e9d46db510fb6e4.png"},75984:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/my-organizations-519977cc0428ec78e0740e512f74e0c7.png"},68346:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/switch-to-organization-2813ac29094a22368ff3099e1a050bf8.png"}}]);