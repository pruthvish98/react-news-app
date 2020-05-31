import {
    FETCH_SOURCE_REQUEST,
    FETCH_SOURCE_SUCCESS,
    FETCH_SOURCE_FAILURE

} from './sourceTypes';

const initialState = {
    loading: false,
    sources: [],
    status: "",
    error: "",
};

const sourceReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_SOURCE_REQUEST:
            return {
                ...state,
                loading: true
            };
        case FETCH_SOURCE_SUCCESS:
            return {
                loading: false,
                sources: action.payload.sources,
                status: action.payload.status,
                error: ""
            };
        case FETCH_SOURCE_FAILURE:
            return {
                loading: false,
                sources: [],
                status: "",
                error: action.payload
            };
        default:
            return state;
    }
};

export default sourceReducer;
