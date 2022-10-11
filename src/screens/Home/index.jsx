import { Container } from './styles';
import { Button, Logo, Text } from '../../components';

export const Home = () => {
  return (
    <Container>
      <Logo />
      <Button textContent="Entre" />
      <Text>OU</Text>
      <Button textContent="Cadastre-se" />
    </Container>
  );
};
