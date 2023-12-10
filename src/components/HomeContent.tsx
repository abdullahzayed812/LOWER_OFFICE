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
        title="List 1"
        onPress={() => navigation.navigate('PostsListScreen')}
        imageSrc={IMAGES.info}
      />
      <Box title="List 2" onPress={() => {}} imageSrc={IMAGES.multimedia} />
      <Box title="List 3" onPress={() => {}} imageSrc={IMAGES.stats} />
      <Box title="List 4" onPress={() => {}} imageSrc={IMAGES.info} />
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
