import {
  AchievementsApiModule,
  RankingApiModule,
  RibbonsApiModule,
  UpdatesApiModule,
  UserWeaponsApiModule,
  WebShopApiModule,
  UserProfileApiModule
} from './internal/api-modules'
import { AxiosHttpClient, HttpClient } from './internal/http'
import { WeaponCategoryMapperImpl } from './internal/mapping'
import { ApiModuleOptions } from './internal/api-modules/base-module'
import _ from 'lodash'

/** @hidden */
const defaultOptions: ApiClientOptions = {
  httpClient: new AxiosHttpClient()
}

/** @hidden */
const defaultApiModuleOptions = {
  weaponCategoryMapper: new WeaponCategoryMapperImpl()
}

/**
 * This class is the core component to communicate with [CrossFire West](https://crossfire.z8games.com/) Services.
 */
export class ApiClient {
  /**
   * Property to access the [[AchievementsApiModule]]
   */
  public readonly achievements: AchievementsApiModule

  /**
   * Property to access the [[RankingApiModule]]
   */
  public readonly ranking: RankingApiModule

  /**
   * Property to access the [[RibbonsApiModule]]
   */
  public readonly ribbons: RibbonsApiModule

  /**
   * Property to access the [[UpdatesApiModule]]
   */
  public readonly updates: UpdatesApiModule

  /**
   * Property to access the [[UserWeaponsApiModule]]
   */
  public readonly userWeapons: UserWeaponsApiModule

  /**
   * Property to access the [[WebShopApiModule]]
   */
  public readonly webshop: WebShopApiModule

  /**
   * Property to access the [[UserProfileModule]]
   */
  public readonly userProfile: UserProfileApiModule

  /**
   * Constructor to initiale an [[ApiClient]] instance.
   * @param options Optional options to configure the [[ApiClient]]
   */
  constructor(options?: ApiClientOptions) {
    const initOptions = this.mergeConstructorOptions(options)
    const moduleInitOptions = this.createApiModuleOptions(initOptions)
    this.achievements = new AchievementsApiModule(moduleInitOptions)
    this.ranking = new RankingApiModule(moduleInitOptions)
    this.ribbons = new RibbonsApiModule(moduleInitOptions)
    this.updates = new UpdatesApiModule(moduleInitOptions)
    this.userWeapons = new UserWeaponsApiModule(moduleInitOptions)
    this.webshop = new WebShopApiModule(moduleInitOptions)
    this.userProfile = new UserProfileApiModule(moduleInitOptions)
  }

  private mergeConstructorOptions(options?: ApiClientOptions): ApiClientOptions {
    return _.merge({}, defaultOptions, options)
  }

  private createApiModuleOptions(apiClientOptions: ApiClientOptions): ApiModuleOptions {
    return _.merge({}, defaultApiModuleOptions, apiClientOptions)
  }
}

/**
 * Options to modify [[ApiClient]]s behavior.
 */
export interface ApiClientOptions {
  /**
   * Specify the [[HttpClient]] implementation to use.
   */
  httpClient: HttpClient
}
