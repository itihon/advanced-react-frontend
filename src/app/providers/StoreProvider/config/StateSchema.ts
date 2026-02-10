import { Action, Reducer, ReducersMapObject } from "redux";
import type { EnhancedStore, UnknownAction, Tuple, StoreEnhancer, ThunkDispatch } from "@reduxjs/toolkit";
import { AxiosInstance } from "axios";
import type LoginSchema from "features/AuthByUserName/model/types/LoginSchema";
import type { UserSchema } from "entities/User";
import type { ProfileSchema } from "entities/Profile";
import type { ArticleDetailsSchema, ArticleListSchema } from "entities/Article";
import type { AddCommentSchema } from "features/AddComment";
import type { ArticlesPageSchema } from "pages/ArticlesPage";
import type { PageSchema } from "widgets/Page";
import type { ArticleDetailsCommentsSchema, ArticleDetailsRecommendationsSchema } from "pages/ArticleDetailsPage";
import { rtkApi } from "shared/api/rtkApi";

export interface StateSchema {
  user: UserSchema;
  page: PageSchema;
  [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>;

  // async reducers
  loginForm?: LoginSchema;
  profile?: ProfileSchema;
  articleDetails?: ArticleDetailsSchema;
  articleComments?: ArticleDetailsCommentsSchema;
  addComment?: AddCommentSchema;
  articlesPage?: ArticlesPageSchema;
  articleRecommendations?: ArticleDetailsRecommendationsSchema;
  articleList?: ArticleListSchema;
}

export type StateSchemaKey = keyof StateSchema;

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject;
  reduce: (state: StateSchema, action: Action) => StateSchema;
  add: (key: StateSchemaKey, reducer: Reducer) => void;
  remove: (key: StateSchemaKey) => void;
}

export interface StoreWithManager extends EnhancedStore<StateSchema, UnknownAction, Tuple<[StoreEnhancer<{ dispatch: ThunkDispatch<StateSchema, undefined, UnknownAction>; }>, StoreEnhancer]>> {
  manager?: ReducerManager;
}

export interface ThunkExtraArg {
  api: AxiosInstance,
}