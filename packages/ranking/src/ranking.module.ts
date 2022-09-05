import { PlayerRankingModule } from 'player/player-ranking.module'

export class RankingModule {
  public readonly playerRanking: PlayerRankingModule

  constructor() {
    this.playerRanking = new PlayerRankingModule()
  }
}
