import { styled } from "styled-components";
import { Link } from "react-router-dom";

export const StyleHeaderPageUser = styled.header`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 8rem;
  justify-content: flex-end;

  .divHeaderUser {
    display: flex;
    flex-direction: row;
    justify-content: center;

    .divHeaderInternal {
      min-width: clamp(150px, 100%, 800px);
      display: flex;
      justify-content: space-between;
      align-items: center;

      h2 {
        color: #ff577f;
        font-size: 1.6rem;
        font-weight: 700;
      }
    }
  }
`;
export const LinkStylesUser = styled(Link)`
  color: #f8f9fa;
  background-color: #212529;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  min-width: clamp(50px, 100%, 55px);
  height: 3rem;
  border-radius: 0.5rem;
  font-size: 1.2rem;
`;
