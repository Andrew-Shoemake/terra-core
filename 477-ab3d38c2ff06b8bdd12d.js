(window.webpackJsonp=window.webpackJsonp||[]).push([[477],{1355:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o),u=n(824);t.default=function(){return r.a.createElement(u.a,{id:"button-group-text"},r.a.createElement(u.a.Button,{text:"Text",key:"text1"}),r.a.createElement(u.a.Button,{text:"This button contains a really really really long text. The text should wrap and the height of the button should increase. The height of the all other buttons in the group should match. ",key:"text2"}))}},824:function(e,t,n){"use strict";var o=n(0),r=n.n(o),u=n(1),i=n.n(u),c=n(10),s=n.n(c),a=n(4),l=n.n(a),f=n(6),p=n.n(f),h=n(22),y=n(9),d={"clinical-lowlight-theme":"ButtonGroup-module__clinical-lowlight-theme___D1zjL","orion-fusion-theme":"ButtonGroup-module__orion-fusion-theme___1O3Kx","button-group":"ButtonGroup-module__button-group___1L9Zm","button-group-button":"ButtonGroup-module__button-group-button___2OKOD","is-disabled":"ButtonGroup-module__is-disabled___1gsQj","is-focused":"ButtonGroup-module__is-focused___iXd1h","is-selected":"ButtonGroup-module__is-selected___2AzGV","is-block":"ButtonGroup-module__is-block___2AbWo"};function b(e){return(b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function v(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},u=Object.keys(e);for(o=0;o<u.length;o++)n=u[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(o=0;o<u.length;o++)n=u[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function O(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function _(e,t){return(_=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function g(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=S(e);if(t){var r=S(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return w(this,n)}}function w(e,t){return!t||"object"!==b(t)&&"function"!=typeof t?k(e):t}function k(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function S(e){return(S=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var j=l.a.bind(d),K={icon:i.a.element,isDisabled:i.a.bool,onBlur:i.a.func,onClick:i.a.func,onFocus:i.a.func,onKeyDown:i.a.func,onKeyUp:i.a.func,text:i.a.string.isRequired},E=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_(e,t)}(i,e);var t,n,o,u=g(i);function i(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),(t=u.call(this,e)).state={focused:!1},t.handleKeyDown=t.handleKeyDown.bind(k(t)),t.handleKeyUp=t.handleKeyUp.bind(k(t)),t.handleOnBlur=t.handleOnBlur.bind(k(t)),t.handleFocus=t.handleFocus.bind(k(t)),t.shouldShowFocus=!1,t}return t=i,(n=[{key:"handleOnBlur",value:function(e){document.activeElement===e.currentTarget&&this.state.focused?this.shouldShowFocus=!0:(this.shouldShowFocus=!1,this.setState({focused:!1})),this.props.onBlur&&this.props.onBlur(e)}},{key:"handleKeyDown",value:function(e){e.nativeEvent.keyCode!==y.KEY_SPACE&&e.nativeEvent.keyCode!==y.KEY_RETURN||this.setState({focused:!0}),this.props.onKeyDown&&this.props.onKeyDown(e)}},{key:"handleKeyUp",value:function(e){e.nativeEvent.keyCode===y.KEY_TAB&&(this.setState({focused:!0}),this.shouldShowFocus=!0),this.props.onKeyUp&&this.props.onKeyUp(e)}},{key:"handleFocus",value:function(e){this.shouldShowFocus&&this.setState({focused:!0}),this.props.onFocus&&this.props.onFocus(e)}},{key:"render",value:function(){var e=this.props,t=e.icon,n=e.isDisabled,o=(e.onFocus,v(e,["icon","isDisabled","onFocus"])),u=this.context,i=s()(j("button-group-button",{"is-disabled":n},{"is-focused":this.state.focused&&!n},u.className),o.className);return r.a.createElement(h.default,m({},o,{icon:t,isDisabled:n,isIconOnly:null!=t,onKeyDown:this.handleKeyDown,onKeyUp:this.handleKeyUp,onBlur:this.handleOnBlur,onFocus:this.handleFocus,variant:h.default.Opts.Variants.NEUTRAL,className:i}))}}])&&O(t.prototype,n),o&&O(t,o),i}(r.a.Component);E.propTypes=K,E.defaultProps={isDisabled:!1},E.contextType=p.a;var x=E,B={shouldHandleSingleSelection:function(e,t){return t!==e},handleMultiSelectedKeys:function(e,t){if(!t)return e;if(!e)return[t];var n=e.slice(),o=n.indexOf(t);return o>-1?n.splice(o,1):n.push(t),n}};function C(e){return(C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function P(){return(P=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function D(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},u=Object.keys(e);for(o=0;o<u.length;o++)n=u[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(o=0;o<u.length;o++)n=u[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function R(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function T(e,t){return(T=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function F(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=G(e);if(t){var r=G(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return U(this,n)}}function U(e,t){return!t||"object"!==C(t)&&"function"!=typeof t?N(e):t}function N(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function G(e){return(G=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var A=l.a.bind(d),I={children:i.a.node,isBlock:i.a.bool,onChange:i.a.func,selectedKeys:i.a.arrayOf(i.a.string)},L=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&T(e,t)}(i,e);var t,n,o,u=F(i);function i(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),(t=u.call(this,e)).handleOnChange=t.handleOnChange.bind(N(t)),t}return t=i,(n=[{key:"handleOnChange",value:function(e,t){this.props.onChange&&this.props.onChange(e,t)}},{key:"wrapOnClick",value:function(e){var t=this,n=e.props.onClick;return function(o){t.handleOnChange(o,e.key),n&&n(o)}}},{key:"render",value:function(){var e=this,t=this.props,n=t.children,o=t.isBlock,u=(t.onChange,t.selectedKeys),i=D(t,["children","isBlock","onChange","selectedKeys"]),c=this.context,a=s()(A("button-group",{"is-block":o},c.className),i.className),l=n?[]:void 0;return r.a.Children.forEach(n,(function(t){var n=u.indexOf(t.key)>-1,o=r.a.cloneElement(t,{onClick:e.wrapOnClick(t),className:A([{"is-selected":n&&!t.props.isDisabled},t.props.className]),"aria-pressed":n||null});l.push(o)})),r.a.createElement("div",P({},i,{className:a}),l)}}])&&R(t.prototype,n),o&&R(t,o),i}(r.a.Component);L.propTypes=I,L.defaultProps={children:[],isBlock:!1,selectedKeys:[]},L.Button=x,L.Utils=B,L.contextType=p.a;t.a=L}}]);