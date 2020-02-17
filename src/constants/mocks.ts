export const user = {
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
};

export const menues = [
  {
    id: 1,
    name: '아이스아메리카노',
    image: null,
    price: '1000.00',
    currency: 'KRW',
    quantity: 0,
    merchant_id: 1,
    closed: true,
    created_at: '2019-12-31T17:28:06.721905+09:00',
  },
];

export const merchant = {
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
};
