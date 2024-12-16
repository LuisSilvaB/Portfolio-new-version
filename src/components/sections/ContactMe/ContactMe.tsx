import dictionary from '@/assets/dictionary/dictionary.json'; 
import type { Lang } from "@/types/lang.type";
import { IoIosArrowRoundForward } from "react-icons/io";
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
  FormMessage,
} from "@/components/ui/form"
import { getIconByName } from '@/utils/getIconByName';
import type { iconType } from '@/types/icon.type';

type ContactMeProps = {
  lang: Lang;
}

const ContactMe = ( { lang } : ContactMeProps) => {
  const dictionaryData = dictionary.contactMe;
  const dictionaryDataNav = dictionary.navbar;
  const dictionaryDataProjects = dictionary.Projects.projects;
  const formMethods = useForm({
    resolver: zodResolver(ContactSchema),
    mode: "all",
    defaultValues: {
      from: "",
      firstName: "",
      lastName: "",
      to: "luisarmandoballadares@gmail.com",
      subject: "",
      message: "",
    },
  })

  return (
    
    <div className="relative transition-all ease-in-out text-gray-800 w-full max-w-7xl h-full min-h-[500px] lg:min-h-[550px] flex flex-col items-start justify-center gap-6 p-2  lg:p-0 mt-10 mb-5">
      <div className="w-full flex flex-col-reverse md:flex-row gap-4 h-full  rounded-xl p-1 lg:p-4 text-white ">
       
        <div className=" flex flex-col items-start justify-start w-full gap-3">
          <h2 className="uppercase text-2xl text-blue-500 dark:text-yellow-500 lg:text-7xl  w-fit font-satoshi font-extrabold tracking-tight leading-tight text-start">
            {dictionaryData.title[lang]}
          </h2>
          <div className="flex flex-col w-full gap-3 items-start text-gray-800">
            <div className="bg-gray-100 dark:bg-gray-800 w-full h-fit rounded-xl p-6">
              <div className="flex-1 flex flex-row flex-wrap justify-start  items-start gap-4">
                {dictionaryData.contactUrls.map(
                  (
                    url: {
                      icon: string;
                      url: string;
                    },
                    index: number,
                  ) => (
                    <a href={url.url} key={index} target='_blank'>
                      <div
                        className="p-5 cursor-pointer flex justify-center text-gray-500 hover:text-blue-500 items-center text-3xl flex-row gap-2 bg-white dark:bg-[#060c14] dark:text-white rounded-xl h-fit w-fit transition-all ease-in-out duration-300"
                      >
                        {getIconByName(url.icon as iconType)}
                      </div>
                    </a>
                  ),
                )}
              </div>
            </div>

            <div className="bg-gray-100 dark:bg-gray-800 rounded-xl items-start flex flex-row w-full p-6 gap-10 ">
              <div className="flex flex-col">
                <p className="font-bold text-lg font-satoshi dark:text-white">
                  Navegación
                </p>
                <ul className="flex flex-col gap-1 mt-2">
                  {Object.keys(dictionaryDataNav).map(
                    (key: any, index: number) => (
                      <li
                        key={index}
                        className="flex flex-row gap-2 items-center cursor-pointer"
                      >
                        <p className="text-gray-500 font-normal">
                          {
                            dictionaryDataNav[
                              key as keyof typeof dictionaryDataNav
                            ][lang]
                          }
                        </p>
                      </li>
                    ),
                  )}
                </ul>
              </div>
              <div className="flex flex-col">
                <p className="font-bold text-lg font-satoshi dark:text-white">
                  Proyectos
                </p>
                <ul className="flex flex-col gap-1 mt-2">
                  {dictionaryDataProjects.map((key: any, index: number) => (
                    <li
                      key={index}
                      className="flex flex-row gap-2 items-center cursor-pointer"
                    >
                      <p className="text-gray-500 font-normal">
                        {key.title[lang]}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/** Form */}
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-xl flex-1 min-w-[50%] hidden md:flex flex-row gap-2 items-center">
          <FormProvider {...formMethods}>
            <Form {...formMethods}>
              <form className="flex flex-col w-full h-full gap-1 flex-1">
                <FormField
                  control={formMethods.control}
                  name="from"
                  render={({ field }) => (
                    <FormItem>
                      {/* <FormLabel>From</FormLabel> */}
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="From"
                          value={field.value}
                          onChange={field.onChange}
                          className="w-full bg-white text-gray-800 "
                        />
                      </FormControl>
                      <FormDescription className="text-gray-800 dark:text-white">
                        Insert your email address
                      </FormDescription>
                      <FormMessage className="text-gray-800 dark:text-red-300" />
                    </FormItem>
                  )}
                />
                <div className="w-full flex flex-1 flex-row gap-2">
                  <FormField
                    control={formMethods.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        {/* <FormLabel>First Name</FormLabel> */}
                        <FormControl>
                          <Input
                            type="text"
                            placeholder="First Name"
                            value={field.value}
                            onChange={field.onChange}
                            className="bg-white text-gray-800 w-full"
                          />
                        </FormControl>
                        <FormDescription className="text-gray-800 dark:text-white">
                          Write your first name
                        </FormDescription>
                        <FormMessage className="text-gray-800 dark:text-red-300" />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={formMethods.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        {/* <FormLabel>Last Name</FormLabel> */}
                        <FormControl>
                          <Input
                            type="text"
                            placeholder="Last Name"
                            value={field.value}
                            onChange={field.onChange}
                            className="bg-white text-gray-800 flex-1 w-full"
                          />
                        </FormControl>
                        <FormDescription className="text-gray-800 dark:text-white">
                          Write your last name
                        </FormDescription>
                        <FormMessage className="text-gray-800 dark:text-red-300" />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={formMethods.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      {/* <FormLabel>Subject</FormLabel> */}
                      <FormControl>
                        <Input
                          type="text"
                          placeholder="Subject"
                          value={field.value}
                          onChange={field.onChange}
                          className="bg-white text-gray-800"
                        />
                      </FormControl>
                      <FormDescription className="text-gray-800 dark:text-white">
                        Write your subject
                      </FormDescription>
                      <FormMessage className="text-gray-800 dark:text-red-300" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={formMethods.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      {/* <FormLabel>Message</FormLabel> */}
                      <FormControl>
                        <Textarea
                          rows={5}
                          cols={55}
                          placeholder="Message"
                          value={field.value}
                          onChange={field.onChange}
                          className="bg-white text-gray-800 "
                        />
                      </FormControl>
                      <FormDescription className="text-gray-800 dark:text-white">
                        Write your message
                      </FormDescription>
                      <FormMessage className="text-gray-800 dark:text-red-300" />
                    </FormItem>
                  )}
                />
                <div className="w-full flex justify-end">
                  <Button
                    variant={"ghost"}
                    className="w-fit text-gray-600 font-bold hover:border-gray-600 hover:border dark:text-white dark:hover:border-white dark:hover:bg-transparent"
                  >
                    <p>ENVIAR</p>
                    <IoIosArrowRoundForward />
                  </Button>
                </div>
              </form>
            </Form>
          </FormProvider>
        </div>
      </div>
      <div className="w-full flex justify-between px-5 dark:text-white">
        <p>Copyright 2024. All rights reserved.</p>
        <p>Trujillo 2024.</p>
      </div>
    </div>
  );
}

export default ContactMe