"use strict";(self.webpackChunkapify_docs_v2=self.webpackChunkapify_docs_v2||[]).push([[6461],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=p(n),f=o,u=m["".concat(l,".").concat(f)]||m[f]||d[f]||a;return n?r.createElement(u,i(i({ref:t},s),{},{components:n})):r.createElement(u,i({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},21178:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>f,frontMatter:()=>c,metadata:()=>p,toc:()=>d});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),i=["components"],c={title:"Actor config",description:"Learn how to write the main actor config in the `.actor/actor.json` file.",slug:"/actors/development/actor-config"},l="Actor config",p={unversionedId:"actors/development/actor_config",id:"actors/development/actor_config",title:"Actor config",description:"Learn how to write the main actor config in the `.actor/actor.json` file.",source:"@site/sources/platform/actors/development/actor_config.md",sourceDirName:"actors/development",slug:"/actors/development/actor-config",permalink:"/platform/actors/development/actor-config",draft:!1,editUrl:"https://github.com/apify/apify-docs-v2/edit/master/sources/platform/actors/development/actor_config.md",tags:[],version:"current",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1675427001,formattedLastUpdatedAt:"Feb 3, 2023",frontMatter:{title:"Actor config",description:"Learn how to write the main actor config in the `.actor/actor.json` file.",slug:"/actors/development/actor-config"},sidebar:"docs",previous:{title:"Development",permalink:"/platform/actors/development"},next:{title:"Base Docker images",permalink:"/platform/actors/development/base-docker-images"}},s={},d=[],m={toc:d};function f(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"actor-config"},"Actor config"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Learn how to write the main actor config in the ",(0,a.kt)("inlineCode",{parentName:"strong"},".actor/actor.json")," file.")),(0,a.kt)("hr",null),(0,a.kt)("p",null,"The main actor config should live in the ",(0,a.kt)("inlineCode",{parentName:"p"},".actor/actor.json")," file in the actor's root directory. This file associates your local development project with an actor on the Apify platform. It contains information such as actor name, version, build tag, and environment variables. Make sure you commit this file to the Git repository."),(0,a.kt)("p",null,"For example, the ",(0,a.kt)("inlineCode",{parentName:"p"},".actor/actor.json")," file can look this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "actorSpecification": 1, // always 1\n  "name": "name-of-my-scraper",\n  "version": "0.0",\n  "buildTag": "latest",\n  "environmentVariables": {\n      "MYSQL_USER": "my_username",\n      "MYSQL_PASSWORD": "@mySecretPassword"\n  },\n  "dockerfile": "./Dockerfile",\n  "readme": "./ACTOR.md",\n  "input": "./input_schema.json",\n  "storages": {\n    "dataset": "./dataset_schema.json",\n  }\n}\n')),(0,a.kt)("p",null,"Note that actor ",(0,a.kt)("inlineCode",{parentName:"p"},"name"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"version"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"buildTag")," are for informative purposes only, so they are not enforced on the platform right now. You will still need to properly name your actor during its creation, whether you create it directly on the platform or push it using the Apify CLI."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"dockerfile")," field"),"\\\nIf you specify the path to your Docker file under the ",(0,a.kt)("inlineCode",{parentName:"p"},"dockerfile")," field, this file will be used for actor builds on the platform. If not specified, the system will look for Docker files at ",(0,a.kt)("inlineCode",{parentName:"p"},".actor/Dockerfile")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"Dockerfile"),", in this order of preference."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"readme")," field")," \\\nIf you specify the path to your README file under the ",(0,a.kt)("inlineCode",{parentName:"p"},"readme")," field, the README at this path will be used on the platform. If not specified, README at ",(0,a.kt)("inlineCode",{parentName:"p"},".actor/README.md")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"README.md")," will be used, in this order of preference."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"input")," field"),"\\\nYou can embed your ",(0,a.kt)("a",{parentName:"p",href:"/actors/development/input-schema#specification-version-1",target:null,rel:null},"input schema")," object directly in ",(0,a.kt)("inlineCode",{parentName:"p"},"actor.json")," under the ",(0,a.kt)("inlineCode",{parentName:"p"},"input")," field. Alternatively, you can provide a path to a custom input schema. If not provided, the input schema at ",(0,a.kt)("inlineCode",{parentName:"p"},".actor/INPUT_SCHEMA.json")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"INPUT_SCHEMA.json")," is used, in this order of preference."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"storages.dataset")," field"),"\\\nYou can define the schema of the items in your dataset under the ",(0,a.kt)("inlineCode",{parentName:"p"},"storages.dataset")," field. This can be either an embedded object or a path to a JSON schema file. ",(0,a.kt)("a",{parentName:"p",href:"/actors/development/output-schema#specification-version-1",target:null,rel:null},"Read more")," about actor output schema."))}f.isMDXComponent=!0}}]);