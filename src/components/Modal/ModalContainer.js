import styled from "styled-components";

export const ModalConteiner = styled.div`
  position: fixed;

  top: 0;
  left: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  inset: 0;

  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
  flex-direction: column;

  .divModal {
    align-items: center;
    display: flex;
    position: relative;
    color: black;
    flex-direction: column;
    height: 34rem;
    min-width: clamp(150px, 100%, 370px);
    background-color: #212529;
    border-radius: 0.5rem;

    header {
      display: flex;
      flex-direction: row;
      width: 100%;
      padding: 2rem;
      background-color: #343b41;
      border-radius: 0.5rem 0.5rem 0 0;
      color: #ffffff;

      p {
        color: white;
        width: 100%;
      }

      .buttonClose {
        color: #ffffff;
      }
    }

    .divInputsModal {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 100%;
      gap: 3rem;
      padding: 2rem;

      input {
        width: 100%;
        height: 4.8rem;
        background-color: #343b41;
        border-radius: 0.5rem;
      }

      button {
        width: 100%;
        height: 4.8rem;
        background-color: #ff577f;
        border-radius: 0.5rem;
        color: #ffffff;
      }
    }
  }
`;
