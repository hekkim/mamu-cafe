import { observable, action } from 'mobx';

import { ActionStatus } from 'types/ActionStatus';

import { RootStore } from './index';

class ApiStore {
  @observable status: ActionStatus = ActionStatus.Initial;

  @observable error?: string;

  rootStore?: RootStore;

  @action.bound
  onRequest(): void {
    this.status = ActionStatus.Request;
  }

  @action.bound
  onSuccess(): void {
    this.status = ActionStatus.Success;
  }

  @action.bound
  onFailure(): void {
    this.status = ActionStatus.Failure;
  }
}

export default ApiStore;