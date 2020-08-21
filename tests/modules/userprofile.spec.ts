jest.unmock('axios')

import ApiClient, { UserProfileResponse, UserProfileHeaderResponse } from '../../src'
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

  test('User profile header query should return result', async (done) => {
    expect.assertions(3)

    const api = new ApiClient()
    const result: UserProfileHeaderResponse | undefined = await api.userProfile.getUserProfileHeader('1')

    expect(result).toBeDefined()
    expect(result!.dsProfileHeaderInfo.length).toEqual(1)
    expect(result!.dsProfileHeaderInfo[0].NICK).toBeDefined()

    done()
  })
})
