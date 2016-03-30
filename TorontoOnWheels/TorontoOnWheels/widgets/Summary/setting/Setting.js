// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"widgets/Summary/setting/_build-generate_module":function(){define(["dojo/text!./Setting.html","dojo/text!./css/style.css","dojo/i18n!./nls/strings"],function(){})},"url:widgets/Summary/setting/Setting.html":'\x3cdiv style\x3d"width:100%;height:100%;"\x3e\r\n  \x3cdiv class\x3d"filter-group"\x3e\r\n    \x3cspan class\x3d"label"\x3e${nls.selectLayer}: \x3c/span\x3e\r\n    \x3cdiv data-dojo-attach-point\x3d"opLayers"\x3e\x3c/div\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv class\x3d"checkbox-list-holder filter-group"\x3e\r\n    \x3cspan class\x3d"label"\x3e${nls.filterField}: \x3c/span\x3e\r\n    \x3cselect data-dojo-type\x3d"dijit/form/Select" data-dojo-attach-point\x3d"filterSelect"\x3e\r\n    \x3c/select\x3e\r\n  \x3c/div\x3e\r\n  \x3chr/\x3e\r\n  \x3cdiv class\x3d"summary-section" data-dojo-attach-point\x3d"summarySection" onselectstart\x3d"return false;"\x3e\r\n    \x3cdiv class\x3d"btn-add-section" data-dojo-attach-point\x3d"btnAddSummaryField"\x3e\r\n      \x3cspan class\x3d"btn-add-icon"\x3e\x3c/span\x3e\r\n      \x3cspan class\x3d"btn-add-label"\x3e${nls.addField}\x3c/span\x3e\r\n    \x3c/div\x3e\r\n    \x3cbr/\x3e\r\n    \x3cdiv data-dojo-attach-point\x3d"summaryTable" data-dojo-type\x3d"jimu/dijit/SimpleTable" data-dojo-props\x3d\'fields:[{name:"type",title:"${nls.type}","class":"label",type:"empty"},{name:"field",title:"${nls.field}","class":"label",type:"empty"},{name:"label",title:"${nls.label}","class":"label",type:"empty"},{name:"actions",title:"${nls.actions}","class":"actions",type:"actions",actions:["up","down","delete"]}]\'\x3e\x3c/div\x3e\r\n  \x3c/div\x3e\r\n  \x3chr/\x3e\r\n  \x3cdiv class\x3d"common-group"\x3e\r\n    \x3cspan class\x3d"label"\x3e ${nls.showFeatureCount}:\x3c/span\x3e\r\n    \x3cinput data-dojo-attach-point\x3d"showFeatureCount" data-dojo-type\x3d"dijit/form/CheckBox" /\x3e\r\n    \x3cspan style\x3d"padding-left:20px;"\x3e\r\n            \x3cspan class\x3d"label"\x3e ${nls.featureCountLabel}:\x3c/span\x3e\r\n    \x3cinput data-dojo-attach-point\x3d"featureCountLabel" data-dojo-type\x3d"dijit/form/ValidationTextBox" /\x3e\r\n    \x3c/span\x3e\r\n  \x3c/div\x3e\r\n  \x3cbr/\x3e\r\n  \x3cdiv class\x3d"common-group"\x3e\r\n    \x3cspan class\x3d"label"\x3e ${nls.displayCluster}:\x3c/span\x3e\r\n    \x3cinput data-dojo-attach-point\x3d"displayCluster" data-dojo-type\x3d"dijit/form/CheckBox" /\x3e\r\n  \x3c/div\x3e\r\n  \x3cbr/\x3e\r\n\x3c/div\x3e\r\n',
"url:widgets/Summary/setting/css/style.css":".filter-group {padding: 5px; margin-bottom: 10px;}.filter-group \x3e .label {display: inline-block; min-width: 150px; padding-right: 10px;}.filter-group \x3e div {display: inline-block;}.filter-group .dijitCheckBox, .claro .dijitToggleButton .dijitCheckBoxIcon {margin-right: 10px;}#calculations {padding-left: 50px;}#calculations .filter-group \x3e .label {text-align: right; padding-right: 15px; vertical-align: top;}.jimu-widget-summary-setting .btn-add-section {display: inline-block; overflow: hidden; height: 24px; margin-left: 1px; margin-bottom: 3px; cursor: pointer; font-size: 13px; color: #538ec8; margin-top: 8px;}.jimu-widget-summary-setting .btn-add-section .btn-add-icon {float: left; height: 100%; width: 14px; background-repeat: no-repeat; background-position: center center; background-image: url(images/add.png);}.jimu-widget-summary-setting .btn-add-section .btn-add-label {float: left; height: 100%; line-height: 24px; vertical-align: middle; margin-left: 7px; text-decoration: underline;}",
"*now":function(g){g(['dojo/i18n!*preload*widgets/Summary/setting/nls/Setting*["ar","cs","da","de","en","el","es","et","fi","fr","he","it","ja","ko","lt","lv","nb","nl","pl","pt-br","pt-pt","ro","ru","sv","th","tr","zh-cn","vi","zh-hk","zh-tw","ROOT"]'])}}});
define("dojo/_base/declare dojo/_base/array dojo/_base/html dojo/_base/lang dojo/dom-style dojo/on dojo/query dijit/_WidgetsInTemplateMixin dijit/form/Select dijit/form/ValidationTextBox jimu/BaseWidgetSetting jimu/dijit/Message jimu/dijit/SimpleTable".split(" "),function(g,e,h,d,p,k,l,q,m,r,s,n){return g([s,q],{baseClass:"jimu-widget-summary-setting",summaryLayer:null,summaryFields:null,filterFields:null,layerFields:null,summaryTypes:null,postCreate:function(){this.inherited(arguments);this.summaryTypes=
[{value:"SUM",label:this.nls.sum},{value:"AVG",label:this.nls.avg},{value:"MIN",label:this.nls.min},{value:"MAX",label:this.nls.max}];this.own(k(this.btnAddSummaryField,"click",d.hitch(this,this._addSummaryFieldRow)));this.own(k(this.summaryTable,"row-delete",d.hitch(this,function(a){a.select&&(a.select.destroy(),delete a.select)})));this.own(k(this.showFeatureCount,"change",d.hitch(this,function(){this.showFeatureCount.checked?this.featureCountLabel.set("readOnly",!1):this.featureCountLabel.set("readOnly",
!0)})));this.setConfig(this.config);this._setLayers()},_setLayers:function(){var a=this.map.itemInfo.itemData.operationalLayers,b=[];a&&0===a.length?new n({message:this.nls.missingLayerInWebMap}):(e.forEach(a,d.hitch(this,function(a){if("ArcGISFeatureLayer"===a.layerType)if(a.featureCollection)for(var f=0;f<a.featureCollection.layers.length;f++){var d=a.featureCollection.layers[f].layerObject,e=a.title;0<f&&(e+=": "+f);b.push({label:e,value:d.id})}else a.layerObject&&b.push({label:a.title,value:a.id})})),
0===b.length?(p.set(this.btnAddSummaryField,"display","none"),new n({message:this.nls.missingLayerInWebMap})):(this.selectLayer=(new m({name:"selectLayer",options:b})).placeAt(this.opLayers),a=this.config.summaryLayer.id?this.config.summaryLayer.id:b[0].value,this.selectLayer.set("value",a),this._createFeatureLayer(a),this.selectLayer.on("change",d.hitch(this,function(a){this._createFeatureLayer(a)}))))},setConfig:function(a){this.config=a;this.showFeatureCount.set("checked",a.showFeatureCount);if(a.showFeatureCount){var b=
this.nls.count;a.featureCountLabel&&(b=a.featureCountLabel);this.featureCountLabel.set("value",b)}else this.featureCountLabel.set("readOnly",!0);this.displayCluster.set("checked",a.displayCluster)},_loadSummaryConfig:function(){this.config.summaryLayer&&(this.summaryFields=[],e.forEach(this.config.summaryLayer.fields,d.hitch(this,function(a){this.summaryFields.push({type:a.type,label:a.label,field:a.field})})))},_createFeatureLayer:function(a){e.some(this.map.itemInfo.itemData.operationalLayers,d.hitch(this,
function(b){if("ArcGISFeatureLayer"===b.layerType)if(b.featureCollection)for(var c=0;c<b.featureCollection.layers.length;c++){var f=b.featureCollection.layers[c].layerObject;if(f.id===a)return this.summaryLayer=f,!0}else if(b.layerObject&&b.id===a)return this.summaryLayer=b.layerObject,!0}));this._populateSummaryTable(this.summaryLayer)},_populateSummaryTable:function(a){var b=a.fields;this.filterFields=[];this.filterFields.push({label:"-",value:""});this.layerFields=[];e.forEach(b,d.hitch(this,function(b){b.name!==
a.objectIdField&&(this.filterFields.push({label:b.alias,value:b.name}),("esriFieldTypeInteger"===b.type||"esriFieldTypeDouble"===b.type||"esriFieldTypeSmallInteger"===b.type)&&this.layerFields.push({label:b.alias,value:b.name}))}));this._createFilter();this._loadSummaryConfig();this._setSummaryTable()},_setSummaryTable:function(){this.summaryTable.clear();this.config.summaryLayer&&this.config.summaryLayer.url===this.selectLayer.value&&e.forEach(this.config.summaryLayer.fields,d.hitch(this,function(a){this._populateSummaryTableRow(a)}))},
_populateSummaryTableRow:function(a){var b=this.summaryTable.addRow({});b.success&&b.tr&&(b=b.tr,this._addSummaryTypes(b),this._addSummaryFields(b),this._addSummaryLabel(b),b.selectTypes.set("value",a.type),b.selectFields.set("value",a.field),b.labelText.set("value",a.label))},_setSelectedIndex:function(a,b){e.forEach(a.options,function(c,f){c.value===b&&a.set("selectedIndex",f)})},_createFilter:function(){var a=d.clone(this.filterFields);this.filterSelect.set("options",a);null!==this.config.summaryLayer&&
this.filterSelect.set("value",this.config.summaryLayer.filterField)},_addSummaryFieldRow:function(){var a=this.summaryTable.addRow({});a.success&&a.tr&&(a=a.tr,this._addSummaryTypes(a),this._addSummaryFields(a),this._addSummaryLabel(a))},_addSummaryTypes:function(a){var b=d.clone(this.summaryTypes),c=l(".simple-table-cell",a)[0];c&&(h.setStyle(c,"verticalAlign","middle"),b=new m({style:{width:"100%",height:"30px"},options:b}),b.placeAt(c),b.startup(),a.selectTypes=b)},_addSummaryFields:function(a){var b=
d.clone(this.layerFields),c=l(".simple-table-cell",a)[1];h.setStyle(c,"verticalAlign","middle");b=new m({style:{width:"100%",height:"30px"},options:b});b.placeAt(c);b.startup();a.selectFields=b},_addSummaryLabel:function(a){var b=l(".simple-table-cell",a)[2];h.setStyle(b,"verticalAlign","middle");var c=new r({style:{width:"100%",height:"30px"}});c.placeAt(b);c.startup();a.labelText=c},getConfig:function(){this.config.showFeatureCount=this.showFeatureCount.checked;this.config.featureCountLabel=this.featureCountLabel.value;
this.config.displayCluster=this.displayCluster.checked;var a={},b=this.summaryTable.getRows(),c=[];e.forEach(b,d.hitch(this,function(a){c.push({type:a.selectTypes.value,label:a.labelText.value,field:a.selectFields.value})}));d.mixin(a,{fields:c});this.selectLayer&&e.forEach(this.selectLayer.options,d.hitch(this,function(b){b.selected&&d.mixin(a,{id:b.value,name:b.label,filterField:this.filterSelect.valueNode.value,url:b.value})}));this.config.summaryLayer=a;return this.config}})});