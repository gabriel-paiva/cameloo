import { useState } from 'react';
import { Container, Text } from './styles';
import {
  Header,
  Button,
  ButtonCategory,
  ButtonImage,
} from '../../../components';
import { useNavigation } from '@react-navigation/native';
import { View } from 'react-native';
import { productsMock } from '../../../utils/productsMock';

export const Feed = () => {
  const navigation = useNavigation();
  const [products, setProducts] = useState([...productsMock].slice(2));
  return (
    <Container>
      <Header />
      <View
        style={{
          flexDirection: 'row',
          gap: 8,
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
        }}
      >
        <ButtonCategory
          label="Eletrônicos"
          iconName="cellphone-link"
          onPress={() => {
            navigation.navigate('AllProducts');
          }}
        />
        <ButtonCategory
          label="Esportes"
          iconName="bowling"
          onPress={() => {
            navigation.navigate('AllProducts');
          }}
        />
        <ButtonCategory
          label="Livros"
          iconName="book-open-variant"
          onPress={() => {
            navigation.navigate('AllProducts');
          }}
        />
        <ButtonCategory
          label="Decoração"
          iconName="chandelier"
          onPress={() => {
            navigation.navigate('AllProducts');
          }}
        />
        <ButtonCategory
          label="Ferramentas"
          iconName="hammer"
          onPress={() => {
            navigation.navigate('AllProducts');
          }}
        />
      </View>
      <Text>Novidades da semana</Text>
      <View style={{ flexDirection: 'row', gap: 8 }}>
        {products.map((product) => (
          <ButtonImage
            imageUrl={product.imageUrl}
            onPress={() => {
              navigation.navigate('Product', { id: product.id });
            }}
          />
        ))}
      </View>
      <Text>Baseado em suas buscas</Text>
      <View style={{ flexDirection: 'row', gap: 8 }}>
        {products.map((product) => (
          <ButtonImage
            imageUrl={product.imageUrl}
            onPress={() => {
              navigation.navigate('Product', { id: product.id });
            }}
          />
        ))}
      </View>
    </Container>
  );
};
