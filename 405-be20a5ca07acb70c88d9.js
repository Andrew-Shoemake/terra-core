(window.webpackJsonp=window.webpackJsonp||[]).push([[405],{1412:function(e,n,t){"use strict";t.r(n);var i=t(0),o=t.n(i),a=t(820);n.default=function(){return o.a.createElement(a.a,{id:"hidden",labelText:"can you see me?",isLabelHidden:!0})}},820:function(e,n,t){"use strict";var i=t(0),o=t.n(i),a=t(1),l=t.n(a),r=t(10),c=t.n(r),s=t(4),u=t.n(s),d=t(6),b=t.n(d),h=t(849),m=t.n(h);function _(){return(_=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e}).apply(this,arguments)}function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function f(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function v(e,n){if(null==e)return{};var t,i,o=function(e,n){if(null==e)return{};var t,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var k=u.a.bind({"clinical-lowlight-theme":"Checkbox-module__clinical-lowlight-theme___1ZWEb","orion-fusion-theme":"Checkbox-module__orion-fusion-theme___1HkQ8",checkbox:"Checkbox-module__checkbox___2BucT",label:"Checkbox-module__label___393-Q","is-mobile":"Checkbox-module__is-mobile___kdISk","native-input":"Checkbox-module__native-input___m_uRP","label-text":"Checkbox-module__label-text___2m2Wn","is-hidden":"Checkbox-module__is-hidden___kodEE","is-disabled":"Checkbox-module__is-disabled___1k3VQ","is-inline":"Checkbox-module__is-inline___3N6K1"}),x={checked:l.a.bool,defaultChecked:l.a.bool,id:l.a.string,inputAttrs:l.a.object,disabled:l.a.bool,isInline:l.a.bool,isLabelHidden:l.a.bool,labelText:l.a.string.isRequired,labelTextAttrs:l.a.object,name:l.a.string,onBlur:l.a.func,onChange:l.a.func,onFocus:l.a.func,value:l.a.string},O={checked:void 0,defaultChecked:void 0,id:void 0,inputAttrs:{},disabled:!1,isInline:!1,isLabelHidden:!1,labelTextAttrs:{},name:null,onBlur:void 0,onChange:void 0,onFocus:void 0,value:void 0},g=function(e){var n=e.checked,t=e.defaultChecked,i=e.inputAttrs,a=e.id,l=e.disabled,r=e.isInline,s=e.isLabelHidden,u=e.labelText,d=e.labelTextAttrs,h=e.name,x=e.onBlur,O=e.onChange,g=e.onFocus,w=e.value,y=v(e,["checked","defaultChecked","inputAttrs","id","disabled","isInline","isLabelHidden","labelText","labelTextAttrs","name","onBlur","onChange","onFocus","value"]),C=o.a.useContext(b.a),j=function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){f(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}({},i);void 0!==n?j.checked=n:j.defaultChecked=t;var P=c()(k("checkbox",{"is-inline":r},C.className),y.className),T=k(["label",{"is-disabled":l},{"is-mobile":m.a.isConsideredMobileDevice()},d.className]),E=k(["native-input",i.className]),N=k(["label-text",{"is-hidden":s},{"is-mobile":m.a.isConsideredMobileDevice()}]),D=null;return s?(j["aria-label"]=u,D=o.a.createElement("span",_({},d,{className:N}))):D=o.a.createElement("span",_({},d,{className:N}),u),o.a.createElement("div",_({},y,{className:P}),o.a.createElement("label",{htmlFor:a,className:T},o.a.createElement("input",_({},j,{type:"checkbox",id:a,disabled:l,name:h,value:w,onChange:O,onFocus:g,onBlur:x,className:E})),D))};g.propTypes=x,g.defaultProps=O,g.isCheckbox=!0;n.a=g},849:function(e,n){var t={isConsideredMobileDevice:function(){return window.matchMedia("(max-width: 1024px)").matches&&("ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0)}};e.exports=t}}]);