import React from 'react';
import {
  Container,
  SmallText,
  Text,
  TextSection,
  WebsiteCard,
  SectionImage,
  Link
} from "./websitecard.style";
import Img1 from '../Assets/website.png';
import Img2 from "../Assets/website2.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';




export default function WebCard() {
    return (
      <Container>
        <WebsiteCard>
          <TextSection>
            <Text>Get your business online</Text>
            <SmallText>
              Give your brand a home with a custom domain. Then create a website
              with built-in marketing tools to help you launch it.
            </SmallText>
            <Link>
              Websites and domains{" "}
              <FontAwesomeIcon icon={faArrowRight} className="arrow" />
            </Link>
          </TextSection>
          <SectionImage>
            <img src={Img1} alt="" />
          </SectionImage>
        </WebsiteCard>
        <WebsiteCard>
          <TextSection>
            <Text>Market your business</Text>
            <SmallText>
              Send the right messages on all the right channels. Build emails,
              social ads, landing pages, postcards, and more from one place.
            </SmallText>
            <Link>
              Websites and domains{" "}
              <FontAwesomeIcon icon={faArrowRight} className="arrow" />
            </Link>
          </TextSection>

          <SectionImage>
            <img src={Img2} alt="" />
          </SectionImage>
        </WebsiteCard>
      </Container>
    );
}