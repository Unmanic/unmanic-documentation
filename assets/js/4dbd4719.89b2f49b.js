(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{100:function(e,n,t){"use strict";var a=t(0),r=t(101);n.a=function(){var e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},101:function(e,n,t){"use strict";var a=t(0),r=Object(a.createContext)(void 0);n.a=r},105:function(e,n,t){"use strict";var a=t(0),r=t.n(a),i=t(100),o=t(97),c=t(56),l=t.n(c);var s=37,u=39;n.a=function(e){var n=e.lazy,t=e.block,c=e.defaultValue,d=e.values,p=e.groupId,b=e.className,m=Object(i.a)(),f=m.tabGroupChoices,h=m.setTabGroupChoices,v=Object(a.useState)(c),g=v[0],O=v[1],I=a.Children.toArray(e.children),j=[];if(null!=p){var A=f[p];null!=A&&A!==g&&d.some((function(e){return e.value===A}))&&O(A)}var w=function(e){var n=e.target,t=j.indexOf(n),a=I[t].props.value;O(a),null!=p&&(h(p,a),setTimeout((function(){var e,t,a,r,i,o,c,s;(e=n.getBoundingClientRect(),t=e.top,a=e.left,r=e.bottom,i=e.right,o=window,c=o.innerHeight,s=o.innerWidth,t>=0&&i<=s&&r<=c&&a>=0)||(n.scrollIntoView({block:"center",behavior:"smooth"}),n.classList.add(l.a.tabItemActive),setTimeout((function(){return n.classList.remove(l.a.tabItemActive)}),2e3))}),150))},_=function(e){var n,t;switch(e.keyCode){case u:var a=j.indexOf(e.target)+1;t=j[a]||j[0];break;case s:var r=j.indexOf(e.target)-1;t=j[r]||j[j.length-1]}null===(n=t)||void 0===n||n.focus()};return r.a.createElement("div",{className:"tabs-container"},r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":t},b)},d.map((function(e){var n=e.value,t=e.label;return r.a.createElement("li",{role:"tab",tabIndex:g===n?0:-1,"aria-selected":g===n,className:Object(o.a)("tabs__item",l.a.tabItem,{"tabs__item--active":g===n}),key:n,ref:function(e){return j.push(e)},onKeyDown:_,onFocus:w,onClick:w},t)}))),n?Object(a.cloneElement)(I.filter((function(e){return e.props.value===g}))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},I.map((function(e,n){return Object(a.cloneElement)(e,{key:n,hidden:e.props.value!==g})}))))}},106:function(e,n,t){"use strict";var a=t(0),r=t.n(a);n.a=function(e){var n=e.children,t=e.hidden,a=e.className;return r.a.createElement("div",{role:"tabpanel",hidden:t,className:a},n)}},82:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return l})),t.d(n,"metadata",(function(){return s})),t.d(n,"toc",(function(){return u})),t.d(n,"default",(function(){return p}));var a=t(3),r=t(7),i=(t(0),t(96)),o=t(105),c=t(106),l={title:"Hardware Acceleration - VAAPI",description:"Unmanic Installation - Hardware Acceleration - VAAPI",id:"hardware_accelerated_encoding_vaapi"},s={unversionedId:"advanced/hardware_accelerated_encoding_vaapi",id:"advanced/hardware_accelerated_encoding_vaapi",isDocsHomePage:!1,title:"Hardware Acceleration - VAAPI",description:"Unmanic Installation - Hardware Acceleration - VAAPI",source:"@site/docs/advanced/hardware_accelerated_encoding_vaapi.mdx",slug:"/advanced/hardware_accelerated_encoding_vaapi",permalink:"/docs/advanced/hardware_accelerated_encoding_vaapi",version:"current",sidebar:"docs",previous:{title:"Hardware Acceleration - NVENC",permalink:"/docs/advanced/hardware_accelerated_encoding_nvenc"}},u=[{value:"Overview",id:"overview",children:[]},{value:"Running Unmanic with support for VAAPI",id:"running-unmanic-with-support-for-vaapi",children:[]},{value:"Enable VAAPI in Unmanic Settings",id:"enable-vaapi-in-unmanic-settings",children:[]}],d={toc:u};function p(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},d,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"overview"},"Overview"),Object(i.b)("p",null,"Unmanic supports hardware acceleration (HWA) of video decoding using FFMpeg. FFMpeg and Unmanic can support multiple hardware acceleration implementations such as nVidia NVENC and MediaCodec through Video Acceleration API's."),Object(i.b)("p",null,"VAAPI is a Video Acceleration API that uses libva to interface with local drivers to provide HWA."),Object(i.b)("p",null,"You can find a list of supported codecs for VAAPI ",Object(i.b)("a",{parentName:"p",href:"https://wiki.archlinux.org/index.php/Hardware_video_acceleration#Comparison_tables"},"here"),".\nBoth Intel iGPU and AMD GPU can use VAAPI."),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"NOTE:\nAMD GPU requires open source driver Mesa 20.1 or higher to support hardware decoding HEVC.")),Object(i.b)("h2",{id:"running-unmanic-with-support-for-vaapi"},"Running Unmanic with support for VAAPI"),Object(i.b)("p",null,"To enable VAAPI, you will need to run Unmanic on a device that supports it."),Object(i.b)("p",null,"If you intend to use Unmanic inside a Docker container, you will also need to pass through the required devices to the container."),Object(i.b)("p",null,"An example of this is shown below:"),Object(i.b)(o.a,{defaultValue:"docker_run",values:[{label:"Docker run",value:"docker_run"},{label:"Docker-compose",value:"docker_compose"}],mdxType:"Tabs"},Object(i.b)(c.a,{value:"docker_run",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"  PUID=$(id -u)\n  PGID=$(id -g)\n\n  # CONFIG_DIR - Where you settings are saved\n  CONFIG_DIR=/config\n\n  # TZ - Your time zone\n  TZ=Pacific/Auckland\n\n  # LIBRARY_DIR - The location/locations of your library\n  LIBRARY_DIR=/library\n\n  # CACHE_DIR - A tmpfs or and folder for temporary conversion files\n  CACHE_DIR=/tmp/unmanic\n\n  # NVIDIA_VISIBLE_DEVICES - The GPUs that will be accessible to the container\n  NVIDIA_VISIBLE_DEVICES=all\n\n  docker run -ti --rm \\\n      -e PUID=${PUID} \\\n      -e PGID=${PGID} \\\n      -e TZ=${TZ} \\\n      -e NVIDIA_VISIBLE_DEVICES=${NVIDIA_VISIBLE_DEVICES} \\\n      --runtime=nvidia \\\n      -p 8888:8888 \\\n      -v ${CONFIG_DIR}:/config \\\n      -v ${LIBRARY_DIR}:/library \\\n      -v ${CACHE_DIR}:/tmp/unmanic \\\n      josh5/unmanic:latest\n"))),Object(i.b)(c.a,{value:"docker_compose",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml"},"  # Variables that will need to be changed:\n  #     <PUID>                            -  User id for folder/file permissions\n  #     <PGID>                            -  Group id for folder/file permissions\n  #     <TZ>                              -  Your time zone, eg - Pacific/Auckland\n  #     <NVIDIA_VISIBLE_DEVICES>          -  The GPUs that will be accessible to the container\n  #                                          Options: https://docs.nvidia.com/datacenter/cloud-native/container-toolkit/user-guide.html#gpu-enumeration\n  #     <PATH_TO_CONFIG>                  -  Path where Unmanic will store config files\n  #     <PATH_TO_LIBRARY>                 -  Path where you store the files that Unmanic will scan\n  #     <PATH_TO_ENCODE_CACHE>            -  Cache path for in-progress encoding tasks\n  #\n\n  ---\n  version: '2.4'\n  services:\n    unmanic:\n      container_name: unmanic\n      image: josh5/unmanic:latest\n      ports:\n        - 8888:8888\n      environment:\n        - PUID=<PUID>\n        - PGID=<PGID>\n        - TZ=<TZ>\n        - NVIDIA_VISIBLE_DEVICES=<NVIDIA_VISIBLE_DEVICES>\n      volumes:\n        - <PATH_TO_CONFIG>:/config\n        - <PATH_TO_LIBRARY>:/library\n        - <PATH_TO_ENCODE_CACHE>:/tmp/unmanic\n      runtime: nvidia       # For H/W transcoding using the NVENC encoder\n")))),Object(i.b)("h2",{id:"enable-vaapi-in-unmanic-settings"},"Enable VAAPI in Unmanic Settings"),Object(i.b)("p",null,"To enable the VAAPI FFMpeg encoder, you must select it in the Unmanic's settings. Follow these steps to do this."),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Navigate to the ",Object(i.b)("strong",{parentName:"li"},"Video Encoding")," section of Unmanic's settings.")),Object(i.b)("p",null,Object(i.b)("img",{parentName:"p",src:"https://raw.githubusercontent.com/Josh5/unmanic/master/docs/images/settings-video-encoding.png",alt:"Video Encoding"})),Object(i.b)("ol",{start:2},Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Select your target ",Object(i.b)("strong",{parentName:"p"},"Video Codec"),".")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Then select the ",Object(i.b)("strong",{parentName:"p"},"Video Encoder"),' that ends with "_vaapi"')),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Click ",Object(i.b)("strong",{parentName:"p"},"SUBMIT"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Now switch to the ",Object(i.b)("strong",{parentName:"p"},"Advanced Options")," section of Unmanic's settings."))),Object(i.b)("p",null,Object(i.b)("img",{parentName:"p",src:"https://raw.githubusercontent.com/Josh5/unmanic/master/docs/images/settings-advanced-options.png",alt:"Advanced Options"})),Object(i.b)("ol",{start:6},Object(i.b)("li",{parentName:"ol"},"Add the following lines:")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"-vf format=nv12|vaapi,hwupload \n")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"NOTE: For more details on filtering for VAAPI encoders, see the ",Object(i.b)("a",{parentName:"p",href:"https://trac.ffmpeg.org/wiki/Hardware/VAAPI"},"FFMPEG VAAPI Docs"),"\nand the ",Object(i.b)("a",{parentName:"p",href:"https://trac.ffmpeg.org/wiki/FilteringGuide"},"FFMPEG Filtering Guide Docs"),".")),Object(i.b)("ol",{start:7},Object(i.b)("li",{parentName:"ol"},"Click ",Object(i.b)("strong",{parentName:"li"},"SUBMIT"))),Object(i.b)("p",null,"These changes will only affect any future added files. If you wish to apply this to the current Pending Tasks list, then restart Unmanic."))}p.isMDXComponent=!0},96:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return m}));var a=t(0),r=t.n(a);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=r.a.createContext({}),u=function(e){var n=r.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},d=function(e){var n=u(e.components);return r.a.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},b=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(t),b=a,m=d["".concat(o,".").concat(b)]||d[b]||p[b]||i;return t?r.a.createElement(m,c(c({ref:n},s),{},{components:t})):r.a.createElement(m,c({ref:n},s))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=b;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=t[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},97:function(e,n,t){"use strict";function a(e){var n,t,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=a(e[n]))&&(r&&(r+=" "),r+=t);else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}n.a=function(){for(var e,n,t=0,r="";t<arguments.length;)(e=arguments[t++])&&(n=a(e))&&(r&&(r+=" "),r+=n);return r}}}]);