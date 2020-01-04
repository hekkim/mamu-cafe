import { action, flow, observable } from 'mobx';

import ApiStore from './api.store';

import { RootStore } from './index';

class AuthStore extends ApiStore {
  @observable auth: string | null = null;

  constructor(rootStore: RootStore) {
    super();
    this.rootStore = rootStore;
  }

  @action.bound
  signIn = flow(function*(this: AuthStore) {
    this.auth = 'something';
  });

  @action.bound
  signOut(): void {
    this.auth = null;
  }
}

export default AuthStore;
