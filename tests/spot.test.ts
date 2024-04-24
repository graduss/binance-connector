import { Spot } from '@binance/connector';

test('testing get exchangeInfo', async () => {
  const connect = new Spot();
  const { data } = await connect.exchangeInfo();
  expect(data.symbols.length).toBeDefined();
});