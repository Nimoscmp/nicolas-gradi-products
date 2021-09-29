/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/cart-add.js":
/*!****************************!*\
  !*** ./src/js/cart-add.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getProductsFromCart\": () => (/* binding */ getProductsFromCart)\n/* harmony export */ });\nconst getProductsFromCart = async () => {\n  let data = {\n    info: 'empty'\n  };\n\n  try {\n    const base_url = '/cart.js';\n    const response = await fetch(base_url);\n    data = await response.json();\n  } catch (e) {\n    console.log(e);\n    data = {\n      info: 'There was an error with the request'\n    };\n  }\n\n  return data;\n};\n\n//# sourceURL=webpack://nicolas-gradi-products/./src/js/cart-add.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _productsgrid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./productsgrid */ \"./src/js/productsgrid.js\");\n/* harmony import */ var _productsgrid__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_productsgrid__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _main_products_btn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main-products-btn */ \"./src/js/main-products-btn.js\");\n/* harmony import */ var _main_products_btn__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_main_products_btn__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _main_products_img__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main-products-img */ \"./src/js/main-products-img.js\");\n/* harmony import */ var _main_products_img__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_main_products_img__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _cart_add__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cart-add */ \"./src/js/cart-add.js\");\n/* harmony import */ var _minicart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./minicart */ \"./src/js/minicart.js\");\n/* harmony import */ var _minicart__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_minicart__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n\n//# sourceURL=webpack://nicolas-gradi-products/./src/js/index.js?");

/***/ }),

/***/ "./src/js/main-products-btn.js":
/*!*************************************!*\
  !*** ./src/js/main-products-btn.js ***!
  \*************************************/
/***/ (() => {

eval("const addToCartBtn = document.getElementsByClassName('product-form__submit-div');\nconst exceptionDiv = document.getElementById('product-form__exception');\n\nfor (let i = 0; i < cartBtn.length; i++) {\n  addToCartBtn[0].addEventListener('click', e => {\n    console.log('executed');\n\n    if (text.includes('Sold')) {\n      e.preventDefault();\n\n      if (exceptionDiv.className.includes('product-form__exception--dnone')) {\n        exceptionDiv.classList.remove('product-form__exception--dnone');\n      }\n    } else {\n      if (!exceptionDiv.className.includes('product-form__exception--dnone')) {\n        exceptionDiv.classList.add('product-form__exception--dnone');\n      }\n    }\n  });\n}\n\n//# sourceURL=webpack://nicolas-gradi-products/./src/js/main-products-btn.js?");

/***/ }),

/***/ "./src/js/main-products-img.js":
/*!*************************************!*\
  !*** ./src/js/main-products-img.js ***!
  \*************************************/
/***/ (() => {

eval("const productImg = document.getElementsByClassName('product__card-img');\nconst inputs = document.getElementsByClassName('product-form__input-input');\nconst cartBtn = document.getElementsByClassName('product-form__submit');\nconst imgLength = productImg.length;\nconst inputsLength = inputs.length;\n\nfor (let i = 0; i < inputsLength; i++) {\n  inputs[i].addEventListener('click', () => {\n    for (let j = 0; j < imgLength; j++) {\n      if (i === j) {\n        productImg[j].style.display = 'inline';\n      } else {\n        productImg[j].style.display = 'none';\n      }\n    }\n  });\n} // cartBtn[0].addEventListener('click', () => {\n//   let text = cartBtn[0].innerHTML;\n//   if (text.includes('Sold')) {\n//     console.log(\"Enter sold\")\n//     // cartBtn[0].classList.add('product-form__submit--disabled');\n//     cartBtn[0].removeAttribute('disabled');\n//   }\n// })\n\n\nwindow.addEventListener('load', () => {\n  let text = cartBtn[0].innerHTML;\n\n  if (text.includes('Sold') && !cartBtn[0].className.includes('product-form__submit--disabled')) {\n    cartBtn[0].classList.add('product-form__submit--disabled');\n    cartBtn[0].removeAttribute('disabled');\n  }\n\n  for (let i = 0; i < inputsLength; i++) {\n    let attr = inputs[i].attributes;\n    let attrLength = attr.length;\n\n    for (let j = 0; j < imgLength; j++) {\n      if (attrLength > 6) {\n        productImg[i].style.display = 'inline';\n      } else {\n        productImg[i].style.display = 'none';\n      }\n    }\n  }\n});\n\n//# sourceURL=webpack://nicolas-gradi-products/./src/js/main-products-img.js?");

/***/ }),

/***/ "./src/js/minicart.js":
/*!****************************!*\
  !*** ./src/js/minicart.js ***!
  \****************************/
/***/ (() => {

eval("const openBtn = document.getElementById('submit-btn');\nconst closeBtn = document.getElementById('minicart__close');\nconst minicart = document.getElementsByClassName('minicart')[0];\nconst itemBox = document.getElementsByClassName('minicart__items')[0];\n/* :::::::::::::::::::::\n::::     HELPERS    ::::\n:::::::::::::::::::::::: */\n\nconst showMinicart = () => {\n  minicart.classList.add('minicart--show');\n};\n\nconst hideMiniCart = () => {\n  if (minicart.className.includes('minicart--show')) {\n    minicart.classList.remove('minicart--show');\n  }\n};\n\nconst removeChilds = () => {\n  while (itemBox.firstChild) {\n    itemBox.removeChild(itemBox.firstChild);\n  }\n};\n\nconst getProductHandle = () => {\n  const handle = sessionStorage.getItem('current_product_handle');\n  return handle;\n};\n/* :::::::::::::::::::::\n::::     SESSION    ::::\n:::::::::::::::::::::::: */\n\n\nconst createSessionCart = (cartData, isNew) => {\n  let sessionCart;\n\n  if (isNew) {\n    sessionCart = {\n      itemCount: 0,\n      items: []\n    };\n  } else {\n    sessionCart = JSON.parse(sessionStorage.getItem('current_session_cart'));\n  }\n\n  sessionCart.itemCount = cartData.item_count;\n  sessionStorage.setItem('current_session_cart', JSON.stringify(sessionCart));\n  return sessionCart;\n};\n\nconst addItemSessionCart = item => {\n  let sessionCart = JSON.parse(sessionStorage.getItem('current_session_cart'));\n\n  if (sessionCart.items) {\n    sessionCart.items.push(item);\n  }\n\n  sessionCart.itemCount += 1;\n  sessionStorage.setItem('current_session_cart', JSON.stringify(sessionCart));\n  return sessionCart;\n};\n\nconst updateItemSessionCart = item => {\n  let sessionCart = JSON.parse(sessionStorage.getItem('current_session_cart'));\n  let itemOrder;\n  const itemsLength = sessionCart.items.length;\n\n  for (let i = 0; i < itemsLength; i++) {\n    if (item.id === sessionCart.items[i].id) {\n      sessionCart.items[i] = item;\n    }\n  }\n\n  sessionCart.itemCount += 1;\n  sessionStorage.setItem('current_session_cart', JSON.stringify(sessionCart));\n  return sessionCart;\n};\n/* :::::::::::::::::::::\n::::     SERVICES   ::::\n:::::::::::::::::::::::: */\n\n\nconst getProductId = async handle => {\n  let id, data;\n  const baseUrl = `/products/${handle}.js`;\n\n  try {\n    const response = await fetch(baseUrl);\n    data = await response.json();\n    id = data.variants[0].id;\n  } catch (e) {\n    console.log(e);\n  }\n\n  return id;\n};\n\nconst getProductsFromCart = async () => {\n  let data = {\n    info: 'empty'\n  };\n\n  try {\n    const base_url = '/cart.js';\n    const response = await fetch(base_url);\n    data = await response.json();\n  } catch (e) {\n    console.log(e);\n    data = {\n      info: 'There was an error with the request'\n    };\n  }\n\n  return data;\n};\n\nconst addProductToCart = async id => {\n  let data = {},\n      itemAdded = {};\n  let formData = {\n    'items': [{\n      'id': id,\n      'quantity': 1\n    }]\n  };\n\n  try {\n    const baseUrl = '/cart/add.js';\n    const response = await fetch(baseUrl, {\n      method: 'POST',\n      headers: {\n        'Content-Type': 'application/json'\n      },\n      body: JSON.stringify(formData)\n    });\n    data = await response.json();\n    itemAdded.id = data.items[0].id;\n    itemAdded.title = data.items[0].title;\n    itemAdded.image = data.items[0].image;\n    itemAdded.quantity = data.items[0].quantity;\n  } catch (e) {\n    console.log(e);\n    data = {\n      info: 'There was an error with the request'\n    };\n  }\n\n  return itemAdded;\n};\n\nconst updateProduct = async (id, quantity) => {\n  let data = {},\n      itemUpdated = {};\n  let formData = {\n    'updates': {}\n  };\n  formData.updates[id] = quantity;\n\n  try {\n    const baseUrl = '/cart/update.js';\n    const response = await fetch(baseUrl, {\n      method: 'POST',\n      headers: {\n        'Content-Type': 'application/json'\n      },\n      body: JSON.stringify(formData)\n    });\n    data = await response.json();\n    data.items.forEach(element => {\n      if (id === element.id) {\n        itemUpdated.id = element.id;\n        itemUpdated.title = element.title;\n        itemUpdated.image = element.image;\n        itemUpdated.quantity = element.quantity;\n      }\n    });\n  } catch (e) {\n    console.log(e);\n    data = {\n      info: 'There was an error with the request'\n    };\n  }\n\n  return itemUpdated;\n};\n\nconst renderData = data => {\n  const items = data.items;\n\n  if (items.length !== 0) {\n    items.forEach(element => {\n      const div = document.createElement(\"div\");\n      const title = `<h6>${element.title.toUpperCase()}</h6>`;\n      const img = `<img src=\"${element.image}\" alt=\"${element.title}\" width=\"100\" height=\"100\" loading=\"lazy\" class=\"minicart__image\">`;\n      const addIcon = `<i class=\"fas fa-plus fa-2x\"></i>`;\n      const minusIcon = `<i class=\"fas fa-minus fa-2x\"></i>`;\n      const quantity = `<span>${element.quantity}</span>`;\n      itemBox.appendChild(div).innerHTML = `${title} ${img} ${addIcon} ${minusIcon} ${quantity}`;\n    });\n  } else {\n    const text = 'You have not added products to the cart';\n    const alert = `<span>${text}</span>`;\n    itemBox.appendChild(div).innerHTML = `${alert}`;\n  }\n};\n/*:::::::::::::::::::::::::::::::\n  Main stack when open pop up  \n:::::::::::::::::::::::::::::::::*/\n\n\nconst handleOpenClick = () => {\n  let cartData,\n      productHandle,\n      productId,\n      sessionCart,\n      isNewSessionCart = true;\n  productHandle = getProductHandle();\n\n  (async () => {\n    productId = await getProductId(productHandle);\n    cartData = await getProductsFromCart();\n\n    if (sessionStorage.current_session_cart) {\n      isNewSessionCart = false;\n    }\n\n    sessionCart = createSessionCart(cartData, isNewSessionCart);\n\n    if (sessionCart.itemCount > 0) {\n      const itemsLength = sessionCart.items.length;\n\n      for (let i = 0; i < itemsLength; i++) {\n        if (sessionCart.items[i].id === productId) {\n          const itemToUpdate = await updateProduct(sessionCart.items[i].id, sessionCart.items[i].quantity + 1);\n          sessionCart = updateItemSessionCart(itemToUpdate);\n        } else if (i + 1 === itemsLength) {\n          const itemToAdd = await addProductToCart(productId);\n          sessionCart = addItemSessionCart(itemToAdd);\n        }\n      }\n    } else {\n      const itemToAdd = await addProductToCart(productId);\n      sessionCart = addItemSessionCart(itemToAdd);\n    } // renderData(sessionCart);\n\n\n    showMinicart();\n  })();\n};\n/*:::::::::::::::::::::::::::::::\n  When update with plus and minus\n:::::::::::::::::::::::::::::::::*/\n\n\nconst handleAddClick = () => {};\n\nconst handleMinusClick = () => {};\n\nconst handleOnChangeClick = () => {};\n/*:::::::::::::::::::::::::::::::\n            When remove\n:::::::::::::::::::::::::::::::::*/\n\n\nconst handleRemoveClick = () => {};\n/*:::::::::::::::::::::::::::::::\n        When close pop up\n:::::::::::::::::::::::::::::::::*/\n\n\nconst handleCloseClick = () => {\n  hideMiniCart();\n  removeChilds();\n};\n\nopenBtn.addEventListener('click', handleOpenClick);\ncloseBtn.addEventListener('click', handleCloseClick);\n\n//# sourceURL=webpack://nicolas-gradi-products/./src/js/minicart.js?");

/***/ }),

/***/ "./src/js/productsgrid.js":
/*!********************************!*\
  !*** ./src/js/productsgrid.js ***!
  \********************************/
/***/ (() => {

eval("let pinkRadio = document.querySelectorAll('.gradidiv__product__radio--pink');\nlet purpleRadio = document.querySelectorAll('.gradidiv__product__radio--purple');\nlet orangeRadio = document.querySelectorAll('.gradidiv__product__radio--orange');\nlet pinkImg = document.getElementsByClassName('gradidiv__product__img--pink');\nlet purpleImg = document.getElementsByClassName('gradidiv__product__img--purple');\nlet orangeImg = document.getElementsByClassName('gradidiv__product__img--orange');\nlet pinkLength = pinkRadio.length;\nlet purpleLength = purpleRadio.length;\nlet orangeLength = orangeRadio.length;\n\nfor (let i = 0; i < pinkLength; i++) {\n  const handleMouseLeave = () => {\n    /*  For pink variant */\n    if (pinkImg[i].className.includes('gradidiv__product__img--dnone')) {\n      pinkImg[i].classList.remove('gradidiv__product__img--dnone');\n    }\n    /*  For purple variant */\n\n\n    if (!purpleImg[i].className.includes('gradidiv__product__img--dnone')) {\n      purpleImg[i].classList.add('gradidiv__product__img--dnone');\n    }\n\n    if (purpleImg[i].className.includes('gradidiv__product__img--dinline')) {\n      purpleImg[i].classList.remove('gradidiv__product__img--dinline');\n    }\n    /*  For orange variant */\n\n\n    if (!orangeImg[i].className.includes('gradidiv__product__img--dnone')) {\n      orangeImg[i].classList.add('gradidiv__product__img--dnone');\n    }\n\n    if (orangeImg[i].className.includes('gradidiv__product__img--dinline')) {\n      orangeImg[i].classList.remove('gradidiv__product__img--dinline');\n    }\n    /*  Radio border */\n\n\n    if (pinkImg[i].className.includes('gradidiv__product__border-radio--gray')) {\n      pinkRadio[i].classList.remove('gradidiv__product__border-radio--gray');\n    }\n\n    if (!pinkImg[i].className.includes('gradidiv__product__border-radio--black')) {\n      pinkRadio[i].classList.add('gradidiv__product__border-radio--black');\n    }\n\n    if (purpleImg[i].className.includes('gradidiv__product__border-radio--black')) {\n      purpleRadio[i].classList.remove('gradidiv__product__border-radio--black');\n    }\n\n    if (!purpleImg[i].className.includes('gradidiv__product__border-radio--gray')) {\n      purpleRadio[i].classList.add('gradidiv__product__border-radio--gray');\n    }\n\n    if (orangeImg[i].className.includes('gradidiv__product__border-radio--black')) {\n      orangeRadio[i].classList.remove('gradidiv__product__border-radio--black');\n    }\n\n    if (!orangeImg[i].className.includes('gradidiv__product__border-radio--gray')) {\n      orangeRadio[i].classList.add('gradidiv__product__border-radio--gray');\n    }\n  };\n\n  pinkRadio[i].addEventListener('mouseenter', () => {\n    if (pinkImg[i].className.includes('gradidiv__product__img--dnone')) {\n      pinkImg[i].classList.remove('gradidiv__product__img--dnone');\n    }\n\n    pinkImg[i].classList.add('gradidiv__product__img--dinline');\n\n    if (purpleImg[i].className.includes('gradidiv__product__img--dinline')) {\n      purpleImg[i].classList.remove('gradidiv__product__img--dinline');\n    }\n\n    purpleImg[i].classList.add('gradidiv__product__img--dnone');\n\n    if (orangeImg[i].className.includes('gradidiv__product__img--dinline')) {\n      orangeImg[i].classList.remove('gradidiv__product__img--dinline');\n    }\n\n    orangeImg[i].classList.add('gradidiv__product__img--dnone');\n    /*  Radio border */\n\n    /*pinkRadio[i].classList.add('gradidiv__product__border-radio--black');\n    purpleRadio[i].classList.remove('gradidiv__product__border-radio--black');\n    orangeRadio[i].classList.remove('gradidiv__product__border-radio--black');*/\n  });\n  pinkRadio[i].addEventListener('mouseleave', handleMouseLeave);\n  purpleRadio[i].addEventListener('mouseenter', () => {\n    if (purpleImg[i].className.includes('gradidiv__product__img--dnone')) {\n      purpleImg[i].classList.remove('gradidiv__product__img--dnone');\n    }\n\n    purpleImg[i].classList.add('gradidiv__product__img--dinline');\n\n    if (pinkImg[i].className.includes('gradidiv__product__img--dinline')) {\n      pinkImg[i].classList.remove('gradidiv__product__img--dinline');\n    }\n\n    pinkImg[i].classList.add('gradidiv__product__img--dnone');\n\n    if (orangeImg[i].className.includes('gradidiv__product__img--dinline')) {\n      orangeImg[i].classList.remove('gradidiv__product__img--dinline');\n    }\n\n    orangeImg[i].classList.add('gradidiv__product__img--dnone');\n  });\n  purpleRadio[i].addEventListener('mouseleave', handleMouseLeave);\n  orangeRadio[i].addEventListener('mouseenter', () => {\n    if (orangeImg[i].className.includes('gradidiv__product__img--dnone')) {\n      orangeImg[i].classList.remove('gradidiv__product__img--dnone');\n    }\n\n    orangeImg[i].classList.add('gradidiv__product__img--dinline');\n\n    if (pinkImg[i].className.includes('gradidiv__product__img--dinline')) {\n      pinkImg[i].classList.remove('gradidiv__product__img--dinline');\n    }\n\n    pinkImg[i].classList.add('gradidiv__product__img--dnone');\n\n    if (purpleImg[i].className.includes('gradidiv__product__img--dinline')) {\n      purpleImg[i].classList.remove('gradidiv__product__img--dinline');\n    }\n\n    purpleImg[i].classList.add('gradidiv__product__img--dnone');\n  });\n  orangeRadio[i].addEventListener('mouseleave', handleMouseLeave);\n}\n\n//# sourceURL=webpack://nicolas-gradi-products/./src/js/productsgrid.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/index.js");
/******/ 	
/******/ })()
;