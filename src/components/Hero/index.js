import React from 'react';
import {
    Container,
    TextSection,
    Text,
    SmallText,
    Button,
    ImageSection
} from './hero.style';
import Img from "../../Assets/hero.png";
import Zoom from "react-reveal/Zoom";

export default function Hero() {
    return (
      <Container>
        <div class="wrapper">
          <TextSection>
            <Text>Marketing starts from big ideas.</Text>
            <SmallText>
              Mailchimp helps small businesses do big things, with the right
              tools and guardiance every step of the way.
            </SmallText>
            <Button className="button">Pick A Plan</Button>
          </TextSection>

          <ImageSection>
            <Zoom>
              <img src={Img} alt="" />
            </Zoom>
          </ImageSection>
        </div>
      </Container>
    );
}