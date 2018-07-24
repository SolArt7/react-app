import {ADD_END_DATE, ADD_START_DATE, CLEAR_DATE, DELETE_ARTICLE, INCREMENT, SELECT_ARTICLE} from "../constants";

export function increment() {
	return {
		type: INCREMENT
	}
}

export function deleteArticle(id) {
	return {
		type: DELETE_ARTICLE,
		payload: {id}
	}
}

export function addStartDate(date) {
	return {
		type: ADD_START_DATE,
		payload: {date}
	}
}

export function addEndDate(date) {
	return {
		type: ADD_END_DATE,
		payload: {date}
	}
}

export function clearDate() {
	return {
		type: CLEAR_DATE
	}
}

export function selectArticle(articles) {
	return {
		type: SELECT_ARTICLE,
		payload: {
			articles: articles
		}
	}
}