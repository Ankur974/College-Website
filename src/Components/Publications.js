import React from 'react';
import styled from 'styled-components';

// Dark Background Section
const Section = styled.section`
  padding: 80px 20px;
  background-image: url(bg.svg); /* Subtle gradient */
  text-align: center;
  color: white;
`;

const Header = styled.div`
  margin-bottom: 60px;
`;

const Title = styled.h2`
  font-family: 'Inter', sans-serif;
  font-size: 48px;
  font-weight: 700;
  margin-bottom: 15px;
  letter-spacing: -0.5px;
`;

const Subtitle = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 18px;
  font-weight: 400;
  opacity: 0.8;
  margin: 0;
`;

// Card Container Grid
const Grid = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  flex-wrap: wrap;
`;

// Individual Card
const Card = styled.div`
  position: relative;
  width: 350px;
  height: 450px;
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px); /* Hover karne par card thoda upar uthega */
  }

  /* Image zoom effect on hover */
  &:hover img {
    transform: scale(1.05);
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
`;

// Dark gradient overlay taaki text padha ja sake
const Overlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 60%; /* Sirf neeche ke hisse mein dark shade */
  background: linear-gradient(to top, rgba(0, 0, 0, 0.9), transparent);
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding-bottom: 40px;
`;

const CardText = styled.h3`
  font-family: 'Inter', sans-serif;
  font-size: 28px;
  font-weight: 600;
  color: white;
  margin: 0;
  text-align: center;
  padding: 0 20px;
  line-height: 1.2;
`;

const Publications = () => {
  return (
    <Section>
      <Header>
        <Title>Read. Discover. Connect.</Title>
        <Subtitle>Experience Daly College Through Our Publications.</Subtitle>
      </Header>
      
      <Grid>
        {/* Card 1: Newsletter */}
        <Card>
          <CardImage 
            src="4.svg" 
            alt="Newsletter" 
            onError={(e) => {e.target.src = "https://placehold.co/350x450/333/fff?text=Newsletter+Cover"}} 
          />
          <Overlay>
            <CardText>Read Our<br />Newsletter</CardText>
          </Overlay>
        </Card>

        {/* Card 2: Brochure */}
        <Card>
          <CardImage 
            src="6.svg" 
            alt="Brochure" 
            onError={(e) => {e.target.src = "https://placehold.co/350x450/222/fff?text=Night+Campus"}} 
          />
          <Overlay>
            <CardText>Download<br />Brochure</CardText>
          </Overlay>
        </Card>

        {/* Card 3: Magazine */}
        <Card>
          <CardImage 
            src="5.png" 
            alt="Magazine" 
            onError={(e) => {e.target.src = "https://placehold.co/350x450/444/fff?text=DC+Magazine"}} 
          />
          <Overlay>
            <CardText>Explore DC<br />Magazine</CardText>
          </Overlay>
        </Card>
      </Grid>
    </Section>
  );
};

export default Publications;