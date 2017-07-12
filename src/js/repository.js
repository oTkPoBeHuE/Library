/**
 * Created by xxoTk on 012 12.06.17.
 */
"use strict"

import jsonInitData from '../data/init_books.json';
export {saveJson, readJson};

function saveJson(data) {
	localStorage.setItem("data", data);
}

function readJson() {
	if (dataIsEmpty(localStorage.getItem("data"))) {
		setInitialData();
	}
	return localStorage.getItem("data");
}

function setInitialData() {
	saveJson(JSON.stringify(jsonInitData));
}

function dataIsEmpty(data) {
	return data === null || data == "{}" || data == "[]" || data == "";
}

