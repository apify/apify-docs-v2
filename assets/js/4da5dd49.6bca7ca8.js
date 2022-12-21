"use strict";(self.webpackChunkapify_docs_v2=self.webpackChunkapify_docs_v2||[]).push([[120],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,f=u["".concat(p,".").concat(m)]||u[m]||d[m]||i;return n?r.createElement(f,o(o({ref:t},l),{},{components:n})):r.createElement(f,o({ref:t},l))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[u]="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},59596:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>m,frontMatter:()=>s,metadata:()=>c,toc:()=>u});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=["components"],s={title:"Secret input",description:"Learn about making some actor input fields secret and encrypted. Ideal for passing passwords, API tokens or login cookies to actors.",slug:"/actors/development/secret-input"},p="[](#secret-input)Secret input",c={unversionedId:"actors/development/secret_input",id:"actors/development/secret_input",title:"Secret input",description:"Learn about making some actor input fields secret and encrypted. Ideal for passing passwords, API tokens or login cookies to actors.",source:"@site/sources/platform/actors/development/secret_input.md",sourceDirName:"actors/development",slug:"/actors/development/secret-input",permalink:"/platform/actors/development/secret-input",draft:!1,tags:[],version:"current",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1671632368,formattedLastUpdatedAt:"Dec 21, 2022",frontMatter:{title:"Secret input",description:"Learn about making some actor input fields secret and encrypted. Ideal for passing passwords, API tokens or login cookies to actors.",slug:"/actors/development/secret-input"},sidebar:"docs",previous:{title:"Output schema",permalink:"/platform/actors/development/output-schema"},next:{title:"Source code",permalink:"/platform/actors/development/source-code"}},l={},u=[{value:"Setting an input field as secret",id:"setting-an-input-field-as-secret",level:2},{value:"Reading secret input fields",id:"reading-secret-input-fields",level:2},{value:"Encryption mechanism",id:"encryption-mechanism",level:2},{value:"Example actor",id:"example-actor",level:2}],d={toc:u};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"secret-input"},(0,i.kt)("a",{parentName:"h1",href:"#secret-input",target:null,rel:null}),"Secret input"),(0,i.kt)("p",null,"The secret input feature allows you to mark some actor input fields as secret, causing them to be encrypted when saving an input for an actor. The input can then be decrypted only inside the actor."),(0,i.kt)("h2",{id:"setting-an-input-field-as-secret"},"Setting an input field as secret"),(0,i.kt)("p",null,"To make an input field secret, just add a ",(0,i.kt)("inlineCode",{parentName:"p"},'"isSecret": true')," setting to the input field in the actor's ",(0,i.kt)("a",{parentName:"p",href:"/platform/actors/development/input-schema",target:null,rel:null},"input schema"),", like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    // ...\n    "properties": {\n        // ...\n        "password": {\n            "title": "Password",\n            "type": "string",\n            "description": "A secret, encrypted input field",\n            "editor": "textfield",\n            "isSecret": true\n        },\n        // ...\n    },\n    // ...\n}\n')),(0,i.kt)("p",null,"The editor for this input field will then turn into a secret input, and when you edit the field value, it will be stored encrypted."),(0,i.kt)("img",{src:"{{@asset actors/development/images/secret-input-editor.webp}}",alt:"Secret input editor",style:{width:"100%",maxWidth:"822px"}}),(0,i.kt)("p",null,"This is only available for ",(0,i.kt)("inlineCode",{parentName:"p"},"string")," inputs, and the editor type is limited to ",(0,i.kt)("inlineCode",{parentName:"p"},"textfield")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"textarea"),"."),(0,i.kt)("h2",{id:"reading-secret-input-fields"},"Reading secret input fields"),(0,i.kt)("p",null,"When you read the actor input through ",(0,i.kt)("inlineCode",{parentName:"p"},"Actor.getInput()"),", the encrypted fields are automatically decrypted, without any additional code needed (starting with the ",(0,i.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/apify",target:"_blank",rel:"noopener"},(0,i.kt)("inlineCode",{parentName:"a"},"apify")," package")," version 3.1.0)."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"> await Actor.getInput();\n{\n    username: 'username',\n    password: 'password'\n}\n")),(0,i.kt)("p",null,"If you read the ",(0,i.kt)("inlineCode",{parentName:"p"},"INPUT")," key from the actor run's default key-value store directly, you will still get the original, encrypted input value."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"> await Actor.getValue('INPUT');\n{\n    username: 'username',\n    password: 'ENCRYPTED_VALUE:Hw/uqRMRNHmxXYYDJCyaQX6xcwUnVYQnH4fWIlKZL2Vhtq1rZmtoGXQSnhIXmF58+DjKlMZpTlK2zN3YUXk1ylzU6LfXyysOG/PISAfwm27FUgy3IfdgMyQggQ4MydLzdlzefX0mPRyixBviRcFhRTC+K7nK9lkATt3wJpj91YAZm104ZYkcd5KmsU2JX39vxN0A0lX53NjIenzs3wYPaPYLdjKIe+nqG9fHlL7kALyi7Htpy91ZgnQJ1s9saJRkKfWXvmLYIo5db69zU9dGCeJzUc0ca154O+KYYP7QTebJxqZNQsC8EH6sVMQU3W0qYKjuN8fUm1fRzyw/kKFacQ==:VfQd2ZbUt3S0RZ2ciywEWYVBbTTZOTiy'\n}\n")),(0,i.kt)("h2",{id:"encryption-mechanism"},"Encryption mechanism"),(0,i.kt)("p",null,"The encryption mechanism used for encrypting the secret input fields is the same dual encryption as in ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Pretty_Good_Privacy#/media/File:PGP_diagram.svg",target:"_blank",rel:"noopener"},"PGP"),"."),(0,i.kt)("p",null,"The secret input field is encrypted using a random key, using the ",(0,i.kt)("inlineCode",{parentName:"p"},"aes-256-gcm")," cipher, and then the key is encrypted using a 2048-bit RSA key.\nThe RSA key is unique for every user and actor combination, so no actor can decrypt input meant for other actor run of the same user, and no user can decrypt input of actor runs of a different user, but same actor."),(0,i.kt)("p",null,"The decryption keys are passed to the actor runs as environment variables, so the input decryption happens only inside of the actor run."),(0,i.kt)("h2",{id:"example-actor"},"Example actor"),(0,i.kt)("p",null,"If you want to test the secret input live, check out the ",(0,i.kt)("a",{parentName:"p",href:"https://console.apify.com/actors/O3S2UlSKzkcnFHRRA",target:"_blank",rel:"noopener"},"Example Secret Input")," actor in Apify Console.\nIf you want to dig in deeper, you can check out its ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apify/actor-example-secret-input",target:"_blank",rel:"noopener"},"source code")," on GitHub."))}m.isMDXComponent=!0}}]);