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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst aboutContent = {\n    heading: \"About\",\n    text: `\n        Wasabi's Sushi Bar serves a wide selection of sushi classics, such as sashimi, nigiri and maki sushi. In addition, our sushi chefs exhibit many modern interpretations and innovations of sushi \n        dishes in our specialty signature rolls. We take pride and passion in serving this artistic culinary form. The exclusive use of high quality and fresh ingredients is our top priority.\n    `\n}\n\nconst renderAbout = () => {\n    const appArea = document.getElementById('app')\n    const heading = document.createElement('h1');\n    const content = document.createElement('p');\n    const appAreaDiv = document.createElement('div');\n    appArea.innerHTML = ''\n    appAreaDiv.classList.add('app-content'); \n    heading.innerText = aboutContent.heading;\n    content.innerText = aboutContent.text;\n    appAreaDiv.appendChild(heading);\n    appAreaDiv.appendChild(content);\n    appArea.appendChild(appAreaDiv);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (renderAbout);\n\n//# sourceURL=webpack:///./src/about.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst htmlContent = {\n    heading: \"Welcome to the best restaurant in the south bay\",\n    content: [\n        {\n            image: \"../assets/images/food1.jpeg\",\n            text: \"Some quick example text to build on the card title and make up the bulk of the card's content.\"\n        },\n        {\n            image: \"../assets/images/food2.jpg\",\n            text: \"Some quick example text to build on the card title and make up the bulk of the card's content.\"\n        },\n        {\n            image: \"../assets/images/food3.jpg\",\n            text: \"Some quick example text to build on the card title and make up the bulk of the card's content.\"\n        },\n    ]\n}\n\nconst initDisplay = () => {\n    const appArea = document.getElementById('app')\n    const contentDiv = document.createElement('div')\n    const heading = document.createElement('h1')\n    htmlContent.content.forEach((element, index) => {\n        const colDiv = document.createElement('div')\n        const image = document.createElement('img')\n        const cardDiv = document.createElement('div')\n        const cardBodyDiv = document.createElement('div')\n        const paragragh = document.createElement('p')\n        colDiv.setAttribute('class', 'col-sm-4')\n        cardDiv.setAttribute('class', 'card')\n        cardDiv.style.width = '18rem'\n        image.setAttribute('class', 'card-img-top')\n        image.setAttribute('src', element.image)\n        cardBodyDiv.setAttribute('calss', 'card-body')\n        paragragh.setAttribute('class', 'card-text')\n        paragragh.innerHTML = element.text \n        cardBodyDiv.appendChild(paragragh)\n        cardDiv.appendChild(image)\n        cardDiv.appendChild(cardBodyDiv)\n        colDiv.appendChild(cardDiv)\n        contentDiv.appendChild(colDiv)\n    })\n    contentDiv.setAttribute('class', 'app-content row')\n    appArea.innerHTML = ''\n    heading.innerHTML = htmlContent.heading\n    appArea.appendChild(heading)\n    appArea.appendChild(contentDiv)\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (initDisplay);\n\n//# sourceURL=webpack:///./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about */ \"./src/about.js\");\n/* harmony import */ var _recipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./recipe */ \"./src/recipe.js\");\n\n\n\n\nwindow.onload = () => {\n    Object(_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\n}\n\ndocument.getElementById('about').addEventListener(\"click\", () => {\n    Object(_about__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\n})\n\ndocument.getElementById('home').addEventListener(\"click\", () => {\n    Object(_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\n})\n\ndocument.getElementById('recipe').addEventListener(\"click\", () => {\n    Object(_recipe__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()\n})\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/recipe.js":
/*!***********************!*\
  !*** ./src/recipe.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst recipeContent = {\n    heading: \"Todays' Menu\",\n    content: [\n        'Blue chicken',\n        'Pepe Soup Goat Meat',\n        'Friend Onions'\n    ]\n}\n\n// const recipeContent = `\n//     <h1>Todays' Menu</h1>\n//     <div class=\"recipe-content\">\n//         <p>\n//             <a class=\"btn btn-primary\" data-toggle=\"collapse\" href=\"#collapseExample\" role=\"button\" aria-expanded=\"false\" aria-controls=\"collapseExample\">\n//                 Blue chicken\n//             </a>\n//             <a class=\"btn btn-primary\" data-toggle=\"collapse\" href=\"#collapseExample\" role=\"button\" aria-expanded=\"false\" aria-controls=\"collapseExample\">\n//                 soup goat meat\n//             </a>\n//             <a class=\"btn btn-primary\" data-toggle=\"collapse\" href=\"#collapseExample\" role=\"button\" aria-expanded=\"false\" aria-controls=\"collapseExample\">\n//             Fried Onions\n//             </a>\n//         </p>\n//         <div class=\"collapse\" id=\"collapseExample\">\n//             <div class=\"card card-body\">\n//                 Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.\n//             </div>\n//         </div>\n//     </div>\n// `\nconst renderRecipe = () => {\n    const appArea = document.getElementById('app')\n    const heading = document.createElement('h1')\n    const recipeDiv = document.createElement('div')\n    const paragraph = document.createElement('p')\n    \n    recipeContent.content.forEach(element => {\n        const anchor = document.createElement('a')\n        anchor.setAttribute('class', 'btn btn-primary')\n        anchor.setAttribute('href', '#')\n        anchor.innerHTML = element\n        paragraph.appendChild(anchor)\n    })\n    recipeDiv.setAttribute('class', 'recipe-content')\n    heading.innerHTML = recipeContent.heading \n    recipeDiv.appendChild(paragraph)\n    appArea.innerHTML = ''\n    appArea.appendChild(heading)\n    appArea.appendChild(recipeDiv)\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (renderRecipe);\n\n//# sourceURL=webpack:///./src/recipe.js?");

/***/ })

/******/ });