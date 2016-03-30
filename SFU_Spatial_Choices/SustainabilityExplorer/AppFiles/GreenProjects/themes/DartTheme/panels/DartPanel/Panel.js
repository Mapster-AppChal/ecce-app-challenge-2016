// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:themes/DartTheme/panels/DartPanel/Panel.html":'\x3cdiv\x3e\r\n  \x3cdiv class\x3d"title" data-dojo-attach-point\x3d"titleNode"\x3e\r\n    \x3cdiv class\x3d"widget-icon" data-dojo-attach-event\x3d"onclick:_onHandleClick"\x3e\r\n      \x3cimg class\x3d"icon" src\x3d"${config.icon}" /\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv class\x3d"title-label" data-dojo-attach-point\x3d"titleLabelNode"\x3e\r\n      ${config.label}\r\n    \x3c/div\x3e\r\n    \x3cdiv class\x3d"handle" data-dojo-attach-point\x3d"handleNode" data-dojo-attach-event\x3d"onclick:_onHandleClick"\x3e\x3c/div\x3e\r\n    \x3cdiv class\x3d"close-icon jimu-float-trailing" data-dojo-attach-point\x3d"closeNode" data-dojo-attach-event\x3d"onclick:_onCloseClick"\x3e\x3c/div\x3e\r\n    \x3cdiv class\x3d"min-icon jimu-float-trailing" data-dojo-attach-point\x3d"minNode" data-dojo-attach-event\x3d"onclick:_onMinClick"\x3e\x3c/div\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv class\x3d"panel-bg"\x3e\x3c/div\x3e\r\n  \x3cdiv class\x3d"panel-content" data-dojo-attach-point\x3d"containerNode"\x3e\x3c/div\x3e\r\n\x3c/div\x3e\r\n'}});
define("dojo/_base/declare dojo/_base/lang dojo/on dojo/dom-style dojo/dom-class dojo/dom-construct dojo/dom-geometry dojo/_base/fx dojo/dnd/move dojox/layout/ResizeHandle jimu/utils jimu/BaseWidgetPanel dijit/_TemplatedMixin dojo/text!./Panel.html".split(" "),function(n,g,k,e,h,p,f,m,q,r,l,s,t,u){return n([s,t],{baseClass:"dart-panel dart-bgcolor shadow",templateString:u,titleHeight:60,normalPosition:null,lastWindowState:null,openAnimation:"fadeIn",closeAnimation:"fadeOut",animationDuration:400,
moving:!1,postCreate:function(){this.inherited(arguments);this._makeOriginalBox()},startup:function(){this.inherited(arguments);this.panelManager.normalizePanel(this)},_makeOriginalBox:function(){this._originalBox={w:this.position.width||320,h:this.position.height||450,l:this.position.left||0,t:this.position.top||0}},makeMoveable:function(a,b,c){this.disableMoveable();var d=f.getMarginBox(jimuConfig.layoutId);d.l=d.l-b+c;d.w+=2*(b-c);this.moveable=new q.boxConstrainedMoveable(this.domNode,{box:d,
handle:a||this.handleNode,within:!0});this.own(k(this.moveable,"MoveStart",g.hitch(this,this.onMoveStart)));this.own(k(this.moveable,"Moving",g.hitch(this,this.onMoving)));this.own(k(this.moveable,"MoveStop",g.hitch(this,this.onMoveStop)))},disableMoveable:function(){this.moveable&&(this.moveable.destroy(),this.moveable=null)},makeResizable:function(){this.disableResizable();this.resizeHandle=(new r({targetId:this,minWidth:this._originalBox.w,minHeight:this._originalBox.h,activeResize:!1})).placeAt(this.domNode);
this.resizeHandle.startup()},disableResizable:function(){this.resizeHandle&&(this.resizeHandle.destroy(),this.resizeHandle=null)},onMoveStart:function(a){if(window.isRTL){var b=f.getMarginBox(jimuConfig.layoutId),c=f.getMarginBox(this.domNode),d=e.get(a.node,"right");e.set(a.node,"left",b.w-c.w-parseInt(d,10)+"px");e.set(a.node,"right","")}},onMoving:function(a){e.set(a.node,"opacity",0.9);this.moving=!0},onMoveStop:function(a){e.set(a.node,"opacity",1);a=f.getMarginBox(a.node);this.position.left=
a.l;this.position.top=a.t;setTimeout(g.hitch(this,function(){this.moving=!1}),500)},_getLayoutBox:function(){var a=jimuConfig.layoutId,a="map"===this.position.relativeTo?jimuConfig.mapId:jimuConfig.layoutId;return f.getMarginBox(a)},_onMinClick:function(a){"minimized"===this.windowState?this.panelManager.normalizePanel(this):this.panelManager.minimizePanel(this);a.stopPropagation()},_onCloseClick:function(a){this.panelManager.closePanel(this,"wipe");a.stopPropagation()},_onHandleClick:function(a){"minimized"===
this.windowState&&!this.moving&&this.panelManager.normalizePanel(this);a.stopPropagation()},_calculatePanelPosition:function(){"minimized"===this.windowState?this._minimize():this._normalize()},_minimize:function(){this.disableResizable();h.add(this.closeNode,"minimized");h.add(this.minNode,"minimized");h.add(this.handleNode,"minimized");m.animateProperty({node:this.domNode,properties:{width:{start:this.normalPosition.w,end:this.titleHeight},height:{start:this.normalPosition.h,end:this.titleHeight}},
duration:400}).play()},_normalize:function(){this._onResponsible();h.remove(this.closeNode,"minimized");h.remove(this.minNode,"minimized");h.remove(this.handleNode,"minimized");var a;this.normalPosition?m.animateProperty({node:this.domNode,properties:{width:{end:this.normalPosition.w,start:this.titleHeight},height:{end:this.normalPosition.h,start:this.titleHeight}},duration:400}).play():(a=g.clone(this.position),"undefined"===typeof a.width&&(a.width=320),"undefined"===typeof a.height&&(a.height=
450),a.borderRadiusStyle={borderTopLeftRadius:"4px",borderTopRightRadius:"4px",borderBottomLeftRadius:"4px",borderBottomRightRadius:"4px"},this._setPositionStyle(a))},_setPositionStyle:function(a){var b;this.position.zIndex&&(a.zIndex=this.position.zIndex);this.position.left=a.left;this.position.top=a.top;this.position.width=a.width;this.position.height=a.height;b=l.getPositionStyle(a);g.mixin(b,a.borderRadiusStyle);"auto"===b.zIndex&&(b.zIndex=0);e.set(this.domNode,b)},setPosition:function(a,b){var c,
d;b||(b="map"===a.relativeTo?this.map.id:window.jimuConfig.layoutId);d=f.getMarginBox(b);window.appInfo.isRunInMobile&&(a.left=0,a.top=0,a.width=d.w,a.height=d.h-220);a.left+a.width>d.w&&(c=Math.ceil((a.left+a.width-d.w)/d.w),d=Math.floor((a.left+a.width-d.w*c)/a.width),a.left=10*(c+1)+d*(a.width+10),a.top-=10*c);this.position=a;c=l.getPositionStyle(this.position);c.position="absolute";window.appInfo.isRunInMobile&&(c.width="100%");"auto"===c.zIndex&&(c.zIndex=0);p.place(this.domNode,b);e.set(this.domNode,
c);"minimized"===this.windowState&&this.panelManager.normalizePanel(this);this._onResponsible()},onNormalize:function(){this._calculatePanelPosition()},onMinimize:function(){this.normalPosition=f.position(this.domNode);this._calculatePanelPosition()},resize:function(a){if(a){var b,c=this.position.zIndex;this.position={left:a.l?a.l:this.position.left,top:a.t?a.t:this.position.top,width:a.w?a.w:this.position.width,height:a.h?a.h:this.position.height};b=l.getPositionStyle(this.position);b.zIndex=c;e.set(this.domNode,
b);this._onResponsible();this.inherited(arguments)}},_onResponsible:function(){window.appInfo.isRunInMobile?(this.disableMoveable(),this.disableResizable()):(this.makeResizable(),this.makeMoveable(this.handleNode,this.position.w,0.25*this.position.w))}})});