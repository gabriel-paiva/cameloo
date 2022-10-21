import styled from 'styled-components/native';
import colors from '../../utils/colors';

export const Container = styled.TouchableOpacity`
  width: 135px;
  height: 40px;
  align-items: center;
  border-radius: 50px;
  background-color: ${({ isBordered }) =>
    isBordered ? colors.yellow : colors.black};
  border: ${({ isBordered }) =>
    isBordered ? `2px solid ${colors.black}` : 'none'};
  padding: 10px;
  margin: 10px;
`;

export const Text = styled.Text`
  color: ${colors.orange};
  font-weight: 500;
  font-size: 14px;
`;
