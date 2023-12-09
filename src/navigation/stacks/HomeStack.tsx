import React from 'react';
import {Image} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen} from '../../screens/HomeScreen';

const HomeStack = createNativeStackNavigator();

export const HomeStackScreen: React.FC = () => {
  return (
    <HomeStack.Navigator
      initialRouteName="HomeStackScreen"
      screenOptions={{headerShown: false}}>
      <HomeStack.Screen name="HomeStackScreen" component={HomeScreen} />
    </HomeStack.Navigator>
  );
};
