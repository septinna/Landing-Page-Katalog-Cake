import React, { useState } from 'react';
import { StyledHeader, Logo, NavContainer, NavLink } from '../components/styledHeader';
import logo from '../components/assets/logo.png';
import styled from 'styled-components';

const ResponsiveNavContainer = styled(NavContainer)`
  display: flex;
  @media (max-width: 768px) {
    display: none;
  }
`;

const HamburgerMenu = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: block;
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
    z-index: 1000;
    .bar {
      width: 25px;
      height: 3px;
      background-color: #333;
      margin: 5px 0;
    }
  }
`;

const DropdownMenu = styled.div`
  position: absolute;
  top: 60px; /* Sesuaikan berdasarkan tinggi header Anda */
  right: 10px;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 10px;
  display: ${props => (props.isopen ? 'block' : 'none')}; /* Menggunakan ekspresi untuk menentukan tampilan */
`;

const Header = () => {
  const [isopen, setIsopen] = useState(false);

  const toggleMenu = () => {
    setIsopen(!isopen);
  };

  return (
    <StyledHeader>
      <Logo src={logo} alt="Toko Roti" />
      <ResponsiveNavContainer>
        <NavLink href="#">Home</NavLink>
        <NavLink href="#">About</NavLink>
        <NavLink href="#">Contact</NavLink>
      </ResponsiveNavContainer>
      <HamburgerMenu onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </HamburgerMenu>
      {isopen && (
        <DropdownMenu>
          <NavLink href="#">Home</NavLink>
          <NavLink href="#">About</NavLink>
          <NavLink href="#">Contact</NavLink>
        </DropdownMenu>
      )}
    </StyledHeader>
  );
};

export default Header;
