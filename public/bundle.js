(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["example"] = factory();
	else
		root["com"] = root["com"] || {}, root["com"]["example"] = factory();
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.ts":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/*! exports provided: App */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "App", function() { return App; });
/* harmony import */ var _lib_html_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/html-util */ "./src/lib/html-util.ts");
/* harmony import */ var _model_TodoListModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./model/TodoListModel */ "./src/model/TodoListModel.ts");
/* harmony import */ var _model_TodoItemModel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./model/TodoItemModel */ "./src/model/TodoItemModel.ts");
/* harmony import */ var _view_TodoListView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view/TodoListView */ "./src/view/TodoListView.ts");




var App = /** @class */ (function () {
    function App() {
        this.todoListView = new _view_TodoListView__WEBPACK_IMPORTED_MODULE_3__["TodoListView"]();
        this.todoListModel = new _model_TodoListModel__WEBPACK_IMPORTED_MODULE_1__["TodoListModel"]();
    }
    /**
     * Todo を追加するときに呼ばれるリスナー関数
     * @param {string} title
     */
    App.prototype.handleAdd = function (title) {
        this.todoListModel.addTodo(new _model_TodoItemModel__WEBPACK_IMPORTED_MODULE_2__["TodoItemModel"](title));
    };
    App.prototype.mount = function () {
        var _this = this;
        var formElement = document.querySelector("#js-form");
        var inputElement = document.querySelector("#js-form-input");
        var containerElement = document.querySelector("#js-todo-list");
        this.todoListModel.onChange(function () {
            var todoItems = _this.todoListModel.getTodoItems();
            var todoListElement = _this.todoListView.createElement(todoItems);
            if (todoListElement !== null && containerElement !== null) {
                Object(_lib_html_util__WEBPACK_IMPORTED_MODULE_0__["render"])(todoListElement, containerElement);
            }
        });
        if (formElement !== null && inputElement !== null) {
            formElement.addEventListener("submit", function (event) {
                event.preventDefault();
                _this.handleAdd(inputElement.value);
                inputElement.value = "";
            });
        }
    };
    return App;
}());



/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app */ "./src/app.ts");
/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/style.scss */ "./src/styles/style.scss");
/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_style_scss__WEBPACK_IMPORTED_MODULE_1__);


var app = new _app__WEBPACK_IMPORTED_MODULE_0__["App"]();
app.mount();


/***/ }),

/***/ "./src/lib/EventEmitter.js":
/*!*********************************!*\
  !*** ./src/lib/EventEmitter.js ***!
  \*********************************/
/*! exports provided: EventEmitter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventEmitter", function() { return EventEmitter; });
class EventEmitter {
  constructor() {
    this._listeners = new Map();
  }

  /**
   * 指定したイベントが実行されたときに呼び出されるリスナー関数を登録する
   * @param {string} type イベント名
   * @param {Function} listener イベントリスナー
   */
  addEventListener(type, listener) {
    if (!this._listeners.has(type)) {
      this._listeners.set(type, new Set());
    }
    const listenerSet = this._listeners.get(type);
    listenerSet.add(listener);
  }

  /**
   * 指定したイベントをディスパッチする
   * @param {string} type イベント名
   */
  emit(type) {
    const listenerSet = this._listeners.get(type);
    if (!listenerSet) {
      return;
    }
    listenerSet.forEach(listener => {
      listener.call(this);
    });
  }

  /**
   * 指定したイベントのイベントリスナーを解除する
   * @param {string} type イベント名
   * @param {Function} listener イベントリスナー
   */
  removeEventListenerSet(type, listener) {
    const listenerSet = this._listeners.get(type);
    if (!listenerSet) {
      return;
    }
    listenerSet.forEach(ownListener => {
      if (ownListener === listener) {
        listenerSet.delete(listener);
      }
    });
  }
}


/***/ }),

/***/ "./src/lib/html-util.ts":
/*!******************************!*\
  !*** ./src/lib/html-util.ts ***!
  \******************************/
/*! exports provided: escapeSpecialChars, html2Element, element, render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "escapeSpecialChars", function() { return escapeSpecialChars; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "html2Element", function() { return html2Element; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "element", function() { return element; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
function escapeSpecialChars(str) {
    return str
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}
function html2Element(html) {
    var template = document.createElement("template");
    template.innerHTML = html;
    return template.content.firstElementChild;
}
function element(strings) {
    var values = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        values[_i - 1] = arguments[_i];
    }
    var htmlString = strings.reduce(function (result, str, i) {
        var value = values[i - 1];
        if (typeof value === "string") {
            return result + escapeSpecialChars(value) + str;
        }
        else {
            return result + String(value) + str;
        }
    });
    return html2Element(htmlString);
}
function render(bodyElement, containerElement) {
    containerElement.innerHTML = "";
    containerElement.appendChild(bodyElement);
}


/***/ }),

/***/ "./src/model/TodoItemModel.ts":
/*!************************************!*\
  !*** ./src/model/TodoItemModel.ts ***!
  \************************************/
/*! exports provided: TodoItemModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoItemModel", function() { return TodoItemModel; });
var todoIdx = 0;
var TodoItemModel = /** @class */ (function () {
    function TodoItemModel(title) {
        this.id = todoIdx++;
        this.title = title;
    }
    return TodoItemModel;
}());



/***/ }),

/***/ "./src/model/TodoListModel.ts":
/*!************************************!*\
  !*** ./src/model/TodoListModel.ts ***!
  \************************************/
/*! exports provided: TodoListModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoListModel", function() { return TodoListModel; });
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var EventEmitter = __webpack_require__(/*! ../lib/EventEmitter.js */ "./src/lib/EventEmitter.js");
var TodoListModel = /** @class */ (function (_super) {
    __extends(TodoListModel, _super);
    /**
     * @param {TodoListModel[]} [items] 初期アイテム一覧（デフォルトは空の配列）
     */
    function TodoListModel(items) {
        if (items === void 0) { items = []; }
        var _this = _super.call(this) || this;
        _this.items = items;
        return _this;
    }
    /**
     * 表示できる TodoItem の配列
     * @returns {TodoItemModel[]}
     */
    TodoListModel.prototype.getTodoItems = function () {
        return this.items;
    };
    /**
     * TodoList の状態が更新されたときに呼び出されるリスナー関数を登録する
     * @param {Function} listener
     */
    TodoListModel.prototype.onChange = function (listener) {
        this.addEventListener("change", listener);
    };
    /**
     * 状態が変更されたときに呼ぶ。登録済みのリスナー関数を呼び出す
     */
    TodoListModel.prototype.emitChange = function () {
        this.emit("change");
    };
    /**
     * TodoItem を追加する
     * @param {TodoItemModel} todoItem
     */
    TodoListModel.prototype.addTodo = function (todoItem) {
        this.items.push(todoItem);
        this.emitChange();
    };
    return TodoListModel;
}(EventEmitter));



/***/ }),

/***/ "./src/styles/style.scss":
/*!*******************************!*\
  !*** ./src/styles/style.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/view/TodoItemView.ts":
/*!**********************************!*\
  !*** ./src/view/TodoItemView.ts ***!
  \**********************************/
/*! exports provided: TodoItemView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoItemView", function() { return TodoItemView; });
/* harmony import */ var _lib_html_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/html-util */ "./src/lib/html-util.ts");
var __makeTemplateObject = (undefined && undefined.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

var TodoItemView = /** @class */ (function () {
    function TodoItemView() {
    }
    /**
     * `todoItem`に対応するTodoアイテムのHTML要素を作成して返す
     * @param {TodoItemModel} todoItem
     * @returns {Element}
     */
    TodoItemView.prototype.createElement = function (todoItem) {
        var todoItemElement = Object(_lib_html_util__WEBPACK_IMPORTED_MODULE_0__["element"])(templateObject_1 || (templateObject_1 = __makeTemplateObject(["<li>", "</li>"], ["<li>", "</li>"])), todoItem.title);
        return todoItemElement;
    };
    return TodoItemView;
}());

var templateObject_1;


/***/ }),

/***/ "./src/view/TodoListView.ts":
/*!**********************************!*\
  !*** ./src/view/TodoListView.ts ***!
  \**********************************/
/*! exports provided: TodoListView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoListView", function() { return TodoListView; });
/* harmony import */ var _lib_html_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/html-util */ "./src/lib/html-util.ts");
/* harmony import */ var _TodoItemView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TodoItemView */ "./src/view/TodoItemView.ts");
var __makeTemplateObject = (undefined && undefined.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};


var TodoListView = /** @class */ (function () {
    function TodoListView() {
    }
    /**
     * `todoItems` に対応する Todo リストの HTML 要素を作成して返す
     * @param {TodoItemModel[]} todoItems TodoItemModel の配列
     * @param {function({id: string, completed: boolean})} onUpdateTodo チェックボックスの更新イベントリスナー
     * @param {function({id: string})} onDeleteTodo 削除ボタンのクリックイベントリスナー
     * @returns {Element} TodoItemModel の配列に対応したリストの HTML 要素
     */
    TodoListView.prototype.createElement = function (todoItems) {
        var todoListElement = Object(_lib_html_util__WEBPACK_IMPORTED_MODULE_0__["element"])(templateObject_1 || (templateObject_1 = __makeTemplateObject(["<ul />"], ["<ul />"])));
        if (todoListElement !== null) {
            todoItems.forEach(function (todoItem) {
                var todoItemView = new _TodoItemView__WEBPACK_IMPORTED_MODULE_1__["TodoItemView"]();
                var todoItemElement = todoItemView.createElement(todoItem);
                if (todoItemElement !== null) {
                    todoListElement.appendChild(todoItemElement);
                }
            });
        }
        return todoListElement;
    };
    return TodoListView;
}());

var templateObject_1;


/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jb20uZXhhbXBsZS93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vY29tLmV4YW1wbGUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vY29tLmV4YW1wbGUvLi9zcmMvYXBwLnRzIiwid2VicGFjazovL2NvbS5leGFtcGxlLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovL2NvbS5leGFtcGxlLy4vc3JjL2xpYi9FdmVudEVtaXR0ZXIuanMiLCJ3ZWJwYWNrOi8vY29tLmV4YW1wbGUvLi9zcmMvbGliL2h0bWwtdXRpbC50cyIsIndlYnBhY2s6Ly9jb20uZXhhbXBsZS8uL3NyYy9tb2RlbC9Ub2RvSXRlbU1vZGVsLnRzIiwid2VicGFjazovL2NvbS5leGFtcGxlLy4vc3JjL21vZGVsL1RvZG9MaXN0TW9kZWwudHMiLCJ3ZWJwYWNrOi8vY29tLmV4YW1wbGUvLi9zcmMvc3R5bGVzL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vY29tLmV4YW1wbGUvLi9zcmMvdmlldy9Ub2RvSXRlbVZpZXcudHMiLCJ3ZWJwYWNrOi8vY29tLmV4YW1wbGUvLi9zcmMvdmlldy9Ub2RvTGlzdFZpZXcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQztBQUNqQyxDQUFDO0FBQ0QsTztRQ1ZBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNB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QTtJQVVBLENBQUM7SUFUQzs7OztPQUlHO0lBQ0gsb0NBQWEsR0FBYixVQUFjLFFBQXVCO1FBQ25DLElBQU0sZUFBZSxHQUFtQiw4REFBTyx3RkFBTyxFQUFjLE9BQU8sS0FBckIsUUFBUSxDQUFDLEtBQUssQ0FBTyxDQUFDO1FBQzVFLE9BQU8sZUFBZSxDQUFDO0lBQ3pCLENBQUM7SUFDSCxtQkFBQztBQUFELENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDYjBDO0FBQ0c7QUFJOUM7SUFBQTtJQXVCQSxDQUFDO0lBdEJDOzs7Ozs7T0FNRztJQUNILG9DQUFhLEdBQWIsVUFBYyxTQUF3QjtRQUNwQyxJQUFNLGVBQWUsR0FBbUIsOERBQU8sbUZBQVEsS0FBQztRQUV4RCxJQUFHLGVBQWUsS0FBSyxJQUFJLEVBQUU7WUFDM0IsU0FBUyxDQUFDLE9BQU8sQ0FBQyxVQUFDLFFBQXVCO2dCQUN4QyxJQUFNLFlBQVksR0FBRyxJQUFJLDBEQUFZLEVBQUUsQ0FBQztnQkFDeEMsSUFBTSxlQUFlLEdBQW1CLFlBQVksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBRTdFLElBQUcsZUFBZSxLQUFLLElBQUksRUFBRTtvQkFDM0IsZUFBZSxDQUFDLFdBQVcsQ0FBQyxlQUFlLENBQUMsQ0FBQztpQkFDOUM7WUFDSCxDQUFDLENBQUMsQ0FBQztTQUNKO1FBQ0QsT0FBTyxlQUFlLENBQUM7SUFDekIsQ0FBQztJQUNILG1CQUFDO0FBQUQsQ0FBQyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJleGFtcGxlXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcImNvbVwiXSA9IHJvb3RbXCJjb21cIl0gfHwge30sIHJvb3RbXCJjb21cIl1bXCJleGFtcGxlXCJdID0gZmFjdG9yeSgpO1xufSkod2luZG93LCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC50c1wiKTtcbiIsImltcG9ydCB7IHJlbmRlciB9IGZyb20gXCIuL2xpYi9odG1sLXV0aWxcIjtcbmltcG9ydCB7IFRvZG9MaXN0TW9kZWwgfSBmcm9tIFwiLi9tb2RlbC9Ub2RvTGlzdE1vZGVsXCI7XG5pbXBvcnQgeyBUb2RvSXRlbU1vZGVsIH0gZnJvbSBcIi4vbW9kZWwvVG9kb0l0ZW1Nb2RlbFwiO1xuaW1wb3J0IHsgVG9kb0xpc3RWaWV3IH0gZnJvbSBcIi4vdmlldy9Ub2RvTGlzdFZpZXdcIjtcblxuZXhwb3J0IGNsYXNzIEFwcCB7XG4gIHByaXZhdGUgdG9kb0xpc3RWaWV3OiBUb2RvTGlzdFZpZXc7XG4gIHByaXZhdGUgdG9kb0xpc3RNb2RlbDogVG9kb0xpc3RNb2RlbDtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnRvZG9MaXN0VmlldyA9IG5ldyBUb2RvTGlzdFZpZXcoKTtcbiAgICB0aGlzLnRvZG9MaXN0TW9kZWwgPSBuZXcgVG9kb0xpc3RNb2RlbCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFRvZG8g44KS6L+95Yqg44GZ44KL44Go44GN44Gr5ZG844Gw44KM44KL44Oq44K544OK44O86Zai5pWwXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0aXRsZVxuICAgKi9cbiAgaGFuZGxlQWRkKHRpdGxlOiBzdHJpbmcpIHtcbiAgICB0aGlzLnRvZG9MaXN0TW9kZWwuYWRkVG9kbyhuZXcgVG9kb0l0ZW1Nb2RlbCh0aXRsZSkpO1xuICB9XG5cbiAgbW91bnQoKSB7XG4gICAgY29uc3QgZm9ybUVsZW1lbnQ6IEhUTUxFbGVtZW50IHwgbnVsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjanMtZm9ybVwiKTtcbiAgICBjb25zdCBpbnB1dEVsZW1lbnQ6IEhUTUxJbnB1dEVsZW1lbnQgfCBudWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNqcy1mb3JtLWlucHV0XCIpO1xuICAgIGNvbnN0IGNvbnRhaW5lckVsZW1lbnQ6IEhUTUxFbGVtZW50IHwgbnVsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjanMtdG9kby1saXN0XCIpO1xuXG4gICAgdGhpcy50b2RvTGlzdE1vZGVsLm9uQ2hhbmdlKCgpID0+IHtcbiAgICAgIGNvbnN0IHRvZG9JdGVtcyA9IHRoaXMudG9kb0xpc3RNb2RlbC5nZXRUb2RvSXRlbXMoKTtcbiAgICAgIGNvbnN0IHRvZG9MaXN0RWxlbWVudDogRWxlbWVudCB8IG51bGwgPSB0aGlzLnRvZG9MaXN0Vmlldy5jcmVhdGVFbGVtZW50KHRvZG9JdGVtcyk7XG5cbiAgICAgIGlmICh0b2RvTGlzdEVsZW1lbnQgIT09IG51bGwgJiYgY29udGFpbmVyRWxlbWVudCAhPT0gbnVsbCkge1xuICAgICAgICByZW5kZXIodG9kb0xpc3RFbGVtZW50LCBjb250YWluZXJFbGVtZW50KTtcbiAgICAgIH1cbiAgICB9KTtcblxuXG4gICAgaWYoZm9ybUVsZW1lbnQgIT09IG51bGwgJiYgaW5wdXRFbGVtZW50ICE9PSBudWxsKSB7XG4gICAgICBmb3JtRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGV2ZW50ID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpcy5oYW5kbGVBZGQoaW5wdXRFbGVtZW50LnZhbHVlKTtcbiAgICAgICAgaW5wdXRFbGVtZW50LnZhbHVlID0gXCJcIjtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufSIsImltcG9ydCB7IEFwcCB9IGZyb20gXCIuL2FwcFwiO1xuaW1wb3J0ICcuL3N0eWxlcy9zdHlsZS5zY3NzJztcblxuY29uc3QgYXBwID0gbmV3IEFwcCgpO1xuYXBwLm1vdW50KCk7IiwiZXhwb3J0IGNsYXNzIEV2ZW50RW1pdHRlciB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuX2xpc3RlbmVycyA9IG5ldyBNYXAoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiDmjIflrprjgZfjgZ/jgqTjg5njg7Pjg4jjgYzlrp/ooYzjgZXjgozjgZ/jgajjgY3jgavlkbzjgbPlh7rjgZXjgozjgovjg6rjgrnjg4rjg7zplqLmlbDjgpLnmbvpjLLjgZnjgotcbiAgICogQHBhcmFtIHtzdHJpbmd9IHR5cGUg44Kk44OZ44Oz44OI5ZCNXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGxpc3RlbmVyIOOCpOODmeODs+ODiOODquOCueODiuODvFxuICAgKi9cbiAgYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lcikge1xuICAgIGlmICghdGhpcy5fbGlzdGVuZXJzLmhhcyh0eXBlKSkge1xuICAgICAgdGhpcy5fbGlzdGVuZXJzLnNldCh0eXBlLCBuZXcgU2V0KCkpO1xuICAgIH1cbiAgICBjb25zdCBsaXN0ZW5lclNldCA9IHRoaXMuX2xpc3RlbmVycy5nZXQodHlwZSk7XG4gICAgbGlzdGVuZXJTZXQuYWRkKGxpc3RlbmVyKTtcbiAgfVxuXG4gIC8qKlxuICAgKiDmjIflrprjgZfjgZ/jgqTjg5njg7Pjg4jjgpLjg4fjgqPjgrnjg5Hjg4Pjg4HjgZnjgotcbiAgICogQHBhcmFtIHtzdHJpbmd9IHR5cGUg44Kk44OZ44Oz44OI5ZCNXG4gICAqL1xuICBlbWl0KHR5cGUpIHtcbiAgICBjb25zdCBsaXN0ZW5lclNldCA9IHRoaXMuX2xpc3RlbmVycy5nZXQodHlwZSk7XG4gICAgaWYgKCFsaXN0ZW5lclNldCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBsaXN0ZW5lclNldC5mb3JFYWNoKGxpc3RlbmVyID0+IHtcbiAgICAgIGxpc3RlbmVyLmNhbGwodGhpcyk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICog5oyH5a6a44GX44Gf44Kk44OZ44Oz44OI44Gu44Kk44OZ44Oz44OI44Oq44K544OK44O844KS6Kej6Zmk44GZ44KLXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlIOOCpOODmeODs+ODiOWQjVxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBsaXN0ZW5lciDjgqTjg5njg7Pjg4jjg6rjgrnjg4rjg7xcbiAgICovXG4gIHJlbW92ZUV2ZW50TGlzdGVuZXJTZXQodHlwZSwgbGlzdGVuZXIpIHtcbiAgICBjb25zdCBsaXN0ZW5lclNldCA9IHRoaXMuX2xpc3RlbmVycy5nZXQodHlwZSk7XG4gICAgaWYgKCFsaXN0ZW5lclNldCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBsaXN0ZW5lclNldC5mb3JFYWNoKG93bkxpc3RlbmVyID0+IHtcbiAgICAgIGlmIChvd25MaXN0ZW5lciA9PT0gbGlzdGVuZXIpIHtcbiAgICAgICAgbGlzdGVuZXJTZXQuZGVsZXRlKGxpc3RlbmVyKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGVzY2FwZVNwZWNpYWxDaGFycyhzdHI6IHN0cmluZykge1xuICByZXR1cm4gc3RyXG4gICAgLnJlcGxhY2UoLyYvZywgXCImYW1wO1wiKVxuICAgIC5yZXBsYWNlKC88L2csIFwiJmx0O1wiKVxuICAgIC5yZXBsYWNlKC8+L2csIFwiJmd0O1wiKVxuICAgIC5yZXBsYWNlKC9cIi9nLCBcIiZxdW90O1wiKVxuICAgIC5yZXBsYWNlKC8nL2csIFwiJiMwMzk7XCIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaHRtbDJFbGVtZW50KGh0bWw6IHN0cmluZykge1xuICBjb25zdCB0ZW1wbGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZW1wbGF0ZVwiKTtcbiAgdGVtcGxhdGUuaW5uZXJIVE1MID0gaHRtbDtcbiAgcmV0dXJuIHRlbXBsYXRlLmNvbnRlbnQuZmlyc3RFbGVtZW50Q2hpbGQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlbGVtZW50KHN0cmluZ3M6IFRlbXBsYXRlU3RyaW5nc0FycmF5LCAuLi52YWx1ZXM6IHN0cmluZ1tdKSB7XG4gIGNvbnN0IGh0bWxTdHJpbmcgPSBzdHJpbmdzLnJlZHVjZSgocmVzdWx0LCBzdHIsIGkpID0+IHtcbiAgICBjb25zdCB2YWx1ZSA9IHZhbHVlc1tpIC0gMV07XG5cbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSBcInN0cmluZ1wiKSB7XG4gICAgICByZXR1cm4gcmVzdWx0ICsgZXNjYXBlU3BlY2lhbENoYXJzKHZhbHVlKSArIHN0cjtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHJlc3VsdCArIFN0cmluZyh2YWx1ZSkgKyBzdHI7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIGh0bWwyRWxlbWVudChodG1sU3RyaW5nKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlcihib2R5RWxlbWVudDogRWxlbWVudCwgY29udGFpbmVyRWxlbWVudDogSFRNTEVsZW1lbnQpIHtcbiAgY29udGFpbmVyRWxlbWVudC5pbm5lckhUTUwgPSBcIlwiO1xuICBjb250YWluZXJFbGVtZW50LmFwcGVuZENoaWxkKGJvZHlFbGVtZW50KTtcbn1cbiIsImxldCB0b2RvSWR4ID0gMDtcblxuZXhwb3J0IGNsYXNzIFRvZG9JdGVtTW9kZWwge1xuICAvKipcbiAgICogQHBhcmFtIHtzdHJpbmd9IHRpdGxlIFRvZG8g44Ki44Kk44OG44Og44Gu44K/44Kk44OI44OrXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gY29tcGxldGVkIFRvZG8g44Ki44Kk44OG44Og44GM5a6M5LqG5riI44G/44Gq44KJ44GwIHRydWXjgIHjgZ3jgYbjgafjgarjgYTloLTlkIjjga8gZmFsc2VcbiAgICovXG4gIHB1YmxpYyBpZDogbnVtYmVyO1xuICBwdWJsaWMgdGl0bGU6IHN0cmluZztcbiAgY29uc3RydWN0b3IodGl0bGU6IHN0cmluZykge1xuICAgIHRoaXMuaWQgPSB0b2RvSWR4Kys7XG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICB9XG59XG4iLCJpbXBvcnQgeyBUb2RvSXRlbU1vZGVsIH0gZnJvbSBcIi4vVG9kb0l0ZW1Nb2RlbFwiO1xuXG5jb25zdCBFdmVudEVtaXR0ZXIgPSByZXF1aXJlKFwiLi4vbGliL0V2ZW50RW1pdHRlci5qc1wiKVxuXG5leHBvcnQgY2xhc3MgVG9kb0xpc3RNb2RlbCBleHRlbmRzIEV2ZW50RW1pdHRlciB7XG4gIC8qKlxuICAgKiBAcGFyYW0ge1RvZG9MaXN0TW9kZWxbXX0gW2l0ZW1zXSDliJ3mnJ/jgqLjgqTjg4bjg6DkuIDopqfvvIjjg4fjg5Xjgqnjg6vjg4jjga/nqbrjga7phY3liJfvvIlcbiAgICovXG5cbiAgY29uc3RydWN0b3IoaXRlbXMgPSBbXSkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5pdGVtcyA9IGl0ZW1zO1xuICB9XG5cbiAgLyoqXG4gICAqIOihqOekuuOBp+OBjeOCiyBUb2RvSXRlbSDjga7phY3liJdcbiAgICogQHJldHVybnMge1RvZG9JdGVtTW9kZWxbXX1cbiAgICovXG4gIGdldFRvZG9JdGVtcygpIHtcbiAgICByZXR1cm4gdGhpcy5pdGVtcztcbiAgfVxuXG4gIC8qKlxuICAgKiBUb2RvTGlzdCDjga7nirbmhYvjgYzmm7TmlrDjgZXjgozjgZ/jgajjgY3jgavlkbzjgbPlh7rjgZXjgozjgovjg6rjgrnjg4rjg7zplqLmlbDjgpLnmbvpjLLjgZnjgotcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gbGlzdGVuZXJcbiAgICovXG4gIG9uQ2hhbmdlKGxpc3RlbmVyOiBGdW5jdGlvbikge1xuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBsaXN0ZW5lcik7XG4gIH1cblxuICAvKipcbiAgICog54q25oWL44GM5aSJ5pu044GV44KM44Gf44Go44GN44Gr5ZG844G244CC55m76Yyy5riI44G/44Gu44Oq44K544OK44O86Zai5pWw44KS5ZG844Gz5Ye644GZXG4gICAqL1xuICBlbWl0Q2hhbmdlKCkge1xuICAgIHRoaXMuZW1pdChcImNoYW5nZVwiKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUb2RvSXRlbSDjgpLov73liqDjgZnjgotcbiAgICogQHBhcmFtIHtUb2RvSXRlbU1vZGVsfSB0b2RvSXRlbVxuICAgKi9cbiAgYWRkVG9kbyh0b2RvSXRlbTogVG9kb0l0ZW1Nb2RlbCkge1xuICAgIHRoaXMuaXRlbXMucHVzaCh0b2RvSXRlbSk7XG4gICAgdGhpcy5lbWl0Q2hhbmdlKCk7XG4gIH1cbn1cbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCB7IFRvZG9JdGVtTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWwvVG9kb0l0ZW1Nb2RlbFwiO1xuaW1wb3J0IHsgZWxlbWVudCB9IGZyb20gXCIuLi9saWIvaHRtbC11dGlsXCI7XG5cbmV4cG9ydCBjbGFzcyBUb2RvSXRlbVZpZXcge1xuICAvKipcbiAgICogYHRvZG9JdGVtYOOBq+WvvuW/nOOBmeOCi1RvZG/jgqLjgqTjg4bjg6Djga5IVE1M6KaB57Sg44KS5L2c5oiQ44GX44Gm6L+U44GZXG4gICAqIEBwYXJhbSB7VG9kb0l0ZW1Nb2RlbH0gdG9kb0l0ZW1cbiAgICogQHJldHVybnMge0VsZW1lbnR9XG4gICAqL1xuICBjcmVhdGVFbGVtZW50KHRvZG9JdGVtOiBUb2RvSXRlbU1vZGVsKSB7XG4gICAgY29uc3QgdG9kb0l0ZW1FbGVtZW50OiBFbGVtZW50IHwgbnVsbCA9IGVsZW1lbnRgPGxpPiR7dG9kb0l0ZW0udGl0bGV9PC9saT5gO1xuICAgIHJldHVybiB0b2RvSXRlbUVsZW1lbnQ7XG4gIH1cbn1cbiIsImltcG9ydCB7IGVsZW1lbnQgfSBmcm9tIFwiLi4vbGliL2h0bWwtdXRpbFwiO1xuaW1wb3J0IHsgVG9kb0l0ZW1WaWV3IH0gZnJvbSBcIi4vVG9kb0l0ZW1WaWV3XCI7XG5pbXBvcnQgeyBUb2RvTGlzdE1vZGVsIH0gZnJvbSBcIi4uL21vZGVsL1RvZG9MaXN0TW9kZWxcIjtcbmltcG9ydCB7IFRvZG9JdGVtTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWwvVG9kb0l0ZW1Nb2RlbFwiXG5cbmV4cG9ydCBjbGFzcyBUb2RvTGlzdFZpZXcge1xuICAvKipcbiAgICogYHRvZG9JdGVtc2Ag44Gr5a++5b+c44GZ44KLIFRvZG8g44Oq44K544OI44GuIEhUTUwg6KaB57Sg44KS5L2c5oiQ44GX44Gm6L+U44GZXG4gICAqIEBwYXJhbSB7VG9kb0l0ZW1Nb2RlbFtdfSB0b2RvSXRlbXMgVG9kb0l0ZW1Nb2RlbCDjga7phY3liJdcbiAgICogQHBhcmFtIHtmdW5jdGlvbih7aWQ6IHN0cmluZywgY29tcGxldGVkOiBib29sZWFufSl9IG9uVXBkYXRlVG9kbyDjg4Hjgqfjg4Pjgq/jg5zjg4Pjgq/jgrnjga7mm7TmlrDjgqTjg5njg7Pjg4jjg6rjgrnjg4rjg7xcbiAgICogQHBhcmFtIHtmdW5jdGlvbih7aWQ6IHN0cmluZ30pfSBvbkRlbGV0ZVRvZG8g5YmK6Zmk44Oc44K/44Oz44Gu44Kv44Oq44OD44Kv44Kk44OZ44Oz44OI44Oq44K544OK44O8XG4gICAqIEByZXR1cm5zIHtFbGVtZW50fSBUb2RvSXRlbU1vZGVsIOOBrumFjeWIl+OBq+WvvuW/nOOBl+OBn+ODquOCueODiOOBriBIVE1MIOimgee0oFxuICAgKi9cbiAgY3JlYXRlRWxlbWVudCh0b2RvSXRlbXM6IFRvZG9MaXN0TW9kZWwpIHtcbiAgICBjb25zdCB0b2RvTGlzdEVsZW1lbnQ6IEVsZW1lbnQgfCBudWxsID0gZWxlbWVudGA8dWwgLz5gO1xuXG4gICAgaWYodG9kb0xpc3RFbGVtZW50ICE9PSBudWxsKSB7XG4gICAgICB0b2RvSXRlbXMuZm9yRWFjaCgodG9kb0l0ZW06IFRvZG9JdGVtTW9kZWwpID0+IHtcbiAgICAgICAgY29uc3QgdG9kb0l0ZW1WaWV3ID0gbmV3IFRvZG9JdGVtVmlldygpO1xuICAgICAgICBjb25zdCB0b2RvSXRlbUVsZW1lbnQ6IEVsZW1lbnQgfCBudWxsID0gdG9kb0l0ZW1WaWV3LmNyZWF0ZUVsZW1lbnQodG9kb0l0ZW0pO1xuXG4gICAgICAgIGlmKHRvZG9JdGVtRWxlbWVudCAhPT0gbnVsbCkge1xuICAgICAgICAgIHRvZG9MaXN0RWxlbWVudC5hcHBlbmRDaGlsZCh0b2RvSXRlbUVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHRvZG9MaXN0RWxlbWVudDtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==