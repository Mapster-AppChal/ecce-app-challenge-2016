// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:widgets/Geoprocessing/setting/SettingDetail.html":'\x3cdiv\x3e\r\n\t\x3cdiv class\x3d"nav-pane jimu-float-leading" data-dojo-attach-point\x3d"navPaneNode"\x3e\x3c/div\x3e\r\n\t\x3cdiv class\x3d"setting-pane jimu-float-trailing" data-dojo-attach-point\x3d"settingPaneNode" style\x3d"display:none"\x3e\x3c/div\x3e\r\n\x3c/div\x3e\r\n'}});
define("dojo/_base/declare dojo/_base/lang dojo/_base/html dojo/_base/array dojo/on dojo/query dojo/text!./SettingDetail.html dijit/_WidgetBase dijit/_TemplatedMixin dijit/TitlePane jimu/dijit/ViewStack jimu/dijit/LoadingShelter jimu/dijit/Message ./ParamSetting ./ParamNodeList ./LayerOrder ./Options ../utils".split(" "),function(h,c,d,k,e,g,l,m,n,p,q,r,s,t,u,v,w,f){return h([m,n],{baseClass:"jimu-widget-setting-gp-detail",templateString:l,postCreate:function(){this.inherited(arguments);this.paramSetting=
new t({map:this.map,nls:this.nls});this.layerOrder=new v({nls:this.nls});this.options=new w({nls:this.nls});this.viewStack=new q({viewType:"dijit",views:[this.paramSetting,this.layerOrder,this.options]},this.settingPaneNode);this.loadingCover=new r({hidden:!0});this.loadingCover.placeAt(this.domNode);this.loadingCover.startup()},startup:function(){this.inherited(arguments);this.viewStack.startup()},setConfig:function(a){a=c.clone(a);this.hasInputParam=!0;this.config&&this.config.taskUrl===a.taskUrl?
(this.config=a,"serverInfo"in a?this._initNavPane():(this.loadingCover.show(),f.getServiceDescription(this.config.taskUrl).then(c.hitch(this,function(a){this.loadingCover.hide();this.config.serverInfo=a.serverInfo;this._initNavPane()})))):(this.config=a,this.loadingCover.show(),f.getServiceDescription(this.config.taskUrl).then(c.hitch(this,function(a){this.loadingCover.hide();this._changeTaskInfoToConfig(a);this._initNavPane()})))},getConfig:function(){if(!this.config.taskUrl)return new s({message:this.nls.serviceURLPlaceholder}),
!1;this.paramSetting.param&&this.paramSetting.acceptValue();this.layerOrder.acceptValue();this.options.acceptValue();this.config.inputParams=this.inputParamNodes.getConfig();this.config.outputParams=this.outputParamNodes.getConfig();return this.config},_changeTaskInfoToConfig:function(a){var b=this.config.taskUrl;this.config=a;this.config.taskUrl=b;this.config.isSynchronous="esriExecutionTypeSynchronous"===this.config.executionType?!0:!1;delete this.config.executionType;this.config.inputParams=[];
this.config.outputParams=[];k.forEach(a.parameters,function(a){a.label=a.displayName;delete a.displayName;"esriGPParameterDirectionInput"===a.direction?this.config.inputParams.push(a):this.config.outputParams.push(a);delete a.direction;a.visible=!0;a.required="esriGPParameterTypeRequired"===a.parameterType?!0:!1;delete a.parameterType;"GPFeatureRecordSetLayer"===a.dataType&&(a.featureSetMode="draw")},this);this.config.shareResults=f.allowShareResult(this.config);delete this.config.parameters},_initNavPane:function(){d.empty(this.navPaneNode);
this._createParamsSection("input");this._createParamsSection("output");this._createLayerOrderNode();this._createOptionsNode();this.layerOrder.setConfig(this.config);this.options.setConfig(this.config);this.paramSetting.setConfig(this.config)},_onParamChange:function(a,b){g(".jimu-state-active",this.domNode).removeClass("jimu-state-active");"input"===b?this._clearParamSelection("output"):this._clearParamSelection("input");this.paramSetting.param&&this.paramSetting.acceptValue();this.layerOrder.acceptValue();
this.options.acceptValue();"none"===d.getStyle(this.viewStack.domNode,"display")&&d.setStyle(this.viewStack.domNode,"display","");this.viewStack.switchView(this.paramSetting);this.paramSetting.setParam(a,b)},_setActiveLinkNode:function(a){g(".jimu-state-active",this.domNode).removeClass("jimu-state-active");this._clearParamSelection();d.addClass(a,"jimu-state-active")},_createParamsSection:function(a){var b=new u({params:"input"===a?this.config.inputParams:this.config.outputParams,nls:this.nls,direction:a});
this.own(e(b,"select-param",c.hitch(this,this._onParamChange)));"input"===a?this.inputParamNodes=b:this.outputParamNodes=b;(new p({title:this.nls[a],content:b.domNode,open:0<this.inputParamNodes.getSize()?"input"===a:"output"===a})).placeAt(this.navPaneNode);this.inputParamNodes&&0<this.inputParamNodes.getSize()?setTimeout(c.hitch(this,function(){this.inputParamNodes.selectDefault()}),100):this.outputParamNodes&&0<this.outputParamNodes.getSize()&&setTimeout(c.hitch(this,function(){this.outputParamNodes.selectDefault()}),
100)},_createLayerOrderNode:function(){var a=d.create("div",{"class":"link-action-node nav-pane-node layer-order-node",innerHTML:this.nls.layerOrder},this.navPaneNode);this.own(e(a,"click",c.hitch(this,function(){this.options.acceptValue();this.paramSetting.param&&this.paramSetting.acceptValue();this._setActiveLinkNode(a);this.layerOrder.setConfig(this.config);this.viewStack.switchView(this.layerOrder)})))},_createOptionsNode:function(){var a=d.create("div",{"class":"link-action-node nav-pane-node options-node",
innerHTML:this.nls.options},this.navPaneNode);this.own(e(a,"click",c.hitch(this,function(){this.paramSetting.param&&this.paramSetting.acceptValue();this.layerOrder.acceptValue();this._setActiveLinkNode(a);this.viewStack.switchView(this.options)})))},_clearParamSelection:function(a){("input"===a||"undefined"===typeof a)&&this.inputParamNodes&&0<this.inputParamNodes.getSize()&&this.inputParamNodes.clearSelection();("output"===a||"undefined"===typeof a)&&this.outputParamNodes&&0<this.outputParamNodes.getSize()&&
this.outputParamNodes.clearSelection()}})});