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

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar barStyle={'light-content'} backgroundColor={COLORS.main} />
      <RootStackScreen />
    </SafeAreaView>
  );
}

export default App;
