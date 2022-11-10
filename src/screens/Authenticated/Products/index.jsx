import { Container } from './styles';
import { Text, ButtonProduct } from '../../../components';

export const Products = () => {
  return (
    <Container>
      <Text>PRODUCTS PAGE</Text>
      <ButtonProduct
        imageUrl={
          'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2080&q=80'
        }
        onPress={() => {
          console.log('click');
        }}
        name="Nome do Produto"
        numberOfStars={5}
        price="R$ 20,00"
        date="11/11/2022"
        inventory={5}
      />
    </Container>
  );
};
