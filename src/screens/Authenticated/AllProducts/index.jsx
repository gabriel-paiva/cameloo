import { useState } from 'react';
import { Container } from './styles';
import { ButtonProduct, Header } from '../../../components';
import { productsMock } from '../../../utils/productsMock';
import { useNavigation } from '@react-navigation/native';

export const AllProducts = () => {
  const [productsList, setProductsList] = useState([...productsMock]);
  const navigation = useNavigation();
  return (
    <Container>
      <Header pageName="Ver Produtos" />
      {productsList.map((product) => (
        <ButtonProduct
          key={product.id}
          imageUrl={product.imageUrl}
          onPress={() => {
            navigation.navigate('Product', { id: product.id, canBuy: true });
          }}
          name={product.name}
          numberOfStars={product.numberOfStars}
          price={product.price}
          inventory={product.inventory}
        />
      ))}
    </Container>
  );
};
