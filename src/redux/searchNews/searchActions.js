import get from '../../config/request'
import {
    FETCH_SEARCH_NEWS_REQUEST,
    FETCH_SEARCH_NEWS_SUCCESS,
    FETCH_SEARCH_NEWS_FAILURE,

} from './searchTypes';
import moment from 'moment';
export const searchNews = (keyword, date = moment().format('YYYY-MM-DD'), sort = 'popularity') => {
    return dispatch => {
        if (keyword !== "") {
            dispatch(searchNewsRequest());
            get(`everything?q=${keyword}&sortBy=${sort}&from=${date}`)
                .then(res => {
                    if (res.status == "ok") {
                        dispatch(searchNewsSuccess(res));
                    }
                }).catch(err => {
                    dispatch(searchNewsFailure(err));
                });
        } else {
            dispatch(searchNewsFailure("err"));
        }

    };
};


export const searchNewsRequest = () => {
    return {
        type: FETCH_SEARCH_NEWS_REQUEST
    };
};

export const searchNewsFailure = error => {
    return {
        type: FETCH_SEARCH_NEWS_FAILURE,
        payload: error
    };
};

export const searchNewsSuccess = data => {
    return {
        type: FETCH_SEARCH_NEWS_SUCCESS,
        payload: data
    };
};