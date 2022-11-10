import { Container } from './styles';
import { Text, Header, Button, ButtonUnderlined } from '../../../components';
import { useAuth } from '../../../hooks/auth.jsx';
import { Image } from 'react-native';
import colors from '../../../utils/colors';
import { useNavigation } from '@react-navigation/native';

export const Profile = () => {
  const navigation = useNavigation();
  const { user, logout } = useAuth();
  return (
    <Container>
      <Header pageName="Perfil" />
      <Image
        source={{ uri: user.avatarUrl }}
        style={{
          width: 100,
          height: 100,
          border: `3px solid ${colors.orange}`,
        }}
      />
      <ButtonUnderlined
        textContent="Meus Pedidos"
        iconName="inbox"
        onPress={() => {
          navigation.navigate('MyRequests');
        }}
      />
      <ButtonUnderlined
        textContent="Meus Produtos"
        iconName="dropbox"
        onPress={() => {
          navigation.navigate('MyProducts');
        }}
      />
      <ButtonUnderlined
        textContent="Formas de Pagamento"
        iconName="money"
        onPress={() => {
          console.log('click');
        }}
      />
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
