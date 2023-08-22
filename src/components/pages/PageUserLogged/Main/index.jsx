import { useContext } from "react";
import { StyledContainer } from "../../../Styles/grid";
import { SpanUserPage, StyleMainHeader } from "./StyleMainUser";
import { UserContext } from "../../../providers/UserContext";
import { Modal } from "../../../Modal";
import { ListTechnologies } from "../ListTechnologies";

export const Main = () => {
  const { userLogin, setIsOpen, isOpen } = useContext(UserContext);

  return (
    <StyleMainHeader>
      <StyledContainer className="divMainUser">
        <section>
          <div className="divBorder">
            <div className="divInternalUser">
              <h1> Olá, {userLogin?.name}</h1>
              <p>{userLogin?.course_module}</p>
            </div>
          </div>
          <SpanUserPage>
            <h2>Tecnologias</h2>
            <button className="buttonOpenModal" onClick={() => setIsOpen(true)}>+</button>
            {isOpen ? <Modal /> : null}
          </SpanUserPage>
          <ListTechnologies />
        </section>
      </StyledContainer>
    </StyleMainHeader>
  );
};
