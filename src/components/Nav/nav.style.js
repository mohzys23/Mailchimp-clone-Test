import styled from 'styled-components';

export const NavWrapper = styled.div`
  width: 100%;
  font-size: 15px;
  font-weight: 500;
  color: rgb(36, 28, 21);
  overflow: hidden;
  position: fixed; 
  top: 0; 
  z-index: 1;

  .wrapper {
    width: 100%;
    background-color: #ffe01b;
    display: flex;
    height: 67.4531px;
    justify-content: center;

    &:hover {
      background-color: white;
    }
  }
`;

export const NavList = styled.div`
  margin-top: 22.0951px;
  width: 30%;
`;

export const List = styled.li`
  display: inline;
  margin: 0 14px 0 14px;
  cursor: pointer;

  &:hover {
    color: #007c89;
    border-bottom: 1px solid #007c89;
  }
`;

export const Icons = styled.div`
  width: 30%;
  display: flex;
  margin: 18px;
  justify-content: center;

  p {
    font-size: 18px;
    font-weight: 800;
    text-transform: lowercase;
    cursor: pointer;
    padding-top: 4px;
    margin-left: 5px;
  }
`;

export const UserAccess = styled.div`
  margin: 15.0951px;
  width: 30%;
  text-align: right;

  .search {
    font-size: 1.5rem;

    &:hover {
      color: #007c89;
    }
  }
`;

export const Button = styled.button`
  cursor: pointer;
  padding: 0.75rem 1.5rem;
  font-weight: 500;
  margin-left: 1rem;
  background: none;
  border: none;
  box-shadow: inset 0 0 0 0.0625rem #241c15;

  &.signup {
    background: #007c89;
    border: none;
    color: white;
  }

  &.signup:hover {
    background-color: #004e56;
  }
`;


;