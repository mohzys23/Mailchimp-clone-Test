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
import {help} from "../Data/data";
import FadeIn from "react-fade-in";

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
              <FadeIn>
                <img src={item.img} alt="" />
              </FadeIn>
            </ImageSection>
          </Section>
        );
      })}
    </Container>
  );
}
