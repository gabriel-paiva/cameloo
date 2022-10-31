import styled from 'styled-components/native';
import colors from '../../utils/colors';

export const Container = styled.View`
  width: 100%;
  height: 80px;
  justify-content: space-between;
  flex-direction: row;
  padding: 20px;
  position: fixed;
  top: 0;
  align-items: center;
`;

export const Text = styled.Text`
  color: ${colors.black};
  font-weight: 500;
  font-size: 14px;
`;
