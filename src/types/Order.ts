import { Menu } from './Menu';

export type OrderItem = {
  menu_id: Menu;
  quantity: number;
  menu_price: string;
  total_price: string;
};

export type Order = {
  id: number;
  status: 'PENDING' | 'COMPLETED' | 'CANCELED' | 'FAILED' | 'REFUNDED';
  created_at: string;
  last_updated_time: string;
  merchant_id: number;
  merchant_name: string;
  order_items: OrderItem[];
};
