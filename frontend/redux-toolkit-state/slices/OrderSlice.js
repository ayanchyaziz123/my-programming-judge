import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import OrderService from "../services/OrderService";
import Cookies from 'js-cookie';

const initialState = {
    success: null,
    error: null,
    loading: false,
    orders: [],
    order: null,
    updateSuccess: false,
};


export const createOrder = createAsyncThunk(
    "order/createOrder",
    async (order, { rejectWithValue }) => {
        try {
            const res = await OrderService.create_order(order);
            return res.data;
        } catch (err) {
            if (!err.response) {
                throw err
            }
            return rejectWithValue(err.response.data)
        }
    }
)


export const getOrderById = createAsyncThunk(
    "order/deleteOrder",
    async (id, { rejectWithValue }) => {
        try {
            const res = await OrderService.get_order_by_id(id);
            return res.data;
        } catch (err) {
            if (!err.response) {
                throw err
            }
            return rejectWithValue(err.response.data)
        }
    }
)

const ProductSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        clearStatus: (state, action) => {
            state.error = null,
                state.success = null,
                state.loading = null,
                state.updateSuccess = null
        }
    },
    extraReducers: {

        //start Create Order
        //##########################################################################

        [createOrder.pending]: (state, action) => {
            state.loading = true;
        },
        [createOrder.fulfilled]: (state, action) => {
            state.success = action.payload.message;
            state.orders.push(action.payload.order)
            state.error = null;
            state.loading = false;
        },
        [createOrder.rejected]: (state, action) => {
            state.error = action.payload && action.payload.detail ? action.payload.detail : 'Network Error';
            state.success = null;
            state.loading = false;
        },

        //end Create Product
        //##########################################################################



        //start fetch Products
        // //##########################################################################
        // [retrieveAllProducts.pending]: (state, action) => {
        //     state.loading = true;
        // },
        // [retrieveAllProducts.fulfilled]: (state, action) => {
        //     state.success = action.payload.message;
        //     state.products = action.payload.products;
        //     state.error = null;
        //     state.loading = false;
        // },
        // [retrieveAllProducts.rejected]: (state, action) => {
        //     state.error = action.payload && action.payload.detail ? action.payload.detail : 'Network Error';
        //     state.success = null;
        //     state.loading = false;
        // },

        //end fetch Products
        //##########################################################################

        //start delete Product
        //##########################################################################
        // [deleteProduct.pending]: (state, action) => {
        //     state.loading = true;
        // },
        // [deleteProduct.fulfilled]: (state, action) => {
        //     state.success = action.payload.message;
        //     state.products = action.payload.products;
        //     state.error = null;
        //     state.loading = false;
        // },
        // [deleteProduct.rejected]: (state, action) => {
        //     state.error = action.payload && action.payload.detail ? action.payload.detail : 'Network Error';
        //     state.success = null;
        //     state.loading = false;
        // },

        //end delete Product
        //##########################################################################




        //start get Product  by id
        //##########################################################################
        [getOrderById.pending]: (state, action) => {
            state.loading = true;
        },
        [getOrderById.fulfilled]: (state, action) => {
            state.success = action.payload.message;
            state.order = action.payload.order;
            state.error = null;
            state.loading = false;
        },
        [getOrderById.rejected]: (state, action) => {
            state.error = action.payload && action.payload.detail ? action.payload.detail : 'Network Error';
            state.success = null;
            state.loading = false;
        },

        //end get product by id
        //##########################################################################


        //start get Product  by id
        //##########################################################################
        // [updateProduct.pending]: (state, action) => {
        //     state.updateSuccess = false;
        //     state.loading = true;
        // },
        // [updateProduct.fulfilled]: (state, action) => {
        //     state.success = action.payload.message;
        //     state.product = action.payload.product;
        //     state.updateSuccess = true;
        //     state.error = null;
        //     state.loading = false;
        // },
        // [updateProduct.rejected]: (state, action) => {
        //     state.error = action.payload && action.payload.detail ? action.payload.detail : 'Network Error';
        //     state.success = null;
        //     state.updateSuccess = false;
        //     state.loading = false;
        // },

        //end get product by id
        //##########################################################################



    },
});


export const { clearStatus } = ProductSlice.actions;

const { reducer } = ProductSlice;
export default reducer;


