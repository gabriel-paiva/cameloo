import { Container } from './styles';
import { Text, Header, ButtonProduct } from '../../../components';
import { useCart } from '../../../hooks/cart.jsx';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import colors from '../../../utils/colors';
import { formatCurrency } from '../../../utils/formatCurrency';

export const Cart = () => {
  const { items, calculateTotal, remove } = useCart();
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
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}
            >
              <ButtonProduct
                key={product.id}
                imageUrl={product.imageUrl}
                onPress={() => {
                  console.log('click');
                }}
                name={product.name}
                numberOfStars={product.numberOfStars}
                price={product.price}
                seller={product.seller}
                quantity={product.quantity}
                showIcon={false}
              />
              <Icon.Button
                name="remove"
                size={20}
                color={colors.red}
                backgroundColor="transparent"
                onPress={() => {
                  remove(product.id);
                }}
              />
            </View>
          ))}
          <Text>Total: {formatCurrency(calculateTotal())}</Text>
        </>
      )}
    </Container>
  );
};
