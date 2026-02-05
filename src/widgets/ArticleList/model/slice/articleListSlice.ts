import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import ArticleListSchema from "../types/ArticleListSchema";
import { GridStateSnapshot, StateSnapshot } from "react-virtuoso";

const initialState: ArticleListSchema = {
  // listState: { 
  //   ranges: [], 
  //   scrollTop: 0,
  // },
  // gridState: { 
  //   gap: { column: 0, row: 0 }, 
  //   item: { height: 0, width: 0 }, 
  //   scrollTop: 0, 
  //   viewport: { height: 0, width: 0}
  // },
};

const articleListSlice = createSlice({
  name: "ArticleList",
  initialState,
  reducers: {
    setListState: (state, action: PayloadAction<StateSnapshot>) => {
      state.listState = action.payload;
    },
    setGridState: (state, action: PayloadAction<GridStateSnapshot>) => {
      state.gridState = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setListState, setGridState } = articleListSlice.actions;

export default articleListSlice.reducer;