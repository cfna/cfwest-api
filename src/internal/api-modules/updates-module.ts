import { BaseApiModule } from './base-module';
import { UpdateInfo, UpdatesResponse } from '../rest-models';

export class UpdatesApiModule extends BaseApiModule {
  public async getUpdateInfo(start: number = 1, end: number = 10): Promise<UpdateInfo[] | undefined> {
    const response = await this.httpClient.get<UpdatesResponse>('updates.json', {
      params: {
        startrow: start,
        endrow: end
      }
    });

    if (response && response.WebPages) {
      return response.WebPages;
    }
    return undefined;
  }
}
