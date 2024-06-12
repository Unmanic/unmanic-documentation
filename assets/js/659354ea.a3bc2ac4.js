"use strict";(self.webpackChunkunmanic_documentation=self.webpackChunkunmanic_documentation||[]).push([[5417],{3905:(e,n,r)=>{r.d(n,{Zo:()=>u,kt:()=>y});var i=r(7294);function t(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,i)}return r}function o(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){t(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,i,t=function(e,n){if(null==e)return{};var r,i,t={},a=Object.keys(e);for(i=0;i<a.length;i++)r=a[i],n.indexOf(r)>=0||(t[r]=e[r]);return t}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var s=i.createContext({}),c=function(e){var n=i.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):o(o({},n),e)),r},u=function(e){var n=c(e.components);return i.createElement(s.Provider,{value:n},e.children)},p="mdxType",b={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},f=i.forwardRef((function(e,n){var r=e.components,t=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(r),f=t,y=p["".concat(s,".").concat(f)]||p[f]||b[f]||a;return r?i.createElement(y,o(o({ref:n},u),{},{components:r})):i.createElement(y,o({ref:n},u))}));function y(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var a=r.length,o=new Array(a);o[0]=f;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[p]="string"==typeof e?e:t,o[1]=l;for(var c=2;c<a;c++)o[c]=r[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,r)}f.displayName="MDXCreateElement"},1665:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var i=r(7462),t=(r(7294),r(3905));const a={title:"Library Scanning",description:"Unmanic Configuration - Library Scanning",id:"library_scanner"},o=void 0,l={unversionedId:"configuration/libraries/library_scanner",id:"configuration/libraries/library_scanner",title:"Library Scanning",description:"Unmanic Configuration - Library Scanning",source:"@site/docs/configuration/libraries/library_scanner.mdx",sourceDirName:"configuration/libraries",slug:"/configuration/libraries/library_scanner",permalink:"/docs/configuration/libraries/library_scanner",draft:!1,tags:[],version:"current",frontMatter:{title:"Library Scanning",description:"Unmanic Configuration - Library Scanning",id:"library_scanner"},sidebar:"docs",previous:{title:"Configuring Libraries",permalink:"/docs/configuration/libraries/configure_libraries"},next:{title:"Optimise File Testing",permalink:"/docs/configuration/libraries/file_testing"}},s={},c=[{value:"Options",id:"options",level:3},{value:"Enable periodic library scans",id:"enable-periodic-library-scans",level:4},{value:"Library scan schedule in minutes",id:"library-scan-schedule-in-minutes",level:4},{value:"Run a one off library scan on startup",id:"run-a-one-off-library-scan-on-startup",level:4},{value:"Follow symlinks on library scans",id:"follow-symlinks-on-library-scans",level:4}],u={toc:c};function p(e){let{components:n,...a}=e;return(0,t.kt)("wrapper",(0,i.Z)({},u,a,{components:n,mdxType:"MDXLayout"}),(0,t.kt)("p",null,"Unmanic is able to run a routine scan of your configured libraries to determine if files need tasks created for processing."),(0,t.kt)("admonition",{type:"note"},(0,t.kt)("p",{parentName:"admonition"},"The scan will only run against a library if that library has the library scanner enabled.")),(0,t.kt)("img",{className:"screenshot",style:{width:"400px"},src:r(7873).Z}),(0,t.kt)("h3",{id:"options"},"Options"),(0,t.kt)("p",null,"The options for the library scanner are configured under the ",(0,t.kt)("em",{parentName:"p"},"Library")," section in Unmanic's settings."),(0,t.kt)("h4",{id:"enable-periodic-library-scans"},"Enable periodic library scans"),(0,t.kt)("p",null,"Select this option if you wish for Unmanic to schedule a library scanner."),(0,t.kt)("h4",{id:"library-scan-schedule-in-minutes"},"Library scan schedule in minutes"),(0,t.kt)("p",null,"Set the time in minutes between scans of your files in the configured library path."),(0,t.kt)("h4",{id:"run-a-one-off-library-scan-on-startup"},"Run a one off library scan on startup"),(0,t.kt)("p",null,"If selected, the library scan will be executed when Unmanic starts."),(0,t.kt)("h4",{id:"follow-symlinks-on-library-scans"},"Follow symlinks on library scans"),(0,t.kt)("p",null,"If selected, the library scan will follow symlinks."))}p.isMDXComponent=!0},7873:(e,n,r)=>{r.d(n,{Z:()=>i});const i=r.p+"assets/images/unmanic-settings-library-scanning-9b9436b265186cb29593fa8a2d225648.png"}}]);