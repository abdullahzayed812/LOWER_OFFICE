import {
  Image,
  StyleSheet,
  TextInput,
  TextInputProps,
  View,
  ViewStyle,
} from 'react-native';
import {COLORS} from '../configs/colors';
import {IMAGES} from '../configs/images';
import {STYLES} from '../configs/styles';
import {Dispatch, SetStateAction} from 'react';

interface Props {
  placeholder: string;
  containerStyle?: ViewStyle;
  search?: boolean;
  value?: string;
  setValue?: (text: string) => void;
}

export const Input: React.FC<Props> = ({
  placeholder,
  containerStyle,
  search,
  value,
  setValue,
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      {search ? <Image source={IMAGES.search} style={styles.search} /> : null}
      <TextInput
        style={{flex: 1, color: COLORS.black}}
        placeholder={placeholder}
        value={value}
        onChangeText={text => setValue?.(text)}
        placeholderTextColor={COLORS.lightGray}
      />
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
    backgroundColor: COLORS.white,
    elevation: 5,
  },
  search: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
});
