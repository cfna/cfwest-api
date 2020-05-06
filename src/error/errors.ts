export class RequestOptionsValidationError extends Error {
  public constructor(error: string | Error | undefined) {
    super(`RequestOptionsValidationError: ${error}`);
  }
}

export class ResponseParsingError extends Error {
  public constructor(error: string | Error | undefined) {
    super(`ResponseParsingError: ${error}`);
  }
}
