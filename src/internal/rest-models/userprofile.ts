import { BaseResponse } from './base';

export interface UserProfileResponse extends BaseResponse {
  dsAchievementTotal: UserProfileAchievementTotal[];
  dsCollectionTotal: UserProfileCollectionTotal[];
  dsCollectionResult: UserProfileCollectionEntry[];
  dsInventoryTotal: UserProfileInventoryTotal[];
  dsInventoryResult: UserProfileInventoryResultEntry[];
  dsProfileDetails: UserProfileDetails[];
  dsProfilePINList: UserProfilePinListEntry[];
  dsProfileEquippedWeapons: UserProfileEquippedWeaponEntry[];
  dsRankedStatsResult: UserProfileRankedResultEntry[];
  dsRibbonGroupListResult: UserProfileRibbonGroupListEntry[];
  dsRibbonResult: UserProfileRibbonResultEntry[];
  dsRibbonTotal: UserProfileRibbonCountTotal[];
  dsWeaponCollectionGroupListResult: UserProfileWeaponCollectionGroupListEntry[];
}

export interface UserProfileAchievementTotal {
  avhievementCNT: number;
  playerCNT: number;
}

export interface UserProfileCollectionTotal {
  completed_CNT: number;
  total_CNT: number;
}

export interface UserProfileInventoryTotal {
  CNT: number; // Number of total owned items/weapons ?
}

export interface UserProfileRibbonCountTotal {
  ribbonCNT: number;
  playerCNT: number;
}

// This item represents a single collection entry with all it's meta information
export interface UserProfileCollectionEntry {
  ROWPOS: number;
  collection_Group_ID: number;
  collection_Group_Name: string;
  collection_ID: number;
  collection_Image: string;
  collection_Name: string;
  completed: string; // string with "Y" or "N"
  completed_CNT: number; // number of total players who completed this collection
  description: string;
  display_Order: number;
  image_Server: string;
  nameCardImgURL: string;
  nameCardText: string;
  reward_Desc: string;
  reward_Image: string; // the url returned here is only partial, needs to be concatinated to work properly
  reward_Type: string;
  status: number;
  total_Item_CNT: number; // total number of items in the collection
  user_Item_CNT: number; // actual owned number of items from this collection
}

// LEV properties are badge levels
export interface UserProfileDetails {
  CHAR_ITEM_CODE: string;
  CHAR_KILL: number;
  DEATH_CNT: number;
  DEFAULT_CHAR_ITEM_ID: string;
  DISPLAY_NAME: string;
  DRAW_CNT: number;
  DRAW_KILL: number;
  ELITE_LEV: number;
  ENEMY_KILL_CNT: number;
  HEADSHOT_KILL_CNT: number;
  HEAVY_KILL: number;
  KNIFE_KILL: number;
  LOSE_CNT: number;
  PISTOL_KILL: number;
  PLAY_CNT: number;
  RIFLE_KILL: number;
  RUSH_LEV: number;
  SCOUTING_LEV: number;
  SHOTGUN_KILL: number;
  SHOT_KILL: number;
  SMG_KILL: number;
  SNIPER_LEV: number;
  SPECIAL_LEV: number;
  USN: number;
  WIN_CNT: number;
}

export interface UserProfilePinListEntry {
  PIN_DISPLAY_NAME: string;
  PIN_ID: number;
  PIN_ORDER: number;
  hasIt: number;
  regDate: number;
  ribbonID: number;
  ribbonName: string;
}

export interface UserProfileInventoryResultEntry {
  CNT: number;
  DISPLAY_NAME: string;
  ITEM_CATEGORY: number;
  ITEM_CODE: string;
  ITEM_ID: string;
  ROWPOS: number;
}

export interface UserProfileEquippedWeaponEntry {
  DISPLAY_NAME: string;
  INVENTORY_SRL: number;
  ITEM_CODE: string;
  ITEM_ID: string;
  SACK_SRL: number;
  USN: number;
  WEAPON_TYPE: string;
}

export interface UserProfileRankedResultEntry {
  DEATH: number;
  HEADSHOT: number;
  KILL: number;
  LOSE: number;
  MATCH_COUNT: number;
  MEDAL: number;
  MODE_NO: number;
  MODE_NO_DESC: string;
  MODE_NO_DISPLAY_NAME: string;
  PARTKEY_SEASON_NO: number;
  RANKING: number;
  RANK_SCORE: number;
  ROWPOS: number;
  TIER_GROUP_ID: number;
  TIER_GROUP_NAME: string;
  TIER_STAGE_ID: number;
  USN: number;
  WIN: number;
}

export interface UserProfileRibbonGroupListEntry {
  REG_DATE: string;
  ribbonGroupInternalDesc: string;
  ribbonGroupName: string;
  ribbonGroupSort: number;
  ribbonType: number;
}

export interface UserProfileRibbonResultEntry {
  ROWPOS: number;
  achievedDate: string;
  hasRibbon: number;
  imageFileName: string;
  imagePath: string;
  isTier: number;
  ribbonCount: number;
  ribbonDescription: string;
  ribbonGroupName: string;
  ribbonGroupSort: number;
  ribbonID: number;
  ribbonName: string;
  ribbonOperation: string;
  ribbonType: number;
  tierEnd: number;
  tierStart: number;
}

export interface UserProfileWeaponCollectionGroupListEntry {
  REG_DATE: string;
  collection_Group_BGIMAGE: string;
  collection_Group_ID: number;
  collection_Group_Name: string;
  collection_Group_Order: number;
}
