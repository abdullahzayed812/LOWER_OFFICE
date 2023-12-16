import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen} from '../../screens/HomeScreen';
import {PostsListScreen} from '../../screens/PostsListScreen';
import {PostDetailsScreen} from '../../screens/PostDetailsScreen';
import {MonthsScreen} from '../../screens/MonthsScreen';

const HomeStack = createNativeStackNavigator();

export const HomeStackScreen: React.FC = () => {
  return (
    <HomeStack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{headerShown: false}}>
      <HomeStack.Screen name="HomeScreen" component={HomeScreen} />
      <HomeStack.Screen name="PostsListScreen" component={PostsListScreen} />
      <HomeStack.Screen
        name="PostDetailsScreen"
        component={PostDetailsScreen}
      />
      <HomeStack.Screen name="MonthsScreen" component={MonthsScreen} />
    </HomeStack.Navigator>
  );
};
