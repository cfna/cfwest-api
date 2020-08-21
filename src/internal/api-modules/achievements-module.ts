import { Achievement, UserAchievementResponse, UserAchievement } from '../rest-models'
import { BaseApiModule } from './base-module'

/**
 * ApiModule to handle everything related _'Achievements'_ related implementation.
 * For more details about ApiModules see: [[ApiModule]]
 */
export class AchievementsApiModule extends BaseApiModule {
  /**
   * Query for a complete list of all available achievements.
   *
   * @returns A Promise which should be resolved into [[Achievement]]s.
   */
  public async getAchievementList(): Promise<Achievement[] | undefined> {
    return this.httpClient.get<Achievement[]>(
      'https://z8games.akamaized.net/cfna/templates/assets/js/user_achievement_data.json',
      {
        baseURL: undefined
      }
    )
  }

  /**
   * Query a specific player's achievements.
   *
   * @param playerUSN The target player USN
   *
   * @see [[Achievement]]
   * @see [[UserAchievement]]
   *
   * @returns A promise which resolves into an array of all [[UserAchievement]]s
   */
  public async getUserAchievements(playerUSN: string): Promise<UserAchievement[] | undefined> {
    const response = await this.httpClient.get<UserAchievementResponse>('userachievements.json', {
      params: {
        usn: playerUSN
      }
    })
    return response?.Achievements
  }
}
