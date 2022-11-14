import { Container, Text } from './styles';
import { Button, Header } from '../../../components';
import { useNavigation } from '@react-navigation/native';
import { View } from 'react-native';
import colors from '../../../utils/colors';

export const BuyFinish = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <Text style={{ fontWeight: 600, fontSize: 16 }}>Compra Realizada!</Text>
      <View
        style={{
          marginTop: 20,
          marginBottom: 20,
          border: `1px solid ${colors.orange}`,
          borderRadius: 10,
          padding: 20,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text>Entrega prevista para:</Text>
        <Text>01/01/2023</Text>
      </View>

      <Button
        textContent="Continuar"
        isBordered
        onPress={() => {
          navigation.navigate('MyRequests');
        }}
      />
    </Container>
  );
};
