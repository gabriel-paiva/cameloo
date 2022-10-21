import { Container, Text } from './styles';

export const Button = ({ textContent, onPress, isBordered = false }) => {
  return (
    <Container onPress={onPress} isBordered={isBordered}>
      <Text>{textContent}</Text>
    </Container>
  );
};
