import React from 'react';
import {brand} from '../../Data/data';
import {
    Container,
    Text,
    Heading,
    SmallText,
    ImageSection,
} from './brand.style';


export default function Brand() {
    return (
      <Container>
        <div className="mobile-box">
          <Text>Grow with Mailchimp</Text>
          <Heading>
            Our marketing platform helps brands like these build their thing and
            keep it growing.
          </Heading>
        </div>

        <ImageSection>
          {brand.map((item) => {
            return (
              <div className="brand-logo">
                <img src={item.img} alt="" />
                <SmallText>{item.paragraph}</SmallText>
              </div>
            );
          })}
        </ImageSection>
      </Container>
    );
}