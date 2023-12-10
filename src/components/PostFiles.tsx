import {FlatList} from 'react-native';
import {useAppSelector} from '../app/hooks';
import {selectPostFiles} from '../app/posts/postsSlice';
import {BoxFile} from './BoxFile';

export const PostFiles: React.FC = () => {
  const postFiles = useAppSelector(selectPostFiles);

  return (
    <FlatList
      data={postFiles}
      contentContainerStyle={{justifyContent: 'space-between'}}
      keyExtractor={(item, index) => `${index}-${item.uri}`}
      renderItem={({item}) => (
        <BoxFile title={item.name} fileType={item.type} />
      )}
      horizontal={false}
      numColumns={3}
    />
  );
};
