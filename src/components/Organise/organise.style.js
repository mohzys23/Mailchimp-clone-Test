import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background-color: #fbeeca;
  position: relative;
  padding-bottom: 14rem;

  @media(max-width: 575px) {
    padding-bottom: 8rem;
  }

  .lower-card {
    width: 50%;
    margin: 0 auto;

    @media (max-width: 575px) {
      width: 80%;
      margin: 0 auto;
    }
  }
  @media (max-width: 575px) {
    .text-box {
      width: 100%;
    }
  }
`;

export const Text = styled.h1`
  width: 50%;
  padding: 7.5rem 0;
  margin: 0 auto;
  font-size: 3.375rem;
  letter-spacing: -0.03125rem;
  font-weight: 300;

  @media (max-width: 575px) {
    width: 80%;
    padding: 5rem 0;
    font-size: 2.5rem;
    font-weight: 300;
    line-height: 1;
    letter-spacing: -0.03125rem;
  }
`;

export const Section = styled.div`
  width: 75%;
  margin: 0 auto;

  @media (max-width: 575px) {
    width: 80%;
    align-items: center;
  }

  .card {
    display: flex;
    align-items: center;
    padding-bottom: 7.5rem;

    @media (max-width: 575px) {
      flex-wrap: wrap;
    }

    img {
      width: 50%;
      height: auto;

      @media (max-width: 575px) {
        display: block;
        width: 100%;
        height: auto;
        margin-bottom: 2.5rem;
      }
    }

    .card-text {
      width: 50%;
      padding-left: calc(8.33333% + 1.875rem);
      text-align: left;

      @media (max-width: 575px) {
        width: 100%;
        padding: 0;
      }
    }
  }
`;

export const Heading = styled.h2`
  font-size: 2rem;
  font-weight: 300;
  line-height: 1.1;
  margin-bottom: 2rem;

  @media (max-width: 575px) {
    font-size: 1.75rem;
    font-weight: 400;
    line-height: 1.1;
  }
`;

export const SmallText = styled.p`
  font-weight: 300;
  line-height: 1.5;
  font-size: 1rem;
`;

export const SmallTextBellow = styled.p`
    line-height: 1.5;
    font-size: 1rem;
    font-weight: 300;
        margin-top: 1.875rem;

        @media(max-width: 575px) {
          #403b3b;
              font-size: 1em;
    font-weight: 400;
    line-height: 1.5;
        }
}
`;

export const TextBellow = styled.h1`
  font-size: 3.375rem;
  letter-spacing: -0.03125rem;
  font-weight: 300;
  line-height: 1;

  @media (max-width: 575px) {
    font-size: 2.5rem;
    font-weight: 300;
    line-height: 1;
    letter-spacing: -0.03125rem;
  }
`;

export const Button = styled.button`
  color: #fff;
  background-color: #007c89;
  font-weight: 600;
  font-size: 0.9375rem;
  padding: 1.25rem 2.5rem;
  border: none;
  margin: 1.875rem 0;
  cursor: pointer;

  &:hover {
    background-color: #004e56;
  }
`;

export const ImageSection = styled.div`
  width: 75%;
  margin: 0 0;
  text-align: center;
  margin-left: 7rem;
  bottom: 50;
  z-index: 0;
  position: absolute;
  margin-top: -1rem;

  @media (max-width: 575px) {
    width: 80%;
    margin-left: 2.5rem;
    margin-right: auto;
    position: absolute;
  }

  img {
    width: 50%;

    @media (max-width: 575px) {
      width: 100%;
      height: auto;
    }
  }
`;
