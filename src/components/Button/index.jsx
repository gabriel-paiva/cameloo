import { Text } from 'react-native';
import { Container } from './styles';

export const Button = ({ textContent, onPress }) => {
  return (
    <Container onPress={onPress}>
      <Text>{textContent}</Text>
    </Container>
  );
};
