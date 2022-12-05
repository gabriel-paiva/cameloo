import { Container } from './styles';
import { Button, InputText, LogoBackground } from '../../../components';
import { useNavigation } from '@react-navigation/native';
import { useForm, Controller } from 'react-hook-form';

export const SignUp = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigation = useNavigation();

  const handleSignUp = async (data) => {
    console.log(data);
    navigation.navigate('Login');
  };
  return (
    <Container>
      <LogoBackground />

      <Controller
        control={control}
        name="name"
        render={({ field: { onChange } }) => (
          <InputText placeholder="Nome" onChangeText={onChange} />
        )}
      />
      <Controller
        control={control}
        name="email"
        render={({ field: { onChange } }) => (
          <InputText placeholder="E-mail" onChangeText={onChange} />
        )}
      />
      <Controller
        control={control}
        name="password"
        render={({ field: { onChange } }) => (
          <InputText
            placeholder="Senha"
            onChangeText={onChange}
            secureTextEntry
          />
        )}
      />
      <Controller
        control={control}
        name="confirm_password"
        render={({ field: { onChange } }) => (
          <InputText
            placeholder="Confirme a Senha"
            onChangeText={onChange}
            secureTextEntry
          />
        )}
      />

      <Button
        textContent="Cadastrar"
        isBordered
        onPress={handleSubmit(handleSignUp)}
      />
    </Container>
  );
};
