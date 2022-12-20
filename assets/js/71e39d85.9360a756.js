"use strict";(self.webpackChunkapify_docs_v2=self.webpackChunkapify_docs_v2||[]).push([[8617],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>y});var i=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,i,r=function(e,t){if(null==e)return{};var a,i,r={},n=Object.keys(e);for(i=0;i<n.length;i++)a=n[i],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)a=n[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=i.createContext({}),l=function(e){var t=i.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=l(e.components);return i.createElement(p.Provider,{value:t},e.children)},h="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=l(a),d=r,y=h["".concat(p,".").concat(d)]||h[d]||u[d]||n;return a?i.createElement(y,o(o({ref:t},c),{},{components:a})):i.createElement(y,o({ref:t},c))}));function y(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,o=new Array(n);o[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[h]="string"==typeof e?e:r,o[1]=s;for(var l=2;l<n;l++)o[l]=a[l];return i.createElement.apply(null,o)}return i.createElement.apply(null,a)}d.displayName="MDXCreateElement"},54941:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>d,frontMatter:()=>s,metadata:()=>l,toc:()=>h});var i=a(87462),r=a(63366),n=(a(67294),a(3905)),o=["components"],s={title:"Switching to TypeScript",description:"In this course, learn what TypeScript is, why you should use it instead of vanilla JavaScript, and how to start using it in your own projects.",sidebar_position:5,category:"web scraping & automation",slug:"/switching-to-typescript"},p="[](#switching-to-typescript) Switching to TypeScript",l={unversionedId:"switching_to_typescript/index",id:"switching_to_typescript/index",title:"Switching to TypeScript",description:"In this course, learn what TypeScript is, why you should use it instead of vanilla JavaScript, and how to start using it in your own projects.",source:"@site/sources/academy/switching_to_typescript/index.md",sourceDirName:"switching_to_typescript",slug:"/switching-to-typescript",permalink:"/academy/switching-to-typescript",draft:!1,tags:[],version:"current",lastUpdatedBy:"Jind\u0159ich B\xe4r",lastUpdatedAt:1671543152,formattedLastUpdatedAt:"Dec 20, 2022",sidebarPosition:5,frontMatter:{title:"Switching to TypeScript",description:"In this course, learn what TypeScript is, why you should use it instead of vanilla JavaScript, and how to start using it in your own projects.",sidebar_position:5,category:"web scraping & automation",slug:"/switching-to-typescript"},sidebar:"defaultSidebar",previous:{title:"Generating fingerprints",permalink:"/academy/anti-scraping/mitigation/generating-fingerprints"},next:{title:"Installation & getting started",permalink:"/academy/switching-to-typescript/installation"}},c={},h=[{value:" What is TypeScript?",id:"-what-is-typescript",level:2},{value:" What are the advantages of using TypeScript?",id:"-what-are-the-advantages-of-using-typescript",level:2},{value:" How different is TypeScript from JavaScript?",id:"-how-different-is-typescript-from-javascript",level:2},{value:" Ready to get started?",id:"-ready-to-get-started",level:2}],u={toc:h};function d(e){var t=e.components,s=(0,r.Z)(e,o);return(0,n.kt)("wrapper",(0,i.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"-switching-to-typescript"},(0,n.kt)("a",{parentName:"h1",href:"#switching-to-typescript",target:null,rel:null})," Switching to TypeScript"),(0,n.kt)("p",null,"As the world of JavaScript moves forward, ",(0,n.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/",target:"_blank",rel:"noopener"},"TypeScript")," continues to become more popular. More companies than ever before are using TypeScript in their codebases, and are heavily preferring it over vanilla JavaScript. But why? What is TypeScript, and why is is so great for developers?"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"TypeScript logo",src:a(8180).Z,width:"1600",height:"900"})),(0,n.kt)("h2",{id:"-what-is-typescript"},(0,n.kt)("a",{parentName:"h2",href:"#what-is-typescript",target:null,rel:null})," What is TypeScript?"),(0,n.kt)("p",null,"If you're familiar with the fundamentals of any programming language (JavaScript included), then you're familiar with the concept of ",(0,n.kt)("strong",{parentName:"p"},"types"),". String, boolean, array, object, number - these are all types. What TypeScript does is bring ",(0,n.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Type_safety",target:"_blank",rel:"noopener"},"type safety")," to JavaScript, which is normally a ",(0,n.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Glossary/Dynamic_typing",target:"_blank",rel:"noopener"},"dynamically typed")," and ",(0,n.kt)("a",{parentName:"p",href:"https://www.geeksforgeeks.org/difference-between-compiled-and-interpreted-language/",target:"_blank",rel:"noopener"},"interpreted")," programming language. This means that if you have declare a variable like this: ",(0,n.kt)("inlineCode",{parentName:"p"},"const foo = 'bar'"),", then later try to access the non-existent property of ",(0,n.kt)("inlineCode",{parentName:"p"},"foo.baz"),", you'll only know about the error once it happens during runtime."),(0,n.kt)("p",null,"To sum everything said up above, here's a code example written in JavaScript that has a couple of problems with it:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"const john = {\n    name: 'john',\n    job: 'web developer',\n};\n\nconst bob = {\n    name: 'bob',\n    job: 'data analyst',\n    age: '27',\n};\n\nconst addAges = (num1, num2) => num1 + num2;\n\nconsole.log(addAges(bob.age, john.age));\n")),(0,n.kt)("p",null,"This code doesn't actually throw an error, but it does output ",(0,n.kt)("inlineCode",{parentName:"p"},"27undefined"),". That's not good. The first issue is that ",(0,n.kt)("inlineCode",{parentName:"p"},"john.age")," is ",(0,n.kt)("strong",{parentName:"p"},"undefined"),", and the second issue is that ",(0,n.kt)("inlineCode",{parentName:"p"},"bob.age")," is a string and must be converted to a number to work properly in the ",(0,n.kt)("inlineCode",{parentName:"p"},"addAges")," function. Despite these two significant mistakes, JavaScript doesn't tell us at all about them and lets the code run with bugs."),(0,n.kt)("p",null,"With TypeScript, these types of issues stick out like a sore thumb, and depending on your configurations, the ",(0,n.kt)("a",{parentName:"p",href:"https://www.techtarget.com/whatis/definition/compiler#:~:text=A%20compiler%20is%20a%20special,as%20Java%20or%20C%2B%2B.",target:"_blank",rel:"noopener"},"compiler")," will refuse to compile it until they have been fixed."),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(91917).Z,width:"1392",height:"822"})),(0,n.kt)("p",null,'This means that when using TS (a popular acronym for "TypeScript") on a large project, you\'ll run into much less runtime errors and catch the majority of them during the development process.'),(0,n.kt)("h2",{id:"-what-are-the-advantages-of-using-typescript"},(0,n.kt)("a",{parentName:"h2",href:"#advantages-of-typescript",target:null,rel:null})," What are the advantages of using TypeScript?"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"The ability to ",(0,n.kt)("strong",{parentName:"li"},"optionally")," ",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Glossary/Static_typing",target:"_blank",rel:"noopener"},"statically type")," your variables and functions."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"https://www.typescriptlang.org/docs/handbook/type-inference.html",target:"_blank",rel:"noopener"},"Type Inference"),", which provides you the benefits of using types, but without having to actually statically type anything. For example, if you create a variable like this: ",(0,n.kt)("inlineCode",{parentName:"li"},"let num = 5"),", TypeScript will automatically infer that ",(0,n.kt)("inlineCode",{parentName:"li"},"num")," is of a ",(0,n.kt)("strong",{parentName:"li"},"number")," type."),(0,n.kt)("li",{parentName:"ol"},"Access to the newest features in JavaScript before they are officially supported everywhere."),(0,n.kt)("li",{parentName:"ol"},"Fantastic support with ",(0,n.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Intelligent_code_completion",target:"_blank",rel:"noopener"},"IntelliSense")," and epic autocomplete when writing functions, accessing object properties, etc. Most modern IDEs have TypeScript support."),(0,n.kt)("li",{parentName:"ol"},"Access to exclusive TypeScript features such as ",(0,n.kt)("a",{parentName:"li",href:"https://www.typescriptlang.org/docs/handbook/enums.html",target:"_blank",rel:"noopener"},"Enums"),".")),(0,n.kt)("h2",{id:"-how-different-is-typescript-from-javascript"},(0,n.kt)("a",{parentName:"h2",href:"#how-different-is-it",target:null,rel:null})," How different is TypeScript from JavaScript?"),(0,n.kt)("p",null,"Think of it this way: Javascript ",(0,n.kt)("strong",{parentName:"p"},"IS")," Typescript, but TypeScript isn't JavaScript. All JavaScript code is valid TypeScript code, which means that you can pretty much turn any ",(0,n.kt)("strong",{parentName:"p"},".js")," file into a ",(0,n.kt)("strong",{parentName:"p"},".ts")," file and it'll still work just the same after being compiled. It also means that to learn TypeScript, you aren't going to have to learn a whole new programming language if you already know JavaScript."),(0,n.kt)("p",null,"So, what are the differences? Well, there's really just one: TypeScript files cannot be run directly. They must first be compiled into regular JavaScript."),(0,n.kt)("h2",{id:"-ready-to-get-started"},(0,n.kt)("a",{parentName:"h2",href:"#first",target:null,rel:null})," Ready to get started?"),(0,n.kt)("p",null,"Now that you're familiar with what TypeScript is and aware of its many advantages, let's ",(0,n.kt)("a",{parentName:"p",href:"/academy/switching-to-typescript/installation",target:null,rel:null},"get started")," in our TS journey by installing the TypeScript compiler (super easy) and writing our first line of code in a ",(0,n.kt)("strong",{parentName:"p"},".ts")," file."))}d.isMDXComponent=!0},91917:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/typescript-error-9eec90e33044156b6e2c2da5aab4f95e.webp"},8180:(e,t,a)=>{a.d(t,{Z:()=>i});const i="data:image/webp;base64,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"}}]);