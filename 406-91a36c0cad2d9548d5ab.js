(window.webpackJsonp=window.webpackJsonp||[]).push([[406],{1413:function(e,t,n){"use strict";n.r(t);var i=n(0),o=n.n(i),a=n(820);t.default=function(){return o.a.createElement(a.a,{id:"longText",labelText:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"})}},820:function(e,t,n){"use strict";var i=n(0),o=n.n(i),a=n(1),l=n.n(a),r=n(10),c=n.n(r),s=n(4),u=n.n(s),d=n(6),b=n.n(d),m=n(849),h=n.n(m);function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}function _(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function v(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var x=u.a.bind({"clinical-lowlight-theme":"Checkbox-module__clinical-lowlight-theme___1ZWEb","orion-fusion-theme":"Checkbox-module__orion-fusion-theme___1HkQ8",checkbox:"Checkbox-module__checkbox___2BucT",label:"Checkbox-module__label___393-Q","is-mobile":"Checkbox-module__is-mobile___kdISk","native-input":"Checkbox-module__native-input___m_uRP","label-text":"Checkbox-module__label-text___2m2Wn","is-hidden":"Checkbox-module__is-hidden___kodEE","is-disabled":"Checkbox-module__is-disabled___1k3VQ","is-inline":"Checkbox-module__is-inline___3N6K1"}),k={checked:l.a.bool,defaultChecked:l.a.bool,id:l.a.string,inputAttrs:l.a.object,disabled:l.a.bool,isInline:l.a.bool,isLabelHidden:l.a.bool,labelText:l.a.string.isRequired,labelTextAttrs:l.a.object,name:l.a.string,onBlur:l.a.func,onChange:l.a.func,onFocus:l.a.func,value:l.a.string},g={checked:void 0,defaultChecked:void 0,id:void 0,inputAttrs:{},disabled:!1,isInline:!1,isLabelHidden:!1,labelTextAttrs:{},name:null,onBlur:void 0,onChange:void 0,onFocus:void 0,value:void 0},O=function(e){var t=e.checked,n=e.defaultChecked,i=e.inputAttrs,a=e.id,l=e.disabled,r=e.isInline,s=e.isLabelHidden,u=e.labelText,d=e.labelTextAttrs,m=e.name,k=e.onBlur,g=e.onChange,O=e.onFocus,w=e.value,C=v(e,["checked","defaultChecked","inputAttrs","id","disabled","isInline","isLabelHidden","labelText","labelTextAttrs","name","onBlur","onChange","onFocus","value"]),y=o.a.useContext(b.a),j=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?_(Object(n),!0).forEach((function(t){f(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):_(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},i);void 0!==t?j.checked=t:j.defaultChecked=n;var P=c()(x("checkbox",{"is-inline":r},y.className),C.className),T=x(["label",{"is-disabled":l},{"is-mobile":h.a.isConsideredMobileDevice()},d.className]),E=x(["native-input",i.className]),N=x(["label-text",{"is-hidden":s},{"is-mobile":h.a.isConsideredMobileDevice()}]),D=null;return s?(j["aria-label"]=u,D=o.a.createElement("span",p({},d,{className:N}))):D=o.a.createElement("span",p({},d,{className:N}),u),o.a.createElement("div",p({},C,{className:P}),o.a.createElement("label",{htmlFor:a,className:T},o.a.createElement("input",p({},j,{type:"checkbox",id:a,disabled:l,name:m,value:w,onChange:g,onFocus:O,onBlur:k,className:E})),D))};O.propTypes=k,O.defaultProps=g,O.isCheckbox=!0;t.a=O},849:function(e,t){var n={isConsideredMobileDevice:function(){return window.matchMedia("(max-width: 1024px)").matches&&("ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0)}};e.exports=n}}]);