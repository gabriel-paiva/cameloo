import { Container } from './styles';
import { Text, Header, Button } from '../../../components';
import { useAuth } from '../../../hooks/auth.jsx';

export const Profile = () => {
  const { user, logout } = useAuth();
  return (
    <Container>
      <Header pageName="Perfil" />
      <Text>PROFILE PAGE</Text>
      <Button
        textContent="Sair"
        isBordered
        onPress={() => {
          logout();
        }}
      />
    </Container>
  );
};
