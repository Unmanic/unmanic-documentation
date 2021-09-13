"use strict";(self.webpackChunkunmanic_documentation=self.webpackChunkunmanic_documentation||[]).push([[448],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return f}});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=r.createContext({}),u=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},l=function(e){var n=u(e.components);return r.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=u(t),f=i,g=d["".concat(c,".").concat(f)]||d[f]||p[f]||o;return t?r.createElement(g,a(a({ref:n},l),{},{components:t})):r.createElement(g,a({ref:n},l))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=d;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var u=2;u<o;u++)a[u]=t[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},9280:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return l},default:function(){return d}});var r=t(2122),i=t(9756),o=(t(7294),t(3905)),a=["components"],s={title:"Plugins Overview",description:"An Overview of Unmanic Plugins",id:"overview"},c=void 0,u={unversionedId:"plugins/overview",id:"plugins/overview",isDocsHomePage:!1,title:"Plugins Overview",description:"An Overview of Unmanic Plugins",source:"@site/docs/plugins/overview.mdx",sourceDirName:"plugins",slug:"/plugins/overview",permalink:"/docs/plugins/overview",version:"current",frontMatter:{title:"Plugins Overview",description:"An Overview of Unmanic Plugins",id:"overview"},sidebar:"docs",previous:{title:"Video Encoding Settings",permalink:"/docs/configuration/video_encoder_settings"},next:{title:"Installing Plugins",permalink:"/docs/plugins/installing_plugins"}},l=[],p={toc:l};function d(e){var n=e.components,s=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},p,s,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"plugins overview",src:t(3024).Z,title:"plugins overview"})),(0,o.kt)("p",null,"Unmanic features a Plugin system to extend Unmanic's capabilities.\nPlugins are stand-alone programs that are executed by Unmanic at defined stages during its task processing."),(0,o.kt)("p",null,"Usually, Plugins are designed to carry out one function only.\nHowever some Plugins are designed to be executed at multiple stages of task processing."),(0,o.kt)("p",null,"For example, you may install a Plugin that will run during the library scan process to detect files that need to be added to the ",(0,o.kt)("a",{parentName:"p",href:"/docs/dashboard/pending_tasks"},"Pending Tasks queue")," due to an incorrect video codec.\nWhen the ",(0,o.kt)("a",{parentName:"p",href:"/docs/dashboard/workers"},"Worker")," picks up the task, it may execute that same Plugin again which will now handle the job of transcoding the video streams to the configured codec."),(0,o.kt)("p",null,"In this example the Plugin has carried out two separate jobs at different stages of Unmanic's task processing."),(0,o.kt)("p",null,"Use Plugins to build powerful library optimisation flows."))}d.isMDXComponent=!0},3024:function(e,n,t){n.Z=t.p+"assets/images/unmanic-plugins-overview-fafb5bbfe5827cd7deda88af8adf912a.gif"}}]);