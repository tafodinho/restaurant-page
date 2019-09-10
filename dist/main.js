/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {}
	/******/
	/******/ 	// The require function
	/******/ 	function __webpack_require__(moduleId) {
		/******/
		/******/ 		// Check if module is in cache
		/******/ 		if(installedModules[moduleId]) {
			/******/ 			return installedModules[moduleId].exports
			/******/ 		}
		/******/ 		// Create a new module (and put it into the cache)
		/******/ 		var module = installedModules[moduleId] = {
			/******/ 			i: moduleId,
			/******/ 			l: false,
			/******/ 			exports: {}
			/******/ 		}
		/******/
		/******/ 		// Execute the module function
		/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__)
		/******/
		/******/ 		// Flag the module as loaded
		/******/ 		module.l = true
		/******/
		/******/ 		// Return the exports of the module
		/******/ 		return module.exports
		/******/ 	}
	/******/
	/******/
	/******/ 	// expose the modules object (__webpack_modules__)
	/******/ 	__webpack_require__.m = modules
	/******/
	/******/ 	// expose the module cache
	/******/ 	__webpack_require__.c = installedModules
	/******/
	/******/ 	// define getter function for harmony exports
	/******/ 	__webpack_require__.d = function(exports, name, getter) {
		/******/ 		if(!__webpack_require__.o(exports, name)) {
			/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter })
			/******/ 		}
		/******/ 	}
	/******/
	/******/ 	// define __esModule on exports
	/******/ 	__webpack_require__.r = function(exports) {
		/******/ 		if(typeof Symbol !== "undefined" && Symbol.toStringTag) {
			/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" })
			/******/ 		}
		/******/ 		Object.defineProperty(exports, "__esModule", { value: true })
		/******/ 	}
	/******/
	/******/ 	// create a fake namespace object
	/******/ 	// mode & 1: value is a module id, require it
	/******/ 	// mode & 2: merge all properties of value into the ns
	/******/ 	// mode & 4: return value when already ns object
	/******/ 	// mode & 8|1: behave like require
	/******/ 	__webpack_require__.t = function(value, mode) {
		/******/ 		if(mode & 1) value = __webpack_require__(value)
		/******/ 		if(mode & 8) return value
		/******/ 		if((mode & 4) && typeof value === "object" && value && value.__esModule) return value
		/******/ 		var ns = Object.create(null)
		/******/ 		__webpack_require__.r(ns)
		/******/ 		Object.defineProperty(ns, "default", { enumerable: true, value: value })
		/******/ 		if(mode & 2 && typeof value != "string") for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key] }.bind(null, key))
		/******/ 		return ns
		/******/ 	}
	/******/
	/******/ 	// getDefaultExport function for compatibility with non-harmony modules
	/******/ 	__webpack_require__.n = function(module) {
		/******/ 		var getter = module && module.__esModule ?
		/******/ 			function getDefault() { return module["default"] } :
		/******/ 			function getModuleExports() { return module }
		/******/ 		__webpack_require__.d(getter, "a", getter)
		/******/ 		return getter
		/******/ 	}
	/******/
	/******/ 	// Object.prototype.hasOwnProperty.call
	/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property) }
	/******/
	/******/ 	// __webpack_public_path__
	/******/ 	__webpack_require__.p = ""
	/******/
	/******/
	/******/ 	// Load entry module and return exports
	/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js")
/******/ })
/************************************************************************/
/******/ ({

	/***/ "./src/about.js":
	/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
	/*! exports provided: default */
	/***/ (function(module, __webpack_exports__, __webpack_require__) {

		"use strict"
		eval("__webpack_require__.r(__webpack_exports__);\nconst aboutContent = {\n    heading: \"About\",\n    text: `\n        Wasabi's Sushi Bar serves a wide selection of sushi classics, such as sashimi, nigiri and maki sushi. In addition, our sushi chefs exhibit many modern interpretations and innovations of sushi \n        dishes in our specialty signature rolls. We take pride and passion in serving this artistic culinary form. The exclusive use of high quality and fresh ingredients is our top priority.\n    `\n}\n\nconst renderAbout = () => {\n    const appArea = document.getElementById('app')\n    const heading = document.createElement('h1');\n    const content = document.createElement('p');\n    const appAreaDiv = document.createElement('div');\n    appArea.innerHTML = ''\n    appAreaDiv.classList.add('app-content'); \n    heading.innerText = aboutContent.heading;\n    content.innerText = aboutContent.text;\n    appAreaDiv.appendChild(heading);\n    appAreaDiv.appendChild(content);\n    appArea.appendChild(appAreaDiv);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (renderAbout);\n\n//# sourceURL=webpack:///./src/about.js?")

		/***/ }),

	/***/ "./src/home.js":
	/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
	/*! exports provided: default */
	/***/ (function(module, __webpack_exports__, __webpack_require__) {

		"use strict"
		eval("__webpack_require__.r(__webpack_exports__);\nconst htmlContent = {\n\theading: \"Welcome to the best restaurant in the south bay\",\n\tcontent: [\n\t\t{\n\t\t\timage: \"../assets/images/food1.jpeg\",\n\t\t\ttext: \"Some quick example text to build on the card title and make up the bulk of the card's content.\"\n\t\t},\n\t\t{\n\t\t\timage: \"../assets/images/food2.jpg\",\n\t\t\ttext: \"Some quick example text to build on the card title and make up the bulk of the card's content.\"\n\t\t},\n\t\t{\n\t\t\timage: \"../assets/images/food3.jpg\",\n\t\t\ttext: \"Some quick example text to build on the card title and make up the bulk of the card's content.\"\n\t\t},\n\t]\n}\n\nconst initDisplay = () => {\n\tconst appArea = document.getElementById(\"app\")\n\tconst contentDiv = document.createElement(\"div\")\n\tconst heading = document.createElement(\"h1\")\n\thtmlContent.content.forEach((element) => {\n\t\tconst colDiv = document.createElement(\"div\")\n\t\tconst image = document.createElement(\"img\")\n\t\tconst cardDiv = document.createElement(\"div\")\n\t\tconst cardBodyDiv = document.createElement(\"div\")\n\t\tconst paragragh = document.createElement(\"p\")\n\t\tcolDiv.setAttribute(\"class\", \"col-sm-4\")\n\t\tcardDiv.setAttribute(\"class\", \"card\")\n\t\tcardDiv.style.width = \"18rem\"\n\t\timage.setAttribute(\"class\", \"card-img-top\")\n\t\timage.setAttribute(\"src\", element.image)\n\t\tcardBodyDiv.setAttribute(\"calss\", \"card-body\")\n\t\tparagragh.setAttribute(\"class\", \"card-text\")\n\t\tparagragh.prepend(element.text) \n\t\tcardBodyDiv.appendChild(paragragh)\n\t\tcardDiv.appendChild(image)\n\t\tcardDiv.appendChild(cardBodyDiv)\n\t\tcolDiv.appendChild(cardDiv)\n\t\tcontentDiv.appendChild(colDiv)\n\t})\n\tcontentDiv.setAttribute(\"class\", \"app-content row\")\n\tappArea.innerHTML = \"\"\n\theading.prepend(htmlContent.heading)\n\tappArea.appendChild(heading)\n\tappArea.appendChild(contentDiv)\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (initDisplay);\n\n//# sourceURL=webpack:///./src/home.js?")

		/***/ }),

	/***/ "./src/index.js":
	/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
	/*! no exports provided */
	/***/ (function(module, __webpack_exports__, __webpack_require__) {

		"use strict"
		eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about */ \"./src/about.js\");\n/* harmony import */ var _recipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./recipe */ \"./src/recipe.js\");\n\n\n\n\nwindow.onload = () => {\n    Object(_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\n}\n\ndocument.getElementById('about').addEventListener(\"click\", () => {\n    Object(_about__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\n})\n\ndocument.getElementById('home').addEventListener(\"click\", () => {\n    Object(_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\n})\n\ndocument.getElementById('recipe').addEventListener(\"click\", () => {\n    Object(_recipe__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()\n})\n\n//# sourceURL=webpack:///./src/index.js?")

		/***/ }),

	/***/ "./src/recipe.js":
	/*!***********************!*\
  !*** ./src/recipe.js ***!
  \***********************/
	/*! exports provided: default */
	/***/ (function(module, __webpack_exports__, __webpack_require__) {

		"use strict"
		eval("__webpack_require__.r(__webpack_exports__);\nconst recipeContent = {\n\theading: \"Todays' Menu\",\n\tcontent: [\n\t\t\"Blue chicken\",\n\t\t\"Pepe Soup Goat Meat\",\n\t\t\"Friend Onions\"\n\t]\n}\n\nconst renderRecipe = () => {\n\tconst appArea = document.getElementById(\"app\")\n\tconst heading = document.createElement(\"h1\")\n\tconst recipeDiv = document.createElement(\"div\")\n\tconst paragraph = document.createElement(\"p\")\n    \n\trecipeContent.content.forEach(element => {\n\t\tconst anchor = document.createElement(\"a\")\n\t\tanchor.setAttribute(\"class\", \"btn btn-primary\")\n\t\tanchor.setAttribute(\"href\", \"#\")\n\t\tanchor.prepend(element)\n\t\tparagraph.appendChild(anchor)\n\t})\n\trecipeDiv.setAttribute(\"class\", \"recipe-content\")\n\theading.prepend(recipeContent.heading)\n\trecipeDiv.appendChild(paragraph)\n\tappArea.innerHTML = \"   \"\n\tappArea.appendChild(heading)\n\tappArea.appendChild(recipeDiv)\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (renderRecipe);\n\n//# sourceURL=webpack:///./src/recipe.js?")

		/***/ })

/******/ })