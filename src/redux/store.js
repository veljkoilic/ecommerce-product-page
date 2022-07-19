import { configureStore } from "@reduxjs/toolkit";
import galleryReducer from "../redux/gallerySlice";
import cartReducer from "../redux/cartSlice";
export default configureStore({
  reducer: {
    gallery: galleryReducer,
    cart: cartReducer
  },
});
