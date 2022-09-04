import { WeaponCategory } from '../rest-models'

export interface WeaponCategoryMapper {
  mapWeaponCategoryNameToIndex(category: WeaponCategory): number
  mapWeaponCategoryIndexToName(categoryIndex: number): WeaponCategory | undefined
}

export class WeaponCategoryMapperImpl implements WeaponCategoryMapper {
  private readonly mappings = new Map<WeaponCategory, number>([
    ['assault', 1],
    ['sniper', 2],
    ['smg', 3],
    ['mg', 4],
    ['shotgun', 5],
    ['pistol', 6],
    ['melee', 7],
    ['grenade', 8]
  ]);

  mapWeaponCategoryNameToIndex(category: WeaponCategory): number {
    return this.mappings.get(category) || -1
  }

  mapWeaponCategoryIndexToName(categoryIndex: number): WeaponCategory | undefined {
    this.mappings.forEach((index, categoryName) => {
      if (index === categoryIndex) {
        return categoryName
      }
    })
    return undefined
  }
}
