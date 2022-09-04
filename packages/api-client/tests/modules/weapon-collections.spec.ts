jest.unmock('axios')

import ApiClient, { WeaponCollectionUtils } from '../../src'
import * as TestUtils from '../utils'

jest.setTimeout(90000)

const logger = TestUtils.getLogger()

describe(TestUtils.formatTestSuiteTitle('Weapon Collections'), () => {
  test('User collections query should return result', async () => {
    expect.assertions(2)
    const api = new ApiClient()
    const result = await api.userWeapons.getUserCollections(TestUtils.DEFAULT_PLAYER_USN)

    logger.debug(`=> Total collections found: ${result!.length}`)

    expect(result).toBeDefined()
    expect(result!.length).toBeGreaterThanOrEqual(TestUtils.MINIMUM_WEAPON_COLLECTION_SIZE)

  })

  test('It should find the matching Collection ID for the given nanme', async () => {
    expect.assertions(8)
    // const inputs = [ 'Hexagon', 'Leopard', 'Vulcan 9th'];
    const inputNames: string[] = ((await TestUtils.loadWeaponCollectionData('names')) as unknown) as string[]
    const inputIds: number[] = ((await TestUtils.loadWeaponCollectionData('ids')) as unknown) as number[]

    expect(inputNames).toBeDefined()
    expect(inputNames.length).toBeGreaterThanOrEqual(TestUtils.MINIMUM_WEAPON_COLLECTION_SIZE)

    expect(inputIds).toBeDefined()
    expect(inputIds.length).toBeGreaterThanOrEqual(TestUtils.MINIMUM_WEAPON_COLLECTION_SIZE)

    const target = TestUtils.pickRandomFromArray(inputNames)
    const targetIndex = TestUtils.getIndexForCollectionName(target, inputNames)
    logger.debug(`Resolved index for '${target}' is ${targetIndex}`)

    const resolvedIdentifier = inputIds[targetIndex]

    logger.debug(`Testing collections utility using: '${target}' (resolved id should be ${resolvedIdentifier})`)

    const targetID = WeaponCollectionUtils.getCollectionId(target)
    logger.debug(`Collection ID for '${target}': ${targetID}`)

    expect(targetID).not.toEqual(-1)
    expect(targetID).toEqual(resolvedIdentifier)

    const targetName = WeaponCollectionUtils.getCollectionName(targetID)
    expect(targetName).not.toBeUndefined()

    const checkTarget = WeaponCollectionUtils.isValidCollectionId(targetID)
    expect(checkTarget).toBeTruthy()

  })
})
