import { BaseApiModule } from './base-module';
import {
  WeaponsFilterType,
  WeaponCategory,
  UserWeaponsResponse,
  UserWeapon,
  CollectionCollectorResponse,
  Collections,
  CollectionWithUserInfo,
  UserCollectionsResponse,
} from '../rest-models';

export class UserWeaponsApiModule extends BaseApiModule {
  public async getUserWeapons(
    playerUSN: string,
    category: WeaponCategory = WeaponCategory.ASSAULT_RIFLES,
    filter: WeaponsFilterType = 'permanent',
    start: number = 1,
    end: number = 500,
  ): Promise<UserWeapon[] | undefined> {
    const response = await this.httpClient.get<UserWeaponsResponse>('userweapons.json', {
      params: {
        startrow: start,
        endrow: end,
        usn: playerUSN,
        item_category3: category.toString(),
        term: filter,
      },
    });

    if (response && response.Weapons) {
      return response.Weapons;
    }
  }

  // TODO: think about proper name for this function
  public async getCollectionCollectors(
    collectionID: number,
    start: number = 1,
    end: number = 500,
  ): Promise<CollectionWithUserInfo | undefined> {
    const responseObject: CollectionWithUserInfo = [];
    const response = await this.httpClient.get<CollectionCollectorResponse>('userweapons.json', {
      params: {
        startrow: start,
        endrow: end,
        perPage: end,
        usn: -1,
        collection_ID: collectionID,
        term: 'collectionRanking',
      },
    });

    if (response && response.Collection_Info && response.User_Info) {
      responseObject[0] = response.Collection_Info;
      responseObject[1] = response.User_Info;
      return responseObject;
    }
  }

  public async getUserCollections(playerUSN: string): Promise<Collections.Info[] | undefined> {
    const response = await this.httpClient.get<UserCollectionsResponse>('userweapons.json', {
      params: {
        startrow: 1,
        endrow: 500,
        item_category3: 1,
        term: 'collection',
        usn: playerUSN,
      },
    });

    if (response && response.Weapons) {
      return response.Weapons;
    }
  }
}
