import {StyleSheet, View} from 'react-native';
import {Box} from './Box';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {HomeStackParamList} from '../navigation/types';
import {IMAGES} from '../configs/images';

export const HomeContent: React.FC = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<HomeStackParamList>>();

  return (
    <View style={styles.container}>
      <Box
        title="جلسات"
        onPress={() => navigation.navigate('MonthsScreen')}
        imageSrc={IMAGES.info}
      />
      <Box title="نقض" onPress={() => {}} imageSrc={IMAGES.info} />
      <Box title="معارضات" onPress={() => {}} imageSrc={IMAGES.info} />
      <Box title="جنح" onPress={() => {}} imageSrc={IMAGES.info} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
});
