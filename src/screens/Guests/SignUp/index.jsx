import { Container } from './styles';
import { Button, Text, InputText, Header } from '../../../components';

export const SignUp = () => {
  return (
    <Container>
      <Header pageName="Cadastro" />
      <InputText placeholder="Nome" />
      <InputText placeholder="E-mail" />
      <InputText placeholder="Senha" />
      <InputText placeholder="Confirmar a senha" />
      <Button textContent="Cadastrar" isBordered />
    </Container>
  );
};
