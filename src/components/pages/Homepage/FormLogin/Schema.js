import { z } from "zod";

export const loginUserSchema = z.object({
  email: z.string()
    .nonempty("O e-mail é obrigatório.")
    .email("O e-mail digitado é invalido "),
  password: z.string()
    .nonempty()
    .min(8, 'Minimo 8 caracteres'),
})
