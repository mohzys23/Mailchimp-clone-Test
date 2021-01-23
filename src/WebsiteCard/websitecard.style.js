import styled from 'styled-components';

export const Container = styled.div`
text-align: left;
`;

export const TextSection = styled.div`
   width: 50%;
  padding: 3.75rem;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
`;


export const Text = styled.h1`
  font-size: 2rem;
  letter-spacing: 0;
  font-weight: 300;
  margin-bottom: 1.25rem;
`;

export const SmallText = styled.p`
  margin-bottom: 3.5rem;
  line-height: 1.5;
`;

export const WebsiteCard = styled.div`
  width: 75%;
  margin: 7.5rem auto;
  background: #403b3b;
  color: #fff;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  padding: 1rem 1rem;
  position: relative;
  display: flex;
`;

export const SectionImage = styled.div`
  width: 50%;

  img {
    height: auto;
    max-width: 90%;
    margin: -1rem 0;
  }
`;

export const Link = styled.a`
  color: #ffe01b;

  .arrow {
    width: 70px;
  }
`;
