jest.unmock('axios')

import { default as ApiClient, WeaponCategory, WeaponCollections, WeaponCollectionUtils } from '../src'
import * as TestUtils from './utils'

jest.setTimeout(90000)

const logger = TestUtils.getLogger()

describe('CrossFire ApiClient Module Tests', () => {
  test('Create new ApiClient instance', () => {
    const api = new ApiClient()
    expect(api).toBeDefined()
    expect(api).toBeInstanceOf(ApiClient)
  })
})
