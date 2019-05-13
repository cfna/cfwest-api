import axios from 'axios';

const CLAN_BASE_URL = 'http://crossfire.z8games.com/clan/';
const PLAYER_BASE_URL = 'http://crossfire.z8games.com/profile/';

export type RequestUrlType = 'clan' | 'player';

function buildRequestUrl(target: string, type: RequestUrlType): string {
  if (type === 'clan') {
    return CLAN_BASE_URL + target;
  } else {
    return PLAYER_BASE_URL + target;
  }
}

export async function requestHtmlPage(
  target: string,
  type: RequestUrlType,
): Promise<string | undefined> {
  const url = buildRequestUrl(target, type);
  const response = await axios.get(url);
  if (response && response.status === 200) {
    return response.data;
  }
  return undefined;
}
