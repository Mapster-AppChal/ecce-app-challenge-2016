// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:widgets/Geoprocessing/setting/ParamNode.html":'\x3cdiv class\x3d"link-action-node param-node" data-dojo-attach-point\x3d"displayNode"\x3e\r\n  \x3cdiv\x3e\r\n    \x3cspan\x3e${nls_name}:\x3c/span\x3e\r\n    \x3cspan style\x3d"margin: 2px"\x3e${param_name}\x3c/span\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv\x3e\r\n    \x3cspan\x3e${nls_type}:\x3c/span\x3e\r\n    \x3cspan style\x3d"margin: 2px"\x3e${param_dataType}\x3c/span\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv\x3e\r\n    \x3cspan\x3e${nls_required}:\x3c/span\x3e\r\n    \x3cspan style\x3d"margin: 2px"\x3e${param_required}\x3c/span\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv class\x3d"action-group dojoDndHandle" data-dojo-attach-point\x3d"actionNode"\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e',
"url:widgets/Geoprocessing/setting/ParamNodeAvatar.html":'\x3cspan class\x3d"avatarText"\x3e${param_name}\x3c/span\x3e'}});
define("dojo/_base/declare dojo/_base/lang dojo/string dojo/aspect dojo/on dojo/dom-class dojo/dom dojo/Evented dojo/dnd/Source dojo/dom-construct dijit/_WidgetBase dojo/text!./ParamNode.html dojo/text!./ParamNodeAvatar.html".split(" "),function(h,d,f,k,l,e,m,n,p,g,q,r,s){return h([q,n],{params:void 0,nls:void 0,direction:void 0,postCreate:function(){this.inherited(arguments);this.dndObj=new p(this.domNode,{singular:!0,withHandles:!0,accept:[this.direction],creator:d.hitch(this,this._paramNodeCreator)});
this.dndObj.insertNodes(!1,this.params);this.own(l(this.domNode,"click",d.hitch(this,this.select)));k.after(this.dndObj,"onDrop",d.hitch(this,this.handleDrop))},_paramNodeCreator:function(a,b){return{node:"avatar"===b?g.toDom(f.substitute(s,{param_name:a.name})):g.toDom(f.substitute(r,{nls_name:this.nls.name,nls_type:this.nls.type,nls_required:this.nls.required,param_name:a.name,param_dataType:a.dataType,param_required:a.required})),data:a,type:[this.direction]}},getSize:function(){return this.params.length},
selectDefault:function(){var a=this.dndObj.getAllNodes()[0],b=this.dndObj.getItem(a.id);e.add(a,"dojoDndItemAnchor");this.emit("select-param",b.data,this.direction)},select:function(a){var b=a.target||a.srcElement,c;this.dndObj.getAllNodes().forEach(function(a){m.isDescendant(b,a)?(c=a,e.add(a,"dojoDndItemAnchor")):e.remove(a,"dojoDndItemAnchor")});c&&(a=this.dndObj.getItem(c.id),this.emit("select-param",a.data,this.direction))},clearSelection:function(){this.dndObj.getAllNodes().forEach(function(a){e.remove(a,
"dojoDndItemAnchor")})},handleDrop:function(a,b){var c=b[1][0];this.dndObj.getAllNodes().forEach(function(a){a.id!==c.id&&e.remove(a,"dojoDndItemAnchor")});var d=this.dndObj.getItem(c.id);this.emit("select-param",d.data,this.direction)},getConfig:function(){var a=[];this.dndObj.getAllNodes().forEach(function(b){b=this.dndObj.getItem(b.id);a.push(b.data)},this);return a}})});