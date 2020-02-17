import axios from 'axios';

import { user } from 'constants/mocks';

export type PostUserLoginParams = {
  id_token: string;
};

export const postUserLogin = (params: PostUserLoginParams) =>
  // axios
  //   .post('/api/v1/users/login/google/', params)
  //   .then(response => response.data);
  new Promise(resolve => {
    setTimeout(() => {
      resolve(user);
    }, 1000);
  });
