import {FlatList} from 'react-native';
import {Container} from '../components/Container';
import {Header} from '../components/Header';
import {PostItem} from '../components/PostItem';
import {AddItem} from '../components/AddItem';
import {AddItemModal} from '../components/AddItemModal';
import {useAppDispatch, useAppSelector} from '../app/hooks';
import {selectPostsList, toggleAddItemModal} from '../app/posts/postsSlice';
import {useNavigation} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {HomeStackParamList} from '../navigation/types';

interface DataProps {
  title: string;
}

export const PostsListScreen = () => {
  const dispatch = useAppDispatch();

  const postsList = useAppSelector(selectPostsList);

  const navigation =
    useNavigation<NativeStackScreenProps<HomeStackParamList>>();

  const handleAddItem = () => {
    dispatch(toggleAddItemModal(true));
  };
  return (
    <>
      <Header title="Qadia List" />
      <Container>
        <FlatList
          data={postsList}
          keyExtractor={(item, index) => `${index}item.title`}
          renderItem={({item, index}) => (
            <PostItem
              index={index}
              title={item.title}
              routeName={'PostDetailsScreen'}
            />
          )}
        />
        <AddItem onPress={handleAddItem} />
        <AddItemModal />
      </Container>
    </>
  );
};
