import React, { useState } from 'react';
import styled from 'styled-components';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { GoArrowUpLeft, GoArrowUpRight } from "react-icons/go";

const Section = styled.section`
  padding: 80px 40px;
  background-color: #ffffff;
  font-family: 'Inter', sans-serif;
  
  @media (max-width: 768px) {
    padding: 40px 20px;
  }
`;

const HeaderRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 40px;
`;

const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Title = styled.h2`
  font-weight: 700;
  font-size: 48px;
  color: #000000;
  margin: 0;
  
  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

const Subtitle = styled.p`
  font-size: 18px;
  color: #333;
  margin: 0;
  font-weight: 400;
`;

const ArrowsContainer = styled.div`
  display: flex;
  gap: 15px;
  @media (max-width: 768px) { display: none; } /* Mobile par arrows chupaye */
`;

const ArrowButton = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 1px solid #ddd;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  color: #333;

  &:hover {
    border-color: #000;
    background: #f9f9f9;
  }
`;

const GalleryContainer = styled.div`
  display: flex;
  gap: 20px;
  height: 500px;
  width: 100%;
  
  /* Mobile Fix: Vertical Stack */
  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
  }
`;

const Card = styled.div`
  position: relative;
  height: 100%;
  border-radius: 20px;
  background-size: cover;
  background-position: center;
  cursor: pointer;
  transition: flex 0.6s cubic-bezier(0.25, 1, 0.5, 1);
  overflow: hidden;
  
  flex: ${props => props.active ? '3.5' : '0.5'};
  background-image: url(${props => props.image});

  /* Mobile Fix: Full Width & Fixed Height */
  @media (max-width: 768px) {
    width: 100%;
    height: 300px;
    flex: none;
    margin-bottom: 20px;
  }
`;

const InactiveOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(60, 50, 40, 0.7);
  opacity: ${props => props.active ? '0' : '1'};
  transition: opacity 0.4s;
  
  /* Mobile: Overlay hata diya taaki image dikhe */
  @media (max-width: 768px) {
    opacity: 0; 
  }
`;

const VerticalContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: ${props => props.active ? '0' : '1'};
  transition: opacity 0.3s;
  pointer-events: none;
  
  @media (max-width: 768px) { display: none; }
`;

const VerticalText = styled.div`
  transform: rotate(-90deg);
  white-space: nowrap;
  color: white;
  font-size: 20px;
  font-weight: 500;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  gap: 10px;
`;

const GlassBox = styled.div`
  position: absolute;
  bottom: 24px;
  left: 24px;
  background: rgba(0, 50, 50, 0.5); 
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 16px;
  padding: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  opacity: ${props => props.active ? '1' : '0'};
  transform: translateY(${props => props.active ? '0' : '20px'});
  transition: all 0.5s ease 0.2s;
  
  display: ${props => props.hideContent && props.active ? 'none' : 'flex'};

  /* Mobile: Always Show Box */
  @media (max-width: 768px) {
    opacity: 1;
    transform: translateY(0);
    display: flex;
    bottom: 15px;
    left: 15px;
    right: 15px;
    padding: 20px;
  }
`;

const ContentLeft = styled.div`
  max-width: 85%;
`;

const CardTitle = styled.h3`
  font-size: 32px;
  font-weight: 600;
  margin: 0 0 12px 0;
  color: white;
  font-family: 'Inter', sans-serif;
  @media (max-width: 768px) { font-size: 24px; }
`;

const CardDesc = styled.p`
  font-size: 16px;
  line-height: 1.5;
  margin: 0;
  color: rgba(255, 255, 255, 0.9);
  font-weight: 400;
  @media (max-width: 768px) { display: none; } /* Mobile par description chupaya */
`;

const ArrowIconWrapper = styled.div`
  color: white;
  font-size: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CampusInfrastructure = () => {
  const [activeIndex, setActiveIndex] = useState(2);

  const facilities = [
    { id: 0, title: "Hospital", desc: "24/7 medical care facilities.", image: "3.svg" },
    { id: 1, title: "Mess", desc: "Hygienic and nutritious meals.", image: "3.svg" },
    { id: 2, title: "Sports Facilities", desc: "DC has world class facilities.", image: "3.svg", isScreenshot: true },
    { id: 3, title: "Laboratories", desc: "State-of-the-art labs.", image: "3.svg" },
    { id: 4, title: "Design Center", desc: "Hub for creativity.", image: "3.svg" }
  ];

  const handlePrev = () => setActiveIndex((prev) => (prev === 0 ? facilities.length - 1 : prev - 1));
  const handleNext = () => setActiveIndex((prev) => (prev === facilities.length - 1 ? 0 : prev + 1));

  return (
    <Section>
      <HeaderRow>
        <TextContent>
          <Title>Our Campus & Infrastructure</Title>
          <Subtitle>Explore our state-of-the-art academic, residential, and sports facilities.</Subtitle>
        </TextContent>
        <ArrowsContainer>
          <ArrowButton onClick={handlePrev}><FaArrowLeft /></ArrowButton>
          <ArrowButton onClick={handleNext}><FaArrowRight /></ArrowButton>
        </ArrowsContainer>
      </HeaderRow>

      <GalleryContainer>
        {facilities.map((item, index) => (
          <Card 
            key={item.id} 
            active={index === activeIndex} 
            image={item.image}
            onClick={() => setActiveIndex(index)}
            onError={(e) => {if(!item.isScreenshot) e.target.style.backgroundImage = `url(https://placehold.co/600x800)`}}
          >
            <InactiveOverlay active={index === activeIndex} />
            <VerticalContainer active={index === activeIndex}>
              <VerticalText><GoArrowUpLeft size={20} /><span>{item.title}</span></VerticalText>
            </VerticalContainer>
            <GlassBox active={index === activeIndex} hideContent={item.isScreenshot}>
              <ContentLeft><CardTitle>{item.title}</CardTitle><CardDesc>{item.desc}</CardDesc></ContentLeft>
              <ArrowIconWrapper><GoArrowUpRight /></ArrowIconWrapper>
            </GlassBox>
          </Card>
        ))}
      </GalleryContainer>
    </Section>
  );
};

export default CampusInfrastructure;