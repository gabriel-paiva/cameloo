import { Container, Text } from './styles';

export const Button = ({ textContent, onPress, isBordered = false, width }) => {
  return (
    <Container onPress={onPress} isBordered={isBordered} width={width}>
      <Text>{textContent}</Text>
    </Container>
  );
};
