import { styled } from "styled-components";

export const StylesListTechnologie = styled.ul`
  display: flex;
  flex-direction: column;
  min-width: clamp(150px, 100%, 800px);
  background-color: #212529;
  border-radius: 0.5rem;
  gap: 2rem;
  padding: 2rem;
  height: 50rem;
  overflow-x: auto;

  li {
    cursor: pointer;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: #121214;
    width: 100%;
    height: 4.8rem;
    align-items: center;
    padding: 2rem;
    border-radius: 0.5rem;
  }
`;
