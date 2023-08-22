import { styled } from "styled-components";

export const StyleMainRegister = styled.main`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: calc(100vh - 10rem);
  justify-content: center;
  align-items: center;

  .divFomrRegister {
    display: flex;
    flex-direction: column;
    align-items: center;

    form {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      min-width: clamp(150px, 100%, 380px);
      gap: 1.5rem;
      background-color: #212529;
      padding: 2rem 1rem;

      .divFormregister {
        display: flex;
        flex-direction: column;
        align-items: center;

        h1 {
          font-weight: 700;
          font-size: 18px;
          line-height: 28px;
          color: #f8f9fa;
          padding: 1.5rem 0;
        }

        h3 {
          font-weight: 400;
          font-size: 12px;
          line-height: 22px;
          color: #868e96;
        }
      }
    }
  }
`;

export const StyleSpanRegister = styled.span`
  display: flex;
  flex-direction: column;
  min-width: clamp(150px, 100%, 330px);
  gap: 1.5rem;
  p {
    font-weight: 400;
    font-size: 1.2rem;
    color: #f8f9fa;
  }

  select {
    height: 4rem;
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 2.6rem;
    background-color: #343B41;
    color: #868E96;
    border-radius: 0.5rem;

  }
`;
