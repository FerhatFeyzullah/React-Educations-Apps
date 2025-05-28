import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const BASE_URL = "https://fakestoreapi.com"

const initialState = {
    products: [],
    selectedProduct: {},
    loading: false
}

export const GetAllProducts = createAsyncThunk("GetAllProducts", async () => {
    const response = await axios.get(`${BASE_URL}/products`);
    return response.data;
})

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        setSelectedProduct: (state, action) => {
            state.selectedProduct = action.payload;
        }
    },
    extraReducers: (builder) => {

        builder.addCase(GetAllProducts.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(GetAllProducts.fulfilled, (state, action) => {
            state.loading = false;
            state.products = action.payload;
        })
    }
})

export const { setSelectedProduct } = productSlice.actions

export default productSlice.reducer