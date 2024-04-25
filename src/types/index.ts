import {
  TPriceFilter,
  TLotSizeFilter,
  TMarketLotSizeFilter,
  TMaxNumOrderFilter,
  TMaxNumAlgoOrderFilter,
  TMinNotionalFilter,
  TPercentPriceFilter,
} from './filter.type';

export enum ERateLimitIntervals {
  MINUTE = "MINUTE" 
};

export enum ERateLimitType {
  REQUEST_WEIGHT = "REQUEST_WEIGHT",
  ORDERS = "ORDERS"
}

export enum EContractType {
  PERPETUAL = "PERPETUAL",
  CURRENT_MONTH = "CURRENT_MONTH",
  NEXT_MONTH = "NEXT_MONTH",
  CURRENT_QUARTER = "CURRENT_QUARTER",
  NEXT_QUARTER = "NEXT_QUARTER",
  PERPETUAL_DELIVERING = ""
}

export enum EContractStatus {
  PENDING_TRADING = "PENDING_TRADING",
  TRADING = "TRADING",
  PRE_DELIVERING = "PRE_DELIVERING",
  DELIVERING = "DELIVERING",
  DELIVERED = "DELIVERED",
  PRE_SETTLE = "PRE_SETTLE",
  SETTLING = "SETTLING",
  CLOSE = "CLOSE"
};

export enum EOrderTypes {
  LIMIT = "LIMIT",
  MARKET = "MARKET",
  STOP = "STOP",
  STOP_MARKET = "STOP_MARKET",
  TAKE_PROFIT = "TAKE_PROFIT",
  TAKE_PROFIT_MARKET = "TAKE_PROFIT_MARKET",
  TRAILING_STOP_MARKET = "TRAILING_STOP_MARKET"
};

export enum ETimeInForce {
  GTC = "GTC",
  IOC = "IOC",
  FOK = "FOK",
  GTX = "GTX",
  GTD = "GTD"
}

export type TRateLimit = {
  interval: ERateLimitIntervals;
  intervalNum: number;
  limit: number;
  rateLimitType: ERateLimitType
};

export type TAssetsInformation = {
  asset: string;
  marginAvailable: boolean;
  autoAssetExchange: number;
};

export type TSymbol = {
  symbol: string;
  pair: string;
  contractType: EContractType;
  deliveryDate: number;
  onboardDate: number;
  status: EContractStatus;
  baseAsset: string;
  quoteAsset: string;
  marginAsset: string;
  pricePrecision: number;
  quantityPrecision: number;
  baseAssetPrecision: number;
  quotePrecision: number;
  underlyingType: string;
  underlyingSubType: string[];
  settlePlan: number;
  triggerProtect: string;
  filters: (TPriceFilter | TLotSizeFilter | TMarketLotSizeFilter | TMaxNumOrderFilter | TMaxNumAlgoOrderFilter | TMinNotionalFilter | TPercentPriceFilter)[]
  OrderType: EOrderTypes;
  timeInForce: ETimeInForce;
  liquidationFee: string;
  marketTakeBound: string;
};

export type TExchangeInfo = {
  exchangeFilters: any[];
  rateLimits: TRateLimit[];
  serverTime: number;
  assets: TAssetsInformation[];
  symbols: TSymbol[];
  timezone: string;
};

export type TOrderBook = {
  lastUpdateId: number;
  E: number;   // Message output time
  T: number;   // Transaction time
  bids: [string,string][];
  asks: [string,string][];
};

export type TRecentTrade = {
  id: number;
  price: string;
  qty: string;
  quoteQty: string;
  time: number;
  isBuyerMaker: boolean;
}

export type TAggregateTrade = {
  a: number;  // Aggregate tradeId
  p: string;  // Price
  q: string;  // Quantity
  f: number;  // First tradeId
  l: number;  // Last tradeId
  T: number;  // Timestamp
  m: boolean; // Was the buyer the maker?
}