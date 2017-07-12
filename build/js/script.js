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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Created by xxoTk on 014 14.06.17.
 */


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Books = function () {
	function Books(opts) {
		_classCallCheck(this, Books);

		this.author = opts.author;
		this.title = opts.title;
		this.isbn = opts.isbn;
		this.circulation = opts.circulation;
		this.date = opts.date;
	}

	//TODO: разобраться с get/set. Не работают


	_createClass(Books, [{
		key: "getAuthor",
		get: function get() {
			return this.author;
		}
	}, {
		key: "getTitle",
		get: function get() {
			return this.title;
		}
	}, {
		key: "getIsbn",
		get: function get() {
			return this.isbn;
		}
	}, {
		key: "getCirculation",
		get: function get() {
			return this.circulation;
		}
	}, {
		key: "getDate",
		get: function get() {
			return this.date;
		}
	}]);

	return Books;
}();

exports.default = Books;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Created by xxoTk on 016 16.06.17.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

var _book = __webpack_require__(0);

var _book2 = _interopRequireDefault(_book);

var _fuse = __webpack_require__(5);

var _fuse2 = _interopRequireDefault(_fuse);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Library = function () {
	function Library(booksJson) {
		_classCallCheck(this, Library);

		this.books = JSON.parse(booksJson);
		this.setSearchOptions({
			maxPatternLength: 20,
			shouldSort: true,
			threshold: 0.5,
			keys: [{
				name: 'title',
				weight: 0.5
			}, {
				name: 'author',
				weight: 0.5
			}]
		});
	}

	_createClass(Library, [{
		key: 'filter',
		value: function filter(searchText) {
			if (searchText != "") {
				var fuse = new _fuse2.default(this.books, this.searchOptions);
				this.books = fuse.search(searchText);
				console.log(this.books);
			}
			return this;
		}
	}, {
		key: 'addBook',
		value: function addBook(book) {
			this.books.push(book);
			return this;
		}
	}, {
		key: 'editBook',
		value: function editBook(book) {
			for (var i = 0; i < this.books.length; i++) {
				if (this.books[i].isbn == book.isbn) {
					this.books[i] = book;
					break;
				}
			}
			return this;
		}
	}, {
		key: 'getIndexByIsbn',
		value: function getIndexByIsbn(isbn) {
			for (var i = 0; i < this.books.length; i++) {
				if (this.books[i].isbn == isbn) return i;
			}
			return null;
		}
	}, {
		key: 'getBookByIsbn',
		value: function getBookByIsbn(isbn) {
			return this.books[this.getIndexByIsbn(isbn)];
		}
	}, {
		key: 'deleteBookByIsbn',
		value: function deleteBookByIsbn(isbn) {
			this.books = this.books.filter(function (book) {
				return book.isbn != isbn;
			});
			return this;
		}
	}, {
		key: 'getJson',
		value: function getJson() {
			return JSON.stringify(this.books);
		}
	}, {
		key: 'getBooks',
		value: function getBooks() {
			return this.books.map(function (book) {
				return new _book2.default(book);
			});
		}
	}, {
		key: 'setSearchOptions',
		value: function setSearchOptions(options) {
			this.searchOptions = options;
			return this;
		}
	}]);

	return Library;
}();

exports.default = Library;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Created by xxoTk on 012 12.06.17.
 */


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.readJson = exports.saveJson = undefined;

var _init_books = __webpack_require__(4);

var _init_books2 = _interopRequireDefault(_init_books);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.saveJson = saveJson;
exports.readJson = readJson;


function saveJson(data) {
	var a = void 0;
	localStorage.setItem("data", data);
}

function readJson() {
	if (dataIsEmpty(localStorage.getItem("data"))) {
		setInitialData();
	}
	return localStorage.getItem("data");
}

function setInitialData() {
	saveJson(JSON.stringify(_init_books2.default));
}

function dataIsEmpty(data) {
	return data === null || data == "{}" || data == "[]" || data == "";
}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _book = __webpack_require__(0);

var _book2 = _interopRequireDefault(_book);

var _library = __webpack_require__(1);

var _library2 = _interopRequireDefault(_library);

var _repository = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function displayBook(book) {
	var bookItemTemplate = '\n\t\t<li class="list-group-item el-books-list_item">\n\t\t\t<div>\n\t\t\t\t<div class = "row">\n\t\t\t\t\t<div class="col-lg-7 col-md-7 col-sm-7">\n\t\t\t\t\t\t<div class = "row">\n\t\t\t\t\t\t\t<div class="col-lg-1 col-md-1 col-sm-1">\n\t\t\t\t\t\t\t\t<div class = "el-books-list_item-badge"></div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class="col-lg-11 col-md-11 col-sm-11">\n\t\t\t\t\t\t\t\t<p><strong>\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435: </strong><i>"<span class = "title">' + book.title + '</span>"<span></i></p>\n\t\t\t\t\t\t\t\t<p><strong>\u0410\u0432\u0442\u043E\u0440: </strong><span class = "el-books-list_item_author">' + book.author + '</span></p>\t\t\t\t\t\t\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="col-lg-4 col-md-4 col-sm-4">\n\t\t\t\t\t\t<p><strong>ISBN: </strong><span class = "el-books-list_item_isbn">' + book.isbn + '</span></p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="col-lg-1 col-md-1 col-sm-1">\n\t\t\t\t\t\t<button type="button" class="close el-books-list_item_delete rounded-circle" aria-label="Close">\n\t\t\t\t\t\t\t<span class="glyphicon glyphicon-trash el-books-list_item_trash-icon" aria-hidden="true"></span>\n\t\t\t\t\t\t</button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</li>';
	var $template = $(bookItemTemplate);
	$template.appendTo(".el-books-list");
}

function getLibrary() {
	return new _library2.default((0, _repository.readJson)());
}

function saveLibrary(library) {
	(0, _repository.saveJson)(library.getJson());
}

function displayAllBooks() {
	clearBooksList();
	displayBooks(getLibrary().getBooks());
}

function displayBooks(books) {
	var _iteratorNormalCompletion = true;
	var _didIteratorError = false;
	var _iteratorError = undefined;

	try {
		for (var _iterator = books[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
			var book = _step.value;

			displayBook(book);
		}
	} catch (err) {
		_didIteratorError = true;
		_iteratorError = err;
	} finally {
		try {
			if (!_iteratorNormalCompletion && _iterator.return) {
				_iterator.return();
			}
		} finally {
			if (_didIteratorError) {
				throw _iteratorError;
			}
		}
	}
}

// function displayBooksFilter(filter) {
// 	let data = readDataMap();
// }

function clearBooksList() {
	$(".el-books-list li").remove();
}

function setForm(book) {
	$("#el-input-group-date > input").val(book.date);
	$("#el-input-group-title > input").val(book.title);
	$("#el-input-group-author > input").val(book.author);
	$("#el-input-group-circulation > input").val(book.circulation);
	$("#el-input-group-isbn > input").val(book.isbn);
}

function readForm() {
	return new _book2.default({
		author: $("#el-input-group-author > input").val(),
		title: $("#el-input-group-title > input").val(),
		isbn: $("#el-input-group-isbn > input").val(),
		circulation: $("#el-input-group-circulation > input").val(),
		date: $("#el-input-group-date > input").val()
	});
}

function getIsbnByBookItem(book_item) {
	return $(book_item).find(".el-books-list_item_isbn").text();
}

function disabledInputIsbn() {
	$("#el-input-group-isbn > input").prop("disabled", true);
}

function enabledInputIsbn() {
	$("#el-input-group-isbn > input").prop("disabled", false);
}

function modeAddBook() {
	$(".el-button-add").show();

	$(".el-button-edit").hide();
	$(".el-button-close-edit-mode").hide();
	$(".el-books-list_item").removeClass("active");
	enabledInputIsbn();
}

function modeEditBook() {
	$(".el-button-add").hide();

	$(".el-button-edit").show();
	$(".el-button-close-edit-mode").show();

	disabledInputIsbn();
}

function colourSelectedBookListItem(element) {
	$(element).addClass("active");
	$(element).siblings().removeClass("active");
};

function selectItem(item) {
	var book = getLibrary().getBookByIsbn(getIsbnByBookItem(this));
	setForm(book);
	colourSelectedBookListItem(this);
	modeEditBook();
	//	$(this).before("<div class='badge'>Текст</div>")
}

function deleteItem(item) {
	var $book_item = $(this).closest("li");
	var isbn = getIsbnByBookItem($book_item);

	saveLibrary(getLibrary().deleteBookByIsbn(isbn));
	displayAllBooks();
}

// TODO: ращобраться с функциями
$(document).on("click", ".el-books-list_item", function () {
	selectItem.call(this);
}).on("click", ".el-books-list_item_delete", function (e) {
	deleteItem.call(this);
	e.stopPropagation(); // Убераем всплытие, чтобы не 'выбиралась' книга
}).on("click", ".el-button-add", function () {
	var book = readForm();
	saveLibrary(getLibrary().addBook(book));
	modeAddBook();
	displayAllBooks();
}).on("click", ".el-button-edit", function () {
	var book = readForm();
	saveLibrary(getLibrary().editBook(book));
	displayAllBooks();
}).on("click", ".el-button-close-edit-mode", function () {
	modeAddBook();
}).on("mouseenter", ".el-books-list_item_delete", function () {
	$(this).closest("li").addClass("el-danger");
}).on("mouseleave", ".el-books-list_item_delete", function () {
	$(this).closest("li").removeClass("el-danger");
});
(function init() {
	displayAllBooks();
})();

$("[data-toggle='tooltip']").tooltip();
$(".el-sortable").sortable({
	axis: "y",
	grid: [30, 30],
	delay: 200,
	distance: 35,
	cursor: "move",
	opacity: 0.6,
	handle: ".el-books-list_item-badge"
}).disableSelection();

$(".el-search-form input").keyup(function (eventObject) {
	var searchText = $(".el-search-form input").val();
	var result = getLibrary().filter(searchText).getBooks();
	clearBooksList();
	displayBooks(result);
});

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = [
	{
		"author": "Гоголь Николай Васильевич",
		"title": "Мертвые Души",
		"isbn": "978-5-389-01322-3",
		"date": "2014-01-10",
		"circulation": 4000
	},
	{
		"author": "Чак Паланик",
		"title": "Удушье",
		"isbn": "978-5-17-019888-7",
		"date": "2006-06-17",
		"circulation": 12500
	},
	{
		"author": "Савиных Виктор Петрович",
		"title": "Сто рецептов поддержки потенции на орбитальной станции",
		"isbn": "978-5-7516-1263-4",
		"date": "1998-04-20",
		"circulation": 1000
	},
	{
		"author": "Роберт Энсон Хайнлайн",
		"title": "Не убоюсь я зла",
		"isbn": "8-483-02516-3",
		"date": "1992-10-10",
		"circulation": 100000
	},
	{
		"author": "Виктор Пелевин",
		"title": "Generation 'П'",
		"isbn": "5-7027-0949-7",
		"date": "1999-01-08",
		"circulation": 2500
	},
	{
		"author": "Виктор Пелевин",
		"title": "S.N.U.F.F.",
		"isbn": "978-5-699-70362-3",
		"date": "2014-08-06",
		"circulation": 13000
	}
];

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * Fuse.js v3.0.5 - Lightweight fuzzy-search (http://fusejs.io)
 * 
 * Copyright (c) 2012-2017 Kirollos Risk (http://kiro.me)
 * All Rights Reserved. Apache Software License 2.0
 * 
 * http://www.apache.org/licenses/LICENSE-2.0
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("Fuse", [], factory);
	else if(typeof exports === 'object')
		exports["Fuse"] = factory();
	else
		root["Fuse"] = factory();
})(this, function() {
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (obj) {
  return Object.prototype.toString.call(obj) === '[object Array]';
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var bitapRegexSearch = __webpack_require__(5);
var bitapSearch = __webpack_require__(7);
var patternAlphabet = __webpack_require__(4);

var Bitap = function () {
  function Bitap(pattern, _ref) {
    var _ref$location = _ref.location,
        location = _ref$location === undefined ? 0 : _ref$location,
        _ref$distance = _ref.distance,
        distance = _ref$distance === undefined ? 100 : _ref$distance,
        _ref$threshold = _ref.threshold,
        threshold = _ref$threshold === undefined ? 0.6 : _ref$threshold,
        _ref$maxPatternLength = _ref.maxPatternLength,
        maxPatternLength = _ref$maxPatternLength === undefined ? 32 : _ref$maxPatternLength,
        _ref$isCaseSensitive = _ref.isCaseSensitive,
        isCaseSensitive = _ref$isCaseSensitive === undefined ? false : _ref$isCaseSensitive,
        _ref$tokenSeparator = _ref.tokenSeparator,
        tokenSeparator = _ref$tokenSeparator === undefined ? / +/g : _ref$tokenSeparator,
        _ref$findAllMatches = _ref.findAllMatches,
        findAllMatches = _ref$findAllMatches === undefined ? false : _ref$findAllMatches,
        _ref$minMatchCharLeng = _ref.minMatchCharLength,
        minMatchCharLength = _ref$minMatchCharLeng === undefined ? 1 : _ref$minMatchCharLeng;

    _classCallCheck(this, Bitap);

    this.options = {
      location: location,
      distance: distance,
      threshold: threshold,
      maxPatternLength: maxPatternLength,
      isCaseSensitive: isCaseSensitive,
      tokenSeparator: tokenSeparator,
      findAllMatches: findAllMatches,
      minMatchCharLength: minMatchCharLength
    };

    this.pattern = this.options.isCaseSensitive ? pattern : pattern.toLowerCase();

    if (this.pattern.length <= maxPatternLength) {
      this.patternAlphabet = patternAlphabet(this.pattern);
    }
  }

  _createClass(Bitap, [{
    key: 'search',
    value: function search(text) {
      if (!this.options.isCaseSensitive) {
        text = text.toLowerCase();
      }

      // Exact match
      if (this.pattern === text) {
        return {
          isMatch: true,
          score: 0,
          matchedIndices: [[0, text.length - 1]]
        };
      }

      // When pattern length is greater than the machine word length, just do a a regex comparison
      var _options = this.options,
          maxPatternLength = _options.maxPatternLength,
          tokenSeparator = _options.tokenSeparator;

      if (this.pattern.length > maxPatternLength) {
        return bitapRegexSearch(text, this.pattern, tokenSeparator);
      }

      // Otherwise, use Bitap algorithm
      var _options2 = this.options,
          location = _options2.location,
          distance = _options2.distance,
          threshold = _options2.threshold,
          findAllMatches = _options2.findAllMatches,
          minMatchCharLength = _options2.minMatchCharLength;

      return bitapSearch(text, this.pattern, this.patternAlphabet, {
        location: location,
        distance: distance,
        threshold: threshold,
        findAllMatches: findAllMatches,
        minMatchCharLength: minMatchCharLength
      });
    }
  }]);

  return Bitap;
}();

// let x = new Bitap("od mn war", {})
// let result = x.search("Old Man's War")
// console.log(result)

module.exports = Bitap;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isArray = __webpack_require__(0);

var deepValue = function deepValue(obj, path, list) {
  if (!path) {
    // If there's no path left, we've gotten to the object we care about.
    list.push(obj);
  } else {
    var dotIndex = path.indexOf('.');
    var firstSegment = path;
    var remaining = null;

    if (dotIndex !== -1) {
      firstSegment = path.slice(0, dotIndex);
      remaining = path.slice(dotIndex + 1);
    }

    var value = obj[firstSegment];

    if (value !== null && value !== undefined) {
      if (!remaining && (typeof value === 'string' || typeof value === 'number')) {
        list.push(value);
      } else if (isArray(value)) {
        // Search each item in the array.
        for (var i = 0, len = value.length; i < len; i += 1) {
          deepValue(value[i], remaining, list);
        }
      } else if (remaining) {
        // An object. Recurse further.
        deepValue(value, remaining, list);
      }
    }
  }

  return list;
};

module.exports = function (obj, path) {
  return deepValue(obj, path, []);
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function () {
  var matchmask = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var minMatchCharLength = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

  var matchedIndices = [];
  var start = -1;
  var end = -1;
  var i = 0;

  for (var len = matchmask.length; i < len; i += 1) {
    var match = matchmask[i];
    if (match && start === -1) {
      start = i;
    } else if (!match && start !== -1) {
      end = i - 1;
      if (end - start + 1 >= minMatchCharLength) {
        matchedIndices.push([start, end]);
      }
      start = -1;
    }
  }

  // (i-1 - start) + 1 => i - start
  if (matchmask[i - 1] && i - start >= minMatchCharLength) {
    matchedIndices.push([start, i - 1]);
  }

  return matchedIndices;
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (pattern) {
  var mask = {};
  var len = pattern.length;

  for (var i = 0; i < len; i += 1) {
    mask[pattern.charAt(i)] = 0;
  }

  for (var _i = 0; _i < len; _i += 1) {
    mask[pattern.charAt(_i)] |= 1 << len - _i - 1;
  }

  return mask;
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var SPECIAL_CHARS_REGEX = /[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g;

module.exports = function (text, pattern) {
  var tokenSeparator = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : / +/g;

  var regex = new RegExp(pattern.replace(SPECIAL_CHARS_REGEX, '\\$&').replace(tokenSeparator, '|'));
  var matches = text.match(regex);
  var isMatch = !!matches;
  var matchedIndices = [];

  if (isMatch) {
    for (var i = 0, matchesLen = matches.length; i < matchesLen; i += 1) {
      var match = matches[i];
      matchedIndices.push([text.indexOf(match), match.length - 1]);
    }
  }

  return {
    // TODO: revisit this score
    score: isMatch ? 0.5 : 1,
    isMatch: isMatch,
    matchedIndices: matchedIndices
  };
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (pattern, _ref) {
  var _ref$errors = _ref.errors,
      errors = _ref$errors === undefined ? 0 : _ref$errors,
      _ref$currentLocation = _ref.currentLocation,
      currentLocation = _ref$currentLocation === undefined ? 0 : _ref$currentLocation,
      _ref$expectedLocation = _ref.expectedLocation,
      expectedLocation = _ref$expectedLocation === undefined ? 0 : _ref$expectedLocation,
      _ref$distance = _ref.distance,
      distance = _ref$distance === undefined ? 100 : _ref$distance;

  var accuracy = errors / pattern.length;
  var proximity = Math.abs(expectedLocation - currentLocation);

  if (!distance) {
    // Dodge divide by zero error.
    return proximity ? 1.0 : accuracy;
  }

  return accuracy + proximity / distance;
};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bitapScore = __webpack_require__(6);
var matchedIndices = __webpack_require__(3);

module.exports = function (text, pattern, patternAlphabet, _ref) {
  var _ref$location = _ref.location,
      location = _ref$location === undefined ? 0 : _ref$location,
      _ref$distance = _ref.distance,
      distance = _ref$distance === undefined ? 100 : _ref$distance,
      _ref$threshold = _ref.threshold,
      threshold = _ref$threshold === undefined ? 0.6 : _ref$threshold,
      _ref$findAllMatches = _ref.findAllMatches,
      findAllMatches = _ref$findAllMatches === undefined ? false : _ref$findAllMatches,
      _ref$minMatchCharLeng = _ref.minMatchCharLength,
      minMatchCharLength = _ref$minMatchCharLeng === undefined ? 1 : _ref$minMatchCharLeng;

  var expectedLocation = location;
  // Set starting location at beginning text and initialize the alphabet.
  var textLen = text.length;
  // Highest score beyond which we give up.
  var currentThreshold = threshold;
  // Is there a nearby exact match? (speedup)
  var bestLocation = text.indexOf(pattern, expectedLocation);

  var patternLen = pattern.length;

  // a mask of the matches
  var matchMask = [];
  for (var i = 0; i < textLen; i += 1) {
    matchMask[i] = 0;
  }

  if (bestLocation !== -1) {
    var score = bitapScore(pattern, {
      errors: 0,
      currentLocation: bestLocation,
      expectedLocation: expectedLocation,
      distance: distance
    });
    currentThreshold = Math.min(score, currentThreshold);

    // What about in the other direction? (speed up)
    bestLocation = text.lastIndexOf(pattern, expectedLocation + patternLen);

    if (bestLocation !== -1) {
      var _score = bitapScore(pattern, {
        errors: 0,
        currentLocation: bestLocation,
        expectedLocation: expectedLocation,
        distance: distance
      });
      currentThreshold = Math.min(_score, currentThreshold);
    }
  }

  // Reset the best location
  bestLocation = -1;

  var lastBitArr = [];
  var finalScore = 1;
  var binMax = patternLen + textLen;

  var mask = 1 << patternLen - 1;

  for (var _i = 0; _i < patternLen; _i += 1) {
    // Scan for the best match; each iteration allows for one more error.
    // Run a binary search to determine how far from the match location we can stray
    // at this error level.
    var binMin = 0;
    var binMid = binMax;

    while (binMin < binMid) {
      var _score3 = bitapScore(pattern, {
        errors: _i,
        currentLocation: expectedLocation + binMid,
        expectedLocation: expectedLocation,
        distance: distance
      });

      if (_score3 <= currentThreshold) {
        binMin = binMid;
      } else {
        binMax = binMid;
      }

      binMid = Math.floor((binMax - binMin) / 2 + binMin);
    }

    // Use the result from this iteration as the maximum for the next.
    binMax = binMid;

    var start = Math.max(1, expectedLocation - binMid + 1);
    var finish = findAllMatches ? textLen : Math.min(expectedLocation + binMid, textLen) + patternLen;

    // Initialize the bit array
    var bitArr = Array(finish + 2);

    bitArr[finish + 1] = (1 << _i) - 1;

    for (var j = finish; j >= start; j -= 1) {
      var currentLocation = j - 1;
      var charMatch = patternAlphabet[text.charAt(currentLocation)];

      if (charMatch) {
        matchMask[currentLocation] = 1;
      }

      // First pass: exact match
      bitArr[j] = (bitArr[j + 1] << 1 | 1) & charMatch;

      // Subsequent passes: fuzzy match
      if (_i !== 0) {
        bitArr[j] |= (lastBitArr[j + 1] | lastBitArr[j]) << 1 | 1 | lastBitArr[j + 1];
      }

      if (bitArr[j] & mask) {
        finalScore = bitapScore(pattern, {
          errors: _i,
          currentLocation: currentLocation,
          expectedLocation: expectedLocation,
          distance: distance
        });

        // This match will almost certainly be better than any existing match.
        // But check anyway.
        if (finalScore <= currentThreshold) {
          // Indeed it is
          currentThreshold = finalScore;
          bestLocation = currentLocation;

          // Already passed `loc`, downhill from here on in.
          if (bestLocation <= expectedLocation) {
            break;
          }

          // When passing `bestLocation`, don't exceed our current distance from `expectedLocation`.
          start = Math.max(1, 2 * expectedLocation - bestLocation);
        }
      }
    }

    // No hope for a (better) match at greater error levels.
    var _score2 = bitapScore(pattern, {
      errors: _i + 1,
      currentLocation: expectedLocation,
      expectedLocation: expectedLocation,
      distance: distance
    });

    if (_score2 > currentThreshold) {
      break;
    }

    lastBitArr = bitArr;
  }

  // Count exact matches (those with a score of 0) to be "almost" exact
  return {
    isMatch: bestLocation >= 0,
    score: finalScore === 0 ? 0.001 : finalScore,
    matchedIndices: matchedIndices(matchMask, minMatchCharLength)
  };
};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Bitap = __webpack_require__(1);
var deepValue = __webpack_require__(2);
var isArray = __webpack_require__(0);

var Fuse = function () {
  function Fuse(list, _ref) {
    var _ref$location = _ref.location,
        location = _ref$location === undefined ? 0 : _ref$location,
        _ref$distance = _ref.distance,
        distance = _ref$distance === undefined ? 100 : _ref$distance,
        _ref$threshold = _ref.threshold,
        threshold = _ref$threshold === undefined ? 0.6 : _ref$threshold,
        _ref$maxPatternLength = _ref.maxPatternLength,
        maxPatternLength = _ref$maxPatternLength === undefined ? 32 : _ref$maxPatternLength,
        _ref$caseSensitive = _ref.caseSensitive,
        caseSensitive = _ref$caseSensitive === undefined ? false : _ref$caseSensitive,
        _ref$tokenSeparator = _ref.tokenSeparator,
        tokenSeparator = _ref$tokenSeparator === undefined ? / +/g : _ref$tokenSeparator,
        _ref$findAllMatches = _ref.findAllMatches,
        findAllMatches = _ref$findAllMatches === undefined ? false : _ref$findAllMatches,
        _ref$minMatchCharLeng = _ref.minMatchCharLength,
        minMatchCharLength = _ref$minMatchCharLeng === undefined ? 1 : _ref$minMatchCharLeng,
        _ref$id = _ref.id,
        id = _ref$id === undefined ? null : _ref$id,
        _ref$keys = _ref.keys,
        keys = _ref$keys === undefined ? [] : _ref$keys,
        _ref$shouldSort = _ref.shouldSort,
        shouldSort = _ref$shouldSort === undefined ? true : _ref$shouldSort,
        _ref$getFn = _ref.getFn,
        getFn = _ref$getFn === undefined ? deepValue : _ref$getFn,
        _ref$sortFn = _ref.sortFn,
        sortFn = _ref$sortFn === undefined ? function (a, b) {
      return a.score - b.score;
    } : _ref$sortFn,
        _ref$tokenize = _ref.tokenize,
        tokenize = _ref$tokenize === undefined ? false : _ref$tokenize,
        _ref$matchAllTokens = _ref.matchAllTokens,
        matchAllTokens = _ref$matchAllTokens === undefined ? false : _ref$matchAllTokens,
        _ref$includeMatches = _ref.includeMatches,
        includeMatches = _ref$includeMatches === undefined ? false : _ref$includeMatches,
        _ref$includeScore = _ref.includeScore,
        includeScore = _ref$includeScore === undefined ? false : _ref$includeScore,
        _ref$verbose = _ref.verbose,
        verbose = _ref$verbose === undefined ? false : _ref$verbose;

    _classCallCheck(this, Fuse);

    this.options = {
      location: location,
      distance: distance,
      threshold: threshold,
      maxPatternLength: maxPatternLength,
      isCaseSensitive: caseSensitive,
      tokenSeparator: tokenSeparator,
      findAllMatches: findAllMatches,
      minMatchCharLength: minMatchCharLength,
      id: id,
      keys: keys,
      includeMatches: includeMatches,
      includeScore: includeScore,
      shouldSort: shouldSort,
      getFn: getFn,
      sortFn: sortFn,
      verbose: verbose,
      tokenize: tokenize,
      matchAllTokens: matchAllTokens
    };

    this.setCollection(list);
  }

  _createClass(Fuse, [{
    key: 'setCollection',
    value: function setCollection(list) {
      this.list = list;
      return list;
    }
  }, {
    key: 'search',
    value: function search(pattern) {
      this._log('---------\nSearch pattern: "' + pattern + '"');

      var _prepareSearchers2 = this._prepareSearchers(pattern),
          tokenSearchers = _prepareSearchers2.tokenSearchers,
          fullSearcher = _prepareSearchers2.fullSearcher;

      var _search2 = this._search(tokenSearchers, fullSearcher),
          weights = _search2.weights,
          results = _search2.results;

      this._computeScore(weights, results);

      if (this.options.shouldSort) {
        this._sort(results);
      }

      return this._format(results);
    }
  }, {
    key: '_prepareSearchers',
    value: function _prepareSearchers() {
      var pattern = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

      var tokenSearchers = [];

      if (this.options.tokenize) {
        // Tokenize on the separator
        var tokens = pattern.split(this.options.tokenSeparator);
        for (var i = 0, len = tokens.length; i < len; i += 1) {
          tokenSearchers.push(new Bitap(tokens[i], this.options));
        }
      }

      var fullSearcher = new Bitap(pattern, this.options);

      return { tokenSearchers: tokenSearchers, fullSearcher: fullSearcher };
    }
  }, {
    key: '_search',
    value: function _search() {
      var tokenSearchers = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var fullSearcher = arguments[1];

      var list = this.list;
      var resultMap = {};
      var results = [];

      // Check the first item in the list, if it's a string, then we assume
      // that every item in the list is also a string, and thus it's a flattened array.
      if (typeof list[0] === 'string') {
        // Iterate over every item
        for (var i = 0, len = list.length; i < len; i += 1) {
          this._analyze({
            key: '',
            value: list[i],
            record: i,
            index: i
          }, {
            resultMap: resultMap,
            results: results,
            tokenSearchers: tokenSearchers,
            fullSearcher: fullSearcher
          });
        }

        return { weights: null, results: results };
      }

      // Otherwise, the first item is an Object (hopefully), and thus the searching
      // is done on the values of the keys of each item.
      var weights = {};
      for (var _i = 0, _len = list.length; _i < _len; _i += 1) {
        var item = list[_i];
        // Iterate over every key
        for (var j = 0, keysLen = this.options.keys.length; j < keysLen; j += 1) {
          var key = this.options.keys[j];
          if (typeof key !== 'string') {
            weights[key.name] = {
              weight: 1 - key.weight || 1
            };
            if (key.weight <= 0 || key.weight > 1) {
              throw new Error('Key weight has to be > 0 and <= 1');
            }
            key = key.name;
          } else {
            weights[key] = {
              weight: 1
            };
          }

          this._analyze({
            key: key,
            value: this.options.getFn(item, key),
            record: item,
            index: _i
          }, {
            resultMap: resultMap,
            results: results,
            tokenSearchers: tokenSearchers,
            fullSearcher: fullSearcher
          });
        }
      }

      return { weights: weights, results: results };
    }
  }, {
    key: '_analyze',
    value: function _analyze(_ref2, _ref3) {
      var key = _ref2.key,
          value = _ref2.value,
          record = _ref2.record,
          index = _ref2.index;
      var _ref3$tokenSearchers = _ref3.tokenSearchers,
          tokenSearchers = _ref3$tokenSearchers === undefined ? [] : _ref3$tokenSearchers,
          _ref3$fullSearcher = _ref3.fullSearcher,
          fullSearcher = _ref3$fullSearcher === undefined ? [] : _ref3$fullSearcher,
          _ref3$resultMap = _ref3.resultMap,
          resultMap = _ref3$resultMap === undefined ? {} : _ref3$resultMap,
          _ref3$results = _ref3.results,
          results = _ref3$results === undefined ? [] : _ref3$results;

      // Check if the texvaluet can be searched
      if (value === undefined || value === null) {
        return;
      }

      var exists = false;
      var averageScore = -1;
      var numTextMatches = 0;

      if (typeof value === 'string') {
        this._log('\nKey: ' + (key === '' ? '-' : key));

        var mainSearchResult = fullSearcher.search(value);
        this._log('Full text: "' + value + '", score: ' + mainSearchResult.score);

        if (this.options.tokenize) {
          var words = value.split(this.options.tokenSeparator);
          var scores = [];

          for (var i = 0; i < tokenSearchers.length; i += 1) {
            var tokenSearcher = tokenSearchers[i];

            this._log('\nPattern: "' + tokenSearcher.pattern + '"');

            // let tokenScores = []
            var hasMatchInText = false;

            for (var j = 0; j < words.length; j += 1) {
              var word = words[j];
              var tokenSearchResult = tokenSearcher.search(word);
              var obj = {};
              if (tokenSearchResult.isMatch) {
                obj[word] = tokenSearchResult.score;
                exists = true;
                hasMatchInText = true;
                scores.push(tokenSearchResult.score);
              } else {
                obj[word] = 1;
                if (!this.options.matchAllTokens) {
                  scores.push(1);
                }
              }
              this._log('Token: "' + word + '", score: ' + obj[word]);
              // tokenScores.push(obj)
            }

            if (hasMatchInText) {
              numTextMatches += 1;
            }
          }

          averageScore = scores[0];
          var scoresLen = scores.length;
          for (var _i2 = 1; _i2 < scoresLen; _i2 += 1) {
            averageScore += scores[_i2];
          }
          averageScore = averageScore / scoresLen;

          this._log('Token score average:', averageScore);
        }

        var finalScore = mainSearchResult.score;
        if (averageScore > -1) {
          finalScore = (finalScore + averageScore) / 2;
        }

        this._log('Score average:', finalScore);

        var checkTextMatches = this.options.tokenize && this.options.matchAllTokens ? numTextMatches >= tokenSearchers.length : true;

        this._log('\nCheck Matches: ' + checkTextMatches);

        // If a match is found, add the item to <rawResults>, including its score
        if ((exists || mainSearchResult.isMatch) && checkTextMatches) {
          // Check if the item already exists in our results
          var existingResult = resultMap[index];

          if (existingResult) {
            // Use the lowest score
            // existingResult.score, bitapResult.score
            existingResult.output.push({
              key: key,
              score: finalScore,
              matchedIndices: mainSearchResult.matchedIndices
            });
          } else {
            // Add it to the raw result list
            resultMap[index] = {
              item: record,
              output: [{
                key: key,
                score: finalScore,
                matchedIndices: mainSearchResult.matchedIndices
              }]
            };

            results.push(resultMap[index]);
          }
        }
      } else if (isArray(value)) {
        for (var _i3 = 0, len = value.length; _i3 < len; _i3 += 1) {
          this._analyze({
            key: key,
            value: value[_i3],
            record: record,
            index: index
          }, {
            resultMap: resultMap,
            results: results,
            tokenSearchers: tokenSearchers,
            fullSearcher: fullSearcher
          });
        }
      }
    }
  }, {
    key: '_computeScore',
    value: function _computeScore(weights, results) {
      this._log('\n\nComputing score:\n');

      for (var i = 0, len = results.length; i < len; i += 1) {
        var output = results[i].output;
        var scoreLen = output.length;

        var totalScore = 0;
        var bestScore = 1;

        for (var j = 0; j < scoreLen; j += 1) {
          var score = output[j].score;
          var weight = weights ? weights[output[j].key].weight : 1;
          var nScore = score * weight;

          if (weight !== 1) {
            bestScore = Math.min(bestScore, nScore);
          } else {
            output[j].nScore = nScore;
            totalScore += nScore;
          }
        }

        results[i].score = bestScore === 1 ? totalScore / scoreLen : bestScore;

        this._log(results[i]);
      }
    }
  }, {
    key: '_sort',
    value: function _sort(results) {
      this._log('\n\nSorting....');
      results.sort(this.options.sortFn);
    }
  }, {
    key: '_format',
    value: function _format(results) {
      var finalOutput = [];

      this._log('\n\nOutput:\n\n', results);

      var transformers = [];

      if (this.options.includeMatches) {
        transformers.push(function (result, data) {
          var output = result.output;
          data.matches = [];

          for (var i = 0, len = output.length; i < len; i += 1) {
            var item = output[i];
            var obj = {
              indices: item.matchedIndices
            };
            if (item.key) {
              obj.key = item.key;
            }
            data.matches.push(obj);
          }
        });
      }

      if (this.options.includeScore) {
        transformers.push(function (result, data) {
          data.score = result.score;
        });
      }

      for (var i = 0, len = results.length; i < len; i += 1) {
        var result = results[i];

        if (this.options.id) {
          result.item = this.options.getFn(result.item, this.options.id)[0];
        }

        if (!transformers.length) {
          finalOutput.push(result.item);
          continue;
        }

        var data = {
          item: result.item
        };

        for (var j = 0, _len2 = transformers.length; j < _len2; j += 1) {
          transformers[j](result, data);
        }

        finalOutput.push(data);
      }

      return finalOutput;
    }
  }, {
    key: '_log',
    value: function _log() {
      if (this.options.verbose) {
        var _console;

        (_console = console).log.apply(_console, arguments);
      }
    }
  }]);

  return Fuse;
}();

module.exports = Fuse;

/***/ })
/******/ ]);
});
//# sourceMappingURL=fuse.js.map

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZDExZDRiMzRlMzRkZGUyZThhNDUiLCJ3ZWJwYWNrOi8vLy4vYm9vay5qcyIsIndlYnBhY2s6Ly8vLi9saWJyYXJ5LmpzIiwid2VicGFjazovLy8uL3JlcG9zaXRvcnkuanMiLCJ3ZWJwYWNrOi8vLy4vc2NyaXB0LmpzIiwid2VicGFjazovLy8uLi9kYXRhL2luaXRfYm9va3MuanNvbiIsIndlYnBhY2s6Ly8vQzovVXNlcnMveHhvVGsvRHJvcGJveC9Cb29rcy9+L2Z1c2UuanMvZGlzdC9mdXNlLmpzIl0sIm5hbWVzIjpbIkJvb2tzIiwib3B0cyIsImF1dGhvciIsInRpdGxlIiwiaXNibiIsImNpcmN1bGF0aW9uIiwiZGF0ZSIsIkxpYnJhcnkiLCJib29rc0pzb24iLCJib29rcyIsIkpTT04iLCJwYXJzZSIsInNldFNlYXJjaE9wdGlvbnMiLCJtYXhQYXR0ZXJuTGVuZ3RoIiwic2hvdWxkU29ydCIsInRocmVzaG9sZCIsImtleXMiLCJuYW1lIiwid2VpZ2h0Iiwic2VhcmNoVGV4dCIsImZ1c2UiLCJzZWFyY2hPcHRpb25zIiwic2VhcmNoIiwiY29uc29sZSIsImxvZyIsImJvb2siLCJwdXNoIiwiaSIsImxlbmd0aCIsImdldEluZGV4QnlJc2JuIiwiZmlsdGVyIiwic3RyaW5naWZ5IiwibWFwIiwib3B0aW9ucyIsInNhdmVKc29uIiwicmVhZEpzb24iLCJkYXRhIiwiYSIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJkYXRhSXNFbXB0eSIsImdldEl0ZW0iLCJzZXRJbml0aWFsRGF0YSIsImRpc3BsYXlCb29rIiwiYm9va0l0ZW1UZW1wbGF0ZSIsIiR0ZW1wbGF0ZSIsIiQiLCJhcHBlbmRUbyIsImdldExpYnJhcnkiLCJzYXZlTGlicmFyeSIsImxpYnJhcnkiLCJnZXRKc29uIiwiZGlzcGxheUFsbEJvb2tzIiwiY2xlYXJCb29rc0xpc3QiLCJkaXNwbGF5Qm9va3MiLCJnZXRCb29rcyIsInJlbW92ZSIsInNldEZvcm0iLCJ2YWwiLCJyZWFkRm9ybSIsImdldElzYm5CeUJvb2tJdGVtIiwiYm9va19pdGVtIiwiZmluZCIsInRleHQiLCJkaXNhYmxlZElucHV0SXNibiIsInByb3AiLCJlbmFibGVkSW5wdXRJc2JuIiwibW9kZUFkZEJvb2siLCJzaG93IiwiaGlkZSIsInJlbW92ZUNsYXNzIiwibW9kZUVkaXRCb29rIiwiY29sb3VyU2VsZWN0ZWRCb29rTGlzdEl0ZW0iLCJlbGVtZW50IiwiYWRkQ2xhc3MiLCJzaWJsaW5ncyIsInNlbGVjdEl0ZW0iLCJpdGVtIiwiZ2V0Qm9va0J5SXNibiIsImRlbGV0ZUl0ZW0iLCIkYm9va19pdGVtIiwiY2xvc2VzdCIsImRlbGV0ZUJvb2tCeUlzYm4iLCJkb2N1bWVudCIsIm9uIiwiY2FsbCIsImUiLCJzdG9wUHJvcGFnYXRpb24iLCJhZGRCb29rIiwiZWRpdEJvb2siLCJpbml0IiwidG9vbHRpcCIsInNvcnRhYmxlIiwiYXhpcyIsImdyaWQiLCJkZWxheSIsImRpc3RhbmNlIiwiY3Vyc29yIiwib3BhY2l0eSIsImhhbmRsZSIsImRpc2FibGVTZWxlY3Rpb24iLCJrZXl1cCIsImV2ZW50T2JqZWN0IiwicmVzdWx0Il0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLG1EQUEyQyxjQUFjOztBQUV6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7O0FDaEVBOzs7QUFH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O0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsNkNBQTZDLFdBQVc7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBLDJDQUEyQyxTQUFTO0FBQ3BEO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSx1QkFBdUIsY0FBYztBQUNyQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsOENBQThDLFNBQVM7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQSwyQ0FBMkMsU0FBUztBQUNwRDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLG9EQUFvRCxXQUFXO0FBQy9EO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQSxDQUFDOztBQUVEOztBQUVBLE9BQU87QUFDUDtBQUNBLENBQUM7QUFDRCxnQyIsImZpbGUiOiJzY3JpcHQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBpZGVudGl0eSBmdW5jdGlvbiBmb3IgY2FsbGluZyBoYXJtb255IGltcG9ydHMgd2l0aCB0aGUgY29ycmVjdCBjb250ZXh0XG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmkgPSBmdW5jdGlvbih2YWx1ZSkgeyByZXR1cm4gdmFsdWU7IH07XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDMpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGQxMWQ0YjM0ZTM0ZGRlMmU4YTQ1IiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgeHhvVGsgb24gMDE0IDE0LjA2LjE3LlxyXG4gKi9cclxuXCJ1c2Ugc3RyaWN0XCJcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJvb2tze1xyXG5cdGNvbnN0cnVjdG9yKG9wdHMpIHtcclxuXHRcdHRoaXMuYXV0aG9yID0gb3B0cy5hdXRob3I7XHJcblx0XHR0aGlzLnRpdGxlID0gb3B0cy50aXRsZTtcclxuXHRcdHRoaXMuaXNibiA9IG9wdHMuaXNibjtcclxuXHRcdHRoaXMuY2lyY3VsYXRpb24gPSBvcHRzLmNpcmN1bGF0aW9uO1xyXG5cdFx0dGhpcy5kYXRlID0gb3B0cy5kYXRlO1xyXG5cdH1cclxuXHJcblx0Ly9UT0RPOiDRgNCw0LfQvtCx0YDQsNGC0YzRgdGPINGBIGdldC9zZXQuINCd0LUg0YDQsNCx0L7RgtCw0Y7RglxyXG5cdGdldCBnZXRBdXRob3IoKXtcclxuXHRcdHJldHVybiB0aGlzLmF1dGhvcjtcclxuXHR9XHJcblxyXG5cdGdldCBnZXRUaXRsZSgpe1xyXG5cdFx0cmV0dXJuIHRoaXMudGl0bGU7XHJcblx0fVxyXG5cclxuXHRnZXQgZ2V0SXNibigpe1xyXG5cdFx0cmV0dXJuIHRoaXMuaXNibjtcclxuXHR9XHJcblxyXG5cdGdldCBnZXRDaXJjdWxhdGlvbigpe1xyXG5cdFx0cmV0dXJuIHRoaXMuY2lyY3VsYXRpb247XHJcblx0fVxyXG5cclxuXHRnZXQgZ2V0RGF0ZSgpe1xyXG5cdFx0cmV0dXJuIHRoaXMuZGF0ZTtcclxuXHR9XHJcbn1cclxuXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Jvb2suanMiLCIvKipcclxuICogQ3JlYXRlZCBieSB4eG9UayBvbiAwMTYgMTYuMDYuMTcuXHJcbiAqL1xyXG5cclxuaW1wb3J0IEJvb2sgZnJvbSAnLi9ib29rJztcclxuaW1wb3J0IEZ1c2UgZnJvbSAnZnVzZS5qcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMaWJyYXJ5IHtcclxuXHRjb25zdHJ1Y3Rvcihib29rc0pzb24pIHtcclxuXHRcdHRoaXMuYm9va3MgPSBKU09OLnBhcnNlKGJvb2tzSnNvbik7XHJcblx0XHR0aGlzLnNldFNlYXJjaE9wdGlvbnMoe1xyXG5cdFx0XHRtYXhQYXR0ZXJuTGVuZ3RoOiAyMCxcclxuXHRcdFx0c2hvdWxkU29ydDogdHJ1ZSxcclxuXHRcdFx0dGhyZXNob2xkOiAwLjUsXHJcblx0XHRcdGtleXM6IFt7XHJcblx0XHRcdFx0bmFtZTogJ3RpdGxlJyxcclxuXHRcdFx0XHR3ZWlnaHQ6IDAuNVxyXG5cdFx0XHR9LCB7XHJcblx0XHRcdFx0bmFtZTogJ2F1dGhvcicsXHJcblx0XHRcdFx0d2VpZ2h0OiAwLjVcclxuXHRcdFx0fV1cclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0ZmlsdGVyKHNlYXJjaFRleHQpIHtcclxuXHRcdGlmKHNlYXJjaFRleHQgIT0gXCJcIil7XHJcblx0XHRcdGxldCBmdXNlID0gbmV3IEZ1c2UodGhpcy5ib29rcywgdGhpcy5zZWFyY2hPcHRpb25zKTtcclxuXHRcdFx0dGhpcy5ib29rcyA9IGZ1c2Uuc2VhcmNoKHNlYXJjaFRleHQpO1xyXG5cdFx0XHRjb25zb2xlLmxvZyh0aGlzLmJvb2tzKTtcclxuXHRcdH1cclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH1cclxuXHJcblx0YWRkQm9vayhib29rKSB7XHJcblx0XHR0aGlzLmJvb2tzLnB1c2goYm9vayk7XHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9XHJcblxyXG5cdGVkaXRCb29rKGJvb2spIHtcclxuXHRcdGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLmJvb2tzLmxlbmd0aDtpKyspe1xyXG5cdFx0XHRpZiAodGhpcy5ib29rc1tpXS5pc2JuID09IGJvb2suaXNibikge1xyXG5cdFx0XHRcdHRoaXMuYm9va3NbaV0gPSBib29rO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9XHJcblxyXG5cdGdldEluZGV4QnlJc2JuKGlzYm4pIHtcclxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5ib29rcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRpZiAodGhpcy5ib29rc1tpXS5pc2JuID09IGlzYm4pXHJcblx0XHRcdFx0cmV0dXJuIGk7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gbnVsbDtcclxuXHR9XHJcblxyXG5cdGdldEJvb2tCeUlzYm4oaXNibikge1xyXG5cdFx0cmV0dXJuIHRoaXMuYm9va3NbdGhpcy5nZXRJbmRleEJ5SXNibihpc2JuKV07XHJcblx0fVxyXG5cclxuXHRkZWxldGVCb29rQnlJc2JuKGlzYm4pIHtcclxuXHRcdHRoaXMuYm9va3MgPSB0aGlzLmJvb2tzLmZpbHRlcihib29rID0+IGJvb2suaXNibiAhPSBpc2JuKTtcclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH1cclxuXHJcblx0Z2V0SnNvbigpIHtcclxuXHRcdHJldHVybiBKU09OLnN0cmluZ2lmeSh0aGlzLmJvb2tzKTtcclxuXHR9XHJcblxyXG5cdGdldEJvb2tzKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuYm9va3MubWFwKGJvb2sgPT4gbmV3IEJvb2soYm9vaykpO1xyXG5cdH1cclxuXHJcblx0c2V0U2VhcmNoT3B0aW9ucyhvcHRpb25zKXtcclxuXHRcdHRoaXMuc2VhcmNoT3B0aW9ucyA9ICBvcHRpb25zO1xyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2xpYnJhcnkuanMiLCIvKipcclxuICogQ3JlYXRlZCBieSB4eG9UayBvbiAwMTIgMTIuMDYuMTcuXHJcbiAqL1xyXG5cInVzZSBzdHJpY3RcIlxyXG5cclxuaW1wb3J0IGpzb25Jbml0RGF0YSBmcm9tICcuLi9kYXRhL2luaXRfYm9va3MuanNvbic7XHJcbmV4cG9ydCB7c2F2ZUpzb24sIHJlYWRKc29ufTtcclxuXHJcbmZ1bmN0aW9uIHNhdmVKc29uKGRhdGEpIHtcclxuXHRsZXQgYTtcclxuXHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImRhdGFcIiwgZGF0YSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlYWRKc29uKCkge1xyXG5cdGlmIChkYXRhSXNFbXB0eShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImRhdGFcIikpKSB7XHJcblx0XHRzZXRJbml0aWFsRGF0YSgpO1xyXG5cdH1cclxuXHRyZXR1cm4gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJkYXRhXCIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZXRJbml0aWFsRGF0YSgpIHtcclxuXHRzYXZlSnNvbihKU09OLnN0cmluZ2lmeShqc29uSW5pdERhdGEpKTtcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIGRhdGFJc0VtcHR5KGRhdGEpIHtcclxuXHRyZXR1cm4gZGF0YSA9PT0gbnVsbCB8fCBkYXRhID09IFwie31cIiB8fCBkYXRhID09IFwiW11cIiB8fCBkYXRhID09IFwiXCI7XHJcbn1cclxuXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3JlcG9zaXRvcnkuanMiLCJpbXBvcnQgQm9vayBmcm9tICcuL2Jvb2snO1xyXG5pbXBvcnQgTGlicmFyeSBmcm9tICcuL2xpYnJhcnknO1xyXG5pbXBvcnQge3NhdmVKc29uLCByZWFkSnNvbn1mcm9tICcuL3JlcG9zaXRvcnknO1xyXG5cclxuZnVuY3Rpb24gZGlzcGxheUJvb2soYm9vaykge1xyXG5cdGNvbnN0IGJvb2tJdGVtVGVtcGxhdGUgPSBgXHJcblx0XHQ8bGkgY2xhc3M9XCJsaXN0LWdyb3VwLWl0ZW0gZWwtYm9va3MtbGlzdF9pdGVtXCI+XHJcblx0XHRcdDxkaXY+XHJcblx0XHRcdFx0PGRpdiBjbGFzcyA9IFwicm93XCI+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY29sLWxnLTcgY29sLW1kLTcgY29sLXNtLTdcIj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcyA9IFwicm93XCI+XHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImNvbC1sZy0xIGNvbC1tZC0xIGNvbC1zbS0xXCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzID0gXCJlbC1ib29rcy1saXN0X2l0ZW0tYmFkZ2VcIj48L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY29sLWxnLTExIGNvbC1tZC0xMSBjb2wtc20tMTFcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDxwPjxzdHJvbmc+0J3QsNC30LLQsNC90LjQtTogPC9zdHJvbmc+PGk+XCI8c3BhbiBjbGFzcyA9IFwidGl0bGVcIj4ke2Jvb2sudGl0bGV9PC9zcGFuPlwiPHNwYW4+PC9pPjwvcD5cclxuXHRcdFx0XHRcdFx0XHRcdDxwPjxzdHJvbmc+0JDQstGC0L7RgDogPC9zdHJvbmc+PHNwYW4gY2xhc3MgPSBcImVsLWJvb2tzLWxpc3RfaXRlbV9hdXRob3JcIj4ke2Jvb2suYXV0aG9yfTwvc3Bhbj48L3A+XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY29sLWxnLTQgY29sLW1kLTQgY29sLXNtLTRcIj5cclxuXHRcdFx0XHRcdFx0PHA+PHN0cm9uZz5JU0JOOiA8L3N0cm9uZz48c3BhbiBjbGFzcyA9IFwiZWwtYm9va3MtbGlzdF9pdGVtX2lzYm5cIj4ke2Jvb2suaXNibn08L3NwYW4+PC9wPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY29sLWxnLTEgY29sLW1kLTEgY29sLXNtLTFcIj5cclxuXHRcdFx0XHRcdFx0PGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJjbG9zZSBlbC1ib29rcy1saXN0X2l0ZW1fZGVsZXRlIHJvdW5kZWQtY2lyY2xlXCIgYXJpYS1sYWJlbD1cIkNsb3NlXCI+XHJcblx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3M9XCJnbHlwaGljb24gZ2x5cGhpY29uLXRyYXNoIGVsLWJvb2tzLWxpc3RfaXRlbV90cmFzaC1pY29uXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9zcGFuPlxyXG5cdFx0XHRcdFx0XHQ8L2J1dHRvbj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvbGk+YDtcclxuXHRsZXQgJHRlbXBsYXRlID0gJChib29rSXRlbVRlbXBsYXRlKTtcclxuXHQkdGVtcGxhdGUuYXBwZW5kVG8oXCIuZWwtYm9va3MtbGlzdFwiKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0TGlicmFyeSgpIHtcclxuXHRyZXR1cm4gbmV3IExpYnJhcnkocmVhZEpzb24oKSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNhdmVMaWJyYXJ5KGxpYnJhcnkpIHtcclxuXHRzYXZlSnNvbihsaWJyYXJ5LmdldEpzb24oKSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRpc3BsYXlBbGxCb29rcygpIHtcclxuXHRjbGVhckJvb2tzTGlzdCgpO1xyXG5cdGRpc3BsYXlCb29rcyhnZXRMaWJyYXJ5KCkuZ2V0Qm9va3MoKSlcclxufVxyXG5cclxuZnVuY3Rpb24gZGlzcGxheUJvb2tzKGJvb2tzKSB7XHJcblx0Zm9yIChsZXQgYm9vayBvZiBib29rcykge1xyXG5cdFx0ZGlzcGxheUJvb2soYm9vayk7XHJcblx0fVxyXG59XHJcblxyXG5cclxuLy8gZnVuY3Rpb24gZGlzcGxheUJvb2tzRmlsdGVyKGZpbHRlcikge1xyXG4vLyBcdGxldCBkYXRhID0gcmVhZERhdGFNYXAoKTtcclxuLy8gfVxyXG5cclxuZnVuY3Rpb24gY2xlYXJCb29rc0xpc3QoKSB7XHJcblx0JChcIi5lbC1ib29rcy1saXN0IGxpXCIpLnJlbW92ZSgpO1xyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gc2V0Rm9ybShib29rKSB7XHJcblx0JChcIiNlbC1pbnB1dC1ncm91cC1kYXRlID4gaW5wdXRcIikudmFsKGJvb2suZGF0ZSk7XHJcblx0JChcIiNlbC1pbnB1dC1ncm91cC10aXRsZSA+IGlucHV0XCIpLnZhbChib29rLnRpdGxlKTtcclxuXHQkKFwiI2VsLWlucHV0LWdyb3VwLWF1dGhvciA+IGlucHV0XCIpLnZhbChib29rLmF1dGhvcik7XHJcblx0JChcIiNlbC1pbnB1dC1ncm91cC1jaXJjdWxhdGlvbiA+IGlucHV0XCIpLnZhbChib29rLmNpcmN1bGF0aW9uKTtcclxuXHQkKFwiI2VsLWlucHV0LWdyb3VwLWlzYm4gPiBpbnB1dFwiKS52YWwoYm9vay5pc2JuKTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVhZEZvcm0oKSB7XHJcblx0cmV0dXJuIG5ldyBCb29rKHtcclxuXHRcdGF1dGhvcjogJChcIiNlbC1pbnB1dC1ncm91cC1hdXRob3IgPiBpbnB1dFwiKS52YWwoKSxcclxuXHRcdHRpdGxlOiAkKFwiI2VsLWlucHV0LWdyb3VwLXRpdGxlID4gaW5wdXRcIikudmFsKCksXHJcblx0XHRpc2JuOiAkKFwiI2VsLWlucHV0LWdyb3VwLWlzYm4gPiBpbnB1dFwiKS52YWwoKSxcclxuXHRcdGNpcmN1bGF0aW9uOiAkKFwiI2VsLWlucHV0LWdyb3VwLWNpcmN1bGF0aW9uID4gaW5wdXRcIikudmFsKCksXHJcblx0XHRkYXRlOiAkKFwiI2VsLWlucHV0LWdyb3VwLWRhdGUgPiBpbnB1dFwiKS52YWwoKVxyXG5cdH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRJc2JuQnlCb29rSXRlbShib29rX2l0ZW0pIHtcclxuXHRyZXR1cm4gJChib29rX2l0ZW0pLmZpbmQoXCIuZWwtYm9va3MtbGlzdF9pdGVtX2lzYm5cIikudGV4dCgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBkaXNhYmxlZElucHV0SXNibigpIHtcclxuXHQkKFwiI2VsLWlucHV0LWdyb3VwLWlzYm4gPiBpbnB1dFwiKS5wcm9wKFwiZGlzYWJsZWRcIiwgdHJ1ZSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGVuYWJsZWRJbnB1dElzYm4oKSB7XHJcblx0JChcIiNlbC1pbnB1dC1ncm91cC1pc2JuID4gaW5wdXRcIikucHJvcChcImRpc2FibGVkXCIsIGZhbHNlKTtcclxufVxyXG5cclxuZnVuY3Rpb24gbW9kZUFkZEJvb2soKSB7XHJcblx0JChcIi5lbC1idXR0b24tYWRkXCIpLnNob3coKTtcclxuXHJcblx0JChcIi5lbC1idXR0b24tZWRpdFwiKS5oaWRlKCk7XHJcblx0JChcIi5lbC1idXR0b24tY2xvc2UtZWRpdC1tb2RlXCIpLmhpZGUoKTtcclxuXHQkKFwiLmVsLWJvb2tzLWxpc3RfaXRlbVwiKS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKTtcclxuXHRlbmFibGVkSW5wdXRJc2JuKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1vZGVFZGl0Qm9vaygpIHtcclxuXHQkKFwiLmVsLWJ1dHRvbi1hZGRcIikuaGlkZSgpO1xyXG5cclxuXHQkKFwiLmVsLWJ1dHRvbi1lZGl0XCIpLnNob3coKTtcclxuXHQkKFwiLmVsLWJ1dHRvbi1jbG9zZS1lZGl0LW1vZGVcIikuc2hvdygpO1xyXG5cclxuXHRkaXNhYmxlZElucHV0SXNibigpO1xyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gY29sb3VyU2VsZWN0ZWRCb29rTGlzdEl0ZW0oZWxlbWVudCkge1xyXG5cdCQoZWxlbWVudCkuYWRkQ2xhc3MoXCJhY3RpdmVcIik7XHJcblx0JChlbGVtZW50KS5zaWJsaW5ncygpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpO1xyXG59O1xyXG5cclxuXHJcbmZ1bmN0aW9uIHNlbGVjdEl0ZW0oaXRlbSkge1xyXG5cdGxldCBib29rID0gZ2V0TGlicmFyeSgpLmdldEJvb2tCeUlzYm4oZ2V0SXNibkJ5Qm9va0l0ZW0odGhpcykpO1xyXG5cdHNldEZvcm0oYm9vayk7XHJcblx0Y29sb3VyU2VsZWN0ZWRCb29rTGlzdEl0ZW0odGhpcyk7XHJcblx0bW9kZUVkaXRCb29rKCk7XHJcbi8vXHQkKHRoaXMpLmJlZm9yZShcIjxkaXYgY2xhc3M9J2JhZGdlJz7QotC10LrRgdGCPC9kaXY+XCIpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRlbGV0ZUl0ZW0oaXRlbSkge1xyXG5cdGxldCAkYm9va19pdGVtID0gJCh0aGlzKS5jbG9zZXN0KFwibGlcIik7XHJcblx0bGV0IGlzYm4gPSBnZXRJc2JuQnlCb29rSXRlbSgkYm9va19pdGVtKTtcclxuXHJcblx0c2F2ZUxpYnJhcnkoZ2V0TGlicmFyeSgpLmRlbGV0ZUJvb2tCeUlzYm4oaXNibikpO1xyXG5cdGRpc3BsYXlBbGxCb29rcygpO1xyXG59XHJcblxyXG4vLyBUT0RPOiDRgNCw0YnQvtCx0YDQsNGC0YzRgdGPINGBINGE0YPQvdC60YbQuNGP0LzQuFxyXG4kKGRvY3VtZW50KVxyXG5cdC5vbihcImNsaWNrXCIsIFwiLmVsLWJvb2tzLWxpc3RfaXRlbVwiLCBmdW5jdGlvbiAoKSB7XHJcblx0XHRzZWxlY3RJdGVtLmNhbGwodGhpcyk7XHJcblx0fSlcclxuXHQub24oXCJjbGlja1wiLCBcIi5lbC1ib29rcy1saXN0X2l0ZW1fZGVsZXRlXCIsIGZ1bmN0aW9uIChlKSB7XHJcblx0XHRkZWxldGVJdGVtLmNhbGwodGhpcyk7XHJcblx0XHRlLnN0b3BQcm9wYWdhdGlvbigpOyAvLyDQo9Cx0LXRgNCw0LXQvCDQstGB0L/Qu9GL0YLQuNC1LCDRh9GC0L7QsdGLINC90LUgJ9Cy0YvQsdC40YDQsNC70LDRgdGMJyDQutC90LjQs9CwXHJcblx0fSlcclxuXHQub24oXCJjbGlja1wiLCBcIi5lbC1idXR0b24tYWRkXCIsIGZ1bmN0aW9uICgpIHtcclxuXHRcdGxldCBib29rID0gcmVhZEZvcm0oKTtcclxuXHRcdHNhdmVMaWJyYXJ5KGdldExpYnJhcnkoKS5hZGRCb29rKGJvb2spKTtcclxuXHRcdG1vZGVBZGRCb29rKCk7XHJcblx0XHRkaXNwbGF5QWxsQm9va3MoKTtcclxuXHR9KVxyXG5cdC5vbihcImNsaWNrXCIsIFwiLmVsLWJ1dHRvbi1lZGl0XCIsIGZ1bmN0aW9uICgpIHtcclxuXHRcdGxldCBib29rID0gcmVhZEZvcm0oKTtcclxuXHRcdHNhdmVMaWJyYXJ5KGdldExpYnJhcnkoKS5lZGl0Qm9vayhib29rKSk7XHJcblx0XHRkaXNwbGF5QWxsQm9va3MoKTtcclxuXHR9KVxyXG5cdC5vbihcImNsaWNrXCIsIFwiLmVsLWJ1dHRvbi1jbG9zZS1lZGl0LW1vZGVcIiwgZnVuY3Rpb24gKCkge1xyXG5cdFx0bW9kZUFkZEJvb2soKTtcclxuXHR9KVxyXG5cdC5vbihcIm1vdXNlZW50ZXJcIiwgXCIuZWwtYm9va3MtbGlzdF9pdGVtX2RlbGV0ZVwiLCBmdW5jdGlvbiAoKSB7XHJcblx0XHQkKHRoaXMpLmNsb3Nlc3QoXCJsaVwiKS5hZGRDbGFzcyhcImVsLWRhbmdlclwiKTtcclxuXHR9KVxyXG5cdC5vbihcIm1vdXNlbGVhdmVcIiwgXCIuZWwtYm9va3MtbGlzdF9pdGVtX2RlbGV0ZVwiLCBmdW5jdGlvbiAoKSB7XHJcblx0XHQkKHRoaXMpLmNsb3Nlc3QoXCJsaVwiKS5yZW1vdmVDbGFzcyhcImVsLWRhbmdlclwiKTtcclxuXHR9KTtcclxuKGZ1bmN0aW9uIGluaXQoKSB7XHJcblx0ZGlzcGxheUFsbEJvb2tzKCk7XHJcbn0pKCk7XHJcblxyXG5cclxuJChcIltkYXRhLXRvZ2dsZT0ndG9vbHRpcCddXCIpLnRvb2x0aXAoKTtcclxuJChcIi5lbC1zb3J0YWJsZVwiKS5zb3J0YWJsZSh7XHJcblx0YXhpczogXCJ5XCIsXHJcblx0Z3JpZDogWzMwLCAzMF0sXHJcblx0ZGVsYXk6IDIwMCxcclxuXHRkaXN0YW5jZTogMzUsXHJcblx0Y3Vyc29yOiBcIm1vdmVcIixcclxuXHRvcGFjaXR5OiAwLjYsXHJcblx0aGFuZGxlOiBcIi5lbC1ib29rcy1saXN0X2l0ZW0tYmFkZ2VcIlxyXG59KS5kaXNhYmxlU2VsZWN0aW9uKCk7XHJcblxyXG5cclxuJChcIi5lbC1zZWFyY2gtZm9ybSBpbnB1dFwiKS5rZXl1cChmdW5jdGlvbiAoZXZlbnRPYmplY3QpIHtcclxuXHR2YXIgc2VhcmNoVGV4dCA9ICQoXCIuZWwtc2VhcmNoLWZvcm0gaW5wdXRcIikudmFsKCk7XHJcblx0bGV0IHJlc3VsdCA9IGdldExpYnJhcnkoKS5maWx0ZXIoc2VhcmNoVGV4dCkuZ2V0Qm9va3MoKTtcclxuXHRjbGVhckJvb2tzTGlzdCgpO1xyXG5cdGRpc3BsYXlCb29rcyhyZXN1bHQpO1xyXG59KTtcclxuXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NjcmlwdC5qcyIsIm1vZHVsZS5leHBvcnRzID0gW1xuXHR7XG5cdFx0XCJhdXRob3JcIjogXCLQk9C+0LPQvtC70Ywg0J3QuNC60L7Qu9Cw0Lkg0JLQsNGB0LjQu9GM0LXQstC40YdcIixcblx0XHRcInRpdGxlXCI6IFwi0JzQtdGA0YLQstGL0LUg0JTRg9GI0LhcIixcblx0XHRcImlzYm5cIjogXCI5NzgtNS0zODktMDEzMjItM1wiLFxuXHRcdFwiZGF0ZVwiOiBcIjIwMTQtMDEtMTBcIixcblx0XHRcImNpcmN1bGF0aW9uXCI6IDQwMDBcblx0fSxcblx0e1xuXHRcdFwiYXV0aG9yXCI6IFwi0KfQsNC6INCf0LDQu9Cw0L3QuNC6XCIsXG5cdFx0XCJ0aXRsZVwiOiBcItCj0LTRg9GI0YzQtVwiLFxuXHRcdFwiaXNiblwiOiBcIjk3OC01LTE3LTAxOTg4OC03XCIsXG5cdFx0XCJkYXRlXCI6IFwiMjAwNi0wNi0xN1wiLFxuXHRcdFwiY2lyY3VsYXRpb25cIjogMTI1MDBcblx0fSxcblx0e1xuXHRcdFwiYXV0aG9yXCI6IFwi0KHQsNCy0LjQvdGL0YUg0JLQuNC60YLQvtGAINCf0LXRgtGA0L7QstC40YdcIixcblx0XHRcInRpdGxlXCI6IFwi0KHRgtC+INGA0LXRhtC10L/RgtC+0LIg0L/QvtC00LTQtdGA0LbQutC4INC/0L7RgtC10L3RhtC40Lgg0L3QsCDQvtGA0LHQuNGC0LDQu9GM0L3QvtC5INGB0YLQsNC90YbQuNC4XCIsXG5cdFx0XCJpc2JuXCI6IFwiOTc4LTUtNzUxNi0xMjYzLTRcIixcblx0XHRcImRhdGVcIjogXCIxOTk4LTA0LTIwXCIsXG5cdFx0XCJjaXJjdWxhdGlvblwiOiAxMDAwXG5cdH0sXG5cdHtcblx0XHRcImF1dGhvclwiOiBcItCg0L7QsdC10YDRgiDQrdC90YHQvtC9INCl0LDQudC90LvQsNC50L1cIixcblx0XHRcInRpdGxlXCI6IFwi0J3QtSDRg9Cx0L7RjtGB0Ywg0Y8g0LfQu9CwXCIsXG5cdFx0XCJpc2JuXCI6IFwiOC00ODMtMDI1MTYtM1wiLFxuXHRcdFwiZGF0ZVwiOiBcIjE5OTItMTAtMTBcIixcblx0XHRcImNpcmN1bGF0aW9uXCI6IDEwMDAwMFxuXHR9LFxuXHR7XG5cdFx0XCJhdXRob3JcIjogXCLQktC40LrRgtC+0YAg0J/QtdC70LXQstC40L1cIixcblx0XHRcInRpdGxlXCI6IFwiR2VuZXJhdGlvbiAn0J8nXCIsXG5cdFx0XCJpc2JuXCI6IFwiNS03MDI3LTA5NDktN1wiLFxuXHRcdFwiZGF0ZVwiOiBcIjE5OTktMDEtMDhcIixcblx0XHRcImNpcmN1bGF0aW9uXCI6IDI1MDBcblx0fSxcblx0e1xuXHRcdFwiYXV0aG9yXCI6IFwi0JLQuNC60YLQvtGAINCf0LXQu9C10LLQuNC9XCIsXG5cdFx0XCJ0aXRsZVwiOiBcIlMuTi5VLkYuRi5cIixcblx0XHRcImlzYm5cIjogXCI5NzgtNS02OTktNzAzNjItM1wiLFxuXHRcdFwiZGF0ZVwiOiBcIjIwMTQtMDgtMDZcIixcblx0XHRcImNpcmN1bGF0aW9uXCI6IDEzMDAwXG5cdH1cbl07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vZGF0YS9pbml0X2Jvb2tzLmpzb25cbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyohXG4gKiBGdXNlLmpzIHYzLjAuNSAtIExpZ2h0d2VpZ2h0IGZ1enp5LXNlYXJjaCAoaHR0cDovL2Z1c2Vqcy5pbylcbiAqIFxuICogQ29weXJpZ2h0IChjKSAyMDEyLTIwMTcgS2lyb2xsb3MgUmlzayAoaHR0cDovL2tpcm8ubWUpXG4gKiBBbGwgUmlnaHRzIFJlc2VydmVkLiBBcGFjaGUgU29mdHdhcmUgTGljZW5zZSAyLjBcbiAqIFxuICogaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKi9cbihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwiRnVzZVwiLCBbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJGdXNlXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIkZ1c2VcIl0gPSBmYWN0b3J5KCk7XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiAvKioqKioqLyAoZnVuY3Rpb24obW9kdWxlcykgeyAvLyB3ZWJwYWNrQm9vdHN0cmFwXG4vKioqKioqLyBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4vKioqKioqLyBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4vKioqKioqLyBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbi8qKioqKiovIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuLyoqKioqKi8gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbi8qKioqKiovIFx0XHRcdGk6IG1vZHVsZUlkLFxuLyoqKioqKi8gXHRcdFx0bDogZmFsc2UsXG4vKioqKioqLyBcdFx0XHRleHBvcnRzOiB7fVxuLyoqKioqKi8gXHRcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuLyoqKioqKi8gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4vKioqKioqLyBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuLyoqKioqKi8gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbi8qKioqKiovIFx0fVxuLyoqKioqKi9cbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gaWRlbnRpdHkgZnVuY3Rpb24gZm9yIGNhbGxpbmcgaGFybW9ueSBpbXBvcnRzIHdpdGggdGhlIGNvcnJlY3QgY29udGV4dFxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmkgPSBmdW5jdGlvbih2YWx1ZSkgeyByZXR1cm4gdmFsdWU7IH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4vKioqKioqLyBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuLyoqKioqKi8gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbi8qKioqKiovIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbi8qKioqKiovIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbi8qKioqKiovIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbi8qKioqKiovIFx0XHRcdH0pO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuLyoqKioqKi8gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuLyoqKioqKi8gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbi8qKioqKiovIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4vKioqKioqLyBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuLyoqKioqKi8gXHRcdHJldHVybiBnZXR0ZXI7XG4vKioqKioqLyBcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLyoqKioqKi8gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA4KTtcbi8qKioqKiovIH0pXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKi8gKFtcbi8qIDAgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob2JqKSB7XG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwob2JqKSA9PT0gJ1tvYmplY3QgQXJyYXldJztcbn07XG5cbi8qKiovIH0pLFxuLyogMSAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG52YXIgYml0YXBSZWdleFNlYXJjaCA9IF9fd2VicGFja19yZXF1aXJlX18oNSk7XG52YXIgYml0YXBTZWFyY2ggPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDcpO1xudmFyIHBhdHRlcm5BbHBoYWJldCA9IF9fd2VicGFja19yZXF1aXJlX18oNCk7XG5cbnZhciBCaXRhcCA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gQml0YXAocGF0dGVybiwgX3JlZikge1xuICAgIHZhciBfcmVmJGxvY2F0aW9uID0gX3JlZi5sb2NhdGlvbixcbiAgICAgICAgbG9jYXRpb24gPSBfcmVmJGxvY2F0aW9uID09PSB1bmRlZmluZWQgPyAwIDogX3JlZiRsb2NhdGlvbixcbiAgICAgICAgX3JlZiRkaXN0YW5jZSA9IF9yZWYuZGlzdGFuY2UsXG4gICAgICAgIGRpc3RhbmNlID0gX3JlZiRkaXN0YW5jZSA9PT0gdW5kZWZpbmVkID8gMTAwIDogX3JlZiRkaXN0YW5jZSxcbiAgICAgICAgX3JlZiR0aHJlc2hvbGQgPSBfcmVmLnRocmVzaG9sZCxcbiAgICAgICAgdGhyZXNob2xkID0gX3JlZiR0aHJlc2hvbGQgPT09IHVuZGVmaW5lZCA/IDAuNiA6IF9yZWYkdGhyZXNob2xkLFxuICAgICAgICBfcmVmJG1heFBhdHRlcm5MZW5ndGggPSBfcmVmLm1heFBhdHRlcm5MZW5ndGgsXG4gICAgICAgIG1heFBhdHRlcm5MZW5ndGggPSBfcmVmJG1heFBhdHRlcm5MZW5ndGggPT09IHVuZGVmaW5lZCA/IDMyIDogX3JlZiRtYXhQYXR0ZXJuTGVuZ3RoLFxuICAgICAgICBfcmVmJGlzQ2FzZVNlbnNpdGl2ZSA9IF9yZWYuaXNDYXNlU2Vuc2l0aXZlLFxuICAgICAgICBpc0Nhc2VTZW5zaXRpdmUgPSBfcmVmJGlzQ2FzZVNlbnNpdGl2ZSA9PT0gdW5kZWZpbmVkID8gZmFsc2UgOiBfcmVmJGlzQ2FzZVNlbnNpdGl2ZSxcbiAgICAgICAgX3JlZiR0b2tlblNlcGFyYXRvciA9IF9yZWYudG9rZW5TZXBhcmF0b3IsXG4gICAgICAgIHRva2VuU2VwYXJhdG9yID0gX3JlZiR0b2tlblNlcGFyYXRvciA9PT0gdW5kZWZpbmVkID8gLyArL2cgOiBfcmVmJHRva2VuU2VwYXJhdG9yLFxuICAgICAgICBfcmVmJGZpbmRBbGxNYXRjaGVzID0gX3JlZi5maW5kQWxsTWF0Y2hlcyxcbiAgICAgICAgZmluZEFsbE1hdGNoZXMgPSBfcmVmJGZpbmRBbGxNYXRjaGVzID09PSB1bmRlZmluZWQgPyBmYWxzZSA6IF9yZWYkZmluZEFsbE1hdGNoZXMsXG4gICAgICAgIF9yZWYkbWluTWF0Y2hDaGFyTGVuZyA9IF9yZWYubWluTWF0Y2hDaGFyTGVuZ3RoLFxuICAgICAgICBtaW5NYXRjaENoYXJMZW5ndGggPSBfcmVmJG1pbk1hdGNoQ2hhckxlbmcgPT09IHVuZGVmaW5lZCA/IDEgOiBfcmVmJG1pbk1hdGNoQ2hhckxlbmc7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQml0YXApO1xuXG4gICAgdGhpcy5vcHRpb25zID0ge1xuICAgICAgbG9jYXRpb246IGxvY2F0aW9uLFxuICAgICAgZGlzdGFuY2U6IGRpc3RhbmNlLFxuICAgICAgdGhyZXNob2xkOiB0aHJlc2hvbGQsXG4gICAgICBtYXhQYXR0ZXJuTGVuZ3RoOiBtYXhQYXR0ZXJuTGVuZ3RoLFxuICAgICAgaXNDYXNlU2Vuc2l0aXZlOiBpc0Nhc2VTZW5zaXRpdmUsXG4gICAgICB0b2tlblNlcGFyYXRvcjogdG9rZW5TZXBhcmF0b3IsXG4gICAgICBmaW5kQWxsTWF0Y2hlczogZmluZEFsbE1hdGNoZXMsXG4gICAgICBtaW5NYXRjaENoYXJMZW5ndGg6IG1pbk1hdGNoQ2hhckxlbmd0aFxuICAgIH07XG5cbiAgICB0aGlzLnBhdHRlcm4gPSB0aGlzLm9wdGlvbnMuaXNDYXNlU2Vuc2l0aXZlID8gcGF0dGVybiA6IHBhdHRlcm4udG9Mb3dlckNhc2UoKTtcblxuICAgIGlmICh0aGlzLnBhdHRlcm4ubGVuZ3RoIDw9IG1heFBhdHRlcm5MZW5ndGgpIHtcbiAgICAgIHRoaXMucGF0dGVybkFscGhhYmV0ID0gcGF0dGVybkFscGhhYmV0KHRoaXMucGF0dGVybik7XG4gICAgfVxuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKEJpdGFwLCBbe1xuICAgIGtleTogJ3NlYXJjaCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNlYXJjaCh0ZXh0KSB7XG4gICAgICBpZiAoIXRoaXMub3B0aW9ucy5pc0Nhc2VTZW5zaXRpdmUpIHtcbiAgICAgICAgdGV4dCA9IHRleHQudG9Mb3dlckNhc2UoKTtcbiAgICAgIH1cblxuICAgICAgLy8gRXhhY3QgbWF0Y2hcbiAgICAgIGlmICh0aGlzLnBhdHRlcm4gPT09IHRleHQpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBpc01hdGNoOiB0cnVlLFxuICAgICAgICAgIHNjb3JlOiAwLFxuICAgICAgICAgIG1hdGNoZWRJbmRpY2VzOiBbWzAsIHRleHQubGVuZ3RoIC0gMV1dXG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIC8vIFdoZW4gcGF0dGVybiBsZW5ndGggaXMgZ3JlYXRlciB0aGFuIHRoZSBtYWNoaW5lIHdvcmQgbGVuZ3RoLCBqdXN0IGRvIGEgYSByZWdleCBjb21wYXJpc29uXG4gICAgICB2YXIgX29wdGlvbnMgPSB0aGlzLm9wdGlvbnMsXG4gICAgICAgICAgbWF4UGF0dGVybkxlbmd0aCA9IF9vcHRpb25zLm1heFBhdHRlcm5MZW5ndGgsXG4gICAgICAgICAgdG9rZW5TZXBhcmF0b3IgPSBfb3B0aW9ucy50b2tlblNlcGFyYXRvcjtcblxuICAgICAgaWYgKHRoaXMucGF0dGVybi5sZW5ndGggPiBtYXhQYXR0ZXJuTGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiBiaXRhcFJlZ2V4U2VhcmNoKHRleHQsIHRoaXMucGF0dGVybiwgdG9rZW5TZXBhcmF0b3IpO1xuICAgICAgfVxuXG4gICAgICAvLyBPdGhlcndpc2UsIHVzZSBCaXRhcCBhbGdvcml0aG1cbiAgICAgIHZhciBfb3B0aW9uczIgPSB0aGlzLm9wdGlvbnMsXG4gICAgICAgICAgbG9jYXRpb24gPSBfb3B0aW9uczIubG9jYXRpb24sXG4gICAgICAgICAgZGlzdGFuY2UgPSBfb3B0aW9uczIuZGlzdGFuY2UsXG4gICAgICAgICAgdGhyZXNob2xkID0gX29wdGlvbnMyLnRocmVzaG9sZCxcbiAgICAgICAgICBmaW5kQWxsTWF0Y2hlcyA9IF9vcHRpb25zMi5maW5kQWxsTWF0Y2hlcyxcbiAgICAgICAgICBtaW5NYXRjaENoYXJMZW5ndGggPSBfb3B0aW9uczIubWluTWF0Y2hDaGFyTGVuZ3RoO1xuXG4gICAgICByZXR1cm4gYml0YXBTZWFyY2godGV4dCwgdGhpcy5wYXR0ZXJuLCB0aGlzLnBhdHRlcm5BbHBoYWJldCwge1xuICAgICAgICBsb2NhdGlvbjogbG9jYXRpb24sXG4gICAgICAgIGRpc3RhbmNlOiBkaXN0YW5jZSxcbiAgICAgICAgdGhyZXNob2xkOiB0aHJlc2hvbGQsXG4gICAgICAgIGZpbmRBbGxNYXRjaGVzOiBmaW5kQWxsTWF0Y2hlcyxcbiAgICAgICAgbWluTWF0Y2hDaGFyTGVuZ3RoOiBtaW5NYXRjaENoYXJMZW5ndGhcbiAgICAgIH0pO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBCaXRhcDtcbn0oKTtcblxuLy8gbGV0IHggPSBuZXcgQml0YXAoXCJvZCBtbiB3YXJcIiwge30pXG4vLyBsZXQgcmVzdWx0ID0geC5zZWFyY2goXCJPbGQgTWFuJ3MgV2FyXCIpXG4vLyBjb25zb2xlLmxvZyhyZXN1bHQpXG5cbm1vZHVsZS5leHBvcnRzID0gQml0YXA7XG5cbi8qKiovIH0pLFxuLyogMiAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG52YXIgaXNBcnJheSA9IF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cbnZhciBkZWVwVmFsdWUgPSBmdW5jdGlvbiBkZWVwVmFsdWUob2JqLCBwYXRoLCBsaXN0KSB7XG4gIGlmICghcGF0aCkge1xuICAgIC8vIElmIHRoZXJlJ3Mgbm8gcGF0aCBsZWZ0LCB3ZSd2ZSBnb3R0ZW4gdG8gdGhlIG9iamVjdCB3ZSBjYXJlIGFib3V0LlxuICAgIGxpc3QucHVzaChvYmopO1xuICB9IGVsc2Uge1xuICAgIHZhciBkb3RJbmRleCA9IHBhdGguaW5kZXhPZignLicpO1xuICAgIHZhciBmaXJzdFNlZ21lbnQgPSBwYXRoO1xuICAgIHZhciByZW1haW5pbmcgPSBudWxsO1xuXG4gICAgaWYgKGRvdEluZGV4ICE9PSAtMSkge1xuICAgICAgZmlyc3RTZWdtZW50ID0gcGF0aC5zbGljZSgwLCBkb3RJbmRleCk7XG4gICAgICByZW1haW5pbmcgPSBwYXRoLnNsaWNlKGRvdEluZGV4ICsgMSk7XG4gICAgfVxuXG4gICAgdmFyIHZhbHVlID0gb2JqW2ZpcnN0U2VnbWVudF07XG5cbiAgICBpZiAodmFsdWUgIT09IG51bGwgJiYgdmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaWYgKCFyZW1haW5pbmcgJiYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJykpIHtcbiAgICAgICAgbGlzdC5wdXNoKHZhbHVlKTtcbiAgICAgIH0gZWxzZSBpZiAoaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgLy8gU2VhcmNoIGVhY2ggaXRlbSBpbiB0aGUgYXJyYXkuXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSB2YWx1ZS5sZW5ndGg7IGkgPCBsZW47IGkgKz0gMSkge1xuICAgICAgICAgIGRlZXBWYWx1ZSh2YWx1ZVtpXSwgcmVtYWluaW5nLCBsaXN0KTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChyZW1haW5pbmcpIHtcbiAgICAgICAgLy8gQW4gb2JqZWN0LiBSZWN1cnNlIGZ1cnRoZXIuXG4gICAgICAgIGRlZXBWYWx1ZSh2YWx1ZSwgcmVtYWluaW5nLCBsaXN0KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gbGlzdDtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9iaiwgcGF0aCkge1xuICByZXR1cm4gZGVlcFZhbHVlKG9iaiwgcGF0aCwgW10pO1xufTtcblxuLyoqKi8gfSksXG4vKiAzICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCkge1xuICB2YXIgbWF0Y2htYXNrID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiBbXTtcbiAgdmFyIG1pbk1hdGNoQ2hhckxlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogMTtcblxuICB2YXIgbWF0Y2hlZEluZGljZXMgPSBbXTtcbiAgdmFyIHN0YXJ0ID0gLTE7XG4gIHZhciBlbmQgPSAtMTtcbiAgdmFyIGkgPSAwO1xuXG4gIGZvciAodmFyIGxlbiA9IG1hdGNobWFzay5sZW5ndGg7IGkgPCBsZW47IGkgKz0gMSkge1xuICAgIHZhciBtYXRjaCA9IG1hdGNobWFza1tpXTtcbiAgICBpZiAobWF0Y2ggJiYgc3RhcnQgPT09IC0xKSB7XG4gICAgICBzdGFydCA9IGk7XG4gICAgfSBlbHNlIGlmICghbWF0Y2ggJiYgc3RhcnQgIT09IC0xKSB7XG4gICAgICBlbmQgPSBpIC0gMTtcbiAgICAgIGlmIChlbmQgLSBzdGFydCArIDEgPj0gbWluTWF0Y2hDaGFyTGVuZ3RoKSB7XG4gICAgICAgIG1hdGNoZWRJbmRpY2VzLnB1c2goW3N0YXJ0LCBlbmRdKTtcbiAgICAgIH1cbiAgICAgIHN0YXJ0ID0gLTE7XG4gICAgfVxuICB9XG5cbiAgLy8gKGktMSAtIHN0YXJ0KSArIDEgPT4gaSAtIHN0YXJ0XG4gIGlmIChtYXRjaG1hc2tbaSAtIDFdICYmIGkgLSBzdGFydCA+PSBtaW5NYXRjaENoYXJMZW5ndGgpIHtcbiAgICBtYXRjaGVkSW5kaWNlcy5wdXNoKFtzdGFydCwgaSAtIDFdKTtcbiAgfVxuXG4gIHJldHVybiBtYXRjaGVkSW5kaWNlcztcbn07XG5cbi8qKiovIH0pLFxuLyogNCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChwYXR0ZXJuKSB7XG4gIHZhciBtYXNrID0ge307XG4gIHZhciBsZW4gPSBwYXR0ZXJuLmxlbmd0aDtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSArPSAxKSB7XG4gICAgbWFza1twYXR0ZXJuLmNoYXJBdChpKV0gPSAwO1xuICB9XG5cbiAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxlbjsgX2kgKz0gMSkge1xuICAgIG1hc2tbcGF0dGVybi5jaGFyQXQoX2kpXSB8PSAxIDw8IGxlbiAtIF9pIC0gMTtcbiAgfVxuXG4gIHJldHVybiBtYXNrO1xufTtcblxuLyoqKi8gfSksXG4vKiA1ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbnZhciBTUEVDSUFMX0NIQVJTX1JFR0VYID0gL1tcXC1cXFtcXF1cXC9cXHtcXH1cXChcXClcXCpcXCtcXD9cXC5cXFxcXFxeXFwkXFx8XS9nO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh0ZXh0LCBwYXR0ZXJuKSB7XG4gIHZhciB0b2tlblNlcGFyYXRvciA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDogLyArL2c7XG5cbiAgdmFyIHJlZ2V4ID0gbmV3IFJlZ0V4cChwYXR0ZXJuLnJlcGxhY2UoU1BFQ0lBTF9DSEFSU19SRUdFWCwgJ1xcXFwkJicpLnJlcGxhY2UodG9rZW5TZXBhcmF0b3IsICd8JykpO1xuICB2YXIgbWF0Y2hlcyA9IHRleHQubWF0Y2gocmVnZXgpO1xuICB2YXIgaXNNYXRjaCA9ICEhbWF0Y2hlcztcbiAgdmFyIG1hdGNoZWRJbmRpY2VzID0gW107XG5cbiAgaWYgKGlzTWF0Y2gpIHtcbiAgICBmb3IgKHZhciBpID0gMCwgbWF0Y2hlc0xlbiA9IG1hdGNoZXMubGVuZ3RoOyBpIDwgbWF0Y2hlc0xlbjsgaSArPSAxKSB7XG4gICAgICB2YXIgbWF0Y2ggPSBtYXRjaGVzW2ldO1xuICAgICAgbWF0Y2hlZEluZGljZXMucHVzaChbdGV4dC5pbmRleE9mKG1hdGNoKSwgbWF0Y2gubGVuZ3RoIC0gMV0pO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgLy8gVE9ETzogcmV2aXNpdCB0aGlzIHNjb3JlXG4gICAgc2NvcmU6IGlzTWF0Y2ggPyAwLjUgOiAxLFxuICAgIGlzTWF0Y2g6IGlzTWF0Y2gsXG4gICAgbWF0Y2hlZEluZGljZXM6IG1hdGNoZWRJbmRpY2VzXG4gIH07XG59O1xuXG4vKioqLyB9KSxcbi8qIDYgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAocGF0dGVybiwgX3JlZikge1xuICB2YXIgX3JlZiRlcnJvcnMgPSBfcmVmLmVycm9ycyxcbiAgICAgIGVycm9ycyA9IF9yZWYkZXJyb3JzID09PSB1bmRlZmluZWQgPyAwIDogX3JlZiRlcnJvcnMsXG4gICAgICBfcmVmJGN1cnJlbnRMb2NhdGlvbiA9IF9yZWYuY3VycmVudExvY2F0aW9uLFxuICAgICAgY3VycmVudExvY2F0aW9uID0gX3JlZiRjdXJyZW50TG9jYXRpb24gPT09IHVuZGVmaW5lZCA/IDAgOiBfcmVmJGN1cnJlbnRMb2NhdGlvbixcbiAgICAgIF9yZWYkZXhwZWN0ZWRMb2NhdGlvbiA9IF9yZWYuZXhwZWN0ZWRMb2NhdGlvbixcbiAgICAgIGV4cGVjdGVkTG9jYXRpb24gPSBfcmVmJGV4cGVjdGVkTG9jYXRpb24gPT09IHVuZGVmaW5lZCA/IDAgOiBfcmVmJGV4cGVjdGVkTG9jYXRpb24sXG4gICAgICBfcmVmJGRpc3RhbmNlID0gX3JlZi5kaXN0YW5jZSxcbiAgICAgIGRpc3RhbmNlID0gX3JlZiRkaXN0YW5jZSA9PT0gdW5kZWZpbmVkID8gMTAwIDogX3JlZiRkaXN0YW5jZTtcblxuICB2YXIgYWNjdXJhY3kgPSBlcnJvcnMgLyBwYXR0ZXJuLmxlbmd0aDtcbiAgdmFyIHByb3hpbWl0eSA9IE1hdGguYWJzKGV4cGVjdGVkTG9jYXRpb24gLSBjdXJyZW50TG9jYXRpb24pO1xuXG4gIGlmICghZGlzdGFuY2UpIHtcbiAgICAvLyBEb2RnZSBkaXZpZGUgYnkgemVybyBlcnJvci5cbiAgICByZXR1cm4gcHJveGltaXR5ID8gMS4wIDogYWNjdXJhY3k7XG4gIH1cblxuICByZXR1cm4gYWNjdXJhY3kgKyBwcm94aW1pdHkgLyBkaXN0YW5jZTtcbn07XG5cbi8qKiovIH0pLFxuLyogNyAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG52YXIgYml0YXBTY29yZSA9IF9fd2VicGFja19yZXF1aXJlX18oNik7XG52YXIgbWF0Y2hlZEluZGljZXMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDMpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh0ZXh0LCBwYXR0ZXJuLCBwYXR0ZXJuQWxwaGFiZXQsIF9yZWYpIHtcbiAgdmFyIF9yZWYkbG9jYXRpb24gPSBfcmVmLmxvY2F0aW9uLFxuICAgICAgbG9jYXRpb24gPSBfcmVmJGxvY2F0aW9uID09PSB1bmRlZmluZWQgPyAwIDogX3JlZiRsb2NhdGlvbixcbiAgICAgIF9yZWYkZGlzdGFuY2UgPSBfcmVmLmRpc3RhbmNlLFxuICAgICAgZGlzdGFuY2UgPSBfcmVmJGRpc3RhbmNlID09PSB1bmRlZmluZWQgPyAxMDAgOiBfcmVmJGRpc3RhbmNlLFxuICAgICAgX3JlZiR0aHJlc2hvbGQgPSBfcmVmLnRocmVzaG9sZCxcbiAgICAgIHRocmVzaG9sZCA9IF9yZWYkdGhyZXNob2xkID09PSB1bmRlZmluZWQgPyAwLjYgOiBfcmVmJHRocmVzaG9sZCxcbiAgICAgIF9yZWYkZmluZEFsbE1hdGNoZXMgPSBfcmVmLmZpbmRBbGxNYXRjaGVzLFxuICAgICAgZmluZEFsbE1hdGNoZXMgPSBfcmVmJGZpbmRBbGxNYXRjaGVzID09PSB1bmRlZmluZWQgPyBmYWxzZSA6IF9yZWYkZmluZEFsbE1hdGNoZXMsXG4gICAgICBfcmVmJG1pbk1hdGNoQ2hhckxlbmcgPSBfcmVmLm1pbk1hdGNoQ2hhckxlbmd0aCxcbiAgICAgIG1pbk1hdGNoQ2hhckxlbmd0aCA9IF9yZWYkbWluTWF0Y2hDaGFyTGVuZyA9PT0gdW5kZWZpbmVkID8gMSA6IF9yZWYkbWluTWF0Y2hDaGFyTGVuZztcblxuICB2YXIgZXhwZWN0ZWRMb2NhdGlvbiA9IGxvY2F0aW9uO1xuICAvLyBTZXQgc3RhcnRpbmcgbG9jYXRpb24gYXQgYmVnaW5uaW5nIHRleHQgYW5kIGluaXRpYWxpemUgdGhlIGFscGhhYmV0LlxuICB2YXIgdGV4dExlbiA9IHRleHQubGVuZ3RoO1xuICAvLyBIaWdoZXN0IHNjb3JlIGJleW9uZCB3aGljaCB3ZSBnaXZlIHVwLlxuICB2YXIgY3VycmVudFRocmVzaG9sZCA9IHRocmVzaG9sZDtcbiAgLy8gSXMgdGhlcmUgYSBuZWFyYnkgZXhhY3QgbWF0Y2g/IChzcGVlZHVwKVxuICB2YXIgYmVzdExvY2F0aW9uID0gdGV4dC5pbmRleE9mKHBhdHRlcm4sIGV4cGVjdGVkTG9jYXRpb24pO1xuXG4gIHZhciBwYXR0ZXJuTGVuID0gcGF0dGVybi5sZW5ndGg7XG5cbiAgLy8gYSBtYXNrIG9mIHRoZSBtYXRjaGVzXG4gIHZhciBtYXRjaE1hc2sgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCB0ZXh0TGVuOyBpICs9IDEpIHtcbiAgICBtYXRjaE1hc2tbaV0gPSAwO1xuICB9XG5cbiAgaWYgKGJlc3RMb2NhdGlvbiAhPT0gLTEpIHtcbiAgICB2YXIgc2NvcmUgPSBiaXRhcFNjb3JlKHBhdHRlcm4sIHtcbiAgICAgIGVycm9yczogMCxcbiAgICAgIGN1cnJlbnRMb2NhdGlvbjogYmVzdExvY2F0aW9uLFxuICAgICAgZXhwZWN0ZWRMb2NhdGlvbjogZXhwZWN0ZWRMb2NhdGlvbixcbiAgICAgIGRpc3RhbmNlOiBkaXN0YW5jZVxuICAgIH0pO1xuICAgIGN1cnJlbnRUaHJlc2hvbGQgPSBNYXRoLm1pbihzY29yZSwgY3VycmVudFRocmVzaG9sZCk7XG5cbiAgICAvLyBXaGF0IGFib3V0IGluIHRoZSBvdGhlciBkaXJlY3Rpb24/IChzcGVlZCB1cClcbiAgICBiZXN0TG9jYXRpb24gPSB0ZXh0Lmxhc3RJbmRleE9mKHBhdHRlcm4sIGV4cGVjdGVkTG9jYXRpb24gKyBwYXR0ZXJuTGVuKTtcblxuICAgIGlmIChiZXN0TG9jYXRpb24gIT09IC0xKSB7XG4gICAgICB2YXIgX3Njb3JlID0gYml0YXBTY29yZShwYXR0ZXJuLCB7XG4gICAgICAgIGVycm9yczogMCxcbiAgICAgICAgY3VycmVudExvY2F0aW9uOiBiZXN0TG9jYXRpb24sXG4gICAgICAgIGV4cGVjdGVkTG9jYXRpb246IGV4cGVjdGVkTG9jYXRpb24sXG4gICAgICAgIGRpc3RhbmNlOiBkaXN0YW5jZVxuICAgICAgfSk7XG4gICAgICBjdXJyZW50VGhyZXNob2xkID0gTWF0aC5taW4oX3Njb3JlLCBjdXJyZW50VGhyZXNob2xkKTtcbiAgICB9XG4gIH1cblxuICAvLyBSZXNldCB0aGUgYmVzdCBsb2NhdGlvblxuICBiZXN0TG9jYXRpb24gPSAtMTtcblxuICB2YXIgbGFzdEJpdEFyciA9IFtdO1xuICB2YXIgZmluYWxTY29yZSA9IDE7XG4gIHZhciBiaW5NYXggPSBwYXR0ZXJuTGVuICsgdGV4dExlbjtcblxuICB2YXIgbWFzayA9IDEgPDwgcGF0dGVybkxlbiAtIDE7XG5cbiAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IHBhdHRlcm5MZW47IF9pICs9IDEpIHtcbiAgICAvLyBTY2FuIGZvciB0aGUgYmVzdCBtYXRjaDsgZWFjaCBpdGVyYXRpb24gYWxsb3dzIGZvciBvbmUgbW9yZSBlcnJvci5cbiAgICAvLyBSdW4gYSBiaW5hcnkgc2VhcmNoIHRvIGRldGVybWluZSBob3cgZmFyIGZyb20gdGhlIG1hdGNoIGxvY2F0aW9uIHdlIGNhbiBzdHJheVxuICAgIC8vIGF0IHRoaXMgZXJyb3IgbGV2ZWwuXG4gICAgdmFyIGJpbk1pbiA9IDA7XG4gICAgdmFyIGJpbk1pZCA9IGJpbk1heDtcblxuICAgIHdoaWxlIChiaW5NaW4gPCBiaW5NaWQpIHtcbiAgICAgIHZhciBfc2NvcmUzID0gYml0YXBTY29yZShwYXR0ZXJuLCB7XG4gICAgICAgIGVycm9yczogX2ksXG4gICAgICAgIGN1cnJlbnRMb2NhdGlvbjogZXhwZWN0ZWRMb2NhdGlvbiArIGJpbk1pZCxcbiAgICAgICAgZXhwZWN0ZWRMb2NhdGlvbjogZXhwZWN0ZWRMb2NhdGlvbixcbiAgICAgICAgZGlzdGFuY2U6IGRpc3RhbmNlXG4gICAgICB9KTtcblxuICAgICAgaWYgKF9zY29yZTMgPD0gY3VycmVudFRocmVzaG9sZCkge1xuICAgICAgICBiaW5NaW4gPSBiaW5NaWQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBiaW5NYXggPSBiaW5NaWQ7XG4gICAgICB9XG5cbiAgICAgIGJpbk1pZCA9IE1hdGguZmxvb3IoKGJpbk1heCAtIGJpbk1pbikgLyAyICsgYmluTWluKTtcbiAgICB9XG5cbiAgICAvLyBVc2UgdGhlIHJlc3VsdCBmcm9tIHRoaXMgaXRlcmF0aW9uIGFzIHRoZSBtYXhpbXVtIGZvciB0aGUgbmV4dC5cbiAgICBiaW5NYXggPSBiaW5NaWQ7XG5cbiAgICB2YXIgc3RhcnQgPSBNYXRoLm1heCgxLCBleHBlY3RlZExvY2F0aW9uIC0gYmluTWlkICsgMSk7XG4gICAgdmFyIGZpbmlzaCA9IGZpbmRBbGxNYXRjaGVzID8gdGV4dExlbiA6IE1hdGgubWluKGV4cGVjdGVkTG9jYXRpb24gKyBiaW5NaWQsIHRleHRMZW4pICsgcGF0dGVybkxlbjtcblxuICAgIC8vIEluaXRpYWxpemUgdGhlIGJpdCBhcnJheVxuICAgIHZhciBiaXRBcnIgPSBBcnJheShmaW5pc2ggKyAyKTtcblxuICAgIGJpdEFycltmaW5pc2ggKyAxXSA9ICgxIDw8IF9pKSAtIDE7XG5cbiAgICBmb3IgKHZhciBqID0gZmluaXNoOyBqID49IHN0YXJ0OyBqIC09IDEpIHtcbiAgICAgIHZhciBjdXJyZW50TG9jYXRpb24gPSBqIC0gMTtcbiAgICAgIHZhciBjaGFyTWF0Y2ggPSBwYXR0ZXJuQWxwaGFiZXRbdGV4dC5jaGFyQXQoY3VycmVudExvY2F0aW9uKV07XG5cbiAgICAgIGlmIChjaGFyTWF0Y2gpIHtcbiAgICAgICAgbWF0Y2hNYXNrW2N1cnJlbnRMb2NhdGlvbl0gPSAxO1xuICAgICAgfVxuXG4gICAgICAvLyBGaXJzdCBwYXNzOiBleGFjdCBtYXRjaFxuICAgICAgYml0QXJyW2pdID0gKGJpdEFycltqICsgMV0gPDwgMSB8IDEpICYgY2hhck1hdGNoO1xuXG4gICAgICAvLyBTdWJzZXF1ZW50IHBhc3NlczogZnV6enkgbWF0Y2hcbiAgICAgIGlmIChfaSAhPT0gMCkge1xuICAgICAgICBiaXRBcnJbal0gfD0gKGxhc3RCaXRBcnJbaiArIDFdIHwgbGFzdEJpdEFycltqXSkgPDwgMSB8IDEgfCBsYXN0Qml0QXJyW2ogKyAxXTtcbiAgICAgIH1cblxuICAgICAgaWYgKGJpdEFycltqXSAmIG1hc2spIHtcbiAgICAgICAgZmluYWxTY29yZSA9IGJpdGFwU2NvcmUocGF0dGVybiwge1xuICAgICAgICAgIGVycm9yczogX2ksXG4gICAgICAgICAgY3VycmVudExvY2F0aW9uOiBjdXJyZW50TG9jYXRpb24sXG4gICAgICAgICAgZXhwZWN0ZWRMb2NhdGlvbjogZXhwZWN0ZWRMb2NhdGlvbixcbiAgICAgICAgICBkaXN0YW5jZTogZGlzdGFuY2VcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gVGhpcyBtYXRjaCB3aWxsIGFsbW9zdCBjZXJ0YWlubHkgYmUgYmV0dGVyIHRoYW4gYW55IGV4aXN0aW5nIG1hdGNoLlxuICAgICAgICAvLyBCdXQgY2hlY2sgYW55d2F5LlxuICAgICAgICBpZiAoZmluYWxTY29yZSA8PSBjdXJyZW50VGhyZXNob2xkKSB7XG4gICAgICAgICAgLy8gSW5kZWVkIGl0IGlzXG4gICAgICAgICAgY3VycmVudFRocmVzaG9sZCA9IGZpbmFsU2NvcmU7XG4gICAgICAgICAgYmVzdExvY2F0aW9uID0gY3VycmVudExvY2F0aW9uO1xuXG4gICAgICAgICAgLy8gQWxyZWFkeSBwYXNzZWQgYGxvY2AsIGRvd25oaWxsIGZyb20gaGVyZSBvbiBpbi5cbiAgICAgICAgICBpZiAoYmVzdExvY2F0aW9uIDw9IGV4cGVjdGVkTG9jYXRpb24pIHtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIFdoZW4gcGFzc2luZyBgYmVzdExvY2F0aW9uYCwgZG9uJ3QgZXhjZWVkIG91ciBjdXJyZW50IGRpc3RhbmNlIGZyb20gYGV4cGVjdGVkTG9jYXRpb25gLlxuICAgICAgICAgIHN0YXJ0ID0gTWF0aC5tYXgoMSwgMiAqIGV4cGVjdGVkTG9jYXRpb24gLSBiZXN0TG9jYXRpb24pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gTm8gaG9wZSBmb3IgYSAoYmV0dGVyKSBtYXRjaCBhdCBncmVhdGVyIGVycm9yIGxldmVscy5cbiAgICB2YXIgX3Njb3JlMiA9IGJpdGFwU2NvcmUocGF0dGVybiwge1xuICAgICAgZXJyb3JzOiBfaSArIDEsXG4gICAgICBjdXJyZW50TG9jYXRpb246IGV4cGVjdGVkTG9jYXRpb24sXG4gICAgICBleHBlY3RlZExvY2F0aW9uOiBleHBlY3RlZExvY2F0aW9uLFxuICAgICAgZGlzdGFuY2U6IGRpc3RhbmNlXG4gICAgfSk7XG5cbiAgICBpZiAoX3Njb3JlMiA+IGN1cnJlbnRUaHJlc2hvbGQpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGxhc3RCaXRBcnIgPSBiaXRBcnI7XG4gIH1cblxuICAvLyBDb3VudCBleGFjdCBtYXRjaGVzICh0aG9zZSB3aXRoIGEgc2NvcmUgb2YgMCkgdG8gYmUgXCJhbG1vc3RcIiBleGFjdFxuICByZXR1cm4ge1xuICAgIGlzTWF0Y2g6IGJlc3RMb2NhdGlvbiA+PSAwLFxuICAgIHNjb3JlOiBmaW5hbFNjb3JlID09PSAwID8gMC4wMDEgOiBmaW5hbFNjb3JlLFxuICAgIG1hdGNoZWRJbmRpY2VzOiBtYXRjaGVkSW5kaWNlcyhtYXRjaE1hc2ssIG1pbk1hdGNoQ2hhckxlbmd0aClcbiAgfTtcbn07XG5cbi8qKiovIH0pLFxuLyogOCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG52YXIgQml0YXAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEpO1xudmFyIGRlZXBWYWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18oMik7XG52YXIgaXNBcnJheSA9IF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cbnZhciBGdXNlID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBGdXNlKGxpc3QsIF9yZWYpIHtcbiAgICB2YXIgX3JlZiRsb2NhdGlvbiA9IF9yZWYubG9jYXRpb24sXG4gICAgICAgIGxvY2F0aW9uID0gX3JlZiRsb2NhdGlvbiA9PT0gdW5kZWZpbmVkID8gMCA6IF9yZWYkbG9jYXRpb24sXG4gICAgICAgIF9yZWYkZGlzdGFuY2UgPSBfcmVmLmRpc3RhbmNlLFxuICAgICAgICBkaXN0YW5jZSA9IF9yZWYkZGlzdGFuY2UgPT09IHVuZGVmaW5lZCA/IDEwMCA6IF9yZWYkZGlzdGFuY2UsXG4gICAgICAgIF9yZWYkdGhyZXNob2xkID0gX3JlZi50aHJlc2hvbGQsXG4gICAgICAgIHRocmVzaG9sZCA9IF9yZWYkdGhyZXNob2xkID09PSB1bmRlZmluZWQgPyAwLjYgOiBfcmVmJHRocmVzaG9sZCxcbiAgICAgICAgX3JlZiRtYXhQYXR0ZXJuTGVuZ3RoID0gX3JlZi5tYXhQYXR0ZXJuTGVuZ3RoLFxuICAgICAgICBtYXhQYXR0ZXJuTGVuZ3RoID0gX3JlZiRtYXhQYXR0ZXJuTGVuZ3RoID09PSB1bmRlZmluZWQgPyAzMiA6IF9yZWYkbWF4UGF0dGVybkxlbmd0aCxcbiAgICAgICAgX3JlZiRjYXNlU2Vuc2l0aXZlID0gX3JlZi5jYXNlU2Vuc2l0aXZlLFxuICAgICAgICBjYXNlU2Vuc2l0aXZlID0gX3JlZiRjYXNlU2Vuc2l0aXZlID09PSB1bmRlZmluZWQgPyBmYWxzZSA6IF9yZWYkY2FzZVNlbnNpdGl2ZSxcbiAgICAgICAgX3JlZiR0b2tlblNlcGFyYXRvciA9IF9yZWYudG9rZW5TZXBhcmF0b3IsXG4gICAgICAgIHRva2VuU2VwYXJhdG9yID0gX3JlZiR0b2tlblNlcGFyYXRvciA9PT0gdW5kZWZpbmVkID8gLyArL2cgOiBfcmVmJHRva2VuU2VwYXJhdG9yLFxuICAgICAgICBfcmVmJGZpbmRBbGxNYXRjaGVzID0gX3JlZi5maW5kQWxsTWF0Y2hlcyxcbiAgICAgICAgZmluZEFsbE1hdGNoZXMgPSBfcmVmJGZpbmRBbGxNYXRjaGVzID09PSB1bmRlZmluZWQgPyBmYWxzZSA6IF9yZWYkZmluZEFsbE1hdGNoZXMsXG4gICAgICAgIF9yZWYkbWluTWF0Y2hDaGFyTGVuZyA9IF9yZWYubWluTWF0Y2hDaGFyTGVuZ3RoLFxuICAgICAgICBtaW5NYXRjaENoYXJMZW5ndGggPSBfcmVmJG1pbk1hdGNoQ2hhckxlbmcgPT09IHVuZGVmaW5lZCA/IDEgOiBfcmVmJG1pbk1hdGNoQ2hhckxlbmcsXG4gICAgICAgIF9yZWYkaWQgPSBfcmVmLmlkLFxuICAgICAgICBpZCA9IF9yZWYkaWQgPT09IHVuZGVmaW5lZCA/IG51bGwgOiBfcmVmJGlkLFxuICAgICAgICBfcmVmJGtleXMgPSBfcmVmLmtleXMsXG4gICAgICAgIGtleXMgPSBfcmVmJGtleXMgPT09IHVuZGVmaW5lZCA/IFtdIDogX3JlZiRrZXlzLFxuICAgICAgICBfcmVmJHNob3VsZFNvcnQgPSBfcmVmLnNob3VsZFNvcnQsXG4gICAgICAgIHNob3VsZFNvcnQgPSBfcmVmJHNob3VsZFNvcnQgPT09IHVuZGVmaW5lZCA/IHRydWUgOiBfcmVmJHNob3VsZFNvcnQsXG4gICAgICAgIF9yZWYkZ2V0Rm4gPSBfcmVmLmdldEZuLFxuICAgICAgICBnZXRGbiA9IF9yZWYkZ2V0Rm4gPT09IHVuZGVmaW5lZCA/IGRlZXBWYWx1ZSA6IF9yZWYkZ2V0Rm4sXG4gICAgICAgIF9yZWYkc29ydEZuID0gX3JlZi5zb3J0Rm4sXG4gICAgICAgIHNvcnRGbiA9IF9yZWYkc29ydEZuID09PSB1bmRlZmluZWQgPyBmdW5jdGlvbiAoYSwgYikge1xuICAgICAgcmV0dXJuIGEuc2NvcmUgLSBiLnNjb3JlO1xuICAgIH0gOiBfcmVmJHNvcnRGbixcbiAgICAgICAgX3JlZiR0b2tlbml6ZSA9IF9yZWYudG9rZW5pemUsXG4gICAgICAgIHRva2VuaXplID0gX3JlZiR0b2tlbml6ZSA9PT0gdW5kZWZpbmVkID8gZmFsc2UgOiBfcmVmJHRva2VuaXplLFxuICAgICAgICBfcmVmJG1hdGNoQWxsVG9rZW5zID0gX3JlZi5tYXRjaEFsbFRva2VucyxcbiAgICAgICAgbWF0Y2hBbGxUb2tlbnMgPSBfcmVmJG1hdGNoQWxsVG9rZW5zID09PSB1bmRlZmluZWQgPyBmYWxzZSA6IF9yZWYkbWF0Y2hBbGxUb2tlbnMsXG4gICAgICAgIF9yZWYkaW5jbHVkZU1hdGNoZXMgPSBfcmVmLmluY2x1ZGVNYXRjaGVzLFxuICAgICAgICBpbmNsdWRlTWF0Y2hlcyA9IF9yZWYkaW5jbHVkZU1hdGNoZXMgPT09IHVuZGVmaW5lZCA/IGZhbHNlIDogX3JlZiRpbmNsdWRlTWF0Y2hlcyxcbiAgICAgICAgX3JlZiRpbmNsdWRlU2NvcmUgPSBfcmVmLmluY2x1ZGVTY29yZSxcbiAgICAgICAgaW5jbHVkZVNjb3JlID0gX3JlZiRpbmNsdWRlU2NvcmUgPT09IHVuZGVmaW5lZCA/IGZhbHNlIDogX3JlZiRpbmNsdWRlU2NvcmUsXG4gICAgICAgIF9yZWYkdmVyYm9zZSA9IF9yZWYudmVyYm9zZSxcbiAgICAgICAgdmVyYm9zZSA9IF9yZWYkdmVyYm9zZSA9PT0gdW5kZWZpbmVkID8gZmFsc2UgOiBfcmVmJHZlcmJvc2U7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgRnVzZSk7XG5cbiAgICB0aGlzLm9wdGlvbnMgPSB7XG4gICAgICBsb2NhdGlvbjogbG9jYXRpb24sXG4gICAgICBkaXN0YW5jZTogZGlzdGFuY2UsXG4gICAgICB0aHJlc2hvbGQ6IHRocmVzaG9sZCxcbiAgICAgIG1heFBhdHRlcm5MZW5ndGg6IG1heFBhdHRlcm5MZW5ndGgsXG4gICAgICBpc0Nhc2VTZW5zaXRpdmU6IGNhc2VTZW5zaXRpdmUsXG4gICAgICB0b2tlblNlcGFyYXRvcjogdG9rZW5TZXBhcmF0b3IsXG4gICAgICBmaW5kQWxsTWF0Y2hlczogZmluZEFsbE1hdGNoZXMsXG4gICAgICBtaW5NYXRjaENoYXJMZW5ndGg6IG1pbk1hdGNoQ2hhckxlbmd0aCxcbiAgICAgIGlkOiBpZCxcbiAgICAgIGtleXM6IGtleXMsXG4gICAgICBpbmNsdWRlTWF0Y2hlczogaW5jbHVkZU1hdGNoZXMsXG4gICAgICBpbmNsdWRlU2NvcmU6IGluY2x1ZGVTY29yZSxcbiAgICAgIHNob3VsZFNvcnQ6IHNob3VsZFNvcnQsXG4gICAgICBnZXRGbjogZ2V0Rm4sXG4gICAgICBzb3J0Rm46IHNvcnRGbixcbiAgICAgIHZlcmJvc2U6IHZlcmJvc2UsXG4gICAgICB0b2tlbml6ZTogdG9rZW5pemUsXG4gICAgICBtYXRjaEFsbFRva2VuczogbWF0Y2hBbGxUb2tlbnNcbiAgICB9O1xuXG4gICAgdGhpcy5zZXRDb2xsZWN0aW9uKGxpc3QpO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKEZ1c2UsIFt7XG4gICAga2V5OiAnc2V0Q29sbGVjdGlvbicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNldENvbGxlY3Rpb24obGlzdCkge1xuICAgICAgdGhpcy5saXN0ID0gbGlzdDtcbiAgICAgIHJldHVybiBsaXN0O1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3NlYXJjaCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNlYXJjaChwYXR0ZXJuKSB7XG4gICAgICB0aGlzLl9sb2coJy0tLS0tLS0tLVxcblNlYXJjaCBwYXR0ZXJuOiBcIicgKyBwYXR0ZXJuICsgJ1wiJyk7XG5cbiAgICAgIHZhciBfcHJlcGFyZVNlYXJjaGVyczIgPSB0aGlzLl9wcmVwYXJlU2VhcmNoZXJzKHBhdHRlcm4pLFxuICAgICAgICAgIHRva2VuU2VhcmNoZXJzID0gX3ByZXBhcmVTZWFyY2hlcnMyLnRva2VuU2VhcmNoZXJzLFxuICAgICAgICAgIGZ1bGxTZWFyY2hlciA9IF9wcmVwYXJlU2VhcmNoZXJzMi5mdWxsU2VhcmNoZXI7XG5cbiAgICAgIHZhciBfc2VhcmNoMiA9IHRoaXMuX3NlYXJjaCh0b2tlblNlYXJjaGVycywgZnVsbFNlYXJjaGVyKSxcbiAgICAgICAgICB3ZWlnaHRzID0gX3NlYXJjaDIud2VpZ2h0cyxcbiAgICAgICAgICByZXN1bHRzID0gX3NlYXJjaDIucmVzdWx0cztcblxuICAgICAgdGhpcy5fY29tcHV0ZVNjb3JlKHdlaWdodHMsIHJlc3VsdHMpO1xuXG4gICAgICBpZiAodGhpcy5vcHRpb25zLnNob3VsZFNvcnQpIHtcbiAgICAgICAgdGhpcy5fc29ydChyZXN1bHRzKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuX2Zvcm1hdChyZXN1bHRzKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdfcHJlcGFyZVNlYXJjaGVycycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9wcmVwYXJlU2VhcmNoZXJzKCkge1xuICAgICAgdmFyIHBhdHRlcm4gPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6ICcnO1xuXG4gICAgICB2YXIgdG9rZW5TZWFyY2hlcnMgPSBbXTtcblxuICAgICAgaWYgKHRoaXMub3B0aW9ucy50b2tlbml6ZSkge1xuICAgICAgICAvLyBUb2tlbml6ZSBvbiB0aGUgc2VwYXJhdG9yXG4gICAgICAgIHZhciB0b2tlbnMgPSBwYXR0ZXJuLnNwbGl0KHRoaXMub3B0aW9ucy50b2tlblNlcGFyYXRvcik7XG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSB0b2tlbnMubGVuZ3RoOyBpIDwgbGVuOyBpICs9IDEpIHtcbiAgICAgICAgICB0b2tlblNlYXJjaGVycy5wdXNoKG5ldyBCaXRhcCh0b2tlbnNbaV0sIHRoaXMub3B0aW9ucykpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHZhciBmdWxsU2VhcmNoZXIgPSBuZXcgQml0YXAocGF0dGVybiwgdGhpcy5vcHRpb25zKTtcblxuICAgICAgcmV0dXJuIHsgdG9rZW5TZWFyY2hlcnM6IHRva2VuU2VhcmNoZXJzLCBmdWxsU2VhcmNoZXI6IGZ1bGxTZWFyY2hlciB9O1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ19zZWFyY2gnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfc2VhcmNoKCkge1xuICAgICAgdmFyIHRva2VuU2VhcmNoZXJzID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiBbXTtcbiAgICAgIHZhciBmdWxsU2VhcmNoZXIgPSBhcmd1bWVudHNbMV07XG5cbiAgICAgIHZhciBsaXN0ID0gdGhpcy5saXN0O1xuICAgICAgdmFyIHJlc3VsdE1hcCA9IHt9O1xuICAgICAgdmFyIHJlc3VsdHMgPSBbXTtcblxuICAgICAgLy8gQ2hlY2sgdGhlIGZpcnN0IGl0ZW0gaW4gdGhlIGxpc3QsIGlmIGl0J3MgYSBzdHJpbmcsIHRoZW4gd2UgYXNzdW1lXG4gICAgICAvLyB0aGF0IGV2ZXJ5IGl0ZW0gaW4gdGhlIGxpc3QgaXMgYWxzbyBhIHN0cmluZywgYW5kIHRodXMgaXQncyBhIGZsYXR0ZW5lZCBhcnJheS5cbiAgICAgIGlmICh0eXBlb2YgbGlzdFswXSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgLy8gSXRlcmF0ZSBvdmVyIGV2ZXJ5IGl0ZW1cbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGxpc3QubGVuZ3RoOyBpIDwgbGVuOyBpICs9IDEpIHtcbiAgICAgICAgICB0aGlzLl9hbmFseXplKHtcbiAgICAgICAgICAgIGtleTogJycsXG4gICAgICAgICAgICB2YWx1ZTogbGlzdFtpXSxcbiAgICAgICAgICAgIHJlY29yZDogaSxcbiAgICAgICAgICAgIGluZGV4OiBpXG4gICAgICAgICAgfSwge1xuICAgICAgICAgICAgcmVzdWx0TWFwOiByZXN1bHRNYXAsXG4gICAgICAgICAgICByZXN1bHRzOiByZXN1bHRzLFxuICAgICAgICAgICAgdG9rZW5TZWFyY2hlcnM6IHRva2VuU2VhcmNoZXJzLFxuICAgICAgICAgICAgZnVsbFNlYXJjaGVyOiBmdWxsU2VhcmNoZXJcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7IHdlaWdodHM6IG51bGwsIHJlc3VsdHM6IHJlc3VsdHMgfTtcbiAgICAgIH1cblxuICAgICAgLy8gT3RoZXJ3aXNlLCB0aGUgZmlyc3QgaXRlbSBpcyBhbiBPYmplY3QgKGhvcGVmdWxseSksIGFuZCB0aHVzIHRoZSBzZWFyY2hpbmdcbiAgICAgIC8vIGlzIGRvbmUgb24gdGhlIHZhbHVlcyBvZiB0aGUga2V5cyBvZiBlYWNoIGl0ZW0uXG4gICAgICB2YXIgd2VpZ2h0cyA9IHt9O1xuICAgICAgZm9yICh2YXIgX2kgPSAwLCBfbGVuID0gbGlzdC5sZW5ndGg7IF9pIDwgX2xlbjsgX2kgKz0gMSkge1xuICAgICAgICB2YXIgaXRlbSA9IGxpc3RbX2ldO1xuICAgICAgICAvLyBJdGVyYXRlIG92ZXIgZXZlcnkga2V5XG4gICAgICAgIGZvciAodmFyIGogPSAwLCBrZXlzTGVuID0gdGhpcy5vcHRpb25zLmtleXMubGVuZ3RoOyBqIDwga2V5c0xlbjsgaiArPSAxKSB7XG4gICAgICAgICAgdmFyIGtleSA9IHRoaXMub3B0aW9ucy5rZXlzW2pdO1xuICAgICAgICAgIGlmICh0eXBlb2Yga2V5ICE9PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgd2VpZ2h0c1trZXkubmFtZV0gPSB7XG4gICAgICAgICAgICAgIHdlaWdodDogMSAtIGtleS53ZWlnaHQgfHwgMVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGlmIChrZXkud2VpZ2h0IDw9IDAgfHwga2V5LndlaWdodCA+IDEpIHtcbiAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdLZXkgd2VpZ2h0IGhhcyB0byBiZSA+IDAgYW5kIDw9IDEnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGtleSA9IGtleS5uYW1lO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB3ZWlnaHRzW2tleV0gPSB7XG4gICAgICAgICAgICAgIHdlaWdodDogMVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aGlzLl9hbmFseXplKHtcbiAgICAgICAgICAgIGtleToga2V5LFxuICAgICAgICAgICAgdmFsdWU6IHRoaXMub3B0aW9ucy5nZXRGbihpdGVtLCBrZXkpLFxuICAgICAgICAgICAgcmVjb3JkOiBpdGVtLFxuICAgICAgICAgICAgaW5kZXg6IF9pXG4gICAgICAgICAgfSwge1xuICAgICAgICAgICAgcmVzdWx0TWFwOiByZXN1bHRNYXAsXG4gICAgICAgICAgICByZXN1bHRzOiByZXN1bHRzLFxuICAgICAgICAgICAgdG9rZW5TZWFyY2hlcnM6IHRva2VuU2VhcmNoZXJzLFxuICAgICAgICAgICAgZnVsbFNlYXJjaGVyOiBmdWxsU2VhcmNoZXJcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4geyB3ZWlnaHRzOiB3ZWlnaHRzLCByZXN1bHRzOiByZXN1bHRzIH07XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnX2FuYWx5emUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfYW5hbHl6ZShfcmVmMiwgX3JlZjMpIHtcbiAgICAgIHZhciBrZXkgPSBfcmVmMi5rZXksXG4gICAgICAgICAgdmFsdWUgPSBfcmVmMi52YWx1ZSxcbiAgICAgICAgICByZWNvcmQgPSBfcmVmMi5yZWNvcmQsXG4gICAgICAgICAgaW5kZXggPSBfcmVmMi5pbmRleDtcbiAgICAgIHZhciBfcmVmMyR0b2tlblNlYXJjaGVycyA9IF9yZWYzLnRva2VuU2VhcmNoZXJzLFxuICAgICAgICAgIHRva2VuU2VhcmNoZXJzID0gX3JlZjMkdG9rZW5TZWFyY2hlcnMgPT09IHVuZGVmaW5lZCA/IFtdIDogX3JlZjMkdG9rZW5TZWFyY2hlcnMsXG4gICAgICAgICAgX3JlZjMkZnVsbFNlYXJjaGVyID0gX3JlZjMuZnVsbFNlYXJjaGVyLFxuICAgICAgICAgIGZ1bGxTZWFyY2hlciA9IF9yZWYzJGZ1bGxTZWFyY2hlciA9PT0gdW5kZWZpbmVkID8gW10gOiBfcmVmMyRmdWxsU2VhcmNoZXIsXG4gICAgICAgICAgX3JlZjMkcmVzdWx0TWFwID0gX3JlZjMucmVzdWx0TWFwLFxuICAgICAgICAgIHJlc3VsdE1hcCA9IF9yZWYzJHJlc3VsdE1hcCA9PT0gdW5kZWZpbmVkID8ge30gOiBfcmVmMyRyZXN1bHRNYXAsXG4gICAgICAgICAgX3JlZjMkcmVzdWx0cyA9IF9yZWYzLnJlc3VsdHMsXG4gICAgICAgICAgcmVzdWx0cyA9IF9yZWYzJHJlc3VsdHMgPT09IHVuZGVmaW5lZCA/IFtdIDogX3JlZjMkcmVzdWx0cztcblxuICAgICAgLy8gQ2hlY2sgaWYgdGhlIHRleHZhbHVldCBjYW4gYmUgc2VhcmNoZWRcbiAgICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkIHx8IHZhbHVlID09PSBudWxsKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdmFyIGV4aXN0cyA9IGZhbHNlO1xuICAgICAgdmFyIGF2ZXJhZ2VTY29yZSA9IC0xO1xuICAgICAgdmFyIG51bVRleHRNYXRjaGVzID0gMDtcblxuICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgdGhpcy5fbG9nKCdcXG5LZXk6ICcgKyAoa2V5ID09PSAnJyA/ICctJyA6IGtleSkpO1xuXG4gICAgICAgIHZhciBtYWluU2VhcmNoUmVzdWx0ID0gZnVsbFNlYXJjaGVyLnNlYXJjaCh2YWx1ZSk7XG4gICAgICAgIHRoaXMuX2xvZygnRnVsbCB0ZXh0OiBcIicgKyB2YWx1ZSArICdcIiwgc2NvcmU6ICcgKyBtYWluU2VhcmNoUmVzdWx0LnNjb3JlKTtcblxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLnRva2VuaXplKSB7XG4gICAgICAgICAgdmFyIHdvcmRzID0gdmFsdWUuc3BsaXQodGhpcy5vcHRpb25zLnRva2VuU2VwYXJhdG9yKTtcbiAgICAgICAgICB2YXIgc2NvcmVzID0gW107XG5cbiAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRva2VuU2VhcmNoZXJzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICB2YXIgdG9rZW5TZWFyY2hlciA9IHRva2VuU2VhcmNoZXJzW2ldO1xuXG4gICAgICAgICAgICB0aGlzLl9sb2coJ1xcblBhdHRlcm46IFwiJyArIHRva2VuU2VhcmNoZXIucGF0dGVybiArICdcIicpO1xuXG4gICAgICAgICAgICAvLyBsZXQgdG9rZW5TY29yZXMgPSBbXVxuICAgICAgICAgICAgdmFyIGhhc01hdGNoSW5UZXh0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgd29yZHMubGVuZ3RoOyBqICs9IDEpIHtcbiAgICAgICAgICAgICAgdmFyIHdvcmQgPSB3b3Jkc1tqXTtcbiAgICAgICAgICAgICAgdmFyIHRva2VuU2VhcmNoUmVzdWx0ID0gdG9rZW5TZWFyY2hlci5zZWFyY2god29yZCk7XG4gICAgICAgICAgICAgIHZhciBvYmogPSB7fTtcbiAgICAgICAgICAgICAgaWYgKHRva2VuU2VhcmNoUmVzdWx0LmlzTWF0Y2gpIHtcbiAgICAgICAgICAgICAgICBvYmpbd29yZF0gPSB0b2tlblNlYXJjaFJlc3VsdC5zY29yZTtcbiAgICAgICAgICAgICAgICBleGlzdHMgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGhhc01hdGNoSW5UZXh0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBzY29yZXMucHVzaCh0b2tlblNlYXJjaFJlc3VsdC5zY29yZSk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgb2JqW3dvcmRdID0gMTtcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMub3B0aW9ucy5tYXRjaEFsbFRva2Vucykge1xuICAgICAgICAgICAgICAgICAgc2NvcmVzLnB1c2goMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHRoaXMuX2xvZygnVG9rZW46IFwiJyArIHdvcmQgKyAnXCIsIHNjb3JlOiAnICsgb2JqW3dvcmRdKTtcbiAgICAgICAgICAgICAgLy8gdG9rZW5TY29yZXMucHVzaChvYmopXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChoYXNNYXRjaEluVGV4dCkge1xuICAgICAgICAgICAgICBudW1UZXh0TWF0Y2hlcyArPSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGF2ZXJhZ2VTY29yZSA9IHNjb3Jlc1swXTtcbiAgICAgICAgICB2YXIgc2NvcmVzTGVuID0gc2NvcmVzLmxlbmd0aDtcbiAgICAgICAgICBmb3IgKHZhciBfaTIgPSAxOyBfaTIgPCBzY29yZXNMZW47IF9pMiArPSAxKSB7XG4gICAgICAgICAgICBhdmVyYWdlU2NvcmUgKz0gc2NvcmVzW19pMl07XG4gICAgICAgICAgfVxuICAgICAgICAgIGF2ZXJhZ2VTY29yZSA9IGF2ZXJhZ2VTY29yZSAvIHNjb3Jlc0xlbjtcblxuICAgICAgICAgIHRoaXMuX2xvZygnVG9rZW4gc2NvcmUgYXZlcmFnZTonLCBhdmVyYWdlU2NvcmUpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGZpbmFsU2NvcmUgPSBtYWluU2VhcmNoUmVzdWx0LnNjb3JlO1xuICAgICAgICBpZiAoYXZlcmFnZVNjb3JlID4gLTEpIHtcbiAgICAgICAgICBmaW5hbFNjb3JlID0gKGZpbmFsU2NvcmUgKyBhdmVyYWdlU2NvcmUpIC8gMjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX2xvZygnU2NvcmUgYXZlcmFnZTonLCBmaW5hbFNjb3JlKTtcblxuICAgICAgICB2YXIgY2hlY2tUZXh0TWF0Y2hlcyA9IHRoaXMub3B0aW9ucy50b2tlbml6ZSAmJiB0aGlzLm9wdGlvbnMubWF0Y2hBbGxUb2tlbnMgPyBudW1UZXh0TWF0Y2hlcyA+PSB0b2tlblNlYXJjaGVycy5sZW5ndGggOiB0cnVlO1xuXG4gICAgICAgIHRoaXMuX2xvZygnXFxuQ2hlY2sgTWF0Y2hlczogJyArIGNoZWNrVGV4dE1hdGNoZXMpO1xuXG4gICAgICAgIC8vIElmIGEgbWF0Y2ggaXMgZm91bmQsIGFkZCB0aGUgaXRlbSB0byA8cmF3UmVzdWx0cz4sIGluY2x1ZGluZyBpdHMgc2NvcmVcbiAgICAgICAgaWYgKChleGlzdHMgfHwgbWFpblNlYXJjaFJlc3VsdC5pc01hdGNoKSAmJiBjaGVja1RleHRNYXRjaGVzKSB7XG4gICAgICAgICAgLy8gQ2hlY2sgaWYgdGhlIGl0ZW0gYWxyZWFkeSBleGlzdHMgaW4gb3VyIHJlc3VsdHNcbiAgICAgICAgICB2YXIgZXhpc3RpbmdSZXN1bHQgPSByZXN1bHRNYXBbaW5kZXhdO1xuXG4gICAgICAgICAgaWYgKGV4aXN0aW5nUmVzdWx0KSB7XG4gICAgICAgICAgICAvLyBVc2UgdGhlIGxvd2VzdCBzY29yZVxuICAgICAgICAgICAgLy8gZXhpc3RpbmdSZXN1bHQuc2NvcmUsIGJpdGFwUmVzdWx0LnNjb3JlXG4gICAgICAgICAgICBleGlzdGluZ1Jlc3VsdC5vdXRwdXQucHVzaCh7XG4gICAgICAgICAgICAgIGtleToga2V5LFxuICAgICAgICAgICAgICBzY29yZTogZmluYWxTY29yZSxcbiAgICAgICAgICAgICAgbWF0Y2hlZEluZGljZXM6IG1haW5TZWFyY2hSZXN1bHQubWF0Y2hlZEluZGljZXNcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBBZGQgaXQgdG8gdGhlIHJhdyByZXN1bHQgbGlzdFxuICAgICAgICAgICAgcmVzdWx0TWFwW2luZGV4XSA9IHtcbiAgICAgICAgICAgICAgaXRlbTogcmVjb3JkLFxuICAgICAgICAgICAgICBvdXRwdXQ6IFt7XG4gICAgICAgICAgICAgICAga2V5OiBrZXksXG4gICAgICAgICAgICAgICAgc2NvcmU6IGZpbmFsU2NvcmUsXG4gICAgICAgICAgICAgICAgbWF0Y2hlZEluZGljZXM6IG1haW5TZWFyY2hSZXN1bHQubWF0Y2hlZEluZGljZXNcbiAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHJlc3VsdHMucHVzaChyZXN1bHRNYXBbaW5kZXhdKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgZm9yICh2YXIgX2kzID0gMCwgbGVuID0gdmFsdWUubGVuZ3RoOyBfaTMgPCBsZW47IF9pMyArPSAxKSB7XG4gICAgICAgICAgdGhpcy5fYW5hbHl6ZSh7XG4gICAgICAgICAgICBrZXk6IGtleSxcbiAgICAgICAgICAgIHZhbHVlOiB2YWx1ZVtfaTNdLFxuICAgICAgICAgICAgcmVjb3JkOiByZWNvcmQsXG4gICAgICAgICAgICBpbmRleDogaW5kZXhcbiAgICAgICAgICB9LCB7XG4gICAgICAgICAgICByZXN1bHRNYXA6IHJlc3VsdE1hcCxcbiAgICAgICAgICAgIHJlc3VsdHM6IHJlc3VsdHMsXG4gICAgICAgICAgICB0b2tlblNlYXJjaGVyczogdG9rZW5TZWFyY2hlcnMsXG4gICAgICAgICAgICBmdWxsU2VhcmNoZXI6IGZ1bGxTZWFyY2hlclxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnX2NvbXB1dGVTY29yZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9jb21wdXRlU2NvcmUod2VpZ2h0cywgcmVzdWx0cykge1xuICAgICAgdGhpcy5fbG9nKCdcXG5cXG5Db21wdXRpbmcgc2NvcmU6XFxuJyk7XG5cbiAgICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSByZXN1bHRzLmxlbmd0aDsgaSA8IGxlbjsgaSArPSAxKSB7XG4gICAgICAgIHZhciBvdXRwdXQgPSByZXN1bHRzW2ldLm91dHB1dDtcbiAgICAgICAgdmFyIHNjb3JlTGVuID0gb3V0cHV0Lmxlbmd0aDtcblxuICAgICAgICB2YXIgdG90YWxTY29yZSA9IDA7XG4gICAgICAgIHZhciBiZXN0U2NvcmUgPSAxO1xuXG4gICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgc2NvcmVMZW47IGogKz0gMSkge1xuICAgICAgICAgIHZhciBzY29yZSA9IG91dHB1dFtqXS5zY29yZTtcbiAgICAgICAgICB2YXIgd2VpZ2h0ID0gd2VpZ2h0cyA/IHdlaWdodHNbb3V0cHV0W2pdLmtleV0ud2VpZ2h0IDogMTtcbiAgICAgICAgICB2YXIgblNjb3JlID0gc2NvcmUgKiB3ZWlnaHQ7XG5cbiAgICAgICAgICBpZiAod2VpZ2h0ICE9PSAxKSB7XG4gICAgICAgICAgICBiZXN0U2NvcmUgPSBNYXRoLm1pbihiZXN0U2NvcmUsIG5TY29yZSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG91dHB1dFtqXS5uU2NvcmUgPSBuU2NvcmU7XG4gICAgICAgICAgICB0b3RhbFNjb3JlICs9IG5TY29yZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXN1bHRzW2ldLnNjb3JlID0gYmVzdFNjb3JlID09PSAxID8gdG90YWxTY29yZSAvIHNjb3JlTGVuIDogYmVzdFNjb3JlO1xuXG4gICAgICAgIHRoaXMuX2xvZyhyZXN1bHRzW2ldKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdfc29ydCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9zb3J0KHJlc3VsdHMpIHtcbiAgICAgIHRoaXMuX2xvZygnXFxuXFxuU29ydGluZy4uLi4nKTtcbiAgICAgIHJlc3VsdHMuc29ydCh0aGlzLm9wdGlvbnMuc29ydEZuKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdfZm9ybWF0JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gX2Zvcm1hdChyZXN1bHRzKSB7XG4gICAgICB2YXIgZmluYWxPdXRwdXQgPSBbXTtcblxuICAgICAgdGhpcy5fbG9nKCdcXG5cXG5PdXRwdXQ6XFxuXFxuJywgcmVzdWx0cyk7XG5cbiAgICAgIHZhciB0cmFuc2Zvcm1lcnMgPSBbXTtcblxuICAgICAgaWYgKHRoaXMub3B0aW9ucy5pbmNsdWRlTWF0Y2hlcykge1xuICAgICAgICB0cmFuc2Zvcm1lcnMucHVzaChmdW5jdGlvbiAocmVzdWx0LCBkYXRhKSB7XG4gICAgICAgICAgdmFyIG91dHB1dCA9IHJlc3VsdC5vdXRwdXQ7XG4gICAgICAgICAgZGF0YS5tYXRjaGVzID0gW107XG5cbiAgICAgICAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gb3V0cHV0Lmxlbmd0aDsgaSA8IGxlbjsgaSArPSAxKSB7XG4gICAgICAgICAgICB2YXIgaXRlbSA9IG91dHB1dFtpXTtcbiAgICAgICAgICAgIHZhciBvYmogPSB7XG4gICAgICAgICAgICAgIGluZGljZXM6IGl0ZW0ubWF0Y2hlZEluZGljZXNcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBpZiAoaXRlbS5rZXkpIHtcbiAgICAgICAgICAgICAgb2JqLmtleSA9IGl0ZW0ua2V5O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZGF0YS5tYXRjaGVzLnB1c2gob2JqKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5vcHRpb25zLmluY2x1ZGVTY29yZSkge1xuICAgICAgICB0cmFuc2Zvcm1lcnMucHVzaChmdW5jdGlvbiAocmVzdWx0LCBkYXRhKSB7XG4gICAgICAgICAgZGF0YS5zY29yZSA9IHJlc3VsdC5zY29yZTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSByZXN1bHRzLmxlbmd0aDsgaSA8IGxlbjsgaSArPSAxKSB7XG4gICAgICAgIHZhciByZXN1bHQgPSByZXN1bHRzW2ldO1xuXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuaWQpIHtcbiAgICAgICAgICByZXN1bHQuaXRlbSA9IHRoaXMub3B0aW9ucy5nZXRGbihyZXN1bHQuaXRlbSwgdGhpcy5vcHRpb25zLmlkKVswXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghdHJhbnNmb3JtZXJzLmxlbmd0aCkge1xuICAgICAgICAgIGZpbmFsT3V0cHV0LnB1c2gocmVzdWx0Lml0ZW0pO1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGRhdGEgPSB7XG4gICAgICAgICAgaXRlbTogcmVzdWx0Lml0ZW1cbiAgICAgICAgfTtcblxuICAgICAgICBmb3IgKHZhciBqID0gMCwgX2xlbjIgPSB0cmFuc2Zvcm1lcnMubGVuZ3RoOyBqIDwgX2xlbjI7IGogKz0gMSkge1xuICAgICAgICAgIHRyYW5zZm9ybWVyc1tqXShyZXN1bHQsIGRhdGEpO1xuICAgICAgICB9XG5cbiAgICAgICAgZmluYWxPdXRwdXQucHVzaChkYXRhKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGZpbmFsT3V0cHV0O1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ19sb2cnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfbG9nKCkge1xuICAgICAgaWYgKHRoaXMub3B0aW9ucy52ZXJib3NlKSB7XG4gICAgICAgIHZhciBfY29uc29sZTtcblxuICAgICAgICAoX2NvbnNvbGUgPSBjb25zb2xlKS5sb2cuYXBwbHkoX2NvbnNvbGUsIGFyZ3VtZW50cyk7XG4gICAgICB9XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIEZ1c2U7XG59KCk7XG5cbm1vZHVsZS5leHBvcnRzID0gRnVzZTtcblxuLyoqKi8gfSlcbi8qKioqKiovIF0pO1xufSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1mdXNlLmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIEM6L1VzZXJzL3h4b1RrL0Ryb3Bib3gvQm9va3Mvfi9mdXNlLmpzL2Rpc3QvZnVzZS5qc1xuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9