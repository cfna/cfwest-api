import { ClanRankingModule } from './clan'
import { PlayerRankingModule } from './player'

export class RankingModule {
  public readonly playerRanking: PlayerRankingModule
  public readonly clanRanking: ClanRankingModule

  constructor() {
    this.playerRanking = new PlayerRankingModule()
    this.clanRanking = new ClanRankingModule()
  }

}
