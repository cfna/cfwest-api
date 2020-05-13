import axios, { AxiosInstance } from 'axios';
import winston from 'winston';
import { WebShop } from './webshop';
import { Ranking } from './ranking';
import { Events } from './events';
import { Updates } from './updates';
import { LottoEvent } from './lottoevent';
import { ErrorHandler } from '../error';
import { Achievements } from './achievements';
import { Ribbons } from './ribbons';
import { UserWeapons } from './userweapons';
import { ApiModule } from './base';

const apiClient = axios.create({
  baseURL: 'http://crossfire.z8games.com/rest',
  headers: {
    Accept: 'application/json, text/plain, */*',
    'Accept-Encoding': 'gzip, deflate',
    'Accept-Language': 'en-US,en;q=0.9,de;q=0.8',
    Host: 'crossfire.z8games.com',
    Referer: 'http://crossfire.z8games.com/playerranking.html',
    'User-Agent':
      'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.109 Safari/537.36',
  },
});

const logger = winston.createLogger({
  exitOnError: false,
  transports: [new winston.transports.Console()],
  format: winston.format.combine(winston.format.colorize({ all: true }), winston.format.simple()),
});

/**
 * This class is the core component to communicate with [CrossFire West](https://crossfire.z8games.com/) Services.
 */
export class ApiClient {
  public readonly webshop: WebShop;
  public readonly ranking: Ranking;
  public readonly events: Events;
  public readonly lottoEvent: LottoEvent;
  public readonly updates: Updates;
  public readonly achievements: Achievements;
  public readonly ribbons: Ribbons;
  public readonly userWeapons: UserWeapons;

  public constructor() {
    const moduleOptions: ApiModule.Options = {
      httpClient: apiClient,
      errorHandler: new ErrorHandler({ logger }),
    };

    this.webshop = new WebShop(moduleOptions);
    this.ranking = new Ranking(moduleOptions);
    this.events = new Events(moduleOptions);
    this.lottoEvent = new LottoEvent(moduleOptions);
    this.updates = new Updates(moduleOptions);
    this.achievements = new Achievements(moduleOptions);
    this.ribbons = new Ribbons(moduleOptions);
    this.userWeapons = new UserWeapons(moduleOptions);
  }
}
