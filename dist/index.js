"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __reExport = (target, mod, secondTarget) => (__copyProps(target, mod, "default"), secondTarget && __copyProps(secondTarget, mod, "default"));
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  Futures: () => Futures
});
module.exports = __toCommonJS(src_exports);
__reExport(src_exports, require("@binance/connector"), module.exports);

// src/futures.ts
var import_APIBase = __toESM(require("@binance/connector/src/APIBase"));
var Futures = class extends import_APIBase.default {
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Futures,
  ...require("@binance/connector")
});
