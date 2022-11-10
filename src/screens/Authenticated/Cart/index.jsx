import { Container } from './styles';
import { Text, Header, ButtonProduct } from '../../../components';
import { useCart } from '../../../hooks/cart.jsx';

export const Cart = () => {
  const { items, calculateTotal } = useCart();
  const isCardEmpty = items.length < 1;
  return (
    <Container>
      <Header pageName="Carrinho" />
      {isCardEmpty && (
        <Text>Seu carrinho está vazio, faça algumas compras!</Text>
      )}

      {!isCardEmpty && (
        <>
          {items.map((product) => (
            <ButtonProduct
              key={product.id}
              imageUrl={product.imageUrl}
              onPress={() => {
                console.log('click');
              }}
              name={product.name}
              numberOfStars={product.numberOfStars}
              price={product.price}
              inventory={product.inventory}
            />
          ))}
          <Text>Total: {calculateTotal()}</Text>
        </>
      )}
    </Container>
  );
};
