(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["SimpleImage"] = factory();
	else
		root["SimpleImage"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/index.js!./src/index.css":
/*!*************************************************!*\
  !*** ./node_modules/css-loader!./src/index.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(false);\n// imports\n\n\n// module\nexports.push([module.i, \".cdx-simple-image {}\\r\\n\\r\\n.cdx-simple-image .cdx-loader {\\r\\n  min-height: 200px;\\r\\n}\\r\\n\\r\\n.cdx-simple-image .cdx-input {\\r\\n  margin-top: 10px;\\r\\n}\\r\\n\\r\\n.cdx-simple-image img {\\r\\n  max-width: 100%;\\r\\n  vertical-align: bottom;\\r\\n}\\r\\n\\r\\n.cdx-simple-image__caption[contentEditable=true][data-placeholder]:empty::before,\\r\\n.cdx-simple-image__alt[contentEditable=true][data-placeholder]:empty::before {\\r\\n  position: absolute;\\r\\n  content: attr(data-placeholder);\\r\\n  color: #707684;\\r\\n  font-weight: normal;\\r\\n  opacity: 0;\\r\\n }\\r\\n\\r\\n.cdx-simple-image__caption[contentEditable=true][data-placeholder]:empty::before,\\r\\n.cdx-simple-image__alt[contentEditable=true][data-placeholder]:empty::before {\\r\\n  opacity: 1;\\r\\n}\\r\\n\\r\\n.cdx-simple-image__caption[contentEditable=true][data-placeholder]:empty:focus::before,\\r\\n.cdx-simple-image__alt[contentEditable=true][data-placeholder]:empty:focus::before {\\r\\n  opacity: 0;\\r\\n}\\r\\n\\r\\n\\r\\n.cdx-simple-image__picture--with-background {\\r\\n  background: #eff2f5;\\r\\n  padding: 10px;\\r\\n}\\r\\n\\r\\n.cdx-simple-image__picture--with-background img {\\r\\n  display: block;\\r\\n  max-width: 60%;\\r\\n  margin: 0 auto;\\r\\n}\\r\\n\\r\\n.cdx-simple-image__picture--with-border {\\r\\n  border: 1px solid #e8e8eb;\\r\\n  padding: 1px;\\r\\n}\\r\\n\\r\\n.cdx-simple-image__picture--stretched img {\\r\\n  max-width: none;\\r\\n  width: 100%;\\r\\n}\\r\\n\", \"\"]);\n\n// exports\n\n\n//# sourceURL=webpack://SimpleImage/./src/index.css?./node_modules/css-loader");

/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/*\n\tMIT License http://www.opensource.org/licenses/mit-license.php\n\tAuthor Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\nmodule.exports = function(useSourceMap) {\n\tvar list = [];\n\n\t// return the list of modules as css string\n\tlist.toString = function toString() {\n\t\treturn this.map(function (item) {\n\t\t\tvar content = cssWithMappingToString(item, useSourceMap);\n\t\t\tif(item[2]) {\n\t\t\t\treturn \"@media \" + item[2] + \"{\" + content + \"}\";\n\t\t\t} else {\n\t\t\t\treturn content;\n\t\t\t}\n\t\t}).join(\"\");\n\t};\n\n\t// import a list of modules into the list\n\tlist.i = function(modules, mediaQuery) {\n\t\tif(typeof modules === \"string\")\n\t\t\tmodules = [[null, modules, \"\"]];\n\t\tvar alreadyImportedModules = {};\n\t\tfor(var i = 0; i < this.length; i++) {\n\t\t\tvar id = this[i][0];\n\t\t\tif(typeof id === \"number\")\n\t\t\t\talreadyImportedModules[id] = true;\n\t\t}\n\t\tfor(i = 0; i < modules.length; i++) {\n\t\t\tvar item = modules[i];\n\t\t\t// skip already imported module\n\t\t\t// this implementation is not 100% perfect for weird media query combinations\n\t\t\t//  when a module is imported multiple times with different media queries.\n\t\t\t//  I hope this will never occur (Hey this way we have smaller bundles)\n\t\t\tif(typeof item[0] !== \"number\" || !alreadyImportedModules[item[0]]) {\n\t\t\t\tif(mediaQuery && !item[2]) {\n\t\t\t\t\titem[2] = mediaQuery;\n\t\t\t\t} else if(mediaQuery) {\n\t\t\t\t\titem[2] = \"(\" + item[2] + \") and (\" + mediaQuery + \")\";\n\t\t\t\t}\n\t\t\t\tlist.push(item);\n\t\t\t}\n\t\t}\n\t};\n\treturn list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n\tvar content = item[1] || '';\n\tvar cssMapping = item[3];\n\tif (!cssMapping) {\n\t\treturn content;\n\t}\n\n\tif (useSourceMap && typeof btoa === 'function') {\n\t\tvar sourceMapping = toComment(cssMapping);\n\t\tvar sourceURLs = cssMapping.sources.map(function (source) {\n\t\t\treturn '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'\n\t\t});\n\n\t\treturn [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n\t}\n\n\treturn [content].join('\\n');\n}\n\n// Adapted from convert-source-map (MIT)\nfunction toComment(sourceMap) {\n\t// eslint-disable-next-line no-undef\n\tvar base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n\tvar data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;\n\n\treturn '/*# ' + data + ' */';\n}\n\n\n//# sourceURL=webpack://SimpleImage/./node_modules/css-loader/lib/css-base.js?");

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/*\n\tMIT License http://www.opensource.org/licenses/mit-license.php\n\tAuthor Tobias Koppers @sokra\n*/\n\nvar stylesInDom = {};\n\nvar\tmemoize = function (fn) {\n\tvar memo;\n\n\treturn function () {\n\t\tif (typeof memo === \"undefined\") memo = fn.apply(this, arguments);\n\t\treturn memo;\n\t};\n};\n\nvar isOldIE = memoize(function () {\n\t// Test for IE <= 9 as proposed by Browserhacks\n\t// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n\t// Tests for existence of standard globals is to allow style-loader\n\t// to operate correctly into non-standard environments\n\t// @see https://github.com/webpack-contrib/style-loader/issues/177\n\treturn window && document && document.all && !window.atob;\n});\n\nvar getTarget = function (target) {\n  return document.querySelector(target);\n};\n\nvar getElement = (function (fn) {\n\tvar memo = {};\n\n\treturn function(target) {\n                // If passing function in options, then use it for resolve \"head\" element.\n                // Useful for Shadow Root style i.e\n                // {\n                //   insertInto: function () { return document.querySelector(\"#foo\").shadowRoot }\n                // }\n                if (typeof target === 'function') {\n                        return target();\n                }\n                if (typeof memo[target] === \"undefined\") {\n\t\t\tvar styleTarget = getTarget.call(this, target);\n\t\t\t// Special case to return head of iframe instead of iframe itself\n\t\t\tif (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n\t\t\t\ttry {\n\t\t\t\t\t// This will throw an exception if access to iframe is blocked\n\t\t\t\t\t// due to cross-origin restrictions\n\t\t\t\t\tstyleTarget = styleTarget.contentDocument.head;\n\t\t\t\t} catch(e) {\n\t\t\t\t\tstyleTarget = null;\n\t\t\t\t}\n\t\t\t}\n\t\t\tmemo[target] = styleTarget;\n\t\t}\n\t\treturn memo[target]\n\t};\n})();\n\nvar singleton = null;\nvar\tsingletonCounter = 0;\nvar\tstylesInsertedAtTop = [];\n\nvar\tfixUrls = __webpack_require__(/*! ./urls */ \"./node_modules/style-loader/lib/urls.js\");\n\nmodule.exports = function(list, options) {\n\tif (typeof DEBUG !== \"undefined\" && DEBUG) {\n\t\tif (typeof document !== \"object\") throw new Error(\"The style-loader cannot be used in a non-browser environment\");\n\t}\n\n\toptions = options || {};\n\n\toptions.attrs = typeof options.attrs === \"object\" ? options.attrs : {};\n\n\t// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n\t// tags it will allow on a page\n\tif (!options.singleton && typeof options.singleton !== \"boolean\") options.singleton = isOldIE();\n\n\t// By default, add <style> tags to the <head> element\n        if (!options.insertInto) options.insertInto = \"head\";\n\n\t// By default, add <style> tags to the bottom of the target\n\tif (!options.insertAt) options.insertAt = \"bottom\";\n\n\tvar styles = listToStyles(list, options);\n\n\taddStylesToDom(styles, options);\n\n\treturn function update (newList) {\n\t\tvar mayRemove = [];\n\n\t\tfor (var i = 0; i < styles.length; i++) {\n\t\t\tvar item = styles[i];\n\t\t\tvar domStyle = stylesInDom[item.id];\n\n\t\t\tdomStyle.refs--;\n\t\t\tmayRemove.push(domStyle);\n\t\t}\n\n\t\tif(newList) {\n\t\t\tvar newStyles = listToStyles(newList, options);\n\t\t\taddStylesToDom(newStyles, options);\n\t\t}\n\n\t\tfor (var i = 0; i < mayRemove.length; i++) {\n\t\t\tvar domStyle = mayRemove[i];\n\n\t\t\tif(domStyle.refs === 0) {\n\t\t\t\tfor (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();\n\n\t\t\t\tdelete stylesInDom[domStyle.id];\n\t\t\t}\n\t\t}\n\t};\n};\n\nfunction addStylesToDom (styles, options) {\n\tfor (var i = 0; i < styles.length; i++) {\n\t\tvar item = styles[i];\n\t\tvar domStyle = stylesInDom[item.id];\n\n\t\tif(domStyle) {\n\t\t\tdomStyle.refs++;\n\n\t\t\tfor(var j = 0; j < domStyle.parts.length; j++) {\n\t\t\t\tdomStyle.parts[j](item.parts[j]);\n\t\t\t}\n\n\t\t\tfor(; j < item.parts.length; j++) {\n\t\t\t\tdomStyle.parts.push(addStyle(item.parts[j], options));\n\t\t\t}\n\t\t} else {\n\t\t\tvar parts = [];\n\n\t\t\tfor(var j = 0; j < item.parts.length; j++) {\n\t\t\t\tparts.push(addStyle(item.parts[j], options));\n\t\t\t}\n\n\t\t\tstylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};\n\t\t}\n\t}\n}\n\nfunction listToStyles (list, options) {\n\tvar styles = [];\n\tvar newStyles = {};\n\n\tfor (var i = 0; i < list.length; i++) {\n\t\tvar item = list[i];\n\t\tvar id = options.base ? item[0] + options.base : item[0];\n\t\tvar css = item[1];\n\t\tvar media = item[2];\n\t\tvar sourceMap = item[3];\n\t\tvar part = {css: css, media: media, sourceMap: sourceMap};\n\n\t\tif(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});\n\t\telse newStyles[id].parts.push(part);\n\t}\n\n\treturn styles;\n}\n\nfunction insertStyleElement (options, style) {\n\tvar target = getElement(options.insertInto)\n\n\tif (!target) {\n\t\tthrow new Error(\"Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.\");\n\t}\n\n\tvar lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];\n\n\tif (options.insertAt === \"top\") {\n\t\tif (!lastStyleElementInsertedAtTop) {\n\t\t\ttarget.insertBefore(style, target.firstChild);\n\t\t} else if (lastStyleElementInsertedAtTop.nextSibling) {\n\t\t\ttarget.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);\n\t\t} else {\n\t\t\ttarget.appendChild(style);\n\t\t}\n\t\tstylesInsertedAtTop.push(style);\n\t} else if (options.insertAt === \"bottom\") {\n\t\ttarget.appendChild(style);\n\t} else if (typeof options.insertAt === \"object\" && options.insertAt.before) {\n\t\tvar nextSibling = getElement(options.insertInto + \" \" + options.insertAt.before);\n\t\ttarget.insertBefore(style, nextSibling);\n\t} else {\n\t\tthrow new Error(\"[Style Loader]\\n\\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\\n Must be 'top', 'bottom', or Object.\\n (https://github.com/webpack-contrib/style-loader#insertat)\\n\");\n\t}\n}\n\nfunction removeStyleElement (style) {\n\tif (style.parentNode === null) return false;\n\tstyle.parentNode.removeChild(style);\n\n\tvar idx = stylesInsertedAtTop.indexOf(style);\n\tif(idx >= 0) {\n\t\tstylesInsertedAtTop.splice(idx, 1);\n\t}\n}\n\nfunction createStyleElement (options) {\n\tvar style = document.createElement(\"style\");\n\n\tif(options.attrs.type === undefined) {\n\t\toptions.attrs.type = \"text/css\";\n\t}\n\n\taddAttrs(style, options.attrs);\n\tinsertStyleElement(options, style);\n\n\treturn style;\n}\n\nfunction createLinkElement (options) {\n\tvar link = document.createElement(\"link\");\n\n\tif(options.attrs.type === undefined) {\n\t\toptions.attrs.type = \"text/css\";\n\t}\n\toptions.attrs.rel = \"stylesheet\";\n\n\taddAttrs(link, options.attrs);\n\tinsertStyleElement(options, link);\n\n\treturn link;\n}\n\nfunction addAttrs (el, attrs) {\n\tObject.keys(attrs).forEach(function (key) {\n\t\tel.setAttribute(key, attrs[key]);\n\t});\n}\n\nfunction addStyle (obj, options) {\n\tvar style, update, remove, result;\n\n\t// If a transform function was defined, run it on the css\n\tif (options.transform && obj.css) {\n\t    result = options.transform(obj.css);\n\n\t    if (result) {\n\t    \t// If transform returns a value, use that instead of the original css.\n\t    \t// This allows running runtime transformations on the css.\n\t    \tobj.css = result;\n\t    } else {\n\t    \t// If the transform function returns a falsy value, don't add this css.\n\t    \t// This allows conditional loading of css\n\t    \treturn function() {\n\t    \t\t// noop\n\t    \t};\n\t    }\n\t}\n\n\tif (options.singleton) {\n\t\tvar styleIndex = singletonCounter++;\n\n\t\tstyle = singleton || (singleton = createStyleElement(options));\n\n\t\tupdate = applyToSingletonTag.bind(null, style, styleIndex, false);\n\t\tremove = applyToSingletonTag.bind(null, style, styleIndex, true);\n\n\t} else if (\n\t\tobj.sourceMap &&\n\t\ttypeof URL === \"function\" &&\n\t\ttypeof URL.createObjectURL === \"function\" &&\n\t\ttypeof URL.revokeObjectURL === \"function\" &&\n\t\ttypeof Blob === \"function\" &&\n\t\ttypeof btoa === \"function\"\n\t) {\n\t\tstyle = createLinkElement(options);\n\t\tupdate = updateLink.bind(null, style, options);\n\t\tremove = function () {\n\t\t\tremoveStyleElement(style);\n\n\t\t\tif(style.href) URL.revokeObjectURL(style.href);\n\t\t};\n\t} else {\n\t\tstyle = createStyleElement(options);\n\t\tupdate = applyToTag.bind(null, style);\n\t\tremove = function () {\n\t\t\tremoveStyleElement(style);\n\t\t};\n\t}\n\n\tupdate(obj);\n\n\treturn function updateStyle (newObj) {\n\t\tif (newObj) {\n\t\t\tif (\n\t\t\t\tnewObj.css === obj.css &&\n\t\t\t\tnewObj.media === obj.media &&\n\t\t\t\tnewObj.sourceMap === obj.sourceMap\n\t\t\t) {\n\t\t\t\treturn;\n\t\t\t}\n\n\t\t\tupdate(obj = newObj);\n\t\t} else {\n\t\t\tremove();\n\t\t}\n\t};\n}\n\nvar replaceText = (function () {\n\tvar textStore = [];\n\n\treturn function (index, replacement) {\n\t\ttextStore[index] = replacement;\n\n\t\treturn textStore.filter(Boolean).join('\\n');\n\t};\n})();\n\nfunction applyToSingletonTag (style, index, remove, obj) {\n\tvar css = remove ? \"\" : obj.css;\n\n\tif (style.styleSheet) {\n\t\tstyle.styleSheet.cssText = replaceText(index, css);\n\t} else {\n\t\tvar cssNode = document.createTextNode(css);\n\t\tvar childNodes = style.childNodes;\n\n\t\tif (childNodes[index]) style.removeChild(childNodes[index]);\n\n\t\tif (childNodes.length) {\n\t\t\tstyle.insertBefore(cssNode, childNodes[index]);\n\t\t} else {\n\t\t\tstyle.appendChild(cssNode);\n\t\t}\n\t}\n}\n\nfunction applyToTag (style, obj) {\n\tvar css = obj.css;\n\tvar media = obj.media;\n\n\tif(media) {\n\t\tstyle.setAttribute(\"media\", media)\n\t}\n\n\tif(style.styleSheet) {\n\t\tstyle.styleSheet.cssText = css;\n\t} else {\n\t\twhile(style.firstChild) {\n\t\t\tstyle.removeChild(style.firstChild);\n\t\t}\n\n\t\tstyle.appendChild(document.createTextNode(css));\n\t}\n}\n\nfunction updateLink (link, options, obj) {\n\tvar css = obj.css;\n\tvar sourceMap = obj.sourceMap;\n\n\t/*\n\t\tIf convertToAbsoluteUrls isn't defined, but sourcemaps are enabled\n\t\tand there is no publicPath defined then lets turn convertToAbsoluteUrls\n\t\ton by default.  Otherwise default to the convertToAbsoluteUrls option\n\t\tdirectly\n\t*/\n\tvar autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;\n\n\tif (options.convertToAbsoluteUrls || autoFixUrls) {\n\t\tcss = fixUrls(css);\n\t}\n\n\tif (sourceMap) {\n\t\t// http://stackoverflow.com/a/26603875\n\t\tcss += \"\\n/*# sourceMappingURL=data:application/json;base64,\" + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + \" */\";\n\t}\n\n\tvar blob = new Blob([css], { type: \"text/css\" });\n\n\tvar oldSrc = link.href;\n\n\tlink.href = URL.createObjectURL(blob);\n\n\tif(oldSrc) URL.revokeObjectURL(oldSrc);\n}\n\n\n//# sourceURL=webpack://SimpleImage/./node_modules/style-loader/lib/addStyles.js?");

/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n/**\n * When source maps are enabled, `style-loader` uses a link element with a data-uri to\n * embed the css on the page. This breaks all relative urls because now they are relative to a\n * bundle instead of the current page.\n *\n * One solution is to only use full urls, but that may be impossible.\n *\n * Instead, this function \"fixes\" the relative urls to be absolute according to the current page location.\n *\n * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.\n *\n */\n\nmodule.exports = function (css) {\n  // get current location\n  var location = typeof window !== \"undefined\" && window.location;\n\n  if (!location) {\n    throw new Error(\"fixUrls requires window.location\");\n  }\n\n\t// blank or null?\n\tif (!css || typeof css !== \"string\") {\n\t  return css;\n  }\n\n  var baseUrl = location.protocol + \"//\" + location.host;\n  var currentDir = baseUrl + location.pathname.replace(/\\/[^\\/]*$/, \"/\");\n\n\t// convert each url(...)\n\t/*\n\tThis regular expression is just a way to recursively match brackets within\n\ta string.\n\n\t /url\\s*\\(  = Match on the word \"url\" with any whitespace after it and then a parens\n\t   (  = Start a capturing group\n\t     (?:  = Start a non-capturing group\n\t         [^)(]  = Match anything that isn't a parentheses\n\t         |  = OR\n\t         \\(  = Match a start parentheses\n\t             (?:  = Start another non-capturing groups\n\t                 [^)(]+  = Match anything that isn't a parentheses\n\t                 |  = OR\n\t                 \\(  = Match a start parentheses\n\t                     [^)(]*  = Match anything that isn't a parentheses\n\t                 \\)  = Match a end parentheses\n\t             )  = End Group\n              *\\) = Match anything and then a close parens\n          )  = Close non-capturing group\n          *  = Match anything\n       )  = Close capturing group\n\t \\)  = Match a close parens\n\n\t /gi  = Get all matches, not the first.  Be case insensitive.\n\t */\n\tvar fixedCss = css.replace(/url\\s*\\(((?:[^)(]|\\((?:[^)(]+|\\([^)(]*\\))*\\))*)\\)/gi, function(fullMatch, origUrl) {\n\t\t// strip quotes (if they exist)\n\t\tvar unquotedOrigUrl = origUrl\n\t\t\t.trim()\n\t\t\t.replace(/^\"(.*)\"$/, function(o, $1){ return $1; })\n\t\t\t.replace(/^'(.*)'$/, function(o, $1){ return $1; });\n\n\t\t// already a full url? no change\n\t\tif (/^(#|data:|http:\\/\\/|https:\\/\\/|file:\\/\\/\\/|\\s*$)/i.test(unquotedOrigUrl)) {\n\t\t  return fullMatch;\n\t\t}\n\n\t\t// convert the url to a full url\n\t\tvar newUrl;\n\n\t\tif (unquotedOrigUrl.indexOf(\"//\") === 0) {\n\t\t  \t//TODO: should we add protocol?\n\t\t\tnewUrl = unquotedOrigUrl;\n\t\t} else if (unquotedOrigUrl.indexOf(\"/\") === 0) {\n\t\t\t// path should be relative to the base url\n\t\t\tnewUrl = baseUrl + unquotedOrigUrl; // already starts with '/'\n\t\t} else {\n\t\t\t// path should be relative to current directory\n\t\t\tnewUrl = currentDir + unquotedOrigUrl.replace(/^\\.\\//, \"\"); // Strip leading './'\n\t\t}\n\n\t\t// send back the fixed url(...)\n\t\treturn \"url(\" + JSON.stringify(newUrl) + \")\";\n\t});\n\n\t// send back the fixed css\n\treturn fixedCss;\n};\n\n\n//# sourceURL=webpack://SimpleImage/./node_modules/style-loader/lib/urls.js?");

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../node_modules/css-loader!./index.css */ \"./node_modules/css-loader/index.js!./src/index.css\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack://SimpleImage/./src/index.css?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n/**\r\n * Build styles\r\n */\n__webpack_require__(/*! ./index.css */ \"./src/index.css\").toString();\n/**\r\n * SimpleImage Tool for the Editor.js\r\n * Works only with pasted image URLs and requires no server-side uploader.\r\n *\r\n * @typedef {object} SimpleImageData\r\n * @description Tool's input and output data format\r\n * @property {string} url — image URL\r\n * @property {string} caption — image caption\r\n * @property {string} alt - image alt\r\n * @property {boolean} withBorder - should image be rendered with border\r\n * @property {boolean} withBackground - should image be rendered with background\r\n * @property {boolean} stretched - should image be stretched to full width of container\r\n */\n\n\nvar SimpleImage =\n/*#__PURE__*/\nfunction () {\n  /**\r\n   * Render plugin`s main Element and fill it with saved data\r\n   *\r\n   * @param {{data: SimpleImageData, config: object, api: object}}\r\n   *   data — previously saved data\r\n   *   config - user config for Tool\r\n   *   api - Editor.js API\r\n   */\n  function SimpleImage(_ref) {\n    var data = _ref.data,\n        config = _ref.config,\n        api = _ref.api;\n\n    _classCallCheck(this, SimpleImage);\n\n    /**\r\n     * Editor.js API\r\n     */\n    this.api = api;\n    /**\r\n     * When block is only constructing,\r\n     * current block points to previous block.\r\n     * So real block index will be +1 after rendering\r\n     * @todo place it at the `rendered` event hook to get real block index without +1;\r\n     * @type {number}\r\n     */\n\n    this.blockIndex = this.api.blocks.getCurrentBlockIndex() + 1;\n    /**\r\n     * Styles\r\n     */\n\n    this.CSS = {\n      baseClass: this.api.styles.block,\n      loading: this.api.styles.loader,\n      input: this.api.styles.input,\n      settingsButton: this.api.styles.settingsButton,\n      settingsButtonActive: this.api.styles.settingsButtonActive,\n\n      /**\r\n       * Tool's classes\r\n       */\n      wrapper: 'cdx-simple-image',\n      imageHolder: 'cdx-simple-image__picture',\n      caption: 'cdx-simple-image__caption',\n      alt: 'cdx-simple-image__alt'\n    };\n    /**\r\n     * Nodes cache\r\n     */\n\n    this.nodes = {\n      wrapper: null,\n      imageHolder: null,\n      image: null,\n      caption: null,\n      alt: null\n    };\n    /**\r\n     * Tool's initial data\r\n     */\n\n    this.data = {\n      url: data.url || '',\n      caption: data.caption || '',\n      alt: data.alt || '',\n      withBorder: data.withBorder !== undefined ? data.withBorder : false,\n      withBackground: data.withBackground !== undefined ? data.withBackground : false,\n      stretched: data.stretched !== undefined ? data.stretched : false\n    };\n    /**\r\n     * Available Image settings\r\n     */\n\n    this.settings = [{\n      name: 'withBorder',\n      icon: \"<svg width=\\\"20\\\" height=\\\"20\\\" viewBox=\\\"0 0 20 20\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\"><path d=\\\"M15.8 10.592v2.043h2.35v2.138H15.8v2.232h-2.25v-2.232h-2.4v-2.138h2.4v-2.28h2.25v.237h1.15-1.15zM1.9 8.455v-3.42c0-1.154.985-2.09 2.2-2.09h4.2v2.137H4.15v3.373H1.9zm0 2.137h2.25v3.325H8.3v2.138H4.1c-1.215 0-2.2-.936-2.2-2.09v-3.373zm15.05-2.137H14.7V5.082h-4.15V2.945h4.2c1.215 0 2.2.936 2.2 2.09v3.42z\\\"/></svg>\"\n    }, {\n      name: 'stretched',\n      icon: \"<svg width=\\\"17\\\" height=\\\"10\\\" viewBox=\\\"0 0 17 10\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\"><path d=\\\"M13.568 5.925H4.056l1.703 1.703a1.125 1.125 0 0 1-1.59 1.591L.962 6.014A1.069 1.069 0 0 1 .588 4.26L4.38.469a1.069 1.069 0 0 1 1.512 1.511L4.084 3.787h9.606l-1.85-1.85a1.069 1.069 0 1 1 1.512-1.51l3.792 3.791a1.069 1.069 0 0 1-.475 1.788L13.514 9.16a1.125 1.125 0 0 1-1.59-1.591l1.644-1.644z\\\"/></svg>\"\n    }, {\n      name: 'withBackground',\n      icon: \"<svg width=\\\"20\\\" height=\\\"20\\\" viewBox=\\\"0 0 20 20\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\"><path d=\\\"M10.043 8.265l3.183-3.183h-2.924L4.75 10.636v2.923l4.15-4.15v2.351l-2.158 2.159H8.9v2.137H4.7c-1.215 0-2.2-.936-2.2-2.09v-8.93c0-1.154.985-2.09 2.2-2.09h10.663l.033-.033.034.034c1.178.04 2.12.96 2.12 2.089v3.23H15.3V5.359l-2.906 2.906h-2.35zM7.951 5.082H4.75v3.201l3.201-3.2zm5.099 7.078v3.04h4.15v-3.04h-4.15zm-1.1-2.137h6.35c.635 0 1.15.489 1.15 1.092v5.13c0 .603-.515 1.092-1.15 1.092h-6.35c-.635 0-1.15-.489-1.15-1.092v-5.13c0-.603.515-1.092 1.15-1.092z\\\"/></svg>\"\n    }];\n  }\n\n  _createClass(SimpleImage, [{\n    key: \"render\",\n\n    /**\r\n     * Creates a Block:\r\n     *  0) Show a button if there is no image\r\n     *  1) Show preloader\r\n     *  2) Start to load an image\r\n     *  3) After loading, append image, caption and alt input\r\n     * @public\r\n     */\n    value: function render() {\n      var _this = this;\n\n      var wrapper = this._make('div', [this.CSS.baseClass, this.CSS.wrapper]),\n          loadButton = this._make('input', [], {\n        type: 'file'\n      }),\n          loader = this._make('div', this.CSS.loading),\n          imageHolder = this._make('div', this.CSS.imageHolder),\n          image = this._make('img'),\n          caption = this._make('div', [this.CSS.input, this.CSS.caption], {\n        contentEditable: 'true',\n        innerHTML: this.data.caption || ''\n      });\n\n      alt = this._make('div', [this.CSS.input, this.CSS.alt], {\n        contentEditable: 'true',\n        innerHTML: this.data.alt || ''\n      });\n      this.nodes.imageHolder = imageHolder;\n      this.nodes.wrapper = wrapper;\n      this.nodes.image = image;\n      this.nodes.caption = caption;\n      this.nodes.alt = alt;\n      this.nodes.loader = loader;\n      this.nodes.loadButton = loadButton;\n      caption.dataset.placeholder = 'Enter a caption';\n      alt.dataset.placeholder = 'Enter a alternative text';\n\n      image.onload = function () {\n        wrapper.classList.remove(_this.CSS.loading);\n        imageHolder.appendChild(image);\n        wrapper.appendChild(imageHolder);\n        wrapper.appendChild(caption);\n        wrapper.appendChild(alt);\n        loader.remove();\n\n        if (loadButton !== null) {\n          loadButton.remove();\n          loadButton = null;\n        }\n\n        _this.nodes.loader = null;\n\n        _this._acceptTuneView();\n      };\n\n      image.onerror = function (e) {\n        // @todo use api.Notifies.show() to show error notification\n        console.log('Failed to load an image', e);\n      };\n\n      if (this.data.url) {\n        wrapper.appendChild(loader);\n        image.src = this.data.url;\n      } else {\n        wrapper.appendChild(loadButton);\n\n        loadButton.onchange = function (e) {\n          var file = e.target.files[0];\n          var url = URL.createObjectURL(file);\n          _this.data = {\n            url: url,\n            caption: file.name,\n            alt: file.name\n          };\n          loadButton.remove();\n          loadButton = null;\n        };\n      }\n\n      return wrapper;\n    }\n    /**\r\n     * @public\r\n     * Saving method\r\n     * @param {Element} blockContent - Tool's wrapper\r\n     * @return {SimpleImageData}\r\n     */\n\n  }, {\n    key: \"save\",\n    value: function save(blockContent) {\n      var image = blockContent.querySelector('img'),\n          caption = blockContent.querySelector('.' + this.CSS.input);\n      alt = blockContent.querySelector('.' + this.CSS.input);\n\n      if (!image) {\n        return this.data;\n      }\n\n      return Object.assign(this.data, {\n        url: image.src,\n        caption: caption.innerHTML,\n        alt: alt.innerHTML\n      });\n    }\n    /**\r\n     * Sanitizer rules\r\n     */\n\n  }, {\n    key: \"onPaste\",\n\n    /**\r\n     * On paste callback that is fired from Editor.\r\n     *\r\n     * @param {PasteEvent} event - event with pasted config\r\n     */\n    value: function onPaste(event) {\n      switch (event.type) {\n        case 'tag':\n          var img = event.detail.data;\n          this.data = {\n            url: img.src\n          };\n          break;\n\n        case 'pattern':\n          var text = event.detail.data;\n          this.data = {\n            url: text\n          };\n          break;\n\n        case 'file':\n          var file = event.detail.file;\n          this.data = {\n            url: URL.createObjectURL(file),\n            caption: file.name,\n            alt: file.name\n          };\n          break;\n      }\n\n      this.nodes.loadButton.remove();\n      this.nodes.loadButton = null;\n    }\n    /**\r\n     * Returns image data\r\n     * @return {SimpleImageData}\r\n     */\n\n  }, {\n    key: \"renderSettings\",\n\n    /**\r\n     * Makes buttons with tunes: add background, add border, stretch image\r\n     * @return {HTMLDivElement}\r\n     */\n    value: function renderSettings() {\n      var _this2 = this;\n\n      var wrapper = document.createElement('div');\n      this.settings.forEach(function (tune) {\n        var el = document.createElement('div');\n        el.classList.add(_this2.CSS.settingsButton);\n        el.innerHTML = tune.icon;\n        el.addEventListener('click', function () {\n          _this2._toggleTune(tune.name);\n\n          el.classList.toggle(_this2.CSS.settingsButtonActive);\n        });\n        el.classList.toggle(_this2.CSS.settingsButtonActive, _this2.data[tune.name]);\n        wrapper.appendChild(el);\n      });\n      return wrapper;\n    }\n  }, {\n    key: \"removed\",\n    value: function removed() {\n      if (this.data.url && this.data.url.startsWith('blob:')) {\n        URL.revokeObjectURL(this.data.url);\n      }\n    }\n    /**\r\n     * Helper for making Elements with attributes\r\n     *\r\n     * @param  {string} tagName           - new Element tag name\r\n     * @param  {array|string} classNames  - list or name of CSS classname(s)\r\n     * @param  {Object} attributes        - any attributes\r\n     * @return {Element}\r\n     */\n\n  }, {\n    key: \"_make\",\n    value: function _make(tagName) {\n      var classNames = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;\n      var attributes = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};\n      var el = document.createElement(tagName);\n\n      if (Array.isArray(classNames)) {\n        var _el$classList;\n\n        (_el$classList = el.classList).add.apply(_el$classList, _toConsumableArray(classNames));\n      } else if (classNames) {\n        el.classList.add(classNames);\n      }\n\n      for (var attrName in attributes) {\n        el[attrName] = attributes[attrName];\n      }\n\n      return el;\n    }\n    /**\r\n     * Click on the Settings Button\r\n     * @private\r\n     */\n\n  }, {\n    key: \"_toggleTune\",\n    value: function _toggleTune(tune) {\n      this.data[tune] = !this.data[tune];\n\n      this._acceptTuneView();\n    }\n    /**\r\n     * Add specified class corresponds with activated tunes\r\n     * @private\r\n     */\n\n  }, {\n    key: \"_acceptTuneView\",\n    value: function _acceptTuneView() {\n      var _this3 = this;\n\n      this.settings.forEach(function (tune) {\n        _this3.nodes.imageHolder.classList.toggle(_this3.CSS.imageHolder + '--' + tune.name.replace(/([A-Z])/g, function (g) {\n          return \"-\".concat(g[0].toLowerCase());\n        }), !!_this3.data[tune.name]);\n\n        if (tune.name === 'stretched') {\n          _this3.api.blocks.stretchBlock(_this3.blockIndex, !!_this3.data.stretched);\n        }\n      });\n    }\n  }, {\n    key: \"data\",\n    get: function get() {\n      return this._data;\n    }\n    /**\r\n     * Set image data and update the view\r\n     *\r\n     * @param {SimpleImageData} data\r\n     */\n    ,\n    set: function set(data) {\n      this._data = Object.assign({}, this.data, data);\n\n      if (this.nodes.image) {\n        this.nodes.image.src = this.data.url;\n      }\n\n      if (this.nodes.caption) {\n        this.nodes.caption.innerHTML = this.data.caption;\n      }\n\n      if (this.nodes.alt) {\n        this.nodes.alt.innerHTML = this.data.alt;\n      }\n    }\n    /**\r\n     * Specify paste substitutes\r\n     * @see {@link ../../../docs/tools.md#paste-handling}\r\n     * @public\r\n     */\n\n  }], [{\n    key: \"toolbox\",\n    get: function get() {\n      return {\n        title: 'Image',\n        icon: '<svg width=\"17\" height=\"15\" viewBox=\"0 0 336 276\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M291 150V79c0-19-15-34-34-34H79c-19 0-34 15-34 34v42l67-44 81 72 56-29 42 30zm0 52l-43-30-56 30-81-67-66 39v23c0 19 15 34 34 34h178c17 0 31-13 34-29zM79 0h178c44 0 79 35 79 79v118c0 44-35 79-79 79H79c-44 0-79-35-79-79V79C0 35 35 0 79 0z\"/></svg>'\n      };\n    }\n  }, {\n    key: \"sanitize\",\n    get: function get() {\n      return {\n        url: {},\n        withBorder: {},\n        withBackground: {},\n        stretched: {},\n        caption: {\n          br: true\n        },\n        alt: {\n          br: true\n        }\n      };\n    }\n  }, {\n    key: \"pasteConfig\",\n    get: function get() {\n      return {\n        patterns: {\n          image: /https?:\\/\\/\\S+\\.(gif|jpe?g|tiff|png)$/i\n        },\n        tags: ['img'],\n        files: {\n          mimeTypes: ['image/*']\n        }\n      };\n    }\n  }]);\n\n  return SimpleImage;\n}();\n\nmodule.exports = SimpleImage;\n\n//# sourceURL=webpack://SimpleImage/./src/index.js?");

/***/ })

/******/ });
});