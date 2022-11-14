import { Container } from './styles';
import { Button, InputText, Header } from '../../../components';
import { useNavigation } from '@react-navigation/native';
import { useForm, Controller } from 'react-hook-form';

export const ProfileEdit = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigation = useNavigation();

  const handleEdit = async (data) => {
    console.log(data);
    navigation.navigate('Profile');
  };
  return (
    <Container>
      <Header pageName="Editar Perfil" />

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
        name="imageUrl"
        render={({ field: { onChange } }) => (
          <InputText placeholder="URL do Avatar" onChangeText={onChange} />
        )}
      />
      <Controller
        control={control}
        name="address"
        render={({ field: { onChange } }) => (
          <InputText placeholder="Endereço Completo" onChangeText={onChange} />
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
            placeholder="Confirme a nova Senha"
            onChangeText={onChange}
            secureTextEntry
          />
        )}
      />

      <Button
        textContent="Salvar"
        isBordered
        onPress={handleSubmit(handleEdit)}
      />
    </Container>
  );
};
