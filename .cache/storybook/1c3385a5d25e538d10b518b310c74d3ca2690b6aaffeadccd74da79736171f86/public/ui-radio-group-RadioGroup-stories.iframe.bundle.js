"use strict";
(self["webpackChunkblog_customizer"] = self["webpackChunkblog_customizer"] || []).push([["ui-radio-group-RadioGroup-stories"],{

/***/ "./src/ui/radio-group/RadioGroup.stories.tsx":
/*!***************************************************!*\
  !*** ./src/ui/radio-group/RadioGroup.stories.tsx ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RadioGroupStory: () => (/* binding */ RadioGroupStory),
/* harmony export */   __namedExportsOrder: () => (/* binding */ __namedExportsOrder),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var _RadioGroup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RadioGroup */ "./src/ui/radio-group/RadioGroup.tsx");
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
  component: _RadioGroup__WEBPACK_IMPORTED_MODULE_1__.RadioGroup
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (meta);
var RadioGroupWithState = function () {
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
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_RadioGroup__WEBPACK_IMPORTED_MODULE_1__.RadioGroup, {
      selected: selected,
      name: "radio",
      onChange: setSelected,
      options: options,
      title: "Название радиогруппы"
    }, void 0, false, {
      fileName: "/Users/moskvin/Documents/dev/10_sprint/blog-customizer/src/ui/radio-group/RadioGroup.stories.tsx",
      lineNumber: 24,
      columnNumber: 4
    }, _this)
  }, void 0, false);
};
var RadioGroupStory = {
  render: function () {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(RadioGroupWithState, {}, void 0, false, {
      fileName: "/Users/moskvin/Documents/dev/10_sprint/blog-customizer/src/ui/radio-group/RadioGroup.stories.tsx",
      lineNumber: 36,
      columnNumber: 16
    }, _this);
  }
};
RadioGroupStory.parameters = {
  ...RadioGroupStory.parameters,
  docs: {
    ...RadioGroupStory.parameters?.docs,
    source: {
      originalSource: "{\n  render: () => <RadioGroupWithState />\n}",
      ...RadioGroupStory.parameters?.docs?.source
    }
  }
};;const __namedExportsOrder = ["RadioGroupStory"];

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[13].use[3]!./src/ui/radio-group/RadioGroup.module.scss":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[13].use[3]!./src/ui/radio-group/RadioGroup.module.scss ***!
  \*************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@charset "UTF-8";
.KfHmILI9e7KFw7yEkiOs {
  display: inline-flex;
  box-sizing: border-box;
  max-width: fit-content;
  border: 1px solid #000000;
}

.oxE6S_gMjMGqKgk7Qfim {
  position: relative;
  display: block;
}

.uUuaq_7aPtOnhQs_mV94 {
  position: absolute;
  width: 0;
  height: 0;
  margin: 0;
  padding: 0;
  opacity: 0;
}

.hVJtek0Am4tk5m0d7HfL {
  display: flex;
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  width: 124px;
  height: 35px;
  text-align: center;
  border-right: 1px solid #000000;
  cursor: pointer;
}

/* Убираем бордер у последнего в radiogroup, чтобы не было двойного бордера */
.hVJtek0Am4tk5m0d7HfL:hover {
  background-color: #ffedab;
}

.oxE6S_gMjMGqKgk7Qfim[data-checked=true] .hVJtek0Am4tk5m0d7HfL {
  background: var(--gold, #ffc802);
}

.oxE6S_gMjMGqKgk7Qfim:last-child .hVJtek0Am4tk5m0d7HfL {
  border: none;
}

.oxE6S_gMjMGqKgk7Qfim[data-checked=true] .hVJtek0Am4tk5m0d7HfL:hover {
  background: var(--gold, #ffc802);
}

.l4gvIKoiTGwWmpyAlbMG {
  display: flex;
  flex-direction: column;
  row-gap: 4px;
}`, "",{"version":3,"sources":["webpack://./src/ui/radio-group/RadioGroup.module.scss"],"names":[],"mappings":"AAAA,gBAAgB;AAAhB;EACC,oBAAA;EACA,sBAAA;EACA,sBAAA;EACA,yBAAA;AAED;;AACA;EACC,kBAAA;EACA,cAAA;AAED;;AACA;EACC,kBAAA;EACA,QAAA;EACA,SAAA;EACA,SAAA;EACA,UAAA;EACA,UAAA;AAED;;AACA;EACC,aAAA;EACA,cAAA;EACA,uBAAA;EACA,mBAAA;EACA,sBAAA;EACA,YAAA;EACA,YAAA;EACA,kBAAA;EACA,+BAAA;EACA,eAAA;AAED;;AACA,6EAAA;AAEA;EACC,yBAAA;AACD;;AAEA;EACC,gCAAA;AACD;;AAEA;EACC,YAAA;AACD;;AAEA;EACC,gCAAA;AACD;;AAEA;EACC,aAAA;EACA,sBAAA;EACA,YAAA;AACD","sourcesContent":[".group {\n\tdisplay: inline-flex;\n\tbox-sizing: border-box;\n\tmax-width: fit-content;\n\tborder: 1px solid #000000;\n}\n\n.item {\n\tposition: relative;\n\tdisplay: block;\n}\n\n.input {\n\tposition: absolute;\n\twidth: 0;\n\theight: 0;\n\tmargin: 0;\n\tpadding: 0;\n\topacity: 0;\n}\n\n.label {\n\tdisplay: flex;\n\tflex-shrink: 0;\n\tjustify-content: center;\n\talign-items: center;\n\tbox-sizing: border-box;\n\twidth: 124px;\n\theight: 35px;\n\ttext-align: center;\n\tborder-right: 1px solid #000000;\n\tcursor: pointer;\n}\n\n/* Убираем бордер у последнего в radiogroup, чтобы не было двойного бордера */\n\n.label:hover {\n\tbackground-color: #ffedab;\n}\n\n.item[data-checked='true'] .label {\n\tbackground: var(--gold, #ffc802);\n}\n\n.item:last-child .label {\n\tborder: none;\n}\n\n.item[data-checked='true'] .label:hover {\n\tbackground: var(--gold, #ffc802);\n}\n\n.container {\n\tdisplay: flex;\n\tflex-direction: column;\n\trow-gap: 4px;\n}\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"group": `KfHmILI9e7KFw7yEkiOs`,
	"item": `oxE6S_gMjMGqKgk7Qfim`,
	"input": `uUuaq_7aPtOnhQs_mV94`,
	"label": `hVJtek0Am4tk5m0d7HfL`,
	"container": `l4gvIKoiTGwWmpyAlbMG`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/ui/radio-group/RadioGroup.module.scss":
/*!***************************************************!*\
  !*** ./src/ui/radio-group/RadioGroup.module.scss ***!
  \***************************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_13_use_1_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_13_use_3_RadioGroup_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!../../../node_modules/resolve-url-loader/index.js!../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[13].use[3]!./RadioGroup.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[13].use[3]!./src/ui/radio-group/RadioGroup.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_13_use_1_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_13_use_3_RadioGroup_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_13_use_1_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_13_use_3_RadioGroup_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals || module.hot.invalidate) {
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
    var isNamedExport = !_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_13_use_1_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_13_use_3_RadioGroup_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;
    var oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_13_use_1_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_13_use_3_RadioGroup_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_13_use_1_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_13_use_3_RadioGroup_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

    module.hot.accept(
      /*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!../../../node_modules/resolve-url-loader/index.js!../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[13].use[3]!./RadioGroup.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[13].use[3]!./src/ui/radio-group/RadioGroup.module.scss",
      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_13_use_1_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_13_use_3_RadioGroup_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!../../../node_modules/resolve-url-loader/index.js!../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[13].use[3]!./RadioGroup.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[13].use[3]!./src/ui/radio-group/RadioGroup.module.scss");
(function () {
        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_13_use_1_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_13_use_3_RadioGroup_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_13_use_1_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_13_use_3_RadioGroup_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals, isNamedExport)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_13_use_1_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_13_use_3_RadioGroup_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_13_use_1_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_13_use_3_RadioGroup_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

              update(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_13_use_1_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_13_use_3_RadioGroup_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"]);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}



       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_13_use_1_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_13_use_3_RadioGroup_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_13_use_1_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_13_use_3_RadioGroup_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_13_use_1_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_13_use_3_RadioGroup_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/ui/radio-group/Option.tsx":
/*!***************************************!*\
  !*** ./src/ui/radio-group/Option.tsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Option: () => (/* binding */ Option)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_ui_text__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/ui/text */ "./src/ui/text/index.tsx");
/* harmony import */ var _hooks_useEnterSubmit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hooks/useEnterSubmit */ "./src/ui/radio-group/hooks/useEnterSubmit.ts");
/* harmony import */ var _RadioGroup_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./RadioGroup.module.scss */ "./src/ui/radio-group/RadioGroup.module.scss");
var _this = undefined;





var Option = function(props) {
    var value = props.value, title = props.title, selected = props.selected, groupName = props.groupName, onChange = props.onChange, option = props.option;
    var optionRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    var handleChange = function() {
        return onChange === null || onChange === void 0 ? void 0 : onChange(option);
    };
    (0,_hooks_useEnterSubmit__WEBPACK_IMPORTED_MODULE_3__.useEnterSubmit)({
        onChange: onChange,
        option: option
    });
    var inputId = "".concat(groupName, "_radio_item_with_value__").concat(value);
    var isChecked = value === selected.title;
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: _RadioGroup_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].item,
        "data-checked": isChecked,
        "data-testid": inputId,
        tabIndex: 0,
        ref: optionRef,
        children: [
            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
                className: _RadioGroup_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].input,
                type: "radio",
                name: groupName,
                id: inputId,
                value: value,
                onChange: handleChange,
                tabIndex: -1
            }, void 0, false, {
                fileName: "/Users/moskvin/Documents/dev/10_sprint/blog-customizer/src/ui/radio-group/Option.tsx",
                lineNumber: 37,
                columnNumber: 4
            }, _this),
            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
                className: _RadioGroup_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].label,
                htmlFor: inputId,
                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(src_ui_text__WEBPACK_IMPORTED_MODULE_2__.Text, {
                    size: 18,
                    uppercase: true,
                    children: title
                }, void 0, false, {
                    fileName: "/Users/moskvin/Documents/dev/10_sprint/blog-customizer/src/ui/radio-group/Option.tsx",
                    lineNumber: 47,
                    columnNumber: 5
                }, _this)
            }, void 0, false, {
                fileName: "/Users/moskvin/Documents/dev/10_sprint/blog-customizer/src/ui/radio-group/Option.tsx",
                lineNumber: 46,
                columnNumber: 4
            }, _this)
        ]
    }, value, true, {
        fileName: "/Users/moskvin/Documents/dev/10_sprint/blog-customizer/src/ui/radio-group/Option.tsx",
        lineNumber: 30,
        columnNumber: 3
    }, _this);
};
Option.__docgenInfo = {
    "description": "",
    "methods": [],
    "displayName": "Option",
    "props": {
        "value": {
            "required": true,
            "tsType": {
                "name": "string",
                "raw": "OptionType['value']"
            },
            "description": ""
        },
        "title": {
            "required": true,
            "tsType": {
                "name": "string",
                "raw": "OptionType['title']"
            },
            "description": ""
        },
        "selected": {
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
        "groupName": {
            "required": true,
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
                "raw": "(option: OptionType) => void",
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
                            "name": "option"
                        }
                    ],
                    "return": {
                        "name": "void"
                    }
                }
            },
            "description": ""
        },
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
        }
    }
};


/***/ }),

/***/ "./src/ui/radio-group/RadioGroup.tsx":
/*!*******************************************!*\
  !*** ./src/ui/radio-group/RadioGroup.tsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RadioGroup: () => (/* binding */ RadioGroup)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var src_ui_text__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/ui/text */ "./src/ui/text/index.tsx");
/* harmony import */ var _Option__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Option */ "./src/ui/radio-group/Option.tsx");
/* harmony import */ var _RadioGroup_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./RadioGroup.module.scss */ "./src/ui/radio-group/RadioGroup.module.scss");
var _this = undefined;




var RadioGroup = function(props) {
    var name = props.name, options = props.options, selected = props.selected, onChange = props.onChange, title = props.title;
    var handleChange = function(option) {
        return onChange === null || onChange === void 0 ? void 0 : onChange(option);
    };
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: _RadioGroup_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].container,
        children: [
            title && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(src_ui_text__WEBPACK_IMPORTED_MODULE_1__.Text, {
                    weight: 800,
                    size: 12,
                    uppercase: true,
                    children: title
                }, void 0, false, {
                    fileName: "/Users/moskvin/Documents/dev/10_sprint/blog-customizer/src/ui/radio-group/RadioGroup.tsx",
                    lineNumber: 24,
                    columnNumber: 6
                }, _this)
            }, void 0, false),
            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: _RadioGroup_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].group,
                children: options.map(function(option) {
                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Option__WEBPACK_IMPORTED_MODULE_2__.Option, {
                        groupName: name,
                        value: option.value,
                        title: option.title,
                        selected: selected,
                        onChange: function() {
                            return handleChange(option);
                        },
                        option: option
                    }, option.value, false, {
                        fileName: "/Users/moskvin/Documents/dev/10_sprint/blog-customizer/src/ui/radio-group/RadioGroup.tsx",
                        lineNumber: 31,
                        columnNumber: 6
                    }, _this);
                })
            }, void 0, false, {
                fileName: "/Users/moskvin/Documents/dev/10_sprint/blog-customizer/src/ui/radio-group/RadioGroup.tsx",
                lineNumber: 29,
                columnNumber: 4
            }, _this)
        ]
    }, void 0, true, {
        fileName: "/Users/moskvin/Documents/dev/10_sprint/blog-customizer/src/ui/radio-group/RadioGroup.tsx",
        lineNumber: 21,
        columnNumber: 3
    }, _this);
};
RadioGroup.__docgenInfo = {
    "description": "",
    "methods": [],
    "displayName": "RadioGroup",
    "props": {
        "name": {
            "required": true,
            "tsType": {
                "name": "string"
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
        "selected": {
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
        "onChange": {
            "required": false,
            "tsType": {
                "name": "signature",
                "type": "function",
                "raw": "(value: OptionType) => void",
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
                            "name": "value"
                        }
                    ],
                    "return": {
                        "name": "void"
                    }
                }
            },
            "description": ""
        },
        "title": {
            "required": true,
            "tsType": {
                "name": "string"
            },
            "description": ""
        }
    }
};


/***/ }),

/***/ "./src/ui/radio-group/hooks/useEnterSubmit.ts":
/*!****************************************************!*\
  !*** ./src/ui/radio-group/hooks/useEnterSubmit.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useEnterSubmit: () => (/* binding */ useEnterSubmit)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var useEnterSubmit = function(param) {
    var onChange = param.onChange, option = param.option;
    var optionRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function() {
        var optionHtml = optionRef.current;
        if (!optionHtml) return;
        var handleEnterKeyDown = function(event) {
            if (document.activeElement === optionHtml && event.key === "Enter") {
                onChange === null || onChange === void 0 ? void 0 : onChange(option);
            }
        };
        optionHtml.addEventListener("keydown", handleEnterKeyDown);
        // не забываем удалять листенеры, при размонтировании компонента
        return function() {
            optionHtml.removeEventListener("keydown", handleEnterKeyDown);
        };
    }, [
        onChange,
        option
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



/***/ })

}]);
//# sourceMappingURL=ui-radio-group-RadioGroup-stories.iframe.bundle.js.map