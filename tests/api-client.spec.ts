jest.unmock('axios');

import winston from 'winston';
import ApiClient from '../dist';
import * as TestUtils from './utils';

jest.setTimeout(15000);

const logger = TestUtils.getLogger();

describe('CrossFire ApiClient Module Tests', () => {

  test('Create new ApiClient instance', () => {
    const api = new ApiClient();
    expect(api).toBeDefined();
    expect(api).toBeInstanceOf(ApiClient);
  });

  test('Ranking query should return result', async (done) => {
    expect.assertions(2);
    const api = new ApiClient();
    const result = await api.ranking.getPlayerRanking();
    expect(result).toBeDefined();
    expect(result.length).toEqual(100);
    logger.info(`Ranking Query results returned: ${result.length} items.`);
    done();
  });

  test('Ribbon List should not be empty', async (done) => {
    expect.assertions(2);
    const api = new ApiClient();
    const result = await api.ribbons.getRibbonList();
    expect(result).toBeDefined();
    expect(result.length).toBeGreaterThan(0);
    logger.info(`Ribbon List results returned: ${result.length} items.`);

    const targets = TestUtils.pickFromArray(result, {
      everyItem: 8,
    });

    targets.map(item => {
      TestUtils.inspectObject(item, {
        onError: (error: Error) => {
          logger.error(error);
        },
        onResult: (res: string) => {
          logger.info(res);
        },
      });
    });

    done();
  });

});
