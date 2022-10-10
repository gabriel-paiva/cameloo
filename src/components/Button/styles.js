import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6,
})`
  width: ${({ maxWidth }) => (maxWidth ? `${maxWidth}px` : '100%')};
  height: 56px;
  background-color: ${({ theme, backgroundColor }) =>
    backgroundColor ?? theme.colors.green_medium};
  padding: 19px;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  border-radius: ${({ activeBorderRadius }) =>
    activeBorderRadius ? '0px' : '5px'};
`;

export const TextInButton =
  styled.Text <
  ButtonProps >
  `
  color: ${({ theme, textColor }) => textColor ?? theme.colors.white};
  font-size: 14px;
  font-family: ${({ theme }) => theme.fontFamily.Montserrat_SemiBold};
`;
