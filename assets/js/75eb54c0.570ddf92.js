"use strict";(self.webpackChunkapify_docs_v2=self.webpackChunkapify_docs_v2||[]).push([[8287],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(h,a(a({ref:t},p),{},{components:n})):r.createElement(h,a({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},27853:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>u});var r=n(87462),o=n(63366),i=(n(67294),n(3905)),a=["components"],l={title:"Watch mode & tsconfig.json",description:"Learn how to fine-tune TypeScript for an entire project's needs and efficiently compile numerous TS files at a single time (automagically).",sidebar_position:7.7,slug:"/switching-to-typescript/watch-mode-and-tsconfig"},s="Watch mode and tsconfig.json",c={unversionedId:"webscraping/switching_to_typescript/watch_mode_and_tsconfig",id:"webscraping/switching_to_typescript/watch_mode_and_tsconfig",title:"Watch mode & tsconfig.json",description:"Learn how to fine-tune TypeScript for an entire project's needs and efficiently compile numerous TS files at a single time (automagically).",source:"@site/sources/academy/webscraping/switching_to_typescript/watch_mode_and_tsconfig.md",sourceDirName:"webscraping/switching_to_typescript",slug:"/switching-to-typescript/watch-mode-and-tsconfig",permalink:"/academy/switching-to-typescript/watch-mode-and-tsconfig",draft:!1,tags:[],version:"current",lastUpdatedBy:"Jind\u0159ich B\xe4r",lastUpdatedAt:1673533984,formattedLastUpdatedAt:"Jan 12, 2023",sidebarPosition:7.7,frontMatter:{title:"Watch mode & tsconfig.json",description:"Learn how to fine-tune TypeScript for an entire project's needs and efficiently compile numerous TS files at a single time (automagically).",sidebar_position:7.7,slug:"/switching-to-typescript/watch-mode-and-tsconfig"},sidebar:"academy",previous:{title:"Unknown, any, type guards & type assertions",permalink:"/academy/switching-to-typescript/unknown-and-type-assertions"},next:{title:"Interfaces",permalink:"/academy/switching-to-typescript/interfaces"}},p={},u=[{value:"tsconfig.json",id:"tsconfig",level:2},{value:"Creating the file",id:"creating-the-file",level:3},{value:"Bare basic configurations",id:"bare-basic-configurations",level:3},{value:"Excluding files and folders",id:"excluding-files-and-folders",level:4},{value:"Telling TypeScript which files to compile",id:"telling-typescript-what-to-compile",level:4},{value:"Specify where to put compiled files",id:"specify-where-to-put-compiled-files",level:4},{value:"Important basic configurations",id:"important-basic-configurations",level:3},{value:"Setting the target",id:"setting-the-target",level:4},{value:"Setting libs",id:"setting-libs",level:4},{value:"Removing comments",id:"removing-comments",level:4},{value:"Refusing to compile if there are any errors",id:"dont-compile-if-errors",level:4},{value:"Adding strict type checking",id:"strict-type-checking",level:4},{value:"Setting module resolution &amp; type",id:"module-resolution",level:4},{value:"Watch mode",id:"watch-mode",level:2},{value:"Next up",id:"next",level:2}],d={toc:u};function m(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"watch-mode-and-tsconfig"},"Watch mode and tsconfig.json"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Learn how to fine-tune TypeScript for an entire project's needs and efficiently compile numerous TS files at a single time (automagically).")),(0,i.kt)("hr",null),(0,i.kt)("p",null,"So far, each time we've made changes to our TypeScript code, we've had to run the ",(0,i.kt)("inlineCode",{parentName:"p"},"tsc FILE_NAME.ts")," command in terminal. Very quickly, this becomes repetitive and cumbersome, especially for large projects with more than one file. Luckily, the TypeScript compiler has a special feature called ",(0,i.kt)("strong",{parentName:"p"},"watch mode"),", which will watch a specific file (or all ",(0,i.kt)("strong",{parentName:"p"},".ts")," files) for any changes. If any changes are made, it will automatically recompile."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Test out watch mode on a single file by using the ",(0,i.kt)("inlineCode",{parentName:"p"},"--watch")," (or ",(0,i.kt)("inlineCode",{parentName:"p"},"-w")," for short) flag like so: ",(0,i.kt)("inlineCode",{parentName:"p"},"tsc FILE_NAME --watch"),".")),(0,i.kt)("h2",{id:"tsconfig"},"tsconfig.json"),(0,i.kt)("p",null,"If your project has more than one file, it's a necessity to have a ",(0,i.kt)("inlineCode",{parentName:"p"},"tsconfig.json"),' file in the root of your project. This is a file which allows you to configure TypeScript to your liking, as well as utilize a "general" watch mode that watches all TS files and recompiles when changes are made.'),(0,i.kt)("h3",{id:"creating-the-file"},"Creating the file"),(0,i.kt)("p",null,"In the next lesson, we'll be learning how to use interfaces in combination with type casting and a few other concepts from the previous lessons by building a small project. Let's create a new directory for this project right now and call it ",(0,i.kt)("strong",{parentName:"p"},"my-first-typescript-project"),". Within the directory, we'll first initialize the project with this command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"npm init -y\n")),(0,i.kt)("p",null,"Then, in order to tell TypeScript that this is a whole project, we'll run this command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"tsc --init\n")),(0,i.kt)("p",null,"Notice that a new ",(0,i.kt)("strong",{parentName:"p"},"tsconfig.json")," file has been automatically created. When you open it up, here's what you'll see:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "compilerOptions": {\n    /* Visit https://aka.ms/tsconfig.json to read more about this file */\n\n    /* Projects */\n    // "incremental": true,                              /* Enable incremental compilation */\n    // "composite": true,                                /* Enable constraints that allow a TypeScript project to be used with project references. */\n    // "tsBuildInfoFile": "./",                          /* Specify the folder for .tsbuildinfo incremental compilation files. */\n    // "disableSourceOfProjectReferenceRedirect": true,  /* Disable preferring source files instead of declaration files when referencing composite projects */\n    // "disableSolutionSearching": true,                 /* Opt a project out of multi-project reference checking when editing. */\n    // "disableReferencedProjectLoad": true,             /* Reduce the number of projects loaded automatically by TypeScript. */\n\n    /* Language and Environment */\n    "target": "es2016",                                  /* Set the JavaScript language version for emitted JavaScript and include compatible library declarations. */\n    // "lib": [],                                        /* Specify a set of bundled library declaration files that describe the target runtime environment. */\n    // "jsx": "preserve",                                /* Specify what JSX code is generated. */\n    // "experimentalDecorators": true,                   /* Enable experimental support for TC39 stage 2 draft decorators. */\n    // "emitDecoratorMetadata": true,                    /* Emit design-type metadata for decorated declarations in source files. */\n    // "jsxFactory": "",                                 /* Specify the JSX factory function used when targeting React JSX emit, e.g. \'React.createElement\' or \'h\' */\n    // "jsxFragmentFactory": "",                         /* Specify the JSX Fragment reference used for fragments when targeting React JSX emit e.g. \'React.Fragment\' or \'Fragment\'. */\n    // "jsxImportSource": "",                            /* Specify module specifier used to import the JSX factory functions when using `jsx: react-jsx*`.` */\n    // "reactNamespace": "",                             /* Specify the object invoked for `createElement`. This only applies when targeting `react` JSX emit. */\n    // "noLib": true,                                    /* Disable including any library files, including the default lib.d.ts. */\n    // "useDefineForClassFields": true,                  /* Emit ECMAScript-standard-compliant class fields. */\n\n    /* Modules */\n    "module": "commonjs",                                /* Specify what module code is generated. */\n    // "rootDir": "./",                                  /* Specify the root folder within your source files. */\n    // "moduleResolution": "node",                       /* Specify how TypeScript looks up a file from a given module specifier. */\n    // "baseUrl": "./",                                  /* Specify the base directory to resolve non-relative module names. */\n    // "paths": {},                                      /* Specify a set of entries that re-map imports to additional lookup locations. */\n    // "rootDirs": [],                                   /* Allow multiple folders to be treated as one when resolving modules. */\n    // "typeRoots": [],                                  /* Specify multiple folders that act like `./node_modules/@types`. */\n    // "types": [],                                      /* Specify type package names to be included without being referenced in a source file. */\n    // "allowUmdGlobalAccess": true,                     /* Allow accessing UMD globals from modules. */\n    // "resolveJsonModule": true,                        /* Enable importing .json files */\n    // "noResolve": true,                                /* Disallow `import`s, `require`s or `<reference>`s from expanding the number of files TypeScript should add to a project. */\n\n    /* JavaScript Support */\n    // "allowJs": true,                                  /* Allow JavaScript files to be a part of your program. Use the `checkJS` option to get errors from these files. */\n    // "checkJs": true,                                  /* Enable error reporting in type-checked JavaScript files. */\n    // "maxNodeModuleJsDepth": 1,                        /* Specify the maximum folder depth used for checking JavaScript files from `node_modules`. Only applicable with `allowJs`. */\n\n    /* Emit */\n    // "declaration": true,                              /* Generate .d.ts files from TypeScript and JavaScript files in your project. */\n    // "declarationMap": true,                           /* Create sourcemaps for d.ts files. */\n    // "emitDeclarationOnly": true,                      /* Only output d.ts files and not JavaScript files. */\n    // "sourceMap": true,                                /* Create source map files for emitted JavaScript files. */\n    // "outFile": "./",                                  /* Specify a file that bundles all outputs into one JavaScript file. If `declaration` is true, also designates a file that bundles all .d.ts output. */\n    // "outDir": "./",                                   /* Specify an output folder for all emitted files. */\n    // "removeComments": true,                           /* Disable emitting comments. */\n    // "noEmit": true,                                   /* Disable emitting files from a compilation. */\n    // "importHelpers": true,                            /* Allow importing helper functions from tslib once per project, instead of including them per-file. */\n    // "importsNotUsedAsValues": "remove",               /* Specify emit/checking behavior for imports that are only used for types */\n    // "downlevelIteration": true,                       /* Emit more compliant, but verbose and less performant JavaScript for iteration. */\n    // "sourceRoot": "",                                 /* Specify the root path for debuggers to find the reference source code. */\n    // "mapRoot": "",                                    /* Specify the location where debugger should locate map files instead of generated locations. */\n    // "inlineSourceMap": true,                          /* Include sourcemap files inside the emitted JavaScript. */\n    // "inlineSources": true,                            /* Include source code in the sourcemaps inside the emitted JavaScript. */\n    // "emitBOM": true,                                  /* Emit a UTF-8 Byte Order Mark (BOM) in the beginning of output files. */\n    // "newLine": "crlf",                                /* Set the newline character for emitting files. */\n    // "stripInternal": true,                            /* Disable emitting declarations that have `@internal` in their JSDoc comments. */\n    // "noEmitHelpers": true,                            /* Disable generating custom helper functions like `__extends` in compiled output. */\n    // "noEmitOnError": true,                            /* Disable emitting files if any type checking errors are reported. */\n    // "preserveConstEnums": true,                       /* Disable erasing `const enum` declarations in generated code. */\n    // "declarationDir": "./",                           /* Specify the output directory for generated declaration files. */\n    // "preserveValueImports": true,                     /* Preserve unused imported values in the JavaScript output that would otherwise be removed. */\n\n    /* Interop Constraints */\n    // "isolatedModules": true,                          /* Ensure that each file can be safely transpiled without relying on other imports. */\n    // "allowSyntheticDefaultImports": true,             /* Allow \'import x from y\' when a module doesn\'t have a default export. */\n    "esModuleInterop": true,                             /* Emit additional JavaScript to ease support for importing CommonJS modules. This enables `allowSyntheticDefaultImports` for type compatibility. */\n    // "preserveSymlinks": true,                         /* Disable resolving symlinks to their realpath. This correlates to the same flag in node. */\n    "forceConsistentCasingInFileNames": true,            /* Ensure that casing is correct in imports. */\n\n    /* Type Checking */\n    "strict": true,                                      /* Enable all strict type-checking options. */\n    // "noImplicitAny": true,                            /* Enable error reporting for expressions and declarations with an implied `any` type.. */\n    // "strictNullChecks": true,                         /* When type checking, take into account `null` and `undefined`. */\n    // "strictFunctionTypes": true,                      /* When assigning functions, check to ensure parameters and the return values are subtype-compatible. */\n    // "strictBindCallApply": true,                      /* Check that the arguments for `bind`, `call`, and `apply` methods match the original function. */\n    // "strictPropertyInitialization": true,             /* Check for class properties that are declared but not set in the constructor. */\n    // "noImplicitThis": true,                           /* Enable error reporting when `this` is given the type `any`. */\n    // "useUnknownInCatchVariables": true,               /* Type catch clause variables as \'unknown\' instead of \'any\'. */\n    // "alwaysStrict": true,                             /* Ensure \'use strict\' is always emitted. */\n    // "noUnusedLocals": true,                           /* Enable error reporting when a local variables aren\'t read. */\n    // "noUnusedParameters": true,                       /* Raise an error when a function parameter isn\'t read */\n    // "exactOptionalPropertyTypes": true,               /* Interpret optional property types as written, rather than adding \'undefined\'. */\n    // "noImplicitReturns": true,                        /* Enable error reporting for codepaths that do not explicitly return in a function. */\n    // "noFallthroughCasesInSwitch": true,               /* Enable error reporting for fallthrough cases in switch statements. */\n    // "noUncheckedIndexedAccess": true,                 /* Include \'undefined\' in index signature results */\n    // "noImplicitOverride": true,                       /* Ensure overriding members in derived classes are marked with an override modifier. */\n    // "noPropertyAccessFromIndexSignature": true,       /* Enforces using indexed accessors for keys declared using an indexed type */\n    // "allowUnusedLabels": true,                        /* Disable error reporting for unused labels. */\n    // "allowUnreachableCode": true,                     /* Disable error reporting for unreachable code. */\n\n    /* Completeness */\n    // "skipDefaultLibCheck": true,                      /* Skip type checking .d.ts files that are included with TypeScript. */\n    "skipLibCheck": true                                 /* Skip type checking all .d.ts files. */\n  }\n}\n')),(0,i.kt)("h3",{id:"bare-basic-configurations"},"Bare basic configurations"),(0,i.kt)("p",null,"As you can see, there are a whole lot of options, which is quite overwhelming. Don't worry, we'll be walking you through all of the important ones, so for now let's delete all of the contents of this ",(0,i.kt)("strong",{parentName:"p"},"tsconfig.json")," and start from scratch."),(0,i.kt)("h4",{id:"excluding-files-and-folders"},"Excluding files and folders"),(0,i.kt)("p",null,"It is possible to tell TypeScript which files to compile, and which ones to ignore. The ",(0,i.kt)("strong",{parentName:"p"},"exclude")," option in ",(0,i.kt)("strong",{parentName:"p"},"tsconfig.json")," holds an array of file/folder names/paths that should ",(0,i.kt)("strong",{parentName:"p"},"not")," be watched."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "compilerOptions": {},\n    "exclude": ["node_modules"]\n}\n')),(0,i.kt)("p",null,"In our case, we don't want to compile any TypeScript code that could possibly be living in the ",(0,i.kt)("strong",{parentName:"p"},"node_modules")," folder that will appear when we start installing dependencies, so we've added it to the array."),(0,i.kt)("h4",{id:"telling-typescript-what-to-compile"},"Telling TypeScript which files to compile"),(0,i.kt)("p",null,"Along with the ",(0,i.kt)("strong",{parentName:"p"},"exclude")," property is the ",(0,i.kt)("strong",{parentName:"p"},"include")," property, which holds an array of files/paths to check when compiling. Anything not included within the array will be ignored."),(0,i.kt)("p",null,"In the next project, we are going to follow a very common pattern with TypeScript projects by keeping all of our TS files in a folder named ",(0,i.kt)("strong",{parentName:"p"},"src"),". So, let's create a ",(0,i.kt)("strong",{parentName:"p"},"src")," folder within ",(0,i.kt)("strong",{parentName:"p"},"my-first-typescript-project"),", then add its path to the ",(0,i.kt)("strong",{parentName:"p"},"include")," property's array."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "compilerOptions": {},\n    "exclude": ["node_modules"],\n    "include": ["src/"]\n}\n')),(0,i.kt)("h4",{id:"specify-where-to-put-compiled-files"},"Specify where to put compiled files"),(0,i.kt)("p",null,"It's common practice in TypeScript projects to keep ",(0,i.kt)("strong",{parentName:"p"},".ts")," files separate from their respective compiled ",(0,i.kt)("strong",{parentName:"p"},".js")," files. Usually, the compiled files are placed in a folder named ",(0,i.kt)("strong",{parentName:"p"},"dist")," or ",(0,i.kt)("strong",{parentName:"p"},"build"),". Let's use ",(0,i.kt)("strong",{parentName:"p"},"dist")," for our project."),(0,i.kt)("p",null,"Within ",(0,i.kt)("strong",{parentName:"p"},"compilerOptions"),", the ",(0,i.kt)("strong",{parentName:"p"},"outDir")," property tells TypeScript just that - where to place all compiled files."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "compilerOptions": {\n        "outDir": "dist/"\n    },\n    "exclude": ["node_modules"],\n    "include": ["src/"]\n}\n')),(0,i.kt)("p",null,"This time, you don't have to manually create a folder named ",(0,i.kt)("strong",{parentName:"p"},"dist"),". During compile time, TypeScript will detect whether or not the folder exists and automatically create it if it doesn't."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"We also recommend learning about ",(0,i.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/tsconfig/#rootDir",target:"_blank",rel:"noopener"},(0,i.kt)("strong",{parentName:"a"},"rootDir")),".")),(0,i.kt)("h3",{id:"important-basic-configurations"},"Important basic configurations"),(0,i.kt)("p",null,"Other than telling TypeScript ",(0,i.kt)("strong",{parentName:"p"},"what")," files it should (and should not) compile, we also need to tell it ",(0,i.kt)("strong",{parentName:"p"},"how")," they should be compiled."),(0,i.kt)("h4",{id:"setting-the-target"},"Setting the target"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"target")," within ",(0,i.kt)("strong",{parentName:"p"},"compilerOptions")," tells TypeScript which JavaScript version you'd like to compile your code into. This allows for the ability to, for example, use ES7 features during development time, but support environments that only work with the ES3 version of JavaScript. We'll use ",(0,i.kt)("strong",{parentName:"p"},"esnext"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "compilerOptions": {\n        "target": "esnext",\n        "outDir": "dist/"\n    },\n    "exclude": ["node_modules"],\n    "include": ["src/"]\n}\n')),(0,i.kt)("h4",{id:"setting-libs"},"Setting libs"),(0,i.kt)("p",null,"By default TypeScript will allow us to use things like ",(0,i.kt)("inlineCode",{parentName:"p"},"document.querySelector()")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"window.reload()")," even though we're writing Node.js code where those global objects don't exist. This is because TypeScript automatically has these libraries enabled. In order to prevent this, we'll get more specific about the ",(0,i.kt)("strong",{parentName:"p"},"lib"),"s we'd like to use."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "compilerOptions": {\n        "target": "esnext",\n        "lib": ["ES2015", "ES2016", "ES2018", "ES2019.Object", "ES2018.AsyncIterable", "ES2020.String", "ES2019.Array"],\n        "outDir": "dist/"\n    },\n    "exclude": ["node_modules"],\n    "include": ["src/"]\n}\n')),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Learn more about the ",(0,i.kt)("strong",{parentName:"p"},"lib")," configuration option ",(0,i.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/tsconfig#lib",target:"_blank",rel:"noopener"},"in the TypeScript documentation"),".")),(0,i.kt)("h4",{id:"removing-comments"},"Removing comments"),(0,i.kt)("p",null,"This one is pretty straightforward. ",(0,i.kt)("strong",{parentName:"p"},"removeComments")," allows you to keep the comments which are useful in the code during development out of your compiled files."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "compilerOptions": {\n        "target": "esnext",\n        "lib": ["ES2015", "ES2016", "ES2018", "ES2019.Object", "ES2018.AsyncIterable", "ES2020.String", "ES2019.Array"],\n        "outDir": "dist/",\n        "removeComments": true\n    },\n    "exclude": ["node_modules"],\n    "include": ["src/"]\n}\n')),(0,i.kt)("h4",{id:"dont-compile-if-errors"},"Refusing to compile if there are any errors"),(0,i.kt)("p",null,"In most statically typed programming languages, the compiler will refuse to produce an output until all errors have been fixed; however, TypeScript by default will still compile even if there are errors. To enable the more strict functionality that other languages support, set ",(0,i.kt)("strong",{parentName:"p"},"noEmitOnError")," to ",(0,i.kt)("strong",{parentName:"p"},"true"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "compilerOptions": {\n        "target": "esnext",\n        "lib": ["ES2015", "ES2016", "ES2018", "ES2019.Object", "ES2018.AsyncIterable", "ES2020.String", "ES2019.Array"],\n        "outDir": "dist/",\n        "removeComments": true,\n        "noEmitOnError": true\n    },\n    "exclude": ["node_modules"],\n    "include": ["src/"]\n}\n')),(0,i.kt)("h4",{id:"strict-type-checking"},"Adding strict type checking"),(0,i.kt)("p",null,"TypeScript has ",(0,i.kt)("a",{parentName:"p",href:"https://learntypescript.dev/11/l6-strictness",target:"_blank",rel:"noopener"},"multiple options")," for strict type checking that can be configured. To enable all of them, set ",(0,i.kt)("strong",{parentName:"p"},"strict")," to ",(0,i.kt)("strong",{parentName:"p"},"true")," (this is recommended)."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "compilerOptions": {\n        "target": "esnext",\n        "lib": ["ES2015", "ES2016", "ES2018", "ES2019.Object", "ES2018.AsyncIterable", "ES2020.String", "ES2019.Array"],\n        "outDir": "dist/",\n        "removeComments": true,\n        "noEmitOnError": true,\n        "strict": true\n    },\n    "exclude": ["node_modules"],\n    "include": ["src/"]\n}\n')),(0,i.kt)("h4",{id:"module-resolution"},"Setting module resolution & type"),(0,i.kt)("p",null,"By default, TypeScript doesn't know how to handle or recognize modules imported into our projects. We'll tell the compiler it's a Node.js project with the ",(0,i.kt)("strong",{parentName:"p"},"moduleResolution")," option set to ",(0,i.kt)("strong",{parentName:"p"},"node"),", and that we are using CommonJS for the module type."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "compilerOptions": {\n        "target": "esnext",\n        "lib": ["ES2015", "ES2016", "ES2018", "ES2019.Object", "ES2018.AsyncIterable", "ES2020.String", "ES2019.Array"],\n        "outDir": "dist/",\n        "removeComments": true,\n        "noEmitOnError": true,\n        "strict": true,\n        "moduleResolution": "node",\n        "skipLibCheck": true, /* this will prevent TS errors from happening due to library errors */\n        "module": "commonjs",\n    },\n    "exclude": ["node_modules"],\n    "include": ["src/"]\n}\n')),(0,i.kt)("h2",{id:"watch-mode"},"Watch mode"),(0,i.kt)("p",null,"Now that you've finished configuring the ",(0,i.kt)("strong",{parentName:"p"},"tsconfig.json")," file, go ahead and create an ",(0,i.kt)("strong",{parentName:"p"},"index.ts")," file in the ",(0,i.kt)("strong",{parentName:"p"},"src")," folder. Because we've configured this project with TypeScript, we can just run this command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"## -w is the shortened version of the --watch flag\ntsc -w\n")),(0,i.kt)("p",null,"And our files in ",(0,i.kt)("strong",{parentName:"p"},"src")," will automatically compile into a folder named ",(0,i.kt)("strong",{parentName:"p"},"dist"),", and one that change will be recompiled."),(0,i.kt)("h2",{id:"next"},"Next up"),(0,i.kt)("p",null,"Now that we're all set up, we can move forward and start building our mini-project. But first, ",(0,i.kt)("a",{parentName:"p",href:"/academy/switching-to-typescript/interfaces",target:null,rel:null},"let's learn")," about the ",(0,i.kt)("inlineCode",{parentName:"p"},"interface")," keyword!"))}m.isMDXComponent=!0}}]);