import {
  AchievementsApiModule,
  RankingApiModule,
  RibbonsApiModule,
  UpdatesApiModule,
  UserWeaponsApiModule,
  WebShopApiModule
} from './internal/api-modules';
import { AxiosHttpClient, HttpClient } from './internal/http';
import { WeaponCategoryMapperImpl } from './internal/mapping';
import { ApiModuleOptions } from './internal/api-modules/base-module';
import merge from 'lodash.merge';

const defaultOptions: ApiClientOptions = {
  httpClient: new AxiosHttpClient()
};

const defaultApiModuleOptions = {
  weaponCategoryMapper: new WeaponCategoryMapperImpl()
};

export class ApiClient {
  public readonly achievements: AchievementsApiModule;
  public readonly ranking: RankingApiModule;
  public readonly ribbons: RibbonsApiModule;
  public readonly updates: UpdatesApiModule;
  public readonly userWeapons: UserWeaponsApiModule;
  public readonly webshop: WebShopApiModule;

  constructor(options?: ApiClientOptions) {
    const initOptions = this.mergeConstructorOptions(options);
    const moduleInitOptions = this.createApiModuleOptions(initOptions);
    this.achievements = new AchievementsApiModule(moduleInitOptions);
    this.ranking = new RankingApiModule(moduleInitOptions);
    this.ribbons = new RibbonsApiModule(moduleInitOptions);
    this.updates = new UpdatesApiModule(moduleInitOptions);
    this.userWeapons = new UserWeaponsApiModule(moduleInitOptions);
    this.webshop = new WebShopApiModule(moduleInitOptions);
  }

  private mergeConstructorOptions(options?: ApiClientOptions): ApiClientOptions {
    return merge({}, defaultOptions, options);
  }

  private createApiModuleOptions(apiClientOptions: ApiClientOptions): ApiModuleOptions {
    return merge({}, defaultApiModuleOptions, apiClientOptions);
  }
}

export interface ApiClientOptions {
  httpClient: HttpClient;
}
