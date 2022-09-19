import { HttpClient } from '../http'
import { WeaponCategoryMapper } from '../mapping'

export abstract class BaseApiModule {
  protected readonly httpClient: HttpClient

  constructor(options: ApiModuleOptions) {
    this.httpClient = options.httpClient
  }
}

export interface ApiModuleOptions {
  httpClient: HttpClient
  weaponCategoryMapper: WeaponCategoryMapper
}
