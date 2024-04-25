export enum EFilterType {
  PRICE_FILTER = "PRICE_FILTER",
  LOT_SIZE = "LOT_SIZE",
  MARKET_LOT_SIZE = "MARKET_LOT_SIZE",
  MAX_NUM_ORDERS = "MAX_NUM_ORDERS",
  MAX_NUM_ALGO_ORDERS = "MAX_NUM_ALGO_ORDERS",
  MIN_NOTIONAL = "MIN_NOTIONAL",
  PERCENT_PRICE = "PERCENT_PRICE"
};

export type TPriceFilter = {
  filterType: EFilterType.PRICE_FILTER,
  maxPrice: string;
  minPrice: string;
  tickSize: string;
}

export type TLotSizeFilter = {
  filterType: EFilterType.LOT_SIZE;
  maxQty: string;
  minQty: string;
  stepSize: string;
}

export type TMarketLotSizeFilter = {
  filterType: EFilterType.MARKET_LOT_SIZE;
  maxQty: string;
  minQty: string;
  stepSize: string;
}

export type TMaxNumOrderFilter = {
  filterType: EFilterType.MAX_NUM_ORDERS;
  limit: number;
}

export type TMaxNumAlgoOrderFilter = {
  filterType: EFilterType.MAX_NUM_ALGO_ORDERS;
  limit: number;
}

export type TMinNotionalFilter = {
  filterType: EFilterType.MIN_NOTIONAL;
  notional: string;
}

export type TPercentPriceFilter = {
  filterType: EFilterType.PERCENT_PRICE;
  multiplierUp: string;
  multiplierDown: string;
  multiplierDecimal: number;
}
