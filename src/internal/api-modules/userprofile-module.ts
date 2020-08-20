import { BaseApiModule } from './base-module';
import { UserProfileResponse } from 'internal/rest-models/userprofile';

export class UserProfileModule extends BaseApiModule {
  public async getUserProfile(usn: string): Promise<UserProfileResponse | undefined> {
    const response = await this.httpClient.get<UserProfileResponse>('userprofile.json', {
      params: {
        usn
      }
    });

    return response;
  }
}
