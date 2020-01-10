import { Country } from './Location';

export type BusinessDays =
  | 'SUN'
  | 'MON'
  | 'TUE'
  | 'WED'
  | 'THU'
  | 'FRI'
  | 'SAT';

export type Merchant = {
  id: number;
  name: string;
  email: string;
  phone: string;
  business_days: BusinessDays[];
  open_time: string;
  close_time: string;
  country_iso: Country;
  city: string;
  detail_address: string;
  created_at: string;
};
