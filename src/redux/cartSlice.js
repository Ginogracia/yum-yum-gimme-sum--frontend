import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { 
    cartItems: [

    ]
  },
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.cartItems.find(item => item.itemType === action.payload.itemType);
  
      if (existingItem) {
          existingItem.quantity += 1;
          existingItem.totalPrice = existingItem.quantity * existingItem.price;
      } else {
          const newItem = { 
              ...action.payload, 
              quantity: 1, 
              totalPrice: action.payload.price
          };
          state.cartItems.push(newItem);
      }
  },
  removeFromCart: (state, action) => {
    const itemIndex = state.cartItems.findIndex(item => item.itemType === action.payload);

    if (itemIndex !== -1) {
        if (state.cartItems[itemIndex].quantity > 1) {
            state.cartItems[itemIndex].quantity -= 1;
            state.cartItems[itemIndex].totalPrice = state.cartItems[itemIndex].quantity * state.cartItems[itemIndex].price;
        } else {
            state.cartItems.splice(itemIndex, 1);
        }
    }
},
    clearCart: (state) => {
    state.cartItems = [];
    },
  
}
});


export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;