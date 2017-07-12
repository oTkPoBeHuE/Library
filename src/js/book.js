/**
 * Created by xxoTk on 014 14.06.17.
 */
"use strict"

export default class Books{
	constructor(opts) {
		this.author = opts.author;
		this.title = opts.title;
		this.isbn = opts.isbn;
		this.circulation = opts.circulation;
		this.date = opts.date;
	}
}

