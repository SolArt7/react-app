import {ADD_END_DATE, ADD_START_DATE, CLEAR_DATE} from "../constants";


export default (state = {from: null, to: null}, action) => {
	const {type, payload} = action;
	switch (type) {
		case ADD_START_DATE:
			return {
				...state,
				from: payload.date
			};
		case ADD_END_DATE:
			return {
				...state,
				to: payload.date
			};
		case CLEAR_DATE:
			return {
				...state,
				from: null,
				to: null
			};
		default:
			return state;
	}
}