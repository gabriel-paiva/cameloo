import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  height: 40px;
  width: 280px;

  ${({ showPasswordIconVisibility }) =>
    showPasswordIconVisibility
      ? css`
          justify-content: space-between;
          flex-direction: row;
          align-items: center;
        `
      : css`
          justify-content: flex-start;
          align-items: flex-start;
        `};

  margin-left: ${({ marginLeft }) => (marginLeft ? `${marginLeft}px` : '0')};
  margin-right: ${({ marginRight }) =>
    marginRight ? `${marginRight}px` : '0'};
  margin-top: ${({ marginTop }) => (marginTop ? `${marginTop}px` : '0')};
  margin-bottom: ${({ marginBottom }) =>
    marginBottom ? `${marginBottom}px` : '0'};
  outline-style: 'none';
  outline: 'none';
  padding: 0 20px;
`;
