"use strict";(self.webpackChunkunmanic_documentation=self.webpackChunkunmanic_documentation||[]).push([[8670],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=p(n),c=i,h=d["".concat(s,".").concat(c)]||d[c]||m[c]||r;return n?a.createElement(h,l(l({ref:t},u),{},{components:n})):a.createElement(h,l({ref:t},u))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[d]="string"==typeof e?e:i,l[1]=o;for(var p=2;p<r;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},3743:(e,t,n)=>{n.d(t,{Z:()=>h});var a=n(7462),i=n(7294),r=n(6668);function l(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const a=n.slice(2,e.level);e.parentIndex=Math.max(...a),n[e.level]=t}));const a=[];return t.forEach((e=>{const{parentIndex:n,...i}=e;n>=0?t[n].children.push(i):a.push(i)})),a}function o(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return t.flatMap((e=>{const t=o({toc:e.children,minHeadingLevel:n,maxHeadingLevel:a});return function(e){return e.level>=n&&e.level<=a}(e)?[{...e,children:t}]:t}))}function s(e){const t=e.getBoundingClientRect();return t.top===t.bottom?s(e.parentNode):t}function p(e,t){let{anchorTopOffset:n}=t;const a=e.find((e=>s(e).top>=n));if(a){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(s(a))?a:e[e.indexOf(a)-1]??null}return e[e.length-1]??null}function u(){const e=(0,i.useRef)(0),{navbar:{hideOnScroll:t}}=(0,r.L)();return(0,i.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function d(e){const t=(0,i.useRef)(void 0),n=u();(0,i.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:a,linkActiveClassName:i,minHeadingLevel:r,maxHeadingLevel:l}=e;function o(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(a),o=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const a=[];for(let i=t;i<=n;i+=1)a.push(`h${i}.anchor`);return Array.from(document.querySelectorAll(a.join()))}({minHeadingLevel:r,maxHeadingLevel:l}),s=p(o,{anchorTopOffset:n.current}),u=e.find((e=>s&&s.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(i),e.classList.add(i),t.current=e):e.classList.remove(i)}(e,e===u)}))}return document.addEventListener("scroll",o),document.addEventListener("resize",o),o(),()=>{document.removeEventListener("scroll",o),document.removeEventListener("resize",o)}}),[e,n])}function m(e){let{toc:t,className:n,linkClassName:a,isChild:r}=e;return t.length?i.createElement("ul",{className:r?void 0:n},t.map((e=>i.createElement("li",{key:e.id},i.createElement("a",{href:`#${e.id}`,className:a??void 0,dangerouslySetInnerHTML:{__html:e.value}}),i.createElement(m,{isChild:!0,toc:e.children,className:n,linkClassName:a}))))):null}const c=i.memo(m);function h(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:s="table-of-contents__link",linkActiveClassName:p,minHeadingLevel:u,maxHeadingLevel:m,...h}=e;const g=(0,r.L)(),k=u??g.tableOfContents.minHeadingLevel,f=m??g.tableOfContents.maxHeadingLevel,v=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return(0,i.useMemo)((()=>o({toc:l(t),minHeadingLevel:n,maxHeadingLevel:a})),[t,n,a])}({toc:t,minHeadingLevel:k,maxHeadingLevel:f});return d((0,i.useMemo)((()=>{if(s&&p)return{linkClassName:s,linkActiveClassName:p,minHeadingLevel:k,maxHeadingLevel:f}}),[s,p,k,f])),i.createElement(c,(0,a.Z)({toc:v,className:n,linkClassName:s},h))}},8418:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>u,default:()=>g,frontMatter:()=>p,metadata:()=>d,toc:()=>c});var a=n(7462),i=n(7294),r=n(3905),l=n(3743);const o="tableOfContentsInline_prmo";function s(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return i.createElement("div",{className:o},i.createElement(l.Z,{toc:t,minHeadingLevel:n,maxHeadingLevel:a,className:"table-of-contents",linkClassName:null}))}const p={title:"Plugin Runners",id:"plugin_runner_types"},u=void 0,d={unversionedId:"development/writing_plugins/plugin_runner_types",id:"development/writing_plugins/plugin_runner_types",title:"Plugin Runners",description:"This page outlines the various Plugin types and their",source:"@site/docs/development/writing_plugins/plugin_runner_types.mdx",sourceDirName:"development/writing_plugins",slug:"/development/writing_plugins/plugin_runner_types",permalink:"/docs/development/writing_plugins/plugin_runner_types",draft:!1,tags:[],version:"current",frontMatter:{title:"Plugin Runners",id:"plugin_runner_types"},sidebar:"docs",previous:{title:"Accessing System Info",permalink:"/docs/development/writing_plugins/system_info"},next:{title:"Creating Your Own Repository",permalink:"/docs/development/plugin_repos/creating_your_own_repo"}},m={},c=[{value:"Library Management - File test",id:"library-management---file-test",level:2},{value:"Executed:",id:"executed",level:5},{value:"Function:",id:"function",level:5},{value:"Provided data:",id:"provided-data",level:5},{value:"Example:",id:"example",level:5},{value:"Details:",id:"details",level:5},{value:"Worker - Processing file",id:"worker---processing-file",level:2},{value:"Executed:",id:"executed-1",level:5},{value:"Function:",id:"function-1",level:5},{value:"Provided data:",id:"provided-data-1",level:5},{value:"Example:",id:"example-1",level:5},{value:"Details:",id:"details-1",level:5},{value:"Post-processor - File movements",id:"post-processor---file-movements",level:2},{value:"Executed:",id:"executed-2",level:5},{value:"Function:",id:"function-2",level:5},{value:"Provided data:",id:"provided-data-2",level:5},{value:"Example:",id:"example-2",level:5},{value:"Details:",id:"details-2",level:5},{value:"Post-processor - Marking task success/failure",id:"post-processor---marking-task-successfailure",level:2},{value:"Executed:",id:"executed-3",level:5},{value:"Function:",id:"function-3",level:5},{value:"Provided data:",id:"provided-data-3",level:5},{value:"Example:",id:"example-3",level:5},{value:"Frontend - Data Panel",id:"frontend---data-panel",level:2},{value:"Executed:",id:"executed-4",level:5},{value:"Function:",id:"function-4",level:5},{value:"Provided data:",id:"provided-data-4",level:5},{value:"Example:",id:"example-4",level:5},{value:"Details:",id:"details-3",level:5},{value:"Frontend - Plugin API",id:"frontend---plugin-api",level:2},{value:"Executed:",id:"executed-5",level:5},{value:"Function:",id:"function-5",level:5},{value:"Provided data:",id:"provided-data-5",level:5},{value:"Example:",id:"example-5",level:5},{value:"Details:",id:"details-4",level:5}],h={toc:c};function g(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This page outlines the various Plugin types and their\n",(0,r.kt)("a",{parentName:"p",href:"/docs/development/writing_plugins/introduction#runners"},(0,r.kt)("strong",{parentName:"a"},"runners")),"."),(0,r.kt)(s,{toc:c,mdxType:"TOCInline"}),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"library-management---file-test"},"Library Management - File test"),(0,r.kt)("h5",{id:"executed"},"Executed:"),(0,r.kt)("p",null,"After Unmanic carries out tests on a file to determine if it should be added to the task queue. Prior to returning a result of said tests."),(0,r.kt)("h5",{id:"function"},"Function:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"on_library_management_file_test(data)")),(0,r.kt)("h5",{id:"provided-data"},"Provided data:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"library_id"))," ",(0,r.kt)("em",{parentName:"li"},"[integer]")," - The library that the current task is associated with"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"path"))," ",(0,r.kt)("em",{parentName:"li"},"[string]")," - String containing the full path to the file being tested."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"issues"))," ",(0,r.kt)("em",{parentName:"li"},"[list]")," - List of currently found issues for not processing the file."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"add_file_to_pending_tasks"))," ",(0,r.kt)("em",{parentName:"li"},"[boolean]")," - Boolean, is the file currently marked to be added to the queue for processing."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"priority_score"))," ",(0,r.kt)("em",{parentName:"li"},"[integer]")," - An additional score that can be added to set the position of the new task in the task queue."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"shared_info"))," ",(0,r.kt)("em",{parentName:"li"},"[dictionary]")," - Information provided by previous plugin runners. This can be appended to for subsequent runners.")),(0,r.kt)("h5",{id:"example"},"Example:"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"plugin.py"),(0,r.kt)("p",null,"For an up-to-date example, see the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Unmanic/unmanic-plugins/blob/examples/source/custom_ffmpeg_process/plugin.py"},"Example Plugins Repo")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"import os\n\n\ndef on_library_management_file_test(data):\n    \"\"\"\n    Runner function - enables additional actions during the library management file tests.\n    The 'data' object argument includes:\n        library_id                      - The library that the current task is associated with\n        path                            - String containing the full path to the file being tested.\n        issues                          - List of currently found issues for not processing the file.\n        add_file_to_pending_tasks       - Boolean, is the file currently marked to be added to the queue for processing.\n        priority_score                  - Integer, an additional score that can be added to set the position of the new task in the task queue.\n        shared_info                     - Dictionary, information provided by previous plugin runners. This can be appended to for subsequent runners.\n    :param data:\n    :return:\n    \"\"\"\n\n    # Get the file extension\n    file_extension = os.path.splitext(data.get('path'))[-1][1:]\n\n    # Ensure the file's extension is lowercase\n    file_extension = file_extension.lower()\n\n    # If this is flash video file, add it to pending tasks\n    if file_extension.lower() in ['flv']:\n        data['add_file_to_pending_tasks'] = True\n\n    return\n"))),(0,r.kt)("h5",{id:"details"},"Details:"),(0,r.kt)("p",null,"This Plugin runner should be used when you wish to create custom actions or tests to be carried\nout on a file during the file test triggered by either the Library scan or the Library event watcher."),(0,r.kt)("p",null,"When you fail a test, you should also update the ",(0,r.kt)("inlineCode",{parentName:"p"},"issues")," list provided in the ",(0,r.kt)("inlineCode",{parentName:"p"},"data")," dictionary."),(0,r.kt)("p",null,"For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"data['issues'].append({\n    'id':      '<PLUGIN NAME>',\n    'message': \"File should be ignored because <X>\",\n})\n")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"worker---processing-file"},"Worker - Processing file"),(0,r.kt)("h5",{id:"executed-1"},"Executed:"),(0,r.kt)("p",null,"Just prior to the execution of the command subprocess within an Unmanic Worker process."),(0,r.kt)("h5",{id:"function-1"},"Function:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"on_worker_process(data)")),(0,r.kt)("h5",{id:"provided-data-1"},"Provided data:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"worker_log"))," ",(0,r.kt)("em",{parentName:"li"},"[list]")," - The log lines that are being tailed by the frontend (can be empty)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"library_id"))," ",(0,r.kt)("em",{parentName:"li"},"[integer]")," - The library that the current task is associated with."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"exec_command"))," ",(0,r.kt)("em",{parentName:"li"},"[list]")," - A command that Unmanic should execute (can be empty)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"command_progress_parser"))," ",(0,r.kt)("em",{parentName:"li"},"[callable]")," - A function that Unmanic can use to parse the STDOUT of the command to collect progress stats (can be empty)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"file_in"))," ",(0,r.kt)("em",{parentName:"li"},"[string]")," - The source file to be processed by the command."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"file_out"))," ",(0,r.kt)("em",{parentName:"li"},"[string]")," - The destination that the command should output (can be the same as the ",(0,r.kt)("em",{parentName:"li"},"file_in")," if necessary)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"original_file_path"))," ",(0,r.kt)("em",{parentName:"li"},"[string]")," - The absolute path to the original library file."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"repeat"))," ",(0,r.kt)("em",{parentName:"li"},"[boolean]")," - Sets if this runner should be executed again once completed with the same variables.")),(0,r.kt)("h5",{id:"example-1"},"Example:"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"plugin.py"),(0,r.kt)("p",null,"For an up-to-date example, see the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Unmanic/unmanic-plugins/blob/examples/source/custom_ffmpeg_process/plugin.py"},"Example Plugins Repo")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'from unmanic.libs.unplugins.settings import PluginSettings\nfrom unmanic.libs.system import System\n\n\nclass Settings(PluginSettings):\n    """\n    An object to hold a dictionary of settings accessible to the Plugin\n    class and able to be configured by users from within the Unmanic WebUI.\n\n    This class has a number of methods available to it for accessing these settings:\n\n        > get_setting(<key>)            - Fetch a single setting value. Or leave the \n                                        key argument empty and return the full dictionary.\n        > set_setting(<key>, <value>)   - Set a singe setting value.\n                                        Used by the Unmanic WebUI to save user settings.\n                                        Settings are stored on disk in order to be persistent.\n\n    """\n    settings = {\n        "Execute Command": True,\n        "Insert string into cache file name": "custom-string"\n    }\n\n\ndef on_worker_process(data):\n    """\n    Runner function - enables additional configured processing jobs during the worker stages of a task.\n\n    The \'data\' object argument includes:\n        worker_log              - Array, the log lines that are being tailed by the frontend. Can be left empty.\n        library_id              - Number, the library that the current task is associated with.\n        exec_command            - Array, a subprocess command that Unmanic should execute. Can be empty.\n        command_progress_parser - Function, a function that Unmanic can use to parse the STDOUT of the command to collect progress stats. Can be empty.\n        file_in                 - String, the source file to be processed by the command.\n        file_out                - String, the destination that the command should output (may be the same as the file_in if necessary).\n        original_file_path      - String, the absolute path to the original file.\n        repeat                  - Boolean, should this runner be executed again once completed with the same variables.\n\n    :param data:\n    :return:\n    """\n    settings = Settings(library_id=data.get(\'library_id\'))\n    system = System()\n    system_info = system.info()\n\n    custom_string = settings.get_setting(\'Insert string into cache file name\')\n    if custom_string:\n        tmp_file_out = os.path.splitext(data[\'file_out\'])\n        data[\'file_out\'] = "{}-{}-{}{}".format(tmp_file_out[0], custom_string, tmp_file_out[1])\n\n    if not settings.get_setting(\'Execute Command\'):\n        data[\'exec_command\'] = False\n\n        \n\n    return\n'))),(0,r.kt)("h5",{id:"details-1"},"Details:"),(0,r.kt)("p",null,"This Plugin runner should be used for carrying any custom command execution stages.\nThe runner itself is only required to configure the parameters of the command execution.\nThe main Unmanic process will take the data dictionary returned from this runner and execute\nthe command within it's own shell."),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"post-processor---file-movements"},"Post-processor - File movements"),(0,r.kt)("h5",{id:"executed-2"},"Executed:"),(0,r.kt)("p",null,"Just prior to file copy operation from cached output file to source file's directory."),(0,r.kt)("h5",{id:"function-2"},"Function:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"on_postprocessor_file_movement(data)")),(0,r.kt)("h5",{id:"provided-data-2"},"Provided data:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"source_data"))," ",(0,r.kt)("em",{parentName:"li"},"[dictionary]")," - Data pertaining to the original source file."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"remove_source_file"))," ",(0,r.kt)("em",{parentName:"li"},"[boolean]")," - Sets if Unmanic should remove the original source file after all copy operations are complete."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"copy_file"))," ",(0,r.kt)("em",{parentName:"li"},"[boolean]")," - Sets if Unmanic should run a copy operation with the returned data variables."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"file_in"))," ",(0,r.kt)("em",{parentName:"li"},"[string]")," - The converted cache file to be copied by the postprocessor."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"file_out"))," ",(0,r.kt)("em",{parentName:"li"},"[string]")," - The destination file that the file will be copied to."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"run_default_file_copy"))," ",(0,r.kt)("em",{parentName:"li"},"[boolean]")," - Whether Unmanic should perform the default file copy.")),(0,r.kt)("h5",{id:"example-2"},"Example:"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"plugin.py"),(0,r.kt)("p",null,"For an up-to-date example, see the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Unmanic/unmanic-plugins/blob/examples/source/example_postprocessor_file_movement/plugin.py"},"Example Plugins Repo")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"def on_postprocessor_file_movement(data):\n    \"\"\"\n    Runner function - configures additional postprocessor file movements during the postprocessor stage of a task.\n\n    The 'data' object argument includes:\n        source_data             - Dictionary containing data pertaining to the original source file ('abspath' and 'basename').\n        remove_source_file      - Boolean, should Unmanic remove the original source file after all copy operations are complete.\n        copy_file               - Boolean, should Unmanic run a copy operation with the returned data variables.\n        file_in                 - The converted cache file to be copied by the postprocessor.\n        file_out                - The destination file that the file will be copied to.\n        run_default_file_copy   - Whether Unmanic should perform the default file copy.\n\n    :param data:\n    :return:\n    \"\"\"\n\n    return\n"))),(0,r.kt)("h5",{id:"details-2"},"Details:"),(0,r.kt)("p",null,"This Plugin runner should be used for executing additional file movements of a completed task."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"This Plugin runner is only executed on a successfully completed task.")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"post-processor---marking-task-successfailure"},"Post-processor - Marking task success/failure"),(0,r.kt)("h5",{id:"executed-3"},"Executed:"),(0,r.kt)("p",null,"Just prior to the task cache directory cleanup."),(0,r.kt)("h5",{id:"function-3"},"Function:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"on_postprocessor_task_results(data)")),(0,r.kt)("h5",{id:"provided-data-3"},"Provided data:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"final_cache_path"))," ",(0,r.kt)("em",{parentName:"li"},"[string]")," - The path to the final cache file that was then used as the source for all destination files."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"library_id"))," ",(0,r.kt)("em",{parentName:"li"},"[integer]")," - The library that the current task is associated with."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"task_processing_success"))," ",(0,r.kt)("em",{parentName:"li"},"[boolean]")," - Specifies if all task processes complete successfully."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"file_move_processes_success"))," ",(0,r.kt)("em",{parentName:"li"},"[boolean]")," - Specifies if all postprocessor movement tasks complete successfully."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"destination_files"))," ",(0,r.kt)("em",{parentName:"li"},"[list]")," - All file paths created by postprocessor file movements."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"source_data"))," ",(0,r.kt)("em",{parentName:"li"},"[dictionary]")," - Data pertaining to the original source file.")),(0,r.kt)("h5",{id:"example-3"},"Example:"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"plugin.py"),(0,r.kt)("p",null,"For an up-to-date example, see the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Unmanic/unmanic-plugins/blob/examples/source/example_postprocessor_task_results/plugin.py"},"Example Plugins Repo")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'def on_postprocessor_task_results(data):\n    """\n    Runner function - provides a means for additional postprocessor functions based on the task success.\n\n    The \'data\' object argument includes:\n        final_cache_path                - The path to the final cache file that was then used as the source for all destination files.\n        library_id                      - The library that the current task is associated with.\n        task_processing_success         - Boolean, did all task processes complete successfully.\n        file_move_processes_success     - Boolean, did all postprocessor movement tasks complete successfully.\n        destination_files               - List containing all file paths created by postprocessor file movements.\n        source_data                     - Dictionary containing data pertaining to the original source file.\n\n    :param data:\n    :return:\n    """\n    return\n'))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"frontend---data-panel"},"Frontend - Data Panel"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"(since v0.1.0)")),(0,r.kt)("h5",{id:"executed-4"},"Executed:"),(0,r.kt)("p",null,"From front-end URL"),(0,r.kt)("h5",{id:"function-4"},"Function:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"render_frontend_panel(data)")),(0,r.kt)("h5",{id:"provided-data-4"},"Provided data:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"content_type"))," ",(0,r.kt)("em",{parentName:"li"},"[string]")," - The content type to be set when writing back to the browser."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"content"))," ",(0,r.kt)("em",{parentName:"li"},"[string]")," - The content to print to the browser."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"path"))," ",(0,r.kt)("em",{parentName:"li"},"[string]")," - The path received after the '/unmanic/panel' path."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"arguments"))," ",(0,r.kt)("em",{parentName:"li"},"[dictionary]")," - A dictionary of GET arguments received.")),(0,r.kt)("h5",{id:"example-4"},"Example:"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"plugin.py"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"def render_frontend_panel(data):\n    \"\"\"\n    Runner function - display a custom data panel in the frontend.\n\n    The 'data' object argument includes:\n        content_type                    - The content type to be set when writing back to the browser.\n        content                         - The content to print to the browser.\n        path                            - The path received after the '/unmanic/panel' path.\n        arguments                       - A dictionary of GET arguments received.\n\n    :param data:\n    :return:\n    \"\"\"\n\n    with open(os.path.abspath(os.path.join(os.path.dirname(__file__), 'static', 'index.html'))) as f:\n        content = f.read()\n        data['content'] = content.replace(\"{cache_buster}\", str(uuid.uuid4()))\n\n    return\n"))),(0,r.kt)("h5",{id:"details-3"},"Details:"),(0,r.kt)("p",null,"This Plugin runner type provides a ",(0,r.kt)("em",{parentName:"p"},"Data Panel")," which will be displayed to the front-end."),(0,r.kt)("p",null,"Pages will be served from ",(0,r.kt)("inlineCode",{parentName:"p"},"/unmanic/ui/data-panels?pluginId={plugin ID}"),"."),(0,r.kt)("p",null,"Pages will be provided with a GET parameter either ",(0,r.kt)("inlineCode",{parentName:"p"},"?theme=light")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"?theme=dark")," to assist with theme mapping with the main frontend."),(0,r.kt)("p",null,"Static assets stored in the plugins ",(0,r.kt)("a",{parentName:"p",href:"/docs/development/writing_plugins/introduction#directory-static-optional"},"static")," directory will\nmade available via the webserver at ",(0,r.kt)("inlineCode",{parentName:"p"},"/unmanic/panel/{plugin ID}/static/(.*)")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"frontend---plugin-api"},"Frontend - Plugin API"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"(since v0.2.0)")),(0,r.kt)("h5",{id:"executed-5"},"Executed:"),(0,r.kt)("p",null,"From front-end URL"),(0,r.kt)("h5",{id:"function-5"},"Function:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"render_plugin_api(data)")),(0,r.kt)("h5",{id:"provided-data-5"},"Provided data:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"content_type"))," ",(0,r.kt)("em",{parentName:"li"},"[string]")," - The content type to be set when writing back to the browser."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"content"))," ",(0,r.kt)("em",{parentName:"li"},"[string]")," - The content to print to the browser."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"path"))," ",(0,r.kt)("em",{parentName:"li"},"[string]")," - The path received after the '/unmanic/panel' path."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"uri"))," ",(0,r.kt)("em",{parentName:"li"},"[string]")," - The request uri."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"query"))," ",(0,r.kt)("em",{parentName:"li"},"[string]")," - The request query."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"arguments"))," ",(0,r.kt)("em",{parentName:"li"},"[dictionary]")," - A dictionary of GET arguments received."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"body"))," ",(0,r.kt)("em",{parentName:"li"},"[dictionary]")," - A dictionary of body arguments received.")),(0,r.kt)("h5",{id:"example-5"},"Example:"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"plugin.py"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"def render_plugin_api(data):\n    \"\"\"\n    Runner function - display a custom data panel in the frontend.\n\n    The 'data' object argument includes:\n        content_type                    - The content type to be set when writing back to the browser.\n        content                         - The content to print to the browser.\n        path                            - The path received after the '/unmanic/panel' path.\n        uri                             - The request uri.\n        query                           - The request query.\n        arguments                       - A dictionary of GET arguments received.\n        body                            - A dictionary of body arguments received.\n\n    :param data:\n    :return:\n    \"\"\"\n\n    # Store webhook content\n    settings = Settings()\n    profile_directory = settings.get_profile_directory()\n    time_now = time.time()\n    request_body = json.loads(data.get('body', '{}'))\n    with open(os.path.join(profile_directory, 'sonarr_webhook_{}.json'.format(time_now)), 'w') as outfile:\n        json.dump(request_body, outfile, indent=2)\n\n    return\n"))),(0,r.kt)("h5",{id:"details-4"},"Details:"),(0,r.kt)("p",null,"This Plugin runner type provides an API endpoint which may be used to receive webhook requests or function as a REST API for the plugin."),(0,r.kt)("p",null,"Pages will be served from ",(0,r.kt)("inlineCode",{parentName:"p"},"/unmanic/plugin_api/{plugin ID}"),"."))}g.isMDXComponent=!0}}]);