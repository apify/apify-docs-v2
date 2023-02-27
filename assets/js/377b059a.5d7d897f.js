"use strict";(self.webpackChunkapify_docs_v2=self.webpackChunkapify_docs_v2||[]).push([[6086],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,h=u["".concat(p,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(h,i(i({ref:t},l),{},{components:n})):r.createElement(h,i({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},50768:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>m,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],s={title:"Mini-project",description:"Build an entire project in TypeScript using concepts learned in this course. Also, learn about two more advanced TypeScript features.",sidebar_position:7.9,slug:"/switching-to-typescript/mini-project"},p="Mini-project",c={unversionedId:"webscraping/switching_to_typescript/mini_project",id:"webscraping/switching_to_typescript/mini_project",title:"Mini-project",description:"Build an entire project in TypeScript using concepts learned in this course. Also, learn about two more advanced TypeScript features.",source:"@site/sources/academy/webscraping/switching_to_typescript/mini_project.md",sourceDirName:"webscraping/switching_to_typescript",slug:"/switching-to-typescript/mini-project",permalink:"/academy/switching-to-typescript/mini-project",draft:!1,editUrl:"https://github.com/apify/apify-docs-v2/edit/master/sources/academy/webscraping/switching_to_typescript/mini_project.md",tags:[],version:"current",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1677522857,formattedLastUpdatedAt:"Feb 27, 2023",sidebarPosition:7.9,frontMatter:{title:"Mini-project",description:"Build an entire project in TypeScript using concepts learned in this course. Also, learn about two more advanced TypeScript features.",sidebar_position:7.9,slug:"/switching-to-typescript/mini-project"},sidebar:"academy",previous:{title:"Interfaces",permalink:"/academy/switching-to-typescript/interfaces"},next:{title:"Advanced web scraping",permalink:"/academy/advanced-web-scraping"}},l={},d=[{value:"Project overview",id:"project-overview",level:2},{value:"Writing types",id:"writing-types",level:2},{value:"Defining object types for API responses",id:"defining-object-types-for-api-responses",level:3},{value:"Defining output types",id:"defining-output-types",level:3},{value:"Defining input types",id:"defining-input-types",level:3},{value:"Quick chat about generics",id:"generics",level:4},{value:"Final types.ts file",id:"final-types",level:3},{value:"Fetching the data",id:"fetching-the-data",level:2},{value:"Sorting the data",id:"sorting-the-data",level:2},{value:"Putting the pieces together",id:"putting-the-pieces-together",level:2},{value:"Running the scraper",id:"running-the-scraper",level:2},{value:"Let&#39;s talk about overloads",id:"lets-talk-about-overloads",level:2},{value:"Final code",id:"final-code",level:2},{value:"Wrap up",id:"wrap-up",level:2}],u={toc:d};function m(e){var t=e.components,s=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"mini-project"},"Mini-project"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Build an entire project in TypeScript using concepts learned in this course. Also, learn about two more advanced TypeScript features.")),(0,o.kt)("hr",null),(0,o.kt)("p",null,"You're here! If you made it this far, that means that you've familiarized yourself with all the core concepts in TypeScript (and some of the more advanced ones too). We're going to scrape product data from ",(0,o.kt)("a",{parentName:"p",href:"https://dummyjson.com/products",target:"_blank",rel:"noopener"},"this API endpoint"),", then manipulate it based on user input."),(0,o.kt)("h2",{id:"project-overview"},"Project overview"),(0,o.kt)("p",null,"Here's a rundown of what our project should be able to do:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Accept an object with two properties as its input. The ",(0,o.kt)("strong",{parentName:"li"},"sort")," property defines how to sort the data, and can be either ",(0,o.kt)("strong",{parentName:"li"},"ascending")," or ",(0,o.kt)("strong",{parentName:"li"},"descending"),". ",(0,o.kt)("strong",{parentName:"li"},"removeImages")," determines whether or not the images array should be removed from each product."),(0,o.kt)("li",{parentName:"ol"},"Fetch the data and get full TypeScript support on the response object (no ",(0,o.kt)("inlineCode",{parentName:"li"},"any"),"!)."),(0,o.kt)("li",{parentName:"ol"},"Sort and modify the data, receiving TypeScript support for the new modified data.")),(0,o.kt)("p",null,"We'll be using a single external package called ",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/axios",target:"_blank",rel:"noopener"},(0,o.kt)("strong",{parentName:"a"},"Axios"))," to easily fetch the data from the API, which can be installed with the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"npm i axios\n")),(0,o.kt)("h2",{id:"writing-types"},"Writing types"),(0,o.kt)("p",null,"Especially when writing a scraper, it's extremely helpful to write out your data types before even writing a single line of logic. When you understand the data types your program is going to be working with, it's much easier to think how ",(0,o.kt)("strong",{parentName:"p"},"how")," it will work with them."),(0,o.kt)("h3",{id:"defining-object-types-for-api-responses"},"Defining object types for API responses"),(0,o.kt)("p",null,"Our Dummy JSON API returns an array of products that look like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "id": 1,\n    "title": "iPhone 9",\n    "description": "An apple mobile which is nothing like apple",\n    "price": 549,\n    "discountPercentage": 12.96,\n    "rating": 4.69,\n    "stock": 94,\n    "brand": "Apple",\n    "category": "smartphones",\n    "thumbnail": "https://dummyjson.com/image/i/products/1/thumbnail.jpg",\n    "images": [\n        "https://dummyjson.com/image/i/products/1/1.jpg",\n        "https://dummyjson.com/image/i/products/1/2.jpg",\n        "https://dummyjson.com/image/i/products/1/3.jpg",\n        "https://dummyjson.com/image/i/products/1/4.jpg",\n        "https://dummyjson.com/image/i/products/1/thumbnail.jpg"\n    ]\n}\n')),(0,o.kt)("p",null,"Let's write an object type for a product in a new file called ",(0,o.kt)("strong",{parentName:"p"},"types.ts"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"// types.ts\nexport interface Product {\n    id: number;\n    title: string;\n    description: string;\n    price: number;\n    discountPercentage: number;\n    rating: number;\n    stock: number;\n    brand: string;\n    category: string;\n    thumbnail: string;\n    images: string[];\n}\n")),(0,o.kt)("p",null,"Great! In the response, the array of products is stored under a key named ",(0,o.kt)("strong",{parentName:"p"},"products"),", so we'll create a ",(0,o.kt)("inlineCode",{parentName:"p"},"ResponseData")," type to represent this as well:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"// types.ts\n\n// ...\nexport interface ResponseData {\n    products: Product[];\n}\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Notice that we are ",(0,o.kt)("inlineCode",{parentName:"p"},"export"),"ing these so that they can be used back in ",(0,o.kt)("strong",{parentName:"p"},"index.ts")," later on.")),(0,o.kt)("h3",{id:"defining-output-types"},"Defining output types"),(0,o.kt)("p",null,"Luckily for us, we'll be outputting an array of ",(0,o.kt)("inlineCode",{parentName:"p"},"Product"),"s, for which we've already written a type. However, the user will have an option to modify each product by removing the ",(0,o.kt)("strong",{parentName:"p"},"images")," property from each one. So, we need to create a new ",(0,o.kt)("inlineCode",{parentName:"p"},"ModifiedProduct")," that has all the same properties as ",(0,o.kt)("inlineCode",{parentName:"p"},"Product")," ",(0,o.kt)("strong",{parentName:"p"},"EXCEPT")," for ",(0,o.kt)("strong",{parentName:"p"},"images"),"."),(0,o.kt)("p",null,"For this, we can use a ",(0,o.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/docs/handbook/utility-types.html",target:"_blank",rel:"noopener"},"utility type")," called ",(0,o.kt)("inlineCode",{parentName:"p"},"Omit"),", which is natively available in TypeScript."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"// types.ts\n\n// ...\nexport type ModifiedProduct = Omit<Product, 'images'>;\n")),(0,o.kt)("p",null,"This type takes in some arguments (a ",(0,o.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/docs/handbook/2/generics.html",target:"_blank",rel:"noopener"},"generic"),", as they are called in TS), notated with ",(0,o.kt)("inlineCode",{parentName:"p"},"<>"),". The first one is the type to remove the property from, in our case it's ",(0,o.kt)("inlineCode",{parentName:"p"},"Product"),", and the second is the property to remove."),(0,o.kt)("h3",{id:"defining-input-types"},"Defining input types"),(0,o.kt)("p",null,"The user of our scraper will have to provide some input. First, we'll use an enum to define the types of sorting we want to support:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"// types.ts\n\n// ...\nexport enum SortOrder {\n    ASC = 'ascending',\n    DESC = 'descending',\n}\n")),(0,o.kt)("p",null,"And finally, we'll create a ",(0,o.kt)("inlineCode",{parentName:"p"},"UserInput")," type which takes in an argument (a generic type)."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"// types.ts\n\n// ...\nexport interface UserInput<RemoveImages extends boolean = boolean> {\n    sort: 'ascending' | 'descending';\n    removeImages: RemoveImages;\n}\n")),(0,o.kt)("p",null,"But hold on a minute, we didn't even learn about generics in this course!"),(0,o.kt)("h4",{id:"generics"},"Quick chat about generics"),(0,o.kt)("p",null,'"Generics" is just a fancy term for arguments that can be passed into a type. Just like regular JavaScript function arguments, they can be passed in and anything can be done with them. Let\'s break it down:'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'// We can give "RemoveImages" any name, as it is just representative of an argument that will be passed into.\n\n// "RemoveImages" can\'t be just any type. It must EXTEND a boolean, meaning it must be either true or false.\n\n// By using the "=" sign, we make "RemoveImages" an optional type argument. It will default to the "boolean" type.\nexport interface UserInput<RemoveImages extends boolean = boolean> {\n    sort: \'ascending\' | \'descending\';\n    // The type passed in is being set as the type for the "removeImages" property\n    removeImages: RemoveImages;\n}\n')),(0,o.kt)("p",null,"Using this generic allows us to go a step further in how specific we are being by adding the ability to literally specify whether or not ",(0,o.kt)("strong",{parentName:"p"},"removeImages")," is ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"false"),". A bit later, you'll see why we want this functionality."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"We recommend reading up on generics ",(0,o.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/docs/handbook/2/generics.html",target:"_blank",rel:"noopener"},"in the TypeScript documentation")," to fully understand this slightly more advanced concept.")),(0,o.kt)("h3",{id:"final-types"},"Final types.ts file"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"// types.ts\nexport interface Product {\n    id: number;\n    title: string;\n    description: string;\n    price: number;\n    discountPercentage: number;\n    rating: number;\n    stock: number;\n    brand: string;\n    category: string;\n    thumbnail: string;\n    images: string[];\n}\n\nexport interface ResponseData {\n    products: Product[];\n}\n\nexport type ModifiedProduct = Omit<Product, 'images'>;\n\n// Usually, you'd have this in a file holding constants\nexport enum SortOrder {\n    ASC = 'ascending',\n    DESC = 'descending',\n}\n\nexport interface UserInput<RemoveImages extends boolean = boolean> {\n    sort: 'ascending' | 'descending';\n    removeImages: RemoveImages;\n}\n")),(0,o.kt)("h2",{id:"fetching-the-data"},"Fetching the data"),(0,o.kt)("p",null,"First, let's go ahead and import ",(0,o.kt)("strong",{parentName:"p"},"axios")," and write our fetching function."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"// index.ts\nimport axios from 'axios';\n\nconst fetchData = async () => {\n    const { data } = await axios('https://dummyjson.com/products?limit=100');\n\n    return data;\n};\n")),(0,o.kt)("p",null,"Easy enough, right? Well, not really. Let's take a look at how TypeScript interprets the function by hovering over it."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Promise of any type",src:n(44969).Z,width:"544",height:"58"})),(0,o.kt)("p",null,"We're returning a promise of any type out of this function. This is where we can use ",(0,o.kt)("a",{parentName:"p",href:"/academy/switching-to-typescript/unknown-and-type-assertions",target:null,rel:null},"type assertions")," to help TypeScript understand that this response takes the shape of our ",(0,o.kt)("inlineCode",{parentName:"p"},"ResponseData")," type."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"// index.ts\nimport axios from 'axios';\n\n// You don't need to add the word \"type\" after the \"import\" keyword when\n// importing types, but it can help improve code readability and also prevent\n// classes from being used normally if they're imported as just a type.\nimport type { ResponseData } from './types';\n\nconst fetchData = async () => {\n    const { data } = await axios('https://dummyjson.com/products?limit=100');\n\n    return data as ResponseData;\n};\n")),(0,o.kt)("p",null,"Now, the return type is ",(0,o.kt)("inlineCode",{parentName:"p"},"Promise<ResponseData>")," - much better! Because of this small change, we'll receive full TypeScript support (and IDE autocomplete) on the return value of ",(0,o.kt)("inlineCode",{parentName:"p"},"fetchData"),"."),(0,o.kt)("h2",{id:"sorting-the-data"},"Sorting the data"),(0,o.kt)("p",null,"Now, we'll write a function that will sort an array of products."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"// index.ts\n\n// ...\n\n// Take in an array of products, as well as the order in which they should be sorted\nconst sortData = (products: Product[], order: SortOrder) => {\n    // Logic will go here\n};\n")),(0,o.kt)("p",null,"Since we ",(0,o.kt)("inlineCode",{parentName:"p"},"SortOrder")," ahead of time, we know exactly which cases we need to handle. This is just one example of how writing key important types and constants prior to writing any code can be beneficial."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"// index.ts\n//...\nimport { SortOrder } from './types';\n\nimport type { ResponseData, Product } from './types';\n// ...\nconst sortData = (products: Product[], order: SortOrder) => {\n    switch (order) {\n        // If for whatever reason the value provided isn't in our SortOrder\n        // enum, just return the products as they were\n        default:\n            return products;\n        // Handle ascending and descending sorting\n        case SortOrder.ASC:\n            return [...products].sort((a, b) => a.price - b.price);\n        case SortOrder.DESC:\n            return [...products].sort((a, b) => b.price - a.price);\n    }\n};\n")),(0,o.kt)("h2",{id:"putting-the-pieces-together"},"Putting the pieces together"),(0,o.kt)("p",null,"Because of the abstractions we've made with the ",(0,o.kt)("inlineCode",{parentName:"p"},"fetchData")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"sortData")," functions, we can now write another small function called ",(0,o.kt)("inlineCode",{parentName:"p"},"scrape")," which will do the following:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Take in an object matching the ",(0,o.kt)("inlineCode",{parentName:"li"},"UserInput")," type."),(0,o.kt)("li",{parentName:"ol"},"Fetch the data with the ",(0,o.kt)("inlineCode",{parentName:"li"},"fetchData")," function."),(0,o.kt)("li",{parentName:"ol"},"Sort it with the ",(0,o.kt)("inlineCode",{parentName:"li"},"sortData")," function."),(0,o.kt)("li",{parentName:"ol"},"Remove the images from each product (if requested by the user).")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'// index.ts\n//...\nimport { SortOrder } from \'./types\';\n\nimport type { ResponseData, Product, UserInput, ModifiedProduct } from \'./types\';\n// ...\n\n// Return a promise of either a "Product" array, or a "ModifiedProduct" array\nasync function scrape(input: UserInput): Promise<Product[] | ModifiedProduct[]> {\n    // Fetch the data\n    const data = await fetchData();\n\n    // Sort the products based on the input\'s "sort" property. We have\n    // to cast it to "SortOrder" because despite being equal, technically\n    // the string "ascending" isn\'t the same type as SortOrder.ASC\n    const sorted = sortData(data.products, input.sort as SortOrder);\n\n    // If the user wants to remove images, map through each product removing\n    // the images and return the result\n    if (input.removeImages) {\n        return sorted.map((item) => {\n            const { images, ...rest } = item;\n\n            return rest;\n        });\n    }\n\n    // Otherwise, just return the sorted products\n    return sorted;\n}\n')),(0,o.kt)("h2",{id:"running-the-scraper"},"Running the scraper"),(0,o.kt)("p",null,"Finally, we'll create a new function called ",(0,o.kt)("inlineCode",{parentName:"p"},"main")," which will initialize the input, call the ",(0,o.kt)("inlineCode",{parentName:"p"},"scrape")," function, and return the result."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"// index.ts\n\n// ...\nconst main = async () => {\n    const INPUT: UserInput<true> = { sort: 'ascending', removeImages: true };\n\n    const result = await scrape(INPUT);\n\n    console.log(result);\n};\n")),(0,o.kt)("p",null,"And that's it! Well, not quite. We are unable to access the ",(0,o.kt)("strong",{parentName:"p"},"images")," property on ",(0,o.kt)("inlineCode",{parentName:"p"},"result[0]"),", which makes total sense. However, even if we switch ",(0,o.kt)("strong",{parentName:"p"},"removeImages")," in the ",(0,o.kt)("inlineCode",{parentName:"p"},"INPUT")," variable to ",(0,o.kt)("inlineCode",{parentName:"p"},"false"),", we still get an error when trying to access that property, even though we know that it hasn't been filtered out."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Can&#39;t access the &quot;images&quot; property even though it exists",src:n(75337).Z,width:"1442",height:"518"})),(0,o.kt)("p",null,"This is because we haven't been specific enough. The ",(0,o.kt)("inlineCode",{parentName:"p"},"scrape")," function can return two different data types (either ",(0,o.kt)("inlineCode",{parentName:"p"},"Product[]")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"ModifiedProduct[]"),"), and because ",(0,o.kt)("inlineCode",{parentName:"p"},"ModifiedProduct")," doesn't have an ",(0,o.kt)("strong",{parentName:"p"},"images")," property, TypeScript freaks out and says that you shouldn't be trying to access it. This can be fixed with ",(0,o.kt)("strong",{parentName:"p"},"overloads"),"."),(0,o.kt)("h2",{id:"lets-talk-about-overloads"},"Let's talk about overloads"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.tutorialsteacher.com/typescript/function-overloading",target:"_blank",rel:"noopener"},"Overloads")," come in handy when you've written a function that returns different things based on what types of arguments were passed into it."),(0,o.kt)("p",null,"We need to tell TypeScript that the ",(0,o.kt)("inlineCode",{parentName:"p"},"scrape")," function returns a ",(0,o.kt)("inlineCode",{parentName:"p"},"Product[]")," when the input has a type of ",(0,o.kt)("inlineCode",{parentName:"p"},"UserInput<true>"),", but a ",(0,o.kt)("inlineCode",{parentName:"p"},"ModifiedProduct[]")," when the input has a type of ",(0,o.kt)("inlineCode",{parentName:"p"},"UserInput<false>"),". This can be done by declaring the function multiple types with different parameter types and specifying the return type for each one."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'// index.ts\n\n// ...\n// If "removeImages" is true, a ModifiedProduct array will be returned\nasync function scrape(input: UserInput<true>): Promise<ModifiedProduct[]>;\n// If false, a normal product array is returned\nasync function scrape(input: UserInput<false>): Promise<Product[]>;\n// The main function declaration, which accepts all types in the declarations above.\n// Notice that it has no explicit return type, since they are defined in the\n// overloads above.\nasync function scrape(input: UserInput) {\n    const data = await fetchData();\n\n    const sorted = sortData(data.products, input.sort as SortOrder);\n\n    if (input.removeImages) {\n        return sorted.map((item) => {\n            const { images, ...rest } = item;\n\n            return rest;\n        });\n    }\n\n    return sorted;\n}\n')),(0,o.kt)("p",null,"Now, we can access ",(0,o.kt)("inlineCode",{parentName:"p"},"result[0].images")," on the return value of ",(0,o.kt)("inlineCode",{parentName:"p"},"scrape")," if ",(0,o.kt)("strong",{parentName:"p"},"removeImages")," was false without any compiler errors being thrown. But, if we switch ",(0,o.kt)("strong",{parentName:"p"},"removeImages")," to false, TypeScript will yell at us."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"No more error",src:n(8747).Z,width:"1158",height:"316"})),(0,o.kt)("h2",{id:"final-code"},"Final code"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"// index.ts\nimport axios from 'axios';\nimport { SortOrder } from './types';\n\nimport type { ResponseData, Product, UserInput, ModifiedProduct } from './types';\n\nconst fetchData = async () => {\n    const { data } = await axios('https://dummyjson.com/products?limit=100');\n\n    return data as ResponseData;\n};\n\nconst sortData = (products: Product[], order: SortOrder) => {\n    switch (order) {\n        default:\n            return products;\n        case SortOrder.ASC:\n            return [...products].sort((a, b) => a.price - b.price);\n        case SortOrder.DESC:\n            return [...products].sort((a, b) => b.price - a.price);\n    }\n};\n\nasync function scrape(input: UserInput<true>): Promise<ModifiedProduct[]>;\nasync function scrape(input: UserInput<false>): Promise<Product[]>;\nasync function scrape(input: UserInput) {\n    const data = await fetchData();\n\n    const sorted = sortData(data.products, input.sort as SortOrder);\n\n    if (input.removeImages) {\n        return sorted.map((item) => {\n            const { images, ...rest } = item;\n\n            return rest;\n        });\n    }\n\n    return sorted;\n}\n\nconst main = async () => {\n    const INPUT: UserInput<false> = { sort: 'ascending', removeImages: false };\n\n\n    const result = await scrape(INPUT);\n\n    console.log(result[0].images);\n};\n\nmain();\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"// types.ts\nexport interface Product {\n    id: number;\n    title: string;\n    description: string;\n    price: number;\n    discountPercentage: number;\n    rating: number;\n    stock: number;\n    brand: string;\n    category: string;\n    thumbnail: string;\n    images: string[];\n}\n\nexport interface ResponseData {\n    products: Product[];\n}\n\nexport type ModifiedProduct = Omit<Product, 'images'>;\n\nexport enum SortOrder {\n    ASC = 'ascending',\n    DESC = 'descending',\n}\n\nexport interface UserInput<RemoveImages extends boolean = boolean> {\n    sort: 'ascending' | 'descending';\n    removeImages: RemoveImages;\n}\n")),(0,o.kt)("h2",{id:"wrap-up"},"Wrap up"),(0,o.kt)("p",null,"Nice work! You've reached the end of our ",(0,o.kt)("strong",{parentName:"p"},"Switching to TypeScript")," course, which means that you're ready to start building your own projects in TypeScript. We haven't covered every single TypeScript feature in this course, but you have learned about and used all of the language's most important features."),(0,o.kt)("p",null,"Congrats! \ud83c\udf89"))}m.isMDXComponent=!0},8747:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/no-more-error-49dc88cbb38745e13bad8831455df1fe.png"},44969:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/promise-any-6c86de0f018d1f31085764d72a023842.png"},75337:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/we-need-overloads-3d65e41172fa581c6ab10d9e6dece69d.png"}}]);