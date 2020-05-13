import { ApiModule } from './base';
import { LottoEvent as Lotto } from '../models';

export class LottoEvent extends ApiModule {
  public async getLottoEventWinners(forDate: string): Promise<Lotto.WinnerInfo[]> {
    const response = await this.httpClient.get<Lotto.Response>('lottoevent.json', {
      params: {
        date: forDate,
      },
    });
    return response.data.list;
  }

  public async getLatestWinner(forDate: string): Promise<Lotto.WinnerInfo> {
    const response = await this.httpClient.get<Lotto.Response>('lottoevent.json', {
      params: {
        date: forDate,
      },
    });
    return response.data.lastwinner[0];
  }
}
