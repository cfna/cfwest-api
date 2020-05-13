import { WebShopItem, WebshopFilter, WebShopResponse } from '../models';
import { ApiModule } from './base';

export class WebShop extends ApiModule {
  public async listItems(
    start: number = 1,
    end: number = 100,
    filterType: WebshopFilter = WebshopFilter.None,
  ): Promise<WebShopItem[]> {
    const response = await this.getHttpClient().get<WebShopResponse>('webshopitems.json', {
      params: {
        startrow: start,
        endrow: end,
        filter: filterType,
      },
    });
    return response.data.WebshopItems.WebShopItems;
  }
}
