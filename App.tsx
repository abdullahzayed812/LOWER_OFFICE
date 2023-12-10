/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';

import {RootStackScreen} from './src/navigation';
import {COLORS} from './src/configs/colors';
import {Provider} from 'react-redux';
import {store} from './src/app/store';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar barStyle={'light-content'} backgroundColor={COLORS.main} />
      <Provider store={store}>
        <RootStackScreen />
      </Provider>
    </SafeAreaView>
  );
}

export default App;
