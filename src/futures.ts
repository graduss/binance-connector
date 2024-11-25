import APIBase from "@binance/connector/src/APIBase";
import {
  APIBaseOptions,
  EContractType,
  EInterval,
  TAggregateTrade,
  TCandlestickData,
  TExchangeInfo,
  TMarkPrice,
  TOrderBook,
  TRecentTrade,
  TResponce,
  TCancelOrder,
  TNewOrder,
  TOrder,
  TOpenPosition,
  TModifyOrder,
} from "./types";

export class Futures extends APIBase {
  constructor(apiKey = '', apiSecret = '', options: APIBaseOptions = {}) {
    options.baseURL = options.baseURL || 'https://fapi.binance.com';
    super({
      apiKey,
      apiSecret,
      ...options
    })
  }

  async newOrder( opt: TNewOrder ): Promise<TResponce<TOrder>> {
    return this.signRequest<TOrder>('POST', '/fapi/v1/order', opt);
  }

  async cancelOrder(opt: TCancelOrder): Promise<TResponce<TOrder>> {
    return this.signRequest('DELETE', '/fapi/v1/order', opt);
  }

  async modifyOrder(opt: TModifyOrder): Promise<TResponce<TOrder>> {
    return this.signRequest('PUT', '/fapi/v1/order', opt);
  }

  async positionInformationV3(opt: { symbol?: string; recvWindow?: number; timestamp: number }): Promise<TResponce<TOpenPosition[]>> {
    return this.signRequest<TOpenPosition[]>('GET', '/fapi/v3/positionRisk', opt);
  }

  async currentAllOpenOrders( opt: {symbol?: string; recvWindow?: number; timestamp: number}): Promise<TResponce<TOrder[]>> {
    return this.signRequest<TOrder[]>('GET', '/fapi/v1/openOrders', opt);
  }

  async ping (): Promise<TResponce<Object>> {
    return await this.publicRequest<Object>('GET', '/fapi/v1/ping');
  }

  async time (): Promise<TResponce<{serverTime: number}>> {
    return await this.publicRequest<{serverTime: number}>('GET', '/fapi/v1/time');
  }

  async exchangeInfo (): Promise<TResponce<TExchangeInfo>> {
    return await this.publicRequest<TExchangeInfo>('GET', '/fapi/v1/exchangeInfo');
  }

  async orderBook (symbol:string, limit:(5|10|20|50|100|500|1000) = 500): Promise<TResponce<TOrderBook>> {
    return await this.publicRequest<TOrderBook>('GET', '/fapi/v1/depth', { symbol, limit });
  }

  async recentTradesList(symbol:string, limit = 500 ): Promise<TResponce<TRecentTrade[]>> {
    return await this.publicRequest<TRecentTrade[]>('GET', '/fapi/v1/trades', { symbol, limit });
  }

  async oldTradesLookup(symbol:string, limit = 500, fromId?:number): Promise<TResponce<TRecentTrade[]>> {
    return await this.signRequest<TRecentTrade[]>('GET', '/fapi/v1/historicalTrades', { symbol, limit, fromId });
  }

  async aggregateTradesList(symbol:string, fromId?:number, startTime?:number, endTime?:number, limit = 500): Promise<TResponce<TAggregateTrade[]>> {
    return await this.signRequest<TAggregateTrade[]>("GET", "/fapi/v1/aggTrades", { symbol, fromId, startTime, endTime, limit });
  }

  async klineCandlestickData(symbol:string, interval:EInterval, startTime?:number, endTime?:number, limit = 500): Promise<TResponce<TCandlestickData[]>> {
    return this.publicRequest<TCandlestickData[]>("GET", "/fapi/v1/klines", { symbol, interval, startTime, endTime, limit });
  }

  async continuousContractKlineCandlestickData(
    pair:string,
    contractType: EContractType.PERPETUAL | EContractType.CURRENT_QUARTER | EContractType.NEXT_QUARTER,
    interval:EInterval,
    startTime?:number,
    endTime?:number,
    limit = 500
  ): Promise<TResponce<TCandlestickData[]>> {
    return await this.publicRequest<TCandlestickData[]>("GET", "/fapi/v1/continuousKlines", {
      pair,
      contractType,
      interval,
      startTime,
      endTime,
      limit
    })
  }

  async markPrice(): Promise<TResponce<TMarkPrice[]>>;
  async markPrice(symbol: string): Promise<TResponce<TMarkPrice>>;
  async markPrice(symbol?: string) {
    return this.publicRequest("GET", "/fapi/v1/premiumIndex", { symbol });
  }
}