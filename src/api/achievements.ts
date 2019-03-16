import {
  Achievement,
  UserAchievementResponse,
  UserAchievement,
} from '../models';
import { ApiModule } from './base';

export class Achievements extends ApiModule {
  public async getAchievementList(): Promise<Achievement[]> {
    const response = await this.getHttpClient().get<Achievement[]>(
      'https://z8games.akamaized.net/cfna/templates/assets/js/user_achievement_data.json',
      {
        baseURL: undefined,
      },
    );
    return response.data;
  }

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
