import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../reducer/cartslice"; 

export const store = configureStore({
   reducer: {
         cart: cartReducer
   }
});
