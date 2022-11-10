import { Container } from './styles';
import { Text, Header } from '../../../components';
import { useCart } from '../../../hooks/cart.jsx';

export const Cart = () => {
  const { items } = useCart();
  const isCardEmpty = items.length < 1;
  return (
    <Container>
      <Header pageName="Carrinho" />
      {isCardEmpty && (
        <Text>Seu carrinho está vazio, faça algumas compras!</Text>
      )}

      <Text>{items.length} itens</Text>
    </Container>
  );
};
