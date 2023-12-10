import {Image, StyleSheet, Text, View} from 'react-native';
import {IMAGES} from '../configs/images';
import {STYLES} from '../configs/styles';
import {COLORS} from '../configs/colors';

interface Props {
  title: string | null;
  fileType: string | null;
}

export const BoxFile: React.FC<Props> = ({title, fileType}) => {
  return (
    <View style={styles.container}>
      <Image
        source={fileType?.includes('image') ? IMAGES.gallery : IMAGES.pdf}
        style={{width: 50, height: 50, resizeMode: 'contain'}}
      />
      <Text style={styles.text}>{title?.split('.')[0]}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {...STYLES.center, width: '30%'},
  text: {color: COLORS.black},
});
