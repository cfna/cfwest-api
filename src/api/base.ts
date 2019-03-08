import { ApiClient } from '.';
import { AxiosInstance } from 'axios';
import { ErrorHandler } from '../error';

export abstract class ApiModule {

    private readonly _api: AxiosInstance;
    private readonly _errorHandler: ErrorHandler;

    public constructor(apiClient: ApiClient) {
        this._api = apiClient._api;
        this._errorHandler = apiClient._errorHandler;
    }

    getHttpClient(): AxiosInstance {
        return this._api;
    }

    getErrorHandler(): ErrorHandler {
      return this._errorHandler;
    }

}
