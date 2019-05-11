import { ApiModule } from './base';
import {
  WeaponsFilterType,
  WeaponCategory,
  UserWeaponsResponse,
  UserWeapon,
  CollectionCollectorResponse,
  Collections,
  CollectionWithUserInfo,
  UserCollectionsResponse,
} from '../models/userweapons';
import { ResponseParsingError } from '../error';

export class UserWeapons extends ApiModule {
  private handleError(error?: Error) {
    this.getErrorHandler().handleError(error);
  }

  // tslint:disable-next-line:max-line-length
  public async getUserWeapons(
    playerUSN: string,
    category: WeaponCategory = WeaponCategory.ASSAULT_RIFLES,
    filter: WeaponsFilterType = 'permanent',
    start: number = 1,
    end: number = 500,
  ): Promise<UserWeapon[]> {
    const wpns: UserWeapon[] = [];
    try {
      const response = await this.getHttpClient().get<UserWeaponsResponse>(
        'userweapons.json',
        {
          params: {
            startrow: start,
            endrow: end,
            usn: playerUSN,
            item_category3: category.toString(),
            term: filter,
          },
        },
      );

      if (!response.data.Weapons) {
        throw new ResponseParsingError(
          'Unable to read response body from request!',
        );
      }
      response.data.Weapons.forEach((weapon: UserWeapon) => {
        if (weapon) {
          wpns.push(weapon);
        }
      });
    } catch (error) {
      this.handleError(error);
    }
    return wpns;
  }

  public async getCollectionCollectors(
    collectionID: number,
    start: number = 1,
    end: number = 500,
  ): Promise<CollectionWithUserInfo> {
    const responseObject: CollectionWithUserInfo = [];
    try {
      const response = await this.getHttpClient().get<
        CollectionCollectorResponse
      >('userweapons.json', {
        params: {
          startrow: start,
          endrow: end,
          perPage: end,
          usn: -1,
          collection_ID: collectionID,
          term: 'collectionRanking',
        },
      });

      if (!response.data) {
        throw new ResponseParsingError(
          'Unable to read response body from request!',
        );
      }

      responseObject[0] = response.data.Collection_Info;
      responseObject[1] = response.data.User_Info;
    } catch (error) {
      this.handleError(error);
    }
    return responseObject;
  }

  public async getUserCollections(
    playerUSN: string,
  ): Promise<Collections.Info[]> {
    try {
      const response = await this.getHttpClient().get<UserCollectionsResponse>(
        'userweapons.json',
        {
          params: {
            startrow: 1,
            endrow: 500,
            item_category3: 1,
            term: 'collection',
            usn: playerUSN,
          },
        },
      );

      if (!response.data) {
        throw new ResponseParsingError(
          'Unable to read response body from request!',
        );
      }

      return response.data.Weapons;
    } catch (error) {
      this.handleError(error);
    }

    return [];
  }
}
