import { configureStore, Reducer, ReducersMapObject } from '@reduxjs/toolkit'
import { StateSchema, StoreWithManager } from './StateSchema';
import { userReducer } from 'entities/User';
import { pageReducer } from 'widgets/Page';
import createReducerManager from './reducerManager';
import api from 'shared/api/api';

export default function createReduxStore(initialState?: StateSchema) {
  const rootReducers: ReducersMapObject<StateSchema> = {
    user: userReducer,
    page: pageReducer,
  };

  const manager = createReducerManager(rootReducers);

  const store: StoreWithManager = configureStore<StateSchema>({
    reducer: manager.reduce as Reducer,
    devTools: __IS_DEV__,
    preloadedState: initialState,
    // @ts-expect-error damn redux
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
      thunk: { extraArgument: { api } },
      serializableCheck: {
        ignoredActions: ['Page/restoreScrollPosition'],
      },
    }),
  });

  store.manager = manager;

  return store;
}

type Store = ReturnType<typeof createReduxStore>;

export type RootState = ReturnType<Store['getState']>;
export type AppDispatch = Store['dispatch'];