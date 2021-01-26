import React from 'react';
import {achieve} from '../../Data/data';
import {
    Container,
    Text,
    ImageSection,
    Heading,
    SmallText,
    Link,
} from './achieve.style'


export default function Achieve() {
    return (
      <Container>
        <Text>Keep pushing forward. We've got your back.</Text>
        <ImageSection>
            {achieve.map((item) => {
                return (
                    <div className="achieve-box">
                    <img src={item.img} alt="" />
                        <Heading>{item.heading}</Heading>
                        <SmallText>{item.paragraph}</SmallText>
                        <Link>{item.link}</Link>
                    </div>
                )
            })}
        </ImageSection>
      </Container>
    );
}