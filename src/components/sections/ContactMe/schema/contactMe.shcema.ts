import { z } from 'zod';

const contactSchema = z.object({
  from: z.string().email({
    message: "Debe ser una dirección de correo válida",
  }),
  to: z.string().email({
    message: "Debe ser una dirección de correo válida",
  }),
  firstName: z.string().min(3, {
    message: "El nombre debe tener al menos 3 caracteres",
  }),
  lastName: z.string().min(3, {
    message: "El apellido debe tener al menos 3 caracteres",
  }),
  subject: z.string().min(3, {
    message: "El asunto debe tener al menos 3 caracteres",
  }),
  message: z.string().min(3, {
    message: "El mensaje debe tener al menos 3 caracteres",
  }),
});

export const ContactSchema = contactSchema;
export type ContactSchemaType = z.infer<typeof contactSchema>;