import { action, flow, observable } from 'mobx';

import { getOrderList } from 'apis/order';
import { Order } from 'types/order';
import { ActionStatus } from 'types/ActionStatus';

import ApiStore from './api.store';

class OrderStore extends ApiStore {
  @observable orderList: Order[] = [];

  @observable pollId: number | null = null;

  @action.bound
  pollOrderList = flow(function*(this: OrderStore) {
    const merchantId = this.rootStore.merchant.merchant?.id;
    try {
      this.onRequest();
      const { results } = yield getOrderList({ merchant_id: merchantId });
      this.orderList = results;
      this.onSuccess();
    } catch (error) {
      this.onFailure();
    }

    this.pollId = setTimeout(this.pollOrderList, 5000);
  });

  @action.bound
  cancelPollOrderList() {
    if (this.pollId) {
      clearTimeout(this.pollId);
      this.pollId = null;
    }
  }
}

export default OrderStore;
