import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { 
    cartItems: [

    ]
  },
  reducers: {
    addToCart: (state, action) => {
        const newId = Math.max(...state.cartItems.map(item => item.id), 0) + 1;
        const newItem = { ...action.payload, id: newId };
        state.cartItems = [...state.cartItems, newItem];
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(item => item.id !== action.payload);
    },
    clearCart: (state) => {
    state.cartItems = [];
    },
  
}
});


export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;