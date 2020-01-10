import { Currency } from './Currency';

export type Menu = {
  id: number;
  name: string;
  image: null;
  price: string;
  currency: Currency;
  quantity: number;
  merchant_id: number;
  closed: boolean;
  created_at: string;
};
