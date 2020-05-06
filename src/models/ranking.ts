import { CountableResponse } from '.';
import { stringEnum } from '../utils';

export interface ClanRankingResponse extends CountableResponse {
  Ranking: ClanRanking;
}

export interface PlayerRankingResponse extends CountableResponse {
  Ranking: PlayerRanking;
}

export interface ClanRanking {
  RankList: ClanInfo[];
}

export interface PlayerRanking {
  RankList: PlayerInfo[];
}

export const RankingResponseType = stringEnum(['clan', 'player']);

export type RankingResponseType = keyof typeof RankingResponseType;

export interface PlayerInfo {
  id: number;
  usn: number;
  ign: string;
  xp_point: number;
  total_xp: number;
  game_point: number;
  rank: number;
  regweek: string;
  startdate: number;
  enddate: number;
  name: string;
  rank_title: string;
  position: number;
  isMarshal: boolean;
  kills: null;
  deaths: null;
  wins: null;
  games: number;
  kd: number;
  vit: string;
}

export interface ClanInfo {
  id: number;
  clankey: number;
  clanname: string;
  marklayer01: number;
  marklayer02: number;
  marklayer03: number;
  marklayer04: number;
  xp_point: number;
  rank: number;
  regweek: string;
  startdate: number;
  enddate: number;
  pattern: string;
}

export const enum PeriodType {
  Weekly = 'week',
  Monthly = 'month',
  AllTime = 'all',
}

export const enum RankType {
  User = 'user',
  Clan = 'clan',
}
