import React from 'react';
import {
  Container,
  SmallText,
  Text,
  TextSection,
} from "./contentsection.style";

import WebsiteCard from '../WebsiteCard';




export default function ContentSection() {
    return (
      <Container>
        <TextSection>
          <Text>Do it all with Mailchimp</Text>
          <SmallText>
            Bring your audience data, marketing channels, and insights together
            so you can reach your goals faster—all from a single platform.
          </SmallText>
        </TextSection>

        <WebsiteCard />

      </Container>
    );
}