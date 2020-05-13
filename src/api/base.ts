import { ApiClient } from '.';
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
  private readonly _api: AxiosInstance;

  /**
   * @ignore
   */
  private readonly _errorHandler: ErrorHandler;

  public constructor(apiClient: ApiClient) {
    this._api = apiClient._api;
    this._errorHandler = apiClient._errorHandler;
  }

  protected getHttpClient(): AxiosInstance {
    return this._api;
  }

  protected getErrorHandler(): ErrorHandler {
    return this._errorHandler;
  }
}
