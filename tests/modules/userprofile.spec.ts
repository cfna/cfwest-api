jest.unmock('axios')

import ApiClient, { UserProfileResponse } from '../../src'
import * as TestUtils from '../utils'

jest.setTimeout(90000)

const logger = TestUtils.getLogger()

describe(TestUtils.formatTestSuiteTitle('UserProfile'), () => {
  test('User profile query should return result', async (done) => {
    expect.assertions(2)
    const api = new ApiClient()
    const result: UserProfileResponse | undefined = await api.userProfile.getUserProfile('1')
    expect(result).toBeDefined()
    expect(result!.dsProfileDetails.length).toEqual(1)

    done()
  })
})
