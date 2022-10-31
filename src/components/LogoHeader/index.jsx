import { LogoContainer, Image } from './styles';
import { Logo as LogoImage } from '../../assets/images';

export const LogoHeader = () => {
  return (
    <LogoContainer>
      <Image source={LogoImage} />
    </LogoContainer>
  );
};
