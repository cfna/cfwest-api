import { BaseApiModule } from './base-module';
import { PlayerInfo, PeriodType, RankType, ClanInfo, ClanRankingResponse, PlayerRankingResponse } from '../rest-models';
import merge from 'lodash.merge';

class DefaulutRankingOptions implements RankingOptions {
  searchName: string = '';
  start: number = 1;
  end: number = 100;
  periodType: PeriodType = PeriodType.AllTime;
  rank: RankType = RankType.User;
}

export interface RankingOptions {
  searchName?: string;
  start?: number;
  end?: number;
  periodType?: PeriodType;
  rank?: RankType;
}

export class RankingApiModule extends BaseApiModule {
  private mergeRequestParams(options: RankingOptions): RankingOptions {
    return merge({}, new DefaulutRankingOptions(), options);
  }

  private async playerRankingRequest(requestOptions: RankingOptions): Promise<PlayerInfo[] | undefined> {
    const options = this.mergeRequestParams(requestOptions);
    if (!options || !options.start || !options.end || !options.periodType || !options.rank) {
      return undefined;
    }
    const response = await this.httpClient.get<PlayerRankingResponse>('ranking.json', {
      params: {
        startrow: options.start,
        endrow: options.end,
        period: options.periodType.toString(),
        rankType: options.rank.toString(),
        name: options.searchName,
      },
    });

    if (response && response.Ranking && response.Ranking.RankList) {
      return response.Ranking.RankList;
    }
    return undefined;
  }

  private async clanRankingRequest(requestOptions: RankingOptions): Promise<ClanInfo[] | undefined> {
    const options = this.mergeRequestParams(requestOptions);

    if (!options || !options.start || !options.end || !options.periodType || !options.rank) {
      return undefined;
    }

    const response = await this.httpClient.get<ClanRankingResponse>('ranking.json', {
      params: {
        startrow: options.start,
        endrow: options.end,
        period: options.periodType.toString(),
        rankType: options.rank.toString(),
        name: options.searchName,
      },
    });

    if (response && response.Ranking.RankList) {
      return response.Ranking.RankList;
    }

    return undefined;
  }

  public searchPlayer(name: string, period: PeriodType = PeriodType.AllTime): Promise<PlayerInfo[] | undefined> {
    return this.playerRankingRequest({
      searchName: name,
      periodType: period,
    });
  }

  public searchClan(name: string, period: PeriodType = PeriodType.AllTime): Promise<ClanInfo[] | undefined> {
    return this.clanRankingRequest({
      searchName: name,
      periodType: period,
      rank: RankType.Clan,
    });
  }

  public getPlayerRanking(options: RankingOptions = {}): Promise<PlayerInfo[] | undefined> {
    return this.playerRankingRequest(options);
  }

  public getClanRanking(options: RankingOptions = { rank: RankType.Clan }): Promise<ClanInfo[] | undefined> {
    return this.clanRankingRequest(options);
  }
}
