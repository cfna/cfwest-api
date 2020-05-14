import { CountableResponse } from './base';

export interface WebShopResponse extends CountableResponse {
  WebshopItems: WebShopItems;
}

export interface WebShopItems {
  WebShopItems: WebShopItem[];
}

export interface WebShopItem {
  id: number;
  item_id: number;
  item_code: string;
  item_name: string;
  description: string;
  price: number;
  currency: Currency;
  image_url: string;
  total_count: null;
  limit_per_user: number | null;
  status: number;
  item_icon: string;
  vip: number | null;
  show_countdown: number;
  start_date: Date;
  end_date: null;
  item_left_count: null;
  display_order: number;
  server_time: Date;
  time_remaining: string;
  time_remaining_seconds: number;
  claimed_percentage: number;
}

export enum Currency {
  Ep = 'EP',
  Zp = 'ZP',
}

export enum WebshopFilter {
  VipExclusive = 'vip+exclusive',
  Event = 'event',
  Regular = 'regular',
  None = '',
}
