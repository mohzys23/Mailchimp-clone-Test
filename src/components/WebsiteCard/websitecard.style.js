import styled from 'styled-components';

export const Container = styled.div`
text-align: left;


@media(max-width: 575px) {
  
}
`;

export const TextSection = styled.div`
   width: 50%;
  padding: 3.75rem;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  @media(max-width: 575px) {
    width: 100%;
    padding: 1rem;
    order: 2;
  }
`;


export const Text = styled.h1`
  font-size: 2rem;
  letter-spacing: 0;
  font-weight: 400;
  margin-bottom: 1.25rem;

  @media (max-width: 575px) {
    font-size: 1.75rem;
    font-weight: 300;
    line-height: 1.1;
  }
`;

export const SmallText = styled.p`
  margin-bottom: 3.5rem;
  line-height: 1.5;
`;

export const WebsiteCard = styled.div`
  width: 90%;
  margin: 7.5rem auto;
  background: #403b3b;
  color: #fff;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  padding: 1rem 1rem;
  position: relative;
  display: flex;

  @media (max-width: 575px) {
    flex-wrap: wrap;
    padding-left: 1.875rem;
    padding-right: 1.875rem;
    position: relative;
  }
`;

export const SectionImage = styled.div`
  width: 50%;

  @media (max-width: 575px) {
    width: calc(100% + 5.625rem);
    margin: -1.75rem -2.8125rem 1.5625rem;
  }

  img {
    height: auto;
    max-width: 90%;
    margin: -1rem 0;

    @media (max-width: 575px) {
      max-width: 100%;
      height: auto;
    }
  }
`;

export const Link = styled.a`
  color: #ffe01b;

  .arrow {
    width: 70px;
  }
`;
