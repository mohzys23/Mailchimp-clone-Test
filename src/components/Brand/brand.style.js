import styled from 'styled-components';

export const Container = styled.div`
    margin-left: auto;
    margin-right: auto;
    padding: 7.5rem 0;
    background-color: #f6f6f4;

    @media(max-width: 575px) {
      
      .mobile-box {
      width: 75%;
      margin: 0 auto;
      line-height: 1.35;
    }
    }

}


`;

export const Text = styled.h1`
  font-size: 3.375rem;
  letter-spacing: -0.03125rem;
  margin-bottom: 1.25rem;
  margin: 0;
    padding: 0;
    font-weight: 300;


    

    @media (max-width: 575) {
    font-size: 2.5rem;
    font-weight: 300;
    line-height: 1;
    letter-spacing: -.03125rem;
    }



`;

export const Heading = styled.h2`
  font-size: 1.25rem;
  margin: 1.25rem;
  font-weight: 300;

  @media (max-width) {
    font-weight: 300;
    font-size: 1.125rem;
    margin: 0;
  }
`;

export const ImageSection = styled.div`
  width: 60%;
  display: flex;
  text-align: center;
  margin: 0 auto;

  @media (max-width: 575px) {
    width: 100%;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
  }

  .brand-logo {
    width: 30%;
    padding: 2.5rem;
    line-height: 21.6px;

    @media (max-width: 575px) {
      width: 100%;
      padding: 0;
    }
  }

  img {
    width: 50%;
    margin: 0 auto;
    display: block;
    height: auto;

    @media (max-width: 575px) {
      width: 35%;
    }
  }
`;

export const SmallText = styled.p`
  font-size: 1em;

  @media (max-width: 575px) {
    margin-top: 1.25rem;
  }
`;