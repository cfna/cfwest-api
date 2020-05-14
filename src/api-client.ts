import {
  AchievementsApiModule,
  RankingApiModule,
  RibbonsApiModule,
  UpdatesApiModule,
  UserWeaponsApiModule,
  WebShopApiModule,
} from './internal/api-modules';
import { AxiosHttpClient, HttpClient } from './internal/http';
import merge from 'lodash.merge';

const defaultOptions: ApiClientOptions = {
  httpClient: new AxiosHttpClient(),
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
    this.achievements = new AchievementsApiModule({ httpClient: initOptions.httpClient });
    this.ranking = new RankingApiModule({ httpClient: initOptions.httpClient });
    this.ribbons = new RibbonsApiModule({ httpClient: initOptions.httpClient });
    this.updates = new UpdatesApiModule({ httpClient: initOptions.httpClient });
    this.userWeapons = new UserWeaponsApiModule({ httpClient: initOptions.httpClient });
    this.webshop = new WebShopApiModule({ httpClient: initOptions.httpClient });
  }

  private mergeConstructorOptions(options?: ApiClientOptions): ApiClientOptions {
    return merge({}, defaultOptions, options);
  }
}

export interface ApiClientOptions {
  httpClient: HttpClient;
}
