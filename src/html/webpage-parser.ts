import cheerio from 'cheerio';
import { Logger } from 'winston';
import { ApiClient } from '../api';
import { prettifyObject } from '../utils';
import { ErrorHandler } from '../error';
import { PlayerProfileInformation } from './parser-models';
import { createPlayerProfileInformation } from './data-mappings';

export namespace WebPageParser {
  export interface QueryOptions {
    selectQuery: string;
    attrName: string;
    elementsAttributeFilter?: string;
  }
}

export class WebPageParser {
  private readonly errorHandler: ErrorHandler;
  private readonly logger: Logger;

  constructor(apiClient: ApiClient) {
    this.errorHandler = apiClient._errorHandler;
    this.logger = apiClient._logger;
  }

  private handleError(error?: Error) {
    this.errorHandler.handleError(error);
  }

  private getValueFromDocument(
    $: CheerioStatic,
    options: WebPageParser.QueryOptions,
  ): string | undefined {
    const { selectQuery, attrName, elementsAttributeFilter } = options;
    const useAttributeFilter =
      elementsAttributeFilter !== undefined && elementsAttributeFilter !== null;

    try {
      if (useAttributeFilter) {
        // TODO: add attribute filter functionality (?)
      }
      const data = $(selectQuery)
        .first()
        .attr(attrName);
      this.logger.info(`Extracted Value: ${data}`);
      return data;
    } catch (error) {
      this.handleError(error);
    }
    return undefined;
  }

  private parseProfilePage(html: string): PlayerProfileInformation {
    const $ = cheerio.load(html);
    // tslint:disable-next-line: no-commented-code
    // const killsByWeapon = $('div [data-killsbyweapons]').first().attr('data-typevals');
    const lastSeen = $('div.clanname [data-lastseentime]')
      .first()
      .attr('data-date');
    const totalKills = $('div [data-generaltab]')
      .first()
      .attr('data-kills');
    const totalDeaths = $('div [data-generaltab]')
      .first()
      .attr('data-deaths');
    const totalHeadshots = $('div [data-generaltab]')
      .first()
      .attr('data-headshots');
    const totalWins = $('div [data-generaltab]')
      .first()
      .attr('data-wins_victories');
    const totalDefeats = $('div [data-generaltab]')
      .first()
      .attr('data-defeats');
    const totalExp = $('div [data-generaltab]')
      .first()
      .attr('data-exp_points');
    const totalGamesPlayed = $('div [data-generaltab]')
      .first()
      .attr('data-games_played');
    const registrationDate = $('div [data-generaltab]')
      .first()
      .attr('data-reg_date');
    // tslint:disable-next-line:max-line-length
    return createPlayerProfileInformation(
      lastSeen,
      totalKills,
      totalDeaths,
      totalHeadshots,
      totalWins,
      totalDefeats,
      totalExp,
      totalGamesPlayed,
      registrationDate,
    );
  }

  public async parsePlayerData(
    html: string,
  ): Promise<PlayerProfileInformation | undefined> {
    const profileInfo = this.parseProfilePage(html);
    this.logger.info(
      `PlayerProfileInformation: ${prettifyObject(profileInfo)}`,
    );
    return profileInfo;
  }
}
