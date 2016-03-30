// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:widgets/DistrictLookup/setting/LayerChooser.html":'\x3cdiv style\x3d"width: 100%; height: 100%;"\x3e\r\n    \x3cdiv class\x3d"esriCTLayerSelectorDiv"\x3e\r\n        \x3cdiv class\x3d"esriCTLayerChooserContainer row"\x3e\r\n            \x3cdiv class\x3d"esriCTlabel esriCTLabelContainer esriCTLayerChooserLabel" title\x3d"${nls.layerSelector.selectPolygonLayerLabel}"\x3e\r\n                ${nls.layerSelector.selectPolygonLayerLabel}\r\n            \x3c/div\x3e\r\n            \x3cdiv class\x3d"esriCTLayerChooserField"\x3e\r\n                \x3cdiv data-dojo-attach-point\x3d"itemSelectDiv"\x3e\r\n                \x3c/div\x3e\r\n                \x3cdiv class\x3d"esriCTHint"\x3e\r\n                    ${nls.layerSelector.selectPolygonLayerHintText}\r\n                \x3c/div\x3e\r\n            \x3c/div\x3e\r\n        \x3c/div\x3e\r\n        \x3cdiv class\x3d"esriCTLayerChooserContainer row"\x3e\r\n            \x3cdiv class\x3d"esriCTlabel esriCTLabelContainer esriCTLayerChooserLabel" title\x3d"${nls.layerSelector.selectRelatedPointLayerLabel}"\x3e\r\n                ${nls.layerSelector.selectRelatedPointLayerLabel}\r\n            \x3c/div\x3e\r\n            \x3cdiv class\x3d"esriCTLayerChooserField"\x3e\r\n                \x3cselect data-dojo-attach-point\x3d"relationshipSelect" style\x3d"width: 232px;" data-dojo-type\x3d"dijit/form/Select"\x3e\r\n                \x3c/select\x3e\r\n                \x3cdiv class\x3d"esriCTHint"\x3e\r\n                    ${nls.layerSelector.selectRelatedPointLayerHintText}\r\n                \x3c/div\x3e\r\n            \x3c/div\x3e\r\n        \x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv data-dojo-attach-point\x3d"buttonsDiv" class\x3d"buttonsDiv"\x3e\r\n        \x3cdiv class\x3d"button-container button-container-absolute" style\x3d"padding: 0px;"\x3e\r\n            \x3cdiv class\x3d"jimu-btn jimu-float-trailing jimu-leading-margin1" data-dojo-attach-point\x3d"cancelButton"\x3e\r\n                ${nls.layerSelector.cancelButton}\x3c/div\x3e\r\n            \x3cdiv class\x3d"jimu-btn jimu-float-trailing jimu-leading-margin1 jimu-state-disabled"\r\n                data-dojo-attach-point\x3d"okButton"\x3e\r\n                ${nls.layerSelector.okButton}\x3c/div\x3e\r\n        \x3c/div\x3e\r\n    \x3c/div\x3e\r\n\x3c/div\x3e\r\n'}});
define("dojo/_base/declare jimu/BaseWidgetSetting dijit/_WidgetsInTemplateMixin dojo/_base/lang dojo/_base/array dojo/promise/all dojo/Deferred dojo/on dojo/dom-class dojo/text!./LayerChooser.html jimu/dijit/LayerChooserFromMap jimu/dijit/LayerChooserFromMapWithDropbox esri/request jimu/dijit/LoadingIndicator jimu/dijit/Message dojo/domReady!".split(" "),function(m,n,p,e,h,q,r,l,b,s,k,t,u,v,w){return m([n,p],{baseClass:"jimu-widget-districtlookup-setting",templateString:s,selectRouteURL:null,agolFlag:!1,
serviceFlag:!1,startup:function(){this.inherited(arguments)},postCreate:function(){this._createPrecinctChooserArgs();this.own(l(this.cancelButton,"click",e.hitch(this,function(a){this.onCancleClick(a)})));this.own(l(this.okButton,"click",e.hitch(this,this._onOKButtonClicked)));this._initLoading()},_onNextButtonClicked:function(){b.contains(this.btnNext,"jimu-state-disabled")||(b.add(this.itemSelectDiv,"esriCTHidden"),b.remove(this.relatedLayerSelectDiv,"esriCTHidden"),b.add(this.btnNext,"esriCTHidden"),
b.remove(this.btnBack,"esriCTHidden"),""===this.relationshipSelect.value?(this._errorMessage(this.nls.layerSelector.polygonLayerNotHavingRelatedLayer),b.add(this.okButton,"jimu-state-disabled")):b.remove(this.okButton,"jimu-state-disabled"))},_onOKButtonClicked:function(){var a;if(!b.contains(this.okButton,"jimu-state-disabled"))if(this.precinctLayerInfo){if(""===this.relationshipSelect.value)return this._errorMessage(this.nls.layerSelector.errorInSelectingRelatedLayer),!1;a={polygonLayerInfo:this.precinctLayerInfo,
relatedLayerInfo:this.pollingPlaceInfo[this.relationshipSelect.value]};this.onOkClick(a)}else return this._errorMessage(this.nls.layerSelector.errorInSelectingPolygonLayer),!1},_createPrecinctChooserArgs:function(){var a,b;a=k.createFeaturelayerFilter(["polygon"],!1);b=k.createQueryableLayerFilter();a={multiple:!1,createMapResponse:this.map.webMapResponse,showLayerTypes:["FeatureLayer"],filter:k.andCombineFilters([a,b])};a=new k(a);a=new t({layerChooser:a});a.placeAt(this.itemSelectDiv);a.startup();
this.own(l(a,"selection-change",e.hitch(this,this._createPollingPlaceLayerOptions)))},_initLoading:function(){this.loading=new v({hidden:!0});this.loading.placeAt(this.domNode);this.loading.startup()},onOkClick:function(a){return a},onCancleClick:function(a){return a},_createPollingPlaceLayerOptions:function(a){var g=[],d;if(a&&0<a.length){this.precinctLayer=a[0];this.precinctLayerInfo={url:this.precinctLayer.url,geometryType:"esriGeometryPolygon"};this.precinctLayerInfo.layerId=this.precinctLayer.layerId?
this.precinctLayer.layerId:this.precinctLayer.url.substr(this.precinctLayer.url.lastIndexOf("/")+1,this.precinctLayer.url.length);var c=this.precinctLayer.url.substr(0,this.precinctLayer.url.lastIndexOf("/")+1);this.precinctLayerInfo.baseURL=c;this.precinctLayerInfo=e.mixin(this.precinctLayerInfo,this._getLayerDetailsFromMap(c,this.precinctLayerInfo.layerId));this.pollingPlaceInfo=[];d=[];h.forEach(this.precinctLayer.relationships,e.hitch(this,function(a){var b=new r;d.push(b);u({url:c+a.relatedTableId,
content:{f:"json"},handleAs:"json"}).then(e.hitch(this,function(a){b.resolve(a)}),e.hitch(this,function(){b.resolve()}))}));q(d).then(e.hitch(this,function(a){for(var d,f=0;f<a.length;f++)a[f]&&"esriGeometryPoint"===a[f].geometryType&&(d={url:c+a[f].id,baseURL:c,relationShipId:this.precinctLayer.relationships[f].id,layerId:a[f].id,geometryType:"esriGeometryPoint"},d=e.mixin(d,this._getLayerDetailsFromMap(c,a[f].id)),d.title&&(this.pollingPlaceInfo[g.length]=d,g.push({label:this.pollingPlaceInfo[g.length].title,
value:g.length})));0<g.length?(this.relationshipSelect.options.length=0,g[0].selected=!0,this.relationshipSelect.addOption(g),b.remove(this.okButton,"jimu-state-disabled")):this._resetRelatedLayerSelector()}),e.hitch(this,function(){this._resetRelatedLayerSelector()}))}else this._resetRelatedLayerSelector()},_resetRelatedLayerSelector:function(){this.relationshipSelect.value="";this.relationshipSelect.options.length=0;this.relationshipSelect.addOption({value:"",label:"",selected:!0});b.add(this.okButton,
"jimu-state-disabled");this._errorMessage(this.nls.layerSelector.polygonLayerNotHavingRelatedLayer)},_getLayerDetailsFromMap:function(a,b){var d={};this.map&&(this.map.webMapResponse&&this.map.webMapResponse.itemInfo&&this.map.webMapResponse.itemInfo.itemData&&this.map.webMapResponse.itemInfo.itemData.operationalLayers)&&h.forEach(this.map.webMapResponse.itemInfo.itemData.operationalLayers,e.hitch(this,function(c){c.layerObject&&("ArcGISMapServiceLayer"===c.layerType||"ArcGISTiledMapServiceLayer"===
c.layerType?a.substring(0,a.length-1)===c.url&&(h.forEach(c.resourceInfo.layers,e.hitch(this,function(a){a.id===parseInt(b,10)&&(d.title=a.name)})),h.forEach(c.layers,e.hitch(this,function(a){a.id===parseInt(b,10)&&(a.name&&(d.title=a.name),d.popupInfo=a.popupInfo,a.layerDefinition&&a.layerDefinition.definitionExpression&&(d.definitionExpression=a.layerDefinition.definitionExpression))}))):c.url.replace(/.*?:\/\//g,"")===(a+b).replace(/.*?:\/\//g,"")&&(d.title=c.title,d.popupInfo=c.popupInfo,c.layerDefinition&&
c.layerDefinition.definitionExpression&&(d.definitionExpression=c.layerDefinition.definitionExpression)))}));return d},_onBtnBackClicked:function(){b.remove(this.itemSelectDiv,"esriCTHidden");b.add(this.relatedLayerSelectDiv,"esriCTHidden");b.remove(this.btnNext,"esriCTHidden");b.add(this.btnBack,"esriCTHidden")},_errorMessage:function(a){(new w({message:a})).message=a}})});