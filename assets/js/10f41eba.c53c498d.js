"use strict";(self.webpackChunkapify_docs_v2=self.webpackChunkapify_docs_v2||[]).push([[5040],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),d=c(r),f=a,m=d["".concat(i,".").concat(f)]||d[f]||p[f]||o;return r?n.createElement(m,l(l({ref:t},s),{},{components:r})):n.createElement(m,l({ref:t},s))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=d;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u.mdxType="string"==typeof e?e:a,l[1]=u;for(var c=2;c<o;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},75294:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>y,frontMatter:()=>c,metadata:()=>p,toc:()=>f});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),l=r(74866),u=r(85162),i=["components"],c={title:"Deploying your code",description:"In this course learn how to take an existing project of yours and deploy it to the Apify platform as an actor in just a few minutes!",sidebar_position:9,category:"apify platform",slug:"/deploying-your-code"},s="Deploying your code to Apify",p={unversionedId:"platform/deploying_your_code/index",id:"platform/deploying_your_code/index",title:"Deploying your code",description:"In this course learn how to take an existing project of yours and deploy it to the Apify platform as an actor in just a few minutes!",source:"@site/sources/academy/platform/deploying_your_code/index.md",sourceDirName:"platform/deploying_your_code",slug:"/deploying-your-code",permalink:"/academy/deploying-your-code",draft:!1,tags:[],version:"current",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1675423550,formattedLastUpdatedAt:"Feb 3, 2023",sidebarPosition:9,frontMatter:{title:"Deploying your code",description:"In this course learn how to take an existing project of yours and deploy it to the Apify platform as an actor in just a few minutes!",sidebar_position:9,category:"apify platform",slug:"/deploying-your-code"},sidebar:"academy",previous:{title:"Apify client",permalink:"/academy/getting-started/apify-client"},next:{title:"Inputs & outputs",permalink:"/academy/deploying-your-code/inputs-outputs"}},d={},f=[{value:"The &quot;actorification&quot; workflow",id:"workflow",level:2},{value:"Our example project",id:"our-example-project",level:2},{value:"Next up",id:"next",level:2}],m={toc:f};function y(e){var t=e.components,c=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},m,c,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"deploying"},"Deploying your code to Apify"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"In this course learn how to take an existing project of yours and deploy it to the Apify platform as an actor in just a few minutes!")),(0,o.kt)("hr",null),(0,o.kt)("p",null,"This section will discuss how to use your newfound knowledge of the Apify platform and actors from the ",(0,o.kt)("a",{parentName:"p",href:"/academy/getting-started",target:null,rel:null},(0,o.kt)("strong",{parentName:"a"},"Getting started"))," section to deploy your existing project's code to the Apify platform as an actor."),(0,o.kt)("p",null,"Because actors are basically just chunks of code running in Docker containers, you're able to ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"Actorify"))," just about anything!"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"The deployment workflow",src:r(98145).Z,width:"1884",height:"1454"})),(0,o.kt)("p",null,"Actors are language agnostic, which means that the language your project is written in does not affect your ability to actorify it."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Supported languages",src:r(4503).Z,width:"1000",height:"439"})),(0,o.kt)("p",null,"Though the majority of actors currently on the platform were written in Node.js, and despite the fact our current preferred languages are JavaScript and Python, there are a few examples of actors in other languages:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://apify.com/lukaskrivka/rust-actor-example",target:"_blank",rel:"noopener"},"Actor written in Rust")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://apify.com/jirimoravcik/go-actor-example",target:"_blank",rel:"noopener"},"GO actor")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://apify.com/jirimoravcik/julia-actor-example",target:"_blank",rel:"noopener"},"Actor written with Julia"))),(0,o.kt)("h2",{id:"workflow"},'The "actorification" workflow'),(0,o.kt)("p",null,"There are four main steps to turning a piece of code into an actor:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Handle ",(0,o.kt)("a",{parentName:"li",href:"/academy/deploying-your-code/inputs-outputs",target:null,rel:null},"accepting inputs and writing outputs"),"."),(0,o.kt)("li",{parentName:"ol"},"Create an ",(0,o.kt)("a",{parentName:"li",href:"/academy/deploying-your-code/input-schema",target:null,rel:null},"input schema")," ",(0,o.kt)("strong",{parentName:"li"},"(optional)"),"."),(0,o.kt)("li",{parentName:"ol"},"Add a ",(0,o.kt)("a",{parentName:"li",href:"/academy/deploying-your-code/docker-file",target:null,rel:null},"Dockerfile"),"."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"/academy/deploying-your-code/deploying",target:null,rel:null},"Deploy")," to the Apify platform!")),(0,o.kt)("h2",{id:"our-example-project"},"Our example project"),(0,o.kt)("p",null,"For this section, we'll be turning this example project into an actor:"),(0,o.kt)(l.Z,{groupId:"main",mdxType:"Tabs"},(0,o.kt)(u.Z,{value:"JavaScript",label:"JavaScript",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"// index.js\nconst addAllNumbers = (...nums) => nums.reduce((total, curr) => (total += curr));\n\nconsole.log(addAllNumbers(1, 2, 3, 4)) // -> 10\n\n"))),(0,o.kt)(u.Z,{value:"Python",label:"Python",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"# index.py\ndef add_all_numbers (nums):\n    total = 0\n\n    for num in nums:\n        total += num\n\n    return total\n\nprint(add_all_numbers([1, 2, 3, 4])) # -> 10\n\n")))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"For all lessons in this section, we'll have examples for both Node.js and Python so that you can follow along in either language.")),(0,o.kt)("h2",{id:"next"},"Next up"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/academy/deploying-your-code/inputs-outputs",target:null,rel:null},"Next lesson"),", we'll be learning how to accept input into our actor as well as deliver output."))}y.isMDXComponent=!0},85162:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(67294),a=r(86010);const o="tabItem_Ymn6";function l(e){var t=e.children,r=e.hidden,l=e.className;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,l),hidden:r},t)}},74866:(e,t,r)=>{r.d(t,{Z:()=>N});var n=r(87462),a=r(67294),o=r(86010),l=r(12466),u=r(16550),i=r(91980),c=r(67392),s=r(50012);function p(e){return function(e){return a.Children.map(e,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')}))}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function d(e){var t=e.values,r=e.children;return(0,a.useMemo)((function(){var e=null!=t?t:p(r);return function(e){var t=(0,c.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,r])}function f(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function m(e){var t=e.queryString,r=void 0!==t&&t,n=e.groupId,o=(0,u.k6)(),l=function(e){var t=e.queryString,r=void 0!==t&&t,n=e.groupId;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:r,groupId:n});return[(0,i._X)(l),(0,a.useCallback)((function(e){if(l){var t=new URLSearchParams(o.location.search);t.set(l,e),o.replace(Object.assign({},o.location,{search:t.toString()}))}}),[l,o])]}function y(e){var t,r,n,o,l=e.defaultValue,u=e.queryString,i=void 0!==u&&u,c=e.groupId,p=d(e),y=(0,a.useState)((function(){return function(e){var t,r=e.defaultValue,n=e.tabValues;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!f({value:r,tabValues:n}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+r+'" but none of its children has the corresponding value. Available values are: '+n.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return r}var a=null!=(t=n.find((function(e){return e.default})))?t:n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:l,tabValues:p})})),g=y[0],h=y[1],v=m({queryString:i,groupId:c}),b=v[0],k=v[1],w=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:c}.groupId),r=(0,s.Nk)(t),n=r[0],o=r[1],[n,(0,a.useCallback)((function(e){t&&o.set(e)}),[t,o])]),N=w[0],x=w[1],j=function(){var e=null!=b?b:N;return f({value:e,tabValues:p})?e:null}();return(0,a.useEffect)((function(){j&&h(j)}),[j]),{selectedValue:g,selectValue:(0,a.useCallback)((function(e){if(!f({value:e,tabValues:p}))throw new Error("Can't select invalid tab value="+e);h(e),k(e),x(e)}),[k,x,p]),tabValues:p}}var g=r(72389);const h="tabList__CuJ",v="tabItem_LNqP";function b(e){var t=e.className,r=e.block,u=e.selectedValue,i=e.selectValue,c=e.tabValues,s=[],p=(0,l.o5)().blockElementScrollPositionUntilNextRender,d=function(e){var t=e.currentTarget,r=s.indexOf(t),n=c[r].value;n!==u&&(p(t),i(n))},f=function(e){var t,r=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":var n,a=s.indexOf(e.currentTarget)+1;r=null!=(n=s[a])?n:s[0];break;case"ArrowLeft":var o,l=s.indexOf(e.currentTarget)-1;r=null!=(o=s[l])?o:s[s.length-1]}null==(t=r)||t.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":r},t)},c.map((function(e){var t=e.value,r=e.label,l=e.attributes;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:u===t?0:-1,"aria-selected":u===t,key:t,ref:function(e){return s.push(e)},onKeyDown:f,onClick:d},l,{className:(0,o.Z)("tabs__item",v,null==l?void 0:l.className,{"tabs__item--active":u===t})}),null!=r?r:t)})))}function k(e){var t=e.lazy,r=e.children,n=e.selectedValue;if(t){var o=r.find((function(e){return e.props.value===n}));return o?(0,a.cloneElement)(o,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},r.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==n})})))}function w(e){var t=y(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",h)},a.createElement(b,(0,n.Z)({},e,t)),a.createElement(k,(0,n.Z)({},e,t)))}function N(e){var t=(0,g.Z)();return a.createElement(w,(0,n.Z)({key:String(t)},e))}},98145:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/deployment-workflow-72f8b289e512701951e27c687a932dfa.png"},4503:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/supported-languages-11478c97d7fc26852cd5ee7a9a853166.webp"}}]);