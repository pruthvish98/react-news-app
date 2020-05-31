import {
    SET_CATEGORY,
    SET_COUNTRY,
    SET_CATEGORIES,
    SET_SEARCH,
    SET_DATE

} from './globleTypes';
import moment from 'moment'
const initialState = {
    country: "in",
    category: "",
    categories: [],
    search: "",
    date: moment().format('YYYY-MM-DD')
};

const globleReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CATEGORY:
            return {
                ...state,
                category: action.payload,
                search: "",
            };
        case SET_COUNTRY:
            return {
                ...state,
                country: action.payload
            };
        case SET_CATEGORIES:
            return {
                ...state,
                categories: action.payload
            };
        case SET_SEARCH:
            return {
                ...state,
                search: action.payload
            };
        case SET_DATE:
            return {
                ...state,
                date: action.payload
            };
        default:
            return state;
    }
};

export default globleReducer;
