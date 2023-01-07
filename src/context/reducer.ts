import {IContextState, IAddress, IWeather} from '../types';

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
    default:
      return state;
  }
};
