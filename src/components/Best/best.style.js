import styled from "styled-components";

export const Container = styled.div`
  padding: 7.5rem 0;
  text-align: center;
  background-color: #f6f6f4;
`;

export const Wrapper = styled.div`
  width: 75%;
  margin: 0 auto;
`;

export const Text = styled.h1`
  width: 37.5%;
  margin: 0 auto;
  font-weight: 300;
  line-height: 1;
  font-size: 3.375rem;
  letter-spacing: -0.03125rem;

  @media(max-width: 575px) {
    width: 100%;
    font-size: 2.5rem;
    font-weight: 300;
    line-height: 1;
    letter-spacing: -.03125rem;
}


  }
`;

export const Button = styled.button`
  margin: 1.875rem 0 10rem 0;
  color: #007c89;
  background-color: transparent;
  font-weight: 600;
  font-size: 0.9375rem;
  padding: 1.25rem 2.5rem;
  border: none;
  -webkit-box-shadow: 0 0 0 0.0625rem rgba(0, 124, 137, 0.3) inset;
  box-shadow: inset 0 0 0 0.0625rem rgba(0, 124, 137, 0.3);

  @media(max-width: 575px) {
    margin-bottom: 4rem;
  }
`;

export const ImageSection = styled.div`
  width: 75%;
  margin-left: 10%;
  margin-right: auto;
  text-align: center;
  bottom: 50;
  z-index: 0;
  position: absolute;
  margin-top: -8rem;
  padding: 0 1.875rem;

  @media (max-width: 575px) {
    margin-top: var(--topOffsetMobile);
    width: var(--imageSizeMobile);
  }

  img {
    height: auto;

    @media (max-width: 575px) {
      max-width: 100%;
      height: auto;
      margin-top: -1rem;
    }
  }
`;
