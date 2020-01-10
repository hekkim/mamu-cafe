import { action, flow, observable } from 'mobx';

import { getMenuList } from 'apis/menu';
import { Menu } from 'types/Menu';
import { ActionStatus } from 'types/ActionStatus';

import ApiStore from './api.store';

import { RootStore } from './index';

class MenuStore extends ApiStore {
  @observable menuList: Menu[] = [];

  constructor(rootStore: RootStore) {
    super();
    this.rootStore = rootStore;
  }

  @action.bound
  getMenuList = flow(function*(this: MenuStore) {
    if (this.status === ActionStatus.Request) {
      return;
    }

    try {
      this.onRequest();
      const { id: merchantId } = this.rootStore.merchant.self;
      this.menuList = yield getMenuList(merchantId);

      this.onSuccess();
    } catch (error) {
      this.onFailure();
    }
  });
}

export default MenuStore;
