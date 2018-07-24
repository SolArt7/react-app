import {combineReducers} from 'redux'
import counterReducer from './counter';
import articles from './articles';
import selectedArticles from './select';
import dates from './dates';

export default combineReducers({
	count: counterReducer,
	articles,
	dates,
	selectedArticles
})