import { ApiClient } from '../api';
import { RequestOptionsValidationError, ResponseParsingError } from './errors';
import { Logger } from 'winston';

export type HandleableErrors = RequestOptionsValidationError | ResponseParsingError;

export class ErrorHandler {
  private readonly logger: Logger;

  public constructor(options: ErrorHandler.Options) {
    this.logger = options.logger;
  }

  public handleError(error?: HandleableErrors) {
    if (error) {
      this.logger.error(error);
    }
  }
}

export namespace ErrorHandler {
  export interface Options {
    logger: Logger;
  }
}
