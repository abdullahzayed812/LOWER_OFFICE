import {Container} from '../components/Container';
import {Header} from '../components/Header';
import {Input} from '../components/Input';
import {HomeContent} from '../components/HomeContent';

export const HomeScreen = () => {
  return (
    <>
      <Header title="Home" />
      <Container>
        <Input placeholder="Search about Qadia" />
        <HomeContent />
      </Container>
    </>
  );
};
