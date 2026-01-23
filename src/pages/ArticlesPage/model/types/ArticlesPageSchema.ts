import { Article, ArticlePreviewStyle, ArticleType } from "entities/Article";
import { EntityId, EntityState } from "@reduxjs/toolkit";

export enum ArticleSortType {
  CREATED_AT_ASC = 'createdAtAsc',
  CREATED_AT_DESC = 'createdAtDesc',
  VIEWS_ASC = 'viewsAsc',
  VIEWS_DESC = 'viewsDesc',
}

export default interface ArticlesPageSchema extends EntityState<Article, EntityId> {
  isLoading?: boolean;
  error?: string;
  previewStyle?: ArticlePreviewStyle;

  // pagination
  limit: number;
  currentPage?: number;
  hasMore?: boolean;

  // filtering and sorting
  filter?: ArticleType | '';
  sort?: ArticleSortType;
  search?: string;
}