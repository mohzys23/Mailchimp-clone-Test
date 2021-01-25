import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background-color: #fbeeca;
  position: relative;
  padding-bottom: 14rem;

  .lower-card {
    width: 50%;
    margin: 0 auto;
  }
`;

export const Text = styled.h1`
  width: 50%;
  padding: 7.5rem 0;
  margin: 0 auto;
  font-size: 3.375rem;
  letter-spacing: -0.03125rem;
  font-weight: 300;
`;

export const Section = styled.div`
  width: 75%;
  margin: 0 auto;

  .card {
    display: flex;
    align-items: center;
    padding-bottom: 7.5rem;

    img {
      width: 50%;
      height: auto;
    }

    .card-text {
      width: 50%;
      padding-left: calc(8.33333% + 1.875rem);
      text-align: left;
    }
  }
`;

export const Heading = styled.h2`
  font-size: 2rem;
  font-weight: 300;
  line-height: 1.1;
  margin-bottom: 2rem;
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
}
`;

export const TextBellow = styled.h1`
  font-size: 3.375rem;
  letter-spacing: -0.03125rem;
  font-weight: 300;
  line-height: 1;
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
    z-index: 1;
    position: absolute;
    margin-top: -1rem;
  img {
      width: 50%;
  }
`;
