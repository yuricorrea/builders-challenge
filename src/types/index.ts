export interface IWeather {}

export interface IAddress {}

export interface IContextState {
  weather: IWeather;
  isWeatherLoading: boolean;
  address: IAddress;
  isAddressLoading: boolean;
}

export interface IActions {
  fetchWeather: Function;
}
