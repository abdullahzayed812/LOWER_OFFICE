import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {COLORS} from '../configs/colors';
import {STYLES} from '../configs/styles';

interface Props {
  title: string;
  onPress: () => void;
  imageSrc: ImageSourcePropType;
}

export const Box: React.FC<Props> = ({title, onPress, imageSrc}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image
        source={imageSrc}
        style={{width: 50, height: 50, resizeMode: 'contain'}}
      />
      <Text style={{marginTop: 5, fontSize: 18, color: COLORS.black}}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    ...STYLES.center,
    width: '48%',
    height: 150,
    backgroundColor: COLORS.white,
    elevation: 10,
    borderRadius: 15,
  },
});
