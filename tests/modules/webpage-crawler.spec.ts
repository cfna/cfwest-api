jest.unmock('axios');

import { default as ApiClient } from '../../dist';
import * as TestUtils from '../utils';

jest.setTimeout(15000);

const logger = TestUtils.getLogger();

describe('TestSuite for WebPageParser', () => {

  test('Testing parser response', async (done) => {
    expect.assertions(1);
    const api = new ApiClient();

    const result = await api.webPageCrawler.crawlPlayerDetails(TestUtils.DEFAULT_PLAYER_USN);
    logger.info(`Result returned:\n${TestUtils.prettifyObject(result)}`);

    expect(result).toBeDefined();
    done();
  });

});
