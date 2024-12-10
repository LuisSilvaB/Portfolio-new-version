import type { Lang } from "@/types/lang.type";
import type { ExperienceType } from "../../types/WorkExperience.type";

type ExperiencieCardProps = {
  id: number;
  lang: Lang;
  experience: ExperienceType;
}

const ExperienceCard = ({ id, lang, experience }: ExperiencieCardProps) => {

  return (
    <div className="w-full min-h-[550px] lg:min-h-[350px] flex flex-row transition-all ease-in-out duration-100">
      {/** Number */}
      <div className="hidden w-[35%] lg:flex items-start pt-8">
        <p className="sticky top-36 text-7xl font-bold text-blue-600 dark:text-yellow-500">
          0{id}
        </p>
      </div>
      {/** Description */}
      <div className="w-full dark:text-white">
        <h3 className="text-xl font-bold text-blue-500 dark:text-yellow-500">{experience.title[lang]}</h3>
        <h2 className="text-md text-gray-600 ">{experience.date[lang]}</h2>
        <p className="mt-4">
          {experience.description?.[lang]}
        </p>
        <br/>
        <h2 className="text-md font-bold ">{experience.techStack?.title[lang]}</h2>
        <p className="mt-4">
          {experience.techStack?.description[lang]}
        </p>
      </div>
    </div>
  );
};

export default ExperienceCard;