import axios from 'axios';

import { Merchant } from 'types/Merchant';
import { Pagination } from 'types/Pagination';
import { Order } from 'types/Order';

type GetOrderParams = {
  merchant_id: Merchant['id'];
};

type GetOrderResponse = {
  pagination: Pagination;
  results: Order[];
};

export const getOrderList = (params: GetOrderParams) =>
  axios
    .get<GetOrderResponse>('/api/v1/orders/admin/order_list/', { params })
    .then(response => response.data);
