import {StyleSheet, View} from 'react-native';
import {Box} from './Box';

export const HomeContent: React.FC = () => {
  return (
    <View style={styles.container}>
      <Box title="Save" />
      <Box title="Qadia" />
      <Box title="Save" />
      <Box title="Qadia" />
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
    gap: 20,
  },
});
