"use strict";(self.webpackChunkapify_docs_v2=self.webpackChunkapify_docs_v2||[]).push([[1688],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>y});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=p(n),y=r,m=d["".concat(l,".").concat(y)]||d[y]||c[y]||i;return n?a.createElement(m,s(s({ref:t},u),{},{components:n})):a.createElement(m,s({ref:t},u))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var p=2;p<i;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},93747:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>y,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),s=["components"],o={title:"Type aliases & function types",description:'Create your own custom types using the "type" keyword, understand the "void" type, and learn how to write custom function types.',sidebar_position:7.5,slug:"/switching-to-typescript/type-aliases"},l="Type aliases",p={unversionedId:"webscraping/switching_to_typescript/type_aliases",id:"webscraping/switching_to_typescript/type_aliases",title:"Type aliases & function types",description:'Create your own custom types using the "type" keyword, understand the "void" type, and learn how to write custom function types.',source:"@site/sources/academy/webscraping/switching_to_typescript/type_aliases.md",sourceDirName:"webscraping/switching_to_typescript",slug:"/switching-to-typescript/type-aliases",permalink:"/academy/switching-to-typescript/type-aliases",draft:!1,editUrl:"https://github.com/apify/apify-docs-v2/edit/master/sources/academy/webscraping/switching_to_typescript/type_aliases.md",tags:[],version:"current",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1677347846,formattedLastUpdatedAt:"Feb 25, 2023",sidebarPosition:7.5,frontMatter:{title:"Type aliases & function types",description:'Create your own custom types using the "type" keyword, understand the "void" type, and learn how to write custom function types.',sidebar_position:7.5,slug:"/switching-to-typescript/type-aliases"},sidebar:"academy",previous:{title:"Enums",permalink:"/academy/switching-to-typescript/enums"},next:{title:"Unknown, any, type guards & type assertions",permalink:"/academy/switching-to-typescript/unknown-and-type-assertions"}},u={},c=[{value:"Creating types",id:"creating-types",level:2},{value:"Using type aliases",id:"using-type-aliases",level:2},{value:"Function types",id:"function-types",level:2},{value:"Creating &amp; using function types",id:"creating-and-using-function-types",level:3},{value:"Next up",id:"next",level:2}],d={toc:c};function y(e){var t=e.components,o=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"type-aliases"},"Type aliases"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},'Create your own custom types using the "type" keyword, understand the "void" type, and learn how to write custom function types.')),(0,i.kt)("hr",null),(0,i.kt)("p",null,"Real quick, let's look at this code:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"// Using a union type to allow value to be either a string,\n// a number, or a boolean\nconst returnValueAsString = (value: string | number | boolean) => {\n    return `${value}`;\n};\n\nlet myValue: string | number | boolean;\n\nmyValue = 55;\n\nconsole.log(returnValueAsString(myValue));\n")),(0,i.kt)("p",null,"This is fine, but we had to write ",(0,i.kt)("inlineCode",{parentName:"p"},"string | number | boolean")," twice, and if this were a large project, we'd likely find ourselves writing it even more times. The solution for this is to define the type elsewhere, giving it a name by which it can be identified, then to use that name within the type annotations for ",(0,i.kt)("inlineCode",{parentName:"p"},"returnValueAsString")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"myValue"),"."),(0,i.kt)("h2",{id:"creating-types"},"Creating types"),(0,i.kt)("p",null,"With the ",(0,i.kt)("inlineCode",{parentName:"p"},"type")," keyword, you can abstract all the type stuff you'd normally put in a type annotation into one ",(0,i.kt)("strong",{parentName:"p"},"type alias"),". The great thing about type aliases is that they improve code readability and can be used in multiple places."),(0,i.kt)("p",null,"First, we'll use the ",(0,i.kt)("inlineCode",{parentName:"p"},"type")," keyword and call the type ",(0,i.kt)("inlineCode",{parentName:"p"},"MyUnionType"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"type MyUnionType =\n")),(0,i.kt)("p",null,"Then, we can just copy-paste the union type between a string, number, and boolean and paste it after the equals sign:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"type MyUnionType = string | number | boolean;\n")),(0,i.kt)("p",null,"The type is now stored under this ",(0,i.kt)("inlineCode",{parentName:"p"},"MyUnionType")," ",(0,i.kt)("strong",{parentName:"p"},"alias"),"."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},'Any type declaration "logic" that you can place within a type annotation can also be stored under a type alias.')),(0,i.kt)("h2",{id:"using-type-aliases"},"Using type aliases"),(0,i.kt)("p",null,"All we need to do to refactor the code from the beginning of the lesson is replace the type annotations with ",(0,i.kt)("inlineCode",{parentName:"p"},"MyUnionType"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"type MyUnionType = string | number | boolean;\n\nconst returnValueAsString = (value: MyUnionType) => {\n    return `${value}`;\n};\n\nlet myValue: MyUnionType;\n\nmyValue = 55;\n\nconsole.log(returnValueAsString(myValue));\n")),(0,i.kt)("h2",{id:"function-types"},"Function types"),(0,i.kt)("p",null,"Before we learn about how to write function types, let's learn about a problem they can solve. We have a simple function called ",(0,i.kt)("inlineCode",{parentName:"p"},"addAll")," which takes in array of numbers, adds them all up, then returns the result."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"const addAll = (nums: number[]) => {\n    return nums.reduce((prev, curr) => prev + curr, 0);\n};\n")),(0,i.kt)("p",null,"We want to add the ability to choose whether or not the result should be printed to the console. A function's parameter can be marked as optional by using a question mark."),(0,i.kt)("p",null,"Let's do that now."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"// We've added a return type to the function because it will return different\n// things based on the \"printResult\" parameter. When false, a number will be\n// returned, while when true, nothing will be returned (void).\nconst addAll = (nums: number[], printResult?: boolean): number | void => {\n    const result = nums.reduce((prev, curr) => prev + curr, 0);\n\n    if (!printResult) return result;\n\n    console.log('Result:', result);\n};\n")),(0,i.kt)("p",null,"Also, it'd be nice to have some option to pass in a custom message for when the result is logged to the console, so we'll add another optional parameter for that."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"const addAll = (nums: number[], printResult?: boolean, printWithMessage?: string): number | void => {\n    const result = nums.reduce((prev, curr) => prev + curr, 0);\n\n    if (!printResult) return result;\n\n    console.log(printWithMessage || 'Result:', result);\n};\n")),(0,i.kt)("p",null,"Finally, we'll add a final parameter with the option to return/print the result as a string instead of a number."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"const addAll = (nums: number[], toString?: boolean, printResult?: boolean, printWithMessage?: string): number | string | void => {\n    const result = nums.reduce((prev, curr) => prev + curr, 0);\n\n    if (!printResult) return toString ? result.toString() : result;\n\n    console.log(printWithMessage || 'Result:', toString ? result.toString : result);\n};\n")),(0,i.kt)("p",null,"What we're left with is a massive function declaration that is very verbose. This isn't necessarily a bad thing, but all of these typings could be put into a function type instead."),(0,i.kt)("h3",{id:"creating-and-using-function-types"},"Creating & using function types"),(0,i.kt)("p",null,"Function types are declared with the ",(0,i.kt)("inlineCode",{parentName:"p"},"type")," keyword (or directly within a type annotation), and are written in a similar fashion to regular arrow functions. All parameters and their types go inside of the parentheses (",(0,i.kt)("inlineCode",{parentName:"p"},"()"),"), and the return type of the function goes after the arrow (",(0,i.kt)("inlineCode",{parentName:"p"},"=>"),")."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"type AddFunction = (numbers: number[], toString?: boolean, printResult?: boolean, printWithMessage?: string) => number | string | void;\n")),(0,i.kt)("p",null,"This is where the true magic happens. Because our arrow function is stored in a variable, and because we've now created the ",(0,i.kt)("inlineCode",{parentName:"p"},"AddFunction")," type, we can delete all type annotations from the function itself and annotate the variable with ",(0,i.kt)("inlineCode",{parentName:"p"},"AddFunction")," instead."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"type AddFunction = (numbers: number[], toString?: boolean, printResult?: boolean, printWithMessage?: string) => number | string | void;\n\nconst addAll: AddFunction = (nums, toString, printResult, printWithMessage) => {\n    const result = nums.reduce((prev, curr) => prev + curr, 0);\n\n    if (!printResult) return toString ? result.toString() : result;\n\n    console.log(printWithMessage || 'Result:', toString ? result.toString : result);\n};\n")),(0,i.kt)("p",null,"We've significantly cleaned up the function by moving its verbose type annotations into a type alias without losing the benefits of TypeScript."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Parameter type",src:n(93744).Z,width:"1240",height:"326"})),(0,i.kt)("h2",{id:"next"},"Next up"),(0,i.kt)("p",null,"There is a special type you haven't learned about called ",(0,i.kt)("inlineCode",{parentName:"p"},"unknown"),". We haven't yet discussed it, because it's best learned alongside ",(0,i.kt)("strong",{parentName:"p"},"type casting"),", which is yet another feature offered by TypeScript. Learn all about the ",(0,i.kt)("inlineCode",{parentName:"p"},"unknown")," type and typecasting in the ",(0,i.kt)("a",{parentName:"p",href:"/academy/switching-to-typescript/unknown-and-type-assertions",target:null,rel:null},"next lesson"),"."))}y.isMDXComponent=!0},93744:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/parameter-type-357e6a4838fd0bcf8482eab98c2214c8.png"}}]);