(window.webpackJsonp=window.webpackJsonp||[]).push([[619],{1623:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(885);t.default=function(){return i.a.createElement("div",null,i.a.createElement("h2",null,"Failed Profile Image"),i.a.createElement(r.a,{src:"invalid.jpg",alt:"could not load profile image",width:"75",height:"75"}))}},885:function(e,t,a){"use strict";var n=a(0),i=a.n(n),r=a(1),l=a.n(r),o=a(4),c=a.n(o),s=a(6),h=a.n(s),u=a(164);function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var f=c.a.bind({"clinical-lowlight-theme":"ProfileImage-module__clinical-lowlight-theme___1T8_5","orion-fusion-theme":"ProfileImage-module__orion-fusion-theme___28OOL","placeholder-images":"ProfileImage-module__placeholder-images___qxOgw"}),g={src:l.a.string,alt:l.a.string,fit:l.a.oneOf(["cover","scale-down","contain","none"]),height:l.a.string,width:l.a.string,onLoad:l.a.func,onError:l.a.func},m=function(e){return!/\D/.test(e)},p=function(e){var t=i.a.useContext(h.a),a=m(e.height)?"".concat(e.height,"px"):e.height,n=m(e.width)?"".concat(e.width,"px"):e.width,r=i.a.createElement("span",{className:f("placeholder-images",t.className),title:e.alt,style:{height:a,width:n}});return e.src?i.a.createElement("div",null,i.a.createElement(u.default,d({placeholder:r},e))):r};p.propTypes=g,p.defaultProps={fit:"cover"};t.a=p}}]);