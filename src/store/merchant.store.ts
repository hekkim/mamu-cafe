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
      this.merchant = yield getMerchant(1);
      this.onSuccess();
    } catch (error) {
      this.onFailure();
    }
  });
}

export default MerchantStore;
