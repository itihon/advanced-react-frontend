import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Article from "../types/article";
import ArticleDetailsSchema from "../types/articleDetailsSchema";
import fetchArticleById from "../services/fetchArticleById/fetchArticleById";

const initialState: ArticleDetailsSchema = {
  isLoading: false,
  data: undefined,
};

const articleDetailsSlice = createSlice({
  name: "articleDetails",
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(fetchArticleById.pending, (state) => {
      state.error = undefined;
      state.isLoading = true;
    });
    builder.addCase(fetchArticleById.fulfilled, (state, action) => {
      state.error = undefined;
      state.isLoading = false;
      state.data = action.payload;

      console.log('fetchArticleById fulfilled:', action.payload);
    });
    builder.addCase(fetchArticleById.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;

      console.log('fetchArticleById rejected:', action.payload);
    });
  },
});

// Action creators are generated for each case reducer function
export const { 
} = articleDetailsSlice.actions;

export default articleDetailsSlice.reducer;
