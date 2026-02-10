import { GridStateSnapshot, StateSnapshot } from "react-virtuoso";
export type ScrollRecord = Record<string, number>; 

export default interface PageSchema {
  listState?: StateSnapshot;
  gridState?: GridStateSnapshot;
}