import styled from 'styled-components/native';
import colors from '../../utils/colors';

export const Container = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  background-color: transparent;
`;

export const IconContainer = styled.View`
  width: 50px;
  height: 50px;
  border-radius: 100px;
  align-items: center;
  justify-content: center;
  background-color: ${colors.orange};
`;

export const Text = styled.Text`
  color: ${colors.black};
  font-weight: 600;
  font-size: 10px;
  margin-top: 6px;
`;
