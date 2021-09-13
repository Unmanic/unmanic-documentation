"use strict";(self.webpackChunkunmanic_documentation=self.webpackChunkunmanic_documentation||[]).push([[382],{4157:function(e,o,t){t.r(o),t.d(o,{contentTitle:function(){return h},default:function(){return g},frontMatter:function(){return f},metadata:function(){return m},toc:function(){return w}});var s=t(2122),n=t(9756),r=t(7294),a=t(3905),l=t(3552),i=t(5697),c=t.n(i),d=t(412),u=function(e){function o(o){var t;return(t=e.call(this,o)||this).state={},t}(0,l.Z)(o,e);var s=o.prototype;return s.componentDidMount=function(){d.Z.canUseDOM&&this.setState({Flowchart:t(1677).Z})},s.render=function(){var e=this.state.Flowchart,o=this.props,t=o.chartCode;o.scale;return d.Z.canUseDOM&&e?r.createElement("div",{style:{overflowX:"scroll"}},r.createElement(e,{options:{x:0,y:0,"line-width":3,"line-length":50,"text-margin":10,"font-size":14,"font-color":"black","line-color":"black","element-color":"black",fill:"white","yes-text":"yes","no-text":"no","arrow-end":"block",scale:.6,symbols:{start:{"font-color":"red","element-color":"green","font-weight":"bold"},end:{"font-color":"red","element-color":"green","font-weight":"bold"}},flowstate:{runner:{fill:"pink"},external:{fill:"green"}}},chartCode:t})):r.createElement("div",null)},o}(r.Component);u.propTypes={chartCode:c().string.isRequired,scale:c().number};var k=u,p=["components"],f={title:"Task Flow",description:"Task Flow",id:"task_flow_chart"},h=void 0,m={unversionedId:"dashboard/task_flow_chart",id:"dashboard/task_flow_chart",isDocsHomePage:!1,title:"Task Flow",description:"Task Flow",source:"@site/docs/dashboard/task_flow_chart.mdx",sourceDirName:"dashboard",slug:"/dashboard/task_flow_chart",permalink:"/docs/dashboard/task_flow_chart",version:"current",frontMatter:{title:"Task Flow",description:"Task Flow",id:"task_flow_chart"},sidebar:"docs",previous:{title:"Installation on Unraid",permalink:"/docs/installation/unraid"},next:{title:"Dashboard Workers",permalink:"/docs/dashboard/workers"}},w=[],T={toc:w};function g(e){var o=e.components,t=(0,n.Z)(e,p);return(0,a.kt)("wrapper",(0,s.Z)({},T,t,{components:o,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This page explains the overall task flow of files handled by Unmanic."),(0,a.kt)("p",null,"Sections in pink will execute all ",(0,a.kt)("a",{parentName:"p",href:"/docs/plugins/overview"},"Plugins")," configured for that stage of the process."),(0,a.kt)(k,{chartCode:"\n    st=>start: Start\n    discoverFile=>operation: File discovered by Library Scanner or Event Monitor.\n    testFile=>condition: File Test Should it be added to Pending Tasks?|runner\n    fileNotAdded=>operation: File not added. to Pending Tasks queue.\n    pendingTasks=>operation: Added to Pending Tasks list.\n    workerCollects=>operation: Worker picks up file from Pending Tasks queue.\n    workerProcessTask=>operation: Worker loops over all Plugins and the default processes for the collected task|runner\n    workerCompletesTask=>operation: Worker completes task and places it into a Post Processor queue\n    postProcessorCollects=>operation: A single Post Processor process collects tasks completed by the workers\n    postProcessorProcessTask=>operation: The Post Processor loops over all Plugins and the default processes for the collected task|runner\n    taskSuccess=>condition: Were all tasks successful?\n    completedTasksFailed=>operation: Task added to history as failure.\n    completedTasksSuccess=>operation: Task added to history as success.\n    eIgnored=>end: End - File ignored\n    eFailed=>end: End - File failed at least one stage of being processed\n    eSuccess=>end: End - File successfully processed\n    \n    st->discoverFile->testFile\n    testFile(no,right)->fileNotAdded->eIgnored\n    testFile(yes)->pendingTasks\n    pendingTasks->workerCollects->workerProcessTask->workerCompletesTask\n    workerCompletesTask->postProcessorCollects->postProcessorProcessTask->taskSuccess\n    taskSuccess(no,right)->completedTasksFailed->eFailed\n    taskSuccess(yes,bottom)->completedTasksSuccess->eSuccess\n    \n  ",mdxType:"Flowchart"}))}g.isMDXComponent=!0}}]);