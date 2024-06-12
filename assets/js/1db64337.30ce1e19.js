"use strict";(self.webpackChunkunmanic_documentation=self.webpackChunkunmanic_documentation||[]).push([[1372],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(r),f=i,d=p["".concat(c,".").concat(f)]||p[f]||m[f]||o;return r?n.createElement(d,a(a({ref:t},u),{},{components:r})):n.createElement(d,a({ref:t},u))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:i,a[1]=l;for(var s=2;s<o;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},6777:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=r(7462),i=(r(7294),r(3905));const o={title:"Overview",description:"Welcome",hide_table_of_contents:!0,id:"overview",slug:"/"},a=void 0,l={unversionedId:"overview",id:"overview",title:"Overview",description:"Welcome",source:"@site/docs/overview.md",sourceDirName:".",slug:"/",permalink:"/docs/",draft:!1,tags:[],version:"current",frontMatter:{title:"Overview",description:"Welcome",hide_table_of_contents:!0,id:"overview",slug:"/"},sidebar:"docs",next:{title:"Requirements",permalink:"/docs/requirements"}},c={},s=[],u={toc:s};function p(e){let{components:t,...o}=e;return(0,i.kt)("wrapper",(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"DEMO",src:r(7043).Z,title:"demo",width:"900",height:"493"})),(0,i.kt)("p",null,"Unmanic is a simple tool for optimising your file library.\nYou can use it to convert your files into a single, uniform format, manage file movements based on timestamps, or execute custom commands against a file based on its file size."),(0,i.kt)("p",null,"Unmanic provides you with the following main functions:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"A built-in scheduler scans your whole library for files that do not conform to your configured file presets. Files found requiring processing are then queued.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"A file/directory monitor. When a file is modified or a new file is added to your library, Unmanic can test the file against your configured presets. Like the first function, if this file requires processing, it is added to a queue for processing.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"A handler to manage running multiple file manipulation tasks at a time.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"A Web UI to easily configure, manage and monitor the progress of your library optimisation."))),(0,i.kt)("p",null,"Simply configure Unmanic pointing it at your library and let it automatically manage that library for you."))}p.isMDXComponent=!0},7043:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/unmanic-overview-630bcae9ec17fa33f4140e4c1863978a.gif"}}]);