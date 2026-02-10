import LoginSchema from "features/AuthByUserName/model/types/LoginSchema";
import { UserSchema } from "entities/User";
import { ProfileSchema } from "entities/Profile";
import { ArticleDetailsSchema, ArticleListSchema } from "entities/Article";
import { Action, Reducer, ReducersMapObject } from "redux";
import type { EnhancedStore, UnknownAction, Tuple, StoreEnhancer, ThunkDispatch } from "@reduxjs/toolkit";
import { AxiosInstance } from "node_modules/axios";
import { ArticleDetailsCommentsSchema, ArticleDetailsRecommendationsSchema } from "pages/ArticleDetailsPage";
import { AddCommentSchema } from "features/AddComment";
import { ArticlesPageSchema } from "pages/ArticlesPage";
import { PageSchema } from "widgets/Page";
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