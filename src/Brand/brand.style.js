import styled from 'styled-components';

export const Container = styled.div`
    margin-left: auto;
    margin-right: auto;
    padding: 7.5rem 0;
    background-color: #f6f6f4;

}


`;

export const Text = styled.h1`
  font-size: 3.375rem;
  letter-spacing: -0.03125rem;
  margin-bottom: 1.25rem;
  margin: 0;
    padding: 0;
    font-weight: 300;
}


`;

export const Heading = styled.h2`
  font-size: 1.25rem;
  margin: 1.25rem;
      font-weight: 300;
}


`;

export const ImageSection = styled.div`
  width: 60%;
  display: flex;
  text-align: center;
  margin: 0 auto;

  .brand-logo {
    width: 30%;
    padding: 2.5rem;
    line-height: 21.6px;
  }

  img {
    width: 50%;
    margin: 0 auto;
    display: block;
    height: auto;
  }
`;

export const SmallText = styled.p`
  font-size: 1em;
`;