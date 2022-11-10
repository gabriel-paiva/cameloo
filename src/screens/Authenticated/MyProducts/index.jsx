import { useState } from 'react';
import { Container } from './styles';
import { ButtonProduct, Header } from '../../../components';
import { productsMock } from '../../../utils/productsMock';

export const MyProducts = () => {
  const [productsList, setProductsList] = useState([...productsMock]);
  return (
    <Container>
      <Header pageName="Meus Produtos" />
      {productsList.map((product) => (
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
    </Container>
  );
};
