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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./types/zcfd/src/index.js-exposed");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/babel-loader/lib/index.js?!./types/zcfd/src/index.js":
/*!***************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--9-0!./types/zcfd/src/index.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval(";\nmodule.exports = {\n  type: 'zcfd',\n  model: __webpack_require__(/*! ./model.js */ \"./types/zcfd/src/model.js\"),\n  lang: __webpack_require__(/*! ./lang */ \"./types/zcfd/src/lang/index.js\"),\n  convert: __webpack_require__(/*! ./convert.js */ \"./types/zcfd/src/convert.js\"),\n  hooks: null,\n  parse: __webpack_require__(/*! ./parse.js */ \"./types/zcfd/src/parse.js\")\n};\n\n//# sourceURL=webpack:///./types/zcfd/src/index.js?./node_modules/babel-loader/lib??ref--9-0");

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nvar g; // This works in non-strict mode\n\ng = function () {\n  return this;\n}();\n\ntry {\n  // This works if eval is allowed (see CSP)\n  g = g || Function(\"return this\")() || (1, eval)(\"this\");\n} catch (e) {\n  // This works if the window reference is available\n  if ((typeof window === \"undefined\" ? \"undefined\" : _typeof(window)) === \"object\") g = window;\n} // g can still be undefined, but nothing to do about it...\n// We return undefined, instead of nothing here, so it's\n// easier to handle this case. if(!global) { ...}\n\n\nmodule.exports = g;\n\n//# sourceURL=webpack:///(webpack)/buildin/global.js?");

/***/ }),

/***/ "./types/zcfd/src/convert.js":
/*!***********************************!*\
  !*** ./types/zcfd/src/convert.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var outputTemplate = __webpack_require__(!(function webpackMissingModule() { var e = new Error(\"Cannot find module './model_list.hbs'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));\n\nvar configTemplate = __webpack_require__(!(function webpackMissingModule() { var e = new Error(\"Cannot find module './analysis_config.hbs'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));\n\nvar runTemplate = __webpack_require__(!(function webpackMissingModule() { var e = new Error(\"Cannot find module './run_script.hbs'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));\n/*\n# name      mach          alpha       cfl      reynolds\n*/\n\n\nvar COLUMN_SPACING = 5;\n\nmodule.exports = function convert(dataModel) {\n  var results = {}; // Start with a standard header\n\n  var lines = [['# name  ', 'mach  ', 'alpha  ', 'cfl  ', 'reynolds']];\n  dataModel.data.models.forEach(function (attributes) {\n    var model = {};\n    Object.keys(attributes.model).forEach(function (fieldName) {\n      var value = attributes.model[fieldName].value;\n\n      if (value.length === 1) {\n        model[fieldName] = value[0];\n      } else {\n        model[fieldName] = value;\n      }\n    });\n    lines.push([\"\".concat(model.name), \"\".concat(model.mach), \"\".concat(model.alpha), \"\".concat(model.cfl), \"\".concat(model.reynolds)]);\n  }); // Compute max size of each column\n\n  var sizes = [0, 0, 0, 0, 0];\n\n  for (var lineIdx = 0; lineIdx < lines.length; lineIdx++) {\n    var line = lines[lineIdx];\n\n    for (var tokenIdx = 0; tokenIdx < line.length; tokenIdx++) {\n      sizes[tokenIdx] = Math.max(sizes[tokenIdx], line[tokenIdx].length);\n    }\n  } // Add padding to align columns\n\n\n  for (var _lineIdx = 0; _lineIdx < lines.length; _lineIdx++) {\n    var _line = lines[_lineIdx];\n\n    for (var _tokenIdx = 0; _tokenIdx < _line.length; _tokenIdx++) {\n      while (_line[_tokenIdx].length < sizes[_tokenIdx] + COLUMN_SPACING) {\n        _line[_tokenIdx] += ' ';\n      }\n    } // collapse tokens\n\n\n    lines[_lineIdx] = {\n      line: lines[_lineIdx].join('')\n    };\n  } // Use dummy line writer\n\n\n  results['model_list.osc'] = outputTemplate({\n    lines: lines\n  }); // analyses, have sub-object matching type, with the attributes.\n\n  var histogram = [];\n  var autocorrelation = [];\n  dataModel.data.analyses.forEach(function (attributes) {\n    var analysis = {};\n    var type = attributes.analysis.type.value[0];\n    Object.keys(attributes[type]).forEach(function (fieldName) {\n      var value = attributes[type][fieldName].value;\n\n      if (value.length === 1) {\n        analysis[fieldName] = value[0];\n      } else {\n        analysis[fieldName] = value;\n      }\n    });\n    console.log(analysis);\n\n    if (type === 'histogram') {\n      // fill in associated fields.\n      if (analysis.mesh === 'particles') {\n        analysis.array = \"velocityMagnitude\";\n        analysis.association = \"point\";\n      } else {\n        analysis.array = \"data\";\n        analysis.association = \"cell\";\n      }\n\n      histogram.push(analysis);\n    } else if (type === 'autocorrelation') {\n      autocorrelation.push(analysis);\n    }\n  }); // analysis xml\n\n  results['analysis_config.xml'] = configTemplate({\n    histogram: histogram,\n    autocorrelation: autocorrelation\n  });\n  var runParams = {};\n\n  if (dataModel.data.run) {\n    var params = dataModel.data.run[0].runParams;\n    Object.keys(params).forEach(function (fieldName) {\n      var value = params[fieldName].value;\n\n      if (value.length === 1) {\n        runParams[fieldName] = value[0];\n      } else {\n        runParams[fieldName] = value;\n      }\n    });\n  } // analysis xml\n\n\n  results['run.sh'] = runTemplate(runParams);\n  return {\n    results: results,\n    model: dataModel\n  };\n};\n\n//# sourceURL=webpack:///./types/zcfd/src/convert.js?");

/***/ }),

/***/ "./types/zcfd/src/index.js-exposed":
/*!*****************************************!*\
  !*** ./types/zcfd/src/index.js-exposed ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(global) {if(!global[\"Simput\"]) global[\"Simput\"] = {};\nif(!global[\"Simput\"][\"types\"]) global[\"Simput\"][\"types\"] = {};\nmodule.exports = global[\"Simput\"][\"types\"][\"zcfd\"] = __webpack_require__(/*! -!./node_modules/babel-loader/lib??ref--9-0!./index.js */ \"./node_modules/babel-loader/lib/index.js?!./types/zcfd/src/index.js\");\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/global.js */ \"./node_modules/webpack/buildin/global.js\")))\n\n//# sourceURL=webpack:///./types/zcfd/src/index.js-exposed?");

/***/ }),

/***/ "./types/zcfd/src/lang/en/help/index.js":
/*!**********************************************!*\
  !*** ./types/zcfd/src/lang/en/help/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {};\n\n//# sourceURL=webpack:///./types/zcfd/src/lang/en/help/index.js?");

/***/ }),

/***/ "./types/zcfd/src/lang/en/index.js":
/*!*****************************************!*\
  !*** ./types/zcfd/src/lang/en/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = {\n  \"help\": __webpack_require__(/*! ./help */ \"./types/zcfd/src/lang/en/help/index.js\"),\n  \"label.json\": __webpack_require__(/*! ./label.json */ \"./types/zcfd/src/lang/en/label.json\")\n};\n\n//# sourceURL=webpack:///./types/zcfd/src/lang/en/index.js?");

/***/ }),

/***/ "./types/zcfd/src/lang/en/label.json":
/*!*******************************************!*\
  !*** ./types/zcfd/src/lang/en/label.json ***!
  \*******************************************/
/*! exports provided: views, attributes, default */
/***/ (function(module) {

eval("module.exports = {\"views\":{\"models\":\"Models\",\"modify\":\"Modify\",\"run\":\"Execution Script\"},\"attributes\":{\"model\":{\"title\":\"Model\",\"parameters\":{\"mach\":\"Mach Number\",\"alpha\":\"Alpha (degrees)\",\"cfl\":\"CFL Number\",\"reynolds\":\"Reynolds Number\",\"zeta\":\"Zeta\"}},\"modify\":{\"title\":\"Modify\",\"parameters\":{\"type\":\"Type\"}},\"runParams\":{\"title\":\"Execution parameters\",\"parameters\":{\"nodes\":\"Nodes\",\"gridsize\":\"Grid size\",\"aspectratio\":\"Aspect Ratio\"}},\"ModelView\":{\"title\":\"3D view\"}}};\n\n//# sourceURL=webpack:///./types/zcfd/src/lang/en/label.json?");

/***/ }),

/***/ "./types/zcfd/src/lang/index.js":
/*!**************************************!*\
  !*** ./types/zcfd/src/lang/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = {\n  \"en\": __webpack_require__(/*! ./en */ \"./types/zcfd/src/lang/en/index.js\")\n};\n\n//# sourceURL=webpack:///./types/zcfd/src/lang/index.js?");

/***/ }),

/***/ "./types/zcfd/src/model.js":
/*!*********************************!*\
  !*** ./types/zcfd/src/model.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// model.js\nmodule.exports = {\n  order: ['run', 'models', 'modify'],\n  views: {\n    models: {\n      size: -1,\n      attributes: ['model', 'preview'],\n      hooks: [{\n        type: 'copyParameterToViewName',\n        attribute: 'model.name'\n      }]\n    },\n    definitions: {\n      model: {\n        parameters: [{\n          id: 'name',\n          label: 'Name',\n          type: 'string',\n          size: 1\n        }, {\n          id: 'mach',\n          type: 'double',\n          size: 1,\n          default: [1]\n        }, {\n          id: 'alpha',\n          type: 'double',\n          size: 1,\n          default: [1]\n        }, {\n          id: 'cfl',\n          type: 'double',\n          size: 1,\n          default: [1]\n        }, {\n          id: 'reynolds',\n          type: 'double',\n          size: 1,\n          default: [1]\n        }]\n      },\n      runParams: {\n        parameters: [{\n          id: 'nodes',\n          type: 'int',\n          size: 1,\n          default: [1]\n        }, {\n          id: 'gridsize',\n          type: 'int',\n          size: 1,\n          default: [64]\n        }, {\n          id: 'aspectratio',\n          type: 'double',\n          size: 1,\n          default: [16.9]\n        }]\n      }\n    }\n  }\n};\n\n//# sourceURL=webpack:///./types/zcfd/src/model.js?");

/***/ }),

/***/ "./types/zcfd/src/parse.js":
/*!*********************************!*\
  !*** ./types/zcfd/src/parse.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n\n//# sourceURL=webpack:///./types/zcfd/src/parse.js?");

/***/ })

/******/ });