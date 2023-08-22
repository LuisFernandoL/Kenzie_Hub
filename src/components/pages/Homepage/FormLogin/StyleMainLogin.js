import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const MainLogin = styled.main`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: calc(100vh - 35rem);
  justify-content: center;
  align-items: center;

  .divFormLogin {
    display: flex;
    flex-direction: column;
    align-items: center;

    form {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      min-width: clamp(150px, 100%, 380px);
      gap: 2rem;
      background-color: #212529;
      padding: 2rem 1rem;

      h1 {
        font-size: 1.8rem;
        color: #f8f9fa;
        font-weight: 700;
        height: 4.8rem;
        align-items: center;
        display: flex;
      }
    }
  }
`;

export const StyleSpanLogin = styled.span`
  display: flex;
  justify-content: center;
  flex-direction: column;
  min-width: clamp(150px, 100%, 380px);
  align-items: center;
  gap: 2rem;
  p {
    display: flex;
    align-items: center;
    height: 4.8rem;
    font-size: 1.2rem;
    color: #868e96;
    font-weight: 400;
  }
`;

export const LinkStyles = styled(Link)`
  color: #f8f9fa;
  background-color: #868e96;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  min-width: clamp(150px, 100%, 330px);
  height: 4.8rem;
  border-radius: 0.5rem;
  background-color: #868e96;
  &:hover {
    background-color: #343B41;
  }
`;
