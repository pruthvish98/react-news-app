import {
    FETCH_TOP_HEADLINES_REQUEST,
    FETCH_TOP_HEADLINES_SUCCESS,
    FETCH_TOP_HEADLINES_FAILURE

} from './headLineTypes';

const initialState = {
    loading: false,
    articles: [],
    totalResults: "",
    status: "",
    error: "",
};

const headLinesReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_TOP_HEADLINES_REQUEST:
            return {
                ...state,
                loading: true
            };
        case FETCH_TOP_HEADLINES_SUCCESS:
            return {
                loading: false,
                articles: action.payload.articles,
                totalResults: action.payload.totalResults,
                status: action.payload.status,
                error: ""
            };
        case FETCH_TOP_HEADLINES_FAILURE:
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

export default headLinesReducer;
