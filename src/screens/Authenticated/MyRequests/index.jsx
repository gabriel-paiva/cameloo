import { useState } from 'react';
import { Container } from './styles';
import { ButtonProduct, Header } from '../../../components';
import { productsMock } from '../../../utils/productsMock';

export const MyRequests = () => {
  const [productsList, setProductsList] = useState([...productsMock].slice(2));
  return (
    <Container>
      <Header pageName="Meus Pedidos" />
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
          date={product.date}
        />
      ))}
    </Container>
  );
};
