"use strict";(self.webpackChunkunmanic_documentation=self.webpackChunkunmanic_documentation||[]).push([[372],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),f=u(n),m=i,d=f["".concat(c,".").concat(m)]||f[m]||p[m]||o;return n?r.createElement(d,a(a({ref:t},s),{},{components:n})):r.createElement(d,a({ref:t},s))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var u=2;u<o;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},3099:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return s},default:function(){return f}});var r=n(2122),i=n(9756),o=(n(7294),n(3905)),a=["components"],l={title:"Overview",description:"Welcome",hide_table_of_contents:!0,id:"overview",slug:"/"},c=void 0,u={unversionedId:"overview",id:"overview",isDocsHomePage:!1,title:"Overview",description:"Welcome",source:"@site/docs/overview.md",sourceDirName:".",slug:"/",permalink:"/docs/",version:"current",frontMatter:{title:"Overview",description:"Welcome",hide_table_of_contents:!0,id:"overview",slug:"/"},sidebar:"docs",next:{title:"Requirements",permalink:"/docs/requirements"}},s=[],p={toc:s};function f(e){var t=e.components,l=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"DEMO",src:n(4763).Z,title:"demo"})),(0,o.kt)("p",null,"Unmanic is a simple tool for optimising your file library.\nYou can use it to convert your files into a single, uniform format, manage file movements based on timestamps, or execute custom commands against a file based on its file size."),(0,o.kt)("p",null,"Unmanic provides you with the following main functions:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"A scheduler built in to scan your whole library for files that do not conform to your configured file presets. Files found requiring processing are then queued.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"A folder watchdog. When a file is modified, or a new file is added in your library, Unmanic is able to again test that against your configured file presets. Like the first function, if this file requires processing, it is added to a queue for conversion.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"A handler to manage running multiple file manipulation tasks at a time.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"A Web UI to easily configure, manage and monitor the progress of your library optimisation."))),(0,o.kt)("p",null,"Simply configure Unmanic pointing it at your library and let it automatically manage that library for you."))}f.isMDXComponent=!0},4763:function(e,t,n){t.Z=n.p+"assets/images/unmanic-overview-16437929a62c4abe3c2d32e29d5530d4.gif"}}]);