export interface BaseResponse {
    APIresult: string;
    APImessage: string;
}

export interface CountableResponse extends BaseResponse {
    Total_Count: number;
    Count: number;
}
