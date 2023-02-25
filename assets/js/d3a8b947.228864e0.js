"use strict";(self.webpackChunkapify_docs_v2=self.webpackChunkapify_docs_v2||[]).push([[9680],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),i=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=i(e.components);return n.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=i(r),m=a,k=c["".concat(p,".").concat(m)]||c[m]||d[m]||o;return r?n.createElement(k,l(l({ref:t},u),{},{components:r})):n.createElement(k,l({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=c;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var i=2;i<o;i++)l[i]=r[i];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},87527:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>m,frontMatter:()=>s,metadata:()=>i,toc:()=>d});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),l=["components"],s={title:"Connection settings",description:"Learn how to connect your application to Apify Proxy. See the required parameters such as the correct username and password.",sidebar_position:10.1,slug:"/proxy/connection-settings"},p="Connection settings",i={unversionedId:"proxy/connection_settings",id:"proxy/connection_settings",title:"Connection settings",description:"Learn how to connect your application to Apify Proxy. See the required parameters such as the correct username and password.",source:"@site/sources/platform/proxy/connection_settings.md",sourceDirName:"proxy",slug:"/proxy/connection-settings",permalink:"/platform/proxy/connection-settings",draft:!1,editUrl:"https://github.com/apify/apify-docs-v2/edit/master/sources/platform/proxy/connection_settings.md",tags:[],version:"current",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1677347846,formattedLastUpdatedAt:"Feb 25, 2023",sidebarPosition:10.1,frontMatter:{title:"Connection settings",description:"Learn how to connect your application to Apify Proxy. See the required parameters such as the correct username and password.",sidebar_position:10.1,slug:"/proxy/connection-settings"},sidebar:"docs",previous:{title:"Proxy",permalink:"/platform/proxy"},next:{title:"Datacenter proxy",permalink:"/platform/proxy/datacenter-proxy"}},u={},d=[{value:"Username parameters",id:"username-parameters",level:2},{value:"Code examples",id:"code-examples",level:2},{value:"Proxy groups",id:"proxy-groups",level:2}],c={toc:d};function m(e){var t=e.components,r=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"connection-settings"},"Connection settings"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Learn how to connect your application to Apify Proxy. See the required parameters such as the correct username and password.")),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Below are the HTTP proxy connection settings for Apify Proxy."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,o.kt)("th",{parentName:"tr",align:null},"Value / explanation"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Proxy\xa0type"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"HTTP"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Hostname"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"proxy.apify.com"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Port"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"8000"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Username"),(0,o.kt)("td",{parentName:"tr",align:null},"Specifies the proxy parameters such as groups, ",(0,o.kt)("a",{parentName:"td",href:"/platform/proxy",target:null,rel:null},"session")," and location. ",(0,o.kt)("br",null),"See ",(0,o.kt)("a",{parentName:"td",href:"#username-parameters",target:null,rel:null},"username parameters")," below for details. ",(0,o.kt)("br",null),(0,o.kt)("strong",{parentName:"td"},"Note"),": this is not your Apify username.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Password"),(0,o.kt)("td",{parentName:"tr",align:null},"Proxy password. Your password is displayed on the ",(0,o.kt)("a",{parentName:"td",href:"https://console.apify.com/proxy",target:"_blank",rel:"noopener"},"Proxy")," page in the Apify Console. ",(0,o.kt)("br",null),"In Apify ",(0,o.kt)("a",{parentName:"td",href:"/platform/actors",target:null,rel:null},"actors"),", it is passed as the ",(0,o.kt)("inlineCode",{parentName:"td"},"APIFY_PROXY_PASSWORD")," ",(0,o.kt)("br",null),"environment variable.",(0,o.kt)("br",null),"See the ",(0,o.kt)("a",{parentName:"td",href:"/platform/actors/development/environment-variables",target:null,rel:null},"environment variables docs")," for more details.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Connection URL"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"http://<username>:<password>@proxy.apify.com:8000"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Static IP Addresses"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"18.208.102.16"),", ",(0,o.kt)("inlineCode",{parentName:"td"},"35.171.134.41")," Static IP addresses, ",(0,o.kt)("br",null),"that can be used as alternatives to ",(0,o.kt)("inlineCode",{parentName:"td"},"Hostname"),".")))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"WARNING:")," All usage of Apify Proxy with your password is charged towards your account. Do not share the password with untrusted parties or use it from insecure networks \u2013 ",(0,o.kt)("strong",{parentName:"p"},"the password is sent unencrypted")," due to the HTTP protocol's ",(0,o.kt)("a",{parentName:"p",href:"https://www.guru99.com/difference-http-vs-https.html",target:"_blank",rel:"noopener"},"limitations"),"."),(0,o.kt)("h2",{id:"username-parameters"},"Username parameters"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"username")," field enables you to pass parameters like ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"#proxy-groups",target:null,rel:null},"groups")),", ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"/platform/proxy",target:null,rel:null},"session")," ID")," and ",(0,o.kt)("strong",{parentName:"p"},"country")," for your proxy connection."),(0,o.kt)("p",null,"For example, if you're using ",(0,o.kt)("a",{parentName:"p",href:"/platform/proxy/datacenter-proxy",target:null,rel:null},"datacenter proxies")," and want to use the ",(0,o.kt)("inlineCode",{parentName:"p"},"new_job_123")," session using the ",(0,o.kt)("inlineCode",{parentName:"p"},"SHADER")," group, the username will be:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"groups-SHADER,session-new_job_123\n")),(0,o.kt)("p",null,"The table below describes the available parameters."),(0,o.kt)("table",{class:"table table-bordered table-condensed"},(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("th",null,(0,o.kt)("code",null,"groups")),(0,o.kt)("td",null,"Set proxied requests to use servers from the selected groups.",(0,o.kt)("br",null),"Set to ",(0,o.kt)("code",null,"groups-[group name]")," or ",(0,o.kt)("code",null,"auto")," when using datacenter proxies.",(0,o.kt)("br",null),"Set to ",(0,o.kt)("code",null,"groups-RESIDENTIAL")," when using residential proxies.",(0,o.kt)("br",null),"Set to ",(0,o.kt)("code",null,"groups-GOOGLE_SERP")," when using Google SERP proxies.")),(0,o.kt)("tr",null,(0,o.kt)("th",null,(0,o.kt)("code",null,"session")),(0,o.kt)("td",null,"If specified, all proxied requests with the same session identifier are routed",(0,o.kt)("br",null),"through the same IP address. For example ",(0,o.kt)("code",null,"session-new_job_123"),".",(0,o.kt)("br",null),(0,o.kt)("strong",null,"This parameter is optional"),". By default, each proxied request is assigned a",(0,o.kt)("br",null),"randomly picked least used IP address.",(0,o.kt)("br",null),(0,o.kt)("strong",null,"The session string can only contain numbers (0-9), letters (a-z or A-Z), dot (.),",(0,o.kt)("br",null),"underscore (_), a tilde (~). The maximum length is 50 characters."))),(0,o.kt)("tr",null,(0,o.kt)("th",null,(0,o.kt)("code",null,"country")),(0,o.kt)("td",null,"If specified, all proxied requests will use proxy servers from a selected country.",(0,o.kt)("br",null),"Note that if there are no proxy servers",(0,o.kt)("br",null),"from the specified country, the connection will fail.",(0,o.kt)("br",null),"For example ",(0,o.kt)("code",null,"groups-SHADER,country-US")," uses proxies",(0,o.kt)("br",null)," from the ",(0,o.kt)("code",null,"SHADER")," group located in the USA.",(0,o.kt)("br",null),(0,o.kt)("strong",null,"This parameter is optional"),". By default, the proxy uses all available",(0,o.kt)("br",null),"proxy servers from all countries.")))),(0,o.kt)("p",null,"If you want to specify one parameter and not the others, just provide that parameter and omit the others. To use the default behavior (not specifying either ",(0,o.kt)("inlineCode",{parentName:"p"},"groups"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"session"),", or ",(0,o.kt)("inlineCode",{parentName:"p"},"country"),"), set the username to ",(0,o.kt)("strong",{parentName:"p"},"auto"),". ",(0,o.kt)("strong",{parentName:"p"},"auto")," serves as a placeholder because the username can't be empty."),(0,o.kt)("p",null,"To learn more about ",(0,o.kt)("a",{parentName:"p",href:"/platform/proxy#sessions",target:null,rel:null},"sessions")," and ",(0,o.kt)("a",{parentName:"p",href:"/platform/proxy#ip-address-rotation",target:null,rel:null},"IP address rotation"),", see the ",(0,o.kt)("a",{parentName:"p",href:"/platform/proxy",target:null,rel:null},"proxy overview page"),"."),(0,o.kt)("h2",{id:"code-examples"},"Code examples"),(0,o.kt)("p",null,"We have code examples for connecting to our proxy using the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.apify.com/sdk/js",target:"_blank",rel:"noopener"},"Apify SDK")," and ",(0,o.kt)("a",{parentName:"p",href:"https://crawlee.dev/",target:"_blank",rel:"noopener"},"Crawlee")," and other JavaScript libraries (",(0,o.kt)("strong",{parentName:"p"},"axios")," and ",(0,o.kt)("strong",{parentName:"p"},"got-scraping"),"), as well as examples in Python and PHP."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/platform/proxy/datacenter-proxy/examples",target:null,rel:null},"Datacenter proxy")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/platform/proxy/residential-proxy",target:null,rel:null},"Residential proxy")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/platform/proxy/google-serp-proxy/examples",target:null,rel:null},"Google SERP proxy"))),(0,o.kt)("h2",{id:"proxy-groups"},"Proxy groups"),(0,o.kt)("p",null,"You can see which proxy groups you have access to on the ",(0,o.kt)("a",{parentName:"p",href:"https://console.apify.com/proxy",target:"_blank",rel:"noopener"},"Proxy page")," in the Apify Console."),(0,o.kt)("p",null,"To use a specific proxy group (or multiple groups), specify it in the ",(0,o.kt)("inlineCode",{parentName:"p"},"username")," parameter."))}m.isMDXComponent=!0}}]);