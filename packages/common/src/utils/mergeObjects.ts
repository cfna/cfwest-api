import merge from 'lodash.merge'

export function mergeObjects<T>(first: T, second: T): T {
  return merge({}, first, second)
}
