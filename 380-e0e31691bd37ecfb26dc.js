(window.webpackJsonp=window.webpackJsonp||[]).push([[380],{1733:function(t,e,n){"use strict";n.r(e);var i=n(0),o=n.n(i),a=n(22),r=n(895);function s(t){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function l(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function u(t,e){return(u=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function c(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,i=h(t);if(e){var o=h(this).constructor;n=Reflect.construct(i,arguments,o)}else n=i.apply(this,arguments);return f(this,n)}}function f(t,e){return!e||"object"!==s(e)&&"function"!=typeof e?p(t):e}function p(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function h(t){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var m=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&u(t,e)}(f,t);var e,n,i,s=c(f);function f(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,f),(e=s.call(this,t)).state={isOpen:!1},e.toggle=e.toggle.bind(p(e)),e}return e=f,(n=[{key:"toggle",value:function(){this.setState((function(t){return{isOpen:!t.isOpen}}))}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(a.default,{id:"toggle",text:"Trigger Toggle",onClick:this.toggle}),o.a.createElement(r.a,{isOpen:this.state.isOpen,title:"Default Toggle Section Header"},o.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")))}}])&&l(e.prototype,n),i&&l(e,i),f}(o.a.Component);e.default=m},812:function(t,e,n){"use strict";var i=n(0),o=n.n(i),a=n(1),r=n.n(a),s=n(4),l=n.n(s),u=n(813),c=n.n(u);function f(){return(f=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t}).apply(this,arguments)}function p(t,e){if(null==t)return{};var n,i,o=function(t,e){if(null==t)return{};var n,i,o={},a=Object.keys(t);for(i=0;i<a.length;i++)n=a[i],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(i=0;i<a.length;i++)n=a[i],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var h=l.a.bind({toggle:"Toggle-module__toggle___1Qy4y"}),m={children:r.a.node.isRequired,isAnimated:r.a.bool,isOpen:r.a.bool},d=function(t){var e,n=t.isAnimated,i=t.isOpen,a=t.children,r=p(t,["isAnimated","isOpen","children"]),s=i?"auto":0;return e=n?o.a.createElement(c.a,{duration:250,height:s,easing:"ease-out"},a):i&&a,o.a.createElement("div",f({},r,{className:h("toggle",r.className),"aria-hidden":!i}),e)};d.propTypes=m,d.defaultProps={isAnimated:!1,isOpen:!1};e.a=d},813:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},a=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),r=u(n(0)),s=u(n(1)),l=u(n(10));function u(t){return t&&t.__esModule?t:{default:t}}function c(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var f={animating:"rah-animating",animatingUp:"rah-animating--up",animatingDown:"rah-animating--down",animatingToHeightZero:"rah-animating--to-height-zero",animatingToHeightAuto:"rah-animating--to-height-auto",animatingToHeightSpecific:"rah-animating--to-height-specific",static:"rah-static",staticHeightZero:"rah-static--height-zero",staticHeightAuto:"rah-static--height-auto",staticHeightSpecific:"rah-static--height-specific"},p=["animateOpacity","animationStateClasses","applyInlineTransitions","children","contentClassName","delay","duration","easing","height","onAnimationEnd","onAnimationStart"];function h(t){for(var e=arguments.length,n=Array(e>1?e-1:0),i=1;i<e;i++)n[i-1]=arguments[i];if(!n.length)return t;for(var o={},a=Object.keys(t),r=0;r<a.length;r++){var s=a[r];-1===n.indexOf(s)&&(o[s]=t[s])}return o}function m(t){t.forEach((function(t){return cancelAnimationFrame(t)}))}function d(t){return!isNaN(parseFloat(t))&&isFinite(t)}function y(t){return"string"==typeof t&&t.search("%")===t.length-1&&d(t.substr(0,t.length-1))}function g(t,e){t&&"function"==typeof t&&t(e)}var b=function(t){function e(t){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);var n=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));n.animationFrameIDs=[];var i="auto",a="visible";d(t.height)?(i=t.height<0||"0"===t.height?0:t.height,a="hidden"):y(t.height)&&(i="0%"===t.height?0:t.height,a="hidden"),n.animationStateClasses=o({},f,t.animationStateClasses);var r=n.getStaticStateClasses(i);return n.state={animationStateClasses:r,height:i,overflow:a,shouldUseTransitions:!1},n}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),a(e,[{key:"componentDidMount",value:function(){var t=this.state.height;this.contentElement&&this.contentElement.style&&this.hideContent(t)}},{key:"componentDidUpdate",value:function(t,e){var n,i,o=this,a=this.props,r=a.delay,s=a.duration,u=a.height,f=a.onAnimationEnd,p=a.onAnimationStart;if(this.contentElement&&u!==t.height){var h;this.showContent(e.height),this.contentElement.style.overflow="hidden";var b=this.contentElement.offsetHeight;this.contentElement.style.overflow="";var O=s+r,v=null,w={height:null,overflow:"hidden"},S="auto"===e.height;d(u)?(v=u<0||"0"===u?0:u,w.height=v):y(u)?(v="0%"===u?0:u,w.height=v):(v=b,w.height="auto",w.overflow=null),S&&(w.height=v,v=b);var C=(0,l.default)((c(h={},this.animationStateClasses.animating,!0),c(h,this.animationStateClasses.animatingUp,"auto"===t.height||u<t.height),c(h,this.animationStateClasses.animatingDown,"auto"===u||u>t.height),c(h,this.animationStateClasses.animatingToHeightZero,0===w.height),c(h,this.animationStateClasses.animatingToHeightAuto,"auto"===w.height),c(h,this.animationStateClasses.animatingToHeightSpecific,w.height>0),h)),j=this.getStaticStateClasses(w.height);this.setState({animationStateClasses:C,height:v,overflow:"hidden",shouldUseTransitions:!S}),clearTimeout(this.timeoutID),clearTimeout(this.animationClassesTimeoutID),S?(w.shouldUseTransitions=!0,m(this.animationFrameIDs),this.animationFrameIDs=(n=function(){o.setState(w),g(p,{newHeight:w.height})},(i=[])[0]=requestAnimationFrame((function(){i[1]=requestAnimationFrame((function(){n()}))})),i),this.animationClassesTimeoutID=setTimeout((function(){o.setState({animationStateClasses:j,shouldUseTransitions:!1}),o.hideContent(w.height),g(f,{newHeight:w.height})}),O)):(g(p,{newHeight:v}),this.timeoutID=setTimeout((function(){w.animationStateClasses=j,w.shouldUseTransitions=!1,o.setState(w),"auto"!==u&&o.hideContent(v),g(f,{newHeight:v})}),O))}}},{key:"componentWillUnmount",value:function(){m(this.animationFrameIDs),clearTimeout(this.timeoutID),clearTimeout(this.animationClassesTimeoutID),this.timeoutID=null,this.animationClassesTimeoutID=null,this.animationStateClasses=null}},{key:"showContent",value:function(t){0===t&&(this.contentElement.style.display="")}},{key:"hideContent",value:function(t){0===t&&(this.contentElement.style.display="none")}},{key:"getStaticStateClasses",value:function(t){var e;return(0,l.default)((c(e={},this.animationStateClasses.static,!0),c(e,this.animationStateClasses.staticHeightZero,0===t),c(e,this.animationStateClasses.staticHeightSpecific,t>0),c(e,this.animationStateClasses.staticHeightAuto,"auto"===t),e))}},{key:"render",value:function(){var t,e=this,n=this.props,i=n.animateOpacity,a=n.applyInlineTransitions,s=n.children,u=n.className,f=n.contentClassName,m=n.delay,d=n.duration,y=n.easing,g=n.id,b=n.style,O=this.state,v=O.height,w=O.overflow,S=O.animationStateClasses,C=O.shouldUseTransitions,j=o({},b,{height:v,overflow:w||b.overflow});C&&a&&(j.transition="height "+d+"ms "+y+" "+m+"ms",b.transition&&(j.transition=b.transition+", "+j.transition),j.WebkitTransition=j.transition);var T={};i&&(T.transition="opacity "+d+"ms "+y+" "+m+"ms",T.WebkitTransition=T.transition,0===v&&(T.opacity=0));var E=(0,l.default)((c(t={},S,!0),c(t,u,u),t)),P="undefined"!=typeof this.props["aria-hidden"]?this.props["aria-hidden"]:0===v;return r.default.createElement("div",o({},h.apply(void 0,[this.props].concat(p)),{"aria-hidden":P,className:E,id:g,style:j}),r.default.createElement("div",{className:f,style:T,ref:function(t){return e.contentElement=t}},s))}}]),e}(r.default.Component);b.propTypes={"aria-hidden":s.default.bool,animateOpacity:s.default.bool,animationStateClasses:s.default.object,applyInlineTransitions:s.default.bool,children:s.default.any.isRequired,className:s.default.string,contentClassName:s.default.string,delay:s.default.number,duration:s.default.number,easing:s.default.string,height:function(t,e,n){var o=t[e];return"number"==typeof o&&o>=0||y(o)||"auto"===o?null:new TypeError('value "'+o+'" of type "'+("undefined"==typeof o?"undefined":i(o))+'" is invalid type for '+e+" in "+n+'. It needs to be a positive number, string "auto" or percentage string (e.g. "15%").')},id:s.default.string,onAnimationEnd:s.default.func,onAnimationStart:s.default.func,style:s.default.object},b.defaultProps={animateOpacity:!1,animationStateClasses:f,applyInlineTransitions:!0,duration:250,delay:0,easing:"ease",style:{}},e.default=b},895:function(t,e,n){"use strict";var i=n(0),o=n.n(i),a=n(1),r=n.n(a),s=n(860),l=n(812);function u(t){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function c(){return(c=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t}).apply(this,arguments)}function f(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function p(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function h(t,e){if(null==t)return{};var n,i,o=function(t,e){if(null==t)return{};var n,i,o={},a=Object.keys(t);for(i=0;i<a.length;i++)n=a[i],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(i=0;i<a.length;i++)n=a[i],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}function m(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function d(t,e){return(d=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function y(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,i=O(t);if(e){var o=O(this).constructor;n=Reflect.construct(i,arguments,o)}else n=i.apply(this,arguments);return g(this,n)}}function g(t,e){return!e||"object"!==u(e)&&"function"!=typeof e?b(t):e}function b(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function O(t){return(O=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var v={children:r.a.node.isRequired,title:r.a.string.isRequired,level:r.a.oneOf([1,2,3,4,5,6]),onClose:r.a.func,onOpen:r.a.func,sectionHeaderAttrs:r.a.object,isAnimated:r.a.bool,isInitiallyOpen:r.a.bool,isTransparent:r.a.bool,isOpen:r.a.bool},w={level:2,sectionHeaderAttrs:{},isAnimated:!1,isInitiallyOpen:!1,isTransparent:!1,isOpen:void 0},S=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&d(t,e)}(r,t);var e,n,i,a=y(r);function r(t){var e;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,r);var n=(e=a.call(this,t)).props.isInitiallyOpen,i=void 0!==n&&n;return e.state={isOpen:i},e.handleOnClick=e.handleOnClick.bind(b(e)),e.wrapOnClick=e.wrapOnClick.bind(b(e)),e}return e=r,i=[{key:"getDerivedStateFromProps",value:function(t,e){return void 0!==t.isOpen&&e.isOpen!==t.isOpen?{isOpen:t.isOpen}:{isOpen:e.isOpen}}}],(n=[{key:"handleOnClick",value:function(t){t.preventDefault();var e=this.props,n=e.onOpen,i=e.onClose;void 0===e.isOpen&&(n&&!this.state.isOpen?n():i&&this.state.isOpen&&i(),this.setState((function(t){return{isOpen:!t.isOpen}})))}},{key:"wrapOnClick",value:function(t){var e=this;return function(n){e.handleOnClick(n),t&&t(n)}}},{key:"render",value:function(){var t=this.props,e=t.children,n=t.title,i=t.level,a=t.sectionHeaderAttrs,r=t.isAnimated,u=(t.isInitiallyOpen,t.isTransparent),m=(t.isOpen,t.onOpen,t.onClose,h(t,["children","title","level","sectionHeaderAttrs","isAnimated","isInitiallyOpen","isTransparent","isOpen","onOpen","onClose"])),d=function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?f(Object(n),!0).forEach((function(e){p(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({},a);return d.onClick=this.wrapOnClick(a.onClick),o.a.createElement("div",m,o.a.createElement(s.a,c({},d,{"aria-expanded":this.state.isOpen,isOpen:this.state.isOpen,level:i,title:n,isTransparent:u})),o.a.createElement(l.a,{isAnimated:r,isOpen:this.state.isOpen},e))}}])&&m(e.prototype,n),i&&m(e,i),r}(o.a.Component);S.propTypes=v,S.defaultProps=w,e.a=S}}]);