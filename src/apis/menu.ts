import axios from 'axios';

import { Merchant } from 'types/Merchant';
import { Menu } from 'types/Menu';

export const getMenuList = (merchantId: Merchant['id']) =>
  axios
    .get(`/api/v1/merchants/${merchantId}/menus/`)
    .then(response => response.data);

export type PostMenuParams = Pick<Menu, 'name' | 'price' | 'currency'>;

export const postMenu = (merchantId: Merchant['id'], params: PostMenuParams) =>
  axios
    .post(`/api/v1/merchants/${merchantId}/menus/`, params)
    .then(response => response.data);

export const getMenu = (merchantId: Merchant['id'], menuId: Menu['id']) =>
  axios
    .get(`/api/v1/merchants/${merchantId}/menus/${menuId}/`)
    .then(response => response.data);

export type PatchMenuParams = PostMenuParams;

export const patchMenu = (
  merchantId: Merchant['id'],
  menuId: Menu['id'],
  params: PatchMenuParams
) =>
  axios
    .patch(`/api/v1/merchants/${merchantId}/menus/${menuId}/`, params)
    .then(response => response.data);
