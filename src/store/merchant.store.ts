import { action, flow, observable } from 'mobx';

import { getMerchant } from 'apis/merchant';
import { Merchant } from 'types/Merchant';
import { ActionStatus } from 'types/ActionStatus';

import ApiStore from './api.store';

class MerchantStore extends ApiStore {
  @observable merchant: Merchant | null = null;

  @action.bound
  getMerchant = flow(function*(this: MerchantStore) {
    if (this.status === ActionStatus.Request) {
      return;
    }

    try {
      this.onRequest();
      const data = yield getMerchant();
      console.log(data);
      this.onSuccess();
    } catch (error) {
      console.log(error);
      this.onFailure();
    }
  });
}

export default MerchantStore;
