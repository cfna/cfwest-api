import { BaseResponse } from './base';

export interface Ribbon {
  reward: string;
  ribbonCount: number;
  description: string;
  classID: number;
  ribbonID: number;
  name: string;
  image_file: string;
  class: Ribbon.Class;
}

export namespace Ribbon {
  export type Class = 'Normal' | 'Special';
}

export interface UserRibbonResponse extends BaseResponse {
  ribbonCount: RibbonCountInfo;
  hasHGW: HgwInfo[];
  userRibbonList: UserRibbon[];
  userInfo: UserInfo;
}

export interface UserInfo {
  USN: number;
  NICK: string;
}

export interface UserRibbon {
  ribbonID: number;
}

export interface RibbonCountInfo {
  ribbonCount: number;
  userRibbonCount: number;
}

export interface HgwInfo {
  hasRibbon: number;
}
