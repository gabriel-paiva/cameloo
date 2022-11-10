import styled from 'styled-components/native';
import colors from '../../utils/colors';

export const Container = styled.TouchableOpacity`
  flex-direction: row;
  width: 90%;
  height: 140px;
  align-items: center;
  justify-content: center;
  background-color: ${colors.yellow};
`;

export const Text = styled.Text`
  color: ${colors.black};
  font-weight: 500;
  font-size: 14px;
`;
