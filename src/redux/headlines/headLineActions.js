import get from '../../config/request'
import {
    FETCH_TOP_HEADLINES_REQUEST,
    FETCH_TOP_HEADLINES_SUCCESS,
    FETCH_TOP_HEADLINES_FAILURE

} from './headLineTypes';
export const fetchHeadlines = (country) => {
    return dispatch => {
        dispatch(fetchHeadlinesRequest());
        get(`top-headlines?country=${country}`)
            .then(res => {
                if (res.status == "ok") {
                    dispatch(fetchHeadlinesSuccess(res));
                }

            }).catch(err => {
                dispatch(fetchHeadlinesFailure(err));
            });
    };
};


export const fetchHeadlinesRequest = () => {
    return {
        type: FETCH_TOP_HEADLINES_REQUEST
    };
};

export const fetchHeadlinesFailure = error => {
    return {
        type: FETCH_TOP_HEADLINES_FAILURE,
        payload: error
    };
};

export const fetchHeadlinesSuccess = data => {
    return {
        type: FETCH_TOP_HEADLINES_SUCCESS,
        payload: data
    };
};