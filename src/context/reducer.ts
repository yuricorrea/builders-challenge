import {IContextState, IAddress, IWeather} from '../types';
import Types from './types.actions';

export const initialState: IContextState = {
  isAddressLoading: false,
  isWeatherLoading: false,
  weather: {} as IWeather,
  address: {} as IAddress,
};

interface IAction {
  type: string;
}

export const reducer = (
  state: IContextState,
  action: IAction,
): IContextState => {
  const {type} = action;
  switch (type) {
    case Types.WEATHER_LOAD:
      return {
        ...state,
        isWeatherLoading: true,
      };
    case Types.ADDRESS_LOAD:
      return {
        ...state,
        isAddressLoading: true,
      };
    default:
      return state;
  }
};
