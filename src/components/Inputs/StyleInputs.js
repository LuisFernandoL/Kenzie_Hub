import { styled } from "styled-components";

export const StyleInputs = styled.div`
  display: flex;
  flex-direction: column;
  min-width: clamp(150px, 100%, 330px);

  input {
    min-width: clamp(150px, 100%, 330px);
    display: flex;
    height: 4.8rem;
    background-color: #343b41;
    color: #f8f9fa;
    border-radius: 0.5rem;
    padding: 1rem;
  }

  label {
    display: flex;
    flex-direction: column;
    color: #f8f9fa;
    margin-bottom: 1rem;
  }
`;
