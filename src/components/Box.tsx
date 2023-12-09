import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {COLORS} from '../configs/colors';
import {STYLES} from '../configs/styles';

interface Props {
  title: string;
}

export const Box: React.FC<Props> = ({title}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    ...STYLES.center,
    width: 150,
    height: 150,
    backgroundColor: COLORS.white,
    elevation: 10,
    borderRadius: 15,
  },
});
