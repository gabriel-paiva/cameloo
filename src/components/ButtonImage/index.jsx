import { Container } from './styles';
import { Image } from 'react-native';

export const ButtonImage = ({ imageUrl, onPress }) => {
  return (
    <Container onPress={onPress}>
      <Image
        source={{
          uri: imageUrl,
        }}
        style={{
          width: 100,
          height: 100,
        }}
      />
    </Container>
  );
};
