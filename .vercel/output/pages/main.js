require("source-map-support").install();
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/static/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("marko/dist/runtime/helpers/render-tag.js");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("marko/dist/runtime/html/index.js");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("marko/dist/runtime/components/renderer.js");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("marko/dist/runtime/helpers/dynamic-tag.js");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("marko/dist/runtime/html/helpers/escape-xml.js");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("marko/dist/core-tags/components/init-components-tag.js");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("marko/dist/core-tags/core/await/reorderer-renderer.js");

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Component = (function () {
    function Component() {
    }
    return Component;
}());
exports.default = Component;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var types_1 = __importDefault(__webpack_require__(7));
var Counter = (function (_super) {
    __extends(Counter, _super);
    function Counter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Counter.prototype.onMount = function () {
        this.start();
    };
    Counter.prototype.onDestroy = function () {
        this.stop();
    };
    Counter.prototype.start = function () {
        var _this = this;
        this.interval = setInterval(function () {
            var _a;
            (_a = _this.emit) === null || _a === void 0 ? void 0 : _a.call(_this, "count", _this.input.count + 1);
        }, 500);
    };
    Counter.prototype.stop = function () {
        clearInterval(this.interval);
    };
    return Counter;
}(types_1.default));
exports.default = Counter;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var types_1 = __importDefault(__webpack_require__(7));
var Home = (function (_super) {
    __extends(Home, _super);
    function Home() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Home.prototype.onCreate = function () {
        this.state = { count: 0, startCounter: true };
    };
    Home.prototype.setCount = function (count) {
        this.state.count = count;
    };
    Home.prototype.toggleCounter = function () {
        var startCounter = this.state.startCounter;
        this.state.startCounter = !startCounter;
    };
    Home.prototype.getCounter = function () {
        var _a;
        return (_a = this.getComponent) === null || _a === void 0 ? void 0 : _a.call(this, "counter");
    };
    Home.prototype.pauseCounter = function () {
        var counter = this.getCounter();
        counter === null || counter === void 0 ? void 0 : counter.stop();
    };
    Home.prototype.resumeCounter = function () {
        var counter = this.getCounter();
        counter === null || counter === void 0 ? void 0 : counter.start();
    };
    return Home;
}(types_1.default));
exports.default = Home;


/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("marko/dist/core-tags/components/preferred-script-location-tag.js");

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(__webpack_require__(12));
var compression_1 = __importDefault(__webpack_require__(13));
var home_1 = __importDefault(__webpack_require__(14));
var app = (0, express_1.default)();
app.use((0, compression_1.default)());
app.use("/static", express_1.default.static("dist/client"));
app.get("/", home_1.default);
exports.default = app;


/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("compression");

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var template_marko_1 = __importDefault(__webpack_require__(15));
function Home(_, res) {
    template_marko_1.default.stream({}).pipe(res);
}
exports.default = Home;


/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "marko/dist/runtime/html/index.js"
var index_js_ = __webpack_require__(1);

// EXTERNAL MODULE: external "marko/dist/runtime/html/helpers/escape-xml.js"
var escape_xml_js_ = __webpack_require__(4);

// EXTERNAL MODULE: ./src/components/app-counter/component.ts
var component = __webpack_require__(8);
var component_default = /*#__PURE__*/__webpack_require__.n(component);

// EXTERNAL MODULE: external "marko/dist/runtime/components/renderer.js"
var renderer_js_ = __webpack_require__(2);
var renderer_js_default = /*#__PURE__*/__webpack_require__.n(renderer_js_);

// CONCATENATED MODULE: ./src/components/app-counter/index.marko

const _marko_componentType = "QMkeKWM9",
  _marko_template = Object(index_js_["t"])(_marko_componentType);
/* harmony default export */ var index_marko = (_marko_template);



const _marko_component2 = component_default.a;
_marko_template._ = renderer_js_default()(function (input, out, _componentDef, _component, state) {
  out.w(`<div><h2>Counter</h2><p>${Object(escape_xml_js_["x"])(input.count)}</p></div>`);
}, {
  t: _marko_componentType
}, _marko_component2);
// EXTERNAL MODULE: external "marko/dist/runtime/helpers/render-tag.js"
var render_tag_js_ = __webpack_require__(0);
var render_tag_js_default = /*#__PURE__*/__webpack_require__.n(render_tag_js_);

// EXTERNAL MODULE: ./src/home/components/app-home/component.ts
var app_home_component = __webpack_require__(9);
var app_home_component_default = /*#__PURE__*/__webpack_require__.n(app_home_component);

// CONCATENATED MODULE: ./src/home/components/app-home/index.marko

const index_marko_marko_componentType = "1nylTBXU",
  index_marko_marko_template = Object(index_js_["t"])(index_marko_marko_componentType);
/* harmony default export */ var app_home_index_marko = (index_marko_marko_template);





const index_marko_marko_component2 = app_home_component_default.a;
index_marko_marko_template._ = renderer_js_default()(function (input, out, _componentDef, _component, state) {
  out.w("<div><h1>Counter Demo</h1>");
  if (state.startCounter) {
    render_tag_js_default()(index_marko, {
      "count": state.count
    }, out, _componentDef, "@counter", [["count", "setCount", false]]);
  }
  out.w(`<div class=btns><button>${Object(escape_xml_js_["x"])(state.startCounter ? "stop counter" : "start counter")}</button><button>pause</button><button>resume</button></div></div>`);
}, {
  t: index_marko_marko_componentType
}, index_marko_marko_component2);
// EXTERNAL MODULE: external "marko/dist/runtime/helpers/dynamic-tag.js"
var dynamic_tag_js_ = __webpack_require__(3);
var dynamic_tag_js_default = /*#__PURE__*/__webpack_require__.n(dynamic_tag_js_);

// EXTERNAL MODULE: external "marko/dist/core-tags/components/init-components-tag.js"
var init_components_tag_js_ = __webpack_require__(5);
var init_components_tag_js_default = /*#__PURE__*/__webpack_require__.n(init_components_tag_js_);

// EXTERNAL MODULE: external "marko/dist/core-tags/core/await/reorderer-renderer.js"
var reorderer_renderer_js_ = __webpack_require__(6);
var reorderer_renderer_js_default = /*#__PURE__*/__webpack_require__.n(reorderer_renderer_js_);

// EXTERNAL MODULE: external "marko/dist/core-tags/components/preferred-script-location-tag.js"
var preferred_script_location_tag_js_ = __webpack_require__(10);
var preferred_script_location_tag_js_default = /*#__PURE__*/__webpack_require__.n(preferred_script_location_tag_js_);

// CONCATENATED MODULE: ./src/components/app-layout.marko

const app_layout_marko_marko_componentType = "xBo517Ic",
  app_layout_marko_marko_template = Object(index_js_["t"])(app_layout_marko_marko_componentType);
/* harmony default export */ var app_layout_marko = (app_layout_marko_marko_template);






const _marko_component = {};
app_layout_marko_marko_template._ = renderer_js_default()(function (input, out, _componentDef, _component, state) {
  out.w("<!doctype html><html lang=en><head><meta charset=UTF-8><meta http-equiv=X-UA-Compatible content=IE=edge><meta name=viewport content=\"width=device-width, initial-scale=1.0\"><title>");
  dynamic_tag_js_default()(out, input.title, null, null, null, null, _componentDef, "6");
  out.w("</title>");
  dynamic_tag_js_default()(out, input.styles, null, null, null, null, _componentDef, "7");
  out.___renderAssets && out.___renderAssets();
  out.w("</head><body>");
  dynamic_tag_js_default()(out, input.body, null, null, null, null, _componentDef, "9");
  dynamic_tag_js_default()(out, input.scripts, null, null, null, null, _componentDef, "10");
  render_tag_js_default()(init_components_tag_js_default.a, {}, out, _componentDef, "11");
  render_tag_js_default()(reorderer_renderer_js_default.a, {}, out, _componentDef, "12");
  render_tag_js_default()(preferred_script_location_tag_js_default.a, {}, out, _componentDef, "13");
  out.w("</body></html>");
}, {
  t: app_layout_marko_marko_componentType,
  i: true
}, _marko_component);
// CONCATENATED MODULE: ./src/home/template.marko

const template_marko_marko_componentType = "my8UUy2G",
  template_marko_marko_template = Object(index_js_["t"])(template_marko_marko_componentType);
/* harmony default export */ var template_marko = (template_marko_marko_template);




const template_marko_marko_component = {};
template_marko_marko_template._ = renderer_js_default()(function (input, out, _componentDef, _component, state) {
  render_tag_js_default()(app_layout_marko, {
    "title": {
      "renderBody": out => {
        out.w("Marko UI Components Playground");
      }
    },
    "body": {
      "renderBody": out => {
        render_tag_js_default()(app_home_index_marko, {}, out, _componentDef, "1");
      }
    }
  }, out, _componentDef, "0");
}, {
  t: template_marko_marko_componentType,
  i: true
}, template_marko_marko_component);
// CONCATENATED MODULE: ./node_modules/.pnpm/@marko/webpack@7.1.4_marko@5.22.5+webpack@4.46.0/node_modules/@marko/webpack/dist/loader!?manifest
/* harmony default export */ var loader_manifest = ({
  getAssets(entry) {
    return this.build[entry];
  },
  build: {"home_my8U":{"css":["home_my8U.7c995a99.css"],"js":["vendors~home_my8U.4de9a52f.js","home_my8U.c7487c50.js"],"map":["vendors~home_my8U.4de9a52f.js.map","home_my8U.c7487c50.js.map"]}}
});
// CONCATENATED MODULE: ./src/home/template.marko?server-entry

const template_marko_server_entry_marko_componentType = "my8UUy2G",
  template_marko_server_entry_marko_template = Object(index_js_["t"])(template_marko_server_entry_marko_componentType);
/* harmony default export */ var template_marko_server_entry = __webpack_exports__["default"] = (template_marko_server_entry_marko_template);



function renderAssets() {
  const assets = this.___assets;
  this.___renderAssets = this.___assets = undefined;
  this.flush = this.___flush;
  this.end = this.___end;
  if (assets) {
    const nonce = this.global.cspNonce;
    const nonceAttr = nonce ? ` nonce=${JSON.stringify(nonce)}` : "";
    const written = this.global.___writtenAssets || (this.global.___writtenAssets = new Set());
    let scripts = "";
    let styles = "";
    for (const curAssets of assets) {
      if (curAssets.js) {
        for (const href of curAssets.js) {
          if (!written.has(href)) {
            written.add(href);
            scripts += `<script src=${JSON.stringify(__webpack_require__.p + href)}${nonceAttr} async></script>`;
          }
        }
      }
      if (curAssets.css) {
        for (const href of curAssets.css) {
          if (!written.has(href)) {
            written.add(href);
            styles += `<link rel="stylesheet" href=${JSON.stringify(__webpack_require__.p + href)}>`;
          }
        }
      }
    }
    this.write(scripts + styles);
  }
}
function outFlushOverride() {
  this.___renderAssets();
  this.flush();
}
function outEndOverride(data, encoding, callback) {
  this.___renderAssets();
  this.end(data, encoding, callback);
}




const template_marko_server_entry_marko_component = {};
template_marko_server_entry_marko_template._ = renderer_js_default()(function (input, out, _componentDef, _component, state) {
  const curAssets = out.___assets;
  const newAssets = loader_manifest.getAssets("home_my8U", out.global.buildName);
  if (curAssets) {
    curAssets.push(newAssets);
  } else {
    out.___assets = [newAssets];
    out.___flush = out.flush;
    out.___end = out.end;
    out.___renderAssets = renderAssets;
    out.flush = outFlushOverride;
    out.end = outEndOverride;
  }
  render_tag_js_default()(template_marko, input, out, _componentDef, "0");
  render_tag_js_default()(init_components_tag_js_default.a, {}, out, _componentDef, "1");
  render_tag_js_default()(reorderer_renderer_js_default.a, {}, out, _componentDef, "2");
}, {
  t: template_marko_server_entry_marko_componentType,
  i: true
}, template_marko_server_entry_marko_component);

/***/ })
/******/ ]);
//# sourceMappingURL=main.js.map