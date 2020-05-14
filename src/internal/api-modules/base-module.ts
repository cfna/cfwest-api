import { HttpClient } from '../http';

export abstract class BaseApiModule {
  protected readonly httpClient: HttpClient;

  constructor(options: ApiModuleOptions) {
    this.httpClient = options.httpClient;
  }
}

export interface ApiModuleOptions {
  httpClient: HttpClient;
}
