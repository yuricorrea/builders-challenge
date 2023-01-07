import {IContextState} from '../types';
import Types from './types.actions';

const Actions = (state: IContextState, dispatch: Function) => {
  const fetchWeather = () => {
    if (state.isWeatherLoading) {
      return;
    }
    dispatch({
      type: Types.ADDRESS_LOAD,
    });
  };

  return {
    fetchWeather,
  };
};

export default Actions;
