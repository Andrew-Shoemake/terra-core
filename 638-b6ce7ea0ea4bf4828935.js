(window.webpackJsonp=window.webpackJsonp||[]).push([[638],{1689:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),i=a(864);function l(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var a=[],r=!0,n=!1,i=void 0;try{for(var l,o=e[Symbol.iterator]();!(r=(l=o.next()).done)&&(a.push(l.value),!t||a.length!==t);r=!0);}catch(e){n=!0,i=e}finally{try{r||null==o.return||o.return()}finally{if(n)throw i}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return o(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return o(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,r=new Array(t);a<t;a++)r[a]=e[a];return r}t.default=function(){var e=l(Object(r.useState)(!1),2),t=e[0],a=e[1];return n.a.createElement(i.a,{id:"defaultSwitch",isChecked:t,labelText:"Label",onChange:a})}},864:function(e,t,a){"use strict";var r=a(0),n=a.n(r),i=a(1),l=a.n(i),o=a(10),s=a.n(o),c=a(4),u=a.n(c),d=a(6),b=a.n(d),f=a(11),h=a(9),_=function(e){return e.setAttribute("data-terra-switch-show-focus-styles","true")};function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}function w(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var y=u.a.bind({"clinical-lowlight-theme":"Switch-module__clinical-lowlight-theme___zFqCp","orion-fusion-theme":"Switch-module__orion-fusion-theme___8BvAM",switch:"Switch-module__switch___1QYw3","is-block":"Switch-module__is-block___huIgz","label-container":"Switch-module__label-container___T31KG","label-text":"Switch-module__label-text___3EYJ2","status-label-text":"Switch-module__status-label-text___a0Jid",tray:"Switch-module__tray___2J87u",slider:"Switch-module__slider___2f4FJ","is-selected":"Switch-module__is-selected___19rsq","is-disabled":"Switch-module__is-disabled___2BOn8","is-enabled":"Switch-module__is-enabled___3Hh_X"}),v=Object.freeze({ON:n.a.createElement(f.FormattedMessage,{id:"Terra.switch.switchstatuslabel.on"}),OFF:n.a.createElement(f.FormattedMessage,{id:"Terra.switch.switchstatuslabel.off"})}),p={isChecked:l.a.bool,isDisabled:l.a.bool,labelText:l.a.string.isRequired,isBlock:l.a.bool,onChange:l.a.func},g={isChecked:!1,isDisabled:!1,isBlock:!1,onChange:void 0},O=function(e){var t,a=e.isChecked,i=e.isDisabled,l=e.isBlock,o=e.onChange,c=e.labelText,u=w(e,["isChecked","isDisabled","isBlock","onChange","labelText"]),d=n.a.useContext(b.a),f=Object(r.useRef)(),p=Object(r.useCallback)((function(e){f.current.focus(),o&&o(!a,e)}),[a,o]),g=a?v.ON:v.OFF,O=s()(y("switch",{"is-enabled":!i},{"is-disabled":i},{"is-selected":a},{"is-block":l},d.className),u.className),S=y(["label-container",{"is-block":l}]);return t=i?{"aria-disabled":!0}:{tabIndex:"0",onBlur:function(){_(f.current)},onClick:p,onMouseDown:function(e){e.preventDefault(),function(e){e.setAttribute("data-terra-switch-show-focus-styles","false")}(f.current)},onKeyDown:function(e){e.nativeEvent.keyCode!==h.KEY_RETURN&&e.nativeEvent.keyCode!==h.KEY_SPACE||(e.preventDefault(),_(f.current),o&&o(!a,e))}},n.a.createElement("div",m({},u,t,{"aria-label":c,"aria-checked":a,role:"switch",className:O,"data-terra-switch-show-focus-styles":!0,ref:f}),n.a.createElement("div",{"aria-hidden":!0,className:S},n.a.createElement("div",{className:y("label-text")},c),n.a.createElement("div",{className:y("status-label-text")},g)),n.a.createElement("div",{"aria-hidden":!0,className:y("tray")},n.a.createElement("div",{className:y("slider")})))};O.propTypes=p,O.defaultProps=g;t.a=O}}]);