import { styled } from "styled-components";
import { Link } from "react-router-dom";

export const StyleHeaderRegister = styled.header`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 8rem;
  justify-content: flex-end;

  .primaryDiv {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    .internalDiv {
      min-width: clamp(150px, 100%, 380px);
      display: flex;
      justify-content: space-between;
      align-items: center;
      h1 {
        color: #ff427f;
        font-weight: 700;
        font-size: 2.1rem;
      }
    }
  }
`;

export const LinkStylesRegister = styled(Link)`
  color: #f8f9fa;
  background-color: #212529;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  min-width: clamp(50px, 100%, 70px);
  height: 4rem;
  border-radius: 0.5rem;
  font-size: 1.2rem;
`;
