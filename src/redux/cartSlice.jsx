import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: []
  },
  reducers: {
    pushToCart: (state, actions) => {
      state.products.push(actions.payload)
    },
    removeFromCart: (state, actions) => {
        state.products = state.products.filter(obj=>obj.id !== actions.payload)
      },
  },
});
export const { pushToCart,removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
