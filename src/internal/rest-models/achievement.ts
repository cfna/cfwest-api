import { BaseResponse } from './base'

export interface UserAchievementResponse extends BaseResponse {
  usn: number
  nick: string
  User_Achievements_Count: number
  Total_Achievements_Count: number
  Achievements: UserAchievement[]
}

export interface UserAchievement {
  USN: number
  MAIN_INDEX: number
  CURRENT_STAGE: number
  TOTAL_STAGE: number
}

export interface Achievement {
  Min: number
  Max: number
  Display_Name: string
  Description: string
  Rewards: string
  Lvl_1_Name: string
  Lvl_2_Name: string
  Lvl_3_Name: string
  Lvl_4_Name: string
  Lvl_5_Name: string
  achievementID: number
  bkgnd_position: number
  image_file: string
  achievement_type: Achievement.Type
}

export namespace Achievement {
  export type Type = 'combat' | 'limited' | 'system'
}
