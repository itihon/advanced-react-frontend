import { Article } from "entities/Article";
import { EntityId, EntityState } from "@reduxjs/toolkit";

export default interface ArticlesDetailsRecommendationsSchema extends EntityState<Article, EntityId> {
  isLoading?: boolean;
  error?: string;
  limit: number;
}