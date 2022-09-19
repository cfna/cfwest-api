/**
 * Interface which represents a Login Cookie returned from Z8Games
 */
export interface LoginCookie {
  /**
   * Cookie name
   */
  name: string

  /**
   * Cookie value
   */
  value: string

  /**
   * Cookie domain
   */
  domain: string

  /**
   * Cookie path
   */
  path: string
  expires: number
}
