import { FormLogin } from "./FormLogin";
import { MainLogin } from "./FormLogin/StyleMainLogin";
import { StyleHeaderLogin } from "./StyleHomePage";
import { StyledContainer } from "../../Styles/grid";
import { useEffect, useState } from "react";

export const HomePage = () => {
  const [teste, setTeste] = useState("");
  useEffect(() => {
    setTeste("teste1");
  }, []);
  return (
    <>
      <StyleHeaderLogin>
        <StyledContainer className="DivHeader">
          <h1>Kenzie Hub</h1>
        </StyledContainer>
      </StyleHeaderLogin>
      <MainLogin>
        <StyledContainer className="divFormLogin">
          <FormLogin  />
        </StyledContainer>
      </MainLogin>
    </>
  );
};
