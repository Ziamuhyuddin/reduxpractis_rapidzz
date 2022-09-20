import {View, Text} from 'react-native';
import React from 'react';
import {Provider} from 'react-redux';
import Store from './store/configureStore';
import DashboardScreen from './screens/DashboardScreen';
import ArrayOperation from './screens/ArrayOperation';

const App = () => {
  return (
    <Provider store={Store}>
      {/* <StatusBar
        animated={true}
        backgroundColor="red"
        barStyle="dark-content"
        showHideTransition="fade"
      /> */}
      <ArrayOperation></ArrayOperation>
    </Provider>
  );
};

export default App;
