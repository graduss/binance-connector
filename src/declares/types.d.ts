declare type APIBaseOptions = {
  baseURL?: string
}

declare type TResponce<T> = {
  data: T;
}

declare type TExchangeInfo = {
  symbols: Object[];
}