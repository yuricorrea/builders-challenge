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

export interface IThemeType {
  primaryColor: string;
  secondaryColor: string;
  tertiaryColor: string;
  quaternaryColor: string;
  textColor: string;
  backgroundColor: string;
}

export interface IThemeProps {
  theme: IThemeType;
}
