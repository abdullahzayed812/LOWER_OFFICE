import {useAppDispatch} from '../app/hooks';
import {addPostFile} from '../app/posts/postsSlice';
import {AddItem} from '../components/AddItem';
import {Container} from '../components/Container';
import {Header} from '../components/Header';
import DocumentPicker from 'react-native-document-picker';
import {PostFiles} from '../components/PostFiles';

export const PostDetailsScreen = () => {
  const dispatch = useAppDispatch();

  const handleAddPdfFile = async () => {
    try {
      const res = await DocumentPicker.pick();
      if (res[res.length - 1].uri) {
        dispatch(addPostFile(res[res.length - 1]));
        console.log(res);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Header title="تفاصيل الجلسة" />
      <Container>
        <PostFiles />
        <AddItem onPress={handleAddPdfFile} />
      </Container>
    </>
  );
};
