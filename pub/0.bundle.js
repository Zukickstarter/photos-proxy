(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./photos/user/parts/App.jsx":
/*!***********************************!*\
  !*** ./photos/user/parts/App.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Slides_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Slides.jsx */ \"./photos/user/parts/Slides.jsx\");\n/* harmony import */ var _Side_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Side.jsx */ \"./photos/user/parts/Side.jsx\");\n\n\n\n/**\n * Component that renders to the page using\n * ReactDOM.render, only after fetching data.\n * @param {React.Props} props react props\n * @param {Array<Object>} props.data an array of photos or videos (possibly mixed)\n * @param {Object} props.data.N props.data[N] where 0 <= n < props.data.length\n * @param {URL} props.data.N.url the url of the photo or video\n * @param {'video' | 'photo'} props.data.N.type is it an photo or \n * @returns {React.ElementType}\n * @example <App data={data}/>\n * */\n\nconst App = class extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {\n  /** @constructor */\n  constructor(props) {\n    var _this$props$data;\n\n    super(props);\n    this.state = {\n      data: (_this$props$data = this.props.data) !== null && _this$props$data !== void 0 ? _this$props$data : []\n    };\n  }\n\n  render() {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Slides_jsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n      data: this.state.data\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Side_jsx__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null));\n  }\n\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\n\n//# sourceURL=webpack:///./photos/user/parts/App.jsx?");

/***/ }),

/***/ "./photos/user/parts/Photo.jsx":
/*!*************************************!*\
  !*** ./photos/user/parts/Photo.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n/**\n * Singular photo component\n * @param {React.Props} props react props\n * @param {URL} props.url must be a url of a photo (png, jpeg, netpbm)\n * @param {Boolean} props.show this is default undefined and therefore hidden\n * @returns {React.ElementType} \n */\n\nconst Photo = function (props) {\n  let style = {};\n  style.width = '100%';\n\n  if (!props.show) {\n    style.display = 'none';\n  }\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n    src: props.url,\n    style: style\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Photo);\n\n//# sourceURL=webpack:///./photos/user/parts/Photo.jsx?");

/***/ }),

/***/ "./photos/user/parts/Side.jsx":
/*!************************************!*\
  !*** ./photos/user/parts/Side.jsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n/**\n * css styles for the outtermost side div\n * @memberof Side\n * @type {Map<String, String>}\n */\n\nconst outterDiv = {\n  'fontFamily': 'Helvetica, Arial, Sans-Serif',\n  'float': 'left',\n  'width': '20%'\n};\n/**\n * css styles for the green kickstarter bar\n * @memberof Side\n * @type {Map<String, String>}\n */\n\nconst greenBar = {\n  'backgroundColor': '#009E74',\n  'margin': '10px'\n};\n/**\n * css styles for the big h1 at the top of kickstarter, only first is green\n * @memberof Side\n * @type {Map<String, String>}\n */\n\nconst h1green = {\n  'fontSize': '50px',\n  'margin': '0px 0px',\n  'color': '#009070'\n};\n/**\n * css styles for a normal h1\n * @memberof Side\n * @type {Map<String, String>}\n */\n\nconst h1 = {\n  'fontSize': '50px',\n  'margin': '0px 0px'\n};\n/**\n * css styles for a normal h2\n * @memberof Side\n * @type {Map<String, String>}\n */\n\nconst h2 = {\n  'fontSize': '15px',\n  'margin': '0px 0px',\n  'marginBottom': '70px',\n  'color': '#707070'\n};\n/**\n * To the side of the photos\n * Renders everything as a html br with background or a html p with style\n * @param {React.Props} props react props\n * @todo not yet displaying proper data, i may have forgotten about this.\n */\n\nconst Side = function (props) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    style: outterDiv\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    style: greenBar\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", {\n    style: h1green\n  }, \"$50,000\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", {\n    style: h2\n  }, \"pledged of $4,000\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", {\n    style: h1\n  }, \"500\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", {\n    style: h2\n  }, \"backers\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", {\n    style: h1\n  }, \"7\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", {\n    style: h2\n  }, \"days to go\"));\n};\n\nSide.outterDiv = outterDiv;\nSide.greenBar = greenBar;\nSide.h1green = h1green;\nSide.h1 = h1;\nSide.h2 = h2;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Side);\n\n//# sourceURL=webpack:///./photos/user/parts/Side.jsx?");

/***/ }),

/***/ "./photos/user/parts/Slide.jsx":
/*!*************************************!*\
  !*** ./photos/user/parts/Slide.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Video_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Video.jsx */ \"./photos/user/parts/Video.jsx\");\n/* harmony import */ var _Photo_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Photo.jsx */ \"./photos/user/parts/Photo.jsx\");\n\n\n\n/**\n * Slide component that shows a single video or photo\n * Also contains the logic for switching between photo or video\n * @param {React.Props} props react props\n * @param {Object} props.data a photo or video\n * @param {URL} props.data.url the url of the photo or video, must match the type\n * @param {'video' | 'photo'} props.data.type is it a photo or video\n * @param {Boolean} props.show is it going to be rendered\n * @returns {React.ElementType} \n */\n\nconst Slide = function (props) {\n  switch (props.data.type) {\n    case 'video':\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Video_jsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        url: props.data.url,\n        show: props.show\n      });\n\n    case 'photo':\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Photo_jsx__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        url: props.data.url,\n        show: props.show\n      });\n\n    default:\n      throw Error('No such type ' + props.data.type);\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Slide);\n\n//# sourceURL=webpack:///./photos/user/parts/Slide.jsx?");

/***/ }),

/***/ "./photos/user/parts/Slides.jsx":
/*!**************************************!*\
  !*** ./photos/user/parts/Slides.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Slide_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Slide.jsx */ \"./photos/user/parts/Slide.jsx\");\n\n\nconst arrowStyleLeft = {\n  'fontSize': '400%',\n  'backgroundColor': 'rgba(255, 255, 255)'\n};\nconst arrowStyleRight = {\n  'float': 'right',\n  'right': '0%',\n  'fontSize': '400%',\n  'backgroundColor': 'rgba(255, 255, 255)'\n};\nconst divInnerStyle = {\n  'float': 'none'\n};\nconst divStyle = {\n  'float': 'left',\n  'width': '80%'\n};\n/**\n * Holds multiple slide components, each of them holding a photo or video\n * @param {React.Props} props react props\n * @param {Array<Object>} props.data the photos or videos (possibly mixed)\n * @param {Object} props.data.N props.data[N] where 0 <= n < props.data.length\n * @param {URL} props.data.N.url the url of the photo or video \n * @param {'video' | 'photo'} props.data.N.type is it a photo or video\n * @returns {React.ElementType} \n */\n\nconst Slides = class extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {\n  /** @constructor */\n  constructor(props) {\n    super(props);\n    this.state = {\n      current: 1\n    };\n  }\n  /**\n   * moves the photo carousel forward or backwards;\n   * implements wrapping behavior\n   * @memberof Slides\n   * @param {Integer} n \n   * @returns {void}\n   */\n\n\n  forward(n) {\n    let newn = (this.state.current + n) % this.props.data.length;\n\n    if (newn < 0) {\n      newn += this.props.data.length;\n    }\n\n    this.setState({\n      current: newn\n    });\n  }\n\n  render() {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      style: divStyle\n    }, this.props.data.map((data, n) => {\n      if (n === this.state.current) {\n        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Slide_jsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n          key: n,\n          data: data,\n          show: this.state.current === n\n        });\n      } else {\n        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null);\n      }\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n      onClick: () => this.forward(1),\n      style: arrowStyleLeft\n    }, \"<\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n      onClick: () => this.forward(-1),\n      style: arrowStyleRight\n    }, \">\"));\n  }\n\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Slides);\n\n//# sourceURL=webpack:///./photos/user/parts/Slides.jsx?");

/***/ }),

/***/ "./photos/user/parts/Video.jsx":
/*!*************************************!*\
  !*** ./photos/user/parts/Video.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n/**\n * Singular video component\n * @param {React.Props} props\n * @param {URL} props.url\n * @param {Boolean} props.show\n * @returns {React.ElementType} \n */\n\nconst Video = function (props) {\n  let style = {};\n  style.width = '100%';\n  style.height = '60%';\n\n  if (props.show) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"iframe\", {\n      src: props.url,\n      style: style\n    });\n  } else {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null);\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Video);\n\n//# sourceURL=webpack:///./photos/user/parts/Video.jsx?");

/***/ })

}]);