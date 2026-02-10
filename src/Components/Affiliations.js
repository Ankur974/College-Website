import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  padding: 50px 0;
  background-color: #ffffff; /* Section ka background white hi rahega */
  text-align: center;
`;

// Aapki di gayi specific styling yahan apply ki gayi hai
const Title = styled.h2`
  font-family: 'Inter', sans-serif;
  font-weight: 400;      /* Regular */
  font-style: normal;    /* Regular */
  font-size: 30px;
  line-height: 100%;
  letter-spacing: 0%;
  text-align: center;
  color: #000000;        /* Text ka color black */
  margin-bottom: 50px;   /* Thoda gap logos ke liye */
`;

const ScrollWrapper = styled.div`
  width: 100%;
  overflow-x: auto;
  overflow-y: hidden;
  white-space: nowrap;
  padding-bottom: 20px;
  
  scrollbar-width: none; 
  &::-webkit-scrollbar {
    display: none;
  }
`;

const LogoContainer = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 80px;
  min-width: 100%;
  justify-content: center;
  
  @media (max-width: 1200px) {
    justify-content: flex-start;
  }
`;

const Logo = styled.img`
  height: 60px;
  width: auto;
  object-fit: contain;
  flex-shrink: 0;
  cursor: pointer;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.1);
  }
`;

const Affiliations = () => {
  const logos = [
    "image 73.svg", 
    "image 74.svg", 
    "image 75.png", 
    "image 76.png", 
    "image 77.png", 
    "image 78.svg", 
    "image 79.png", 
    "image 80.png", 
    "image 82.svg", 
    
  ];

  return (
    <Section>
      <Title>Affiliations</Title>
      <ScrollWrapper>
        <LogoContainer>
          {logos.map((logo, index) => (
            <Logo 
              key={index} 
              src={logo} 
              alt={`Affiliation logo ${index + 1}`} 
              onError={(e) => {e.target.src = `https://placehold.co/100x60?text=Logo${index+1}`}} 
            />
          ))}
        </LogoContainer>
      </ScrollWrapper>
    </Section>
  );
};

export default Affiliations;