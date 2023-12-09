import {StyleSheet, Text, View} from 'react-native';
import {STYLES} from '../configs/styles';
import {COLORS} from '../configs/colors';

interface Props {
  title: string;
}

export const Header: React.FC<Props> = ({title}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {...STYLES.center, padding: 15, backgroundColor: COLORS.main},
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.white,
  },
});
