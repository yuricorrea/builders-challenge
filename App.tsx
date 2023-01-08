import React from 'react';
import Provider from './src/context';
import {Home} from './src/screens';
import {ThemeProvider} from 'styled-components';
import Theme from './src/theme';
import {LogBox, SafeAreaView} from 'react-native';
const App = () => {
  LogBox.ignoreAllLogs();
  const currentTheme = Theme();

  return (
    <Provider>
      <ThemeProvider theme={currentTheme}>
        <SafeAreaView />
        <Home />
        <SafeAreaView />
      </ThemeProvider>
    </Provider>
  );
};

export default App;
