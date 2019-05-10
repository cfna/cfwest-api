import { stringEnum } from '../utils';
import { CountableResponse } from '.';
import { BaseResponse } from './base';

export const WeaponsFilterType = stringEnum([
  'collection',
  'temporary',
  'permanent',
]);

export type WeaponsFilterType = keyof typeof WeaponsFilterType;

export const enum WeaponCategory {
  ASSAULT_RIFLES = 1,
  SNIPER_RIFLES = 2,
  SUB_MACHINE_GUNS = 3,
  MACHINE_GUNS = 4,
  SHOTGUNS = 5,
  PISTOLS = 6,
  MELEE = 7,
  GRENADES = 8,
}

export interface UserWeapon {
  item_ID: number;
  item_OBTAINED: number;
  eff_START_DATE: number;
  eff_END_DATE: number;
  item_CODE: string;
  image_URL_1: string;
  item_CATEGORY1: string;
  item_CATEGORY2: string;
  item_CATEGORY3: string;
  display_NAME: string;
  wdn: string;
  row: number;
  location: string;
  perm_WEAPON: number;
  ITEM_ID: number;
  ITEM_OBTAINED: number;
  EFF_START_DATE: number;
  EFF_END_DATE: number;
  ITEM_CODE: string;
  IMAGE_URL_1: string;
  ITEM_CATEGORY1: string;
  ITEM_CATEGORY2: string;
  ITEM_CATEGORY3: string;
  DISPLAY_NAME: string;
  WDN: string;
  ROW: number;
  LOCATION: string;
  PERM_WEAPON: number;
  PERM: boolean;
  TEMP: boolean;
  EXPIRED: boolean;
}

export interface UserWeaponsResponse extends CountableResponse {
  Weapons: UserWeapon[];
}

export interface CollectionCollectorResponse extends BaseResponse {
  Collection_Info: Collections.Info;
  User_Info: Collections.UserInfo[];
}

export interface PagingInfo {
  pagingInfo: PagingInfo.Data[];
}

export namespace PagingInfo {
  export interface Data {
    lastPage: number;
    perPage: number;
    pageNumber: number;
    totalCnt: number;
  }
}

export type CollectionWithUserInfo = [
  Collections.Info?,
  Collections.UserInfo[]?
];

export interface UserCollectionsResponse extends CountableResponse {
  Completed_Collections: number;
  // list of collectoins & their details
  Weapons: Collections.Info[];
  nick: string;
}

export namespace Collections {
  /**
   * Contains all user related information of a collection owner.
   * A collection owner is a player who has all required weapons to complete the collection.
   */
  export interface UserInfo {
    USN: number;
    NICK: string;
    item_Name: string;
    last_Item_Date: Date;
    last_Item_Date_old: Date;
  }

  /**
   * The Info class represents a single collection and holds all related information.
   */
  export interface Info {
    total: number;
    completed_users: number;
    reward_image: string;
    reward_obtained: string;
    namecardtext: string;
    reward_desc: string;
    last_item_date: string;
    status: number;
    user_cnt: number;
    idex: number;
    collection_name: string;
    collection_Name: string;
    collection_id: number;
    collection_ID: number;
    reward_type: string;
    description: string;
    collection_Image: string;
    namecardimgurl: string;
    // these are the weapons included in the collection
    weapons: Collections.WeaponDetails[];
    display_order: number;
  }

  /**
   * Representation of a single Weapon which is included in a collection.
   */
  export interface WeaponDetails {
    obtained: number;
    collection_id: number;
    item_name: string;
    image_url: string;
    display_order: number;
  }
}
