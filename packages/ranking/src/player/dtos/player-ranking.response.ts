import { PlayerInfo } from './player.info'

export interface PlayerRankingResponse {
  Ranking: PlayerRanking
}

export interface PlayerRanking {
  RankList: PlayerInfo[]
}
