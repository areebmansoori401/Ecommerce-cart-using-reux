import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cartItem: []
    },
    reducers: {
        addCartItem: (state, action) => {
            state.cartItem.push(action.payload.item);
        }
    }
});

export const { addCartItem } = cartSlice.actions;
export default cartSlice.reducer;
