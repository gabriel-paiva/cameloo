import { LogoHeader } from '..';
import { Container, Text } from './styles';
import colors from '../../utils/colors';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

export const Header = ({ pageName }) => {
  const navigation = useNavigation();
  return (
    <Container>
      <Icon.Button
        name="chevron-left"
        size={20}
        color={colors.orange}
        backgroundColor="transparent"
        onPress={() => {
          navigation.goBack();
        }}
      />
      <Text>{pageName}</Text>
      <LogoHeader />
    </Container>
  );
};
