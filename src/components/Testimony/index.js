import React from 'react';
import Img3 from "../../Assets/street.png";
import Img4 from "../../Assets/persons.jpg";
import {
    Container,
    SmallText, 
    Text,
    Section,
    ImageSection,
    Heading,
    ReachSection,
} from './testimony.style';

import Zoom from "react-reveal/Zoom";

export default function Testimony() {
    return (
      <Container>
        <Section>
          <img src={Img3} alt="" />
          <Text>
            "Since using Mailchimp, I feel so much more confident in managing
            all our marketing. Like I got this."
          </Text>
          <SmallText>
            – Marissa Axell, co-founder of 17th Street Athletic Club
          </SmallText>
          <ReachSection>
            <div>
              <Heading>37%</Heading>
              <p>lift on online bookings</p>
            </div>
            <div>
              <Heading>250%</Heading>
              <p>increase in email signups</p>
            </div>
          </ReachSection>
          <SmallText>Results not typical.</SmallText>
        </Section>
        <ImageSection>
          <Zoom>
            <img src={Img4} alt="" />
          </Zoom>
        </ImageSection>
      </Container>
    );
}