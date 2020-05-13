import { AxiosInstance } from 'axios';
import { ErrorHandler } from '../error';

/**
 * The base class for all API components in this package.
 * This class is unimportant for external package consumers.
 * The ApiModule provides an abstract base implementation of commonly shared code throughout this package.
 */
export abstract class ApiModule {
  /**
   * @ignore
   */
  protected readonly httpClient: AxiosInstance;

  /**
   * @ignore
   */
  protected readonly errorHandler?: ErrorHandler;

  public constructor(options: ApiModule.Options) {
    this.httpClient = options.httpClient;
    this.errorHandler = options.errorHandler;
  }
}

export namespace ApiModule {
  export interface Options {
    httpClient: AxiosInstance;
    errorHandler?: ErrorHandler;
  }
}
