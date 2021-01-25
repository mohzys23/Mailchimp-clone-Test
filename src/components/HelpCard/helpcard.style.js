import styled from 'styled-components';


export const Container = styled.div`
  text-align: left;
  width: 75%;
  margin-left: auto;
  margin-right: auto;
  padding-left: 1.875rem;
  padding-right: 1.875rem;
`;

export const Section = styled.div`
  padding: 3.75rem 0;
  display: flex;
`;

export const Text = styled.h1`
  font-size: 3.375rem;
  letter-spacing: -0.03125rem;
  font-weight: 300;
`;

export const TextSection = styled.div`
  order: 1;
  padding-left: 8.33333333%;
  width: 50%;
`;


export const TextHeading = styled.h2`

`;

export const SmallText = styled.p`
  margin: 2.5rem 0;
  font-size: 16px;
  line-height: 21.6px;
`;

export const Link = styled.a`
  cursor: pointer;
  border: none;
  background: none;
  color: #007c89;
  font-weight: 500;
  font-size: 0.9375rem;
  padding-left: 0;
  padding-right: 0;

  &:hover {
    border-bottom: 1px solid #007c89;
  }
`;

export const ImageSection = styled.div`
  
  width: 50%;
  

  img {
    display: block;
    width: 100%;
    height: auto;
  }
`;

