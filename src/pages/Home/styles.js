import styled from "styled-components";

export const Container = styled.div`
  max-width: 700px;
  background-color: #FFF;
  border-radius: 4px;
  padding: 30px;
  margin: 80px auto;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);

  h1 {
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 20px;

    gap: 10px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: row;
  margin-top: 30px;
  gap: 10px;

  input {
    flex: 1;
    border: 1px solid #DDD;
    padding: 10px 15px;
    border-radius: 4px;
    font-size: 17px;
  }
`;

export const SubmitButton = styled.button.attrs({
  type: 'submit'
})`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #0D2636;
  border: 0;
  border-radius: 4px;
  padding: 0 15px;
`;