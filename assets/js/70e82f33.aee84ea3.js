"use strict";(self.webpackChunkunmanic_documentation=self.webpackChunkunmanic_documentation||[]).push([[158],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=o,g=d["".concat(p,".").concat(m)]||d[m]||c[m]||i;return n?r.createElement(g,a(a({ref:t},s),{},{components:n})):r.createElement(g,a({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9550:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return s},default:function(){return d}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],l={title:"Adding a Custom Plugin Repository",id:"adding_a_custom_plugin_repo"},p=void 0,u={unversionedId:"plugins/adding_a_custom_plugin_repo",id:"plugins/adding_a_custom_plugin_repo",isDocsHomePage:!1,title:"Adding a Custom Plugin Repository",description:"Adding a repo",source:"@site/docs/plugins/adding_a_custom_plugin_repo.mdx",sourceDirName:"plugins",slug:"/plugins/adding_a_custom_plugin_repo",permalink:"/docs/plugins/adding_a_custom_plugin_repo",tags:[],version:"current",frontMatter:{title:"Adding a Custom Plugin Repository",id:"adding_a_custom_plugin_repo"},sidebar:"docs",previous:{title:"Installing Plugins",permalink:"/docs/plugins/installing_plugins"},next:{title:"Plugin Development Overview",permalink:"/docs/development/developing_plugins"}},s=[{value:"Adding a repo",id:"adding-a-repo",children:[]},{value:"Removing a repo",id:"removing-a-repo",children:[]}],c={toc:s};function d(e){var t=e.components,l=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"adding-a-repo"},"Adding a repo"),(0,i.kt)("p",null,"To add a custom repository located on GitHub, follow these steps:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"On the Plugins tab, click the ",(0,i.kt)("strong",{parentName:"li"},"ADD NEW")," button.")),(0,i.kt)("img",{className:"screenshot",src:n(5506).Z}),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click the ",(0,i.kt)("strong",{parentName:"p"},"ADD REPOSITORY")," button.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Add the maintainers URL into the ",(0,i.kt)("em",{parentName:"p"},"New Repository")," text input."))),(0,i.kt)("img",{className:"screenshot",src:n(8452).Z}),(0,i.kt)("ol",{start:4},(0,i.kt)("li",{parentName:"ol"},"Click the ",(0,i.kt)("strong",{parentName:"li"},"SAVE")," button.")),(0,i.kt)("p",null,"This will automatically refresh the available plugins to include the ones in the added repository."),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"removing-a-repo"},"Removing a repo"),(0,i.kt)("p",null,"You can remove a custom repo by clicking on the ",(0,i.kt)("strong",{parentName:"p"},"REPOSITORIES LIST")," button and then selecting ",(0,i.kt)("strong",{parentName:"p"},"REMOVE"),"."),(0,i.kt)("img",{className:"screenshot",src:n(5682).Z}))}d.isMDXComponent=!0},5682:function(e,t,n){t.Z=n.p+"assets/images/unmanic-plugins-add-custom-repositories-list-fe4e52a80b09c5716840ace548957791.png"},8452:function(e,t,n){t.Z=n.p+"assets/images/unmanic-plugins-add-custom-repositories-37f3450f63931129eb0a0d435a698748.png"},5506:function(e,t,n){t.Z=n.p+"assets/images/unmanic-plugins-add-new-button-f9777fadfe5067f1b4c0860ab4733c56.png"}}]);