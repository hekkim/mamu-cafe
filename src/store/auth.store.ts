/* global gapi */
import { action, observable } from 'mobx';

import { ActionStatus } from 'types/ActionStatus';
import { initApiConfig } from 'apis/config';

import ApiStore from './api.store';

import { RootStore } from './index';

type OAuthError = {
  error: string;
  details: string;
};

type OAuth = {
  scriptStatus: ActionStatus;
  authInst?: gapi.auth2.GoogleAuth;
  error?: OAuthError;
};

class AuthStore extends ApiStore {
  @observable auth: gapi.auth2.GoogleUser | null = null;

  @observable oAuth: OAuth = {
    scriptStatus: ActionStatus.Initial,
  };

  constructor(rootStore: RootStore) {
    super();
    this.rootStore = rootStore;
  }

  @action.bound
  loadOAuth() {
    if (this.oAuth.scriptStatus !== ActionStatus.Initial) {
      return;
    }

    const script = document.createElement('script');
    script.async = true;
    script.defer = true;
    script.src = 'https://apis.google.com/js/api.js';
    script.onload = () => {
      this.oAuth.scriptStatus = ActionStatus.Success;

      gapi.load('client:auth2', () => {
        gapi.auth2
          .init({
            client_id: process.env.OAUTH_CLIENT_ID,
            ux_mode: 'popup',
          })
          .then(authInst => {
            this.oAuth.authInst = authInst;

            if (authInst.isSignedIn.get()) {
              this.initAuth(authInst.currentUser.get());
            }
          }, this.authError);
      });
    };
    script.onerror = () => {
      this.oAuth.scriptStatus = ActionStatus.Failure;
    };

    document.head.append(script);
  }

  @action.bound
  signIn() {
    // if (this.oAuth.authInst) {
    //   this.oAuth.authInst.signIn().then(this.initAuth, this.authError);
    // }

    // Temp
    this.initAuth();
  }

  @action.bound
  initAuth(auth: gapi.auth2.GoogleUser) {
    this.status = ActionStatus.Success;
    this.auth = 'temp'; // auth.getAuthResponse();
    // initApiConfig(auth.getAuthResponse().access_token);
  }

  @action.bound
  signOut() {
    this.auth = null;
    this.status = ActionStatus.Failure;
    initApiConfig(null);
  }

  @action.bound
  authError(error: OAuthError) {
    this.auth = null;
    this.oAuth.error = error;
  }
}

export default AuthStore;
