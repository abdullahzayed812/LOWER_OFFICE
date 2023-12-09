import {Image, StyleSheet, TextInput, View} from 'react-native';
import {COLORS} from '../configs/colors';
import {IMAGES} from '../configs/images';
import {STYLES} from '../configs/styles';

interface Props {
  placeholder: string;
}

export const Input: React.FC<Props> = ({placeholder}) => {
  return (
    <View style={styles.container}>
      <Image source={IMAGES.search} style={styles.search} />
      <TextInput style={{flex: 1}} placeholder={placeholder} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...STYLES.alignCenter,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: COLORS.gray,
    padding: 5,
  },
  search: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
});
