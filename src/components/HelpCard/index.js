import React from "react";
import {
  Container,
  Text,
  Section,
  TextSection,
  TextHeading,
  SmallText,
  ImageSection,
  Link,
} from "./helpcard.style";
import {help} from "../../Data/data";
import Zoom from "react-reveal/Zoom";

export default function HelpCard() {
  return (
    <Container>
      <Text>We’ll help you—</Text>
      {help.map((item, flow) => {
        return (
          <Section>
            <TextSection>
              <TextHeading>{item.heading}</TextHeading>
              <SmallText>{item.paragraph}</SmallText>
              <Link>{item.link}</Link>
            </TextSection>

            <ImageSection key={flow}>
              <Zoom>
                <img src={item.img} alt="" />
              </Zoom>
            </ImageSection>
          </Section>
        );
      })}
    </Container>
  );
}
