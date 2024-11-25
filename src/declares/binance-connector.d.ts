//import { TExchangeInfo, TResponce } from "../types";

declare module "@binance/connector" {
  export interface PrivateKeyAlgo {};
  export interface WebsocketStream {};
  export interface WebsocketAPI {};

  export class Spot {
    async exchangeInfo(): Promise<TResponce<TExchangeInfo>>; 
  };
}