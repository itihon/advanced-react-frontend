import LoginSchema from "features/AuthByUserName/model/types/LoginSchema";
import { UserSchema } from "entities/User";
import { Action, Reducer, ReducersMapObject } from "redux";
import type { EnhancedStore, UnknownAction, Tuple, StoreEnhancer, ThunkDispatch } from "@reduxjs/toolkit";

export interface StateSchema {
  user: UserSchema;

  // async reducers
  loginForm?: LoginSchema;
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
