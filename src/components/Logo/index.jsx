import { LogoContainer, Image } from './styles';
import { Logo as LogoImage } from '../../assets/images';

export const Logo = ({ marginBottom = 0 }) => {
  return (
    <LogoContainer marginBottom={marginBottom}>
      <Image source={LogoImage} />
    </LogoContainer>
  );
};
