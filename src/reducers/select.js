import {SELECT_ARTICLE} from "../constants";


export default (selectedArticles = [], action) => {
	const {type, payload} = action;
	switch (type) {
		case SELECT_ARTICLE:
			return payload.articles;
		default:
			return selectedArticles
	}
	
}