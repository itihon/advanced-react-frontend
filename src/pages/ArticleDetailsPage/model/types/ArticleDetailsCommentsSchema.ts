import Comment from "entities/Comment/model/types/comment";
import { EntityId, EntityState } from "@reduxjs/toolkit";

export default interface ArticleDetailsCommentsSchema extends EntityState<Comment, EntityId> {
  isLoading?: boolean;
  error?: string;
}