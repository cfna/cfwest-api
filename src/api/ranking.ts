import {
  PlayerInfo,
  PeriodType,
  RankType,
  ClanInfo,
  ClanRankingResponse,
  PlayerRankingResponse,
  RankingResponseType,
} from '../models';
import { ApiModule } from './base';
import merge from 'lodash.merge';
import { ResponseParsingError } from '../error';

export class DefaulutRankingOptions implements RankingOptions {
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

export class Ranking extends ApiModule {
  private mergeRequestParams(options: RankingOptions): RankingOptions {
    return merge({}, new DefaulutRankingOptions(), options);
  }

  private handleError(error?: Error) {
    this.getErrorHandler().handleError(error);
  }

  private async playerRankingRequest(
    requestOptions: RankingOptions,
  ): Promise<PlayerInfo[]> {
    const options = this.mergeRequestParams(requestOptions);
    const results: PlayerInfo[] = [];
    if (
      !options ||
      !options.start ||
      !options.end ||
      !options.periodType ||
      !options.rank
    ) {
      throw new Error(
        `Error: Invalid values from merged response returned! Got: ${JSON.stringify(
          options,
        )}`,
      );
    }
    try {
      const response = await this.getHttpClient().get<PlayerRankingResponse>(
        'ranking.json',
        {
          params: {
            startrow: options.start,
            endrow: options.end,
            period: options.periodType.toString(),
            rankType: options.rank.toString(),
            name: options.searchName,
          },
        },
      );
      if (response.data.Ranking.RankList) {
        response.data.Ranking.RankList.forEach((item: PlayerInfo) => {
          if (item) {
            results.push(item);
          }
        });
      } else {
        throw new ResponseParsingError(
          'Unable to read response body from request!',
        );
      }
    } catch (error) {
      this.handleError(error);
    }
    return results;
  }

  private async clanRankingRequest(
    requestOptions: RankingOptions,
  ): Promise<ClanInfo[]> {
    const options = this.mergeRequestParams(requestOptions);
    const results: ClanInfo[] = [];
    if (
      !options ||
      !options.start ||
      !options.end ||
      !options.periodType ||
      !options.rank
    ) {
      throw new Error(
        `Error: Invalid values from merged response returned! Got: ${JSON.stringify(
          options,
        )}`,
      );
    }
    try {
      const response = await this.getHttpClient().get<ClanRankingResponse>(
        'ranking.json',
        {
          params: {
            startrow: options.start,
            endrow: options.end,
            period: options.periodType.toString(),
            rankType: options.rank.toString(),
            name: options.searchName,
          },
        },
      );
      if (response.data.Ranking.RankList) {
        // tslint:disable-next-line:no-identical-functions
        response.data.Ranking.RankList.forEach((item: ClanInfo) => {
          if (item) {
            results.push(item);
          }
        });
      } else {
        throw new ResponseParsingError(
          'Unable to read response body from request!',
        );
      }
    } catch (error) {
      this.handleError(error);
    }
    return results;
  }

  public async searchPlayer(
    name: string,
    period: PeriodType = PeriodType.AllTime,
  ): Promise<PlayerInfo[]> {
    return this.playerRankingRequest({
      searchName: name,
      periodType: period,
    });
  }

  public async searchClan(
    name: string,
    period: PeriodType = PeriodType.AllTime,
  ): Promise<ClanInfo[]> {
    return this.clanRankingRequest({
      searchName: name,
      periodType: period,
      rank: RankType.Clan,
    });
  }

  public async getPlayerRanking(
    options: RankingOptions = {},
  ): Promise<PlayerInfo[]> {
    return this.playerRankingRequest(options);
  }

  public async getClanRanking(
    options: RankingOptions = { rank: RankType.Clan },
  ): Promise<ClanInfo[]> {
    return this.clanRankingRequest(options);
  }
}
