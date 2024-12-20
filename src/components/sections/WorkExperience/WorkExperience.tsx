import ExperiencieCard from './components/ui/ExperiencieCard';
import type { Lang } from '@/types/lang.type';
import dictionary from '@/assets/dictionary/dictionary.json'; 
import { motion } from 'framer-motion';

type WorkExperienceProps = {
  lang: Lang;
}

const WorkExperience = ({ lang }: WorkExperienceProps) => {
  const dictionaryData = dictionary.workExperience;
  return (
    <div
      className={` transition-transform duration-1000 ease-[cubic-bezier(0.17, 0.55, 0.55, 1)] delay-500 text-gray-800 w-full max-w-6xl h-full min-h-[500px] lg:min-h-[600px] flex flex-col items-start justify-start gap-6 px-4 lg:px-0 pt-20`}
    >
      <div className="flex flex-col">
        <motion.h2
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
          whileInView={{ opacity: 1, x: 0 }}
          className="text-4xl uppercase lg:text-6xl font-poppinsExtraBold font-bold text-blue-600 dark:text-dark-primary-perzonalized lg:mb-2"
        >
          {dictionaryData.title["title-first-part"][lang]}
        </motion.h2>
        <motion.h2
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl uppercase lg:text-6xl font-poppinsExtraBold font-bold text-gray-600 dark:text-dark-secondary-perzonalized mb-4 lg:mb-20"
        >
          {dictionaryData.title["title-second-part"][lang]}
        </motion.h2>
      </div>
      <section className="relative flex flex-col gap-20 lg:gap-4">
        {dictionaryData.experiences.map((experience, index) => (
          <ExperiencieCard
            key={index}
            id={index + 1}
            lang={lang}
            experience={experience}
          />
        ))}
      </section>
    </div>
  );
};

export default WorkExperience