import styled from 'styled-components';


export const Container = styled.div`
  background-color: #ffe01b;
  padding-top: 12rem;
  padding-bottom: 2rem;

  @media (max-width: 575px) {
    padding-top: 8rem;
    padding-bottom: 14rem;
  }

  .wrapper {
    width: 75%;
    margin-left: auto;
    margin-right: auto;
    padding-left: 1.875rem;
    padding-right: 1.875rem;
    height: 400px;
    color: #241c15;
    display: flex;
    flex-wrap: wrap;

    @media (max-width: 575px) {
      display: block;
      flex-direction: column;
      width: 75%;
      margin-left: auto;
      margin-right: auto;
      padding-left: 1.875rem;
      padding-right: 1.875rem;
      height: 400px;
    }
  }
`;

export const TextSection = styled.div`
  width: 50%;
  @media (max-width: 575px) {
    order: 1;
    width: 100%;
  }
`;


export const Text = styled.h1`
  font-weight: 300;
  font-size: 3.375rem;
  letter-spacing: -0.03125rem;
  padding-right: 0.625rem;
  @media (max-width: 575px) {
    font-size: 2.5rem;
    font-weight: 300;
    line-height: 1;
    letter-spacing: -0.03125rem;
  }
`;

export const SmallText = styled.p`
  margin-top: 1.875rem;
  font-size: 1.5rem;
  letter-spacing: 0;
  font-weight: 100;

  @media (max-width: 575px) {
    color: #241c15;
    font-size: 1.25rem;
    font-weight: 300;
    line-height: 1.4;
    letter-spacing: 0;
  }
`;

export const Button = styled.button`
  color: #fff;
  background-color: #007c89;
  font-family: Graphik Web, Helvetica Neue, Helvetica, Arial, Verdana,
    sans-serif;
  font-weight: 600;
  font-size: 0.9375rem;
  padding: 1.25rem 2.5rem;
  border: none;
  margin-top: 1.875rem;

  &:hover {
    background-color: #004e56;
  }
`;

export const ImageSection = styled.div`
  width: 50%;
  position: relative;
  display: block;
  @media (max-width: 575px) {
    width: 100%;
    margin-top: 3.75rem;
    position: relative;
  }

  img {
    max-width: 90%;
    height: auto;
    padding-left: 0.625rem;
    @media (max-width: 575px) {
      max-width: 100%;
      height: auto;
    }
  }
`;