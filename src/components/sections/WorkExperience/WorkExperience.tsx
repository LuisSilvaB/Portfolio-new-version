import ExperiencieCard from './components/ui/ExperiencieCard';
import type { Lang } from '@/types/lang.type';
import dictionary from '@/assets/dictionary/dictionary.json'; 


type WorkExperienceProps = {
  lang: Lang;
}

const WorkExperience = ({ lang }: WorkExperienceProps) => {
  const dictionaryData = dictionary.workExperience;
  return (

    <div
      className={` transition-transform duration-1000 ease-[cubic-bezier(0.17, 0.55, 0.55, 1)] delay-500 text-gray-800 w-full max-w-6xl h-full min-h-[500px] lg:min-h-[600px] flex flex-col items-start justify-start gap-6 px-4 lg:px-0 pt-20`}
    >
      <h2 className="text-2xl uppercase lg:text-4xl font-bold text-gray-600 dark:text-white mb-4 lg:mb-20">
        {dictionaryData.title[lang]}
      </h2>
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