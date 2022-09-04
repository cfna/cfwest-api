import { BaseApiModule } from './base-module'
import { WebShopItem, WebshopFilter, WebShopResponse } from '../rest-models'

export class WebShopApiModule extends BaseApiModule {
  public async getWebShopItems(
    start: number = 1,
    end: number = 100,
    filterType: WebshopFilter = WebshopFilter.None
  ): Promise<WebShopItem[] | undefined> {
    const response = await this.httpClient.get<WebShopResponse>('webshopitems.json', {
      params: {
        startrow: start,
        endrow: end,
        filter: filterType
      }
    })
    if (response && response.WebshopItems && response.WebshopItems.WebShopItems) {
      return response.WebshopItems.WebShopItems
    }
  }
}
