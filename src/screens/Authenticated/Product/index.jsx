import { Container } from './styles';
import { Text, Header } from '../../../components';
import { useState, useEffect } from 'react';
import { productsMock } from '../../../utils/productsMock';
import { Image } from 'react-native';
import colors from '../../../utils/colors';

export const Product = ({ route }) => {
  const { id } = route.params;
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
      <Text>{product.name}</Text>
      <Text>{id}</Text>
    </Container>
  );
};
