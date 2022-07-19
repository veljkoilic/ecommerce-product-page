import { createSlice } from "@reduxjs/toolkit";

const gallerySlice = createSlice({
  name: "gallery",
  initialState: {
    open: false,
  },
  reducers: {
    switchGalleryOpen: (state) => {
      state.open = !state.open;
    },
  },
});
export const { switchGalleryOpen } = gallerySlice.actions;
export default gallerySlice.reducer;
