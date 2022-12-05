import { LogoContainer, Image } from './styles';
import { Logo as LogoImage } from '../../assets/images';
import { Header } from '..';

export const LogoBackground = () => {
  return (
    <LogoContainer>
      <Image source={LogoImage} />
    </LogoContainer>
  );
};
