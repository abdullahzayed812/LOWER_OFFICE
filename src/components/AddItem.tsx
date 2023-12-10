import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {COLORS} from '../configs/colors';
import {STYLES} from '../configs/styles';

interface Props {
  onPress: () => void;
}

export const AddItem: React.FC<Props> = ({onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.text}>+</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    ...STYLES.center,
    position: 'absolute',
    bottom: 30,
    right: 30,
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: COLORS.main,
    elevation: 10,
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    color: COLORS.white,
  },
});
