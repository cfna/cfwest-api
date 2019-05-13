export function stringToInt(str?: string, defaultValue: number = -1): number {
  if (!str) {
    return defaultValue;
  }
  const nr = parseInt(str, 10);
  if (nr && !isNaN(nr)) {
    return nr;
  }
  return defaultValue;
}
