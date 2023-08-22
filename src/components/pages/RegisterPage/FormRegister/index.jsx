import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { addUserSchema } from "./addUserSchema";
import { Inputs } from "../../../Inputs";
import { StyleSpanRegister } from "./StyleMainRegister";
import { useContext } from "react";
import { UserContext } from "../../../providers/UserContext";
import { StyleButtonsRoge } from "../../../Styles/button";

export const FormRegister = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(addUserSchema),
  });

  const { createNewUser } = useContext(UserContext);

  const submit = async (formData) => {
    await createNewUser(formData);
    reset();
  };
  return (
    <>
      <form onSubmit={handleSubmit(submit)} noValidate>
        <div className="divFormregister">
          <h1>Crie sua conta</h1>
          <h3>Rapido e grátis, vamos nessa</h3>
        </div>
        <Inputs
          label="Nome"
          type="text"
          placeholder="Nome"
          {...register("name")}
          error={errors?.name}
        />

        <Inputs
          label="Email"
          type="email"
          placeholder="Email"
          {...register("email")}
          error={errors?.email}
        />

        <Inputs
          label="Senha"
          type="password"
          placeholder="Senha"
          {...register("password")}
          error={errors?.password}
        />

        <Inputs
          label=" Comfiem sua senha"
          type="password"
          placeholder="Comfiem sua senha"
          {...register("confirm")}
          error={errors?.confirm}
        />

        <Inputs
          label="Bio"
          type="text"
          placeholder="Bio"
          {...register("bio")}
          error={errors?.bio}
        />

        <Inputs
          label="Contato"
          type="text"
          placeholder="Contato"
          {...register("contact", {
            onChange(e) {
              let value = e.target.value;
              value = value.replace(/\D/g, "");
              e.target.value = value;
              return e;
            },
          })}
          error={errors?.contact}
        />
        <StyleSpanRegister className="spanFormRegister">
          <p className="paragraphForm"> Selecionar módulo</p>
          <select {...register("course_module")}>
            <option value="">Escolha um módulo</option>
            <option value="Primeiro módulo (Introdução ao Frontend)">{`Primeiro módulo (Introdução ao Frontend)`}</option>
            <option value="Segundo módulo (Frontend Avançado)">{`Segundo módulo (Frontend Avançado)`}</option>
            <option value="Terceiro Módulo (Frontend avançado)">{`Terceiro Módulo (Frontend avançado)`}</option>
            <option value="Quarto módulo (Backend Avançado)">{`Quarto módulo (Backend Avançado)`}</option>
          </select>
          <StyleButtonsRoge type="submit">Cadastrar</StyleButtonsRoge>
        </StyleSpanRegister>
      </form>
    </>
  );
};
