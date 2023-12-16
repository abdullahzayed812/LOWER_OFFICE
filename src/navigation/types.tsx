import {NavigatorScreenParams} from '@react-navigation/native';

export type HomeStackParamList = {
  HomeScreen: undefined;
  PostsListScreen: {month: number | undefined} | undefined;
  PostDetailsScreen: undefined;
  MonthsScreen: undefined;
};

export type TabStackParamList = {
  HomeStackScreen: NavigatorScreenParams<HomeStackParamList>;
  ProfileScreen: undefined;
};

export type RootStackParamList = {
  TabStackScreen: NavigatorScreenParams<TabStackParamList>;
  SplashScreen: undefined;
};
