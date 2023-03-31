import { createSlice } from "@reduxjs/toolkit";
import Product from "../Components/Product/Product";

const initialState = {
    cart : [],
    items : Product,
    totalQuantity : 0,
    totalPrice : 0,
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        add(state, action){
            // return [...initialState.cart, action.payload]
        }
    }
})

// export const { add } = cartSlice.actions;

export default cartSlice.reducer