"use strict";(self.webpackChunkapify_docs_v2=self.webpackChunkapify_docs_v2||[]).push([[3668],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>y});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),l=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(n),y=r,h=d["".concat(p,".").concat(y)]||d[y]||u[y]||i;return n?a.createElement(h,o(o({ref:t},c),{},{components:n})):a.createElement(h,o({ref:t},c))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},35716:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>y,frontMatter:()=>s,metadata:()=>l,toc:()=>u});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),o=["components"],s={title:"Using types - II",description:"Continue learning about the core types in TypeScript. In this second part lesson, learn how to use and define object types, array types, and tuples.",sidebar_position:7.3,slug:"/switching-to-typescript/using-types-continued"},p="Using types (continued)",l={unversionedId:"webscraping/switching_to_typescript/using_types_continued",id:"webscraping/switching_to_typescript/using_types_continued",title:"Using types - II",description:"Continue learning about the core types in TypeScript. In this second part lesson, learn how to use and define object types, array types, and tuples.",source:"@site/sources/academy/webscraping/switching_to_typescript/using_types_continued.md",sourceDirName:"webscraping/switching_to_typescript",slug:"/switching-to-typescript/using-types-continued",permalink:"/academy/switching-to-typescript/using-types-continued",draft:!1,editUrl:"https://github.com/apify/apify-docs-v2/edit/master/sources/academy/webscraping/switching_to_typescript/using_types_continued.md",tags:[],version:"current",lastUpdatedBy:"Jind\u0159ich B\xe4r",lastUpdatedAt:1675956217,formattedLastUpdatedAt:"Feb 9, 2023",sidebarPosition:7.3,frontMatter:{title:"Using types - II",description:"Continue learning about the core types in TypeScript. In this second part lesson, learn how to use and define object types, array types, and tuples.",sidebar_position:7.3,slug:"/switching-to-typescript/using-types-continued"},sidebar:"academy",previous:{title:"Using types - I",permalink:"/academy/switching-to-typescript/using-types"},next:{title:"Enums",permalink:"/academy/switching-to-typescript/enums"}},c={},u=[{value:"Objects",id:"objects",level:2},{value:"Optional properties",id:"optional-properties",level:3},{value:"Arrays",id:"arrays",level:2},{value:"Tuples",id:"tuples",level:2},{value:"Next up",id:"next",level:2}],d={toc:u};function y(e){var t=e.components,s=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"using-types-continued"},"Using types (continued)"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Continue learning about the core types in TypeScript. In this second part lesson, learn how to use and define object types, array types, and tuples.")),(0,i.kt)("hr",null),(0,i.kt)("p",null,"Now that you're (hopefully) fairly comfortable with strings, booleans, and numbers in TypeScript, we can start discussing the more complex types supported by the language."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Example"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"object")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"{ name: 'academy' }")),(0,i.kt)("td",{parentName:"tr",align:null},"Any JavaScript object. More specific types are possible.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Array")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"[1, 2, 3]"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"['a', 'b', 'c']")),(0,i.kt)("td",{parentName:"tr",align:null},"Any JavaScript array. Types can be flexible or strict (regarding the element types).")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Tuple")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"[1, 2]")),(0,i.kt)("td",{parentName:"tr",align:null},"A fixed-length array.")))),(0,i.kt)("h2",{id:"objects"},"Objects"),(0,i.kt)("p",null,"By now, you're already familiar with what type inference is. Even when creating objects, TypeScript will do its best to infer what that object's type is. For example, TS automatically infers correctly that this object is an object with ",(0,i.kt)("inlineCode",{parentName:"p"},"name")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"currentLesson")," properties, both strings:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Object type correctly inferred",src:n(79417).Z,width:"590",height:"356"})),(0,i.kt)("p",null,"Notice that the value showed in the popup when hovering over the ",(0,i.kt)("inlineCode",{parentName:"p"},"course")," variable looks very much like a regular JavaScript object; however, it is not an object at all - instead, it is an object ",(0,i.kt)("strong",{parentName:"p"},"type"),"."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Object types differ slightly in syntax from regular JavaScript objects. Firstly, the properties are separated by semicolons (",(0,i.kt)("inlineCode",{parentName:"p"},";"),") instead of commas. Also, instead of being key-value pairs like objects, object types are key-",(0,i.kt)("strong",{parentName:"p"},"type")," pairs.")),(0,i.kt)("p",null,"This inference from TypeScript is totally valid and correct; however, what if we want to add a new property to the ",(0,i.kt)("inlineCode",{parentName:"p"},"course")," object after it's been initialized?"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Error adding a new property to the object",src:n(34413).Z,width:"1580",height:"564"})),(0,i.kt)("p",null,"So what's the problem? The problem is that we didn't tell TypeScript that the ",(0,i.kt)("inlineCode",{parentName:"p"},"course")," object can have a property called ",(0,i.kt)("inlineCode",{parentName:"p"},"learningBasicTypes")," of a boolean type in the variable's initial state, which is what TypeScript's inference is based off of. Because of this, we have to write our own custom object type."),(0,i.kt)("p",null,"Just as we did before when assigning types like ",(0,i.kt)("inlineCode",{parentName:"p"},"number")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"string")," to variables, we'll annotate the variable's type with a colon (",(0,i.kt)("inlineCode",{parentName:"p"},":"),") followed by the type. However, instead of using a basic type name such as ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"number"),", we'll put a custom object type there instead."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"const course: {\n    name: string;\n    currentLesson: string;\n} = {\n    name: 'Switching to TypeScript',\n    currentLesson: 'Using types - II',\n};\n")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"We know, this looks extremely weird at first, but by the end of the course you'll be super comfortable with this syntax. And, a bit later on in the course, you'll learn how to define object types separate from the variable to improve code readability.")),(0,i.kt)("h3",{id:"optional-properties"},"Optional properties"),(0,i.kt)("p",null,"Finally, we'll add an optional property to our object type with a key of ",(0,i.kt)("inlineCode",{parentName:"p"},"learningBasicTypes")," and a type of ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean"),". Properties become optional by adding a question mark (",(0,i.kt)("inlineCode",{parentName:"p"},"?"),") before the colon (",(0,i.kt)("inlineCode",{parentName:"p"},"?"),") after the property name."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'// Initialize the object without the "learningBasicTypes" property\nconst course: {\n    name: string;\n    currentLesson: string;\n    // Add the "learningBasicTypes" property to the object\'s type.\n    // This property can be either undefined or boolean\n    learningBasicTypes?: boolean;\n} = {\n    name: \'Switching to TypeScript\',\n    currentLesson: \'Using types - II\',\n};\n\n// Add the "learningBasicTypes" property later on\ncourse.learningBasicTypes = true;\n')),(0,i.kt)("p",null,"What this question mark does is tells TypeScript that the property doesn't necessarily have to exist on the ",(0,i.kt)("inlineCode",{parentName:"p"},"course")," object (it can be undefined), but if it does exist, it must be a boolean."),(0,i.kt)("h2",{id:"arrays"},"Arrays"),(0,i.kt)("p",null,"Defining arrays is quite straightforward. We'll first add a ",(0,i.kt)("inlineCode",{parentName:"p"},"typesLearned")," property to our ",(0,i.kt)("inlineCode",{parentName:"p"},"course")," object:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"const course2 = {\n    name: 'Switching to TypeScript',\n    currentLesson: 'Using types - II',\n    typesLearned: ['number', 'boolean', 'string', 'object'],\n};\n")),(0,i.kt)("p",null,"Then, in the type definition, we can add a ",(0,i.kt)("inlineCode",{parentName:"p"},"typesLearned")," key. Then, by simply writing the type that the array's elements are followed by two square brackets (",(0,i.kt)("inlineCode",{parentName:"p"},"[]"),"), we can form an array type."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"const course: {\n    name: string;\n    currentLesson: string;\n    // By adding square brackets at the end, we tell TypeScript\n    // that \"typesLearned\" is not a string, but an array of strings\n    typesLearned: string[];\n    learningBasicTypes?: boolean;\n} = {\n    name: 'Switching to TypeScript',\n    currentLesson: 'Using types - II',\n    typesLearned: ['number', 'boolean', 'string', 'object'],\n};\n")),(0,i.kt)("p",null,"Some of the benefits of TypeScript can be seen when accessing one of the properties on the ",(0,i.kt)("inlineCode",{parentName:"p"},"course.typesLearned")," array. Since we told TypeScript that it's an array of strings, it confidently knows that each of those properties are going to have the methods on the ",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#instance_methods",target:"_blank",rel:"noopener"},"String prototype"),", so it will autocomplete methods such as ",(0,i.kt)("inlineCode",{parentName:"p"},".slice()"),", ",(0,i.kt)("inlineCode",{parentName:"p"},".toUpperCase()"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},".slice()"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Epic autocomplete",src:n(32341).Z,width:"1864",height:"916"})),(0,i.kt)("p",null,"Nice!"),(0,i.kt)("h2",{id:"tuples"},"Tuples"),(0,i.kt)("p",null,"The ",(0,i.kt)("strong",{parentName:"p"},"Tuple")," type is a special type that is not in vanilla JavaScript, but is supported in other programming languages - including TypeScript. It is almost the same thing as an array; however tuples have a fixed length that cannot be changed, and each element at each index has a specific type. Don't worry, this type is much easier to understand in practice."),(0,i.kt)("p",null,"Let's add a final property to our epic ",(0,i.kt)("inlineCode",{parentName:"p"},"course")," object called ",(0,i.kt)("inlineCode",{parentName:"p"},"courseInfo"),". This property will hold an array where the first value corresponds to this course's number in the Apify academy, and the value in the second position describes the level of this course."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"const course = {\n    name: 'Switching to TypeScript',\n    currentLesson: 'Using types - II',\n    typesLearned: ['number', 'boolean', 'string', 'object'],\n    courseInfo: [7, 'advanced'],\n};\n")),(0,i.kt)("p",null,"Here's one way we could define this property's type:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"const course: {\n    name: string;\n    currentLesson: string;\n    typesLearned: string[];\n    // an array of numbers or strings\n    courseInfo: (number | string)[];\n    learningBasicTypes?: boolean;\n} = {\n    name: 'Switching to TypeScript',\n    currentLesson: 'Using types - II',\n    typesLearned: ['number', 'boolean', 'string', 'object'],\n    courseInfo: [7, 'advanced'],\n};\n")),(0,i.kt)("p",null,"This is actually how TypeScript infers the type of ",(0,i.kt)("inlineCode",{parentName:"p"},"courseInfo")," as well. It tells the compiler that ",(0,i.kt)("inlineCode",{parentName:"p"},"courseInfo")," is an array of any length that can hold both numbers and strings. However, we want to be more specific than that in this case. The length of ",(0,i.kt)("inlineCode",{parentName:"p"},"courseInfo")," should always going to be 2, the first value should always be a number, and second one always a string. We should use a tuple instead."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"const course: {\n    name: string;\n    currentLesson: string;\n    typesLearned: string[];\n    // an array with 2 elements. courseInfo[0] is a string,\n    // while courseInfo[0] is a number\n    courseInfo: [number, string];\n    learningBasicTypes?: boolean;\n} = {\n    name: 'Switching to TypeScript',\n    currentLesson: 'Using types - II',\n    typesLearned: ['number', 'boolean', 'string', 'object'],\n    courseInfo: [7, 'advanced'],\n};\n")),(0,i.kt)("p",null,"By placing types inside of the square brackets in a specific order, we tell TypeScript that the property is not of an array type, but a tuple instead. So, when we try to reassign the properties to an incorrect data type, we get an error."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Epic autocomplete",src:n(4548).Z,width:"932",height:"228"})),(0,i.kt)("h2",{id:"next"},"Next up"),(0,i.kt)("p",null,"Whew! Nice job learning about the core types in TypeScript. The next lesson is lighter than the last two, but still super important. ",(0,i.kt)("a",{parentName:"p",href:"/academy/switching-to-typescript/enums",target:null,rel:null},"Let's learn")," about the ",(0,i.kt)("inlineCode",{parentName:"p"},"enum")," keyword!"))}y.isMDXComponent=!0},32341:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/epic-autocomplete-02e906516da4fa8e29e51f0e52a68b44.png"},79417:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/object-inference-9fa70867683e902d6b212a1d4f3b477c.png"},34413:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/object-type-error-1d3f0cd23960371d6a0669b67525aee6.png"},4548:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/string-not-number-35d536ca457fa418944a70be1fc398cd.png"}}]);