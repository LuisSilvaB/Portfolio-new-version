
import { Button } from '@/components/ui/button';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import type { Lang } from '@/types/lang.type';
import dictionary from '@/assets/dictionary.json';

type AboutMeProps = {
  lang: Lang;
}

const MeInformation = ({ lang }: AboutMeProps) => {
  const dictionaryData = dictionary.aboutMe;
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className="relative transition-all ease-in-out text-gray-800  w-full max-w-7xl h-full min-h-[500px] lg:min-h-[550px] flex flex-col items-start justify-center gap-6 p-4 lg:p-0 "
    >
      <h1 className="text-2xl dark:text-white lg:text-5xl font-extrabold tracking-tight leading-tight">
        {dictionaryData.title[lang]}{" "}
        <span className="text-blue-500 dark:text-yellow-500">
          Luis Silva Balladares
        </span>
      </h1>
      <TypeAnimation
        className="text-lg dark:text-white lg:text-2xl font-semibold tracking-tight leading-tight"
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
      <p className="text-sm dark:text-white mt-4 leading-relaxed max-w-2xl">
        {dictionaryData.description[lang]}
      </p>
      <section className="flex flex-row gap-2">
        <Button className='group flex flex-row gap-2'>
          <FaLinkedin className="transition-all ease-in-out text-white dark:text-blue-500" /> 
          <span>Linkedin</span>
        </Button>
        <Button>
          <FaGithub className="transition-all ease-in-out text-white dark:text-black" />
          <span>Github</span>
        </Button>
        <Button>Cv</Button>
      </section>
    </motion.div>
  );
};

export default MeInformation