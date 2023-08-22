import { z } from "zod";

export const modalSchema = z.object({

    status:z.string(),
    title: z.string()
    .nonempty("O nome é obrigatório.")
    .min(2, "O nome deve conter ao menos 2 carácteres"),
}).refine(({title, status}) => title !== status,{
  message:"O titulo e a status não podem ser iguais",
  path: ['status']
});
