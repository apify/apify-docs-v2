"use strict";(self.webpackChunkapify_docs_v2=self.webpackChunkapify_docs_v2||[]).push([[437],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>y});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),l=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=l(n),y=r,h=d["".concat(p,".").concat(y)]||d[y]||c[y]||s;return n?a.createElement(h,o(o({ref:t},u),{},{components:n})):a.createElement(h,o({ref:t},u))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,o=new Array(s);o[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var l=2;l<s;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},32922:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>y,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=n(87462),r=n(63366),s=(n(67294),n(3905)),o=["components"],i={title:"Unknown, any, type guards & type assertions",description:'Understand the "unknown" and "any" types, as well as using type guards to make your code safer and type assertions to avoid common TypeScript compiler errors.',sidebar_position:7.6,slug:"/switching-to-typescript/unknown-and-type-assertions"},p="Unknown & type assertions",l={unversionedId:"webscraping/switching_to_typescript/unknown_and_type_assertions",id:"webscraping/switching_to_typescript/unknown_and_type_assertions",title:"Unknown, any, type guards & type assertions",description:'Understand the "unknown" and "any" types, as well as using type guards to make your code safer and type assertions to avoid common TypeScript compiler errors.',source:"@site/sources/academy/webscraping/switching_to_typescript/unknown_and_type_assertions.md",sourceDirName:"webscraping/switching_to_typescript",slug:"/switching-to-typescript/unknown-and-type-assertions",permalink:"/academy/switching-to-typescript/unknown-and-type-assertions",draft:!1,editUrl:"https://github.com/apify/apify-docs-v2/edit/master/sources/academy/webscraping/switching_to_typescript/unknown_and_type_assertions.md",tags:[],version:"current",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1677522857,formattedLastUpdatedAt:"Feb 27, 2023",sidebarPosition:7.6,frontMatter:{title:"Unknown, any, type guards & type assertions",description:'Understand the "unknown" and "any" types, as well as using type guards to make your code safer and type assertions to avoid common TypeScript compiler errors.',sidebar_position:7.6,slug:"/switching-to-typescript/unknown-and-type-assertions"},sidebar:"academy",previous:{title:"Type aliases & function types",permalink:"/academy/switching-to-typescript/type-aliases"},next:{title:"Watch mode & tsconfig.json",permalink:"/academy/switching-to-typescript/watch-mode-and-tsconfig"}},u={},c=[{value:"Let&#39;s talk about &quot;any&quot;",id:"the-any-type",level:2},{value:"Why &quot;unknown&quot; is better",id:"the-unknown-type",level:2},{value:"Type guards",id:"type-guards",level:2},{value:"Type assertions",id:"type-assertions",level:2},{value:"Non-null assertion",id:"non-null-assertion",level:2},{value:"Final thoughts",id:"final-thoughts",level:2},{value:"Next up",id:"next",level:2}],d={toc:c};function y(e){var t=e.components,i=(0,r.Z)(e,o);return(0,s.kt)("wrapper",(0,a.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"unknown-and-type-assertions"},"Unknown & type assertions"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},'Understand the "unknown" and "any" types, as well as using type guards to make your code safer and type assertions to avoid common TypeScript compiler errors.')),(0,s.kt)("hr",null),(0,s.kt)("p",null,"There are two types we haven't discussed yet - ",(0,s.kt)("inlineCode",{parentName:"p"},"any")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"unknown"),"."),(0,s.kt)("h2",{id:"the-any-type"},'Let\'s talk about "any"'),(0,s.kt)("p",null,"In the first ",(0,s.kt)("a",{parentName:"p",href:"/academy/switching-to-typescript/using-types",target:null,rel:null},(0,s.kt)("strong",{parentName:"a"},"Using types"))," lesson, you were briefly exposed to the ",(0,s.kt)("inlineCode",{parentName:"p"},"any")," type, which is a special type used to represent all possible JavaScript values. By using this type, you basically tell TypeScript that you don't care, and that you want to be able to do anything with that value, even if it might cause a runtime error. Take a look at this example:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},'// Create a variable that TypeScript will completely ignore.\n// Absolutely anything can be stored in here.\nlet userInput: any;\n\n// Create a variable that can only hold strings\nlet savedInput: string;\n\n// Set the user input to equal a number. This is fine, because\n// it can be any time.\nuserInput = 5;\n\n// Set the "savedInput" to be the value of "userInput". Stored in\n// "userInput" is a number, but since we told TypeScript that it\'s\n// "any" type, an error is not thrown.\nsavedInput = userInput;\n')),(0,s.kt)("p",null,"Sometimes, ",(0,s.kt)("inlineCode",{parentName:"p"},"any")," can be useful; however, in 99% of cases it is best to avoid it as it can lead to logical errors just like the one above."),(0,s.kt)("h2",{id:"the-unknown-type"},'Why "unknown" is better'),(0,s.kt)("p",null,"Just like ",(0,s.kt)("inlineCode",{parentName:"p"},"any"),", the ",(0,s.kt)("inlineCode",{parentName:"p"},"unknown")," type is also a special type that represents all possible JavaScript value, and all types are assignable to it. The big difference is that the TypeScript compiler won't allow any operation on values typed as ",(0,s.kt)("inlineCode",{parentName:"p"},"unknown"),". To see this in action, we just have to change the type of ",(0,s.kt)("inlineCode",{parentName:"p"},"userInput")," in the above code snippet from ",(0,s.kt)("inlineCode",{parentName:"p"},"any")," to ",(0,s.kt)("inlineCode",{parentName:"p"},"unknown"),"."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Replacing &quot;any&quot; with &quot;unknown&quot; from the above snippet",src:n(3400).Z,width:"918",height:"390"})),(0,s.kt)("p",null,"Even this will result in the same error:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"// This results in a compiler error!\nlet userInput: unknown;\nlet savedInput: string;\n\nuserInput = 'hello world!';\n\nsavedInput = userInput;\n")),(0,s.kt)("h2",{id:"type-guards"},"Type guards"),(0,s.kt)("p",null,"In order to make the code above not throw any compiler errors, we can use a ",(0,s.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/docs/handbook/advanced-types.html",target:"_blank",rel:"noopener"},"type guard"),", which is just a check that happens at runtime to ensure that the type is in fact what it should be."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"let userInput: unknown;\nlet savedInput: string;\n\nuserInput = 5;\n\n// This if statement is called a \"type guard\"\n// No more error! TypeScript is smart enough to understand\n// what this if statement is doing, and removes the error\nif (typeof userInput === 'string') {\n    savedInput = userInput;\n}\n")),(0,s.kt)("p",null,"This works, and in fact, it's the most optimal solution for this use case. But what if we were 100% sure that the value stored in ",(0,s.kt)("inlineCode",{parentName:"p"},"userInput")," was a string? Thats when ",(0,s.kt)("strong",{parentName:"p"},"type assertions")," comes in handy."),(0,s.kt)("h2",{id:"type-assertions"},"Type assertions"),(0,s.kt)("p",null,"Despite the fancy name, ",(0,s.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#type-assertions",target:"_blank",rel:"noopener"},"type assertions")," is a simple concept based around a single keyword: ",(0,s.kt)("inlineCode",{parentName:"p"},"as"),". We usually use this on values that we can't control the return type of, or values that we're sure have a certain type, but TypeScript needs a bit of help understanding that."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},'let userInput: unknown;\nlet savedInput: string;\n\nuserInput = \'hello world!\';\n\n// No more error! We\'ve told TypeScript to treat "userInput"\n// as a string, despite the fact that its original type is\n// the "unknown" type\nsavedInput = userInput as string;\n')),(0,s.kt)("h2",{id:"non-null-assertion"},"Non-null assertion"),(0,s.kt)("p",null,"You might already be familiar with ",(0,s.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining",target:"_blank",rel:"noopener"},"optional chaining")," in JavaScript (",(0,s.kt)("inlineCode",{parentName:"p"},"?.")," syntax). TypeScript adds a new operator with a similar syntax that uses an exclamation mark instead (",(0,s.kt)("inlineCode",{parentName:"p"},"!."),"), which automatically removes ",(0,s.kt)("inlineCode",{parentName:"p"},"null")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"undefined")," from a value's type - essentially asserting that you are certain it will never be ",(0,s.kt)("inlineCode",{parentName:"p"},"null")," or ",(0,s.kt)("inlineCode",{parentName:"p"},"undefined"),"."),(0,s.kt)("p",null,"Consider this snippet:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"let job: undefined | string;\n\nconst chars = job.split('');\n")),(0,s.kt)("p",null,"TypeScript will yell at you when trying to compile this code, stating that ",(0,s.kt)("strong",{parentName:"p"},"Object is possibly 'undefined'"),", which is true. In order to assert that ",(0,s.kt)("inlineCode",{parentName:"p"},"job")," will not be ",(0,s.kt)("inlineCode",{parentName:"p"},"undefined")," in this case, we can simply add an exclamation mark before the dot."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"let job: undefined | string;\n\nconst chars = job!.split('');\n")),(0,s.kt)("p",null,"This operator is called the ",(0,s.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#non-null-assertion-operator-postfix-",target:"_blank",rel:"noopener"},"non-null assertion operator"),"."),(0,s.kt)("h2",{id:"final-thoughts"},"Final thoughts"),(0,s.kt)("p",null,"Even though you've learned about them in the same lesson, type guards and type assertions are inherently very different things with different use cases."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Type guards")," make a runtime check of whether or not a value passes a check that determines that it can be safely used as a certain type. They are great when dealing with values that might hold inconsistent data types (such as user input) where you aren't 100% sure if a certain property will exist."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Type assertions")," tells TypeScript to take a value of one type and to treat it as if it were another type. No runtime checks are made. A common use case is asserting the response body of an API call (usually has the ",(0,s.kt)("inlineCode",{parentName:"p"},"any")," type depending on what you're using to fetch the data) to a custom type to receive TypeScript support on the data."),(0,s.kt)("p",null,"Often times, these features are used in tandem."),(0,s.kt)("h2",{id:"next"},"Next up"),(0,s.kt)("p",null,"We've now got all the knowledge we need to build a real project in TypeScript, which we're going to do very soon. But, there's one important thing we have to do before writing the code for our project - configure the compiler and understand watch mode. Learn all this in the ",(0,s.kt)("a",{parentName:"p",href:"/academy/switching-to-typescript/watch-mode-and-tsconfig",target:null,rel:null},"next lesson"),"!"))}y.isMDXComponent=!0},3400:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/replace-with-unknown-1afc579f833825692266729ace720afa.png"}}]);