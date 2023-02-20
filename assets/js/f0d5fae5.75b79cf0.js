"use strict";(self.webpackChunkapify_docs_v2=self.webpackChunkapify_docs_v2||[]).push([[7231],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(n),f=a,y=d["".concat(c,".").concat(f)]||d[f]||u[f]||i;return n?r.createElement(y,o(o({ref:t},p),{},{components:n})):r.createElement(y,o({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},22519:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>f,frontMatter:()=>s,metadata:()=>l,toc:()=>u});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=["components"],s={title:"Interfaces",description:'Understand how to declare object types with the "interface" keyword, and the subtle difference interfaces have with regular type aliases.',sidebar_position:7.8,slug:"/switching-to-typescript/interfaces"},c="Interfaces",l={unversionedId:"webscraping/switching_to_typescript/interfaces",id:"webscraping/switching_to_typescript/interfaces",title:"Interfaces",description:'Understand how to declare object types with the "interface" keyword, and the subtle difference interfaces have with regular type aliases.',source:"@site/sources/academy/webscraping/switching_to_typescript/interfaces.md",sourceDirName:"webscraping/switching_to_typescript",slug:"/switching-to-typescript/interfaces",permalink:"/academy/switching-to-typescript/interfaces",draft:!1,editUrl:"https://github.com/apify/apify-docs-v2/edit/master/sources/academy/webscraping/switching_to_typescript/interfaces.md",tags:[],version:"current",lastUpdatedBy:"Luk\xe1\u0161 K\u0159ivka",lastUpdatedAt:1676882966,formattedLastUpdatedAt:"Feb 20, 2023",sidebarPosition:7.8,frontMatter:{title:"Interfaces",description:'Understand how to declare object types with the "interface" keyword, and the subtle difference interfaces have with regular type aliases.',sidebar_position:7.8,slug:"/switching-to-typescript/interfaces"},sidebar:"academy",previous:{title:"Watch mode & tsconfig.json",permalink:"/academy/switching-to-typescript/watch-mode-and-tsconfig"},next:{title:"Mini-project",permalink:"/academy/switching-to-typescript/mini-project"}},p={},u=[{value:"Next up",id:"next",level:2}],d={toc:u};function f(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"interfaces"},"Interfaces"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},'Understand how to declare object types with the "interface" keyword, and the subtle difference interfaces have with regular type aliases.')),(0,i.kt)("hr",null),(0,i.kt)("p",null,"In the ",(0,i.kt)("a",{parentName:"p",href:"/academy/switching-to-typescript/using-types-continued",target:null,rel:null},(0,i.kt)("strong",{parentName:"a"},"Using types - II"))," lesson, you learned about object types and how to create them. Let's create a new custom object type using the ",(0,i.kt)("inlineCode",{parentName:"p"},"type")," keyword that we're already familiar with."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"type Person = {\n    name: string;\n    age: number;\n    hobbies: string[];\n};\n")),(0,i.kt)("p",null,"We can keep this just as it is, which would be totally okay, or we could use an ",(0,i.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/docs/handbook/typescript-tooling-in-5-minutes.html#interfaces",target:"_blank",rel:"noopener"},"interface"),". Interfaces and type aliases are nearly identical in their functionality; however there are two main differences:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Interfaces can ",(0,i.kt)("strong",{parentName:"li"},"ONLY")," hold function or object types."),(0,i.kt)("li",{parentName:"ol"},"Types can only be declared once, while interfaces of the same name can be declared multiple times and will automatically merge."),(0,i.kt)("li",{parentName:"ol"},"The syntax between the two differs slightly.")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"When working with object types, it usually just comes down to preference whether you decide to use an interface or a type alias.")),(0,i.kt)("p",null,"Using the ",(0,i.kt)("inlineCode",{parentName:"p"},"interface")," keyword, we can easily turn our ",(0,i.kt)("inlineCode",{parentName:"p"},"Person")," type into an interface."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'// Interfaces don\'t need an "=" sign\ninterface Person {\n    name: string;\n    age: number;\n    hobbies: string[];\n};\n')),(0,i.kt)("p",null,"When creating a new interface, you can also use the ",(0,i.kt)("inlineCode",{parentName:"p"},"extends")," keyword to inherit all of the object properties from another interface (or type alias):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'interface Person {\n    name: string;\n    age: number;\n    hobbies: string[];\n}\n\n// This would also work just fine if "Person"\n// was declared with the "type" keyword instead\ninterface Employee extends Person {\n    occupation: string;\n}\n')),(0,i.kt)("p",null,"This is functionality is not unique to interfaces though, as it can be done with something called an ",(0,i.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/docs/handbook/2/objects.html#intersection-types",target:"_blank",rel:"noopener"},"intersection type")," when using the ",(0,i.kt)("inlineCode",{parentName:"p"},"type")," keyword."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"type Employee = Person & {\n    occupation: string;\n};\n")),(0,i.kt)("p",null,"Overall, the differences between interfaces and type aliases are quite subtle. In some use cases, one might be better than the other, but in general it's up to you which you want to use."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"To learn more about the differences between ",(0,i.kt)("inlineCode",{parentName:"p"},"interface")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"type"),", check out ",(0,i.kt)("a",{parentName:"p",href:"https://medium.com/@martin_hotell/interface-vs-type-alias-in-typescript-2-7-2a8f1777af4c",target:"_blank",rel:"noopener"},"this article"),".")),(0,i.kt)("h2",{id:"next"},"Next up"),(0,i.kt)("p",null,"It's finally time to ",(0,i.kt)("a",{parentName:"p",href:"/academy/switching-to-typescript/mini-project",target:null,rel:null},"build our project"),"! The project we'll be building in the next lesson will be a small API scraper utilizes many of the TypeScript features learned in the course."))}f.isMDXComponent=!0}}]);