import styled from 'styled-components/native';
import { NavigationContainer } from '@react-navigation/native';
import { Button } from './components';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Button
        backgroundColor="blue"
        textCOlor="#fff"
        textContent="Teste botão"
      />
    </View>
  );
}
