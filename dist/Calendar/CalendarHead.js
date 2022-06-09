"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _dateUtil = require("../utility/dateUtil");

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var DAY = ['일', '월', '화', '수', '목', '금', '토'];

function CalendarHead(_ref) {
  var year = _ref.year,
      month = _ref.month,
      setYear = _ref.setYear,
      setMonth = _ref.setMonth,
      position = _ref.position;

  function slideLeftDirection() {
    if (month - 1 === 0) {
      var totalMonth = 11;
      setYear(year - 1);
      setMonth(function (month) {
        return month + totalMonth;
      });
      return;
    }

    setMonth(function (month) {
      return month - 1;
    });
  }

  function slideRightDirection() {
    if (month + 1 > 12) {
      var totalMonth = 11;
      setYear(year + 1);
      setMonth(function (month) {
        return month + 1 - totalMonth;
      });
      return;
    }

    setMonth(function (month) {
      return month + 1;
    });
  }

  return /*#__PURE__*/React.createElement(DayHeader, null, /*#__PURE__*/React.createElement(HeaderInfo, null, position === 'leftBtn' && /*#__PURE__*/React.createElement(ArrowBtn, {
    onClick: slideLeftDirection,
    position: position
  }, "<"), /*#__PURE__*/React.createElement(Year, null, (0, _dateUtil.checkYear)(year, month), "\uB144 ", (0, _dateUtil.checkMonth)(month), "\uC6D4"), position === 'rightBtn' && /*#__PURE__*/React.createElement(ArrowBtn, {
    onClick: slideRightDirection,
    position: position
  }, ">")), /*#__PURE__*/React.createElement(Days, null, DAY.map(function (day) {
    return /*#__PURE__*/React.createElement(Day, {
      key: day
    }, day);
  })));
}

var DayHeader = _styledComponents.default.section(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  position: relative;\n  width: 400px;\n"])));

var HeaderInfo = _styledComponents.default.nav(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 25px;\n"])));

var Year = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  font-size: 1.5rem;\n  font-weight: bold;\n"])));

var Days = _styledComponents.default.ul(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  display: flex;\n  margin-bottom: 10px;\n  font-size: 1.25rem;\n  font-weight: 500;\n"])));

var Day = _styledComponents.default.li(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  width: calc(95% / 7);\n  text-align: center;\n  margin-left: 25px;\n\n  :nth-child(7n + 1) {\n    color: #f00;\n  }\n\n  :nth-child(7n) {\n    color: #122ccb;\n  }\n"])));

var ArrowBtn = _styledComponents.default.button(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  position: absolute;\n  top: 25px;\n  margin-left: 15px;\n  border: 0.5px solid #010101;\n  border-radius: 5px;\n  width: 10%;\n  cursor: pointer;\n\n  font-size: 0.875rem;\n  font-weight: bold;\n  left: ", "px;\n\n  right: ", "px;\n"])), function (_ref2) {
  var position = _ref2.position;
  return position === 'leftBtn' ? 10 : '';
}, function (_ref3) {
  var position = _ref3.position;
  return position === 'rightBtn' ? 10 : '';
});

var _default = CalendarHead;
exports.default = _default;