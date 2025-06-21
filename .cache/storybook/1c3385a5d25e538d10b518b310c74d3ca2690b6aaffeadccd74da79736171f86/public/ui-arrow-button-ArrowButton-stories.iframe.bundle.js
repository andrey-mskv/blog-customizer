"use strict";
(self["webpackChunkblog_customizer"] = self["webpackChunkblog_customizer"] || []).push([["ui-arrow-button-ArrowButton-stories"],{

/***/ "./src/ui/arrow-button/ArrowButton.stories.tsx":
/*!*****************************************************!*\
  !*** ./src/ui/arrow-button/ArrowButton.stories.tsx ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ArrowButtonStory: () => (/* binding */ ArrowButtonStory),
/* harmony export */   __namedExportsOrder: () => (/* binding */ __namedExportsOrder),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var _ArrowButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ArrowButton */ "./src/ui/arrow-button/ArrowButton.tsx");
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
  component: _ArrowButton__WEBPACK_IMPORTED_MODULE_1__.ArrowButton
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (meta);
var ArrowButtonStory = {
  render: function () {
    return /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_2__.createElement)(function () {
      var _useState = _sliced_to_array((0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), 2),
        isOpen = _useState[0],
        setIsOpen = _useState[1];
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ArrowButton__WEBPACK_IMPORTED_MODULE_1__.ArrowButton, {
        isOpen: isOpen,
        onClick: function () {
          return setIsOpen(!isOpen);
        }
      }, void 0, false, {
        fileName: "/Users/moskvin/Documents/dev/10_sprint/blog-customizer/src/ui/arrow-button/ArrowButton.stories.tsx",
        lineNumber: 18,
        columnNumber: 11
      }, _this);
    });
  }
};
ArrowButtonStory.parameters = {
  ...ArrowButtonStory.parameters,
  docs: {
    ...ArrowButtonStory.parameters?.docs,
    source: {
      originalSource: "{\n  render: () => createElement(() => {\n    const [isOpen, setIsOpen] = useState(false);\n    return <ArrowButton isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />;\n  })\n}",
      ...ArrowButtonStory.parameters?.docs?.source
    }
  }
};;const __namedExportsOrder = ["ArrowButtonStory"];

/***/ }),

/***/ "./node_modules/clsx/dist/clsx.mjs":
/*!*****************************************!*\
  !*** ./node_modules/clsx/dist/clsx.mjs ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   clsx: () => (/* binding */ clsx),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f)}else for(f in e)e[f]&&(n&&(n+=" "),n+=f);return n}function clsx(){for(var e,t,f=0,n="",o=arguments.length;f<o;f++)(e=arguments[f])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clsx);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[13].use[3]!./src/ui/arrow-button/ArrowButton.module.scss":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[13].use[3]!./src/ui/arrow-button/ArrowButton.module.scss ***!
  \***************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, `.Gz7l0ixdd_HIE2TZ5hJl {
  position: fixed;
  top: 31px;
  display: flex;
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  width: 100px;
  height: 100px;
  background-color: #000000;
  border-right: 1px;
  transition: transform 0.5s ease;
}

.Gz7l0ixdd_HIE2TZ5hJl:hover {
  background-color: #ffc802;
}

.Gz7l0ixdd_HIE2TZ5hJl:active {
  background-color: #787878;
}

.Btv0bjBAbOmvXXIawfGl {
  transform: translate(616px);
}

.Fy4HE2QceEjUeck7w03g {
  flex-shrink: 0;
  width: 48px;
  height: 48px;
  transform: rotate(180deg);
  transition: transform 0.5s ease;
}

.mbz61vSXcUFOShDXhrmw {
  transform: rotate(0deg);
}`, "",{"version":3,"sources":["webpack://./src/ui/arrow-button/ArrowButton.module.scss"],"names":[],"mappings":"AAAA;EACC,eAAA;EACA,SAAA;EACA,aAAA;EACA,cAAA;EACA,uBAAA;EACA,mBAAA;EACA,sBAAA;EACA,YAAA;EACA,aAAA;EACA,yBAAA;EACA,iBAAA;EACA,+BAAA;AACD;;AAEA;EACC,yBAAA;AACD;;AAEA;EACC,yBAAA;AACD;;AAEA;EACC,2BAAA;AACD;;AAEA;EACC,cAAA;EACA,WAAA;EACA,YAAA;EACA,yBAAA;EACA,+BAAA;AACD;;AAEA;EACC,uBAAA;AACD","sourcesContent":[".container {\n\tposition: fixed;\n\ttop: 31px;\n\tdisplay: flex;\n\tflex-shrink: 0;\n\tjustify-content: center;\n\talign-items: center;\n\tbox-sizing: border-box;\n\twidth: 100px;\n\theight: 100px;\n\tbackground-color: #000000;\n\tborder-right: 1px;\n\ttransition: transform 0.5s ease;\n}\n\n.container:hover {\n\tbackground-color: #ffc802;\n}\n\n.container:active {\n\tbackground-color: #787878;\n}\n\n.container_open {\n\ttransform: translate(616px);\n}\n\n.arrow {\n\tflex-shrink: 0;\n\twidth: 48px;\n\theight: 48px;\n\ttransform: rotate(180deg);\n\ttransition: transform 0.5s ease;\n}\n\n.arrow_open {\n\ttransform: rotate(0deg);\n}\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"container": `Gz7l0ixdd_HIE2TZ5hJl`,
	"container_open": `Btv0bjBAbOmvXXIawfGl`,
	"arrow": `Fy4HE2QceEjUeck7w03g`,
	"arrow_open": `mbz61vSXcUFOShDXhrmw`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/ui/arrow-button/ArrowButton.module.scss":
/*!*****************************************************!*\
  !*** ./src/ui/arrow-button/ArrowButton.module.scss ***!
  \*****************************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_13_use_1_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_13_use_3_ArrowButton_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!../../../node_modules/resolve-url-loader/index.js!../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[13].use[3]!./ArrowButton.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[13].use[3]!./src/ui/arrow-button/ArrowButton.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_13_use_1_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_13_use_3_ArrowButton_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_13_use_1_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_13_use_3_ArrowButton_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals || module.hot.invalidate) {
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
    var isNamedExport = !_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_13_use_1_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_13_use_3_ArrowButton_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;
    var oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_13_use_1_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_13_use_3_ArrowButton_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_13_use_1_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_13_use_3_ArrowButton_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

    module.hot.accept(
      /*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!../../../node_modules/resolve-url-loader/index.js!../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[13].use[3]!./ArrowButton.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[13].use[3]!./src/ui/arrow-button/ArrowButton.module.scss",
      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_13_use_1_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_13_use_3_ArrowButton_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!../../../node_modules/resolve-url-loader/index.js!../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[13].use[3]!./ArrowButton.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[13].use[3]!./src/ui/arrow-button/ArrowButton.module.scss");
(function () {
        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_13_use_1_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_13_use_3_ArrowButton_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_13_use_1_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_13_use_3_ArrowButton_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals, isNamedExport)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_13_use_1_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_13_use_3_ArrowButton_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_13_use_1_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_13_use_3_ArrowButton_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

              update(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_13_use_1_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_13_use_3_ArrowButton_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"]);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}



       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_13_use_1_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_13_use_3_ArrowButton_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_13_use_1_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_13_use_3_ArrowButton_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_13_use_1_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_13_use_3_ArrowButton_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/ui/arrow-button/ArrowButton.tsx":
/*!*********************************************!*\
  !*** ./src/ui/arrow-button/ArrowButton.tsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ArrowButton: () => (/* binding */ ArrowButton)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var src_images_arrow_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/images/arrow.svg */ "./src/images/arrow.svg");
/* harmony import */ var _ArrowButton_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ArrowButton.module.scss */ "./src/ui/arrow-button/ArrowButton.module.scss");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.mjs");
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
var _this = undefined;




var ArrowButton = function(param) {
    var isOpen = param.isOpen, onClick = param.onClick;
    return /* Не забываем указаывать role и aria-label атрибуты для интерактивных элементов */ /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        role: "button",
        "aria-label": "Открыть/Закрыть форму параметров статьи",
        tabIndex: 0,
        className: (0,clsx__WEBPACK_IMPORTED_MODULE_3__["default"])(_ArrowButton_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].container, _define_property({}, _ArrowButton_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].container_open, isOpen)),
        onClick: onClick,
        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
            src: src_images_arrow_svg__WEBPACK_IMPORTED_MODULE_1__,
            alt: "иконка стрелочки",
            className: (0,clsx__WEBPACK_IMPORTED_MODULE_3__["default"])(_ArrowButton_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].arrow, _define_property({}, _ArrowButton_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].arrow_open, isOpen))
        }, void 0, false, {
            fileName: "/Users/moskvin/Documents/dev/10_sprint/blog-customizer/src/ui/arrow-button/ArrowButton.tsx",
            lineNumber: 23,
            columnNumber: 4
        }, _this)
    }, void 0, false, {
        fileName: "/Users/moskvin/Documents/dev/10_sprint/blog-customizer/src/ui/arrow-button/ArrowButton.tsx",
        lineNumber: 17,
        columnNumber: 3
    }, _this);
};
ArrowButton.__docgenInfo = {
    "description": "",
    "methods": [],
    "displayName": "ArrowButton",
    "props": {
        "isOpen": {
            "required": true,
            "tsType": {
                "name": "boolean"
            },
            "description": ""
        },
        "onClick": {
            "required": true,
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
        }
    }
};


/***/ }),

/***/ "./src/images/arrow.svg":
/*!******************************!*\
  !*** ./src/images/arrow.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "static/media/src/images/arrow.svg";

/***/ })

}]);
//# sourceMappingURL=ui-arrow-button-ArrowButton-stories.iframe.bundle.js.map