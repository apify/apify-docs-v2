"use strict";(self.webpackChunkapify_docs_v2=self.webpackChunkapify_docs_v2||[]).push([[4622],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(n),h=r,g=d["".concat(o,".").concat(h)]||d[h]||c[h]||i;return n?a.createElement(g,l(l({ref:t},u),{},{components:n})):a.createElement(g,l({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=d;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},66810:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>p,toc:()=>c});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),l=["components"],s={title:"Using types - I",description:"Dip your toes into using types with TypeScript by learning about the core types offered by the language, and how to define variables and functions with them.",sidebar_position:7.2,slug:"/switching-to-typescript/using-types"},o="Using types",p={unversionedId:"webscraping/switching_to_typescript/using_types",id:"webscraping/switching_to_typescript/using_types",title:"Using types - I",description:"Dip your toes into using types with TypeScript by learning about the core types offered by the language, and how to define variables and functions with them.",source:"@site/sources/academy/webscraping/switching_to_typescript/using_types.md",sourceDirName:"webscraping/switching_to_typescript",slug:"/switching-to-typescript/using-types",permalink:"/academy/switching-to-typescript/using-types",draft:!1,editUrl:"https://github.com/apify/apify-docs-v2/edit/master/sources/academy/webscraping/switching_to_typescript/using_types.md",tags:[],version:"current",lastUpdatedBy:"Jind\u0159ich B\xe4r",lastUpdatedAt:1675956217,formattedLastUpdatedAt:"Feb 9, 2023",sidebarPosition:7.2,frontMatter:{title:"Using types - I",description:"Dip your toes into using types with TypeScript by learning about the core types offered by the language, and how to define variables and functions with them.",sidebar_position:7.2,slug:"/switching-to-typescript/using-types"},sidebar:"academy",previous:{title:"Installation & getting started",permalink:"/academy/switching-to-typescript/installation"},next:{title:"Using types - II",permalink:"/academy/switching-to-typescript/using-types-continued"}},u={},c=[{value:"Core types",id:"core-types",level:2},{value:"With variables",id:"with-variables",level:2},{value:"With functions",id:"with-functions",level:2},{value:"Next up",id:"next",level:2}],d={toc:c};function h(e){var t=e.components,s=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"using-types"},"Using types"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Dip your toes into using types with TypeScript by learning about the core types offered by the language, and how to define variables and functions with them.")),(0,i.kt)("hr",null),(0,i.kt)("p",null,"In the previous lesson, we got a rough idea of how types are used by utilizing the ",(0,i.kt)("inlineCode",{parentName:"p"},"number")," type in a function's parameters. The ",(0,i.kt)("inlineCode",{parentName:"p"},"number")," type is one of TypeScript's three core types."),(0,i.kt)("h2",{id:"core-types"},"Core types"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Example"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"number")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"1"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"5.3"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"-10")),(0,i.kt)("td",{parentName:"tr",align:null},"All numbers. No differentiation between integers and floats.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"'hi'"),", ",(0,i.kt)("inlineCode",{parentName:"td"},'"hello world"')),(0,i.kt)("td",{parentName:"tr",align:null},"All text values.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"boolean")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"true"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",{parentName:"tr",align:null},'Just these two. No "truthy" or "falsy" values.')))),(0,i.kt)("h2",{id:"with-variables"},"With variables"),(0,i.kt)("p",null,"Just because we're writing TS files doesn't mean we need to explicitly define the type of every single value/parameter though. We'll create a new file called ",(0,i.kt)("strong",{parentName:"p"},"using-types.ts")," and create a basic variable:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"let value = 10;\n")),(0,i.kt)("p",null,"When hovering over the variable, we see that TypeScript was smart enough to infer that the data type stored in ",(0,i.kt)("inlineCode",{parentName:"p"},"value")," should always be a number."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Type of variable automatically inferred",src:n(79003).Z,width:"380",height:"112"})),(0,i.kt)("p",null,"Attempting to reassign ",(0,i.kt)("inlineCode",{parentName:"p"},"value")," to be a type other than a number will result in a compiler error."),(0,i.kt)("p",null,"But what if we want to declare the variable with no initial value, then change it later?"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"let value;\n\nvalue = 10;\n")),(0,i.kt)("p",null,"TypeScript can't automatically infer the type of the variable when we don't provide it an initial value, so it automatically uses the ",(0,i.kt)("inlineCode",{parentName:"p"},"any")," type."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Note: Avoid using the ",(0,i.kt)("inlineCode",{parentName:"p"},"any")," type as much as possible. It completely defeats the purpose of using TypeScript in the first place, as it removes the benefits of TS.")),(0,i.kt)("p",null,"Because of this, we can set ",(0,i.kt)("inlineCode",{parentName:"p"},"value")," to be absolutely anything without receiving any compiler errors."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"TypeScript didn&#39;t infer the type",src:n(93915).Z,width:"358",height:"286"})),(0,i.kt)("p",null,"To resolve this, we can annotate the variable by adding a colon (",(0,i.kt)("inlineCode",{parentName:"p"},":"),") after the name followed by the name of the type we'd like to be tied to the variable."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"let value: number;\n\n// Totally ok\nvalue = 10;\n\n// This will throw a compiler error\nvalue = 'hello academy!';\n")),(0,i.kt)("p",null,"To allow for the ",(0,i.kt)("inlineCode",{parentName:"p"},"value")," variable to hold multiple different types, we can use a ",(0,i.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/docs/handbook/unions-and-intersections.html",target:"_blank",rel:"noopener"},"union type"),". It works just the same was as the ",(0,i.kt)("strong",{parentName:"p"},"or")," (",(0,i.kt)("inlineCode",{parentName:"p"},"||"),") operator in JavaScript, but only uses one pipe (",(0,i.kt)("inlineCode",{parentName:"p"},"|"),") character and only works with types and type annotations."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"// \"value\" can hold either a number or a string\nlet value: number | string;\n\n// Totally ok\nvalue = 10;\n\n// Totally ok\nvalue = 'hello academy!';\n\n// This will throw a compiler error, because we didn't include\n// number arrays in our union type.\nvalue = [1, 2, 3]\n")),(0,i.kt)("p",null,"Later in this course, we'll be getting more into union types."),(0,i.kt)("h2",{id:"with-functions"},"With functions"),(0,i.kt)("p",null,"With functions, you can define the types of both the parameters and the return type. Here's a basic function:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"const totalLengthIsGreaterThan10 = (string1, string2) => {\n    // Returns true if the total length of both strings is greater\n    // than 10, and false if it's less than 10.\n    return (string1 + string2).length > 10;\n};\n")),(0,i.kt)("p",null,"Just like with the parameters in the function from last lesson, and similar to variables, these parameters can be annotated with a colon (",(0,i.kt)("inlineCode",{parentName:"p"},":"),") and a type name. In this case, we are expecting two strings into this function."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"const totalLengthIsGreaterThan10 = (string1: string, string2: string) => {\n    return (string1 + string2).length > 10;\n};\n")),(0,i.kt)("p",null,"The return value of this function is a boolean, which TypeScript has intelligently inferred."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Return type inferred",src:n(63539).Z,width:"1298",height:"204"})),(0,i.kt)("p",null,"Despite the correct inference, if we wanted to explicitly annotate this function's return type, we could. Return type annotations go after the parentheses (",(0,i.kt)("inlineCode",{parentName:"p"},"()"),") where the function's parameters are defined."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"const totalLengthIsGreaterThan10 = (string1: string, string2: string): boolean => {\n    return (string1 + string2).length > 10;\n};\n")),(0,i.kt)("p",null,"For non-arrow functions, the type annotation syntax is the exact same:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"function totalLengthIsGreaterThan10(string1: string, string2: string): boolean {\n    return (string1 + string2).length > 10;\n}\n")),(0,i.kt)("h2",{id:"next"},"Next up"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/academy/switching-to-typescript/using-types-continued",target:null,rel:null},"Next up"),", we'll discuss a few more basic types supported in TypeScript and how to use them."))}h.isMDXComponent=!0},93915:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/is-any-0d6344ca55500c61ff83dbe16637a824.png"},79003:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/number-inference-b52562a8a1b1d62d46a9f89ed1104c07.png"},63539:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/return-inferred-dd8f872a1b004e5010022a75423620ed.png"}}]);