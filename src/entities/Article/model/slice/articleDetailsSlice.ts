import { createSlice, PayloadAction } from "@reduxjs/toolkit";
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
    setArticleTitle: (state, action: PayloadAction<string>) => {
      if (state.data) {
        state.data.title = action.payload;
      }
    },
    setArticleContent: (state, action: PayloadAction<string>) => {
      if (state.data) {
        state.data.content = action.payload;
      }
    },
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
    });
    builder.addCase(fetchArticleById.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

// Action creators are generated for each case reducer function
export const { 
  setArticleTitle,
  setArticleContent,
} = articleDetailsSlice.actions;

export default articleDetailsSlice.reducer;
