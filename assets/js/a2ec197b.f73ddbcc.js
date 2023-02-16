"use strict";(self.webpackChunkapify_docs_v2=self.webpackChunkapify_docs_v2||[]).push([[2131],{3905:(t,e,a)=>{a.d(e,{Zo:()=>p,kt:()=>m});var n=a(67294);function o(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){o(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function c(t,e){if(null==t)return{};var a,n,o=function(t,e){if(null==t)return{};var a,n,o={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(o[a]=t[a]);return o}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(o[a]=t[a])}return o}var s=n.createContext({}),l=function(t){var e=n.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},p=function(t){var e=l(t.components);return n.createElement(s.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},g=n.forwardRef((function(t,e){var a=t.components,o=t.mdxType,r=t.originalType,s=t.parentName,p=c(t,["components","mdxType","originalType","parentName"]),g=l(a),m=o,d=g["".concat(s,".").concat(m)]||g[m]||u[m]||r;return a?n.createElement(d,i(i({ref:e},p),{},{components:a})):n.createElement(d,i({ref:e},p))}));function m(t,e){var a=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var r=a.length,i=new Array(r);i[0]=g;var c={};for(var s in e)hasOwnProperty.call(e,s)&&(c[s]=e[s]);c.originalType=t,c.mdxType="string"==typeof t?t:o,i[1]=c;for(var l=2;l<r;l++)i[l]=a[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},40900:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>c,metadata:()=>l,toc:()=>u});var n=a(87462),o=a(63366),r=(a(67294),a(3905)),i=["components"],c={title:"Organization account",description:"Create a specialized account for your organization to encourage collaboration and manage permissions. Convert an existing account, or create one from scratch.",sidebar_position:12.1,slug:"/access-rights/organization-account"},s="Organization account",l={unversionedId:"access_rights/organization_account/index",id:"access_rights/organization_account/index",title:"Organization account",description:"Create a specialized account for your organization to encourage collaboration and manage permissions. Convert an existing account, or create one from scratch.",source:"@site/sources/platform/access_rights/organization_account/index.md",sourceDirName:"access_rights/organization_account",slug:"/access-rights/organization-account",permalink:"/platform/access-rights/organization-account",draft:!1,editUrl:"https://github.com/apify/apify-docs-v2/edit/master/sources/platform/access_rights/organization_account/index.md",tags:[],version:"current",lastUpdatedBy:"Ondra Urban",lastUpdatedAt:1676563547,formattedLastUpdatedAt:"Feb 16, 2023",sidebarPosition:12.1,frontMatter:{title:"Organization account",description:"Create a specialized account for your organization to encourage collaboration and manage permissions. Convert an existing account, or create one from scratch.",sidebar_position:12.1,slug:"/access-rights/organization-account"},sidebar:"docs",previous:{title:"Access rights",permalink:"/platform/access-rights"},next:{title:"Setup",permalink:"/platform/access-rights/organization-account/setup"}},p={},u=[{value:"Availability and pricing",id:"availability-and-pricing",level:2},{value:"Create a new organization",id:"create-a-new-organization",level:2},{value:"Convert an existing account",id:"convert-an-existing-account",level:2},{value:"Billing",id:"billing",level:2}],g={toc:u};function m(t){var e=t.components,c=(0,o.Z)(t,i);return(0,r.kt)("wrapper",(0,n.Z)({},g,c,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"organization-account"},"Organization account"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Create a specialized account for your organization to encourage collaboration and manage permissions. Convert an existing account, or create one from scratch.")),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Organization accounts allow groups to collaborate on projects. It enables you to manage your team members' ",(0,r.kt)("a",{parentName:"p",href:"/platform/access-rights/list-of-permissions",target:null,rel:null},"permissions")," and to centralize your billing without having to share the credentials of a single personal account."),(0,r.kt)("p",null,"You can ",(0,r.kt)("a",{parentName:"p",href:"/platform/access-rights/organization-account/how-to-use",target:null,rel:null},"switch")," between your personal and organization accounts in just two clicks: in the ",(0,r.kt)("a",{parentName:"p",href:"https://console.apify.com",target:"_blank",rel:"noopener"},"Apify Console"),", click the account button in the top-left corner, then select the organization."),(0,r.kt)("p",null,"You can set up an organization in two ways."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#create-a-new-organization",target:null,rel:null},"Create a new organization"),". If you don't have integrations set up yet, or if they are easy to change, you can create a new organization, preserving your personal account."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#convert-an-existing-account",target:null,rel:null},"Convert an existing account")," into an organization. If your actors and ",(0,r.kt)("a",{parentName:"li",href:"/platform/integrations",target:null,rel:null},"integrations")," are set up in a personal account, it is probably best to convert that account into an organization. This will preserve all your integrations but means you will have a new personal account created for you.")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Prefer video to reading? ",(0,r.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=BIL6HqtnvKk",target:"_blank",rel:"noopener"},"See our video tutorial")," for organization accounts.")),(0,r.kt)("h2",{id:"availability-and-pricing"},"Availability and pricing"),(0,r.kt)("p",null,"The organization account is available on all our plans. ",(0,r.kt)("a",{parentName:"p",href:"https://apify.com/pricing",target:"_blank",rel:"noopener"},"Visit our pricing page")," for more information."),(0,r.kt)("h2",{id:"create-a-new-organization"},"Create a new organization"),(0,r.kt)("p",null,"You can create a new organization by clicking the ",(0,r.kt)("strong",{parentName:"p"},"Create new organization")," button under the ",(0,r.kt)("strong",{parentName:"p"},"Organizations")," tab in your ",(0,r.kt)("a",{parentName:"p",href:"https://console.apify.com/account#/myorganizations",target:"_blank",rel:"noopener"},"account"),". If you want the organization to have a separate email address (used for notifications), enter it here. Otherwise, leave the ",(0,r.kt)("strong",{parentName:"p"},"email")," field empty and the owner's email will be used for notifications."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Create a new organization",src:a(69464).Z,width:"1072",height:"532"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"You can own up to 5 and be a member of as many organizations as you need.")),(0,r.kt)("h2",{id:"convert-an-existing-account"},"Convert an existing account"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"When you convert an existing user account into an organization,")),(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"You will no longer be able to sign in to the converted user account.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"An organization cannot be converted back to a personal account.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"During conversion, a new account (with the same login credentials) will be created for you. You can then use that account to ",(0,r.kt)("a",{parentName:"strong",href:"/platform/access-rights/organization-account/setup",target:null,rel:null},"set up")," the organization.")))),(0,r.kt)("p",null,"Before converting your personal account into an organization, make sure it has a ",(0,r.kt)("strong",{parentName:"p"},"username"),"."),(0,r.kt)("p",null,"An organization can't be a member of other organizations. If you want to convert your account to one, you'll first need to ",(0,r.kt)("strong",{parentName:"p"},"leave all the organizations you are a part of"),"."),(0,r.kt)("p",null,"Then, under the ",(0,r.kt)("strong",{parentName:"p"},"Organizations")," ",(0,r.kt)("a",{parentName:"p",href:"https://console.apify.com/account#/myorganizations",target:"_blank",rel:"noopener"},"tab"),", click the ",(0,r.kt)("strong",{parentName:"p"},"Convert this user account to an organization")," button."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Convert your account to an organization",src:a(32247).Z,width:"604",height:"456"})),(0,r.kt)("p",null,"Next, set the organization's name and click ",(0,r.kt)("strong",{parentName:"p"},"Convert"),"."),(0,r.kt)("p",null,"And that's it! Your personal account becomes the organization, and you will be logged out automatically. You can now log into your new personal account with the same credentials as you are currently logged in with. This applies to both ",(0,r.kt)("strong",{parentName:"p"},"password")," and ",(0,r.kt)("strong",{parentName:"p"},"OAuth")," methods."),(0,r.kt)("p",null,"For information on ",(0,r.kt)("a",{parentName:"p",href:"/platform/access-rights/organization-account/setup",target:null,rel:null},"adding members and assigning roles"),", see the Setup page."),(0,r.kt)("h2",{id:"billing"},"Billing"),(0,r.kt)("p",null,"Actor and task runs are billed to the account they are started from. ",(0,r.kt)("strong",{parentName:"p"},"Always make sure you start your runs from the correct account")," to avoid having an organization's runs billed to your personal account."),(0,r.kt)("p",null,"The Free and Personal plans are ",(0,r.kt)("a",{parentName:"p",href:"https://apify.com/pricing",target:"_blank",rel:"noopener"},"restricted to 9 seats"),", while the Team plan comes with 9, which you can increase later. If you are on the Team plan and want to add some more seats to the 9 it comes with, head over to your ",(0,r.kt)("a",{parentName:"p",href:"https://console.apify.com/billing-new#/subscription",target:"_blank",rel:"noopener"},"Billing page and click on Subscriptions"),". Click on ",(0,r.kt)("strong",{parentName:"p"},"Upgrade"),", and, in the ",(0,r.kt)("strong",{parentName:"p"},"Add-ons")," section, and add as many additional seats as you need. Then, just complete the upgrade process, and you're done."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Adding more teams account seats",src:a(72902).Z,width:"990",height:"537"})),(0,r.kt)("p",null,"To find out about organization pricing, get in touch at ",(0,r.kt)("a",{parentName:"p",href:"mailto:support@apify.com?subject=Organization%20account%20pricing",target:"_blank",rel:"noopener"},"support@apify.com")," or ",(0,r.kt)("a",{parentName:"p",href:"https://apify.com/pricing",target:"_blank",rel:"noopener"},"visit the pricing page"),"."))}m.isMDXComponent=!0},32247:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/convert-to-organization-f6ede956a2dbbaafc260cbed95600312.png"},69464:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/create-new-org-2a391adfe3ab3f5d83355bcd406c4690.png"},72902:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/upgrade-11cf3e9068f0e62cb56faeacb511dec5.png"}}]);