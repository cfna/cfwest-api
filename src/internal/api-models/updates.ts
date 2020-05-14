import { CountableResponse } from './base';

export interface UpdatesResponse extends CountableResponse {
  WebPages: UpdateInfo[];
}

export interface UpdateInfo {
  id: number;
  _active: boolean;
  Sync_Date: Date;
  Id: number;
  Page_Name: string;
  Message: string;
  Html_Content: null;
  Is_Active: boolean;
  Start_Date: Date;
  End_Date: Date | null;
  Category: string;
  Image_Link: string;
  Thumbnail_Link: string;
  Page_Order: string;
  ACL: number;
  IPS: string;
}
