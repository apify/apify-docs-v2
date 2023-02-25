"use strict";(self.webpackChunkapify_docs_v2=self.webpackChunkapify_docs_v2||[]).push([[1739],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=i.createContext({}),l=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=l(e.components);return i.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(n),h=r,m=u["".concat(p,".").concat(h)]||u[h]||d[h]||a;return n?i.createElement(m,o(o({ref:t},c),{},{components:n})):i.createElement(m,o({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var l=2;l<a;l++)o[l]=n[l];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},95072:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var i=n(87462),r=n(63366),a=(n(67294),n(3905)),o=["components"],s={title:"Installation & getting started",description:"Install TypeScript and the TS compiler on your machine, then write your very first lines of TypeScript code by fixing a logical bug in a vanilla JS snippet.",sidebar_position:7.1,slug:"/switching-to-typescript/installation"},p="Installation & getting started",l={unversionedId:"webscraping/switching_to_typescript/installation",id:"webscraping/switching_to_typescript/installation",title:"Installation & getting started",description:"Install TypeScript and the TS compiler on your machine, then write your very first lines of TypeScript code by fixing a logical bug in a vanilla JS snippet.",source:"@site/sources/academy/webscraping/switching_to_typescript/installation.md",sourceDirName:"webscraping/switching_to_typescript",slug:"/switching-to-typescript/installation",permalink:"/academy/switching-to-typescript/installation",draft:!1,editUrl:"https://github.com/apify/apify-docs-v2/edit/master/sources/academy/webscraping/switching_to_typescript/installation.md",tags:[],version:"current",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1677347846,formattedLastUpdatedAt:"Feb 25, 2023",sidebarPosition:7.1,frontMatter:{title:"Installation & getting started",description:"Install TypeScript and the TS compiler on your machine, then write your very first lines of TypeScript code by fixing a logical bug in a vanilla JS snippet.",sidebar_position:7.1,slug:"/switching-to-typescript/installation"},sidebar:"academy",previous:{title:"Switching to TypeScript",permalink:"/academy/switching-to-typescript"},next:{title:"Using types - I",permalink:"/academy/switching-to-typescript/using-types"}},c={},d=[{value:"Understanding the problems TypeScript solves",id:"understanding-what-typescript-solves",level:2},{value:"Writing your first TypeScript code",id:"writing-your-first-typescript-code",level:2},{value:"Compiling",id:"compiling",level:2},{value:"Next up",id:"next",level:2}],u={toc:d};function h(e){var t=e.components,s=(0,r.Z)(e,o);return(0,a.kt)("wrapper",(0,i.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"installation-getting-started"},"Installation & getting started"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Install TypeScript and the TS compiler on your machine, then write your very first lines of TypeScript code by fixing a logical bug in a vanilla JS snippet.")),(0,a.kt)("hr",null),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"In order to install and use TypeScript, you'll first need to make sure you've installed ",(0,a.kt)("a",{parentName:"p",href:"https://nodejs.org",target:"_blank",rel:"noopener"},"Node.js"),". Node.js comes with a package manager called ",(0,a.kt)("a",{parentName:"p",href:"https://npmjs.com",target:"_blank",rel:"noopener"},"NPM"),", through which TypeScript can be installed.")),(0,a.kt)("p",null,"To install TypeScript globally on your machine, run the following command in your terminal:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"npm install -g typescript\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"On MacOS or Linux, you might need to prefix this command with ",(0,a.kt)("inlineCode",{parentName:"p"},"sudo"),".")),(0,a.kt)("p",null,"That's it!"),(0,a.kt)("h2",{id:"understanding-what-typescript-solves"},"Understanding the problems TypeScript solves"),(0,a.kt)("p",null,"To aid in properly showing some of the benefits TypeScript brings, here is some vanilla JavaScript code that has a bug. This bug will not throw an error or cause the program to crash, but it is a logical error that does not output what we expect."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const products = [\n    {\n        title: 'iPhone',\n        price: '1000',\n    },\n    {\n        title: 'iPad',\n        price: '1099',\n    },\n];\n\nconst addPrices = (price1, price2) => {\n    return price1 + price2;\n};\n\nconsole.log(addPrices(products[0].price, products[1].price));\n")),(0,a.kt)("p",null,"The output of this code is ",(0,a.kt)("strong",{parentName:"p"},"10001099"),", because instead of adding two numbers together, we've concatenated two strings together using the ",(0,a.kt)("inlineCode",{parentName:"p"},"+")," operator. Surely, this is not what we wanted to do."),(0,a.kt)("p",null,"No problem, right? We can just add a type check within the ",(0,a.kt)("inlineCode",{parentName:"p"},"addPrices")," function so that it can support both strings and numbers:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const products = [\n    {\n        title: 'iPhone',\n        price: '1000',\n    },\n    {\n        title: 'iPad',\n        price: '1099',\n    },\n];\n\nconst addPrices = (price1, price2) => {\n    // If they are numbers just add them together\n    if (typeof price1 === 'number' && typeof price2 === 'number') {\n        return price1 + price2;\n    }\n\n    // Otherwise, convert them to numbers and add them together\n    return +price1 + +price2;\n};\n\nconsole.log(addPrices(products[0].price, products[1].price));\n")),(0,a.kt)("p",null,"Now, the output of our code is ",(0,a.kt)("strong",{parentName:"p"},"2099"),", exactly what we wanted. However, this extra logic hasn't really solved our issue. We only ever want numbers to be passed into ",(0,a.kt)("inlineCode",{parentName:"p"},"addPrices"),", and nothing else. This is where TS comes in handy."),(0,a.kt)("h2",{id:"writing-your-first-typescript-code"},"Writing your first TypeScript code"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"We recommend using ",(0,a.kt)("a",{parentName:"p",href:"https://code.visualstudio.com/",target:"_blank",rel:"noopener"},"VSCode")," to write your TypeScript code, but feel free to use any IDE that supports TypeScript when following along with this course.")),(0,a.kt)("p",null,"Let's create a folder called ",(0,a.kt)("strong",{parentName:"p"},"learning-typescript"),", adding a new file within it named ",(0,a.kt)("strong",{parentName:"p"},"first-lines.ts"),". Then, we'll go ahead and paste the very first code example from this lesson into that file. Once again, the example is written in vanilla JavaScript, but since all JavaScript code is valid TypeScript code, this will be pretty much seamless."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Example pasted into first-lines.ts",src:n(49664).Z,width:"1250",height:"632"})),(0,a.kt)("p",null,"As seen above, TypeScript has successfully recognized our code; however, there are now red underlines under the ",(0,a.kt)("inlineCode",{parentName:"p"},"price1")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"price2")," parameters in the function declaration of ",(0,a.kt)("inlineCode",{parentName:"p"},"addPrices"),". This is because right now, the compiler has no idea what data types we're expecting to be passed in. This can be solved with the simple addition of ",(0,a.kt)("strong",{parentName:"p"},"type annotations")," to the parameters by using a colon (",(0,a.kt)("inlineCode",{parentName:"p"},":"),") and the name of the parameter's type."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const products = [\n    {\n        title: 'iPhone',\n        price: '1000',\n    },\n    {\n        title: 'iPad',\n        price: '1099',\n    },\n];\n\n// Add type annotations so that now the function will\n// only accept numbers.\nconst addPrices = (price1: number, price2: number) => {\n    return price1 + price2;\n};\n\nconsole.log(addPrices(products[0].price, products[1].price));\n")),(0,a.kt)("p",null,"Since the function now only accepts numbers, the parameters in the function call within the ",(0,a.kt)("inlineCode",{parentName:"p"},"console.log")," at the bottom of the file are now underlined in red."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Example pasted into first-lines.ts",src:n(68183).Z,width:"1614",height:"300"})),(0,a.kt)("p",null,"This is because TypeScript has automatically inferred (without us even needing to do anything) that ",(0,a.kt)("inlineCode",{parentName:"p"},"products")," is an array of objects containing ",(0,a.kt)("inlineCode",{parentName:"p"},"title")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"price")," properties - both strings. Because of this type inference, it knows that ",(0,a.kt)("inlineCode",{parentName:"p"},"products[0].price")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"products[1].price")," are both strings, and does not allow them to be passed into ",(0,a.kt)("inlineCode",{parentName:"p"},"addPrices"),", which only accepts numbers. We'll solve this by converting the values to numbers when passing them into the function."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const products = [\n    {\n        title: 'iPhone',\n        price: '1000',\n    },\n    {\n        title: 'iPad',\n        price: '1099',\n    },\n];\n\nconst addPrices = (price1: number, price2: number) => {\n    return price1 + price2;\n};\n\n// Convert the values to numbers as they are passed in\nconsole.log(addPrices(+products[0].price, +products[1].price));\n")),(0,a.kt)("p",null,"Now, our code will work exactly as it should, and we can feel certain that no similar mistakes will be made when using the ",(0,a.kt)("inlineCode",{parentName:"p"},"addPrices")," function again."),(0,a.kt)("h2",{id:"compiling"},"Compiling"),(0,a.kt)("p",null,"In order to run the code we wrote in the above section, we'll have to compile the ",(0,a.kt)("strong",{parentName:"p"},"first-lines.ts")," file into vanilla JavasScript."),(0,a.kt)("p",null,"Using the TypeScript compiler is extremely straightforward. Just run the ",(0,a.kt)("inlineCode",{parentName:"p"},"tsc")," command in your terminal with the path to the file to compile, and the compiler will do its magic!"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"tsc first-lines.ts\n")),(0,a.kt)("p",null,"A ",(0,a.kt)("strong",{parentName:"p"},"first-lines.js")," file appears after running this command, which can be run like normal with this command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"node first-lines.js\n")),(0,a.kt)("p",null,"Outputted is ",(0,a.kt)("inlineCode",{parentName:"p"},"2099"),", exactly what we expected. Awesome!"),(0,a.kt)("h2",{id:"next"},"Next up"),(0,a.kt)("p",null,"In the ","[next lesson]",", we'll be discussing how to use some of the core types that TypeScript offers."))}h.isMDXComponent=!0},68183:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/another-error-c94febed45be58bb6c19aab8ef2d3430.png"},49664:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/pasted-example-df1e50a13cd72f6ae7ba78ff70138536.png"}}]);