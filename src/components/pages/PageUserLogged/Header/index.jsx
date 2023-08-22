import { useContext } from "react";
import { StyledContainer } from "../../../Styles/grid";
import { LinkStylesUser, StyleHeaderPageUser } from "./StyleHeader";
import { UserContext } from "../../../providers/UserContext";

export const Header = () => {

  const {logout } =  useContext(UserContext);
  return (
    <StyleHeaderPageUser>
      <StyledContainer className="divHeaderUser">
        <div className="divHeaderInternal">
          <h2>Kenzie Hub</h2>
          <LinkStylesUser onClick={logout} to="/" type="button">
            Sair
          </LinkStylesUser>
        </div>
      </StyledContainer>
    </StyleHeaderPageUser>
  );
};
