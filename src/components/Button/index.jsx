import { Container, TextInButton } from './styles';

export const Button = (textContent, maxWidth, backgroundColor, textColor) => {
  return (
    <Container backgroundColor={backgroundColor} maxWidth={maxWidth}>
      <TextInButton textColor={textColor}>{textContent}</TextInButton>
    </Container>
  );
};
