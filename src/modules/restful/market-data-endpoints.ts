import APIBase from "@binance/connector/src/APIBase";
import { constructor } from ".";
import { TExchangeInfo, TOrderBook } from "../../types";

export function MarketDataEndpoints<TBase extends constructor<APIBase>>(Supperclass: TBase) {
  return class MarketDataEndpoints extends Supperclass {
    async ping () {
      return await this.publicRequest<Object>('GET', '/fapi/v1/ping');
    }
  
    async time () {
      return await this.publicRequest<{serverTime: number}>('GET', '/fapi/v1/time')
    }

    async exchangeInfo () {
      return await this.publicRequest<TExchangeInfo>('GET', '/fapi/v1/exchangeInfo');
    }

    async orderBook (symbol:string, limit:(5|10|20|50|100|500|1000) = 500) {
      return await this.publicRequest<TOrderBook>('GET', '/fapi/v1/depth', {symbol,limit})
    }
  }
}