import axios from 'axios';

import { Merchant } from 'types/Merchant';

export const getMerchant = (merchantId: Merchant['id']) =>
  axios.get(`/api/v1/merchants/${merchantId}/`).then(response => response.data);

export type PatchMerchantParams = Partial<
  Pick<
    Merchant,
    | 'name'
    | 'email'
    | 'phone'
    | 'business_days'
    | 'open_time'
    | 'close_time'
    | 'city'
    | 'detail_address'
  > & {
    forced_closing: boolean;
  }
>;

export const patchMerchant = (
  merchantId: Merchant['id'],
  params: PatchMerchantParams
) =>
  axios
    .patch(`/api/v1/merchants/${merchantId}/`, params)
    .then(response => response.data);
