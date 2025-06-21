"use strict";
(self["webpackChunkblog_customizer"] = self["webpackChunkblog_customizer"] || []).push([["ui-select-Select-stories"],{

/***/ "./src/ui/select/Select.stories.tsx":
/*!******************************************!*\
  !*** ./src/ui/select/Select.stories.tsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SelectStory: () => (/* binding */ SelectStory),
/* harmony export */   __namedExportsOrder: () => (/* binding */ __namedExportsOrder),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var _Select__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Select */ "./src/ui/select/Select.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
function _array_like_to_array(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
function _array_with_holes(arr) {
  if (Array.isArray(arr)) return arr;
}
function _iterable_to_array_limit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _s, _e;
  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }
  return _arr;
}
function _non_iterable_rest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _sliced_to_array(arr, i) {
  return _array_with_holes(arr) || _iterable_to_array_limit(arr, i) || _unsupported_iterable_to_array(arr, i) || _non_iterable_rest();
}
function _unsupported_iterable_to_array(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _array_like_to_array(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(n);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
var _this = undefined;



var meta = {
  component: _Select__WEBPACK_IMPORTED_MODULE_1__.Select
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (meta);
var SelectWithState = function () {
  var options = [{
    title: "1 опция",
    value: "1 опция",
    className: ""
  }, {
    title: "2 опция",
    value: "2 опция",
    className: ""
  }, {
    title: "3 опция",
    value: "3 опция",
    className: ""
  }, {
    title: "4 опция",
    value: "4 опция",
    className: ""
  }];
  var _useState = _sliced_to_array((0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(options[0]), 2),
    selected = _useState[0],
    setSelected = _useState[1];
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Select__WEBPACK_IMPORTED_MODULE_1__.Select, {
      selected: selected,
      onChange: setSelected,
      options: options,
      title: "Название выпадающего списка"
    }, void 0, false, {
      fileName: "/Users/moskvin/Documents/dev/10_sprint/blog-customizer/src/ui/select/Select.stories.tsx",
      lineNumber: 24,
      columnNumber: 4
    }, _this)
  }, void 0, false);
};
var SelectStory = {
  render: function () {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SelectWithState, {}, void 0, false, {
      fileName: "/Users/moskvin/Documents/dev/10_sprint/blog-customizer/src/ui/select/Select.stories.tsx",
      lineNumber: 35,
      columnNumber: 16
    }, _this);
  }
};
SelectStory.parameters = {
  ...SelectStory.parameters,
  docs: {
    ...SelectStory.parameters?.docs,
    source: {
      originalSource: "{\n  render: () => <SelectWithState />\n}",
      ...SelectStory.parameters?.docs?.source
    }
  }
};;const __namedExportsOrder = ["SelectStory"];

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[13].use[3]!./src/ui/select/Select.module.scss":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[13].use[3]!./src/ui/select/Select.module.scss ***!
  \****************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../images/wide.svg */ "./src/images/wide.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../../images/narrow.svg */ "./src/images/narrow.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.D3IwUgZitFHw7UHmgQyS {
  position: relative;
}

.mcgceAWtE044tLjxgE9i {
  display: flex;
  flex-direction: column;
  row-gap: 4px;
}

.ThcHbyar4WfvJxUd_tw1 {
  position: absolute;
  top: 50%;
  right: 6px;
  width: 24px;
  margin-top: -12px;
  transition: transform 0.2s ease-in-out, margin-top 0.2s ease-in-out;
}

._iSUTH9kqdnTI3LQ1uvQ {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  height: 50px;
  padding: 15px 17px;
  background: rgb(255, 255, 255);
  outline: 1px solid #000000;
  cursor: pointer;
}

._iSUTH9kqdnTI3LQ1uvQ[data-selected=true] {
  color: rgb(0, 0, 0);
}

.D3IwUgZitFHw7UHmgQyS[data-is-active=true] .ThcHbyar4WfvJxUd_tw1 {
  margin-top: -14px;
  transform: rotate(180deg);
}

.D3IwUgZitFHw7UHmgQyS[data-is-active=true] ._iSUTH9kqdnTI3LQ1uvQ {
  outline: 3px solid #000000;
}

.D3IwUgZitFHw7UHmgQyS:not([data-is-active=true]) ._iSUTH9kqdnTI3LQ1uvQ:not([data-status=invalid]):hover {
  outline: 1px solid #ffc802;
}

.pdF4uGlmn2KD1qj0kAQ9 {
  position: absolute;
  z-index: 10;
  display: grid;
  box-sizing: border-box;
  width: 100%;
  margin: 0;
  padding: 0;
  list-style: none;
  background-color: rgb(255, 255, 255);
  border-top: none;
  outline: 3px solid #000000;
}

.IdLGPJjXmtyCL7tUygIb {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 30px;
  padding: 15px 17px;
  background-color: rgb(255, 255, 255);
  border: 1px;
  cursor: pointer;
}

.IdLGPJjXmtyCL7tUygIb[aria-selected=true] {
  background-color: rgba(0, 0, 0, 0.05);
}

.IdLGPJjXmtyCL7tUygIb:hover {
  background: var(--grey, #c4c4c4);
}

.TCWTXMW8c1_NbWHKeIhU::before {
  content: "";
  width: 35px;
  height: 35px;
  margin-right: 10px;
  background-color: #000000;
}

.TCWTXMW8c1_NbWHKeIhU[data-selected=true]::after {
  content: "";
  position: absolute;
  left: 26px;
  width: 17px;
  height: 17px;
  border-radius: 100%;
  background-color: #ffffff;
}

.sUCPk9TAQShEDlazYxZA::before {
  content: "";
  width: 35px;
  height: 35px;
  margin-right: 10px;
  box-sizing: border-box;
  background-color: #ffffff;
  border: 1px solid #000000;
}

.sUCPk9TAQShEDlazYxZA[data-selected=true]::after {
  content: "";
  position: absolute;
  left: 26px;
  width: 17px;
  height: 17px;
  border-radius: 100%;
  background-color: #000000;
}

.T6qJNAtK9bcKoR7xPklI::before {
  content: "";
  width: 35px;
  height: 35px;
  margin-right: 10px;
  background-color: #c4c4c4;
}

.T6qJNAtK9bcKoR7xPklI[data-selected=true]::after {
  content: "";
  position: absolute;
  left: 26px;
  width: 17px;
  height: 17px;
  border-radius: 100%;
  background-color: #ffffff;
}

.r99SMGoZi4_F3W67UOuf::before {
  content: "";
  width: 35px;
  height: 35px;
  margin-right: 10px;
  background-color: #feafe8;
}

.r99SMGoZi4_F3W67UOuf[data-selected=true]::after {
  content: "";
  position: absolute;
  left: 26px;
  width: 17px;
  height: 17px;
  border-radius: 100%;
  background-color: #ffffff;
}

.I9vEoeTZa4JpqJYBOrIw::before {
  content: "";
  width: 35px;
  height: 35px;
  margin-right: 10px;
  background-color: #fd24af;
}

.I9vEoeTZa4JpqJYBOrIw[data-selected=true]::after {
  content: "";
  position: absolute;
  left: 26px;
  width: 17px;
  height: 17px;
  border-radius: 100%;
  background-color: #ffffff;
}

.Mju4iOkr7EvStp2cggZn::before {
  content: "";
  width: 35px;
  height: 35px;
  margin-right: 10px;
  background-color: #ffc802;
}

.Mju4iOkr7EvStp2cggZn[data-selected=true]::after {
  content: "";
  position: absolute;
  left: 26px;
  width: 17px;
  height: 17px;
  border-radius: 100%;
  background-color: #ffffff;
}

.Mr5CBoHRYjRoGfxjAu1q::before {
  content: "";
  width: 35px;
  height: 35px;
  margin-right: 10px;
  background-color: #80d994;
}

.Mr5CBoHRYjRoGfxjAu1q[data-selected=true]::after {
  content: "";
  position: absolute;
  left: 26px;
  width: 17px;
  height: 17px;
  border-radius: 100%;
  background-color: #ffffff;
}

.VbKbeC1caIc9R1tt0yiJ::before {
  content: "";
  width: 35px;
  height: 35px;
  margin-right: 10px;
  background-color: #6fc1fd;
}

.VbKbeC1caIc9R1tt0yiJ[data-selected=true]::after {
  content: "";
  position: absolute;
  left: 26px;
  width: 17px;
  height: 17px;
  border-radius: 100%;
  background-color: #ffffff;
}

.JIBJh2gcOJjuQs_kSbps::before {
  content: "";
  width: 35px;
  height: 35px;
  margin-right: 10px;
  background-color: #5f0dee;
}

.JIBJh2gcOJjuQs_kSbps[data-selected=true]::after {
  content: "";
  position: absolute;
  left: 26px;
  width: 17px;
  height: 17px;
  border-radius: 100%;
  background-color: #ffffff;
}

.oJD47KrKao2UTazTI5uc::before {
  content: "";
  width: 25px;
  height: 25px;
  margin-right: 10px;
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
}

.O5OnULHy_McQ0jxY41BU::before {
  content: "";
  width: 25px;
  height: 25px;
  margin-right: 10px;
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
}`, "",{"version":3,"sources":["webpack://./src/ui/select/Select.module.scss"],"names":[],"mappings":"AAAA;EACC,kBAAA;AACD;;AAEA;EACC,aAAA;EACA,sBAAA;EACA,YAAA;AACD;;AAEA;EACC,kBAAA;EACA,QAAA;EACA,UAAA;EACA,WAAA;EACA,iBAAA;EACA,mEAAA;AACD;;AAEA;EACC,aAAA;EACA,2BAAA;EACA,mBAAA;EACA,sBAAA;EACA,WAAA;EACA,YAAA;EACA,kBAAA;EACA,8BAAA;EACA,0BAAA;EACA,eAAA;AACD;;AAEA;EACC,mBAAA;AACD;;AAEA;EACC,iBAAA;EACA,yBAAA;AACD;;AAEA;EACC,0BAAA;AACD;;AAEA;EAEC,0BAAA;AAAD;;AAGA;EACC,kBAAA;EACA,WAAA;EACA,aAAA;EACA,sBAAA;EACA,WAAA;EACA,SAAA;EACA,UAAA;EACA,gBAAA;EACA,oCAAA;EACA,gBAAA;EACA,0BAAA;AAAD;;AAGA;EACC,aAAA;EACA,2BAAA;EACA,mBAAA;EACA,YAAA;EACA,kBAAA;EACA,oCAAA;EACA,WAAA;EACA,eAAA;AAAD;;AAGA;EACC,qCAAA;AAAD;;AAGA;EACC,gCAAA;AAAD;;AAUA;EANC,WAAA;EACA,WAAA;EACA,YAAA;EACA,kBAAA;EAKA,yBAAA;AAJD;;AAgBA;EARC,WAAA;EACA,kBAAA;EACA,UAAA;EACA,WAAA;EACA,YAAA;EACA,mBAAA;EAKA,yBAAA;AARD;;AAWA;EAzBC,WAAA;EACA,WAAA;EACA,YAAA;EACA,kBAAA;EAwBA,sBAAA;EACA,yBAAA;EACA,yBAAA;AALD;;AAQA;EApBC,WAAA;EACA,kBAAA;EACA,UAAA;EACA,WAAA;EACA,YAAA;EACA,mBAAA;EAiBA,yBAAA;AAAD;;AAGA;EArCC,WAAA;EACA,WAAA;EACA,YAAA;EACA,kBAAA;EAoCA,yBAAA;AAGD;;AAAA;EA9BC,WAAA;EACA,kBAAA;EACA,UAAA;EACA,WAAA;EACA,YAAA;EACA,mBAAA;EA2BA,yBAAA;AAQD;;AALA;EA/CC,WAAA;EACA,WAAA;EACA,YAAA;EACA,kBAAA;EA8CA,yBAAA;AAWD;;AARA;EAxCC,WAAA;EACA,kBAAA;EACA,UAAA;EACA,WAAA;EACA,YAAA;EACA,mBAAA;EAqCA,yBAAA;AAgBD;;AAbA;EAzDC,WAAA;EACA,WAAA;EACA,YAAA;EACA,kBAAA;EAwDA,yBAAA;AAmBD;;AAhBA;EAlDC,WAAA;EACA,kBAAA;EACA,UAAA;EACA,WAAA;EACA,YAAA;EACA,mBAAA;EA+CA,yBAAA;AAwBD;;AArBA;EAnEC,WAAA;EACA,WAAA;EACA,YAAA;EACA,kBAAA;EAkEA,yBAAA;AA2BD;;AAxBA;EA5DC,WAAA;EACA,kBAAA;EACA,UAAA;EACA,WAAA;EACA,YAAA;EACA,mBAAA;EAyDA,yBAAA;AAgCD;;AA7BA;EA7EC,WAAA;EACA,WAAA;EACA,YAAA;EACA,kBAAA;EA4EA,yBAAA;AAmCD;;AAhCA;EAtEC,WAAA;EACA,kBAAA;EACA,UAAA;EACA,WAAA;EACA,YAAA;EACA,mBAAA;EAmEA,yBAAA;AAwCD;;AArCA;EAvFC,WAAA;EACA,WAAA;EACA,YAAA;EACA,kBAAA;EAsFA,yBAAA;AA2CD;;AAxCA;EAhFC,WAAA;EACA,kBAAA;EACA,UAAA;EACA,WAAA;EACA,YAAA;EACA,mBAAA;EA6EA,yBAAA;AAgDD;;AA7CA;EAjGC,WAAA;EACA,WAAA;EACA,YAAA;EACA,kBAAA;EAgGA,yBAAA;AAmDD;;AAhDA;EA1FC,WAAA;EACA,kBAAA;EACA,UAAA;EACA,WAAA;EACA,YAAA;EACA,mBAAA;EAuFA,yBAAA;AAwDD;;AA9CA;EANC,WAAA;EACA,WAAA;EACA,YAAA;EACA,kBAAA;EAKA,yDAAA;AAoDD;;AAjDA;EAXC,WAAA;EACA,WAAA;EACA,YAAA;EACA,kBAAA;EAUA,yDAAA;AAuDD","sourcesContent":[".selectWrapper {\n\tposition: relative;\n}\n\n.container {\n\tdisplay: flex;\n\tflex-direction: column;\n\trow-gap: 4px;\n}\n\n.arrow {\n\tposition: absolute;\n\ttop: 50%;\n\tright: 6px;\n\twidth: 24px;\n\tmargin-top: -12px;\n\ttransition: transform 0.2s ease-in-out, margin-top 0.2s ease-in-out;\n}\n\n.placeholder {\n\tdisplay: flex;\n\tjustify-content: flex-start;\n\talign-items: center;\n\tbox-sizing: border-box;\n\twidth: 100%;\n\theight: 50px;\n\tpadding: 15px 17px;\n\tbackground: rgb(255 255 255);\n\toutline: 1px solid #000000;\n\tcursor: pointer;\n}\n\n.placeholder[data-selected='true'] {\n\tcolor: rgb(0 0 0);\n}\n\n.selectWrapper[data-is-active='true'] .arrow {\n\tmargin-top: -14px;\n\ttransform: rotate(180deg);\n}\n\n.selectWrapper[data-is-active='true'] .placeholder {\n\toutline: 3px solid #000000;\n}\n\n.selectWrapper:not([data-is-active='true'])\n\t.placeholder:not([data-status='invalid']):hover {\n\toutline: 1px solid #ffc802;\n}\n\n.select {\n\tposition: absolute;\n\tz-index: 10;\n\tdisplay: grid;\n\tbox-sizing: border-box;\n\twidth: 100%;\n\tmargin: 0;\n\tpadding: 0;\n\tlist-style: none;\n\tbackground-color: rgb(255 255 255 / 100%);\n\tborder-top: none;\n\toutline: 3px solid #000000;\n}\n\n.option {\n\tdisplay: flex;\n\tjustify-content: flex-start;\n\talign-items: center;\n\theight: 30px;\n\tpadding: 15px 17px;\n\tbackground-color: rgb(255 255 255 / 100%);\n\tborder: 1px;\n\tcursor: pointer;\n}\n\n.option[aria-selected='true'] {\n\tbackground-color: rgb(0 0 0 / 5%);\n}\n\n.option:hover {\n\tbackground: var(--grey, #c4c4c4);\n}\n\n@mixin option-color-before {\n\tcontent: '';\n\twidth: 35px;\n\theight: 35px;\n\tmargin-right: 10px;\n}\n\n.option-black::before {\n\t@include option-color-before;\n\tbackground-color: #000000;\n}\n\n@mixin option-color-after {\n\tcontent: '';\n\tposition: absolute;\n\tleft: 26px;\n\twidth: 17px;\n\theight: 17px;\n\tborder-radius: 100%;\n}\n\n.option-black[data-selected='true']::after {\n\t@include option-color-after;\n\tbackground-color: #ffffff;\n}\n\n.option-white::before {\n\t@include option-color-before;\n\tbox-sizing: border-box;\n\tbackground-color: #ffffff;\n\tborder: 1px solid #000000;\n}\n\n.option-white[data-selected='true']::after {\n\t@include option-color-after;\n\tbackground-color: #000000;\n}\n\n.option-gray::before {\n\t@include option-color-before;\n\tbackground-color: #c4c4c4;\n}\n\n.option-gray[data-selected='true']::after {\n\t@include option-color-after;\n\tbackground-color: #ffffff;\n}\n\n.option-pink::before {\n\t@include option-color-before;\n\tbackground-color: #feafe8;\n}\n\n.option-pink[data-selected='true']::after {\n\t@include option-color-after;\n\tbackground-color: #ffffff;\n}\n\n.option-fuchsia::before {\n\t@include option-color-before;\n\tbackground-color: #fd24af;\n}\n\n.option-fuchsia[data-selected='true']::after {\n\t@include option-color-after;\n\tbackground-color: #ffffff;\n}\n\n.option-yellow::before {\n\t@include option-color-before;\n\tbackground-color: #ffc802;\n}\n\n.option-yellow[data-selected='true']::after {\n\t@include option-color-after;\n\tbackground-color: #ffffff;\n}\n\n.option-green::before {\n\t@include option-color-before;\n\tbackground-color: #80d994;\n}\n\n.option-green[data-selected='true']::after {\n\t@include option-color-after;\n\tbackground-color: #ffffff;\n}\n\n.option-blue::before {\n\t@include option-color-before;\n\tbackground-color: #6fc1fd;\n}\n\n.option-blue[data-selected='true']::after {\n\t@include option-color-after;\n\tbackground-color: #ffffff;\n}\n\n.option-purple::before {\n\t@include option-color-before;\n\tbackground-color: #5f0dee;\n}\n\n.option-purple[data-selected='true']::after {\n\t@include option-color-after;\n\tbackground-color: #ffffff;\n}\n\n@mixin option-width-before {\n\tcontent: '';\n\twidth: 25px;\n\theight: 25px;\n\tmargin-right: 10px;\n}\n\n.option-wide::before {\n\t@include option-width-before;\n\tbackground-image: url('../../images/wide.svg');\n}\n\n.option-narrow::before {\n\t@include option-width-before;\n\tbackground-image: url('../../images/narrow.svg');\n}\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"selectWrapper": `D3IwUgZitFHw7UHmgQyS`,
	"container": `mcgceAWtE044tLjxgE9i`,
	"arrow": `ThcHbyar4WfvJxUd_tw1`,
	"placeholder": `_iSUTH9kqdnTI3LQ1uvQ`,
	"select": `pdF4uGlmn2KD1qj0kAQ9`,
	"option": `IdLGPJjXmtyCL7tUygIb`,
	"option-black": `TCWTXMW8c1_NbWHKeIhU`,
	"option-white": `sUCPk9TAQShEDlazYxZA`,
	"option-gray": `T6qJNAtK9bcKoR7xPklI`,
	"option-pink": `r99SMGoZi4_F3W67UOuf`,
	"option-fuchsia": `I9vEoeTZa4JpqJYBOrIw`,
	"option-yellow": `Mju4iOkr7EvStp2cggZn`,
	"option-green": `Mr5CBoHRYjRoGfxjAu1q`,
	"option-blue": `VbKbeC1caIc9R1tt0yiJ`,
	"option-purple": `JIBJh2gcOJjuQs_kSbps`,
	"option-wide": `oJD47KrKao2UTazTI5uc`,
	"option-narrow": `O5OnULHy_McQ0jxY41BU`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/ui/select/Select.module.scss":
/*!******************************************!*\
  !*** ./src/ui/select/Select.module.scss ***!
  \******************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_13_use_1_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_13_use_3_Select_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!../../../node_modules/resolve-url-loader/index.js!../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[13].use[3]!./Select.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[13].use[3]!./src/ui/select/Select.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_13_use_1_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_13_use_3_Select_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_13_use_1_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_13_use_3_Select_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }
  var p;
  for (p in a) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }
    if (a[p] !== b[p]) {
      return false;
    }
  }
  for (p in b) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }
    if (!a[p]) {
      return false;
    }
  }
  return true;
};
    var isNamedExport = !_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_13_use_1_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_13_use_3_Select_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;
    var oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_13_use_1_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_13_use_3_Select_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_13_use_1_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_13_use_3_Select_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

    module.hot.accept(
      /*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!../../../node_modules/resolve-url-loader/index.js!../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[13].use[3]!./Select.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[13].use[3]!./src/ui/select/Select.module.scss",
      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_13_use_1_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_13_use_3_Select_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!../../../node_modules/resolve-url-loader/index.js!../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[13].use[3]!./Select.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[13].use[3]!./src/ui/select/Select.module.scss");
(function () {
        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_13_use_1_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_13_use_3_Select_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_13_use_1_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_13_use_3_Select_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals, isNamedExport)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_13_use_1_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_13_use_3_Select_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_13_use_1_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_13_use_3_Select_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

              update(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_13_use_1_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_13_use_3_Select_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"]);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}



       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_13_use_1_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_13_use_3_Select_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_13_use_1_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_13_use_3_Select_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_13_use_1_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_13_use_3_Select_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/constants/articleProps.ts":
/*!***************************************!*\
  !*** ./src/constants/articleProps.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   backgroundColors: () => (/* binding */ backgroundColors),
/* harmony export */   contentWidthArr: () => (/* binding */ contentWidthArr),
/* harmony export */   defaultArticleState: () => (/* binding */ defaultArticleState),
/* harmony export */   fontColors: () => (/* binding */ fontColors),
/* harmony export */   fontFamilyClasses: () => (/* binding */ fontFamilyClasses),
/* harmony export */   fontFamilyOptions: () => (/* binding */ fontFamilyOptions),
/* harmony export */   fontSizeOptions: () => (/* binding */ fontSizeOptions)
/* harmony export */ });
var fontFamilyClasses = [
    "open-sans",
    "ubuntu",
    "cormorant-garamond",
    "days-one",
    "merriweather"
];
var fontFamilyOptions = [
    {
        title: "Open Sans",
        value: "Open Sans",
        className: fontFamilyClasses[0]
    },
    {
        title: "Ubuntu",
        value: "Ubuntu",
        className: fontFamilyClasses[1]
    },
    {
        title: "Cormorant Garamond",
        value: "Cormorant Garamond",
        className: fontFamilyClasses[2]
    },
    {
        title: "Days One",
        value: "Days One",
        className: fontFamilyClasses[3]
    },
    {
        title: "Merriweather",
        value: "Merriweather",
        className: fontFamilyClasses[4]
    }
];
var fontColors = [
    {
        title: "Черный",
        value: "#000000",
        className: "font-black",
        optionClassName: "option-black"
    },
    {
        title: "Белый",
        value: "#FFFFFF",
        className: "font-white",
        optionClassName: "option-white"
    },
    {
        title: "Серый",
        value: "#C4C4C4",
        className: "font-gray",
        optionClassName: "option-gray"
    },
    {
        title: "Розовый",
        value: "#FEAFE8",
        className: "font-pink",
        optionClassName: "option-pink"
    },
    {
        title: "Ярко-розовый",
        value: "#FD24AF",
        className: "font-fuchsia",
        optionClassName: "option-fuchsia"
    },
    {
        title: "Жёлтый",
        value: "#FFC802",
        className: "font-yellow",
        optionClassName: "option-yellow"
    },
    {
        title: "Зелёный",
        value: "#80D994",
        className: "font-green",
        optionClassName: "option-green"
    },
    {
        title: "Голубой",
        value: "#6FC1FD",
        className: "font-blue",
        optionClassName: "option-blue"
    },
    {
        title: "Фиолетовый",
        value: "#5F0DEE",
        className: "font-purple",
        optionClassName: "option-purple"
    }
];
var backgroundColors = [
    {
        title: "Белый",
        value: "#FFFFFF",
        className: "bg-white",
        optionClassName: "option-white"
    },
    {
        title: "Черный",
        value: "#000000",
        className: "bg-black",
        optionClassName: "option-black"
    },
    {
        title: "Серый",
        value: "#C4C4C4",
        className: "bg-gray",
        optionClassName: "option-gray"
    },
    {
        title: "Розовый",
        value: "#FEAFE8",
        className: "bg-pink",
        optionClassName: "option-pink"
    },
    {
        title: "Ярко-розовый",
        value: "#FD24AF",
        className: "bg-fuchsia",
        optionClassName: "option-fuchsia"
    },
    {
        title: "Жёлтый",
        value: "#FFC802",
        className: "bg-yellow",
        optionClassName: "option-yellow"
    },
    {
        title: "Зелёный",
        value: "#80D994",
        className: "bg-green",
        optionClassName: "option-green"
    },
    {
        title: "Голубой",
        value: "#6FC1FD",
        className: "bg-blue",
        optionClassName: "option-blue"
    },
    {
        title: "Фиолетовый",
        value: "#5F0DEE",
        className: "bg-purple",
        optionClassName: "option-purple"
    }
];
var contentWidthArr = [
    {
        title: "Широкий",
        value: "1394px",
        className: "width-wide",
        optionClassName: "option-wide"
    },
    {
        title: "Узкий",
        value: "948px",
        className: "width-narrow",
        optionClassName: "option-narrow"
    }
];
var fontSizeOptions = [
    {
        title: "18px",
        value: "18px",
        className: "font-size-18"
    },
    {
        title: "25px",
        value: "25px",
        className: "font-size-25"
    },
    {
        title: "38px",
        value: "38px",
        className: "font-size-38"
    }
];
var defaultArticleState = {
    fontFamilyOption: fontFamilyOptions[0],
    fontColor: fontColors[0],
    backgroundColor: backgroundColors[0],
    contentWidth: contentWidthArr[0],
    fontSizeOption: fontSizeOptions[0]
};


/***/ }),

/***/ "./src/ui/select/Option.tsx":
/*!**********************************!*\
  !*** ./src/ui/select/Option.tsx ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Option: () => (/* binding */ Option)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.mjs");
/* harmony import */ var src_ui_text__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/ui/text */ "./src/ui/text/index.tsx");
/* harmony import */ var _helpers_isFontFamilyClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helpers/isFontFamilyClass */ "./src/ui/select/helpers/isFontFamilyClass.ts");
/* harmony import */ var _hooks_useEnterOptionSubmit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./hooks/useEnterOptionSubmit */ "./src/ui/select/hooks/useEnterOptionSubmit.tsx");
/* harmony import */ var _Select_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Select.module.scss */ "./src/ui/select/Select.module.scss");
var _this = undefined;







var Option = function(props) {
    var _props_option = props.option, value = _props_option.value, title = _props_option.title, optionClassName = _props_option.optionClassName, className = _props_option.className, onClick = props.onClick;
    var optionRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    var handleClick = function(clickedValue) {
        return function() {
            onClick(clickedValue);
        };
    };
    (0,_hooks_useEnterOptionSubmit__WEBPACK_IMPORTED_MODULE_4__.useEnterOptionSubmit)({
        optionRef: optionRef,
        value: value,
        onClick: onClick
    });
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        className: (0,clsx__WEBPACK_IMPORTED_MODULE_6__["default"])(_Select_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].option, _Select_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"][optionClassName || ""]),
        value: value,
        onClick: handleClick(value),
        tabIndex: 0,
        "data-testid": "select-option-".concat(value),
        ref: optionRef,
        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(src_ui_text__WEBPACK_IMPORTED_MODULE_2__.Text, {
            family: (0,_helpers_isFontFamilyClass__WEBPACK_IMPORTED_MODULE_3__.isFontFamilyClass)(className) ? className : undefined,
            children: title
        }, void 0, false, {
            fileName: "/Users/moskvin/Documents/dev/10_sprint/blog-customizer/src/ui/select/Option.tsx",
            lineNumber: 43,
            columnNumber: 4
        }, _this)
    }, void 0, false, {
        fileName: "/Users/moskvin/Documents/dev/10_sprint/blog-customizer/src/ui/select/Option.tsx",
        lineNumber: 36,
        columnNumber: 3
    }, _this);
};
Option.__docgenInfo = {
    "description": "",
    "methods": [],
    "displayName": "Option",
    "props": {
        "option": {
            "required": true,
            "tsType": {
                "name": "signature",
                "type": "object",
                "raw": "{\n	title: string;\n	value: string;\n	className: string;\n	optionClassName?: string;\n}",
                "signature": {
                    "properties": [
                        {
                            "key": "title",
                            "value": {
                                "name": "string",
                                "required": true
                            }
                        },
                        {
                            "key": "value",
                            "value": {
                                "name": "string",
                                "required": true
                            }
                        },
                        {
                            "key": "className",
                            "value": {
                                "name": "string",
                                "required": true
                            }
                        },
                        {
                            "key": "optionClassName",
                            "value": {
                                "name": "string",
                                "required": false
                            }
                        }
                    ]
                }
            },
            "description": ""
        },
        "onClick": {
            "required": true,
            "tsType": {
                "name": "signature",
                "type": "function",
                "raw": "(value: OptionType['value']) => void",
                "signature": {
                    "arguments": [
                        {
                            "type": {
                                "name": "string",
                                "raw": "OptionType['value']"
                            },
                            "name": "value"
                        }
                    ],
                    "return": {
                        "name": "void"
                    }
                }
            },
            "description": ""
        }
    }
};


/***/ }),

/***/ "./src/ui/select/Select.tsx":
/*!**********************************!*\
  !*** ./src/ui/select/Select.tsx ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Select: () => (/* binding */ Select)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.mjs");
/* harmony import */ var src_ui_text__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/ui/text */ "./src/ui/text/index.tsx");
/* harmony import */ var src_images_arrow_down_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/images/arrow-down.svg */ "./src/images/arrow-down.svg");
/* harmony import */ var _Option__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Option */ "./src/ui/select/Option.tsx");
/* harmony import */ var _helpers_isFontFamilyClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./helpers/isFontFamilyClass */ "./src/ui/select/helpers/isFontFamilyClass.ts");
/* harmony import */ var _hooks_useEnterSubmit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./hooks/useEnterSubmit */ "./src/ui/select/hooks/useEnterSubmit.ts");
/* harmony import */ var _hooks_useOutsideClickClose__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./hooks/useOutsideClickClose */ "./src/ui/select/hooks/useOutsideClickClose.ts");
/* harmony import */ var _Select_module_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Select.module.scss */ "./src/ui/select/Select.module.scss");
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
}
function _iterable_to_array_limit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _non_iterable_rest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _sliced_to_array(arr, i) {
    return _array_with_holes(arr) || _iterable_to_array_limit(arr, i) || _unsupported_iterable_to_array(arr, i) || _non_iterable_rest();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
var _this = undefined;










var Select = function(props) {
    var options = props.options, placeholder = props.placeholder, selected = props.selected, onChange = props.onChange, onClose = props.onClose, title = props.title;
    var _useState = _sliced_to_array((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), 2), isOpen = _useState[0], setIsOpen = _useState[1];
    var rootRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    var placeholderRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    var _selected_optionClassName;
    var optionClassName = (_selected_optionClassName = selected === null || selected === void 0 ? void 0 : selected.optionClassName) !== null && _selected_optionClassName !== void 0 ? _selected_optionClassName : "";
    (0,_hooks_useOutsideClickClose__WEBPACK_IMPORTED_MODULE_7__.useOutsideClickClose)({
        isOpen: isOpen,
        rootRef: rootRef,
        onClose: onClose,
        onChange: setIsOpen
    });
    (0,_hooks_useEnterSubmit__WEBPACK_IMPORTED_MODULE_6__.useEnterSubmit)({
        placeholderRef: placeholderRef,
        onChange: setIsOpen
    });
    var handleOptionClick = function(option) {
        setIsOpen(false);
        onChange === null || onChange === void 0 ? void 0 : onChange(option);
    };
    var handlePlaceHolderClick = function() {
        setIsOpen(function(isOpen) {
            return !isOpen;
        });
    };
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: _Select_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].container,
        children: [
            title && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(src_ui_text__WEBPACK_IMPORTED_MODULE_2__.Text, {
                    size: 12,
                    weight: 800,
                    uppercase: true,
                    children: title
                }, void 0, false, {
                    fileName: "/Users/moskvin/Documents/dev/10_sprint/blog-customizer/src/ui/select/Select.tsx",
                    lineNumber: 54,
                    columnNumber: 6
                }, _this)
            }, void 0, false),
            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: _Select_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].selectWrapper,
                ref: rootRef,
                "data-is-active": isOpen,
                "data-testid": "selectWrapper",
                children: [
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
                        src: src_images_arrow_down_svg__WEBPACK_IMPORTED_MODULE_3__,
                        alt: "иконка стрелочки",
                        className: _Select_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].arrow
                    }, void 0, false, {
                        fileName: "/Users/moskvin/Documents/dev/10_sprint/blog-customizer/src/ui/select/Select.tsx",
                        lineNumber: 64,
                        columnNumber: 5
                    }, _this),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                        className: (0,clsx__WEBPACK_IMPORTED_MODULE_9__["default"])(_Select_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].placeholder, _Select_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"][optionClassName]),
                        "data-status": status,
                        "data-selected": !!(selected === null || selected === void 0 ? void 0 : selected.value),
                        onClick: handlePlaceHolderClick,
                        role: "button",
                        tabIndex: 0,
                        ref: placeholderRef,
                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(src_ui_text__WEBPACK_IMPORTED_MODULE_2__.Text, {
                            family: (0,_helpers_isFontFamilyClass__WEBPACK_IMPORTED_MODULE_5__.isFontFamilyClass)(selected === null || selected === void 0 ? void 0 : selected.className) ? selected === null || selected === void 0 ? void 0 : selected.className : undefined,
                            children: (selected === null || selected === void 0 ? void 0 : selected.title) || placeholder
                        }, void 0, false, {
                            fileName: "/Users/moskvin/Documents/dev/10_sprint/blog-customizer/src/ui/select/Select.tsx",
                            lineNumber: 76,
                            columnNumber: 6
                        }, _this)
                    }, void 0, false, {
                        fileName: "/Users/moskvin/Documents/dev/10_sprint/blog-customizer/src/ui/select/Select.tsx",
                        lineNumber: 65,
                        columnNumber: 5
                    }, _this),
                    isOpen && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
                        className: _Select_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].select,
                        "data-testid": "selectDropdown",
                        children: options.filter(function(option) {
                            return (selected === null || selected === void 0 ? void 0 : selected.value) !== option.value;
                        }).map(function(option) {
                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Option__WEBPACK_IMPORTED_MODULE_4__.Option, {
                                option: option,
                                onClick: function() {
                                    return handleOptionClick(option);
                                }
                            }, option.value, false, {
                                fileName: "/Users/moskvin/Documents/dev/10_sprint/blog-customizer/src/ui/select/Select.tsx",
                                lineNumber: 90,
                                columnNumber: 9
                            }, _this);
                        })
                    }, void 0, false, {
                        fileName: "/Users/moskvin/Documents/dev/10_sprint/blog-customizer/src/ui/select/Select.tsx",
                        lineNumber: 86,
                        columnNumber: 6
                    }, _this)
                ]
            }, void 0, true, {
                fileName: "/Users/moskvin/Documents/dev/10_sprint/blog-customizer/src/ui/select/Select.tsx",
                lineNumber: 59,
                columnNumber: 4
            }, _this)
        ]
    }, void 0, true, {
        fileName: "/Users/moskvin/Documents/dev/10_sprint/blog-customizer/src/ui/select/Select.tsx",
        lineNumber: 51,
        columnNumber: 3
    }, _this);
};
Select.__docgenInfo = {
    "description": "",
    "methods": [],
    "displayName": "Select",
    "props": {
        "selected": {
            "required": true,
            "tsType": {
                "name": "union",
                "raw": "OptionType | null",
                "elements": [
                    {
                        "name": "signature",
                        "type": "object",
                        "raw": "{\n	title: string;\n	value: string;\n	className: string;\n	optionClassName?: string;\n}",
                        "signature": {
                            "properties": [
                                {
                                    "key": "title",
                                    "value": {
                                        "name": "string",
                                        "required": true
                                    }
                                },
                                {
                                    "key": "value",
                                    "value": {
                                        "name": "string",
                                        "required": true
                                    }
                                },
                                {
                                    "key": "className",
                                    "value": {
                                        "name": "string",
                                        "required": true
                                    }
                                },
                                {
                                    "key": "optionClassName",
                                    "value": {
                                        "name": "string",
                                        "required": false
                                    }
                                }
                            ]
                        }
                    },
                    {
                        "name": "null"
                    }
                ]
            },
            "description": ""
        },
        "options": {
            "required": true,
            "tsType": {
                "name": "Array",
                "elements": [
                    {
                        "name": "signature",
                        "type": "object",
                        "raw": "{\n	title: string;\n	value: string;\n	className: string;\n	optionClassName?: string;\n}",
                        "signature": {
                            "properties": [
                                {
                                    "key": "title",
                                    "value": {
                                        "name": "string",
                                        "required": true
                                    }
                                },
                                {
                                    "key": "value",
                                    "value": {
                                        "name": "string",
                                        "required": true
                                    }
                                },
                                {
                                    "key": "className",
                                    "value": {
                                        "name": "string",
                                        "required": true
                                    }
                                },
                                {
                                    "key": "optionClassName",
                                    "value": {
                                        "name": "string",
                                        "required": false
                                    }
                                }
                            ]
                        }
                    }
                ],
                "raw": "OptionType[]"
            },
            "description": ""
        },
        "placeholder": {
            "required": false,
            "tsType": {
                "name": "string"
            },
            "description": ""
        },
        "onChange": {
            "required": false,
            "tsType": {
                "name": "signature",
                "type": "function",
                "raw": "(selected: OptionType) => void",
                "signature": {
                    "arguments": [
                        {
                            "type": {
                                "name": "signature",
                                "type": "object",
                                "raw": "{\n	title: string;\n	value: string;\n	className: string;\n	optionClassName?: string;\n}",
                                "signature": {
                                    "properties": [
                                        {
                                            "key": "title",
                                            "value": {
                                                "name": "string",
                                                "required": true
                                            }
                                        },
                                        {
                                            "key": "value",
                                            "value": {
                                                "name": "string",
                                                "required": true
                                            }
                                        },
                                        {
                                            "key": "className",
                                            "value": {
                                                "name": "string",
                                                "required": true
                                            }
                                        },
                                        {
                                            "key": "optionClassName",
                                            "value": {
                                                "name": "string",
                                                "required": false
                                            }
                                        }
                                    ]
                                }
                            },
                            "name": "selected"
                        }
                    ],
                    "return": {
                        "name": "void"
                    }
                }
            },
            "description": ""
        },
        "onClose": {
            "required": false,
            "tsType": {
                "name": "signature",
                "type": "function",
                "raw": "() => void",
                "signature": {
                    "arguments": [],
                    "return": {
                        "name": "void"
                    }
                }
            },
            "description": ""
        },
        "title": {
            "required": false,
            "tsType": {
                "name": "string"
            },
            "description": ""
        }
    }
};


/***/ }),

/***/ "./src/ui/select/helpers/isFontFamilyClass.ts":
/*!****************************************************!*\
  !*** ./src/ui/select/helpers/isFontFamilyClass.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isFontFamilyClass: () => (/* binding */ isFontFamilyClass)
/* harmony export */ });
/* harmony import */ var src_constants_articleProps__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/constants/articleProps */ "./src/constants/articleProps.ts");

/** Так выглядят typeGuards в ts, он позволяет нам определить является ли переменная определенным типом.
 * Подробнее о них можно почитать тут - https://www.typescriptlang.org/docs/handbook/advanced-types.html */ function isFontFamilyClass(family) {
    return src_constants_articleProps__WEBPACK_IMPORTED_MODULE_0__.fontFamilyClasses.includes(family);
}


/***/ }),

/***/ "./src/ui/select/hooks/useEnterOptionSubmit.tsx":
/*!******************************************************!*\
  !*** ./src/ui/select/hooks/useEnterOptionSubmit.tsx ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useEnterOptionSubmit: () => (/* binding */ useEnterOptionSubmit)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var useEnterOptionSubmit = function(param) {
    var onClick = param.onClick, value = param.value, optionRef = param.optionRef;
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function() {
        var option = optionRef.current;
        if (!option) return;
        var handleEnterKeyDown = function(event) {
            if (document.activeElement === option && event.key === "Enter") {
                onClick(value);
            }
        };
        option.addEventListener("keydown", handleEnterKeyDown);
        return function() {
            option.removeEventListener("keydown", handleEnterKeyDown);
        };
    }, [
        value,
        onClick,
        optionRef
    ]);
};


/***/ }),

/***/ "./src/ui/select/hooks/useEnterSubmit.ts":
/*!***********************************************!*\
  !*** ./src/ui/select/hooks/useEnterSubmit.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useEnterSubmit: () => (/* binding */ useEnterSubmit)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var useEnterSubmit = function(param) {
    var placeholderRef = param.placeholderRef, onChange = param.onChange;
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function() {
        var placeholderEl = placeholderRef.current;
        if (!placeholderEl) return;
        var handleEnterKeyDown = function(event) {
            if (event.key === "Enter") {
                onChange(function(isOpen) {
                    return !isOpen;
                });
            }
        };
        placeholderEl.addEventListener("keydown", handleEnterKeyDown);
        return function() {
            placeholderEl.removeEventListener("keydown", handleEnterKeyDown);
        };
    }, []);
};


/***/ }),

/***/ "./src/ui/select/hooks/useOutsideClickClose.ts":
/*!*****************************************************!*\
  !*** ./src/ui/select/hooks/useOutsideClickClose.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useOutsideClickClose: () => (/* binding */ useOutsideClickClose)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
}

var useOutsideClickClose = function(param) {
    var isOpen = param.isOpen, rootRef = param.rootRef, onClose = param.onClose, onChange = param.onChange;
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function() {
        var handleClick = function(event) {
            var _rootRef_current;
            var target = event.target;
            if (_instanceof(target, Node) && !((_rootRef_current = rootRef.current) === null || _rootRef_current === void 0 ? void 0 : _rootRef_current.contains(target))) {
                isOpen && (onClose === null || onClose === void 0 ? void 0 : onClose());
                onChange === null || onChange === void 0 ? void 0 : onChange(false);
            }
        };
        window.addEventListener("mousedown", handleClick);
        return function() {
            window.removeEventListener("mousedown", handleClick);
        };
    }, [
        onClose,
        onChange,
        isOpen
    ]);
};


/***/ }),

/***/ "./src/ui/text/index.tsx":
/*!*******************************!*\
  !*** ./src/ui/text/index.tsx ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Text: () => (/* reexport safe */ _Text__WEBPACK_IMPORTED_MODULE_0__.Text)
/* harmony export */ });
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Text */ "./src/ui/text/Text.tsx");



/***/ }),

/***/ "./src/images/arrow-down.svg":
/*!***********************************!*\
  !*** ./src/images/arrow-down.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "static/media/src/images/arrow-down.svg";

/***/ }),

/***/ "./src/images/narrow.svg":
/*!*******************************!*\
  !*** ./src/images/narrow.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "static/media/src/images/narrow.svg";

/***/ }),

/***/ "./src/images/wide.svg":
/*!*****************************!*\
  !*** ./src/images/wide.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "static/media/src/images/wide.svg";

/***/ })

}]);
//# sourceMappingURL=ui-select-Select-stories.iframe.bundle.js.map