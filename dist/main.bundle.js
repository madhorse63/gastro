/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_burgerMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/burgerMenu */ \"./src/modules/burgerMenu.js\");\n/* harmony import */ var _modules_modals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/modals */ \"./src/modules/modals.js\");\n/* harmony import */ var _modules_programsInfo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/programsInfo */ \"./src/modules/programsInfo.js\");\n/* harmony import */ var _modules_scroll__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/scroll */ \"./src/modules/scroll.js\");\n/* harmony import */ var _modules_programsChoice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/programsChoice */ \"./src/modules/programsChoice.js\");\n/* harmony import */ var _modules_faq__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/faq */ \"./src/modules/faq.js\");\n/* harmony import */ var _modules_blogSwitcher__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/blogSwitcher */ \"./src/modules/blogSwitcher.js\");\n/* harmony import */ var _modules_add__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/add */ \"./src/modules/add.js\");\n/* harmony import */ var _modules_checkUserInput__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/checkUserInput */ \"./src/modules/checkUserInput.js\");\n\n\n\n\n\n\n\n\n\n\n_modules_burgerMenu__WEBPACK_IMPORTED_MODULE_1__.burger.addEventListener('click', _modules_burgerMenu__WEBPACK_IMPORTED_MODULE_1__.showBurgerMenu);\n_modules_burgerMenu__WEBPACK_IMPORTED_MODULE_1__.closeBurger.addEventListener('click', _modules_burgerMenu__WEBPACK_IMPORTED_MODULE_1__.closeBurgerMenu);\ndocument.addEventListener('click', _modules_burgerMenu__WEBPACK_IMPORTED_MODULE_1__.closeBurgerDoc);\n(0,_modules_modals__WEBPACK_IMPORTED_MODULE_2__.openModal)('.article-modal', '.more-card-info', '.close-article');\n(0,_modules_modals__WEBPACK_IMPORTED_MODULE_2__.openModal)('.candy-items', '.more-candy', '.close-candy');\n(0,_modules_modals__WEBPACK_IMPORTED_MODULE_2__.openModal)('.form-modal', '.online-checkout-wrap', '.form-close');\n(0,_modules_modals__WEBPACK_IMPORTED_MODULE_2__.openModal)('.form-modal', '.phone-checkout-wrap', '.form-close');\n(0,_modules_modals__WEBPACK_IMPORTED_MODULE_2__.openModal)('.order-modal', '.arrangeLunch', '.order-close');\n(0,_modules_modals__WEBPACK_IMPORTED_MODULE_2__.openModal)('.order-modal', '.arrangeCandy', '.order-close');\n(0,_modules_programsChoice__WEBPACK_IMPORTED_MODULE_5__.changeProgramDescr)();\n(0,_modules_programsChoice__WEBPACK_IMPORTED_MODULE_5__.dayColor)();\n(0,_modules_programsChoice__WEBPACK_IMPORTED_MODULE_5__.progrmasChoice)();\n\nconst mainScroll = (buttons, selector) => {\n  buttons.forEach(item => {\n    item.addEventListener('click', e => {\n      e.preventDefault();\n      (0,_modules_scroll__WEBPACK_IMPORTED_MODULE_4__.smoothScroll)(selector);\n    });\n  });\n};\n\nmainScroll(_modules_scroll__WEBPACK_IMPORTED_MODULE_4__.btnPrograms, '#programs');\nmainScroll(_modules_scroll__WEBPACK_IMPORTED_MODULE_4__.btnGastro, '#gastroShop');\nmainScroll(_modules_scroll__WEBPACK_IMPORTED_MODULE_4__.btnAbout, '#aboutUs');\nmainScroll(_modules_scroll__WEBPACK_IMPORTED_MODULE_4__.btnBlog, '#blog');\nmainScroll(_modules_scroll__WEBPACK_IMPORTED_MODULE_4__.btnTop, '#top');\nmainScroll(_modules_scroll__WEBPACK_IMPORTED_MODULE_4__.btnToOrder, '.programs-choice_btn');\nmainScroll(_modules_scroll__WEBPACK_IMPORTED_MODULE_4__.btnToReg, '.chekout_questions');\nmainScroll(_modules_scroll__WEBPACK_IMPORTED_MODULE_4__.btnFaq, '.chekout_questions');\n(0,_modules_faq__WEBPACK_IMPORTED_MODULE_6__.faqHoverImg)();\n_modules_programsChoice__WEBPACK_IMPORTED_MODULE_5__.days.forEach(day => {\n  day.addEventListener('click', () => {\n    (0,_modules_programsChoice__WEBPACK_IMPORTED_MODULE_5__.progrmasChoice)();\n  });\n});\n_modules_programsChoice__WEBPACK_IMPORTED_MODULE_5__.btnChoice.forEach(diet => {\n  diet.addEventListener('click', () => {\n    (0,_modules_programsChoice__WEBPACK_IMPORTED_MODULE_5__.progrmasChoice)();\n  });\n});\n(0,_modules_blogSwitcher__WEBPACK_IMPORTED_MODULE_7__.cardsSwitcher)();\n(0,_modules_add__WEBPACK_IMPORTED_MODULE_8__.addChange)();\n_modules_add__WEBPACK_IMPORTED_MODULE_8__.btnToStorage.forEach(button => {\n  button.addEventListener('click', () => {\n    (0,_modules_add__WEBPACK_IMPORTED_MODULE_8__.addToStorage)();\n  });\n});\ndocument.querySelector('.cooperation').addEventListener('click', e => {\n  e.preventDefault();\n  alert('Извините, здесь пока ничего нет!');\n});\n(0,_modules_checkUserInput__WEBPACK_IMPORTED_MODULE_9__.inputFocus)(_modules_checkUserInput__WEBPACK_IMPORTED_MODULE_9__.userName, _modules_checkUserInput__WEBPACK_IMPORTED_MODULE_9__.userNameLabel);\n(0,_modules_checkUserInput__WEBPACK_IMPORTED_MODULE_9__.inputFocus)(_modules_checkUserInput__WEBPACK_IMPORTED_MODULE_9__.userPhone, _modules_checkUserInput__WEBPACK_IMPORTED_MODULE_9__.userPhoneLabel);\n\n//# sourceURL=webpack://webpack1/./src/index.js?");

/***/ }),

/***/ "./src/modules/add.js":
/*!****************************!*\
  !*** ./src/modules/add.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"btnToStorage\": () => (/* binding */ btnToStorage),\n/* harmony export */   \"addChange\": () => (/* binding */ addChange),\n/* harmony export */   \"addToStorage\": () => (/* binding */ addToStorage)\n/* harmony export */ });\nconst addWrap = document.querySelectorAll('.add');\nconst btnToStorage = document.querySelectorAll('.arrange-wrap');\n\nconst addChange = () => {\n  addWrap.forEach(item => {\n    let current = item.querySelector('.amount');\n    let currentNum = parseInt(current.innerText);\n    item.addEventListener('click', e => {\n      if (e.target.className === 'minus') {\n        if (currentNum < 1) {\n          return false;\n        } else {\n          currentNum = currentNum - 1;\n          current.innerText = currentNum;\n        }\n      }\n\n      ;\n\n      if (e.target.className === 'plus') {\n        currentNum = currentNum + 1;\n        current.innerText = currentNum;\n      }\n    });\n  });\n};\n\nconst addToStorage = () => {\n  let cards = document.querySelectorAll('[data-search]');\n  cards.forEach(item => {\n    let title = item.querySelector('[data-title]');\n    let titleName = title.innerText.trim();\n    let titleData = title.dataset.title;\n    let countData = item.querySelector('.amount').dataset.count;\n    let count = item.querySelector('.amount').innerText;\n\n    if (parseFloat(item.querySelector('.amount').innerText) > 0) {\n      console.log(titleName);\n      localStorage.setItem(`${titleData}`, titleName);\n      localStorage.setItem(`${countData}`, count);\n    }\n\n    let modalCards = document.querySelectorAll('.modal-card-wrap');\n    modalCards.forEach(item => {\n      let itemTitle = item.querySelector('.order-title');\n      let itemCount = item.querySelector('.amount');\n\n      if (itemTitle.innerText.trim() === 'Здесь пока пусто!') {\n        itemTitle.innerText = localStorage.getItem(`${titleData}`);\n        itemCount.innerText = localStorage.getItem(`${countData}`);\n      }\n    });\n  });\n};\n\n\n\n//# sourceURL=webpack://webpack1/./src/modules/add.js?");

/***/ }),

/***/ "./src/modules/blogSwitcher.js":
/*!*************************************!*\
  !*** ./src/modules/blogSwitcher.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"cardsSwitcher\": () => (/* binding */ cardsSwitcher)\n/* harmony export */ });\nconst cardsSwitcher = () => {\n  let switcher = document.querySelectorAll('.cards-switcher ul');\n  let nextPage = document.querySelectorAll('.next-page');\n  let prevPage = document.querySelectorAll('.prev-page');\n  nextPage.forEach(item => {\n    item.addEventListener('click', () => {\n      let activePage = document.querySelectorAll('.currentPageMarker');\n      activePage.forEach(elem => {\n        elem.nextElementSibling.classList.add('currentPageMarker');\n        elem.classList.remove('currentPageMarker');\n      });\n    });\n  });\n  prevPage.forEach(item => {\n    item.addEventListener('click', () => {\n      let activePage = document.querySelectorAll('.currentPageMarker');\n      activePage.forEach(elem => {\n        elem.previousElementSibling.classList.add('currentPageMarker');\n        elem.classList.remove('currentPageMarker');\n      });\n    });\n  });\n  switcher.forEach(item => {\n    item.addEventListener('click', e => {\n      if (e.target.className === 'pageNum') {\n        let switcherBtns = item.querySelectorAll('li');\n        let currentPageDataName = e.target.dataset.page;\n        let allPages = document.querySelectorAll('[data-page]');\n        switcherBtns.forEach(btn => {\n          btn.classList.remove('currentPageMarker');\n        });\n        e.target.classList.add('currentPageMarker');\n        allPages.forEach(elem => {\n          elem.classList.remove('currentPageMarker');\n\n          if (elem.dataset.page === currentPageDataName) {\n            elem.classList.add('currentPageMarker');\n          }\n        });\n      }\n    });\n  });\n};\n\n\n\n//# sourceURL=webpack://webpack1/./src/modules/blogSwitcher.js?");

/***/ }),

/***/ "./src/modules/burgerMenu.js":
/*!***********************************!*\
  !*** ./src/modules/burgerMenu.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"burger\": () => (/* binding */ burger),\n/* harmony export */   \"ulMenu\": () => (/* binding */ ulMenu),\n/* harmony export */   \"closeBurger\": () => (/* binding */ closeBurger),\n/* harmony export */   \"showBurgerMenu\": () => (/* binding */ showBurgerMenu),\n/* harmony export */   \"closeBurgerMenu\": () => (/* binding */ closeBurgerMenu),\n/* harmony export */   \"closeBurgerDoc\": () => (/* binding */ closeBurgerDoc)\n/* harmony export */ });\nlet burger = document.querySelector('#burger');\nlet ulMenu = document.querySelector('.menu ul');\nlet closeBurger = document.querySelector('#close');\n\nconst showBurgerMenu = () => {\n  ulMenu.classList.add('show');\n  ulMenu.style.top = '0';\n  burger.style.display = 'none';\n  closeBurger.style.display = 'block';\n};\n\nconst closeBurgerMenu = () => {\n  ulMenu.classList.remove('show');\n  ulMenu.style.top = '-55vh';\n  burger.style.display = 'block';\n  closeBurger.style.display = 'none';\n};\n\nconst closeBurgerDoc = e => {\n  if (ulMenu.className === 'show') {\n    if (e.target.closest('.header-wrap') === null) {\n      closeBurgerMenu();\n    }\n  }\n};\n\n\n\n//# sourceURL=webpack://webpack1/./src/modules/burgerMenu.js?");

/***/ }),

/***/ "./src/modules/checkUserInput.js":
/*!***************************************!*\
  !*** ./src/modules/checkUserInput.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"inputFocus\": () => (/* binding */ inputFocus),\n/* harmony export */   \"userName\": () => (/* binding */ userName),\n/* harmony export */   \"userNameLabel\": () => (/* binding */ userNameLabel),\n/* harmony export */   \"userPhone\": () => (/* binding */ userPhone),\n/* harmony export */   \"userPhoneLabel\": () => (/* binding */ userPhoneLabel)\n/* harmony export */ });\nconst inputFocus = (inputName, labelName) => {\n  inputName.addEventListener('focus', () => {\n    inputName.classList.add('inputFocus');\n    labelName.style.color = \"#64D370\";\n  });\n  inputName.addEventListener('blur', () => {\n    inputName.classList.remove('inputFocus');\n    labelName.style.color = \"#020202\";\n  });\n  console.log(inputName.value);\n};\n\nlet userName = document.querySelector('[name=\"user_name\"]');\nlet userNameLabel = document.querySelector('[for=\"user_name\"]');\nlet userPhone = document.querySelector('[name=\"user_phone\"]');\nlet userPhoneLabel = document.querySelector('[for=\"user_phone\"]');\n\n\n//# sourceURL=webpack://webpack1/./src/modules/checkUserInput.js?");

/***/ }),

/***/ "./src/modules/faq.js":
/*!****************************!*\
  !*** ./src/modules/faq.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"faqHoverImg\": () => (/* binding */ faqHoverImg)\n/* harmony export */ });\nlet questions = document.querySelectorAll('.questions ul li');\n\nconst faqHoverImg = () => {\n  questions.forEach(item => {\n    let arrow = item.querySelector('img');\n    let hiddenText = item.querySelector('.answer');\n    item.addEventListener('mouseover', () => {\n      arrow.src = './images/icons/white_arrow.svg';\n      arrow.style.transform = 'rotate(90deg)';\n      hiddenText.style.display = 'block';\n      item.classList.add('active-question');\n    });\n    item.addEventListener('mouseout', () => {\n      arrow.src = './images/icons/black_arrow.svg';\n      arrow.style.transform = 'rotate(0deg)';\n      hiddenText.style.display = 'none';\n      item.classList.remove('active-question');\n    });\n  });\n};\n\n\n\n//# sourceURL=webpack://webpack1/./src/modules/faq.js?");

/***/ }),

/***/ "./src/modules/modals.js":
/*!*******************************!*\
  !*** ./src/modules/modals.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"openModal\": () => (/* binding */ openModal)\n/* harmony export */ });\nconst openModal = (modalWin, open, close) => {\n  let modal = document.querySelector(modalWin);\n  let openBtn = document.querySelectorAll(open);\n  let closeBtn = document.querySelectorAll(close);\n  openBtn.forEach(item => {\n    item.addEventListener('click', e => {\n      e.preventDefault();\n      modal.classList.remove('modal-hide');\n      document.body.style.overflow = 'hidden';\n    });\n  });\n  closeBtn.forEach(item => {\n    item.addEventListener('click', () => {\n      modal.classList.add('modal-hide');\n      document.body.style.overflow = 'auto';\n    });\n  });\n};\n\n\n\n//# sourceURL=webpack://webpack1/./src/modules/modals.js?");

/***/ }),

/***/ "./src/modules/programsChoice.js":
/*!***************************************!*\
  !*** ./src/modules/programsChoice.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"btnChoice\": () => (/* binding */ btnChoice),\n/* harmony export */   \"days\": () => (/* binding */ days),\n/* harmony export */   \"changeProgramDescr\": () => (/* binding */ changeProgramDescr),\n/* harmony export */   \"dayColor\": () => (/* binding */ dayColor),\n/* harmony export */   \"progrmasChoice\": () => (/* binding */ progrmasChoice)\n/* harmony export */ });\n/* harmony import */ var _programsInfo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./programsInfo */ \"./src/modules/programsInfo.js\");\n\nlet btnChoice = document.querySelectorAll('.diet');\nlet days = document.querySelectorAll('.day');\n\nconst changeProgramDescr = () => {\n  btnChoice.forEach(elem => {\n    elem.addEventListener('click', event => {\n      btnChoice.forEach(e => {\n        e.classList.remove('diet-active');\n      });\n\n      if (event.target.closest('.diet') !== null) {\n        elem.classList.add('diet-active');\n      }\n\n      ;\n      let title = elem.querySelector('.diet-name').textContent;\n      let ccal = elem.querySelector('.diet-ccal').textContent;\n      let changeTitle = document.querySelector('.inner-diet-description h2');\n      let changeCcal = document.querySelector('.inner-diet-description span');\n      let changeDescr = document.querySelector('.inner-diet-description p');\n      let dietSale = document.querySelectorAll('.diet-sale');\n      let newCost = document.querySelectorAll('.new-cost');\n      changeTitle.textContent = title;\n      changeCcal.textContent = ccal;\n      _programsInfo__WEBPACK_IMPORTED_MODULE_0__.programsInfo.forEach(item => {\n        if (item.title === elem.id) {\n          changeDescr.innerText = item.descr;\n          dietSale.forEach(i => {\n            i.innerText = item.cost.oldCost;\n          });\n\n          for (let key1 in newCost) {\n            for (let key2 in item.cost.saleCost) {\n              if (newCost[key1].id === key2) {\n                newCost[key1].innerText = item.cost.saleCost[key2];\n              }\n            }\n          }\n        }\n      });\n    });\n  });\n};\n\nconst dayColor = () => {\n  days.forEach(elem => {\n    elem.addEventListener('click', event => {\n      days.forEach(e => {\n        e.classList.remove('diet-active');\n      });\n\n      if (event.target.closest('.day') !== null) {\n        elem.classList.add('diet-active');\n      }\n\n      ;\n    });\n  });\n};\n\nconst progrmasChoice = () => {\n  let breakfastContent = document.querySelectorAll('.breakfast');\n  let breakfast2Content = document.querySelectorAll('.breakfast2');\n  let dinnerContent = document.querySelectorAll('.dinner');\n  let afternoonContent = document.querySelectorAll('.afternoon');\n  let supperContent = document.querySelectorAll('.supper');\n  let arrContent = [breakfastContent, breakfast2Content, dinnerContent, afternoonContent, supperContent];\n  arrContent.forEach(item => {\n    let activeDiet = document.querySelector('.diet.diet-active').id;\n    let activeDay = document.querySelector('.day.diet-active').id;\n    _programsInfo__WEBPACK_IMPORTED_MODULE_0__.programsInfo.forEach(num => {\n      if (num.title === activeDiet) {\n        let breakfast = num[activeDiet].ration[activeDay].breakfast;\n        let breakfast2 = num[activeDiet].ration[activeDay].breakfast2;\n        let dinner = num[activeDiet].ration[activeDay].dinner;\n        let afternoon = num[activeDiet].ration[activeDay].afternoon;\n        let supper = num[activeDiet].ration[activeDay].supper;\n\n        for (let key in item) {\n          const filter = (par, index) => {\n            item[key].innerHTML = '';\n\n            for (let i = 0; i < par.length; i++) {\n              let newContent = document.createElement('p');\n              newContent.classList.add('food-name');\n              newContent.innerText = par[i][index];\n              item[key].appendChild(newContent);\n            }\n\n            ;\n          };\n\n          let currentClass = item[key].className;\n\n          switch (currentClass) {\n            case 'food-name_container breakfast':\n              filter(breakfast, 0);\n              break;\n\n            case 'food-weight_container breakfast':\n              filter(breakfast, 1);\n              break;\n\n            case 'food-name_container breakfast2':\n              filter(breakfast2, 0);\n              break;\n\n            case 'food-weight_container breakfast2':\n              filter(breakfast2, 1);\n              break;\n\n            case 'food-name_container dinner':\n              filter(dinner, 0);\n              break;\n\n            case 'food-weight_container dinner':\n              filter(dinner, 1);\n              break;\n\n            case 'food-name_container afternoon':\n              filter(afternoon, 0);\n              break;\n\n            case 'food-weight_container afternoon':\n              filter(afternoon, 1);\n              break;\n\n            case 'food-name_container supper':\n              filter(supper, 0);\n              break;\n\n            case 'food-weight_container supper':\n              filter(supper, 1);\n              break;\n          }\n        }\n\n        ;\n      }\n\n      ;\n    });\n  });\n};\n\n\n\n//# sourceURL=webpack://webpack1/./src/modules/programsChoice.js?");

/***/ }),

/***/ "./src/modules/programsInfo.js":
/*!*************************************!*\
  !*** ./src/modules/programsInfo.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"programsInfo\": () => (/* binding */ programsInfo)\n/* harmony export */ });\nconst programsInfo = [{\n  title: 'expressFit',\n  descr: 'Программа здорового питания Express Fit. Идеально для: похудения в кратчайшие сроки, повышения энергии и сил, снижения веса при сидячем образе жизни.',\n  expressFit: {\n    ration: {\n      mon: {\n        breakfast: [[\"Яйца скрэмбл с овощами и ветчиной\", 120]],\n        breakfast2: [[\"Легкий банановый пудинг с гранолой и орехами\", 150]],\n        dinner: [[\"Шашлычок из индейки с томатным соусом\", 100], [\"Салат с куриной печенью, медовыми яблоками и черничнымм соусом (соус отдельно)\", 100]],\n        afternoon: [[\"Тыквенно-цитрусовый смузи с имбирем\", 250]],\n        supper: [[\"Запеченный красный окунь с овощами\", 100], [\"Летний салат с апельсиновой заправкой\", 120]]\n      },\n      tue: {\n        breakfast: [[\"Пшенная каша на молоке с сухофруками\", 150]],\n        breakfast2: [[\"Овсяные тарты творожным кремом и ягодой\", 150]],\n        dinner: [[\"Суп Греческий Авголемоно\", 150], [\"Говяжьи фрикадели в томатном соусе\", 100]],\n        afternoon: [[\"Яблочно-морковный фреш\", 200]],\n        supper: [[\"Курица Капрезе с моцареллой\", 100], [\"Овощи гриль в соевом соусе\", 120]]\n      },\n      wed: {\n        breakfast: [[\"Кокосово-творожная запеканка с ягодным соусом\", 120]],\n        breakfast2: [[\"Зеленый салат с красной фасолью м кукурузой\", 200]],\n        dinner: [[\"Курица под соусом 'Муркарма'\", 100], [\"Салат Капрезе с моцареллой и томатами\", 150]],\n        afternoon: [[\"Осенний витаминный фреш\", 200]],\n        supper: [[\"Запеченное филе минтая с помидорами и сыром\", 80], [\"Греческий салат с фетой\", 120]]\n      },\n      thu: {\n        breakfast: [[\"Овощной пудинг с фетой и томатами\", 150]],\n        breakfast2: [[\"Овощной салат с творожными шариками\", 150]],\n        dinner: [[\"Крем-суп Кресси\", 150], [\"Врапы с овощами, курицей-гриль и хумусом\", 100]],\n        afternoon: [[\"Смузи с бананом и овсянкой\", 200]],\n        supper: [[\"Митлоф из индейки с ягодным соусом\", 80], [\"Свекольный салат с фетой и грецкими орехами\", 120]]\n      },\n      fri: {\n        breakfast: [[\"Овсяная каша из цельного зерна с фруктами\", 100]],\n        breakfast2: [[\"Овощные маффины\", 100]],\n        dinner: [[\"Томленная телятина с черносливом\", 90], [\"Салат с адыгейским сыром\", 100]],\n        afternoon: [[\"Домашний йогурт с семенами Чиа\", 200]],\n        supper: [[\"Скумбрия-гриль с лимоном\", 90], [\"Салат с нутом, помидорами и сыром Фета\", 150]]\n      },\n      sat: {\n        breakfast: [[\"Японский омлет тамагояки\", 100]],\n        breakfast2: [[\"Творожно-банановый магкейк\", 150]],\n        dinner: [[\"Грибная юшка\", 150], [\"Котлетки по-турецки\", 150]],\n        afternoon: [[\"Вишневый смузи с бананом\", 200]],\n        supper: [[\"Треска в ореховом соусе\", 100], [\"Зеленй салат с чечевицей, фетой и рукколой\", 150]]\n      },\n      sun: {\n        breakfast: [[\"Тыквенные панкейки с кленовым сиропом, орешками и сухофруктами\", 100]],\n        breakfast2: [[\"Зеленй смузи\", 200]],\n        dinner: [[\"Кокот из говядины по-провански\", 100], [\"Салат с овощами-гриль, кус-кусом и фетой\", 100]],\n        afternoon: [[\"Салат Цезарь\", 100]],\n        supper: [[\"Филе индейки с сливочном соусе с французкой\", 100], [\"Овощной салат с киноа\", 120]]\n      }\n    }\n  },\n  cost: {\n    oldCost: '560грн',\n    saleCost: {\n      testDay: '391грн',\n      oneDay: '560грн',\n      sevenMoreDays: '540грн',\n      fourteenMore: '520грн',\n      thirty: '495грн',\n      breakfastSupper: '460грн'\n    }\n  }\n}, {\n  title: 'slim',\n  descr: 'Программа здорового питания Slim. Идеально для: плавного и эффективного снижения веса, нормализации веса в послеродовой период, снижения веса при малоподвижном образе жизни.',\n  slim: {\n    ration: {\n      mon: {\n        breakfast: [[\"Яйца скрэмбл с овощами и ветчиной\", 150]],\n        breakfast2: [[\"Легкий банановый пудинг с гранолой и орехами\", 150]],\n        dinner: [[\"Шашлычок из индейки с томатным соусом\", 100], [\"Салат с куриной печенью, медовыми яблоками и черничнымм соусом (соус отдельно)\", 100]],\n        afternoon: [[\"Тыквенно-цитрусовый смузи с имбирем\", 250]],\n        supper: [[\"Запеченный красный окунь с овощами\", 100], [\"Летний салат с апельсиновой заправкой\", 150]]\n      },\n      tue: {\n        breakfast: [[\"Пшенная каша на молоке с сухофруками\", 150]],\n        breakfast2: [[\"Овсяные тарты творожным кремом и ягодой\", 150]],\n        dinner: [[\"Суп Греческий Авголемоно\", 150], [\"Говяжьи фрикадели в томатном соусе\", 150]],\n        afternoon: [[\"Яблочно-морковный фреш\", 200]],\n        supper: [[\"Курица Капрезе с моцареллой\", 100], [\"Овощи гриль в соевом соусе\", 150]]\n      },\n      wed: {\n        breakfast: [[\"Кокосово-творожная запеканка с ягодным соусом\", 150]],\n        breakfast2: [[\"Зеленый салат с красной фасолью м кукурузой\", 200]],\n        dinner: [[\"Курица под соусом 'Муркарма'\", 100], [\"Салат Капрезе с моцареллой и томатами\", 150]],\n        afternoon: [[\"Осенний витаминный фреш\", 250]],\n        supper: [[\"Запеченное филе минтая с помидорами и сыром\", 80], [\"Греческий салат с фетой\", 150]]\n      },\n      thu: {\n        breakfast: [[\"Овощной пудинг с фетой и томатами\", 150]],\n        breakfast2: [[\"Овощной салат с творожными шариками\", 150]],\n        dinner: [[\"Крем-суп Кресси\", 200], [\"Врапы с овощами, курицей-гриль и хумусом\", 100]],\n        afternoon: [[\"Смузи с бананом и овсянкой\", 200]],\n        supper: [[\"Митлоф из индейки с ягодным соусом\", 80], [\"Свекольный салат с фетой и грецкими орехами\", 150]]\n      },\n      fri: {\n        breakfast: [[\"Овсяная каша из цельного зерна с фруктами\", 150]],\n        breakfast2: [[\"Овощные маффины\", 100]],\n        dinner: [[\"Томленная телятина с черносливом\", 90], [\"Салат с адыгейским сыром\", 100]],\n        afternoon: [[\"Домашний йогурт с семенами Чиа\", 200]],\n        supper: [[\"Скумбрия-гриль с лимоном\", 90], [\"Салат с нутом, помидорами и сыром Фета\", 150]]\n      },\n      sat: {\n        breakfast: [[\"Японский омлет тамагояки\", 100]],\n        breakfast2: [[\"Творожно-банановый магкейк\", 200]],\n        dinner: [[\"Грибная юшка\", 150], [\"Котлетки по-турецки\", 150]],\n        afternoon: [[\"Вишневый смузи с бананом\", 200]],\n        supper: [[\"Треска в ореховом соусе\", 100], [\"Зеленй салат с чечевицей, фетой и рукколой\", 150]]\n      },\n      sun: {\n        breakfast: [[\"Тыквенные панкейки с кленовым сиропом, орешками и сухофруктами\", 120]],\n        breakfast2: [[\"Зеленй смузи\", 200]],\n        dinner: [[\"Кокот из говядины по-провански\", 120], [\"Салат с овощами-гриль, кус-кусом и фетой\", 100]],\n        afternoon: [[\"Салат Цезарь\", 100]],\n        supper: [[\"Филе индейки с сливочном соусе с французкой\", 120], [\"Овощной салат с киноа\", 120]]\n      }\n    }\n  },\n  cost: {\n    oldCost: '580грн',\n    saleCost: {\n      testDay: '405грн',\n      oneDay: '580грн',\n      sevenMoreDays: '560грн',\n      fourteenMore: '550грн',\n      thirty: '540грн',\n      breakfastSupper: '477грн'\n    }\n  }\n}, {\n  title: 'fitness',\n  descr: 'Программа здорового питания Fitness. Идеально для: стабильного и плавного снижения веса, снижения веса в сочетании с плаванием, йогой, фитнесом и легким спортом, закрепления достигнутого результат.',\n  fitness: {\n    ration: {\n      mon: {\n        breakfast: [[\"Яйца скрэмбл с овощами и ветчиной\", 150]],\n        breakfast2: [[\"Легкий банановый пудинг с гранолой и орехами\", 150]],\n        dinner: [[\"Шашлычок из индейки с томатным соусом\", 100], [\"Салат с куриной печенью, медовыми яблоками и черничнымм соусом (соус отдельно)\", 150]],\n        afternoon: [[\"Тыквенно-цитрусовый смузи с имбирем\", 250], [\"Кокосово-творожное печенье\", 1]],\n        supper: [[\"Запеченный красный окунь с овощами\", 100], [\"Летний салат с апельсиновой заправкой\", 150]]\n      },\n      tue: {\n        breakfast: [[\"Пшенная каша на молоке с сухофруками\", 150]],\n        breakfast2: [[\"Овсяные тарты творожным кремом и ягодой\", 150]],\n        dinner: [[\"Суп Греческий Авголемоно\", 200], [\"Говяжьи фрикадели в томатном соусе\", 150], [\"Кус-кус с овощами\", 100]],\n        afternoon: [[\"Яблочно-морковный фреш\", 200]],\n        supper: [[\"Курица Капрезе с моцареллой\", 120], [\"Овощи гриль в соевом соусе\", 150]]\n      },\n      wed: {\n        breakfast: [[\"Кокосово-творожная запеканка с ягодным соусом\", 200]],\n        breakfast2: [[\"Зеленый салат с красной фасолью м кукурузой\", 200]],\n        dinner: [[\"Курица под соусом 'Муркарма'\", 100], [\"Салат Капрезе с моцареллой и томатами\", 150]],\n        afternoon: [[\"Осенний витаминный фреш\", 250], [\"Пряная гранола с клюквой\", 1]],\n        supper: [[\"Запеченное филе минтая с помидорами и сыром\", 100], [\"Греческий салат с фетой\", 150]]\n      },\n      thu: {\n        breakfast: [[\"Овощной пудинг с фетой и томатами\", 200]],\n        breakfast2: [[\"Овощной салат с творожными шариками\", 150]],\n        dinner: [[\"Крем-суп Кресси\", 200], [\"Врапы с овощами, курицей-гриль и хумусом\", 150]],\n        afternoon: [[\"Смузи с бананом и овсянкой\", 250], [\"Микс из орешков и сухофруктов\", 1]],\n        supper: [[\"Митлоф из индейки с ягодным соусом\", 100], [\"Свекольный салат с фетой и грецкими орехами\", 150]]\n      },\n      fri: {\n        breakfast: [[\"Овсяная каша из цельного зерна с фруктами\", 150]],\n        breakfast2: [[\"Овощные маффины\", 100]],\n        dinner: [[\"Томленная телятина с черносливом\", 90], [\"Салат с адыгейским сыром\", 150]],\n        afternoon: [[\"Домашний йогурт с семенами Чиа\", 250]],\n        supper: [[\"Скумбрия-гриль с лимоном\", 100], [\"Салат с нутом, помидорами и сыром Фета\", 150]]\n      },\n      sat: {\n        breakfast: [[\"Японский омлет тамагояки\", 150]],\n        breakfast2: [[\"Творожно-банановый магкейк\", 200]],\n        dinner: [[\"Грибная юшка\", 200], [\"Котлетки по-турецки\", 150]],\n        afternoon: [[\"Вишневый смузи с бананом\", 250], [\"Микс из орешков и сухофруктов\", 1]],\n        supper: [[\"Треска в ореховом соусе\", 100], [\"Зеленй салат с чечевицей, фетой и рукколой\", 150]]\n      },\n      sun: {\n        breakfast: [[\"Тыквенные панкейки с кленовым сиропом, орешками и сухофруктами\", 150]],\n        breakfast2: [[\"Зеленй смузи\", 200]],\n        dinner: [[\"Кокот из говядины по-провански\", 120], [\"Салат с овощами-гриль, кус-кусом и фетой\", 120]],\n        afternoon: [[\"Салат Цезарь\", 150]],\n        supper: [[\"Филе индейки с сливочном соусе с французкой\", 120], [\"Овощной салат с киноа\", 120]]\n      }\n    }\n  },\n  cost: {\n    oldCost: '600грн',\n    saleCost: {\n      testDay: '419грн',\n      oneDay: '600грн',\n      sevenMoreDays: '585грн',\n      fourteenMore: '570грн',\n      thirty: '555грн',\n      breakfastSupper: '495грн'\n    }\n  }\n}, {\n  title: 'balance',\n  descr: 'Программа здорового питания Balance. Идеально для: для комфортного снижения веса, среднеактивного образа жизни.',\n  balance: {\n    ration: {\n      mon: {\n        breakfast: [[\"Яйца скрэмбл с овощами и ветчиной\", 200]],\n        breakfast2: [[\"Легкий банановый пудинг с гранолой и орехами\", 200]],\n        dinner: [[\"Шашлычок из индейки с томатным соусом\", 150], [\"Салат с куриной печенью, медовыми яблоками и черничнымм соусом (соус отдельно)\", 150], [\"Бриам (греческое рагу)\", 80]],\n        afternoon: [[\"Тыквенно-цитрусовый смузи с имбирем\", 250], [\"Кокосово-творожное печенье\", 2]],\n        supper: [[\"Запеченный красный окунь с овощами\", 150], [\"Летний салат с апельсиновой заправкой\", 150], [\"Гречневая каша с грибами\", 50]]\n      },\n      tue: {\n        breakfast: [[\"Пшенная каша на молоке с сухофруками\", 200]],\n        breakfast2: [[\"Овсяные тарты творожным кремом и ягодой\", 200]],\n        dinner: [[\"Суп Греческий Авголемоно\", 200], [\"Говяжьи фрикадели в томатном соусе\", 200], [\"Кус-кус с овощами\", 100]],\n        afternoon: [[\"Яблочно-морковный фреш\", 200], [\"Сыроедческие конфеты\", 45]],\n        supper: [[\"Курица Капрезе с моцареллой\", 150], [\"Овощи гриль в соевом соусе\", 150]]\n      },\n      wed: {\n        breakfast: [[\"Кокосово-творожная запеканка с ягодным соусом\", 200]],\n        breakfast2: [[\"Зеленый салат с красной фасолью м кукурузой\", 200]],\n        dinner: [[\"Курица под соусом 'Муркарма'\", 150], [\"Салат Капрезе с моцареллой и томатами\", 150], [\"Рис-микс\", 80]],\n        afternoon: [[\"Осенний витаминный фреш\", 250], [\"Пряная гранола с клюквой\", 1]],\n        supper: [[\"Запеченное филе минтая с помидорами и сыром\", 150], [\"Греческий салат с фетой\", 150], [\"Булгур\", 50]]\n      },\n      thu: {\n        breakfast: [[\"Овощной пудинг с фетой и томатами\", 200]],\n        breakfast2: [[\"Овощной салат с творожными шариками\", 200]],\n        dinner: [[\"Крем-суп Кресси\", 200], [\"Врапы с овощами, курицей-гриль и хумусом\", 180]],\n        afternoon: [[\"Смузи с бананом и овсянкой\", 250], [\"Микс из орешков и сухофруктов\", 1]],\n        supper: [[\"Митлоф из индейки с ягодным соусом\", 150], [\"Свекольный салат с фетой и грецкими орехами\", 150], [\"Соба с овощами\", 50]]\n      },\n      fri: {\n        breakfast: [[\"Овсяная каша из цельного зерна с фруктами\", 200]],\n        breakfast2: [[\"Овощные маффины\", 150]],\n        dinner: [[\"Томленная телятина с черносливом\", 120], [\"Салат с адыгейским сыром\", 150]],\n        afternoon: [[\"Домашний йогурт с семенами Чиа\", 250], [\"Тыквенное печенье\", 1]],\n        supper: [[\"Скумбрия-гриль с лимоном\", 150], [\"Салат с нутом, помидорами и сыром Фета\", 150]]\n      },\n      sat: {\n        breakfast: [[\"Японский омлет тамагояки\", 150]],\n        breakfast2: [[\"Творожно-банановый магкейк\", 200]],\n        dinner: [[\"Грибная юшка\", 200], [\"Котлетки по-турецки\", 210]],\n        afternoon: [[\"Вишневый смузи с бананом\", 250], [\"Микс из орешков и сухофруктов\", 1]],\n        supper: [[\"Треска в ореховом соусе\", 120], [\"Зеленй салат с чечевицей, фетой и рукколой\", 150], [\"Запеченная пряная тыква\", 50]]\n      },\n      sun: {\n        breakfast: [[\"Тыквенные панкейки с кленовым сиропом, орешками и сухофруктами\", 150]],\n        breakfast2: [[\"Зеленй смузи\", 200], [\"Имбирное печенье\", 1]],\n        dinner: [[\"Кокот из говядины по-провански\", 120], [\"Салат с овощами-гриль, кус-кусом и фетой\", 120]],\n        afternoon: [[\"Салат Цезарь\", 150]],\n        supper: [[\"Филе индейки с сливочном соусе с французкой\", 150], [\"Овощной салат с киноа\", 150]]\n      }\n    }\n  },\n  cost: {\n    oldCost: '630грн',\n    saleCost: {\n      testDay: '440грн',\n      oneDay: '630грн',\n      sevenMoreDays: '610грн',\n      fourteenMore: '600грн',\n      thirty: '585грн',\n      breakfastSupper: '520грн'\n    }\n  }\n}, {\n  title: 'balancePlus',\n  descr: 'Программа здорового питания Balance+. Идеально для: поддержания мышечной массы девушкам, этапа сушки мужчинам, закрепления достигнутого результат',\n  balancePlus: {\n    ration: {\n      mon: {\n        breakfast: [[\"Яйца скрэмбл с овощами и ветчиной\", 200]],\n        breakfast2: [[\"Легкий банановый пудинг с гранолой и орехами\", 200]],\n        dinner: [[\"Шашлычок из индейки с томатным соусом\", 150], [\"Салат с куриной печенью, медовыми яблоками и черничнымм соусом (соус отдельно)\", 200], [\"Бриам (греческое рагу)\", 80]],\n        afternoon: [[\"Тыквенно-цитрусовый смузи с имбирем\", 250], [\"Кокосово-творожное печенье\", 2]],\n        supper: [[\"Запеченный красный окунь с овощами\", 150], [\"Летний салат с апельсиновой заправкой\", 150], [\"Гречневая каша с грибами\", 50]]\n      },\n      tue: {\n        breakfast: [[\"Пшенная каша на молоке с сухофруками\", 200]],\n        breakfast2: [[\"Овсяные тарты творожным кремом и ягодой\", 200]],\n        dinner: [[\"Суп Греческий Авголемоно\", 250], [\"Говяжьи фрикадели в томатном соусе\", 250], [\"Кус-кус с овощами\", 100]],\n        afternoon: [[\"Яблочно-морковный фреш\", 250], [\"Сыроедческие конфеты\", 45]],\n        supper: [[\"Курица Капрезе с моцареллой\", 200], [\"Овощи гриль в соевом соусе\", 150]]\n      },\n      wed: {\n        breakfast: [[\"Кокосово-творожная запеканка с ягодным соусом\", 200]],\n        breakfast2: [[\"Зеленый салат с красной фасолью м кукурузой\", 200]],\n        dinner: [[\"Курица под соусом 'Муркарма'\", 150], [\"Салат Капрезе с моцареллой и томатами\", 150], [\"Рис-микс\", 100]],\n        afternoon: [[\"Осенний витаминный фреш\", 250], [\"Пряная гранола с клюквой\", 1]],\n        supper: [[\"Запеченное филе минтая с помидорами и сыром\", 150], [\"Греческий салат с фетой\", 150], [\"Булгур\", 100]]\n      },\n      thu: {\n        breakfast: [[\"Овощной пудинг с фетой и томатами\", 250]],\n        breakfast2: [[\"Овощной салат с творожными шариками\", 200]],\n        dinner: [[\"Крем-суп Кресси\", 250], [\"Врапы с овощами, курицей-гриль и хумусом\", 180]],\n        afternoon: [[\"Смузи с бананом и овсянкой\", 250], [\"Микс из орешков и сухофруктов\", 2]],\n        supper: [[\"Митлоф из индейки с ягодным соусом\", 150], [\"Свекольный салат с фетой и грецкими орехами\", 150], [\"Соба с овощами\", 100]]\n      },\n      fri: {\n        breakfast: [[\"Овсяная каша из цельного зерна с фруктами\", 200]],\n        breakfast2: [[\"Овощные маффины\", 150]],\n        dinner: [[\"Томленная телятина с черносливом\", 150], [\"Салат с адыгейским сыром\", 150], [\"Фарфалле с соусом песто\", 80]],\n        afternoon: [[\"Домашний йогурт с семенами Чиа\", 250], [\"Тыквенное печенье\", 2]],\n        supper: [[\"Скумбрия-гриль с лимоном\", 150], [\"Салат с нутом, помидорами и сыром Фета\", 150]]\n      },\n      sat: {\n        breakfast: [[\"Японский омлет тамагояки\", 200]],\n        breakfast2: [[\"Творожно-банановый магкейк\", 250]],\n        dinner: [[\"Грибная юшка\", 200], [\"Котлетки по-турецки\", 240]],\n        afternoon: [[\"Вишневый смузи с бананом\", 250], [\"Микс из орешков и сухофруктов\", 1]],\n        supper: [[\"Треска в ореховом соусе\", 120], [\"Зеленй салат с чечевицей, фетой и рукколой\", 150], [\"Запеченная пряная тыква\", 80]]\n      },\n      sun: {\n        breakfast: [[\"Тыквенные панкейки с кленовым сиропом, орешками и сухофруктами\", 150]],\n        breakfast2: [[\"Зеленй смузи\", 200], [\"Имбирное печенье\", 1]],\n        dinner: [[\"Кокот из говядины по-провански\", 120], [\"Салат с овощами-гриль, кус-кусом и фетой\", 120]],\n        afternoon: [[\"Салат Цезарь\", 150]],\n        supper: [[\"Филе индейки с сливочном соусе с французкой\", 150], [\"Овощной салат с киноа\", 150], [\"Гречневая каша с овощной заправкой\", 100]]\n      }\n    }\n  },\n  cost: {\n    oldCost: '650грн',\n    saleCost: {\n      testDay: '454грн',\n      oneDay: '650грн',\n      sevenMoreDays: '630грн',\n      fourteenMore: '620грн',\n      thirty: '610грн',\n      breakfastSupper: '537грн'\n    }\n  }\n}, {\n  title: 'strong',\n  descr: 'Программа здорового питания Strong. Идеально для: поддержания веса мужчинам средних размеров, этапа сушки подготовленным спортсменам, набора мышечной массы девушкам-спортсменам с оптимальным соотношением КБЖУ',\n  strong: {\n    ration: {\n      mon: {\n        breakfast: [[\"Яйца скрэмбл с овощами и ветчиной\", 250]],\n        breakfast2: [[\"Легкий банановый пудинг с гранолой и орехами\", 250]],\n        dinner: [[\"Шашлычок из индейки с томатным соусом\", 170], [\"Салат с куриной печенью, медовыми яблоками и черничнымм соусом (соус отдельно)\", 200], [\"Бриам (греческое рагу)\", 100]],\n        afternoon: [[\"Тыквенно-цитрусовый смузи с имбирем\", 250], [\"Кокосово-творожное печенье\", 2]],\n        supper: [[\"Запеченный красный окунь с овощами\", 150], [\"Летний салат с апельсиновой заправкой\", 150], [\"Гречневая каша с грибами\", 80]]\n      },\n      tue: {\n        breakfast: [[\"Пшенная каша на молоке с сухофруками\", 250]],\n        breakfast2: [[\"Овсяные тарты творожным кремом и ягодой\", 250]],\n        dinner: [[\"Суп Греческий Авголемоно\", 250], [\"Говяжьи фрикадели в томатном соусе\", 250], [\"Кус-кус с овощами\", 150]],\n        afternoon: [[\"Яблочно-морковный фреш\", 250], [\"Сыроедческие конфеты\", 45]],\n        supper: [[\"Курица Капрезе с моцареллой\", 200], [\"Овощи гриль в соевом соусе\", 150], [\"Чечевица\", 100]]\n      },\n      wed: {\n        breakfast: [[\"Кокосово-творожная запеканка с ягодным соусом\", 250]],\n        breakfast2: [[\"Зеленый салат с красной фасолью м кукурузой\", 250]],\n        dinner: [[\"Курица под соусом 'Муркарма'\", 170], [\"Салат Капрезе с моцареллой и томатами\", 150], [\"Рис-микс\", 100]],\n        afternoon: [[\"Осенний витаминный фреш\", 250], [\"Пряная гранола с клюквой\", 1]],\n        supper: [[\"Запеченное филе минтая с помидорами и сыром\", 200], [\"Греческий салат с фетой\", 150], [\"Булгур\", 150]]\n      },\n      thu: {\n        breakfast: [[\"Овощной пудинг с фетой и томатами\", 250]],\n        breakfast2: [[\"Овощной салат с творожными шариками\", 200]],\n        dinner: [[\"Крем-суп Кресси\", 250], [\"Врапы с овощами, курицей-гриль и хумусом\", 250]],\n        afternoon: [[\"Смузи с бананом и овсянкой\", 250], [\"Микс из орешков и сухофруктов\", 2]],\n        supper: [[\"Митлоф из индейки с ягодным соусом\", 200], [\"Свекольный салат с фетой и грецкими орехами\", 150], [\"Соба с овощами\", 150]]\n      },\n      fri: {\n        breakfast: [[\"Овсяная каша из цельного зерна с фруктами\", 250]],\n        breakfast2: [[\"Овощные маффины\", 200]],\n        dinner: [[\"Томленная телятина с черносливом\", 150], [\"Салат с адыгейским сыром\", 150], [\"Фарфалле с соусом песто\", 100]],\n        afternoon: [[\"Домашний йогурт с семенами Чиа\", 250], [\"Тыквенное печенье\", 2]],\n        supper: [[\"Скумбрия-гриль с лимоном\", 175], [\"Салат с нутом, помидорами и сыром Фета\", 150], [\"Кус-кус с овощами\", 70]]\n      },\n      sat: {\n        breakfast: [[\"Японский омлет тамагояки\", 250]],\n        breakfast2: [[\"Творожно-банановый магкейк\", 250]],\n        dinner: [[\"Грибная юшка\", 250], [\"Котлетки по-турецки\", 260]],\n        afternoon: [[\"Вишневый смузи с бананом\", 250], [\"Микс из орешков и сухофруктов\", 1]],\n        supper: [[\"Треска в ореховом соусе\", 180], [\"Зеленй салат с чечевицей, фетой и рукколой\", 150], [\"Запеченная пряная тыква\", 100]]\n      },\n      sun: {\n        breakfast: [[\"Тыквенные панкейки с кленовым сиропом, орешками и сухофруктами\", 150]],\n        breakfast2: [[\"Зеленй смузи\", 250], [\"Имбирное печенье\", 2]],\n        dinner: [[\"Кокот из говядины по-провански\", 150], [\"Салат с овощами-гриль, кус-кусом и фетой\", 150]],\n        afternoon: [[\"Салат Цезарь\", 150]],\n        supper: [[\"Филе индейки с сливочном соусе с французкой\", 150], [\"Овощной салат с киноа\", 150], [\"Гречневая каша с овощной заправкой\", 150]]\n      }\n    }\n  },\n  cost: {\n    oldCost: '680грн',\n    saleCost: {\n      testDay: '475грн',\n      oneDay: '680грн',\n      sevenMoreDays: '655грн',\n      fourteenMore: '640грн',\n      thirty: '630грн',\n      breakfastSupper: '563грн'\n    }\n  }\n}, {\n  title: 'maxiFit',\n  descr: 'Программа здорового питания Maxi Fit. Идеально для: поддержания веса опытным спортсменам, для набора мышечной массы начинающим атлетам, поддержания баланса микро- и макроэлементов в организме с оптимальным соотношением КБЖУ',\n  maxiFit: {\n    ration: {\n      mon: {\n        breakfast: [[\"Яйца скрэмбл с овощами и ветчиной\", 250]],\n        breakfast2: [[\"Легкий банановый пудинг с гранолой и орехами\", 250]],\n        dinner: [[\"Шашлычок из индейки с томатным соусом\", 200], [\"Салат с куриной печенью, медовыми яблоками и черничнымм соусом (соус отдельно)\", 200], [\"Бриам (греческое рагу)\", 120]],\n        afternoon: [[\"Тыквенно-цитрусовый смузи с имбирем\", 250], [\"Кокосово-творожное печенье\", 2]],\n        supper: [[\"Запеченный красный окунь с овощами\", 200], [\"Летний салат с апельсиновой заправкой\", 150], [\"Гречневая каша с грибами\", 100]]\n      },\n      tue: {\n        breakfast: [[\"Пшенная каша на молоке с сухофруками\", 250]],\n        breakfast2: [[\"Овсяные тарты творожным кремом и ягодой\", 250]],\n        dinner: [[\"Суп Греческий Авголемоно\", 250], [\"Говяжьи фрикадели в томатном соусе\", 250], [\"Кус-кус с овощами\", 150]],\n        afternoon: [[\"Яблочно-морковный фреш\", 250], [\"Сыроедческие конфеты\", 50]],\n        supper: [[\"Курица Капрезе с моцареллой\", 200], [\"Овощи гриль в соевом соусе\", 150], [\"Чечевица\", 150]]\n      },\n      wed: {\n        breakfast: [[\"Кокосово-творожная запеканка с ягодным соусом\", 250]],\n        breakfast2: [[\"Зеленый салат с красной фасолью м кукурузой\", 250]],\n        dinner: [[\"Курица под соусом 'Муркарма'\", 200], [\"Салат Капрезе с моцареллой и томатами\", 150], [\"Рис-микс\", 130]],\n        afternoon: [[\"Осенний витаминный фреш\", 250], [\"Пряная гранола с клюквой\", 1]],\n        supper: [[\"Запеченное филе минтая с помидорами и сыром\", 200], [\"Греческий салат с фетой\", 150], [\"Булгур\", 170]]\n      },\n      thu: {\n        breakfast: [[\"Овощной пудинг с фетой и томатами\", 250]],\n        breakfast2: [[\"Овощной салат с творожными шариками\", 250]],\n        dinner: [[\"Крем-суп Кресси\", 250], [\"Врапы с овощами, курицей-гриль и хумусом\", 250]],\n        afternoon: [[\"Смузи с бананом и овсянкой\", 250], [\"Микс из орешков и сухофруктов\", 3]],\n        supper: [[\"Митлоф из индейки с ягодным соусом\", 200], [\"Свекольный салат с фетой и грецкими орехами\", 150], [\"Соба с овощами\", 170]]\n      },\n      fri: {\n        breakfast: [[\"Овсяная каша из цельного зерна с фруктами\", 250]],\n        breakfast2: [[\"Овощные маффины\", 200]],\n        dinner: [[\"Томленная телятина с черносливом\", 180], [\"Салат с адыгейским сыром\", 150], [\"Фарфалле с соусом песто\", 140]],\n        afternoon: [[\"Домашний йогурт с семенами Чиа\", 250], [\"Тыквенное печенье\", 3]],\n        supper: [[\"Скумбрия-гриль с лимоном\", 200], [\"Салат с нутом, помидорами и сыром Фета\", 150], [\"Кус-кус с овощами\", 120]]\n      },\n      sat: {\n        breakfast: [[\"Японский омлет тамагояки\", 250]],\n        breakfast2: [[\"Творожно-банановый магкейк\", 250]],\n        dinner: [[\"Грибная юшка\", 250], [\"Котлетки по-турецки\", 300]],\n        afternoon: [[\"Вишневый смузи с бананом\", 250], [\"Микс из орешков и сухофруктов\", 1]],\n        supper: [[\"Треска в ореховом соусе\", 180], [\"Зеленй салат с чечевицей, фетой и рукколой\", 150], [\"Запеченная пряная тыква\", 100]]\n      },\n      sun: {\n        breakfast: [[\"Тыквенные панкейки с кленовым сиропом, орешками и сухофруктами\", 200]],\n        breakfast2: [[\"Зеленй смузи\", 250], [\"Имбирное печенье\", 2]],\n        dinner: [[\"Кокот из говядины по-провански\", 150], [\"Салат с овощами-гриль, кус-кусом и фетой\", 150]],\n        afternoon: [[\"Салат Цезарь\", 150]],\n        supper: [[\"Филе индейки с сливочном соусе с французкой\", 150], [\"Овощной салат с киноа\", 150], [\"Гречневая каша с овощной заправкой\", 150]]\n      }\n    }\n  },\n  cost: {\n    oldCost: '710грн',\n    saleCost: {\n      testDay: '496грн',\n      oneDay: '710грн',\n      sevenMoreDays: '685грн',\n      fourteenMore: '670грн',\n      thirty: '655грн',\n      breakfastSupper: '588грн'\n    }\n  }\n}];\n\n\n//# sourceURL=webpack://webpack1/./src/modules/programsInfo.js?");

/***/ }),

/***/ "./src/modules/scroll.js":
/*!*******************************!*\
  !*** ./src/modules/scroll.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"btnPrograms\": () => (/* binding */ btnPrograms),\n/* harmony export */   \"btnGastro\": () => (/* binding */ btnGastro),\n/* harmony export */   \"btnAbout\": () => (/* binding */ btnAbout),\n/* harmony export */   \"btnBlog\": () => (/* binding */ btnBlog),\n/* harmony export */   \"btnTop\": () => (/* binding */ btnTop),\n/* harmony export */   \"btnToOrder\": () => (/* binding */ btnToOrder),\n/* harmony export */   \"btnToReg\": () => (/* binding */ btnToReg),\n/* harmony export */   \"btnFaq\": () => (/* binding */ btnFaq),\n/* harmony export */   \"smoothScroll\": () => (/* binding */ smoothScroll)\n/* harmony export */ });\nlet btnPrograms = document.querySelectorAll('.programsBtn');\nlet btnGastro = document.querySelectorAll('.gastroBtn');\nlet btnAbout = document.querySelectorAll('.aboutBtn');\nlet btnBlog = document.querySelectorAll('.blogBtn');\nlet btnTop = document.querySelectorAll('.toTop');\nlet btnToOrder = document.querySelectorAll('.toOrder');\nlet btnToReg = document.querySelectorAll('.diet-btn-wrap');\nlet btnFaq = document.querySelectorAll('.faqBtn');\n\nconst smoothScroll = elem => {\n  let element = document.querySelector(elem);\n  let headerHeight = document.querySelector('header').offsetHeight;\n  let elemTop = element.offsetTop;\n  let scrolling = elemTop - headerHeight;\n  window.scroll({\n    left: 0,\n    top: scrolling,\n    behavior: 'smooth'\n  });\n};\n\n\n\n//# sourceURL=webpack://webpack1/./src/modules/scroll.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.css":
/*!****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.css ***!
  \****************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./images/backgrounds/background-food-1.jpg */ \"./src/images/backgrounds/background-food-1.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./images/backgrounds/background-food-2.jpg */ \"./src/images/backgrounds/background-food-2.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./images/backgrounds/background-food-3.jpg */ \"./src/images/backgrounds/background-food-3.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./images/backgrounds/background-food-4.jpg */ \"./src/images/backgrounds/background-food-4.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ./images/Ellipse1.svg */ \"./src/images/Ellipse1.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ./images/food/food8.jpg */ \"./src/images/food/food8.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ./images/food/food9.png */ \"./src/images/food/food9.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! ./images/food/food10.jpg */ \"./src/images/food/food10.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_8___ = new URL(/* asset import */ __webpack_require__(/*! ./images/food/food11.jpg */ \"./src/images/food/food11.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);\nvar ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);\nvar ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);\nvar ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_5___);\nvar ___CSS_LOADER_URL_REPLACEMENT_6___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_6___);\nvar ___CSS_LOADER_URL_REPLACEMENT_7___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_7___);\nvar ___CSS_LOADER_URL_REPLACEMENT_8___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_8___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n  margin: 0;\\n  padding: 0;\\n  border: 0; }\\n\\nbody {\\n  background: #F5FAFF;\\n  position: relative; }\\n\\n.center {\\n  max-width: 1180px;\\n  margin: 0 auto; }\\n\\n.wrapper {\\n  background-color: #F5FAFF;\\n  max-width: 1920px;\\n  width: 100%;\\n  margin: 0 auto; }\\n\\n.empty {\\n  width: 100%;\\n  height: 20vh; }\\n\\n#burger {\\n  display: none;\\n  width: 30px;\\n  height: 30px;\\n  position: absolute;\\n  right: 15px;\\n  top: 17px; }\\n\\n#burger i {\\n  display: block;\\n  width: 24px;\\n  height: 3px;\\n  margin: 3px;\\n  background-color: #020202; }\\n\\n.order-close:hover {\\n  cursor: pointer; }\\n\\n.inputFocus {\\n  border: 3px solid #44D370; }\\n\\n#close {\\n  font-family: Comfortaa;\\n  font-style: normal;\\n  display: none;\\n  position: absolute;\\n  right: 20px;\\n  top: 0px;\\n  font-size: 40px;\\n  color: #020202;\\n  z-index: 201; }\\n\\n.close-article {\\n  font-family: Comfortaa;\\n  font-style: normal;\\n  position: absolute;\\n  right: 40px;\\n  top: 20px;\\n  font-size: 40px;\\n  color: #020202;\\n  z-index: 201; }\\n\\n.close-article:hover {\\n  cursor: pointer; }\\n\\n.close-candy {\\n  font-family: Comfortaa;\\n  font-style: normal;\\n  position: absolute;\\n  right: 40px;\\n  top: 20px;\\n  font-size: 40px;\\n  color: #020202;\\n  z-index: 201; }\\n\\n.close-candy:hover {\\n  cursor: pointer; }\\n\\n.form-close:hover {\\n  cursor: pointer; }\\n\\n.faq-active {\\n  font-family: Montserrat;\\n  font-style: normal;\\n  font-weight: normal;\\n  font-size: 12px;\\n  line-height: 133.8%;\\n  letter-spacing: 0.025em;\\n  color: #F5FAFF;\\n  margin-top: 15px; }\\n\\n.answer .answer-text {\\n  font-family: Montserrat;\\n  font-style: normal;\\n  font-weight: normal;\\n  font-size: 12px;\\n  line-height: 133.8%;\\n  letter-spacing: 0.025em;\\n  color: #F5FAFF;\\n  margin: 15px 37px 24px 20px; }\\n\\n.answer {\\n  transition: ease-in-out 0.5s;\\n  display: none; }\\n\\n.question-flex {\\n  display: flex;\\n  justify-content: space-between;\\n  width: 100%; }\\n\\n.order-btn {\\n  text-decoration: none;\\n  font-family: Comfortaa;\\n  font-style: normal;\\n  font-weight: bold;\\n  font-size: 26px;\\n  line-height: 133.8%;\\n  text-align: center;\\n  letter-spacing: 0.025em;\\n  color: #F5FAFF;\\n  background: #64D370;\\n  -webkit-box-shadow: 0px 0px 40px rgba(86, 86, 86, 0.3);\\n  box-shadow: 0px 0px 40px rgba(86, 86, 86, 0.3);\\n  border-radius: 50px;\\n  padding: 12px 69px;\\n  width: calc(280px - 69px - 69px); }\\n\\n.order-btn-main {\\n  text-decoration: none;\\n  font-family: Comfortaa;\\n  font-style: normal;\\n  font-weight: bold;\\n  font-size: 26px;\\n  line-height: 133.8%;\\n  text-align: center;\\n  letter-spacing: 0.025em;\\n  color: #F5FAFF;\\n  background: #64D370;\\n  -webkit-box-shadow: 0px 0px 40px rgba(86, 86, 86, 0.3);\\n  box-shadow: 0px 0px 40px rgba(86, 86, 86, 0.3);\\n  border-radius: 50px;\\n  padding: 12px 69px;\\n  width: calc(100% - 69px - 69px);\\n  -webkit-transition: ease-in-out 0.6s;\\n  transition: ease-in-out 0.6s; }\\n\\n.order-btn-main:hover {\\n  -webkit-box-shadow: 0px 0px 30px #64D370;\\n  box-shadow: 0px 0px 30px #64D370;\\n  -webkit-transition: ease-in-out 0.6s;\\n  transition: ease-in-out 0.6s;\\n  cursor: pointer; }\\n\\n.modal-hide {\\n  display: none; }\\n\\nheader {\\n  background: #F5FAFF;\\n  position: fixed;\\n  width: 100%;\\n  z-index: 111;\\n  -webkit-box-shadow: 0px 0px 40px rgba(86, 86, 86, 0.3);\\n  box-shadow: 0px 0px 40px rgba(86, 86, 86, 0.3); }\\n\\nheader .header-wrap {\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex;\\n  -webkit-box-pack: justify;\\n  -ms-flex-pack: justify;\\n  justify-content: space-between; }\\n\\nheader .header-wrap .logo a img {\\n  max-width: 145px;\\n  -o-object-fit: cover;\\n  object-fit: cover; }\\n\\nheader .header-wrap .menu {\\n  padding-top: 26px; }\\n\\nheader .header-wrap .menu ul {\\n  list-style-type: none;\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex; }\\n\\nheader .header-wrap .menu ul li {\\n  margin-right: 30px; }\\n\\nheader .header-wrap .menu ul li a {\\n  text-decoration: none;\\n  font-family: Montserrat;\\n  font-style: normal;\\n  font-weight: normal;\\n  font-size: 14px;\\n  line-height: 133.8%;\\n  color: #020202;\\n  -webkit-transition: ease-in-out 0.5s;\\n  transition: ease-in-out 0.5s; }\\n\\nheader .header-wrap .menu ul li a:hover {\\n  color: #64D370;\\n  -webkit-transition: ease-in-out 0.5s;\\n  transition: ease-in-out 0.5s; }\\n\\nheader .header-wrap .contact-wrap {\\n  padding-top: 20px; }\\n\\nheader .header-wrap .contact-wrap .contact-number {\\n  padding: 20px 30px;\\n  font-family: Montserrat;\\n  font-style: normal;\\n  font-weight: bold;\\n  font-size: 20px;\\n  line-height: 24px;\\n  color: #F5FAFF;\\n  background-color: #64D370; }\\n\\n.main-wrap-bg {\\n  background: rgba(2, 2, 2, 0.7);\\n  -webkit-box-shadow: inset 0px 0px 30px rgba(86, 86, 86, 0.25);\\n  box-shadow: inset 0px 0px 30px rgba(86, 86, 86, 0.25); }\\n\\n.order-descr2 {\\n  font-family: Montserrat;\\n  font-style: normal;\\n  font-weight: normal;\\n  font-size: 20px;\\n  line-height: 133.8%;\\n  color: #F5FAFF;\\n  -ms-flex-item-align: center;\\n  align-self: center; }\\n\\n.main-section-wrap .content3 {\\n  padding-top: 100px;\\n  padding-bottom: 120px; }\\n\\n.main-section-wrap .content3 .title3 p {\\n  font-family: Comfortaa;\\n  font-style: normal;\\n  font-weight: bold;\\n  font-size: 40px;\\n  line-height: 45px;\\n  letter-spacing: 0.025em;\\n  color: #F5FAFF; }\\n\\n.main-section-wrap .content3 .title3 p span {\\n  color: #64D370; }\\n\\n.main-section-wrap .content3 .diet-descr2 {\\n  font-family: Montserrat;\\n  font-style: normal;\\n  font-weight: normal;\\n  font-size: 20px;\\n  line-height: 133.8%;\\n  color: #F5FAFF;\\n  margin-top: 15px;\\n  margin-bottom: 42px; }\\n\\n.main-section-wrap .content3 .diet-descr2 span {\\n  color: #64D370; }\\n\\n.main-section-wrap .content3 .order2 {\\n  margin-top: 42px;\\n  display: grid;\\n  grid-template-columns: 1fr 1fr;\\n  grid-column-gap: 30px; }\\n\\n.main-section-wrap .content3 .order2 .order-info2 .order-cost2 {\\n  font-family: Montserrat;\\n  font-style: normal;\\n  font-weight: bold;\\n  font-size: 35px;\\n  line-height: 100%;\\n  color: #64D370; }\\n\\n.main__section .main-section1 {\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n  background-repeat: no-repeat;\\n  background-size: 100%;\\n  background-position: 0 -100px; }\\n\\n.main__section .main-section2 {\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \");\\n  background-repeat: no-repeat;\\n  background-size: 100%;\\n  background-position: 0 -100px; }\\n\\n.main__section .main-section3 {\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_2___ + \");\\n  background-repeat: no-repeat;\\n  background-size: 100%;\\n  background-position: 0 -100px; }\\n\\n.main__section .main-section4 {\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_3___ + \");\\n  background-repeat: no-repeat;\\n  background-size: 100%;\\n  background-position: 0 -100px; }\\n\\n.programs {\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_4___ + \");\\n  background-repeat: no-repeat;\\n  background-position: 0 0;\\n  margin-bottom: 120px; }\\n\\n.programs .short_descr {\\n  background-color: rgba(245, 250, 255, 0.6);\\n  -webkit-box-shadow: 0px 0px 40px rgba(86, 86, 86, 0.3);\\n  box-shadow: 0px 0px 40px rgba(86, 86, 86, 0.3);\\n  border-radius: 30px;\\n  margin-bottom: 97px; }\\n\\n.programs .short_descr ul {\\n  list-style-type: none;\\n  display: grid;\\n  grid-template-columns: repeat(6, 1fr);\\n  padding: 40px 60px; }\\n\\n.programs .short_descr ul li img {\\n  padding-left: 60px; }\\n\\n.programs .short_descr ul li p {\\n  font-family: Montserrat;\\n  font-style: normal;\\n  font-weight: 500;\\n  font-size: 12px;\\n  line-height: 130.22%;\\n  text-align: center;\\n  color: #020202; }\\n\\n.programs .short_descr ul .car-icon {\\n  padding-left: 40px; }\\n\\n.programs .programs-choice .programs-choice_btn {\\n  font-family: Comfortaa;\\n  font-style: normal;\\n  font-weight: bold;\\n  font-size: 25px;\\n  line-height: 28px;\\n  text-align: right;\\n  display: grid;\\n  grid-template-columns: 1fr 1fr;\\n  grid-column-gap: 20px;\\n  margin-bottom: 70px; }\\n\\n.programs .programs-choice .programs-choice_btn .choice-btn {\\n  border-radius: 190px;\\n  background: #DEE6EE;\\n  padding-top: 16px;\\n  padding-bottom: 16px;\\n  text-align: center;\\n  white-space: nowrap;\\n  -webkit-transition: ease-in-out 0.6s;\\n  transition: ease-in-out 0.6s; }\\n\\n.programs .programs-choice .programs-choice_btn .choice-btn #usual-btn {\\n  text-decoration: none;\\n  color: #000000; }\\n\\n.programs .programs-choice .programs-choice_btn .choice-btn #special-btn {\\n  text-decoration: none;\\n  color: #000000; }\\n\\n.programs .programs-choice .programs-choice_btn .choice-btn:hover {\\n  -webkit-box-shadow: 0px 0px 30px #64D370;\\n  box-shadow: 0px 0px 30px #64D370;\\n  -webkit-transition: ease-in-out 0.6s;\\n  transition: ease-in-out 0.6s;\\n  background-color: #64D370;\\n  cursor: pointer; }\\n\\n.programs .programs-choice .programs-choice_btn .choice-btn:hover #usual-btn {\\n  color: #F5FAFF; }\\n\\n.programs .programs-choice .programs-choice_btn .choice-btn:hover #special-btn {\\n  color: #F5FAFF; }\\n\\n.programs .diets {\\n  margin-bottom: 50px; }\\n\\n.programs .diets ul {\\n  list-style-type: none;\\n  display: grid;\\n  grid-template-columns: repeat(7, 1fr); }\\n\\n.programs .diets ul li {\\n  -webkit-transition: ease-in-out 0.5s;\\n  transition: ease-in-out 0.5s;\\n  color: #020202; }\\n\\n.programs .diets ul li .diet-name {\\n  font-family: Comfortaa;\\n  font-style: normal;\\n  font-weight: bold;\\n  font-size: 18px;\\n  line-height: 20px;\\n  text-align: center;\\n  text-transform: uppercase;\\n  margin-bottom: 7px; }\\n\\n.programs .diets ul li .diet-ccal {\\n  font-family: Montserrat;\\n  font-style: normal;\\n  font-weight: normal;\\n  font-size: 14px;\\n  line-height: 17px;\\n  text-align: center; }\\n\\n.programs .diets ul li:hover {\\n  -webkit-transform: scale(1.06);\\n  transform: scale(1.06);\\n  -webkit-transition: ease-in-out 0.5s;\\n  transition: ease-in-out 0.5s;\\n  cursor: pointer; }\\n\\n.diet-active {\\n  color: #64D370 !important;\\n  transform: scale(1.06); }\\n\\n.programs .diets ul li:hover .diet-name {\\n  color: #64D370; }\\n\\n.programs .diets ul li:hover .diet-ccal {\\n  color: #64D370; }\\n\\n.programs .diet-timetable {\\n  display: grid;\\n  grid-template-columns: 1fr 2fr;\\n  grid-column-gap: 20px; }\\n\\n.programs .diet-timetable .diet-left .diet-description {\\n  background: #64D370;\\n  -webkit-box-shadow: 0px 0px 40px rgba(86, 86, 86, 0.3);\\n  box-shadow: 0px 0px 40px rgba(86, 86, 86, 0.3);\\n  border-radius: 30px; }\\n\\n.programs .diet-timetable .diet-left .diet-description .inner-diet-description {\\n  padding: 30px 50px 50px 50px; }\\n\\n.programs .diet-timetable .diet-left .diet-description .inner-diet-description h2 {\\n  font-family: Comfortaa;\\n  font-style: normal;\\n  font-weight: bold;\\n  font-size: 25px;\\n  line-height: 28px;\\n  text-align: center;\\n  text-transform: uppercase;\\n  color: #F5FAFF;\\n  display: inline-block;\\n  margin-right: 20px;\\n  margin-bottom: 20px; }\\n\\n.programs .diet-timetable .diet-left .diet-description .inner-diet-description span {\\n  font-family: Montserrat;\\n  font-style: normal;\\n  font-weight: 500;\\n  font-size: 18px;\\n  line-height: 22px;\\n  text-align: center;\\n  color: #F5FAFF;\\n  white-space: nowrap; }\\n\\n.programs .diet-timetable .diet-left .diet-description .inner-diet-description p {\\n  font-family: Montserrat;\\n  font-style: normal;\\n  font-weight: 500;\\n  font-size: 16px;\\n  line-height: 20px;\\n  color: #F5FAFF; }\\n\\n.programs .diet-timetable .diet-left .cost-table {\\n  margin-top: 50px;\\n  margin-bottom: 50px; }\\n\\n.programs .diet-timetable .diet-left .cost-table table {\\n  font-family: Montserrat;\\n  font-style: normal;\\n  font-weight: normal;\\n  font-size: 15px;\\n  line-height: 18px;\\n  color: #000000;\\n  width: 100%;\\n  padding-left: 25px;\\n  padding-right: 25px; }\\n\\n.programs .diet-timetable .diet-left .cost-table table .name-diet {\\n  margin-bottom: 15px; }\\n\\n.programs .diet-timetable .diet-left .cost-table table .diet-sale {\\n  margin-bottom: 15px;\\n  text-decoration: line-through; }\\n\\n.programs .diet-timetable .diet-left .cost-table table .new-cost {\\n  margin-bottom: 15px; }\\n\\n.programs .diet-timetable .diet-left .cost-table table .sale-percent {\\n  margin-bottom: 15px; }\\n\\n.programs .diet-timetable .diet-left .diet-btn-wrap {\\n  font-family: Comfortaa;\\n  font-style: normal;\\n  font-weight: bold;\\n  font-size: 26px;\\n  line-height: 133.8%;\\n  text-align: center;\\n  letter-spacing: 0.025em;\\n  background: #64D370;\\n  -webkit-box-shadow: 0px 0px 40px rgba(86, 86, 86, 0.3);\\n  box-shadow: 0px 0px 40px rgba(86, 86, 86, 0.3);\\n  border-radius: 50px;\\n  padding: 12px 69px;\\n  width: calc(100% - 69px - 69px);\\n  text-align: center;\\n  -webkit-transition: ease-in-out 0.6s;\\n  transition: ease-in-out 0.6s; }\\n\\n.programs .diet-timetable .diet-left .diet-btn-wrap .diet-order-btn {\\n  text-decoration: none;\\n  color: #F5FAFF; }\\n\\n.programs .diet-timetable .diet-left .diet-btn-wrap:hover {\\n  -webkit-transform: scale(1.02);\\n  transform: scale(1.02);\\n  -webkit-box-shadow: 0px 0px 30px #64D370;\\n  box-shadow: 0px 0px 30px #64D370;\\n  -webkit-transition: ease-in-out 0.6s;\\n  transition: ease-in-out 0.6s;\\n  cursor: pointer; }\\n\\n.programs .diet-timetable .diet-right .week {\\n  background: #F5FAFF;\\n  -webkit-box-shadow: 0px 0px 40px rgba(86, 86, 86, 0.3);\\n  box-shadow: 0px 0px 40px rgba(86, 86, 86, 0.3);\\n  border-radius: 30px;\\n  padding: 16px 50px 11px 50px;\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex;\\n  -webkit-box-pack: justify;\\n  -ms-flex-pack: justify;\\n  justify-content: space-between; }\\n\\n.programs .diet-timetable .diet-right .week span {\\n  font-family: Comfortaa;\\n  font-style: normal;\\n  font-weight: bold;\\n  font-size: 25px;\\n  line-height: 28px;\\n  text-align: center;\\n  text-transform: uppercase;\\n  color: #000000;\\n  -webkit-transition: ease-in-out 0.5s;\\n  transition: ease-in-out 0.5s; }\\n\\n.programs .diet-timetable .diet-right .week span:hover {\\n  -webkit-transform: scale(1.06);\\n  transform: scale(1.06);\\n  color: #64D370;\\n  cursor: pointer; }\\n\\n.programs .diet-timetable .diet-right .day-ration {\\n  margin-top: 20px;\\n  background: #F5FAFF;\\n  -webkit-box-shadow: 0px 0px 40px rgba(86, 86, 86, 0.3);\\n  box-shadow: 0px 0px 40px rgba(86, 86, 86, 0.3);\\n  border-radius: 30px;\\n  padding: 30px 50px; }\\n\\n.programs .diet-timetable .diet-right .day-ration table {\\n  max-width: 680px; }\\n\\n.programs .diet-timetable .diet-right .day-ration table p {\\n  font-family: Montserrat;\\n  font-style: normal;\\n  font-weight: 300;\\n  font-size: 18px;\\n  line-height: 22px;\\n  color: #000000; }\\n\\n.programs .diet-timetable .diet-right .day-ration table .eating {\\n  font-family: Montserrat;\\n  font-style: normal;\\n  font-weight: normal;\\n  font-size: 20px;\\n  line-height: 24px;\\n  color: #000000;\\n  margin-bottom: 5px; }\\n\\n.programs .diet-timetable .diet-right .day-ration table .eating-title {\\n  padding-bottom: 50px; }\\n\\n.programs .diet-timetable .diet-right .day-ration table .food-name_container {\\n  padding-bottom: 57px; }\\n\\n.programs .diet-timetable .diet-right .day-ration table .food-weight_container {\\n  padding-bottom: 57px; }\\n\\n.online-checkout-wrap {\\n  font-family: Comfortaa;\\n  font-style: normal;\\n  font-weight: bold;\\n  font-size: 24px;\\n  line-height: 133.8%;\\n  text-align: center;\\n  letter-spacing: 0.025em;\\n  background: #64D370;\\n  -webkit-box-shadow: 0px 0px 40px rgba(86, 86, 86, 0.3);\\n  box-shadow: 0px 0px 40px rgba(86, 86, 86, 0.3);\\n  border-radius: 190px;\\n  padding-top: 14px;\\n  padding-bottom: 14px;\\n  white-space: nowrap;\\n  -webkit-transition: ease-in-out 0.6s;\\n  transition: ease-in-out 0.6s; }\\n\\n.online-checkout-wrap .online-checkout {\\n  color: #F5FAFF;\\n  text-decoration: none; }\\n\\n.online-checkout-wrap:hover {\\n  cursor: pointer;\\n  -webkit-box-shadow: 10px 10px 30px #64D370;\\n  box-shadow: 0px 0px 30px #64D370;\\n  -webkit-transform: scale(1.03);\\n  transform: scale(1.03);\\n  -webkit-transition: ease-in-out 0.6s;\\n  transition: ease-in-out 0.6s; }\\n\\n.conditions-container label {\\n  font-family: Comfortaa;\\n  font-style: normal;\\n  font-weight: bold;\\n  font-size: 16px;\\n  line-height: 133.8%;\\n  letter-spacing: 0.025em;\\n  color: #020202;\\n  margin-left: 30px; }\\n\\n.conditions-container label a {\\n  text-decoration: none;\\n  color: #64D370; }\\n\\n.chekout_questions {\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_4___ + \");\\n  background-repeat: no-repeat;\\n  background-position: 1550px 0px;\\n  margin-bottom: 150px; }\\n\\n.chekout_questions .chekout_questions-container {\\n  display: grid;\\n  grid-template-columns: 1fr 2fr;\\n  grid-column-gap: 80px; }\\n\\n.chekout_questions .chekout_questions-container .chekout h3 {\\n  font-family: Comfortaa;\\n  font-style: normal;\\n  font-weight: bold;\\n  font-size: 30px;\\n  line-height: 33px;\\n  text-align: center;\\n  color: #020202; }\\n\\n.chekout_questions .chekout_questions-container .chekout .checkout-descr {\\n  font-family: Montserrat;\\n  font-style: normal;\\n  font-weight: normal;\\n  font-size: 16px;\\n  line-height: 133.8%;\\n  text-align: center;\\n  letter-spacing: 0.025em;\\n  color: #020202;\\n  margin-bottom: 30px; }\\n\\n.chekout_questions .chekout_questions-container .chekout form {\\n  margin-bottom: 50px; }\\n\\n.chekout_questions .chekout_questions-container .chekout form .user-name-container {\\n  display: grid;\\n  margin-bottom: 30px; }\\n\\n.chekout_questions .chekout_questions-container .chekout form .user-name-container label {\\n  font-family: Comfortaa;\\n  font-style: normal;\\n  font-weight: bold;\\n  font-size: 18px;\\n  line-height: 133.8%;\\n  letter-spacing: 0.025em;\\n  color: #020202;\\n  margin-bottom: 5px;\\n  margin-left: 20px; }\\n\\n.chekout_questions .chekout_questions-container .chekout form .user-name-container input {\\n  background: #DEE6EE;\\n  border-radius: 190px;\\n  width: calc(100% - 20px);\\n  padding-left: 20px;\\n  height: 40px; }\\n\\n.chekout_questions .chekout_questions-container .chekout form .user-name-container input::-webkit-input-placeholder {\\n  font-family: Montserrat;\\n  font-style: normal;\\n  font-weight: normal;\\n  font-size: 16px;\\n  line-height: 133.8%;\\n  letter-spacing: 0.025em;\\n  color: #020202; }\\n\\n.chekout_questions .chekout_questions-container .chekout form .user-name-container input::-moz-placeholder {\\n  font-family: Montserrat;\\n  font-style: normal;\\n  font-weight: normal;\\n  font-size: 16px;\\n  line-height: 133.8%;\\n  letter-spacing: 0.025em;\\n  color: #020202; }\\n\\n.chekout_questions .chekout_questions-container .chekout form .user-name-container input:-ms-input-placeholder {\\n  font-family: Montserrat;\\n  font-style: normal;\\n  font-weight: normal;\\n  font-size: 16px;\\n  line-height: 133.8%;\\n  letter-spacing: 0.025em;\\n  color: #020202; }\\n\\n.chekout_questions .chekout_questions-container .chekout form .user-name-container input::-ms-input-placeholder {\\n  font-family: Montserrat;\\n  font-style: normal;\\n  font-weight: normal;\\n  font-size: 16px;\\n  line-height: 133.8%;\\n  letter-spacing: 0.025em;\\n  color: #020202; }\\n\\n.chekout_questions .chekout_questions-container .chekout form .user-name-container input::placeholder {\\n  font-family: Montserrat;\\n  font-style: normal;\\n  font-weight: normal;\\n  font-size: 16px;\\n  line-height: 133.8%;\\n  letter-spacing: 0.025em;\\n  color: #020202; }\\n\\n.chekout_questions .chekout_questions-container .chekout form .user-name-container input:hover {\\n  border: 3px solid #64D370; }\\n\\n.chekout_questions .chekout_questions-container .chekout form .user_phone-container {\\n  display: grid;\\n  margin-bottom: 30px; }\\n\\n.chekout_questions .chekout_questions-container .chekout form .user_phone-container label {\\n  font-family: Comfortaa;\\n  font-style: normal;\\n  font-weight: bold;\\n  font-size: 18px;\\n  line-height: 133.8%;\\n  letter-spacing: 0.025em;\\n  color: #020202;\\n  margin-bottom: 5px;\\n  margin-left: 20px; }\\n\\n.chekout_questions .chekout_questions-container .chekout form .user_phone-container input {\\n  background: #DEE6EE;\\n  border-radius: 190px;\\n  width: calc(100% - 20px);\\n  padding-left: 20px;\\n  height: 40px; }\\n\\n.chekout_questions .chekout_questions-container .chekout form .user_phone-container input::-webkit-input-placeholder {\\n  font-family: Montserrat;\\n  font-style: normal;\\n  font-weight: normal;\\n  font-size: 16px;\\n  line-height: 133.8%;\\n  letter-spacing: 0.025em;\\n  color: #020202; }\\n\\n.chekout_questions .chekout_questions-container .chekout form .user_phone-container input::-moz-placeholder {\\n  font-family: Montserrat;\\n  font-style: normal;\\n  font-weight: normal;\\n  font-size: 16px;\\n  line-height: 133.8%;\\n  letter-spacing: 0.025em;\\n  color: #020202; }\\n\\n.chekout_questions .chekout_questions-container .chekout form .user_phone-container input:-ms-input-placeholder {\\n  font-family: Montserrat;\\n  font-style: normal;\\n  font-weight: normal;\\n  font-size: 16px;\\n  line-height: 133.8%;\\n  letter-spacing: 0.025em;\\n  color: #020202; }\\n\\n.chekout_questions .chekout_questions-container .chekout form .user_phone-container input::-ms-input-placeholder {\\n  font-family: Montserrat;\\n  font-style: normal;\\n  font-weight: normal;\\n  font-size: 16px;\\n  line-height: 133.8%;\\n  letter-spacing: 0.025em;\\n  color: #020202; }\\n\\n.chekout_questions .chekout_questions-container .chekout form .user_phone-container input::placeholder {\\n  font-family: Montserrat;\\n  font-style: normal;\\n  font-weight: normal;\\n  font-size: 16px;\\n  line-height: 133.8%;\\n  letter-spacing: 0.025em;\\n  color: #020202; }\\n\\n.chekout_questions .chekout_questions-container .chekout form .user_phone-container input:hover {\\n  border: 3px solid #64D370; }\\n\\n.chekout_questions .chekout_questions-container .chekout form .form-sale-container {\\n  margin-bottom: 15px; }\\n\\n.chekout_questions .chekout_questions-container .chekout form .form-sale-container label {\\n  font-family: Comfortaa;\\n  font-style: normal;\\n  font-weight: bold;\\n  font-size: 16px;\\n  line-height: 133.8%;\\n  letter-spacing: 0.025em;\\n  color: #020202;\\n  margin-left: 30px; }\\n\\n.chekout_questions .chekout_questions-container .chekout .phone-checkout-wrap {\\n  font-family: Comfortaa;\\n  font-style: normal;\\n  font-weight: bold;\\n  font-size: 22px;\\n  line-height: 133.8%;\\n  text-align: center;\\n  letter-spacing: 0.025em;\\n  border: 3px solid #64D370;\\n  -webkit-box-sizing: border-box;\\n  box-sizing: border-box;\\n  -webkit-filter: drop-shadow(0px 0px 40px rgba(86, 86, 86, 0.3));\\n  filter: drop-shadow(0px 0px 40px rgba(86, 86, 86, 0.3));\\n  border-radius: 190px;\\n  padding-top: 15px;\\n  padding-bottom: 15px;\\n  white-space: nowrap;\\n  -webkit-transition: ease-in-out 0.6s;\\n  transition: ease-in-out 0.6s;\\n  width: 100%; }\\n\\n.chekout_questions .chekout_questions-container .chekout .phone-checkout-wrap .phone-checkout {\\n  text-decoration: none;\\n  color: #64D370; }\\n\\n.chekout_questions .chekout_questions-container .chekout .phone-checkout-wrap:hover {\\n  cursor: pointer;\\n  -webkit-box-shadow: 0px 0px 30px #64D370;\\n  box-shadow: 0px 0px 30px #64D370;\\n  -webkit-transition: ease-in-out 0.6s;\\n  transition: ease-in-out 0.6s; }\\n\\n.chekout_questions .chekout_questions-container .chekout .checkout-choice {\\n  font-family: Comfortaa;\\n  font-style: normal;\\n  font-weight: bold;\\n  font-size: 22px;\\n  line-height: 133.8%;\\n  text-align: center;\\n  letter-spacing: 0.025em;\\n  color: #020202;\\n  margin-top: 25px;\\n  margin-bottom: 25px; }\\n\\n.chekout_questions .chekout_questions-container .questions h3 {\\n  font-family: Comfortaa;\\n  font-style: normal;\\n  font-weight: bold;\\n  font-size: 25px;\\n  line-height: 28px;\\n  text-align: center;\\n  color: #020202;\\n  margin-bottom: 35px; }\\n\\n.chekout_questions .chekout_questions-container .questions ul li {\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex;\\n  flex-direction: column;\\n  background: #F5FAFF;\\n  -webkit-box-shadow: 0px 0px 20px rgba(86, 86, 86, 0.2);\\n  box-shadow: 0px 0px 20px rgba(86, 86, 86, 0.2);\\n  border-radius: 30px;\\n  margin-bottom: 20px;\\n  transition: ease-in-out 0.5s; }\\n\\n.chekout_questions .chekout_questions-container .questions ul li .question-flex p {\\n  font-family: Montserrat;\\n  font-style: normal;\\n  font-weight: normal;\\n  font-size: 16px;\\n  line-height: 133.8%;\\n  letter-spacing: 0.025em;\\n  color: #020202;\\n  margin: 10px auto 9px 20px;\\n  transition: ease-in-out 0.5s; }\\n\\n.chekout_questions .chekout_questions-container .questions ul .active-question {\\n  background: #64D370; }\\n\\n.chekout_questions .chekout_questions-container .questions ul .active-question .question-flex p {\\n  color: #F5FAFF; }\\n\\n.chekout_questions .chekout_questions-container .questions ul li:hover {\\n  background-color: #64D370;\\n  transition: ease-in-out 0.5s; }\\n\\n.chekout_questions .chekout_questions-container .questions ul li:hover .question-flex p {\\n  color: #F5FAFF;\\n  transition: ease-in-out 0.5s; }\\n\\n.chekout_questions .chekout_questions-container .questions ul li .question-flex img {\\n  margin-right: 20px;\\n  transition: ease-in-out 0.5s; }\\n\\n.chekout_questions .chekout_questions-container .questions ul li:hover {\\n  cursor: pointer; }\\n\\nfooter {\\n  background: #F5FAFF;\\n  -webkit-box-shadow: 0px 0px 30px rgba(86, 86, 86, 0.25);\\n  box-shadow: 0px 0px 30px rgba(86, 86, 86, 0.25);\\n  margin-bottom: 100px; }\\n\\nfooter .footer-container {\\n  padding-top: 40px;\\n  padding-bottom: 40px;\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex;\\n  -webkit-box-pack: justify;\\n  -ms-flex-pack: justify;\\n  justify-content: space-between; }\\n\\nfooter .footer-container .footer-left ul {\\n  list-style-type: none;\\n  display: grid;\\n  grid-template-rows: repeat(5, 1fr);\\n  grid-row-gap: 15px; }\\n\\nfooter .footer-container .footer-left ul li {\\n  -webkit-transition: ease-in-out 0.6s;\\n  transition: ease-in-out 0.6s; }\\n\\nfooter .footer-container .footer-left ul li a {\\n  text-decoration: none;\\n  font-family: Comfortaa;\\n  font-style: normal;\\n  font-weight: bold;\\n  font-size: 20px;\\n  line-height: 22px;\\n  color: #020202;\\n  -webkit-transition: ease-in-out 0.6s;\\n  transition: ease-in-out 0.6s; }\\n\\nfooter .footer-container .footer-left ul li a:hover {\\n  -webkit-transition: ease-in-out 0.6s;\\n  transition: ease-in-out 0.6s;\\n  color: #64D370; }\\n\\nfooter .footer-container .footer-left ul li:hover {\\n  -webkit-transform: scale(1.06);\\n  transform: scale(1.06);\\n  -webkit-transition: ease-in-out 0.6s;\\n  transition: ease-in-out 0.6s; }\\n\\nfooter .footer-container .footer-middle a {\\n  text-decoration: none; }\\n\\nfooter .footer-container .footer-middle a .footer-logo-title {\\n  font-family: Comfortaa;\\n  font-style: normal;\\n  font-weight: normal;\\n  font-size: 20px;\\n  line-height: 115.8%;\\n  text-align: center;\\n  color: #020202; }\\n\\nfooter .footer-container .footer-right {\\n  text-align: right; }\\n\\nfooter .footer-container .footer-right ul {\\n  list-style-type: none;\\n  font-family: Comfortaa;\\n  font-style: normal;\\n  font-weight: bold;\\n  font-size: 20px;\\n  line-height: 22px;\\n  text-align: right; }\\n\\nfooter .footer-container .footer-right ul .cooperation {\\n  margin-bottom: 19px;\\n  -webkit-transition: ease-in-out 0.6s;\\n  transition: ease-in-out 0.6s; }\\n\\nfooter .footer-container .footer-right ul .cooperation a {\\n  color: #020202;\\n  text-decoration: none;\\n  -webkit-transition: ease-in-out 0.6s;\\n  transition: ease-in-out 0.6s; }\\n\\nfooter .footer-container .footer-right ul .cooperation:hover {\\n  -webkit-transform: scale(1.06);\\n  transform: scale(1.06);\\n  -webkit-transition: ease-in-out 0.6s;\\n  transition: ease-in-out 0.6s; }\\n\\nfooter .footer-container .footer-right ul .cooperation:hover a {\\n  color: #64D370;\\n  -webkit-transition: ease-in-out 0.6s;\\n  transition: ease-in-out 0.6s; }\\n\\nfooter .footer-container .footer-right ul .footer-faq {\\n  margin-bottom: 21px;\\n  -webkit-transition: ease-in-out 0.6s;\\n  transition: ease-in-out 0.6s; }\\n\\nfooter .footer-container .footer-right ul .footer-faq a {\\n  color: #020202;\\n  text-decoration: none;\\n  -webkit-transition: ease-in-out 0.6s;\\n  transition: ease-in-out 0.6s; }\\n\\nfooter .footer-container .footer-right ul .footer-faq:hover {\\n  -webkit-transform: scale(1.06);\\n  transform: scale(1.06);\\n  -webkit-transition: ease-in-out 0.6s;\\n  transition: ease-in-out 0.6s; }\\n\\nfooter .footer-container .footer-right ul .footer-faq:hover a {\\n  color: #64D370;\\n  -webkit-transition: ease-in-out 0.6s;\\n  transition: ease-in-out 0.6s; }\\n\\nfooter .footer-container .footer-right ul .footer-socials {\\n  display: grid;\\n  grid-template-columns: 1fr 1fr 1fr 1fr;\\n  grid-column-gap: 15px;\\n  margin-bottom: 15px; }\\n\\nfooter .footer-container .footer-right ul .footer-socials a img {\\n  -webkit-transition: ease-in-out 0.5s;\\n  transition: ease-in-out 0.5s; }\\n\\nfooter .footer-container .footer-right ul .footer-socials a img:hover {\\n  -webkit-transform: scale(1.1);\\n  transform: scale(1.1);\\n  -webkit-transition: ease-in-out 0.5s;\\n  transition: ease-in-out 0.5s; }\\n\\nfooter .footer-container .footer-right ul .footer-phone p {\\n  font-family: Montserrat;\\n  font-style: normal;\\n  font-weight: bold;\\n  font-size: 20px;\\n  line-height: 24px;\\n  color: #64D370; }\\n\\n.about_main-section {\\n  margin-bottom: 150px; }\\n\\n.about_main-section .main-section1 {\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex; }\\n\\n.about_main-section .main-section1 .content1 {\\n  padding-top: 210px;\\n  width: 530px; }\\n\\n.about_main-section .main-section1 .content1 .title1 {\\n  font-family: Comfortaa;\\n  font-style: normal;\\n  font-weight: bold;\\n  font-size: 32px;\\n  line-height: 36px;\\n  letter-spacing: 0.025em;\\n  color: #020202;\\n  margin-bottom: 40px; }\\n\\n.about_main-section .main-section1 .content1 .title1 span {\\n  color: #64D370; }\\n\\n.about_main-section .main-section1 .content1 .founder {\\n  margin-top: 15px; }\\n\\n.about_main-section .main-section1 .content1 .founder .text1 {\\n  font-family: Comfortaa;\\n  font-style: normal;\\n  font-weight: 300;\\n  font-size: 20px;\\n  line-height: 22px;\\n  color: #020202;\\n  margin-bottom: 20px; }\\n\\n.about_main-section .main-section1 .content1 .founder .text1-bold {\\n  font-family: Comfortaa;\\n  font-style: normal;\\n  font-weight: bold;\\n  font-size: 20px;\\n  line-height: 22px;\\n  color: #020202;\\n  margin-top: 40px; }\\n\\n.about_us .about-description {\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex;\\n  margin-bottom: 15px;\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_4___ + \");\\n  background-repeat: no-repeat;\\n  background-position: 0 0; }\\n\\n.about_us .about-description .description-picture {\\n  margin-top: 40px; }\\n\\n.about_us .about-description .description-picture img {\\n  max-width: 670px;\\n  width: 100%;\\n  -o-object-fit: cover;\\n  object-fit: cover; }\\n\\n.about_us .about-description .description-text-wrap {\\n  max-width: 780px;\\n  margin-right: 10%;\\n  margin-top: 120px;\\n  margin-left: 100px; }\\n\\n.about_us .about-description .description-text-wrap h3 {\\n  font-family: Comfortaa;\\n  font-style: normal;\\n  font-weight: bold;\\n  font-size: 32px;\\n  line-height: 36px;\\n  color: #020202;\\n  margin-bottom: 40px; }\\n\\n.about_us .about-description .description-text-wrap span {\\n  font-family: Comfortaa;\\n  font-style: normal;\\n  font-weight: bold;\\n  font-size: 32px;\\n  line-height: 36px;\\n  color: #020202;\\n  display: block;\\n  margin-top: 70px; }\\n\\n.about_us .about-description .description-text-wrap .text-content {\\n  font-family: Comfortaa;\\n  font-style: normal;\\n  font-weight: 300;\\n  font-size: 20px;\\n  line-height: 22px;\\n  color: #020202;\\n  margin-bottom: 20px; }\\n\\n.about_us .team-photo {\\n  margin-bottom: 40px; }\\n\\n.about_us .another-descripton {\\n  margin-bottom: 60px;\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex;\\n  -webkit-box-pack: end;\\n  -ms-flex-pack: end;\\n  justify-content: flex-end;\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_4___ + \");\\n  background-repeat: no-repeat;\\n  background-position: 1250px 0; }\\n\\n.about_us .another-descripton .another-descripton-text {\\n  margin-right: 100px;\\n  margin-left: 10%;\\n  margin-top: 40px;\\n  max-width: 780px; }\\n\\n.about_us .another-descripton .another-descripton-text h3 {\\n  font-family: Comfortaa;\\n  font-style: normal;\\n  font-weight: bold;\\n  font-size: 32px;\\n  line-height: 36px;\\n  color: #020202;\\n  margin-bottom: 40px; }\\n\\n.about_us .another-descripton .another-descripton-text .another-text-content {\\n  font-family: Comfortaa;\\n  font-style: normal;\\n  font-weight: 300;\\n  font-size: 20px;\\n  line-height: 22px;\\n  color: #020202;\\n  margin-bottom: 20px; }\\n\\n.about_us .another-descripton .another-descripton-text .another-text-content-bold {\\n  font-family: Comfortaa;\\n  font-style: normal;\\n  font-weight: bold;\\n  font-size: 20px;\\n  line-height: 22px;\\n  color: #020202;\\n  margin-top: 40px;\\n  margin-bottom: 30px; }\\n\\n.about_us .another-descripton .another-descripton-text span {\\n  font-family: Comfortaa;\\n  font-style: normal;\\n  font-weight: bold;\\n  font-size: 32px;\\n  line-height: 36px;\\n  color: #020202; }\\n\\n.about_us .another-descripton .another-descripton-text .socials {\\n  margin-top: 15px; }\\n\\n.about_us .another-descripton .another-descripton-text .socials a img {\\n  margin-right: 15px;\\n  -webkit-transition: ease-in-out 0.5s;\\n  transition: ease-in-out 0.5s; }\\n\\n.about_us .another-descripton .another-descripton-text .socials a img:hover {\\n  -webkit-transform: scale(1.1);\\n  transform: scale(1.1);\\n  -webkit-transition: ease-in-out 0.5s;\\n  transition: ease-in-out 0.5s; }\\n\\n.about_us .another-descripton .another-descripton-text .socials .socials-descr {\\n  font-family: Montserrat;\\n  font-style: normal;\\n  font-weight: normal;\\n  font-size: 20px;\\n  line-height: 24px;\\n  color: #020202;\\n  display: inline-block;\\n  position: relative;\\n  bottom: 7px; }\\n\\n.about_us .another-descripton .another-descripton-picture img {\\n  max-width: 707px;\\n  width: 100%;\\n  -o-object-fit: cover;\\n  object-fit: cover; }\\n\\n.cards-switcher {\\n  margin-left: 30px;\\n  margin-bottom: 50px;\\n  margin-top: 50px; }\\n\\n.cards-switcher ul {\\n  list-style-type: none;\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex; }\\n\\n.cards-switcher ul li {\\n  margin-left: 20px;\\n  background: #DEE6EE;\\n  border-radius: 50px;\\n  padding: 7px 15px;\\n  -webkit-transition: ease-in-out 0.5s;\\n  transition: ease-in-out 0.5s;\\n  color: #020202; }\\n\\n.cards-switcher ul .currentPageMarker {\\n  background: #64D370;\\n  -webkit-transition: ease-in-out 0.5s;\\n  transition: ease-in-out 0.5s;\\n  color: #F5FAFF;\\n  box-shadow: 0px 0px 30px #64D370; }\\n\\n.cards-switcher ul .prev-page img {\\n  -webkit-transform: rotate(180deg);\\n  transform: rotate(180deg);\\n  margin-top: 2px; }\\n\\n.cards-switcher ul .next-page img {\\n  margin-top: 2px; }\\n\\n.cards-switcher ul li {\\n  font-family: Montserrat;\\n  font-style: normal;\\n  font-weight: 500;\\n  font-size: 14px;\\n  line-height: 17px;\\n  text-align: center;\\n  letter-spacing: 0.025em;\\n  display: block;\\n  margin-top: 2px; }\\n\\n.cards-switcher ul li:hover {\\n  cursor: pointer;\\n  background: #64D370;\\n  -webkit-transition: ease-in-out 0.5s;\\n  transition: ease-in-out 0.5s;\\n  color: #F5FAFF; }\\n\\n.card .card-article {\\n  width: 100%;\\n  -o-object-fit: cover;\\n  object-fit: cover;\\n  -webkit-filter: drop-shadow(0px 0px 20px rgba(86, 86, 86, 0.5));\\n  filter: drop-shadow(0px 0px 20px rgba(86, 86, 86, 0.5));\\n  border-radius: 30px;\\n  height: 190px; }\\n\\n.card h3 {\\n  font-family: Comfortaa;\\n  font-style: normal;\\n  font-weight: bold;\\n  font-size: 16px;\\n  line-height: 18px;\\n  color: #020202;\\n  margin-top: 20px;\\n  margin-bottom: 20px;\\n  margin-left: 15px; }\\n\\n.card .card-foot {\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex;\\n  -webkit-box-pack: justify;\\n  -ms-flex-pack: justify;\\n  justify-content: space-between; }\\n\\n.card .card-foot .publication-date {\\n  font-family: Montserrat;\\n  font-style: normal;\\n  font-weight: 500;\\n  font-size: 14px;\\n  line-height: 133.8%;\\n  text-align: center;\\n  letter-spacing: 0.025em;\\n  color: #B5C2CE;\\n  margin-top: 10px;\\n  margin-left: 15px; }\\n\\n.card .card-foot .more-card-info {\\n  text-decoration: none;\\n  font-family: Montserrat;\\n  font-style: normal;\\n  font-weight: 500;\\n  font-size: 14px;\\n  line-height: 133.8%;\\n  text-align: center;\\n  letter-spacing: 0.025em;\\n  color: #64D370;\\n  border: 1.5px solid #64D370;\\n  -webkit-box-sizing: border-box;\\n  box-sizing: border-box;\\n  border-radius: 190px;\\n  padding: 6px 20px 10px 20px;\\n  margin-right: 15px;\\n  -webkit-transition: ease-in-out 0.5s;\\n  transition: ease-in-out 0.5s; }\\n\\n.card .card-foot .more-card-info p {\\n  display: inline-block;\\n  margin-right: 10px; }\\n\\n.card .card-foot .more-card-info img {\\n  position: relative;\\n  top: 4px; }\\n\\n.card .card-foot .more-card-info:hover {\\n  -webkit-box-shadow: 0px 0px 30px #64D370;\\n  box-shadow: 0px 0px 30px #64D370;\\n  -webkit-transition: ease-in-out 0.5s;\\n  transition: ease-in-out 0.5s; }\\n\\n.blog-main-section .cards-container .cards {\\n  display: grid;\\n  grid-template-columns: 1fr 1fr;\\n  grid-column-gap: 20px; }\\n\\n.intro-right {\\n  margin-right: 20px; }\\n\\n.intro-right p {\\n  font-family: Comfortaa;\\n  font-style: normal;\\n  font-weight: bold;\\n  font-size: 18px;\\n  line-height: 20px;\\n  color: #020202;\\n  display: inline-block;\\n  position: relative;\\n  top: -7px; }\\n\\n.intro-right img {\\n  margin-left: 15px;\\n  -webkit-transition: ease-in-out 0.6s;\\n  transition: ease-in-out 0.6s; }\\n\\n.intro-right img:hover {\\n  -webkit-transform: scale(1.06);\\n  transform: scale(1.06);\\n  -webkit-transition: ease-in-out 0.6s;\\n  transition: ease-in-out 0.6s; }\\n\\n.go_back {\\n  text-decoration: none;\\n  color: #020202; }\\n\\n.go_back img {\\n  -webkit-transform: rotate(180deg);\\n  transform: rotate(180deg);\\n  background: #DEE6EE;\\n  border-radius: 50px;\\n  padding: 10px 15px;\\n  -webkit-transition: ease-in-out 0.5s;\\n  transition: ease-in-out 0.5s; }\\n\\n.go_back p {\\n  font-family: Comfortaa;\\n  font-style: normal;\\n  font-weight: bold;\\n  font-size: 18px;\\n  line-height: 20px;\\n  display: inline-block;\\n  margin-left: 15px;\\n  position: relative;\\n  bottom: 10px;\\n  -webkit-transition: ease-in-out 0.5s;\\n  transition: ease-in-out 0.5s; }\\n\\n.go_back:hover img {\\n  -webkit-transform: scale(1.06) rotate(180deg);\\n  transform: scale(1.06) rotate(180deg);\\n  background: #64D370;\\n  -webkit-transition: ease-in-out 0.5s;\\n  transition: ease-in-out 0.5s; }\\n\\n.go_back:hover p {\\n  color: #64D370;\\n  -webkit-transition: ease-in-out 0.5s;\\n  transition: ease-in-out 0.5s; }\\n\\n.article-modal {\\n  background: rgba(245, 250, 255, 0.9);\\n  width: 100%;\\n  position: fixed;\\n  top: 0;\\n  height: 100vh;\\n  padding-top: 60px;\\n  z-index: 200;\\n  overflow: auto; }\\n\\n.article-modal .article .food-photo_container img {\\n  width: 100%;\\n  -o-object-fit: cover;\\n  object-fit: cover;\\n  border-radius: 30px;\\n  -webkit-filter: drop-shadow(0px 0px 20px rgba(86, 86, 86, 0.5));\\n  filter: drop-shadow(0px 0px 20px rgba(86, 86, 86, 0.5));\\n  max-height: 500px; }\\n\\n.article-modal .article .article-intro .intro-info {\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex;\\n  -webkit-box-pack: justify;\\n  -ms-flex-pack: justify;\\n  justify-content: space-between;\\n  margin-top: 40px; }\\n\\n.article-modal .article .article-intro .intro-info .intro-left {\\n  margin-left: 20px; }\\n\\n.article-modal .article .article-intro .intro-info .intro-left a img {\\n  -webkit-transform: rotate(180deg);\\n  transform: rotate(180deg);\\n  background: #DEE6EE;\\n  border-radius: 50px;\\n  padding: 10px 15px;\\n  -webkit-transition: ease-in-out 0.5s;\\n  transition: ease-in-out 0.5s; }\\n\\n.article-modal .article .article-intro .intro-info .intro-left a img:hover {\\n  -webkit-transform: scale(1.06) rotate(180deg);\\n  transform: scale(1.06) rotate(180deg);\\n  background: #64D370;\\n  -webkit-transition: ease-in-out 0.5s;\\n  transition: ease-in-out 0.5s; }\\n\\n.article-modal .article .article-intro .intro-info .intro-left h3 {\\n  font-family: Comfortaa;\\n  font-style: normal;\\n  font-weight: bold;\\n  font-size: 25px;\\n  line-height: 28px;\\n  color: #020202;\\n  display: inline-block;\\n  margin-left: 30px;\\n  position: relative;\\n  top: -7px; }\\n\\n.article-modal .article .article-intro .publication-date {\\n  font-family: Montserrat;\\n  font-style: normal;\\n  font-weight: 500;\\n  font-size: 18px;\\n  line-height: 133.8%;\\n  letter-spacing: 0.025em;\\n  color: #B5C2CE;\\n  margin-top: 15px;\\n  margin-left: 90px;\\n  margin-bottom: 40px; }\\n\\n.article-modal .article .article-text p {\\n  font-family: Montserrat;\\n  font-style: normal;\\n  font-weight: normal;\\n  font-size: 18px;\\n  line-height: 22px;\\n  color: #020202;\\n  margin-bottom: 40px;\\n  margin-left: 100px;\\n  margin-right: 100px; }\\n\\n.article-modal .article .article-text .atricle-food-1 {\\n  margin-bottom: 60px; }\\n\\n.article-modal .article .article-text .atricle-food-1 img {\\n  height: 430px;\\n  -webkit-filter: drop-shadow(0px 0px 20px rgba(86, 86, 86, 0.5));\\n  filter: drop-shadow(0px 0px 20px rgba(86, 86, 86, 0.5));\\n  border-radius: 30px;\\n  width: 100%;\\n  -o-object-fit: cover;\\n  object-fit: cover; }\\n\\n.article-modal .article .article-text .atricle-food-2 {\\n  margin-bottom: 60px; }\\n\\n.article-modal .article .article-text .atricle-food-2 img {\\n  height: 430px;\\n  -webkit-filter: drop-shadow(0px 0px 20px rgba(86, 86, 86, 0.5));\\n  filter: drop-shadow(0px 0px 20px rgba(86, 86, 86, 0.5));\\n  border-radius: 30px;\\n  width: 100%;\\n  -o-object-fit: cover;\\n  object-fit: cover; }\\n\\n.article-modal .article .article-foot {\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex;\\n  -webkit-box-pack: justify;\\n  -ms-flex-pack: justify;\\n  justify-content: space-between;\\n  margin-top: 40px; }\\n\\n.article-modal .article .article-foot .article-foot-left {\\n  position: relative;\\n  top: 6px; }\\n\\n.article-modal .article .more-articles {\\n  margin-top: 110px;\\n  margin-bottom: 100px; }\\n\\n.article-modal .article .more-articles h2 {\\n  font-family: Comfortaa;\\n  font-style: normal;\\n  font-weight: bold;\\n  font-size: 18px;\\n  line-height: 20px;\\n  color: #020202;\\n  text-align: center;\\n  margin-bottom: 30px; }\\n\\n.article-modal .article .more-articles .more-articles-cards {\\n  display: grid;\\n  grid-template-columns: 1fr 1fr 1fr;\\n  grid-column-gap: 25px; }\\n\\n.wrap-title {\\n  width: 100%;\\n  background: #F5FAFF;\\n  -webkit-box-shadow: 0px 0px 40px rgba(86, 86, 86, 0.3);\\n  box-shadow: 0px 0px 40px rgba(86, 86, 86, 0.3); }\\n\\n.wrap-title h2 {\\n  font-family: Comfortaa;\\n  font-style: normal;\\n  font-weight: bold;\\n  font-size: 40px;\\n  line-height: 45px;\\n  letter-spacing: 0.025em;\\n  color: #020202;\\n  text-transform: uppercase;\\n  text-align: center;\\n  padding: 30px; }\\n\\n.gastro-shop .section-title {\\n  font-family: Comfortaa;\\n  font-style: normal;\\n  font-weight: bold;\\n  font-size: 30px;\\n  line-height: 35px;\\n  letter-spacing: 0.025em;\\n  color: #020202;\\n  text-align: center;\\n  margin-top: 20px; }\\n\\n.gastro-shop .gastro-shop_cards {\\n  display: grid;\\n  grid-template-columns: 1fr 1fr;\\n  grid-column-gap: 20px;\\n  margin-top: 40px; }\\n\\n.gastro-shop .gastro-shop_cards .gastro-shop_card .shop_card-image {\\n  height: 290px;\\n  width: 100%;\\n  background-size: 150%;\\n  -webkit-filter: drop-shadow(0px 0px 20px rgba(86, 86, 86, 0.5));\\n  filter: drop-shadow(0px 0px 20px rgba(86, 86, 86, 0.5));\\n  border-radius: 30px;\\n  -webkit-transform: matrix(-1, 0, 0, 1, 0, 0);\\n  transform: matrix(-1, 0, 0, 1, 0, 0); }\\n\\n.gastro-shop .gastro-shop_cards .gastro-shop_card .candy {\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_5___ + \");\\n  background-position: -260px 0px; }\\n\\n.gastro-shop .gastro-shop_cards .gastro-shop_card .granola {\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_6___ + \");\\n  background-position: -210px -295px; }\\n\\n.gastro-shop .gastro-shop_cards .gastro-shop_card .gastro-card-descr {\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex;\\n  -webkit-box-pack: justify;\\n  -ms-flex-pack: justify;\\n  justify-content: space-between;\\n  margin: 20px; }\\n\\n.gastro-shop .gastro-shop_cards .gastro-shop_card .gastro-card-descr h3 {\\n  font-family: Comfortaa;\\n  font-style: normal;\\n  font-weight: bold;\\n  font-size: 20px;\\n  line-height: 22px;\\n  color: #020202;\\n  margin-top: 10px; }\\n\\n.gastro-shop .gastro-shop_cards .gastro-shop_card .gastro-card-descr a {\\n  text-decoration: none;\\n  font-family: Montserrat;\\n  font-style: normal;\\n  font-weight: 500;\\n  font-size: 14px;\\n  line-height: 133.8%;\\n  text-align: center;\\n  letter-spacing: 0.025em;\\n  color: #64D370;\\n  border: 1.5px solid #64D370;\\n  border-radius: 190px;\\n  padding: 8px 20px;\\n  -webkit-transition: ease-in-out 0.5s;\\n  transition: ease-in-out 0.5s; }\\n\\n.gastro-shop .gastro-shop_cards .gastro-shop_card .gastro-card-descr a p {\\n  display: inline-block;\\n  position: relative;\\n  bottom: 3px;\\n  margin-right: 5px; }\\n\\n.gastro-shop .gastro-shop_cards .gastro-shop_card .gastro-card-descr a:hover {\\n  -webkit-box-shadow: 0px 0px 30px #64D370;\\n  box-shadow: 0px 0px 30px #64D370;\\n  -webkit-transition: ease-in-out 0.5s;\\n  transition: ease-in-out 0.5s; }\\n\\n.arrange-wrap {\\n  font-family: Montserrat;\\n  font-style: normal;\\n  font-weight: 500;\\n  font-size: 25px;\\n  line-height: 133.8%;\\n  text-align: center;\\n  letter-spacing: 0.025em;\\n  padding: 10px 35px;\\n  background: #64D370;\\n  border-radius: 190px;\\n  -webkit-transition: ease-in-out 0.5s;\\n  transition: ease-in-out 0.5s; }\\n\\n.arrange-wrap .arrange {\\n  text-decoration: none;\\n  color: #F5FAFF; }\\n\\n.arrange-wrap:hover {\\n  -webkit-box-shadow: 0px 0px 30px #64D370;\\n  box-shadow: 0px 0px 30px #64D370;\\n  -webkit-transition: ease-in-out 0.5s;\\n  transition: ease-in-out 0.5s;\\n  cursor: pointer; }\\n\\n.candy-items {\\n  background: rgba(245, 250, 255, 0.9);\\n  width: 100%;\\n  height: 100vh;\\n  position: fixed;\\n  top: 0;\\n  padding-top: 60px;\\n  z-index: 200;\\n  overflow: auto; }\\n\\n.candy-items .candy-content-wrap .candy-buttons {\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex;\\n  -webkit-box-pack: justify;\\n  -ms-flex-pack: justify;\\n  justify-content: space-between;\\n  margin-left: 30px;\\n  margin-right: 30px;\\n  margin-bottom: 40px; }\\n\\n.candy-items .candy-content-wrap .candy-content {\\n  display: grid;\\n  grid-template-columns: 1fr 1fr;\\n  grid-template-rows: 1fr 1fr;\\n  grid-column-gap: 20px;\\n  grid-row-gap: 60px; }\\n\\n.candy-items .candy-content-wrap .candy-content .candy-card .candy-image {\\n  width: 100%;\\n  -o-object-fit: cover;\\n  object-fit: cover;\\n  -webkit-filter: drop-shadow(0px 0px 20px rgba(86, 86, 86, 0.5));\\n  filter: drop-shadow(0px 0px 20px rgba(86, 86, 86, 0.5));\\n  border-radius: 30px;\\n  height: 190px; }\\n\\n.candy-items .candy-content-wrap .candy-content .candy-card h4 {\\n  font-family: Comfortaa;\\n  font-style: normal;\\n  font-weight: bold;\\n  font-size: 18px;\\n  line-height: 20px;\\n  color: #020202;\\n  margin-top: 30px;\\n  margin-bottom: 20px;\\n  margin-left: 20px; }\\n\\n.candy-items .candy-content-wrap .candy-content .candy-card .composition {\\n  font-family: Montserrat;\\n  font-style: normal;\\n  font-weight: 500;\\n  font-size: 14px;\\n  line-height: 133.8%;\\n  letter-spacing: 0.025em;\\n  color: #020202;\\n  margin-bottom: 10px;\\n  margin-left: 20px; }\\n\\n.candy-items .candy-content-wrap .candy-content .candy-card .pfc {\\n  margin-left: 20px;\\n  margin-bottom: 30px; }\\n\\n.candy-items .candy-content-wrap .candy-content .candy-card .pfc ul {\\n  list-style-type: none;\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex; }\\n\\n.candy-items .candy-content-wrap .candy-content .candy-card .pfc ul li {\\n  font-family: Comfortaa;\\n  font-style: normal;\\n  font-weight: bold;\\n  font-size: 18px;\\n  line-height: 100%;\\n  color: #020202;\\n  margin-right: 30px; }\\n\\n.candy-items .candy-content-wrap .candy-content .candy-card .add-item {\\n  margin-left: 20px;\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex; }\\n\\n.candy-items .candy-content-wrap .candy-content .candy-card .add-item .cost {\\n  font-family: Montserrat;\\n  font-style: normal;\\n  font-weight: bold;\\n  font-size: 20px;\\n  line-height: 100%;\\n  color: #64D370;\\n  display: inline-block;\\n  margin-left: 25px;\\n  padding-top: 7px; }\\n\\n.add {\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex;\\n  font-family: Montserrat;\\n  font-style: normal;\\n  font-weight: normal;\\n  font-size: 20px;\\n  line-height: 24px;\\n  text-align: center;\\n  letter-spacing: 0.025em;\\n  color: #020202; }\\n\\n.add .minus {\\n  display: inline-block;\\n  background: #DEE6EE;\\n  border-radius: 50px;\\n  padding: 4px 11px;\\n  margin-right: 15px;\\n  -webkit-transition: ease-in-out 0.5s;\\n  transition: ease-in-out 0.5s; }\\n\\n.add .minus:hover {\\n  cursor: pointer;\\n  color: #F5FAFF;\\n  background: #64D370;\\n  -webkit-transition: ease-in-out 0.5s;\\n  transition: ease-in-out 0.5s; }\\n\\n.add .amount {\\n  font-weight: bold;\\n  color: #64D370;\\n  position: relative;\\n  top: 5px; }\\n\\n.add .plus {\\n  display: inline-block;\\n  background: #DEE6EE;\\n  border-radius: 50px;\\n  padding: 3px 9px;\\n  margin-left: 15px;\\n  -webkit-transition: ease-in-out 0.5s;\\n  transition: ease-in-out 0.5s; }\\n\\n.add .plus:hover {\\n  cursor: pointer;\\n  color: #F5FAFF;\\n  background: #64D370;\\n  -webkit-transition: ease-in-out 0.5s;\\n  transition: ease-in-out 0.5s; }\\n\\n.bus-lunch {\\n  margin-top: 50px;\\n  padding-bottom: 100px; }\\n\\n.bus-lunch .lunch-arrange {\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex;\\n  -webkit-box-pack: end;\\n  -ms-flex-pack: end;\\n  justify-content: flex-end;\\n  margin-right: 30px;\\n  margin-bottom: 20px; }\\n\\n.bus-lunch .lunch-cards {\\n  display: grid;\\n  grid-template-columns: 1fr 1fr;\\n  grid-column-gap: 20px; }\\n\\n.bus-lunch .lunch-cards .lunch-card .lunch {\\n  max-width: 580px; }\\n\\n.bus-lunch .lunch-cards .lunch-card .lunch .lunch-photo-1 {\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_7___ + \"); }\\n\\n.bus-lunch .lunch-cards .lunch-card .lunch .lunch-photo-2 {\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_8___ + \"); }\\n\\n.bus-lunch .lunch-cards .lunch-card .lunch .lunch-photo-1,\\n.bus-lunch .lunch-cards .lunch-card .lunch .lunch-photo-2 {\\n  background-position: 0 -310px;\\n  background-repeat: no-repeat;\\n  background-size: cover;\\n  width: 100%;\\n  height: 290px;\\n  -webkit-filter: drop-shadow(0px 0px 20px rgba(86, 86, 86, 0.5));\\n  filter: drop-shadow(0px 0px 20px rgba(86, 86, 86, 0.5));\\n  border-radius: 30px; }\\n\\n.bus-lunch .lunch-cards .lunch-card .lunch .lunch-name {\\n  display: grid;\\n  grid-template-columns: 2fr 1fr 1fr;\\n  margin: 20px 45px 20px 10px; }\\n\\n.bus-lunch .lunch-cards .lunch-card .lunch .lunch-name .lunch-title {\\n  font-family: Comfortaa;\\n  font-style: normal;\\n  font-weight: bold;\\n  font-size: 18px;\\n  line-height: 20px;\\n  color: #020202; }\\n\\n.bus-lunch .lunch-cards .lunch-card .lunch .lunch-name p {\\n  font-family: Comfortaa;\\n  font-style: normal;\\n  font-weight: bold;\\n  font-size: 18px;\\n  line-height: 133.8%;\\n  letter-spacing: 0.025em;\\n  color: #64D370; }\\n\\n.bus-lunch .lunch-cards .lunch-card .lunch-composition {\\n  margin-left: 10px;\\n  margin-bottom: 20px; }\\n\\n.bus-lunch .lunch-cards .lunch-card .lunch-composition p {\\n  font-family: Montserrat;\\n  font-style: normal;\\n  font-weight: 500;\\n  font-size: 14px;\\n  line-height: 133.8%;\\n  letter-spacing: 0.025em;\\n  color: #020202; }\\n\\n.bus-lunch .lunch-cards .lunch-card .add-lunch-item {\\n  margin-left: 10px;\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex; }\\n\\n.bus-lunch .lunch-cards .lunch-card .add-lunch-item .lunch-add-item {\\n  margin-right: 30px; }\\n\\n.bus-lunch .lunch-cards .lunch-card .add-lunch-item .lunch-cost {\\n  font-family: Montserrat;\\n  font-style: normal;\\n  font-weight: bold;\\n  font-size: 20px;\\n  line-height: 100%;\\n  color: #64D370;\\n  position: relative;\\n  top: 7px; }\\n\\n.contact {\\n  position: fixed;\\n  right: 40px;\\n  bottom: 40px; }\\n\\n.contact .inactive-contact .white-circle {\\n  position: relative; }\\n\\n.contact .inactive-contact .white-circle .inactive-messages {\\n  position: relative;\\n  top: 10px;\\n  left: 15px;\\n  background: #F5FAFF;\\n  -webkit-box-shadow: 0px 0px 30px rgba(86, 86, 86, 0.25);\\n  box-shadow: 0px 0px 30px rgba(86, 86, 86, 0.25);\\n  border-radius: 150px;\\n  padding: 22px; }\\n\\n.contact .inactive-contact .white-circle .inactive-dots {\\n  position: relative;\\n  top: -50px;\\n  left: 48px; }\\n\\n.contact .inactive-contact .inactive-tg {\\n  position: relative;\\n  top: -20px;\\n  left: -10px; }\\n\\n.order-modal {\\n  background: rgba(2, 2, 2, 0.7);\\n  width: 100%;\\n  height: 100vh;\\n  position: fixed;\\n  top: 0;\\n  padding-top: 280px;\\n  z-index: 205; }\\n\\n.order-modal .order-modal-inner .close-btn {\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex;\\n  -webkit-box-pack: end;\\n  -ms-flex-pack: end;\\n  justify-content: flex-end;\\n  margin-bottom: 50px; }\\n\\n.order-modal .order-modal-inner .order-cards {\\n  display: grid;\\n  grid-template-columns: repeat(3, 1fr);\\n  grid-template-rows: 1fr 1fr;\\n  grid-column-gap: 20px;\\n  grid-row-gap: 30px;\\n  margin-bottom: 30px; }\\n\\n.order-modal .order-modal-inner .order-cards .order-modal-card .modal-card-wrap {\\n  background: rgba(245, 250, 255, 0.7);\\n  border-radius: 30px;\\n  padding: 25px 45px 25px 30px; }\\n\\n.order-modal .order-modal-inner .order-cards .order-modal-card .modal-card-wrap .order-title {\\n  font-family: Comfortaa;\\n  font-style: normal;\\n  font-weight: bold;\\n  font-size: 16px;\\n  line-height: 18px;\\n  color: #020202;\\n  margin-bottom: 15px; }\\n\\n.order-modal .order-modal-inner .order-cards .order-modal-card .modal-card-wrap .order-footer {\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex;\\n  -webkit-box-pack: justify;\\n  -ms-flex-pack: justify;\\n  justify-content: space-between; }\\n\\n.order-modal .order-modal-inner .order-cards .order-modal-card .modal-card-wrap .order-footer .modal-card-cost {\\n  font-family: Montserrat;\\n  font-style: normal;\\n  font-weight: bold;\\n  font-size: 20px;\\n  line-height: 24px;\\n  letter-spacing: 0.025em;\\n  color: #020202;\\n  position: relative;\\n  top: 5px; }\\n\\n.order-modal .order-modal-inner .order-buttons {\\n  display: grid;\\n  grid-template-columns: 2fr 1fr;\\n  grid-column-gap: 30px; }\\n\\n.order-modal .order-modal-inner .order-buttons .final-itmes {\\n  font-family: Montserrat;\\n  font-style: normal;\\n  font-weight: bold;\\n  font-size: 20px;\\n  line-height: 100%;\\n  color: #F5FAFF;\\n  border: 3px solid #F5FAFF;\\n  -webkit-box-sizing: border-box;\\n  box-sizing: border-box;\\n  -webkit-filter: drop-shadow(0px 0px 20px #F5FAFF);\\n  filter: drop-shadow(0px 0px 20px #F5FAFF);\\n  border-radius: 190px;\\n  display: inline-block;\\n  padding: 14px 40px; }\\n\\n.form-modal {\\n  background: rgba(2, 2, 2, 0.7);\\n  width: 100%;\\n  height: 100vh;\\n  position: fixed;\\n  top: 0;\\n  padding-top: 5vh;\\n  z-index: 300;\\n  overflow: auto; }\\n\\n.form-modal .form-modal-inner .form-modal-top {\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex;\\n  -webkit-box-pack: justify;\\n  -ms-flex-pack: justify;\\n  justify-content: space-between;\\n  margin-bottom: 40px; }\\n\\n.form-modal .form-modal-inner .form-modal-top p {\\n  font-family: Montserrat;\\n  font-style: normal;\\n  font-weight: bold;\\n  font-size: 16px;\\n  line-height: 133.8%;\\n  letter-spacing: 0.025em;\\n  color: #F5FAFF;\\n  display: inline-block;\\n  background: #FE3666;\\n  -webkit-box-shadow: 0px 0px 30px #FC3766;\\n  box-shadow: 0px 0px 30px #FC3766;\\n  border-radius: 190px;\\n  padding: 9px 25px 10px 20px; }\\n\\n.form-modal .form-modal-inner .form-modal-top .warning-hide {\\n  visibility: hidden; }\\n\\n.form-modal .form-modal-inner .form-modal-middle {\\n  display: grid;\\n  grid-template-columns: 1fr 1fr;\\n  grid-column-gap: 20px; }\\n\\n.form-modal .form-modal-inner .form-modal-middle .modal-left form {\\n  display: grid;\\n  grid-template-rows: repeat(4, 1fr);\\n  grid-template-columns: repeat(4, 1fr);\\n  grid-column-gap: 10px;\\n  grid-row-gap: 20px; }\\n\\n.form-modal .form-modal-inner .form-modal-middle .modal-left form .modal-userName {\\n  grid-column-start: span 4; }\\n\\n.form-modal .form-modal-inner .form-modal-middle .modal-left form .modal-userPhone {\\n  grid-column-start: span 4; }\\n\\n.form-modal .form-modal-inner .form-modal-middle .modal-left form .modal-street {\\n  grid-column-start: span 2; }\\n\\n.form-modal .form-modal-inner .form-modal-middle .modal-left form input {\\n  font-family: Montserrat;\\n  font-style: normal;\\n  font-weight: normal;\\n  font-size: 16px;\\n  line-height: 133.8%;\\n  letter-spacing: 0.025em;\\n  color: #020202;\\n  height: 40px;\\n  padding-left: 20px;\\n  background: #F5FAFF;\\n  border-radius: 190px;\\n  width: calc(100% - 20px); }\\n\\n.form-modal .form-modal-inner .form-modal-middle .modal-left form input:hover {\\n  border: 3px solid #64D370; }\\n\\n.form-modal .form-modal-inner .form-modal-middle .modal-right ul li {\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex;\\n  background: #F5FAFF;\\n  -webkit-box-shadow: 0px 0px 20px rgba(86, 86, 86, 0.2);\\n  box-shadow: 0px 0px 20px rgba(86, 86, 86, 0.2);\\n  border-radius: 190px;\\n  margin-bottom: 20px; }\\n\\n.form-modal .form-modal-inner .form-modal-middle .modal-right ul li p {\\n  font-family: Montserrat;\\n  font-style: normal;\\n  font-weight: normal;\\n  font-size: 16px;\\n  line-height: 133.8%;\\n  letter-spacing: 0.025em;\\n  color: #020202;\\n  margin: 10px auto 9px 20px; }\\n\\n.form-modal .form-modal-inner .form-modal-middle .modal-right ul li img {\\n  margin-right: 20px; }\\n\\n.form-modal .form-modal-inner .form-modal-middle .modal-right ul li:hover {\\n  cursor: pointer; }\\n\\n.form-modal .form-modal-inner .form-modal-foot .conditions-container {\\n  margin-top: 60px;\\n  margin-bottom: 55px; }\\n\\n.form-modal .form-modal-inner .form-modal-foot .conditions-container label {\\n  color: #F5FAFF; }\\n\\n.form-modal .form-modal-inner .form-modal-foot .form-buttons {\\n  display: grid;\\n  grid-template-columns: 1fr 1.5fr;\\n  grid-column-gap: 40px; }\\n\\n.form-modal .form-modal-inner .form-modal-foot .form-buttons .buttons-left {\\n  display: grid;\\n  grid-template-rows: 1fr 1fr;\\n  grid-row-gap: 30px; }\\n\\n.form-modal .form-modal-inner .form-modal-foot .form-buttons .buttons-left .form-btn {\\n  font-family: Comfortaa;\\n  font-style: normal;\\n  font-weight: bold;\\n  font-size: 24px;\\n  line-height: 133.8%;\\n  letter-spacing: 0.025em;\\n  border-radius: 190px;\\n  text-align: center;\\n  color: #F5FAFF;\\n  background: #64D370;\\n  padding: 14px 96px;\\n  transition: ease-in-out 0.6s; }\\n\\n.form-modal .form-modal-inner .form-modal-foot .form-buttons .buttons-left .form-btn:hover {\\n  -webkit-box-shadow: 0px 0px 30px #64D370;\\n  box-shadow: 0px 0px 30px #64D370;\\n  cursor: pointer;\\n  transition: ease-in-out 0.6s; }\\n\\n.form-modal .form-modal-inner .form-modal-foot .form-buttons .buttons-left .order-info {\\n  display: inline-block;\\n  font-family: Montserrat;\\n  font-style: normal;\\n  font-weight: bold;\\n  font-size: 20px;\\n  line-height: 100%;\\n  text-align: center;\\n  color: #F5FAFF;\\n  border: 3px solid #F5FAFF;\\n  -webkit-box-sizing: border-box;\\n  box-sizing: border-box;\\n  -webkit-filter: drop-shadow(0px 0px 20px #F5FAFF);\\n  filter: drop-shadow(0px 0px 20px #F5FAFF);\\n  border-radius: 190px;\\n  padding: 14px 92px; }\\n\\n.form-modal .form-modal-inner .form-modal-foot .form-buttons .buttons-right .order-final-info {\\n  background: rgba(2, 2, 2, 0.4);\\n  border: 3px solid #F5FAFF;\\n  -webkit-box-sizing: border-box;\\n  box-sizing: border-box;\\n  border-radius: 30px;\\n  padding: 25px 30px 5px 30px; }\\n\\n.form-modal .form-modal-inner .form-modal-foot .form-buttons .buttons-right .order-final-info p {\\n  font-family: Montserrat;\\n  font-style: normal;\\n  font-weight: bold;\\n  font-size: 16px;\\n  line-height: 133.8%;\\n  letter-spacing: 0.025em;\\n  color: #F5FAFF;\\n  margin-bottom: 20px; }\\n\\n@media screen and (max-width: 1920px) {\\n  .about_us .team-photo img {\\n    width: 100%;\\n    -o-object-fit: cover;\\n    object-fit: cover; } }\\n\\n@media screen and (max-width: 1440px) {\\n  .center {\\n    max-width: 90%; }\\n  .main-section-wrap .content3 .title3 p {\\n    font-size: 36px; }\\n  .about_us .about-description .description-picture img {\\n    min-width: 416px; }\\n  .about_us .about-description .description-text-wrap {\\n    margin-top: 80px;\\n    margin-left: 70px; }\\n  .about_us .about-description .description-text-wrap span {\\n    margin-top: 30px; }\\n  .about_us .another-descripton .another-descripton-text {\\n    margin-right: 50px; }\\n  .about_us .another-descripton .another-descripton-picture img {\\n    min-width: 466px; } }\\n\\n@media screen and (max-width: 1200px) {\\n  header .header-wrap .menu ul li a {\\n    font-size: 12px; }\\n  header .header-wrap .contact-wrap .contact-number {\\n    font-size: 18px;\\n    padding: 21px 30px; }\\n  .main__section .main-section1 {\\n    background-position: 0 0; }\\n  .main__section .main-section2 {\\n    background-position: 0 0; }\\n  .main__section .main-section3 {\\n    background-position: 0 0; }\\n  .main__section .main-section4 {\\n    background-position: 0 0; }\\n  .programs .short_descr {\\n    margin-bottom: 60px; }\\n  .programs .short_descr ul {\\n    grid-template-columns: repeat(3, 1fr);\\n    grid-column-gap: 50px;\\n    grid-template-rows: 1fr 1fr; }\\n  .programs .short_descr ul li img {\\n    padding-left: 40%; }\\n  .programs .short_descr ul li .car-icon {\\n    padding-left: 30%; }\\n  .programs .diet-timetable .diet-left .diet-description .inner-diet-description h2 {\\n    font-size: 20px;\\n    line-height: 22px; }\\n  .programs .diet-timetable .diet-left .diet-description .inner-diet-description span {\\n    font-size: 18px;\\n    line-height: 20px; }\\n  .programs .diet-timetable .diet-left .diet-description .inner-diet-description p {\\n    font-size: 14px;\\n    line-height: 18px; }\\n  .programs .diet-timetable .diet-left .cost-table table {\\n    font-size: 12px;\\n    line-height: 14px; }\\n  .programs .diet-timetable .diet-right .week span {\\n    font-size: 16px;\\n    line-height: 18px; }\\n  .programs .diet-timetable .diet-right .day-ration table p {\\n    font-size: 15px;\\n    line-height: 17px; }\\n  .programs .diet-timetable .diet-right .day-ration table .eating-title {\\n    padding-bottom: 20px; }\\n  .programs .diet-timetable .diet-right .day-ration table .food-name_container {\\n    padding-bottom: 40px; }\\n  .programs .diet-timetable .diet-right .day-ration table .food-weight_container {\\n    padding-bottom: 40px; }\\n  .online-checkout-wrap {\\n    font-size: 17px;\\n    padding-top: 10px;\\n    padding-bottom: 10px; }\\n  .chekout_questions {\\n    margin-bottom: 90px; }\\n  .chekout_questions .chekout_questions-container {\\n    grid-column-gap: 40px; }\\n  .chekout_questions .chekout_questions-container .chekout form {\\n    margin-bottom: 25px; }\\n  .chekout_questions .chekout_questions-container .chekout .checkout-choice {\\n    font-size: 17px;\\n    margin-top: 10px;\\n    margin-bottom: 10px; }\\n  .chekout_questions .chekout_questions-container .chekout .phone-checkout-wrap {\\n    font-size: 17px;\\n    padding-top: 10px;\\n    padding-bottom: 10px; }\\n  .gastro-shop .gastro-shop_cards .gastro-shop_card .candy {\\n    background-size: 200%;\\n    background-position: -261px -40px; }\\n  .about_us .about-description {\\n    background-position: -170px -200px; }\\n  .about_us .about-description .description-picture img {\\n    min-width: 350px; }\\n  .about_us .about-description .description-text-wrap {\\n    margin-top: 50px; }\\n  .about_us .about-description .description-text-wrap h3 {\\n    font-size: 26px;\\n    line-height: 28px;\\n    margin-bottom: 20px; }\\n  .about_us .about-description .description-text-wrap span {\\n    font-size: 26px;\\n    line-height: 28px; }\\n  .about_us .about-description .description-text-wrap .text-content {\\n    font-size: 16px;\\n    line-height: 18px; }\\n  .about_us .another-descripton .another-descripton-text {\\n    margin-top: 10px; }\\n  .about_us .another-descripton .another-descripton-text h3 {\\n    margin-bottom: 30px;\\n    font-size: 26px;\\n    line-height: 28px; }\\n  .about_us .another-descripton .another-descripton-text .another-text-content {\\n    font-size: 16px;\\n    line-height: 18px; }\\n  .about_us .another-descripton .another-descripton-text .another-text-content-bold {\\n    font-size: 16px;\\n    line-height: 18px; }\\n  .about_us .another-descripton .another-descripton-text span {\\n    font-size: 26px;\\n    line-height: 28px; }\\n  .about_us .another-descripton .another-descripton-text .socials a img {\\n    width: 25px; }\\n  .about_us .another-descripton .another-descripton-text .socials .socials-descr {\\n    font-size: 16px;\\n    line-height: 18px; }\\n  .intro-right {\\n    position: relative;\\n    top: 10px; }\\n  .intro-right p {\\n    font-size: 16px;\\n    line-height: 18px; }\\n  .intro-right a img {\\n    width: 25px; }\\n  .article-modal .article .article-intro .intro-info .intro-left {\\n    margin-left: 0; }\\n  .article-modal .article .article-intro .intro-info .intro-left a img {\\n    padding: 8px 12px; }\\n  .article-modal .article .article-intro .intro-info .intro-left h3 {\\n    font-size: 22px;\\n    line-height: 24px; }\\n  .article-modal .article .article-intro .publication-date {\\n    margin-left: 7%;\\n    margin-bottom: 20px; }\\n  .article-modal .article .article-text p {\\n    margin-left: 7%;\\n    margin-right: 7%;\\n    margin-bottom: 25px; }\\n  .article-modal .article .article-text .atricle-food-1 {\\n    margin-bottom: 30px; }\\n  .article-modal .article .article-text .atricle-food-2 {\\n    margin-bottom: 30px; }\\n  .go_back img {\\n    padding: 8px 12px; }\\n  .go_back p {\\n    font-size: 16px;\\n    line-height: 18px; }\\n  .order-modal .order-modal-inner .order-buttons .order-checkout {\\n    padding-top: 17px; } }\\n\\n@media screen and (max-width: 1024px) {\\n  .close-article {\\n    right: 10px;\\n    top: 10px;\\n    font-size: 30px; }\\n  .close-candy {\\n    right: 10px;\\n    top: 10px;\\n    font-size: 30px; }\\n  header .header-wrap .logo a img {\\n    max-width: 120px; }\\n  header .header-wrap .menu {\\n    padding-top: 18px; }\\n  header .header-wrap .menu ul li {\\n    margin-right: 15px; }\\n  header .header-wrap .menu ul li a {\\n    font-size: 10px;\\n    line-height: 12px; }\\n  header .header-wrap .contact-wrap {\\n    padding-top: 14px; }\\n  header .header-wrap .contact-wrap .contact-number {\\n    padding: 20px 30px;\\n    font-size: 12px;\\n    line-height: 25px; }\\n  .main__section .main-section1 {\\n    background-size: 300%;\\n    background-position: 0 0; }\\n  .main__section .main-section2 {\\n    background-size: 300%;\\n    background-position: 0 0; }\\n  .main__section .main-section3 {\\n    background-size: 300%;\\n    background-position: 0 0; }\\n  .main__section .main-section4 {\\n    background-size: 300%;\\n    background-position: 0 0; }\\n  .programs {\\n    margin-bottom: 80px; }\\n  .programs .short_descr ul .car-icon {\\n    padding-left: 25%; }\\n  .programs .programs-choice .programs-choice_btn {\\n    margin-bottom: 45px;\\n    font-size: 21px;\\n    line-height: 23px; }\\n  .programs .diets ul li .diet-name {\\n    font-size: 14px;\\n    line-height: 16px; }\\n  .programs .diets ul li .diet-ccal {\\n    font-size: 12px;\\n    line-height: 14px; }\\n  .programs .diet-timetable .diet-left .cost-table {\\n    margin-top: 20px;\\n    margin-bottom: 20px; }\\n  .chekout_questions {\\n    margin-bottom: 80px; }\\n  .chekout_questions .chekout_questions-container {\\n    display: -webkit-box;\\n    display: -ms-flexbox;\\n    display: flex;\\n    -webkit-box-orient: vertical;\\n    -webkit-box-direction: normal;\\n    -ms-flex-direction: column;\\n    flex-direction: column; }\\n  .chekout_questions .chekout_questions-container .chekout {\\n    margin-bottom: 40px; }\\n  .gastro-shop .gastro-shop_cards .gastro-shop_card .shop_card-image {\\n    height: 220px; }\\n  .gastro-shop .gastro-shop_cards .gastro-shop_card .granola {\\n    background-size: 200%;\\n    background-position: -261px -335px; }\\n  .gastro-shop .gastro-shop_cards .gastro-shop_card .gastro-card-descr {\\n    -webkit-box-orient: vertical;\\n    -webkit-box-direction: normal;\\n    -ms-flex-direction: column;\\n    flex-direction: column;\\n    margin-top: 10px; }\\n  .gastro-shop .gastro-shop_cards .gastro-shop_card .gastro-card-descr h3 {\\n    margin-bottom: 8px;\\n    text-align: center; }\\n  .bus-lunch {\\n    padding-bottom: 80px; }\\n  .bus-lunch .lunch-cards .lunch-card .lunch .lunch-photo-1,\\n  .bus-lunch .lunch-cards .lunch-card .lunch .lunch-photo-2 {\\n    height: 220px;\\n    background-size: 150%;\\n    background-position: -160px -310px; }\\n  .bus-lunch .lunch-cards .lunch-card .lunch .lunch-name .lunch-title {\\n    font-size: 14px;\\n    line-height: 16px; }\\n  .bus-lunch .lunch-cards .lunch-card .lunch .lunch-name p {\\n    font-size: 12px; }\\n  .bus-lunch .lunch-cards .lunch-card .lunch-composition p {\\n    font-size: 11px; }\\n  .bus-lunch .lunch-cards .lunch-card .add-lunch-item .lunch-cost {\\n    font-size: 16px; }\\n  .add {\\n    font-size: 15px;\\n    line-height: 17px; }\\n  .add .plus {\\n    padding: 4px 9px; }\\n  .cards-switcher {\\n    margin: 30px auto 30px 20px; }\\n  .cards-switcher ul li {\\n    padding: 4px 12px; }\\n  .about_us .about-description .description-picture img {\\n    min-width: 300px; }\\n  .about_us .about-description .description-text-wrap {\\n    margin-left: 40px;\\n    margin-top: 90px; }\\n  .about_us .about-description .description-text-wrap h3 {\\n    font-size: 18px;\\n    line-height: 20px; }\\n  .about_us .about-description .description-text-wrap span {\\n    font-size: 18px;\\n    line-height: 20px; }\\n  .about_us .about-description .description-text-wrap .text-content {\\n    font-size: 12px;\\n    line-height: 13px; }\\n  .about_us .team-photo {\\n    margin-bottom: 10px; }\\n  .about_us .another-descripton .another-descripton-text h3 {\\n    margin-bottom: 15px;\\n    font-size: 18px;\\n    line-height: 20px; }\\n  .about_us .another-descripton .another-descripton-text .another-text-content {\\n    margin-bottom: 15px;\\n    font-size: 12px;\\n    line-height: 13px; }\\n  .about_us .another-descripton .another-descripton-text .another-text-content-bold {\\n    margin-top: 15px;\\n    margin-bottom: 15px;\\n    font-size: 12px;\\n    line-height: 13px; }\\n  .about_us .another-descripton .another-descripton-text span {\\n    font-size: 18px;\\n    line-height: 20px; }\\n  .about_us .another-descripton .another-descripton-text .socials .socials-descr {\\n    font-size: 12px;\\n    line-height: 15px; }\\n  .about_us .another-descripton .another-descripton-text .socials a img {\\n    width: 18px;\\n    position: relative;\\n    top: -3px; }\\n  .about_us .another-descripton .another-descripton-picture img {\\n    min-width: 300px; }\\n  .intro-right p {\\n    font-size: 10px;\\n    line-height: 11px; }\\n  .intro-right a img {\\n    width: 20px; }\\n  .article-modal .article .food-photo_container img {\\n    max-height: 400px; }\\n  .article-modal .article .article-intro .intro-info .intro-left a img {\\n    padding: 5px 10px; }\\n  .article-modal .article .article-intro .intro-info .intro-left h3 {\\n    font-size: 14px;\\n    line-height: 16px; }\\n  .article-modal .article .article-intro .publication-date {\\n    font-size: 10px;\\n    line-height: 133.8%;\\n    margin-top: 10px;\\n    margin-bottom: 15px; }\\n  .article-modal .article .article-text p {\\n    font-size: 10px;\\n    line-height: 12px;\\n    margin-bottom: 15px; }\\n  .article-modal .article .article-text .atricle-food-1 img {\\n    max-height: 350px; }\\n  .article-modal .article .article-text .atricle-food-2 img {\\n    max-height: 350px; }\\n  .go_back img {\\n    padding: 5px 10px; }\\n  .go_back p {\\n    font-size: 10px;\\n    line-height: 11px; }\\n  .candy-items .candy-content-wrap .candy-buttons .candy-buttons-left {\\n    position: relative;\\n    top: 15px; }\\n  .candy-items .candy-content-wrap .candy-content {\\n    grid-template-columns: 1fr;\\n    grid-template-rows: repeat(4, 1fr);\\n    justify-items: center; }\\n  .order-modal .order-modal-inner .order-cards {\\n    grid-template-columns: 1fr 1fr;\\n    grid-template-rows: 1fr 1fr 1fr; }\\n  .order-modal .order-modal-inner .order-buttons {\\n    grid-template-columns: 1fr;\\n    grid-template-rows: 1fr 1fr;\\n    grid-row-gap: 20px; }\\n  .order-modal .order-modal-inner .order-buttons .final-itmes {\\n    text-align: center; }\\n  .form-modal .form-modal-inner .form-modal-middle {\\n    grid-template-columns: 1fr;\\n    grid-template-rows: 1fr 1fr; }\\n  .form-modal .form-modal-inner .form-modal-foot .conditions-container {\\n    margin-top: 20px;\\n    margin-bottom: 30px; }\\n  .form-modal .form-modal-inner .form-modal-foot .form-buttons {\\n    display: -webkit-box;\\n    display: -ms-flexbox;\\n    display: flex;\\n    -webkit-box-orient: vertical;\\n    -webkit-box-direction: normal;\\n    -ms-flex-direction: column;\\n    flex-direction: column; }\\n  .form-modal .form-modal-inner .form-modal-foot .form-buttons .buttons-left {\\n    margin-bottom: 30px;\\n    grid-template-columns: 1fr 1fr;\\n    grid-template-rows: 1fr;\\n    grid-column-gap: 20px; }\\n  footer .footer-container {\\n    padding-top: 20px;\\n    padding-bottom: 20px; }\\n  footer .footer-container .footer-left ul {\\n    grid-row-gap: 8px; }\\n  footer .footer-container .footer-left ul li a {\\n    font-size: 14px;\\n    line-height: 16px; }\\n  footer .footer-container .footer-middle a img {\\n    width: 250px; }\\n  footer .footer-container .footer-middle a .footer-logo-title {\\n    font-size: 14px; }\\n  footer .footer-container .footer-right ul {\\n    font-size: 14px;\\n    line-height: 16px; }\\n  footer .footer-container .footer-right ul .footer-phone p {\\n    font-size: 14px;\\n    line-height: 16px; }\\n  footer .footer-container .footer-right ul .cooperation {\\n    margin-bottom: 13px; }\\n  footer .footer-container .footer-right ul .footer-faq {\\n    margin-bottom: 13px; }\\n  footer .footer-container .footer-right ul .footer-socials {\\n    grid-column-gap: 10px;\\n    margin-bottom: 10px; }\\n  footer .footer-container .footer-right ul .footer-socials a img {\\n    width: 21px; } }\\n\\n@media screen and (max-width: 768px) {\\n  header .header-wrap .menu ul {\\n    background: rgba(245, 250, 255, 0.8);\\n    grid-row-gap: 15px;\\n    grid-template-rows: 1fr 1fr 1fr 1fr 1fr;\\n    display: grid;\\n    text-align: center;\\n    position: absolute;\\n    top: -55vh;\\n    left: 0;\\n    z-index: 200;\\n    padding-top: 10vh;\\n    padding-bottom: 5vh;\\n    transition: ease-in-out 1s;\\n    width: 105%;\\n    height: 30vh; }\\n  header .header-wrap .menu ul li a {\\n    font-size: 21px;\\n    line-height: 23px; }\\n  header .header-wrap .contact-wrap {\\n    margin-right: 30px; }\\n  .order-btn-main {\\n    width: calc(280px - 69px - 69px); }\\n  .order-descr2 {\\n    font-size: 16px;\\n    line-height: 18px; }\\n  .main-section-wrap .content3 {\\n    padding-top: 60px; }\\n  .main-section-wrap .content3 .title3 {\\n    margin-top: 20px; }\\n  .main-section-wrap .content3 .title3 p {\\n    font-size: 30px;\\n    line-height: 32px; }\\n  .main-section-wrap .content3 .diet-descr2 {\\n    font-size: 16px;\\n    line-height: 18px; }\\n  .main-section-wrap .content3 .order2 {\\n    margin-top: 35px; }\\n  .main-section-wrap .content3 .order2 .order-info2 .order-cost2 {\\n    font-size: 32px;\\n    line-height: 34px; }\\n  .programs .short_descr {\\n    margin-bottom: 20px; }\\n  .programs .short_descr ul li img {\\n    padding-left: 30%; }\\n  .programs .short_descr ul li .car-icon {\\n    padding-left: 10%; }\\n  .programs .programs-choice .programs-choice_btn {\\n    padding-top: 12px;\\n    padding-bottom: 12px;\\n    font-size: 14px;\\n    line-height: 15px;\\n    margin-bottom: 20px; }\\n  .programs .diets {\\n    margin-bottom: 30px; }\\n  .programs .diets ul li .diet-name {\\n    font-size: 10px;\\n    line-height: 12px; }\\n  .programs .diets ul li .diet-ccal {\\n    font-size: 8px;\\n    line-height: 10px; }\\n  .programs .diet-timetable {\\n    grid-template-columns: 1fr;\\n    grid-template-rows: 1fr 1fr; }\\n  .programs .diet-timetable .diet-left .diet-description .inner-diet-description {\\n    padding: 18px 30px 25px 30px; }\\n  .programs .diet-timetable .diet-left .diet-description .inner-diet-description h2 {\\n    font-size: 20px;\\n    line-height: 22px; }\\n  .programs .diet-timetable .diet-left .diet-description .inner-diet-description span {\\n    font-size: 18px;\\n    line-height: 20px; }\\n  .programs .diet-timetable .diet-left .diet-description .inner-diet-description p {\\n    font-size: 14px;\\n    line-height: 18px; }\\n  .programs .diet-timetable .diet-left .cost-table table {\\n    font-size: 12px;\\n    line-height: 14px; }\\n  .programs .diet-timetable .diet-left .cost-table table .name-diet {\\n    margin-bottom: 8px; }\\n  .programs .diet-timetable .diet-left .cost-table table .diet-sale {\\n    margin-bottom: 8px; }\\n  .programs .diet-timetable .diet-left .cost-table table .new-cost {\\n    margin-bottom: 8px;\\n    text-align: right; }\\n  .programs .diet-timetable .diet-left .cost-table table .sale-percent {\\n    margin-bottom: 8px; }\\n  .programs .diet-timetable .diet-left .diet-order-btn {\\n    width: 100%; }\\n  .programs .diet-timetable .diet-right .week span {\\n    font-size: 16px;\\n    line-height: 18px; }\\n  .programs .diet-timetable .diet-right .day-ration table p {\\n    font-size: 15px;\\n    line-height: 17px; }\\n  .programs .diet-timetable .diet-right .day-ration table .eating-title {\\n    padding-bottom: 20px; }\\n  .programs .diet-timetable .diet-right .day-ration table .food-name_container {\\n    padding-bottom: 40px; }\\n  .programs .diet-timetable .diet-right .day-ration table .food-weight_container {\\n    padding-bottom: 40px; }\\n  .chekout_questions {\\n    margin-bottom: 40px; }\\n  .wrap-title h2 {\\n    padding: 15px;\\n    font-size: 32px;\\n    line-height: 34px; }\\n  .gastro-shop h3 {\\n    font-size: 24px;\\n    line-height: 26px; }\\n  .gastro-shop .gastro-shop_cards {\\n    margin-top: 60px; }\\n  .gastro-shop .gastro-shop_cards .gastro-shop_card .shop_card-image {\\n    height: 180px; }\\n  .gastro-shop .gastro-shop_cards .gastro-shop_card .gastro-card-descr h3 {\\n    font-size: 16px;\\n    line-height: 18px; }\\n  .gastro-shop .gastro-shop_cards .gastro-shop_card .gastro-card-descr a p {\\n    font-size: 12px;\\n    bottom: 4px; }\\n  .gastro-shop .bus-lunch .lunch-arrange {\\n    margin-right: 0;\\n    -webkit-box-pack: center;\\n    -ms-flex-pack: center;\\n    justify-content: center; }\\n  .gastro-shop .bus-lunch .lunch-cards .lunch-card .lunch .lunch-photo-1,\\n  .gastro-shop .bus-lunch .lunch-cards .lunch-card .lunch .lunch-photo-2 {\\n    height: 180px;\\n    background-size: 250%;\\n    background-position: -380px -350px; }\\n  .gastro-shop .bus-lunch .lunch-cards .lunch-card .lunch .lunch-name {\\n    grid-template-columns: 1fr 1fr;\\n    grid-template-rows: 1fr 1fr;\\n    grid-row-gap: 10px; }\\n  .gastro-shop .bus-lunch .lunch-cards .lunch-card .lunch .lunch-name .lunch-title {\\n    grid-column-start: span 2; }\\n  .gastro-shop .bus-lunch .lunch-cards .lunch-card .add-lunch-item .lunch-cost {\\n    font-size: 12px;\\n    line-height: 14px; }\\n  .cards-switcher ul li {\\n    margin-left: 0;\\n    margin-right: 8px; }\\n  .about_us .about-description .description-picture img {\\n    width: 5%;\\n    min-width: 260px; }\\n  .about_us .about-description .description-text-wrap {\\n    margin-left: 20px;\\n    margin-top: 40px; }\\n  .about_us .another-descripton .another-descripton-picture {\\n    margin-top: 5vh; }\\n  .about_us .another-descripton .another-descripton-picture img {\\n    min-width: 250px; }\\n  .article-modal .article .food-photo_container img {\\n    max-height: 300px; }\\n  .article-modal .article .article-intro .intro-info {\\n    margin-top: 20px;\\n    -webkit-box-orient: vertical;\\n    -webkit-box-direction: reverse;\\n    -ms-flex-direction: column-reverse;\\n    flex-direction: column-reverse; }\\n  .article-modal .article .article-intro .intro-info .intro-right {\\n    -ms-flex-item-align: end;\\n    align-self: flex-end;\\n    margin-bottom: 10px; }\\n  .article-modal .article .article-intro .publication-date {\\n    margin-left: 0; }\\n  .article-modal .article .article-text p {\\n    margin-left: 0;\\n    margin-right: 0; }\\n  .order-modal .order-modal-inner .order-cards .order-modal-card .modal-card-wrap .order-title {\\n    font-size: 14px;\\n    line-height: 16px; }\\n  .order-modal .order-modal-inner .order-cards .order-modal-card .modal-card-wrap .order-footer .modal-card-cost {\\n    font-size: 18px;\\n    line-height: 22px; }\\n  .form-modal .form-modal-inner .form-modal-middle .modal-left form .modal-flat-num {\\n    grid-column-start: span 2; }\\n  .form-modal .form-modal-inner .form-modal-middle .modal-left form .modal-entrance-num {\\n    grid-column-start: 3;\\n    grid-column-end: 5; }\\n  .form-modal .form-modal-inner .form-modal-foot .form-buttons .buttons-left {\\n    grid-template-columns: 1fr;\\n    grid-template-rows: 1fr 1fr;\\n    grid-row-gap: 20px; }\\n  .contact {\\n    display: none; }\\n  footer .footer-container {\\n    -webkit-box-orient: vertical;\\n    -webkit-box-direction: normal;\\n    -ms-flex-direction: column;\\n    flex-direction: column;\\n    text-align: center; }\\n  footer .footer-container .footer-left {\\n    display: none; }\\n  footer .footer-container .footer-middle {\\n    margin-bottom: 10px; }\\n  footer .footer-container .footer-right ul .footer-phone {\\n    text-align: center; }\\n  footer .footer-container .footer-right ul .cooperation {\\n    display: none; }\\n  footer .footer-container .footer-right ul .footer-faq {\\n    display: none; }\\n  footer .footer-container .footer-right ul .footer-socials {\\n    display: -webkit-box;\\n    display: -ms-flexbox;\\n    display: flex;\\n    -webkit-box-pack: center;\\n    -ms-flex-pack: center;\\n    justify-content: center; }\\n  footer .footer-container .footer-right ul .footer-socials a img {\\n    width: 100%; }\\n  #burger {\\n    display: block; } }\\n\\n@media screen and (max-width: 600px) {\\n  .order-btn-main {\\n    padding: 12px 35px; }\\n  .answer .answer-text {\\n    font-size: 10px; }\\n  .programs .short_descr ul {\\n    padding: 30px 40px;\\n    grid-template-columns: repeat(2, 1fr);\\n    grid-column-gap: 50px;\\n    grid-template-rows: 1fr 1fr 1fr; }\\n  .programs .short_descr ul li img {\\n    padding-left: 35%; }\\n  .programs .short_descr ul li .car-icon {\\n    padding-left: 20%; }\\n  .programs .programs-choice .programs-choice_btn {\\n    grid-template-columns: 1fr;\\n    grid-template-rows: 1fr 1fr;\\n    grid-row-gap: 10px; }\\n  .programs .diets ul {\\n    grid-template-columns: 1fr 1fr 1fr;\\n    grid-template-rows: 1fr 1fr 1fr;\\n    grid-row-gap: 20px; }\\n  .programs .diets ul li .diet-name {\\n    font-size: 12px;\\n    line-height: 13px; }\\n  .programs .diets ul li .diet-ccal {\\n    font-size: 10px;\\n    line-height: 12px; }\\n  .programs .diets ul #maxi-fit {\\n    grid-column-start: 2;\\n    grid-row-start: 3; }\\n  .programs .diet-timetable .diet-right {\\n    margin-top: -35px; }\\n  .programs .diet-timetable .diet-right .week span {\\n    font-size: 14px;\\n    line-height: 16px; }\\n  .programs .diet-timetable .diet-right .day-ration table p {\\n    font-size: 12px;\\n    line-height: 14px; }\\n  .programs .diet-timetable .diet-right .day-ration table .eating-title .eating {\\n    font-size: 13px;\\n    line-height: 14px; }\\n  .programs .diet-timetable .diet-right .day-ration table .food-weight_container {\\n    display: none; }\\n  .chekout_questions .chekout_questions-container .chekout h3 {\\n    font-size: 20px;\\n    line-height: 22px;\\n    margin-bottom: 10px; }\\n  .chekout_questions .chekout_questions-container .chekout .checkout-descr {\\n    font-size: 12px;\\n    line-height: 16px;\\n    margin-bottom: 20px; }\\n  .chekout_questions .chekout_questions-container .chekout form .user-name-container {\\n    margin-bottom: 20px; }\\n  .chekout_questions .chekout_questions-container .chekout form .user_phone-container {\\n    margin-bottom: 20px; }\\n  .chekout_questions .chekout_questions-container .questions h3 {\\n    font-size: 20px;\\n    line-height: 22px;\\n    margin-bottom: 30px; }\\n  .chekout_questions .chekout_questions-container .questions ul li {\\n    margin-bottom: 12px; }\\n  .chekout_questions .chekout_questions-container .questions ul li .question-flex p {\\n    font-size: 10px;\\n    line-height: 13px; }\\n  .gastro-shop .section-title {\\n    font-size: 22px;\\n    line-height: 24px; }\\n  .gastro-shop .gastro-shop_cards {\\n    margin-top: 40px;\\n    margin-bottom: 40px; }\\n  .gastro-shop .gastro-shop_cards .gastro-shop_card .shop_card-image {\\n    height: 150px; }\\n  .gastro-shop .gastro-shop_cards .gastro-shop_card .granola {\\n    background-size: 350%;\\n    background-position: -430px -200px; }\\n  .gastro-shop .gastro-shop_cards .gastro-shop_card .candy {\\n    background-size: 350%;\\n    background-position: -430px -100px; }\\n  .gastro-shop .bus-lunch {\\n    padding-bottom: 40px;\\n    margin-top: 20px; }\\n  .gastro-shop .bus-lunch .lunch-cards .lunch-card .lunch .lunch-photo-1,\\n  .gastro-shop .bus-lunch .lunch-cards .lunch-card .lunch .lunch-photo-2 {\\n    height: 150px;\\n    background-size: 300%; }\\n  .gastro-shop .bus-lunch .lunch-cards .add-lunch-item {\\n    -webkit-box-orient: vertical;\\n    -webkit-box-direction: normal;\\n    -ms-flex-direction: column;\\n    flex-direction: column; }\\n  .arrange-wrap .arrange {\\n    font-size: 20px; }\\n  .cards-switcher {\\n    margin: 20px auto 20px auto; }\\n  .cards-switcher ul {\\n    -webkit-box-pack: center;\\n    -ms-flex-pack: center;\\n    justify-content: center; }\\n  .blog-main-section .cards-container .cards {\\n    grid-template-columns: 1fr;\\n    grid-template-rows: 1fr 1fr;\\n    grid-row-gap: 20px; }\\n  .about_us .about-description {\\n    -webkit-box-orient: vertical;\\n    -webkit-box-direction: normal;\\n    -ms-flex-direction: column;\\n    flex-direction: column; }\\n  .about_us .about-description .description-text-wrap {\\n    margin-left: 10%; }\\n  .about_us .another-descripton .another-descripton-text {\\n    margin-right: 10%; }\\n  .about_us .another-descripton .another-descripton-picture {\\n    display: none; }\\n  .candy-items .candy-content-wrap .candy-buttons {\\n    -webkit-box-orient: vertical;\\n    -webkit-box-direction: reverse;\\n    -ms-flex-direction: column-reverse;\\n    flex-direction: column-reverse; }\\n  .candy-items .candy-content-wrap .candy-buttons .candy-buttons-left {\\n    margin-top: 15px; }\\n  .candy-items .candy-content-wrap .candy-content {\\n    grid-template-columns: 1fr;\\n    grid-template-rows: repeat(4, 1fr);\\n    justify-items: center; }\\n  .candy-items .candy-content-wrap .candy-content .candy-card .candy_photo img {\\n    height: 240px; }\\n  .order-modal .order-modal-inner .order-cards {\\n    grid-template-columns: 1fr;\\n    grid-template-rows: repeat(6, 1fr); }\\n  footer {\\n    margin-bottom: 50px; } }\\n\\n@media screen and (max-width: 475px) {\\n  .wrap-title h2 {\\n    font-size: 24px;\\n    line-height: 26px; }\\n  .gastro-shop .gastro-shop_cards {\\n    margin-top: 20px;\\n    grid-template-columns: 1fr;\\n    grid-template-rows: 1fr 1fr; }\\n  .gastro-shop .gastro-shop_cards .gastro-shop_card .shop_card-image {\\n    height: 150px; }\\n  .gastro-shop .gastro-shop_cards .gastro-shop_card .granola {\\n    background-size: 300%;\\n    background-position: -540px -435px; }\\n  .gastro-shop .gastro-shop_cards .gastro-shop_card .candy {\\n    background-size: 300%;\\n    background-position: -550px -130px; }\\n  .gastro-shop .bus-lunch .lunch-cards {\\n    grid-template-columns: 1fr;\\n    grid-template-rows: 1fr 1fr;\\n    grid-row-gap: 40px; }\\n  .gastro-shop .bus-lunch .lunch-cards .lunch-card .lunch .lunch-photo {\\n    background-position: -540px -690px; }\\n  .arrange-wrap {\\n    padding: 0px 30px; }\\n  .arrange-wrap .arrange {\\n    font-size: 18px; }\\n  .candy-items .candy-content-wrap .candy-content .candy-card .pfc ul {\\n    display: grid;\\n    grid-template-columns: 1fr 1fr;\\n    grid-template-rows: 1fr 1fr;\\n    grid-row-gap: 10px; }\\n  .form-modal .form-modal-inner .form-modal-top p {\\n    font-size: 12px;\\n    line-height: 133.8%;\\n    max-width: 50%; }\\n  .form-modal .form-modal-inner .form-modal-middle {\\n    display: -webkit-box;\\n    display: -ms-flexbox;\\n    display: flex;\\n    -webkit-box-orient: vertical;\\n    -webkit-box-direction: normal;\\n    -ms-flex-direction: column;\\n    flex-direction: column; }\\n  .form-modal .form-modal-inner .form-modal-middle .modal-left {\\n    margin-bottom: 20px; }\\n  .form-modal .form-modal-inner .form-modal-middle .modal-left form {\\n    grid-template-rows: repeat(6, 1fr); }\\n  .form-modal .form-modal-inner .form-modal-middle .modal-left form .modal-street {\\n    grid-column-start: span 4; }\\n  .form-modal .form-modal-inner .form-modal-middle .modal-left form .modal-house-num {\\n    grid-column-start: span 2; }\\n  .form-modal .form-modal-inner .form-modal-middle .modal-left form .modal-floor-num {\\n    grid-column-start: 3;\\n    grid-column-end: 5; }\\n  .form-modal .form-modal-inner .form-modal-middle .modal-left form .modal-flat-num {\\n    grid-column-start: span 4; }\\n  .form-modal .form-modal-inner .form-modal-middle .modal-left form .modal-entrance-num {\\n    grid-column-start: 1; }\\n  .form-modal .form-modal-inner .form-modal-foot .form-buttons .buttons-left .form-btn {\\n    font-size: 21px;\\n    padding: 0; } }\\n\\n@media screen and (max-width: 425px) {\\n  header .header-wrap .logo a img {\\n    max-width: 100px; }\\n  header .header-wrap .contact-wrap {\\n    padding-top: 11px;\\n    margin-right: 30px; }\\n  header .header-wrap .contact-wrap .contact-number {\\n    font-size: 10px;\\n    padding: 16px; }\\n  .order-btn-main {\\n    font-size: 16px;\\n    line-height: 18px;\\n    padding: 10px; }\\n  .order-descr2 {\\n    font-size: 10px;\\n    line-height: 14px; }\\n  .main-section-wrap .content3 .title3 p {\\n    font-size: 24px;\\n    line-height: 28px; }\\n  .main-section-wrap .content3 .order2 .order-info2 .order-cost2 {\\n    font-size: 25px;\\n    line-height: 25px; }\\n  .programs .short_descr ul {\\n    grid-column-gap: 20px; }\\n  .programs .short_descr ul li img {\\n    padding-left: 25%; }\\n  .programs .short_descr ul li .car-icon {\\n    padding-left: 6%; }\\n  .programs .short_descr ul li p {\\n    font-size: 8px;\\n    line-height: 9px; }\\n  .programs .diets {\\n    margin-bottom: 20px; }\\n  .programs .diet-timetable .diet-right {\\n    margin-top: 0; }\\n  .programs .diet-timetable .diet-right .week {\\n    padding: 16px 30px 11px 30px; }\\n  .programs .diet-timetable .diet-right .day-ration {\\n    padding: 10px 30px; }\\n  .article-modal .article .article-intro .intro-info .intro-left {\\n    display: -webkit-box;\\n    display: -ms-flexbox;\\n    display: flex;\\n    -webkit-box-orient: vertical;\\n    -webkit-box-direction: normal;\\n    -ms-flex-direction: column;\\n    flex-direction: column;\\n    position: relative;\\n    top: -25px; }\\n  .article-modal .article .article-intro .intro-info .intro-left a {\\n    margin-bottom: 20px; }\\n  .article-modal .article .article-intro .intro-info .intro-left h3 {\\n    margin-left: 0; }\\n  .article-modal .article .article-intro .publication-date {\\n    margin-top: 0; }\\n  .order-modal .order-modal-inner .order-cards .order-modal-card .modal-card-wrap .order-title {\\n    font-size: 10px;\\n    line-height: 11px; }\\n  #burger {\\n    top: 13px;\\n    right: 12px; }\\n  #close {\\n    top: -4px;\\n    right: 16px; } }\\n\\n@media screen and (max-width: 375px) {\\n  .order-descr2 {\\n    line-height: 10px; }\\n  .main-section-wrap .content3 .order2 .order-info2 .order-cost2 {\\n    font-size: 20px;\\n    line-height: 20px; }\\n  .programs .short_descr ul {\\n    padding: 20px 25px; } }\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpack1/./src/style.css?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://webpack1/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  }\n\n  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://webpack1/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://webpack1/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\nif (true) {\n  if (!_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals || module.hot.invalidate) {\n    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {\n  if (!a && b || a && !b) {\n    return false;\n  }\n\n  var p;\n\n  for (p in a) {\n    if (isNamedExport && p === \"default\") {\n      // eslint-disable-next-line no-continue\n      continue;\n    }\n\n    if (a[p] !== b[p]) {\n      return false;\n    }\n  }\n\n  for (p in b) {\n    if (isNamedExport && p === \"default\") {\n      // eslint-disable-next-line no-continue\n      continue;\n    }\n\n    if (!a[p]) {\n      return false;\n    }\n  }\n\n  return true;\n};\n    var isNamedExport = !_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals;\n    var oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals;\n\n    module.hot.accept(\n      /*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.css\",\n      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.css\");\n(function () {\n        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals, isNamedExport)) {\n                module.hot.invalidate();\n\n                return;\n              }\n\n              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals;\n\n              update(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"]);\n      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }\n    )\n  }\n\n  module.hot.dispose(function() {\n    update();\n  });\n}\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://webpack1/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://webpack1/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://webpack1/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://webpack1/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://webpack1/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://webpack1/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://webpack1/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/images/Ellipse1.svg":
/*!*********************************!*\
  !*** ./src/images/Ellipse1.svg ***!
  \*********************************/
/***/ ((module) => {

eval("module.exports = \"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTQ1IiBoZWlnaHQ9IjU0NSIgdmlld0JveD0iMCAwIDU0NSA1NDUiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxjaXJjbGUgY3g9IjI3Mi41IiBjeT0iMjcyLjUiIHI9IjI3Mi41IiBmaWxsPSIjMjZGMDNBIiBmaWxsLW9wYWNpdHk9IjAuMSIvPgo8L3N2Zz4K\";\n\n//# sourceURL=webpack://webpack1/./src/images/Ellipse1.svg?");

/***/ }),

/***/ "./src/images/backgrounds/background-food-1.jpg":
/*!******************************************************!*\
  !*** ./src/images/backgrounds/background-food-1.jpg ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"30f1305a1cf8aebf2278.jpg\";\n\n//# sourceURL=webpack://webpack1/./src/images/backgrounds/background-food-1.jpg?");

/***/ }),

/***/ "./src/images/backgrounds/background-food-2.jpg":
/*!******************************************************!*\
  !*** ./src/images/backgrounds/background-food-2.jpg ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"5288fe875f100f78ee3d.jpg\";\n\n//# sourceURL=webpack://webpack1/./src/images/backgrounds/background-food-2.jpg?");

/***/ }),

/***/ "./src/images/backgrounds/background-food-3.jpg":
/*!******************************************************!*\
  !*** ./src/images/backgrounds/background-food-3.jpg ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"cb43ae33ca7ac59c6275.jpg\";\n\n//# sourceURL=webpack://webpack1/./src/images/backgrounds/background-food-3.jpg?");

/***/ }),

/***/ "./src/images/backgrounds/background-food-4.jpg":
/*!******************************************************!*\
  !*** ./src/images/backgrounds/background-food-4.jpg ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"02a40f3e55ce484bde00.jpg\";\n\n//# sourceURL=webpack://webpack1/./src/images/backgrounds/background-food-4.jpg?");

/***/ }),

/***/ "./src/images/food/food10.jpg":
/*!************************************!*\
  !*** ./src/images/food/food10.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"6cab8e881e55cea87d5d.jpg\";\n\n//# sourceURL=webpack://webpack1/./src/images/food/food10.jpg?");

/***/ }),

/***/ "./src/images/food/food11.jpg":
/*!************************************!*\
  !*** ./src/images/food/food11.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"d82409f0e133ac55879b.jpg\";\n\n//# sourceURL=webpack://webpack1/./src/images/food/food11.jpg?");

/***/ }),

/***/ "./src/images/food/food8.jpg":
/*!***********************************!*\
  !*** ./src/images/food/food8.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"7d0de4d2dfc7100cab08.jpg\";\n\n//# sourceURL=webpack://webpack1/./src/images/food/food8.jpg?");

/***/ }),

/***/ "./src/images/food/food9.png":
/*!***********************************!*\
  !*** ./src/images/food/food9.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"2335b6ec8680b365fdaa.png\";\n\n//# sourceURL=webpack://webpack1/./src/images/food/food9.png?");

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
/******/ 			if (cachedModule.error !== undefined) throw cachedModule.error;
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		try {
/******/ 			var execOptions = { id: moduleId, module: module, factory: __webpack_modules__[moduleId], require: __webpack_require__ };
/******/ 			__webpack_require__.i.forEach(function(handler) { handler(execOptions); });
/******/ 			module = execOptions.module;
/******/ 			execOptions.factory.call(module.exports, module, module.exports, execOptions.require);
/******/ 		} catch(e) {
/******/ 			module.error = e;
/******/ 			throw e;
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = __webpack_module_cache__;
/******/ 	
/******/ 	// expose the module execution interceptor
/******/ 	__webpack_require__.i = [];
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
/******/ 	/* webpack/runtime/get javascript update chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference all chunks
/******/ 		__webpack_require__.hu = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + "." + __webpack_require__.h() + ".hot-update.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get update manifest filename */
/******/ 	(() => {
/******/ 		__webpack_require__.hmrF = () => ("main." + __webpack_require__.h() + ".hot-update.json");
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => ("6784133b8045bd4450b2")
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "webpack1:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			;
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
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
/******/ 	/* webpack/runtime/hot module replacement */
/******/ 	(() => {
/******/ 		var currentModuleData = {};
/******/ 		var installedModules = __webpack_require__.c;
/******/ 		
/******/ 		// module and require creation
/******/ 		var currentChildModule;
/******/ 		var currentParents = [];
/******/ 		
/******/ 		// status
/******/ 		var registeredStatusHandlers = [];
/******/ 		var currentStatus = "idle";
/******/ 		
/******/ 		// while downloading
/******/ 		var blockingPromises;
/******/ 		
/******/ 		// The update info
/******/ 		var currentUpdateApplyHandlers;
/******/ 		var queuedInvalidatedModules;
/******/ 		
/******/ 		// eslint-disable-next-line no-unused-vars
/******/ 		__webpack_require__.hmrD = currentModuleData;
/******/ 		
/******/ 		__webpack_require__.i.push(function (options) {
/******/ 			var module = options.module;
/******/ 			var require = createRequire(options.require, options.id);
/******/ 			module.hot = createModuleHotObject(options.id, module);
/******/ 			module.parents = currentParents;
/******/ 			module.children = [];
/******/ 			currentParents = [];
/******/ 			options.require = require;
/******/ 		});
/******/ 		
/******/ 		__webpack_require__.hmrC = {};
/******/ 		__webpack_require__.hmrI = {};
/******/ 		
/******/ 		function createRequire(require, moduleId) {
/******/ 			var me = installedModules[moduleId];
/******/ 			if (!me) return require;
/******/ 			var fn = function (request) {
/******/ 				if (me.hot.active) {
/******/ 					if (installedModules[request]) {
/******/ 						var parents = installedModules[request].parents;
/******/ 						if (parents.indexOf(moduleId) === -1) {
/******/ 							parents.push(moduleId);
/******/ 						}
/******/ 					} else {
/******/ 						currentParents = [moduleId];
/******/ 						currentChildModule = request;
/******/ 					}
/******/ 					if (me.children.indexOf(request) === -1) {
/******/ 						me.children.push(request);
/******/ 					}
/******/ 				} else {
/******/ 					console.warn(
/******/ 						"[HMR] unexpected require(" +
/******/ 							request +
/******/ 							") from disposed module " +
/******/ 							moduleId
/******/ 					);
/******/ 					currentParents = [];
/******/ 				}
/******/ 				return require(request);
/******/ 			};
/******/ 			var createPropertyDescriptor = function (name) {
/******/ 				return {
/******/ 					configurable: true,
/******/ 					enumerable: true,
/******/ 					get: function () {
/******/ 						return require[name];
/******/ 					},
/******/ 					set: function (value) {
/******/ 						require[name] = value;
/******/ 					}
/******/ 				};
/******/ 			};
/******/ 			for (var name in require) {
/******/ 				if (Object.prototype.hasOwnProperty.call(require, name) && name !== "e") {
/******/ 					Object.defineProperty(fn, name, createPropertyDescriptor(name));
/******/ 				}
/******/ 			}
/******/ 			fn.e = function (chunkId) {
/******/ 				return trackBlockingPromise(require.e(chunkId));
/******/ 			};
/******/ 			return fn;
/******/ 		}
/******/ 		
/******/ 		function createModuleHotObject(moduleId, me) {
/******/ 			var _main = currentChildModule !== moduleId;
/******/ 			var hot = {
/******/ 				// private stuff
/******/ 				_acceptedDependencies: {},
/******/ 				_acceptedErrorHandlers: {},
/******/ 				_declinedDependencies: {},
/******/ 				_selfAccepted: false,
/******/ 				_selfDeclined: false,
/******/ 				_selfInvalidated: false,
/******/ 				_disposeHandlers: [],
/******/ 				_main: _main,
/******/ 				_requireSelf: function () {
/******/ 					currentParents = me.parents.slice();
/******/ 					currentChildModule = _main ? undefined : moduleId;
/******/ 					__webpack_require__(moduleId);
/******/ 				},
/******/ 		
/******/ 				// Module API
/******/ 				active: true,
/******/ 				accept: function (dep, callback, errorHandler) {
/******/ 					if (dep === undefined) hot._selfAccepted = true;
/******/ 					else if (typeof dep === "function") hot._selfAccepted = dep;
/******/ 					else if (typeof dep === "object" && dep !== null) {
/******/ 						for (var i = 0; i < dep.length; i++) {
/******/ 							hot._acceptedDependencies[dep[i]] = callback || function () {};
/******/ 							hot._acceptedErrorHandlers[dep[i]] = errorHandler;
/******/ 						}
/******/ 					} else {
/******/ 						hot._acceptedDependencies[dep] = callback || function () {};
/******/ 						hot._acceptedErrorHandlers[dep] = errorHandler;
/******/ 					}
/******/ 				},
/******/ 				decline: function (dep) {
/******/ 					if (dep === undefined) hot._selfDeclined = true;
/******/ 					else if (typeof dep === "object" && dep !== null)
/******/ 						for (var i = 0; i < dep.length; i++)
/******/ 							hot._declinedDependencies[dep[i]] = true;
/******/ 					else hot._declinedDependencies[dep] = true;
/******/ 				},
/******/ 				dispose: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				addDisposeHandler: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				removeDisposeHandler: function (callback) {
/******/ 					var idx = hot._disposeHandlers.indexOf(callback);
/******/ 					if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 				},
/******/ 				invalidate: function () {
/******/ 					this._selfInvalidated = true;
/******/ 					switch (currentStatus) {
/******/ 						case "idle":
/******/ 							currentUpdateApplyHandlers = [];
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							setStatus("ready");
/******/ 							break;
/******/ 						case "ready":
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							break;
/******/ 						case "prepare":
/******/ 						case "check":
/******/ 						case "dispose":
/******/ 						case "apply":
/******/ 							(queuedInvalidatedModules = queuedInvalidatedModules || []).push(
/******/ 								moduleId
/******/ 							);
/******/ 							break;
/******/ 						default:
/******/ 							// ignore requests in error states
/******/ 							break;
/******/ 					}
/******/ 				},
/******/ 		
/******/ 				// Management API
/******/ 				check: hotCheck,
/******/ 				apply: hotApply,
/******/ 				status: function (l) {
/******/ 					if (!l) return currentStatus;
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				addStatusHandler: function (l) {
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				removeStatusHandler: function (l) {
/******/ 					var idx = registeredStatusHandlers.indexOf(l);
/******/ 					if (idx >= 0) registeredStatusHandlers.splice(idx, 1);
/******/ 				},
/******/ 		
/******/ 				//inherit from previous dispose call
/******/ 				data: currentModuleData[moduleId]
/******/ 			};
/******/ 			currentChildModule = undefined;
/******/ 			return hot;
/******/ 		}
/******/ 		
/******/ 		function setStatus(newStatus) {
/******/ 			currentStatus = newStatus;
/******/ 			var results = [];
/******/ 		
/******/ 			for (var i = 0; i < registeredStatusHandlers.length; i++)
/******/ 				results[i] = registeredStatusHandlers[i].call(null, newStatus);
/******/ 		
/******/ 			return Promise.all(results);
/******/ 		}
/******/ 		
/******/ 		function trackBlockingPromise(promise) {
/******/ 			switch (currentStatus) {
/******/ 				case "ready":
/******/ 					setStatus("prepare");
/******/ 					blockingPromises.push(promise);
/******/ 					waitForBlockingPromises(function () {
/******/ 						return setStatus("ready");
/******/ 					});
/******/ 					return promise;
/******/ 				case "prepare":
/******/ 					blockingPromises.push(promise);
/******/ 					return promise;
/******/ 				default:
/******/ 					return promise;
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function waitForBlockingPromises(fn) {
/******/ 			if (blockingPromises.length === 0) return fn();
/******/ 			var blocker = blockingPromises;
/******/ 			blockingPromises = [];
/******/ 			return Promise.all(blocker).then(function () {
/******/ 				return waitForBlockingPromises(fn);
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function hotCheck(applyOnUpdate) {
/******/ 			if (currentStatus !== "idle") {
/******/ 				throw new Error("check() is only allowed in idle status");
/******/ 			}
/******/ 			return setStatus("check")
/******/ 				.then(__webpack_require__.hmrM)
/******/ 				.then(function (update) {
/******/ 					if (!update) {
/******/ 						return setStatus(applyInvalidatedModules() ? "ready" : "idle").then(
/******/ 							function () {
/******/ 								return null;
/******/ 							}
/******/ 						);
/******/ 					}
/******/ 		
/******/ 					return setStatus("prepare").then(function () {
/******/ 						var updatedModules = [];
/******/ 						blockingPromises = [];
/******/ 						currentUpdateApplyHandlers = [];
/******/ 		
/******/ 						return Promise.all(
/******/ 							Object.keys(__webpack_require__.hmrC).reduce(function (
/******/ 								promises,
/******/ 								key
/******/ 							) {
/******/ 								__webpack_require__.hmrC[key](
/******/ 									update.c,
/******/ 									update.r,
/******/ 									update.m,
/******/ 									promises,
/******/ 									currentUpdateApplyHandlers,
/******/ 									updatedModules
/******/ 								);
/******/ 								return promises;
/******/ 							},
/******/ 							[])
/******/ 						).then(function () {
/******/ 							return waitForBlockingPromises(function () {
/******/ 								if (applyOnUpdate) {
/******/ 									return internalApply(applyOnUpdate);
/******/ 								} else {
/******/ 									return setStatus("ready").then(function () {
/******/ 										return updatedModules;
/******/ 									});
/******/ 								}
/******/ 							});
/******/ 						});
/******/ 					});
/******/ 				});
/******/ 		}
/******/ 		
/******/ 		function hotApply(options) {
/******/ 			if (currentStatus !== "ready") {
/******/ 				return Promise.resolve().then(function () {
/******/ 					throw new Error("apply() is only allowed in ready status");
/******/ 				});
/******/ 			}
/******/ 			return internalApply(options);
/******/ 		}
/******/ 		
/******/ 		function internalApply(options) {
/******/ 			options = options || {};
/******/ 		
/******/ 			applyInvalidatedModules();
/******/ 		
/******/ 			var results = currentUpdateApplyHandlers.map(function (handler) {
/******/ 				return handler(options);
/******/ 			});
/******/ 			currentUpdateApplyHandlers = undefined;
/******/ 		
/******/ 			var errors = results
/******/ 				.map(function (r) {
/******/ 					return r.error;
/******/ 				})
/******/ 				.filter(Boolean);
/******/ 		
/******/ 			if (errors.length > 0) {
/******/ 				return setStatus("abort").then(function () {
/******/ 					throw errors[0];
/******/ 				});
/******/ 			}
/******/ 		
/******/ 			// Now in "dispose" phase
/******/ 			var disposePromise = setStatus("dispose");
/******/ 		
/******/ 			results.forEach(function (result) {
/******/ 				if (result.dispose) result.dispose();
/******/ 			});
/******/ 		
/******/ 			// Now in "apply" phase
/******/ 			var applyPromise = setStatus("apply");
/******/ 		
/******/ 			var error;
/******/ 			var reportError = function (err) {
/******/ 				if (!error) error = err;
/******/ 			};
/******/ 		
/******/ 			var outdatedModules = [];
/******/ 			results.forEach(function (result) {
/******/ 				if (result.apply) {
/******/ 					var modules = result.apply(reportError);
/******/ 					if (modules) {
/******/ 						for (var i = 0; i < modules.length; i++) {
/******/ 							outdatedModules.push(modules[i]);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			});
/******/ 		
/******/ 			return Promise.all([disposePromise, applyPromise]).then(function () {
/******/ 				// handle errors in accept handlers and self accepted module load
/******/ 				if (error) {
/******/ 					return setStatus("fail").then(function () {
/******/ 						throw error;
/******/ 					});
/******/ 				}
/******/ 		
/******/ 				if (queuedInvalidatedModules) {
/******/ 					return internalApply(options).then(function (list) {
/******/ 						outdatedModules.forEach(function (moduleId) {
/******/ 							if (list.indexOf(moduleId) < 0) list.push(moduleId);
/******/ 						});
/******/ 						return list;
/******/ 					});
/******/ 				}
/******/ 		
/******/ 				return setStatus("idle").then(function () {
/******/ 					return outdatedModules;
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function applyInvalidatedModules() {
/******/ 			if (queuedInvalidatedModules) {
/******/ 				if (!currentUpdateApplyHandlers) currentUpdateApplyHandlers = [];
/******/ 				Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 					queuedInvalidatedModules.forEach(function (moduleId) {
/******/ 						__webpack_require__.hmrI[key](
/******/ 							moduleId,
/******/ 							currentUpdateApplyHandlers
/******/ 						);
/******/ 					});
/******/ 				});
/******/ 				queuedInvalidatedModules = undefined;
/******/ 				return true;
/******/ 			}
/******/ 		}
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = __webpack_require__.hmrS_jsonp = __webpack_require__.hmrS_jsonp || {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		var currentUpdatedModulesList;
/******/ 		var waitingUpdateResolves = {};
/******/ 		function loadUpdateChunk(chunkId) {
/******/ 			return new Promise((resolve, reject) => {
/******/ 				waitingUpdateResolves[chunkId] = resolve;
/******/ 				// start update chunk loading
/******/ 				var url = __webpack_require__.p + __webpack_require__.hu(chunkId);
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				var loadingEnded = (event) => {
/******/ 					if(waitingUpdateResolves[chunkId]) {
/******/ 						waitingUpdateResolves[chunkId] = undefined
/******/ 						var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 						var realSrc = event && event.target && event.target.src;
/******/ 						error.message = 'Loading hot update chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 						error.name = 'ChunkLoadError';
/******/ 						error.type = errorType;
/******/ 						error.request = realSrc;
/******/ 						reject(error);
/******/ 					}
/******/ 				};
/******/ 				__webpack_require__.l(url, loadingEnded);
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		self["webpackHotUpdatewebpack1"] = (chunkId, moreModules, runtime) => {
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					currentUpdate[moduleId] = moreModules[moduleId];
/******/ 					if(currentUpdatedModulesList) currentUpdatedModulesList.push(moduleId);
/******/ 				}
/******/ 			}
/******/ 			if(runtime) currentUpdateRuntime.push(runtime);
/******/ 			if(waitingUpdateResolves[chunkId]) {
/******/ 				waitingUpdateResolves[chunkId]();
/******/ 				waitingUpdateResolves[chunkId] = undefined;
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		var currentUpdateChunks;
/******/ 		var currentUpdate;
/******/ 		var currentUpdateRemovedChunks;
/******/ 		var currentUpdateRuntime;
/******/ 		function applyHandler(options) {
/******/ 			if (__webpack_require__.f) delete __webpack_require__.f.jsonpHmr;
/******/ 			currentUpdateChunks = undefined;
/******/ 			function getAffectedModuleEffects(updateModuleId) {
/******/ 				var outdatedModules = [updateModuleId];
/******/ 				var outdatedDependencies = {};
/******/ 		
/******/ 				var queue = outdatedModules.map(function (id) {
/******/ 					return {
/******/ 						chain: [id],
/******/ 						id: id
/******/ 					};
/******/ 				});
/******/ 				while (queue.length > 0) {
/******/ 					var queueItem = queue.pop();
/******/ 					var moduleId = queueItem.id;
/******/ 					var chain = queueItem.chain;
/******/ 					var module = __webpack_require__.c[moduleId];
/******/ 					if (
/******/ 						!module ||
/******/ 						(module.hot._selfAccepted && !module.hot._selfInvalidated)
/******/ 					)
/******/ 						continue;
/******/ 					if (module.hot._selfDeclined) {
/******/ 						return {
/******/ 							type: "self-declined",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					if (module.hot._main) {
/******/ 						return {
/******/ 							type: "unaccepted",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					for (var i = 0; i < module.parents.length; i++) {
/******/ 						var parentId = module.parents[i];
/******/ 						var parent = __webpack_require__.c[parentId];
/******/ 						if (!parent) continue;
/******/ 						if (parent.hot._declinedDependencies[moduleId]) {
/******/ 							return {
/******/ 								type: "declined",
/******/ 								chain: chain.concat([parentId]),
/******/ 								moduleId: moduleId,
/******/ 								parentId: parentId
/******/ 							};
/******/ 						}
/******/ 						if (outdatedModules.indexOf(parentId) !== -1) continue;
/******/ 						if (parent.hot._acceptedDependencies[moduleId]) {
/******/ 							if (!outdatedDependencies[parentId])
/******/ 								outdatedDependencies[parentId] = [];
/******/ 							addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 							continue;
/******/ 						}
/******/ 						delete outdatedDependencies[parentId];
/******/ 						outdatedModules.push(parentId);
/******/ 						queue.push({
/******/ 							chain: chain.concat([parentId]),
/******/ 							id: parentId
/******/ 						});
/******/ 					}
/******/ 				}
/******/ 		
/******/ 				return {
/******/ 					type: "accepted",
/******/ 					moduleId: updateModuleId,
/******/ 					outdatedModules: outdatedModules,
/******/ 					outdatedDependencies: outdatedDependencies
/******/ 				};
/******/ 			}
/******/ 		
/******/ 			function addAllToSet(a, b) {
/******/ 				for (var i = 0; i < b.length; i++) {
/******/ 					var item = b[i];
/******/ 					if (a.indexOf(item) === -1) a.push(item);
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			// at begin all updates modules are outdated
/******/ 			// the "outdated" status can propagate to parents if they don't accept the children
/******/ 			var outdatedDependencies = {};
/******/ 			var outdatedModules = [];
/******/ 			var appliedUpdate = {};
/******/ 		
/******/ 			var warnUnexpectedRequire = function warnUnexpectedRequire(module) {
/******/ 				console.warn(
/******/ 					"[HMR] unexpected require(" + module.id + ") to disposed module"
/******/ 				);
/******/ 			};
/******/ 		
/******/ 			for (var moduleId in currentUpdate) {
/******/ 				if (__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 					var newModuleFactory = currentUpdate[moduleId];
/******/ 					/** @type {TODO} */
/******/ 					var result;
/******/ 					if (newModuleFactory) {
/******/ 						result = getAffectedModuleEffects(moduleId);
/******/ 					} else {
/******/ 						result = {
/******/ 							type: "disposed",
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					/** @type {Error|false} */
/******/ 					var abortError = false;
/******/ 					var doApply = false;
/******/ 					var doDispose = false;
/******/ 					var chainInfo = "";
/******/ 					if (result.chain) {
/******/ 						chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 					}
/******/ 					switch (result.type) {
/******/ 						case "self-declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of self decline: " +
/******/ 										result.moduleId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of declined dependency: " +
/******/ 										result.moduleId +
/******/ 										" in " +
/******/ 										result.parentId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "unaccepted":
/******/ 							if (options.onUnaccepted) options.onUnaccepted(result);
/******/ 							if (!options.ignoreUnaccepted)
/******/ 								abortError = new Error(
/******/ 									"Aborted because " + moduleId + " is not accepted" + chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "accepted":
/******/ 							if (options.onAccepted) options.onAccepted(result);
/******/ 							doApply = true;
/******/ 							break;
/******/ 						case "disposed":
/******/ 							if (options.onDisposed) options.onDisposed(result);
/******/ 							doDispose = true;
/******/ 							break;
/******/ 						default:
/******/ 							throw new Error("Unexception type " + result.type);
/******/ 					}
/******/ 					if (abortError) {
/******/ 						return {
/******/ 							error: abortError
/******/ 						};
/******/ 					}
/******/ 					if (doApply) {
/******/ 						appliedUpdate[moduleId] = newModuleFactory;
/******/ 						addAllToSet(outdatedModules, result.outdatedModules);
/******/ 						for (moduleId in result.outdatedDependencies) {
/******/ 							if (__webpack_require__.o(result.outdatedDependencies, moduleId)) {
/******/ 								if (!outdatedDependencies[moduleId])
/******/ 									outdatedDependencies[moduleId] = [];
/******/ 								addAllToSet(
/******/ 									outdatedDependencies[moduleId],
/******/ 									result.outdatedDependencies[moduleId]
/******/ 								);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 					if (doDispose) {
/******/ 						addAllToSet(outdatedModules, [result.moduleId]);
/******/ 						appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 			currentUpdate = undefined;
/******/ 		
/******/ 			// Store self accepted outdated modules to require them later by the module system
/******/ 			var outdatedSelfAcceptedModules = [];
/******/ 			for (var j = 0; j < outdatedModules.length; j++) {
/******/ 				var outdatedModuleId = outdatedModules[j];
/******/ 				var module = __webpack_require__.c[outdatedModuleId];
/******/ 				if (
/******/ 					module &&
/******/ 					(module.hot._selfAccepted || module.hot._main) &&
/******/ 					// removed self-accepted modules should not be required
/******/ 					appliedUpdate[outdatedModuleId] !== warnUnexpectedRequire &&
/******/ 					// when called invalidate self-accepting is not possible
/******/ 					!module.hot._selfInvalidated
/******/ 				) {
/******/ 					outdatedSelfAcceptedModules.push({
/******/ 						module: outdatedModuleId,
/******/ 						require: module.hot._requireSelf,
/******/ 						errorHandler: module.hot._selfAccepted
/******/ 					});
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			var moduleOutdatedDependencies;
/******/ 		
/******/ 			return {
/******/ 				dispose: function () {
/******/ 					currentUpdateRemovedChunks.forEach(function (chunkId) {
/******/ 						delete installedChunks[chunkId];
/******/ 					});
/******/ 					currentUpdateRemovedChunks = undefined;
/******/ 		
/******/ 					var idx;
/******/ 					var queue = outdatedModules.slice();
/******/ 					while (queue.length > 0) {
/******/ 						var moduleId = queue.pop();
/******/ 						var module = __webpack_require__.c[moduleId];
/******/ 						if (!module) continue;
/******/ 		
/******/ 						var data = {};
/******/ 		
/******/ 						// Call dispose handlers
/******/ 						var disposeHandlers = module.hot._disposeHandlers;
/******/ 						for (j = 0; j < disposeHandlers.length; j++) {
/******/ 							disposeHandlers[j].call(null, data);
/******/ 						}
/******/ 						__webpack_require__.hmrD[moduleId] = data;
/******/ 		
/******/ 						// disable module (this disables requires from this module)
/******/ 						module.hot.active = false;
/******/ 		
/******/ 						// remove module from cache
/******/ 						delete __webpack_require__.c[moduleId];
/******/ 		
/******/ 						// when disposing there is no need to call dispose handler
/******/ 						delete outdatedDependencies[moduleId];
/******/ 		
/******/ 						// remove "parents" references from all children
/******/ 						for (j = 0; j < module.children.length; j++) {
/******/ 							var child = __webpack_require__.c[module.children[j]];
/******/ 							if (!child) continue;
/******/ 							idx = child.parents.indexOf(moduleId);
/******/ 							if (idx >= 0) {
/******/ 								child.parents.splice(idx, 1);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// remove outdated dependency from module children
/******/ 					var dependency;
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								for (j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									dependency = moduleOutdatedDependencies[j];
/******/ 									idx = module.children.indexOf(dependency);
/******/ 									if (idx >= 0) module.children.splice(idx, 1);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				},
/******/ 				apply: function (reportError) {
/******/ 					// insert new code
/******/ 					for (var updateModuleId in appliedUpdate) {
/******/ 						if (__webpack_require__.o(appliedUpdate, updateModuleId)) {
/******/ 							__webpack_require__.m[updateModuleId] = appliedUpdate[updateModuleId];
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// run new runtime modules
/******/ 					for (var i = 0; i < currentUpdateRuntime.length; i++) {
/******/ 						currentUpdateRuntime[i](__webpack_require__);
/******/ 					}
/******/ 		
/******/ 					// call accept handlers
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							var module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								var callbacks = [];
/******/ 								var errorHandlers = [];
/******/ 								var dependenciesForCallbacks = [];
/******/ 								for (var j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									var dependency = moduleOutdatedDependencies[j];
/******/ 									var acceptCallback =
/******/ 										module.hot._acceptedDependencies[dependency];
/******/ 									var errorHandler =
/******/ 										module.hot._acceptedErrorHandlers[dependency];
/******/ 									if (acceptCallback) {
/******/ 										if (callbacks.indexOf(acceptCallback) !== -1) continue;
/******/ 										callbacks.push(acceptCallback);
/******/ 										errorHandlers.push(errorHandler);
/******/ 										dependenciesForCallbacks.push(dependency);
/******/ 									}
/******/ 								}
/******/ 								for (var k = 0; k < callbacks.length; k++) {
/******/ 									try {
/******/ 										callbacks[k].call(null, moduleOutdatedDependencies);
/******/ 									} catch (err) {
/******/ 										if (typeof errorHandlers[k] === "function") {
/******/ 											try {
/******/ 												errorHandlers[k](err, {
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k]
/******/ 												});
/******/ 											} catch (err2) {
/******/ 												if (options.onErrored) {
/******/ 													options.onErrored({
/******/ 														type: "accept-error-handler-errored",
/******/ 														moduleId: outdatedModuleId,
/******/ 														dependencyId: dependenciesForCallbacks[k],
/******/ 														error: err2,
/******/ 														originalError: err
/******/ 													});
/******/ 												}
/******/ 												if (!options.ignoreErrored) {
/******/ 													reportError(err2);
/******/ 													reportError(err);
/******/ 												}
/******/ 											}
/******/ 										} else {
/******/ 											if (options.onErrored) {
/******/ 												options.onErrored({
/******/ 													type: "accept-errored",
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k],
/******/ 													error: err
/******/ 												});
/******/ 											}
/******/ 											if (!options.ignoreErrored) {
/******/ 												reportError(err);
/******/ 											}
/******/ 										}
/******/ 									}
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// Load self accepted modules
/******/ 					for (var o = 0; o < outdatedSelfAcceptedModules.length; o++) {
/******/ 						var item = outdatedSelfAcceptedModules[o];
/******/ 						var moduleId = item.module;
/******/ 						try {
/******/ 							item.require(moduleId);
/******/ 						} catch (err) {
/******/ 							if (typeof item.errorHandler === "function") {
/******/ 								try {
/******/ 									item.errorHandler(err, {
/******/ 										moduleId: moduleId,
/******/ 										module: __webpack_require__.c[moduleId]
/******/ 									});
/******/ 								} catch (err2) {
/******/ 									if (options.onErrored) {
/******/ 										options.onErrored({
/******/ 											type: "self-accept-error-handler-errored",
/******/ 											moduleId: moduleId,
/******/ 											error: err2,
/******/ 											originalError: err
/******/ 										});
/******/ 									}
/******/ 									if (!options.ignoreErrored) {
/******/ 										reportError(err2);
/******/ 										reportError(err);
/******/ 									}
/******/ 								}
/******/ 							} else {
/******/ 								if (options.onErrored) {
/******/ 									options.onErrored({
/******/ 										type: "self-accept-errored",
/******/ 										moduleId: moduleId,
/******/ 										error: err
/******/ 									});
/******/ 								}
/******/ 								if (!options.ignoreErrored) {
/******/ 									reportError(err);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					return outdatedModules;
/******/ 				}
/******/ 			};
/******/ 		}
/******/ 		__webpack_require__.hmrI.jsonp = function (moduleId, applyHandlers) {
/******/ 			if (!currentUpdate) {
/******/ 				currentUpdate = {};
/******/ 				currentUpdateRuntime = [];
/******/ 				currentUpdateRemovedChunks = [];
/******/ 				applyHandlers.push(applyHandler);
/******/ 			}
/******/ 			if (!__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 				currentUpdate[moduleId] = __webpack_require__.m[moduleId];
/******/ 			}
/******/ 		};
/******/ 		__webpack_require__.hmrC.jsonp = function (
/******/ 			chunkIds,
/******/ 			removedChunks,
/******/ 			removedModules,
/******/ 			promises,
/******/ 			applyHandlers,
/******/ 			updatedModulesList
/******/ 		) {
/******/ 			applyHandlers.push(applyHandler);
/******/ 			currentUpdateChunks = {};
/******/ 			currentUpdateRemovedChunks = removedChunks;
/******/ 			currentUpdate = removedModules.reduce(function (obj, key) {
/******/ 				obj[key] = false;
/******/ 				return obj;
/******/ 			}, {});
/******/ 			currentUpdateRuntime = [];
/******/ 			chunkIds.forEach(function (chunkId) {
/******/ 				if (
/******/ 					__webpack_require__.o(installedChunks, chunkId) &&
/******/ 					installedChunks[chunkId] !== undefined
/******/ 				) {
/******/ 					promises.push(loadUpdateChunk(chunkId, updatedModulesList));
/******/ 					currentUpdateChunks[chunkId] = true;
/******/ 				}
/******/ 			});
/******/ 			if (__webpack_require__.f) {
/******/ 				__webpack_require__.f.jsonpHmr = function (chunkId, promises) {
/******/ 					if (
/******/ 						currentUpdateChunks &&
/******/ 						!__webpack_require__.o(currentUpdateChunks, chunkId) &&
/******/ 						__webpack_require__.o(installedChunks, chunkId) &&
/******/ 						installedChunks[chunkId] !== undefined
/******/ 					) {
/******/ 						promises.push(loadUpdateChunk(chunkId));
/******/ 						currentUpdateChunks[chunkId] = true;
/******/ 					}
/******/ 				};
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.hmrM = () => {
/******/ 			if (typeof fetch === "undefined") throw new Error("No browser support: need fetch API");
/******/ 			return fetch(__webpack_require__.p + __webpack_require__.hmrF()).then((response) => {
/******/ 				if(response.status === 404) return; // no update available
/******/ 				if(!response.ok) throw new Error("Failed to fetch update manifest " + response.statusText);
/******/ 				return response.json();
/******/ 			});
/******/ 		};
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// module cache are used so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;