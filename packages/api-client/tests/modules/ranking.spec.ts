jest.unmock('axios')

import ApiClient from '../../dist'
import * as TestUtils from '../utils'

jest.setTimeout(90000)

const logger = TestUtils.getLogger()

describe(TestUtils.formatTestSuiteTitle('Player/Clan Ranking'), () => {
  test('Ranking query should return result', async (done) => {
    expect.assertions(2)
    const api = new ApiClient()
    const result = await api.ranking.getPlayerRanking()
    expect(result).toBeDefined()
    expect(result!.length).toEqual(100)
    logger.debug(`Ranking Query results returned: ${result!.length} items.`)
    done()
  })
})
