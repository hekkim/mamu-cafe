import { observable, action } from 'mobx';

import { ActionStatus } from 'types/ActionStatus';

import { RootStore } from './index';

class ApiStore {
  @observable status: ActionStatus = ActionStatus.Initial;

  @observable error?: string;

  rootStore: RootStore;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
  }

  @action.bound
  onRequest(): void {
    this.status = ActionStatus.Request;
  }

  @action.bound
  onSuccess(): void {
    this.status = ActionStatus.Success;
  }

  @action.bound
  onFailure(error?: string): void {
    this.status = ActionStatus.Failure;
    this.error = error;
  }
}

export default ApiStore;
