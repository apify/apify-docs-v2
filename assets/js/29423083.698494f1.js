"use strict";(self.webpackChunkapify_docs_v2=self.webpackChunkapify_docs_v2||[]).push([[1149],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),h=p(n),d=r,m=h["".concat(s,".").concat(d)]||h[d]||c[d]||i;return n?a.createElement(m,l(l({ref:t},u),{},{components:n})):a.createElement(m,l({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=h;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},87590:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),l=["components"],o={title:"Using types - I",description:"Dip your toes into using types with TypeScript by learning about the core types offered by the language, and how to define variables and functions with them.",sidebar_position:7.2,slug:"/switching-to-typescript/using-types"},s="[](#using-types) Using types",p={unversionedId:"switching_to_typescript/using_types",id:"switching_to_typescript/using_types",title:"Using types - I",description:"Dip your toes into using types with TypeScript by learning about the core types offered by the language, and how to define variables and functions with them.",source:"@site/sources/academy/switching_to_typescript/using_types.md",sourceDirName:"switching_to_typescript",slug:"/switching-to-typescript/using-types",permalink:"/academy/switching-to-typescript/using-types",draft:!1,tags:[],version:"current",lastUpdatedBy:"Jan B\xe1rta",lastUpdatedAt:1672839242,formattedLastUpdatedAt:"Jan 4, 2023",sidebarPosition:7.2,frontMatter:{title:"Using types - I",description:"Dip your toes into using types with TypeScript by learning about the core types offered by the language, and how to define variables and functions with them.",sidebar_position:7.2,slug:"/switching-to-typescript/using-types"},sidebar:"defaultSidebar",previous:{title:"Installation & getting started",permalink:"/academy/switching-to-typescript/installation"},next:{title:"Using types - II",permalink:"/academy/switching-to-typescript/using-types-continued"}},u={},c=[{value:"Core types",id:"core-types",level:2},{value:" With variables",id:"-with-variables",level:2},{value:" With functions",id:"-with-functions",level:2},{value:" Next up",id:"-next-up",level:2}],h={toc:c};function d(e){var t=e.components,o=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},h,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"-using-types"},(0,i.kt)("a",{parentName:"h1",href:"#using-types",target:null,rel:null})," Using types"),(0,i.kt)("p",null,"In the previous lesson, we got a rough idea of how types are used by utilizing the ",(0,i.kt)("inlineCode",{parentName:"p"},"number")," type in a function's parameters. The ",(0,i.kt)("inlineCode",{parentName:"p"},"number")," type is one of TypeScript's three core types."),(0,i.kt)("h2",{id:"core-types"},"Core types"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Example"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"number")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"1"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"5.3"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"-10")),(0,i.kt)("td",{parentName:"tr",align:null},"All numbers. No differentiation between integers and floats.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"'hi'"),", ",(0,i.kt)("inlineCode",{parentName:"td"},'"hello world"')),(0,i.kt)("td",{parentName:"tr",align:null},"All text values.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"boolean")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"true"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",{parentName:"tr",align:null},'Just these two. No "truthy" or "falsy" values.')))),(0,i.kt)("h2",{id:"-with-variables"},(0,i.kt)("a",{parentName:"h2",href:"#with-variables",target:null,rel:null})," With variables"),(0,i.kt)("p",null,"Just because we're writing TS files doesn't mean we need to explicitly define the type of every single value/parameter though. We'll create a new file called ",(0,i.kt)("strong",{parentName:"p"},"using-types.ts")," and create a basic variable:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"let value = 10;\n")),(0,i.kt)("p",null,"When hovering over the variable, we see that TypeScript was smart enough to infer that the data type stored in ",(0,i.kt)("inlineCode",{parentName:"p"},"value")," should always be a number."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Type of variable automatically inferred",src:n(86355).Z,width:"380",height:"112"})),(0,i.kt)("p",null,"Attempting to reassign ",(0,i.kt)("inlineCode",{parentName:"p"},"value")," to be a type other than a number will result in a compiler error."),(0,i.kt)("p",null,"But what if we want to declare the variable with no initial value, then change it later?"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"let value;\n\nvalue = 10;\n")),(0,i.kt)("p",null,"TypeScript can't automatically infer the type of the variable when we don't provide it an initial value, so it automatically uses the ",(0,i.kt)("inlineCode",{parentName:"p"},"any")," type."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Note: Avoid using the ",(0,i.kt)("inlineCode",{parentName:"p"},"any")," type as much as possible. It completely defeats the purpose of using TypeScript in the first place, as it removes the benefits of TS.")),(0,i.kt)("p",null,"Because of this, we can set ",(0,i.kt)("inlineCode",{parentName:"p"},"value")," to be absolutely anything without receiving any compiler errors."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"TypeScript didn&#39;t infer the type",src:n(14851).Z,width:"358",height:"286"})),(0,i.kt)("p",null,"To resolve this, we can annotate the variable by adding a colon (",(0,i.kt)("inlineCode",{parentName:"p"},":"),") after the name followed by the name of the type we'd like to be tied to the variable."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"let value: number;\n\n// Totally ok\nvalue = 10;\n\n// This will throw a compiler error\nvalue = 'hello academy!';\n")),(0,i.kt)("p",null,"To allow for the ",(0,i.kt)("inlineCode",{parentName:"p"},"value")," variable to hold multiple different types, we can use a ",(0,i.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/docs/handbook/unions-and-intersections.html",target:"_blank",rel:"noopener"},"union type"),". It works just the same was as the ",(0,i.kt)("strong",{parentName:"p"},"or")," (",(0,i.kt)("inlineCode",{parentName:"p"},"||"),") operator in JavaScript, but only uses one pipe (",(0,i.kt)("inlineCode",{parentName:"p"},"|"),") character and only works with types and type annotations."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"// \"value\" can hold either a number or a string\nlet value: number | string;\n\n// Totally ok\nvalue = 10;\n\n// Totally ok\nvalue = 'hello academy!';\n\n// This will throw a compiler error, because we didn't include\n// number arrays in our union type.\nvalue = [1, 2, 3]\n")),(0,i.kt)("p",null,"Later in this course, we'll be getting more into union types."),(0,i.kt)("h2",{id:"-with-functions"},(0,i.kt)("a",{parentName:"h2",href:"#with-functions",target:null,rel:null})," With functions"),(0,i.kt)("p",null,"With functions, you can define the types of both the parameters and the return type. Here's a basic function:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"const totalLengthIsGreaterThan10 = (string1, string2) => {\n    // Returns true if the total length of both strings is greater\n    // than 10, and false if it's less than 10.\n    return (string1 + string2).length > 10;\n};\n")),(0,i.kt)("p",null,"Just like with the parameters in the function from last lesson, and similar to variables, these parameters can be annotated with a colon (",(0,i.kt)("inlineCode",{parentName:"p"},":"),") and a type name. In this case, we are expecting two strings into this function."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"const totalLengthIsGreaterThan10 = (string1: string, string2: string) => {\n    return (string1 + string2).length > 10;\n};\n")),(0,i.kt)("p",null,"The return value of this function is a boolean, which TypeScript has intelligently inferred."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Return type inferred",src:n(32722).Z,width:"1298",height:"204"})),(0,i.kt)("p",null,"Despite the correct inference, if we wanted to explicitly annotate this function's return type, we could. Return type annotations go after the parentheses (",(0,i.kt)("inlineCode",{parentName:"p"},"()"),") where the function's parameters are defined."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"const totalLengthIsGreaterThan10 = (string1: string, string2: string): boolean => {\n    return (string1 + string2).length > 10;\n};\n")),(0,i.kt)("p",null,"For non-arrow functions, the type annotation syntax is the exact same:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"function totalLengthIsGreaterThan10(string1: string, string2: string): boolean {\n    return (string1 + string2).length > 10;\n}\n")),(0,i.kt)("h2",{id:"-next-up"},(0,i.kt)("a",{parentName:"h2",href:"#next",target:null,rel:null})," Next up"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/academy/switching-to-typescript/using-types-continued",target:null,rel:null},"Next up"),", we'll discuss a few more basic types supported in TypeScript and how to use them."))}d.isMDXComponent=!0},14851:(e,t,n)=>{n.d(t,{Z:()=>a});const a="data:image/webp;base64,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"},86355:(e,t,n)=>{n.d(t,{Z:()=>a});const a="data:image/webp;base64,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"},32722:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/return-inferred-167c034df30d9d18137e545a12ae28a3.webp"}}]);