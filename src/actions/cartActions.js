import axios from 'axios';
import { ADD_TO_CART, REMOVE_ITEM_CART } from '~/constants/cartConstants';

export const addItemToCart = (id, quantity) => async (dispatch, getState) => {
    const { data } = await axios.get(`http://localhost:4000/api/v1/product/${id}`);

    try {
        dispatch({
            type: ADD_TO_CART,
            payload: {
                product: data.product._id,
                name: data.product.name,
                price: data.product.price,
                image: data.product.images[0].url,
                amount: data.product.amount,
                quantity,
            },
        });

        localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
    } catch (error) {
        alert(error);
    }
};
export const removeItemFromCart = (id) => async (dispatch, getState) => {
    const { data } = await axios.get(`http://localhost:4000/api/v1/product/${id}`);

    try {
        dispatch({
            type: REMOVE_ITEM_CART,
            payload: id,
        });

        localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
    } catch (error) {
        alert(error);
    }
};
