import axios, { AxiosInstance } from 'axios';
import winston from 'winston';
import { performLogin } from './login';
import { WebShop } from './webshop';
import { Ranking } from './ranking';
import { Events } from './events';
import { Updates } from './updates';
import { LottoEvent } from './lottoevent';
import { ErrorHandler } from '../error';
import { Achievements } from './achievements';
import { Ribbons } from './ribbons';

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
  format: winston.format.combine(
    winston.format.colorize({ all: true }),
    winston.format.simple(),
  ),
});

export class ApiClient {
  readonly _api: AxiosInstance;
  readonly _errorHandler: ErrorHandler;
  readonly _logger: winston.Logger;

  public readonly webshop: WebShop;
  public readonly ranking: Ranking;
  public readonly events: Events;
  public readonly lottoEvent: LottoEvent;
  public readonly updates: Updates;
  public readonly achievements: Achievements;
  public readonly ribbons: Ribbons;

  public constructor() {
    this._api = apiClient;
    this._logger = logger;
    this._errorHandler = new ErrorHandler(this);
    this.webshop = new WebShop(this);
    this.ranking = new Ranking(this);
    this.events = new Events(this);
    this.lottoEvent = new LottoEvent(this);
    this.updates = new Updates(this);
    this.achievements = new Achievements(this);
    this.ribbons = new Ribbons(this);
  }

  public async login(id: string, password: string) {
    const response = await performLogin(id, password);
    return response;
  }
}
