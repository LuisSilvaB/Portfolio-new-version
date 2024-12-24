
import { Button } from '@/components/ui/button';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import type { Lang } from '@/types/lang.type';
import dictionary from '@/assets/dictionary/dictionary.json'; 
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { IoIosArrowRoundForward } from 'react-icons/io';

type AboutMeProps = {
  lang: Lang;
}

const MeInformation = ({ lang }: AboutMeProps) => {
  const dictionaryData = dictionary.aboutMe;
  const dictionaryContact = dictionary.contactMe;
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className="relative transition-all ease-in-out text-gray-800 w-full max-w-6xl h-full min-h-[500px] lg:min-h-[550px] flex flex-col items-start justify-center gap-3 ms:gap-6 p-4 lg:p-0 "
    >
      <motion.h1
        initial={{ opacity: 0}}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="text-4xl dark:text-white sm:text-5xl font-extrabold tracking-tight leading-tight"
      >
        {dictionaryData.title[lang]}{" "}
        <span className="text-blue-500 dark:text-dark-primary-perzonalized">
          Luis Silva Balladares
        </span>
      </motion.h1>
      
      <motion.div
        initial={{ opacity: 0,  }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        animate={{ opacity: 1 }}
      >
        <TypeAnimation
          className="text-lg dark:text-white min-h-[50px] lg:text-2xl font-semibold tracking-tight leading-tight"
          sequence={[
            dictionaryData.descriptionTyping1[lang],
            1500,
            dictionaryData.descriptionTyping2[lang],
            1500,
          ]}
          wrapper="span"
          speed={60}
          deletionSpeed={20}
          repeat={Infinity}
          omitDeletionAnimation
        />
      </motion.div>
      <motion.p 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      className="text-sm dark:text-white mt-1 ms:mt-4 leading-relaxed max-w-2xl">
        {dictionaryData.description[lang]}
      </motion.p>
      <section className="flex flex-row gap-2 mt-2 sm:mt-0">
        <a target="_blank" href={dictionaryContact.contactUrls[1].url}>
          <Button className="group flex flex-row gap-2">
            <FaLinkedin className="transition-all ease-in-out text-white dark:text-blue-500" />
            <span>Linkedin</span>
          </Button>
        </a>
        <a target="_blank" href={dictionaryContact.contactUrls[0].url}>
          <Button>
            <FaGithub className="transition-all ease-in-out text-white dark:text-black" />
            <span>Github</span>
          </Button>
        </a>
        <a target="_blank" href={dictionaryData.cv[lang].harvard.url}>
          <Button>
            Curriculum
          </Button>
        </a>
        {/* <Popover>
          <PopoverTrigger asChild>
          </PopoverTrigger>
          <PopoverContent side='right' className='w-fit flex flex-row gap-2'>
            <a target="_blank" href={dictionaryData.cv[lang].harvard.url}>
              <Button variant="link" className='dark:bg-dark-primary-perzonalized ring-blue-500 ring-1 dark:ring-0'>
                <span>{dictionaryData.cv[lang].harvard.title}</span>
                <IoIosArrowRoundForward className='-rotate-45'/>
              </Button>
            </a>
            <a target="_blank" href={dictionaryData.cv[lang].classic.url}>
              <Button variant="link" className='dark:bg-dark-primary-perzonalized ring-blue-500 ring-1 dark:ring-0'>  
                <p>{dictionaryData.cv[lang].classic.title}</p>
                <IoIosArrowRoundForward className='-rotate-45' />
              </Button>
            </a>
          </PopoverContent>
        </Popover> */}
      </section>
    </motion.div>
  );
};

export default MeInformation