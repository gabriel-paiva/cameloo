import { Container } from './styles';
import { Text, Header, Button } from '../../../components';
import { useNavigation } from '@react-navigation/native';

export const Feed = () => {
  const navigation = useNavigation();
  return (
    <Container>
      <Header />
      <Text>FEED PAGE</Text>
      <Button
        textContent="Ver produtos"
        isBordered
        onPress={() => {
          navigation.navigate('AllProducts');
        }}
      />
    </Container>
  );
};
