import { Futures } from "../src";
import { EContractType, EInterval } from "../src/types";

test("Testing ping", async () => {
  const connect = new Futures;
  const { data } = await connect.ping();
  expect(data).toBeDefined();
});

test("Check Server Time", async () => {
  const connect = new Futures;
  const { data } = await connect.time();
  expect( data.serverTime ).toBeDefined();
});

test("Exchange Information", async () => {
  const connect = new Futures;
  const { data } = await connect.exchangeInfo();
  expect( data.symbols ).toBeDefined();
});

test("Order Book", async () => {
  const connect = new Futures;
  const { data } = await connect.orderBook("BTCUSDT", 5);
  expect( data.lastUpdateId ).toBeDefined();
});

test("Recent Trades List", async () => {
  const connect = new Futures;
  const { data } = await connect.recentTradesList("BTCUSDT", 5);
  expect( data.length ).toBe(5);
});

test("Old Trades Lookup", async () => {
  const connect = new Futures(
    process.env.API_KEY || '',
    process.env.SECRET_KEY || ''
  );
  const { data } = await connect.oldTradesLookup("BTCUSDT", 5);
  expect( data.length ).toBe(5);
});

test("Compressed/Aggregate Trades List", async () => {
  const connect = new Futures(
    process.env.API_KEY || '',
    process.env.SECRET_KEY || ''
  );
  const { data } = await connect.aggregateTradesList("BTCUSDT", undefined, undefined, undefined, 5);
  expect( data.length ).toBe(5);
});

test("Kline/Candlestick Data", async () => {
  const connect = new Futures(
    process.env.API_KEY || '',
    process.env.SECRET_KEY || ''
  );
  const { data } = await connect.klineCandlestickData("BTCUSDT", EInterval["1h"], undefined, undefined, 5);
  //.catch(e => console.log(e)).then(() => ({data:null}));
  expect( data.length ).toBe(5);
});

test("Continuous Contract Kline/Candlestick Data", async () => {
  const connect = new Futures;
  const { data } = await connect.continuousContractKlineCandlestickData("BTCUSDT", EContractType.PERPETUAL, EInterval["1h"], undefined, undefined, 5);
  //console.log(data);
  expect( data.length ).toBe(5);
});