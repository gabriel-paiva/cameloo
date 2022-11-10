import { Container } from './styles';
import { Text, Header } from '../../../components';
import { useCart } from '../../../hooks/cart.jsx';

export const Cart = () => {
  const { items } = useCart();
  return (
    <Container>
      <Header pageName="Carrinho" />
      <Text>CART PAGE</Text>
      <Text>{items.length} itens</Text>
    </Container>
  );
};
