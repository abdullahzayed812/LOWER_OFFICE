import {Modal, StyleSheet, TouchableOpacity, View} from 'react-native';
import {Input} from './Input';
import {STYLES} from '../configs/styles';
import {COLORS} from '../configs/colors';
import {Button} from './Button';
import {useAppDispatch, useAppSelector} from '../app/hooks';
import {
  addPost,
  selectIsVisibleAddItemModal,
  toggleAddItemModal,
} from '../app/posts/postsSlice';
import {useState} from 'react';

export const AddItemModal: React.FC = () => {
  const dispatch = useAppDispatch();
  const isVisibleAddItemModal = useAppSelector(selectIsVisibleAddItemModal);

  const [inputValue, setInputValue] = useState('');

  return (
    <Modal animationType="fade" transparent visible={isVisibleAddItemModal}>
      <TouchableOpacity
        style={styles.container}
        onPress={() => dispatch(toggleAddItemModal(false))}>
        <View style={styles.wrapper}>
          <Input
            placeholder="Add Qadia name"
            containerStyle={styles.input}
            value={inputValue}
            setValue={(text: string) => setInputValue(text)}
          />
          <Button
            title="Add"
            onPress={() => dispatch(addPost({title: inputValue}))}
          />
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    ...STYLES.center,
    flex: 1,
  },
  wrapper: {
    width: '90%',
    padding: 20,
    borderRadius: 15,
    backgroundColor: COLORS.white,
    elevation: 5,
  },
  input: {
    marginBottom: 20,
  },
});
