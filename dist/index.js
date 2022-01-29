"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

require("./style.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {
  strength: _propTypes.default.string,
  bars: _propTypes.default.string
};
var defaultProps = {
  strength: 'good',
  bars: 'five-bars'
};

const SignalView = _ref => {
  let {
    strength,
    bars
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "mobile-signal-bars signal-sizing-box " + strength + " " + bars
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "first-bar signal-bar"
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "second-bar signal-bar"
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "third-bar signal-bar"
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "fourth-bar signal-bar"
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "fifth-bar signal-bar"
  }));
};

SignalView.propTypes = propTypes;
SignalView.defaultProps = defaultProps;
var _default = SignalView;
exports.default = _default;