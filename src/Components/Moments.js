import React, { useState } from 'react';
import styled from 'styled-components';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

const Section = styled.section`
  padding: 80px 0;
  background-color: #ffffff;
  font-family: 'Inter', sans-serif;
  text-align: center;
  overflow: hidden;
  @media (max-width: 768px) { padding: 40px 0; }
`;

const Header = styled.div`
  margin-bottom: 40px;
  padding: 0 20px;
`;

const Title = styled.h2`
  font-weight: 700;
  font-size: 48px;
  color: #000000;
  margin-bottom: 15px;
  @media (max-width: 768px) { font-size: 32px; }
`;

const Subtitle = styled.p`
  font-size: 18px;
  color: #333;
  margin: 0;
  font-weight: 400;
  opacity: 0.8;
`;

const TabsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-top: 30px;
  margin-bottom: 50px;
  flex-wrap: wrap; /* Tabs mobile par wrap ho jayein */
`;

const TabButton = styled.button`
  padding: 10px 24px;
  border-radius: 30px;
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s;
  background-color: ${props => props.active ? '#000000' : '#ffffff'};
  color: ${props => props.active ? '#ffffff' : '#000000'};
  border: 1px solid ${props => props.active ? '#000000' : '#e0e0e0'};

  &:hover {
    border-color: #000;
  }
`;

const CarouselWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 550px; 
  display: flex;
  justify-content: center;
  align-items: center;
  perspective: 1200px;

  /* Mobile Fix: Height kam ki */
  @media (max-width: 768px) {
    height: 350px;
  }
`;

const NavButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 50px;
  height: 50px;
  background: white;
  border-radius: 50%;
  border: 1px solid #ddd;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 30;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
  transition: all 0.3s;

  &.left { left: 10%; }
  &.right { right: 10%; }
  
  /* Mobile Fix: Buttons ko thoda andar laye */
  @media (max-width: 768px) {
    width: 40px; height: 40px;
    &.left { left: 2%; }
    &.right { right: 2%; }
  }

  &:hover {
    background: #000;
    color: white;
    border-color: #000;
  }
`;

const Card = styled.div`
  position: absolute;
  width: 550px; 
  height: 380px;
  background: #eee;
  border-radius: 16px;
  overflow: hidden;
  transition: all 0.6s cubic-bezier(0.25, 0.8, 0.25, 1);
  box-shadow: 0 15px 40px rgba(0,0,0,0.25);
  
  transform: ${props => props.transform};
  z-index: ${props => props.zIndex};
  opacity: ${props => props.opacity};
  filter: ${props => props.blur};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 30%;
    background: linear-gradient(to top, rgba(0,0,0,0.4), transparent);
    pointer-events: none;
  }

  /* Mobile Fix: Card size chota kiya */
  @media (max-width: 768px) {
    width: 300px;
    height: 200px;
  }
`;

const FooterButton = styled.button`
  background-color: #CB0B19;
  color: white;
  padding: 16px 40px;
  border: none;
  border-radius: 6px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  margin-top: 20px;
  
  &:hover {
    background-color: #a80915;
  }
`;

const Moments = () => {
  const [activeIndex, setActiveIndex] = useState(2);
  const images = ["3.svg", "3.svg", "3.svg", "3.svg", "3.svg"];

  const handleNext = () => setActiveIndex((prev) => (prev + 1) % images.length);
  const handlePrev = () => setActiveIndex((prev) => (prev - 1 + images.length) % images.length);

  const getCardStyle = (index) => {
    const diff = (index - activeIndex + images.length) % images.length;
    if (diff === 0) return { transform: 'translateX(0) translateY(0) scale(1.1)', zIndex: 10, opacity: 1, blur: 'blur(0px)' };
    if (diff === images.length - 1) return { transform: 'translateX(-65%) translateY(40px) scale(0.9) rotateY(10deg)', zIndex: 5, opacity: 0.9, blur: 'blur(1px)' };
    if (diff === 1) return { transform: 'translateX(65%) translateY(40px) scale(0.9) rotateY(-10deg)', zIndex: 5, opacity: 0.9, blur: 'blur(1px)' };
    if (diff === images.length - 2) return { transform: 'translateX(-120%) translateY(90px) scale(0.8) rotateY(20deg)', zIndex: 1, opacity: 0.6, blur: 'blur(3px)' };
    return { transform: 'translateX(120%) translateY(90px) scale(0.8) rotateY(-20deg)', zIndex: 1, opacity: 0.6, blur: 'blur(3px)' };
  };

  return (
    <Section>
      <Header>
        <Title>Moments @ Daly</Title>
        <Subtitle>Explore events, achievements, and everyday moments that define us.</Subtitle>
      </Header>
      <TabsContainer>
        <TabButton active>Photo Gallery</TabButton>
        <TabButton>Video Gallery</TabButton>
        <TabButton>Print Media</TabButton>
      </TabsContainer>
      <CarouselWrapper>
        <NavButton className="left" onClick={handlePrev}><FaArrowLeft /></NavButton>
        {images.map((src, index) => {
          const style = getCardStyle(index);
          return (
            <Card key={index} {...style}>
              <img src={src} alt={`Moment ${index}`} onError={(e) => {e.target.src = "https://placehold.co/550x380"}} />
            </Card>
          );
        })}
        <NavButton className="right" onClick={handleNext}><FaArrowRight /></NavButton>
      </CarouselWrapper>
      <FooterButton>Explore Image Gallery</FooterButton>
    </Section>
  );
};

export default Moments;