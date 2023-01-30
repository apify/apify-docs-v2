"use strict";(self.webpackChunkapify_docs_v2=self.webpackChunkapify_docs_v2||[]).push([[7345],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>y});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),f=l(r),y=a,m=f["".concat(p,".").concat(y)]||f[y]||u[y]||o;return r?n.createElement(m,i(i({ref:t},c),{},{components:r})):n.createElement(m,i({ref:t},c))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},38316:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>y,frontMatter:()=>s,metadata:()=>l,toc:()=>u});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),i=["components"],s={title:"Input",description:"Configure your actor's input parameters using the Apify Console, locally or via API. Access parameters in key-value stores from your actor's code.",sidebar_position:1,slug:"/actors/running/input"},p="Input",l={unversionedId:"actors/running/input",id:"actors/running/input",title:"Input",description:"Configure your actor's input parameters using the Apify Console, locally or via API. Access parameters in key-value stores from your actor's code.",source:"@site/sources/platform/actors/running/input.md",sourceDirName:"actors/running",slug:"/actors/running/input",permalink:"/platform/actors/running/input",draft:!1,tags:[],version:"current",lastUpdatedBy:"Jind\u0159ich B\xe4r",lastUpdatedAt:1675097992,formattedLastUpdatedAt:"Jan 30, 2023",sidebarPosition:1,frontMatter:{title:"Input",description:"Configure your actor's input parameters using the Apify Console, locally or via API. Access parameters in key-value stores from your actor's code.",sidebar_position:1,slug:"/actors/running/input"},sidebar:"docs",previous:{title:"Running actors",permalink:"/platform/actors/running"},next:{title:"Memory and CPU",permalink:"/platform/actors/running/memory-and-cpu"}},c={},u=[{value:"Passing input",id:"passing-input",level:2}],f={toc:u};function y(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"input"},"Input"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Configure your actor's input parameters using the Apify Console, locally or via API. Access parameters in key-value stores from your actor's code.")),(0,o.kt)("hr",null),(0,o.kt)("p",null,"An Apify actor's input is stored in the ",(0,o.kt)("strong",{parentName:"p"},"INPUT.json")," key-value store in the actor's ",(0,o.kt)("strong",{parentName:"p"},"apify_storage/key_value_stores/default")," directory."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Note that the actor can store other values such as crawling results or screenshots of web pages under arbitrary keys.")),(0,o.kt)("p",null,"The key-value store associated with an actor run can be conveniently accessed using the ",(0,o.kt)("a",{parentName:"p",href:"https://docs-v2.apify.com/sdk-js/api/apify/class/Actor#getValue",target:"_blank",rel:"noopener"},(0,o.kt)("inlineCode",{parentName:"a"},"getValue()"))," and ",(0,o.kt)("a",{parentName:"p",href:"https://docs-v2.apify.com/sdk-js/api/apify/class/Actor#setValue",target:"_blank",rel:"noopener"},(0,o.kt)("inlineCode",{parentName:"a"},"setValue()"))," functions of ",(0,o.kt)("a",{parentName:"p",href:"https://docs-v2.apify.com/sdk-js/api/apify/class/Actor",target:"_blank",rel:"noopener"},(0,o.kt)("inlineCode",{parentName:"a"},"Actor"))," class provided by the ",(0,o.kt)("inlineCode",{parentName:"p"},"apify")," ",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/apify",target:"_blank",rel:"noopener"},"NPM package"),". Internally, these functions read the ID of the key-value store from the ",(0,o.kt)("strong",{parentName:"p"},"APIFY_DEFAULT_KEY_VALUE_STORE_ID")," environment variable. They then access the key-value store using the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.apify.com/api",target:"_blank",rel:"noopener"},"Apify API"),"."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"For more details about the key-value stores, visit the ",(0,o.kt)("a",{parentName:"p",href:"/platform/storage",target:null,rel:null},"Storage")," section.")),(0,o.kt)("h2",{id:"passing-input"},"Passing input"),(0,o.kt)("p",null,"There are three ways to pass input to an actor:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Using the INPUT tab if you are running the actor in ",(0,o.kt)("a",{parentName:"li",href:"https://console.apify.com",target:"_blank",rel:"noopener"},"Apify Console"),"."),(0,o.kt)("li",{parentName:"ul"},"By creating or editing the ",(0,o.kt)("strong",{parentName:"li"},"INPUT.json")," file in the key-value store."),(0,o.kt)("li",{parentName:"ul"},"Using a POST payload when running the actor using the ",(0,o.kt)("a",{parentName:"li",href:"https://docs.apify.com/api",target:"_blank",rel:"noopener"},"Apify API"),".")))}y.isMDXComponent=!0}}]);