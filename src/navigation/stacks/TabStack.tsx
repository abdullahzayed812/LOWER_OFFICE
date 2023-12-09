import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image} from 'react-native';
import {HomeStackScreen} from './HomeStack';
import {ProfileScreen} from '../../screens/ProfileScreen';
import {IMAGES} from '../../configs/images';
import {COLORS} from '../../configs/colors';

const TabStack = createBottomTabNavigator();

export const TabStackScreen: React.FC = () => {
  return (
    <TabStack.Navigator
      initialRouteName="HomeStackScreen"
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarActiveTintColor: COLORS.main,
        tabBarInactiveTintColor: COLORS.black,
        tabBarLabelStyle: {fontSize: 16},
        tabBarStyle: {height: 60, borderRadius: 20},
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          if (route.name === 'HomeStackScreen') {
            iconName = focused ? IMAGES.homeActive : IMAGES.home;
          } else if (route.name === 'ProfileScreen') {
            iconName = focused ? IMAGES.userActive : IMAGES.user;
          }
          return (
            <Image source={iconName} style={{width: size, height: size}} />
          );
        },
      })}>
      <TabStack.Screen
        name="HomeStackScreen"
        component={HomeStackScreen}
        options={{tabBarLabel: 'Home'}}
      />
      <TabStack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{tabBarLabel: 'Profile'}}
      />
    </TabStack.Navigator>
  );
};
