/* global gapi */
import { action, observable, flow } from 'mobx';

import { initApiConfig } from 'apis/config';
import { postUserLogin, PostUserLoginParams } from 'apis/users';
import { ActionStatus } from 'types/ActionStatus';
import { AuthUser } from 'types/User';

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
  @observable authUser: AuthUser | null = null;

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
    if (this.oAuth.authInst) {
      this.oAuth.authInst.signIn().then(this.initAuth, this.authError);
    }
  }

  @action.bound
  initAuth(auth: gapi.auth2.GoogleUser) {
    const { id_token } = auth.getAuthResponse();
    this.getUserInfo({ id_token });
  }

  @action.bound
  getUserInfo = flow(function*(this: AuthStore, params: PostUserLoginParams) {
    this.status = ActionStatus.Request;
    try {
      this.authUser = yield postUserLogin(params);
      this.status = ActionStatus.Success;
      initApiConfig(params.id_token);
    } catch (error) {
      this.authError();
    }
  });

  @action.bound
  signOut() {
    this.authUser = null;
    this.status = ActionStatus.Initial;
    initApiConfig(null);
  }

  @action.bound
  authError(error?: OAuthError) {
    this.authUser = null;
    this.status = ActionStatus.Failure;

    if (error) {
      this.oAuth.error = error;
    }
  }
}

export default AuthStore;
