import {PropsWithChildren} from 'react';
import {View} from 'react-native';
import {COLORS} from '../configs/colors';
import {STYLES} from '../configs/styles';

export interface Props extends PropsWithChildren {
  center?: boolean;
}

export const Container: React.FC<Props> = ({children, center}) => {
  return (
    <View
      style={[
        {flex: 1, backgroundColor: COLORS.white, padding: 10},
        center ? STYLES.center : null,
      ]}>
      {children}
    </View>
  );
};
