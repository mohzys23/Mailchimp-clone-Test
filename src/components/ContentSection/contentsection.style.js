import styled from 'styled-components';



export const Container = styled.div`
width: 100%;
  text-align: center;
  padding-top: 8rem;
  padding-bottom: 3rem;
  
`;

export const TextSection = styled.div`
  width: 100%;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  max-width: 100em;
  margin-left: auto;
  margin-right: auto;
  padding-left: 1.875rem;
  padding-right: 1.875rem;
`;

export const Text = styled.h1`
  font-size: 3.375rem;
  letter-spacing: -0.03125rem;
  font-weight: 300;

  @media (max-width: 575px) {
    font-size: 2.5rem;
    font-weight: 300;
    line-height: 1;
    letter-spacing: -0.03125rem;
  }
`;

export const SmallText = styled.p`
  font-size: 1em;
  letter-spacing: 0;
  font-weight: 300;
  line-height: 1.5;
  width: 45%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 1.875rem;

  @media (max-width: 575px) {
    font-size: 1em;
    font-weight: 400;
    line-height: 1.5;
    width: 90%;
    margin-left: auto;
    margin-right: auto;
  }
`;


