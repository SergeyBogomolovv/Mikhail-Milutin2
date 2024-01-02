import { createSlice } from "@reduxjs/toolkit";

interface featuredState {
  featured: string[];
}

const initialState: featuredState = {
  featured: [],
};

export const featuredSlice = createSlice({
  name: "featured",
  initialState,
  reducers: {
    addToFeatured: (state, action) => {
      state.featured = [...state.featured, action.payload];
    },
    deleteFromFeatured: (state, action) => {
      state.featured = state.featured.filter(
        (featuredItem) => featuredItem !== action.payload
      );
    },
  },
});

export const { addToFeatured, deleteFromFeatured } = featuredSlice.actions;

export default featuredSlice.reducer;
