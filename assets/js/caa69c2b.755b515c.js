(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{91:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return u})),t.d(n,"default",(function(){return p}));var r=t(3),i=t(7),a=(t(0),t(96)),o={title:"Creating a New Plugin",id:"creating_a_new_plugin"},c={unversionedId:"plugins/writing_plugins/creating_a_new_plugin",id:"plugins/writing_plugins/creating_a_new_plugin",isDocsHomePage:!1,title:"Creating a New Plugin",description:"The best option for creating a new Plugin for Unmanic is through the",source:"@site/docs/plugins/writing_plugins/creating_a_new_plugin.mdx",slug:"/plugins/writing_plugins/creating_a_new_plugin",permalink:"/docs/plugins/writing_plugins/creating_a_new_plugin",version:"current",sidebar:"docs",previous:{title:"Introduction to Writing Plugins",permalink:"/docs/plugins/writing_plugins/introduction"},next:{title:"Accessing Plugin Settings",permalink:"/docs/plugins/writing_plugins/plugin_settings"}},u=[{value:"Generating a new Plugin",id:"generating-a-new-plugin",children:[]}],l={toc:u};function p(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"The best option for creating a new Plugin for Unmanic is through the\n",Object(a.b)("a",{parentName:"p",href:"/docs/plugins/plugin_manager_cli"},Object(a.b)("strong",{parentName:"a"},"Plugin Manager CLI")),"."),Object(a.b)("p",null,"Once you have the Plugin Manager CLI installed, carry on."),Object(a.b)("h2",{id:"generating-a-new-plugin"},"Generating a new Plugin"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},"unmanic --manage_plugins\n")),Object(a.b)("p",null,"From here you will see a terminal output listing a number of options."),Object(a.b)("p",null,"Select the option ",Object(a.b)("strong",{parentName:"p"},'"Create new plugin"')," and follow the prompts."),Object(a.b)("p",null,"Once this is complete, a new Plugin directory structure will be created\nin your ",Object(a.b)("inlineCode",{parentName:"p"},"~/.unmanic/plugins/")," directory. Open this in your IDE of choice\nand begin editing the files as necessary."),Object(a.b)("p",null,"Be sure to test your Plugin with the ",Object(a.b)("a",{parentName:"p",href:"#"},Object(a.b)("strong",{parentName:"a"},"Plugin Manager CLI"))," as required."),Object(a.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(a.b)("div",{parentName:"div",className:"admonition-heading"},Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",{parentName:"h5",className:"admonition-icon"},Object(a.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(a.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),Object(a.b)("div",{parentName:"div",className:"admonition-content"},Object(a.b)("p",{parentName:"div"},"You can run the Plugin test functionality within the Plugin Manager CLI to\n",Object(a.b)("inlineCode",{parentName:"p"},"print(data)")," or to test the functionality of your Plugin without needing\nto run the main Unmanic process."))))}p.isMDXComponent=!0},96:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return m}));var r=t(0),i=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=i.a.createContext({}),p=function(e){var n=i.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},s=function(e){var n=p(e.components);return i.a.createElement(l.Provider,{value:n},e.children)},g={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},b=i.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),s=p(t),b=r,m=s["".concat(o,".").concat(b)]||s[b]||g[b]||a;return t?i.a.createElement(m,c(c({ref:n},l),{},{components:t})):i.a.createElement(m,c({ref:n},l))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,o=new Array(a);o[0]=b;var c={};for(var u in n)hasOwnProperty.call(n,u)&&(c[u]=n[u]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var l=2;l<a;l++)o[l]=t[l];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);