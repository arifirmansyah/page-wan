(function framework7ComponentLoader(e,t){void 0===t&&(t=!0);document;var u=window,M=e.$,T=(e.Template7,e.utils),n=(e.device,e.support,e.Class),i=(e.Modal,e.ConstructorMethods);e.ModalMethods;var a=function(p){function e(e,t){void 0===t&&(t={}),p.call(this,t,[e]);var n,i,a,o=this;if(o.params=T.extend({},e.params.picker,t),o.params.containerEl&&0===(n=M(o.params.containerEl)).length)return o;function r(){o.resizeCols()}function l(){o.open()}function s(e){e.preventDefault()}function c(e){var t=M(e.target);o.isPopover()||o.opened&&!o.closing&&(t.closest('[class*="backdrop"]').length||(i&&0<i.length?t[0]!==i[0]&&0===t.closest(".sheet-modal").length&&o.close():0===M(e.target).closest(".sheet-modal").length&&o.close()))}return o.params.inputEl&&(i=M(o.params.inputEl)),i&&(a=i.parents(".view").length&&i.parents(".view")[0].f7View),a||(a=e.views.main),T.extend(o,{app:e,$containerEl:n,containerEl:n&&n[0],inline:n&&0<n.length,needsOriginFix:e.device.ios||0<=u.navigator.userAgent.toLowerCase().indexOf("safari")&&u.navigator.userAgent.toLowerCase().indexOf("chrome")<0&&!e.device.android,cols:[],$inputEl:i,inputEl:i&&i[0],initialized:!1,opened:!1,url:o.params.url,view:a}),T.extend(o,{attachResizeEvent:function(){e.on("resize",r)},detachResizeEvent:function(){e.off("resize",r)},attachInputEvents:function(){o.$inputEl.on("click",l),o.params.inputReadOnly&&o.$inputEl.on("focus mousedown",s)},detachInputEvents:function(){o.$inputEl.off("click",l),o.params.inputReadOnly&&o.$inputEl.off("focus mousedown",s)},attachHtmlEvents:function(){e.on("click",c)},detachHtmlEvents:function(){e.off("click",c)}}),o.init(),o}return p&&(e.__proto__=p),((e.prototype=Object.create(p&&p.prototype)).constructor=e).prototype.initInput=function(){this.$inputEl&&this.params.inputReadOnly&&this.$inputEl.prop("readOnly",!0)},e.prototype.resizeCols=function(){var e=this;if(e.opened)for(var t=0;t<e.cols.length;t+=1)e.cols[t].divider||(e.cols[t].calcSize(),e.cols[t].setValue(e.cols[t].value,0,!1))},e.prototype.isPopover=function(){var e=this,t=e.app,n=e.modal,i=e.params;if("sheet"===i.openIn)return!1;if(n&&"popover"!==n.type)return!1;if(!e.inline&&e.inputEl){if("popover"===i.openIn)return!0;if(t.device.ios)return!!t.device.ipad;if(768<=t.width)return!0}return!1},e.prototype.formatValue=function(){var e=this,t=e.value,n=e.displayValue;return e.params.formatValue?e.params.formatValue.call(e,t,n):t.join(" ")},e.prototype.setValue=function(e,t){var n=this,i=0;if(0===n.cols.length)return n.value=e,void n.updateValue(e);for(var a=0;a<n.cols.length;a+=1)n.cols[a]&&!n.cols[a].divider&&(n.cols[a].setValue(e[i],t),i+=1)},e.prototype.getValue=function(){return this.value},e.prototype.updateValue=function(e){var t,n=this,i=e||[],a=[];if(0===n.cols.length)for(var o=n.params.cols.filter(function(e){return!e.divider}),r=0;r<o.length;r+=1)void 0!==(t=o[r]).displayValues&&void 0!==t.values&&-1!==t.values.indexOf(i[r])?a.push(t.displayValues[t.values.indexOf(i[r])]):a.push(i[r]);else for(var l=0;l<n.cols.length;l+=1)n.cols[l].divider||(i.push(n.cols[l].value),a.push(n.cols[l].displayValue));0<=i.indexOf(void 0)||(n.value=i,n.displayValue=a,n.emit("local::change pickerChange",n,n.value,n.displayValue),n.inputEl&&(n.$inputEl.val(n.formatValue()),n.$inputEl.trigger("change")))},e.prototype.initColumn=function(e,t){(function(e,t){var l=this,n=l.app,i=M(e),a=i.index(),s=l.cols[a];if(!s.divider){var c,o,r,p,u;s.$el=i,s.el=i[0],s.$itemsEl=s.$el.find(".picker-items"),s.items=s.$itemsEl.find(".picker-item"),s.replaceValues=function(e,t){s.detachEvents(),s.values=e,s.displayValues=t,s.$itemsEl.html(l.renderColumn(s,!0)),s.items=s.$itemsEl.find(".picker-item"),s.calcSize(),s.setValue(s.values[0],0,!0),s.attachEvents()},s.calcSize=function(){l.params.rotateEffect&&(s.$el.removeClass("picker-column-absolute"),s.width||s.$el.css({width:""}));var i=0,e=s.$el[0].offsetHeight;c=s.items[0].offsetHeight,o=c*s.items.length,r=e/2-o+c/2,p=e/2-c/2,s.width&&(i=s.width,parseInt(i,10)===i&&(i+="px"),s.$el.css({width:i})),l.params.rotateEffect&&(s.width||(s.items.each(function(e,t){var n=M(t).children("span");i=Math.max(i,n[0].offsetWidth)}),s.$el.css({width:i+2+"px"})),s.$el.addClass("picker-column-absolute"))},s.setValue=function(e,t,n){void 0===t&&(t="");var i=s.$itemsEl.find('.picker-item[data-picker-value="'+e+'"]').index();if(void 0!==i&&-1!==i){var a=-i*c+p;s.$itemsEl.transition(t),s.$itemsEl.transform("translate3d(0,"+a+"px,0)"),l.params.updateValuesOnMomentum&&s.activeIndex&&s.activeIndex!==i&&(T.cancelAnimationFrame(u),s.$itemsEl.transitionEnd(function(){T.cancelAnimationFrame(u)}),x()),s.updateItems(i,a,t,n)}},s.updateItems=function(e,r,t,n){void 0===r&&(r=T.getTranslate(s.$itemsEl[0],"y")),void 0===e&&(e=-Math.round((r-p)/c)),e<0&&(e=0),e>=s.items.length&&(e=s.items.length-1);var i=s.activeIndex;s.activeIndex=e,s.$itemsEl.find(".picker-item-selected").removeClass("picker-item-selected"),s.items.transition(t);var a=s.items.eq(e).addClass("picker-item-selected").transform("");l.params.rotateEffect&&s.items.each(function(e,t){var n=M(t),i=(n.index()*c-(p-r))/c,a=Math.ceil(s.height/c/2)+1,o=-18*i;180<o&&(o=180),o<-180&&(o=-180),Math.abs(i)>a?n.addClass("picker-item-far"):n.removeClass("picker-item-far"),n.transform("translate3d(0, "+(-r+p)+"px, "+(l.needsOriginFix?-110:0)+"px) rotateX("+o+"deg)")}),(n||void 0===n)&&(s.value=a.attr("data-picker-value"),s.displayValue=s.displayValues?s.displayValues[e]:s.value,i!==e&&(s.onChange&&s.onChange(l,s.value,s.displayValue),l.updateValue()))};var d,m,v,f,h,g,E,k,$,y,C=!0,V=!!n.support.passiveListener&&{passive:!1,capture:!1};s.attachEvents=function(){s.$el.on(n.touchEvents.start,b,V),n.on("touchmove:active",O),n.on("touchend:passive",w),s.items.on("click",I)},s.detachEvents=function(){s.$el.off(n.touchEvents.start,b,V),n.off("touchmove:active",O),n.off("touchend:passive",w),s.items.off("click",I)},s.init=function(){s.calcSize(),s.$itemsEl.transform("translate3d(0,"+p+"px,0)").transition(0),0===a&&s.$el.addClass("picker-column-first"),a===l.cols.length-1&&s.$el.addClass("picker-column-last"),t&&s.updateItems(0,p,0),s.attachEvents()},s.destroy=function(){s.detachEvents()},s.init()}function x(){u=T.requestAnimationFrame(function(){s.updateItems(void 0,void 0,0),x()})}function b(e){m||d||(e.preventDefault(),d=!0,v="touchstart"===e.type?e.targetTouches[0].pageY:e.pageY,f=v,h=(new Date).getTime(),C=!0,g=T.getTranslate(s.$itemsEl[0],"y"),k=g)}function O(e){d&&(e.preventDefault(),C=!1,f="touchmove"===e.type?e.targetTouches[0].pageY:e.pageY,m||(T.cancelAnimationFrame(u),m=!0,g=T.getTranslate(s.$itemsEl[0],"y"),k=g,s.$itemsEl.transition(0)),E=void 0,(k=g+(f-v))<r&&(k=r-Math.pow(r-k,.8),E="min"),p<k&&(k=p+Math.pow(k-p,.8),E="max"),s.$itemsEl.transform("translate3d(0,"+k+"px,0)"),s.updateItems(void 0,k,0,l.params.updateValuesOnTouchmove),y=k-$||k,$=k)}function w(){if(d&&m){var e;m=d=!1,s.$itemsEl.transition(""),E&&("min"===E?s.$itemsEl.transform("translate3d(0,"+r+"px,0)"):s.$itemsEl.transform("translate3d(0,"+p+"px,0)")),e=300<(new Date).getTime()-h?k:k+y*l.params.momentumRatio,e=Math.max(Math.min(e,p),r);var t=-Math.floor((e-p)/c);l.params.freeMode||(e=-t*c+p),s.$itemsEl.transform("translate3d(0,"+parseInt(e,10)+"px,0)"),s.updateItems(t,e,"",!0),l.params.updateValuesOnMomentum&&(x(),s.$itemsEl.transitionEnd(function(){T.cancelAnimationFrame(u)})),setTimeout(function(){C=!0},100)}else m=d=!1}function I(){if(C){T.cancelAnimationFrame(u);var e=M(this).attr("data-picker-value");s.setValue(e)}}}).call(this,e,t)},e.prototype.destroyColumn=function(e){var t=M(e).index();this.cols[t]&&this.cols[t].destroy&&this.cols[t].destroy()},e.prototype.renderToolbar=function(){var e=this;return e.params.renderToolbar?e.params.renderToolbar.call(e,e):('\n      <div class="toolbar toolbar-top no-shadow">\n        <div class="toolbar-inner">\n          <div class="left"></div>\n          <div class="right">\n            <a href="#" class="link sheet-close popover-close">'+e.params.toolbarCloseText+"</a>\n          </div>\n        </div>\n      </div>\n    ").trim()},e.prototype.renderColumn=function(n,e){var t,i,a="picker-column "+(n.textAlign?"picker-column-"+n.textAlign:"")+" "+(n.cssClass||"");return t=n.divider?'\n        <div class="'+a+' picker-column-divider">'+n.content+"</div>\n      ":'\n        <div class="'+a+'">\n          <div class="picker-items">'+(i=n.values.map(function(e,t){return'\n        <div class="picker-item" data-picker-value="'+e+'">\n          <span>'+(n.displayValues?n.displayValues[t]:e)+"</span>\n        </div>\n      "}).join(""))+"</div>\n        </div>\n      ",e?i.trim():t.trim()},e.prototype.renderInline=function(){var t=this,e=t.params;return('\n      <div class="picker picker-inline '+(e.rotateEffect?"picker-3d":"")+" "+(e.cssClass||"")+'">\n        '+(e.toolbar?t.renderToolbar():"")+'\n        <div class="picker-columns">\n          '+t.cols.map(function(e){return t.renderColumn(e)}).join("")+'\n          <div class="picker-center-highlight"></div>\n        </div>\n      </div>\n    ').trim()},e.prototype.renderSheet=function(){var t=this,e=t.params;return('\n      <div class="sheet-modal picker picker-sheet '+(e.rotateEffect?"picker-3d":"")+" "+(e.cssClass||"")+'">\n        '+(e.toolbar?t.renderToolbar():"")+'\n        <div class="sheet-modal-inner picker-columns">\n          '+t.cols.map(function(e){return t.renderColumn(e)}).join("")+'\n          <div class="picker-center-highlight"></div>\n        </div>\n      </div>\n    ').trim()},e.prototype.renderPopover=function(){var t=this,e=t.params;return('\n      <div class="popover picker-popover">\n        <div class="popover-inner">\n          <div class="picker '+(e.rotateEffect?"picker-3d":"")+" "+(e.cssClass||"")+'">\n            '+(e.toolbar?t.renderToolbar():"")+'\n            <div class="picker-columns">\n              '+t.cols.map(function(e){return t.renderColumn(e)}).join("")+'\n              <div class="picker-center-highlight"></div>\n            </div>\n          </div>\n        </div>\n      </div>\n    ').trim()},e.prototype.render=function(){var e=this;return e.params.render?e.params.render.call(e):e.inline?e.renderInline():e.isPopover()?e.renderPopover():e.renderSheet()},e.prototype.onOpen=function(){var i=this,a=i.initialized,e=i.$el,t=i.app,n=i.$inputEl,o=i.inline,r=i.value,l=i.params;i.opened=!0,i.closing=!1,i.opening=!0,i.attachResizeEvent(),e.find(".picker-column").each(function(e,t){var n=!0;(!a&&l.value||a&&r)&&(n=!1),i.initColumn(t,n)}),a?r&&i.setValue(r,0):r?i.setValue(r,0):l.value&&i.setValue(l.value,0),!o&&n&&n.length&&"md"===t.theme&&n.trigger("focus"),i.initialized=!0,e&&e.trigger("picker:open",i),n&&n.trigger("picker:open",i),i.emit("local::open pickerOpen",i)},e.prototype.onOpened=function(){var e=this;e.opening=!1,e.$el&&e.$el.trigger("picker:opened",e),e.$inputEl&&e.$inputEl.trigger("picker:opened",e),e.emit("local::opened pickerOpened",e)},e.prototype.onClose=function(){var e=this,t=e.app;e.opening=!1,e.closing=!0,e.detachResizeEvent(),e.cols.forEach(function(e){e.destroy&&e.destroy()}),e.$inputEl&&"md"===t.theme&&e.$inputEl.trigger("blur"),e.$el&&e.$el.trigger("picker:close",e),e.$inputEl&&e.$inputEl.trigger("picker:close",e),e.emit("local::close pickerClose",e)},e.prototype.onClosed=function(){var e=this;e.opened=!1,e.closing=!1,e.inline||T.nextTick(function(){e.modal&&e.modal.el&&e.modal.destroy&&(e.params.routableModals||e.modal.destroy()),delete e.modal}),e.$el&&e.$el.trigger("picker:closed",e),e.$inputEl&&e.$inputEl.trigger("picker:closed",e),e.emit("local::closed pickerClosed",e)},e.prototype.open=function(){var e,t=this,n=t.app,i=t.opened,a=t.inline,o=t.$inputEl;if(!i){if(0===t.cols.length&&t.params.cols.length&&t.params.cols.forEach(function(e){t.cols.push(e)}),a)return t.$el=M(t.render()),(t.$el[0].f7Picker=t).$containerEl.append(t.$el),t.onOpen(),void t.onOpened();var r=t.isPopover(),l=r?"popover":"sheet",s={targetEl:o,scrollToEl:t.params.scrollToInput?o:void 0,content:t.render(),backdrop:r,on:{open:function(){t.modal=this,t.$el=r?this.$el.find(".picker"):this.$el,(t.$el[0].f7Picker=t).onOpen()},opened:function(){t.onOpened()},close:function(){t.onClose()},closed:function(){t.onClosed()}}};t.params.routableModals?t.view.router.navigate({url:t.url,route:(e={path:t.url},e[l]=s,e)}):(t.modal=n[l].create(s),t.modal.open())}},e.prototype.close=function(){var e=this,t=e.opened,n=e.inline;if(t)return n?(e.onClose(),void e.onClosed()):void(e.params.routableModals?e.view.router.back():e.modal.close())},e.prototype.init=function(){var e=this;if(e.initInput(),e.inline)return e.open(),void e.emit("local::init pickerInit",e);!e.initialized&&e.params.value&&e.setValue(e.params.value),e.$inputEl&&e.attachInputEvents(),e.params.closeByOutsideClick&&e.attachHtmlEvents(),e.emit("local::init pickerInit",e)},e.prototype.destroy=function(){var e=this;if(!e.destroyed){var t=e.$el;e.emit("local::beforeDestroy pickerBeforeDestroy",e),t&&t.trigger("picker:beforedestroy",e),e.close(),e.$inputEl&&e.detachInputEvents(),e.params.closeByOutsideClick&&e.detachHtmlEvents(),t&&t.length&&delete e.$el[0].f7Picker,T.deleteProps(e),e.destroyed=!0}},e}(n),o={name:"picker",static:{Picker:a},create:function(){this.picker=i({defaultSelector:".picker",constructor:a,app:this,domProp:"f7Picker"}),this.picker.close=function(e){void 0===e&&(e=".picker");var t=M(e);if(0!==t.length){var n=t[0].f7Picker;!n||n&&!n.opened||n.close()}}},params:{picker:{updateValuesOnMomentum:!1,updateValuesOnTouchmove:!0,rotateEffect:!1,momentumRatio:7,freeMode:!1,cols:[],containerEl:null,openIn:"auto",formatValue:null,inputEl:null,inputReadOnly:!0,closeByOutsideClick:!0,scrollToInput:!0,toolbar:!0,toolbarCloseText:"Done",cssClass:null,routableModals:!0,view:null,url:"select/",renderToolbar:null,render:null}}};if(t){if(e.prototype.modules&&e.prototype.modules[o.name])return;e.use(o),e.instance&&(e.instance.useModuleParams(o,e.instance.params),e.instance.useModule(o))}return o}(Framework7, typeof Framework7AutoInstallComponent === 'undefined' ? undefined : Framework7AutoInstallComponent))