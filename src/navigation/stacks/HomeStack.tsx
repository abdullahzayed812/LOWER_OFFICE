import React from 'react';
import {Image} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen} from '../../screens/HomeScreen';
import {PostsListScreen} from '../../screens/PostsListScreen';
import {PostDetailsScreen} from '../../screens/PostDetailsScreen';

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
    </HomeStack.Navigator>
  );
};
