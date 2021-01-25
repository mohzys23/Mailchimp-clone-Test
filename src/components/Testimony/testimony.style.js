import styled from 'styled-components';


export const Container = styled.div`
  width: 75%;
  margin: 0 auto;
  display: flex;
  margin-top: 20rem;
  align-items: center;
  padding-bottom: 5rem;
`;

export const Section = styled.div`
  padding-right: calc(8.33333% + 1.875rem);
width: 50%;
  img {
      margin-bottom: 2rem;
  }
`;

export const ImageSection = styled.div`
width: 50%;
  img {
    display: block;
    width: 100%;
    height: auto;
    z-index: 0;
  }
`;

export const Text = styled.h1`
  margin-bottom: 1.25rem;
  font-weight: 300;
  font-size: 1.17em;
`;

export const Heading = styled.h2`
  font-size: 3.125rem;
  font-weight: 300;
  font-family: Means Web, Georgia, Times, Times New Roman, serif;
  display: block;
  margin-top: 3rem;
`;

export const SmallText = styled.p`
  font-weight: 400;
  color: #727070;
  font-size: 0.8125rem;
  margin-top: 1.25rem;
`;

export const ReachSection = styled.div`
  display: flex;
  text-align: left;

  p {
    margin-right: 3rem;
    font-weight: 400;
    color: #727070;
    font-size: 1rem;
    line-height: 1.35;
  }
`;

