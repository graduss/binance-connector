type TResponce<T> = {
  data: T;
}

type TExchangeInfo = {
  symbols: Object[];
}
declare module '@binance/connector' {
  export interface PrivateKeyAlgo {};
  export interface WebsocketStream {};
  export interface WebsocketAPI {};

  export class Spot {
    async exchangeInfo(): Promise<TResponce<TExchangeInfo>>; 
  };
}