import {
    SET_CATEGORY,
    SET_COUNTRY,
    SET_CATEGORIES,
    SET_SEARCH,
    SET_DATE

} from './globleTypes';

export const setCategory = data => {
    return {
        type: SET_CATEGORY,
        payload: data
    };
};

export const setCountry = data => {
    return {
        type: SET_COUNTRY,
        payload: data
    };
};

export const setCategories = data => {
    return {
        type: SET_CATEGORIES,
        payload: data
    };
};

export const setSearch = data => {
    return {
        type: SET_SEARCH,
        payload: data
    };
};

export const setDate = data => {
    return {
        type: SET_DATE,
        payload: data
    };
};
