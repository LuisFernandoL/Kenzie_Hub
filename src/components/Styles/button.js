import { styled } from "styled-components";

export const StyleButtonsRoge = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  min-width: clamp(150px, 100%, 330px);
  height: 4.8rem;
  border-radius: 0.5rem;
  font-size: 1.4rem;
  font-weight: 500;
  background-color: #ff427f;
  &:hover {
    background-color: #ff577f;
  }
`;

export const StyleButtonsGrey = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  min-width: clamp(150px, 100%, 330px);
  height: 4.8rem;
  border-radius: 0.5rem;
  font-size: 1.4rem;
  font-weight: 500;
  background-color: #868e96;
  &:hover {
    background-color: #343B41;
  }
`;
