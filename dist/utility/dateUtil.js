"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.changeLocalDateStr = changeLocalDateStr;
exports.changeTimeDate = changeTimeDate;
exports.checkMonth = checkMonth;
exports.checkYear = checkYear;
exports.compareDate = compareDate;
exports.makeDate = void 0;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var makeDate = function makeDate(year, month) {
  var localLastMonthDate = new Date(year, month - 1, 0);
  var localThisMonthDate = new Date(year, month, 0); //이전 날짜

  var PVLastDay = localLastMonthDate.getDay(); //다음 날짜

  var ThisLastDay = localThisMonthDate.getDay();
  var ThisLastDate = localThisMonthDate.getDate(); //이전 날짜 만들기

  var PREVIOUSDATE_ARR = [];

  if (PVLastDay !== 6) {
    for (var i = 0; i < PVLastDay + 1; i++) {
      PREVIOUSDATE_ARR.unshift('');
    }
  } //다음 날짜 만들기


  var NEXTDATE_ARR = [];

  if (ThisLastDay === 6) {
    NEXTDATE_ARR = Array(7).fill('');
  } else {
    for (var _i = 1; _i < 7 - ThisLastDay; _i++) {
      NEXTDATE_ARR.push('');
    }
  } //현재날짜


  var CURRENTDATE_ARR = _toConsumableArray(Array(ThisLastDate + 1).keys()).slice(1);

  return PREVIOUSDATE_ARR.concat(CURRENTDATE_ARR, NEXTDATE_ARR);
};

exports.makeDate = makeDate;

function compareDate(firstDate, secondDate) {
  var date1 = new Date(firstDate);
  var date2 = new Date(secondDate);
  if (date1 >= date2) return true;else return false;
}

function changeLocalDateStr(year, month, date) {
  return new Date(year, month, date).toLocaleDateString();
}

function changeTimeDate(date) {
  return new Date(date).getTime();
}

function checkMonth(nowMonth) {
  var totalMonth = 11;
  if (nowMonth === 13) return nowMonth - 1 - totalMonth;else return nowMonth;
}

function checkYear(nowYear, nowMonth) {
  if (nowMonth === 13) return nowYear + 1;else return nowYear;
}