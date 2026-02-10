import React, { useState } from 'react';
import styled from 'styled-components';
import { FaPhoneAlt } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5"; // Close icon add kiya

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 45px;
  position: absolute; 
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.7) 0%,
    rgba(0, 0, 0, 0) 100%
  );

  /* Mobile Fix */
  @media (max-width: 768px) {
    padding-right: 20px;
    padding-left: 20px;
  }
`;

const NavbarLogo = styled.img`
  width: 380px;
  height: 80px;
  object-fit: contain;

  /* Mobile Fix: Logo chota kiya */
  @media (max-width: 768px) {
    width: 200px;
    height: auto;
  }
`;

const NavbarContent = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;

  /* Mobile Fix: Gap kam kiya */
  @media (max-width: 768px) {
    gap: 15px;
  }
`;

const NavbarItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-family: Inter, sans-serif;
  font-weight: 500;
  font-size: 18px;
  line-height: 1;
  color: #ffffff;

  /* Mobile Fix: Phone/Email chupaya taaki jagah bache */
  &.hide-on-mobile {
    @media (max-width: 1024px) {
      display: none;
    }
  }
`;

const NavbarButton = styled.button`
  opacity: 1;
  border-radius: 6px;
  padding: 12px 18px;
  gap: 10px;
  background: #CB0B19;
  border: none;
  cursor: pointer;

  /* Mobile Fix: Button text size adjust */
  @media (max-width: 768px) {
    padding: 8px 12px;
  }
`;

const HamburgerIcon = styled.div`
  color: white;
  font-size: 24px;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

/* --- NEW: Mobile Side Menu Styles --- */
const MobileMenuOverlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 280px; /* Drawer width */
  background-color: #000000; /* Dark Background */
  z-index: 200; /* Navbar se upar */
  display: flex;
  flex-direction: column;
  padding: 30px;
  gap: 30px;
  transform: ${({ isOpen }) => (isOpen ? 'translateX(0)' : 'translateX(100%)')};
  transition: transform 0.3s ease-in-out;
  box-shadow: -5px 0 15px rgba(0,0,0,0.5);
`;

const CloseButtonWrapper = styled.div`
  align-self: flex-end;
  cursor: pointer;
  color: white;
`;

const MobileMenuItem = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  color: white;
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  font-weight: 500;
  border-bottom: 1px solid rgba(255,255,255,0.1);
  padding-bottom: 15px;
`;

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <NavbarContainer>
        <NavbarLogo src="/logo.svg" alt="logo" />
        <NavbarContent>
          {/* Desktop Items */}
          <NavbarItem className="hide-on-mobile">
            <FaPhoneAlt size={16} />
            <span>91(0731)2719000</span>
          </NavbarItem>
          <NavbarItem className="hide-on-mobile">
            <CiMail size={18} />
            <span>contact@dalycollege.org</span>
          </NavbarItem>
          
          <NavbarButton>
              <NavbarItem style={{fontSize: '16px'}}> 
                <span>ERP Login</span>
              </NavbarItem>
          </NavbarButton>
          
          {/* Hamburger Icon par Click Event */}
          <HamburgerIcon onClick={toggleMenu}>
            <GiHamburgerMenu size={24} />
          </HamburgerIcon>
        </NavbarContent>
      </NavbarContainer>

      {/* Mobile Side Menu */}
      <MobileMenuOverlay isOpen={isMenuOpen}>
        <CloseButtonWrapper onClick={toggleMenu}>
          <IoClose size={30} />
        </CloseButtonWrapper>

        {/* Menu Items (Jo desktop par chupe hue the) */}
        <MobileMenuItem>
          <FaPhoneAlt size={16} color="#CB0B19" />
          <span>91(0731)2719000</span>
        </MobileMenuItem>
        
        <MobileMenuItem>
          <CiMail size={18} color="#CB0B19" />
          <span>contact@dalycollege.org</span>
        </MobileMenuItem>

        <MobileMenuItem>
          <span>About Us</span>
        </MobileMenuItem>
        
        <MobileMenuItem>
          <span>Admissions</span>
        </MobileMenuItem>

        <MobileMenuItem>
          <span>Contact</span>
        </MobileMenuItem>
      </MobileMenuOverlay>
    </>
  );
};

export default Navbar;