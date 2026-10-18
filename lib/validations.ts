import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(2, "El nombre debe tener al menos 2 caracteres").max(100),
  email: z.string().email("Introduce un correo electrónico válido"),
  projectType: z.string().min(1, "Selecciona un tipo de proyecto"),
  budget: z.string().min(1, "Selecciona un rango de presupuesto"),
  message: z.string().min(10, "El mensaje debe tener al menos 10 caracteres").max(1000),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
