import { z } from "zod";

export const addUserSchema = z.object({
  email: z.string()
    .nonempty("O e-mail é obrigatório.")
    .email("O e-mail digitado é invalido "),
  password: z.string()
    .nonempty()
    .min(8, 'Minimo 8 caracteres')
    .regex(/(?=.*?[A-Z])/,"Necessário pelo menos uma letra maiúscula")
    .regex(/(?=.*?[a-z])/, 'Necessário pelo menos uma letra minuscúla')
    .regex(/(?=.*?[0-9])/, 'Necessário pelo menos um número')
    .regex(/(?=.*?[#?!@$%^&*-])/, 'Necessário pelo menos um caractere especial'),
  confirm:z.string()
    .min(8,'Confirmar senha') ,
  name: z.string()
    .nonempty("O nome é obrigatório.")
    .min(2, "O nome deve conter ao menos 2 carácteres"),
  bio: z.string()
    .nonempty("A bio é obrigatória ")
    .min(10, "A bio preccisa ter no minimo 10 caracteres."),
  contact: z.string()
    .length(11, "O numero precisa de ao menos 11 digitos "),
  course_module: z.string().nonempty("Você precisa selecionar, uma opção"),
}).refine(({password, confirm}) => confirm === password,{
  message:"A confirmação e a senha precisam ser iguais",
  path: ['confirm']
});
