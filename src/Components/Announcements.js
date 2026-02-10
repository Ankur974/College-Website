import React, { useRef } from 'react';
import styled from 'styled-components';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

const Section = styled.section`
  padding: 80px 60px;
  background-color: #ffffff;
  font-family: 'Inter', sans-serif;

  /* Mobile Fix: Padding kam ki taaki content compress na ho */
  @media (max-width: 768px) {
    padding: 40px 20px;
  }
`;

const HeaderRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 40px;

  /* Mobile Fix: Stack vertically */
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
  }
`;

const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Title = styled.h2`
  font-weight: 600;
  font-size: 60px;
  line-height: 1.2;
  color: #000000;
  margin: 0;

  /* Mobile Fix: Font size chota kiya */
  @media (max-width: 768px) {
    font-size: 36px;
  }
`;

const Subtitle = styled.p`
  font-weight: 500;
  font-size: 20px;
  line-height: 1.4;
  color: #000000;
  margin: 0;
  opacity: 0.8;

  /* Mobile Fix */
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const ArrowsContainer = styled.div`
  display: flex;
  gap: 15px;

  /* Mobile Fix: Arrows chupaye, user swipe karega */
  @media (max-width: 768px) {
    display: none;
  }
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

const TabsContainer = styled.div`
  display: flex;
  gap: 15px;
  margin-bottom: 50px;
  
  /* Mobile Fix: Agar tabs screen se bade ho to scroll ho */
  @media (max-width: 768px) {
    overflow-x: auto;
    white-space: nowrap;
    padding-bottom: 10px;
    scrollbar-width: none; /* Scrollbar hide */
    &::-webkit-scrollbar { display: none; }
  }
`;

const TabButton = styled.button`
  padding: 12px 24px;
  border-radius: 30px;
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s;
  background-color: ${props => props.active ? '#000000' : '#ffffff'};
  color: ${props => props.active ? '#ffffff' : '#000000'};
  border: 1px solid ${props => props.active ? '#000000' : '#e0e0e0'};
  white-space: nowrap;

  &:hover {
    border-color: #000;
  }
`;

const CarouselContainer = styled.div`
  display: flex;
  gap: 40px;
  overflow-x: auto;
  padding-bottom: 20px;
  scroll-behavior: smooth;
  scrollbar-width: none; 
  &::-webkit-scrollbar {
    display: none;
  }

  /* Mobile Fix: Gap thoda kam kiya */
  @media (max-width: 768px) {
    gap: 20px;
  }
`;

// ITEM WRAPPER
const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px; /* Gap between box and text */
  
  /* Fixed Width Desktop par, Mobile par bhi same rahega taaki slider bane */
  min-width: 200px;
  width: 200px; 
  
  flex-shrink: 0;
  cursor: pointer;
`;

// DATE BOX
const DateBox = styled.div`
  width: 100%;
  height: 200px;
  border: 1px solid #E5E5E5;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: white;
  transition: all 0.3s;

  ${ItemWrapper}:hover & {
    border-color: #000;
    transform: translateY(-5px);
  }
`;

const Month = styled.div`
  font-size: 28px;
  color: #000;
  font-weight: 400;
  margin-bottom: 10px;
`;

const Day = styled.div`
  font-size: 80px;
  font-weight: 700;
  color: #CB0B19;
  line-height: 1;
`;

const NoticeText = styled.p`
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 18px;
  line-height: 1.4;
  color: #000000;
  margin: 0;
  text-align: left;
  
  /* Text break fix */
  word-wrap: break-word; 
  width: 100%;
`;

const ViewAllButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 60px;
`;

const ViewAllBtn = styled.button`
  background-color: #CB0B19;
  color: white;
  padding: 16px 48px;
  border: none;
  border-radius: 6px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  
  &:hover {
    background-color: #a80915;
  }
`;

const Announcements = () => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -240, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 240, behavior: 'smooth' });
  };

  const notices = [
    { month: 'Feb', day: '10', text: 'CBSE: Annual Examination Syllabus (VII to XI)' },
    { month: 'Feb', day: '07', text: 'CI: Annual Examination Time Table 2024-25' },
    { month: 'Feb', day: '07', text: 'Annual Examination Time Table 2024-25 (VII to IX)' },
    { month: 'Feb', day: '07', text: 'Annual Examination Time Table 2024-25 (X and XII)' },
    { month: 'Feb', day: '06', text: 'Annual Examination Time Table 2024-25 (X and XII)' },
    { month: 'Feb', day: '02', text: 'Annual Examination Time Table 2024-25 (X and XII)' },
    { month: 'Jan', day: '30', text: 'Annual Examination Time Table 2024-25 (X and XII)' },
    { month: 'Jan', day: '30', text: 'Annual Examination Time Table 2024-25 (X and XII)' },
  ];

  return (
    <Section>
      <HeaderRow>
        <TextContent>
          <Title>DC Announcements</Title>
          <Subtitle>Stay ahead with real-time updates and notices from Daly College administration.</Subtitle>
        </TextContent>
        <ArrowsContainer>
          <ArrowButton onClick={scrollLeft}><FaArrowLeft size={18} /></ArrowButton>
          <ArrowButton onClick={scrollRight}><FaArrowRight size={18} /></ArrowButton>
        </ArrowsContainer>
      </HeaderRow>

      <TabsContainer>
        <TabButton active>Important Notices</TabButton>
        <TabButton>Junior School Byte</TabButton>
        <TabButton>Academic Calendar</TabButton>
      </TabsContainer>

      <CarouselContainer ref={scrollRef}>
        {notices.map((notice, index) => (
          <ItemWrapper key={index}>
            <DateBox>
              <Month>{notice.month}</Month>
              <Day>{notice.day}</Day>
            </DateBox>
            <NoticeText>{notice.text}</NoticeText>
          </ItemWrapper>
        ))}
      </CarouselContainer>

      <ViewAllButtonContainer>
        <ViewAllBtn>View All</ViewAllBtn>
      </ViewAllButtonContainer>
    </Section>
  );
};

export default Announcements;