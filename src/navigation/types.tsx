import {NavigatorScreenParams} from '@react-navigation/native';

export type TabStackParamList = {
  HomeStackScreen: undefined;
  ProfileScreen: undefined;
};

export type RootStackParamList = {
  TabStackScreen: NavigatorScreenParams<TabStackParamList>;
  SplashScreen: undefined;
};
