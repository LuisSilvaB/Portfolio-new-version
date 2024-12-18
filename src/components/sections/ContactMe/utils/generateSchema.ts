import { z } from "zod";
import type { Lang } from "@/types/lang.type";
import dictionary from "@/assets/dictionary/dictionary.json";

export const createContactSchema = (lang: Lang) => {
  const dictionaryData = dictionary.contactMe.form;
  return z.object({
    from: z.string().email({
      message: dictionaryData.from.errorMessages[lang],
    }),
    to: z.string().email({
      message: dictionaryData.to.errorMessages[lang],
    }),
    firstName: z.string().min(3, {
      message: dictionaryData.firstName.errorMessages[lang],
    }),
    lastName: z.string().min(3, {
      message: dictionaryData.lastName.errorMessages[lang],
    }),
    subject: z.string().min(3, {
      message: dictionaryData.subject.errorMessages[lang],
    }),
    message: z.string().min(3, {
      message: dictionaryData.message.errorMessages[lang],
    }),
  });
};

export type ContactSchemaType = z.infer<ReturnType<typeof createContactSchema>>;