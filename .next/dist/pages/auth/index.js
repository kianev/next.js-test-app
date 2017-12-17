'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _User = require('../../components/User');

var _User2 = _interopRequireDefault(_User);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\Kaloian\\Desktop\\Programm\\Projects\\next.js-test-app\\pages\\auth\\index.js?entry';


var authIndexPage = function authIndexPage(props) {
  return _react2.default.createElement('div', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, _react2.default.createElement('h1', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, 'The Auth Index Page - ', props.appName, '.'), _react2.default.createElement(_User2.default, { name: 'Pesho', age: 30, __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }));
};

authIndexPage.getInitialProps = function (context) {
  var promise = new _promise2.default(function (resolve, reject) {
    setTimeout(function () {
      resolve({ appName: 'Next.js app (auth)' });
    }, 1000);
  });
  return promise;
};

exports.default = authIndexPage;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxhdXRoXFxpbmRleC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIlVzZXIiLCJhdXRoSW5kZXhQYWdlIiwicHJvcHMiLCJhcHBOYW1lIiwiZ2V0SW5pdGlhbFByb3BzIiwiY29udGV4dCIsInByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0Iiwic2V0VGltZW91dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLEFBQU87Ozs7QUFDUCxBQUFPLEFBQVU7Ozs7Ozs7OztBQUVqQixJQUFNLGdCQUFnQixTQUFoQixBQUFnQixjQUFBLEFBQUMsT0FBRDt5QkFDcEIsY0FBQTs7Z0JBQUE7a0JBQUEsQUFDRTtBQURGO0FBQUEsR0FBQSxrQkFDRSxjQUFBOztnQkFBQTtrQkFBQTtBQUFBO0FBQUEsS0FBMkIsZ0NBQTNCLEFBQWlDLFNBRG5DLEFBQ0UsQUFDQSxzQkFBQSxBQUFDLGdDQUFLLE1BQU4sQUFBVyxTQUFRLEtBQW5CLEFBQXdCO2dCQUF4QjtrQkFIa0IsQUFDcEIsQUFFRTtBQUFBOztBQUhKOztBQU9BLGNBQUEsQUFBYyxrQkFBa0IsVUFBQSxBQUFDLFNBQVksQUFDM0M7TUFBTSxnQ0FBdUIsVUFBQSxBQUFDLFNBQUQsQUFBVSxRQUFXLEFBQ2hEO2VBQVcsWUFBTSxBQUNmO2NBQVEsRUFBQyxTQUFULEFBQVEsQUFBVSxBQUNuQjtBQUZELE9BQUEsQUFFRyxBQUNKO0FBSkQsQUFBZ0IsQUFLaEIsR0FMZ0I7U0FLaEIsQUFBTyxBQUNSO0FBUEQsQUFTQTs7a0JBQUEsQUFBZSIsImZpbGUiOiJpbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiJDOi9Vc2Vycy9LYWxvaWFuL0Rlc2t0b3AvUHJvZ3JhbW0vUHJvamVjdHMvbmV4dC5qcy10ZXN0LWFwcCJ9