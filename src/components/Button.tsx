import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {COLORS} from '../configs/colors';
import {STYLES} from '../configs/styles';

interface Props {
  title: string;
  onPress: () => void;
}

export const Button: React.FC<Props> = ({title, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    ...STYLES.center,
    padding: 15,
    backgroundColor: COLORS.main,
    borderRadius: 10,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.white,
  },
});
