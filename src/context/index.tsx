import React, {useReducer} from 'react';
import {reducer, initialState} from './reducer';
import Actions from './actions';
import {IActions, IContextState} from '../types';

interface IContext {
  state: IContextState;
  actions: IActions;
}

export const Context = React.createContext({} as IContext);

interface P {
  children: JSX.Element;
}

const Provider = ({children}: P): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const actions = Actions(state, dispatch);

  return (
    <Context.Provider
      value={{
        state,
        actions,
      }}>
      {children}
    </Context.Provider>
  );
};

export default Provider;
