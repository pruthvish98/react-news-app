import {
    FETCH_CAT_NEWS_REQUEST,
    FETCH_CAT_NEWS_SUCCESS,
    FETCH_CAT_NEWS_FAILURE

} from './categoryTypes';

const initialState = {
    loading: false,
    articles: [],
    totalResults: "",
    status: "",
    error: "",
};

const categoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_CAT_NEWS_REQUEST:
            return {
                ...state,
                loading: true
            };
        case FETCH_CAT_NEWS_SUCCESS:
            return {
                loading: false,
                articles: action.payload.articles,
                totalResults: action.payload.totalResults,
                status: action.payload.status,
                error: ""
            };
        case FETCH_CAT_NEWS_FAILURE:
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

export default categoryReducer;
