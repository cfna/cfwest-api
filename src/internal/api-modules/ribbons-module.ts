import { BaseApiModule } from './base-module';
import { UserRibbonResponse, UserRibbon, RibbonCountInfo, Ribbon } from '../rest-models';

export class RibbonsApiModule extends BaseApiModule {
  private fetchUserRibbonInfo(playerUSN: string): Promise<UserRibbonResponse | undefined> {
    return this.httpClient.get<UserRibbonResponse>('userribbons.json', {
      params: {
        usn: playerUSN,
      },
    });
  }

  public async getRibbonList(): Promise<Ribbon[] | undefined> {
    return this.httpClient.get<Ribbon[]>('ribbonslist.json');
  }

  public async getUserRibbons(playerUSN: string): Promise<UserRibbon[] | undefined> {
    const response = await this.fetchUserRibbonInfo(playerUSN);
    if (response && response.userRibbonList) {
      return response.userRibbonList;
    }
    return undefined;
  }

  public async getUserRibbonsCount(playerUSN: string): Promise<RibbonCountInfo | undefined> {
    const response = await this.fetchUserRibbonInfo(playerUSN);
    if (response && response.ribbonCount) {
      return response.ribbonCount;
    }
    return undefined;
  }

  public async getUserHasHonorableSoldier(playerUSN: string): Promise<boolean | undefined> {
    const response = await this.fetchUserRibbonInfo(playerUSN);
    if (response && response.hasHGW) {
      const hgwInfo = response.hasHGW[0];
      if (hgwInfo.hasRibbon) {
        return hgwInfo.hasRibbon === 1;
      }
    }
    return undefined;
  }
}
