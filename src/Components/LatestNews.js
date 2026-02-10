import React, { useRef } from 'react';
import styled from 'styled-components';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { GoArrowUpRight } from "react-icons/go";

const Section = styled.section`
  padding: 80px 40px;
  background-color: #ffffff;
  font-family: 'Inter', sans-serif;
  @media (max-width: 768px) { padding: 40px 20px; }
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
  @media (max-width: 768px) { font-size: 32px; }
`;

const Subtitle = styled.p`
  font-size: 18px;
  color: #333;
  margin: 0;
  font-weight: 400;
  opacity: 0.8;
`;

const ArrowsContainer = styled.div`
  display: flex;
  gap: 15px;
  @media (max-width: 768px) { display: none; }
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
  &:hover { border-color: #000; background: #f9f9f9; }
`;

const ScrollContainer = styled.div`
  display: flex;
  gap: 30px;
  overflow-x: auto;
  padding-bottom: 20px;
  scroll-behavior: smooth;
  scrollbar-width: none;
  &::-webkit-scrollbar { display: none; }
`;

const Card = styled.div`
  /* Desktop: 2.25 cards view */
  min-width: calc((100% - 60px) / 2.25);
  width: calc((100% - 60px) / 2.25);
  
  height: 333px; 
  border: 1px solid #E5E5E5;
  border-radius: 20px;
  overflow: hidden;
  display: flex; 
  flex-shrink: 0;
  cursor: pointer;
  transition: box-shadow 0.3s ease, transform 0.3s ease;

  &:hover { box-shadow: 0 10px 25px rgba(0,0,0,0.1); transform: translateY(-5px); }

  /* Tablet: 1.25 cards */
  @media (max-width: 1024px) {
    min-width: calc((100% - 30px) / 1.25);
    width: calc((100% - 30px) / 1.25);
  }

  /* Mobile: Single card vertical */
  @media (max-width: 768px) {
    min-width: 100%;
    width: 100%;
    flex-direction: column;
    height: auto;
  }
`;

const CardImage = styled.img`
  width: 45%; 
  height: 100%;
  object-fit: cover;
  @media (max-width: 768px) { width: 100%; height: 200px; }
`;

const CardContent = styled.div`
  width: 55%;
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (max-width: 768px) { width: 100%; padding: 20px; gap: 20px; }
`;

const MainText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const CardTitle = styled.h3`
  font-size: 26px; font-weight: 700; line-height: 1.3; color: #000; margin: 0;
  display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden;
  @media (max-width: 768px) { font-size: 22px; }
`;

const CardDesc = styled.p`
  font-size: 16px; line-height: 1.6; color: #666; margin: 0;
  display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden;
`;

const CardFooter = styled.div`
  display: flex; justify-content: space-between; align-items: center; margin-top: 20px;
`;

const DateBadge = styled.span`
  background-color: #F5F5F7; color: #333; font-size: 14px; font-weight: 600;
  padding: 10px 16px; border-radius: 8px; text-transform: uppercase; letter-spacing: 0.5px;
`;

const ViewAllButtonContainer = styled.div`
  display: flex; justify-content: center; margin-top: 60px;
`;

const ViewAllBtn = styled.button`
  background-color: #CB0B19; color: white; padding: 16px 40px; border: none; border-radius: 6px;
  font-size: 16px; font-weight: 600; cursor: pointer;
  &:hover { background-color: #a80915; }
`;

const LatestNews = () => {
  const scrollRef = useRef(null);
  const scroll = (direction) => {
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.firstChild.clientWidth + 30;
      scrollRef.current.scrollBy({ left: direction === 'left' ? -cardWidth : cardWidth, behavior: 'smooth' });
    }
  };

  const newsData = [
    { id: 1, image: "3.svg", title: "Aryaman Tekriwal to Cornell!", desc: "Daly College proudly announces...", date: "25 JAN 2025" },
    { id: 2, image: "3.svg", title: "Podium Perfect! Aarvi Secures Gold!", desc: "Aarvi Jain has struck gold...", date: "25 JAN 2025" },
    { id: 3, image: "3.svg", title: "DC Big Annual Event Announced", desc: "Get ready for the biggest annual...", date: "20 JAN 2025" },
    { id: 4, image: "3.svg", title: "New Sports Complex Inauguration", desc: "The newly renovated sports complex...", date: "15 JAN 2025" }
  ];

  return (
    <Section>
      <HeaderRow>
        <TextContent>
          <Title>Latest News</Title>
          <Subtitle>Discover the latest stories.</Subtitle>
        </TextContent>
        <ArrowsContainer>
          <ArrowButton onClick={() => scroll('left')}><FaArrowLeft /></ArrowButton>
          <ArrowButton onClick={() => scroll('right')}><FaArrowRight /></ArrowButton>
        </ArrowsContainer>
      </HeaderRow>
      <ScrollContainer ref={scrollRef}>
        {newsData.map((news) => (
          <Card key={news.id}>
            <CardImage src={news.image} alt={news.title} onError={(e) => {e.target.src = "https://placehold.co/800x400"}} />
            <CardContent>
              <MainText><CardTitle>{news.title}</CardTitle><CardDesc>{news.desc}</CardDesc></MainText>
              <CardFooter><DateBadge>{news.date}</DateBadge><GoArrowUpRight size={28} color="#333" /></CardFooter>
            </CardContent>
          </Card>
        ))}
      </ScrollContainer>
      <ViewAllButtonContainer><ViewAllBtn>View All News</ViewAllBtn></ViewAllButtonContainer>
    </Section>
  );
};

export default LatestNews;