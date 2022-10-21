import styled from 'styled-components/native';
import colors from '../../utils/colors';

export const LogoContainer = styled.View`
  width: 150px;
  height: 150px;
  background-color: ${colors.black};
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  margin-bottom: ${({ marginBottom }) => marginBottom ?? 0};
`;

export const Image = styled.Image`
  height: 110px;
  width: 90px;
`;
