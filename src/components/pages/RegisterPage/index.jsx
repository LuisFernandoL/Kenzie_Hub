import { FormRegister } from "./FormRegister";
import { StyleMainRegister } from "./FormRegister/StyleMainRegister";
import { LinkStylesRegister, StyleHeaderRegister } from "./StyleHeaderRegister";
import { StyledContainer } from "../../Styles/grid";

export const RegisterPage = () => {
  return (
    <>
      <StyleHeaderRegister>
        <StyledContainer className="primaryDiv">
          <div className="internalDiv">
            <h1>Kenzie Hub</h1>
            <LinkStylesRegister to={"/"}>Voltar</LinkStylesRegister>
          </div>
        </StyledContainer>
      </StyleHeaderRegister>
      <StyleMainRegister>
        <StyledContainer className="divFomrRegister">
          <FormRegister />
        </StyledContainer>
      </StyleMainRegister>
    </>
  );
};
