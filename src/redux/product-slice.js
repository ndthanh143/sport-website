import {createSlice} from '@reduxjs/toolkit';

const productSlice = createSlice({
    name:'product',
    initialState : {
        productList: [],
        productDetails: {},
        loading: false,
        error: '',
    },
    reducers: { 
        getAllProducts: (state, action) => {
            state.productList = action.payload;
        },
        getProductDetails: (state, action) => {
            state.productDetails = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
        }
    }
})

export const {getAllProducts, getProductDetails, setError} = productSlice..actions;
export default productSlice.reducers;