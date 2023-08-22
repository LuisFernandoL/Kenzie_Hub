import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { Inputs } from "../../Inputs";
import { modalSchema } from "./ModalSchema";
import { TechnologiesContext } from "../../providers/TechnologiesContext";
import { StyleFormModal } from "./StyleFormModal";

export const FormNewTechnologie = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(modalSchema),
  });

  const { newTechnologie } = useContext(TechnologiesContext);

  const submit = async (formData) => {
    await newTechnologie(formData);
    reset();
  };
  return (
    <StyleFormModal onSubmit={handleSubmit(submit)}>
      <div className="divInputsModal">
        <Inputs
          type="text"
          label="Nome da tecnologia"
          placeholder="Tecnologia"
          {...register("title")}
          error={errors?.title}
          />
        <select {...register("status")}>
          <option value="">Escolha um Status</option>
          <option value="Iniciante">Iniciante</option>
          <option value="Intermediário">Intermediário</option>
          <option value="Avançado">Avançado</option>
        </select>
        <button type="submit" >Cadastrar</button>
      </div>
    </StyleFormModal>
  );
};
