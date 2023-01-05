"use strict";(self.webpackChunkapify_docs_v2=self.webpackChunkapify_docs_v2||[]).push([[510],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),p=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=p(a),h=n,y=m["".concat(l,".").concat(h)]||m[h]||c[h]||o;return a?r.createElement(y,s(s({ref:t},u),{},{components:a})):r.createElement(y,s({ref:t},u))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,s=new Array(o);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var p=2;p<o;p++)s[p]=a[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},17001:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>p,toc:()=>c});var r=a(87462),n=a(63366),o=(a(67294),a(3905)),s=["components"],i={title:"Proxyman",description:"Learn about Proxyman, a tool for viewing all network requests that are coming through your system. Filter by response type, by a keyword, or by application.",sidebar_position:9.4,slug:"/tools/proxyman"},l="[](#what-is-proxyman) What's Proxyman?",p={unversionedId:"tools/proxyman",id:"tools/proxyman",title:"Proxyman",description:"Learn about Proxyman, a tool for viewing all network requests that are coming through your system. Filter by response type, by a keyword, or by application.",source:"@site/sources/academy/tools/proxyman.md",sourceDirName:"tools",slug:"/tools/proxyman",permalink:"/academy/tools/proxyman",draft:!1,tags:[],version:"current",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1672943117,formattedLastUpdatedAt:"Jan 5, 2023",sidebarPosition:9.4,frontMatter:{title:"Proxyman",description:"Learn about Proxyman, a tool for viewing all network requests that are coming through your system. Filter by response type, by a keyword, or by application.",sidebar_position:9.4,slug:"/tools/proxyman"},sidebar:"defaultSidebar",previous:{title:"Postman",permalink:"/academy/tools/postman"},next:{title:"ModHeader",permalink:"/academy/tools/modheader"}},u={},c=[{value:" The basics",id:"-the-basics",level:2},{value:"Apps",id:"apps",level:3},{value:"Results",id:"results",level:3},{value:"Filtering",id:"filtering",level:3},{value:" Alternatives",id:"-alternatives",level:2}],m={toc:c};function h(e){var t=e.components,i=(0,n.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"-whats-proxyman"},(0,o.kt)("a",{parentName:"h1",href:"#what-is-proxyman",target:null,rel:null})," What's Proxyman?"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Learn about Proxyman, a tool for viewing all network requests that are coming through your system. Filter by response type, by a keyword, or by application.")),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Though the name sounds very similar to ",(0,o.kt)("a",{parentName:"p",href:"/academy/tools/postman",target:null,rel:null},"Postman"),", ",(0,o.kt)("a",{parentName:"p",href:"https://proxyman.io/",target:"_blank",rel:"noopener"},(0,o.kt)("strong",{parentName:"a"},"Proxyman"))," is used for a different purpose. Rather than for manually sending and analyzing the responses of requests, Proxyman is a tool for macOS that allows you to view and analyze the HTTP/HTTPS requests that are going through your device. This is done by routing all of your requests through a proxy, which intercepts them and allows you to view data about them. Because it's just a proxy, the HTTP/HTTPS requests going through iOS devices, Android devices, and even iOS simulators can also be viewed with Proxyman."),(0,o.kt)("p",null,"If you've already gone through the ",(0,o.kt)("a",{parentName:"p",href:"/academy/api-scraping/general-api-scraping/locating-and-learning",target:null,rel:null},(0,o.kt)("strong",{parentName:"a"},"Locating and learning")," lesson")," in the ",(0,o.kt)("strong",{parentName:"p"},"API scraping")," section, you can think of Proxyman as an advanced Network Tab, where you can see requests that you sometimes can't see in regular browser DevTools."),(0,o.kt)("h2",{id:"-the-basics"},(0,o.kt)("a",{parentName:"h2",href:"#the-basics",target:null,rel:null})," The basics"),(0,o.kt)("p",null,"Though the application offers a whole lot of advanced features, there are only a few main features you'll be utilizing when using Proxyman for scraper development purposes. Let's open up Proxyman and take a look at some of the basic features:"),(0,o.kt)("h3",{id:"apps"},"Apps"),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"Apps")," tab allows you to both view all of the applications on your machine which are sending requests, as well as filter requests based on application."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Apps tab in Proxyman",src:a(18114).Z,width:"452",height:"940"})),(0,o.kt)("h3",{id:"results"},"Results"),(0,o.kt)("p",null,"Let's open up Safari and visit ",(0,o.kt)("strong",{parentName:"p"},"apify.com"),", then check back in Proxyman to see all of the requests Safari has made when visiting the website."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Results in Proxyman",src:a(14331).Z,width:"2190",height:"869"})),(0,o.kt)("p",null,"We can see all of the requests related to us visiting ",(0,o.kt)("strong",{parentName:"p"},"apify.com"),". Then, by clicking a request, we can see a whole lot of information about it. The most important information for you, however, will usually be the request and response ",(0,o.kt)("strong",{parentName:"p"},"headers")," and ",(0,o.kt)("strong",{parentName:"p"},"body"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"View a request",src:a(30439).Z,width:"2348",height:"780"})),(0,o.kt)("h3",{id:"filtering"},"Filtering"),(0,o.kt)("p",null,"Sometimes, there can be hundreds (or even thousands) of requests that appear in the list. Rather than spending your time rooting through all of them, you can use the plethora of filtering methods that Proxyman offers to find exactly what you are looking for."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Filter requests with the filter options",src:a(83862).Z,width:"780",height:"388"})),(0,o.kt)("h2",{id:"-alternatives"},(0,o.kt)("a",{parentName:"h2",href:"#alternatives",target:null,rel:null})," Alternatives"),(0,o.kt)("p",null,"Since Proxyman is only available for macOS, it's only appropriate to list some alternatives to it that are accessible to our Windows and Linux friends:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://portswigger.net/burp",target:"_blank",rel:"noopener"},"Burp Suite")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.charlesproxy.com/documentation/installation/",target:"_blank",rel:"noopener"},"Charles Proxy")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.telerik.com/fiddler",target:"_blank",rel:"noopener"},"Fiddler"))))}h.isMDXComponent=!0},18114:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/proxyman-apps-tab-f755d952fbf510006e597465395c8864.webp"},83862:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/proxyman-filter-e5174519a33b38250db2ee3c9fa5eb47.webp"},14331:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/proxyman-results-3f558264ea609d394b5d2cb6a164c194.webp"},30439:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/proxyman-view-request-ee04c5d25850d12c9df3ddf14b84e257.webp"}}]);