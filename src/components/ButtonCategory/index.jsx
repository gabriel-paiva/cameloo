import { Container, Text, IconContainer } from './styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../../utils/colors';

export const ButtonCategory = ({ label, iconName, onPress }) => {
  return (
    <Container onPress={onPress}>
      <IconContainer>
        <Icon
          name={iconName}
          size={30}
          color={colors.black}
          backgroundColor="transparent"
        />
      </IconContainer>
      <Text>{label}</Text>
    </Container>
  );
};
