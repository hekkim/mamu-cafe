import axios from 'axios';

const API_ROUTE = '/api';

const api = axios.create({
  baseURL: API_ROUTE,
});

export const initApiConfig = (token: string | null) => {
  if (token) {
    api.defaults.headers.common.Authorization = `Bearer ${token}`;
    return;
  }

  api.defaults.headers.common.Authorization = null;
};

export default api;
