import get from '../../config/request'
import {
    FETCH_CAT_NEWS_REQUEST,
    FETCH_CAT_NEWS_SUCCESS,
    FETCH_CAT_NEWS_FAILURE,

} from './categoryTypes';
export const categoryNews = (country, cat) => {
    return dispatch => {
        dispatch(categoryNewsRequest());
        get(`top-headlines?country=${country}&category=${cat}`)
            .then(res => {
                if (res.status == "ok") {
                    dispatch(categoryNewsSuccess(res));
                }

            }).catch(err => {
                dispatch(categoryNewsFailure(err));
            });

    };
};


export const categoryNewsRequest = () => {
    return {
        type: FETCH_CAT_NEWS_REQUEST
    };
};

export const categoryNewsFailure = error => {
    return {
        type: FETCH_CAT_NEWS_FAILURE,
        payload: error
    };
};

export const categoryNewsSuccess = data => {
    return {
        type: FETCH_CAT_NEWS_SUCCESS,
        payload: data
    };
};