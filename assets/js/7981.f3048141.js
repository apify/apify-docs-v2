"use strict";(self.webpackChunkapify_docs_v2=self.webpackChunkapify_docs_v2||[]).push([[7981],{47981:(e,t,n)=>{n.r(t),n.d(t,{default:()=>s});var a=n(66179),l=n(44996),r=n(72389),o=n(35742),i=(n(65102),n(52263));function c(e){var t=e.title,n=e.description,r=e.keywords,c=e.image,m=e.children,d=function(e){var t=(0,i.Z)().siteConfig,n=t.title,a=t.titleDelimiter;return null!=e&&e.trim().length?e.trim()+" "+a+" "+n:n}(t),s=(0,l.C)().withBaseUrl,u=c?s(c,{absolute:!0}):void 0;return a.createElement(o.Z,null,t&&a.createElement("title",null,d),t&&a.createElement("meta",{property:"og:title",content:d}),n&&a.createElement("meta",{name:"description",content:n}),n&&a.createElement("meta",{property:"og:description",content:n}),r&&a.createElement("meta",{name:"keywords",content:Array.isArray(r)?r.join(","):r}),u&&a.createElement("meta",{property:"og:image",content:u}),u&&a.createElement("meta",{name:"twitter:image",content:u}),m)}var m=n(39960),d=n(20009);function s(){var e=(0,l.Z)("/docs/api"),t=(0,l.Z)("/docs/1.3.1/api"),n=(0,l.Z)("/docs/2.3/api/"),o=(0,l.Z)("/docs/1.3/api/");if((0,r.Z)()){var i=window.location.pathname,s="",u=!1;if(i.startsWith(e)&&(s=n+i.substring(e.length+1),u=!0),i.match(/\/docs\/2\.\d+\.\d+\/api/)&&(s=n+i.substring(t.length+1),u=!0),i.match(/\/api\/[12]\.\d+\/\w+/)){var p=i.match(/\/api\/([12])\.\d+\/(.*)/);s=("1"===p[1]?o:n)+p[2],u=!0}if(i.match(/\/docs\/[01]\.\d+\.\d+\/api\/(.*)/))s=o+i.match(/\/docs\/[01]\.\d+\.\d+\/api\/(.*)/)[1],u=!0;u&&window.location.href!==s&&(window.location.href=s)}return a.createElement(a.Fragment,null,a.createElement(c,{title:"Page Not Found"}),a.createElement(d.Z,null,a.createElement("main",{className:"container margin-vert--xl"},a.createElement("div",{className:"row"},a.createElement("div",{className:"col col--6 col--offset-3"},a.createElement("h1",{className:"hero__title"},"Page Not Found"),a.createElement("p",null,"We could not find what you were looking for \ud83d\ude22"),a.createElement("p",null,"Recently we ",a.createElement("b",null,"released Apify SDK v3 "),"and we significantly upgraded the documentation."),a.createElement("p",null,"If you're looking for documentation of ",a.createElement("b",null,"Apify SDK v2"),",",a.createElement(m.Z,{to:"/docs/2.3/guides/apify-platform"}," you can find it here"),"."),a.createElement("p",null,"For ",a.createElement("b",null,"Apify SDK v3 docs"),", go to the ",a.createElement(m.Z,{to:"/"},"homepage"),"."))))))}}}]);