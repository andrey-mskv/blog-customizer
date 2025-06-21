"use strict";
(self["webpackChunkblog_customizer"] = self["webpackChunkblog_customizer"] || []).push([["ui-text-Text-stories"],{

/***/ "./src/ui/text/Text.stories.tsx":
/*!**************************************!*\
  !*** ./src/ui/text/Text.stories.tsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SelectStory: () => (/* binding */ SelectStory),
/* harmony export */   __namedExportsOrder: () => (/* binding */ __namedExportsOrder),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Text */ "./src/ui/text/Text.tsx");
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
function _object_spread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);
    if (typeof Object.getOwnPropertySymbols === "function") {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }
    ownKeys.forEach(function (key) {
      _define_property(target, key, source[key]);
    });
  }
  return target;
}
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) {
      symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }
    keys.push.apply(keys, symbols);
  }
  return keys;
}
function _object_spread_props(target, source) {
  source = source != null ? source : {};
  if (Object.getOwnPropertyDescriptors) {
    Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
  } else {
    ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
var _this = undefined;


var meta = {
  component: _Text__WEBPACK_IMPORTED_MODULE_1__.Text
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (meta);
var SelectStory = {
  argTypes: {
    as: {
      options: ["h1", "h2", "div", "span"],
      control: {
        type: "select"
      }
    },
    dynamic: {
      control: {
        type: "boolean"
      }
    },
    size: {
      options: [12, 18, 22, 25, 31, 38, 45],
      control: {
        type: "select"
      }
    },
    weight: {
      options: [400, 800],
      control: {
        type: "select"
      }
    },
    fontStyle: {
      options: ["italic", "normal"],
      control: {
        type: "select"
      }
    },
    uppercase: {
      control: {
        type: "boolean"
      }
    },
    align: {
      options: ["center", "left"],
      control: {
        type: "select"
      }
    },
    family: {
      options: ["open-sans", "ubuntu", "cormorant-garamond", "days-one", "merriweather"],
      control: {
        type: "select"
      }
    }
  },
  render: function (args) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Text__WEBPACK_IMPORTED_MODULE_1__.Text, _object_spread_props(_object_spread({}, args), {
      children: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi, nulla. Itaque laudantium quas repudiandae delectus voluptates fuga veritatis. Necessitatibus omnis sequi repudiandae, porro est possimus ullam inventore dolores rem molestiae."
    }), void 0, false, {
      fileName: "/Users/moskvin/Documents/dev/10_sprint/blog-customizer/src/ui/text/Text.stories.tsx",
      lineNumber: 53,
      columnNumber: 4
    }, _this);
  }
};
SelectStory.parameters = {
  ...SelectStory.parameters,
  docs: {
    ...SelectStory.parameters?.docs,
    source: {
      originalSource: "{\n  argTypes: {\n    as: {\n      options: ['h1', 'h2', 'div', 'span'],\n      control: {\n        type: 'select'\n      }\n    },\n    dynamic: {\n      control: {\n        type: 'boolean'\n      }\n    },\n    size: {\n      options: [12, 18, 22, 25, 31, 38, 45],\n      control: {\n        type: 'select'\n      }\n    },\n    weight: {\n      options: [400, 800],\n      control: {\n        type: 'select'\n      }\n    },\n    fontStyle: {\n      options: ['italic', 'normal'],\n      control: {\n        type: 'select'\n      }\n    },\n    uppercase: {\n      control: {\n        type: 'boolean'\n      }\n    },\n    align: {\n      options: ['center', 'left'],\n      control: {\n        type: 'select'\n      }\n    },\n    family: {\n      options: ['open-sans', 'ubuntu', 'cormorant-garamond', 'days-one', 'merriweather'],\n      control: {\n        type: 'select'\n      }\n    }\n  },\n  render: args => {\n    return <Text {...args}>\n                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi, nulla.\n                Itaque laudantium quas repudiandae delectus voluptates fuga veritatis.\n                Necessitatibus omnis sequi repudiandae, porro est possimus ullam\n                inventore dolores rem molestiae.\n            </Text>;\n  }\n}",
      ...SelectStory.parameters?.docs?.source
    }
  }
};;const __namedExportsOrder = ["SelectStory"];

/***/ })

}]);
//# sourceMappingURL=ui-text-Text-stories.iframe.bundle.js.map