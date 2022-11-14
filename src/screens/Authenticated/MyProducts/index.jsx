import { useState } from 'react';
import { Container } from './styles';
import { ButtonProduct, Header, Button } from '../../../components';
import { productsMock } from '../../../utils/productsMock';
import { useNavigation } from '@react-navigation/native';

export const MyProducts = () => {
  const [productsList, setProductsList] = useState([...productsMock]);
  const navigation = useNavigation();
  return (
    <Container>
      <Header pageName="Meus Produtos" />
      <Button
        textContent="Adicionar Produto"
        isBordered
        width={180}
        onPress={() => {
          navigation.navigate('ProductCreate');
        }}
      />
      {productsList.map((product) => (
        <ButtonProduct
          key={product.id}
          imageUrl={product.imageUrl}
          onPress={() => {
            navigation.navigate('Product', { id: product.id });
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
