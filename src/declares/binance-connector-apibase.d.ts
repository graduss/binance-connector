// import { TRequestParams, TResponce } from "../types";

type TRequestParams = {
  [kry: string]: string | number | undefined | boolean;
};

declare module "@binance/connector/src/APIBase" {
  export default class APIBase {
    constructor(options: {
      apiKey?:string,
      apiSecret?:string,
      baseURL?: string,
      timeout?:number,
      proxy?: boolean
    })
    
    async publicRequest<T>(method:string, path:string, params: TRequestParams = {}): Promise<TResponce<T>>

    async signRequest<T>(method:string, path:string, params: TRequestParams = {}): Promise<TResponce<T>>
  }
}