// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"widgets/Measurement/setting/_build-generate_module":function(){define(["dojo/text!./Setting.html","dojo/text!./css/style.css","dojo/i18n!./nls/strings"],function(){})},"url:widgets/Measurement/setting/Setting.html":'\x3cdiv style\x3d"width:100%;height:100%;"\x3e\r\n    \x3ctable class\x3d"settings-section"\x3e\r\n      \x3ctbody\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd\x3e${nls.defaultAreaUnit}\x3c/td\x3e\r\n          \x3ctd\x3e\r\n            \x3cdiv\x3e             \r\n              \x3cselect style\x3d"margin-left: 10px;" data-dojo-attach-point\x3d"selectAreaUnit" data-dojo-type\x3d"dijit/form/Select"\x3e\r\n                \x3coption value\x3d"esriAcres" selected\x3d"selected"\x3e${nls.acres}\x3c/option\x3e\r\n                \x3coption value\x3d"esriSquareMiles"\x3e${nls.sqMiles}\x3c/option\x3e\r\n                \x3coption value\x3d"esriSquareKilometers"\x3e${nls.sqKilometers}\x3c/option\x3e\r\n                \x3coption value\x3d"esriHectares"\x3e${nls.hectares}\x3c/option\x3e\r\n                \x3coption value\x3d"esriSquareYards"\x3e${nls.sqYards}\x3c/option\x3e\r\n                \x3coption value\x3d"esriSquareFeet"\x3e${nls.sqFeet}\x3c/option\x3e\r\n                \x3coption value\x3d"esriSquareMeters"\x3e${nls.sqMeters}\x3c/option\x3e\r\n              \x3c/select\x3e\r\n            \x3c/div\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd\x3e${nls.defaultLengthUnit}\x3c/td\x3e\r\n          \x3ctd\x3e\r\n            \x3cdiv\x3e             \r\n              \x3cselect style\x3d"margin-left: 10px;" data-dojo-attach-point\x3d"selectLengthUnit" data-dojo-type\x3d"dijit/form/Select"\x3e\r\n                \x3coption value\x3d"esriMiles" selected\x3d"selected"\x3e${nls.miles}\x3c/option\x3e\r\n                \x3coption value\x3d"esriKilometers"\x3e${nls.kilometers}\x3c/option\x3e\r\n                \x3coption value\x3d"esriFeet"\x3e${nls.feet}\x3c/option\x3e\r\n                \x3coption value\x3d"esriMeters"\x3e${nls.meters}\x3c/option\x3e\r\n                \x3coption value\x3d"esriYards"\x3e${nls.yards}\x3c/option\x3e\r\n                \x3coption value\x3d"esriNauticalMiles"\x3e${nls.nauticalMiles}\x3c/option\x3e\r\n              \x3c/select\x3e\r\n            \x3c/div\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n      \x3c/tbody\x3e\r\n    \x3c/table\x3e\r\n\x3c/div\x3e\r\n',
"url:widgets/Measurement/setting/css/style.css":".jimu-widget-measurement-setting{margin:0; padding:0; font-size:15px;}.jimu-widget-measurement-setting .dijitArrowButtonContainer{width: 17px;}.jimu-widget-measurement-setting .dijitSelect{height: 30px; width: 100%;}.jimu-widget-measurement-setting .zoom-scale-table{margin-top:12px;}.jimu-widget-measurement-setting .setting-table \x3e thead \x3e tr \x3e th,.jimu-widget-measurement-setting .setting-table \x3e tbody \x3e tr \x3e td{height:40px; line-height:40px; vertical-align:middle;}.jimu-widget-measurement-setting .input-table \x3e tbody \x3e tr \x3e .first{width:auto; text-align: right; padding-right:15px;}.jimu-widget-measurement-setting .input-table \x3e tbody \x3e tr \x3e .second{width:200px;}.jimu-widget-measurement-setting .input-table \x3e tbody \x3e tr \x3e .third{width:35px;}",
"*now":function(b){b(['dojo/i18n!*preload*widgets/Measurement/setting/nls/Setting*["ar","cs","da","de","en","el","es","et","fi","fr","he","it","ja","ko","lt","lv","nb","nl","pl","pt-br","pt-pt","ro","ru","sv","th","tr","zh-cn","vi","zh-hk","zh-tw","ROOT"]'])}}});
define("dojo/_base/declare dojo/_base/lang dojo/Deferred dijit/_WidgetsInTemplateMixin jimu/BaseWidgetSetting jimu/portalUtils esri/units dijit/form/Select".split(" "),function(b,e,f,g,h,k,c){return b([h,g],{baseClass:"jimu-widget-measurement-setting",startup:function(){this.inherited(arguments);this.config.measurement||(this.config.measurement={});this.setConfig(this.config)},_processConfig:function(a){var d=new f;a.defaultLengthUnit&&a.defaultAreaUnit?d.resolve(a):k.getUnits(this.appConfig.portalUrl).then(e.hitch(this,
function(b){a.defaultAreaUnit="english"===b?c.SQUARE_MILES:c.SQUARE_KILOMETERS;a.defaultLengthUnit="english"===b?c.MILES:c.KILOMETERS;d.resolve(a)}));return d.promise},setConfig:function(a){this.config=a;this._processConfig(a.measurement).then(e.hitch(this,function(a){a.defaultAreaUnit?this.selectAreaUnit.set("value",a.defaultAreaUnit):this.selectAreaUnit.set("value","esriAcres");a.defaultLengthUnit?this.selectLengthUnit.set("value",a.defaultLengthUnit):this.selectLengthUnit.set("value","esriMiles")}))},
getConfig:function(){this.config.measurement.defaultAreaUnit=this.selectAreaUnit.value;this.config.measurement.defaultLengthUnit=this.selectLengthUnit.value;return this.config}})});