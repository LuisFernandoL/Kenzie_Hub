import { useContext } from "react";
import { useForm } from "react-hook-form";
import { TechnologiesContext } from "../../../../providers/TechnologiesContext";
import { UserContext } from "../../../../providers/UserContext";
import { SpanModalEddit, StyleFormModalEddit } from "./StyleFomrModalEddit";
import { StyleButtonsGrey, StyleButtonsRoge } from "../../../../Styles/button";

export const FormModal = () => {
  const { register, handleSubmit, reset } = useForm();

  const { edditTechs, deleteTechs } = useContext(TechnologiesContext);
  const { techsId } = useContext(UserContext);

  const submit = async (FormData) => {
    await edditTechs(FormData);
    reset();
  };

  return (
    <>
      <StyleFormModalEddit onSubmit={handleSubmit(submit)}>
        <p>Status</p>
        <select {...register("status")}>
          <option value="">Escolha uma</option>
          <option value="Iniciante">Iniciante</option>
          <option value="Intermediário">Intermediário</option>
          <option value="Avançado">Avançado</option>
        </select>
        <span>
          <StyleButtonsRoge type="submit">Salvar alterações</StyleButtonsRoge>
        </span>
      </StyleFormModalEddit>
      <SpanModalEddit>
        <StyleButtonsGrey type="submit" onClick={() => deleteTechs(techsId)}>
          Excluir
        </StyleButtonsGrey>
      </SpanModalEddit>
    </>
  );
};
