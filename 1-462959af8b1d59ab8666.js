(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{816:function(e,t,n){"use strict";n.d(t,"b",(function(){return p})),n.d(t,"c",(function(){return O})),n.d(t,"a",(function(){return k}));var a=n(0),o=n.n(a),r=n(1),i=n.n(r),l=n(4),c=n.n(l),u=n(6),_=n.n(u),s=c.a.bind({"clinical-lowlight-theme":"Notice-module__clinical-lowlight-theme___1QPd7","orion-fusion-theme":"Notice-module__orion-fusion-theme___2Mef4","ux-recommendation":"Notice-module__ux-recommendation___1HjML",title:"Notice-module__title___sVwqf",caution:"Notice-module__caution___zs8Lc",deprecation:"Notice-module__deprecation___3-mH9",accessory:"Notice-module__accessory___1DH-3",maintenance:"Notice-module__maintenance___33eYo",important:"Notice-module__important___TUigO",notice:"Notice-module__notice___1-NYw",children:"Notice-module__children___2bd2z"}),m={ariaLevel:i.a.oneOf(["2","3","4","5","6"]),children:i.a.node,variant:i.a.oneOf(["ux-recommendation","caution","deprecation","maintenance","important"])},d=function(e){var t=e.ariaLevel,n=e.variant,a=e.children,r=o.a.useContext(_.a);return o.a.createElement("div",{className:s("notice",n,r.className)},o.a.createElement("div",{className:s("accessory"),"aria-hidden":"true",focusable:"false"}),o.a.createElement("div",{role:"heading",className:s("title"),"aria-level":t},o.a.createElement("span",null,function(e){return"ux-recommendation"===e?"UX Recommendation":"caution"===e?"Caution":"deprecation"===e?"Deprecation Notice":"maintenance"===e?"In Maintenance":"important"===e?"Important":"error"}(n))),o.a.createElement("div",{className:s("children")},o.a.Children.map(a,(function(e){return"string"==typeof e?o.a.createElement("p",null,e):e}))))};d.propTypes=m,d.defaultProps={ariaLevel:"2",variant:"important"};var p=d,f=n(10),h=n.n(f);function b(){return(b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function v(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var y=c.a.bind({"clinical-lowlight-theme":"Placeholder-module__clinical-lowlight-theme___2ebLA","orion-fusion-theme":"Placeholder-module__orion-fusion-theme___3Hz0F",placeholder:"Placeholder-module__placeholder___2jkUe",inner:"Placeholder-module__inner___3YDH8"}),g={title:i.a.string},N=function(e){var t=e.title,n=v(e,["title"]),a=o.a.useContext(_.a),r=h()(y(["placeholder",a.className]),n.className),i=y(["inner"]);return o.a.createElement("div",b({},n,{className:r}),o.a.createElement("div",{className:i},o.a.createElement("p",null,t)))};N.propTypes=g,N.defaultProps={title:""};var O=N;function w(){return(w=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function P(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var j=c.a.bind({"clinical-lowlight-theme":"Button-module__clinical-lowlight-theme___2bnDl","orion-fusion-theme":"Button-module__orion-fusion-theme___2RPQK",button:"Button-module__button___1myJF","is-active":"Button-module__is-active___1xKPv"}),x=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},E=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},L={children:i.a.string},T=function(e){var t=e.children,n=P(e,["children"]),a=o.a.useContext(_.a),r=c()(j(["button",a.className]),n.className);return o.a.createElement("button",w({},n,{type:"button",className:r,onBlur:x,onMouseDown:E,"data-focus-styles-enabled":!0}),t)};T.propTypes=L;var k=T}}]);