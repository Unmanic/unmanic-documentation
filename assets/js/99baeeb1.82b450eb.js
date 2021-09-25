"use strict";(self.webpackChunkunmanic_documentation=self.webpackChunkunmanic_documentation||[]).push([[816],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return f}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(t),f=a,m=p["".concat(l,".").concat(f)]||p[f]||d[f]||o;return t?r.createElement(m,i(i({ref:n},u),{},{components:t})):r.createElement(m,i({ref:n},u))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=p;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},8215:function(e,n,t){var r=t(7294);n.Z=function(e){var n=e.children,t=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:t,className:a},n)}},5064:function(e,n,t){t.d(n,{Z:function(){return c}});var r=t(7294),a=t(9443);var o=function(){var e=(0,r.useContext)(a.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},i=t(6010),s="tabItem_1uMI",l="tabItemActive_2DSg";var c=function(e){var n,t=e.lazy,a=e.block,c=e.defaultValue,u=e.values,d=e.groupId,p=e.className,f=r.Children.toArray(e.children),m=null!=u?u:f.map((function(e){return{value:e.props.value,label:e.props.label}})),g=null!=c?c:null==(n=f.find((function(e){return e.props.default})))?void 0:n.props.value,h=o(),b=h.tabGroupChoices,v=h.setTabGroupChoices,y=(0,r.useState)(g),k=y[0],w=y[1],O=[];if(null!=d){var P=b[d];null!=P&&P!==k&&m.some((function(e){return e.value===P}))&&w(P)}var T=function(e){var n=e.currentTarget,t=O.indexOf(n),r=m[t].value;w(r),null!=d&&(v(d,r),setTimeout((function(){var e,t,r,a,o,i,s,c;(e=n.getBoundingClientRect(),t=e.top,r=e.left,a=e.bottom,o=e.right,i=window,s=i.innerHeight,c=i.innerWidth,t>=0&&o<=c&&a<=s&&r>=0)||(n.scrollIntoView({block:"center",behavior:"smooth"}),n.classList.add(l),setTimeout((function(){return n.classList.remove(l)}),2e3))}),150))},x=function(e){var n,t=null;switch(e.key){case"ArrowRight":var r=O.indexOf(e.target)+1;t=O[r]||O[0];break;case"ArrowLeft":var a=O.indexOf(e.target)-1;t=O[a]||O[O.length-1]}null==(n=t)||n.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":a},p)},m.map((function(e){var n=e.value,t=e.label;return r.createElement("li",{role:"tab",tabIndex:k===n?0:-1,"aria-selected":k===n,className:(0,i.Z)("tabs__item",s,{"tabs__item--active":k===n}),key:n,ref:function(e){return O.push(e)},onKeyDown:x,onFocus:T,onClick:T},null!=t?t:n)}))),t?(0,r.cloneElement)(f.filter((function(e){return e.props.value===k}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},f.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==k})}))))}},9443:function(e,n,t){var r=(0,t(7294).createContext)(void 0);n.Z=r},7056:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return p}});var r=t(7462),a=t(3366),o=(t(7294),t(3905)),i=(t(5064),t(8215),["components"]),s={title:"Dashboard Pending Tasks",description:"Pending Tasks",id:"pending_tasks"},l=void 0,c={unversionedId:"dashboard/pending_tasks",id:"dashboard/pending_tasks",isDocsHomePage:!1,title:"Dashboard Pending Tasks",description:"Pending Tasks",source:"@site/docs/dashboard/pending_tasks.mdx",sourceDirName:"dashboard",slug:"/dashboard/pending_tasks",permalink:"/docs/dashboard/pending_tasks",tags:[],version:"current",frontMatter:{title:"Dashboard Pending Tasks",description:"Pending Tasks",id:"pending_tasks"},sidebar:"docs",previous:{title:"Installation on Synology",permalink:"/docs/installation/synology"},next:{title:"Dashboard Workers",permalink:"/docs/dashboard/workers"}},u=[{value:"What is Pending Tasks",id:"what-is-pending-tasks",children:[]},{value:"Managing Pending Tasks",id:"managing-pending-tasks",children:[]}],d={toc:u};function p(e){var n=e.components,s=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,s,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("img",{className:"screenshot",src:t(8608).Z}),(0,o.kt)("h2",{id:"what-is-pending-tasks"},"What is Pending Tasks"),(0,o.kt)("p",null,"A Task is generated whenever a file is discovered that requires processing by one or more Plugins."),(0,o.kt)("p",null,"The Pending Tasks are a list of file pointers that are currently awaiting to be picked up by the next available Worker."),(0,o.kt)("p",null,"Pending tasks are listed in order that they will be processed."),(0,o.kt)("h2",{id:"managing-pending-tasks"},"Managing Pending Tasks"),(0,o.kt)("p",null,"You will see more details regarding your Pending Tasks list if you expand the card by clicking the ",(0,o.kt)("em",{parentName:"p"},"Show more")," icon in the top-right corner."),(0,o.kt)("img",{className:"screenshot",src:t(8497).Z}),(0,o.kt)("p",null,"Once expanded you have the options to move a Task to either the top or bottom of the list, or to remove the items from your Pending Tasks list altogether."),(0,o.kt)("p",null,"From here you are also able to manually execute a scan of your Library."))}p.isMDXComponent=!0},6010:function(e,n,t){function r(e){var n,t,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=r(e[n]))&&(a&&(a+=" "),a+=t);else for(n in e)e[n]&&(a&&(a+=" "),a+=n);return a}function a(){for(var e,n,t=0,a="";t<arguments.length;)(e=arguments[t++])&&(n=r(e))&&(a&&(a+=" "),a+=n);return a}t.d(n,{Z:function(){return a}})},8497:function(e,n,t){n.Z=t.p+"assets/images/unmanic-dashboard-pending-tasks-expanded-1d0308c85c2dcee77075826eaa4d89b3.png"},8608:function(e,n,t){n.Z=t.p+"assets/images/unmanic-dashboard-pending-tasks-c877fcd2934d2139190c558613134ac2.png"}}]);