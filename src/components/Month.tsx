import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {COLORS} from '../configs/colors';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {HomeStackParamList} from '../navigation/types';

interface MonthProps {
  text: string;
  index: number;
}

export const Month = ({text, index}: MonthProps) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<HomeStackParamList>>();
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() =>
        navigation.navigate('PostsListScreen', {month: index + 1})
      }>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginVertical: 5,
    borderRadius: 15,
    backgroundColor: COLORS.white,
    elevation: 4,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
