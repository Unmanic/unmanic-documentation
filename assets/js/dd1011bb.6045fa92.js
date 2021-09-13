"use strict";(self.webpackChunkunmanic_documentation=self.webpackChunkunmanic_documentation||[]).push([[473],{3905:function(e,r,t){t.d(r,{Zo:function(){return l},kt:function(){return p}});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=n.createContext({}),u=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},l=function(e){var r=u(e.components);return n.createElement(s.Provider,{value:r},e.children)},f={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=u(t),p=o,m=d["".concat(s,".").concat(p)]||d[p]||f[p]||a;return t?n.createElement(m,i(i({ref:r},l),{},{components:t})):n.createElement(m,i({ref:r},l))}));function p(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var c={};for(var s in r)hasOwnProperty.call(r,s)&&(c[s]=r[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var u=2;u<a;u++)i[u]=t[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},8215:function(e,r,t){var n=t(7294);r.Z=function(e){var r=e.children,t=e.hidden,o=e.className;return n.createElement("div",{role:"tabpanel",hidden:t,className:o},r)}},5064:function(e,r,t){t.d(r,{Z:function(){return f}});var n=t(7294),o=t(9443);var a=function(){var e=(0,n.useContext)(o.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},i=t(6010),c="tabItem_1uMI",s="tabItemActive_2DSg";var u=37,l=39;var f=function(e){var r=e.lazy,t=e.block,o=e.defaultValue,f=e.values,d=e.groupId,p=e.className,m=a(),v=m.tabGroupChoices,b=m.setTabGroupChoices,h=(0,n.useState)(o),y=h[0],k=h[1],g=n.Children.toArray(e.children),w=[];if(null!=d){var O=v[d];null!=O&&O!==y&&f.some((function(e){return e.value===O}))&&k(O)}var x=function(e){var r=e.currentTarget,t=w.indexOf(r),n=f[t].value;k(n),null!=d&&(b(d,n),setTimeout((function(){var e,t,n,o,a,i,c,u;(e=r.getBoundingClientRect(),t=e.top,n=e.left,o=e.bottom,a=e.right,i=window,c=i.innerHeight,u=i.innerWidth,t>=0&&a<=u&&o<=c&&n>=0)||(r.scrollIntoView({block:"center",behavior:"smooth"}),r.classList.add(s),setTimeout((function(){return r.classList.remove(s)}),2e3))}),150))},E=function(e){var r,t;switch(e.keyCode){case l:var n=w.indexOf(e.target)+1;t=w[n]||w[0];break;case u:var o=w.indexOf(e.target)-1;t=w[o]||w[w.length-1]}null==(r=t)||r.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":t},p)},f.map((function(e){var r=e.value,t=e.label;return n.createElement("li",{role:"tab",tabIndex:y===r?0:-1,"aria-selected":y===r,className:(0,i.Z)("tabs__item",c,{"tabs__item--active":y===r}),key:r,ref:function(e){return w.push(e)},onKeyDown:E,onFocus:x,onClick:x},t)}))),r?(0,n.cloneElement)(g.filter((function(e){return e.props.value===y}))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},g.map((function(e,r){return(0,n.cloneElement)(e,{key:r,hidden:e.props.value!==y})}))))}},9443:function(e,r,t){var n=(0,t(7294).createContext)(void 0);r.Z=n},6126:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return l},default:function(){return d}});var n=t(2122),o=t(9756),a=(t(7294),t(3905)),i=(t(5064),t(8215),["components"]),c={title:"Dashboard Workers",description:"Workers",id:"workers"},s=void 0,u={unversionedId:"dashboard/workers",id:"dashboard/workers",isDocsHomePage:!1,title:"Dashboard Workers",description:"Workers",source:"@site/docs/dashboard/workers.mdx",sourceDirName:"dashboard",slug:"/dashboard/workers",permalink:"/docs/dashboard/workers",version:"current",frontMatter:{title:"Dashboard Workers",description:"Workers",id:"workers"},sidebar:"docs",previous:{title:"Task Flow",permalink:"/docs/dashboard/task_flow_chart"},next:{title:"Dashboard Pending Tasks",permalink:"/docs/dashboard/pending_tasks"}},l=[{value:"(WIP) What Are Workers",id:"wip-what-are-workers",children:[]}],f={toc:l};function d(e){var r=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},f,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"wip-what-are-workers"},"(WIP) What Are Workers"))}d.isMDXComponent=!0},6010:function(e,r,t){function n(e){var r,t,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(r=0;r<e.length;r++)e[r]&&(t=n(e[r]))&&(o&&(o+=" "),o+=t);else for(r in e)e[r]&&(o&&(o+=" "),o+=r);return o}function o(){for(var e,r,t=0,o="";t<arguments.length;)(e=arguments[t++])&&(r=n(e))&&(o&&(o+=" "),o+=r);return o}t.d(r,{Z:function(){return o}})}}]);