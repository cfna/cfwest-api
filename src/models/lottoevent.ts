import { BaseResponse } from '.';

export namespace LottoEvent {

  export interface Response extends BaseResponse {
    lastwinner: LottoEvent.WinnerInfo[];
    list: LottoEvent.WinnerInfo[];
  }

  export interface WinnerInfo {
    IGN: string;
    DATETIME: string;
  }

}
