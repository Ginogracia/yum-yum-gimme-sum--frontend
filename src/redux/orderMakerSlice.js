import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import MakeKey from "../components/MakeKey.jsx";


export const sendCartToApi = createAsyncThunk(
    'orderMaker/sendCartToApi',
    async (_, { getState }) => {
      const apiKey = await MakeKey();
  
      const { cartItems } = getState().cart;
  
      const itemTypes = [...new Set(cartItems.map(item => item.itemType))]; 
  
      const requestBody = { items: itemTypes };
  

      const response = await fetch(`https://fdnzawlcf6.execute-api.eu-north-1.amazonaws.com/cep6/orders`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-zocom': apiKey.key 
        },
        body: JSON.stringify(requestBody)
      });
  
      const responseData = await response.json();
  
      return responseData;
    }
  );

const orderMakerSlice = createSlice({
  name: 'orderMaker',
  initialState: {
    loading: false,
    response: null,
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(sendCartToApi.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(sendCartToApi.fulfilled, (state, action) => {
        state.loading = false;
        state.response = action.payload;
      })
      .addCase(sendCartToApi.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  }
});

export default orderMakerSlice.reducer;
