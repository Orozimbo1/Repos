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