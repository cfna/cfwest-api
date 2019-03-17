import {
  Achievement,
  UserAchievementResponse,
  UserAchievement,
} from '../models';
import { ApiModule } from './base';

/**
 * ApiModule to handle everything related _'Achievements'_ related implementation.
 * For more details about ApiModules see: [[ApiModule]]
 */
export class Achievements extends ApiModule {
  /**
   * Query for a complete list of all available achievements.
   *
   * @returns A Promise which should be resolved into [[Achievement]]s.
   */
  public async getAchievementList(): Promise<Achievement[]> {
    const response = await this.getHttpClient().get<Achievement[]>(
      'https://z8games.akamaized.net/cfna/templates/assets/js/user_achievement_data.json',
      {
        baseURL: undefined,
      },
    );
    return response.data;
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
  public async getUserAchievements(
    playerUSN: string,
  ): Promise<UserAchievement[]> {
    const response = await this.getHttpClient().get<UserAchievementResponse>(
      'userachievements.json',
      {
        params: {
          usn: playerUSN,
        },
      },
    );
    return response.data.Achievements;
  }
}
