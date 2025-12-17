import React, { ReactNode, useEffect } from 'react';
import { useStore } from 'react-redux';
import { Reducer } from 'redux';
import type { StateSchema, StateSchemaKey, StoreWithManager } from 'app/providers/StoreProvider/config/StateSchema';

export type ReducerList = {
  [name in StateSchemaKey]?: Reducer;
}

type ReducerListEntry = [StateSchemaKey, Reducer];

interface DynamiModuleLoaderProps {
  children: ReactNode;
  reducers: ReducerList;
}

const DynamiModuleLoader: React.FC<DynamiModuleLoaderProps> = ({ children, reducers }) => {
  const store: StoreWithManager = useStore<StateSchema>();

  useEffect(() => {
    Object.entries(reducers).forEach(([name, reducer]: ReducerListEntry) => {
      store.manager.add(name, reducer);
    });

    return () => {
      Object.entries(reducers).forEach(([name]: ReducerListEntry) => {
        store.manager.remove(name);
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

export default DynamiModuleLoader;