import { LogoHeader } from '..';
import { Container, Text } from './styles';
import colors from '../../utils/colors';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { View } from 'react-native';

export const Header = ({ pageName }) => {
  const navigation = useNavigation();
  return (
    <Container>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
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
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Text style={{ marginRight: 6 }}>CAMELOO</Text>
        <LogoHeader />
      </View>
    </Container>
  );
};
