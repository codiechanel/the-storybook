'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var Progress = require('material-ui/Progress');
var materialUi = require('material-ui');

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
  loader: {
    display: "flex",
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
    // backgroundColor: "#394A5E"
  }
};

var App = function (_Component) {
  _inherits(App, _Component);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
  }

  _createClass(App, [{
    key: "render",
    value: function render() {
      return React__default.createElement(
        "div",
        { style: styles.loader },
        React__default.createElement(
          "div",
          {
            style: {
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center"
            }
          },
          React__default.createElement(Progress.CircularProgress, { size: 50 }),
          React__default.createElement(
            "div",
            {
              style: {
                flexDirection: "column",
                backgroundColor: "red",
                alignItems: "center",
                justifyContent: "center"
              }
            },
            "c"
          )
        )
      );
    }
  }]);

  return App;
}(React.Component);

var _createClass$1 = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck$1(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn$1(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits$1(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// import Avatar from 'material-ui/Avatar'

var App$2 = function (_Component) {
  _inherits$1(App, _Component);

  function App() {
    _classCallCheck$1(this, App);

    return _possibleConstructorReturn$1(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
  }

  _createClass$1(App, [{
    key: 'render',

    // constructor(props, ctx) {
    //   super(props, ctx)
    // }
    value: function render() {
      var _this2 = this;

      var color = this.props.color ? this.props.color : 'red';
      var theChildren = React__default.createElement(
        materialUi.Icon,
        { style: { fontSize: 60, color: color } },
        this.props.iconName
      );
      if (this.props.children) {
        theChildren = this.props.children;
      }
      return React__default.createElement(
        'div',
        {
          style: {
            display: 'flex',
            flexDirection: 'column',
            // backgroundColor: 'blue',
            alignItems: 'center'
            // justifyContent: 'center'
          }
        },
        React__default.createElement(
          materialUi.IconButton
          // className={classes.menuButton}
          ,
          { color: 'contrast',
            'aria-label': 'Menu',
            onClick: function onClick() {
              return _this2.props.onClick();
            }
          },
          theChildren
        ),
        React__default.createElement(
          'p',
          null,
          this.props.title
        )
      );
    }
  }]);

  return App;
}(React.Component);

// export { default as Loader } from './Loader';

exports.Loader = App;
exports.TextBelowIcon = App$2;
