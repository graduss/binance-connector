// src/index.ts
export * from "@binance/connector";

// src/futures.ts
import APIBase from "@binance/connector/src/APIBase";
var Futures = class extends APIBase {
  constructor(apiKey = "", apiSecret = "", options = {}) {
    options.baseURL = options.baseURL || "https://fapi.binance.com";
    super({
      apiKey,
      apiSecret,
      ...options
    });
  }
  async newOrder(opt) {
    return this.signRequest("POST", "/fapi/v1/order", opt);
  }
  async cancelOrder(opt) {
    return this.signRequest("DELETE", "/fapi/v1/order", opt);
  }
  async modifyOrder(opt) {
    return this.signRequest("PUT", "/fapi/v1/order", opt);
  }
  async positionInformationV3(opt) {
    return this.signRequest("GET", "/fapi/v3/positionRisk", opt);
  }
  async currentAllOpenOrders(opt) {
    return this.signRequest("GET", "/fapi/v1/openOrders", opt);
  }
  async ping() {
    return await this.publicRequest("GET", "/fapi/v1/ping");
  }
  async time() {
    return await this.publicRequest("GET", "/fapi/v1/time");
  }
  async exchangeInfo() {
    return await this.publicRequest("GET", "/fapi/v1/exchangeInfo");
  }
  async orderBook(symbol, limit = 500) {
    return await this.publicRequest("GET", "/fapi/v1/depth", { symbol, limit });
  }
  async recentTradesList(symbol, limit = 500) {
    return await this.publicRequest("GET", "/fapi/v1/trades", { symbol, limit });
  }
  async oldTradesLookup(symbol, limit = 500, fromId) {
    return await this.signRequest("GET", "/fapi/v1/historicalTrades", { symbol, limit, fromId });
  }
  async aggregateTradesList(symbol, fromId, startTime, endTime, limit = 500) {
    return await this.signRequest("GET", "/fapi/v1/aggTrades", { symbol, fromId, startTime, endTime, limit });
  }
  async klineCandlestickData(symbol, interval, startTime, endTime, limit = 500) {
    return this.publicRequest("GET", "/fapi/v1/klines", { symbol, interval, startTime, endTime, limit });
  }
  async continuousContractKlineCandlestickData(pair, contractType, interval, startTime, endTime, limit = 500) {
    return await this.publicRequest("GET", "/fapi/v1/continuousKlines", {
      pair,
      contractType,
      interval,
      startTime,
      endTime,
      limit
    });
  }
  async markPrice(symbol) {
    return this.publicRequest("GET", "/fapi/v1/premiumIndex", { symbol });
  }
};
export {
  Futures
};
