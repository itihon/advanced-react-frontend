import React, { ReactNode, useEffect } from 'react';
import { useStore } from 'react-redux';
import { Reducer } from 'redux';
import type { StateSchema, StateSchemaKey, StoreWithManager } from 'app/providers/StoreProvider/config/StateSchema';

export type ReducerList = {
  [name in StateSchemaKey]?: Reducer;
}

interface DynamiModuleLoaderProps {
  children: ReactNode;
  reducers: ReducerList;
  removeAfterUnmount?: boolean;
}

const DynamicModuleLoader: React.FC<DynamiModuleLoaderProps> = ({ children, reducers, removeAfterUnmount = true }) => {
  const store: StoreWithManager = useStore<StateSchema>();

  useEffect(() => {
    Object.entries(reducers).forEach(([name, reducer]) => {
      store.manager?.add(name as keyof StateSchema, reducer);
    });

    return () => {
      if (!removeAfterUnmount) {
        return;
      }

      Object.entries(reducers).forEach(([name]) => {
        store.manager?.remove(name as keyof StateSchema);
      });
    };
    // eslint-disable-next-line
  }, []);

  return (
    <>
     { children } 
    </>
  );
};

export default DynamicModuleLoader;