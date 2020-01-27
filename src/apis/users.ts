import axios from 'axios';

export type PostUserLoginParams = {
  id_token: string;
};

export const postUserLogin = (params: PostUserLoginParams) =>
  axios
    .post('/api/v1/users/login/google/', params)
    .then(response => response.data);
