import {Image, Text, View} from 'react-native';
import {Container} from '../components/Container';
import {IMAGES} from '../configs/images';
import {useEffect} from 'react';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../navigation/types';

interface Props {
  navigation: NativeStackNavigationProp<RootStackParamList>;
}

export const SplashScreen: React.FC<Props> = ({navigation}) => {
  useEffect(() => {
    const timerId = setTimeout(() => {
      navigation.navigate('TabStackScreen', {screen: 'HomeStackScreen'});
    }, 200);
  }, []);
  return (
    <Container center>
      <Image source={IMAGES.splash} style={{transform: [{scale: 0.5}]}} />
    </Container>
  );
};
