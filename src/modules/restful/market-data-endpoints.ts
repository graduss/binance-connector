import APIBase from "@binance/connector/src/APIBase";
import { constructor } from ".";
import { EContractType, EInterval, TAggregateTrade, TCandlestickData, TExchangeInfo, TOrderBook, TRecentTrade } from "../../types";

export function MarketDataEndpoints<TBase extends constructor<APIBase>>(Supperclass: TBase) {
  return class MarketDataEndpoints extends Supperclass {
    async ping () {
      return await this.publicRequest<Object>('GET', '/fapi/v1/ping');
    }
  
    async time () {
      return await this.publicRequest<{serverTime: number}>('GET', '/fapi/v1/time');
    }

    async exchangeInfo () {
      return await this.publicRequest<TExchangeInfo>('GET', '/fapi/v1/exchangeInfo');
    }

    async orderBook (symbol:string, limit:(5|10|20|50|100|500|1000) = 500) {
      return await this.publicRequest<TOrderBook>('GET', '/fapi/v1/depth', { symbol, limit });
    }

    async recentTradesList(symbol:string, limit = 500 ) {
      return await this.publicRequest<TRecentTrade[]>('GET', '/fapi/v1/trades', { symbol, limit });
    }

    async oldTradesLookup(symbol:string, limit = 500, fromId?:number) {
      return await this.signRequest<TRecentTrade[]>('GET', '/fapi/v1/historicalTrades', { symbol, limit, fromId });
    }

    async aggregateTradesList(symbol:string, fromId?:number, startTime?:number, endTime?:number, limit = 500) {
      return await this.signRequest<TAggregateTrade[]>("GET", "/fapi/v1/aggTrades", { symbol, fromId, startTime, endTime, limit });
    }

    async klineCandlestickData(symbol:string, interval:EInterval, startTime?:number, endTime?:number, limit = 500) {
      return this.publicRequest<TCandlestickData[]>("GET", "/fapi/v1/klines", { symbol, interval, startTime, endTime, limit });
    }

    async continuousContractKlineCandlestickData(
      pair:string,
      contractType: EContractType.PERPETUAL | EContractType.CURRENT_QUARTER | EContractType.NEXT_QUARTER,
      interval:EInterval,
      startTime?:number,
      endTime?:number,
      limit = 500
    ) {
      return await this.publicRequest<TCandlestickData[]>("GET", "/fapi/v1/continuousKlines", {
        pair,
        contractType,
        interval,
        startTime,
        endTime,
        limit
      })
    }
  }
}