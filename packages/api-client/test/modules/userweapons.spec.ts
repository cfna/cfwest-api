jest.unmock('axios')

import ApiClient, { WeaponCategory } from '../../src'
import * as TestUtils from '../utils'

jest.setTimeout(90000)

const logger = TestUtils.getLogger()

describe(TestUtils.formatTestSuiteTitle('UserWeapons'), () => {
  test('User weapons query should return result', async () => {
    expect.assertions(2)
    const api = new ApiClient()
    const result = await api.userWeapons.getUserWeapons(TestUtils.DEFAULT_PLAYER_USN, 'sniper', 'permanent', 1, 10)
    expect(result).toBeDefined()
    expect(result!.length).toBeGreaterThanOrEqual(10)
    result!.map((weapon, index) => {
      const number = ++index
      logger.debug(`#${number} => ${weapon.DISPLAY_NAME}`)
    })
  })
})
