import React from 'react';
import styled from 'styled-components';
import { FaGraduationCap, FaUserAlt, FaUsers, FaBookOpen, FaRegFileAlt } from "react-icons/fa"; 

const HeroSection = styled.section`
  height: 100vh;
  width: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), 
              url('Mask group.svg'); 
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  position: relative;
  padding: 0 20px; 
  
`;

const MainContent = styled.div`
  text-align: center;
  margin-bottom: 100px;
  width: 100%; 
`;

const Title = styled.h1`
  font-size: 85px;
  font-weight: 700;
  margin: 0;
  font-family: 'Inter', sans-serif;
  letter-spacing: -1px;

  /* Mobile Fix */
  @media (max-width: 768px) {
    font-size: 42px; 
    line-height: 1.1;
  }
`;

const Subtitle = styled.p`
  font-size: 22px;
  margin: 10px 0 40px 0;
  font-weight: 400;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap; 
`;

const RedButton = styled.button`
  background-color: #CB0B19;
  color: white;
  padding: 14px 28px;
  border: none;
  border-radius: 4px;
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 10px;
  white-space: nowrap;
`;

const OutlineButton = styled.button`
  background: rgba(255, 255, 255, 0.1);
  color: white;
  padding: 14px 28px;
  border: 1px solid white;
  border-radius: 4px;
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 10px;
  white-space: nowrap;
`;

/* --- BOTTOM OVERLAY FIX --- */
const BottomOverlay = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr); 
  
  /* Mobile Fix: Force Horizontal Layout with Scroll if needed */
  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr); /* Tablet: 2x2 grid */
  }

  /* YAHAN CHANGE KIYA HAI: Mobile par waisa hi rakha jaisa desktop par chahte hain */
  @media (max-width: 480px) {
    /* Agar aap chahte hain ki 4 items ek line mein dikhein (thoda chota hokar) */
    display: flex; 
    overflow-x: auto; /* Horizontal scroll agar screen choti ho */
    justify-content: space-between;
    background: transparent; /* Black background hataya */
    border-top: 1px solid rgba(255,255,255,0.1); /* Separator line upar */
    
    /* Scrollbar hide */
    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

const NavBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  padding: 30px 10px;
  border-right: 1px solid rgba(255, 255, 255, 0.1); 
  cursor: pointer;
  transition: background 0.3s;
  
  /* Background ensure transparent */
  background: transparent;

  &:last-child {
    border-right: none;
  }
  
  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }

  /* Mobile specific adjustments inside box */
  @media (max-width: 480px) {
    flex-direction: column; /* Icon upar, text neeche taaki fit ho */
    padding: 15px 10px;
    min-width: 80px; /* Minimum width taaki touch target bane */
    flex: 1; /* Barabar width lein */
    text-align: center;
    border-right: 1px solid rgba(255, 255, 255, 0.1); /* Border wapas laye */
    border-bottom: none; /* Bottom border hataya jo pichle code me tha */
    gap: 8px;
  }
`;

const NavText = styled.span`
  font-family: Inter;
  font-weight: 500;
  font-style: Medium;
  font-size: 16px;
  line-height: 100%;
  letter-spacing: 0%;
  text-align: left;

  @media (max-width: 480px) {
    font-size: 12px; /* Font size chota kiya mobile ke liye */
    text-align: center; /* Center align for stacked layout */
    line-height: 1.2;
  }
`;

const Hero = () => {
  return (
    <HeroSection>
      <MainContent>
        <Title>Live. Learn. Lead.</Title>
        <Subtitle>Shaping Leaders Since 1882</Subtitle>
        <ButtonGroup>
          <RedButton>
            <FaBookOpen /> Explore Admissions
          </RedButton>
          <OutlineButton>
            <FaRegFileAlt /> Enquire Now
          </OutlineButton>
        </ButtonGroup>
      </MainContent>

      <BottomOverlay>
        <NavBox>
          <FaGraduationCap size={28} />
          <NavText>Daly College of Business <br/> Management</NavText>
        </NavBox>
        <NavBox>
          <FaUserAlt size={22} />
          <NavText>Parent's Login</NavText>
        </NavBox>
        <NavBox>
          <FaUsers size={26} />
          <NavText>Old Dalian Association</NavText>
        </NavBox>
        <NavBox>
          <FaBookOpen size={22} />
          <NavText>The Daly Prophet</NavText>
        </NavBox>
      </BottomOverlay>
    </HeroSection>
  );
};

export default Hero;