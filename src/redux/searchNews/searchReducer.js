import {
    FETCH_SEARCH_NEWS_REQUEST,
    FETCH_SEARCH_NEWS_SUCCESS,
    FETCH_SEARCH_NEWS_FAILURE

} from './searchTypes';

const initialState = {
    loading: false,
    articles: [],
    totalResults: "",
    status: "",
    error: "",
};

const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_SEARCH_NEWS_REQUEST:
            return {
                ...state,
                loading: true
            };
        case FETCH_SEARCH_NEWS_SUCCESS:
            return {
                loading: false,
                articles: action.payload.articles,
                totalResults: action.payload.totalResults,
                status: action.payload.status,
                error: ""
            };
        case FETCH_SEARCH_NEWS_FAILURE:
            return {
                loading: false,
                articles: [],
                totalResults: "",
                status: "",
                error: action.payload
            };
        default:
            return state;
    }
};

export default searchReducer;
