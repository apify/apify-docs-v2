"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[295,204,514],{3660:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});var a=n(7294).createContext({options:{banner:"",breadcrumbs:!0,gitRefName:"master",minimal:!1,pluginId:"default",scopes:[]},reflections:{}});t.ApiDataContext=a},6454:(e,t,n)=>{var a=["options","packages"];function r(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}n(60),n(8878);var o=n(7294),l=n(683),c=n(3660),i=function(e){return e&&e.__esModule?e:{default:e}},u=i(o),f=i(l);function s(e){return"object"==typeof e&&null!==e&&!Array.isArray(e)}function d(e,t,n){return Object.entries(e).forEach((function(a){var r=a[0],o=a[1];if("id"===r){var l="type"in e;(!l||l&&"reference"!==e.type)&&(t[Number(o)]=e,n&&(e.parentId=n.id))}else Array.isArray(o)?o.forEach((function(n){s(n)&&d(n,t,e)})):s(o)&&d(o,t,e)})),t}function m(e){var t={};return e.forEach((function(e){e.entryPoints.forEach((function(e){d(e.reflection,t)}))})),t}e.exports=function(e){var t=e.options,n=e.packages,l=r(e,a),i=o.useMemo((function(){return{options:t,reflections:m(n)}}),[t,n]);return u.default.createElement(c.ApiDataContext.Provider,{value:i},u.default.createElement("div",{className:"apiPage"},u.default.createElement(f.default,l)))}},4204:(e,t,n)=>{n.r(t),n.d(t,{default:()=>u});var a=n(7294),r=n(4996),o=n(2389),l=n(833),c=n(98),i=n(9960);function u(){var e=(0,r.Z)("/docs/api"),t=(0,r.Z)("/docs/1.3.1/api"),n=(0,r.Z)("/docs/2.3/api/"),u=(0,r.Z)("/docs/1.3/api/");if((0,o.Z)()){var f=window.location.pathname,s="",d=!1;if(f.startsWith(e)&&(s=n+f.substring(e.length+1),d=!0),f.match(/\/docs\/2\.\d+\.\d+\/api/)&&(s=n+f.substring(t.length+1),d=!0),f.match(/\/api\/[12]\.\d+\/\w+/)){var m=f.match(/\/api\/([12])\.\d+\/(.*)/);s=("1"===m[1]?u:n)+m[2],d=!0}if(f.match(/\/docs\/[01]\.\d+\.\d+\/api\/(.*)/))s=u+f.match(/\/docs\/[01]\.\d+\.\d+\/api\/(.*)/)[1],d=!0;d&&window.location.href!==s&&(window.location.href=s)}return a.createElement(a.Fragment,null,a.createElement(l.d,{title:"Page Not Found"}),a.createElement(c.Z,null,a.createElement("main",{className:"container margin-vert--xl"},a.createElement("div",{className:"row"},a.createElement("div",{className:"col col--6 col--offset-3"},a.createElement("h1",{className:"hero__title"},"Page Not Found"),a.createElement("p",null,"We could not find what you were looking for \ud83d\ude22"),a.createElement("p",null,"Recently we ",a.createElement("b",null,"released Apify SDK v3 "),"and we significantly upgraded the documentation."),a.createElement("p",null,"If you're looking for documentation of ",a.createElement("b",null,"Apify SDK v2"),",",a.createElement(i.default,{to:"/docs/2.3/guides/apify-platform"}," you can find it here"),"."),a.createElement("p",null,"For ",a.createElement("b",null,"Apify SDK v3 docs"),", go to the ",a.createElement(i.default,{to:"/"},"homepage"),"."))))))}},60:(e,t,n)=>{n.r(t)},8878:(e,t,n)=>{n.r(t)}}]);