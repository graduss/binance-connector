export * from '@binance/connector';
import APIBase from '@binance/connector/src/APIBase';
import { Agent } from 'https';

declare enum EFilterType {
    PRICE_FILTER = "PRICE_FILTER",
    LOT_SIZE = "LOT_SIZE",
    MARKET_LOT_SIZE = "MARKET_LOT_SIZE",
    MAX_NUM_ORDERS = "MAX_NUM_ORDERS",
    MAX_NUM_ALGO_ORDERS = "MAX_NUM_ALGO_ORDERS",
    MIN_NOTIONAL = "MIN_NOTIONAL",
    PERCENT_PRICE = "PERCENT_PRICE"
}
type TPriceFilter = {
    filterType: EFilterType.PRICE_FILTER;
    maxPrice: string;
    minPrice: string;
    tickSize: string;
};
type TLotSizeFilter = {
    filterType: EFilterType.LOT_SIZE;
    maxQty: string;
    minQty: string;
    stepSize: string;
};
type TMarketLotSizeFilter = {
    filterType: EFilterType.MARKET_LOT_SIZE;
    maxQty: string;
    minQty: string;
    stepSize: string;
};
type TMaxNumOrderFilter = {
    filterType: EFilterType.MAX_NUM_ORDERS;
    limit: number;
};
type TMaxNumAlgoOrderFilter = {
    filterType: EFilterType.MAX_NUM_ALGO_ORDERS;
    limit: number;
};
type TMinNotionalFilter = {
    filterType: EFilterType.MIN_NOTIONAL;
    notional: string;
};
type TPercentPriceFilter = {
    filterType: EFilterType.PERCENT_PRICE;
    multiplierUp: string;
    multiplierDown: string;
    multiplierDecimal: number;
};

declare enum ERateLimitIntervals {
    MINUTE = "MINUTE"
}
declare enum ERateLimitType {
    REQUEST_WEIGHT = "REQUEST_WEIGHT",
    ORDERS = "ORDERS"
}
declare enum EContractType {
    PERPETUAL = "PERPETUAL",
    CURRENT_MONTH = "CURRENT_MONTH",
    NEXT_MONTH = "NEXT_MONTH",
    CURRENT_QUARTER = "CURRENT_QUARTER",
    NEXT_QUARTER = "NEXT_QUARTER",
    PERPETUAL_DELIVERING = "PERPETUAL_DELIVERING"
}
declare enum EContractStatus {
    PENDING_TRADING = "PENDING_TRADING",
    TRADING = "TRADING",
    PRE_DELIVERING = "PRE_DELIVERING",
    DELIVERING = "DELIVERING",
    DELIVERED = "DELIVERED",
    PRE_SETTLE = "PRE_SETTLE",
    SETTLING = "SETTLING",
    CLOSE = "CLOSE"
}
declare enum EOrderTypes {
    LIMIT = "LIMIT",
    MARKET = "MARKET",
    STOP = "STOP",
    STOP_MARKET = "STOP_MARKET",
    TAKE_PROFIT = "TAKE_PROFIT",
    TAKE_PROFIT_MARKET = "TAKE_PROFIT_MARKET",
    TRAILING_STOP_MARKET = "TRAILING_STOP_MARKET"
}
declare enum ETimeInForce {
    GTC = "GTC",
    IOC = "IOC",
    FOK = "FOK",
    GTX = "GTX",
    GTD = "GTD"
}
declare enum EInterval {
    "1m" = "1m",
    "3m" = "3m",
    "5m" = "5m",
    "15m" = "15m",
    "30m" = "30m",
    "1h" = "1h",
    "2h" = "2h",
    "4h" = "4h",
    "6h" = "6h",
    "8h" = "8h",
    "12h" = "12h",
    "1d" = "1d",
    "3d" = "3d",
    "1w" = "1w",
    "1M" = "1M"
}
type APIBaseOptions = {
    baseURL?: string;
    httpsAgent?: Agent | boolean;
};
type TResponce<T> = {
    data: T;
};
type TRateLimit = {
    interval: ERateLimitIntervals;
    intervalNum: number;
    limit: number;
    rateLimitType: ERateLimitType;
};
type TAssetsInformation = {
    asset: string;
    marginAvailable: boolean;
    autoAssetExchange: number;
};
type TSymbol = {
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
    filters: (TPriceFilter | TLotSizeFilter | TMarketLotSizeFilter | TMaxNumOrderFilter | TMaxNumAlgoOrderFilter | TMinNotionalFilter | TPercentPriceFilter)[];
    OrderType: EOrderTypes;
    timeInForce: ETimeInForce;
    liquidationFee: string;
    marketTakeBound: string;
};
type TExchangeInfo = {
    exchangeFilters: any[];
    rateLimits: TRateLimit[];
    serverTime: number;
    assets: TAssetsInformation[];
    symbols: TSymbol[];
    timezone: string;
};
type TOrderBook = {
    lastUpdateId: number;
    E: number;
    T: number;
    bids: [string, string][];
    asks: [string, string][];
};
type TRecentTrade = {
    id: number;
    price: string;
    qty: string;
    quoteQty: string;
    time: number;
    isBuyerMaker: boolean;
};
type TAggregateTrade = {
    a: number;
    p: string;
    q: string;
    f: number;
    l: number;
    T: number;
    m: boolean;
};
type TCandlestickData = [
    number,
    string,
    string,
    string,
    string,
    string,
    number,
    string,
    number,
    string,
    string,
    string
];
type TMarkPrice = {
    symbol: string;
    markPrice: string;
    indexPrice: string;
    estimatedSettlePrice: string;
    lastFundingRate: string;
    nextFundingTime: number;
    interestRate: string;
    time: number;
};
type TOrder = {
    orderId: number;
    symbol: string;
    status: 'NEW' | 'CANCELED';
    clientOrderId: string;
    price: string;
    avgPrice: string;
    origQty: string;
    executedQty: string;
    cumQuote: string;
    timeInForce: 'GTC' | 'GTE_GTC';
    type: 'LIMIT' | 'TAKE_PROFIT_MARKET' | 'STOP_MARKET' | 'MARKET' | 'STOP' | 'TAKE_PROFIT' | 'TRAILING_STOP_MARKET';
    reduceOnly: boolean;
    closePosition: boolean;
    side: 'SELL' | 'BUY';
    positionSide: 'BOTH';
    stopPrice: string;
    workingType: 'CONTRACT_PRICE' | 'MARK_PRICE';
    priceProtect: boolean;
    origType: 'LIMIT' | 'TAKE_PROFIT_MARKET' | 'STOP_MARKET';
    priceMatch: 'NONE';
    selfTradePreventionMode: 'NONE';
    goodTillDate: number;
    time?: number;
    updateTime: number;
};
type TNewOrder = Partial<Omit<TOrder, 'price' | 'avgPrice' | 'origQty' | 'executedQty' | 'cumQuote' | 'stopPrice'>> & {
    timestamp: number;
    symbol: string;
    side: 'SELL' | 'BUY';
} & ({
    type: 'LIMIT';
    timeInForce: 'GTC';
    quantity: number;
    price: string;
} | {
    type: 'MARKET';
    quantity: number;
} | {
    type: 'STOP' | 'TAKE_PROFIT';
    quantity: number;
    price: string;
    stopPrice: string;
} | {
    type: 'STOP_MARKET' | 'TAKE_PROFIT_MARKET';
    stopPrice: string;
} | {
    type: 'TRAILING_STOP_MARKET';
    callbackRate: number;
});
type TModifyOrder = {
    symbol: string;
    side: 'SELL' | 'BUY';
    quantity?: number;
    price: string;
    priceMatch?: 'OPPONENT' | 'OPPONENT_5' | 'OPPONENT_10' | 'OPPONENT_20' | 'QUEUE' | 'QUEUE_5' | 'QUEUE_10' | 'QUEUE_20';
    recvWindow?: number;
    timestamp: number;
} & ({
    orderId: number;
} | {
    origClientOrderId: string;
});
type TCancelOrder = {
    symbol: string;
    timestamp: number;
    recvWindow?: number;
} & ({
    orderId: number;
} | {
    origClientOrderId: string;
});
type TOpenPosition = {
    symbol: string;
    positionSide: 'BOTH';
    positionAmt: string;
    entryPrice: string;
    breakEvenPrice: string;
    markPrice: string;
    unRealizedProfit: string;
    liquidationPrice: string;
    isolatedMargin: string;
    notional: string;
    marginAsset: 'BNFCR';
    isolatedWallet: string;
    initialMargin: string;
    maintMargin: string;
    positionInitialMargin: string;
    openOrderInitialMargin: string;
    adl: 3;
    bidNotional: string;
    askNotional: string;
    updateTime: 1732187231731;
};

declare class Futures extends APIBase {
    constructor(apiKey?: string, apiSecret?: string, options?: APIBaseOptions);
    newOrder(opt: TNewOrder): Promise<TResponce<TOrder>>;
    cancelOrder(opt: TCancelOrder): Promise<TResponce<TOrder>>;
    modifyOrder(opt: TModifyOrder): Promise<TResponce<TOrder>>;
    positionInformationV3(opt: {
        symbol?: string;
        recvWindow?: number;
        timestamp: number;
    }): Promise<TResponce<TOpenPosition[]>>;
    currentAllOpenOrders(opt: {
        symbol?: string;
        recvWindow?: number;
        timestamp: number;
    }): Promise<TResponce<TOrder[]>>;
    ping(): Promise<TResponce<Object>>;
    time(): Promise<TResponce<{
        serverTime: number;
    }>>;
    exchangeInfo(): Promise<TResponce<TExchangeInfo>>;
    orderBook(symbol: string, limit?: (5 | 10 | 20 | 50 | 100 | 500 | 1000)): Promise<TResponce<TOrderBook>>;
    recentTradesList(symbol: string, limit?: number): Promise<TResponce<TRecentTrade[]>>;
    oldTradesLookup(symbol: string, limit?: number, fromId?: number): Promise<TResponce<TRecentTrade[]>>;
    aggregateTradesList(symbol: string, fromId?: number, startTime?: number, endTime?: number, limit?: number): Promise<TResponce<TAggregateTrade[]>>;
    klineCandlestickData(symbol: string, interval: EInterval, startTime?: number, endTime?: number, limit?: number): Promise<TResponce<TCandlestickData[]>>;
    continuousContractKlineCandlestickData(pair: string, contractType: EContractType.PERPETUAL | EContractType.CURRENT_QUARTER | EContractType.NEXT_QUARTER, interval: EInterval, startTime?: number, endTime?: number, limit?: number): Promise<TResponce<TCandlestickData[]>>;
    markPrice(): Promise<TResponce<TMarkPrice[]>>;
    markPrice(symbol: string): Promise<TResponce<TMarkPrice>>;
}

export { type APIBaseOptions, EContractStatus, EContractType, EInterval, EOrderTypes, ERateLimitIntervals, ERateLimitType, ETimeInForce, Futures, type TAggregateTrade, type TAssetsInformation, type TCancelOrder, type TCandlestickData, type TExchangeInfo, type TMarkPrice, type TModifyOrder, type TNewOrder, type TOpenPosition, type TOrder, type TOrderBook, type TRateLimit, type TRecentTrade, type TResponce, type TSymbol };
