import { Container, Text } from './styles';
import { Header, InputText, Button } from '../../../components';
import { useState, useEffect } from 'react';
import { productsMock } from '../../../utils/productsMock';
import { Image } from 'react-native';
import colors from '../../../utils/colors';

export const Product = ({ route }) => {
  const { id, canBuy = false } = route.params;
  const [product, setProduct] = useState({});

  useEffect(() => {
    const selectedProduct = productsMock.find((product) => product.id == id);
    setProduct(selectedProduct);
  }, []);

  return (
    <Container>
      <Header pageName="Detalhes do Produto" />
      <Image
        source={{
          uri: product.imageUrl,
        }}
        style={{
          width: 200,
          height: 200,
          border: `2px solid ${colors.orange}`,
        }}
      />
      <Text style={{ marginTop: 20 }}>{product.name}</Text>
      <InputText value={product.price} disabled />
      <InputText value={`Nota: ${product.numberOfStars}`} disabled />
      {/* @TODO: Colocar formulário de numero de itens aqui */}
      {canBuy && (
        <Button
          textContent="Adicionar ao carrinho"
          isBordered
          onPress={() => {
            console.log('click');
          }}
        />
      )}
    </Container>
  );
};
