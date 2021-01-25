import { faMailchimp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import {
    Container,
    Text,
    SmallText,
    TopSection,
    Button,
    Link,
    BottomSection
} from './resources.style';
import Img from '../../Assets/resource1.jpg'
import Img2 from "../../Assets/Resource2.png";
import Img3 from '../../Assets/resource3.jpg';





function Resources() {
    return (
      <Container>
        <Text>Resources to give you the inside track</Text>
        <SmallText>
          Looking to get ahead? We have expert guidance, timely resources, and
          inspiring stories from entrepreneurs who’ve been in your shoes.
          Business-growing shoes.
        </SmallText>
        <TopSection>
          <div className="box1">
            <h3>CUSTOMER SPOTLIGHT</h3>
            <h1>
              How a Branding Agency Couples Design and Strategy for Big Results
            </h1>
            <p>
              By focusing on both disciplines, Rhyme & Reason Design redefines
              being well-branded.
            </p>
            <Button>Learn More</Button>
          </div>
          <div className="box2">
            <img src={Img} alt="" />
            <div className="box3">
              <div className="logo-text">
                <FontAwesomeIcon icon={faMailchimp} size="2x" />
                <p>mailchimp presents</p>
              </div>

              <h4>SERIES</h4>
              <h1>All in a Day's Work</h1>
              <p>
                Created with It’s Nice That, our new animated series reveals the
                ups, downs, and realities of life as an entrepreneur.
              </p>
              <Link>Watch now</Link>
            </div>
          </div>
        </TopSection>
        <BottomSection>
          <div className="box1">
            <img src={Img3} alt="" />
          </div>

          <div className="box2">
            <div className="img">
              <img src={Img2} alt="" />
            </div>

            <div className="box-text">
              <h2>Resources</h2>
              <h1>4 Ways to Maintain Brand Consistency</h1>
              <p>
                How to create a style that's recognizable across all of your
                marketing.
              </p>

              <Link>Learn More</Link>
            </div>
          </div>
        </BottomSection>
      </Container>
    );
}

export default Resources;