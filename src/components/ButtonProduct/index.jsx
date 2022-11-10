import colors from '../../utils/colors';
import { Container, Text } from './styles';
import { View, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export const ButtonProduct = ({
  imageUrl,
  onPress,
  name,
  numberOfStars,
  price,
  date,
  inventory,
}) => {
  return (
    <Container
      onPress={onPress}
      style={{
        borderBottomWidth: 2,
        borderBottomColor: colors.orange,
      }}
    >
      <Image
        source={{
          uri: imageUrl,
        }}
        style={{
          width: 100,
          height: 100,
          border: `2px solid ${colors.orange}`,
          marginRight: 10,
        }}
      />
      <View style={{ height: 100, justifyContent: 'space-between' }}>
        {name && <Text>{name}</Text>}
        {numberOfStars && <Text>Estrelas: {numberOfStars}</Text>}
        {price && <Text>{price}</Text>}
        {date && <Text>{date}</Text>}
        {inventory && <Text>Estoque: {inventory}</Text>}
      </View>
      <Icon
        name="chevron-right"
        size={16}
        color={colors.orange}
        backgroundColor="transparent"
        style={{ marginLeft: 'auto' }}
      />
    </Container>
  );
};
