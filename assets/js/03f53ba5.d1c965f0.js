"use strict";(self.webpackChunkunmanic_documentation=self.webpackChunkunmanic_documentation||[]).push([[546],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),f=p(n),m=i,h=f["".concat(c,".").concat(m)]||f[m]||u[m]||a;return n?r.createElement(h,o(o({ref:t},s),{},{components:n})):r.createElement(h,o({ref:t},s))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},4862:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return s},default:function(){return f}});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),o=["components"],l={title:"Creating a Pull Request to the Official Repository",id:"creating_a_pull_request"},c=void 0,p={unversionedId:"development/plugin_repos/creating_a_pull_request",id:"development/plugin_repos/creating_a_pull_request",isDocsHomePage:!1,title:"Creating a Pull Request to the Official Repository",description:"Submissions are encouraged for the plugin repository. However it is your responsibility to ensure that your plugin is compatible and meets all requirements prior to submission.",source:"@site/docs/development/plugin_repos/opening_plugin_pr_to_official_repo.mdx",sourceDirName:"development/plugin_repos",slug:"/development/plugin_repos/creating_a_pull_request",permalink:"/docs/development/plugin_repos/creating_a_pull_request",tags:[],version:"current",frontMatter:{title:"Creating a Pull Request to the Official Repository",id:"creating_a_pull_request"},sidebar:"docs",previous:{title:"Creating Your Own Repository",permalink:"/docs/development/plugin_repos/creating_your_own_repo"},next:{title:"Plugin Manager CLI",permalink:"/docs/development/plugin_manager_cli"}},s=[{value:"Creating a New PR:",id:"creating-a-new-pr",children:[{value:"1) Pull latest changes from official branch",id:"1-pull-latest-changes-from-official-branch",children:[]},{value:"2) Create new PR branch from official",id:"2-create-new-pr-branch-from-official",children:[]},{value:"3) Merge in the source files from your master branch",id:"3-merge-in-the-source-files-from-your-master-branch",children:[]},{value:"4) Push to new branch and then open a PR",id:"4-push-to-new-branch-and-then-open-a-pr",children:[]},{value:"5) Open the PR",id:"5-open-the-pr",children:[]}]},{value:"Updating existing PR:",id:"updating-existing-pr",children:[{value:"1) Pull latest changes from official branch",id:"1-pull-latest-changes-from-official-branch-1",children:[]},{value:"2) Checkout CLEAN PR branch from official",id:"2-checkout-clean-pr-branch-from-official",children:[]},{value:"3) Follow steps &gt; 3 from Creating a New PR: above",id:"3-follow-steps--3-from-creating-a-new-pr-above",children:[]}]}],u={toc:s};function f(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Submissions are encouraged for the plugin repository. However it is your responsibility to ensure that your plugin is compatible and meets all requirements prior to submission.\nOnce a plugin is merged into the official repository, maintenance of that plugin will fall to the maintainer of the official repository."),(0,a.kt)("p",null,"If you wish to merge your plugin into the official repository, follow these steps"),(0,a.kt)("hr",null),(0,a.kt)("h1",{id:"opening-pr"},"Opening PR"),(0,a.kt)("p",null,"These instructions assume you have ",(0,a.kt)("a",{parentName:"p",href:"creating_your_own_repo"},"forked the official repository")," and wish to merge in your own plugin."),(0,a.kt)("p",null,"These instructions also assume that you have configured your locally cloned repo with a remote ",(0,a.kt)("inlineCode",{parentName:"p"},"upstream")," pointing to the official repository."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"git remote add upstream https://github.com/Unmanic/unmanic-plugins.git \n")),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"It is a good idea to set the variable ",(0,a.kt)("inlineCode",{parentName:"p"},"$plugin_id")," before starting these commands"),(0,a.kt)("p",{parentName:"div"},"Eg:"),(0,a.kt)("pre",{parentName:"div"},(0,a.kt)("code",{parentName:"pre"},"plugin_id=path_ignore\nplugin_version=0.0.1\n")))),(0,a.kt)("h2",{id:"creating-a-new-pr"},"Creating a New PR:"),(0,a.kt)("h3",{id:"1-pull-latest-changes-from-official-branch"},"1) Pull latest changes from official branch"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"git checkout official\ngit pull upstream official\n")),(0,a.kt)("h3",{id:"2-create-new-pr-branch-from-official"},"2) Create new PR branch from official"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"git checkout -b pr-${plugin_id}\n")),(0,a.kt)("h3",{id:"3-merge-in-the-source-files-from-your-master-branch"},"3) Merge in the source files from your master branch"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"git read-tree --prefix=source/${plugin_id} -u master:source/${plugin_id}\n")),(0,a.kt)("h3",{id:"4-push-to-new-branch-and-then-open-a-pr"},"4) Push to new branch and then open a PR"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'git commit -m "[${plugin_id}] ${plugin_version}"\ngit push -f origin pr-${plugin_id}\n')),(0,a.kt)("h3",{id:"5-open-the-pr"},"5) Open the PR"),(0,a.kt)("p",null,"Open the PR from this new branch of your forked repo to the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Unmanic/unmanic-plugins/tree/official"},"Unmanic plugins official branch"),"."),(0,a.kt)("h2",{id:"updating-existing-pr"},"Updating existing PR:"),(0,a.kt)("h3",{id:"1-pull-latest-changes-from-official-branch-1"},"1) Pull latest changes from official branch"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"git checkout official\ngit pull upstream official\n")),(0,a.kt)("h3",{id:"2-checkout-clean-pr-branch-from-official"},"2) Checkout CLEAN PR branch from official"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"git branch -D pr-${plugin_id}\ngit checkout -b pr-${plugin_id}\n")),(0,a.kt)("h3",{id:"3-follow-steps--3-from-creating-a-new-pr-above"},"3) Follow steps > 3 from ",(0,a.kt)("a",{parentName:"h3",href:"#creating-a-new-pr"},"Creating a New PR:")," above"),(0,a.kt)("p",null,"Continue following steps 3+ from the ",(0,a.kt)("em",{parentName:"p"},"New PR:")," steps above."),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Take note of the force push in step 4. This is done so that we can squash the changes for the PR."))))}f.isMDXComponent=!0}}]);