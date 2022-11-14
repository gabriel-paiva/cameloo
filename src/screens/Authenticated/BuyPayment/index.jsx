import { Container } from './styles';
import { Button, InputText, Header } from '../../../components';
import { useNavigation } from '@react-navigation/native';
import { useForm, Controller } from 'react-hook-form';

export const BuyPayment = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigation = useNavigation();

  const handleCreate = async (data) => {
    console.log(data);
    navigation.navigate('BuyFinish');
  };
  return (
    <Container>
      <Header pageName="Pagamento" />

      <Controller
        control={control}
        name="cardnumber"
        render={({ field: { onChange } }) => (
          <InputText placeholder="Numero do cartão" onChangeText={onChange} />
        )}
      />
      <Controller
        control={control}
        name="cvv"
        render={({ field: { onChange } }) => (
          <InputText placeholder="CVV" onChangeText={onChange} />
        )}
      />
      <Controller
        control={control}
        name="date"
        render={({ field: { onChange } }) => (
          <InputText placeholder="Data de Vencimento" onChangeText={onChange} />
        )}
      />

      <Button
        textContent="Comprar"
        isBordered
        onPress={handleSubmit(handleCreate)}
      />
    </Container>
  );
};
