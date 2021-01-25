import styled from 'styled-components';


export const Container = styled.div`
  background-color: #ffe01b;
  padding-top: 12rem;
  padding-bottom: 2rem;

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
  }
`;

export const TextSection = styled.div`
width: 50%;
`;


export const Text = styled.h1`
  font-weight: 300;
  font-size: 3.375rem;
  letter-spacing: -0.03125rem;
  padding-right: 0.625rem;
`;

export const SmallText = styled.p`
  margin-top: 1.875rem;
  font-size: 1.5rem;
  letter-spacing: 0;
  font-weight: 100;
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

  img {
    max-width: 90%;
    height: auto;
    padding-left: 0.625rem;
  }
`;