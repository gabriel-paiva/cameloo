import { Container } from './styles';
import { View, Text, SafeAreaView } from 'react-native';
import { Button } from '../../components';

export const Home = () => {
  return (
    <Container>
      <SafeAreaView>
        <Text>Open up App.js to start working on your app!</Text>
        <Button textContent="Teste botão" />
      </SafeAreaView>
    </Container>
  );
};
