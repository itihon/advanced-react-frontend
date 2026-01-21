export type ScrollRecord = Record<string, number>; 

export interface ScrollPosition {
  path: string;
  scrollPosition: number;
}

export interface ScrollRestoreRecord {
  pathname: string;
  scrollableRef: React.RefObject<HTMLElement | null>;
}

export default interface PageSchema {
  scrollPosition: ScrollRecord;
}