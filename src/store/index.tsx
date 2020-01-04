import _ from 'lodash';
import React, { createContext, FC, useContext } from 'react';
import { useLocalStore } from 'mobx-react';

import AuthStore from './auth.store';

export type RootStore = {
  auth: AuthStore;
};

type StoreKeys = keyof RootStore;

const storeContext = createContext<RootStore | null>(null);

const initRootStore = (): RootStore => {
  const rootStore: RootStore = {} as RootStore;

  rootStore.auth = new AuthStore(rootStore);

  return rootStore;
};

export const StoreProvider: FC = ({ children }) => {
  const store = useLocalStore(initRootStore);

  return (
    <storeContext.Provider value={store}>{children}</storeContext.Provider>
  );
};

export function useStore(): RootStore;
export function useStore<K extends StoreKeys>(storeName: K): RootStore[K];
export function useStore<K extends StoreKeys>(
  storeName: K[]
): Pick<RootStore, K>;
export function useStore<K extends StoreKeys>(
  storeName?: K | K[]
): RootStore | RootStore[K] | Pick<RootStore, K> {
  const store = useContext(storeContext);
  if (!store) {
    throw new Error('useStore must be used within a StoreProvider!');
  }

  if (!storeName) {
    return store;
  }

  if (Array.isArray(storeName)) {
    return _.filter(store, (__, key) => storeName.includes(key as K));
  }

  return store[storeName];
}
