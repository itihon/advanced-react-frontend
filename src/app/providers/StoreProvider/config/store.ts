import { configureStore, ReducersMapObject } from '@reduxjs/toolkit'
import { StateSchema, StoreWithManager } from './StateSchema';
import { userReducer } from 'entities/User';
import { loginReducer } from 'features/AuthByUserName';
import createReducerManager from './reducerManager';

export default function createReduxStore(initialState?: StateSchema) {
  const rootReducers: ReducersMapObject<StateSchema> = {
    user: userReducer,
  };

  const manager = createReducerManager(rootReducers);

  const store: StoreWithManager = configureStore<StateSchema>({
    reducer: manager.reduce,
    devTools: __IS_DEV__,
    preloadedState: initialState,
  });

  store.manager = manager;

  return store;
}

type Store = ReturnType<typeof createReduxStore>;

export type RootState = ReturnType<Store['getState']>;
export type AppDispatch = Store['dispatch'];