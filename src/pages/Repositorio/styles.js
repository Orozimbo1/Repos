import styled from "styled-components";

// Router
import { Link } from "react-router-dom";

export const Load = styled.div`
  height: 100vh;
  color: #FFF;
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    font-size: 24px;
  }
`;

export const BackButton = styled(Link)`

`;

export const Container = styled.div`
  max-width: 700px;
  background-color: #FFF;
  border-radius: 4px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  padding: 20px 30px;
  margin: 80px auto;
`;

export const Owner = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 150px;
    border-radius: 20%;
  }

  h1 {
    margin: 20px 0 10px;
    text-transform: capitalize;
    font-size: 30px;
    color: #0D2636;
  }

  p {
    color: #000;
    text-align: center;
    line-height: 1.4;
    max-width: 400px;
  }
`;

export const IssuesList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 30px 0;
  padding: 30px 0;
  border-top: 1px solid #EEE;
  list-style: none;

  li {
    display: flex;
    padding: 15px 10px;
    gap: 12px;
  }

  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 1px solid #0D2636;
  }

  div {
    flex: 1;

    p {
      margin-top: 8px;
      font-size: 12px;
      font-weight: 600;
      color: #0D2636;
    }
  }

  strong {
    display: flex;
    flex-direction: column;
    font-size: 17px;

    a {
      text-decoration: none;
      color: #222;
      transition: .3s;

      &:hover {
        color: #0071DB;
      }
    }

    div {
      display: flex;
      flex-direction: row;
      gap: 10px;
    }

    div span {
      background-color: #222;
      color: #FFF;
      border-radius: 4px;
      font-size: 12px;
      font-weight: 600;
      padding: 4px 7px;
    }
  }
`;

export const PageActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    outline: 0;
    border: 0;
    width: 100px;
    background-color: #222;
    color: #FFF;
    padding: 7px 10px;
    border-radius: 4px;

    &:disabled {
      cursor: not-allowed;
      opacity: 0.5;
    }
  }
`