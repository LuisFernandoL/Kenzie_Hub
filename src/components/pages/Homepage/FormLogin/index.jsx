import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Inputs } from "../../../Inputs";
import { loginUserSchema } from "./Schema";
import { useContext } from "react";
import { LinkStyles, StyleSpanLogin } from "./StyleMainLogin";
import { UserContext } from "../../../providers/UserContext";
import { StyleButtonsRoge } from "../../../Styles/button";

export const FormLogin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(loginUserSchema),
  });



  const { login } = useContext(UserContext);

  const submit = async (formData) => {
    login(formData);
    reset();
  };
  return (
    <>
      <form onSubmit={handleSubmit(submit)}>
        <h1>Login</h1>
        <Inputs
          label="Email"
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
        <StyleButtonsRoge type="submit">
          Entrar
        </StyleButtonsRoge>
        <StyleSpanLogin>
          <p>Ainda não possui uma conta?</p>
          <LinkStyles to="/register" type="button">
            Cadastre-se
          </LinkStyles>
        </StyleSpanLogin>
      </form>
    </>
  );
};
