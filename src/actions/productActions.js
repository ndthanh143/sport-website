import axios from 'axios';

import {
    ALL_PRODUCTS_REQUEST,
    ALL_PRODUCTS_SUCCESS,
    ALL_PRODUCTS_FAIL,
    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCESS,
    PRODUCT_DETAILS_FAIL,
    PRODUCT_SEARCH_REQUEST,
    PRODUCT_SEARCH_SUCCESS,
    PRODUCT_SEARCH_FAIL,
    CLEAR_ERRORS,
} from '~/constants/productConstants';

export const getAllProducts =
    (currentPage = 1, category) =>
    async (dispatch) => {
        try {
            dispatch({
                type: ALL_PRODUCTS_REQUEST,
            });

            let link = `http://localhost:4000/api/v1/products?page=${currentPage}`;
            if (category) {
                link = `http://localhost:4000/api/v1/products?page=${currentPage}&category=${category}`;
            }
            const { data } = await axios.get(link);
            console.log(data);
            dispatch({
                type: ALL_PRODUCTS_SUCCESS,
                payload: data,
            });
        } catch (error) {
            dispatch({
                type: ALL_PRODUCTS_FAIL,
                payload: error.response.data.message,
            });
        }
    };
export const getProductSearch =
    (keyword = '') =>
    async (dispatch) => {
        try {
            dispatch({
                type: PRODUCT_SEARCH_REQUEST,
            });

            const { data } = await axios.get(`http://localhost:4000/api/v1/productSearch?keyword=${keyword}`);
            dispatch({
                type: PRODUCT_SEARCH_SUCCESS,
                payload: data,
            });
        } catch (error) {
            dispatch({
                type: PRODUCT_SEARCH_FAIL,
                payload: error.response.data.message,
            });
        }
    };

export const getProductDetails = (id) => async (dispatch) => {
    try {
        dispatch({
            type: PRODUCT_DETAILS_REQUEST,
        });

        const { data } = await axios.get(`http://localhost:4000/api/v1/product/${id}`);
        dispatch({
            type: PRODUCT_DETAILS_SUCCESS,
            payload: data.product,
        });
    } catch (error) {
        dispatch({
            type: PRODUCT_DETAILS_FAIL,
            // payload: error.response.data.message,
            payload: error.message,
        });
    }
};

// Clear errors
export const clearErrors = () => async (dispatch) => {
    dispatch({
        type: CLEAR_ERRORS,
    });
};
