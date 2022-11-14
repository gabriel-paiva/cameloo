import { Container } from './styles';
import { Text, Header, ButtonProduct, Button } from '../../../components';
import { useCart } from '../../../hooks/cart.jsx';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import colors from '../../../utils/colors';
import { formatCurrency } from '../../../utils/formatCurrency';
import { useNavigation } from '@react-navigation/native';

export const Cart = () => {
  const { items, calculateTotal, remove } = useCart();
  const isCardEmpty = items.length < 1;
  const navigation = useNavigation();
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
              key={product.id}
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}
            >
              <ButtonProduct
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
          <Button
            textContent="Finalizar compra"
            width={180}
            isBordered
            onPress={() => {
              navigation.navigate('BuyPayment');
            }}
          />
        </>
      )}
    </Container>
  );
};
