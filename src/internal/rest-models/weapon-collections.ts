export const WeaponCollections = new Map<string, number>([
  ['Cursed Halloween', 79],
  ['Graffiti', 73],
  ['Slay Bells', 85],
  ['Bewitched Halloween', 76],
  ['Cardinal', 90],
  ['Mistle Toe', 84],
  ['Xmas Gift', 87],
  ['Red Volt', 70],
  ['Hornet', 93],
  ['Candyland', 82],
  ['Snowflake', 88],
  ['Elite', 97],
  ['Golden Camo', 68],
  ['Beasts of Prey', 80],
  ['Spooky Halloween', 74],
  ['Candy Heart', 91],
  ['Festivus', 83],
  ['Chroma 2', 71],
  ['Horus', 94],
  ['Wicked Halloween', 77],
  ['Proton', 81],
  ['Empire', 96],
  ['Excavator', 72],
  ['Armored Beasts', 89],
  ['Possessed Halloween', 78],
  ['Winterbolt', 86],
  ['Ronove', 66],
  ['Haunted Halloween', 75],
  ['Ferocious Dragon', 95],
  ['Blue Silver Dragon', 92],
  ['Celestial Dragon', 98],
  ['Burnt Metal', 69],
  ['Glorious Phoenix', 63],
  ['Noble Beasts', 41],
  ['Blue Dawn', 62],
  ['Eternal Dragons', 58],
  ['Chroma', 54],
  ['Obsidian Beasts', 15],
  ['Iron Beasts', 13],
  ['Infernal Dragons', 12],
  ['Fury Beasts', 11],
  ['Bronze', 55],
  ['NeonPink', 61],
  ['Gingerbread', 57],
  ['TrickNTreat', 56],
  ['Vulcan', 53],
  ['Ancient Dragons', 6],
  ['Red Dragons', 19],
  ['Royal Dragons', 20],
  ['Imperial Dragons', 5],
  ['Divine Dragons', 10],
  ['Legendary Dragons', 14],
  ['Gold Black Dragons', 25],
  ['Ares', 7],
  ['Rebel', 18],
  ['Razer', 17],
  ['Blue Pottery', 8],
  ['Jade', 24],
  ['Golden Peony', 26],
  ['Golden Phoenix', 33],
  ['Rio', 27],
  ['Zodiac', 28],
  ['Valentine', 29],
  ['Candy Cane', 9],
  ['Spider Web', 31],
  ['Octane Camo', 32],
  ['Octagon Camo', 16],
  ['Crimson', 34],
  ['Sun Wukong', 35],
  ['Turtle Shell', 36],
  ['Magma', 37],
  ['Phoenix', 38],
  ['Stripes', 39],
  ['Rusty', 40],
  ['Blue Sapphire', 30],
  ['Abstract', 42],
  ['CF West Exclusive', 43],
  ['Frost', 44],
  ['Hearts', 45],
  ['Khokhloma', 46],
  ['Urban', 47],
  ['Zephyr', 48],
  ['Hexagon', 49],
  ['Leopard', 50],
  ['PurpleGreen', 51],
  ['Red Eagle', 59],
  ['Carbonized', 60],
  ['Scorched Beasts', 65],
  ['Prime Beasts', 64],
  ['Vulcan 9th', 67]
])

export class WeaponCollectionUtils {
  public static getCollectionId(collectionName: string): number {
    const input = collectionName.trim().toLowerCase()
    for (const [name, id] of WeaponCollections) {
      if (name.trim().toLowerCase() === input) {
        return id
      }
    }
    // -1 indicates an invalid result - most likely because the input name doesn't match a collection's one.
    return -1
  }

  public static getCollectionName(collectionID: number): string | undefined {
    for (const [name, id] of WeaponCollections) {
      if (id === collectionID) {
        return name
      }
    }
    return undefined
  }

  public static isValidCollectionId(collectionID: number): boolean {
    for (const [, id] of WeaponCollections) {
      if (id === collectionID) {
        return true
      }
    }
    return false
  }
}
