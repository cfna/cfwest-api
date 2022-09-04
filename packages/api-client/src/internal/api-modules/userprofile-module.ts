import { BaseApiModule } from './base-module'
import { UserProfileResponse, UserProfileHeaderResponse, UserProfileHeaderInfoEntry } from '../rest-models/userprofile'

export class UserProfileApiModule extends BaseApiModule {
  public async getUserProfile(playerUsn: string): Promise<UserProfileResponse | undefined> {
    const response = await this.httpClient.get<UserProfileResponse>('userprofile.json', {
      params: {
        usn: playerUsn
      }
    })

    return response
  }

  public async getUserProfileHeader(playerUsn: string): Promise<UserProfileHeaderResponse | undefined> {
    const response = await this.httpClient.get<UserProfileHeaderResponse>('userprofile.json', {
      params: {
        usn: playerUsn,
        command: 'header'
      }
    })

    return response
  }
}
