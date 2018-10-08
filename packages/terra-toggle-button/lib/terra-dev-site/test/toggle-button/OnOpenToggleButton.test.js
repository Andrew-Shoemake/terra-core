'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ToggleButton = require('../../../ToggleButton');

var _ToggleButton2 = _interopRequireDefault(_ToggleButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var OnOpenToggleButton = function (_React$Component) {
  _inherits(OnOpenToggleButton, _React$Component);

  function OnOpenToggleButton(props) {
    _classCallCheck(this, OnOpenToggleButton);

    var _this = _possibleConstructorReturn(this, (OnOpenToggleButton.__proto__ || Object.getPrototypeOf(OnOpenToggleButton)).call(this, props));

    _this.state = { timesOpened: 0 };
    _this.handleOnOpen = _this.handleOnOpen.bind(_this);
    return _this;
  }

  _createClass(OnOpenToggleButton, [{
    key: 'handleOnOpen',
    value: function handleOnOpen() {
      this.setState(function (prevState) {
        return { timesOpened: prevState.timesOpened + 1 };
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { id: 'on-open-event' },
          _react2.default.createElement(
            'h3',
            null,
            'Times Opened: ' + this.state.timesOpened
          )
        ),
        _react2.default.createElement(
          _ToggleButton2.default,
          { id: 'onOpenToggleButton', closedButtonText: 'ToggleButton', onOpen: this.handleOnOpen },
          _react2.default.createElement(
            'p',
            null,
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
          )
        )
      );
    }
  }]);

  return OnOpenToggleButton;
}(_react2.default.Component);

exports.default = OnOpenToggleButton;