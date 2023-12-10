import {NavigatorScreenParams} from '@react-navigation/native';

export type HomeStackParamList = {
  HomeScreen: undefined;
  PostsListScreen: undefined;
  PostDetailsScreen: undefined;
};

export type TabStackParamList = {
  HomeStackScreen: NavigatorScreenParams<HomeStackParamList>;
  ProfileScreen: undefined;
};

export type RootStackParamList = {
  TabStackScreen: NavigatorScreenParams<TabStackParamList>;
  SplashScreen: undefined;
};
