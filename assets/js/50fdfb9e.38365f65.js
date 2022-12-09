"use strict";(self.webpackChunkapify_docs_v2=self.webpackChunkapify_docs_v2||[]).push([[5661],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>y});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(r),y=a,f=d["".concat(p,".").concat(y)]||d[y]||s[y]||o;return r?n.createElement(f,l(l({ref:t},c),{},{components:r})):n.createElement(f,l({ref:t},c))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},71120:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>y,frontMatter:()=>i,metadata:()=>u,toc:()=>s});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),l=["components"],i={title:"Deploying your code",description:"In this course learn how to take an existing project of yours and deploy it to the Apify platform as an actor in just a few minutes!",sidebar_position:9,category:"apify platform",slug:"/deploying-your-code"},p="[](#deploying) Deploying your code to Apify",u={unversionedId:"deploying_your_code/index",id:"deploying_your_code/index",title:"Deploying your code",description:"In this course learn how to take an existing project of yours and deploy it to the Apify platform as an actor in just a few minutes!",source:"@site/sources/academy/deploying_your_code/index.md",sourceDirName:"deploying_your_code",slug:"/deploying-your-code",permalink:"/academy/deploying-your-code",draft:!1,tags:[],version:"current",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1670592461,formattedLastUpdatedAt:"Dec 9, 2022",sidebarPosition:9,frontMatter:{title:"Deploying your code",description:"In this course learn how to take an existing project of yours and deploy it to the Apify platform as an actor in just a few minutes!",sidebar_position:9,category:"apify platform",slug:"/deploying-your-code"},sidebar:"defaultSidebar",previous:{title:"Apify client",permalink:"/academy/getting-started/apify-client"},next:{title:"Inputs & outputs",permalink:"/academy/deploying-your-code/inputs-outputs"}},c={},s=[{value:" The &quot;actorification&quot; workflow",id:"-the-actorification-workflow",level:2},{value:"Our example project",id:"our-example-project",level:2},{value:" Next up",id:"-next-up",level:2}],d={toc:s};function y(e){var t=e.components,i=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"-deploying-your-code-to-apify"},(0,o.kt)("a",{parentName:"h1",href:"#deploying",target:null,rel:null})," Deploying your code to Apify"),(0,o.kt)("p",null,"This section will discuss how to use your newfound knowledge of the Apify platform and actors from the ",(0,o.kt)("a",{parentName:"p",href:"../getting_started.md",target:null,rel:null},(0,o.kt)("strong",{parentName:"a"},"Getting started"))," section to deploy your existing project's code to the Apify platform as an actor."),(0,o.kt)("p",null,"Because actors are basically just chunks of code running in Docker containers, you're able to ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"Actorify"))," just about anything!"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"The deployment workflow",src:r(38794).Z,width:"1884",height:"1454"})),(0,o.kt)("p",null,"Actors are language agnostic, which means that the language your project is written in does not affect your ability to actorify it."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Supported languages",src:r(4503).Z,width:"1000",height:"439"})),(0,o.kt)("p",null,"Though the majority of actors currently on the platform were written in Node.js, and despite the fact our current preferred languages are JavaScript and Python, there are a few examples of actors in other languages:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://apify.com/lukaskrivka/rust-actor-example",target:"_blank",rel:"noopener"},"Actor written in Rust")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://apify.com/jirimoravcik/go-actor-example",target:"_blank",rel:"noopener"},"GO actor")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://apify.com/jirimoravcik/julia-actor-example",target:"_blank",rel:"noopener"},"Actor written with Julia"))),(0,o.kt)("h2",{id:"-the-actorification-workflow"},(0,o.kt)("a",{parentName:"h2",href:"#workflow",target:null,rel:null}),' The "actorification" workflow'),(0,o.kt)("p",null,"There are four main steps to turning a piece of code into an actor:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Handle ",(0,o.kt)("a",{parentName:"li",href:"/academy/deploying-your-code/inputs-outputs",target:null,rel:null},"accepting inputs and writing outputs"),"."),(0,o.kt)("li",{parentName:"ol"},"Create an ",(0,o.kt)("a",{parentName:"li",href:"/academy/deploying-your-code/input-schema",target:null,rel:null},"input schema")," ",(0,o.kt)("strong",{parentName:"li"},"(optional)"),"."),(0,o.kt)("li",{parentName:"ol"},"Add a ",(0,o.kt)("a",{parentName:"li",href:"/academy/deploying-your-code/docker-file",target:null,rel:null},"Dockerfile"),"."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"/academy/deploying-your-code/deploying",target:null,rel:null},"Deploy")," to the Apify platform!")),(0,o.kt)("h2",{id:"our-example-project"},"Our example project"),(0,o.kt)("p",null,"For this section, we'll be turning this example project into an actor:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-marked-tabs"},'<marked-tab header="JavaScript" lang="javascript">\n// index.js\nconst addAllNumbers = (...nums) => nums.reduce((total, curr) => (total += curr));\n\nconsole.log(addAllNumbers(1, 2, 3, 4)) // -> 10\n</marked-tab>\n<marked-tab header="Python" lang="python">\n# index.py\ndef add_all_numbers (nums):\n    total = 0\n\n    for num in nums:\n        total += num\n\n    return total\n\nprint(add_all_numbers([1, 2, 3, 4])) # -> 10\n</marked-tab>\n')),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"For all lessons in this section, we'll have examples for both Node.js and Python so that you can follow along in either language.")),(0,o.kt)("h2",{id:"-next-up"},(0,o.kt)("a",{parentName:"h2",href:"#next",target:null,rel:null})," Next up"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/academy/deploying-your-code/inputs-outputs",target:null,rel:null},"Next lesson"),", we'll be learning how to accept input into our actor as well as deliver output."))}y.isMDXComponent=!0},38794:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/deployment-workflow-8f4931d5014bf05fa591d8d4b2b5a31b.webp"},4503:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/supported-languages-11478c97d7fc26852cd5ee7a9a853166.webp"}}]);