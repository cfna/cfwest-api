import { ApiClient } from '../api';
import { RequestOptionsValidationError, ResponseParsingError } from './errors';

export type HandleableErrors = RequestOptionsValidationError | ResponseParsingError;

export class ErrorHandler {
  private _apiClient: ApiClient;

  public constructor(client: ApiClient) {
    this._apiClient = client;
  }

  public handleError(error?: HandleableErrors) {
    if (error) {
      this._apiClient._logger.error(error);
    }
  }
}
