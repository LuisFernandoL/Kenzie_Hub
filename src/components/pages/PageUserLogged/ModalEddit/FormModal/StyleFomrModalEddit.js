import { styled } from "styled-components";

export const StyleFormModalEddit = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
  padding: 2rem;
  select {
    width: 100%;
    height: 4.8rem;
    background-color: #343b41;
    font-size: 1.4rem;
    line-height: 1.6rem;
    color: #868e96;
    font-weight: 700;
    border-radius: 0.5rem;
  }

  p {
    font-size: 1.4rem;
    font-weight: 500;
  }

  button {
    width: 100%;
    font-size: 1.4rem;
    font-weight: 500;
  }

  div {
    display: flex;
    justify-content: center;
    width: 100%;
  }
`;

export const SpanModalEddit = styled.span`
  display: flex;
  justify-content: center;
  width: 100%;
  
`;
