import { ResponseParsingError } from '../error';
import { Ribbon, RibbonCountInfo, UserRibbon, UserRibbonResponse } from '../models';
import { ApiModule } from './base';

export class Ribbons extends ApiModule {
  private async fetchUserRibbonInfo(playerUSN: string): Promise<UserRibbonResponse> {
    const response = await this.httpClient.get<UserRibbonResponse>('userribbons.json', {
      params: {
        usn: playerUSN,
      },
    });
    if (!response || response.status !== 200) {
      throw new ResponseParsingError(`Unable to query userribbons for player USN: ${playerUSN}!`);
    }
    return response.data;
  }

  public async getRibbonList(): Promise<Ribbon[]> {
    const response = await this.httpClient.get<Ribbon[]>('ribbonslist.json');
    return response.data;
  }

  public async getUserRibbons(playerUSN: string): Promise<UserRibbon[]> {
    const response = await this.fetchUserRibbonInfo(playerUSN);
    return response.userRibbonList;
  }

  public async getUserRibbonsCount(playerUSN: string): Promise<RibbonCountInfo> {
    const response = await this.fetchUserRibbonInfo(playerUSN);
    return response.ribbonCount;
  }

  public async getUserHasHonorableSoldier(playerUSN: string): Promise<boolean> {
    const response = await this.fetchUserRibbonInfo(playerUSN);
    if (response && response.hasHGW) {
      const hgwInfo = response.hasHGW[0];
      if (!hgwInfo.hasRibbon) {
        throw new ResponseParsingError('Unable to find hasHGW information!');
      }
      return hgwInfo.hasRibbon === 1;
    } else {
      throw new ResponseParsingError('Unable to find hasHGW info in response body!');
    }
  }
}
