import styled from 'styled-components';


export const Container = styled.div`
width: 100%;
  padding-top: 7.5rem;
  padding-bottom: 7.5rem;
  background-color: #efeeea;
  
`;

export const Wrapper = styled.div`
  width: 90%;
  display: flex;
  margin: 0 auto;
  align-items: flex-start;
  justify-content: center;
  color: #241c15;

  div {
    height: auto;
    margin: 0 0.625rem;

    p {
      font-size: 1rem;
      margin-bottom: 1.5rem;
      color: #241c15;
      font-weight: 500;
    }

    li {
      margin-bottom: 0.855rem;
      list-style: none;
      font-weight: 400;
      font-size: 0.8125rem;
    }

    h4 {
      font-size: 0.8125rem;
      font-family: Means Web, Georgia, Times, Times New Roman, serif;
      font-weight: 300;
      line-height: 1.5;
    }
  }

  .box {
    width: 15%;
    margin: 0 1.875rem;

    .logo {
      margin-top: -0.5rem;
    }

    h4 {
      margin: 1rem 0;
    }
  }

  .box2 {
    width: 100%;
    margin-top: 5rem;
  }
`;