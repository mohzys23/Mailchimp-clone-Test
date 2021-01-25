import React from 'react';
import {
    Container,
    Text,
    Wrapper,
    Button,
    ImageSection
} from './best.style';
import Img from '../../Assets/best.png';

function Best() {
    return (
      <Container>
        <Wrapper>
          <Text>
            Mailchimp was recently named one of the Best Software Companies of
            2020 by G2.
          </Text>
          <Button>See how we stack up</Button>
        </Wrapper>
        <ImageSection>
          <img src={Img} alt="" />
        </ImageSection>
      </Container>
    );
}

export default Best;