import React from 'react';
import { Provider } from 'react-redux';
import type { StateSchema } from '../config/StateSchema';
import createReduxStore from 'app/providers/StoreProvider/config/store';

interface Props {
  children?: React.ReactNode; 
  initialState?: StateSchema
}

const StoreProvider: React.FC<Props> = ({ children, initialState }) => {
  const store = createReduxStore(initialState);

  return (
    <Provider store={store}>
      { children }
    </Provider>
  );
};

export default StoreProvider;