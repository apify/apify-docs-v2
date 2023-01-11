"use strict";(self.webpackChunkapify_docs_v2=self.webpackChunkapify_docs_v2||[]).push([[2188],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>g});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=o.createContext({}),i=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=i(e.components);return o.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),m=i(r),g=n,y=m["".concat(s,".").concat(g)]||m[g]||c[g]||a;return r?o.createElement(y,l(l({ref:t},u),{},{components:r})):o.createElement(y,l({ref:t},u))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,l=new Array(a);l[0]=m;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:n,l[1]=p;for(var i=2;i<a;i++)l[i]=r[i];return o.createElement.apply(null,l)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},82197:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>g,frontMatter:()=>p,metadata:()=>i,toc:()=>c});var o=r(87462),n=r(63366),a=(r(67294),r(3905)),l=["components"],p={title:"Google SERP proxy",description:"Learn how to collect search results from Google Search-powered tools. Get search results from localized domains in multiple countries, e.g. the US and Germany.",sidebar_position:10.5,slug:"/proxy/google-serp-proxy"},s="[](#google-serp-proxy) Google SERP proxy",i={unversionedId:"proxy/google_serp_proxy/index",id:"proxy/google_serp_proxy/index",title:"Google SERP proxy",description:"Learn how to collect search results from Google Search-powered tools. Get search results from localized domains in multiple countries, e.g. the US and Germany.",source:"@site/sources/platform/proxy/google_serp_proxy/index.md",sourceDirName:"proxy/google_serp_proxy",slug:"/proxy/google-serp-proxy",permalink:"/platform/proxy/google-serp-proxy",draft:!1,tags:[],version:"current",lastUpdatedBy:"Jind\u0159ich B\xe4r",lastUpdatedAt:1673462481,formattedLastUpdatedAt:"Jan 11, 2023",sidebarPosition:10.5,frontMatter:{title:"Google SERP proxy",description:"Learn how to collect search results from Google Search-powered tools. Get search results from localized domains in multiple countries, e.g. the US and Germany.",sidebar_position:10.5,slug:"/proxy/google-serp-proxy"},sidebar:"docs",previous:{title:"Tips and tricks",permalink:"/platform/proxy/residential-proxy/tips-and-tricks"},next:{title:"Examples",permalink:"/platform/proxy/google-serp-proxy/examples"}},u={},c=[{value:" Connecting to Google SERP proxy",id:"-connecting-to-google-serp-proxy",level:2},{value:" Username parameters",id:"-username-parameters",level:3},{value:" Country selection",id:"-country-selection",level:2}],m={toc:c};function g(e){var t=e.components,r=(0,n.Z)(e,l);return(0,a.kt)("wrapper",(0,o.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"-google-serp-proxy"},(0,a.kt)("a",{parentName:"h1",href:"#google-serp-proxy",target:null,rel:null})," Google SERP proxy"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Learn how to collect search results from Google Search-powered tools. Get search results from localized domains in multiple countries, e.g. the US and Germany.")),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Google SERP proxy allows you to extract search results from Google Search-powered services. It allows searching in ",(0,a.kt)("a",{parentName:"p",href:"#country-selection",target:null,rel:null},"various countries")," and to dynamically switch between country domains."),(0,a.kt)("p",null,"Our Google SERP proxy currently supports the below services."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Google Search (",(0,a.kt)("inlineCode",{parentName:"li"},"http://www.google.<country domain>/search"),")."),(0,a.kt)("li",{parentName:"ul"},"Google Shopping (",(0,a.kt)("inlineCode",{parentName:"li"},"http://www.google.<country domain>/search?tbm=shop"),").")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Google SERP proxy can ",(0,a.kt)("strong",{parentName:"p"},"only")," be used for Google Search and Shopping. It cannot be used to access other websites.")),(0,a.kt)("p",null,"When using the proxy, ",(0,a.kt)("strong",{parentName:"p"},"pricing is based on the number of requests made"),"."),(0,a.kt)("p",null,"To use Google SERP proxy or for more information, ",(0,a.kt)("a",{parentName:"p",href:"https://apify.com/contact",target:"_blank",rel:"noopener"},"contact us"),"."),(0,a.kt)("h2",{id:"-connecting-to-google-serp-proxy"},(0,a.kt)("a",{parentName:"h2",href:"#connecting-to-google-serp-proxy",target:null,rel:null})," Connecting to Google SERP proxy"),(0,a.kt)("p",null,"Requests made through the proxy are automatically routed through a proxy server from the selected country and pure ",(0,a.kt)("strong",{parentName:"p"},"HTML code of the search result page is returned"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Important:")," Only HTTP requests are allowed, and the Google hostname needs to start with the ",(0,a.kt)("inlineCode",{parentName:"p"},"www.")," prefix."),(0,a.kt)("p",null,"For code examples on how to connect to Google SERP proxies, see the ",(0,a.kt)("a",{parentName:"p",href:"/platform/proxy/google-serp-proxy/examples",target:null,rel:null},"examples")," page."),(0,a.kt)("h3",{id:"-username-parameters"},(0,a.kt)("a",{parentName:"h3",href:"#username-parameters",target:null,rel:null})," Username parameters"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"username")," field enables you to pass various ",(0,a.kt)("a",{parentName:"p",href:"/platform/proxy/connection-settings",target:null,rel:null},"parameters"),", such as groups and country, for your proxy connection."),(0,a.kt)("p",null,"When using Google SERP proxy, the username should always be:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"groups-GOOGLE_SERP\n")),(0,a.kt)("p",null,"Unlike ",(0,a.kt)("a",{parentName:"p",href:"/platform/proxy/datacenter-proxy",target:null,rel:null},"datacenter")," parameter."),(0,a.kt)("p",null,"If you use the ",(0,a.kt)("inlineCode",{parentName:"p"},"country")," ",(0,a.kt)("a",{parentName:"p",href:"/platform/proxy/connection-settings",target:null,rel:null},"parameter"),", the Google proxy location is used if you access a website whose hostname (stripped of ",(0,a.kt)("inlineCode",{parentName:"p"},"www."),") starts with ",(0,a.kt)("strong",{parentName:"p"},"google"),"."),(0,a.kt)("h2",{id:"-country-selection"},(0,a.kt)("a",{parentName:"h2",href:"#country-selection",target:null,rel:null})," Country selection"),(0,a.kt)("p",null,"You must use the correct Google domain to get results for your desired country code."),(0,a.kt)("p",null,"For example:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Search results from the USA: ",(0,a.kt)("inlineCode",{parentName:"li"},"http://www.google.com/search?q=<query>"))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Shopping results from Great Britain: ",(0,a.kt)("inlineCode",{parentName:"li"},"http://www.google.co.uk/seach?tbm=shop&q=<query>"))),(0,a.kt)("p",null,"See a ",(0,a.kt)("a",{parentName:"p",href:"https://ipfs.io/ipfs/QmXoypizjW3WknFiJnKLwHCnL72vedxjQkDDP1mXWo6uco/wiki/List_of_Google_domains.html",target:"_blank",rel:"noopener"},"full list")," of available domain names for specific countries. When using them, remember to prepend the domain name with the ",(0,a.kt)("inlineCode",{parentName:"p"},"www.")," prefix."))}g.isMDXComponent=!0}}]);