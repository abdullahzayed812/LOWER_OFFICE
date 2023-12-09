import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {TabStackScreen} from './stacks/TabStack';
import {SplashScreen} from '../screens/SplashScreen';

const RootStack = createNativeStackNavigator();

export const RootStackScreen = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator
        initialRouteName="SplashScreen"
        screenOptions={{headerShown: false}}>
        <RootStack.Screen name="TabStackScreen" component={TabStackScreen} />
        <RootStack.Screen name="SplashScreen" component={SplashScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};
