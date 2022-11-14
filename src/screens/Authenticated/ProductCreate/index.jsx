import { Container } from './styles';
import { Button, InputText, Header } from '../../../components';
import { useNavigation } from '@react-navigation/native';
import { useForm, Controller } from 'react-hook-form';

export const ProductCreate = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigation = useNavigation();

  const handleCreate = async (data) => {
    console.log(data);
    navigation.navigate('MyProducts');
  };
  return (
    <Container>
      <Header pageName="Cadastrar Produto" />

      <Controller
        control={control}
        name="name"
        render={({ field: { onChange } }) => (
          <InputText placeholder="Nome do Produto" onChangeText={onChange} />
        )}
      />
      <Controller
        control={control}
        name="category"
        render={({ field: { onChange } }) => (
          <InputText placeholder="Categoria" onChangeText={onChange} />
        )}
      />
      <Controller
        control={control}
        name="price"
        render={({ field: { onChange } }) => (
          <InputText placeholder="Preço" onChangeText={onChange} />
        )}
      />
      <Controller
        control={control}
        name="inventory"
        render={({ field: { onChange } }) => (
          <InputText placeholder="Estoque" onChangeText={onChange} />
        )}
      />
      <Controller
        control={control}
        name="imageUrl"
        render={({ field: { onChange } }) => (
          <InputText placeholder="URL da imagem" onChangeText={onChange} />
        )}
      />

      <Button
        textContent="Cadastrar"
        isBordered
        onPress={handleSubmit(handleCreate)}
      />
    </Container>
  );
};
