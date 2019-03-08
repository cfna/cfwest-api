jest.unmock('axios');

import { CrossFire } from '../dist';
import winston from 'winston';

jest.setTimeout(10000);

const logger = winston.createLogger({
  exitOnError: false,
  transports: [ new winston.transports.Console() ],
  format: winston.format.combine(
    winston.format.colorize({ all: true }),
    winston.format.simple(),
  ),
});

describe('CrossFire ApiClient Module Tests', () => {

  test('Create new ApiClient instance', () => {
    const api = new CrossFire.ApiClient();
    expect(api).toBeDefined();
    expect(api).toBeInstanceOf(CrossFire.ApiClient);
  });

  test('Ranking query should return result', async (done) => {
    expect.assertions(2);
    const api = new CrossFire.ApiClient();
    const result = await api.ranking.getPlayerRanking();
    expect(result).toBeDefined();
    expect(result.length).toEqual(100);
    logger.info(`Results returned: ${result.length}`);
    done();
  });

});
