import dictionary from '@/assets/dictionary/dictionary.json'; 
import type { Lang } from "@/types/lang.type";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { ContactSchema, type ContactSchemaType } from "./schema/contactMe.shcema";
import { FormProvider, useForm, type FieldErrors, type SubmitHandler } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import { BiLoaderAlt } from "react-icons/bi";

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
import { useToast } from '@/hooks/use-toast';
import { useState } from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import { createContactSchema } from './utils/generateSchema';
import { motion } from 'framer-motion';

type ContactMeProps = {
  lang: Lang;
}

const ContactMe = ( { lang } : ContactMeProps) => {
  const { toast } = useToast()     
  const [loadingSendMessage, setLoadingSendMessage] = useState<boolean>(false)
  const [wasSending, setWasSending] = useState<boolean>(false)
  const dictionaryData = dictionary.contactMe;
  const dictionaryDataNav = dictionary.navbar;
  const dictionaryDataProjects = dictionary.Projects.projects;
  
  const formMethods = useForm({
    resolver: zodResolver(createContactSchema(lang)),
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

  const onSubmitSendEmail:SubmitHandler<ContactSchemaType> = async (data) => {
    
    await formMethods.trigger();
    
    if (!data && !formMethods.formState.isValid) {
      toast({
        title: "Error",
        description: "Por favor, revisa los campos",
        variant: "destructive",
      })
      return;
    };
    try {
      setLoadingSendMessage(true)
      const response = await fetch(
        "https://formsubmit.co/ajax/luisarmandoballadares@gmail.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            fulname:
              formMethods.getValues("firstName") +
              "" +
              formMethods.getValues("lastName"),
            subject: formMethods.getValues("subject"),
            html: `
                        <div style= {{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
              <div> 
                <p>From</p>
                <p>${formMethods.getValues("from")}</p>
              </div>
              <div> 
                <p>Message</p>
                <p>${formMethods.getValues("message")}</p>
              </div>
            </div>
            `,
          }),
        },
      );
  
      if(response.ok) {
        setLoadingSendMessage(false)
        toast({
          title: dictionaryData.form.messageSend.success.toast.title[lang],
          description: dictionaryData.form.messageSend.success.toast.description[lang],
          variant: "default",
        })
        formMethods.reset();
        setWasSending(true)

        setTimeout(() => {
          setWasSending(false)
        }, 3000);

      } else {
        toast({
          title: "Error",
          description: "No se pudo enviar el mensaje",
          variant: "destructive",
        })
        setLoadingSendMessage(false)
      }
      
    }  catch (error) {
      setLoadingSendMessage(false)
    }
  }

  const onError = (error: FieldErrors<ContactSchemaType>) => {
    toast({
      title: "Error",
      description: "Por favor, revisa los campos",
      variant: "destructive",
    })
  }

  return (
    <div className="relative transition-all ease-in-out  w-full max-w-7xl h-full min-h-[500px] lg:min-h-[650px] flex flex-col items-start justify-center gap-6 px-2  lg:p-0 mt-10 mb-5">
      <div className="w-full flex flex-col-reverse md:flex-row gap-4 h-full  rounded-xl p-1 lg:p-4 text-white ">
        <div className=" flex flex-col items-start justify-start w-full gap-1">
          <div className="flex flex-col w-full items-start lg:justify-center lg:items-start mb-4">
            <motion.h2
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              whileInView={{ opacity: 1, x: 0 }}
              className="uppercase text-4xl text-blue-500 dark:text-dark-primary-perzonalized lg:text-7xl font-poppinsExtraBold w-fit text-start"
            >
              {dictionaryData["title-fist-part"][lang]}
            </motion.h2>
            <motion.h2
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-dark-secondary-perzonalized text-4xl lg:text-7xl font-poppinsExtraBold"
            >
              {dictionaryData["title-second-part"][lang]}
            </motion.h2>
          </div>

          <div className="flex flex-col w-full gap-3 items-start text-gray-800 h-full">
            <div className="bg-gray-100 dark:bg-dark-secondary-perzonalized w-fit h-fit rounded-xl p-4">
              <div className=" w-fit flex flex-row flex-wrap justify-start  items-start gap-4">
                {dictionaryData.contactUrls.map(
                  (
                    url: {
                      icon: string;
                      url: string;
                    },
                    index: number,
                  ) => (
                    <a href={url.url} key={index} target="_blank">
                      <div className="p-3 cursor-pointer flex justify-center text-gray-500 hover:text-blue-500 items-center text-2xl flex-row gap-2 bg-white dark:bg-dark-secondary-perzonalized  dark:text-white rounded-xl h-fit w-fit transition-all ease-in-out duration-300 border">
                        {getIconByName(url.icon as iconType)}
                      </div>
                    </a>
                  ),
                )}
              </div>
            </div>

            <div className="bg-gray-100 dark:bg-dark-secondary-perzonalized rounded-xl items-start flex flex-row w-full h-full p-6 gap-10 ">
              <div className="flex flex-col">
                <p className="font-bold text-lg dark:text-white">
                  {dictionaryData.naviagationTitle[lang]}
                </p>
                <ul className="flex flex-col gap-1 mt-2">
                  {Object.keys(dictionaryDataNav).map(
                    (key: any, index: number) => (
                      <li
                        key={index}
                        className="flex flex-row gap-2 items-center cursor-pointer"
                      >
                        <a
                          href={`#${dictionaryDataNav[key as keyof typeof dictionaryDataNav].id}`}
                        >
                          <p className="text-gray-500 hover:text-blue-600 hover:underline font-medium dark:hover:text-dark-primary-perzonalized transition-all ease-in-out duration-300">
                            {
                              dictionaryDataNav[
                                key as keyof typeof dictionaryDataNav
                              ].title[lang]
                            }
                          </p>
                        </a>
                      </li>
                    ),
                  )}
                </ul>
              </div>
              <div className="flex flex-col">
                <p className="font-bold text-lg dark:text-white">
                  {dictionaryData.projectsTitle[lang]}
                </p>
                <ul className="flex flex-col gap-1 mt-2">
                  {dictionaryDataProjects.map((key: any, index: number) => (
                    <li
                      key={index}
                      className="flex flex-row gap-2 items-center cursor-pointer"
                    >
                      <a href={`#projects`}>
                        <p className="text-gray-500 hover:text-blue-600 hover:underline font-medium dark:hover:text-dark-primary-perzonalized transition-all ease-in-out duration-300"> 
                          {key.title[lang]}
                        </p>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/** Form */}

        <div className="bg-gray-100 dark:bg-transparent p-4 rounded-xl flex-1 min-w-[50%] hidden md:flex flex-row gap-2 items-center">
          <FormProvider {...formMethods}>
            <Form {...formMethods}>
              <form
                className="flex flex-col w-full h-full gap-1 flex-1"
                onSubmit={formMethods.handleSubmit(onSubmitSendEmail, onError)}
              >
                <FormField
                  control={formMethods.control}
                  name="from"
                  render={({ field }) => (
                    <FormItem>
                      {/* <FormLabel>From</FormLabel> */}
                      <FormControl>
                        <Input
                          type="email"
                          placeholder={
                            dictionaryData.form.from.placeholder[lang]
                          }
                          value={field.value}
                          onChange={field.onChange}
                          className="w-full bg-white dark:bg-dark-secondary-perzonalized text-gray-800 dark:text-white  dark:focus-visible:ring-dark-primary-perzonalized border-none"
                        />
                      </FormControl>
                      <FormDescription className="text-gray-800 dark:text-white">
                        {dictionaryData.form.from.helperText[lang]}
                      </FormDescription>
                      <FormMessage className="text-red-500 dark:text-red-300" />
                    </FormItem>
                  )}
                />
                <div className="w-full flex flex-row gap-2 h-fit">
                  <FormField
                    control={formMethods.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem className="w-full h-fit">
                        {/* <FormLabel>First Name</FormLabel> */}
                        <FormControl>
                          <Input
                            type="text"
                            placeholder={
                              dictionaryData.form.firstName.placeholder[lang]
                            }
                            value={field.value}
                            onChange={field.onChange}
                            className="w-full bg-white dark:bg-dark-secondary-perzonalized text-gray-800 dark:text-white  dark:focus-visible:ring-dark-primary-perzonalized border-none"
                          />
                        </FormControl>
                        <FormDescription className="text-gray-800 dark:text-white">
                          {dictionaryData.form.firstName.helperText[lang]}
                        </FormDescription>
                        <FormMessage className="text-red-500 dark:text-red-300" />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={formMethods.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem className="w-full h-fit">
                        {/* <FormLabel>Last Name</FormLabel> */}
                        <FormControl>
                          <Input
                            type="text"
                            placeholder={
                              dictionaryData.form.lastName.placeholder[lang]
                            }
                            value={field.value}
                            onChange={field.onChange}
                            className="w-full bg-white dark:bg-dark-secondary-perzonalized text-gray-800 dark:text-white  dark:focus-visible:ring-dark-primary-perzonalized border-none"
                          />
                        </FormControl>
                        <FormDescription className="text-gray-800 dark:text-white">
                          {dictionaryData.form.lastName.helperText[lang]}
                        </FormDescription>
                        <FormMessage className="text-red-500 dark:text-red-300" />
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
                          placeholder={
                            dictionaryData.form.subject.placeholder[lang]
                          }
                          value={field.value}
                          onChange={field.onChange}
                          className="w-full bg-white dark:bg-dark-secondary-perzonalized text-gray-800 dark:text-white  dark:focus-visible:ring-dark-primary-perzonalized border-none"
                        />
                      </FormControl>
                      <FormDescription className="text-gray-800 dark:text-white">
                        {dictionaryData.form.subject.helperText[lang]}
                      </FormDescription>
                      <FormMessage className="text-red-500 dark:text-red-300" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={formMethods.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem className="flex-1">
                      {/* <FormLabel>Message</FormLabel> */}
                      <FormControl>
                        <Textarea
                          rows={5}
                          placeholder={
                            dictionaryData.form.message.placeholder[lang]
                          }
                          value={field.value}
                          onChange={field.onChange}
                          className="bg-white flex-1 h-full text-gray-800 w-full  dark:bg-dark-secondary-perzonalized dark:text-white  dark:focus-visible:ring-dark-primary-perzonalized border-none "
                        />
                      </FormControl>
                      <FormDescription className="text-gray-800 dark:text-white">
                        {dictionaryData.form.message.helperText[lang]}
                      </FormDescription>
                      <FormMessage className="text-red-500 dark:text-red-300" />
                    </FormItem>
                  )}
                />
                <div className="w-full flex justify-end items-center flex-row gap-3">
                  {loadingSendMessage ? (
                    <BiLoaderAlt className="animate-spin text-gray-800 dark:text-dark-primary-perzonalized" />
                  ) : null}
                  {wasSending ? (
                    <span className='flex flex-row gap-2 items-center text-xs'>
                      <p>{dictionaryData.form.messageSend.success[lang]}</p>
                      <FaCheckCircle className="text-green-500" />
                    </span>
                  ) : null}
                  <Button
                    variant={"default"}
                    className=" font-bold hover:border-gray-600  hover:border w-[40%] dark:bg-dark-primary-perzonalized  dark:hover:border-white dark:hover:bg-orange-600 dark:text-white"
                  >
                    <p>{dictionaryData.submitButton[lang]}</p>
                    <IoIosArrowRoundForward />
                  </Button>
                </div>
              </form>
            </Form>
          </FormProvider>
        </div>
      </div>
      <div className="w-full flex justify-between px-5 dark:text-white text-xs lg:text-lg">
        <p>{dictionaryData.copyright[lang]}</p>
        <p>Trujillo 2024.</p>
      </div>
    </div>
  );
}

export default ContactMe