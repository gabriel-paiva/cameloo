import { useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Container, Text } from './styles';
import { Header, ButtonCategory, ButtonImage } from '../../../components';
import { useNavigation } from '@react-navigation/native';
import { productsMock } from '../../../utils/productsMock';
import colors from '../../../utils/colors';

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
      <View
        style={{
          flexDirection: 'row',
          width: '100%',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Text>Novidades da semana</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('AllProducts');
          }}
        >
          <Text style={{ color: colors.orange, fontSize: 14 }}>Ver mais</Text>
        </TouchableOpacity>
      </View>
      <View style={{ flexDirection: 'row', gap: 8 }}>
        {products.map((product) => (
          <ButtonImage
            key={product.id}
            imageUrl={product.imageUrl}
            onPress={() => {
              navigation.navigate('Product', { id: product.id, canBuy: true });
            }}
          />
        ))}
      </View>
      <View
        style={{
          flexDirection: 'row',
          width: '100%',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Text>Baseado em suas buscas</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('AllProducts');
          }}
        >
          <Text style={{ color: colors.orange, fontSize: 14 }}>Ver mais</Text>
        </TouchableOpacity>
      </View>
      <View style={{ flexDirection: 'row', gap: 8 }}>
        {products.map((product) => (
          <ButtonImage
            key={product.id}
            imageUrl={product.imageUrl}
            onPress={() => {
              navigation.navigate('Product', { id: product.id, canBuy: true });
            }}
          />
        ))}
      </View>
    </Container>
  );
};
