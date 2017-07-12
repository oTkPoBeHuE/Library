import Book from './book';
import Library from './library';
import {saveJson, readJson}from './repository';

function displayBook(book) {
	const bookItemTemplate = `
		<li class="list-group-item el-books-list_item">
			<div>
				<div class = "row">
					<div class="col-lg-7 col-md-7 col-sm-7">
						<div class = "row">
							<div class="col-lg-1 col-md-1 col-sm-1">
								<div class = "el-books-list_item-badge"></div>
							</div>
							<div class="col-lg-11 col-md-11 col-sm-11">
								<p><strong>Название: </strong><i>"<span class = "title">${book.title}</span>"<span></i></p>
								<p><strong>Автор: </strong><span class = "el-books-list_item_author">${book.author}</span></p>						
							</div>
						</div>
					</div>
					<div class="col-lg-4 col-md-4 col-sm-4">
						<p><strong>ISBN: </strong><span class = "el-books-list_item_isbn">${book.isbn}</span></p>
					</div>
					<div class="col-lg-1 col-md-1 col-sm-1">
						<button type="button" class="close el-books-list_item_delete rounded-circle" aria-label="Close">
							<span class="glyphicon glyphicon-trash el-books-list_item_trash-icon" aria-hidden="true"></span>
						</button>
					</div>
				</div>
			</div>
		</li>`;
	let $template = $(bookItemTemplate);
	$template.appendTo(".el-books-list");
}

function getLibrary() {
	return new Library(readJson());
}

function saveLibrary(library) {
	saveJson(library.getJson());
}

function displayAllBooks() {
	clearBooksList();
	displayBooks(getLibrary().getBooks())
}

function displayBooks(books) {
	for (let book of books) {
		displayBook(book);
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
	return new Book({
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
	let book = getLibrary().getBookByIsbn(getIsbnByBookItem(this));
	setForm(book);
	colourSelectedBookListItem(this);
	modeEditBook();
//	$(this).before("<div class='badge'>Текст</div>")
}

function deleteItem(item) {
	let $book_item = $(this).closest("li");
	let isbn = getIsbnByBookItem($book_item);

	saveLibrary(getLibrary().deleteBookByIsbn(isbn));
	displayAllBooks();
}

// TODO: ращобраться с функциями
$(document)
	.on("click", ".el-books-list_item", function () {
		selectItem.call(this);
	})
	.on("click", ".el-books-list_item_delete", function (e) {
		deleteItem.call(this);
		e.stopPropagation(); // Убераем всплытие, чтобы не 'выбиралась' книга
	})
	.on("click", ".el-button-add", function () {
		let book = readForm();
		saveLibrary(getLibrary().addBook(book));
		modeAddBook();
		displayAllBooks();
	})
	.on("click", ".el-button-edit", function () {
		let book = readForm();
		saveLibrary(getLibrary().editBook(book));
		displayAllBooks();
	})
	.on("click", ".el-button-close-edit-mode", function () {
		modeAddBook();
	})
	.on("mouseenter", ".el-books-list_item_delete", function () {
		$(this).closest("li").addClass("el-danger");
	})
	.on("mouseleave", ".el-books-list_item_delete", function () {
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
	let result = getLibrary().filter(searchText).getBooks();
	clearBooksList();
	displayBooks(result);
});

