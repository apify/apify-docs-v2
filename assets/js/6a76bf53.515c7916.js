"use strict";(self.webpackChunkapify_docs_v2=self.webpackChunkapify_docs_v2||[]).push([[5205],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>u});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=a.createContext({}),A=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},c=function(t){var e=A(t.components);return a.createElement(s.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,s=t.parentName,c=i(t,["components","mdxType","originalType","parentName"]),d=A(n),u=r,g=d["".concat(s,".").concat(u)]||d[u]||p[u]||o;return n?a.createElement(g,l(l({ref:e},c),{},{components:n})):a.createElement(g,l({ref:e},c))}));function u(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=t,i.mdxType="string"==typeof t?t:r,l[1]=i;for(var A=2;A<o;A++)l[A]=n[A];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},71847:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>A,toc:()=>p});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),l=["components"],i={title:"Creating actors",description:"Build and run your very first actor right on the Apify platform from a template. This lesson provides a hands-on experience with building and running an actor.",sidebar_position:2,slug:"/getting-started/creating-actors"},s="Creating actors",A={unversionedId:"platform/getting_started/creating_actors",id:"platform/getting_started/creating_actors",title:"Creating actors",description:"Build and run your very first actor right on the Apify platform from a template. This lesson provides a hands-on experience with building and running an actor.",source:"@site/sources/academy/platform/getting_started/creating_actors.md",sourceDirName:"platform/getting_started",slug:"/getting-started/creating-actors",permalink:"/academy/getting-started/creating-actors",draft:!1,editUrl:"https://github.com/apify/apify-docs-v2/edit/master/sources/academy/platform/getting_started/creating_actors.md",tags:[],version:"current",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1677513083,formattedLastUpdatedAt:"Feb 27, 2023",sidebarPosition:2,frontMatter:{title:"Creating actors",description:"Build and run your very first actor right on the Apify platform from a template. This lesson provides a hands-on experience with building and running an actor.",sidebar_position:2,slug:"/getting-started/creating-actors"},sidebar:"academy",previous:{title:"Actors",permalink:"/academy/getting-started/actors"},next:{title:"Inputs & outputs",permalink:"/academy/getting-started/inputs-outputs"}},c={},p=[{value:"Choose your template",id:"choose-your-template",level:2},{value:"Hello World!",id:"hello-world",level:2},{value:"Build an actor",id:"build-an-actor",level:2},{value:"Run an actor",id:"run-an-actor",level:2},{value:"Next up",id:"next",level:2}],d={toc:p};function u(t){var e=t.components,i=(0,r.Z)(t,l);return(0,o.kt)("wrapper",(0,a.Z)({},d,i,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"creating-actors"},"Creating actors"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Build and run your very first actor right on the Apify platform from a template. This lesson provides a hands-on experience with building and running an actor.")),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Creating an actor is so easy to do, we'll show you right in this lesson how to get one up and running in 5 minutes or less. There is no need to install any special software, as everything can be done right on the Apify platform with an Apify account!"),(0,o.kt)("h2",{id:"choose-your-template"},"Choose your template"),(0,o.kt)("p",null,"On the ",(0,o.kt)("a",{parentName:"p",href:"https://console.apify.com?asrc=developers_portal",target:"_blank",rel:"noopener"},"Apify Console"),", click on the ",(0,o.kt)("strong",{parentName:"p"},"Actors")," tab we visited in the previous lesson. In the top right-hand corner, you should see a ",(0,o.kt)("strong",{parentName:"p"},"Create new")," button."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Create new button",src:n(7091).Z,width:"800",height:"158"})),(0,o.kt)("p",null,"Click it, then choose the ",(0,o.kt)("strong",{parentName:"p"},"Basic Node.js actor")," template and click on ",(0,o.kt)("strong",{parentName:"p"},"Use template"),"."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Also feel free to give the actor a custom name instead of the default name. For this lesson though, we'll keep it as ",(0,o.kt)("strong",{parentName:"p"},"my-actor"),".")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Choosing a template",src:n(55322).Z,width:"962",height:"786"})),(0,o.kt)("h2",{id:"hello-world"},"Hello World!"),(0,o.kt)("p",null,"After clicking on ",(0,o.kt)("strong",{parentName:"p"},"Use template"),", you should be brought to a page that looks like this:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Multifile editor",src:n(63075).Z,width:"1638",height:"1337"})),(0,o.kt)("p",null,"The area where you can see some code and files is called the ",(0,o.kt)("strong",{parentName:"p"},"multifile editor"),", and it is your gateway to writing actor directly on the Apify platform."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"It is also possible to deploy code to the platform from a Github repo or from your local environment, which we will be getting into in some of this course's future lessons")),(0,o.kt)("p",null,"Go ahead and delete the three lines of code in the ",(0,o.kt)("strong",{parentName:"p"},"main.js"),"  file that look like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const input = await Actor.getInput();\nconsole.log('Input:');\nconsole.dir(input);\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Feel free to also remove all of the comments")),(0,o.kt)("p",null,"And replace them with this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"console.log('Hello World!')\n")),(0,o.kt)("p",null,"The final code should look like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { Actor } from 'apify';\n\nawait Actor.init();\n\nconsole.log('Hello World!')\n\nawait Actor.exit();\n")),(0,o.kt)("p",null,"To save your changes, click on the blue ",(0,o.kt)("strong",{parentName:"p"},"Save")," button."),(0,o.kt)("h2",{id:"build-an-actor"},"Build an actor"),(0,o.kt)("p",null,"In order to run the actor, you've gotta build it. Luckily, that's only a button press away."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Build the actor",src:n(52358).Z,width:"1080",height:"234"})),(0,o.kt)("p",null,"After you've clicked the ",(0,o.kt)("strong",{parentName:"p"},"Build")," button, it'll take around 5-10 seconds to complete the build. You'll know it's finished when you see a green ",(0,o.kt)("strong",{parentName:"p"},"Start")," button."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Start button",src:n(7175).Z,width:"280",height:"108"})),(0,o.kt)("p",null,"This beautiful button's presence means we can now run the actor!"),(0,o.kt)("h2",{id:"run-an-actor"},"Run an actor"),(0,o.kt)("p",null,"Click ",(0,o.kt)("strong",{parentName:"p"},"Start")," and wait a few seconds... Do you see something that looks like this?:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Actor run logs",src:n(99708).Z,width:"2308",height:"976"})),(0,o.kt)("p",null,"If so, it worked! \ud83e\udd73"),(0,o.kt)("p",null,"Later on, we'll be working on some more complex actors - this was just a fun and quick exercise to get your toes wet."),(0,o.kt)("h2",{id:"next"},"Next up"),(0,o.kt)("p",null,"So we've created an actor, but how can we give it some input, then make it do stuff based on that input? This is exactly what we'll be discussing in the ",(0,o.kt)("a",{parentName:"p",href:"/academy/getting-started/inputs-outputs",target:null,rel:null},"next lesson"),"'s activity."))}u.isMDXComponent=!0},52358:(t,e,n)=>{n.d(e,{Z:()=>a});const a="data:image/webp;base64,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"},55322:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/choose-template-20a610e21269b4896d2d1c5ae12008e4.png"},7091:(t,e,n)=>{n.d(e,{Z:()=>a});const a="data:image/webp;base64,UklGRo4OAABXRUJQVlA4IIIOAABQYgCdASogA54APqlUpE2mJKejIXbaQPAVCWVu4W/Q95BqwBbtmQAeCB6AGY9efv7X23/6Dw98X/r73A9WTKf1Tak3yn7Q/wv7R7b/33v5+Lf9r6gvsb/Lb22AD6u/9D0mPaPOD67ewB+sPp33u1An+i/330MP+//T+m/6g9hn9ehdhynMV8Vi5Rg/zWL0k9Zfj0ILFd3d3d3d3d3d3d3d3dz7tju5xNAYaDfvn28m1nYFtTTEQ8MQax8igp5Wg9HCfknd3d3d3d3d3d3dzvN2EQfrZHc7V1KUEP81i9JPWAaiJK7zHV/jopMH154gAYgf/5rF6SexJichg/miglir/6gBg42/5dgaZiPaFvLLSCoCiwkV5B6zDnCVzDT/emUsxgkNGO9vF+ubkVWCMXjgcwEhK2+Ei8PqFKj8cPMZ78DEuROhYWEYA9Zj0idjsUCXLMv0GaNyAvD+FoAirTZ/Bc1V16l6i5rj0SiL08QNmwND9IP8t0HHKsmERJneilsfkcjB9KgY+5zmKlroRpOKPUOlMccaW6sf9Sa63IMpbTxjDHByA3CRQgif6u9Hyca/nowIIzsP7uakJY+XgLUVVIVvMRv8gNWN9f8yWJ9M0rFx8HPbAi0inHpymp9yrwcVCC7DyGGQws1D2PGXL8nDhts4iVBfPTgFHgung7XC3jy9XUrDgzu7s0XTT629HBQpU0+ebl5iuja4zWtGaUDF+Fq1MM9Cnny9jEOYg4Hyl+CL4Ecmr5xg1mNfQtYB22yZubrhw7paCoNLl5HStcxxt3jBSjY9zWbU2c4hwrD5BLnm+lTfv1OXC8zSUF91HkwFN7wPrxVLk9jaq+vFG64qU3wn/dqoVyBwmuUqvZDo/RXMHwdDHQ+p+ozcz6g27al5mauJPSXPVST8lSMuKFPiWkvSWHPt5NrOwLammIh4YlI8rzExXGbPFnResJYsUoH8YxCT1x+R/tlPQjAtNUxEPDEpIxwXDQb98+3k2s6XUnTutFnResJYsUoGnCfknd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3dzAAA/v5OdX5IAAAABHVmUXwXbSdydaE4y0SO32e7gjP7pAXRvf/8TH+0bj0v0P9uf7GWkzXyBZ16GYtKmvj4QJcaneFUruUGFXnQP/K83s33fum2pu0L4ggWveLbxbeLbxbeLb0JfQ0bNsw9lOAQvjwr+Jruos0Jz3ABXJqeV8eJ7kNynQH+3fGj8wN//Zl9LC1+aAf2epYVyComXAAAb4b9KsJY5BvZd3FpUWuDkHzHRBY8n7jv9ueCHyAWlvCWMNsLUGxf3uFG+IfVhzeJB02R3ik4xAVzls2KwiV4/8W3CjuzMKE8VkeawqDA/JnP5TCqFXJkJYxVkeyajxxJwNfgJm49Gkv/6x5iuSlREY2srLvBF7OORB5ad+Za5ABxkqyZtCkUNfHffKw7fH2eDXIxoEDOLOUs0oR4quI4KB15nE+qvd2yJTKoKOoIIFTv3FCtpEpdCZbeC4JtLGhhjxfnLRq5qjjjsTSpXcJbq5vOesxxaKdSwBG3t47bMxapSek7kRA+AUtWNtD0hetzkgt9/quQqNI6mlRj8e/7PHd0mVOk3jL/mEUyDvfNk4cJx7v0ooCpJpArkinkO5OWYlNTRRVKma4rrKbGCUjMU+Iqe764gfC2PoDvTNu4BKA8kcdlPt5Gns9xQZYDrGsfiPS3fHea22aN9VtR256EB39OZmdrAkI4HRAzO0ZlHtx/TlVoDoXaoNUr6CmteCYSgT2UskZoYoXOff07fD+4FgV47+lbzDJsIkXv0mGXbAcCXinD+XNtnez4aeqm91ty7WYENBLAEtBMKXLac4939C3Lvqwebrdz7WvU1ewItpfMuOAQ0HOVkbNu09l3QPyKNlXTWFn8sySpJQKnE3dgcV+hS5H1JAi/bkCGSUxk38XDK4Kl+fwvCxZ66936GypP2ZhQ6QGbmBmbRTQdRHrF4Zqbre/VfQhniP8JC72W5dEutWznje+f0QVzjFMuW4OYhEPeaP+eY0XCf5bzT/cc8k/SKkqXzPfnLC0kraNsftqwwbG2g0mklHJcY8lixFrRfqhPhPfp3nmQishLUJnON2Y7sb7xThcBHLNX0+T7/xCaPDbDXZHkLWLgkRbcfx80UGRnW4Cs+5oL01LlzQl/7+2++tGsvDNhPkNGqEG+DssTvqbGhNcgD5RA9aPv+byvz1W1X4zGLOvkcrXXKrlvX+nZkDx/isQ69RG2mI3AoEjinWA8OWfs7wOC614Eyx91NYh6FFIB7zYHBRX0C6yAYb33cLFlmsNFHn1DyfB8AU9buiySBBC7Gy3cSO4XZVM5cfr3vESYxxP6FfmGphcIixwB6yoU/iOS5lNrXQlMWsQH5fBvn9EcRhUYhESTbhJIYXBXc5LT4sp7yzsRFJ7iiTDq0ALxqqJf/OA3+99vHy7JEtRwEY50hBzUuE+tTYjIRVyvFeHsEqAY0qco8LR81i/EavG/6brxhcrGjBU41i70clRpK7qZ2W7m9dxACOST4GOEbnn0zUk+OI69pMVXcyahVgTpZ21DT+4iL+lkha3hCjTv7DAPc8EP73maUze0uLijd6b5QCLN5eUqtYq72dkfMxAgdqoBEoSB6Q+fCRUcF3lY8IJiY90rs6bxlYE90Fgw00zLLKwXTlBFyIA37kt1j3wWeZk5wxx4ur2H1OHh0aocmMbypfzAMIEO4k5ApN1X9AXQ6Nt7XHZ1uO51+koIiOtw4G3Iuk0yeOhiMAw98DJ7LMwzLpd6RZ3wCjqjsr0H7zE9miIU2UXOpdaAuISRgUt2XSK/NJwwNkZ/IkEZYcZfrLGZC6vJYTbPhH6a3S65XTbKrFU/LCKqYUSTVQ7sMlexJIB0x4APCuhzCKS0JkHHLFR3xHAbOFsnUBU+yCgMhm14/+lhMIksiILP7A46JzlVu2nyIENTXcHz1cTvhY5diaqClD+SQOx/mUO5m+tu827yrik+l/nkMGf+FmCuyxEHFVlX2XKFk/niuewC5hhuRqpllP3VM0d/5lleQjsXDc4fc687tPk0bIQcSj91QeP8JgrFhCTebXvDA23BOoMx9vyZenBb5HD+soVtdKaP6X6PVvDdzVMuYrrDgepeS/988axmfnkEwrq0dY47QU/vAfKhAw8/Rrct3ykqk66AGy2pAnnSxDx6MIEYxZMns2LXLm8KUibR1sEzXRMUglvde0qLM4pa8xi4ci1CuDfbnQRSyD3XjreDqntlfruA+0qqVI1fJN1BxijVyLqF3Vg2CfPZo2MBTIqoAAtqq4XOyDiBQpacy4JtAkIKDId5tj7aRsm3wmE8YD77LrIWJOC9qwlcSiBdrBStgE8h94jWnhtG9KRyNnOg0koOLoGBzYOoKh+eXuwi54g8131qNRL6cJ37rSVPbfBBabeRPij9ro9cGGyvne0tsYTR8XMpmPtovL5akT8r+FJPb6Rj331/tpbnxB7rCI/3lNAbjX1GLVn3OLzWUg06sMQfEYvR00nx1oJ2Xsp9ywo+wGnkWGPp6iZjhK+rQv7X0+LQJGviJwcNxUYGixCftsuEjyQ+H/kBrokkulKv8/EaFG/jqmNTKj4XAgx45Ant22xeJ31sWHICYbwibl22kpJwri3hmy+CUWr6GthPNNwWf38TECdIs42Fs19deyizru7XhHRSfTNgBJFxYwT9qnKtxDVcSbJM5JqyQgFMbrxm1YvyU1balnMZifoWqrDHsrC8h+MFHNiuy1pArmJeU8hVSgaljpvIg/JrC/xPiXxn1jP/1j7VHniQaxslXph37yXkb4TF2pfyOPmSbNzY6rQTeJY1RGg9o8ImMlL8+43IM7guIe7f19LpGGXB98NwD+3A4PaPtA42FYiUTDDNicOz3foE3/4yMc97H9giL46nS+YI/SAGc0NmayAAdbN9iG9HppgnDy/gN1gFBrjn/y2gKFqMle/cpkHXAi5Ke2MUDkNKH9HszyaxbEzVt/y6Gu44/p4WQrH2jt7DPL0jyiDXtOXNDrJCJGGZZPLG7CxJ1gEqBYwHvm3mHTc+7QMpBEa03jI3g2QEjZysyHYayI91m1cSUHjkfR1d4n7BkecUCAxO5kFZfwEanpDgflHN0PWCd8KOnoCPK8975x8K9TZxZdpN9ZGaFoag15JwYTTvbzC4tdGBjWuI9APaK2kpYCZ2ZyviAASpPk/kI+8NjEbxTTD3cM1CAbXYDat26D3cMm3O8C+QzlaASfSFxrNmbxUQLqSBM7GI07DsDbyUUS64KIEzJ+9IM8sjBnrQeF7U0zroYHDGxhYwgSZ40v8anQN/pxxqDFpuT8nGG7cLaimHzZwmNAvE78P67KiGhD1mgfyxaV0RXCyQ4qzsi5xe3OdmTw6OrtBVM8hSCiYbo3Yn43nEt2xPja/F2XBQjJcHZ66Fygdx1Fui1hl3Tt37lOM3lpkt9jp02tRaSKJR3GRSGk0XIEfG1MoTNDDrHvo1BNpK3JjsjueezsLOse+vtmQgdQ0Z/atKBk/ZlO9C4IADBijMWlRFREguBw8U/VlMIgT3Oar+fF8G8QrXCfREOo0SHYsAV4EvNgS9ZbOtjQsYheUDv9HrDBnds0ZGuXIv1fD4POFmeHoxeidSnoHXmKfFw24BN9oL6u37DpxrZC7tcX/nessMmIPXuGQbuYFRo7UAZbpuPBEWjA8knRhwDHsChSg+MPWXxvydGD6XuMXx/3r+uuPI45j6ubhZyYsQmjkwErNIQmQ8BX6YcOLrpzPioymdqDH49L/+oovXX5A+GAJ+7DHcVUySXMKEJxS4W8DdoO2+RnkI0QJ2+VihhMWbd/UeNMNcod4aAk3DnGMruv2sE6NDIHM5lztXjEtVGb4ACLAGFDB385VeRCc/bPJyeQHrZV8WtFn/XH++inY2AAAAAAAAAAAAAAA="},99708:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/hello-world-run-457876bf1e724dbe9b2d60a547e2d725.webp"},63075:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/multifile-editor-0f61f86ac130adfdfe9e27cef0aa8d62.webp"},7175:(t,e,n)=>{n.d(e,{Z:()=>a});const a="data:image/png;base64,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"}}]);