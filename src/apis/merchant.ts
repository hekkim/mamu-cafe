import axios from 'axios';

import { Merchant } from 'types/Merchant';

export const getMerchant = (merchantId: Merchant['id']) =>
  // axios
  //   .get<Merchant>(`/api/v1/merchants/${merchantId}/`)
  //   .then(response => response.data);
  new Promise(resolve => {
    setTimeout(
      resolve({
        id: 1,
        name: 'mamu',
        email: 'dowon@mymusictaste.com',
        phone: '010-1234-1234',
        forced_closing: true,
        business_days: [],
        open_time: '00:00:00',
        close_time: '00:00:00',
        country_iso: 'KR',
        city: '서울',
        detail_address: 'KP Tower',
        created_at: '2019-12-31T17:26:54.094461+09:00',
      }),
      1000
    );
  });

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
