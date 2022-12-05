import { Container } from './styles';
import { Button, InputText, LogoBackground } from '../../../components';
import { useForm, Controller } from 'react-hook-form';
import { useAuth } from '../../../hooks/auth.jsx';

export const Login = () => {
  const { user, signIn } = useAuth();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleLogin = async (data) => {
    console.log(data);
    await signIn(data);
  };

  return (
    <Container>
      <LogoBackground />
      <Controller
        control={control}
        name="email"
        // rules={{
        //   required: 'Informe um e-mail',
        //   pattern: {
        //     value: /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i,
        //     message: 'E-mail Inválido',
        //   },
        // }}
        render={({ field: { onChange } }) => (
          <InputText placeholder="E-mail" onChangeText={onChange} />
        )}
      />
      <Controller
        control={control}
        name="password"
        // rules={{
        //   required: 'Informe uma senha',
        // }}
        render={({ field: { onChange } }) => (
          <InputText
            placeholder="Senha"
            onChangeText={onChange}
            secureTextEntry
          />
        )}
      />
      <Button
        textContent="Entrar"
        isBordered
        onPress={handleSubmit(handleLogin)}
      />
    </Container>
  );
};
