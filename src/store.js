import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { productsReducer, productDetailsReducer, productSearchReducer } from './reducers/productReducers';
import { authReducer } from './reducers/userReducers';
import { cartReducer } from './reducers/cartReducers';

const reducers = combineReducers({
    products: productsReducer,
    productDetails: productDetailsReducer,
    productSearch: productSearchReducer,
    auth: authReducer,
    cart: cartReducer,
});

let initialState = {
    cart: {
        cartItems: localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [],
    },
};

const middleware = [thunk];
const store = createStore(reducers, initialState, composeWithDevTools(applyMiddleware(...middleware)));

export default store;
