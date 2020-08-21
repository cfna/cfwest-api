jest.unmock('axios');

import ApiClient, { UserProfileResponse } from '../../dist';
import * as TestUtils from '../utils';

jest.setTimeout(90000);

const logger = TestUtils.getLogger();

describe(TestUtils.formatTestSuiteTitle('UserProfile'), () => {
  test('User profile query should return result', async (done) => {
    expect.assertions(1);
    const api = new ApiClient();
    const result: UserProfileResponse = await api.userProfile.getUserProfile('1');
    expect(result).toBeDefined();

    logger.info(`Requested profile information for user: ${result.dsProfileDetails[0].DISPLAY_NAME}`);

    done();
  });
});
