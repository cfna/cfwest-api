import { ClanInfo } from './clan.info'

export interface ClanRankingResponse {
  Ranking: ClanRanking
}

export interface ClanRanking {
  RankList: ClanInfo[]
}
