"use strict";(self.webpackChunkapify_docs_v2=self.webpackChunkapify_docs_v2||[]).push([[2517],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(n),f=a,h=d["".concat(s,".").concat(f)]||d[f]||p[f]||l;return n?r.createElement(h,o(o({ref:t},c),{},{components:n})):r.createElement(h,o({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},37386:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>m,frontMatter:()=>u,metadata:()=>p,toc:()=>f});var r=n(87462),a=n(63366),l=(n(67294),n(3905)),o=n(74866),i=n(85162),s=["components"],u={title:"Filtering links",description:"When you extract links from a web page, you often end up with a lot of irrelevant URLs. Learn how to filter the links to only keep the ones you need.",sidebar_position:3,slug:"/web-scraping-for-beginners/crawling/filtering-links"},c="Filtering links",p={unversionedId:"webscraping/web_scraping_for_beginners/crawling/filtering_links",id:"webscraping/web_scraping_for_beginners/crawling/filtering_links",title:"Filtering links",description:"When you extract links from a web page, you often end up with a lot of irrelevant URLs. Learn how to filter the links to only keep the ones you need.",source:"@site/sources/academy/webscraping/web_scraping_for_beginners/crawling/filtering_links.md",sourceDirName:"webscraping/web_scraping_for_beginners/crawling",slug:"/web-scraping-for-beginners/crawling/filtering-links",permalink:"/academy/web-scraping-for-beginners/crawling/filtering-links",draft:!1,editUrl:"https://github.com/apify/apify-docs-v2/edit/master/sources/academy/webscraping/web_scraping_for_beginners/crawling/filtering_links.md",tags:[],version:"current",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1675941697,formattedLastUpdatedAt:"Feb 9, 2023",sidebarPosition:3,frontMatter:{title:"Filtering links",description:"When you extract links from a web page, you often end up with a lot of irrelevant URLs. Learn how to filter the links to only keep the ones you need.",sidebar_position:3,slug:"/web-scraping-for-beginners/crawling/filtering-links"},sidebar:"academy",previous:{title:"Finding links",permalink:"/academy/web-scraping-for-beginners/crawling/finding-links"},next:{title:"Relative URLs",permalink:"/academy/web-scraping-for-beginners/crawling/relative-urls"}},d={},f=[{value:"Filtering with unique CSS selectors",id:"css-filtering",level:2},{value:"Attribute selector",id:"attribute-selector",level:3},{value:"Descendant selector",id:"descendant-selector",level:3},{value:"Filtering with pattern-matching",id:"pattern-matching-filter",level:2},{value:"Next Up",id:"next",level:2}],h={toc:f};function m(e){var t=e.components,u=(0,a.Z)(e,s);return(0,l.kt)("wrapper",(0,r.Z)({},h,u,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"filtering-links"},"Filtering links"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"When you extract links from a web page, you often end up with a lot of irrelevant URLs. Learn how to filter the links to only keep the ones you need.")),(0,l.kt)("hr",null),(0,l.kt)("p",null,"Web pages are full of links, but frankly, most of them are useless to us. There are two approaches to filtering links: Targeting the links we're interested in by using unique CSS selectors, and extracting all links and then using pattern matching to find the sought after URLs. In real scraping scenarios, both of these two approaches are often combined for the most effective URL filtering."),(0,l.kt)("h2",{id:"css-filtering"},"Filtering with unique CSS selectors"),(0,l.kt)("p",null,"In the previous lesson, we simply grabbed all the links from the HTML document."),(0,l.kt)(o.Z,{groupId:"main",mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"DevTools",label:"DevTools",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"document.querySelectorAll('a');\n\n"))),(0,l.kt)(i.Z,{value:"Node.js with Cheerio",label:"Node.js with Cheerio",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"$('a');\n\n")))),(0,l.kt)("h3",{id:"attribute-selector"},"Attribute selector"),(0,l.kt)("p",null,"That's not the only way to do it, however. Since we're interested in the ",(0,l.kt)("inlineCode",{parentName:"p"},"href")," attributes, a first very reasonable filter is to exclusively target the ",(0,l.kt)("inlineCode",{parentName:"p"},"<a>")," tags that have the ",(0,l.kt)("inlineCode",{parentName:"p"},"href")," attribute (yes, anchor tags without the attribute can and do exist). You can do that by using the ",(0,l.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/Attribute_selectors",target:"_blank",rel:"noopener"},"CSS attribute selector"),"."),(0,l.kt)(o.Z,{groupId:"main",mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"DevTools",label:"DevTools",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"document.querySelectorAll('a[href]');\n\n"))),(0,l.kt)(i.Z,{value:"Node.js",label:"Node.js",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"$('a[href]');\n\n")))),(0,l.kt)("p",null,"Ensuring to always add the ",(0,l.kt)("inlineCode",{parentName:"p"},"[href]")," part of the selector will save you from nasty bug hunts on certain pages."),(0,l.kt)("p",null,"We only want the product links on this page, so we can limit the number of results by only targeting the links within the ",(0,l.kt)("inlineCode",{parentName:"p"},"main.fit")," container to filter out some unwanted links (such as in the navbar), then further select any a tags with a ",(0,l.kt)("inlineCode",{parentName:"p"},"href")," attribute containing ",(0,l.kt)("inlineCode",{parentName:"p"},"/product/"),"."),(0,l.kt)("h3",{id:"descendant-selector"},"Descendant selector"),(0,l.kt)(o.Z,{groupId:"main",mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"DevTools",label:"DevTools",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"document.querySelectorAll('main.fit a[href*=\"/product/\"]');\n\n"))),(0,l.kt)(i.Z,{value:"Node.js",label:"Node.js",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"$('main.fit a[href*=\"/product/\"]');\n\n")))),(0,l.kt)("p",null,"We already know both the ",(0,l.kt)("inlineCode",{parentName:"p"},"main.fit")," and ",(0,l.kt)("inlineCode",{parentName:"p"},'a[href*="/product/"]')," selectors and how they work on their own, but their combination is new. It's called a ",(0,l.kt)("a",{parentName:"p",href:"https://css-tricks.com/almanac/selectors/d/descendant/",target:"_blank",rel:"noopener"},"descendant selector"),", and it selects all ",(0,l.kt)("inlineCode",{parentName:"p"},'<a href=".../product/...">')," elements that are descendants of a ",(0,l.kt)("inlineCode",{parentName:"p"},'<main class="fit">')," element. A descendant is any element that's nested somewhere inside another element. It does not have to be a direct child of the specified parent element."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Nested HTML tags",src:n(99885).Z,width:"1270",height:"284"})),(0,l.kt)("p",null,"When we print all the URLs in the DevTools console, we can see that we've correctly filtered only the featured product links."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"for (const a of document.querySelectorAll('main.fit a[href*=\"/product/\"]')) {\n    console.log(a.href);\n}\n")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Product URLs printed to console",src:n(75524).Z,width:"1198",height:"1052"})),(0,l.kt)("p",null,"Notice that we might have some duplicate URLs. These duplicates can be easily filtered out. ",(0,l.kt)("em",{parentName:"p"},"We will be learning about data filtering/manipulation in future lessons.")),(0,l.kt)("h2",{id:"pattern-matching-filter"},"Filtering with pattern-matching"),(0,l.kt)("p",null,"Another common way to filter links (or any text, really) is by matching patterns with regular expressions."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("a",{parentName:"p",href:"https://javascript.info/regexp-introduction",target:"_blank",rel:"noopener"},"Learn more about regular expressions"))),(0,l.kt)("p",null,"We can inspect the product URLs, and we'll soon find that they all look like the following. That is, they're exactly the same except for the text after the final ",(0,l.kt)("inlineCode",{parentName:"p"},"/"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"https://demo-webstore.apify.org/product/crystal-chandelier-maria-theresa-for-12-light\nhttps://demo-webstore.apify.org/product/macbook-pro\nhttps://demo-webstore.apify.org/product/lightweight-jacket\n...\nhttps://demo-webstore.apify.org/product/{PRODUCT-NAME}\n")),(0,l.kt)("p",null,"Now, we'll create a regular expression that matches those links. There are many ways to do this. For simplicity, let's go with this one:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-RegExp"},"demo-webstore\\.apify\\.org\\/product\\/[a-z|0-9|-]*\n")),(0,l.kt)("p",null,"This regular expression matches all URLs that include the ",(0,l.kt)("inlineCode",{parentName:"p"},"demo-webstore.apify.org/product/")," substring immediately following with any number of letters or dashes ",(0,l.kt)("inlineCode",{parentName:"p"},"-"),"."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"A great way to learn more about regular expression syntax and to test your expressions are tools like ",(0,l.kt)("a",{parentName:"p",href:"https://regex101.com/",target:"_blank",rel:"noopener"},"regex101.com")," or ",(0,l.kt)("a",{parentName:"p",href:"https://regexr.com/",target:"_blank",rel:"noopener"},"regexr.com"),". It's okay if you don't get the hang of it right away!")),(0,l.kt)("p",null,"To test our regular expression in the DevTools console, we'll first create a ",(0,l.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp",target:"_blank",rel:"noopener"},(0,l.kt)("inlineCode",{parentName:"a"},"RegExp"))," object and then test the URLs with the ",(0,l.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test",target:"_blank",rel:"noopener"},(0,l.kt)("inlineCode",{parentName:"a"},"regExp.test(string)"))," function."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"// To demonstrate pattern matching, we use only the 'a'\n// selector to select all links on the page.\nfor (const a of document.querySelectorAll('a')) {\n    const regExp = /demo-webstore\\.apify\\.org\\/product\\/[a-z|0-9|-]*/;\n    const url = a.href;\n    if (regExp.test(url)) console.log(url);\n}\n")),(0,l.kt)("p",null,"If you run this code in DevTools, you'll see that it produces exactly the same URLs as the CSS filter did."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Yes, filtering with CSS selectors is often the better (and just slightly more performant) option. But sometimes, it's not enough. Learning regular expressions is a very useful skill in many scenarios.")),(0,l.kt)("h2",{id:"next"},"Next Up"),(0,l.kt)("p",null,"In the ",(0,l.kt)("a",{parentName:"p",href:"/academy/web-scraping-for-beginners/crawling/relative-urls",target:null,rel:null},"next lesson")," we'll see how rewriting this code to Node.js is not so simple and learn about absolute and relative URLs in the process."))}m.isMDXComponent=!0},85162:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(67294),a=n(86010);const l="tabItem_Ymn6";function o(e){var t=e.children,n=e.hidden,o=e.className;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(l,o),hidden:n},t)}},74866:(e,t,n)=>{n.d(t,{Z:()=>N});var r=n(87462),a=n(67294),l=n(86010),o=n(12466),i=n(16550),s=n(91980),u=n(67392),c=n(50012);function p(e){return function(e){return a.Children.map(e,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')}))}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function d(e){var t=e.values,n=e.children;return(0,a.useMemo)((function(){var e=null!=t?t:p(n);return function(e){var t=(0,u.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function f(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function h(e){var t=e.queryString,n=void 0!==t&&t,r=e.groupId,l=(0,i.k6)(),o=function(e){var t=e.queryString,n=void 0!==t&&t,r=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:n,groupId:r});return[(0,s._X)(o),(0,a.useCallback)((function(e){if(o){var t=new URLSearchParams(l.location.search);t.set(o,e),l.replace(Object.assign({},l.location,{search:t.toString()}))}}),[o,l])]}function m(e){var t,n,r,l,o=e.defaultValue,i=e.queryString,s=void 0!==i&&i,u=e.groupId,p=d(e),m=(0,a.useState)((function(){return function(e){var t,n=e.defaultValue,r=e.tabValues;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!f({value:n,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+r.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var a=null!=(t=r.find((function(e){return e.default})))?t:r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:o,tabValues:p})})),g=m[0],b=m[1],k=h({queryString:s,groupId:u}),y=k[0],v=k[1],w=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:u}.groupId),n=(0,c.Nk)(t),r=n[0],l=n[1],[r,(0,a.useCallback)((function(e){t&&l.set(e)}),[t,l])]),N=w[0],x=w[1],T=function(){var e=null!=y?y:N;return f({value:e,tabValues:p})?e:null}();return(0,a.useEffect)((function(){T&&b(T)}),[T]),{selectedValue:g,selectValue:(0,a.useCallback)((function(e){if(!f({value:e,tabValues:p}))throw new Error("Can't select invalid tab value="+e);b(e),v(e),x(e)}),[v,x,p]),tabValues:p}}var g=n(72389);const b="tabList__CuJ",k="tabItem_LNqP";function y(e){var t=e.className,n=e.block,i=e.selectedValue,s=e.selectValue,u=e.tabValues,c=[],p=(0,o.o5)().blockElementScrollPositionUntilNextRender,d=function(e){var t=e.currentTarget,n=c.indexOf(t),r=u[n].value;r!==i&&(p(t),s(r))},f=function(e){var t,n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":var r,a=c.indexOf(e.currentTarget)+1;n=null!=(r=c[a])?r:c[0];break;case"ArrowLeft":var l,o=c.indexOf(e.currentTarget)-1;n=null!=(l=c[o])?l:c[c.length-1]}null==(t=n)||t.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},t)},u.map((function(e){var t=e.value,n=e.label,o=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:function(e){return c.push(e)},onKeyDown:f,onClick:d},o,{className:(0,l.Z)("tabs__item",k,null==o?void 0:o.className,{"tabs__item--active":i===t})}),null!=n?n:t)})))}function v(e){var t=e.lazy,n=e.children,r=e.selectedValue;if(t){var l=n.find((function(e){return e.props.value===r}));return l?(0,a.cloneElement)(l,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},n.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r})})))}function w(e){var t=m(e);return a.createElement("div",{className:(0,l.Z)("tabs-container",b)},a.createElement(y,(0,r.Z)({},e,t)),a.createElement(v,(0,r.Z)({},e,t)))}function N(e){var t=(0,g.Z)();return a.createElement(w,(0,r.Z)({key:String(t)},e))}},99885:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/nested-tag-747445be46f72bcfb2bced7c49574f73.png"},75524:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/product-urls-1d0c4c5f3edd985e7d832444c038b5fa.png"}}]);