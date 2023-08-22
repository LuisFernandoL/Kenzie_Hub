import { styled } from "styled-components";

export const StyleMainHeader = styled.main`
  display: flex;
  flex-direction: column;
  color: white;
  justify-content: center;
  align-items: center;
  min-width: clamp(150px, 100%, 800px);

  .divMainUser {
    display: flex;
    flex-direction: column;
    align-items: center;

    section {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100vw;

      .divBorder {
        width: 100vw;
        border-top: 0.2rem solid #121214;
        border-bottom: 0.2rem solid #121214;
        align-items: center;
        justify-content: center;
        display: flex;
        flex-direction: row;

        .divInternalUser {
          display: flex;
          flex-direction: row;
          height: 10vh;
          justify-content: space-between;
          align-items: center;
          min-width: clamp(150px, 100%, 800px);
          padding: 2rem;
          h1 {
            font-weight: 700;
            font-size: 1.8rem;
            line-height: 2.8rem;
          }
          p {
            font-weight: 400;
            font-size: 1.2rem;
            line-height: 2.2rem;
            color: #868e96;
          }
        }
      }
    }
  }
`;

export const SpanUserPage = styled.span`
  display: flex;
  flex-direction: row;
  height: 10vh;
  align-items: flex-start;
  justify-content: space-between;
  min-width: clamp(150px, 100%, 800px);
  gap: 3rem;
  margin-top: 3rem;
  height: 10vh;
  padding: 2rem;

  h2 {
    font-weight: 700;
    font-size: 1.8rem;
    line-height: 2.8rem;
    color: #f8f9fa;
  }
  .buttonOpenModal{
    color: white;
    font-size: 2rem;
    width: 3.2rem;
    height: 3.2rem;
    background-color:#212529 ;
    border-radius: 0.5rem;
  }
`;
