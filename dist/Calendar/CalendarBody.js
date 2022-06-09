"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _CalendarDates = _interopRequireDefault(require("./CalendarDates"));

var _templateObject;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function CalendarBody(_ref) {
  var totalDate = _ref.totalDate,
      year = _ref.year,
      month = _ref.month;
  return /*#__PURE__*/React.createElement(DateContainer, null, totalDate.map(function (date, idx) {
    return /*#__PURE__*/React.createElement(_CalendarDates.default, {
      key: "".concat(month, "-").concat(date, "-").concat(idx),
      year: year,
      month: month,
      date: date
    });
  }));
}

var DateContainer = _styledComponents.default.ul(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  flex-flow: row wrap;\n  width: 400px;\n  margin: 0 15px;\n"])));

var _default = CalendarBody;
exports.default = _default;