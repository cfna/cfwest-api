import { ApiModule } from './base';
import { ApiClient } from '.';
import { HtmlParser, PlayerProfileInformation } from '../html';

export class WebPageCrawler extends ApiModule {
  private readonly htmlParser: HtmlParser;

  constructor(apiClient: ApiClient) {
    super(apiClient);
    this.htmlParser = new HtmlParser(apiClient);
  }

  public async crawlPlayerDetails(
    usn: string,
  ): Promise<PlayerProfileInformation | undefined> {
    return await this.htmlParser.parsePlayerData(usn);
  }

  // TODO: add implementation for clan details
}
