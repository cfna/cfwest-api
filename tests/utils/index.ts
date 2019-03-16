import util from 'util';
import winston from 'winston';

export interface InspectCallback {
  onResult?: ((result: string) => void);
  onError?: ((error: Error) => void);
}

export class PickConfig {
  everyItem: number = 1;
}

const logger = winston.createLogger({
  exitOnError: false,
  transports: [ new winston.transports.Console() ],
  format: winston.format.combine(
    winston.format.colorize({ all: true }),
    winston.format.simple(),
  ),
});

export function getLogger(): winston.Logger {
  return logger;
}

export function inspectObject(obj?: any, cb?: InspectCallback) {
  if (!obj) {
    if (cb && cb.onError) {
      cb.onError(new Error('No input object provided!'));
    }
    return;
  }
  const result = util.inspect(obj, false, null, true);
  if (cb && cb.onResult) {
    cb.onResult(result);
  }
  return;
}

export function pickFromArray<T>(data: T[], config: PickConfig): T[] {
  const stepSize = config.everyItem;
  const results: T[] = [];
  for (let i = 0; i < data.length; i += stepSize) {
    if (stepSize < data.length) {
      const item = data[i];
      if (item) {
        results.push(item);
      }
    }
  }
  return results;
}
