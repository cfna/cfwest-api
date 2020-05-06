import { UpdatesResponse, UpdateInfo } from '../models';
import { ApiModule } from './base';

export class Updates extends ApiModule {
  public async getUpdateInfo(start: number = 1, end: number = 10): Promise<UpdateInfo[]> {
    const response = await this.getHttpClient().get<UpdatesResponse>('updates.json', {
      params: {
        startrow: start,
        endrow: end,
      },
    });
    return response.data.WebPages;
  }
}
