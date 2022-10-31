import { Container } from './styles';
import { useNavigation } from '@react-navigation/native';
import { Button, Logo, Text } from '../../../components';

export const Home = () => {
  const navigation = useNavigation();
  return (
    <Container>
      <Logo marginBottom={'70px'} />
      <Button textContent="Entre" />
      <Text style={{ marginTop: '100px' }}>OU</Text>
      <Button
        textContent="Cadastre-se"
        isBordered
        onPress={() => {
          navigation.navigate('SignUp');
        }}
      />
    </Container>
  );
};
