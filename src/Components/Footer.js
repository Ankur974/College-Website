import React from 'react';
import styled from 'styled-components';
import { FaFacebookF, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6"; 

const FooterSection = styled.footer`
  background-color: #000000;
  color: #ffffff;
  padding: 80px 60px 40px 60px;
  font-family: 'Inter', sans-serif;

  /* Tablet (768px) */
  @media (max-width: 768px) {
    padding: 60px 30px 40px 30px;
  }

  /* Mobile (360px) */
  @media (max-width: 480px) {
    padding: 40px 20px 30px 20px;
  }
`;

const FooterGrid = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 40px;
  margin-bottom: 80px;
  max-width: 1400px;
  margin-left: auto;
  margin-right: auto;

  /* Mobile: Reduce bottom margin */
  @media (max-width: 480px) {
    flex-direction: column;
    gap: 30px;
    margin-bottom: 40px;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 200px;
  
  /* Allows columns to fill space on tablet */
  flex: 1; 

  /* Mobile: Full width */
  @media (max-width: 480px) {
    min-width: 100%;
    flex: none;
  }
`;

const ColumnTitle = styled.h4`
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  font-size: 24px;
  line-height: 28px;
  letter-spacing: 0%;
  color: #FFFFFF;
  margin-bottom: 24px;
  margin-top: 0;

  @media (max-width: 480px) {
    font-size: 20px;
    margin-bottom: 16px;
  }
`;

const FooterLink = styled.a`
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 44px;
  letter-spacing: 0%;
  color: #A1A6AC;
  text-decoration: none;
  cursor: pointer;
  transition: color 0.2s;
  white-space: nowrap;

  &:hover {
    color: #ffffff;
  }

  /* Mobile: Reduce line height slightly to save vertical space */
  @media (max-width: 480px) {
    line-height: 36px;
    font-size: 15px;
  }
`;

const Divider = styled.div`
  height: 1px;
  background-color: #333;
  margin-bottom: 40px;
  width: 100%;
`;

const BottomBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
  color: #A1A6AC;
  font-size: 14px;

  /* Tablet & Mobile: Center content and stack */
  @media (max-width: 900px) {
    flex-direction: column-reverse;
    text-align: center;
    gap: 30px;
  }
`;

const LegalLinks = styled.div`
  display: flex;
  gap: 30px;
  flex-wrap: wrap;
  justify-content: center;
  
  span {
    cursor: pointer;
    &:hover { color: white; }
  }
  
  /* Vertical separator lines */
  span:not(:last-child)::after {
    content: '|';
    margin-left: 30px;
    color: #333;
  }

  /* Tablet adjustments */
  @media (max-width: 768px) {
    gap: 15px;
    span:not(:last-child)::after {
      margin-left: 15px;
    }
  }

  /* Mobile: Stack vertically and remove separators */
  @media (max-width: 480px) {
    flex-direction: column;
    gap: 12px;
    
    span:not(:last-child)::after {
      content: '';
      margin: 0;
    }
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 20px;
`;

const IconWrapper = styled.a`
  color: white;
  font-size: 20px;
  cursor: pointer;
  background: white;
  color: black;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s;

  &:hover {
    background: #CB0B19;
    color: white;
  }
`;

const Footer = () => {
  return (
    <FooterSection>
      <FooterGrid>
        {/* Column 1: About */}
        <Column>
          <ColumnTitle>About</ColumnTitle>
          <FooterLink href="#">Principal's Desk</FooterLink>
          <FooterLink href="#">Prefects and Captains</FooterLink>
          <FooterLink href="#">Synopsis on DC</FooterLink>
          <FooterLink href="#">Alumni / ODA</FooterLink>
          <FooterLink href="#">Campus</FooterLink>
          <FooterLink href="#">Facilities</FooterLink>
          <FooterLink href="#">Location</FooterLink>
        </Column>

        {/* Column 2: History */}
        <Column>
          <ColumnTitle>History</ColumnTitle>
          <FooterLink href="#">Evolution</FooterLink>
          <FooterLink href="#">Founder of DC</FooterLink>
          <FooterLink href="#">Presidents of the Board</FooterLink>
          <FooterLink href="#">Original Donors</FooterLink>
          <FooterLink href="#">Patrons of the College</FooterLink>
          <FooterLink href="#">Principals at DC</FooterLink>
          <FooterLink href="#">First Batch</FooterLink>
          <FooterLink href="#">The College Coat of Arms</FooterLink>
          <FooterLink href="#">Visits of Dignitaries</FooterLink>
        </Column>

        {/* Column 3: Admission */}
        <Column>
          <ColumnTitle>Admission</ColumnTitle>
          <FooterLink href="#">Admission Procedure</FooterLink>
          <FooterLink href="#">E-Brochure</FooterLink>
          <FooterLink href="#">Fee Structure</FooterLink>
          <FooterLink href="#">Registration</FooterLink>
        </Column>

        {/* Column 4: Academics */}
        <Column>
          <ColumnTitle>Academics</ColumnTitle>
          <FooterLink href="#">Committee</FooterLink>
          <FooterLink href="#">Mandatory Disclosure</FooterLink>
          <FooterLink href="#">Transfer Certificate</FooterLink>
        </Column>

        {/* Column 5: Career & Guidance */}
        <Column>
          <ColumnTitle>Career & College Guidance</ColumnTitle>
          <FooterLink href="#">Career Guidance Activities</FooterLink>
          <FooterLink href="#">ICS Career Login</FooterLink>
          <FooterLink href="#">Placement Records</FooterLink>
          <FooterLink href="#">Career Guidance Calendar</FooterLink>
        </Column>
      </FooterGrid>

      <Divider />

      <BottomBar>
        <LegalLinks>
          <span>© 2025 Daly College Indore</span>
          <span>Privacy Policy</span>
          <span>Terms of Use</span>
          <span>Sitemap</span>
        </LegalLinks>

        <SocialIcons>
          <IconWrapper href="#"><FaFacebookF size={16}/></IconWrapper>
          <IconWrapper href="#"><FaXTwitter size={16}/></IconWrapper>
          <IconWrapper href="#"><FaInstagram size={18}/></IconWrapper>
          <IconWrapper href="#"><FaYoutube size={16}/></IconWrapper>
        </SocialIcons>
      </BottomBar>
    </FooterSection>
  );
};

export default Footer;