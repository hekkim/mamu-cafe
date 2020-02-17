import _ from 'lodash';
import React, { createContext, FC, useContext } from 'react';
import { useLocalStore } from 'mobx-react';

import AuthStore from './auth.store';
import OrderStore from './order.store';
import MenuStore from './menu.store';
import MerchantStore from './merchant.store';

export type RootStore = {
  auth: AuthStore;
  merchant: MerchantStore;
  menu: MenuStore;
  order: OrderStore;
};

type StoreKeys = keyof RootStore;

const storeContext = createContext<RootStore | null>(null);

const initRootStore = (): RootStore => {
  const rootStore: RootStore = {} as RootStore;

  rootStore.auth = new AuthStore(rootStore);
  rootStore.merchant = new MerchantStore(rootStore);
  rootStore.menu = new MenuStore(rootStore);
  rootStore.order = new OrderStore(rootStore);

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
    const result = _.reduce(
      store,
      (acc, subStore, key) =>
        storeName.includes(key as K) ? { ...acc, [key]: subStore } : acc,
      {} as Pick<RootStore, K>
    );

    return result;
  }

  return store[storeName];
}
