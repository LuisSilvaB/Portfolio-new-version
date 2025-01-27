import ExperiencieCard from './components/ui/ExperiencieCard';
import type { Lang } from '@/types/lang.type';
import dictionary from '@/assets/dictionary/dictionary.json'; 
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

type WorkExperienceProps = {
  lang: Lang;
}

const WorkExperience = ({ lang }: WorkExperienceProps) => {
  const dictionaryData = dictionary.workExperience;
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, {
    margin: "-50px 0px -50px 0px",
  });

  return (
    <motion.div
      ref={ref}
      className={` transition-transform duration-1000 ease-[cubic-bezier(0.17, 0.55, 0.55, 1)] delay-500 text-gray-800 w-full max-w-6xl h-full min-h-[500px] lg:min-h-[600px] flex flex-col items-start justify-start gap-6 px-4 lg:px-0 pt-20`}
    >
      <div className="flex flex-col">
        <h2
          className={`text-4xl uppercase lg:text-6xl font-poppinsExtraBold font-bold text-blue-600 dark:text-dark-primary-perzonalized lg:mb-2 duration-300 ${isInView ? "translate-x-0 opacity-100" : "translate-x-[100px] opacity-0"}`}
        >
          {dictionaryData.title["title-first-part"][lang]}
        </h2>
        <h2
          className={`text-4xl uppercase lg:text-6xl font-poppinsExtraBold font-bold text-gray-600 dark:text-dark-secondary-perzonalized mb-4 lg:mb-20 duration-300 ${isInView ? "translate-y-0 opacity-100" : "translate-y-[100px] opacity-0"}`}
        >
          {dictionaryData.title["title-second-part"][lang]}
        </h2>
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
    </motion.div>
  );
};

export default WorkExperience