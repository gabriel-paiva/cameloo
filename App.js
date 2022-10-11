import styled from 'styled-components/native';
import { NavigationContainer } from '@react-navigation/native';
import { View, Text } from 'react-native';
import { Button } from './src/components';

export default function App() {
  return (
    <View>
      <Text>Open up App.js to start working on your app!</Text>
      <Button textContent="Teste botão" />
    </View>
  );
}
