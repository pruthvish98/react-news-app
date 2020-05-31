import get from '../../config/request'
import {
    FETCH_SOURCE_REQUEST,
    FETCH_SOURCE_SUCCESS,
    FETCH_SOURCE_FAILURE,
} from './sourceTypes';
export const fetchSources = (country) => {
    return dispatch => {
        dispatch(sourceRequest());
        get(`sources?country=${country}`)
            .then(res => {
                if (res.status == "ok") {
                    dispatch(sourceSuccess(res));
                }
            }).catch(err => {
                dispatch(sourceFailure(err));
            });
    };
};


export const sourceRequest = () => {
    return {
        type: FETCH_SOURCE_REQUEST
    };
};

export const sourceFailure = error => {
    return {
        type: FETCH_SOURCE_FAILURE,
        payload: error
    };
};

export const sourceSuccess = data => {
    return {
        type: FETCH_SOURCE_SUCCESS,
        payload: data
    };
};