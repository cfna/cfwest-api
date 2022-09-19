import util from 'util'
import winston from 'winston'
import fs from 'fs'
import path from 'path'

export const DEFAULT_PLAYER_USN = '1' // Profile of #Grumpy (Highest Admin)
export const MINIMUM_WEAPON_COLLECTION_SIZE = 90 // minimum expected amount of results for queried collections

export const API_MODULE_TEST_SUITE_TITLE = 'ApiModule Tests for '

export function formatTestSuiteTitle(moduleName: string): string {
  return `${API_MODULE_TEST_SUITE_TITLE} ${moduleName}`
}

export interface InspectCallback {
  onResult?: (result: string) => void
  onError?: (error: Error) => void
}

export class PickConfig {
  everyItem: number = 1
}

const logger = winston.createLogger({
  exitOnError: false,
  transports: [new winston.transports.Console()],
  format: winston.format.combine(winston.format.colorize({ all: true }), winston.format.simple())
})

export function getLogger(): winston.Logger {
  return logger
}

export function inspectObject(obj?: any, cb?: InspectCallback) {
  if (!obj) {
    if (cb && cb.onError) {
      cb.onError(new Error('No input object provided!'))
    }
    return
  }
  const result = util.inspect(obj, false, null, true)
  if (cb && cb.onResult) {
    cb.onResult(result)
  }
  return
}

export function pickFromArray<T>(data: T[], config: PickConfig): T[] {
  const stepSize = config.everyItem
  const results: T[] = []
  for (let i = 0; i < data.length; i += stepSize) {
    if (stepSize < data.length) {
      const item = data[i]
      if (item) {
        results.push(item)
      }
    }
  }
  return results
}

export function pickRandomFromArray<T>(array: T[]): T {
  return array[Math.floor(Math.random() * array.length)]
}

export async function loadWeaponCollectionData(dataType: CollectionDataType): Promise<string[] | number[]> {
  const jsonFile = path.resolve(process.cwd(), __dirname, 'weapon_collections.json')
  logger.debug(`Loading JSON Data from: ${jsonFile}`)

  try {
    const fileExists = await fs.existsSync(jsonFile)
    if (!fileExists) {
      logger.warn(`Unable to find 'weapon_collections.json'! Expected Location: ${jsonFile}`)
      return []
    }
    const content = await fs.readFileSync(jsonFile, { encoding: 'utf8' })
    const contentObject = await JSON.parse(content)
    if (contentObject && contentObject.collectionNames && contentObject.collectionIdentifiers) {
      if (dataType === 'names') {
        return contentObject.collectionNames as string[]
      } else if (dataType === 'ids') {
        return contentObject.collectionIdentifiers as number[]
      }
    } else {
      logger.warn(`Parsed json object is either undefined or doesn't have property 'collectionNames' !`)
    }
  } catch (error) {
    logger.error(error)
  }
  // in case of an error an empty array is returned to avoid unnecessary definment checks
  return []
}

export type CollectionDataType = 'names' | 'ids'

export function getIndexForCollectionName(collectionName: string, collections: string[]): number {
  let target = -1
  collections.forEach((name, index) => {
    if (name === collectionName) {
      target = index
    }
  })
  return target
}
