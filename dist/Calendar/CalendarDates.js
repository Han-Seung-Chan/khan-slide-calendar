"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _CalendarProvider = require("../context/CalendarProvider");

var _dateUtil = require("../utility/dateUtil");

var _templateObject, _templateObject2;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function CalendarDates(_ref) {
  var date = _ref.date,
      year = _ref.year,
      month = _ref.month;

  var _useContext = (0, _react.useContext)(_CalendarProvider.CalendarContext),
      checkIn = _useContext.checkIn,
      checkOut = _useContext.checkOut;

  var _useContext2 = (0, _react.useContext)(_CalendarProvider.CalendarDispatchContext),
      handelClickEvent = _useContext2.handelClickEvent;

  var nowDate = (0, _dateUtil.changeLocalDateStr)(year, month - 1, date);
  var disableDate = (0, _dateUtil.compareDate)(new Date(), nowDate);
  var checkedDate = (0, _dateUtil.changeTimeDate)(checkIn) === (0, _dateUtil.changeTimeDate)(nowDate) || (0, _dateUtil.changeTimeDate)(checkOut) === (0, _dateUtil.changeTimeDate)(nowDate);
  var selectedDate = (0, _dateUtil.changeTimeDate)(checkIn) < (0, _dateUtil.changeTimeDate)(nowDate) && (0, _dateUtil.changeTimeDate)(nowDate) < (0, _dateUtil.changeTimeDate)(checkOut);
  return /*#__PURE__*/_react.default.createElement(DateList, null, /*#__PURE__*/_react.default.createElement(DateNum, {
    onClick: function onClick() {
      handelClickEvent(year, month, date);
    },
    disabled: disableDate,
    checkedDate: checkedDate,
    selectedDate: selectedDate,
    date: date
  }, date && "".concat(date, "\uC77C")));
}

var DateList = _styledComponents.default.li(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  position: relative;\n  width: calc(94% / 7);\n  height: 60px;\n  text-align: right;\n  border: 1px solid #ffffff;\n\n  :nth-child(7n + 1) {\n    color: #f00;\n  }\n\n  :nth-child(7n) {\n    color: #122ccb;\n  }\n"])));

var DateNum = _styledComponents.default.button(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  width: 100%;\n  text-align: right;\n  font-size: 1rem;\n  font-weight: 500;\n  color: inherit;\n\n  &:disabled {\n    color: ", ";\n  }\n\n  border-bottom: ", ";\n\n  border-bottom: ", ";\n"])), function (_ref2) {
  var disabled = _ref2.disabled;
  return disabled && "#BDBDBD";
}, function (_ref3) {
  var checkedDate = _ref3.checkedDate,
      date = _ref3.date;
  return checkedDate && date && "3px solid red";
}, function (_ref4) {
  var selectedDate = _ref4.selectedDate,
      date = _ref4.date;
  return selectedDate && date && "3px solid black";
});

var _default = CalendarDates;
exports.default = _default;