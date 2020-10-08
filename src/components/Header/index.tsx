import React from 'react';
import { Container } from '../Header/style';
import Logo from '../../assets/img_logo.png';
const HeaderLogo: React.FC = () => {
  return (
    <Container id="header" className="p-4">
      < img id="logo" src={Logo} alt="TMB"  />

    </Container>


  );
}

export default HeaderLogo;