/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = React;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = ReactRouterDOM;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TestRoute = function (_React$Component) {
  _inherits(TestRoute, _React$Component);

  function TestRoute() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, TestRoute);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = TestRoute.__proto__ || Object.getPrototypeOf(TestRoute)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      path: '',
      exact: false,
      strict: false
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(TestRoute, [{
    key: 'handleInput',
    value: function handleInput(event) {
      var target = event.target;
      this.setState(_defineProperty({}, target.name, target.type === 'checkbox' ? target.checked : target.value));
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _state = this.state,
          path = _state.path,
          exact = _state.exact,
          strict = _state.strict;

      return _react2.default.createElement(_reactRouterDom.Route, { path: path, strict: strict, exact: exact, children: function children(_ref2) {
          var match = _ref2.match;
          return _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
              'pre',
              { style: { background: '#efefef' } },
              _react2.default.createElement(
                'code',
                null,
                '<Route',
                _react2.default.createElement('br', null),
                _react2.default.createElement(
                  'label',
                  null,
                  '  path="',
                  _react2.default.createElement('input', {
                    type: 'text',
                    name: 'path',
                    value: path,
                    title: 'A path should begin with a forward slash (/)',
                    onChange: _this2.handleInput.bind(_this2)
                  }),
                  '"'
                ),
                _react2.default.createElement('br', null),
                _react2.default.createElement(
                  'label',
                  null,
                  '  exact={',
                  _react2.default.createElement('input', {
                    type: 'checkbox',
                    name: 'exact',
                    value: exact,
                    onChange: _this2.handleInput.bind(_this2)
                  }),
                  '}'
                ),
                _react2.default.createElement('br', null),
                _react2.default.createElement(
                  'label',
                  null,
                  '  strict={',
                  _react2.default.createElement('input', {
                    type: 'checkbox',
                    name: 'strict',
                    value: strict,
                    onChange: _this2.handleInput.bind(_this2)
                  }),
                  '}'
                ),
                _react2.default.createElement('br', null),
                '  />'
              )
            ),
            _react2.default.createElement(
              'pre',
              { style: {
                  color: match ? 'green' : 'red'
                } },
              _react2.default.createElement(
                'code',
                null,
                JSON.stringify(match, null, 2)
              )
            )
          );
        } });
    }
  }]);

  return TestRoute;
}(_react2.default.Component);

exports.default = TestRoute;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var URLInput = function URLInput() {
  return _react2.default.createElement(_reactRouterDom.Route, { render: function render(_ref) {
      var location = _ref.location,
          replace = _ref.replace;
      return _react2.default.createElement(
        'div',
        { id: 'url' },
        _react2.default.createElement(
          'h3',
          null,
          'Pathname:'
        ),
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement('input', {
            type: 'text',
            placeholder: 'Pathname',
            value: location.pathname,
            style: { width: '100%' },
            onChange: function onChange(event) {
              replace(event.target.value);
            }
          })
        )
      );
    }
  });
};

exports.default = URLInput;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = ReactDOM;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(4);

var _reactRouterDom = __webpack_require__(1);

var _TestRoute = __webpack_require__(2);

var _TestRoute2 = _interopRequireDefault(_TestRoute);

var _URLInput = __webpack_require__(3);

var _URLInput2 = _interopRequireDefault(_URLInput);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = function App() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_URLInput2.default, null),
    _react2.default.createElement(_TestRoute2.default, null)
  );
};

(0, _reactDom.render)(_react2.default.createElement(
  _reactRouterDom.HashRouter,
  null,
  _react2.default.createElement(App, null)
), document.getElementById('root'));

/***/ })
/******/ ]);