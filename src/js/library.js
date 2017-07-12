/**
 * Created by xxoTk on 016 16.06.17.
 */

import Book from './book';
import Fuse from 'fuse.js';

export default class Library {
	constructor(booksJson) {
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

	filter(searchText) {
		if(searchText != ""){
			let fuse = new Fuse(this.books, this.searchOptions);
			this.books = fuse.search(searchText);
			console.log(this.books);
		}
		return this;
	}

	addBook(book) {
		this.books.push(book);
		return this;
	}

	editBook(book) {
		for(let i = 0; i < this.books.length;i++){
			if (this.books[i].isbn == book.isbn) {
				this.books[i] = book;
				break;
			}
		}
		return this;
	}

	getIndexByIsbn(isbn) {
		for (let i = 0; i < this.books.length; i++) {
			if (this.books[i].isbn == isbn)
				return i;
		}
		return null;
	}

	getBookByIsbn(isbn) {
		return this.books[this.getIndexByIsbn(isbn)];
	}

	deleteBookByIsbn(isbn) {
		this.books = this.books.filter(book => book.isbn != isbn);
		return this;
	}

	getJson() {
		return JSON.stringify(this.books);
	}

	getBooks() {
		return this.books.map(book => new Book(book));
	}

	setSearchOptions(options){
		this.searchOptions =  options;
		return this;
	}
}



