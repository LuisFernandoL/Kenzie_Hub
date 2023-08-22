import { useContext, useEffect, useRef } from "react";
import { UserContext } from "../providers/UserContext";
import { ModalConteiner } from "./ModalContainer";
import { FormNewTechnologie } from "./NewTechnologie";

export const Modal = () => {
  const { setIsOpen } = useContext(UserContext);
  const buttonRef = useRef(null);
  const modalRef = useRef(null);

  useEffect(() => {
    const handleOutclick = (e) => {
      if (!modalRef.current?.contains(e.target)) {
        setIsOpen(false);
      }
    };
    window.addEventListener("mousedown", handleOutclick);
    return () => {
      window.removeEventListener("mousedown", handleOutclick);
    };
  }, []);

  useEffect(() => {
    const handleKeydow = (e) => {
      if (e.key === "Escape") {
        buttonRef.current?.click();
      }
    };

    window.addEventListener("keydown", handleKeydow);
    return () => {
      window.removeEventListener("keydown", handleKeydow);
    };
  });

  return (
    <>
      <ModalConteiner role="dialog">
        <div className="divModal" ref={modalRef}>
          <header>
            <p>Cadastrar Tecnologia</p>
            <button
              className="buttonClose"
              ref={buttonRef}
              onClick={() => setIsOpen(false)}
            >
              X
            </button>
          </header>
          <FormNewTechnologie />
        </div>
      </ModalConteiner>
    </>
  );
};
