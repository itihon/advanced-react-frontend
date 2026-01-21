import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import PageSchema, { ScrollPosition, ScrollRestoreRecord } from "../types/PageSchema";

const initialState: PageSchema = {
  scrollPosition: { ['/']: 0 },
};

const pageSlice = createSlice({
  name: "Page",
  initialState,
  reducers: {
    saveScrollPosition: (state, action: PayloadAction<ScrollPosition>) => {
      state.scrollPosition[action.payload.path] = action.payload.scrollPosition;
    },
    restoreScrollPosition: (state, action: PayloadAction<ScrollRestoreRecord>) => {
      const scrollable = action.payload.scrollableRef.current;
      const pathname = action.payload.pathname;

      if (scrollable) {
        scrollable.scrollTop = state.scrollPosition[pathname];
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { saveScrollPosition, restoreScrollPosition } = pageSlice.actions;

export default pageSlice.reducer;