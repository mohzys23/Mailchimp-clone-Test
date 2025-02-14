import styled from 'styled-components';


export const Container = styled.div`
  width: 100%;
  box-sizing: border-box;
  margin-left: auto;
  margin-right: auto;
  padding-left: 1.875rem;
  padding-right: 1.875rem;
  font-weight: 300;
`;

export const Text = styled.h1`
  width: 37.5%;
  margin: 7.5rem auto;
  font-size: 3.375rem;
  letter-spacing: -0.03125rem;
  text-align: center;
  font-weight: 300;

  @media (max-width: 575px) {
    width: 100%;
    font-size: 2.5rem;
    font-weight: 300;
    line-height: 1;
    letter-spacing: -0.03125rem;
  }
`;

export const ImageSection = styled.div`
  width: 75%;
  display: flex;
  margin: 0 auto;

  @media (max-width: 575px ) {
    width: 100%;
    max-width: 100em;
    flex-wrap: wrap;
  }
  

  .achieve-box {
    width: 33.33333333%;
    margin: 1.875rem auto;
        padding-left: 1.875rem;
    padding-right: 1.875rem;

    @media(max-width: 575px) {
      width: 100%;
    }
}
  }
`;

export const Heading = styled.h2`
  font-size: 1.5rem;
  margin: 1.25rem 0;
  font-weight: 300;
  line-height: 1.3;

  @media (max-width: 575px) {
    font-size: 1.25rem;
    font-weight: 300;
    line-height: 1.3;
    letter-spacing: 0;
  }
`;

export const SmallText = styled.p`
  font-size: 1em;
  margin-bottom: 1.875rem;
  line-height: 1.5;
  font-weight: 400;

  @media (max-width: 575px) {
    font-size: 1em;
    font-weight: 400; 
    line-height: 1.5;
  }
`;

export const Link = styled.a`
  cursor: pointer;
  color: #007c89;
  font-weight: 500;
  font-size: 0.9375rem;
  

  &:hover {
    border-bottom: 1px solid #007c89;
  }
`;