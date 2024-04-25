import { Futures } from "../src";

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