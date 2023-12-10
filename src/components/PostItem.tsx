import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {STYLES} from '../configs/styles';
import {COLORS} from '../configs/colors';
import {HomeStackParamList} from '../navigation/types';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

interface Props {
  index: number;
  title: string;

  routeName?: keyof HomeStackParamList;
}
export const PostItem: React.FC<Props> = ({index, title, routeName}) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<HomeStackParamList>>();

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate(routeName!)}>
      <Text style={styles.text}>{index + 1}. </Text>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    ...STYLES.alignCenter,
    padding: 20,
    backgroundColor: COLORS.white,
    elevation: 4,
    marginBottom: 10,
    borderRadius: 5,
  },
  text: {
    fontSize: 20,
    color: COLORS.black,
  },
});
