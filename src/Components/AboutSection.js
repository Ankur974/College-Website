import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: stretch;
  flex-wrap: wrap; /* Allows stacking on mobile */
  width: 100%;
`;

const Card = styled.div`
  flex: 1;
  min-width: 320px; /* Changed from 640px to 320px for mobile safety */
  width: 100%;
  background: ${props => props.dark ? '#E6DCCA' : '#FFFBF2'};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px 20px;
`;

const InnerCard = styled.div`
  width: 100%;
  max-width: 520px; /* Will not exceed 520px, but shrinks on mobile */
  border: 1px solid #E7DCC3;
  border-radius: 20px;
  padding: 40px 30px; /* Reduced padding for mobile */
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: ${props => props.centerContent ? 'center' : 'flex-start'};
`;

const StyledImage = styled.img`
  width: 150px; height: 150px;
  object-fit: cover; border-radius: 12px; margin-bottom: 25px;
`;

const Heading = styled.h3`
  font-family: 'Inter', sans-serif; font-weight: 500; font-size: 26px;
  color: #000; margin-bottom: 20px;
`;

const Text = styled.p`
  font-family: 'Inter', sans-serif; font-weight: 400; font-size: 15px;
  color: #000; opacity: 0.8; margin-bottom: 15px; line-height: 1.5;
`;

const StatBlock = styled.div`
  margin-bottom: 30px; width: 100%;
`;
const StatLabel = styled.div`font-size: 14px; color: #444; margin-bottom: 5px;`;
const StatValue = styled.div`font-size: clamp(28px, 4vw, 36px); font-weight: 700; color: #000;`;
const Divider = styled.div`width: 40px; height: 2px; background-color: #fff; margin: 15px auto;`;

const AboutSection = () => {
  return (
    <Section>
      <Card>
        <InnerCard>
          <StyledImage src="image 90.svg" alt="Building" onError={(e) => {e.target.src = "https://placehold.co/150x150"}} />
          <Heading>About Daly College</Heading>
          <Text>The new building was inaugurated on November 14, 1885 by the Viceroy, Lord Dufferin. By 1891 the Holkars of Indore and the Scindias of Gwalior donated the two student houses.</Text>
        </InnerCard>
      </Card>
      <Card dark>
        <InnerCard centerContent style={{ border: '1px solid rgba(255, 255, 255, 0.8)' }}>
            <StatBlock><StatLabel>Founded in</StatLabel><StatValue>1870</StatValue><Divider /></StatBlock>
            <StatBlock><StatLabel>Campus Size</StatLabel><StatValue>119 Acres</StatValue><Divider /></StatBlock>
            <StatBlock><StatLabel>Student Strength</StatLabel><StatValue>2,000+</StatValue><Divider /></StatBlock>
            <StatBlock><StatLabel>Student-Teacher Ratio</StatLabel><StatValue>30 : 1</StatValue></StatBlock>
        </InnerCard>
      </Card>
      <Card>
        <InnerCard>
          <StyledImage src="image 88.svg" alt="Founder" onError={(e) => {e.target.src = "https://placehold.co/150x150"}}/>
          <Heading>The Founder</Heading>
          <Text>Sir Henry Dermot Daly was born at Kirkee, near Poona, on 25th October 1823. His father, Francis Dermot Daly, was a soldier and served in British India from 1821 in the 4th Light Dragoons.</Text>
        </InnerCard>
      </Card>
    </Section>
  );
};
export default AboutSection;