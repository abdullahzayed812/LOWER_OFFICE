import {FlatList} from 'react-native';
import {Container} from '../components/Container';
import {Header} from '../components/Header';
import {Month} from '../components/Month';

const MONTHS_LIST: string[] = [
  'شهر 1',
  'شهر 2',
  'شهر 3',
  'شهر 4',
  'شهر 5',
  'شهر 6',
  'شهر 7',
  'شهر 8',
  'شهر 9',
  'شهر 10',
  'شهر 11',
  'شهر 12',
];

export const MonthsScreen = () => {
  return (
    <>
      <Header title="جلسات السنة" />
      <Container>
        <FlatList
          data={MONTHS_LIST}
          keyExtractor={item => item}
          renderItem={({item, index}) => <Month text={item} index={index} />}
          showsVerticalScrollIndicator={false}
        />
      </Container>
    </>
  );
};
