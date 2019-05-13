// tslint:disable: parameters-max-number
import { PlayerProfileInformation } from './parser-models';
import { convertTimestamp, stringToInt } from '../utils';

// tslint:disable-next-line:max-line-length
export function createPlayerProfileInformation(
  _lastSeen?: string,
  _kills?: string,
  _deaths?: string,
  _headshots?: string,
  _wins?: string,
  _defeats?: string,
  _exp?: string,
  _gamesPlayed?: string,
  _registrationDate?: string,
): PlayerProfileInformation {
  return {
    lastSeen: convertTimestamp(_lastSeen),
    kills: stringToInt(_kills),
    deaths: stringToInt(_deaths),
    headshots: stringToInt(_headshots),
    wins: stringToInt(_wins),
    defeats: stringToInt(_defeats),
    exp: stringToInt(_exp),
    gamesPlayed: stringToInt(_gamesPlayed),
    registrationDate: convertTimestamp(_registrationDate),
  };
}
