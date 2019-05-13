import { requestHtmlPage } from './request-html';
import { WebPageParser } from './webpage-parser';
import { ApiClient } from '../api';
import { PlayerProfileInformation } from './parser-models';

export * from './webpage-parser';
export * from './parser-models';

export class HtmlParser {
  private readonly parser: WebPageParser;

  constructor(apiClient: ApiClient) {
    this.parser = new WebPageParser(apiClient);
  }

  public async parsePlayerData(
    usn: string,
  ): Promise<PlayerProfileInformation | undefined> {
    const html = await requestHtmlPage(usn, 'player');
    if (!html) {
      throw new Error("Couldn't fetch html data for target usn " + usn);
    }
    return await this.parser.parsePlayerData(html);
  }
}
