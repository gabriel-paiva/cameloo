import styled from 'styled-components/native';
import colors from '../../utils/colors';

export const LogoContainer = styled.View`
  width: 100%;
  height: 300px;
  background-color: ${colors.black};
  justify-content: center;
  align-items: center;
  overflow: hidden;
  margin-bottom: 20px;
`;

export const Image = styled.Image`
  height: 200px;
  width: 170px;
  margin-top: 150px;
`;
