import { StateSchema } from "app/providers/StoreProvider/config/StateSchema";
import { createSelector } from "@reduxjs/toolkit";

const getScrollPosition = createSelector(
  (state: StateSchema) => state.page.scrollPosition, 
  (state: StateSchema, path: string) => path,
  (scroll, path) => scroll[path],
);

export default getScrollPosition;