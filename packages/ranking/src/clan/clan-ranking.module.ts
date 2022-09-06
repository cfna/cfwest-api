import { HttpClient, mergeObjects } from '@cfwest/common'
import { RankType, PeriodType } from 'dtos'
import { ClanInfo, ClanRankingResponse } from './dtos'

interface RankingOptions {
  searchName?: string
  start?: number
  end?: number
  periodType?: PeriodType
  rank?: RankType
}

const DEFAULT_OPTIONS = {
  searchName: '',
  start: 1,
  end: 100,
  periodType: PeriodType.AllTime,
  rank: RankType.Clan
}

export class ClanRankingModule {
  private readonly httpClient: HttpClient

  constructor() {
    this.httpClient = new HttpClient()
  }

  private async clanRankingRequest(requestOptions: RankingOptions): Promise<ClanInfo[] | undefined> {
    const options = mergeObjects(DEFAULT_OPTIONS, requestOptions)

    if (!options || !options.start || !options.end || !options.periodType || !options.rank) {
      return undefined
    }

    const response = await this.httpClient.get<ClanRankingResponse>('ranking.json', {
      params: {
        startrow: options.start,
        endrow: options.end,
        period: options.periodType.toString(),
        rankType: options.rank.toString(),
        name: options.searchName
      }
    })

    if (response && response.Ranking.RankList) {
      return response.Ranking.RankList
    }

    return undefined
  }

  public getClanRanking(options: RankingOptions = { rank: RankType.Clan }): Promise<ClanInfo[] | undefined> {
    return this.clanRankingRequest(options)
  }

  public searchClan(name: string, period: PeriodType = PeriodType.AllTime): Promise<ClanInfo[] | undefined> {
    return this.clanRankingRequest({
      searchName: name,
      periodType: period,
      rank: RankType.Clan
    })
  }
}
