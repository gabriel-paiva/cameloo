import { Container } from './styles';
import { Button, Text, InputText, Header } from '../../../components';

export const Login = () => {
  return (
    <Container>
      <Header pageName="Login" />
      <InputText placeholder="E-mail" />
      <InputText placeholder="Senha" showPasswordIconVisibility />
      <InputText placeholder="Confirmar a senha" showPasswordIconVisibility />
      <Button textContent="Entrar" isBordered />
    </Container>
  );
};
