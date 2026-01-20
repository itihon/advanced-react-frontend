import { Article, ArticlePreviewStyle } from "entities/Article";
import { EntityId, EntityState } from "@reduxjs/toolkit";

export default interface ArticlesPageSchema extends EntityState<Article, EntityId> {
  isLoading?: boolean;
  error?: string;
  previewStyle?: ArticlePreviewStyle;
  limit?: number;
  currentPage?: number;
  hasMore?: boolean;
}