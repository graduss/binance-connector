import APIBase from "@binance/connector/src/APIBase";

import { 
  MarketDataEndpoints,
} from './modules/restful';

const Mixins = MarketDataEndpoints(APIBase);

export class Futures extends Mixins {
  constructor(apiKey = '', apiSecret = '', options:APIBaseOptions = {}) {
    options.baseURL = options.baseURL || 'https://fapi.binance.com';
    super({
      apiKey,
      apiSecret,
      ...options
    })
  }
}