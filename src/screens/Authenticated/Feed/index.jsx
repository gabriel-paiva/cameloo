import { Container, Text } from './styles';
import { Header, Button, ButtonCategory } from '../../../components';
import { useNavigation } from '@react-navigation/native';
import { View } from 'react-native';

export const Feed = () => {
  const navigation = useNavigation();
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
      <Button
        textContent="Ver produtos"
        isBordered
        onPress={() => {
          navigation.navigate('AllProducts');
        }}
      />
      <Text>Baseado em suas buscas</Text>
      <Button
        textContent="Ver produtos"
        isBordered
        onPress={() => {
          navigation.navigate('AllProducts');
        }}
      />
    </Container>
  );
};
