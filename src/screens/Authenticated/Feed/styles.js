import styled from 'styled-components/native';
import colors from '../../../utils/colors';

export const Container = styled.View`
  flex: 1;
  align-items: flex-start;
  justify-content: flex-start;
  background-color: #fffcee;
  padding: 20px;
`;

export const Text = styled.Text`
  color: ${colors.black};
  font-size: 22px;
  font-weight: 500;
  margin-top: 20px;
  margin-bottom: 10px;
`;
