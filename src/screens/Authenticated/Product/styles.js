import styled from 'styled-components/native';
import colors from '../../../utils/colors';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: flex-start;
  background-color: #fffcee;
`;

export const Text = styled.Text`
  color: ${colors.black};
  font-weight: 500;
  font-size: 14px;
`;
