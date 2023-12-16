import {FlatList} from 'react-native';
import {Container} from '../components/Container';
import {Header} from '../components/Header';
import {PostItem} from '../components/PostItem';
import {AddItem} from '../components/AddItem';
import {AddItemModal} from '../components/AddItemModal';
import {useAppDispatch, useAppSelector} from '../app/hooks';
import {selectPostsList, toggleAddItemModal} from '../app/posts/postsSlice';
import {RouteProp, useRoute} from '@react-navigation/native';
import {HomeStackParamList} from '../navigation/types';

export const PostsListScreen = () => {
  const dispatch = useAppDispatch();

  const route = useRoute<RouteProp<HomeStackParamList>>();

  const postsList = useAppSelector(selectPostsList);

  const handleAddItem = () => {
    dispatch(toggleAddItemModal(true));
  };
  return (
    <>
      <Header title={`جلسات شهر ${route.params?.month}`} />
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
