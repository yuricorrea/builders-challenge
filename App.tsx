import React from 'react';
import Provider from './src/context';
import {Home} from './src/screens';

const App = () => {
  return (
    <Provider>
      <Home />
    </Provider>
  );
};

export default App;
