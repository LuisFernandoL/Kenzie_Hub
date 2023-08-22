import { useContext, useEffect, useRef } from "react";
import { UserContext } from "../../../providers/UserContext";
import { ModalConteinerEddit } from "./ModalEddit";
import { TechnologiesContext } from "../../../providers/TechnologiesContext";
import { FormModal } from "./FormModal";

export const MOdalEddit = () => {
  const { setEdditOpen, techs } = useContext(UserContext);
  const buttonRef = useRef(null);
  const modalRef = useRef(null);

  useEffect(() => {
    const handleOutclick = (e) => {
      if (!modalRef.current?.contains(e.target)) {
        setEdditOpen(false);
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
    <ModalConteinerEddit role="dialog">
      <div ref={modalRef}>
        <header>
          <p>Tecnologia Detalhes</p>
          <button ref={buttonRef} onClick={() => setEdditOpen(false)}>
            X
          </button>
        </header>
       <FormModal/>
      </div>
    </ModalConteinerEddit>
  );
};
