import { HttpClient, mergeObjects } from '@cfwest/common'
import { PeriodType, RankType } from '../dtos'
import { PlayerInfo, PlayerRankingResponse } from './dtos'

interface RankingOptions {
  searchName?: string
  start?: number
  end?: number
  periodType?: PeriodType
  rank?: RankType
}

const DEFAULT_OPTOINS = {
  searchName: '',
  start: 1,
  end: 100,
  periodType: PeriodType.AllTime,
  rank: RankType.User
}

export class PlayerRankingModule {
  private readonly httpClient: HttpClient

  constructor() {
    this.httpClient = new HttpClient()
  }

  private async playerRankingRequest(requestOptions: RankingOptions): Promise<PlayerInfo[] | undefined> {
    const options = mergeObjects(DEFAULT_OPTOINS, requestOptions)
    if (!options || !options.start || !options.end || !options.periodType || !options.rank) {
      return undefined
    }
    const response = await this.httpClient.get<PlayerRankingResponse>('ranking.json', {
      params: {
        startrow: options.start,
        endrow: options.end,
        period: options.periodType.toString(),
        rankType: options.rank.toString(),
        name: options.searchName
      }
    })

    if (response && response.Ranking && response.Ranking.RankList) {
      return response.Ranking.RankList
    }
    return undefined
  }

  public searchPlayer(name: string, period: PeriodType = PeriodType.AllTime): Promise<PlayerInfo[] | undefined> {
    return this.playerRankingRequest({
      searchName: name,
      periodType: period
    })
  }

  public getPlayerRanking(options: RankingOptions = {}): Promise<PlayerInfo[] | undefined> {
    return this.playerRankingRequest(options)
  }
}
