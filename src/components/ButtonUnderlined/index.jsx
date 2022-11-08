import colors from '../../utils/colors';
import { Container, Text } from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import { FontAwesome } from '@expo/vector-icons';

export const ButtonUnderlined = ({ textContent, onPress, iconName }) => {
  return (
    <Container
      onPress={onPress}
      style={{ borderBottomWidth: 2, borderBottomColor: colors.orange }}
    >
      <FontAwesome
        name={iconName || 'home'}
        size={22}
        color={colors.orange}
        style={{ marginRight: 8 }}
      />
      <Text>{textContent}</Text>
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
