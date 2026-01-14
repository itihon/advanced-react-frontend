import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import AddCommentSchema from "../types/addComment";
import addComment from "../services/addComment/addComment";

const initialState: AddCommentSchema = {
  text: '',
};

const addCommentSlice = createSlice({
  name: "addComment",
  initialState,
  reducers: {
    setText: (state, action: PayloadAction<string | undefined>) => {
      state.text = action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(addComment.pending, (state) => {
      state.error = undefined;
      // state.isLoading = true;
    });
    builder.addCase(addComment.fulfilled, (state, action) => {
      state.error = undefined;
      // state.isLoading = false;
      // state.text = action.payload.text;
    });
    builder.addCase(addComment.rejected, (state, action) => {
      // state.isLoading = false;
      state.error = action.payload;
    });
  },
});

// Action creators are generated for each case reducer function
export const { 
  setText
} = addCommentSlice.actions;

export default addCommentSlice.reducer;
