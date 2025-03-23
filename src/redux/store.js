import { configureStore } from '@reduxjs/toolkit';
import cartReducer from "./cartSlice"
import orderMakerReducer from './orderMakerSlice';



export const store = configureStore({
  reducer: {
    cart: cartReducer,
    orderMaker: orderMakerReducer,
  }
});




export default store;