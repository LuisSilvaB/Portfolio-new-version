import type { Lang } from "@/types/lang.type";
import dictionary from '@/assets/dictionary.json';
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { ContactSchema } from "./schema/contactMe.shcema";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"

type ContactMeProps = {
  lang: Lang;
}

type FieldValues = Parameters<typeof useForm>[0]

const ContactMe = ( { lang } : ContactMeProps) => {
  const dictionaryData = dictionary.contactMe;
  const formMethods = useForm({
    resolver: zodResolver(ContactSchema),
    mode: "all",
    defaultValues: {
      from: "",
      to: "luisarmandoballadares@gmail.com",
      subject: "",
      message: "",
    },
  })
  return (
    <div className="relative transition-all ease-in-out text-gray-800 w-full max-w-7xl h-full min-h-[500px] lg:min-h-[550px] flex flex-col items-start justify-center gap-6 p-4 lg:p-0 mt-10 mb-5">
      <h2 className="uppercase text-2xl lg:text-7xl font-satoshi font-extrabold tracking-tight leading-tight w-full text-start">
        {dictionaryData.title[lang]}
      </h2>
      <div className="w-full flex flex-row items-start justify-start gap-4 h-full bg-gray-100 rounded-xl p-4 lg:p-4 text-white">
        <div className="flex-1 flex flex-col gap-4">

        </div>
        <div className="bg-gray-800 p-4 rounded-xl flex flex-row gap-2 items-center">
          <FormProvider {...formMethods}>
            <Form {...formMethods}>
              <form className="flex flex-col gap-4">
                <FormField 
                  control={formMethods.control}
                  name="from"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>From</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="From"
                          value={field.value}
                          onChange={field.onChange}
                          className="bg-white text-gray-800"
                        />
                      </FormControl>
                      <FormDescription className="text-white">
                        Insert your email address
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="w-full flex flex-col gap-4">
                  <Label>Correo de contacto</Label>
                  <Input
                    type="email"
                    placeholder="Correo de contacto"
                    className="bg-white text-gray-800"
                  />
                </div>
                <div className="w-full flex flex-col gap-4">
                  <Label>Asunto</Label>
                  <Input
                    type="text"
                    placeholder="Asunto"
                    className="bg-white text-gray-800"
                  />
                </div>
                <div className="w-full flex flex-col gap-4">
                  <Label>Mensaje</Label>
                  <Textarea
                    rows={5}
                    cols={50}
                    placeholder="Mensaje"
                    className="bg-white text-gray-800"
                  />
                </div>
                <div className="w-full flex justify-end">
                  <Button className="w-fit bg-blue-500 hover:bg-blue-700 text-white font-bold">
                    Enviar
                  </Button>
                </div>
              </form>
            </Form>
          </FormProvider>
        </div>
      </div>
      <div className="w-full flex justify-between">
        <p>Copyright 2024. All rights reserved.</p>
        <p>Trujillo 2024.</p>
      </div>
    </div>
  );
}

export default ContactMe