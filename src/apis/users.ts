import axios from 'axios';

export type PostUserLoginParams = {
  id_token: string;
};

export const postUserLogin = (params: PostUserLoginParams) =>
  // axios
  //   .post('/api/v1/users/login/google/', params)
  //   .then(response => response.data);
  new Promise(resolve => {
    setTimeout(() => {
      resolve({
        user_info: {
          password: '',
          last_login: null,
          is_superuser: true,
          username: 'hekkim',
          first_name: '희천',
          last_name: '김',
          email: 'heecheon@mymusictaste.com',
          is_staff: true,
          is_active: true,
          date_joined: '2020-01-01 17:00:00',
          id: 1,
          points: 50000,
          groups: [],
          user_permissions: [],
        },
        refresh: 'refresh_token',
        access: 'access_token',
      });
    }, 1000);
  });
