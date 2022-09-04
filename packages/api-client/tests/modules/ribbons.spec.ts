jest.unmock('axios')

import ApiClient from '../../src'
import * as TestUtils from '../utils'

jest.setTimeout(90000)

const logger = TestUtils.getLogger()

describe(TestUtils.formatTestSuiteTitle('Ribbons'), () => {
  test('Ribbon List should not be empty', async () => {
    expect.assertions(2)
    const api = new ApiClient()
    const result = await api.ribbons.getRibbonList()
    expect(result).toBeDefined()
    expect(result!.length).toBeGreaterThan(0)
    logger.debug(`Ribbon List results returned: ${result!.length} items.`)

    const targets = TestUtils.pickFromArray(result!, {
      everyItem: 8
    })

    targets.map((item) => {
      TestUtils.inspectObject(item, {
        onError: (error: Error) => {
          logger.error(error)
        },
        onResult: (res: string) => {
          logger.info(res)
        }
      })
    })
  })
})
