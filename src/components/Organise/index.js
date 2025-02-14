import React from "react";
import {
  Container,
  Section,
  Heading,
  SmallText,
  SmallTextBellow,
  Text,
  TextBellow,
  Button,
  ImageSection
} from "./organise.style";
import { smart } from "../../Data/data";
import Img from '../../Assets/transition.png';
import Zoom from "react-reveal/Zoom";


export default function Organise() {
  return (
    <Container>
      <div className="text-box">
        <Text>See how it all comes together</Text>
      </div>

      <Section>
        {smart.map((item) => {
          return (
            <div className="card">
              <Zoom>
                <img src={item.img} alt="" />
              </Zoom>

              <div className="card-text">
                <Heading>{item.heading}</Heading>
                <SmallText>{item.paragraph}</SmallText>
              </div>
            </div>
          );
        })}
      </Section>
      <div className="lower-card">
        <TextBellow>Up to 6x more orders with automation</TextBellow>
        <SmallTextBellow>
          Make your marketing work harder so you can focus on running your
          business. Our data shows automations can generate up to 6 times more
          orders than bulk email alone.
        </SmallTextBellow>
        <Button>See All Smarts</Button>
      </div>
      <ImageSection>
        <img src={Img} alt="" />
      </ImageSection>
    </Container>
  );
}
